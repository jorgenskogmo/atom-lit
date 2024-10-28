// css
import "./style/atom-figma-tokens.css";
import "./style/atom.css";
import "./style/init.ts";

// atoms
import "./components/binding";
import "./components/range";
import "./components/range-color";
import "./components/button";
import "./components/icon";
import "./components/switch";
import "./components/toast";
import "./components/button-group";
import "./components/breadcrumbs";
import "./components/code";

// molecules
import "./components/switch-darkmode";

// organisms

// // init?
// document.addEventListener("DOMContentLoaded", () => {
// 	console.log("atom domcontentloaded", document.body.classList);
// 	if (
// 		document.body.classList.contains("dark-theme") ||
// 		document.body.classList.contains("light-theme")
// 	) {
// 		console.log("atom: theme already set");
// 	} else {
// 		console.log("atom index settings color scheme");
// 		if (window.matchMedia("(prefers-color-scheme: dark)")) {
// 			document.body.classList.add("dark-theme");
// 		} else {
// 			document.body.classList.add("light-theme");
// 		}
// 	}
// });
