import type { PropertyValues } from "lit";
import { Atom, html, customElement, css, property } from "../lib/Atom";

const localStyles = css`
    :host {
        display: inline-block;
        position: relative;
        width: auto;
        
        font-size: var(--atom-button-fontsize);
        font-weight: var(--atom-button-fontweight);
    }

    .button.on.disabled,
    .button.off.disabled,
    .button.disabled {
        opacity: 0.5;
        cursor: not-allowed;
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

        
        background: #ccc;
        border: none;
        border-radius: 9999px;
        
        margin-block-end: 4px;

        transition-property: background;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        transition-duration: .15s;
    }
    /* .button:hover {
        background-color: color-mix(in srgb, var(--atom-button-bg), #fff 10%);
        border-color: color-mix(in srgb, var(--atom-button-bg), #fff 10%);
    } */
        

    .thumb {
        display: block;
        position: relative;
        width: 20px;
        height: 20px;
        margin: 1px;
        background: #fff;
        /* width: var( --atom-button-fontsize );
        height: var( --atom-button-fontsize ); */
        border-radius: 9999px;
        transition-property: left;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        transition-duration: .15s;
    }
    
    .button.on {
        background: var(--atom-button-bg);
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
        <span class="label ${this.disabled ? "disabled" : ""}"><slot></slot></span>`;
	}
}
