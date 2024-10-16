import { state } from "lit/decorators.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";

import { Atom, html, customElement } from "../lib/Atom";

import { styles } from "./code.css";
import { styles as hilitejsCss } from "./code-hilitejs.css";

import dedent from "dedent";
import hljs from "highlight.js";
// import hljs from "highlight.js/lib/core";
// import javascript from "highlight.js/lib/languages/javascript";
// import typescript from "highlight.js/lib/languages/typescript";
// hljs.registerLanguage("javascript", javascript);
// hljs.registerLanguage("typescript", typescript);

type Section = {
	html: string;
	lang: string;
};

@customElement("atom-code")
export class Code extends Atom {
	static override styles = [styles, hilitejsCss];

	@state()
	fragmentIndex = -1;

	private sections: Section[] = [];

	override async connectedCallback() {
		const selector = "code";
		super.connectedCallback();
		console.log(this.querySelectorAll(selector));

		this.sections = [...this.querySelectorAll(selector)].map((frag) => {
			const html = (frag as HTMLElement).innerHTML;
			const language = (frag as HTMLElement).getAttribute("lang") || "c";
			return {
				lang: language,
				html: hljs
					.highlight(dedent`${html}`, { language })
					.value.replace("&amp;gt;", ">"), // FIXME: find better way
			};
		});
		console.log("sections:", this.sections);
		console.log("sections[0]:", this.sections[0]);
		this.fragmentIndex = 0;
	}

	private setFragmentIndex(index: number) {
		console.log("setFragmentIndex", index);
		this.fragmentIndex = index;
	}

	override render() {
		const buttons =
			this.sections.length > 1
				? this.sections.map(
						(s: Section, index: number) =>
							html`<button class="hasmany ${this.fragmentIndex === index ? "selected" : ""}" @click=${() => this.setFragmentIndex(index)}>${s.lang}</button> `,
					)
				: html`<button class="selected">${this.sections[0].lang}</button>`;

		return html`    
        <div class="container">
            <div class="header">${buttons}</div>
            
            <pre><code class="hljs">${unsafeHTML(this.sections[this.fragmentIndex].html)}</code></pre>
        </div>`;
	}
}
