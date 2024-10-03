import { Atom, html, customElement, css, property } from "../lib/Atom";
import "./button";

@customElement("atom-button-group")
export class ButtonGroup extends Atom {
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
            padding-block: var(--atom-button-padding-block);
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
            background-color: var(--atom-bg);
        }
	`;

	@property({ type: String, reflect: true })
	selected = "";

	@property({ type: String, reflect: true })
	options = "";

	private select(label: string) {
		console.log("select", label);
		this.selected = label;
	}

	private item(label: string) {
		const selected = label === this.selected ? "selected" : "";
		return html`<div @click=${() => this.select(label)} class="item ${selected}">${label}</div>`;
	}

	override render() {
		return html`<div>${this.options.split(",").map((opt) => this.item(opt.trim()))}</div>`;
	}
}
