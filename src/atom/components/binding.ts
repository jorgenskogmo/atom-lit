import { Atom, html, customElement, css } from "../lib/Atom";

@customElement("atom-binding")
export class Binding extends Atom {
	static override styles = css`
		span {
			background-color: var(--atom-control-bg);
			color: var(--atom-fg);
			padding: 4px;
			padding-top: 3px;
			padding-bottom: 4px;
			border-radius: 4px;
			font-size: 80%;
		}
	`;

	override render() {
		return html`<span>${this.value}</span>`;
	}
}
