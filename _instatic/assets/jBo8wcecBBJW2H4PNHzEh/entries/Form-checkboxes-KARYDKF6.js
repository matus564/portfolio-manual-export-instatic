// src/scripts/Form-checkboxes.ts
var CARD_SELECTOR = ".multiselct, .multiselect";
var INPUT_SELECTOR = 'input[type="checkbox"], input[type="radio"]';
function onClick(event) {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const card = target.closest(CARD_SELECTOR);
  if (!card) return;
  if (target.closest("input, select, textarea, a[href], button")) return;
  const label = target.closest("label");
  if (label && label.control) return;
  const input = card.querySelector(INPUT_SELECTOR);
  if (!input || input.disabled) return;
  if (input.type === "radio" && input.checked) return;
  input.click();
}
if (!window.__formCards) {
  window.__formCards = true;
  document.addEventListener("click", onClick);
}
/*!
 * FORMULÁR – klik na celú kartičku (TypeScript modul)
 *
 * Kartička .multiselct je obyčajný <div>, takže klik mimo malého inputu nič nespraví.
 * Tento skript pri kliku kdekoľvek na kartičku spustí vnútorný checkbox alebo radio.
 *  - checkbox: prepne sa (označí / odznačí)
 *  - radio: označí sa (ostatné v skupine sa odznačia samy podľa atribútu name)
 *
 * Volá sa natívne input.click(), takže sa vyvolajú aj udalosti input/change a formulár
 * (validácia, odoslanie v Instatic) vidí zmenu rovnako ako pri kliku na malý input.
 *
 * Delegovaný listener na `document` funguje aj po prechodoch Barba.
 * Skript nastav v Instatic na všetky stránky (Scope: All pages).
 */
