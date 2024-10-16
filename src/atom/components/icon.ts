import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { SVGSprite } from "../lib/FeatherIconSprite";
import type { FeatherIconNamesType } from "../lib/FeatherIcons";

@customElement("atom-icon")
export class Icon extends LitElement {
	// Render into the light DOM instead of a shadow root.
	// This allows the <use> element to reference the SVG symbol in the parent document.
	override createRenderRoot() {
		return this;
	}

	@property({ type: String, reflect: true })
	name: FeatherIconNamesType = "airplay";

	public override connectedCallback(): void {
		super.connectedCallback();

		if (!document.querySelector("#atom-iconsprite")) {
			this.writeSprite();
		}

		const style = `
            display: inline;            
            // background-color: #090;
            width: var(--atom-icon-size, 12px);
            height: var(--atom-icon-size, 12px);
            margin-top: 9px;
            stroke: currentColor;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            fill: none;`;

		this.innerHTML = `<svg style="${style}">
	        <use xlink:href="#${this.name}" />
	    </svg>`;
	}

	private writeSprite() {
		console.log(
			`atom-icon@first-instance: "${this.name}", injecting icon sprite`,
		);
		const el = document.createElement("div");
		el.id = "atom-iconsprite";
		el.innerHTML = SVGSprite;
		document.body.appendChild(el);
	}
}
