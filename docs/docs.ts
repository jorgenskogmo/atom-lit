import "../src/state";
import "../src/atom/index";

import { data } from "./data";

document.addEventListener("DOMContentLoaded", () => {
	const mainFrame = document.querySelector("#main");
	if (!mainFrame) return;

	const sidebarPagesEl = document.querySelector("#sidebar > div.pages");
	if (sidebarPagesEl) {
		const html = data.sidebar
			.map((page) => `<a href="${page.file}">${page.name}</a>`)
			.join("\n");
		sidebarPagesEl.innerHTML = html;

		Array.from(document.querySelectorAll("#sidebar a")).map((link) => {
			link.addEventListener("click", (e: Event) => {
				e.preventDefault();
				const t = e.currentTarget as HTMLAnchorElement;
				const href = t.getAttribute("href");
				console.log("link clicked", href);
				if (href) {
					mainFrame.src = href;
				}
			});
		});
	}
});
