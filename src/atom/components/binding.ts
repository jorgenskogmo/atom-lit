import { Atom, html, customElement, css } from "../lib/Atom";

@customElement("atom-binding")
export class Binding extends Atom {
	static override styles = css`
		:host {
			background-color: #00ff9980;
			/* border: 1px dotted; */
			padding-inline: 4px;
		}
	`;

	override render() {
		return html`<span>${this.value}</span>`;
	}
}
