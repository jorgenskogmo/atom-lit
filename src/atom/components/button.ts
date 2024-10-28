import {
	Atom,
	html,
	customElement,
	property,
	type AtomEventKey,
} from "../lib/Atom";

import { styles } from "./button.css";

@customElement("atom-button")
export class Button extends Atom {
	static atomEvent: AtomEventKey = "click";

	static override styles = styles;

	@property({ type: Number, reflect: true })
	override value = 0;

	@property({ type: String })
	variant:
		| "normal"
		| "primary"
		| "destructive"
		| "constructive"
		| "outline"
		| "subtle" = "normal";

	override label = "Button";

	override action(event: Event) {
		console.log("@Button action", event);
		this.value++;
		// For a button, we emit the click event
		this.announce(Button.atomEvent, this.value, event);
	}

	override render() {
		return html`    
        <button @click=${this.action} class="button ${this.variant}" role="button" tabindex="0" aria-label="${this.label}">
            <div class="inner">
                <slot name="left" class="prefix"></slot>
                <slot name="center" class="center"><div class="label">${this.label}</div></slot>
                <slot name="right" class="suffix"></slot>
            </div>
        </button>`;
	}
}
