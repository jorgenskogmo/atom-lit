import type { PropertyValues } from "lit";
import { customElement, property } from "../lib/Atom";
import { Switch } from "./switch";

const LOCALSTORAGE_KEY = "atom-theme";

@customElement("atom-switch-darkmode")
export class SwitchDarkmode extends Switch {
	@property({ type: String })
	default: "dark" | "light" | "system" = "light"; // default to light mode

	protected override willUpdate(changedProperties: PropertyValues): void {
		// only first time:
		if (
			changedProperties.has("default") &&
			changedProperties.get("default") === undefined
		) {
			let useDark = false;
			console.log("lightdark init");

			const user_prefers = localStorage.getItem(LOCALSTORAGE_KEY);
			console.log("lightdark user_prefers", user_prefers);
			if (user_prefers !== null) {
				useDark = user_prefers === "dark";
			} else {
				useDark = Boolean(window.matchMedia("(prefers-color-scheme: dark)"));
			}
			// } else {
			// 	useDark = this.default === "dark";
			// }

			this.value = useDark ? 1 : 0;
			this.setTheme();
		}
	}

	override handleChange(): void {
		this.setTheme();
	}

	private setTheme(): void {
		console.log(
			"lightdark setTheme, this.value:",
			this.value,
			this.value === 1 ? "dark" : "light",
		);
		if (this.value === 1) {
			document.body.classList.add("dark-theme");
			document.body.classList.remove("light-theme");
		} else {
			document.body.classList.add("light-theme");
			document.body.classList.remove("dark-theme");
		}
		localStorage.setItem(LOCALSTORAGE_KEY, this.value === 1 ? "dark" : "light");
	}
}
