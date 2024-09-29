// import "./components/index";
// import "./lib/router";
// import { rgb2hex, getCSSProp } from "./lib/utils";

import "./state";
import "./components/index";

import type { AtomEventDetail } from "./lib/Atom";

// just for testing:
import { subscribe, getState, set } from "./lib/State";

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

// direct update:
let nn = 10;
setInterval(() => {
	// const n = getState().num + 1;
	// set("num", n);
	// slider.value = `${++nn}`;
}, 1000);

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
