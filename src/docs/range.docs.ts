import { listProperties } from "./claude-v18";

// also consider https://github.com/runem/web-component-analyzer

async function main() {
	const path = "../components/button.ts";
	// const path = "../components/range.ts";
	const file = Bun.file(path);
	const source = await file.text();

	const regex = /export class (\w+) extends/;
	const replacement = "export class MyElement extends";

	const hack = source.replace(regex, replacement);

	// 	const source = `
	// import { LitElement, property } from 'lit-element';

	// class MyElement extends LitElement {
	//   @property({ type: String })
	//   variant: "normal" | "destructive" | "subtle" = "normal";
	//   @property({ type: Number })
	//   value: 100 | 200 | 300 = 200;
	//   @property({ type: String })
	//   foo = 'Hello';
	//   @property({ type: Number })
	//   bar = 42;
	//   @property({ type: Boolean })
	//   baz = true;
	//   @property({ type: Array })
	//   list = [1, 2, 3];
	//   @property({ type: Object })
	//   obj = { key: 'value' };
	//   static get properties() {
	//     return {
	//       qux: { type: Number }
	//     };
	//   }
	// }
	// `;

	const props = listProperties(hack);

	console.log("props", props);
}

await main();
