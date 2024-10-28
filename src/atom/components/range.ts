import { query } from "lit/decorators.js";
import {
	Atom,
	html,
	customElement,
	property,
	type AtomEventKey,
} from "../lib/Atom";

import { styles } from "./range.css";

@customElement("atom-range")
export class Range extends Atom {
	static atomEvent: AtomEventKey = "change";

	static override styles = [styles];

	@property({ type: Number, reflect: true })
	min = 1;

	@property({ type: Number, reflect: true })
	max = 30;

	@property({ type: Number, reflect: true })
	step = 1;

	override label = "Slider";

	@property({ type: Number, reflect: true })
	override value = 6;

	@query("input[type=range]")
	public rangeElement!: HTMLInputElement;

	override stateUpdate() {
		this.rangeElement.value = `${this.value}`;
	}

	override action(event: Event) {
		const value = Number.parseFloat((event.target as HTMLInputElement).value);
		this.announce(Range.atomEvent, value, event);
	}

	override render() {
		const pct = ((this.value - this.min) / (this.max - this.min)) * 100;
		const css = `background: linear-gradient(to right, var(--atom-color-accent) ${pct}%, var(--atom-control-bg) ${pct - 1}%)`;
		return html`    
    <div class="range">
		<div class="labels">
			<div class="label">${this.label}</div>
			<div class="label value">${this.value}</div>
		</div>		
        <input
			style=${css}
            type="range"
			?disabled=${this.disabled}
            min=${this.min}
            max=${this.max}
            step=${this.step}
            value=${this.value}
            @change=${this.action}
            @input=${this.action}
			aria-label=${this.label}
        />
    </div>`;
	}
}
