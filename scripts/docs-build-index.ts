import * as fs from "node:fs";
import * as path from "node:path";

const DIR_DOC_SRC = "docs";

type TLink = {
	file: string;
	name: string;
};
type TData = {
	sidebar: TLink[];
};

const data: TData = { sidebar: [] };

let list = "";
const files = fs.readdirSync(DIR_DOC_SRC);
for (const file of files) {
	if (file !== "index.html" && path.extname(file) === ".html") {
		const name = path.basename(file, ".html");
		list += `<a href="${file}">${name}</a><br />\n`;

		data.sidebar.push({ file, name });
	}
}

let html = fs.readFileSync(path.join(DIR_DOC_SRC, "index.thtml")).toString();
html = html.replace("{{docfiles}}", list);

// fs.writeFileSync(path.join(DIR_DOC_SRC, "pages.html"), html);
fs.writeFileSync(
	path.join(DIR_DOC_SRC, "data.ts"),
	`export const data = ${JSON.stringify(data, null, "  ")}`,
);

console.log("docs:index rebuildt");
