import * as fs from "fs";
import * as path from "path";

function generateDeclarations(fileContent: string): string {
	let output = "";

	// Find custom element name
	const customElementMatch = fileContent.match(
		/@customElement\s*\(\s*["']([^"']+)["']\s*\)/,
	);
	if (customElementMatch) {
		const elementName = customElementMatch[1];
		console.log(`Found custom element: ${elementName}`);

		// Find properties
		const propertyRegex =
			/@property\s*\(\s*\{[^}]*\}\s*\)\s*([\w]+)(\s*:\s*([^;=]+))?(\s*=\s*([^;]+))?/g;
		let properties = "";
		let match;
		while ((match = propertyRegex.exec(fileContent)) !== null) {
			const propertyName = match[1];
			console.log(`Found property: ${propertyName}`);

			// Try to find the type of the property
			let propertyType = match[3] ? match[3].trim() : "any";

			// If type is not explicitly declared, try to infer from the default value
			if (propertyType === "any" && match[5]) {
				const defaultValue = match[5].trim();
				if (defaultValue.startsWith('"') || defaultValue.startsWith("'")) {
					propertyType = "string";
				} else if (defaultValue === "true" || defaultValue === "false") {
					propertyType = "boolean";
				} else if (!isNaN(Number(defaultValue))) {
					propertyType = "number";
				}
			}

			// Clean up union types
			propertyType = propertyType.replace(/\s*\|\s*/g, " | ");

			properties += `      ${propertyName}?: ${propertyType};\n`;
		}

		// Only add the element if it has properties
		if (properties) {
			output += `    "${elementName}": {\n${properties}    };\n`;
		} else {
			console.log(`No properties found for ${elementName}, skipping.`);
		}
	} else {
		console.log("No @customElement decorator found");
	}

	return output;
}

function processFile(filePath: string): string {
	console.log(`Processing file: ${filePath}`);
	const fileContent = fs.readFileSync(filePath, "utf8");
	return generateDeclarations(fileContent);
}

function processDirectory(directoryPath: string): string {
	console.log(`Processing directory: ${directoryPath}`);
	let output = "";
	const files = fs.readdirSync(directoryPath);
	files.forEach((file) => {
		const filePath = path.join(directoryPath, file);
		if (fs.statSync(filePath).isDirectory()) {
			output += processDirectory(filePath);
		} else if (path.extname(file) === ".ts" && !file.endsWith(".d.ts")) {
			output += processFile(filePath);
		}
	});
	return output;
}

// Usage
const directoryToProcess = "./src/atom/components";
const outputPath = path.join(process.cwd(), "atom-jsx.d.ts");

let declarations = "declare namespace JSX {\n  interface IntrinsicElements {\n";
declarations += processDirectory(directoryToProcess);
declarations += "  }\n}\n";

fs.writeFileSync(outputPath, declarations);
console.log(`Generated declarations file: ${outputPath}`);
