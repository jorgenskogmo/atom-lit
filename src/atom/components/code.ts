import { state } from "lit/decorators.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";

import { Atom, html, customElement } from "../lib/Atom";

import { styles } from "./code.css";
import { hljsstyles } from "./code-hljs.css";

import dedent from "../lib/Dedent";

import { decode } from "html-entities"; // needed?
import hljs from "highlight.js/lib/common";
import "./button";
import "./icon";

type Section = {
	html: string;
	raw: string;
	language: langType;
};

const atom_code_example = `
    <atom-code>        
        <code lang="html">
            <!-- your code here -->
        </code>
    </atom-code>`;

const langMap = {
	"ATOM-CODE-EXAMPLE": "Component usage",
	javascript: "JavaScript",
	typescript: "TypeScript",
	html: "HTML",
	css: "CSS",
};

type langType = keyof typeof langMap;

@customElement("atom-code")
export class Code extends Atom {
	static override styles = [styles, hljsstyles];

	@state()
	fragmentIndex = -1;

	private sections: Section[] = [];

	override async connectedCallback() {
		super.connectedCallback();
		this.sections = [];
		[...this.querySelectorAll("code")].map((frag) => {
			const raw = (frag as HTMLElement).innerHTML;
			const language = ((frag as HTMLElement).getAttribute("lang") ||
				"plain") as langType;
			if (language === "ATOM-CODE-EXAMPLE") {
				this.sections.push(this.format(atom_code_example, language));
			} else {
				this.sections.push(this.format(raw, language));
			}
		});
		this.fragmentIndex = 0;
		console.log("sections:", this.sections);
	}

	private format(raw: string, language: langType): Section {
		const text = decode(dedent(raw));

		if (language === "ATOM-CODE-EXAMPLE") {
			return {
				language,
				raw: text,
				html: hljs.highlight(text, { language: "html" }).value,
			};
		}
		return {
			language,
			raw: text,
			html: hljs.highlight(text, { language }).value,
		};
	}

	private setFragmentIndex(index: number) {
		this.fragmentIndex = index;
	}

	private copy() {
		navigator.clipboard.writeText(this.sections[this.fragmentIndex].raw);
		const btn = this.renderRoot.querySelector(".copyBtn");
		if (btn) {
			btn.classList.add("active");
			setTimeout(() => {
				btn.classList.remove("active");
			}, 500);
		}
	}

	private langString(lang: langType): string {
		if (Object.keys(langMap).includes(lang)) {
			return langMap[lang];
		}
		return lang;
	}

	override render() {
		if (this.sections.length === 0)
			return html`<!-- atom-code: no code fragments to render -->`;

		const buttons =
			this.sections.length > 1
				? this.sections.map(
						(s: Section, index: number) =>
							html`<button class="hasmany ${this.fragmentIndex === index ? "selected" : ""}" @click=${() => this.setFragmentIndex(index)}>${this.langString(s.language)}</button> `,
					)
				: html`<button class="selected">${this.langString(this.sections[0].language)}</button>`;

		return html`    
        <div class="container">
            <div class="header">${buttons}</div>
            
            <pre><code class="hljs">${unsafeHTML(this.sections[this.fragmentIndex].html)}</code></pre>
            
            <div class="copyBtn" @click=${() => this.copy()}>
                <atom-icon slot="left" name="icon_copy"></atom-icon>
            </div>
        </div>`;
	}
}
