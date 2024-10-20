// strips indentation from multi-line strings
//
// based on https://github.com/dmnd/dedent
// but simplified and dependency-free

/**
 * @description strips indentation from multi-line strings
 * @param raw The multi-line string you want to de-indent. Relative indentations is kept.
 * @returns Multi-line string de-indentet by length of the first indentation in the original string.
 */
export default function dedent(raw: string): string {
	const lines = raw.split("\n");
	let mindent: number | null = null;
	for (const l of lines) {
		const m = l.match(/^(\s+)\S+/);
		if (m) {
			const indent = m[1].length;
			if (!mindent) {
				// this is the first indented line
				mindent = indent;
			} else {
				mindent = Math.min(mindent, indent);
			}
		}
	}

	if (mindent !== null) {
		return lines
			.map((l) => (l[0] === " " || l[0] === "\t" ? l.slice(mindent) : l))
			.join("\n")
			.trim();
	}

	// default to original string
	return raw;
}
