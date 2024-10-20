import { Atom, html, customElement, property, css } from "../lib/Atom";
import { unsafeSVG } from "lit-html/directives/unsafe-svg.js";

import type { FeatherIconNamesType } from "../lib/FeatherIcons";
import * as shapes from "../lib/FeatherIconShapes";

const styles = css`
:host {
	display: block;
}

.atom-icon > svg {
	display: block;
	width: var(--atom-icon-size, 12px);
	height: var(--atom-icon-size, 12px);
	stroke: currentColor;
	stroke-width: 2;
	stroke-linecap: round;
	stroke-linejoin: round;
	fill: none;
	/* stroke: #0000ff !important; */
}
`;

@customElement("atom-icon")
export class Icon extends Atom {
	static override styles = [styles];

	@property({ type: String, reflect: true })
	name: FeatherIconNamesType = "icon_airplay";

	override render() {
		return html`<div class="atom-icon">${unsafeSVG(shapes[this.name])}</div>`;
	}
}
