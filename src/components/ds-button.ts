import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ds-button")
class DSButton extends LitElement {
	static override styles = css`
    :host {
      .primary {
        --_background: var(--primary);
        --_foreground: var(--primary-foreground);
      }
      .secondary {
        --_background: var(--secondary);
        --_foreground: var(--secondary-foreground);
      }

      :hover {
        outline: var(--border-width) solid
          color-mix(in srgb, var(--_background), #fff 66%);
      }
      :active {
        outline: var(--border-width) solid
          color-mix(in srgb, var(--_background), #000 33%);
      }
    }

    /* input[type="button"] {
      all: unset;
      padding-inline: 8px;
      padding-block: 2px 3px;
      border-radius: var(--radius);
      white-space: nowrap;
      margin: 2px 1px;
      cursor: pointer;
      color: var(--_foreground);
      background-color: var(--_background);
      outline: var(--border-width) solid
        color-mix(in srgb, var(--_background), #000 33%);
    } */

    input[type="button"] {
      all: unset;
      padding: 10px 8px;
      border-radius: 6px;
      white-space: nowrap;
      margin: 2px 1px;
      cursor: pointer;
      color: var(--_foreground);
      background-color: #000; 
      outline: 1px solid #000;
    }
  `;

	@property()
	variant = "primary";

	constructor() {
		super();
		this.variant = "primary";
	}

	override render() {
		return html` <input type="button" class="${this.variant}" value="native: ${this.variant}"></input> `;
	}
}

// customElements.define("ds-button", ButtonComponent);
declare global {
	interface HTMLElementTagNameMap {
		"ds-button": DSButton;
	}
}
