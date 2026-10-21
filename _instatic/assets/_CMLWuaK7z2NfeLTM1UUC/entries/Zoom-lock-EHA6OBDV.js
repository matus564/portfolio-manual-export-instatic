// src/scripts/Zoom-lock.ts
function preventBrowserZoom(event) {
  if (event.ctrlKey || event.metaKey) {
    event.preventDefault();
  }
}
function preventKeyboardZoom(event) {
  if ((event.ctrlKey || event.metaKey) && (event.key === "+" || event.key === "-" || event.key === "=" || event.key === "0")) {
    event.preventDefault();
  }
}
function initZoomLock() {
  window.addEventListener("wheel", preventBrowserZoom, {
    passive: false
  });
  window.addEventListener("keydown", preventKeyboardZoom);
}
initZoomLock();
