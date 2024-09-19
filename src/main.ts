import "./components/index";
import "./lib/router";
import { rgb2hex, getCSSProp } from "./lib/utils";

//   export interface StateType = typeof initial_state;

// connect the light/dark-mode switch to document and particle system
document
	.querySelector("#lightdarkmode")
	?.addEventListener("input", (e: Event) => {
		if (e.currentTarget) {
			const on = (e.currentTarget as HTMLElement).getAttribute("on");
			document.body.setAttribute("data-theme", on === "1" ? "light" : "dark");
			const particles = document.querySelector("#particles");
			if (particles) {
				// grab the re-applied css custom properties, covert to HEX and forward to particles
				const current_background = getCSSProp(
					document.body,
					"background-color",
				);
				const current_background_rgb = rgb2hex(current_background);
				particles.setAttribute("clearColor", current_background_rgb);
			}
		}
	});
