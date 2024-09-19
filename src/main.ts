import "./components.ts";
import "./router.ts";
import { setInitialState } from "./State";

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

setInitialState({
	numParticles: 500,
});

//   export interface StateType = typeof initial_state;

const setRenderingMode = (isLight: number) => {
	if (isLight) {
		document.body.classList.remove("dark");
		document.body.classList.add("light");
	} else {
		document.body.classList.remove("light");
		document.body.classList.add("dark");
	}
};

document
	.querySelector("#lightdarkmode")
	?.addEventListener("input", (e: Event) => {
		if (e.currentTarget) {
			const on = (e.currentTarget as HTMLElement).getAttribute("on");
			console.log("lightdark", e.currentTarget, on);
			setRenderingMode(on === "1" ? 1 : 0);
		}
	});

const isLight =
	document.querySelector("#lightdarkmode")?.getAttribute("on") === "1" ? 1 : 0;
setRenderingMode(isLight);
