import "./components/index";
import "./lib/router";
import { rgb2hex } from "./lib/utils";

// can we define StateType here, based on the key/values we put into the initial object?

// export interface StateType {
//     /** For testing purposes */
//     a?: number;
//     /** Number of particles in the system */
//     numParticles?: number;
//     /** Strength of attraction between particles */
//     attractionStrength?: number;
//     /** Strength of repulsion between particles */
//     repulsionStrength?: number;
//     /** Radius within which particles repel each other */
//     repulsionRadius?: number;
//     /** Maximum speed of particles */
//     maxSpeed?: number;
//     /** Maximum force that can be applied to particles */
//     maxForce?: number;
//     /** Friction coefficient for particle movement */
//     friction?: number;
//     /** Color of slow-moving particles */
//     slowColor?: string;
//     /** Color of fast-moving particles */
//     fastColor?: string;
//     /** Size of arrows representing particle direction */
//     arrowSize?: number;
//     /** Whether to use trails for particle movement */
//     useTrails?: string;
//   }

// setInitialState({
// 	numParticles: 500,
// });

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
				const bg = window
					.getComputedStyle(document.body)
					.getPropertyValue("background-color");
				particles.setAttribute("clearColor", rgb2hex(bg));
			}
		}
	});
