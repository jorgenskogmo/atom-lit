import { state } from "lit/decorators.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";

import { Atom, html, customElement, property } from "../lib/Atom";

import { styles } from "./code.css";
import { styles as starry } from "./code-starry-both.css";

import { common, createStarryNight } from "@wooorm/starry-night";
// import textMd from '@wooorm/starry-night/text.md'
import sourceJs from "@wooorm/starry-night/source.js";
import sourceCss from "@wooorm/starry-night/source.css";

import { toHtml } from "hast-util-to-html";
import dedent from "dedent";

@customElement("atom-code")
export class Code extends Atom {
	static override styles = [styles, starry];

	@state()
	out = "";

	// can we see our slot'ed elements?
	// will need to count and toggle their visibility...
	override async connectedCallback() {
		super.connectedCallback();
		console.log("connectedCallback");
		// await super.updateComplete;
		// console.log("updateComplete");

		// await new Promise((resolve) => setTimeout(resolve));
		// console.log("awa");

		const sections = [...this.querySelectorAll("atom-code-fragment")].map(
			// (frag) => (frag as HTMLDivElement).outerHTML,
			(frag) => (frag as HTMLDivElement).innerHTML.trim(),
		);

		console.log(this.querySelectorAll("atom-code-fragment"));
		console.log("sections:", sections[0]);

		const code = sections[0]; //"const a = 1"; // input code

		console.time("starryNight");
		// const starryNight = await createStarryNight(common);

		const starryNight = await createStarryNight([sourceJs]);
		console.timeEnd("starryNight");
		const scope = starryNight.flagToScope("js") || "js";
		const tree = starryNight.highlight(dedent`${code}`, scope);

		this.out = toHtml(tree); // 1ms
	}

	override render() {
		return html`    
        <div>
            Hilted code:
            <pre><code>${unsafeHTML(this.out)}</code></pre>
        </div>`;
	}
}

@customElement("atom-code-fragment")
export class CodeFragment extends Atom {
	@property({ type: String })
	override lang: "js" | "ts" | "css" | "html" = "js";

	override render() {
		return html`    
        <div>
            <p>lang: ${this.lang}</p>
            <pre>
                <slot></slot>
            </pre>
        </div>`;
	}
}
