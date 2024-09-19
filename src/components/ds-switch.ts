import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ds-switch")
class DSSwitch extends LitElement {
	static override styles = css`

    .range {
        position: relative;
    }
    .icon {
        position: absolute;
        z-index: 2;
        top: -2px;
        pointer-events: none;
    }
    .icon.light {
        left: 3px;
        filter: invert();
    }
    .icon.dark {
        left: 27px;
    }
    .icon.hide {
        display: none;
    }

    input[type=range] {
        -webkit-appearance: none;
        margin: 0;
        width: 48px;
        cursor: pointer;
        background-color: var(--foreground);
      }
      input[type=range]::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        width: 100%;
        height: 20px;
        outline: 4px solid var(--foreground);
        border-radius: var(--radius-full);
        background-color: var(--foreground);
      }
      
      input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        cursor: pointer;
        height: 20px;
        width: 20px;
        border-radius: var(--radius-full);
        margin-top: 0px;
        background: var(--background);
      }   


      input[type="range"]:focus {
        outline: none;
      }
      input[type=range]:focus-visible::-webkit-slider-runnable-track, input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 4px solid var(--input-focus);
      }
      
      
  `;

	@property({ type: Number, reflect: true })
	on = 1;

	override updated(_changedProperties: Map<string, unknown>) {
		const event = new Event("input", { bubbles: true, composed: true });
		this.dispatchEvent(event);
	}

	private onChange(e: Event) {
		const value = (e.target as HTMLInputElement).value;
		this.on = Number.parseInt(value);
	}

	override render() {
		return html`    
    <div class="container">
      <div class="range">
        <input
            type="range"
            min="0"
            max="1"
            step="1"
            value="${this.on ? 1 : 0}"
            @input="${this.onChange}"
        />
        <div class="icon light ${this.on ? "" : "hide"}"><img src="/icons/sun-16.svg" /></div>
        <div class="icon dark ${this.on ? "hide" : ""}"><img src="/icons/moon-16.svg" /></div>
      </div>
    </div>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"ds-switch": DSSwitch;
	}
}
