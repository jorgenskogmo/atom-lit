import { Atom, html, customElement, css, property } from "../lib/Atom";

@customElement("atom-button")
export class Button extends Atom {
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

	override handleChange(): void {
		console.log("handleChange this.value:", this.value);
	}

	override onChange(_e: Event) {
		const value = this.value + 1;
		this.announce(value);
	}

	static override styles = css`
    :host {
        display: inline-block;
        position: relative;
        width: auto;
        font: var(--atom-font-p);
    }
    
    .button {
        cursor: pointer;
        display: inline-flex;
        align-items: stretch;
        justify-content: center;
        width: 100%;
        text-decoration: none;
        user-select: none;
        -webkit-user-select: none;
        white-space: nowrap;
        vertical-align: middle;

        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        transition-duration: .15s;

        border-width: 1px;
        border-color: var(--atom-fg);
        border-style: solid;
        border-radius: var(--atom-button-border-radius);
        padding-block: var(--atom-button-padding-block);
        padding-inline: var(--atom-button-padding-inline);
        margin-block-end: 4px;

        font: var(--atom-font-control);
    }

    /* normal */
    .button {
        background-color: var(--atom-btn-normal-bg);
        border-color: var(--atom-btn-normal-bg);
        color: var(--atom-btn-normal-fg);
    }

    .button:hover {
        background-color: var(--atom-button-normal-hover);
        border-color: var(--atom-button-normal-hover);
    }

    /* primary */
    .button.primary {
        background-color: var(--atom-btn-primary-bg);
        border-color: var(--atom-btn-primary-bg);
        color: var(--atom-btn-primary-fg);
    }

    .button.primary:hover {
        background-color: var(--atom-button-primary-hover);
        border-color: var(--atom-button-primary-hover);
    }
    
    /* destructive */
    .button.destructive {
        background-color: var(--atom-color-destructive);
        border-color: var(--atom-color-destructive);
        color: var(--atom-btn-destructive-fg);
    }
    .button.destructive:hover {
        background-color: var(--atom-button-destructive-hover);
        border-color: var(--atom-button-destructive-hover);
    }

    /* constructive */
    .button.constructive {
        background-color: var(--atom-color-constructive);
        border-color: var(--atom-color-constructive);
        color: var(--atom-btn-constructive-fg);
    }
    .button.constructive:hover {
        background-color: var(--atom-button-constructive-hover);
        border-color: var(--atom-button-constructive-hover);
    }

    /* outline */
    .button.outline {
        background-color: var(--atom-bg);
        border-color: var(--atom-button-subtle-hover);
        color: var(--atom-fg);
    }
    .button.outline:hover {
        background-color: var(--atom-color-subtle);
    }

    /* subtle */
    .button.subtle {
        background-color: var(--atom-color-subtle);
        border-color: var(--atom-color-subtle); 
        color: var(--atom-fg);
    }
    .button.subtle:hover {
        background-color: var(--atom-button-subtle-hover);
        border-color: var(--atom-button-subtle-hover);
    }

    /* content */

    .inner > slot {
        display: inline-block;
        margin-top: -1px;
    }

    .inner {
        height: var(--atom-icon-size);
        line-height: var(--atom-icon-size);
        display: flex;
        align-items: center;
    }

    slot[name=left]::slotted(*)::after, 
    slot[name=right]::slotted(*)::before {
        content: "";
        padding-right: var(--atom-button-icon-padding);
    }
    slot[name=left]::slotted(*) {
        margin-left: var(--atom-button-icon-offset);
    }
    slot[name=right]::slotted(*) {
        margin-right: var(--atom-button-icon-offset);
    }
    
    slot[name=center]::slotted(*) {
        margin: 0 -1rem;
    }
`;

	override render() {
		return html`    
        <button @click=${this.onChange} class="button ${this.variant}">
            <div class="inner">
                <slot name="left" class="prefix"></slot>
                <span class="label">${this.label}</span>
                <slot name="center" class="center"></slot>
                <slot name="right" class="suffix"></slot>
            </div>
        </button>`;
	}
}
