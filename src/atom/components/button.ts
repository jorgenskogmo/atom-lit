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

	@property({ type: String })
	label = "Button";

	override action(event: Event) {
		console.log("@Button action", event);
		this.value++;
		// For a button, we emit the click event
		this.announce(Button.atomEvent, this.value, event);
	}

	override render() {
		return html`    
        <button @click=${this.action} class="button ${this.variant}" role="button" tabindex="0">
            <div class="inner">
                <slot name="left" class="prefix"></slot>
                <span class="label">${this.label}</span>
                <slot name="center" class="center"></slot>
                <slot name="right" class="suffix"></slot>
            </div>
        </button>`;
	}
}
