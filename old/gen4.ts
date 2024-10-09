import * as fs from "node:fs";
import * as path from "node:path";

const DEBUG = false;

function log(message: string): void {
	if (DEBUG) {
		console.log(message);
	}
}

interface ImportedType {
	name: string;
	path: string;
}

function findImportedTypes(fileContent: string): ImportedType[] {
	const importRegex =
		/import\s+(?:type\s+)?\{([^}]+)\}\s+from\s+['"]([^'"]+)['"]/g;
	const imports: ImportedType[] = [];
	let match: RegExpExecArray | null;
	match = importRegex.exec(fileContent);
	while (match !== null) {
		const types = match[1].split(",").map((t) => t.trim());
		const importPath = match[2];
		for (const type of types) {
			imports.push({ name: type, path: importPath });
		}
		match = importRegex.exec(fileContent);
	}
	return imports;
}

function resolveFeatherIconNames(
	imports: ImportedType[],
	currentFilePath: string,
): string[] {
	const featherIconsImport = imports.find((imp) =>
		imp.path.includes("FeatherIcons"),
	);
	if (!featherIconsImport) return [];

	const importedFilePath = path.resolve(
		path.dirname(currentFilePath),
		`${featherIconsImport.path}.ts`,
	);
	if (!fs.existsSync(importedFilePath)) return [];

	const importedFileContent = fs.readFileSync(importedFilePath, "utf8");
	const featherIconNamesMatch = importedFileContent.match(
		/export\s+const\s+FeatherIconNames\s*=\s*\[([\s\S]*?)\]\s*as\s+const/,
	);

	if (featherIconNamesMatch) {
		return featherIconNamesMatch[1]
			.split(",")
			.map((icon) => icon.trim().replace(/['"]/g, ""))
			.filter((icon) => icon !== "");
	}

	return [];
}

function generateDeclarations(fileContent: string, filePath: string): string {
	let output = "";
	const imports = findImportedTypes(fileContent);

	const customElementMatch = fileContent.match(
		/@customElement\s*\(\s*["']([^"']+)["']\s*\)/,
	);
	if (customElementMatch) {
		const elementName = customElementMatch[1];
		log(`Found custom element: ${elementName}`);

		const propertyRegex =
			/@property\s*\(\s*\{[^}]*\}\s*\)\s*(override\s+)?([\w]+)(\s*:\s*([^;=]+))?(\s*=\s*([^;]+))?/g;
		let properties = "";
		let match: RegExpExecArray | null;
		match = propertyRegex.exec(fileContent);
		while (match !== null) {
			const isOverride = match[1] !== undefined;
			const propertyName = match[2];
			log(`Found property: ${propertyName}${isOverride ? " (override)" : ""}`);

			let propertyType = match[4] ? match[4].trim() : "any";

			if (
				propertyName === "name" &&
				propertyType.includes("FeatherIconNames")
			) {
				const iconNames = resolveFeatherIconNames(imports, filePath);
				if (iconNames.length > 0) {
					propertyType = iconNames.map((name) => `'${name}'`).join(" | ");
				}
			} else if (propertyType === "any" && match[6]) {
				const defaultValue = match[6].trim();
				if (defaultValue.startsWith('"') || defaultValue.startsWith("'")) {
					propertyType = "string";
				} else if (defaultValue === "true" || defaultValue === "false") {
					propertyType = "boolean";
				} else if (!Number.isNaN(Number(defaultValue))) {
					propertyType = "number";
				}
			}

			// Handle type conversion from Lit types to TypeScript types
			if (propertyType === "String") propertyType = "string";
			if (propertyType === "Number") propertyType = "number";
			if (propertyType === "Boolean") propertyType = "boolean";

			properties += `      ${propertyName}?: ${propertyType};\n`;
			match = propertyRegex.exec(fileContent);
		}

		// Find atomEvent
		const atomEventMatch = fileContent.match(
			/static\s+atomEvent\s*:\s*AtomEventKey\s*=\s*["'](\w+)["']/,
		);
		if (atomEventMatch) {
			const event = atomEventMatch[1];
			properties += `      on${event.charAt(0).toUpperCase() + event.slice(1)}?: (event: CustomEvent) => void;\n`;
		}

		if (properties) {
			output += `    "${elementName}": {\n${properties}    };\n`;
		} else {
			log(`No properties found for ${elementName}, skipping.`);
		}
	} else {
		log("No @customElement decorator found");
	}

	return output;
}

function processFile(filePath: string): string {
	log(`Processing file: ${filePath}`);
	const fileContent = fs.readFileSync(filePath, "utf8");
	return generateDeclarations(fileContent, filePath);
}

function processDirectory(directoryPath: string): string {
	log(`Processing directory: ${directoryPath}`);
	let output = "";
	const files = fs.readdirSync(directoryPath);
	for (const file of files) {
		const filePath = path.join(directoryPath, file);
		if (fs.statSync(filePath).isDirectory()) {
			output += processDirectory(filePath);
		} else if (path.extname(file) === ".ts" && !file.endsWith(".d.ts")) {
			output += processFile(filePath);
		}
	}
	return output;
}

const directoryToProcess = "./src/atom/components";
const outputPath = path.join(process.cwd(), "atom-jsx.d.ts");

const declarations = `declare namespace JSX {
  interface IntrinsicElements {
${processDirectory(directoryToProcess)}  }
}
`;

fs.writeFileSync(outputPath, declarations);
console.log(`Generated declarations file: ${outputPath}`);
