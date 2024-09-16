import { LitElement, html, css, type PropertyValues } from "lit";
import { customElement } from "lit/decorators.js";
import { ParticleSystem } from "../particles/ParticleSystem";
import { subscribe, type StateType, getState } from "../State";

// Derives the keys that exist in both StateType and ParticleSystem, excluding undefined.
type ParticleSystemStateKeys = Exclude<
	{
		[K in keyof StateType]: K extends keyof ParticleSystem ? K : never;
	}[keyof StateType],
	undefined
>;

function updateParticleSystemFromState(
	particleSystem: ParticleSystem,
	state: Readonly<StateType>,
): void {
	// biome-ignore lint/complexity/noForEach: <explanation>
	(Object.keys(state) as Array<ParticleSystemStateKeys>).forEach((key) => {
		const value = state[key];
		if (value !== undefined && key in particleSystem) {
			if (key === "useTrails") {
				// Handle the special case for useTrails
				(particleSystem[key] as boolean) = value === "true";
			} else {
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
				(particleSystem[key] as any) = value;
			}
		}
	});
}

@customElement("ds-particles")
export class DSParticles extends LitElement {
	static override styles = css`
    :host {
      display: flex;
      border: solid 1px gray;
      width: 100%;
      height: 100%;
    }
    canvas {
      background-color: #282828;
      width: 100%;
      height: 100%;
    }
  `;

	protected override firstUpdated(_changedProperties: PropertyValues): void {
		const canvas = this.renderRoot.querySelector("#g") as HTMLCanvasElement;
		const gl = canvas.getContext("webgl2");

		console.log("ds-part firstUpdated", getState());

		if (gl) {
			const particleSystem = new ParticleSystem(gl);
			// particleSystem.numParticles = 2300; // This will automatically resize the particle system
			// particleSystem.attractionStrength = 10000;
			// particleSystem.useTrails = true; // This will enable trails

			// particleSystem.slowColor = "#ffffff";
			// particleSystem.fastColor = "#ff00ff";

			particleSystem.animate();

			subscribe((state) => {
				updateParticleSystemFromState(particleSystem, state);
			});
		}
	}

	override render() {
		return html`<canvas id="g"></canvas>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"ds-particles": DSParticles;
	}
}
