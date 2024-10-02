import { query } from "lit/decorators.js";
import { Atom, html, customElement, css } from "../lib/Atom";

@customElement("atom-toast")
export class Toast extends Atom {
	static override styles = css`
		:host {
			position: fixed;
            bottom: 1rem;
            right: 1rem;
            z-index: 999;
            isolation: isolate;
        }
        h4 {
            font: 500 16px/32px var(--atom-font-family-default);
            margin: 0;
        }
        p {
            font: 400 14px/16px var(--atom-font-family-default);
            margin: 0;
        }
        .container {
            display: none;
            background-color: var(--atom-fg);
            color: var(--atom-bg);
            padding: 0.5rem 1rem;
            padding-bottom: 1rem;
            border-radius: 4px;
            width: 300px;
            opacity: 0;
            transition: opacity cubic-bezier(0.165, 0.84, 0.44, 1) 500ms;
        }
        .container.fadein {
            display: block;
            opacity: 1;
        }
        
        .container.fadeout {
            opacity: 0;
        }

        .container.hide {
            display: none;
            opacity: 0;
        }
	`;

	@query(".container")
	private container!: HTMLDivElement;

	private timeout_hide: Timer | undefined = undefined;
	private timeout_remove: Timer | undefined = undefined;

	private DISPLAY_DURATION = 2000; // ms

	constructor() {
		super();
		window.toast = (title: string, msg: string) => {
			console.log("toast:", title, msg);

			this.container.innerHTML = `
                <h4>${title}</h4>
                <p>${msg}</p>
            `;

			clearTimeout(this.timeout_hide);
			clearTimeout(this.timeout_remove);
			this.container.classList.remove("hide");
			this.container.classList.remove("fadein");
			this.container.classList.remove("fadeout");

			this.container.classList.add("fadein");
			this.timeout_hide = setTimeout(() => {
				this.container.classList.add("fadeout");
			}, this.DISPLAY_DURATION);
			this.timeout_remove = setTimeout(() => {
				this.container.classList.remove("fadeout");
				this.container.classList.add("hide");
			}, this.DISPLAY_DURATION + 500);
		};
	}

	override render() {
		return html`<div class="container"><h4>title</h4>
                <p>msg</p></div>`;
	}
}
