// src/scripts/Menu-animation-script.ts
var BREAKPOINT = 991;
function initMobileMenu(scope = document) {
  if (window.innerWidth > BREAKPOINT) return;
  const menuButton = scope.querySelector(".absolute-menu");
  const menu = scope.querySelector(".menu-overlay");
  if (!menuButton || !menu) return;
  if (menu.dataset.menuInitialized === "true") return;
  menu.dataset.menuInitialized = "true";
  const closeButton = menu.querySelector(".close-menu");
  const menuLinks = menu.querySelectorAll(".flex-menu");
  let isOpen = false;
  const openMenu = () => {
    if (isOpen) return;
    isOpen = true;
    menu.classList.add("is-open");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        menu.style.transition = "opacity 0.4s cubic-bezier(0.8, 0, 0.2, 1)";
        menu.style.opacity = "1";
        menu.classList.add("is-visible");
      });
    });
    document.body.style.overflow = "hidden";
  };
  const closeMenu = () => {
    if (!isOpen) return;
    isOpen = false;
    menu.classList.remove("is-visible");
    menu.style.opacity = "0";
    window.setTimeout(() => {
      if (!isOpen) {
        menu.classList.remove("is-open");
      }
    }, 800);
    document.body.style.overflow = "";
  };
  menuButton.addEventListener("click", openMenu);
  closeButton?.addEventListener("click", closeMenu);
  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}
function initCurrentPageMenu() {
  const container = document.querySelector(
    '[data-barba="container"]'
  );
  if (container) {
    initMobileMenu(container);
  }
}
if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initCurrentPageMenu
  );
} else {
  initCurrentPageMenu();
}
function initBarbaMenu() {
  const barba = window.barba;
  if (!barba?.hooks?.afterEnter) return;
  barba.hooks.afterEnter((data) => {
    const nextContainer = data?.next?.container;
    if (nextContainer) {
      initMobileMenu(nextContainer);
    }
  });
}
if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initBarbaMenu
  );
} else {
  initBarbaMenu();
}
