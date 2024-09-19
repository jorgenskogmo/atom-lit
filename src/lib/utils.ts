export function rgb2hex(_rgb: string) {
	const rgb = _rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
	if (rgb) {
		function hex(x: string) {
			return `0${Number.parseInt(x).toString(16)}`.slice(-2);
		}
		return `#${hex(rgb[1])}${hex(rgb[2])}${hex(rgb[3])}`;
	}

	console.log("rgb2hex illegal color input:", _rgb);
	return "#000000";
}
