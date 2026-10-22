import {
  CustomEase,
  gsapWithCSS
} from "../chunks/chunk-T7YZCOTH.js";
import {
  __commonJS,
  __toESM
} from "../chunks/chunk-X5G4UXXD.js";

// ../instatic-runtime-cache/deps/84b251e205a680e5bad01dc2/node_modules/@barba/core/dist/barba.umd.js
var require_barba_umd = __commonJS({
  "../instatic-runtime-cache/deps/84b251e205a680e5bad01dc2/node_modules/@barba/core/dist/barba.umd.js"(exports, module) {
    !(function(t, n) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t || self).barba = n();
    })(exports, function() {
      function t(t2, n2) {
        for (var r2 = 0; r2 < n2.length; r2++) {
          var i2 = n2[r2];
          i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t2, "symbol" == typeof (e2 = (function(t3, n3) {
            if ("object" != typeof t3 || null === t3) return t3;
            var r3 = t3[Symbol.toPrimitive];
            if (void 0 !== r3) {
              var i3 = r3.call(t3, "string");
              if ("object" != typeof i3) return i3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t3);
          })(i2.key)) ? e2 : String(e2), i2);
        }
        var e2;
      }
      function n(n2, r2, i2) {
        return r2 && t(n2.prototype, r2), i2 && t(n2, i2), Object.defineProperty(n2, "prototype", { writable: false }), n2;
      }
      function r() {
        return r = Object.assign ? Object.assign.bind() : function(t2) {
          for (var n2 = 1; n2 < arguments.length; n2++) {
            var r2 = arguments[n2];
            for (var i2 in r2) Object.prototype.hasOwnProperty.call(r2, i2) && (t2[i2] = r2[i2]);
          }
          return t2;
        }, r.apply(this, arguments);
      }
      function i(t2, n2) {
        t2.prototype = Object.create(n2.prototype), t2.prototype.constructor = t2, o(t2, n2);
      }
      function e(t2) {
        return e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
          return t3.__proto__ || Object.getPrototypeOf(t3);
        }, e(t2);
      }
      function o(t2, n2) {
        return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, n3) {
          return t3.__proto__ = n3, t3;
        }, o(t2, n2);
      }
      function u() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if ("function" == typeof Proxy) return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (t2) {
          return false;
        }
      }
      function s(t2, n2, r2) {
        return s = u() ? Reflect.construct.bind() : function(t3, n3, r3) {
          var i2 = [null];
          i2.push.apply(i2, n3);
          var e2 = new (Function.bind.apply(t3, i2))();
          return r3 && o(e2, r3.prototype), e2;
        }, s.apply(null, arguments);
      }
      function f(t2) {
        var n2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
        return f = function(t3) {
          if (null === t3 || -1 === Function.toString.call(t3).indexOf("[native code]")) return t3;
          if ("function" != typeof t3) throw new TypeError("Super expression must either be null or a function");
          if (void 0 !== n2) {
            if (n2.has(t3)) return n2.get(t3);
            n2.set(t3, r2);
          }
          function r2() {
            return s(t3, arguments, e(this).constructor);
          }
          return r2.prototype = Object.create(t3.prototype, { constructor: { value: r2, enumerable: false, writable: true, configurable: true } }), o(r2, t3);
        }, f(t2);
      }
      function c(t2) {
        if (void 0 === t2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t2;
      }
      var a, h = function() {
        this.before = void 0, this.beforeLeave = void 0, this.leave = void 0, this.afterLeave = void 0, this.beforeEnter = void 0, this.enter = void 0, this.afterEnter = void 0, this.after = void 0;
      };
      !(function(t2) {
        t2[t2.off = 0] = "off", t2[t2.error = 1] = "error", t2[t2.warning = 2] = "warning", t2[t2.info = 3] = "info", t2[t2.debug = 4] = "debug";
      })(a || (a = {}));
      var v = a.off, d = /* @__PURE__ */ (function() {
        function t2(t3) {
          this.t = void 0, this.t = t3;
        }
        t2.getLevel = function() {
          return v;
        }, t2.setLevel = function(t3) {
          return v = a[t3];
        };
        var n2 = t2.prototype;
        return n2.error = function() {
          this.i(console.error, a.error, [].slice.call(arguments));
        }, n2.warn = function() {
          this.i(console.warn, a.warning, [].slice.call(arguments));
        }, n2.info = function() {
          this.i(console.info, a.info, [].slice.call(arguments));
        }, n2.debug = function() {
          this.i(console.log, a.debug, [].slice.call(arguments));
        }, n2.i = function(n3, r2, i2) {
          r2 <= t2.getLevel() && n3.apply(console, ["[" + this.t + "] "].concat(i2));
        }, t2;
      })();
      function l(t2) {
        return t2.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function p(t2) {
        return t2 && t2.sensitive ? "" : "i";
      }
      var m = { container: "container", history: "history", namespace: "namespace", prefix: "data-barba", prevent: "prevent", wrapper: "wrapper" }, w = /* @__PURE__ */ (function() {
        function t2() {
          this.o = m, this.u = void 0, this.h = { after: null, before: null, parent: null };
        }
        var n2 = t2.prototype;
        return n2.toString = function(t3) {
          return t3.outerHTML;
        }, n2.toDocument = function(t3) {
          return this.u || (this.u = new DOMParser()), this.u.parseFromString(t3, "text/html");
        }, n2.toElement = function(t3) {
          var n3 = document.createElement("div");
          return n3.innerHTML = t3, n3;
        }, n2.getHtml = function(t3) {
          return void 0 === t3 && (t3 = document), this.toString(t3.documentElement);
        }, n2.getWrapper = function(t3) {
          return void 0 === t3 && (t3 = document), t3.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]');
        }, n2.getContainer = function(t3) {
          return void 0 === t3 && (t3 = document), t3.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]');
        }, n2.removeContainer = function(t3) {
          document.body.contains(t3) && (this.v(t3), t3.parentNode.removeChild(t3));
        }, n2.addContainer = function(t3, n3) {
          var r2 = this.getContainer() || this.h.before;
          r2 ? this.l(t3, r2) : this.h.after ? this.h.after.parentNode.insertBefore(t3, this.h.after) : this.h.parent ? this.h.parent.appendChild(t3) : n3.appendChild(t3);
        }, n2.getSibling = function() {
          return this.h;
        }, n2.getNamespace = function(t3) {
          void 0 === t3 && (t3 = document);
          var n3 = t3.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
          return n3 ? n3.getAttribute(this.o.prefix + "-" + this.o.namespace) : null;
        }, n2.getHref = function(t3) {
          if (t3.tagName && "a" === t3.tagName.toLowerCase()) {
            if ("string" == typeof t3.href) return t3.href;
            var n3 = t3.getAttribute("href") || t3.getAttribute("xlink:href");
            if (n3) return this.resolveUrl(n3.baseVal || n3);
          }
          return null;
        }, n2.resolveUrl = function() {
          var t3 = [].slice.call(arguments).length;
          if (0 === t3) throw new Error("resolveUrl requires at least one argument; got none.");
          var n3 = document.createElement("base");
          if (n3.href = arguments[0], 1 === t3) return n3.href;
          var r2 = document.getElementsByTagName("head")[0];
          r2.insertBefore(n3, r2.firstChild);
          for (var i2, e2 = document.createElement("a"), o2 = 1; o2 < t3; o2++) e2.href = arguments[o2], n3.href = i2 = e2.href;
          return r2.removeChild(n3), i2;
        }, n2.l = function(t3, n3) {
          n3.parentNode.insertBefore(t3, n3.nextSibling);
        }, n2.v = function(t3) {
          return this.h = { after: t3.nextElementSibling, before: t3.previousElementSibling, parent: t3.parentElement }, this.h;
        }, t2;
      })(), b = new w(), y = /* @__PURE__ */ (function() {
        function t2() {
          this.p = void 0, this.m = [], this.P = -1;
        }
        var i2 = t2.prototype;
        return i2.init = function(t3, n2) {
          this.p = "barba";
          var r2 = { data: {}, ns: n2, scroll: { x: window.scrollX, y: window.scrollY }, url: t3 };
          this.P = 0, this.m.push(r2);
          var i3 = { from: this.p, index: this.P, states: [].concat(this.m) };
          window.history && window.history.replaceState(i3, "", t3);
        }, i2.change = function(t3, n2, r2) {
          if (r2 && r2.state) {
            var i3 = r2.state, e2 = i3.index;
            n2 = this.g(this.P - e2), this.replace(i3.states), this.P = e2;
          } else this.add(t3, n2);
          return n2;
        }, i2.add = function(t3, n2, r2, i3) {
          var e2 = null != r2 ? r2 : this.R(n2), o2 = { data: null != i3 ? i3 : {}, ns: "tmp", scroll: { x: window.scrollX, y: window.scrollY }, url: t3 };
          switch (e2) {
            case "push":
              this.P = this.size, this.m.push(o2);
              break;
            case "replace":
              this.set(this.P, o2);
          }
          var u2 = { from: this.p, index: this.P, states: [].concat(this.m) };
          switch (e2) {
            case "push":
              window.history && window.history.pushState(u2, "", t3);
              break;
            case "replace":
              window.history && window.history.replaceState(u2, "", t3);
          }
        }, i2.store = function(t3, n2) {
          var i3 = n2 || this.P, e2 = this.get(i3);
          e2.data = r({}, e2.data, t3), this.set(i3, e2);
          var o2 = { from: this.p, index: this.P, states: [].concat(this.m) };
          window.history.replaceState(o2, "");
        }, i2.update = function(t3, n2) {
          var i3 = n2 || this.P, e2 = r({}, this.get(i3), t3);
          this.set(i3, e2);
        }, i2.remove = function(t3) {
          t3 ? this.m.splice(t3, 1) : this.m.pop(), this.P--;
        }, i2.clear = function() {
          this.m = [], this.P = -1;
        }, i2.replace = function(t3) {
          this.m = t3;
        }, i2.get = function(t3) {
          return this.m[t3];
        }, i2.set = function(t3, n2) {
          return this.m[t3] = n2;
        }, i2.R = function(t3) {
          var n2 = "push", r2 = t3, i3 = m.prefix + "-" + m.history;
          return r2.hasAttribute && r2.hasAttribute(i3) && (n2 = r2.getAttribute(i3)), n2;
        }, i2.g = function(t3) {
          return Math.abs(t3) > 1 ? t3 > 0 ? "forward" : "back" : 0 === t3 ? "popstate" : t3 > 0 ? "back" : "forward";
        }, n(t2, [{ key: "current", get: function() {
          return this.m[this.P];
        } }, { key: "previous", get: function() {
          return this.P < 1 ? null : this.m[this.P - 1];
        } }, { key: "size", get: function() {
          return this.m.length;
        } }]), t2;
      })(), P = new y(), g = function(t2, n2) {
        try {
          var r2 = (function() {
            if (!n2.next.html) return Promise.resolve(t2).then(function(t3) {
              var r3 = n2.next;
              if (t3) {
                var i2 = b.toElement(t3.html);
                r3.namespace = b.getNamespace(i2), r3.container = b.getContainer(i2), r3.url = t3.url, r3.html = t3.html, P.update({ ns: r3.namespace });
                var e2 = b.toDocument(t3.html);
                document.title = e2.title;
              }
            });
          })();
          return Promise.resolve(r2 && r2.then ? r2.then(function() {
          }) : void 0);
        } catch (t3) {
          return Promise.reject(t3);
        }
      }, E = function t2(n2, r2, i2) {
        return n2 instanceof RegExp ? (function(t3, n3) {
          if (!n3) return t3;
          for (var r3 = /\((?:\?<(.*?)>)?(?!\?)/g, i3 = 0, e2 = r3.exec(t3.source); e2; ) n3.push({ name: e2[1] || i3++, prefix: "", suffix: "", modifier: "", pattern: "" }), e2 = r3.exec(t3.source);
          return t3;
        })(n2, r2) : Array.isArray(n2) ? (function(n3, r3, i3) {
          var e2 = n3.map(function(n4) {
            return t2(n4, r3, i3).source;
          });
          return new RegExp("(?:".concat(e2.join("|"), ")"), p(i3));
        })(n2, r2, i2) : (function(t3, n3, r3) {
          return (function(t4, n4, r4) {
            void 0 === r4 && (r4 = {});
            for (var i3 = r4.strict, e2 = void 0 !== i3 && i3, o2 = r4.start, u2 = void 0 === o2 || o2, s2 = r4.end, f2 = void 0 === s2 || s2, c2 = r4.encode, a2 = void 0 === c2 ? function(t5) {
              return t5;
            } : c2, h2 = r4.delimiter, v2 = void 0 === h2 ? "/#?" : h2, d2 = r4.endsWith, m2 = "[".concat(l(void 0 === d2 ? "" : d2), "]|$"), w2 = "[".concat(l(v2), "]"), b2 = u2 ? "^" : "", y2 = 0, P2 = t4; y2 < P2.length; y2++) {
              var g2 = P2[y2];
              if ("string" == typeof g2) b2 += l(a2(g2));
              else {
                var E2 = l(a2(g2.prefix)), x2 = l(a2(g2.suffix));
                if (g2.pattern) if (n4 && n4.push(g2), E2 || x2) if ("+" === g2.modifier || "*" === g2.modifier) {
                  var R2 = "*" === g2.modifier ? "?" : "";
                  b2 += "(?:".concat(E2, "((?:").concat(g2.pattern, ")(?:").concat(x2).concat(E2, "(?:").concat(g2.pattern, "))*)").concat(x2, ")").concat(R2);
                } else b2 += "(?:".concat(E2, "(").concat(g2.pattern, ")").concat(x2, ")").concat(g2.modifier);
                else b2 += "+" === g2.modifier || "*" === g2.modifier ? "((?:".concat(g2.pattern, ")").concat(g2.modifier, ")") : "(".concat(g2.pattern, ")").concat(g2.modifier);
                else b2 += "(?:".concat(E2).concat(x2, ")").concat(g2.modifier);
              }
            }
            if (f2) e2 || (b2 += "".concat(w2, "?")), b2 += r4.endsWith ? "(?=".concat(m2, ")") : "$";
            else {
              var k2 = t4[t4.length - 1], O2 = "string" == typeof k2 ? w2.indexOf(k2[k2.length - 1]) > -1 : void 0 === k2;
              e2 || (b2 += "(?:".concat(w2, "(?=").concat(m2, "))?")), O2 || (b2 += "(?=".concat(w2, "|").concat(m2, ")"));
            }
            return new RegExp(b2, p(r4));
          })((function(t4, n4) {
            void 0 === n4 && (n4 = {});
            for (var r4 = (function(t5) {
              for (var n5 = [], r5 = 0; r5 < t5.length; ) {
                var i4 = t5[r5];
                if ("*" !== i4 && "+" !== i4 && "?" !== i4) if ("\\" !== i4) if ("{" !== i4) if ("}" !== i4) if (":" !== i4) if ("(" !== i4) n5.push({ type: "CHAR", index: r5, value: t5[r5++] });
                else {
                  var e3 = 1, o3 = "";
                  if ("?" === t5[s3 = r5 + 1]) throw new TypeError('Pattern cannot start with "?" at '.concat(s3));
                  for (; s3 < t5.length; ) if ("\\" !== t5[s3]) {
                    if (")" === t5[s3]) {
                      if (0 == --e3) {
                        s3++;
                        break;
                      }
                    } else if ("(" === t5[s3] && (e3++, "?" !== t5[s3 + 1])) throw new TypeError("Capturing groups are not allowed at ".concat(s3));
                    o3 += t5[s3++];
                  } else o3 += t5[s3++] + t5[s3++];
                  if (e3) throw new TypeError("Unbalanced pattern at ".concat(r5));
                  if (!o3) throw new TypeError("Missing pattern at ".concat(r5));
                  n5.push({ type: "PATTERN", index: r5, value: o3 }), r5 = s3;
                }
                else {
                  for (var u3 = "", s3 = r5 + 1; s3 < t5.length; ) {
                    var f3 = t5.charCodeAt(s3);
                    if (!(f3 >= 48 && f3 <= 57 || f3 >= 65 && f3 <= 90 || f3 >= 97 && f3 <= 122 || 95 === f3)) break;
                    u3 += t5[s3++];
                  }
                  if (!u3) throw new TypeError("Missing parameter name at ".concat(r5));
                  n5.push({ type: "NAME", index: r5, value: u3 }), r5 = s3;
                }
                else n5.push({ type: "CLOSE", index: r5, value: t5[r5++] });
                else n5.push({ type: "OPEN", index: r5, value: t5[r5++] });
                else n5.push({ type: "ESCAPED_CHAR", index: r5++, value: t5[r5++] });
                else n5.push({ type: "MODIFIER", index: r5, value: t5[r5++] });
              }
              return n5.push({ type: "END", index: r5, value: "" }), n5;
            })(t4), i3 = n4.prefixes, e2 = void 0 === i3 ? "./" : i3, o2 = "[^".concat(l(n4.delimiter || "/#?"), "]+?"), u2 = [], s2 = 0, f2 = 0, c2 = "", a2 = function(t5) {
              if (f2 < r4.length && r4[f2].type === t5) return r4[f2++].value;
            }, h2 = function(t5) {
              var n5 = a2(t5);
              if (void 0 !== n5) return n5;
              var i4 = r4[f2], e3 = i4.index;
              throw new TypeError("Unexpected ".concat(i4.type, " at ").concat(e3, ", expected ").concat(t5));
            }, v2 = function() {
              for (var t5, n5 = ""; t5 = a2("CHAR") || a2("ESCAPED_CHAR"); ) n5 += t5;
              return n5;
            }; f2 < r4.length; ) {
              var d2 = a2("CHAR"), p2 = a2("NAME"), m2 = a2("PATTERN");
              if (p2 || m2) -1 === e2.indexOf(b2 = d2 || "") && (c2 += b2, b2 = ""), c2 && (u2.push(c2), c2 = ""), u2.push({ name: p2 || s2++, prefix: b2, suffix: "", pattern: m2 || o2, modifier: a2("MODIFIER") || "" });
              else {
                var w2 = d2 || a2("ESCAPED_CHAR");
                if (w2) c2 += w2;
                else if (c2 && (u2.push(c2), c2 = ""), a2("OPEN")) {
                  var b2 = v2(), y2 = a2("NAME") || "", P2 = a2("PATTERN") || "", g2 = v2();
                  h2("CLOSE"), u2.push({ name: y2 || (P2 ? s2++ : ""), pattern: y2 && !P2 ? o2 : P2, prefix: b2, suffix: g2, modifier: a2("MODIFIER") || "" });
                } else h2("END");
              }
            }
            return u2;
          })(t3, r3), n3, r3);
        })(n2, r2, i2);
      }, x = { __proto__: null, update: g, nextTick: function() {
        return new Promise(function(t2) {
          window.requestAnimationFrame(t2);
        });
      }, pathToRegexp: E }, R = function() {
        return window.location.origin;
      }, k = function(t2) {
        return void 0 === t2 && (t2 = window.location.href), O(t2).port;
      }, O = function(t2) {
        var n2, r2 = t2.match(/:\d+/);
        if (null === r2) /^http/.test(t2) && (n2 = 80), /^https/.test(t2) && (n2 = 443);
        else {
          var i2 = r2[0].substring(1);
          n2 = parseInt(i2, 10);
        }
        var e2, o2 = t2.replace(R(), ""), u2 = {}, s2 = o2.indexOf("#");
        s2 >= 0 && (e2 = o2.slice(s2 + 1), o2 = o2.slice(0, s2));
        var f2 = o2.indexOf("?");
        return f2 >= 0 && (u2 = T(o2.slice(f2 + 1)), o2 = o2.slice(0, f2)), { hash: e2, path: o2, port: n2, query: u2 };
      }, T = function(t2) {
        return t2.split("&").reduce(function(t3, n2) {
          var r2 = n2.split("=");
          return t3[r2[0]] = r2[1], t3;
        }, {});
      }, A = function(t2) {
        return void 0 === t2 && (t2 = window.location.href), t2.replace(/(\/#.*|\/|#.*)$/, "");
      }, j = { __proto__: null, getHref: function() {
        return window.location.href;
      }, getAbsoluteHref: function(t2, n2) {
        return void 0 === n2 && (n2 = document.baseURI), new URL(t2, n2).href;
      }, getOrigin: R, getPort: k, getPath: function(t2) {
        return void 0 === t2 && (t2 = window.location.href), O(t2).path;
      }, getQuery: function(t2, n2) {
        return void 0 === n2 && (n2 = false), n2 ? JSON.stringify(O(t2).query) : O(t2).query;
      }, getHash: function(t2) {
        return O(t2).hash;
      }, parse: O, parseQuery: T, clean: A };
      function M(t2, n2, i2, e2, o2) {
        return void 0 === n2 && (n2 = 2e3), new Promise(function(u2, s2) {
          var f2 = new XMLHttpRequest();
          f2.onreadystatechange = function() {
            if (f2.readyState === XMLHttpRequest.DONE) {
              if (200 === f2.status) {
                var n3 = "" !== f2.responseURL && f2.responseURL !== t2 ? f2.responseURL : t2;
                u2({ html: f2.responseText, url: r({ href: n3 }, O(n3)) }), e2.update(t2, { status: "fulfilled", target: n3 });
              } else if (f2.status) {
                var o3 = { status: f2.status, statusText: f2.statusText };
                i2(t2, o3), s2(o3), e2.update(t2, { status: "rejected" });
              }
            }
          }, f2.ontimeout = function() {
            var r2 = new Error("Timeout error [" + n2 + "]");
            i2(t2, r2), s2(r2), e2.update(t2, { status: "rejected" });
          }, f2.onerror = function() {
            var n3 = new Error("Fetch error");
            i2(t2, n3), s2(n3), e2.update(t2, { status: "rejected" });
          }, f2.open("GET", t2), f2.timeout = n2, f2.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), f2.setRequestHeader("x-barba", "yes"), o2.all().forEach(function(t3, n3) {
            f2.setRequestHeader(n3, t3);
          }), f2.send();
        });
      }
      function N(t2) {
        return !!t2 && ("object" == typeof t2 || "function" == typeof t2) && "function" == typeof t2.then;
      }
      function S(t2, n2) {
        return void 0 === n2 && (n2 = {}), function() {
          var r2 = arguments, i2 = false, e2 = new Promise(function(e3, o2) {
            n2.async = function() {
              return i2 = true, function(t3, n3) {
                t3 ? o2(t3) : e3(n3);
              };
            };
            var u2 = t2.apply(n2, [].slice.call(r2));
            i2 || (N(u2) ? u2.then(e3, o2) : e3(u2));
          });
          return e2;
        };
      }
      var C = /* @__PURE__ */ (function(t2) {
        function n2() {
          var n3;
          return (n3 = t2.call(this) || this).logger = new d("@barba/core"), n3.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"], n3.registered = /* @__PURE__ */ new Map(), n3.init(), n3;
        }
        i(n2, t2);
        var r2 = n2.prototype;
        return r2.init = function() {
          var t3 = this;
          this.registered.clear(), this.all.forEach(function(n3) {
            t3[n3] || (t3[n3] = function(r3, i2) {
              t3.registered.has(n3) || t3.registered.set(n3, /* @__PURE__ */ new Set()), t3.registered.get(n3).add({ ctx: i2 || {}, fn: r3 });
            });
          });
        }, r2.do = function(t3) {
          var n3 = arguments, r3 = this;
          if (this.registered.has(t3)) {
            var i2 = Promise.resolve();
            return this.registered.get(t3).forEach(function(t4) {
              i2 = i2.then(function() {
                return S(t4.fn, t4.ctx).apply(void 0, [].slice.call(n3, 1));
              });
            }), i2.catch(function(n4) {
              r3.logger.debug("Hook error [" + t3 + "]"), r3.logger.error(n4);
            });
          }
          return Promise.resolve();
        }, r2.clear = function() {
          var t3 = this;
          this.all.forEach(function(n3) {
            delete t3[n3];
          }), this.init();
        }, r2.help = function() {
          this.logger.info("Available hooks: " + this.all.join(","));
          var t3 = [];
          this.registered.forEach(function(n3, r3) {
            return t3.push(r3);
          }), this.logger.info("Registered hooks: " + t3.join(","));
        }, n2;
      })(h), L = new C(), H = /* @__PURE__ */ (function() {
        function t2(t3) {
          if (this.k = void 0, this.O = [], "boolean" == typeof t3) this.k = t3;
          else {
            var n2 = Array.isArray(t3) ? t3 : [t3];
            this.O = n2.map(function(t4) {
              return E(t4);
            });
          }
        }
        return t2.prototype.checkHref = function(t3) {
          if ("boolean" == typeof this.k) return this.k;
          var n2 = O(t3).path;
          return this.O.some(function(t4) {
            return null !== t4.exec(n2);
          });
        }, t2;
      })(), _ = /* @__PURE__ */ (function(t2) {
        function n2(n3) {
          var r2;
          return (r2 = t2.call(this, n3) || this).T = /* @__PURE__ */ new Map(), r2;
        }
        i(n2, t2);
        var e2 = n2.prototype;
        return e2.set = function(t3, n3, r2, i2, e3) {
          return this.T.set(t3, { action: r2, request: n3, status: i2, target: null != e3 ? e3 : t3 }), { action: r2, request: n3, status: i2, target: e3 };
        }, e2.get = function(t3) {
          return this.T.get(t3);
        }, e2.getRequest = function(t3) {
          return this.T.get(t3).request;
        }, e2.getAction = function(t3) {
          return this.T.get(t3).action;
        }, e2.getStatus = function(t3) {
          return this.T.get(t3).status;
        }, e2.getTarget = function(t3) {
          return this.T.get(t3).target;
        }, e2.has = function(t3) {
          return !this.checkHref(t3) && this.T.has(t3);
        }, e2.delete = function(t3) {
          return this.T.delete(t3);
        }, e2.update = function(t3, n3) {
          var i2 = r({}, this.T.get(t3), n3);
          return this.T.set(t3, i2), i2;
        }, n2;
      })(H), D = /* @__PURE__ */ (function() {
        function t2() {
          this.A = /* @__PURE__ */ new Map();
        }
        var n2 = t2.prototype;
        return n2.set = function(t3, n3) {
          return this.A.set(t3, n3), { name: n3 };
        }, n2.get = function(t3) {
          return this.A.get(t3);
        }, n2.all = function() {
          return this.A;
        }, n2.has = function(t3) {
          return this.A.has(t3);
        }, n2.delete = function(t3) {
          return this.A.delete(t3);
        }, n2.clear = function() {
          return this.A.clear();
        }, t2;
      })(), B = function() {
        return !window.history.pushState;
      }, q = function(t2) {
        return !t2.el || !t2.href;
      }, F = function(t2) {
        var n2 = t2.event;
        return n2.which > 1 || n2.metaKey || n2.ctrlKey || n2.shiftKey || n2.altKey;
      }, I = function(t2) {
        var n2 = t2.el;
        return n2.hasAttribute("target") && "_blank" === n2.target;
      }, U = function(t2) {
        var n2 = t2.el;
        return void 0 !== n2.protocol && window.location.protocol !== n2.protocol || void 0 !== n2.hostname && window.location.hostname !== n2.hostname;
      }, $ = function(t2) {
        var n2 = t2.el;
        return void 0 !== n2.port && k() !== k(n2.href);
      }, Q = function(t2) {
        var n2 = t2.el;
        return n2.getAttribute && "string" == typeof n2.getAttribute("download");
      }, X = function(t2) {
        return t2.el.hasAttribute(m.prefix + "-" + m.prevent);
      }, z = function(t2) {
        return Boolean(t2.el.closest("[" + m.prefix + "-" + m.prevent + '="all"]'));
      }, G = function(t2) {
        var n2 = t2.href;
        return A(n2) === A() && k(n2) === k();
      }, J = /* @__PURE__ */ (function(t2) {
        function n2(n3) {
          var r3;
          return (r3 = t2.call(this, n3) || this).suite = [], r3.tests = /* @__PURE__ */ new Map(), r3.init(), r3;
        }
        i(n2, t2);
        var r2 = n2.prototype;
        return r2.init = function() {
          this.add("pushState", B), this.add("exists", q), this.add("newTab", F), this.add("blank", I), this.add("corsDomain", U), this.add("corsPort", $), this.add("download", Q), this.add("preventSelf", X), this.add("preventAll", z), this.add("sameUrl", G, false);
        }, r2.add = function(t3, n3, r3) {
          void 0 === r3 && (r3 = true), this.tests.set(t3, n3), r3 && this.suite.push(t3);
        }, r2.run = function(t3, n3, r3, i2) {
          return this.tests.get(t3)({ el: n3, event: r3, href: i2 });
        }, r2.checkLink = function(t3, n3, r3) {
          var i2 = this;
          return this.suite.some(function(e2) {
            return i2.run(e2, t3, n3, r3);
          });
        }, n2;
      })(H), W = /* @__PURE__ */ (function(t2) {
        function n2(r2, i2) {
          var e2;
          return void 0 === i2 && (i2 = "Barba error"), (e2 = t2.call.apply(t2, [this].concat([].slice.call(arguments, 2))) || this).error = void 0, e2.label = void 0, e2.error = r2, e2.label = i2, Error.captureStackTrace && Error.captureStackTrace(c(e2), n2), e2.name = "BarbaError", e2;
        }
        return i(n2, t2), n2;
      })(/* @__PURE__ */ f(Error)), K = /* @__PURE__ */ (function() {
        function t2(t3) {
          void 0 === t3 && (t3 = []), this.logger = new d("@barba/core"), this.all = [], this.page = [], this.once = [], this.j = [{ name: "namespace", type: "strings" }, { name: "custom", type: "function" }], t3 && (this.all = this.all.concat(t3)), this.update();
        }
        var n2 = t2.prototype;
        return n2.add = function(t3, n3) {
          "rule" === t3 ? this.j.splice(n3.position || 0, 0, n3.value) : this.all.push(n3), this.update();
        }, n2.resolve = function(t3, n3) {
          var r2 = this;
          void 0 === n3 && (n3 = {});
          var i2 = n3.once ? this.once : this.page;
          i2 = i2.filter(n3.self ? function(t4) {
            return t4.name && "self" === t4.name;
          } : function(t4) {
            return !t4.name || "self" !== t4.name;
          });
          var e2 = /* @__PURE__ */ new Map(), o2 = i2.find(function(i3) {
            var o3 = true, u3 = {};
            return n3.self && "self" === i3.name ? (e2.set(i3, u3), true) : (r2.j.reverse().forEach(function(n4) {
              o3 && (o3 = r2.M(i3, n4, t3, u3), i3.from && i3.to && (o3 = r2.M(i3, n4, t3, u3, "from") && r2.M(i3, n4, t3, u3, "to")), i3.from && !i3.to && (o3 = r2.M(i3, n4, t3, u3, "from")), !i3.from && i3.to && (o3 = r2.M(i3, n4, t3, u3, "to")));
            }), e2.set(i3, u3), o3);
          }), u2 = e2.get(o2), s2 = [];
          if (s2.push(n3.once ? "once" : "page"), n3.self && s2.push("self"), u2) {
            var f2, c2 = [o2];
            Object.keys(u2).length > 0 && c2.push(u2), (f2 = this.logger).info.apply(f2, ["Transition found [" + s2.join(",") + "]"].concat(c2));
          } else this.logger.info("No transition found [" + s2.join(",") + "]");
          return o2;
        }, n2.update = function() {
          var t3 = this;
          this.all = this.all.map(function(n3) {
            return t3.N(n3);
          }).sort(function(t4, n3) {
            return t4.priority - n3.priority;
          }).reverse().map(function(t4) {
            return delete t4.priority, t4;
          }), this.page = this.all.filter(function(t4) {
            return void 0 !== t4.leave || void 0 !== t4.enter;
          }), this.once = this.all.filter(function(t4) {
            return void 0 !== t4.once;
          });
        }, n2.M = function(t3, n3, r2, i2, e2) {
          var o2 = true, u2 = false, s2 = t3, f2 = n3.name, c2 = f2, a2 = f2, h2 = f2, v2 = e2 ? s2[e2] : s2, d2 = "to" === e2 ? r2.next : r2.current;
          if (e2 ? v2 && v2[f2] : v2[f2]) {
            switch (n3.type) {
              case "strings":
              default:
                var l2 = Array.isArray(v2[c2]) ? v2[c2] : [v2[c2]];
                d2[c2] && -1 !== l2.indexOf(d2[c2]) && (u2 = true), -1 === l2.indexOf(d2[c2]) && (o2 = false);
                break;
              case "object":
                var p2 = Array.isArray(v2[a2]) ? v2[a2] : [v2[a2]];
                d2[a2] ? (d2[a2].name && -1 !== p2.indexOf(d2[a2].name) && (u2 = true), -1 === p2.indexOf(d2[a2].name) && (o2 = false)) : o2 = false;
                break;
              case "function":
                v2[h2](r2) ? u2 = true : o2 = false;
            }
            u2 && (e2 ? (i2[e2] = i2[e2] || {}, i2[e2][f2] = s2[e2][f2]) : i2[f2] = s2[f2]);
          }
          return o2;
        }, n2.S = function(t3, n3, r2) {
          var i2 = 0;
          return (t3[n3] || t3.from && t3.from[n3] || t3.to && t3.to[n3]) && (i2 += Math.pow(10, r2), t3.from && t3.from[n3] && (i2 += 1), t3.to && t3.to[n3] && (i2 += 2)), i2;
        }, n2.N = function(t3) {
          var n3 = this;
          t3.priority = 0;
          var r2 = 0;
          return this.j.forEach(function(i2, e2) {
            r2 += n3.S(t3, i2.name, e2 + 1);
          }), t3.priority = r2, t3;
        }, t2;
      })();
      function V(t2, n2) {
        try {
          var r2 = t2();
        } catch (t3) {
          return n2(t3);
        }
        return r2 && r2.then ? r2.then(void 0, n2) : r2;
      }
      var Y = /* @__PURE__ */ (function() {
        function t2(t3) {
          void 0 === t3 && (t3 = []), this.logger = new d("@barba/core"), this.store = void 0, this.C = false, this.store = new K(t3);
        }
        var r2 = t2.prototype;
        return r2.get = function(t3, n2) {
          return this.store.resolve(t3, n2);
        }, r2.doOnce = function(t3) {
          var n2 = t3.data, r3 = t3.transition;
          try {
            var i2 = function() {
              e2.C = false;
            }, e2 = this, o2 = r3 || {};
            e2.C = true;
            var u2 = V(function() {
              return Promise.resolve(e2.L("beforeOnce", n2, o2)).then(function() {
                return Promise.resolve(e2.once(n2, o2)).then(function() {
                  return Promise.resolve(e2.L("afterOnce", n2, o2)).then(function() {
                  });
                });
              });
            }, function(t4) {
              e2.C = false, e2.logger.debug("Transition error [before/after/once]"), e2.logger.error(t4);
            });
            return Promise.resolve(u2 && u2.then ? u2.then(i2) : i2());
          } catch (t4) {
            return Promise.reject(t4);
          }
        }, r2.doPage = function(t3) {
          var n2 = t3.data, r3 = t3.transition, i2 = t3.page, e2 = t3.wrapper;
          try {
            var o2 = function(t4) {
              u2.C = false;
            }, u2 = this, s2 = r3 || {}, f2 = true === s2.sync || false;
            u2.C = true;
            var c2 = V(function() {
              function t4() {
                return Promise.resolve(u2.L("before", n2, s2)).then(function() {
                  function t5(t6) {
                    return Promise.resolve(u2.remove(n2)).then(function() {
                      return Promise.resolve(u2.L("after", n2, s2)).then(function() {
                      });
                    });
                  }
                  var r5 = (function() {
                    if (f2) return V(function() {
                      return Promise.resolve(u2.add(n2, e2)).then(function() {
                        return Promise.resolve(u2.L("beforeLeave", n2, s2)).then(function() {
                          return Promise.resolve(u2.L("beforeEnter", n2, s2)).then(function() {
                            return Promise.resolve(Promise.all([u2.leave(n2, s2), u2.enter(n2, s2)])).then(function() {
                              return Promise.resolve(u2.L("afterLeave", n2, s2)).then(function() {
                                return Promise.resolve(u2.L("afterEnter", n2, s2)).then(function() {
                                });
                              });
                            });
                          });
                        });
                      });
                    }, function(t7) {
                      if (u2.H(t7)) throw new W(t7, "Transition error [sync]");
                    });
                    var t6 = function(t7) {
                      return V(function() {
                        var t8 = (function() {
                          if (false !== r6) return Promise.resolve(u2.add(n2, e2)).then(function() {
                            return Promise.resolve(u2.L("beforeEnter", n2, s2)).then(function() {
                              return Promise.resolve(u2.enter(n2, s2, r6)).then(function() {
                                return Promise.resolve(u2.L("afterEnter", n2, s2)).then(function() {
                                });
                              });
                            });
                          });
                        })();
                        if (t8 && t8.then) return t8.then(function() {
                        });
                      }, function(t8) {
                        if (u2.H(t8)) throw new W(t8, "Transition error [before/after/enter]");
                      });
                    }, r6 = false, o3 = V(function() {
                      return Promise.resolve(u2.L("beforeLeave", n2, s2)).then(function() {
                        return Promise.resolve(Promise.all([u2.leave(n2, s2), g(i2, n2)]).then(function(t7) {
                          return t7[0];
                        })).then(function(t7) {
                          return r6 = t7, Promise.resolve(u2.L("afterLeave", n2, s2)).then(function() {
                          });
                        });
                      });
                    }, function(t7) {
                      if (u2.H(t7)) throw new W(t7, "Transition error [before/after/leave]");
                    });
                    return o3 && o3.then ? o3.then(t6) : t6();
                  })();
                  return r5 && r5.then ? r5.then(t5) : t5();
                });
              }
              var r4 = (function() {
                if (f2) return Promise.resolve(g(i2, n2)).then(function() {
                });
              })();
              return r4 && r4.then ? r4.then(t4) : t4();
            }, function(t4) {
              if (u2.C = false, t4.name && "BarbaError" === t4.name) throw u2.logger.debug(t4.label), u2.logger.error(t4.error), t4;
              throw u2.logger.debug("Transition error [page]"), u2.logger.error(t4), t4;
            });
            return Promise.resolve(c2 && c2.then ? c2.then(o2) : o2());
          } catch (t4) {
            return Promise.reject(t4);
          }
        }, r2.once = function(t3, n2) {
          try {
            return Promise.resolve(L.do("once", t3, n2)).then(function() {
              return n2.once ? S(n2.once, n2)(t3) : Promise.resolve();
            });
          } catch (t4) {
            return Promise.reject(t4);
          }
        }, r2.leave = function(t3, n2) {
          try {
            return Promise.resolve(L.do("leave", t3, n2)).then(function() {
              return n2.leave ? S(n2.leave, n2)(t3) : Promise.resolve();
            });
          } catch (t4) {
            return Promise.reject(t4);
          }
        }, r2.enter = function(t3, n2, r3) {
          try {
            return Promise.resolve(L.do("enter", t3, n2)).then(function() {
              return n2.enter ? S(n2.enter, n2)(t3, r3) : Promise.resolve();
            });
          } catch (t4) {
            return Promise.reject(t4);
          }
        }, r2.add = function(t3, n2) {
          try {
            return b.addContainer(t3.next.container, n2), L.do("nextAdded", t3), Promise.resolve();
          } catch (t4) {
            return Promise.reject(t4);
          }
        }, r2.remove = function(t3) {
          try {
            return b.removeContainer(t3.current.container), L.do("currentRemoved", t3), Promise.resolve();
          } catch (t4) {
            return Promise.reject(t4);
          }
        }, r2.H = function(t3) {
          return t3.message ? !/Timeout error|Fetch error/.test(t3.message) : !t3.status;
        }, r2.L = function(t3, n2, r3) {
          try {
            return Promise.resolve(L.do(t3, n2, r3)).then(function() {
              return r3[t3] ? S(r3[t3], r3)(n2) : Promise.resolve();
            });
          } catch (t4) {
            return Promise.reject(t4);
          }
        }, n(t2, [{ key: "isRunning", get: function() {
          return this.C;
        }, set: function(t3) {
          this.C = t3;
        } }, { key: "hasOnce", get: function() {
          return this.store.once.length > 0;
        } }, { key: "hasSelf", get: function() {
          return this.store.all.some(function(t3) {
            return "self" === t3.name;
          });
        } }, { key: "shouldWait", get: function() {
          return this.store.all.some(function(t3) {
            return t3.to && !t3.to.route || t3.sync;
          });
        } }]), t2;
      })(), Z = /* @__PURE__ */ (function() {
        function t2(t3) {
          var n2 = this;
          this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = /* @__PURE__ */ new Map(), 0 !== t3.length && (t3.forEach(function(t4) {
            n2.byNamespace.set(t4.namespace, t4);
          }), this.names.forEach(function(t4) {
            L[t4](n2._(t4));
          }));
        }
        return t2.prototype._ = function(t3) {
          var n2 = this;
          return function(r2) {
            var i2 = t3.match(/enter/i) ? r2.next : r2.current, e2 = n2.byNamespace.get(i2.namespace);
            return e2 && e2[t3] ? S(e2[t3], e2)(r2) : Promise.resolve();
          };
        }, t2;
      })();
      Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(t2) {
        var n2 = this;
        do {
          if (n2.matches(t2)) return n2;
          n2 = n2.parentElement || n2.parentNode;
        } while (null !== n2 && 1 === n2.nodeType);
        return null;
      });
      var tt = { container: null, html: "", namespace: "", url: { hash: "", href: "", path: "", port: null, query: {} } }, nt = /* @__PURE__ */ (function() {
        function t2() {
          this.version = "2.10.3", this.schemaPage = tt, this.Logger = d, this.logger = new d("@barba/core"), this.plugins = [], this.timeout = void 0, this.cacheIgnore = void 0, this.cacheFirstPage = void 0, this.prefetchIgnore = void 0, this.preventRunning = void 0, this.hooks = L, this.cache = void 0, this.headers = void 0, this.prevent = void 0, this.transitions = void 0, this.views = void 0, this.dom = b, this.helpers = x, this.history = P, this.request = M, this.url = j, this.D = void 0, this.B = void 0, this.q = void 0, this.F = void 0;
        }
        var i2 = t2.prototype;
        return i2.use = function(t3, n2) {
          var r2 = this.plugins;
          r2.indexOf(t3) > -1 ? this.logger.warn("Plugin [" + t3.name + "] already installed.") : "function" == typeof t3.install ? (t3.install(this, n2), r2.push(t3)) : this.logger.warn("Plugin [" + t3.name + '] has no "install" method.');
        }, i2.init = function(t3) {
          var n2 = void 0 === t3 ? {} : t3, i3 = n2.transitions, e2 = void 0 === i3 ? [] : i3, o2 = n2.views, u2 = void 0 === o2 ? [] : o2, s2 = n2.schema, f2 = void 0 === s2 ? m : s2, c2 = n2.requestError, a2 = n2.timeout, h2 = void 0 === a2 ? 2e3 : a2, v2 = n2.cacheIgnore, l2 = void 0 !== v2 && v2, p2 = n2.cacheFirstPage, w2 = void 0 !== p2 && p2, b2 = n2.prefetchIgnore, y2 = void 0 !== b2 && b2, P2 = n2.preventRunning, g2 = void 0 !== P2 && P2, E2 = n2.prevent, x2 = void 0 === E2 ? null : E2, R2 = n2.debug, k2 = n2.logLevel;
          if (d.setLevel(true === (void 0 !== R2 && R2) ? "debug" : void 0 === k2 ? "off" : k2), this.logger.info(this.version), Object.keys(f2).forEach(function(t4) {
            m[t4] && (m[t4] = f2[t4]);
          }), this.B = c2, this.timeout = h2, this.cacheIgnore = l2, this.cacheFirstPage = w2, this.prefetchIgnore = y2, this.preventRunning = g2, this.q = this.dom.getWrapper(), !this.q) throw new Error("[@barba/core] No Barba wrapper found");
          this.I();
          var O2 = this.data.current;
          if (!O2.container) throw new Error("[@barba/core] No Barba container found");
          if (this.cache = new _(l2), this.headers = new D(), this.prevent = new J(y2), this.transitions = new Y(e2), this.views = new Z(u2), null !== x2) {
            if ("function" != typeof x2) throw new Error("[@barba/core] Prevent should be a function");
            this.prevent.add("preventCustom", x2);
          }
          this.history.init(O2.url.href, O2.namespace), w2 && this.cache.set(O2.url.href, Promise.resolve({ html: O2.html, url: O2.url }), "init", "fulfilled"), this.U = this.U.bind(this), this.$ = this.$.bind(this), this.X = this.X.bind(this), this.G(), this.plugins.forEach(function(t4) {
            return t4.init();
          });
          var T2 = this.data;
          T2.trigger = "barba", T2.next = T2.current, T2.current = r({}, this.schemaPage), this.hooks.do("ready", T2), this.once(T2), this.I();
        }, i2.destroy = function() {
          this.I(), this.J(), this.history.clear(), this.hooks.clear(), this.plugins = [];
        }, i2.force = function(t3) {
          window.location.assign(t3);
        }, i2.go = function(t3, n2, r2) {
          var i3;
          if (void 0 === n2 && (n2 = "barba"), this.F = null, this.transitions.isRunning) this.force(t3);
          else if (!(i3 = "popstate" === n2 ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t3) && this.url.getQuery(this.history.current.url, true) === this.url.getQuery(t3, true) : this.prevent.run("sameUrl", null, null, t3)) || this.transitions.hasSelf) return n2 = this.history.change(this.cache.has(t3) ? this.cache.get(t3).target : t3, n2, r2), r2 && (r2.stopPropagation(), r2.preventDefault()), this.page(t3, n2, null != r2 ? r2 : void 0, i3);
        }, i2.once = function(t3) {
          try {
            var n2 = this;
            return Promise.resolve(n2.hooks.do("beforeEnter", t3)).then(function() {
              function r2() {
                return Promise.resolve(n2.hooks.do("afterEnter", t3)).then(function() {
                });
              }
              var i3 = (function() {
                if (n2.transitions.hasOnce) {
                  var r3 = n2.transitions.get(t3, { once: true });
                  return Promise.resolve(n2.transitions.doOnce({ transition: r3, data: t3 })).then(function() {
                  });
                }
              })();
              return i3 && i3.then ? i3.then(r2) : r2();
            });
          } catch (t4) {
            return Promise.reject(t4);
          }
        }, i2.page = function(t3, n2, i3, e2) {
          try {
            var o2, u2 = function() {
              var t4 = s2.data;
              return Promise.resolve(s2.hooks.do("page", t4)).then(function() {
                var n3 = (function(n4, r2) {
                  try {
                    var i4 = (u3 = s2.transitions.get(t4, { once: false, self: e2 }), Promise.resolve(s2.transitions.doPage({ data: t4, page: o2, transition: u3, wrapper: s2.q })).then(function() {
                      s2.I();
                    }));
                  } catch (t5) {
                    return r2();
                  }
                  var u3;
                  return i4 && i4.then ? i4.then(void 0, r2) : i4;
                })(0, function() {
                  0 === d.getLevel() && s2.force(t4.next.url.href);
                });
                if (n3 && n3.then) return n3.then(function() {
                });
              });
            }, s2 = this;
            if (s2.data.next.url = r({ href: t3 }, s2.url.parse(t3)), s2.data.trigger = n2, s2.data.event = i3, s2.cache.has(t3)) o2 = s2.cache.update(t3, { action: "click" }).request;
            else {
              var f2 = s2.request(t3, s2.timeout, s2.onRequestError.bind(s2, n2), s2.cache, s2.headers);
              f2.then(function(r2) {
                r2.url.href !== t3 && s2.history.add(r2.url.href, n2, "replace");
              }), o2 = s2.cache.set(t3, f2, "click", "pending").request;
            }
            var c2 = (function() {
              if (s2.transitions.shouldWait) return Promise.resolve(g(o2, s2.data)).then(function() {
              });
            })();
            return Promise.resolve(c2 && c2.then ? c2.then(u2) : u2());
          } catch (t4) {
            return Promise.reject(t4);
          }
        }, i2.onRequestError = function(t3) {
          this.transitions.isRunning = false;
          var n2 = [].slice.call(arguments, 1), r2 = n2[0], i3 = n2[1], e2 = this.cache.getAction(r2);
          return this.cache.delete(r2), this.B && false === this.B(t3, e2, r2, i3) || "click" === e2 && this.force(r2), false;
        }, i2.prefetch = function(t3) {
          var n2 = this;
          t3 = this.url.getAbsoluteHref(t3), this.cache.has(t3) || this.cache.set(t3, this.request(t3, this.timeout, this.onRequestError.bind(this, "barba"), this.cache, this.headers).catch(function(t4) {
            n2.logger.error(t4);
          }), "prefetch", "pending");
        }, i2.G = function() {
          true !== this.prefetchIgnore && (document.addEventListener("mouseover", this.U), document.addEventListener("touchstart", this.U)), document.addEventListener("click", this.$), window.addEventListener("popstate", this.X);
        }, i2.J = function() {
          true !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.U), document.removeEventListener("touchstart", this.U)), document.removeEventListener("click", this.$), window.removeEventListener("popstate", this.X);
        }, i2.U = function(t3) {
          var n2 = this, r2 = this.W(t3);
          if (r2) {
            var i3 = this.url.getAbsoluteHref(this.dom.getHref(r2));
            this.prevent.checkHref(i3) || this.cache.has(i3) || this.cache.set(i3, this.request(i3, this.timeout, this.onRequestError.bind(this, r2), this.cache, this.headers).catch(function(t4) {
              n2.logger.error(t4);
            }), "enter", "pending");
          }
        }, i2.$ = function(t3) {
          var n2 = this.W(t3);
          if (n2) {
            if (this.transitions.isRunning && this.preventRunning) return t3.preventDefault(), void t3.stopPropagation();
            this.F = t3, this.go(this.dom.getHref(n2), n2, t3);
          }
        }, i2.X = function(t3) {
          this.go(this.url.getHref(), "popstate", t3);
        }, i2.W = function(t3) {
          for (var n2 = t3.target; n2 && !this.dom.getHref(n2); ) n2 = n2.parentNode;
          if (n2 && !this.prevent.checkLink(n2, t3, this.dom.getHref(n2))) return n2;
        }, i2.I = function() {
          var t3 = this.url.getHref(), n2 = { container: this.dom.getContainer(), html: this.dom.getHtml(), namespace: this.dom.getNamespace(), url: r({ href: t3 }, this.url.parse(t3)) };
          this.D = { current: n2, event: void 0, next: r({}, this.schemaPage), trigger: void 0 }, this.hooks.do("reset", this.data);
        }, n(t2, [{ key: "data", get: function() {
          return this.D;
        } }, { key: "wrapper", get: function() {
          return this.q;
        } }]), t2;
      })();
      return new nt();
    });
  }
});

