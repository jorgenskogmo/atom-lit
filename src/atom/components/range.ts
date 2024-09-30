import { query, state } from "lit/decorators.js";
import { Atom, html, customElement, property, css } from "../lib/Atom";
import type { PropertyValues } from "lit";

@customElement("atom-range")
export class Range extends Atom {
	@property({ type: Number, reflect: true })
	min = 1;

	@property({ type: Number, reflect: true })
	max = 30;

	@property({ type: Number, reflect: true })
	step = 1;

	override handleChange(): void {
		// console.log("handleChange this.value:", this.value);
	}

	override onChange(e: Event) {
		const value = Number.parseInt((e.target as HTMLInputElement).value);
		this.announce(value);
	}

	static override styles = css`

		.range {
			display: flex;
			align-items: center;
		}
				
		input[type=range] {
			-webkit-appearance: none;
			appearance: none; 
			width: 100%;
			cursor: pointer;
			outline: none;
			border-radius: 9999px;
			height: 8px;
			background: #ccc;
		}

		input[type=range]::-webkit-slider-thumb {
			-webkit-appearance: none;
			appearance: none; 
			height: 22px;
			width: 22px;
			background-color: #fff;
			border-radius: 50%;
			border: 3px solid #000;
			transition: border cubic-bezier(0.165, 0.84, 0.44, 1) 100ms;
		}

		input[type=range]::-moz-range-thumb {
			height: 16px;
			width: 16px;
			background-color: #fff;
			border-radius: 50%;
			/* border: 3px solid #000; */
			border: 1px solid #fff;
			box-shadow: 0 0 0 4px #000;		
		}

		input[type=range]::-webkit-slider-thumb:active {
			border: 7px solid #000;
		}
		input[type=range]::-moz-range-thumb:active {
			height: 7px;
			width: 7px;
			/* border: 7px solid #000; */
			border: 1px solid #fff;
			box-shadow: 0 0 0 9px #000;
		}
	`;

	override render() {
		const pct = Math.floor((this.value / this.max) * 100);
		const css = `background: linear-gradient(to right, #000 ${pct - 1}%, #ccc ${pct - 1}%)`;
		return html`    
    <div class="range">
        <input
			style=${css}
            type="range"
            min=${this.min}
            max=${this.max}
            step=${this.step}
            value=${this.value}
            @input=${this.onChange}
        />
        <span class="label" style="margin-inline:0.5rem">${this.value}</span>
    </div>`;
	}
}
