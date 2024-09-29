import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { subscribe, set, type StateType, getState } from "./State";

export type AtomEventKey = "ready" | "change" | "click";

export type AtomEventDetail = {
	value: string | number;
};

class Atom extends LitElement {
	// All UI Components should use $value for their internal state
	@property({ type: Number, reflect: true })
	value = 6;

	// @property({ type: Boolean, reflect: true })
	// instant = false;

	// if undefined: emit a change event
	// if !unedfined: this.value is bound (r+w) to state
	@property({ reflect: false })
	bind: keyof StateType | undefined = undefined;

	private cancelSubscription?: () => void;

	override async connectedCallback() {
		super.connectedCallback();

		if (this.bind !== undefined) {
			this.value = getState()[this.bind] as typeof this.value;
			this.cancelSubscription = subscribe((s) => {
				// console.log("atom subscription update:", this.bind, s);
				if (this.bind !== undefined) {
					this.value = s[this.bind] as typeof this.value;
				}
			});
		}

		// give the html time to render:
		await new Promise((resolve) => setTimeout(resolve));
		this.emit("ready", { value: this.value });
	}

	override disconnectedCallback() {
		if (this.cancelSubscription) {
			this.cancelSubscription();
		}
	}

	// override in component
	onChange(_e: Event): void {}
	handleChange(): void {}

	announce(value: typeof this.value) {
		if (this.bind !== undefined) {
			set(this.bind, value);
		} else {
			this.emit("change", { value: value });
			this.value = value;
		}
		this.handleChange();
	}

	private emit(key: AtomEventKey, value: AtomEventDetail) {
		const event = new CustomEvent(key, {
			detail: value,
		});
		this.dispatchEvent(event);
	}
}

export { Atom, html, css, customElement, property };
