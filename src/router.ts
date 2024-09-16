// router

export const route_container_selector = "#main > section[data-atroute]";

export const route = (addr = "/" /* initial route */) => {
  document.querySelectorAll(route_container_selector).forEach((elm: HTMLDivElement) => {
    elm.style.display =
      elm.getAttribute("data-atroute") == addr ? "block" : "none";
    // parent = elm.parentElement;
  });
};

const container = document.querySelector(
  route_container_selector
)!.parentElement;

container!.style.display = "none";
route();
container!.style.display = "block";

document.querySelectorAll("[data-setroute]").forEach((btn) => {
  const addr = btn.getAttribute("data-setroute");
  btn.addEventListener("click", () => route(addr));
});
