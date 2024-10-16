// init?
document.addEventListener("DOMContentLoaded", () => {
	console.log("atom domcontentloaded", document.body.classList);
	if (
		document.body.classList.contains("dark-theme") ||
		document.body.classList.contains("light-theme")
	) {
		console.log("atom: theme already set");
	} else {
		console.log("atom index settings color scheme");
		if (window.matchMedia("(prefers-color-scheme: dark)")) {
			document.body.classList.add("dark-theme");
		} else {
			document.body.classList.add("light-theme");
		}
	}
});
