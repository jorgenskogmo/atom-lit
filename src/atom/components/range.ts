import { Atom, html, customElement, property, css } from "../lib/Atom";

@customElement("atom-range")
export class Range extends Atom {
	@property({ type: Number, reflect: true })
	min = 1;

	@property({ type: Number, reflect: true })
	max = 30;

	@property({ type: Number, reflect: true })
	step = 1;

	override handleChange(): void {
		console.log("handleChange this.value:", this.value);
	}

	override onChange(e: Event) {
		const value = Number.parseInt((e.target as HTMLInputElement).value);
		this.announce(value);
	}

	static override styles = css`
		input {
			accent-color: #000;
		}
	`;

	override render() {
		return html`    
    <div style="display: flex; border: 1px dotted;">
        <input
            type="range"
            min=${this.min}
            max=${this.max}
            step=${this.step}
            @input=${this.onChange}
            .value=${this.value.toString()}
        />
        <span style="margin-inline:0.5rem">${this.value}</span>
    </div>`;
	}
}
