// router

export const route_container_selector = "#main > section[data-atroute]";

export const route = (addr = "/" /* initial route */) => {
	const route_containers: NodeListOf<HTMLElement> = document.querySelectorAll(
		route_container_selector,
	);
	for (const htmlElm of route_containers) {
		htmlElm.style.display =
			htmlElm.getAttribute("data-atroute") === addr ? "block" : "none";
	}
};

const _route_container = document.querySelector(route_container_selector);

if (_route_container) {
	const container = _route_container.parentElement;
	if (container) {
		container.style.display = "none";
		route();
		container.style.display = "block";
	}
}

const setroute_elements = document.querySelectorAll("[data-setroute]");
for (const btn of setroute_elements) {
	const addr = btn.getAttribute("data-setroute");
	if (addr) btn.addEventListener("click", () => route(addr));
}
