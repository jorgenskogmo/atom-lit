import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

import { styles } from "./breadcrumbs.css";

@customElement("atom-breadcrumbs")
export class Breadcrumbs extends LitElement {
	static override styles = styles;

	@state()
	private breadcrumbs: Array<{ name: string; path: string }> = [];

	constructor() {
		super();
		this.breadcrumbs = this.getBreadcrumbs();
	}

	private getBreadcrumbs() {
		const path = window.location.pathname;
		const parts = path.split("/").filter(Boolean);
		const result = [
			{ name: "Home", path: "/" },
			...parts.map((part, index) => {
				const pageName = (part.charAt(0).toUpperCase() + part.slice(1)).replace(
					".html",
					"",
				);
				return {
					name: pageName,
					path: `/${parts.slice(0, index + 1).join("/")}/`,
				};
			}),
		];
		// console.log("Breadcrumbs generated:", result);
		return result;
	}

	override render() {
		return html`
      ${this.breadcrumbs.map(
				(crumb, index) => html`
          ${index > 0 ? html`<span class="slash">/</span>` : ""}
          ${
						index === this.breadcrumbs.length - 1
							? html`<span>${crumb.name}</span>`
							: html`<a href="${crumb.path}">${crumb.name}</a>`
					}
        `,
			)}
    `;
	}
}
