import { Atom, html, customElement, css, property } from "../lib/Atom";

@customElement("atom-button")
export class Button extends Atom {
	@property({ type: String })
	variant: "normal" | "destructive" | "outline" | "subtle" = "normal";

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

        color: var(--atom-button-fg, '#fff');
        background: var(--atom-button-bg, '#f00');
        border: var(--atom-button-border);
        border-radius: var(--atom-button-border-radius);
        padding-block: var(--atom-button-padding-block);
        padding-inline: var(--atom-button-padding-inline);
        margin-block-end: 4px;
    }
    .button:hover {
        background-color: color-mix(in srgb, var(--atom-button-bg), #fff 10%);
        border-color: color-mix(in srgb, var(--atom-button-bg), #fff 10%);
    }
    
    /* destructive */
    .button.destructive {
        background-color: var(--atom-button-destructive-bg);
        border-color: var(--atom-button-destructive-bg);
        color: var(--atom-button-destructive-fg);
    }
    .button.destructive:hover {
        background-color: color-mix(in srgb, var(--atom-button-destructive-bg), #000 10%);
        border-color: color-mix(in srgb, var(--atom-button-destructive-bg), #000 10%);
    }

    /* outline */
    .button.outline {
        background-color: var(--atom-button-outline-bg);
        border-color: color-mix(in srgb, var(--atom-button-outline-bg), #000 20%); 
        color: var(--atom-button-outline-fg);
    }
    .button.outline:hover {
        background-color: color-mix(in srgb, var(--atom-button-outline-bg), #000 5%);
        border-color: color-mix(in srgb, var(--atom-button-outline-bg), #000 20%); 
    }

    /* subtle */
    .button.subtle {
        background-color: var(--atom-button-subtle-bg);
        border-color: var(--atom-button-subtle-bg); 
        color: var(--atom-button-subtle-fg);
    }
    .button.subtle:hover {
        background-color: color-mix(in srgb, var(--atom-button-subtle-bg), #000 5%);
        border-color: color-mix(in srgb, var(--atom-button-subtle-bg), #000 5%); 
    }

    /* content */

    .inner > slot {
        display: inline-block;
        margin-top: -1px;
    }

    .inner {
        height: var(--atom-button-fontsize);
        /* background-color: #00ff0068; */
        line-height: var(--atom-button-fontsize);
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
