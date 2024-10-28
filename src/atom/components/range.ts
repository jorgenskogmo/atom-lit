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

	static override styles = styles;

	@property({ type: Number, reflect: true })
	min = 1;

	@property({ type: Number, reflect: true })
	max = 30;

	@property({ type: Number, reflect: true })
	step = 1;

	@property({ type: Number, reflect: true })
	override value = 6;

	override action(event: Event) {
		const value = Number.parseFloat((event.target as HTMLInputElement).value);
		this.announce(Range.atomEvent, value, event);
	}
	override render() {
		// console.log("slider: this.value:", this.value);
		// fixme: ensure slider head moves when value changes
		const pct = Math.floor(((this.value as number) / this.max) * 100);
		const css = `background: linear-gradient(to right, var(--atom-color-accent) ${pct}%, var(--atom-control-bg) ${pct - 1}%)`;
		return html`    
    <div class="range">
        <input
			style=${css}
            type="range"
            min=${this.min}
            max=${this.max}
            step=${this.step}
            value=${this.value}
            @change=${this.action}
            @input=${this.action}
        />
        <span class="label" style="margin-inline:0.5rem">${this.value}</span>
    </div>`;
	}
}
