import { LitElement, html, css, type PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import { update, subscribe, type StateType } from "../lib/State";

@customElement("ds-range")
class DSRange extends LitElement {
	static override styles = css`
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
        background-color: color-mix(in srgb, var(--foreground) 33%, var(--background));
        transition: background-color cubic-bezier(0.165, 0.84, 0.44, 1) 100ms;
      }
      input[type=range]::-webkit-slider-runnable-track:active {
        background-color: var(--foreground);
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

	@property({ type: Number })
	min = 0;

	@property({ type: Number })
	max = 1;

	@property({ type: Number })
	step = 1;

	@property({ type: Number })
	value = 0;

	protected override firstUpdated(_changedProperties: PropertyValues): void {
		subscribe((state) => {
			const a = state[this.key];
			if (a) {
				if (typeof a === "number") {
					this.value = a;
				}
				if (typeof a === "string") {
					this.value = Number.parseFloat(a);
				}
			}
		});
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
        <label class="key" for="${this.key}">${this.formatKey(this.key)}:</label>
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
            id="${this.key}"
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
