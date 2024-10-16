import { Atom, html, customElement } from "../lib/Atom";
import { styles } from "./binding.css";

@customElement("atom-binding")
export class Binding extends Atom {
	static override styles = styles;

	override render() {
		return html`<span>${this.value}</span>`;
	}
}
