import { customElement, property, css } from "../lib/Atom";
import { hexToHsv, hsvToHex } from "../lib/Color";
import { styles } from "./range.css";
import { Range } from "./range";

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
export class RangeColor extends Range {
	static override styles = [styles, local_styles];

	override min = 0;
	override max = 359;
	override step = 1;
	override label = "ColorSlider";

	@property({ type: String, reflect: true })
	color = "#00ff00";

	override stateUpdate() {
		// console.log("range color bound @stateUpdate", this.value);
		this.color = this.value.toString(); // as string;
		this.value = hexToHsv(this.color).h;
		this.rangeElement.value = `${this.value}`;
	}

	override async connectedCallback() {
		super.connectedCallback();

		if (`${this.value}`.indexOf("#") === -1) {
			// console.log("range color NUM", this.value);
			// value is number, likely from props
			const v = Number.parseInt(`${this.value}`);
			this.value = v % this.max;
			this.color = hsvToHex(v, 100, 50);
		} else {
			// console.log("range color STR", this.value);
			// value is a color, likely from bound state
			this.color = this.value.toString(); // as string;
			this.value = hexToHsv(this.color).h;
		}
		this.style.setProperty("--_thumb_color", this.color);
	}

	override action(event: Event) {
		this.value = Number.parseFloat((event.target as HTMLInputElement).value);
		this.color = hsvToHex(this.value, 100, 50);
		this.style.setProperty("--_thumb_color", this.color);
		this.announce(RangeColor.atomEvent, this.color, event);
	}
}
