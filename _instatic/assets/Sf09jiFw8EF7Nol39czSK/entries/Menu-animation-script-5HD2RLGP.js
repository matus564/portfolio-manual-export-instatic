// src/scripts/Menu-animation-script.ts
var OVERLAY = ".menu-overlay";
var OPENER = ".absolute-menu";
var CLOSERS = ".flex-menu, .close-menu";
var LINES = ".line-horizontal";
var TEXTS = ".text-regular";
var CLOSE_MS = 600;
var DESKTOP_QUERY = "(min-width: 992px)";
var root = document.documentElement;
var activeOverlay = null;
var closeTimer;
var lenis = () => window.LiquidWebGL?.lenis ?? null;
function lockScroll(lock) {
  root.classList.toggle("menu-open", lock);
  if (lock) lenis()?.stop?.();
  else lenis()?.start?.();
}
function setIndexes(overlay) {
  overlay.querySelectorAll(LINES).forEach((el, i) => el.style.setProperty("--i", String(i)));
  overlay.querySelectorAll(TEXTS).forEach((el, i) => el.style.setProperty("--i", String(i)));
}
function findOverlay(from) {
  const container = from.closest('[data-barba="container"]');
  return container?.querySelector(OVERLAY) ?? document.querySelector(OVERLAY);
}
function openMenu(overlay) {
  if (activeOverlay === overlay && overlay.classList.contains("is-open")) return;
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
  if (activeOverlay === overlay) activeOverlay = null;
  lockScroll(false);
  window.clearTimeout(closeTimer);
  const hide = () => overlay.classList.remove("is-visible");
  if (immediate) hide();
  else closeTimer = window.setTimeout(hide, CLOSE_MS);
}
function onClick(event) {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const closer = target.closest(CLOSERS);
  if (closer) {
    const overlay = closer.closest(OVERLAY);
    if (overlay) {
      if (closer instanceof HTMLAnchorElement && closer.getAttribute("href") === "#") event.preventDefault();
      closeMenu(overlay);
      return;
    }
  }
  const opener = target.closest(OPENER);
  if (opener) {
    if (opener instanceof HTMLAnchorElement && opener.getAttribute("href") === "#") event.preventDefault();
    const overlay = findOverlay(opener);
    if (overlay) openMenu(overlay);
  }
}
function init() {
  if (window.__mobileMenu) return;
  window.__mobileMenu = true;
  document.addEventListener("click", onClick);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
  window.matchMedia(DESKTOP_QUERY).addEventListener("change", (e) => {
    if (e.matches) closeMenu(void 0, true);
  });
}
init();
/*!
 * MOBILNÉ MENU – otváranie a zatváranie (TypeScript modul)
 *
 * Animácie rieši CSS (mobile-menu.css). Tento skript len prepína triedy na .menu-overlay:
 *   .is-visible → display: block
 *   .is-open    → o snímok neskôr, aby sa spustili CSS prechody (opacity, čiary, texty)
 *
 * Používa DELEGOVANÉ listenery na `document`, preto funguje aj po prechodoch Barba
 * (po výmene kontajnera sa nemusí nič znova pripájať).
 *
 * Otvorenie: klik na .absolute-menu
 * Zatvorenie: klik na .flex-menu (linky), .close-menu, klávesa Escape, alebo prechod na desktop
 *
 * Skript nastav v Instatic na všetky stránky (Scope: All pages).
 */
