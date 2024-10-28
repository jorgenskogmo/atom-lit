import { Atom, html, customElement, property, css } from "../lib/Atom";
import { unsafeSVG } from "lit-html/directives/unsafe-svg.js";

import type { FeatherIconNamesType } from "../lib/FeatherIcons";
import * as shapes from "../lib/FeatherIconShapes";

const styles = css`
:host {
	display: inline-block;
	--_size: 1;
}

.atom-icon.full {
	--_size: 1.0;
}
.atom-icon.full > svg {
	width: 100%;
	height: 100%;
}


.atom-icon.xxxl {
	--_size: 4.0;
}
.atom-icon.xxl {
	--_size: 3.0;
}
.atom-icon.xl {
	--_size: 2;
}
.atom-icon.l {
	--_size: 1.5;
}
.atom-icon.m {
	--_size: 1;
}
.atom-icon.s {
	--_size: 0.75;
}

.atom-icon > svg {
	display: block;
	width: calc(var(--_size) * var(--atom-icon-size, 12px));
	height: calc(var(--_size) * var(--atom-icon-size, 12px));
	stroke: currentColor;
	stroke-linecap: round;
	stroke-linejoin: round;
	stroke-width: 1;
	fill: none;
}
.atom-icon.full > svg { stroke-width: 1; }
.atom-icon.xxxl > svg { stroke-width: 1; }
.atom-icon.xxl > svg { stroke-width: 1.25; }
.atom-icon.xl > svg { stroke-width: 1.5; }
.atom-icon.l > svg { stroke-width: 1.75; }
.atom-icon.m > svg { stroke-width: 2; }
.atom-icon.s > svg { stroke-width: 1.5; }
`;

@customElement("atom-icon")
export class Icon extends Atom {
	static override styles = [styles];

	@property({ type: String, reflect: true })
	name: FeatherIconNamesType = "icon_airplay";

	@property({ type: String, reflect: true })
	size: "s" | "m" | "l" | "xl" | "xxl" | "xxxl" | "full" = "m";

	override render() {
		return html`<div class="atom-icon ${this.size}">${unsafeSVG(shapes[this.name])}</div>`;
	}
}
