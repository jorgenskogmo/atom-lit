import {
	Atom,
	html,
	customElement,
	property,
	type AtomEventKey,
} from "../lib/Atom";

import { styles } from "./switch.css";

@customElement("atom-switch")
export class Switch extends Atom {
	static atomEvent: AtomEventKey = "change";

	static override styles = styles;

	@property({ type: Number, reflect: true })
	override value = 0;

	@property({ type: Boolean })
	disabled = false;

	override attributeChangedCallback(
		name: string,
		_old: string | null,
		value: string | null,
	): void {
		// console.log("switch attributeChangedCallback", name, _old, value);
		if (name === "disabled" && _old === null && value !== "false") {
			// console.log("switch attributeChangedCallback is disabled");
			this.disabled = true;
		}
		super.attributeChangedCallback(name, _old, value);
	}

	override action(event: Event) {
		this.value = this.value === 1 ? 0 : 1;
		this.announce(Switch.atomEvent, this.value, event);
	}

	override render() {
		return html`    
        <button @click=${this.disabled ? null : this.action} class="button ${this.value ? "on" : "off"} ${this.disabled ? "disabled" : ""}">
            <div class="thumb"></div>
        </button>
        <span class="label ${this.disabled ? "disabled" : ""}"><slot></slot></span>`;
	}
}
