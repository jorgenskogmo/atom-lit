import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { update, type StateType } from "../lib/State";

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
        /* */
        --_thumb_color: #f00;
      }
    
    .container {
        display: grid;
        grid-template-rows: 1fr 1fr;
    }
    .container:hover > .info {
      opacity: 1;
    }
    .info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items:end;
      opacity: 0.6;
    }

    label {
      font: var(--font-label);
    }
    label.key::first-letter {
        text-transform: capitalize;
    }
    label.value {
      text-align: right;
      text-transform: uppercase;
    }


    /* https://doodlenerd.com/html-control/css-input-range-generator */
    input[type=range] {
        -webkit-appearance: none;
        margin: 0;
        width: 100%;
        cursor: pointer;
        border-top: 10px solid var(--background);
        border-bottom: 10px solid var(--background);
        background: transparent;
      }
      input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 4px;
        border-radius: 5px;
        /* background-color: #ccc;
        transition: background-color cubic-bezier(0.165, 0.84, 0.44, 1) 100ms;
      }
      input[type=range]::-webkit-slider-runnable-track:active {
        background-color: #bbb; */
        background: linear-gradient(to right, rgb(255 0 0) 0%, rgb(255 255 0) 17%, rgb(0 255 0) 33%, rgb(0 255 255) 50%, rgb(0 0 255) 67%, rgb(255 0 255) 83%, rgb(255 0 0) 100%);
      }
      input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 20px;
        width: 20px;
        border-radius: 100%;
        border: 4px solid var(--_thumb_color);
        outline: 6px solid var(--background);
        
        background: var(--background);
        cursor: pointer;
        margin-top: -8px;
      }
      input[type=range]::-webkit-slider-thumb:active {
        border: 7px solid var(--_thumb_color);    
      }

      input[type="range"]:focus {
        outline: none;
      }
      input[type=range]:focus-visible::-webkit-slider-runnable-track, input[type=range]:focus::-webkit-slider-runnable-track {
        outline: none;
      }
      input[type=range]:focus-visible::-webkit-slider-thumb {
        outline: 4px solid var(--input-focus);
      }
  `;

	@property({ reflect: true })
	key: keyof StateType = "repulsionRadius";

	@property({ type: String })
	value = "#0099FF";

	@state()
	nvalue = 180;

	constructor() {
		super();
	}

	override connectedCallback(): void {
		super.connectedCallback();
		const hsl = this.hexToHsv(this.value);
		this.nvalue = hsl.h;
		this.style.setProperty("--_thumb_color", this.value);
	}

	private onChange(e: Event) {
		const value = (e.target as HTMLInputElement).value;
		console.log("color:", this.key, value);
		this.nvalue = Number.parseInt(value);
		this.value = this.hsvToHex(this.nvalue, 100, 50);
		this.style.setProperty("--_thumb_color", this.value);
		update(this.key, this.value);
	}

	private hsvToHex(h: number, s: number, v: number) {
		const l = v / 100;
		const a = (s * Math.min(l, 1 - l)) / 100;
		const f = (n: number) => {
			const k = (n + h / 30) % 12;
			const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
			return Math.round(255 * color)
				.toString(16)
				.padStart(2, "0"); // convert to Hex and prefix "0" if needed
		};
		return `#${f(0)}${f(8)}${f(4)}`;
	}

	private hexToHsv(hex: string): { h: number; s: number; l: number } {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

		if (!result) {
			throw new Error("Could not parse Hex Color");
		}

		const rHex = Number.parseInt(result[1], 16);
		const gHex = Number.parseInt(result[2], 16);
		const bHex = Number.parseInt(result[3], 16);

		const r = rHex / 255;
		const g = gHex / 255;
		const b = bHex / 255;

		const max = Math.max(r, g, b);
		const min = Math.min(r, g, b);

		let h = (max + min) / 2;
		let s = h;
		let l = h;

		if (max === min) {
			// Achromatic
			return { h: 0, s: 0, l };
		}

		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}
		h /= 6;

		s = s * 100;
		s = Math.round(s);
		l = l * 100;
		l = Math.round(l);
		h = Math.round(360 * h);

		return { h, s, l };
	}

	private formatKey(label: string) {
		return label.replace(/([A-Z])/g, " $1").trim();
	}

	override render() {
		return html`    
    <div class="container">
      <div class="info">
        <label class="key">${this.formatKey(this.key)}:</label>
        <label class="value">${this.value}</label>
      </div>
      <div class="range">
        <input
            type="range"
            min="0"
            max="360"
            step="1"
            value="${this.nvalue}"
            @input="${this.onChange}"
        />
        <div class="fill"></div>
      </div>
    </div>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"ds-color": DSColor;
	}
}