// ../instatic-runtime-cache/deps/84b251e205a680e5bad01dc2/node_modules/@barba/prefetch/dist/barba-prefetch.umd.js
var require_barba_prefetch_umd = __commonJS({
  "../instatic-runtime-cache/deps/84b251e205a680e5bad01dc2/node_modules/@barba/prefetch/dist/barba-prefetch.umd.js"(exports, module) {
    !(function(i, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (i || self).barbaPrefetch = t();
    })(exports, function() {
      var i = window.requestIdleCallback || function(i2) {
        var t = Date.now();
        return setTimeout(function() {
          i2({ didTimeout: false, timeRemaining: function() {
            return Math.max(0, 50 - (Date.now() - t));
          } });
        }, 1);
      };
      return new (/* @__PURE__ */ (function() {
        function t() {
          this.name = "@barba/prefetch", this.version = "2.2.0", this.barba = void 0, this.logger = void 0, this.observer = void 0, this.root = void 0, this.timeout = void 0, this.limit = void 0, this.toPrefetch = /* @__PURE__ */ new Set();
        }
        var n = t.prototype;
        return n.install = function(i2, t2) {
          var n2 = void 0 === t2 ? {} : t2, e = n2.root, o = void 0 === e ? document.body : e, s = n2.timeout, h = void 0 === s ? 2e3 : s, r = n2.limit, f = void 0 === r ? 0 : r;
          this.logger = new i2.Logger(this.name), this.logger.info(this.version), this.barba = i2, this.root = o, this.timeout = h, this.limit = f;
        }, n.init = function() {
          var i2 = this;
          this.barba.prefetchIgnore ? this.logger.warn("barba.prefetchIgnore is enabled") : this.barba.cacheIgnore ? this.logger.warn("barba.cacheIgnore is enabled") : (this.observer = new IntersectionObserver(function(t2) {
            t2.forEach(function(t3) {
              if (t3.isIntersecting) {
                var n2 = t3.target, e = i2.barba.url.getAbsoluteHref(i2.barba.dom.getHref(n2));
                i2.toPrefetch.has(e) && (i2.observer.unobserve(n2), i2.barba.cache.has(e) ? i2.barba.cache.update(e, { action: "prefetch" }) : i2.barba.cache.set(e, i2.barba.request(e, i2.barba.timeout, i2.barba.onRequestError.bind(i2.barba, "barba"), i2.barba.cache, i2.barba.headers).catch(function(t4) {
                  i2.logger.error(t4);
                }), "prefetch", "pending"));
              }
            });
          }), this.observe(), this.barba.hooks.after(this.observe, this));
        }, n.observe = function() {
          var t2 = this;
          i(function() {
            var i2 = Array.from(t2.root.querySelectorAll("a"));
            t2.limit > 0 && (i2 = i2.slice(0, t2.limit)), i2.forEach(function(i3) {
              var n2 = i3, e = t2.barba.dom.getHref(n2);
              t2.barba.cache.has(e) || t2.barba.prevent.checkHref(e) || t2.barba.prevent.checkLink(n2, {}, e) || (t2.observer.observe(i3), t2.toPrefetch.add(e));
            });
          }, { timeout: this.timeout });
        }, t;
      })())();
    });
  }
});

