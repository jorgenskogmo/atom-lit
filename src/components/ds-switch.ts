import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 todo: consider alternative ala Adobe Spectrum
 https://github.com/adobe/spectrum-web-components/blob/main/packages/color-slider/src/ColorSlider.ts
 background: linear-gradient(to right, rgb(255 0 0) 0%, rgb(255 255 0) 17%, rgb(0 255 0) 33%, rgb(0 255 255) 50%, rgb(0 0 255) 67%, rgb(255 0 255) 83%, rgb(255 0 0) 100%);
}
 */

@customElement("ds-switch")
class DSSwitch extends LitElement {
	static override styles = css`

    .range {
        position: relative;
    }
    .icon {
        position: absolute;
        z-index: 2;
        top: -2px;
        pointer-events: none;
    }
    .icon.light {
        left: 3px;
        filter: invert();
    }
    .icon.dark {
        left: 27px;
    }
    .icon.hide {
        display: none;
    }

    input[type=range] {
        -webkit-appearance: none;
        margin: 0;
        width: 3rem;
        cursor: pointer;
        background-color: var(--foreground);
      }
      input[type=range]::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        width: 100%;
        height: 20px;
        outline: 4px solid var(--foreground);
        border-radius: 24px;
        background-color: var(--foreground);
      }
      /* input[type=range]::-webkit-slider-runnable-track:active {
        background-color: #bbb;
      } */
      input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        cursor: pointer;
        height: 20px;
        width: 20px;
        border-radius: 100%;
        /* border: 2px solid #000000; */
        margin-top: 0px;
        background: var(--background);
      }      
  `;

	@property({ type: Number, reflect: true })
	on = 1;

	constructor() {
		super();
	}

	// override connectedCallback(): void {
	// 	super.connectedCallback();
	//     this.on = Number.parseInt(this.on);
	//  TODO: Fire input event
	// }

	private onChange(e: Event) {
		const value = (e.target as HTMLInputElement).value;
		// console.log("color:", this.on, value);
		this.on = Number.parseInt(value);
	}

	override render() {
		return html`    
    <div class="container">
      <div class="range">
        <input
            type="range"
            min="0"
            max="1"
            step="1"
            value="${this.on ? 1 : 0}"
            @input="${this.onChange}"
        />
        <div class="icon light ${this.on ? "" : "hide"}"><img src="public/icons/sun-16.svg" /></div>
        <div class="icon dark ${this.on ? "hide" : ""}"><img src="public/icons/moon-16.svg" /></div>
      </div>
    </div>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"ds-switch": DSSwitch;
	}
}
