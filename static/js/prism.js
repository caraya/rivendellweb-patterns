"use strict";

/* PrismJS 1.25.0
https://prismjs.com/download.html#themes=prism-solarizedlight&languages=markup+css+clike+javascript+apacheconf+bash+c+clojure+cmake+css-extras+dart+ejs+elixir+elm+glsl+go+graphql+handlebars+java+javadoc+javadoclike+jsdoc+js-extras+json+jsonp+js-templates+julia+kotlin+latex+liquid+lisp+makefile+markdown+markup-templating+nginx+ocaml+perl+php+phpdoc+php-extras+processing+protobuf+pug+puppet+python+r+jsx+tsx+ruby+rust+sass+scss+shell-session+smalltalk+soy+stylus+toml+typescript+wasm+wiki+xquery+yaml&plugins=show-language+toolbar */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
  Prism = function (u) {
    var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
      n = 0,
      e = {},
      M = {
        manual: u.Prism && u.Prism.manual,
        disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler,
        util: {
          encode: function e(n) {
            return n instanceof W ? new W(n.type, e(n.content), n.alias) : Array.isArray(n) ? n.map(e) : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          },
          type: function (e) {
            return Object.prototype.toString.call(e).slice(8, -1);
          },
          objId: function (e) {
            return e.__id || Object.defineProperty(e, "__id", {
              value: ++n
            }), e.__id;
          },
          clone: function t(e, r) {
            var a, n;
            switch (r = r || {}, M.util.type(e)) {
              case "Object":
                if (n = M.util.objId(e), r[n]) return r[n];
                for (var i in a = {}, r[n] = a, e) e.hasOwnProperty(i) && (a[i] = t(e[i], r));
                return a;
              case "Array":
                return n = M.util.objId(e), r[n] ? r[n] : (a = [], r[n] = a, e.forEach(function (e, n) {
                  a[n] = t(e, r);
                }), a);
              default:
                return e;
            }
          },
          getLanguage: function (e) {
            for (; e;) {
              var n = t.exec(e.className);
              if (n) return n[1].toLowerCase();
              e = e.parentElement;
            }
            return "none";
          },
          setLanguage: function (e, n) {
            e.className = e.className.replace(RegExp(t, "gi"), ""), e.classList.add("language-" + n);
          },
          currentScript: function () {
            if ("undefined" == typeof document) return null;
            if ("currentScript" in document) return document.currentScript;
            try {
              throw new Error();
            } catch (e) {
              var n = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(e.stack) || [])[1];
              if (n) {
                var t = document.getElementsByTagName("script");
                for (var r in t) if (t[r].src == n) return t[r];
              }
              return null;
            }
          },
          isActive: function (e, n, t) {
            for (var r = "no-" + n; e;) {
              var a = e.classList;
              if (a.contains(n)) return !0;
              if (a.contains(r)) return !1;
              e = e.parentElement;
            }
            return !!t;
          }
        },
        languages: {
          plain: e,
          plaintext: e,
          text: e,
          txt: e,
          extend: function (e, n) {
            var t = M.util.clone(M.languages[e]);
            for (var r in n) t[r] = n[r];
            return t;
          },
          insertBefore: function (t, e, n, r) {
            var a = (r = r || M.languages)[t],
              i = {};
            for (var l in a) if (a.hasOwnProperty(l)) {
              if (l == e) for (var o in n) n.hasOwnProperty(o) && (i[o] = n[o]);
              n.hasOwnProperty(l) || (i[l] = a[l]);
            }
            var s = r[t];
            return r[t] = i, M.languages.DFS(M.languages, function (e, n) {
              n === s && e != t && (this[e] = i);
            }), i;
          },
          DFS: function e(n, t, r, a) {
            a = a || {};
            var i = M.util.objId;
            for (var l in n) if (n.hasOwnProperty(l)) {
              t.call(n, l, n[l], r || l);
              var o = n[l],
                s = M.util.type(o);
              "Object" !== s || a[i(o)] ? "Array" !== s || a[i(o)] || (a[i(o)] = !0, e(o, t, l, a)) : (a[i(o)] = !0, e(o, t, null, a));
            }
          }
        },
        plugins: {},
        highlightAll: function (e, n) {
          M.highlightAllUnder(document, e, n);
        },
        highlightAllUnder: function (e, n, t) {
          var r = {
            callback: t,
            container: e,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          M.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), M.hooks.run("before-all-elements-highlight", r);
          for (var a, i = 0; a = r.elements[i++];) M.highlightElement(a, !0 === n, r.callback);
        },
        highlightElement: function (e, n, t) {
          var r = M.util.getLanguage(e),
            a = M.languages[r];
          M.util.setLanguage(e, r);
          var i = e.parentElement;
          i && "pre" === i.nodeName.toLowerCase() && M.util.setLanguage(i, r);
          var l = {
            element: e,
            language: r,
            grammar: a,
            code: e.textContent
          };
          function o(e) {
            l.highlightedCode = e, M.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, M.hooks.run("after-highlight", l), M.hooks.run("complete", l), t && t.call(l.element);
          }
          if (M.hooks.run("before-sanity-check", l), (i = l.element.parentElement) && "pre" === i.nodeName.toLowerCase() && !i.hasAttribute("tabindex") && i.setAttribute("tabindex", "0"), !l.code) return M.hooks.run("complete", l), void (t && t.call(l.element));
          if (M.hooks.run("before-highlight", l), l.grammar) {
            if (n && u.Worker) {
              var s = new Worker(M.filename);
              s.onmessage = function (e) {
                o(e.data);
              }, s.postMessage(JSON.stringify({
                language: l.language,
                code: l.code,
                immediateClose: !0
              }));
            } else o(M.highlight(l.code, l.grammar, l.language));
          } else o(M.util.encode(l.code));
        },
        highlight: function (e, n, t) {
          var r = {
            code: e,
            grammar: n,
            language: t
          };
          return M.hooks.run("before-tokenize", r), r.tokens = M.tokenize(r.code, r.grammar), M.hooks.run("after-tokenize", r), W.stringify(M.util.encode(r.tokens), r.language);
        },
        tokenize: function (e, n) {
          var t = n.rest;
          if (t) {
            for (var r in t) n[r] = t[r];
            delete n.rest;
          }
          var a = new i();
          return I(a, a.head, e), function e(n, t, r, a, i, l) {
            for (var o in r) if (r.hasOwnProperty(o) && r[o]) {
              var s = r[o];
              s = Array.isArray(s) ? s : [s];
              for (var u = 0; u < s.length; ++u) {
                if (l && l.cause == o + "," + u) return;
                var c = s[u],
                  g = c.inside,
                  f = !!c.lookbehind,
                  h = !!c.greedy,
                  d = c.alias;
                if (h && !c.pattern.global) {
                  var v = c.pattern.toString().match(/[imsuy]*$/)[0];
                  c.pattern = RegExp(c.pattern.source, v + "g");
                }
                for (var p = c.pattern || c, m = a.next, y = i; m !== t.tail && !(l && y >= l.reach); y += m.value.length, m = m.next) {
                  var k = m.value;
                  if (t.length > n.length) return;
                  if (!(k instanceof W)) {
                    var x,
                      b = 1;
                    if (h) {
                      if (!(x = z(p, y, n, f)) || x.index >= n.length) break;
                      var w = x.index,
                        A = x.index + x[0].length,
                        P = y;
                      for (P += m.value.length; P <= w;) m = m.next, P += m.value.length;
                      if (P -= m.value.length, y = P, m.value instanceof W) continue;
                      for (var E = m; E !== t.tail && (P < A || "string" == typeof E.value); E = E.next) b++, P += E.value.length;
                      b--, k = n.slice(y, P), x.index -= y;
                    } else if (!(x = z(p, 0, k, f))) continue;
                    var w = x.index,
                      L = x[0],
                      S = k.slice(0, w),
                      O = k.slice(w + L.length),
                      j = y + k.length;
                    l && j > l.reach && (l.reach = j);
                    var C = m.prev;
                    S && (C = I(t, C, S), y += S.length), q(t, C, b);
                    var N = new W(o, g ? M.tokenize(L, g) : L, d, L);
                    if (m = I(t, C, N), O && I(t, m, O), 1 < b) {
                      var _ = {
                        cause: o + "," + u,
                        reach: j
                      };
                      e(n, t, r, m.prev, y, _), l && _.reach > l.reach && (l.reach = _.reach);
                    }
                  }
                }
              }
            }
          }(e, a, n, a.head, 0), function (e) {
            var n = [],
              t = e.head.next;
            for (; t !== e.tail;) n.push(t.value), t = t.next;
            return n;
          }(a);
        },
        hooks: {
          all: {},
          add: function (e, n) {
            var t = M.hooks.all;
            t[e] = t[e] || [], t[e].push(n);
          },
          run: function (e, n) {
            var t = M.hooks.all[e];
            if (t && t.length) for (var r, a = 0; r = t[a++];) r(n);
          }
        },
        Token: W
      };
    function W(e, n, t, r) {
      this.type = e, this.content = n, this.alias = t, this.length = 0 | (r || "").length;
    }
    function z(e, n, t, r) {
      e.lastIndex = n;
      var a = e.exec(t);
      if (a && r && a[1]) {
        var i = a[1].length;
        a.index += i, a[0] = a[0].slice(i);
      }
      return a;
    }
    function i() {
      var e = {
          value: null,
          prev: null,
          next: null
        },
        n = {
          value: null,
          prev: e,
          next: null
        };
      e.next = n, this.head = e, this.tail = n, this.length = 0;
    }
    function I(e, n, t) {
      var r = n.next,
        a = {
          value: t,
          prev: n,
          next: r
        };
      return n.next = a, r.prev = a, e.length++, a;
    }
    function q(e, n, t) {
      for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next;
      (n.next = r).prev = n, e.length -= a;
    }
    if (u.Prism = M, W.stringify = function n(e, t) {
      if ("string" == typeof e) return e;
      if (Array.isArray(e)) {
        var r = "";
        return e.forEach(function (e) {
          r += n(e, t);
        }), r;
      }
      var a = {
          type: e.type,
          content: n(e.content, t),
          tag: "span",
          classes: ["token", e.type],
          attributes: {},
          language: t
        },
        i = e.alias;
      i && (Array.isArray(i) ? Array.prototype.push.apply(a.classes, i) : a.classes.push(i)), M.hooks.run("wrap", a);
      var l = "";
      for (var o in a.attributes) l += " " + o + '="' + (a.attributes[o] || "").replace(/"/g, "&quot;") + '"';
      return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + l + ">" + a.content + "</" + a.tag + ">";
    }, !u.document) return u.addEventListener && (M.disableWorkerMessageHandler || u.addEventListener("message", function (e) {
      var n = JSON.parse(e.data),
        t = n.language,
        r = n.code,
        a = n.immediateClose;
      u.postMessage(M.highlight(r, M.languages[t], t)), a && u.close();
    }, !1)), M;
    var r = M.util.currentScript();
    function a() {
      M.manual || M.highlightAll();
    }
    if (r && (M.filename = r.src, r.hasAttribute("data-manual") && (M.manual = !0)), !M.manual) {
      var l = document.readyState;
      "loading" === l || "interactive" === l && r && r.defer ? document.addEventListener("DOMContentLoaded", a) : window.requestAnimationFrame ? window.requestAnimationFrame(a) : window.setTimeout(a, 16);
    }
    return M;
  }(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = {
  comment: {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: !0
  },
  prolog: {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: !0
  },
  doctype: {
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: !0,
        greedy: !0,
        inside: null
      },
      string: {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: !0
      },
      punctuation: /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      name: /[^\s<>'"]+/
    }
  },
  cdata: {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: !0
  },
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/
        }
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [{
            pattern: /^=/,
            alias: "attr-equals"
          }, /"|'/]
        }
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/
        }
      }
    }
  },
  entity: [{
    pattern: /&[\da-z]{1,8};/i,
    alias: "named-entity"
  }, /&#x?[\da-f]{1,8};/i]
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function (a) {
  "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"));
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
  value: function (a, e) {
    var s = {};
    s["language-" + e] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: Prism.languages[e]
    }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var t = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: s
      }
    };
    t["language-" + e] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[e]
    };
    var n = {};
    n[a] = {
      pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, function () {
        return a;
      }), "i"),
      lookbehind: !0,
      greedy: !0,
      inside: t
    }, Prism.languages.insertBefore("markup", "cdata", n);
  }
}), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
  value: function (a, e) {
    Prism.languages.markup.tag.inside["special-attr"].push({
      pattern: RegExp("(^|[\"'\\s])(?:" + a + ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))", "i"),
      lookbehind: !0,
      inside: {
        "attr-name": /^[^\s=]+/,
        "attr-value": {
          pattern: /=[\s\S]+/,
          inside: {
            value: {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: !0,
              alias: [e, "language-" + e],
              inside: Prism.languages[e]
            },
            punctuation: [{
              pattern: /^=/,
              alias: "attr-equals"
            }, /"|'/]
          }
        }
      }
    });
  }
}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml;
!function (s) {
  var e = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  s.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: !0,
          alias: "selector"
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: !0
        }
      }
    },
    url: {
      pattern: RegExp("\\burl\\((?:" + e.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)", "i"),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: {
          pattern: RegExp("^" + e.source + "$"),
          alias: "url"
        }
      }
    },
    selector: {
      pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + e.source + ")*(?=\\s*\\{)"),
      lookbehind: !0
    },
    string: {
      pattern: e,
      greedy: !0
    },
    property: {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: !0
    },
    important: /!important\b/i,
    function: {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: !0
    },
    punctuation: /[(){};:,]/
  }, s.languages.css.atrule.inside.rest = s.languages.css;
  var t = s.languages.markup;
  t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
}(Prism);
Prism.languages.clike = {
  comment: [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: !0,
    greedy: !0
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: !0,
    greedy: !0
  }],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: {
      punctuation: /[.\\]/
    }
  },
  keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  boolean: /\b(?:false|true)\b/,
  function: /\b\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [Prism.languages.clike["class-name"], {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
    lookbehind: !0
  }],
  keyword: [{
    pattern: /((?:^|\})\s*)catch\b/,
    lookbehind: !0
  }, {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: !0
  }],
  function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  number: {
    pattern: RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),
    lookbehind: !0
  },
  operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    lookbehind: !0,
    greedy: !0,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: !0,
        alias: "language-regex",
        inside: Prism.languages.regex
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/
    }
  },
  "function-variable": {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function"
  },
  parameter: [{
    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }, {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore("javascript", "string", {
  hashbang: {
    pattern: /^#!.*/,
    greedy: !0,
    alias: "comment"
  },
  "template-string": {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: !0,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      interpolation: {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation"
          },
          rest: Prism.languages.javascript
        }
      },
      string: /[\s\S]+/
    }
  },
  "string-property": {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: !0,
    greedy: !0,
    alias: "property"
  }
}), Prism.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: !0,
    alias: "property"
  }
}), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)", "javascript")), Prism.languages.js = Prism.languages.javascript;
Prism.languages.apacheconf = {
  comment: /#.*/,
  "directive-inline": {
    pattern: /(^[\t ]*)\b(?:AcceptFilter|AcceptPathInfo|AccessFileName|Action|Add(?:Alt|AltByEncoding|AltByType|Charset|DefaultCharset|Description|Encoding|Handler|Icon|IconByEncoding|IconByType|InputFilter|Language|ModuleInfo|OutputFilter|OutputFilterByType|Type)|Alias|AliasMatch|Allow(?:CONNECT|EncodedSlashes|Methods|Override|OverrideList)?|Anonymous(?:_LogEmail|_MustGiveEmail|_NoUserID|_VerifyEmail)?|AsyncRequestWorkerFactor|Auth(?:BasicAuthoritative|BasicFake|BasicProvider|BasicUseDigestAlgorithm|DBDUserPWQuery|DBDUserRealmQuery|DBMGroupFile|DBMType|DBMUserFile|Digest(?:Algorithm|Domain|NonceLifetime|Provider|Qop|ShmemSize)|Form(?:Authoritative|Body|DisableNoStore|FakeBasicAuth|Location|LoginRequiredLocation|LoginSuccessLocation|LogoutLocation|Method|Mimetype|Password|Provider|SitePassphrase|Size|Username)|GroupFile|LDAP(?:AuthorizePrefix|BindAuthoritative|BindDN|BindPassword|CharsetConfig|CompareAsUser|CompareDNOnServer|DereferenceAliases|GroupAttribute|GroupAttributeIsDN|InitialBindAsUser|InitialBindPattern|MaxSubGroupDepth|RemoteUserAttribute|RemoteUserIsDN|SearchAsUser|SubGroupAttribute|SubGroupClass|Url)|Merging|Name|nCache(?:Context|Enable|ProvideFor|SOCache|Timeout)|nzFcgiCheckAuthnProvider|nzFcgiDefineProvider|Type|UserFile|zDBDLoginToReferer|zDBDQuery|zDBDRedirectQuery|zDBMType|zSendForbiddenOnFailure)|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferedLogs|BufferSize|Cache(?:DefaultExpire|DetailHeader|DirLength|DirLevels|Disable|Enable|File|Header|IgnoreCacheControl|IgnoreHeaders|IgnoreNoLastMod|IgnoreQueryString|IgnoreURLSessionIdentifiers|KeyBaseURL|LastModifiedFactor|Lock|LockMaxAge|LockPath|MaxExpire|MaxFileSize|MinExpire|MinFileSize|NegotiatedDocs|QuickHandler|ReadSize|ReadTime|Root|Socache(?:MaxSize|MaxTime|MinTime|ReadSize|ReadTime)?|StaleOnError|StoreExpired|StoreNoStore|StorePrivate)|CGIDScriptTimeout|CGIMapExtension|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|Deflate(?:BufferSize|CompressionLevel|FilterNote|InflateLimitRequestBody|InflateRatio(?:Burst|Limit)|MemLevel|WindowSize)|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DTracePrivileges|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtendedStatus|ExtFilterDefine|ExtFilterOptions|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|Heartbeat(?:Address|Listen|MaxServers|Storage)|HostnameLookups|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|Index(?:HeadInsert|Ignore|IgnoreReset|Options|OrderDefault|StyleSheet)|InputSed|ISAPI(?:AppendLogToErrors|AppendLogToQuery|CacheFile|FakeAsync|LogNotSupported|ReadAheadBuffer)|KeepAlive|KeepAliveTimeout|KeptBodySize|LanguagePriority|LDAP(?:CacheEntries|CacheTTL|ConnectionPoolTTL|ConnectionTimeout|LibraryDebug|OpCacheEntries|OpCacheTTL|ReferralHopLimit|Referrals|Retries|RetryDelay|SharedCacheFile|SharedCacheSize|Timeout|TrustedClientCert|TrustedGlobalCert|TrustedMode|VerifyServerCert)|Limit(?:InternalRecursion|Request(?:Body|Fields|FieldSize|Line)|XMLRequestBody)|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|Lua(?:Hook(?:AccessChecker|AuthChecker|CheckUserID|Fixups|InsertFilter|Log|MapToStorage|TranslateName|TypeChecker)|Inherit|InputFilter|MapHandler|OutputFilter|PackageCPath|PackagePath|QuickHandler|Root|Scope)|Max(?:ConnectionsPerChild|KeepAliveRequests|MemFree|RangeOverlaps|RangeReversals|Ranges|RequestWorkers|SpareServers|SpareThreads|Threads)|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|MMapFile|ModemStandard|ModMimeUsePathInfo|MultiviewsMatch|Mutex|NameVirtualHost|NoProxy|NWSSLTrustedCerts|NWSSLUpgradeable|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|Proxy(?:AddHeaders|BadHeader|Block|Domain|ErrorOverride|ExpressDBMFile|ExpressDBMType|ExpressEnable|FtpDirCharset|FtpEscapeWildcards|FtpListOnWildcard|HTML(?:BufSize|CharsetOut|DocType|Enable|Events|Extended|Fixups|Interp|Links|Meta|StripComments|URLMap)|IOBufferSize|MaxForwards|Pass(?:Inherit|InterpolateEnv|Match|Reverse|ReverseCookieDomain|ReverseCookiePath)?|PreserveHost|ReceiveBufferSize|Remote|RemoteMatch|Requests|SCGIInternalRedirect|SCGISendfile|Set|SourceAddress|Status|Timeout|Via)|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIP(?:Header|InternalProxy|InternalProxyList|ProxiesHeader|TrustedProxy|TrustedProxyList)|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|Rewrite(?:Base|Cond|Engine|Map|Options|Rule)|RLimitCPU|RLimitMEM|RLimitNPROC|Satisfy|ScoreBoardFile|Script(?:Alias|AliasMatch|InterpreterSource|Log|LogBuffer|LogLength|Sock)?|SecureListen|SeeRequestTail|SendBufferSize|Server(?:Admin|Alias|Limit|Name|Path|Root|Signature|Tokens)|Session(?:Cookie(?:Name|Name2|Remove)|Crypto(?:Cipher|Driver|Passphrase|PassphraseFile)|DBD(?:CookieName|CookieName2|CookieRemove|DeleteLabel|InsertLabel|PerUser|SelectLabel|UpdateLabel)|Env|Exclude|Header|Include|MaxAge)?|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|SSIEndTag|SSIErrorMsg|SSIETag|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSL(?:CACertificateFile|CACertificatePath|CADNRequestFile|CADNRequestPath|CARevocationCheck|CARevocationFile|CARevocationPath|CertificateChainFile|CertificateFile|CertificateKeyFile|CipherSuite|Compression|CryptoDevice|Engine|FIPS|HonorCipherOrder|InsecureRenegotiation|OCSP(?:DefaultResponder|Enable|OverrideResponder|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|UseRequestNonce)|OpenSSLConfCmd|Options|PassPhraseDialog|Protocol|Proxy(?:CACertificateFile|CACertificatePath|CARevocation(?:Check|File|Path)|CheckPeer(?:CN|Expire|Name)|CipherSuite|Engine|MachineCertificate(?:ChainFile|File|Path)|Protocol|Verify|VerifyDepth)|RandomSeed|RenegBufferSize|Require|RequireSSL|Session(?:Cache|CacheTimeout|TicketKeyFile|Tickets)|SRPUnknownUserSeed|SRPVerifierFile|Stapling(?:Cache|ErrorCacheTimeout|FakeTryLater|ForceURL|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|ReturnResponderErrors|StandardCacheTimeout)|StrictSNIVHostCheck|UserName|UseStapling|VerifyClient|VerifyDepth)|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadsPerChild|ThreadStackSize|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|Virtual(?:DocumentRoot|ScriptAlias)(?:IP)?|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/im,
    lookbehind: !0,
    alias: "property"
  },
  "directive-block": {
    pattern: /<\/?\b(?:Auth[nz]ProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|Require(?:All|Any|None)|VirtualHost)\b.*>/i,
    inside: {
      "directive-block": {
        pattern: /^<\/?\w+/,
        inside: {
          punctuation: /^<\/?/
        },
        alias: "tag"
      },
      "directive-block-parameter": {
        pattern: /.*[^>]/,
        inside: {
          punctuation: /:/,
          string: {
            pattern: /("|').*\1/,
            inside: {
              variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/
            }
          }
        },
        alias: "attr-value"
      },
      punctuation: />/
    },
    alias: "tag"
  },
  "directive-flags": {
    pattern: /\[(?:[\w=],?)+\]/,
    alias: "keyword"
  },
  string: {
    pattern: /("|').*\1/,
    inside: {
      variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/
    }
  },
  variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/,
  regex: /\^?.*\$|\^.*\$?/
};
!function (e) {
  var t = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
    n = {
      pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
      lookbehind: !0,
      alias: "punctuation",
      inside: null
    },
    a = {
      bash: n,
      environment: {
        pattern: RegExp("\\$" + t),
        alias: "constant"
      },
      variable: [{
        pattern: /\$?\(\([\s\S]+?\)\)/,
        greedy: !0,
        inside: {
          variable: [{
            pattern: /(^\$\(\([\s\S]+)\)\)/,
            lookbehind: !0
          }, /^\$\(\(/],
          number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
          operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
          punctuation: /\(\(?|\)\)?|,|;/
        }
      }, {
        pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
        greedy: !0,
        inside: {
          variable: /^\$\(|^`|\)$|`$/
        }
      }, {
        pattern: /\$\{[^}]+\}/,
        greedy: !0,
        inside: {
          operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
          punctuation: /[\[\]]/,
          environment: {
            pattern: RegExp("(\\{)" + t),
            lookbehind: !0,
            alias: "constant"
          }
        }
      }, /\$(?:\w+|[#?*!@$])/],
      entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
    };
  e.languages.bash = {
    shebang: {
      pattern: /^#!\s*\/.*/,
      alias: "important"
    },
    comment: {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: !0
    },
    "function-name": [{
      pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
      lookbehind: !0,
      alias: "function"
    }, {
      pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
      alias: "function"
    }],
    "for-or-select": {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: "variable",
      lookbehind: !0
    },
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
      inside: {
        environment: {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
          lookbehind: !0,
          alias: "constant"
        }
      },
      alias: "variable",
      lookbehind: !0
    },
    string: [{
      pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
      lookbehind: !0,
      greedy: !0,
      inside: a
    }, {
      pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        bash: n
      }
    }, {
      pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
      lookbehind: !0,
      greedy: !0,
      inside: a
    }, {
      pattern: /(^|[^$\\])'[^']*'/,
      lookbehind: !0,
      greedy: !0
    }, {
      pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
      greedy: !0,
      inside: {
        entity: a.entity
      }
    }],
    environment: {
      pattern: RegExp("\\$?" + t),
      alias: "constant"
    },
    variable: a.variable,
    function: {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    keyword: {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    builtin: {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: !0,
      alias: "class-name"
    },
    boolean: {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    "file-descriptor": {
      pattern: /\B&\d\b/,
      alias: "important"
    },
    operator: {
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        "file-descriptor": {
          pattern: /^\d/,
          alias: "important"
        }
      }
    },
    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    number: {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: !0
    }
  }, n.inside = e.languages.bash;
  for (var s = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], i = a.variable[1].inside, o = 0; o < s.length; o++) i[s[o]] = e.languages.bash[s[o]];
  e.languages.shell = e.languages.bash;
}(Prism);
Prism.languages.c = Prism.languages.extend("clike", {
  comment: {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: !0
  },
  keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
}), Prism.languages.insertBefore("c", "string", {
  macro: {
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
    inside: {
      string: [{
        pattern: /^(#\s*include\s*)<[^>]+>/,
        lookbehind: !0
      }, Prism.languages.c.string],
      comment: Prism.languages.c.comment,
      "macro-name": [{
        pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
        lookbehind: !0
      }, {
        pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
        lookbehind: !0,
        alias: "function"
      }],
      directive: {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: !0,
        alias: "keyword"
      },
      "directive-hash": /^#/,
      punctuation: /##|\\(?=[\r\n])/,
      expression: {
        pattern: /\S[\s\S]*/,
        inside: Prism.languages.c
      }
    }
  },
  constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
}), delete Prism.languages.c.boolean;
Prism.languages.clojure = {
  comment: {
    pattern: /;.*/,
    greedy: !0
  },
  string: [{
    pattern: /"(?:[^"\\]|\\.)*"/,
    greedy: !0
  }, /\\\w+/],
  symbol: {
    pattern: /(^|[\s()\[\]{},])::?[\w*+!?'<>=/.-]+/,
    lookbehind: !0
  },
  keyword: {
    pattern: /(\()(?:-|->|->>|\.|\.\.|\*|\/|\+|<|<=|=|==|>|>=|accessor|agent|agent-errors|aget|alength|all-ns|alter|and|append-child|apply|array-map|aset|aset-boolean|aset-byte|aset-char|aset-double|aset-float|aset-int|aset-long|aset-short|assert|assoc|await|await-for|bean|binding|bit-and|bit-not|bit-or|bit-shift-left|bit-shift-right|bit-xor|boolean|branch\?|butlast|byte|cast|char|children|class|clear-agent-errors|comment|commute|comp|comparator|complement|concat|cond|conj|cons|constantly|construct-proxy|contains\?|count|create-ns|create-struct|cycle|dec|declare|def|def-|definline|definterface|defmacro|defmethod|defmulti|defn|defn-|defonce|defproject|defprotocol|defrecord|defstruct|deftype|deref|difference|disj|dissoc|distinct|do|doall|doc|dorun|doseq|dosync|dotimes|doto|double|down|drop|drop-while|edit|end\?|ensure|eval|every\?|false\?|ffirst|file-seq|filter|find|find-doc|find-ns|find-var|first|float|flush|fn|fnseq|for|frest|gensym|get|get-proxy-class|hash-map|hash-set|identical\?|identity|if|if-let|if-not|import|in-ns|inc|index|insert-child|insert-left|insert-right|inspect-table|inspect-tree|instance\?|int|interleave|intersection|into|into-array|iterate|join|key|keys|keyword|keyword\?|last|lazy-cat|lazy-cons|left|lefts|let|line-seq|list|list\*|load|load-file|locking|long|loop|macroexpand|macroexpand-1|make-array|make-node|map|map-invert|map\?|mapcat|max|max-key|memfn|merge|merge-with|meta|min|min-key|monitor-enter|name|namespace|neg\?|new|newline|next|nil\?|node|not|not-any\?|not-every\?|not=|ns|ns-imports|ns-interns|ns-map|ns-name|ns-publics|ns-refers|ns-resolve|ns-unmap|nth|nthrest|or|parse|partial|path|peek|pop|pos\?|pr|pr-str|print|print-str|println|println-str|prn|prn-str|project|proxy|proxy-mappings|quot|quote|rand|rand-int|range|re-find|re-groups|re-matcher|re-matches|re-pattern|re-seq|read|read-line|recur|reduce|ref|ref-set|refer|rem|remove|remove-method|remove-ns|rename|rename-keys|repeat|replace|replicate|resolve|rest|resultset-seq|reverse|rfirst|right|rights|root|rrest|rseq|second|select|select-keys|send|send-off|seq|seq-zip|seq\?|set|set!|short|slurp|some|sort|sort-by|sorted-map|sorted-map-by|sorted-set|special-symbol\?|split-at|split-with|str|string\?|struct|struct-map|subs|subvec|symbol|symbol\?|sync|take|take-nth|take-while|test|throw|time|to-array|to-array-2d|tree-seq|true\?|try|union|up|update-proxy|val|vals|var|var-get|var-set|var\?|vector|vector-zip|vector\?|when|when-first|when-let|when-not|with-local-vars|with-meta|with-open|with-out-str|xml-seq|xml-zip|zero\?|zipmap|zipper)(?=[\s)]|$)/,
    lookbehind: !0
  },
  boolean: /\b(?:false|nil|true)\b/,
  number: {
    pattern: /(^|[^\w$@])(?:\d+(?:[/.]\d+)?(?:e[+-]?\d+)?|0x[a-f0-9]+|[1-9]\d?r[a-z0-9]+)[lmn]?(?![\w$@])/i,
    lookbehind: !0
  },
  function: {
    pattern: /((?:^|[^'])\()[\w*+!?'<>=/.-]+(?=[\s)]|$)/,
    lookbehind: !0
  },
  operator: /[#@^`~]/,
  punctuation: /[{}\[\](),]/
};
Prism.languages.cmake = {
  comment: /#.*/,
  string: {
    pattern: /"(?:[^\\"]|\\.)*"/,
    greedy: !0,
    inside: {
      interpolation: {
        pattern: /\$\{(?:[^{}$]|\$\{[^{}$]*\})*\}/,
        inside: {
          punctuation: /\$\{|\}/,
          variable: /\w+/
        }
      }
    }
  },
  variable: /\b(?:CMAKE_\w+|\w+_(?:(?:BINARY|SOURCE)_DIR|DESCRIPTION|HOMEPAGE_URL|ROOT|VERSION(?:_MAJOR|_MINOR|_PATCH|_TWEAK)?)|(?:ANDROID|APPLE|BORLAND|BUILD_SHARED_LIBS|CACHE|CPACK_(?:ABSOLUTE_DESTINATION_FILES|COMPONENT_INCLUDE_TOPLEVEL_DIRECTORY|ERROR_ON_ABSOLUTE_INSTALL_DESTINATION|INCLUDE_TOPLEVEL_DIRECTORY|INSTALL_DEFAULT_DIRECTORY_PERMISSIONS|INSTALL_SCRIPT|PACKAGING_INSTALL_PREFIX|SET_DESTDIR|WARN_ON_ABSOLUTE_INSTALL_DESTINATION)|CTEST_(?:BINARY_DIRECTORY|BUILD_COMMAND|BUILD_NAME|BZR_COMMAND|BZR_UPDATE_OPTIONS|CHANGE_ID|CHECKOUT_COMMAND|CONFIGURATION_TYPE|CONFIGURE_COMMAND|COVERAGE_COMMAND|COVERAGE_EXTRA_FLAGS|CURL_OPTIONS|CUSTOM_(?:COVERAGE_EXCLUDE|ERROR_EXCEPTION|ERROR_MATCH|ERROR_POST_CONTEXT|ERROR_PRE_CONTEXT|MAXIMUM_FAILED_TEST_OUTPUT_SIZE|MAXIMUM_NUMBER_OF_(?:ERRORS|WARNINGS)|MAXIMUM_PASSED_TEST_OUTPUT_SIZE|MEMCHECK_IGNORE|POST_MEMCHECK|POST_TEST|PRE_MEMCHECK|PRE_TEST|TESTS_IGNORE|WARNING_EXCEPTION|WARNING_MATCH)|CVS_CHECKOUT|CVS_COMMAND|CVS_UPDATE_OPTIONS|DROP_LOCATION|DROP_METHOD|DROP_SITE|DROP_SITE_CDASH|DROP_SITE_PASSWORD|DROP_SITE_USER|EXTRA_COVERAGE_GLOB|GIT_COMMAND|GIT_INIT_SUBMODULES|GIT_UPDATE_CUSTOM|GIT_UPDATE_OPTIONS|HG_COMMAND|HG_UPDATE_OPTIONS|LABELS_FOR_SUBPROJECTS|MEMORYCHECK_(?:COMMAND|COMMAND_OPTIONS|SANITIZER_OPTIONS|SUPPRESSIONS_FILE|TYPE)|NIGHTLY_START_TIME|P4_CLIENT|P4_COMMAND|P4_OPTIONS|P4_UPDATE_OPTIONS|RUN_CURRENT_SCRIPT|SCP_COMMAND|SITE|SOURCE_DIRECTORY|SUBMIT_URL|SVN_COMMAND|SVN_OPTIONS|SVN_UPDATE_OPTIONS|TEST_LOAD|TEST_TIMEOUT|TRIGGER_SITE|UPDATE_COMMAND|UPDATE_OPTIONS|UPDATE_VERSION_ONLY|USE_LAUNCHERS)|CYGWIN|ENV|EXECUTABLE_OUTPUT_PATH|GHS-MULTI|IOS|LIBRARY_OUTPUT_PATH|MINGW|MSVC(?:10|11|12|14|60|70|71|80|90|_IDE|_TOOLSET_VERSION|_VERSION)?|MSYS|PROJECT_(?:BINARY_DIR|DESCRIPTION|HOMEPAGE_URL|NAME|SOURCE_DIR|VERSION|VERSION_(?:MAJOR|MINOR|PATCH|TWEAK))|UNIX|WIN32|WINCE|WINDOWS_PHONE|WINDOWS_STORE|XCODE|XCODE_VERSION))\b/,
  property: /\b(?:cxx_\w+|(?:ARCHIVE_OUTPUT_(?:DIRECTORY|NAME)|COMPILE_DEFINITIONS|COMPILE_PDB_NAME|COMPILE_PDB_OUTPUT_DIRECTORY|EXCLUDE_FROM_DEFAULT_BUILD|IMPORTED_(?:IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_LANGUAGES|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|NO_SONAME|OBJECTS|SONAME)|INTERPROCEDURAL_OPTIMIZATION|LIBRARY_OUTPUT_DIRECTORY|LIBRARY_OUTPUT_NAME|LINK_FLAGS|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|MAP_IMPORTED_CONFIG|OSX_ARCHITECTURES|OUTPUT_NAME|PDB_NAME|PDB_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_NAME|STATIC_LIBRARY_FLAGS|VS_CSHARP|VS_DOTNET_REFERENCEPROP|VS_DOTNET_REFERENCE|VS_GLOBAL_SECTION_POST|VS_GLOBAL_SECTION_PRE|VS_GLOBAL|XCODE_ATTRIBUTE)_\w+|\w+_(?:CLANG_TIDY|COMPILER_LAUNCHER|CPPCHECK|CPPLINT|INCLUDE_WHAT_YOU_USE|OUTPUT_NAME|POSTFIX|VISIBILITY_PRESET)|ABSTRACT|ADDITIONAL_MAKE_CLEAN_FILES|ADVANCED|ALIASED_TARGET|ALLOW_DUPLICATE_CUSTOM_TARGETS|ANDROID_(?:ANT_ADDITIONAL_OPTIONS|API|API_MIN|ARCH|ASSETS_DIRECTORIES|GUI|JAR_DEPENDENCIES|NATIVE_LIB_DEPENDENCIES|NATIVE_LIB_DIRECTORIES|PROCESS_MAX|PROGUARD|PROGUARD_CONFIG_PATH|SECURE_PROPS_PATH|SKIP_ANT_STEP|STL_TYPE)|ARCHIVE_OUTPUT_DIRECTORY|ATTACHED_FILES|ATTACHED_FILES_ON_FAIL|AUTOGEN_(?:BUILD_DIR|ORIGIN_DEPENDS|PARALLEL|SOURCE_GROUP|TARGETS_FOLDER|TARGET_DEPENDS)|AUTOMOC|AUTOMOC_(?:COMPILER_PREDEFINES|DEPEND_FILTERS|EXECUTABLE|MACRO_NAMES|MOC_OPTIONS|SOURCE_GROUP|TARGETS_FOLDER)|AUTORCC|AUTORCC_EXECUTABLE|AUTORCC_OPTIONS|AUTORCC_SOURCE_GROUP|AUTOUIC|AUTOUIC_EXECUTABLE|AUTOUIC_OPTIONS|AUTOUIC_SEARCH_PATHS|BINARY_DIR|BUILDSYSTEM_TARGETS|BUILD_RPATH|BUILD_RPATH_USE_ORIGIN|BUILD_WITH_INSTALL_NAME_DIR|BUILD_WITH_INSTALL_RPATH|BUNDLE|BUNDLE_EXTENSION|CACHE_VARIABLES|CLEAN_NO_CUSTOM|COMMON_LANGUAGE_RUNTIME|COMPATIBLE_INTERFACE_(?:BOOL|NUMBER_MAX|NUMBER_MIN|STRING)|COMPILE_(?:DEFINITIONS|FEATURES|FLAGS|OPTIONS|PDB_NAME|PDB_OUTPUT_DIRECTORY)|COST|CPACK_DESKTOP_SHORTCUTS|CPACK_NEVER_OVERWRITE|CPACK_PERMANENT|CPACK_STARTUP_SHORTCUTS|CPACK_START_MENU_SHORTCUTS|CPACK_WIX_ACL|CROSSCOMPILING_EMULATOR|CUDA_EXTENSIONS|CUDA_PTX_COMPILATION|CUDA_RESOLVE_DEVICE_SYMBOLS|CUDA_SEPARABLE_COMPILATION|CUDA_STANDARD|CUDA_STANDARD_REQUIRED|CXX_EXTENSIONS|CXX_STANDARD|CXX_STANDARD_REQUIRED|C_EXTENSIONS|C_STANDARD|C_STANDARD_REQUIRED|DEBUG_CONFIGURATIONS|DEFINE_SYMBOL|DEFINITIONS|DEPENDS|DEPLOYMENT_ADDITIONAL_FILES|DEPLOYMENT_REMOTE_DIRECTORY|DISABLED|DISABLED_FEATURES|ECLIPSE_EXTRA_CPROJECT_CONTENTS|ECLIPSE_EXTRA_NATURES|ENABLED_FEATURES|ENABLED_LANGUAGES|ENABLE_EXPORTS|ENVIRONMENT|EXCLUDE_FROM_ALL|EXCLUDE_FROM_DEFAULT_BUILD|EXPORT_NAME|EXPORT_PROPERTIES|EXTERNAL_OBJECT|EchoString|FAIL_REGULAR_EXPRESSION|FIND_LIBRARY_USE_LIB32_PATHS|FIND_LIBRARY_USE_LIB64_PATHS|FIND_LIBRARY_USE_LIBX32_PATHS|FIND_LIBRARY_USE_OPENBSD_VERSIONING|FIXTURES_CLEANUP|FIXTURES_REQUIRED|FIXTURES_SETUP|FOLDER|FRAMEWORK|Fortran_FORMAT|Fortran_MODULE_DIRECTORY|GENERATED|GENERATOR_FILE_NAME|GENERATOR_IS_MULTI_CONFIG|GHS_INTEGRITY_APP|GHS_NO_SOURCE_GROUP_FILE|GLOBAL_DEPENDS_DEBUG_MODE|GLOBAL_DEPENDS_NO_CYCLES|GNUtoMS|HAS_CXX|HEADER_FILE_ONLY|HELPSTRING|IMPLICIT_DEPENDS_INCLUDE_TRANSFORM|IMPORTED|IMPORTED_(?:COMMON_LANGUAGE_RUNTIME|CONFIGURATIONS|GLOBAL|IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_(?:LANGUAGES|LIBRARIES|MULTIPLICITY)|LOCATION|NO_SONAME|OBJECTS|SONAME)|IMPORT_PREFIX|IMPORT_SUFFIX|INCLUDE_DIRECTORIES|INCLUDE_REGULAR_EXPRESSION|INSTALL_NAME_DIR|INSTALL_RPATH|INSTALL_RPATH_USE_LINK_PATH|INTERFACE_(?:AUTOUIC_OPTIONS|COMPILE_DEFINITIONS|COMPILE_FEATURES|COMPILE_OPTIONS|INCLUDE_DIRECTORIES|LINK_DEPENDS|LINK_DIRECTORIES|LINK_LIBRARIES|LINK_OPTIONS|POSITION_INDEPENDENT_CODE|SOURCES|SYSTEM_INCLUDE_DIRECTORIES)|INTERPROCEDURAL_OPTIMIZATION|IN_TRY_COMPILE|IOS_INSTALL_COMBINED|JOB_POOLS|JOB_POOL_COMPILE|JOB_POOL_LINK|KEEP_EXTENSION|LABELS|LANGUAGE|LIBRARY_OUTPUT_DIRECTORY|LINKER_LANGUAGE|LINK_(?:DEPENDS|DEPENDS_NO_SHARED|DIRECTORIES|FLAGS|INTERFACE_LIBRARIES|INTERFACE_MULTIPLICITY|LIBRARIES|OPTIONS|SEARCH_END_STATIC|SEARCH_START_STATIC|WHAT_YOU_USE)|LISTFILE_STACK|LOCATION|MACOSX_BUNDLE|MACOSX_BUNDLE_INFO_PLIST|MACOSX_FRAMEWORK_INFO_PLIST|MACOSX_PACKAGE_LOCATION|MACOSX_RPATH|MACROS|MANUALLY_ADDED_DEPENDENCIES|MEASUREMENT|MODIFIED|NAME|NO_SONAME|NO_SYSTEM_FROM_IMPORTED|OBJECT_DEPENDS|OBJECT_OUTPUTS|OSX_ARCHITECTURES|OUTPUT_NAME|PACKAGES_FOUND|PACKAGES_NOT_FOUND|PARENT_DIRECTORY|PASS_REGULAR_EXPRESSION|PDB_NAME|PDB_OUTPUT_DIRECTORY|POSITION_INDEPENDENT_CODE|POST_INSTALL_SCRIPT|PREDEFINED_TARGETS_FOLDER|PREFIX|PRE_INSTALL_SCRIPT|PRIVATE_HEADER|PROCESSORS|PROCESSOR_AFFINITY|PROJECT_LABEL|PUBLIC_HEADER|REPORT_UNDEFINED_PROPERTIES|REQUIRED_FILES|RESOURCE|RESOURCE_LOCK|RULE_LAUNCH_COMPILE|RULE_LAUNCH_CUSTOM|RULE_LAUNCH_LINK|RULE_MESSAGES|RUNTIME_OUTPUT_DIRECTORY|RUN_SERIAL|SKIP_AUTOGEN|SKIP_AUTOMOC|SKIP_AUTORCC|SKIP_AUTOUIC|SKIP_BUILD_RPATH|SKIP_RETURN_CODE|SOURCES|SOURCE_DIR|SOVERSION|STATIC_LIBRARY_FLAGS|STATIC_LIBRARY_OPTIONS|STRINGS|SUBDIRECTORIES|SUFFIX|SYMBOLIC|TARGET_ARCHIVES_MAY_BE_SHARED_LIBS|TARGET_MESSAGES|TARGET_SUPPORTS_SHARED_LIBS|TESTS|TEST_INCLUDE_FILE|TEST_INCLUDE_FILES|TIMEOUT|TIMEOUT_AFTER_MATCH|TYPE|USE_FOLDERS|VALUE|VARIABLES|VERSION|VISIBILITY_INLINES_HIDDEN|VS_(?:CONFIGURATION_TYPE|COPY_TO_OUT_DIR|DEBUGGER_(?:COMMAND|COMMAND_ARGUMENTS|ENVIRONMENT|WORKING_DIRECTORY)|DEPLOYMENT_CONTENT|DEPLOYMENT_LOCATION|DOTNET_REFERENCES|DOTNET_REFERENCES_COPY_LOCAL|GLOBAL_KEYWORD|GLOBAL_PROJECT_TYPES|GLOBAL_ROOTNAMESPACE|INCLUDE_IN_VSIX|IOT_STARTUP_TASK|KEYWORD|RESOURCE_GENERATOR|SCC_AUXPATH|SCC_LOCALPATH|SCC_PROJECTNAME|SCC_PROVIDER|SDK_REFERENCES|SHADER_(?:DISABLE_OPTIMIZATIONS|ENABLE_DEBUG|ENTRYPOINT|FLAGS|MODEL|OBJECT_FILE_NAME|OUTPUT_HEADER_FILE|TYPE|VARIABLE_NAME)|STARTUP_PROJECT|TOOL_OVERRIDE|USER_PROPS|WINRT_COMPONENT|WINRT_EXTENSIONS|WINRT_REFERENCES|XAML_TYPE)|WILL_FAIL|WIN32_EXECUTABLE|WINDOWS_EXPORT_ALL_SYMBOLS|WORKING_DIRECTORY|WRAP_EXCLUDE|XCODE_(?:EMIT_EFFECTIVE_PLATFORM_NAME|EXPLICIT_FILE_TYPE|FILE_ATTRIBUTES|LAST_KNOWN_FILE_TYPE|PRODUCT_TYPE|SCHEME_(?:ADDRESS_SANITIZER|ADDRESS_SANITIZER_USE_AFTER_RETURN|ARGUMENTS|DISABLE_MAIN_THREAD_CHECKER|DYNAMIC_LIBRARY_LOADS|DYNAMIC_LINKER_API_USAGE|ENVIRONMENT|EXECUTABLE|GUARD_MALLOC|MAIN_THREAD_CHECKER_STOP|MALLOC_GUARD_EDGES|MALLOC_SCRIBBLE|MALLOC_STACK|THREAD_SANITIZER(?:_STOP)?|UNDEFINED_BEHAVIOUR_SANITIZER(?:_STOP)?|ZOMBIE_OBJECTS))|XCTEST)\b/,
  keyword: /\b(?:add_compile_definitions|add_compile_options|add_custom_command|add_custom_target|add_definitions|add_dependencies|add_executable|add_library|add_link_options|add_subdirectory|add_test|aux_source_directory|break|build_command|build_name|cmake_host_system_information|cmake_minimum_required|cmake_parse_arguments|cmake_policy|configure_file|continue|create_test_sourcelist|ctest_build|ctest_configure|ctest_coverage|ctest_empty_binary_directory|ctest_memcheck|ctest_read_custom_files|ctest_run_script|ctest_sleep|ctest_start|ctest_submit|ctest_test|ctest_update|ctest_upload|define_property|else|elseif|enable_language|enable_testing|endforeach|endfunction|endif|endmacro|endwhile|exec_program|execute_process|export|export_library_dependencies|file|find_file|find_library|find_package|find_path|find_program|fltk_wrap_ui|foreach|function|get_cmake_property|get_directory_property|get_filename_component|get_property|get_source_file_property|get_target_property|get_test_property|if|include|include_directories|include_external_msproject|include_guard|include_regular_expression|install|install_files|install_programs|install_targets|link_directories|link_libraries|list|load_cache|load_command|macro|make_directory|mark_as_advanced|math|message|option|output_required_files|project|qt_wrap_cpp|qt_wrap_ui|remove|remove_definitions|return|separate_arguments|set|set_directory_properties|set_property|set_source_files_properties|set_target_properties|set_tests_properties|site_name|source_group|string|subdir_depends|subdirs|target_compile_definitions|target_compile_features|target_compile_options|target_include_directories|target_link_directories|target_link_libraries|target_link_options|target_sources|try_compile|try_run|unset|use_mangled_mesa|utility_source|variable_requires|variable_watch|while|write_file)(?=\s*\()\b/,
  boolean: /\b(?:FALSE|OFF|ON|TRUE)\b/,
  namespace: /\b(?:INTERFACE|PRIVATE|PROPERTIES|PUBLIC|SHARED|STATIC|TARGET_OBJECTS)\b/,
  operator: /\b(?:AND|DEFINED|EQUAL|GREATER|LESS|MATCHES|NOT|OR|STREQUAL|STRGREATER|STRLESS|VERSION_EQUAL|VERSION_GREATER|VERSION_LESS)\b/,
  inserted: {
    pattern: /\b\w+::\w+\b/,
    alias: "class-name"
  },
  number: /\b\d+(?:\.\d+)*\b/,
  function: /\b[a-z_]\w*(?=\s*\()\b/i,
  punctuation: /[()>}]|\$[<{]/
};
!function (e) {
  var a,
    n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  e.languages.css.selector = {
    pattern: e.languages.css.selector.pattern,
    lookbehind: !0,
    inside: a = {
      "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      "pseudo-class": /:[-\w]+/,
      class: /\.[-\w]+/,
      id: /#[-\w]+/,
      attribute: {
        pattern: RegExp("\\[(?:[^[\\]\"']|" + n.source + ")*\\]"),
        greedy: !0,
        inside: {
          punctuation: /^\[|\]$/,
          "case-sensitivity": {
            pattern: /(\s)[si]$/i,
            lookbehind: !0,
            alias: "keyword"
          },
          namespace: {
            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
            lookbehind: !0,
            inside: {
              punctuation: /\|$/
            }
          },
          "attr-name": {
            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
            lookbehind: !0
          },
          "attr-value": [n, {
            pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
            lookbehind: !0
          }],
          operator: /[|~*^$]?=/
        }
      },
      "n-th": [{
        pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
        lookbehind: !0,
        inside: {
          number: /[\dn]+/,
          operator: /[+-]/
        }
      }, {
        pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
        lookbehind: !0
      }],
      combinator: />|\+|~|\|\|/,
      punctuation: /[(),]/
    }
  }, e.languages.css.atrule.inside["selector-function-argument"].inside = a, e.languages.insertBefore("css", "property", {
    variable: {
      pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
      lookbehind: !0
    }
  });
  var r = {
      pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
      lookbehind: !0
    },
    i = {
      pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
      lookbehind: !0
    };
  e.languages.insertBefore("css", "function", {
    operator: {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: !0
    },
    hexcode: {
      pattern: /\B#[\da-f]{3,8}\b/i,
      alias: "color"
    },
    color: [{
      pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
      lookbehind: !0
    }, {
      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        unit: r,
        number: i,
        function: /[\w-]+(?=\()/,
        punctuation: /[(),]/
      }
    }],
    entity: /\\[\da-f]{1,8}/i,
    unit: r,
    number: i
  });
}(Prism);
!function (e) {
  var a = [/\b(?:async|sync|yield)\*/, /\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extends|extension|external|factory|final|finally|for|get|hide|if|implements|import|in|interface|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/],
    t = "(^|[^\\w.])(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",
    s = {
      pattern: RegExp(t + "[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),
      lookbehind: !0,
      inside: {
        namespace: {
          pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
          inside: {
            punctuation: /\./
          }
        }
      }
    };
  e.languages.dart = e.languages.extend("clike", {
    string: [{
      pattern: /r?("""|''')[\s\S]*?\1/,
      greedy: !0
    }, {
      pattern: /r?(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    }],
    "class-name": [s, {
      pattern: RegExp(t + "[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()])"),
      lookbehind: !0,
      inside: s.inside
    }],
    keyword: a,
    operator: /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/
  }), e.languages.insertBefore("dart", "function", {
    metadata: {
      pattern: /@\w+/,
      alias: "symbol"
    }
  }), e.languages.insertBefore("dart", "class-name", {
    generics: {
      pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
      inside: {
        "class-name": s,
        keyword: a,
        punctuation: /[<>(),.:]/,
        operator: /[?&|]/
      }
    }
  });
}(Prism);
!function (h) {
  function v(e, n) {
    return "___" + e.toUpperCase() + n + "___";
  }
  Object.defineProperties(h.languages["markup-templating"] = {}, {
    buildPlaceholders: {
      value: function (a, r, e, o) {
        if (a.language === r) {
          var c = a.tokenStack = [];
          a.code = a.code.replace(e, function (e) {
            if ("function" == typeof o && !o(e)) return e;
            for (var n, t = c.length; -1 !== a.code.indexOf(n = v(r, t));) ++t;
            return c[t] = e, n;
          }), a.grammar = h.languages.markup;
        }
      }
    },
    tokenizePlaceholders: {
      value: function (p, k) {
        if (p.language === k && p.tokenStack) {
          p.grammar = h.languages[k];
          var m = 0,
            d = Object.keys(p.tokenStack);
          !function e(n) {
            for (var t = 0; t < n.length && !(m >= d.length); t++) {
              var a = n[t];
              if ("string" == typeof a || a.content && "string" == typeof a.content) {
                var r = d[m],
                  o = p.tokenStack[r],
                  c = "string" == typeof a ? a : a.content,
                  i = v(k, r),
                  u = c.indexOf(i);
                if (-1 < u) {
                  ++m;
                  var g = c.substring(0, u),
                    l = new h.Token(k, h.tokenize(o, p.grammar), "language-" + k, o),
                    s = c.substring(u + i.length),
                    f = [];
                  g && f.push.apply(f, e([g])), f.push(l), s && f.push.apply(f, e([s])), "string" == typeof a ? n.splice.apply(n, [t, 1].concat(f)) : a.content = f;
                }
              } else a.content && e(a.content);
            }
            return n;
          }(p.tokens);
        }
      }
    }
  });
}(Prism);
!function (e) {
  e.languages.ejs = {
    delimiter: {
      pattern: /^<%[-_=]?|[-_]?%>$/,
      alias: "punctuation"
    },
    comment: /^#[\s\S]*/,
    "language-javascript": {
      pattern: /[\s\S]+/,
      inside: e.languages.javascript
    }
  }, e.hooks.add("before-tokenize", function (a) {
    e.languages["markup-templating"].buildPlaceholders(a, "ejs", /<%(?!%)[\s\S]+?%>/g);
  }), e.hooks.add("after-tokenize", function (a) {
    e.languages["markup-templating"].tokenizePlaceholders(a, "ejs");
  }), e.languages.eta = e.languages.ejs;
}(Prism);
Prism.languages.elixir = {
  doc: {
    pattern: /@(?:doc|moduledoc)\s+(?:("""|''')[\s\S]*?\1|("|')(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2)/,
    inside: {
      attribute: /^@\w+/,
      string: /['"][\s\S]+/
    }
  },
  comment: {
    pattern: /#.*/,
    greedy: !0
  },
  regex: {
    pattern: /~[rR](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[uismxfr]*/,
    greedy: !0
  },
  string: [{
    pattern: /~[cCsSwW](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|#\{[^}]+\}|#(?!\{)|[^#\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[csa]?/,
    greedy: !0,
    inside: {}
  }, {
    pattern: /("""|''')[\s\S]*?\1/,
    greedy: !0,
    inside: {}
  }, {
    pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
    inside: {}
  }],
  atom: {
    pattern: /(^|[^:]):\w+/,
    lookbehind: !0,
    alias: "symbol"
  },
  module: {
    pattern: /\b[A-Z]\w*\b/,
    alias: "class-name"
  },
  "attr-name": /\b\w+\??:(?!:)/,
  argument: {
    pattern: /(^|[^&])&\d+/,
    lookbehind: !0,
    alias: "variable"
  },
  attribute: {
    pattern: /@\w+/,
    alias: "variable"
  },
  function: /\b[_a-zA-Z]\w*[?!]?(?:(?=\s*(?:\.\s*)?\()|(?=\/\d))/,
  number: /\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i,
  keyword: /\b(?:after|alias|and|case|catch|cond|def(?:callback|delegate|exception|impl|macro|module|n|np|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|quote|raise|require|rescue|try|unless|unquote|use|when)\b/,
  boolean: /\b(?:false|nil|true)\b/,
  operator: [/\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/, {
    pattern: /([^<])<(?!<)/,
    lookbehind: !0
  }, {
    pattern: /([^>])>(?!>)/,
    lookbehind: !0
  }],
  punctuation: /<<|>>|[.,%\[\]{}()]/
}, Prism.languages.elixir.string.forEach(function (e) {
  e.inside = {
    interpolation: {
      pattern: /#\{[^}]+\}/,
      inside: {
        delimiter: {
          pattern: /^#\{|\}$/,
          alias: "punctuation"
        },
        rest: Prism.languages.elixir
      }
    }
  };
});
Prism.languages.elm = {
  comment: /--.*|\{-[\s\S]*?-\}/,
  char: {
    pattern: /'(?:[^\\'\r\n]|\\(?:[abfnrtv\\']|\d+|x[0-9a-fA-F]+|u\{[0-9a-fA-F]+\}))'/,
    greedy: !0
  },
  string: [{
    pattern: /"""[\s\S]*?"""/,
    greedy: !0
  }, {
    pattern: /"(?:[^\\"\r\n]|\\.)*"/,
    greedy: !0
  }],
  "import-statement": {
    pattern: /(^[\t ]*)import\s+[A-Z]\w*(?:\.[A-Z]\w*)*(?:\s+as\s+(?:[A-Z]\w*)(?:\.[A-Z]\w*)*)?(?:\s+exposing\s+)?/m,
    lookbehind: !0,
    inside: {
      keyword: /\b(?:as|exposing|import)\b/
    }
  },
  keyword: /\b(?:alias|as|case|else|exposing|if|in|infixl|infixr|let|module|of|then|type)\b/,
  builtin: /\b(?:abs|acos|always|asin|atan|atan2|ceiling|clamp|compare|cos|curry|degrees|e|flip|floor|fromPolar|identity|isInfinite|isNaN|logBase|max|min|negate|never|not|pi|radians|rem|round|sin|sqrt|tan|toFloat|toPolar|toString|truncate|turns|uncurry|xor)\b/,
  number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0x[0-9a-f]+)\b/i,
  operator: /\s\.\s|[+\-/*=.$<>:&|^?%#@~!]{2,}|[+\-/*=$<>:&|^?%#@~!]/,
  hvariable: /\b(?:[A-Z]\w*\.)*[a-z]\w*\b/,
  constant: /\b(?:[A-Z]\w*\.)*[A-Z]\w*\b/,
  punctuation: /[{}[\]|(),.:]/
};
Prism.languages.glsl = Prism.languages.extend("c", {
  keyword: /\b(?:active|asm|atomic_uint|attribute|[ibdu]?vec[234]|bool|break|buffer|case|cast|centroid|class|coherent|common|const|continue|d?mat[234](?:x[234])?|default|discard|do|double|else|enum|extern|external|false|filter|fixed|flat|float|for|fvec[234]|goto|half|highp|hvec[234]|[iu]?sampler2DMS(?:Array)?|[iu]?sampler2DRect|[iu]?samplerBuffer|[iu]?samplerCube|[iu]?samplerCubeArray|[iu]?sampler[123]D|[iu]?sampler[12]DArray|[iu]?image2DMS(?:Array)?|[iu]?image2DRect|[iu]?imageBuffer|[iu]?imageCube|[iu]?imageCubeArray|[iu]?image[123]D|[iu]?image[12]DArray|if|in|inline|inout|input|int|interface|invariant|layout|long|lowp|mediump|namespace|noinline|noperspective|out|output|partition|patch|precise|precision|public|readonly|resource|restrict|return|sample|sampler[12]DArrayShadow|sampler[12]DShadow|sampler2DRectShadow|sampler3DRect|samplerCubeArrayShadow|samplerCubeShadow|shared|short|sizeof|smooth|static|struct|subroutine|superp|switch|template|this|true|typedef|uint|uniform|union|unsigned|using|varying|void|volatile|while|writeonly)\b/
});
Prism.languages.go = Prism.languages.extend("clike", {
  string: {
    pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
    greedy: !0
  },
  keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  boolean: /\b(?:_|false|iota|nil|true)\b/,
  number: /(?:\b0x[a-f\d]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
  operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
}), delete Prism.languages.go["class-name"];
Prism.languages.graphql = {
  comment: /#.*/,
  description: {
    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
    greedy: !0,
    alias: "string",
    inside: {
      "language-markdown": {
        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
        lookbehind: !0,
        inside: Prism.languages.markdown
      }
    }
  },
  string: {
    pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
    greedy: !0
  },
  number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  boolean: /\b(?:false|true)\b/,
  variable: /\$[a-z_]\w*/i,
  directive: {
    pattern: /@[a-z_]\w*/i,
    alias: "function"
  },
  "attr-name": {
    pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: !0
  },
  "atom-input": {
    pattern: /\b[A-Z]\w*Input\b/,
    alias: "class-name"
  },
  scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
  constant: /\b[A-Z][A-Z_\d]*\b/,
  "class-name": {
    pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
    lookbehind: !0
  },
  fragment: {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: !0,
    alias: "function"
  },
  "definition-mutation": {
    pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
    lookbehind: !0,
    alias: "function"
  },
  "definition-query": {
    pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
    lookbehind: !0,
    alias: "function"
  },
  keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
  operator: /[!=|&]|\.{3}/,
  "property-query": /\w+(?=\s*\()/,
  object: /\w+(?=\s*\{)/,
  punctuation: /[!(){}\[\]:=,]/,
  property: /\w+/
}, Prism.hooks.add("after-tokenize", function (n) {
  if ("graphql" === n.language) for (var o = n.tokens.filter(function (n) {
      return "string" != typeof n && "comment" !== n.type && "scalar" !== n.type;
    }), s = 0; s < o.length;) {
    var t = o[s++];
    if ("keyword" === t.type && "mutation" === t.content) {
      var e = [];
      if (c(["definition-mutation", "punctuation"]) && "(" === l(1).content) {
        s += 2;
        var a = f(/^\($/, /^\)$/);
        if (-1 === a) continue;
        for (; s < a; s++) {
          var r = l(0);
          "variable" === r.type && (b(r, "variable-input"), e.push(r.content));
        }
        s = a + 1;
      }
      if (c(["punctuation", "property-query"]) && "{" === l(0).content && (s++, b(l(0), "property-mutation"), 0 < e.length)) {
        var i = f(/^\{$/, /^\}$/);
        if (-1 === i) continue;
        for (var u = s; u < i; u++) {
          var p = o[u];
          "variable" === p.type && 0 <= e.indexOf(p.content) && b(p, "variable-input");
        }
      }
    }
  }
  function l(n) {
    return o[s + n];
  }
  function c(n, t) {
    t = t || 0;
    for (var e = 0; e < n.length; e++) {
      var a = l(e + t);
      if (!a || a.type !== n[e]) return !1;
    }
    return !0;
  }
  function f(n, t) {
    for (var e = 1, a = s; a < o.length; a++) {
      var r = o[a],
        i = r.content;
      if ("punctuation" === r.type && "string" == typeof i) if (n.test(i)) e++;else if (t.test(i) && 0 === --e) return a;
    }
    return -1;
  }
  function b(n, t) {
    var e = n.alias;
    e ? Array.isArray(e) || (n.alias = e = [e]) : n.alias = e = [], e.push(t);
  }
});
!function (e) {
  e.languages.handlebars = {
    comment: /\{\{![\s\S]*?\}\}/,
    delimiter: {
      pattern: /^\{\{\{?|\}\}\}?$/,
      alias: "punctuation"
    },
    string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    boolean: /\b(?:false|true)\b/,
    block: {
      pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,
      lookbehind: !0,
      alias: "keyword"
    },
    brackets: {
      pattern: /\[[^\]]+\]/,
      inside: {
        punctuation: /\[|\]/,
        variable: /[\s\S]+/
      }
    },
    punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
    variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/
  }, e.hooks.add("before-tokenize", function (a) {
    e.languages["markup-templating"].buildPlaceholders(a, "handlebars", /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g);
  }), e.hooks.add("after-tokenize", function (a) {
    e.languages["markup-templating"].tokenizePlaceholders(a, "handlebars");
  }), e.languages.hbs = e.languages.handlebars;
}(Prism);
!function (e) {
  var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,
    n = "(^|[^\\w.])(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",
    a = {
      pattern: RegExp(n + "[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),
      lookbehind: !0,
      inside: {
        namespace: {
          pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
          inside: {
            punctuation: /\./
          }
        },
        punctuation: /\./
      }
    };
  e.languages.java = e.languages.extend("clike", {
    "class-name": [a, {
      pattern: RegExp(n + "[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()])"),
      lookbehind: !0,
      inside: a.inside
    }],
    keyword: t,
    function: [e.languages.clike.function, {
      pattern: /(::\s*)[a-z_]\w*/,
      lookbehind: !0
    }],
    number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
    operator: {
      pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
      lookbehind: !0
    }
  }), e.languages.insertBefore("java", "string", {
    "triple-quoted-string": {
      pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
      greedy: !0,
      alias: "string"
    }
  }), e.languages.insertBefore("java", "class-name", {
    annotation: {
      pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
      lookbehind: !0,
      alias: "punctuation"
    },
    generics: {
      pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
      inside: {
        "class-name": a,
        keyword: t,
        punctuation: /[<>(),.:]/,
        operator: /[?&|]/
      }
    },
    namespace: {
      pattern: RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g, function () {
        return t.source;
      })),
      lookbehind: !0,
      inside: {
        punctuation: /\./
      }
    }
  });
}(Prism);
!function (a) {
  var e = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,
    t = [{
      pattern: /\b(?:false|true)\b/i,
      alias: "boolean"
    }, {
      pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
      greedy: !0,
      lookbehind: !0
    }, {
      pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
      greedy: !0,
      lookbehind: !0
    }, /\b(?:null)\b/i, /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],
    i = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    n = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,
    s = /[{}\[\](),:;]/;
  a.languages.php = {
    delimiter: {
      pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
      alias: "important"
    },
    comment: e,
    variable: /\$+(?:\w+\b|(?=\{))/,
    package: {
      pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
      lookbehind: !0,
      inside: {
        punctuation: /\\/
      }
    },
    "class-name-definition": {
      pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
      lookbehind: !0,
      alias: "class-name"
    },
    "function-definition": {
      pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
      lookbehind: !0,
      alias: "function"
    },
    keyword: [{
      pattern: /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,
      alias: "type-casting",
      greedy: !0,
      lookbehind: !0
    }, {
      pattern: /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,
      alias: "type-hint",
      greedy: !0,
      lookbehind: !0
    }, {
      pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string|void)\b/i,
      alias: "return-type",
      greedy: !0,
      lookbehind: !0
    }, {
      pattern: /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,
      alias: "type-declaration",
      greedy: !0
    }, {
      pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,
      alias: "type-declaration",
      greedy: !0,
      lookbehind: !0
    }, {
      pattern: /\b(?:parent|self|static)(?=\s*::)/i,
      alias: "static-context",
      greedy: !0
    }, {
      pattern: /(\byield\s+)from\b/i,
      lookbehind: !0
    }, /\bclass\b/i, {
      pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,
      lookbehind: !0
    }],
    "argument-name": {
      pattern: /([(,]\s+)\b[a-z_]\w*(?=\s*:(?!:))/i,
      lookbehind: !0
    },
    "class-name": [{
      pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
      greedy: !0,
      lookbehind: !0
    }, {
      pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
      greedy: !0,
      lookbehind: !0
    }, {
      pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
      greedy: !0
    }, {
      pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
      alias: "class-name-fully-qualified",
      greedy: !0,
      lookbehind: !0,
      inside: {
        punctuation: /\\/
      }
    }, {
      pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
      alias: "class-name-fully-qualified",
      greedy: !0,
      inside: {
        punctuation: /\\/
      }
    }, {
      pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
      alias: "class-name-fully-qualified",
      greedy: !0,
      lookbehind: !0,
      inside: {
        punctuation: /\\/
      }
    }, {
      pattern: /\b[a-z_]\w*(?=\s*\$)/i,
      alias: "type-declaration",
      greedy: !0
    }, {
      pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
      alias: ["class-name-fully-qualified", "type-declaration"],
      greedy: !0,
      inside: {
        punctuation: /\\/
      }
    }, {
      pattern: /\b[a-z_]\w*(?=\s*::)/i,
      alias: "static-context",
      greedy: !0
    }, {
      pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
      alias: ["class-name-fully-qualified", "static-context"],
      greedy: !0,
      inside: {
        punctuation: /\\/
      }
    }, {
      pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
      alias: "type-hint",
      greedy: !0,
      lookbehind: !0
    }, {
      pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
      alias: ["class-name-fully-qualified", "type-hint"],
      greedy: !0,
      lookbehind: !0,
      inside: {
        punctuation: /\\/
      }
    }, {
      pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
      alias: "return-type",
      greedy: !0,
      lookbehind: !0
    }, {
      pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
      alias: ["class-name-fully-qualified", "return-type"],
      greedy: !0,
      lookbehind: !0,
      inside: {
        punctuation: /\\/
      }
    }],
    constant: t,
    function: {
      pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
      lookbehind: !0,
      inside: {
        punctuation: /\\/
      }
    },
    property: {
      pattern: /(->\s*)\w+/,
      lookbehind: !0
    },
    number: i,
    operator: n,
    punctuation: s
  };
  var l = {
      pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
      lookbehind: !0,
      inside: a.languages.php
    },
    r = [{
      pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
      alias: "nowdoc-string",
      greedy: !0,
      inside: {
        delimiter: {
          pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
          alias: "symbol",
          inside: {
            punctuation: /^<<<'?|[';]$/
          }
        }
      }
    }, {
      pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
      alias: "heredoc-string",
      greedy: !0,
      inside: {
        delimiter: {
          pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
          alias: "symbol",
          inside: {
            punctuation: /^<<<"?|[";]$/
          }
        },
        interpolation: l
      }
    }, {
      pattern: /`(?:\\[\s\S]|[^\\`])*`/,
      alias: "backtick-quoted-string",
      greedy: !0
    }, {
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      alias: "single-quoted-string",
      greedy: !0
    }, {
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      alias: "double-quoted-string",
      greedy: !0,
      inside: {
        interpolation: l
      }
    }];
  a.languages.insertBefore("php", "variable", {
    string: r,
    attribute: {
      pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
      greedy: !0,
      inside: {
        "attribute-content": {
          pattern: /^(#\[)[\s\S]+(?=\]$)/,
          lookbehind: !0,
          inside: {
            comment: e,
            string: r,
            "attribute-class-name": [{
              pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
              alias: "class-name",
              greedy: !0,
              lookbehind: !0
            }, {
              pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
              alias: ["class-name", "class-name-fully-qualified"],
              greedy: !0,
              lookbehind: !0,
              inside: {
                punctuation: /\\/
              }
            }],
            constant: t,
            number: i,
            operator: n,
            punctuation: s
          }
        },
        delimiter: {
          pattern: /^#\[|\]$/,
          alias: "punctuation"
        }
      }
    }
  }), a.hooks.add("before-tokenize", function (e) {
    if (/<\?/.test(e.code)) {
      a.languages["markup-templating"].buildPlaceholders(e, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g);
    }
  }), a.hooks.add("after-tokenize", function (e) {
    a.languages["markup-templating"].tokenizePlaceholders(e, "php");
  });
}(Prism);
!function (p) {
  var a = p.languages.javadoclike = {
    parameter: {
      pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,
      lookbehind: !0
    },
    keyword: {
      pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
      lookbehind: !0
    },
    punctuation: /[{}]/
  };
  Object.defineProperty(a, "addSupport", {
    value: function (a, e) {
      "string" == typeof a && (a = [a]), a.forEach(function (a) {
        !function (a, e) {
          var n = "doc-comment",
            t = p.languages[a];
          if (t) {
            var r = t[n];
            if (!r) {
              var o = {
                "doc-comment": {
                  pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                  lookbehind: !0,
                  alias: "comment"
                }
              };
              r = (t = p.languages.insertBefore(a, "comment", o))[n];
            }
            if (r instanceof RegExp && (r = t[n] = {
              pattern: r
            }), Array.isArray(r)) for (var i = 0, s = r.length; i < s; i++) r[i] instanceof RegExp && (r[i] = {
              pattern: r[i]
            }), e(r[i]);else e(r);
          }
        }(a, function (a) {
          a.inside || (a.inside = {}), a.inside.rest = e;
        });
      });
    }
  }), a.addSupport(["java", "javascript", "php"], a);
}(Prism);
!function (a) {
  var e = /(^(?:[\t ]*(?:\*\s*)*))[^*\s].*$/m,
    n = "(?:\\b[a-zA-Z]\\w+\\s*\\.\\s*)*\\b[A-Z]\\w*(?:\\s*<mem>)?|<mem>".replace(/<mem>/g, function () {
      return "#\\s*\\w+(?:\\s*\\([^()]*\\))?";
    });
  a.languages.javadoc = a.languages.extend("javadoclike", {}), a.languages.insertBefore("javadoc", "keyword", {
    reference: {
      pattern: RegExp("(@(?:exception|link|linkplain|see|throws|value)\\s+(?:\\*\\s*)?)(?:" + n + ")"),
      lookbehind: !0,
      inside: {
        function: {
          pattern: /(#\s*)\w+(?=\s*\()/,
          lookbehind: !0
        },
        field: {
          pattern: /(#\s*)\w+/,
          lookbehind: !0
        },
        namespace: {
          pattern: /\b(?:[a-z]\w*\s*\.\s*)+/,
          inside: {
            punctuation: /\./
          }
        },
        "class-name": /\b[A-Z]\w*/,
        keyword: a.languages.java.keyword,
        punctuation: /[#()[\],.]/
      }
    },
    "class-name": {
      pattern: /(@param\s+)<[A-Z]\w*>/,
      lookbehind: !0,
      inside: {
        punctuation: /[.<>]/
      }
    },
    "code-section": [{
      pattern: /(\{@code\s+(?!\s))(?:[^\s{}]|\s+(?![\s}])|\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})+(?=\s*\})/,
      lookbehind: !0,
      inside: {
        code: {
          pattern: e,
          lookbehind: !0,
          inside: a.languages.java,
          alias: "language-java"
        }
      }
    }, {
      pattern: /(<(code|pre|tt)>(?!<code>)\s*)\S(?:\S|\s+\S)*?(?=\s*<\/\2>)/,
      lookbehind: !0,
      inside: {
        line: {
          pattern: e,
          lookbehind: !0,
          inside: {
            tag: a.languages.markup.tag,
            entity: a.languages.markup.entity,
            code: {
              pattern: /.+/,
              inside: a.languages.java,
              alias: "language-java"
            }
          }
        }
      }
    }],
    tag: a.languages.markup.tag,
    entity: a.languages.markup.entity
  }), a.languages.javadoclike.addSupport("java", a.languages.javadoc);
}(Prism);
!function (e) {
  e.languages.typescript = e.languages.extend("javascript", {
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: !0,
      greedy: !0,
      inside: null
    },
    builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  }), e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
  var s = e.languages.extend("typescript", {});
  delete s["class-name"], e.languages.typescript["class-name"].inside = s, e.languages.insertBefore("typescript", "function", {
    decorator: {
      pattern: /@[$\w\xA0-\uFFFF]+/,
      inside: {
        at: {
          pattern: /^@/,
          alias: "operator"
        },
        function: /^[\s\S]+/
      }
    },
    "generic-function": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: !0,
      inside: {
        function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        generic: {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: s
        }
      }
    }
  }), e.languages.ts = e.languages.typescript;
}(Prism);
!function (e) {
  var a = e.languages.javascript,
    n = "\\{(?:[^{}]|\\{(?:[^{}]|\\{[^{}]*\\})*\\})+\\}",
    t = "(@(?:arg|argument|param|property)\\s+(?:" + n + "\\s+)?)";
  e.languages.jsdoc = e.languages.extend("javadoclike", {
    parameter: {
      pattern: RegExp(t + "(?:(?!\\s)[$\\w\\xA0-\\uFFFF.])+(?=\\s|$)"),
      lookbehind: !0,
      inside: {
        punctuation: /\./
      }
    }
  }), e.languages.insertBefore("jsdoc", "keyword", {
    "optional-parameter": {
      pattern: RegExp(t + "\\[(?:(?!\\s)[$\\w\\xA0-\\uFFFF.])+(?:=[^[\\]]+)?\\](?=\\s|$)"),
      lookbehind: !0,
      inside: {
        parameter: {
          pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
          lookbehind: !0,
          inside: {
            punctuation: /\./
          }
        },
        code: {
          pattern: /(=)[\s\S]*(?=\]$)/,
          lookbehind: !0,
          inside: a,
          alias: "language-javascript"
        },
        punctuation: /[=[\]]/
      }
    },
    "class-name": [{
      pattern: RegExp("(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\\s+(?:<TYPE>\\s+)?)[A-Z]\\w*(?:\\.[A-Z]\\w*)*".replace(/<TYPE>/g, function () {
        return n;
      })),
      lookbehind: !0,
      inside: {
        punctuation: /\./
      }
    }, {
      pattern: RegExp("(@[a-z]+\\s+)" + n),
      lookbehind: !0,
      inside: {
        string: a.string,
        number: a.number,
        boolean: a.boolean,
        keyword: e.languages.typescript.keyword,
        operator: /=>|\.\.\.|[&|?:*]/,
        punctuation: /[.,;=<>{}()[\]]/
      }
    }],
    example: {
      pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
      lookbehind: !0,
      inside: {
        code: {
          pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m,
          lookbehind: !0,
          inside: a,
          alias: "language-javascript"
        }
      }
    }
  }), e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc);
}(Prism);
!function (a) {
  function e(a, e) {
    return RegExp(a.replace(/<ID>/g, function () {
      return "(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*";
    }), e);
  }
  a.languages.insertBefore("javascript", "function-variable", {
    "method-variable": {
      pattern: RegExp("(\\.\\s*)" + a.languages.javascript["function-variable"].pattern.source),
      lookbehind: !0,
      alias: ["function-variable", "method", "function", "property-access"]
    }
  }), a.languages.insertBefore("javascript", "function", {
    method: {
      pattern: RegExp("(\\.\\s*)" + a.languages.javascript.function.source),
      lookbehind: !0,
      alias: ["function", "property-access"]
    }
  }), a.languages.insertBefore("javascript", "constant", {
    "known-class-name": [{
      pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
      alias: "class-name"
    }, {
      pattern: /\b(?:[A-Z]\w*)Error\b/,
      alias: "class-name"
    }]
  }), a.languages.insertBefore("javascript", "keyword", {
    imports: {
      pattern: e("(\\bimport\\b\\s*)(?:<ID>(?:\\s*,\\s*(?:\\*\\s*as\\s+<ID>|\\{[^{}]*\\}))?|\\*\\s*as\\s+<ID>|\\{[^{}]*\\})(?=\\s*\\bfrom\\b)"),
      lookbehind: !0,
      inside: a.languages.javascript
    },
    exports: {
      pattern: e("(\\bexport\\b\\s*)(?:\\*(?:\\s*as\\s+<ID>)?(?=\\s*\\bfrom\\b)|\\{[^{}]*\\})"),
      lookbehind: !0,
      inside: a.languages.javascript
    }
  }), a.languages.javascript.keyword.unshift({
    pattern: /\b(?:as|default|export|from|import)\b/,
    alias: "module"
  }, {
    pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
    alias: "control-flow"
  }, {
    pattern: /\bnull\b/,
    alias: ["null", "nil"]
  }, {
    pattern: /\bundefined\b/,
    alias: "nil"
  }), a.languages.insertBefore("javascript", "operator", {
    spread: {
      pattern: /\.{3}/,
      alias: "operator"
    },
    arrow: {
      pattern: /=>/,
      alias: "operator"
    }
  }), a.languages.insertBefore("javascript", "punctuation", {
    "property-access": {
      pattern: e("(\\.\\s*)#?<ID>"),
      lookbehind: !0
    },
    "maybe-class-name": {
      pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
      lookbehind: !0
    },
    dom: {
      pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
      alias: "variable"
    },
    console: {
      pattern: /\bconsole(?=\s*\.)/,
      alias: "class-name"
    }
  });
  for (var t = ["function", "function-variable", "method", "method-variable", "property-access"], r = 0; r < t.length; r++) {
    var n = t[r],
      s = a.languages.javascript[n];
    "RegExp" === a.util.type(s) && (s = a.languages.javascript[n] = {
      pattern: s
    });
    var o = s.inside || {};
    (s.inside = o)["maybe-class-name"] = /^[A-Z][\s\S]*/;
  }
}(Prism);
Prism.languages.json = {
  property: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: !0,
    greedy: !0
  },
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: !0,
    greedy: !0
  },
  comment: {
    pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0
  },
  number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  punctuation: /[{}[\],]/,
  operator: /:/,
  boolean: /\b(?:false|true)\b/,
  null: {
    pattern: /\bnull\b/,
    alias: "keyword"
  }
}, Prism.languages.webmanifest = Prism.languages.json;
Prism.languages.jsonp = Prism.languages.extend("json", {
  punctuation: /[{}[\]();,.]/
}), Prism.languages.insertBefore("jsonp", "punctuation", {
  function: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/
});
!function (u) {
  var e = u.languages.javascript["template-string"],
    n = e.pattern.source,
    a = e.inside.interpolation,
    i = a.inside["interpolation-punctuation"],
    r = a.pattern.source;
  function t(e, t) {
    if (u.languages[e]) return {
      pattern: RegExp("((?:" + t + ")\\s*)" + n),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        "embedded-code": {
          pattern: /[\s\S]+/,
          alias: e
        }
      }
    };
  }
  function s(e, t, n) {
    var r = {
      code: e,
      grammar: t,
      language: n
    };
    return u.hooks.run("before-tokenize", r), r.tokens = u.tokenize(r.code, r.grammar), u.hooks.run("after-tokenize", r), r.tokens;
  }
  function d(e) {
    var t = {};
    t["interpolation-punctuation"] = i;
    var n = u.tokenize(e, t);
    if (3 === n.length) {
      var r = [1, 1];
      r.push.apply(r, s(n[1], u.languages.javascript, "javascript")), n.splice.apply(n, r);
    }
    return new u.Token("interpolation", n, a.alias, e);
  }
  function c(a, e, i) {
    var t = u.tokenize(a, {
        interpolation: {
          pattern: RegExp(r),
          lookbehind: !0
        }
      }),
      f = 0,
      y = {},
      n = s(t.map(function (e) {
        if ("string" == typeof e) return e;
        for (var t, n = e.content; -1 !== a.indexOf((r = f++, t = "___" + i.toUpperCase() + "_" + r + "___")););
        return y[t] = n, t;
        var r;
      }).join(""), e, i),
      v = Object.keys(y);
    return f = 0, function e(t) {
      for (var n = 0; n < t.length; n++) {
        if (f >= v.length) return;
        var r = t[n];
        if ("string" == typeof r || "string" == typeof r.content) {
          var a = v[f],
            i = "string" == typeof r ? r : r.content,
            s = i.indexOf(a);
          if (-1 !== s) {
            ++f;
            var o = i.substring(0, s),
              p = d(y[a]),
              l = i.substring(s + a.length),
              g = [];
            if (o && g.push(o), g.push(p), l) {
              var u = [l];
              e(u), g.push.apply(g, u);
            }
            "string" == typeof r ? (t.splice.apply(t, [n, 1].concat(g)), n += g.length - 1) : r.content = g;
          }
        } else {
          var c = r.content;
          Array.isArray(c) ? e(c) : e([c]);
        }
      }
    }(n), new u.Token(i, n, "language-" + i, a);
  }
  u.languages.javascript["template-string"] = [t("css", "\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)"), t("html", "\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?="), t("svg", "\\bsvg"), t("markdown", "\\b(?:markdown|md)"), t("graphql", "\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)"), t("sql", "\\bsql"), e].filter(Boolean);
  var o = {
    javascript: !0,
    js: !0,
    typescript: !0,
    ts: !0,
    jsx: !0,
    tsx: !0
  };
  function f(e) {
    return "string" == typeof e ? e : Array.isArray(e) ? e.map(f).join("") : f(e.content);
  }
  u.hooks.add("after-tokenize", function (e) {
    e.language in o && !function e(t) {
      for (var n = 0, r = t.length; n < r; n++) {
        var a = t[n];
        if ("string" != typeof a) {
          var i = a.content;
          if (Array.isArray(i)) {
            if ("template-string" === a.type) {
              var s = i[1];
              if (3 === i.length && "string" != typeof s && "embedded-code" === s.type) {
                var o = f(s),
                  p = s.alias,
                  l = Array.isArray(p) ? p[0] : p,
                  g = u.languages[l];
                if (!g) continue;
                i[1] = c(o, g, l);
              }
            } else e(i);
          } else "string" != typeof i && e([i]);
        }
      }
    }(e.tokens);
  });
}(Prism);
Prism.languages.julia = {
  comment: {
    pattern: /(^|[^\\])(?:#=(?:[^#=]|=(?!#)|#(?!=)|#=(?:[^#=]|=(?!#)|#(?!=))*=#)*=#|#.*)/,
    lookbehind: !0
  },
  regex: {
    pattern: /r"(?:\\.|[^"\\\r\n])*"[imsx]{0,4}/,
    greedy: !0
  },
  string: {
    pattern: /"""[\s\S]+?"""|(?:\b\w+)?"(?:\\.|[^"\\\r\n])*"|(^|[^\w'])'(?:\\[^\r\n][^'\r\n]*|[^\\\r\n])'|`(?:[^\\`\r\n]|\\.)*`/,
    lookbehind: !0,
    greedy: !0
  },
  keyword: /\b(?:abstract|baremodule|begin|bitstype|break|catch|ccall|const|continue|do|else|elseif|end|export|finally|for|function|global|if|immutable|import|importall|in|let|local|macro|module|print|println|quote|return|struct|try|type|typealias|using|while)\b/,
  boolean: /\b(?:false|true)\b/,
  number: /(?:\b(?=\d)|\B(?=\.))(?:0[box])?(?:[\da-f]+(?:_[\da-f]+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[efp][+-]?\d+(?:_\d+)*)?j?/i,
  operator: /&&|\|\||[-+*^%÷⊻&$\\]=?|\/[\/=]?|!=?=?|\|[=>]?|<(?:<=?|[=:|])?|>(?:=|>>?=?)?|==?=?|[~≠≤≥'√∛]/,
  punctuation: /::?|[{}[\]();,.?]/,
  constant: /\b(?:(?:Inf|NaN)(?:16|32|64)?|im|pi)\b|[πℯ]/
};
!function (e) {
  e.languages.kotlin = e.languages.extend("clike", {
    keyword: {
      pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
      lookbehind: !0
    },
    function: [{
      pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,
      greedy: !0
    }, {
      pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,
      lookbehind: !0,
      greedy: !0
    }],
    number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
    operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
  }), delete e.languages.kotlin["class-name"], e.languages.insertBefore("kotlin", "string", {
    "raw-string": {
      pattern: /("""|''')[\s\S]*?\1/,
      alias: "string"
    }
  }), e.languages.insertBefore("kotlin", "keyword", {
    annotation: {
      pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
      alias: "builtin"
    }
  }), e.languages.insertBefore("kotlin", "function", {
    label: {
      pattern: /\b\w+@|@\w+\b/,
      alias: "symbol"
    }
  });
  var n = [{
    pattern: /\$\{[^}]+\}/,
    inside: {
      delimiter: {
        pattern: /^\$\{|\}$/,
        alias: "variable"
      },
      rest: e.languages.kotlin
    }
  }, {
    pattern: /\$\w+/,
    alias: "variable"
  }];
  e.languages.kotlin.string.inside = e.languages.kotlin["raw-string"].inside = {
    interpolation: n
  }, e.languages.kt = e.languages.kotlin, e.languages.kts = e.languages.kotlin;
}(Prism);
!function (a) {
  var e = /\\(?:[^a-z()[\]]|[a-z*]+)/i,
    n = {
      "equation-command": {
        pattern: e,
        alias: "regex"
      }
    };
  a.languages.latex = {
    comment: /%.*/,
    cdata: {
      pattern: /(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
      lookbehind: !0
    },
    equation: [{
      pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
      inside: n,
      alias: "string"
    }, {
      pattern: /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
      lookbehind: !0,
      inside: n,
      alias: "string"
    }],
    keyword: {
      pattern: /(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    url: {
      pattern: /(\\url\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    headline: {
      pattern: /(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0,
      alias: "class-name"
    },
    function: {
      pattern: e,
      alias: "selector"
    },
    punctuation: /[[\]{}&]/
  }, a.languages.tex = a.languages.latex, a.languages.context = a.languages.latex;
}(Prism);
Prism.languages.liquid = {
  comment: {
    pattern: /(^\{%\s*comment\s*%\})[\s\S]+(?=\{%\s*endcomment\s*%\}$)/,
    lookbehind: !0
  },
  delimiter: {
    pattern: /^\{(?:\{\{|[%\{])-?|-?(?:\}\}|[%\}])\}$/,
    alias: "punctuation"
  },
  string: {
    pattern: /"[^"]*"|'[^']*'/,
    greedy: !0
  },
  keyword: /\b(?:as|assign|break|(?:end)?(?:capture|case|comment|for|form|if|paginate|raw|style|tablerow|unless)|continue|cycle|decrement|echo|else|elsif|in|include|increment|limit|liquid|offset|range|render|reversed|section|when|with)\b/,
  object: /\b(?:address|all_country_option_tags|article|block|blog|cart|checkout|collection|color|country|country_option_tags|currency|current_page|current_tags|customer|customer_address|date|discount_allocation|discount_application|external_video|filter|filter_value|font|forloop|fulfillment|generic_file|gift_card|group|handle|image|line_item|link|linklist|localization|location|measurement|media|metafield|model|model_source|order|page|page_description|page_image|page_title|part|policy|product|product_option|recommendations|request|robots|routes|rule|script|search|selling_plan|selling_plan_allocation|selling_plan_group|shipping_method|shop|shop_locale|sitemap|store_availability|tax_line|template|theme|transaction|unit_price_measurement|user_agent|variant|video|video_source)\b/,
  function: [{
    pattern: /(\|\s*)\w+/,
    lookbehind: !0,
    alias: "filter"
  }, {
    pattern: /(\.\s*)(?:first|last|size)/,
    lookbehind: !0
  }],
  boolean: /\b(?:false|nil|true)\b/,
  range: {
    pattern: /\.\./,
    alias: "operator"
  },
  number: /\b\d+(?:\.\d+)?\b/,
  operator: /[!=]=|<>|[<>]=?|[|?:=-]|\b(?:and|contains(?=\s)|or)\b/,
  punctuation: /[.,\[\]()]/,
  empty: {
    pattern: /\bempty\b/,
    alias: "keyword"
  }
}, Prism.hooks.add("before-tokenize", function (e) {
  var i = !1;
  Prism.languages["markup-templating"].buildPlaceholders(e, "liquid", /\{%\s*comment\s*%\}[\s\S]*?\{%\s*endcomment\s*%\}|\{(?:%[\s\S]*?%|\{\{[\s\S]*?\}\}|\{[\s\S]*?\})\}/g, function (e) {
    var t = /^\{%-?\s*(\w+)/.exec(e);
    if (t) {
      var n = t[1];
      if ("raw" === n && !i) return i = !0;
      if ("endraw" === n) return !(i = !1);
    }
    return !i;
  });
}), Prism.hooks.add("after-tokenize", function (e) {
  Prism.languages["markup-templating"].tokenizePlaceholders(e, "liquid");
});
!function (e) {
  function n(e) {
    return RegExp("(\\()(?:" + e + ")(?=[\\s\\)])");
  }
  function a(e) {
    return RegExp("([\\s([])(?:" + e + ")(?=[\\s)])");
  }
  var t = "(?!\\d)[-+*/~!@$%^=<>{}\\w]+",
    r = "(\\()",
    i = "(?=\\s)",
    s = "(?:[^()]|\\((?:[^()]|\\((?:[^()]|\\((?:[^()]|\\((?:[^()]|\\([^()]*\\))*\\))*\\))*\\))*\\))*",
    l = {
      heading: {
        pattern: /;;;.*/,
        alias: ["comment", "title"]
      },
      comment: /;.*/,
      string: {
        pattern: /"(?:[^"\\]|\\.)*"/,
        greedy: !0,
        inside: {
          argument: /[-A-Z]+(?=[.,\s])/,
          symbol: RegExp("`" + t + "'")
        }
      },
      "quoted-symbol": {
        pattern: RegExp("#?'" + t),
        alias: ["variable", "symbol"]
      },
      "lisp-property": {
        pattern: RegExp(":" + t),
        alias: "property"
      },
      splice: {
        pattern: RegExp(",@?" + t),
        alias: ["symbol", "variable"]
      },
      keyword: [{
        pattern: RegExp(r + "(?:and|(?:cl-)?letf|cl-loop|cond|cons|error|if|(?:lexical-)?let\\*?|message|not|null|or|provide|require|setq|unless|use-package|when|while)" + i),
        lookbehind: !0
      }, {
        pattern: RegExp(r + "(?:append|by|collect|concat|do|finally|for|in|return)" + i),
        lookbehind: !0
      }],
      declare: {
        pattern: n("declare"),
        lookbehind: !0,
        alias: "keyword"
      },
      interactive: {
        pattern: n("interactive"),
        lookbehind: !0,
        alias: "keyword"
      },
      boolean: {
        pattern: a("nil|t"),
        lookbehind: !0
      },
      number: {
        pattern: a("[-+]?\\d+(?:\\.\\d*)?"),
        lookbehind: !0
      },
      defvar: {
        pattern: RegExp(r + "def(?:const|custom|group|var)\\s+" + t),
        lookbehind: !0,
        inside: {
          keyword: /^def[a-z]+/,
          variable: RegExp(t)
        }
      },
      defun: {
        pattern: RegExp(r + "(?:cl-)?(?:defmacro|defun\\*?)\\s+" + t + "\\s+\\(" + s + "\\)"),
        lookbehind: !0,
        greedy: !0,
        inside: {
          keyword: /^(?:cl-)?def\S+/,
          arguments: null,
          function: {
            pattern: RegExp("(^\\s)" + t),
            lookbehind: !0
          },
          punctuation: /[()]/
        }
      },
      lambda: {
        pattern: RegExp(r + "lambda\\s+\\(\\s*(?:&?" + t + "(?:\\s+&?" + t + ")*\\s*)?\\)"),
        lookbehind: !0,
        greedy: !0,
        inside: {
          keyword: /^lambda/,
          arguments: null,
          punctuation: /[()]/
        }
      },
      car: {
        pattern: RegExp(r + t),
        lookbehind: !0
      },
      punctuation: [/(?:['`,]?\(|[)\[\]])/, {
        pattern: /(\s)\.(?=\s)/,
        lookbehind: !0
      }]
    },
    o = {
      "lisp-marker": RegExp("&(?!\\d)[-+*/~!@$%^=<>{}\\w]+"),
      varform: {
        pattern: RegExp("\\(" + t + "\\s+(?=\\S)" + s + "\\)"),
        inside: l
      },
      argument: {
        pattern: RegExp("(^|[\\s(])" + t),
        lookbehind: !0,
        alias: "variable"
      },
      rest: l
    },
    p = "\\S+(?:\\s+\\S+)*",
    d = {
      pattern: RegExp(r + s + "(?=\\))"),
      lookbehind: !0,
      inside: {
        "rest-vars": {
          pattern: RegExp("&(?:body|rest)\\s+" + p),
          inside: o
        },
        "other-marker-vars": {
          pattern: RegExp("&(?:aux|optional)\\s+" + p),
          inside: o
        },
        keys: {
          pattern: RegExp("&key\\s+" + p + "(?:\\s+&allow-other-keys)?"),
          inside: o
        },
        argument: {
          pattern: RegExp(t),
          alias: "variable"
        },
        punctuation: /[()]/
      }
    };
  l.lambda.inside.arguments = d, l.defun.inside.arguments = e.util.clone(d), l.defun.inside.arguments.inside.sublist = d, e.languages.lisp = l, e.languages.elisp = l, e.languages.emacs = l, e.languages["emacs-lisp"] = l;
}(Prism);
Prism.languages.makefile = {
  comment: {
    pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
    lookbehind: !0
  },
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
  symbol: {
    pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
    inside: {
      variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/
    }
  },
  variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  keyword: [/-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/, {
    pattern: /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
    lookbehind: !0
  }],
  operator: /(?:::|[?:+!])?=|[|@]/,
  punctuation: /[:;(){}]/
};
!function (s) {
  function n(n) {
    return n = n.replace(/<inner>/g, function () {
      return "(?:\\\\.|[^\\\\\n\r]|(?:\n|\r\n?)(?![\r\n]))";
    }), RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:" + n + ")");
  }
  var e = "(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+",
    t = "\\|?__(?:\\|__)+\\|?(?:(?:\n|\r\n?)|(?![^]))".replace(/__/g, function () {
      return e;
    }),
    a = "\\|?[ \t]*:?-{3,}:?[ \t]*(?:\\|[ \t]*:?-{3,}:?[ \t]*)+\\|?(?:\n|\r\n?)";
  s.languages.markdown = s.languages.extend("markup", {}), s.languages.insertBefore("markdown", "prolog", {
    "front-matter-block": {
      pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        punctuation: /^---|---$/,
        "front-matter": {
          pattern: /\S+(?:\s+\S+)*/,
          alias: ["yaml", "language-yaml"],
          inside: s.languages.yaml
        }
      }
    },
    blockquote: {
      pattern: /^>(?:[\t ]*>)*/m,
      alias: "punctuation"
    },
    table: {
      pattern: RegExp("^" + t + a + "(?:" + t + ")*", "m"),
      inside: {
        "table-data-rows": {
          pattern: RegExp("^(" + t + a + ")(?:" + t + ")*$"),
          lookbehind: !0,
          inside: {
            "table-data": {
              pattern: RegExp(e),
              inside: s.languages.markdown
            },
            punctuation: /\|/
          }
        },
        "table-line": {
          pattern: RegExp("^(" + t + ")" + a + "$"),
          lookbehind: !0,
          inside: {
            punctuation: /\||:?-{3,}:?/
          }
        },
        "table-header-row": {
          pattern: RegExp("^" + t + "$"),
          inside: {
            "table-header": {
              pattern: RegExp(e),
              alias: "important",
              inside: s.languages.markdown
            },
            punctuation: /\|/
          }
        }
      }
    },
    code: [{
      pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
      lookbehind: !0,
      alias: "keyword"
    }, {
      pattern: /^```[\s\S]*?^```$/m,
      greedy: !0,
      inside: {
        "code-block": {
          pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
          lookbehind: !0
        },
        "code-language": {
          pattern: /^(```).+/,
          lookbehind: !0
        },
        punctuation: /```/
      }
    }],
    title: [{
      pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
      alias: "important",
      inside: {
        punctuation: /==+$|--+$/
      }
    }, {
      pattern: /(^\s*)#.+/m,
      lookbehind: !0,
      alias: "important",
      inside: {
        punctuation: /^#+|#+$/
      }
    }],
    hr: {
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: !0,
      alias: "punctuation"
    },
    list: {
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: !0,
      alias: "punctuation"
    },
    "url-reference": {
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        variable: {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: !0
        },
        string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        punctuation: /^[\[\]!:]|[<>]/
      },
      alias: "url"
    },
    bold: {
      pattern: n("\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*"),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: !0,
          inside: {}
        },
        punctuation: /\*\*|__/
      }
    },
    italic: {
      pattern: n("\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*"),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: !0,
          inside: {}
        },
        punctuation: /[*_]/
      }
    },
    strike: {
      pattern: n("(~~?)(?:(?!~)<inner>)+\\2"),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: !0,
          inside: {}
        },
        punctuation: /~~?/
      }
    },
    "code-snippet": {
      pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
      lookbehind: !0,
      greedy: !0,
      alias: ["code", "keyword"]
    },
    url: {
      pattern: n('!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\t ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ \t]?\\[(?:(?!\\])<inner>)+\\])'),
      lookbehind: !0,
      greedy: !0,
      inside: {
        operator: /^!/,
        content: {
          pattern: /(^\[)[^\]]+(?=\])/,
          lookbehind: !0,
          inside: {}
        },
        variable: {
          pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
          lookbehind: !0
        },
        url: {
          pattern: /(^\]\()[^\s)]+/,
          lookbehind: !0
        },
        string: {
          pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
          lookbehind: !0
        }
      }
    }
  }), ["url", "bold", "italic", "strike"].forEach(function (e) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function (n) {
      e !== n && (s.languages.markdown[e].inside.content.inside[n] = s.languages.markdown[n]);
    });
  }), s.hooks.add("after-tokenize", function (n) {
    "markdown" !== n.language && "md" !== n.language || !function n(e) {
      if (e && "string" != typeof e) for (var t = 0, a = e.length; t < a; t++) {
        var r = e[t];
        if ("code" === r.type) {
          var i = r.content[1],
            o = r.content[3];
          if (i && o && "code-language" === i.type && "code-block" === o.type && "string" == typeof i.content) {
            var l = i.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"),
              s = "language-" + (l = (/[a-z][\w-]*/i.exec(l) || [""])[0].toLowerCase());
            o.alias ? "string" == typeof o.alias ? o.alias = [o.alias, s] : o.alias.push(s) : o.alias = [s];
          }
        } else n(r.content);
      }
    }(n.tokens);
  }), s.hooks.add("wrap", function (n) {
    if ("code-block" === n.type) {
      for (var e = "", t = 0, a = n.classes.length; t < a; t++) {
        var r = n.classes[t],
          i = /language-(.+)/.exec(r);
        if (i) {
          e = i[1];
          break;
        }
      }
      var o = s.languages[e];
      if (o) n.content = s.highlight(function (n) {
        var e = n.replace(d, "");
        return e = e.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (n, e) {
          var t;
          if ("#" === (e = e.toLowerCase())[0]) return t = "x" === e[1] ? parseInt(e.slice(2), 16) : Number(e.slice(1)), u(t);
          var a = p[e];
          return a || n;
        });
      }(n.content), o, e);else if (e && "none" !== e && s.plugins.autoloader) {
        var l = "md-" + new Date().valueOf() + "-" + Math.floor(1e16 * Math.random());
        n.attributes.id = l, s.plugins.autoloader.loadLanguages(e, function () {
          var n = document.getElementById(l);
          n && (n.innerHTML = s.highlight(n.textContent, s.languages[e], e));
        });
      }
    }
  });
  var d = RegExp(s.languages.markup.tag.pattern.source, "gi"),
    p = {
      amp: "&",
      lt: "<",
      gt: ">",
      quot: '"'
    },
    u = String.fromCodePoint || String.fromCharCode;
  s.languages.md = s.languages.markdown;
}(Prism);
!function (e) {
  var n = /\$(?:\w[a-z\d]*(?:_[^\x00-\x1F\s"'\\()$]*)?|\{[^}\s"'\\]+\})/i;
  Prism.languages.nginx = {
    comment: {
      pattern: /(^|[\s{};])#.*/,
      lookbehind: !0
    },
    directive: {
      pattern: /(^|\s)\w(?:[^;{}"'\\\s]|\\.|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\s+(?:#.*(?!.)|(?![#\s])))*?(?=\s*[;{])/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        string: {
          pattern: /((?:^|[^\\])(?:\\\\)*)(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/,
          lookbehind: !0,
          inside: {
            escape: {
              pattern: /\\["'\\nrt]/,
              alias: "entity"
            },
            variable: n
          }
        },
        comment: {
          pattern: /(\s)#.*/,
          lookbehind: !0,
          greedy: !0
        },
        keyword: {
          pattern: /^\S+/,
          greedy: !0
        },
        boolean: {
          pattern: /(\s)(?:off|on)(?!\S)/,
          lookbehind: !0
        },
        number: {
          pattern: /(\s)\d+[a-z]*(?!\S)/i,
          lookbehind: !0
        },
        variable: n
      }
    },
    punctuation: /[{};]/
  };
}();
Prism.languages.ocaml = {
  comment: /\(\*[\s\S]*?\*\)/,
  string: [{
    pattern: /"(?:\\.|[^\\\r\n"])*"/,
    greedy: !0
  }, {
    pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
    greedy: !0
  }],
  number: /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?[\d_]+)?)/i,
  directive: {
    pattern: /\B#\w+/,
    alias: "important"
  },
  label: {
    pattern: /\B~\w+/,
    alias: "function"
  },
  "type-variable": {
    pattern: /\B'\w+/,
    alias: "function"
  },
  variant: {
    pattern: /`\w+/,
    alias: "variable"
  },
  module: {
    pattern: /\b[A-Z]\w+/,
    alias: "variable"
  },
  keyword: /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
  boolean: /\b(?:false|true)\b/,
  operator: /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
  punctuation: /[(){}\[\].,:;]|\b_\b/
};
Prism.languages.perl = {
  comment: [{
    pattern: /(^\s*)=\w[\s\S]*?=cut.*/m,
    lookbehind: !0
  }, {
    pattern: /(^|[^\\$])#.*/,
    lookbehind: !0
  }],
  string: [{
    pattern: /\b(?:q|qq|qw|qx)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
    greedy: !0
  }, {
    pattern: /\b(?:q|qq|qw|qx)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
    greedy: !0
  }, {
    pattern: /\b(?:q|qq|qw|qx)\s*\((?:[^()\\]|\\[\s\S])*\)/,
    greedy: !0
  }, {
    pattern: /\b(?:q|qq|qw|qx)\s*\{(?:[^{}\\]|\\[\s\S])*\}/,
    greedy: !0
  }, {
    pattern: /\b(?:q|qq|qw|qx)\s*\[(?:[^[\]\\]|\\[\s\S])*\]/,
    greedy: !0
  }, {
    pattern: /\b(?:q|qq|qw|qx)\s*<(?:[^<>\\]|\\[\s\S])*>/,
    greedy: !0
  }, {
    pattern: /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/,
    greedy: !0
  }, {
    pattern: /'(?:[^'\\\r\n]|\\.)*'/,
    greedy: !0
  }],
  regex: [{
    pattern: /\b(?:m|qr)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,
    greedy: !0
  }, {
    pattern: /\b(?:m|qr)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,
    greedy: !0
  }, {
    pattern: /\b(?:m|qr)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngc]*/,
    greedy: !0
  }, {
    pattern: /\b(?:m|qr)\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngc]*/,
    greedy: !0
  }, {
    pattern: /\b(?:m|qr)\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngc]*/,
    greedy: !0
  }, {
    pattern: /\b(?:m|qr)\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngc]*/,
    greedy: !0
  }, {
    pattern: /(^|[^-]\b)(?:s|tr|y)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
    lookbehind: !0,
    greedy: !0
  }, {
    pattern: /(^|[^-]\b)(?:s|tr|y)\s+([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
    lookbehind: !0,
    greedy: !0
  }, {
    pattern: /(^|[^-]\b)(?:s|tr|y)\s*\((?:[^()\\]|\\[\s\S])*\)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngcer]*/,
    lookbehind: !0,
    greedy: !0
  }, {
    pattern: /(^|[^-]\b)(?:s|tr|y)\s*\{(?:[^{}\\]|\\[\s\S])*\}\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngcer]*/,
    lookbehind: !0,
    greedy: !0
  }, {
    pattern: /(^|[^-]\b)(?:s|tr|y)\s*\[(?:[^[\]\\]|\\[\s\S])*\]\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngcer]*/,
    lookbehind: !0,
    greedy: !0
  }, {
    pattern: /(^|[^-]\b)(?:s|tr|y)\s*<(?:[^<>\\]|\\[\s\S])*>\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngcer]*/,
    lookbehind: !0,
    greedy: !0
  }, {
    pattern: /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|x|xor)\b))/,
    greedy: !0
  }],
  variable: [/[&*$@%]\{\^[A-Z]+\}/, /[&*$@%]\^[A-Z_]/, /[&*$@%]#?(?=\{)/, /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+(?![\w$]))+(?:::)*/, /[&*$@%]\d+/, /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/],
  filehandle: {
    pattern: /<(?![<=])\S*>|\b_\b/,
    alias: "symbol"
  },
  vstring: {
    pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/,
    alias: "string"
  },
  function: {
    pattern: /sub \w+/i,
    inside: {
      keyword: /sub/
    }
  },
  keyword: /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
  number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,
  operator: /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|xor)\b/,
  punctuation: /[{}[\];(),:]/
};
!function (a) {
  var e = "(?:\\b[a-zA-Z]\\w*|[|\\\\[\\]])+";
  a.languages.phpdoc = a.languages.extend("javadoclike", {
    parameter: {
      pattern: RegExp("(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:" + e + "\\s+)?)\\$\\w+"),
      lookbehind: !0
    }
  }), a.languages.insertBefore("phpdoc", "keyword", {
    "class-name": [{
      pattern: RegExp("(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)" + e),
      lookbehind: !0,
      inside: {
        keyword: /\b(?:array|bool|boolean|callback|double|false|float|int|integer|mixed|null|object|resource|self|string|true|void)\b/,
        punctuation: /[|\\[\]()]/
      }
    }]
  }), a.languages.javadoclike.addSupport("php", a.languages.phpdoc);
}(Prism);
Prism.languages.insertBefore("php", "variable", {
  this: /\$this\b/,
  global: /\$(?:GLOBALS|HTTP_RAW_POST_DATA|_(?:COOKIE|ENV|FILES|GET|POST|REQUEST|SERVER|SESSION)|argc|argv|http_response_header|php_errormsg)\b/,
  scope: {
    pattern: /\b[\w\\]+::/,
    inside: {
      keyword: /parent|self|static/,
      punctuation: /::|\\/
    }
  }
});
Prism.languages.processing = Prism.languages.extend("clike", {
  keyword: /\b(?:break|case|catch|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,
  operator: /<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/
}), Prism.languages.insertBefore("processing", "number", {
  constant: /\b(?!XML\b)[A-Z][A-Z\d_]+\b/,
  type: {
    pattern: /\b(?:boolean|byte|char|color|double|float|int|[A-Z]\w*)\b/,
    alias: "variable"
  }
}), Prism.languages.processing.function = /\b\w+(?=\s*\()/, Prism.languages.processing["class-name"].alias = "variable";
!function (e) {
  var s = /\b(?:bool|bytes|double|s?fixed(?:32|64)|float|[su]?int(?:32|64)|string)\b/;
  e.languages.protobuf = e.languages.extend("clike", {
    "class-name": [{
      pattern: /(\b(?:enum|extend|message|service)\s+)[A-Za-z_]\w*(?=\s*\{)/,
      lookbehind: !0
    }, {
      pattern: /(\b(?:rpc\s+\w+|returns)\s*\(\s*(?:stream\s+)?)\.?[A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*(?=\s*\))/,
      lookbehind: !0
    }],
    keyword: /\b(?:enum|extend|extensions|import|message|oneof|option|optional|package|public|repeated|required|reserved|returns|rpc(?=\s+\w)|service|stream|syntax|to)\b(?!\s*=\s*\d)/,
    function: /\b[a-z_]\w*(?=\s*\()/i
  }), e.languages.insertBefore("protobuf", "operator", {
    map: {
      pattern: /\bmap<\s*[\w.]+\s*,\s*[\w.]+\s*>(?=\s+[a-z_]\w*\s*[=;])/i,
      alias: "class-name",
      inside: {
        punctuation: /[<>.,]/,
        builtin: s
      }
    },
    builtin: s,
    "positional-class-name": {
      pattern: /(?:\b|\B\.)[a-z_]\w*(?:\.[a-z_]\w*)*(?=\s+[a-z_]\w*\s*[=;])/i,
      alias: "class-name",
      inside: {
        punctuation: /\./
      }
    },
    annotation: {
      pattern: /(\[\s*)[a-z_]\w*(?=\s*=)/i,
      lookbehind: !0
    }
  });
}(Prism);
!function (e) {
  e.languages.pug = {
    comment: {
      pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ].+)*/m,
      lookbehind: !0
    },
    "multiline-script": {
      pattern: /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
      lookbehind: !0,
      inside: e.languages.javascript
    },
    filter: {
      pattern: /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
      lookbehind: !0,
      inside: {
        "filter-name": {
          pattern: /^:[\w-]+/,
          alias: "variable"
        }
      }
    },
    "multiline-plain-text": {
      pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
      lookbehind: !0
    },
    markup: {
      pattern: /(^[\t ]*)<.+/m,
      lookbehind: !0,
      inside: e.languages.markup
    },
    doctype: {
      pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/,
      lookbehind: !0
    },
    "flow-control": {
      pattern: /(^[\t ]*)(?:case|default|each|else|if|unless|when|while)\b(?: .+)?/m,
      lookbehind: !0,
      inside: {
        each: {
          pattern: /^each .+? in\b/,
          inside: {
            keyword: /\b(?:each|in)\b/,
            punctuation: /,/
          }
        },
        branch: {
          pattern: /^(?:case|default|else|if|unless|when|while)\b/,
          alias: "keyword"
        },
        rest: e.languages.javascript
      }
    },
    keyword: {
      pattern: /(^[\t ]*)(?:append|block|extends|include|prepend)\b.+/m,
      lookbehind: !0
    },
    mixin: [{
      pattern: /(^[\t ]*)mixin .+/m,
      lookbehind: !0,
      inside: {
        keyword: /^mixin/,
        function: /\w+(?=\s*\(|\s*$)/,
        punctuation: /[(),.]/
      }
    }, {
      pattern: /(^[\t ]*)\+.+/m,
      lookbehind: !0,
      inside: {
        name: {
          pattern: /^\+\w+/,
          alias: "function"
        },
        rest: e.languages.javascript
      }
    }],
    script: {
      pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]).+/m,
      lookbehind: !0,
      inside: e.languages.javascript
    },
    "plain-text": {
      pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]).+/m,
      lookbehind: !0
    },
    tag: {
      pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
      lookbehind: !0,
      inside: {
        attributes: [{
          pattern: /&[^(]+\([^)]+\)/,
          inside: e.languages.javascript
        }, {
          pattern: /\([^)]+\)/,
          inside: {
            "attr-value": {
              pattern: /(=\s*(?!\s))(?:\{[^}]*\}|[^,)\r\n]+)/,
              lookbehind: !0,
              inside: e.languages.javascript
            },
            "attr-name": /[\w-]+(?=\s*!?=|\s*[,)])/,
            punctuation: /[!=(),]+/
          }
        }],
        punctuation: /:/,
        "attr-id": /#[\w\-]+/,
        "attr-class": /\.[\w\-]+/
      }
    },
    code: [{
      pattern: /(^[\t ]*(?:-|!?=)).+/m,
      lookbehind: !0,
      inside: e.languages.javascript
    }],
    punctuation: /[.\-!=|]+/
  };
  for (var t = [{
      filter: "atpl",
      language: "twig"
    }, {
      filter: "coffee",
      language: "coffeescript"
    }, "ejs", "handlebars", "less", "livescript", "markdown", {
      filter: "sass",
      language: "scss"
    }, "stylus"], n = {}, a = 0, i = t.length; a < i; a++) {
    var r = t[a];
    r = "string" == typeof r ? {
      filter: r,
      language: r
    } : r, e.languages[r.language] && (n["filter-" + r.filter] = {
      pattern: RegExp("(^([\t ]*)):<filter_name>(?:(?:\r?\n|\r(?!\n))(?:\\2[\t ].+|\\s*?(?=\r?\n|\r)))+".replace("<filter_name>", function () {
        return r.filter;
      }), "m"),
      lookbehind: !0,
      inside: {
        "filter-name": {
          pattern: /^:[\w-]+/,
          alias: "variable"
        },
        rest: e.languages[r.language]
      }
    });
  }
  e.languages.insertBefore("pug", "filter", n);
}(Prism);
!function (e) {
  e.languages.puppet = {
    heredoc: [{
      pattern: /(@\("([^"\r\n\/):]+)"(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r(?!\n)))*?[ \t]*(?:\|[ \t]*)?(?:-[ \t]*)?\2/,
      lookbehind: !0,
      alias: "string",
      inside: {
        punctuation: /(?=\S).*\S(?= *$)/
      }
    }, {
      pattern: /(@\(([^"\r\n\/):]+)(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r(?!\n)))*?[ \t]*(?:\|[ \t]*)?(?:-[ \t]*)?\2/,
      lookbehind: !0,
      greedy: !0,
      alias: "string",
      inside: {
        punctuation: /(?=\S).*\S(?= *$)/
      }
    }, {
      pattern: /@\("?(?:[^"\r\n\/):]+)"?(?:\/[nrts$uL]*)?\)/,
      alias: "string",
      inside: {
        punctuation: {
          pattern: /(\().+?(?=\))/,
          lookbehind: !0
        }
      }
    }],
    "multiline-comment": {
      pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
      lookbehind: !0,
      greedy: !0,
      alias: "comment"
    },
    regex: {
      pattern: /((?:\bnode\s+|[~=\(\[\{,]\s*|[=+]>\s*|^\s*))\/(?:[^\/\\]|\\[\s\S])+\/(?:[imx]+\b|\B)/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        "extended-regex": {
          pattern: /^\/(?:[^\/\\]|\\[\s\S])+\/[im]*x[im]*$/,
          inside: {
            comment: /#.*/
          }
        }
      }
    },
    comment: {
      pattern: /(^|[^\\])#.*/,
      lookbehind: !0,
      greedy: !0
    },
    string: {
      pattern: /(["'])(?:\$\{(?:[^'"}]|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}|\$(?!\{)|(?!\1)[^\\$]|\\[\s\S])*\1/,
      greedy: !0,
      inside: {
        "double-quoted": {
          pattern: /^"[\s\S]*"$/,
          inside: {}
        }
      }
    },
    variable: {
      pattern: /\$(?:::)?\w+(?:::\w+)*/,
      inside: {
        punctuation: /::/
      }
    },
    "attr-name": /(?:\b\w+|\*)(?=\s*=>)/,
    function: [{
      pattern: /(\.)(?!\d)\w+/,
      lookbehind: !0
    }, /\b(?:contain|debug|err|fail|include|info|notice|realize|require|tag|warning)\b|\b(?!\d)\w+(?=\()/],
    number: /\b(?:0x[a-f\d]+|\d+(?:\.\d+)?(?:e-?\d+)?)\b/i,
    boolean: /\b(?:false|true)\b/,
    keyword: /\b(?:application|attr|case|class|consumes|default|define|else|elsif|function|if|import|inherits|node|private|produces|type|undef|unless)\b/,
    datatype: {
      pattern: /\b(?:Any|Array|Boolean|Callable|Catalogentry|Class|Collection|Data|Default|Enum|Float|Hash|Integer|NotUndef|Numeric|Optional|Pattern|Regexp|Resource|Runtime|Scalar|String|Struct|Tuple|Type|Undef|Variant)\b/,
      alias: "symbol"
    },
    operator: /=[=~>]?|![=~]?|<(?:<\|?|[=~|-])?|>[>=]?|->?|~>|\|>?>?|[*\/%+?]|\b(?:and|in|or)\b/,
    punctuation: /[\[\]{}().,;]|:+/
  };
  var n = [{
    pattern: /(^|[^\\])\$\{(?:[^'"{}]|\{[^}]*\}|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}/,
    lookbehind: !0,
    inside: {
      "short-variable": {
        pattern: /(^\$\{)(?!\w+\()(?:::)?\w+(?:::\w+)*/,
        lookbehind: !0,
        alias: "variable",
        inside: {
          punctuation: /::/
        }
      },
      delimiter: {
        pattern: /^\$/,
        alias: "variable"
      },
      rest: e.languages.puppet
    }
  }, {
    pattern: /(^|[^\\])\$(?:::)?\w+(?:::\w+)*/,
    lookbehind: !0,
    alias: "variable",
    inside: {
      punctuation: /::/
    }
  }];
  e.languages.puppet.heredoc[0].inside.interpolation = n, e.languages.puppet.string.inside["double-quoted"].inside.interpolation = n;
}(Prism);
Prism.languages.python = {
  comment: {
    pattern: /(^|[^\\])#.*/,
    lookbehind: !0
  },
  "string-interpolation": {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: !0,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: !0
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      string: /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: "string"
  },
  string: {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: !0
  },
  decorator: {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: !0,
    alias: ["annotation", "punctuation"],
    inside: {
      punctuation: /\./
    }
  },
  keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:False|None|True)\b/,
  number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/
}, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python;
Prism.languages.r = {
  comment: /#.*/,
  string: {
    pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  "percent-operator": {
    pattern: /%[^%\s]*%/,
    alias: "operator"
  },
  boolean: /\b(?:FALSE|TRUE)\b/,
  ellipsis: /\.\.(?:\.|\d+)/,
  number: [/\b(?:Inf|NaN)\b/, /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+(?:\.\d*)?|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/],
  keyword: /\b(?:NA|NA_character_|NA_complex_|NA_integer_|NA_real_|NULL|break|else|for|function|if|in|next|repeat|while)\b/,
  operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
  punctuation: /[(){}\[\],;]/
};
!function (o) {
  var t = o.util.clone(o.languages.javascript),
    e = "(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";
  function n(t, n) {
    return t = t.replace(/<S>/g, function () {
      return "(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)";
    }).replace(/<BRACES>/g, function () {
      return "(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})";
    }).replace(/<SPREAD>/g, function () {
      return e;
    }), RegExp(t, n);
  }
  e = n(e).source, o.languages.jsx = o.languages.extend("markup", t), o.languages.jsx.tag.pattern = n("</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"), o.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, o.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, o.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, o.languages.jsx.tag.inside.comment = t.comment, o.languages.insertBefore("inside", "attr-name", {
    spread: {
      pattern: n("<SPREAD>"),
      inside: o.languages.jsx
    }
  }, o.languages.jsx.tag), o.languages.insertBefore("inside", "special-attr", {
    script: {
      pattern: n("=<BRACES>"),
      inside: {
        "script-punctuation": {
          pattern: /^=(?=\{)/,
          alias: "punctuation"
        },
        rest: o.languages.jsx
      },
      alias: "language-javascript"
    }
  }, o.languages.jsx.tag);
  var i = function (t) {
      return t ? "string" == typeof t ? t : "string" == typeof t.content ? t.content : t.content.map(i).join("") : "";
    },
    r = function (t) {
      for (var n = [], e = 0; e < t.length; e++) {
        var a = t[e],
          s = !1;
        if ("string" != typeof a && ("tag" === a.type && a.content[0] && "tag" === a.content[0].type ? "</" === a.content[0].content[0].content ? 0 < n.length && n[n.length - 1].tagName === i(a.content[0].content[1]) && n.pop() : "/>" === a.content[a.content.length - 1].content || n.push({
          tagName: i(a.content[0].content[1]),
          openedBraces: 0
        }) : 0 < n.length && "punctuation" === a.type && "{" === a.content ? n[n.length - 1].openedBraces++ : 0 < n.length && 0 < n[n.length - 1].openedBraces && "punctuation" === a.type && "}" === a.content ? n[n.length - 1].openedBraces-- : s = !0), (s || "string" == typeof a) && 0 < n.length && 0 === n[n.length - 1].openedBraces) {
          var g = i(a);
          e < t.length - 1 && ("string" == typeof t[e + 1] || "plain-text" === t[e + 1].type) && (g += i(t[e + 1]), t.splice(e + 1, 1)), 0 < e && ("string" == typeof t[e - 1] || "plain-text" === t[e - 1].type) && (g = i(t[e - 1]) + g, t.splice(e - 1, 1), e--), t[e] = new o.Token("plain-text", g, null, g);
        }
        a.content && "string" != typeof a.content && r(a.content);
      }
    };
  o.hooks.add("after-tokenize", function (t) {
    "jsx" !== t.language && "tsx" !== t.language || r(t.tokens);
  });
}(Prism);
!function (e) {
  var a = e.util.clone(e.languages.typescript);
  e.languages.tsx = e.languages.extend("jsx", a), delete e.languages.tsx.parameter, delete e.languages.tsx["literal-property"];
  var t = e.languages.tsx.tag;
  t.pattern = RegExp("(^|[^\\w$]|(?=</))(?:" + t.pattern.source + ")", t.pattern.flags), t.lookbehind = !0;
}(Prism);
!function (e) {
  e.languages.ruby = e.languages.extend("clike", {
    comment: [/#.*/, {
      pattern: /^=begin\s[\s\S]*?^=end/m,
      greedy: !0
    }],
    "class-name": {
      pattern: /(\b(?:class)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/
  });
  var n = {
    pattern: /#\{[^}]+\}/,
    inside: {
      delimiter: {
        pattern: /^#\{|\}$/,
        alias: "tag"
      },
      rest: e.languages.ruby
    }
  };
  delete e.languages.ruby.function, e.languages.insertBefore("ruby", "keyword", {
    regex: [{
      pattern: RegExp("%r(?:" + ["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1", "\\((?:[^()\\\\]|\\\\[^])*\\)", "\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}", "\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\]", "<(?:[^<>\\\\]|\\\\[^])*>"].join("|") + ")[egimnosux]{0,6}"),
      greedy: !0,
      inside: {
        interpolation: n
      }
    }, {
      pattern: /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: n
      }
    }],
    variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
    symbol: {
      pattern: /(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/,
      lookbehind: !0
    },
    "method-definition": {
      pattern: /(\bdef\s+)[\w.]+/,
      lookbehind: !0,
      inside: {
        function: /\w+$/,
        rest: e.languages.ruby
      }
    }
  }), e.languages.insertBefore("ruby", "number", {
    builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,
    constant: /\b[A-Z]\w*(?:[?!]|\b)/
  }), e.languages.ruby.string = [{
    pattern: RegExp("%[qQiIwWxs]?(?:" + ["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1", "\\((?:[^()\\\\]|\\\\[^])*\\)", "\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}", "\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\]", "<(?:[^<>\\\\]|\\\\[^])*>"].join("|") + ")"),
    greedy: !0,
    inside: {
      interpolation: n
    }
  }, {
    pattern: /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
    greedy: !0,
    inside: {
      interpolation: n
    }
  }, {
    pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
    alias: "heredoc-string",
    greedy: !0,
    inside: {
      delimiter: {
        pattern: /^<<[-~]?[a-z_]\w*|[a-z_]\w*$/i,
        alias: "symbol",
        inside: {
          punctuation: /^<<[-~]?/
        }
      },
      interpolation: n
    }
  }, {
    pattern: /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
    alias: "heredoc-string",
    greedy: !0,
    inside: {
      delimiter: {
        pattern: /^<<[-~]?'[a-z_]\w*'|[a-z_]\w*$/i,
        alias: "symbol",
        inside: {
          punctuation: /^<<[-~]?'|'$/
        }
      }
    }
  }], e.languages.rb = e.languages.ruby;
}(Prism);
!function (e) {
  for (var a = "/\\*(?:[^*/]|\\*(?!/)|/(?!\\*)|<self>)*\\*/", t = 0; t < 2; t++) a = a.replace(/<self>/g, function () {
    return a;
  });
  a = a.replace(/<self>/g, function () {
    return "[^\\s\\S]";
  }), e.languages.rust = {
    comment: [{
      pattern: RegExp("(^|[^\\\\])" + a),
      lookbehind: !0,
      greedy: !0
    }, {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: !0,
      greedy: !0
    }],
    string: {
      pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
      greedy: !0
    },
    char: {
      pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
      greedy: !0,
      alias: "string"
    },
    attribute: {
      pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
      greedy: !0,
      alias: "attr-name",
      inside: {
        string: null
      }
    },
    "closure-params": {
      pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        "closure-punctuation": {
          pattern: /^\||\|$/,
          alias: "punctuation"
        },
        rest: null
      }
    },
    "lifetime-annotation": {
      pattern: /'\w+/,
      alias: "symbol"
    },
    "fragment-specifier": {
      pattern: /(\$\w+:)[a-z]+/,
      lookbehind: !0,
      alias: "punctuation"
    },
    variable: /\$\w+/,
    "function-definition": {
      pattern: /(\bfn\s+)\w+/,
      lookbehind: !0,
      alias: "function"
    },
    "type-definition": {
      pattern: /(\b(?:enum|struct|union)\s+)\w+/,
      lookbehind: !0,
      alias: "class-name"
    },
    "module-declaration": [{
      pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
      lookbehind: !0,
      alias: "namespace"
    }, {
      pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
      lookbehind: !0,
      alias: "namespace",
      inside: {
        punctuation: /::/
      }
    }],
    keyword: [/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],
    function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
    macro: {
      pattern: /\b\w+!/,
      alias: "property"
    },
    constant: /\b[A-Z_][A-Z_\d]+\b/,
    "class-name": /\b[A-Z]\w*\b/,
    namespace: {
      pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
      inside: {
        punctuation: /::/
      }
    },
    number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
    boolean: /\b(?:false|true)\b/,
    punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
    operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
  }, e.languages.rust["closure-params"].inside.rest = e.languages.rust, e.languages.rust.attribute.inside.string = e.languages.rust.string;
}(Prism);
!function (e) {
  e.languages.sass = e.languages.extend("css", {
    comment: {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
      lookbehind: !0,
      greedy: !0
    }
  }), e.languages.insertBefore("sass", "atrule", {
    "atrule-line": {
      pattern: /^(?:[ \t]*)[@+=].+/m,
      greedy: !0,
      inside: {
        atrule: /(?:@[\w-]+|[+=])/
      }
    }
  }), delete e.languages.sass.atrule;
  var r = /\$[-\w]+|#\{\$[-\w]+\}/,
    t = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/, {
      pattern: /(\s)-(?=\s)/,
      lookbehind: !0
    }];
  e.languages.insertBefore("sass", "property", {
    "variable-line": {
      pattern: /^[ \t]*\$.+/m,
      greedy: !0,
      inside: {
        punctuation: /:/,
        variable: r,
        operator: t
      }
    },
    "property-line": {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
      greedy: !0,
      inside: {
        property: [/[^:\s]+(?=\s*:)/, {
          pattern: /(:)[^:\s]+/,
          lookbehind: !0
        }],
        punctuation: /:/,
        variable: r,
        operator: t,
        important: e.languages.sass.important
      }
    }
  }), delete e.languages.sass.property, delete e.languages.sass.important, e.languages.insertBefore("sass", "punctuation", {
    selector: {
      pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
      lookbehind: !0,
      greedy: !0
    }
  });
}(Prism);
Prism.languages.scss = Prism.languages.extend("css", {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
    lookbehind: !0
  },
  atrule: {
    pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
    inside: {
      rule: /@[\w-]+/
    }
  },
  url: /(?:[-a-z]+-)?url(?=\()/i,
  selector: {
    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
    inside: {
      parent: {
        pattern: /&/,
        alias: "important"
      },
      placeholder: /%[-\w]+/,
      variable: /\$[-\w]+|#\{\$[-\w]+\}/
    }
  },
  property: {
    pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: {
      variable: /\$[-\w]+|#\{\$[-\w]+\}/
    }
  }
}), Prism.languages.insertBefore("scss", "atrule", {
  keyword: [/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i, {
    pattern: /( )(?:from|through)(?= )/,
    lookbehind: !0
  }]
}), Prism.languages.insertBefore("scss", "important", {
  variable: /\$[-\w]+|#\{\$[-\w]+\}/
}), Prism.languages.insertBefore("scss", "function", {
  "module-modifier": {
    pattern: /\b(?:as|hide|show|with)\b/i,
    alias: "keyword"
  },
  placeholder: {
    pattern: /%[-\w]+/,
    alias: "selector"
  },
  statement: {
    pattern: /\B!(?:default|optional)\b/i,
    alias: "keyword"
  },
  boolean: /\b(?:false|true)\b/,
  null: {
    pattern: /\bnull\b/,
    alias: "keyword"
  },
  operator: {
    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
    lookbehind: !0
  }
}), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss;
!function (s) {
  var n = ['"(?:\\\\[^]|\\$\\([^)]+\\)|\\$(?!\\()|`[^`]+`|[^"\\\\`$])*"', "'[^']*'", "\\$'(?:[^'\\\\]|\\\\[^])*'", "<<-?\\s*([\"']?)(\\w+)\\1\\s[^]*?[\r\n]\\2"].join("|");
  s.languages["shell-session"] = {
    command: {
      pattern: RegExp('^(?:[^\\s@:$#%*!/\\\\]+@[^\r\n@:$#%*!/\\\\]+(?::[^\0-\\x1F$#%*?"<>:;|]+)?|[/~.][^\0-\\x1F$#%*?"<>@:;|]*)?[$#%](?=\\s)' + "(?:[^\\\\\r\n \t'\"<$]|[ \t](?:(?!#)|#.*$)|\\\\(?:[^\r]|\r\n?)|\\$(?!')|<(?!<)|<<str>>)+".replace(/<<str>>/g, function () {
        return n;
      }), "m"),
      greedy: !0,
      inside: {
        info: {
          pattern: /^[^#$%]+/,
          alias: "punctuation",
          inside: {
            user: /^[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+/,
            punctuation: /:/,
            path: /[\s\S]+/
          }
        },
        bash: {
          pattern: /(^[$#%]\s*)\S[\s\S]*/,
          lookbehind: !0,
          alias: "language-bash",
          inside: s.languages.bash
        },
        "shell-symbol": {
          pattern: /^[$#%]/,
          alias: "important"
        }
      }
    },
    output: /.(?:.*(?:[\r\n]|.$))*/
  }, s.languages["sh-session"] = s.languages.shellsession = s.languages["shell-session"];
}(Prism);
Prism.languages.smalltalk = {
  comment: /"(?:""|[^"])*"/,
  character: {
    pattern: /\$./,
    alias: "string"
  },
  string: /'(?:''|[^'])*'/,
  symbol: /#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,
  "block-arguments": {
    pattern: /(\[\s*):[^\[|]*\|/,
    lookbehind: !0,
    inside: {
      variable: /:[\da-z]+/i,
      punctuation: /\|/
    }
  },
  "temporary-variables": {
    pattern: /\|[^|]+\|/,
    inside: {
      variable: /[\da-z]+/i,
      punctuation: /\|/
    }
  },
  keyword: /\b(?:new|nil|self|super)\b/,
  boolean: /\b(?:false|true)\b/,
  number: [/\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/, /\b\d+(?:\.\d+)?(?:e-?\d+)?/],
  operator: /[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,
  punctuation: /[.;:?\[\](){}]/
};
!function (t) {
  var e = /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    a = /\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-F]+\b/;
  t.languages.soy = {
    comment: [/\/\*[\s\S]*?\*\//, {
      pattern: /(\s)\/\/.*/,
      lookbehind: !0,
      greedy: !0
    }],
    "command-arg": {
      pattern: /(\{+\/?\s*(?:alias|call|delcall|delpackage|deltemplate|namespace|template)\s+)\.?[\w.]+/,
      lookbehind: !0,
      alias: "string",
      inside: {
        punctuation: /\./
      }
    },
    parameter: {
      pattern: /(\{+\/?\s*@?param\??\s+)\.?[\w.]+/,
      lookbehind: !0,
      alias: "variable"
    },
    keyword: [{
      pattern: /(\{+\/?[^\S\r\n]*)(?:\\[nrt]|alias|call|case|css|default|delcall|delpackage|deltemplate|else(?:if)?|fallbackmsg|for(?:each)?|if(?:empty)?|lb|let|literal|msg|namespace|nil|@?param\??|rb|sp|switch|template|xid)/,
      lookbehind: !0
    }, /\b(?:any|as|attributes|bool|css|float|html|in|int|js|list|map|null|number|string|uri)\b/],
    delimiter: {
      pattern: /^\{+\/?|\/?\}+$/,
      alias: "punctuation"
    },
    property: /\w+(?==)/,
    variable: {
      pattern: /\$[^\W\d]\w*(?:\??(?:\.\w+|\[[^\]]+\]))*/,
      inside: {
        string: {
          pattern: e,
          greedy: !0
        },
        number: a,
        punctuation: /[\[\].?]/
      }
    },
    string: {
      pattern: e,
      greedy: !0
    },
    function: [/\w+(?=\()/, {
      pattern: /(\|[^\S\r\n]*)\w+/,
      lookbehind: !0
    }],
    boolean: /\b(?:false|true)\b/,
    number: a,
    operator: /\?:?|<=?|>=?|==?|!=|[+*/%-]|\b(?:and|not|or)\b/,
    punctuation: /[{}()\[\]|.,:]/
  }, t.hooks.add("before-tokenize", function (e) {
    var a = !1;
    t.languages["markup-templating"].buildPlaceholders(e, "soy", /\{\{.+?\}\}|\{.+?\}|\s\/\/.*|\/\*[\s\S]*?\*\//g, function (e) {
      return "{/literal}" === e && (a = !1), !a && ("{literal}" === e && (a = !0), !0);
    });
  }), t.hooks.add("after-tokenize", function (e) {
    t.languages["markup-templating"].tokenizePlaceholders(e, "soy");
  });
}(Prism);
!function (e) {
  var n = {
      pattern: /(\b\d+)(?:%|[a-z]+)/,
      lookbehind: !0
    },
    r = {
      pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
      lookbehind: !0
    },
    t = {
      comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: !0
      },
      url: {
        pattern: /\burl\((["']?).*?\1\)/i,
        greedy: !0
      },
      string: {
        pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
        greedy: !0
      },
      interpolation: null,
      func: null,
      important: /\B!(?:important|optional)\b/i,
      keyword: {
        pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
        lookbehind: !0
      },
      hexcode: /#[\da-f]{3,6}/i,
      color: [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
        pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
        inside: {
          unit: n,
          number: r,
          function: /[\w-]+(?=\()/,
          punctuation: /[(),]/
        }
      }],
      entity: /\\[\da-f]{1,8}/i,
      unit: n,
      boolean: /\b(?:false|true)\b/,
      operator: [/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
      number: r,
      punctuation: /[{}()\[\];:,]/
    };
  t.interpolation = {
    pattern: /\{[^\r\n}:]+\}/,
    alias: "variable",
    inside: {
      delimiter: {
        pattern: /^\{|\}$/,
        alias: "punctuation"
      },
      rest: t
    }
  }, t.func = {
    pattern: /[\w-]+\([^)]*\).*/,
    inside: {
      function: /^[^(]+/,
      rest: t
    }
  }, e.languages.stylus = {
    "atrule-declaration": {
      pattern: /(^[ \t]*)@.+/m,
      lookbehind: !0,
      inside: {
        atrule: /^@[\w-]+/,
        rest: t
      }
    },
    "variable-declaration": {
      pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
      lookbehind: !0,
      inside: {
        variable: /^\S+/,
        rest: t
      }
    },
    statement: {
      pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
      lookbehind: !0,
      inside: {
        keyword: /^\S+/,
        rest: t
      }
    },
    "property-declaration": {
      pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
      lookbehind: !0,
      inside: {
        property: {
          pattern: /^[^\s:]+/,
          inside: {
            interpolation: t.interpolation
          }
        },
        rest: t
      }
    },
    selector: {
      pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
      lookbehind: !0,
      inside: {
        interpolation: t.interpolation,
        comment: t.comment,
        punctuation: /[{},]/
      }
    },
    func: t.func,
    string: t.string,
    comment: {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: !0,
      greedy: !0
    },
    interpolation: t.interpolation,
    punctuation: /[{}()\[\];:.]/
  };
}(Prism);
!function (e) {
  function n(e) {
    return e.replace(/__/g, function () {
      return "(?:[\\w-]+|'[^'\n\r]*'|\"(?:\\\\.|[^\\\\\"\r\n])*\")";
    });
  }
  e.languages.toml = {
    comment: {
      pattern: /#.*/,
      greedy: !0
    },
    table: {
      pattern: RegExp(n("(^[\t ]*\\[\\s*(?:\\[\\s*)?)__(?:\\s*\\.\\s*__)*(?=\\s*\\])"), "m"),
      lookbehind: !0,
      greedy: !0,
      alias: "class-name"
    },
    key: {
      pattern: RegExp(n("(^[\t ]*|[{,]\\s*)__(?:\\s*\\.\\s*__)*(?=\\s*=)"), "m"),
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    },
    string: {
      pattern: /"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/,
      greedy: !0
    },
    date: [{
      pattern: /\b\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?\b/i,
      alias: "number"
    }, {
      pattern: /\b\d{2}:\d{2}:\d{2}(?:\.\d+)?\b/,
      alias: "number"
    }],
    number: /(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?\b(?:inf|nan)\b/,
    boolean: /\b(?:false|true)\b/,
    punctuation: /[.,=[\]{}]/
  };
}(Prism);
Prism.languages.wasm = {
  comment: [/\(;[\s\S]*?;\)/, {
    pattern: /;;.*/,
    greedy: !0
  }],
  string: {
    pattern: /"(?:\\[\s\S]|[^"\\])*"/,
    greedy: !0
  },
  keyword: [{
    pattern: /\b(?:align|offset)=/,
    inside: {
      operator: /=/
    }
  }, {
    pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
    inside: {
      punctuation: /\./
    }
  }, /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],
  variable: /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
  number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
  punctuation: /[()]/
};
Prism.languages.wiki = Prism.languages.extend("markup", {
  "block-comment": {
    pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
    lookbehind: !0,
    alias: "comment"
  },
  heading: {
    pattern: /^(=+)[^=\r\n].*?\1/m,
    inside: {
      punctuation: /^=+|=+$/,
      important: /.+/
    }
  },
  emphasis: {
    pattern: /('{2,5}).+?\1/,
    inside: {
      "bold-italic": {
        pattern: /(''''').+?(?=\1)/,
        lookbehind: !0,
        alias: ["bold", "italic"]
      },
      bold: {
        pattern: /(''')[^'](?:.*?[^'])?(?=\1)/,
        lookbehind: !0
      },
      italic: {
        pattern: /('')[^'](?:.*?[^'])?(?=\1)/,
        lookbehind: !0
      },
      punctuation: /^''+|''+$/
    }
  },
  hr: {
    pattern: /^-{4,}/m,
    alias: "punctuation"
  },
  url: [/ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:PMID|RFC) +\d+/i, /\[\[.+?\]\]|\[.+?\]/],
  variable: [/__[A-Z]+__/, /\{{3}.+?\}{3}/, /\{\{.+?\}\}/],
  symbol: [/^#redirect/im, /~{3,5}/],
  "table-tag": {
    pattern: /((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,
    lookbehind: !0,
    inside: {
      "table-bar": {
        pattern: /\|$/,
        alias: "punctuation"
      },
      rest: Prism.languages.markup.tag.inside
    }
  },
  punctuation: /^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m
}), Prism.languages.insertBefore("wiki", "tag", {
  nowiki: {
    pattern: /<(nowiki|pre|source)\b[^>]*>[\s\S]*?<\/\1>/i,
    inside: {
      tag: {
        pattern: /<(?:nowiki|pre|source)\b[^>]*>|<\/(?:nowiki|pre|source)>/i,
        inside: Prism.languages.markup.tag.inside
      }
    }
  }
});
!function (r) {
  r.languages.xquery = r.languages.extend("markup", {
    "xquery-comment": {
      pattern: /\(:[\s\S]*?:\)/,
      greedy: !0,
      alias: "comment"
    },
    string: {
      pattern: /(["'])(?:\1\1|(?!\1)[\s\S])*\1/,
      greedy: !0
    },
    extension: {
      pattern: /\(#.+?#\)/,
      alias: "symbol"
    },
    variable: /\$[-\w:]+/,
    axis: {
      pattern: /(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,
      lookbehind: !0,
      alias: "operator"
    },
    "keyword-operator": {
      pattern: /(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/,
      lookbehind: !0,
      alias: "operator"
    },
    keyword: {
      pattern: /(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/,
      lookbehind: !0
    },
    function: /[\w-]+(?::[\w-]+)*(?=\s*\()/,
    "xquery-element": {
      pattern: /(element\s+)[\w-]+(?::[\w-]+)*/,
      lookbehind: !0,
      alias: "tag"
    },
    "xquery-attribute": {
      pattern: /(attribute\s+)[\w-]+(?::[\w-]+)*/,
      lookbehind: !0,
      alias: "attr-name"
    },
    builtin: {
      pattern: /(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:ENTITIES|ENTITY|ID|IDREFS?|NCName|NMTOKENS?|NOTATION|Name|QName|anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|int|integer|language|long|negativeInteger|nonNegativeInteger|nonPositiveInteger|normalizedString|positiveInteger|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/,
      lookbehind: !0
    },
    number: /\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/,
    operator: [/[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/, {
      pattern: /(\s)-(?=\s)/,
      lookbehind: !0
    }],
    punctuation: /[[\](){},;:/]/
  }), r.languages.xquery.tag.pattern = /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/, r.languages.xquery.tag.inside["attr-value"].pattern = /=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+)/, r.languages.xquery.tag.inside["attr-value"].inside.punctuation = /^="|"$/, r.languages.xquery.tag.inside["attr-value"].inside.expression = {
    pattern: /\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}/,
    inside: r.languages.xquery,
    alias: "language-xquery"
  };
  var s = function (e) {
      return "string" == typeof e ? e : "string" == typeof e.content ? e.content : e.content.map(s).join("");
    },
    l = function (e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var a = e[n],
          o = !1;
        if ("string" != typeof a && ("tag" === a.type && a.content[0] && "tag" === a.content[0].type ? "</" === a.content[0].content[0].content ? 0 < t.length && t[t.length - 1].tagName === s(a.content[0].content[1]) && t.pop() : "/>" === a.content[a.content.length - 1].content || t.push({
          tagName: s(a.content[0].content[1]),
          openedBraces: 0
        }) : !(0 < t.length && "punctuation" === a.type && "{" === a.content) || e[n + 1] && "punctuation" === e[n + 1].type && "{" === e[n + 1].content || e[n - 1] && "plain-text" === e[n - 1].type && "{" === e[n - 1].content ? 0 < t.length && 0 < t[t.length - 1].openedBraces && "punctuation" === a.type && "}" === a.content ? t[t.length - 1].openedBraces-- : "comment" !== a.type && (o = !0) : t[t.length - 1].openedBraces++), (o || "string" == typeof a) && 0 < t.length && 0 === t[t.length - 1].openedBraces) {
          var i = s(a);
          n < e.length - 1 && ("string" == typeof e[n + 1] || "plain-text" === e[n + 1].type) && (i += s(e[n + 1]), e.splice(n + 1, 1)), 0 < n && ("string" == typeof e[n - 1] || "plain-text" === e[n - 1].type) && (i = s(e[n - 1]) + i, e.splice(n - 1, 1), n--), /^\s+$/.test(i) ? e[n] = i : e[n] = new r.Token("plain-text", i, null, i);
        }
        a.content && "string" != typeof a.content && l(a.content);
      }
    };
  r.hooks.add("after-tokenize", function (e) {
    "xquery" === e.language && l(e.tokens);
  });
}(Prism);
!function (e) {
  var n = /[*&][^\s[\]{},]+/,
    r = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
    t = "(?:" + r.source + "(?:[ \t]+" + n.source + ")?|" + n.source + "(?:[ \t]+" + r.source + ")?)",
    a = "(?:[^\\s\\x00-\\x08\\x0e-\\x1f!\"#%&'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*".replace(/<PLAIN>/g, function () {
      return "[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]";
    }),
    d = "\"(?:[^\"\\\\\r\n]|\\\\.)*\"|'(?:[^'\\\\\r\n]|\\\\.)*'";
  function o(e, n) {
    n = (n || "").replace(/m/g, "") + "m";
    var r = "([:\\-,[{]\\s*(?:\\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\\]|\\}|(?:[\r\n]\\s*)?#))".replace(/<<prop>>/g, function () {
      return t;
    }).replace(/<<value>>/g, function () {
      return e;
    });
    return RegExp(r, n);
  }
  e.languages.yaml = {
    scalar: {
      pattern: RegExp("([\\-:]\\s*(?:\\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\\S[^\r\n]*(?:\\2[^\r\n]+)*)".replace(/<<prop>>/g, function () {
        return t;
      })),
      lookbehind: !0,
      alias: "string"
    },
    comment: /#.*/,
    key: {
      pattern: RegExp("((?:^|[:\\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\\s*:\\s)".replace(/<<prop>>/g, function () {
        return t;
      }).replace(/<<key>>/g, function () {
        return "(?:" + a + "|" + d + ")";
      })),
      lookbehind: !0,
      greedy: !0,
      alias: "atrule"
    },
    directive: {
      pattern: /(^[ \t]*)%.+/m,
      lookbehind: !0,
      alias: "important"
    },
    datetime: {
      pattern: o("\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ \t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?"),
      lookbehind: !0,
      alias: "number"
    },
    boolean: {
      pattern: o("false|true", "i"),
      lookbehind: !0,
      alias: "important"
    },
    null: {
      pattern: o("null|~", "i"),
      lookbehind: !0,
      alias: "important"
    },
    string: {
      pattern: o(d),
      lookbehind: !0,
      greedy: !0
    },
    number: {
      pattern: o("[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)", "i"),
      lookbehind: !0
    },
    tag: r,
    important: n,
    punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
  }, e.languages.yml = e.languages.yaml;
}(Prism);
!function () {
  if ("undefined" != typeof Prism && "undefined" != typeof document) {
    var i = [],
      l = {},
      d = function () {};
    Prism.plugins.toolbar = {};
    var e = Prism.plugins.toolbar.registerButton = function (e, n) {
        var t;
        t = "function" == typeof n ? n : function (e) {
          var t;
          return "function" == typeof n.onClick ? ((t = document.createElement("button")).type = "button", t.addEventListener("click", function () {
            n.onClick.call(this, e);
          })) : "string" == typeof n.url ? (t = document.createElement("a")).href = n.url : t = document.createElement("span"), n.className && t.classList.add(n.className), t.textContent = n.text, t;
        }, e in l ? console.warn('There is a button with the key "' + e + '" registered already.') : i.push(l[e] = t);
      },
      t = Prism.plugins.toolbar.hook = function (a) {
        var e = a.element.parentNode;
        if (e && /pre/i.test(e.nodeName) && !e.parentNode.classList.contains("code-toolbar")) {
          var t = document.createElement("div");
          t.classList.add("code-toolbar"), e.parentNode.insertBefore(t, e), t.appendChild(e);
          var r = document.createElement("div");
          r.classList.add("toolbar");
          var n = i,
            o = function (e) {
              for (; e;) {
                var t = e.getAttribute("data-toolbar-order");
                if (null != t) return (t = t.trim()).length ? t.split(/\s*,\s*/g) : [];
                e = e.parentElement;
              }
            }(a.element);
          o && (n = o.map(function (e) {
            return l[e] || d;
          })), n.forEach(function (e) {
            var t = e(a);
            if (t) {
              var n = document.createElement("div");
              n.classList.add("toolbar-item"), n.appendChild(t), r.appendChild(n);
            }
          }), t.appendChild(r);
        }
      };
    e("label", function (e) {
      var t = e.element.parentNode;
      if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
        var n,
          a,
          r = t.getAttribute("data-label");
        try {
          a = document.querySelector("template#" + r);
        } catch (e) {}
        return a ? n = a.content : (t.hasAttribute("data-url") ? (n = document.createElement("a")).href = t.getAttribute("data-url") : n = document.createElement("span"), n.textContent = r), n;
      }
    }), Prism.hooks.add("complete", t);
  }
}();
!function () {
  if ("undefined" != typeof Prism && "undefined" != typeof document) if (Prism.plugins.toolbar) {
    var i = {
      none: "Plain text",
      plain: "Plain text",
      plaintext: "Plain text",
      text: "Plain text",
      txt: "Plain text",
      html: "HTML",
      xml: "XML",
      svg: "SVG",
      mathml: "MathML",
      ssml: "SSML",
      rss: "RSS",
      css: "CSS",
      clike: "C-like",
      js: "JavaScript",
      abap: "ABAP",
      abnf: "ABNF",
      al: "AL",
      antlr4: "ANTLR4",
      g4: "ANTLR4",
      apacheconf: "Apache Configuration",
      apl: "APL",
      aql: "AQL",
      ino: "Arduino",
      arff: "ARFF",
      asciidoc: "AsciiDoc",
      adoc: "AsciiDoc",
      aspnet: "ASP.NET (C#)",
      asm6502: "6502 Assembly",
      asmatmel: "Atmel AVR Assembly",
      autohotkey: "AutoHotkey",
      autoit: "AutoIt",
      avisynth: "AviSynth",
      avs: "AviSynth",
      "avro-idl": "Avro IDL",
      avdl: "Avro IDL",
      basic: "BASIC",
      bbcode: "BBcode",
      bnf: "BNF",
      rbnf: "RBNF",
      bsl: "BSL (1C:Enterprise)",
      oscript: "OneScript",
      csharp: "C#",
      cs: "C#",
      dotnet: "C#",
      cpp: "C++",
      cfscript: "CFScript",
      cfc: "CFScript",
      cil: "CIL",
      cmake: "CMake",
      cobol: "COBOL",
      coffee: "CoffeeScript",
      conc: "Concurnas",
      csp: "Content-Security-Policy",
      "css-extras": "CSS Extras",
      csv: "CSV",
      dataweave: "DataWeave",
      dax: "DAX",
      django: "Django/Jinja2",
      jinja2: "Django/Jinja2",
      "dns-zone-file": "DNS zone file",
      "dns-zone": "DNS zone file",
      dockerfile: "Docker",
      dot: "DOT (Graphviz)",
      gv: "DOT (Graphviz)",
      ebnf: "EBNF",
      editorconfig: "EditorConfig",
      ejs: "EJS",
      etlua: "Embedded Lua templating",
      erb: "ERB",
      "excel-formula": "Excel Formula",
      xlsx: "Excel Formula",
      xls: "Excel Formula",
      fsharp: "F#",
      "firestore-security-rules": "Firestore security rules",
      ftl: "FreeMarker Template Language",
      gml: "GameMaker Language",
      gamemakerlanguage: "GameMaker Language",
      gap: "GAP (CAS)",
      gcode: "G-code",
      gdscript: "GDScript",
      gedcom: "GEDCOM",
      glsl: "GLSL",
      gn: "GN",
      gni: "GN",
      graphql: "GraphQL",
      hbs: "Handlebars",
      hs: "Haskell",
      hcl: "HCL",
      hlsl: "HLSL",
      http: "HTTP",
      hpkp: "HTTP Public-Key-Pins",
      hsts: "HTTP Strict-Transport-Security",
      ichigojam: "IchigoJam",
      "icu-message-format": "ICU Message Format",
      idr: "Idris",
      ignore: ".ignore",
      gitignore: ".gitignore",
      hgignore: ".hgignore",
      npmignore: ".npmignore",
      inform7: "Inform 7",
      javadoc: "JavaDoc",
      javadoclike: "JavaDoc-like",
      javastacktrace: "Java stack trace",
      jq: "JQ",
      jsdoc: "JSDoc",
      "js-extras": "JS Extras",
      json: "JSON",
      webmanifest: "Web App Manifest",
      json5: "JSON5",
      jsonp: "JSONP",
      jsstacktrace: "JS stack trace",
      "js-templates": "JS Templates",
      keepalived: "Keepalived Configure",
      kts: "Kotlin Script",
      kt: "Kotlin",
      kumir: "KuMir (КуМир)",
      kum: "KuMir (КуМир)",
      latex: "LaTeX",
      tex: "TeX",
      context: "ConTeXt",
      lilypond: "LilyPond",
      ly: "LilyPond",
      emacs: "Lisp",
      elisp: "Lisp",
      "emacs-lisp": "Lisp",
      llvm: "LLVM IR",
      log: "Log file",
      lolcode: "LOLCODE",
      magma: "Magma (CAS)",
      md: "Markdown",
      "markup-templating": "Markup templating",
      matlab: "MATLAB",
      maxscript: "MAXScript",
      mel: "MEL",
      mongodb: "MongoDB",
      moon: "MoonScript",
      n1ql: "N1QL",
      n4js: "N4JS",
      n4jsd: "N4JS",
      "nand2tetris-hdl": "Nand To Tetris HDL",
      naniscript: "Naninovel Script",
      nani: "Naninovel Script",
      nasm: "NASM",
      neon: "NEON",
      nginx: "nginx",
      nsis: "NSIS",
      objectivec: "Objective-C",
      objc: "Objective-C",
      ocaml: "OCaml",
      opencl: "OpenCL",
      openqasm: "OpenQasm",
      qasm: "OpenQasm",
      parigp: "PARI/GP",
      objectpascal: "Object Pascal",
      psl: "PATROL Scripting Language",
      pcaxis: "PC-Axis",
      px: "PC-Axis",
      peoplecode: "PeopleCode",
      pcode: "PeopleCode",
      php: "PHP",
      phpdoc: "PHPDoc",
      "php-extras": "PHP Extras",
      plsql: "PL/SQL",
      powerquery: "PowerQuery",
      pq: "PowerQuery",
      mscript: "PowerQuery",
      powershell: "PowerShell",
      promql: "PromQL",
      properties: ".properties",
      protobuf: "Protocol Buffers",
      purebasic: "PureBasic",
      pbfasm: "PureBasic",
      purs: "PureScript",
      py: "Python",
      qsharp: "Q#",
      qs: "Q#",
      q: "Q (kdb+ database)",
      qml: "QML",
      rkt: "Racket",
      cshtml: "Razor C#",
      razor: "Razor C#",
      jsx: "React JSX",
      tsx: "React TSX",
      renpy: "Ren'py",
      rpy: "Ren'py",
      rest: "reST (reStructuredText)",
      robotframework: "Robot Framework",
      robot: "Robot Framework",
      rb: "Ruby",
      sas: "SAS",
      sass: "Sass (Sass)",
      scss: "Sass (Scss)",
      "shell-session": "Shell session",
      "sh-session": "Shell session",
      shellsession: "Shell session",
      sml: "SML",
      smlnj: "SML/NJ",
      solidity: "Solidity (Ethereum)",
      sol: "Solidity (Ethereum)",
      "solution-file": "Solution file",
      sln: "Solution file",
      soy: "Soy (Closure Template)",
      sparql: "SPARQL",
      rq: "SPARQL",
      "splunk-spl": "Splunk SPL",
      sqf: "SQF: Status Quo Function (Arma 3)",
      sql: "SQL",
      iecst: "Structured Text (IEC 61131-3)",
      systemd: "Systemd configuration file",
      "t4-templating": "T4 templating",
      "t4-cs": "T4 Text Templates (C#)",
      t4: "T4 Text Templates (C#)",
      "t4-vb": "T4 Text Templates (VB)",
      tap: "TAP",
      tt2: "Template Toolkit 2",
      toml: "TOML",
      trickle: "trickle",
      troy: "troy",
      trig: "TriG",
      ts: "TypeScript",
      tsconfig: "TSConfig",
      uscript: "UnrealScript",
      uc: "UnrealScript",
      uri: "URI",
      url: "URL",
      vbnet: "VB.Net",
      vhdl: "VHDL",
      vim: "vim",
      "visual-basic": "Visual Basic",
      vba: "VBA",
      vb: "Visual Basic",
      wasm: "WebAssembly",
      "web-idl": "Web IDL",
      webidl: "Web IDL",
      wiki: "Wiki markup",
      wolfram: "Wolfram language",
      nb: "Mathematica Notebook",
      wl: "Wolfram language",
      xeoracube: "XeoraCube",
      "xml-doc": "XML doc (.net)",
      xojo: "Xojo (REALbasic)",
      xquery: "XQuery",
      yaml: "YAML",
      yml: "YAML",
      yang: "YANG"
    };
    Prism.plugins.toolbar.registerButton("show-language", function (e) {
      var a = e.element.parentNode;
      if (a && /pre/i.test(a.nodeName)) {
        var t,
          s = a.getAttribute("data-language") || i[e.language] || ((t = e.language) ? (t.substring(0, 1).toUpperCase() + t.substring(1)).replace(/s(?=cript)/, "S") : t);
        if (s) {
          var o = document.createElement("span");
          return o.textContent = s, o;
        }
      }
    });
  } else console.warn("Show Languages plugin loaded before Toolbar plugin.");
}();
//# sourceMappingURL=prism.js.map
