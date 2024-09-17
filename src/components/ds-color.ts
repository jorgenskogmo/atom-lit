import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { update, type StateType } from "../State";

/**
 todo: consider alternative ala Adobe Spectrum
 https://github.com/adobe/spectrum-web-components/blob/main/packages/color-slider/src/ColorSlider.ts
 background: linear-gradient(to right, rgb(255 0 0) 0%, rgb(255 255 0) 17%, rgb(0 255 0) 33%, rgb(0 255 255) 50%, rgb(0 0 255) 67%, rgb(255 0 255) 83%, rgb(255 0 0) 100%);
}
 */

@customElement("ds-color")
class DSColor extends LitElement {
	static override styles = css`
    :host {
        --_track: var(--primary);
        --_track_value: color-mix(in srgb, var(--primary), #fff 33%);
        --_track_hover: color-mix(in srgb, var(--primary), #fff 33%);
        --_track_height: var(--line-height); 
        --_track_border_width: 0px;
        --_thumb_size: calc( var(--_track_height) + 0px);
      }
    
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 100px;
        align-items:center;
        color: #fff;
        margin-bottom: 10px;
    }

    label {
        display: block;
        text-transform: capitalize;
    }
    

    .key, .value {
        padding-inline: 0.5rem;
    }

    input[type="color"] {
      -webkit-appearance: none;
      border: none;
      margin: 0;
      width: calc(100% - 2px);
      padding: 0;
      height: var(--_track_height);
    }
    input[type="color"]::-webkit-color-swatch-wrapper {
      padding: 0;
    }
    input[type="color"]::-webkit-color-swatch {
      border: none;
    }
  `;

	@property({ reflect: true })
	key: keyof StateType = "repulsionRadius";

	@property({ type: String })
	value = "#09f";

	constructor() {
		super();
	}

	private onChange(e: Event) {
		const value = (e.target as HTMLInputElement).value;
		console.log("color:", this.key, value);
		this.value = value;
		update(this.key, value);
	}

	private formatKey(label: string) {
		return label.replace(/([A-Z])/g, " $1").trim();
	}

	override render() {
		return html`    
    <div class="container">
        <label class="key" for="attractionStrength">${this.formatKey(this.key)}:</label>
        <div class="range">
            <input
            type="color"
            value="${this.value}"
            @input="${this.onChange}"
            />
        </div>
        <span class="value" id="out">${this.value}</span>
      </div>
      `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"ds-color": DSColor;
	}
}
