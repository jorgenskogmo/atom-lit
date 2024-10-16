import * as fs from "node:fs";
import * as path from "node:path";

const DIR_DOC_SRC = "docs";

let list = "";
const files = fs.readdirSync(DIR_DOC_SRC);
for (const file of files) {
	if (file !== "index.html" && path.extname(file) === ".html") {
		const name = path.basename(file, ".html");
		list += `<a href="${file}">${name}</a><br />\n`;
	}
}

let html = fs.readFileSync(path.join(DIR_DOC_SRC, "index.thtml")).toString();
html = html.replace("{{docfiles}}", list);

fs.writeFileSync(path.join(DIR_DOC_SRC, "index.html"), html);

console.log("docs:index rebuildt");