// src/scripts/Page-transition-V2.ts
var import_core = __toESM(require_barba_umd());
var import_prefetch = __toESM(require_barba_prefetch_umd());
var ENABLE_INTRO = true;
var TRANSITION_COLOR = "#1A1A1A";
var MOBILE_OVERLAY_COLOR = "#FAFAFA";
var BREAKPOINT = 991;
var INTRO_DELAY = 0;
var INTRO_WAIT_FOR_LOAD = true;
var LOAD_PAGE_SCRIPTS = false;
var LOAD_TIMEOUT = 4e3;
var SAFETY_UNHIDE = 1e4;
var PREHIDE_ID = "lt-prehide";
var barba = import_core.default;
var barbaPrefetch = import_prefetch.default;
var isMobile = window.matchMedia(`(max-width: ${BREAKPOINT}px)`).matches || window.innerWidth <= BREAKPOINT;
var raf = () => new Promise((resolve) => requestAnimationFrame(() => resolve()));
var getGL = () => window.LiquidWebGL;
function waitForGL(timeoutMs = LOAD_TIMEOUT) {
  if (isMobile) return Promise.resolve(void 0);
  return new Promise((resolve) => {
    const t0 = performance.now();
    const check = () => {
      const api = getGL();
      if (api) return resolve(api);
      if (performance.now() - t0 > timeoutMs) return resolve(void 0);
      window.setTimeout(check, 40);
    };
    check();
  });
}
function deferShaderFade(on) {
  const w = window;
  w.LiquidWebGLConfig = { ...w.LiquidWebGLConfig || {}, deferShaderFade: on };
}
function releaseShaders() {
  deferShaderFade(false);
  void waitForGL().then(() => reveal(document));
}
function reveal(scope) {
  getGL()?.revealShaders?.(scope, "sine");
  const lt = window.LiquidTransition || (window.LiquidTransition = {});
  if (lt.onReveal) lt.onReveal(scope);
  else (lt.pendingReveals || (lt.pendingReveals = [])).push(scope);
}
function injectStyles() {
  if (document.getElementById("lt-styles")) return;
  const s = document.createElement("style");
  s.id = "lt-styles";
  s.textContent = `
  [data-barba="container"].barba-next::before {
    content: "";
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: 200;
    will-change: clip-path;
    background-color: ${TRANSITION_COLOR};
    clip-path: var(--clip, inset(0 0 100% 0));
    pointer-events: none;
  }
  .mobile-intro-overlay {
    position: fixed;
    inset: 0;
    background: ${MOBILE_OVERLAY_COLOR};
    z-index: 999999;
    pointer-events: none;
    opacity: 1;
  }
  @media screen and (min-width: ${BREAKPOINT + 1}px) {
    .mobile-intro-overlay { display: none; }
  }
  /* po\u010Das intra je WebGL canvas skryt\xFD (ako v origin\xE1li) */
  html.lt-intro #gl-canvas,
  html.lt-intro .liquid-gl-canvas { opacity: 0 !important; }
  `;
  (document.head || document.documentElement).appendChild(s);
}
function hideBody() {
  if (document.getElementById(PREHIDE_ID)) return;
  const s = document.createElement("style");
  s.id = PREHIDE_ID;
  s.textContent = "body { opacity: 0 !important; }";
  (document.head || document.documentElement).appendChild(s);
}
function showBody() {
  document.getElementById(PREHIDE_ID)?.remove();
  document.documentElement.classList.add("lt-ready");
}
var headRegistry = /* @__PURE__ */ new Map();
var staleHead = [];
function headKey(el) {
  return el instanceof HTMLLinkElement ? "L:" + el.href : "S:" + (el.textContent || "").trim();
}
function snapshotHead() {
  document.head.querySelectorAll('link[rel~="stylesheet"], style').forEach((el) => {
    if (el.id && (el.id.startsWith("lt-") || el.id === "liquid-gl-fallback")) return;
    headRegistry.set(headKey(el), el);
  });
}
function syncHead(html) {
  staleHead = [];
  if (!html) return Promise.resolve();
  const doc = new DOMParser().parseFromString(html, "text/html");
  const nextEls = /* @__PURE__ */ new Map();
  doc.head.querySelectorAll('link[rel~="stylesheet"], style').forEach((el) => {
    if (el.id && (el.id.startsWith("lt-") || el.id === "liquid-gl-fallback")) return;
    nextEls.set(headKey(el), el);
  });
  const pending = [];
  nextEls.forEach((el, key) => {
    if (headRegistry.has(key)) return;
    const clone = el.cloneNode(true);
    if (clone instanceof HTMLLinkElement) {
      pending.push(
        new Promise((resolve) => {
          clone.onload = () => resolve();
          clone.onerror = () => resolve();
          window.setTimeout(resolve, 3e3);
        })
      );
    }
    document.head.appendChild(clone);
    headRegistry.set(key, clone);
  });
  headRegistry.forEach((el, key) => {
    if (!nextEls.has(key)) staleHead.push(el);
  });
  return Promise.all(pending).then(() => void 0);
}
function removeStaleHead() {
  staleHead.forEach((el) => {
    el.remove();
    headRegistry.forEach((v, k) => {
      if (v === el) headRegistry.delete(k);
    });
  });
  staleHead = [];
}
function scriptIdentity(el) {
  const moduleJs = el.getAttribute("data-instatic-module-js");
  if (moduleJs) return "module-js:" + moduleJs;
  const runtimeId = el.getAttribute("data-instatic-runtime-script");
  if (runtimeId) return "runtime:" + runtimeId;
  return "url:" + new URL(el.getAttribute("src") || "", location.href).href;
}
function loadMissingScripts(html) {
  if (!html) return Promise.resolve();
  const doc = new DOMParser().parseFromString(html, "text/html");
  const known = /* @__PURE__ */ new Set();
  document.querySelectorAll("script[src]").forEach((el) => {
    known.add(scriptIdentity(el));
    known.add("url:" + el.src);
  });
  const pending = [];
  const injected = [];
  doc.querySelectorAll("script[src]").forEach((orig) => {
    const id = scriptIdentity(orig);
    if (known.has(id)) return;
    if (!id.startsWith("module-js:") && !LOAD_PAGE_SCRIPTS) return;
    known.add(id);
    const script = document.createElement("script");
    Array.from(orig.attributes).forEach((a) => script.setAttribute(a.name, a.value));
    injected.push(orig.getAttribute("src") || "");
    pending.push(
      new Promise((resolve) => {
        script.onload = () => resolve();
        script.onerror = () => resolve();
        window.setTimeout(resolve, 3e3);
      })
    );
    document.body.appendChild(script);
  });
  if (injected.length) console.info("[page-transitions] na\u010D\xEDtavam skripty novej str\xE1nky:", injected);
  return Promise.all(pending).then(() => void 0);
}
function runDesktopIntro(container) {
  const html = document.documentElement;
  html.classList.add("lt-intro");
  container.classList.add("barba-next");
  gsapWithCSS.set(container, {
    position: "fixed",
    inset: 0,
    zIndex: 99999,
    height: "100vh",
    overflow: "hidden",
    opacity: 1,
    clipPath: "polygon(15% 75%, 85% 75%, 85% 75%, 15% 75%)",
    "--clip": "inset(0 0 0% 0)"
  });
  showBody();
  const introCleanup = () => {
    container.classList.remove("barba-next");
    gsapWithCSS.set(container, { clearProps: "all" });
    html.classList.remove("lt-intro");
  };
  const introSafety = window.setTimeout(
    introCleanup,
    SAFETY_UNHIDE + LOAD_TIMEOUT + INTRO_DELAY * 1e3
  );
  const startPhase1 = () => {
    gsapWithCSS.to(container, {
      clipPath: "polygon(10% 90%, 90% 90%, 90% 10%, 10% 10%)",
      duration: 0.8,
      ease: "hop",
      onComplete: () => {
        void (async () => {
          const api = await waitForGL();
          if (api) await api.whenReady(container, LOAD_TIMEOUT);
          await (document.fonts ? document.fonts.ready.catch(() => void 0) : Promise.resolve());
          await raf();
          api?.refresh();
          await raf();
          window.clearTimeout(introSafety);
          const tl = gsapWithCSS.timeline({
            defaults: { duration: 0.8, ease: "hop" },
            onComplete: () => {
              introCleanup();
              tl.kill();
            }
          });
          tl.to(container, { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" });
          tl.to(container, { "--clip": "inset(0 0 100% 0)" }, "<+=0.285");
          tl.call(() => reveal(document), void 0, "<");
        })();
      }
    });
  };
  void (async () => {
    const minDelay = new Promise((resolve) => {
      window.setTimeout(resolve, (0.5 + INTRO_DELAY) * 1e3);
    });
    const preload = INTRO_WAIT_FOR_LOAD ? Promise.race([
      (async () => {
        const api = await waitForGL();
        if (api) await api.whenReady(container, LOAD_TIMEOUT);
        await (document.fonts ? document.fonts.ready.catch(() => void 0) : Promise.resolve());
      })(),
      new Promise((resolve) => {
        window.setTimeout(resolve, LOAD_TIMEOUT);
      })
      // max. čakanie
    ]).then(() => void 0) : Promise.resolve();
    await Promise.all([minDelay, preload]);
    await raf();
    startPhase1();
  })();
}
function runMobileIntro(container) {
  const overlay = document.createElement("div");
  overlay.className = "mobile-intro-overlay";
  document.body.appendChild(overlay);
  showBody();
  gsapWithCSS.set(container, { opacity: 1 });
  gsapWithCSS.delayedCall(0.1, () => {
    reveal(document);
    gsapWithCSS.to(overlay, {
      opacity: 0,
      duration: 0.45,
      ease: "power2.inOut",
      onComplete: () => overlay.remove()
    });
  });
}
function initBarba() {
  barba.use(barbaPrefetch);
  barba.init({
    prevent: ({ el }) => el.classList.contains("no-transition") || el.target === "_blank",
    transitions: [{
      name: "clip-path-transition",
      sync: true,
      before: async (data) => {
        const isInitial = !data.current.container;
        const lenis = getGL()?.lenis;
        if (data.trigger === "popstate" && !isMobile) {
          window.scrollTo(0, 0);
          lenis?.scrollTo?.(0, { immediate: true });
        }
        if (!isInitial) {
          lenis?.stop?.();
          await syncHead(data.next.html);
          const next = data.next.container;
          if (isMobile) {
            gsapWithCSS.set(next, { position: "fixed", inset: 0, zIndex: 99999, opacity: 0 });
          } else {
            next.style.willChange = "clip-path, transform";
            await raf();
            next.classList.add("barba-next");
            gsapWithCSS.set(next, {
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              height: "100vh",
              overflow: "hidden",
              clipPath: "polygon(15% 75%, 85% 75%, 85% 75%, 15% 75%)",
              "--clip": "inset(0 0 0% 0)"
            });
          }
        }
      },
      enter: async (data) => {
        const isInitial = !data.current.container;
        const next = data.next.container;
        const scriptsReady = isInitial ? Promise.resolve() : loadMissingScripts(data.next.html);
        if (isMobile) {
          if (isInitial) return;
          await scriptsReady;
          reveal(next);
          await new Promise((resolve) => {
            gsapWithCSS.to(next, { opacity: 1, duration: 0.45, ease: "power2.inOut", onComplete: () => resolve() });
          });
          return;
        }
        if (isInitial) return;
        void next.offsetHeight;
        await new Promise((resolve) => {
          gsapWithCSS.to(next, {
            clipPath: "polygon(10% 90%, 90% 90%, 90% 10%, 10% 10%)",
            duration: 0.8,
            ease: "hop",
            onComplete: () => resolve()
          });
        });
        const api = getGL();
        if (api) {
          api.init(next);
          api.hold?.(next);
          await api.whenReady(next, LOAD_TIMEOUT);
        }
        await raf();
        await raf();
        await scriptsReady;
        showBody();
        await new Promise((resolve) => {
          const tl = gsapWithCSS.timeline({
            defaults: { duration: 0.8, ease: "hop" },
            onComplete: () => {
              tl.kill();
              resolve();
            }
          });
          tl.to(next, { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" });
          tl.to(next, { "--clip": "inset(0 0 100% 0)" }, "<+=0.285");
          tl.call(() => reveal(next), void 0, "<");
        });
      },
      after: (data) => {
        const isInitial = !data.current.container;
        const next = data.next.container;
        const api = getGL();
        showBody();
        if (!isMobile && api) api.cleanup(data.current.container);
        if (!isInitial) {
          next.classList.remove("barba-next");
          gsapWithCSS.set(next, { clearProps: "all" });
          removeStaleHead();
          const lenis = api?.lenis;
          if (lenis) {
            lenis.start?.();
            lenis.scrollTo?.(0, { immediate: true });
            lenis.resize();
          } else if (!isMobile || data.trigger !== "popstate") {
            window.scrollTo(0, 0);
          }
        }
        if (!isMobile && api) {
          api.init(next);
          api.release?.(next);
          api.refresh();
          api.renderNow?.();
          requestAnimationFrame(() => requestAnimationFrame(() => {
            api.refresh();
            api.revealShaders?.(next, "power2in");
          }));
        }
      }
    }]
  });
}
function onReady(fn) {
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
  else fn();
}
function main() {
  if (window.__liquidTransitions) return;
  window.__liquidTransitions = true;
  injectStyles();
  if (!isMobile) deferShaderFade(true);
  if (ENABLE_INTRO) {
    hideBody();
    window.setTimeout(showBody, SAFETY_UNHIDE);
  }
  onReady(() => {
    try {
      if ("scrollRestoration" in history) history.scrollRestoration = "manual";
      gsapWithCSS.registerPlugin(CustomEase);
      CustomEase.create("hop", "0.8, 0, 0.2, 1");
      const container = document.querySelector('[data-barba="container"]');
      if (!container) {
        console.warn('[page-transitions] Nena\u0161iel som [data-barba="container"], prechody s\xFA vypnut\xE9.');
        showBody();
        releaseShaders();
        return;
      }
      if (!document.querySelector('[data-barba="wrapper"]')) {
        document.body.setAttribute("data-barba", "wrapper");
      }
      snapshotHead();
      if (ENABLE_INTRO) {
        if (isMobile) runMobileIntro(container);
        else runDesktopIntro(container);
      }
      initBarba();
      if (!ENABLE_INTRO) void waitForGL().then(() => reveal(document));
    } catch (err) {
      console.warn("[page-transitions] Inicializ\xE1cia zlyhala:", err);
      showBody();
      releaseShaders();
    }
  });
}
main();
/*!
 * PAGE TRANSITIONS – Barba.js clip-path prechody (TypeScript modul)
 * Prenesené 1:1 z Webflow custom code: tie isté fázy, časovanie a easing ("hop" = cubic-bezier 0.8, 0, 0.2, 1),
 * desktop clip-path prechod, mobilný fade, úvodná (intro) animácia, čakanie na načítanie WebGL obrázkov.
 *
 * Závislosti (npm): "@barba/core", "@barba/prefetch", "gsap"
 * Spolupracuje s liquid-webgl-pixels.ts cez window.LiquidWebGL (ak je nainštalovaný; inak funguje aj bez neho).
 *
 * Na KAŽDEJ stránke musí byť hlavný obsah v elemente s atribútom  data-barba="container".
 * (data-barba="wrapper" si skript doplní na <body>, ak chýba.)
 *
 * Animácie data-anim rieši page-animations.ts (napojené cez window.LiquidTransition.onReveal).
 *
 * BLANK SCREEN OD PRVÉHO SNÍMKU (dôležité):
 * Tento skript je modul – spúšťa sa až keď sa stiahne a spracuje, čo môže byť po prvom vykreslení stránky.
 * Aby sa hero nikdy neukázal pred introm, musí byť stránka skrytá už v <head> (blokujúco, ešte pred prvým
 * vykreslením). Vlož do globálneho <head> custom kódu:
 *
 *   <style id="lt-prehide">body{opacity:0!important}</style>
 *   <script>setTimeout(function(){var s=document.getElementById('lt-prehide');if(s)s.remove()},10000)<\/script>
 *   <noscript><style>body{opacity:1!important}</style></noscript>
 *
 * Ak head kód nemáš, vlož do globálneho CSS (viď návod) pravidlo s triedou html.lt-ready.
 * Skript potom stránku sám odkryje (odstráni #lt-prehide a pridá triedu lt-ready na <html>).
 */
