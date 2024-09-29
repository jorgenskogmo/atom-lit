import type { PropertyValues } from "lit";
import { customElement, property } from "../lib/Atom";
import { Switch } from "./switch";

const LOCALSTORAGE_KEY = "atom-theme";

@customElement("atom-switch-darkmode")
export class SwitchDarkmode extends Switch {
	@property()
	default: "dark" | "light" | "system" = "light"; // default to light mode

	@property({ type: String, reflect: true })
	darkclass = "dark-theme"; // name of the class to set on html.body

	protected override willUpdate(changedProperties: PropertyValues): void {
		// only first time:
		if (
			changedProperties.has("default") &&
			changedProperties.get("default") === undefined
		) {
			let useDark = false;

			if (this.default === "system") {
				const user_prefers = localStorage.getItem(LOCALSTORAGE_KEY);
				if (user_prefers !== null) {
					useDark = user_prefers === "dark";
				} else {
					useDark = Boolean(window.matchMedia("(prefers-color-scheme: dark)"));
				}
			} else {
				useDark = this.default === "dark";
			}

			this.value = useDark ? 1 : 0;
			this.setTheme();
		}
	}

	override handleChange(): void {
		this.setTheme();
	}

	private setTheme(): void {
		console.log("lightdark setTheme, this.value:", this.value);
		if (this.value === 1) {
			document.body.classList.add("dark-theme");
		} else {
			document.body.classList.remove("dark-theme");
		}
		localStorage.setItem(LOCALSTORAGE_KEY, this.value === 1 ? "dark" : "light");
	}
}
