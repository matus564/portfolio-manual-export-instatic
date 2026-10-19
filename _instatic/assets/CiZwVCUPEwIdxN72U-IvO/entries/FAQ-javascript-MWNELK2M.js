// src/scripts/FAQ-javascript.ts
var ITEM_SELECTOR = ".detailed-process-div";
var OPEN_CLASS = "is-open";
var ONE_AT_A_TIME = false;
var IGNORE_SELECTOR = "a[href], button, input, textarea, select, label";
function onClick(event) {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const item = target.closest(ITEM_SELECTOR);
  if (!item) return;
  const interactive = target.closest(IGNORE_SELECTOR);
  if (interactive && interactive !== item && item.contains(interactive)) return;
  const willOpen = !item.classList.contains(OPEN_CLASS);
  if (willOpen && ONE_AT_A_TIME) {
    document.querySelectorAll(`${ITEM_SELECTOR}.${OPEN_CLASS}`).forEach((other) => {
      if (other !== item) other.classList.remove(OPEN_CLASS);
    });
  }
  item.classList.toggle(OPEN_CLASS, willOpen);
}
if (!window.__faqAccordion) {
  window.__faqAccordion = true;
  document.addEventListener("click", onClick);
}
/*!
 * FAQ ACCORDION – otváranie/zatváranie odpovedí (TypeScript modul)
 *
 * Prepína triedu .is-open na .detailed-process-div. Samotnú animáciu rieši tvoje CSS
 * (grid-template-rows 0fr → 1fr, otočenie šípky, farba otázky).
 *
 * Používa DELEGOVANÝ click handler na `document`, nie listenery na jednotlivých prvkoch.
 * Preto funguje aj na prvkoch, ktoré sa na stránku dostanú neskôr, napríklad po prechode Barba
 * (Barba vymení len kontajner, skripty viazané na pôvodné prvky by prestali fungovať).
 *
 * Skript nastav v Instatic na všetky stránky (Scope: All pages) a starý FAQ skript zmaž,
 * inak by sa klik spracoval dvakrát (otvorí a hneď zatvorí).
 */
