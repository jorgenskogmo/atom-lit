import {
	Atom,
	html,
	customElement,
	property,
	type AtomEventKey,
	css,
} from "../lib/Atom";

import { styles } from "./range.css";

const local_styles = css`
	:host {
		/* private, dynamic: */
		--_thumb_color: #f00;
	}

	input[type=range]::-webkit-slider-runnable-track {
		border-radius: 500px;
		background: linear-gradient(to right, rgb(255 0 0) 0%, rgb(255 255 0) 17%, rgb(0 255 0) 33%, rgb(0 255 255) 50%, rgb(0 0 255) 67%, rgb(255 0 255) 83%, rgb(255 0 0) 100%);
	}
	input[type=range]::-webkit-slider-thumb {
		border-color: var(--_thumb_color);
	}


	input[type=range]::-moz-range-track {
		height: 8px;
		border-radius: 9999px;
		border-radius: 500px;
		background: linear-gradient(to right, rgb(255 0 0) 0%, rgb(255 255 0) 17%, rgb(0 255 0) 33%, rgb(0 255 255) 50%, rgb(0 0 255) 67%, rgb(255 0 255) 83%, rgb(255 0 0) 100%);
	}
	input[type=range]::-moz-range-thumb {
		border-color: var(--_thumb_color);
	}
`;

@customElement("atom-range-color")
export class RangeColor extends Atom {
	static atomEvent: AtomEventKey = "change";

	static override styles = [styles, local_styles];

	min = 1;
	max = 360;
	step = 1;

	@property({ type: String, reflect: true })
	color = "#00ff00";

	@property({ type: String, reflect: true })
	label = "ColorSlider";

	override async connectedCallback() {
		super.connectedCallback();

		if (`${this.value}`.indexOf("#") === -1) {
			console.log("range color NUM", this.value);
			// value is number, likely from props
			const v = Number.parseInt(`${this.value}`);
			this.value = v % this.max;
			this.color = this.hsvToHex(v, 100, 50);
		} else {
			console.log("range color STR", this.value);
			// value is a color, likely from bound state
			this.color = this.value as string;
			this.value = this.hexToHsv(this.color).h;
		}
		this.style.setProperty("--_thumb_color", this.color);
	}

	override action(event: Event) {
		this.value = Number.parseFloat((event.target as HTMLInputElement).value);
		this.color = this.hsvToHex(this.value, 100, 50);
		this.style.setProperty("--_thumb_color", this.color);
		this.announce(RangeColor.atomEvent, this.color, event);
	}
	override render() {
		return html`    
    <div class="range">
		<div class="labels">
			<div class="label">${this.label}</div>
			<div class="label value">${this.color}</div>
		</div>
        <input
            type="range"
            min=${this.min}
            max=${this.max}
            step=${this.step}
            value=${this.value}
            @change=${this.action}
            @input=${this.action}
        />
    </div>`;
	}

	hsvToHex(h: number, s: number, v: number) {
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

	hexToHsv(hex: string): { h: number; s: number; l: number } {
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
}
