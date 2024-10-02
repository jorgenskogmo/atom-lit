import "./state";
import "./atom/index";

import { Remarkable } from "remarkable";
const md = new Remarkable();
import * as CD from "./atom/vscode-html-custom-data.json";

console.log(
	"CD",
	CD.tags.find((t) => t.name === "atom-range"),
);

import type { AtomEventDetail } from "./atom/lib/Atom";

// just for testing:
import { subscribe, getState } from "./atom/lib/State";

async function main() {
	const slider = document.querySelector("#btn0") as HTMLInputElement;

	// event listener:
	slider.addEventListener("change", ((e: CustomEvent<AtomEventDetail>) => {
		console.log("change:", e);
		const el = document.querySelector("#btn0out") as HTMLDivElement;
		el.innerText = `${e.detail.value}`;
	}) as EventListener);

	// direct subscription:
	subscribe((s) => {
		const el = document.querySelector("#state0out") as HTMLDivElement;
		el.innerHTML = `${s.num}`;
	});
	const el = document.querySelector("#state0out") as HTMLDivElement;
	el.innerHTML = `${getState().num}`;

	// // direct update:
	// let nn = 10;
	// setInterval(() => {
	// 	// const n = getState().num + 1;
	// 	// set("num", n);
	// 	// slider.value = `${++nn}`;
	// }, 1000);

	// Test cases
	const input1 = "`min` {`number`} - \n\nProperty: min\n\nDefault: 1";
	const input2 =
		'`bind` {`"num" | "clicks" | "darkmode" | undefined`} - \n\nProperty: bind\n\nDefault: undefined';

	console.log(formatString(input1));
	console.log(formatString(input2));

	const rangedocs = CD.tags.find((t) => t.name === "atom-range");
	// "`min` {`number`} - \n\nProperty: min\n\nDefault: 1"

	const tag = document.createTextNode(
		`<atom-range id="btn0" min="1" max="60" value="20" bind="num"></atom-range>`,
	).textContent;
	document.getElementById("range-docs-tag").innerText = tag;

	let html = "";

	for (const attr of rangedocs.attributes) {
		if (attr.name !== "bind") {
			html += formatString(attr.description) + "<br />\n";
		}
	}
	document.getElementById("range-docs-attrs").innerHTML = html;

	// document.getElementById("range-docs").innerHTML = md.render(
	// 	rangedocs.description,
	// );
}

function formatString(input: string): string {
	const regex =
		/`(\w+)`\s*{`(.*?)`}\s*-\s*\n\nProperty:\s*(\w+)\s*\n\nDefault:\s*(.*)/s;

	const match = input.match(regex);

	if (match) {
		const [, prop, type, , defaultValue] = match;
		return `<code><span class=prop>${prop}</span>: <span class=type>${type}</span>, default: <span class=default>${defaultValue}</span></code>`;
	}

	return "No match found";
}

// document.addEventListener("DOMContentLoaded", main);
//----

// const btn = document.querySelector("#btn") as HTMLDivElement;
// btn.addEventListener("change", (e) => {
// 	console.log("btn clicked");
// });

// // connect the light/dark-mode switch to document and particle system
// document
// 	.querySelector("#lightdarkmode")
// 	?.addEventListener("input", (e: Event) => {
// 		if (e.currentTarget) {
// 			const on = (e.currentTarget as HTMLElement).getAttribute("on");
// 			document.body.setAttribute("data-theme", on === "1" ? "light" : "dark");
// 			const particles = document.querySelector("#particles");
// 			if (particles) {
// 				// grab the re-applied css custom properties, covert to HEX and forward to particles
// 				const current_background = getCSSProp(
// 					document.body,
// 					"background-color",
// 				);
// 				const current_background_rgb = rgb2hex(current_background);
// 				particles.setAttribute("clearColor", current_background_rgb);
// 			}
// 		}
// 	});
