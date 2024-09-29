import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ds-button")
class DSButton extends LitElement {
	static override styles = css`
    :host {
      --_border-width: 1px;
      --_background: var(--normal);
      
      .positive {
        --_background: var(--positive);
      }
      .warning {
        --_background: var(--warning);
      }
      .negative {
        --_background: var(--negative);
      }      
    }

    input[type="button"] {
      all: unset;
      cursor: pointer;
      white-space: nowrap;
      color: var(--btn-label);
      background-color: var(--_background);
      padding: var(--btn-py) var(--btn-px);
      font: var(--font-label);
      margin-inline: calc(var(--_border-width) * 2);
      outline-offset: calc(var(--_border-width) * -1);
      border-radius: var(--radius);
    }

    input[type="button"]:hover {
      background-color: color-mix(in srgb, var(--_background), #000 5%);
      outline: var(--_border-width) solid color-mix(in srgb, var(--_background), #fff 33%)
    }
    input[type="button"]:active {
      outline: var(--_border-width) solid var(--background);
    }

    input[type=button]:focus-visible {
      outline: 4px solid var(--input-focus);
    }

  `;

	@property()
	variant: "normal" | "positive" | "warning" | "negative" = "normal";

	@property({ type: String })
	value = "Button";

	constructor() {
		super();
	}

	override render() {
		return html` <input type="button" class="${this.variant}" value="${this.value}"></input> `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"ds-button": DSButton;
	}
}
