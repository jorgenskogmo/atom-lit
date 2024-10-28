import { listProperties } from "./ListProperties";

async function main(componentName: string) {
	const path = `../src/atom/components/${componentName}.ts`;
	const file = Bun.file(path);
	const text = await file.text();
	const regex = /export class (\w+) extends/;
	const replacement = "export class MyElement extends";
	const source = text.replace(regex, replacement);
	const props = listProperties(source);

	console.log("props", props);
}

main("button");
