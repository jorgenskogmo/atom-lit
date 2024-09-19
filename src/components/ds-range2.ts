import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { update, type StateType } from "../State";

@customElement("ds-range")
class DSRange extends LitElement {
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
        background-color: var(--foreground); /* #ccc; */
        transition: background-color cubic-bezier(0.165, 0.84, 0.44, 1) 100ms;
      }
      input[type=range]::-webkit-slider-runnable-track:active {
        background-color: #bbb;
      }
      input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 20px;
        width: 20px;
        border-radius: 100%;
        border: 4px solid var(--foreground);
        outline: 6px solid var(--background);
        background: var(--background);
        cursor: pointer;
        margin-top: -8px;
        transition: border cubic-bezier(0.165, 0.84, 0.44, 1) 100ms;
      }
      input[type=range]::-webkit-slider-thumb:active {
        border: 7px solid var(--foreground);
      }      
  `;

	@property({ reflect: true })
	key: keyof StateType = "repulsionRadius";

	@property({ type: Number })
	min = 0;

	@property({ type: Number })
	max = 1;

	@property({ type: Number })
	step = 1;

	@property({ type: Number })
	value = 0;

	constructor() {
		super();
	}

	private onChange(e: Event) {
		const numericValue = Number.parseFloat(
			(e.target as HTMLInputElement).value,
		);
		// console.log("slider:", this.key, numericValue )
		this.value = numericValue;
		update(this.key, numericValue);
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
            min="${this.min}"
            max="${this.max}"
            step="${this.step}"
            value="${this.value}"
            @input="${this.onChange}"
        />
        <div class="fill"></div>
      </div>
    </div>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"ds-range": DSRange;
	}
}
