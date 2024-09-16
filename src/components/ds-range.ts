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
        grid-template-columns: 1fr 1fr 100px;
        align-items:center;
        color: #fff;
        margin-bottom: 10px;
        background-color: var(--background);
        padding: 2px;
    }
    .container:hover {
        background-color: color-mix(in srgb, var(--background), #000 33%);
    }

    label {
        display: block;
    }
    label::first-letter {
        text-transform: capitalize;
    }

    .key, .value {
        padding-inline: 0.5rem;
    }

    /* https://doodlenerd.com/html-control/css-input-range-generator */
    input[type=range] {
        -webkit-appearance: none;
        margin: 0;
        width: 100%;
        background-color: transparent;
        overflow: hidden;
      }
      input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: var( --_track_height );
        cursor: pointer;
        background: var(--_track);
      }
      input[type=range]::-webkit-slider-thumb {
        height: var(--_thumb_size);
        width: var(--_thumb_size);
        background: var(--_track_value);
        cursor: pointer;
        -webkit-appearance: none;
        box-shadow: -400px 0 0 400px var(--_track_value);
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        background: var(--_track);
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
        <label class="key" for="attractionStrength">${this.formatKey(this.key)}:</label>
        <div class="range">
            <input
                type="range"
                min="${this.min}"
                max="${this.max}"
                step="${this.step}"
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
		"ds-range": DSRange;
	}
}
