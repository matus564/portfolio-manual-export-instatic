import {
  CustomEase,
  gsapWithCSS
} from "../chunks/chunk-T7YZCOTH.js";
import "../chunks/chunk-X5G4UXXD.js";

// src/scripts/Data-anim-animations.ts
var ENABLE_MAGNETIC = true;
var BREAKPOINT = 991;
var SAFETY_REVEAL = 15e3;
var isMobile = window.matchMedia(`(max-width: ${BREAKPOINT}px)`).matches || window.innerWidth <= BREAKPOINT;
var getGL = () => window.LiquidWebGL;
function getHooks() {
  const w = window;
  return w.LiquidTransition || (w.LiquidTransition = {});
}
var num = (value, fallback) => {
  const n = parseFloat(value ?? "");
  return Number.isNaN(n) ? fallback : n;
};
var escapeHtml = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
function injectStyles() {
  if (document.getElementById("la-styles")) return;
  const s = document.createElement("style");
  s.id = "la-styles";
  s.textContent = `
  [data-anim="text"] { opacity: 0; }
  [data-anim="from-bottom"],
  [data-anim="from-top"],
  [data-anim="from-left"],
  [data-anim="from-right"],
  [data-anim="height"],
  [data-anim="line"] { opacity: 0; }
  `;
  (document.head || document.documentElement).appendChild(s);
}
function ensureEase() {
  gsapWithCSS.registerPlugin(CustomEase);
  CustomEase.create("hop", "0.8, 0, 0.2, 1");
}
function runPageAnimations(scope) {
  const root = scope || document;
  if (isMobile) {
    root.querySelectorAll(
      '[data-anim="text"], [data-anim="lines"], [data-anim="from-bottom"], [data-anim="from-top"], [data-anim="from-left"], [data-anim="from-right"]'
    ).forEach((el) => {
      gsapWithCSS.set(el, { opacity: 1, x: 0, y: 0 });
    });
    root.querySelectorAll('[data-anim="line"]').forEach((el) => {
      gsapWithCSS.set(el, { width: "100%", opacity: 1 });
    });
    root.querySelectorAll('[data-anim="height"]').forEach((el) => {
      gsapWithCSS.set(el, { height: "100%", opacity: 1 });
    });
    root.querySelectorAll('[data-anim="move-down"]').forEach((el) => {
      gsapWithCSS.set(el, { yPercent: 100 });
    });
    return;
  }
  root.querySelectorAll('[data-anim="text"]').forEach((el) => {
    const delay = num(el.dataset.animDelay, 0);
    const duration = num(el.dataset.animDuration, 0.9);
    const stagger = num(el.dataset.animStagger, 0.025);
    gsapWithCSS.set(el, { opacity: 1 });
    el.innerHTML = [...el.textContent || ""].map(
      (char) => char === " " ? '<span style="display:inline-block;width:0.3em"> </span>' : `<span style="display:inline-block;overflow:hidden;vertical-align:bottom;padding:0 0.08em;margin:0 -0.08em;"><span class="sc" style="display:inline-block">${escapeHtml(char)}</span></span>`
    ).join("");
    gsapWithCSS.from(el.querySelectorAll(".sc"), { y: "110%", duration, delay, stagger, ease: "hop" });
  });
  root.querySelectorAll('[data-anim="lines"]').forEach((el) => {
    const delay = num(el.dataset.animDelay, 0);
    const duration = num(el.dataset.animDuration, 1);
    const stagger = num(el.dataset.animStagger, 0.12);
    gsapWithCSS.set(el, { opacity: 1 });
    if (!el.dataset.originalText) el.dataset.originalText = (el.textContent || "").trim();
    el.innerHTML = (el.dataset.originalText || "").split(" ").map((w) => `<span class="line-word" style="display:inline-block;white-space:pre;">${escapeHtml(w)}</span>`).join(" ");
    const wordEls = Array.from(el.querySelectorAll(".line-word"));
    const lines = [];
    let cur = [];
    let lastTop = null;
    wordEls.forEach((w) => {
      const top = w.offsetTop;
      if (lastTop === null || Math.abs(top - lastTop) < 2) cur.push(w);
      else {
        lines.push(cur);
        cur = [w];
      }
      lastTop = top;
    });
    if (cur.length) lines.push(cur);
    el.innerHTML = "";
    lines.forEach((line) => {
      const span = document.createElement("span");
      span.style.cssText = "display:inline-block;overflow:hidden;vertical-align:bottom;";
      const inner = document.createElement("span");
      inner.className = "line-inner";
      inner.style.cssText = "display:inline-block;";
      line.forEach((w, i) => {
        inner.appendChild(w);
        if (i !== line.length - 1) inner.appendChild(document.createTextNode(" "));
      });
      span.appendChild(inner);
      el.appendChild(span);
      el.appendChild(document.createTextNode(" "));
    });
    gsapWithCSS.from(el.querySelectorAll(".line-inner"), { y: "110%", duration, delay, stagger, ease: "hop" });
  });
  root.querySelectorAll('[data-anim="line"]').forEach((el) => {
    const delay = num(el.dataset.animDelay, 0);
    const duration = num(el.dataset.animDuration, 1);
    gsapWithCSS.fromTo(el, { width: "0%" }, { width: "100%", opacity: 1, duration, delay, ease: "hop" });
  });
  root.querySelectorAll('[data-anim="move-down"]').forEach((el) => {
    const delay = num(el.dataset.animDelay, 0);
    const duration = num(el.dataset.animDuration, 1);
    const container = el.classList.contains("liquid-container") ? el : el.closest(".liquid-container");
    const animate = () => {
      gsapWithCSS.to(el, { yPercent: 100, duration, delay, ease: "hop" });
    };
    const api = getGL();
    if (!container || !api) {
      animate();
      return;
    }
    void api.whenReady(container, 6e4).then(animate);
  });
  const scrollEls = root.querySelectorAll(
    [
      '[data-anim="from-bottom"]',
      '[data-anim="from-top"]',
      '[data-anim="from-left"]',
      '[data-anim="from-right"]',
      '[data-anim="height"]'
    ].join(", ")
  );
  if (!scrollEls.length) return;
  scrollEls.forEach((el) => {
    const type = el.dataset.anim;
    const d = num(el.dataset.animDistance, 60);
    if (type === "from-bottom") gsapWithCSS.set(el, { y: d, opacity: 0 });
    if (type === "from-top") gsapWithCSS.set(el, { y: -d, opacity: 0 });
    if (type === "from-left") gsapWithCSS.set(el, { x: -d, opacity: 0 });
    if (type === "from-right") gsapWithCSS.set(el, { x: d, opacity: 0 });
    if (type === "height") gsapWithCSS.set(el, { height: "0%", overflow: "hidden", opacity: 0 });
  });
  scrollEls.forEach((el) => {
    const type = el.dataset.anim;
    const delay = num(el.dataset.animDelay, 0);
    const duration = num(el.dataset.animDuration, 0.9);
    if (type === "from-bottom" || type === "from-top") gsapWithCSS.to(el, { y: 0, opacity: 1, duration, delay, ease: "hop" });
    if (type === "from-left" || type === "from-right") gsapWithCSS.to(el, { x: 0, opacity: 1, duration, delay, ease: "hop" });
    if (type === "height") gsapWithCSS.to(el, { height: "100%", opacity: 1, duration, delay, ease: "hop" });
  });
}
var magneticBound = /* @__PURE__ */ new WeakSet();
function initMagnetic(scope) {
  if (!ENABLE_MAGNETIC || isMobile) return;
  scope.querySelectorAll(".magnetic").forEach((el) => {
    if (magneticBound.has(el)) return;
    magneticBound.add(el);
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.3}px,${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "translate(0,0)";
      el.style.transition = "all .5s ease-out";
    });
    el.addEventListener("mouseenter", () => {
      el.style.transition = "none";
    });
  });
}
var revealedOnce = false;
function handleReveal(scope) {
  revealedOnce = true;
  runPageAnimations(scope);
  initMagnetic(scope);
}
function main() {
  injectStyles();
  ensureEase();
  const hooks = getHooks();
  const previous = hooks.onReveal;
  hooks.onReveal = (scope) => {
    previous?.(scope);
    handleReveal(scope);
  };
  const pending = hooks.pendingReveals || [];
  hooks.pendingReveals = [];
  pending.forEach(handleReveal);
  window.setTimeout(() => {
    if (!revealedOnce) handleReveal(document);
  }, SAFETY_REVEAL);
}
main();
/*!
 * PAGE ANIMATIONS – animačný systém data-anim (TypeScript modul)
 * Prenesené 1:1 z Webflow custom code (runPageAnimations + magnetic). Rovnaké časovanie, easing "hop"
 * (cubic-bezier 0.8, 0, 0.2, 1) a rovnaké atribúty.
 *
 * Spúšťa sa cez hook window.LiquidTransition.onReveal, ktorý volá page-transitions.ts vo chvíli,
 * keď sa stránka odkrýva (intro aj každý prechod Barba). Preto je potrebný aj page-transitions.ts.
 * data-anim="shader" rieši WebGL skript (liquid-webgl-pixels.ts), tu sa nespracúva.
 *
 * Závislosť (npm): "gsap"
 *
 * ATRIBÚTY (na ľubovoľnom elemente):
 *   data-anim="text"         znaky vyjazdia zospodu           (delay 0, duration 0.9, stagger 0.025)
 *   data-anim="lines"        riadky vyjazdia zospodu          (delay 0, duration 1.0, stagger 0.12)
 *   data-anim="line"         šírka 0% → 100%                  (delay 0, duration 1.0)
 *   data-anim="from-bottom|from-top|from-left|from-right"     (distance 60, delay 0, duration 0.9)
 *   data-anim="height"       výška 0% → 100%                  (delay 0, duration 0.9)
 *   data-anim="move-down"    element sa posunie o 100 % nadol (po načítaní WebGL obrázka; duration 1.0)
 *   voliteľne: data-anim-delay, data-anim-duration, data-anim-stagger, data-anim-distance
 *   .magnetic                magnetický efekt (ak ENABLE_MAGNETIC)
 */
