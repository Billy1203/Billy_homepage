document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("site-nav");
  if (!nav) return;

  const brand = nav.querySelector(".greedy-nav__brand");
  const primary = nav.querySelector(".greedy-nav__primary");
  const links = nav.querySelector(".greedy-nav__links");
  const linkItems = Array.from(nav.querySelectorAll(".greedy-nav__item"));
  const mobileMenu = nav.querySelector(".greedy-nav__mobile-menu");
  const theme = nav.querySelector(".greedy-nav__theme");

  if (!brand || !primary || !links || !linkItems.length || !mobileMenu || !theme) return;
  let frame = null;
  const compactMenuQuery = window.matchMedia("(max-width: 40em)");
  const navGap = 12;
  const widthTolerance = 1;
  const compactTightClass = "greedy-nav--compact-tight";
  const compactFallbackClass = "greedy-nav--compact-fallback";
  const compactStackedClass = "greedy-nav--compact-stacked";

  const getViewportWidth = () => {
    const visualViewportWidth = window.visualViewport?.width;
    return Math.min(window.innerWidth, visualViewportWidth || window.innerWidth);
  };

  const closeMobileMenu = () => {
    mobileMenu.removeAttribute("open");
  };

  const parseSize = (value) => {
    const parsedValue = parseFloat(value || "0");
    return Number.isFinite(parsedValue) ? parsedValue : 0;
  };

  const resetCompactDensity = () => {
    nav.classList.remove(compactTightClass, compactFallbackClass, compactStackedClass);
  };

  const getAvailableMiddleWidth = () => {
    const brandRect = brand.getBoundingClientRect();
    const themeRect = theme.getBoundingClientRect();
    return Math.max(0, themeRect.left - brandRect.right - navGap * 2);
  };

  const getRequiredMiddleWidth = () => {
    const linkStyles = window.getComputedStyle(links);
    const gap = parseSize(linkStyles.columnGap || linkStyles.gap);

    const itemsWidth = linkItems.reduce((totalWidth, item) => {
      const itemStyles = window.getComputedStyle(item);
      const marginLeft = parseSize(itemStyles.marginLeft);
      const marginRight = parseSize(itemStyles.marginRight);
      return totalWidth + item.getBoundingClientRect().width + marginLeft + marginRight;
    }, 0);

    return Math.ceil(itemsWidth + gap * Math.max(0, linkItems.length - 1));
  };

  const getCompactRequiredWidth = () => {
    const navStyles = window.getComputedStyle(nav);
    const gap = parseSize(navStyles.columnGap || navStyles.gap);
    const primaryStyles = window.getComputedStyle(primary);
    const themeStyles = window.getComputedStyle(theme);

    return Math.ceil(
      brand.getBoundingClientRect().width +
        primary.getBoundingClientRect().width +
        theme.getBoundingClientRect().width +
        parseSize(primaryStyles.marginLeft) +
        parseSize(primaryStyles.marginRight) +
        parseSize(themeStyles.marginLeft) +
        parseSize(themeStyles.marginRight) +
        gap * 2
    );
  };

  const updateCompactDensity = () => {
    resetCompactDensity();

    if (!nav.classList.contains("greedy-nav--compact")) return;

    const navWidth = nav.getBoundingClientRect().width;
    if (navWidth <= 0) return;

    if (getCompactRequiredWidth() - navWidth > widthTolerance) {
      nav.classList.add(compactTightClass);
    }

    if (getCompactRequiredWidth() - navWidth > widthTolerance) {
      nav.classList.add(compactFallbackClass);
    }

    if (getCompactRequiredWidth() - navWidth > widthTolerance) {
      nav.classList.add(compactStackedClass);
    }
  };

  const layoutNav = () => {
    const viewportWidth = getViewportWidth();
    if (viewportWidth <= 0) return;

    if (compactMenuQuery.matches) {
      nav.classList.add("greedy-nav--compact");
      updateCompactDensity();
      closeMobileMenu();
      return;
    }

    nav.classList.remove("greedy-nav--compact");
    const availableMiddleWidth = getAvailableMiddleWidth();
    const requiredMiddleWidth = getRequiredMiddleWidth();
    const shouldUseCompactMenu = requiredMiddleWidth - availableMiddleWidth > widthTolerance;

    nav.classList.toggle("greedy-nav--compact", shouldUseCompactMenu);
    updateCompactDensity();
    closeMobileMenu();
  };

  const scheduleLayout = () => {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      frame = null;
      layoutNav();
    });
  };

  document.addEventListener("click", (event) => {
    if (nav.contains(event.target)) return;
    closeMobileMenu();
  });

  window.addEventListener("resize", scheduleLayout);
  window.visualViewport?.addEventListener("resize", scheduleLayout);
  window.addEventListener("orientationchange", scheduleLayout);

  if (document.fonts?.ready) {
    document.fonts.ready.then(scheduleLayout).catch(() => {});
  }

  scheduleLayout();
});
