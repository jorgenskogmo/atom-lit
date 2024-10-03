import { Atom, html, customElement, css, property } from "../lib/Atom";

const localStyles = css`
    :host {
        display: inline-block;
        position: relative;
        width: auto;        
        font-size: var(--atom-button-fontsize);
        font-weight: var(--atom-button-fontweight);
    }

    .button {
        cursor: pointer;
        display: inline-flex;
        align-items: stretch;
        justify-content: center;
        width: 50px;
        text-decoration: none;
        user-select: none;
        -webkit-user-select: none;
        white-space: nowrap;
        vertical-align: middle;        
        border: none;
        border-radius: 9999px;
        margin-block-end: 4px;
        transition-property: background;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        transition-duration: .15s;

        padding: 2px;
    }

    .thumb {
        display: block;
        position: relative;
        width: 18px;
        height: 18px;
        margin: 1px;
        border-radius: 9999px;
        transition-property: left;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        transition-duration: .15s;
        background: var(--atom-bg);
    }
    
    .button.on {
        background: var(--atom-color-accent);
    }
    
    .button.off {
        background: var(--atom-control-bg);
    }

    .button.off .thumb {
        left: -13px;
    }
    .button.on .thumb {
        left: 13px;
    }

    .button.on.disabled,
    .button.off.disabled,
    .button.disabled {
        /* opacity: 0.5; */
        background: light-dark(
            hsl(var(--atom-colorbase-hue) 0% 50% / 25%),
            hsl(var(--atom-colorbase-hue) 0% 50% / 50%)
        );
        cursor: not-allowed;
    }
    .button.on.disabled .thumb,
    .button.off.disabled  .thumb,
    .button.disabled  .thumb {
        background: light-dark(
            hsl(var(--atom-colorbase-hue) 0% 100% / 66%),
            hsl(var(--atom-colorbase-hue) 0% 50% / 33%)
        );
        left:0px;
    }

    .label {
        margin-left: 4px;
        font: var(--atom-font-label);
    }
    .label.disabled {
        opacity: 0.5;
    }
`;

@customElement("atom-switch")
export class Switch extends Atom {
	@property({ type: Boolean })
	disabled = false;

	// override handleChange(): void {
	// 	console.log("handleChange this.value:", this.value);
	// }

	// protected override firstUpdated(_changedProperties: PropertyValues): void {
	// 	console.log("switch firstUpdated", _changedProperties);
	// }

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

	override onChange(_e: Event) {
		if (this.value) {
			this.value = 0;
		} else {
			this.value = 1;
		}
		this.announce(this.value);
	}

	static override styles = localStyles;

	override render() {
		return html`    
        <button @click=${this.disabled ? null : this.onChange} class="button ${this.value ? "on" : "off"} ${this.disabled ? "disabled" : ""}">
            <div class="thumb"></div>
        </button>
        <span class="label ${this.disabled ? "disabled" : ""}"><slot></slot>(${this.value})</span>`;
	}
}
