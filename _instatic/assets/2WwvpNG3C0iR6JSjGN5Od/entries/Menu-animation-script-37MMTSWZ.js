// src/scripts/Menu-animation-script.ts
var OVERLAY = ".menu-overlay";
var OPENER = ".absolute-menu";
var CLOSERS = ".flex-menu, .close-menu";
var LINES = ".line-horizontal";
var TEXTS = ".text-regular";
var DESKTOP_QUERY = "(min-width: 992px)";
var root = document.documentElement;
var activeOverlay = null;
var closeTimer;
function getLenis() {
  return window.LiquidWebGL?.lenis ?? null;
}
function lockScroll(lock) {
  root.classList.toggle("menu-open", lock);
  const lenis = getLenis();
  if (lock) {
    lenis?.stop?.();
  } else {
    lenis?.start?.();
  }
}
function setIndexes(overlay) {
  overlay.querySelectorAll(LINES).forEach((element, index) => {
    element.style.setProperty("--i", String(index));
  });
  overlay.querySelectorAll(TEXTS).forEach((element, index) => {
    element.style.setProperty("--i", String(index));
  });
}
function findOverlay(from) {
  const container = from.closest('[data-barba="container"]');
  return container?.querySelector(OVERLAY) ?? document.querySelector(OVERLAY);
}
function openMenu(overlay) {
  if (activeOverlay === overlay && overlay.classList.contains("is-open")) {
    return;
  }
  window.clearTimeout(closeTimer);
  setIndexes(overlay);
  overlay.classList.add("is-visible");
  void overlay.offsetHeight;
  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
  activeOverlay = overlay;
  lockScroll(true);
}
function closeMenu(overlay = activeOverlay, immediate = false) {
  if (!overlay) return;
  overlay.classList.remove("is-open");
  overlay.setAttribute("aria-hidden", "true");
  if (activeOverlay === overlay) {
    activeOverlay = null;
  }
  lockScroll(false);
  window.clearTimeout(closeTimer);
  const hide = () => {
    overlay.classList.remove("is-visible");
  };
  if (immediate) {
    hide();
  } else {
    closeTimer = window.setTimeout(hide, 120);
  }
}
function onClick(event) {
  const target = event.target;
  if (!(target instanceof Element)) {
    return;
  }
  const closer = target.closest(CLOSERS);
  if (closer) {
    const overlay = closer.closest(OVERLAY);
    if (overlay) {
      const isMenuLink = closer.classList.contains("flex-menu");
      if (closer instanceof HTMLAnchorElement && closer.getAttribute("href") === "#") {
        event.preventDefault();
      }
      closeMenu(overlay, isMenuLink);
      return;
    }
  }
  const opener = target.closest(OPENER);
  if (opener) {
    if (opener instanceof HTMLAnchorElement && opener.getAttribute("href") === "#") {
      event.preventDefault();
    }
    const overlay = findOverlay(opener);
    if (overlay) {
      openMenu(overlay);
    }
  }
}
function init() {
  if (window.__mobileMenu) {
    return;
  }
  window.__mobileMenu = true;
  document.addEventListener("click", onClick);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
  window.matchMedia(DESKTOP_QUERY).addEventListener("change", (event) => {
    if (event.matches) {
      closeMenu(void 0, true);
    }
  });
}
init();
