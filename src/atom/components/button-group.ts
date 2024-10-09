import {
	Atom,
	html,
	customElement,
	css,
	property,
	type AtomEventKey,
} from "../lib/Atom";
import "./button";

@customElement("atom-button-group")
export class ButtonGroup extends Atom {
	static atomEvent: AtomEventKey = "click";

	// @property({ type: String, reflect: true })
	// override value = "";

	static override styles = css`
		:host {
            background-color: var(--atom-color-subtle);
            border-radius: calc(var(--atom-button-border-radius) + 4px);
            padding: 4px;
            display: inline-flex;
        }
        
        .item {
            display: inline-block;
            font: var(--atom-font-control);
            padding-inline: var(--atom-button-padding-inline);
            padding-block: calc(var(--atom-button-padding-block) / 2);
            border-radius: var(--atom-button-border-radius);
            color: var(--atom-fg);
            cursor: pointer;
            /* background-color: #f00; */
            margin-right: 0.25rem;
        }
        :host div:last-child {
            margin-right: 0;
        }
        .item:hover {
            background-color: var(--atom-bg);
        }

        .item.selected {
            background-color: var(--atom-fg);
            color: var(--atom-bg);
        }
	`;

	@property({ type: String, reflect: true })
	selected = "";

	@property({ type: String, reflect: true })
	options = "";

	private select(label: string, event: Event) {
		console.log("select", label);
		this.selected = label;
		this.announce(ButtonGroup.atomEvent, this.selected, event);
	}

	private item(label: string) {
		const selected = label === this.selected ? "selected" : "";
		return html`<div @click=${(event: Event) => this.select(label, event)} class="item ${selected}">${label}</div>`;
	}

	override render() {
		return html`${this.options.split(",").map((opt) => this.item(opt.trim()))}`;
	}
}
