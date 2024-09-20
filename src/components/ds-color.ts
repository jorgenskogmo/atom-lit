import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { update, type StateType } from "../lib/State";
import { hexToHsv, hsvToHex } from "../lib/utils";

@customElement("ds-color")
class DSColor extends LitElement {
	static override styles = css`
    :host {
        /* private, dynamic: */
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
		const hsl = hexToHsv(this.value);
		this.nvalue = hsl.h;
		this.style.setProperty("--_thumb_color", this.value);
	}

	private onChange(e: Event) {
		const value = (e.target as HTMLInputElement).value;
		this.nvalue = Number.parseInt(value);
		this.value = hsvToHex(this.nvalue, 100, 50);
		this.style.setProperty("--_thumb_color", this.value);
		update(this.key, this.value);
	}

	private formatKey(label: string) {
		return label.replace(/([A-Z])/g, " $1").trim();
	}

	override render() {
		return html`    
    <div class="container">
      <div class="info">
        <label class="key" for="${this.key}">${this.formatKey(this.key)}:</label>
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
            id="${this.key}"
        />        
      </div>
    </div>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"ds-color": DSColor;
	}
}
