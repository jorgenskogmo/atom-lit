import { LitElement, html, css } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { subscribe, update, type StateType, getState } from "./State";

export type AtomEventKey = "ready" | "change" | "click" | "keyup";

class Atom extends LitElement {
	@property()
	value: number | string = 0;

	@property({ type: Boolean, reflect: true })
	disabled = false;

	@property({ type: String, reflect: true })
	label = "";

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
					this.stateUpdate();
				}
			});
		}

		// await new Promise((resolve) => setTimeout(resolve));
		// this.announce("ready", this.value);
	}

	override disconnectedCallback() {
		if (this.cancelSubscription) {
			this.cancelSubscription();
		}
	}

	// Stub method to be overridden in derived classes
	action(_event: Event): void {
		// Default implementation does nothing
	}

	// Stub method to be overridden in derived classes
	stateUpdate() {}

	announce(
		eventKey: AtomEventKey,
		value: typeof this.value,
		originalEvent?: Event,
	) {
		if (originalEvent) {
			originalEvent.stopPropagation();
		}

		if (this.bind !== undefined) {
			// console.log("@Atom updating state:", this.bind, value);
			update(this.bind, value as never); // not ideal...
		} else {
			this.value = value;
		}

		let finalEventKey = eventKey;
		if (
			eventKey === "click" &&
			originalEvent &&
			originalEvent instanceof KeyboardEvent
		) {
			finalEventKey = "keyup";
		}
		const event = new CustomEvent(finalEventKey, {
			bubbles: true,
			composed: true,
			detail: { value, originalEvent },
		});

		console.log("@Atom dispatch event:", eventKey, value);
		this.dispatchEvent(event);
	}
}

export { Atom, html, css, customElement, property, query, state };
