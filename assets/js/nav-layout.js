document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("site-nav");
  if (!nav) return;

  const primary = nav.querySelector(".greedy-nav__primary");
  const links = nav.querySelector(".greedy-nav__links");
  const hidden = nav.querySelector(".greedy-nav__hidden-links");
  const toggle = nav.querySelector(".greedy-nav__toggle");

  if (!primary || !links || !hidden || !toggle) return;

  const items = Array.from(links.children);
  let frame = null;

  const syncToggleState = () => {
    const hiddenCount = hidden.children.length;
    toggle.setAttribute("data-count", String(hiddenCount));
    toggle.setAttribute(
      "aria-label",
      hidden.classList.contains("is-hidden") ? "Open navigation menu" : "Close navigation menu"
    );
  };

  const resetLinks = () => {
    items.forEach((item) => {
      links.appendChild(item);
    });
    hidden.classList.add("is-hidden");
    toggle.classList.remove("close");
    toggle.classList.add("is-hidden");
    toggle.setAttribute("aria-expanded", "false");
    syncToggleState();
  };

  const layoutNav = () => {
    resetLinks();

    const narrowViewport = window.innerWidth < 380;
    const minVisibleItems = narrowViewport ? 0 : 1;

    while (links.scrollWidth > links.clientWidth && links.children.length > minVisibleItems) {
      toggle.classList.remove("is-hidden");
      hidden.prepend(links.lastElementChild);
    }

    if (!hidden.children.length) {
      toggle.classList.add("is-hidden");
    }

    syncToggleState();
  };

  const scheduleLayout = () => {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      frame = null;
      layoutNav();
    });
  };

  toggle.addEventListener("click", (event) => {
    event.preventDefault();
    if (toggle.classList.contains("is-hidden")) return;
    hidden.classList.toggle("is-hidden");
    toggle.classList.toggle("close", !hidden.classList.contains("is-hidden"));
    toggle.setAttribute("aria-expanded", hidden.classList.contains("is-hidden") ? "false" : "true");
    syncToggleState();
  });

  document.addEventListener("click", (event) => {
    if (nav.contains(event.target)) return;
    hidden.classList.add("is-hidden");
    toggle.classList.remove("close");
    toggle.setAttribute("aria-expanded", "false");
    syncToggleState();
  });

  hidden.addEventListener("click", () => {
    hidden.classList.add("is-hidden");
    toggle.classList.remove("close");
    toggle.setAttribute("aria-expanded", "false");
    syncToggleState();
  });

  window.addEventListener("resize", scheduleLayout);
  window.visualViewport?.addEventListener("resize", scheduleLayout);
  window.addEventListener("orientationchange", scheduleLayout);

  scheduleLayout();
});
