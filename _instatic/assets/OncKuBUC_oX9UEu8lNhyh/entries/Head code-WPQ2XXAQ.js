// src/scripts/Head code.ts
(function() {
  var s = document.createElement("style");
  s.id = "lt-prehide";
  s.textContent = "body{opacity:0!important}";
  document.head.appendChild(s);
  setTimeout(function() {
    s.remove();
  }, 1e4);
})();
