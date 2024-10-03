import { Atom, html, customElement, property, css } from "../lib/Atom";

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

		input[type="range"] {
			-webkit-appearance: none;
			appearance: none;
			background: transparent;
			cursor: pointer;
			width: 100%;
			height: 8px;
			border-radius: 9999px;
		}

		input[type="range"]:focus {
			outline: none;
		}
				
		/* webkit */

		input[type=range]::-webkit-slider-runnable-track {
			height: 8px;
		}

		input[type=range]::-webkit-slider-thumb {
			-webkit-appearance: none;
			appearance: none; 
			height: 22px;
			width: 22px;
			margin-top: -7px;
			background-color: var(--atom-bg);
			border-radius: 50%;
			border: 3px solid var(--atom-color-accent);
			transition: border cubic-bezier(0.165, 0.84, 0.44, 1) 100ms;
		}

		input[type=range]::-webkit-slider-thumb:active {
			border-width: 7px;
		}

		/* moz */

		input[type=range]::-moz-range-thumb {
			height: 16px;
			width: 16px;
			background-color: var(--atom-bg);
			border-radius: 50%;
			border: 3px solid var(--atom-color-accent);
		}

		input[type=range]::-moz-range-thumb:active {
			height: 8px;
			width: 8px;
			border-width: 7px;
		}

		input[type="range"]:focus {
			outline: none;
		}
		input[type=range]:focus-visible::-webkit-slider-runnable-track, input[type=range]:focus::-webkit-slider-runnable-track {
			outline: none;
		}
		input[type=range]:focus-visible::-webkit-slider-thumb {
			outline: 4px solid #f00;
			outline-offset: 4px;
		}
		input[type=range]:focus-visible::-moz-range-thumb {
			outline: 4px solid #f00;
			outline-offset: 8px;
		}
	`;

	override render() {
		const pct = Math.floor((this.value / this.max) * 100);
		const css = `background: linear-gradient(to right, var(--atom-color-accent) ${pct - 1}%, var(--atom-control-bg) ${pct - 1}%)`;
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
