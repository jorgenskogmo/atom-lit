import { state } from "lit/decorators.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";

import { Atom, html, customElement } from "../lib/Atom";

import { styles } from "./code.css";
import { styles as hilitejsCss } from "./code-hilitejs.css";

import dedent from "dedent";
import hljs from "highlight.js";
// TODO: Import minimal hljs bundle
// import hljs from "highlight.js/lib/core";
// import javascript from "highlight.js/lib/languages/javascript";
// import typescript from "highlight.js/lib/languages/typescript";
// hljs.registerLanguage("javascript", javascript);
// hljs.registerLanguage("typescript", typescript);

type Section = {
	html: string;
	raw: string;
	language: string;
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
			const raw = (frag as HTMLElement).innerText;
			const language = (frag as HTMLElement).getAttribute("lang") || "c";
			return {
				language,
				raw: dedent`${raw}`,
				html: hljs.highlight(dedent`${raw}`, { language }).value,
			};
		});
		this.fragmentIndex = 0;
	}

	private setFragmentIndex(index: number) {
		this.fragmentIndex = index;
	}

	private copy() {
		navigator.clipboard.writeText(this.sections[this.fragmentIndex].raw);
	}

	override render() {
		const buttons =
			this.sections.length > 1
				? this.sections.map(
						(s: Section, index: number) =>
							html`<button class="hasmany ${this.fragmentIndex === index ? "selected" : ""}" @click=${() => this.setFragmentIndex(index)}>${s.language}</button> `,
					)
				: html`<button class="selected">${this.sections[0].language}</button>`;

		return html`    
        <div class="container">
            <div class="header">${buttons}</div>
            
            <pre><code class="hljs">${unsafeHTML(this.sections[this.fragmentIndex].html)}</code></pre>

            <button class="copyBtn" @click=${() => this.copy()}>copy</button>
        </div>`;
	}
}
