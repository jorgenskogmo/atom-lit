import { html, LitElement, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import type { FeatherIconNamesType } from "../lib/FeatherIcons";

@customElement("atom-icon")
export class Icon extends LitElement {
	@property({ type: String, reflect: true })
	name: FeatherIconNamesType = "airplay";

	protected override firstUpdated(): void {
		if (this.shadowRoot) {
			// this.shadowRoot.innerHTML = `<div style="width: 16px; height:16px;">${icons[this.name]}</div>`;
			this.shadowRoot.innerHTML = `<svg class="feather">
                <use href="/icons/feather-sprite.svg#${this.name}" />
            </svg>`;
		}
	}

	static override styles = css`
        :host {
            /* background-color: #0f0; */
            display: inline-flex;
            width: auto;
            align-items: stretch;
            justify-content: center;
            vertical-align: middle;
            user-select: none;

            /* transform: scale(0.75); */
            position: relative;            
        }
        svg {
            position: relative;
            /* top: -1px; */
        }

        .feather {
            width: var(--atom-icon-size, 12px);
            height: var(--atom-icon-size, 12px);
            stroke: currentColor;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            fill: none;
        }
    `;

	protected override render() {
		return html`•`;
	}
}
