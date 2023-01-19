"use strict";
(self.webpackChunkwebpack_setup = self.webpackChunkwebpack_setup || []).push([
  [826],
  {
    426: (e, n, t) => {
      t.d(n, { Z: () => c });
      var r = t(81),
        o = t.n(r),
        a = t(645),
        i = t.n(a)()(o());
      i.push([
        e.id,
        "body {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 25px;\r\n  box-sizing: border-box;\r\n  background: #f3f2f2;\r\n}\r\n\r\n#container {\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n  margin: 10% 10%;\r\n  box-shadow: 3px 3px 3px 3px gray;\r\n}\r\n\r\nhr {\r\n  border: 0.1px solid #f3f2f2;\r\n  margin: 0;\r\n}\r\n\r\nh1 {\r\n  font-size: 22px;\r\n  font-weight: normal;\r\n}\r\n\r\ninput {\r\n  border: 0;\r\n  outline: 0;\r\n  padding: 0.3rem;\r\n}\r\n\r\ninput:focus {\r\n  outline: none !important;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.todo-title,\r\n.todo-edit,\r\n.todo-check {\r\n  padding: 1rem 1.7rem;\r\n}\r\n\r\n.checkbox {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.check-icons {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n}\r\n\r\n.check-icons .fa-trash {\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n#to-do-check {\r\n  margin-right: 2rem;\r\n}\r\n\r\ni {\r\n  cursor: pointer;\r\n  color: gray;\r\n}\r\n\r\n.clear-all {\r\n  padding: 1rem 0;\r\n  background: #f3f2f2;\r\n  height: auto;\r\n  text-align: center;\r\n}\r\n\r\n.clear-all h3 {\r\n  cursor: pointer;\r\n  font-weight: normal;\r\n  color: gray;\r\n  margin: 0;\r\n}\r\n\r\n.clear-all:hover {\r\n  text-decoration: underline;\r\n  color: #000;\r\n}\r\n\r\n::placeholder {\r\n  font-style: italic;\r\n  font-size: 18px;\r\n}\r\n",
        "",
      ]);
      const c = i;
    },
    645: (e) => {
      e.exports = function (e) {
        var n = [];
        return (
          (n.toString = function () {
            return this.map(function (n) {
              var t = "",
                r = void 0 !== n[5];
              return (
                n[4] && (t += "@supports (".concat(n[4], ") {")),
                n[2] && (t += "@media ".concat(n[2], " {")),
                r &&
                  (t += "@layer".concat(
                    n[5].length > 0 ? " ".concat(n[5]) : "",
                    " {"
                  )),
                (t += e(n)),
                r && (t += "}"),
                n[2] && (t += "}"),
                n[4] && (t += "}"),
                t
              );
            }).join("");
          }),
          (n.i = function (e, t, r, o, a) {
            "string" == typeof e && (e = [[null, e, void 0]]);
            var i = {};
            if (r)
              for (var c = 0; c < this.length; c++) {
                var s = this[c][0];
                null != s && (i[s] = !0);
              }
            for (var d = 0; d < e.length; d++) {
              var l = [].concat(e[d]);
              (r && i[l[0]]) ||
                (void 0 !== a &&
                  (void 0 === l[5] ||
                    (l[1] = "@layer"
                      .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                      .concat(l[1], "}")),
                  (l[5] = a)),
                t &&
                  (l[2]
                    ? ((l[1] = "@media ".concat(l[2], " {").concat(l[1], "}")),
                      (l[2] = t))
                    : (l[2] = t)),
                o &&
                  (l[4]
                    ? ((l[1] = "@supports ("
                        .concat(l[4], ") {")
                        .concat(l[1], "}")),
                      (l[4] = o))
                    : (l[4] = "".concat(o))),
                n.push(l));
            }
          }),
          n
        );
      };
    },
    81: (e) => {
      e.exports = function (e) {
        return e[1];
      };
    },
    379: (e) => {
      var n = [];
      function t(e) {
        for (var t = -1, r = 0; r < n.length; r++)
          if (n[r].identifier === e) {
            t = r;
            break;
          }
        return t;
      }
      function r(e, r) {
        for (var a = {}, i = [], c = 0; c < e.length; c++) {
          var s = e[c],
            d = r.base ? s[0] + r.base : s[0],
            l = a[d] || 0,
            u = "".concat(d, " ").concat(l);
          a[d] = l + 1;
          var p = t(u),
            f = {
              css: s[1],
              media: s[2],
              sourceMap: s[3],
              supports: s[4],
              layer: s[5],
            };
          if (-1 !== p) n[p].references++, n[p].updater(f);
          else {
            var m = o(f, r);
            (r.byIndex = c),
              n.splice(c, 0, { identifier: u, updater: m, references: 1 });
          }
          i.push(u);
        }
        return i;
      }
      function o(e, n) {
        var t = n.domAPI(n);
        return (
          t.update(e),
          function (n) {
            if (n) {
              if (
                n.css === e.css &&
                n.media === e.media &&
                n.sourceMap === e.sourceMap &&
                n.supports === e.supports &&
                n.layer === e.layer
              )
                return;
              t.update((e = n));
            } else t.remove();
          }
        );
      }
      e.exports = function (e, o) {
        var a = r((e = e || []), (o = o || {}));
        return function (e) {
          e = e || [];
          for (var i = 0; i < a.length; i++) {
            var c = t(a[i]);
            n[c].references--;
          }
          for (var s = r(e, o), d = 0; d < a.length; d++) {
            var l = t(a[d]);
            0 === n[l].references && (n[l].updater(), n.splice(l, 1));
          }
          a = s;
        };
      };
    },
    569: (e) => {
      var n = {};
      e.exports = function (e, t) {
        var r = (function (e) {
          if (void 0 === n[e]) {
            var t = document.querySelector(e);
            if (
              window.HTMLIFrameElement &&
              t instanceof window.HTMLIFrameElement
            )
              try {
                t = t.contentDocument.head;
              } catch (e) {
                t = null;
              }
            n[e] = t;
          }
          return n[e];
        })(e);
        if (!r)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        r.appendChild(t);
      };
    },
    216: (e) => {
      e.exports = function (e) {
        var n = document.createElement("style");
        return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
      };
    },
    565: (e, n, t) => {
      e.exports = function (e) {
        var n = t.nc;
        n && e.setAttribute("nonce", n);
      };
    },
    795: (e) => {
      e.exports = function (e) {
        var n = e.insertStyleElement(e);
        return {
          update: function (t) {
            !(function (e, n, t) {
              var r = "";
              t.supports && (r += "@supports (".concat(t.supports, ") {")),
                t.media && (r += "@media ".concat(t.media, " {"));
              var o = void 0 !== t.layer;
              o &&
                (r += "@layer".concat(
                  t.layer.length > 0 ? " ".concat(t.layer) : "",
                  " {"
                )),
                (r += t.css),
                o && (r += "}"),
                t.media && (r += "}"),
                t.supports && (r += "}");
              var a = t.sourceMap;
              a &&
                "undefined" != typeof btoa &&
                (r +=
                  "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                    " */"
                  )),
                n.styleTagTransform(r, e, n.options);
            })(n, e, t);
          },
          remove: function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(n);
          },
        };
      };
    },
    589: (e) => {
      e.exports = function (e, n) {
        if (n.styleSheet) n.styleSheet.cssText = e;
        else {
          for (; n.firstChild; ) n.removeChild(n.firstChild);
          n.appendChild(document.createTextNode(e));
        }
      };
    },
    694: (e, n, t) => {
      var r = t(379),
        o = t.n(r),
        a = t(795),
        i = t.n(a),
        c = t(569),
        s = t.n(c),
        d = t(565),
        l = t.n(d),
        u = t(216),
        p = t.n(u),
        f = t(589),
        m = t.n(f),
        v = t(426),
        h = {};
      (h.styleTagTransform = m()),
        (h.setAttributes = l()),
        (h.insert = s().bind(null, "head")),
        (h.domAPI = i()),
        (h.insertStyleElement = p()),
        o()(v.Z, h),
        v.Z && v.Z.locals && v.Z.locals;
      const g = document.querySelector(".todo-body");
      let y = !1,
        b = null;
      class x {
        static getTodo = () => {
          let e;
          return (
            (e =
              null == localStorage.getItem("todo")
                ? []
                : JSON.parse(localStorage.getItem("todo"))),
            e
          );
        };
        static addRemoveEvent = () => {
          document.querySelectorAll(".trash").forEach((e, n) => {
            e.addEventListener("click", (e) => {
              e.preventDefault(), this.removeTodo(n);
            });
          });
        };
        static removeTodo = (e) => {
          const n = x.getTodo();
          n.splice(e, 1),
            n.forEach((n) => {
              n.index > e && (n.index -= 1);
            }),
            localStorage.setItem("todo", JSON.stringify(n)),
            this.loadTodo(n);
        };
        static loadTodo = (e) => {
          let n = " ";
          e.forEach((e, t) => {
            n += `\n      <div class="todo-check flex">\n      <div class="checkbox">\n        <input\n          type="checkbox"\n          id="to-do-check"\n          name="To-Do"\n          value="Add" maxlength="10"/>\n        <label for="todo">${e.text}</label><br />\n      </div>\n      <div class= "check-icons">\n      <div class="trash">\n      <i class="fa-solid fa-trash" id="${t}"></i>\n      </div>\n      <i class="edit-btn vertical-menu fa-solid fa-ellipsis-vertical" id="${t}"></i>\n      </div>\n    </div>\n    <hr />`;
          }),
            (g.innerHTML = n),
            this.addRemoveEvent(),
            this.editEvent();
        };
        static addTodo = () => {
          const e = document.querySelector(".type-task").value;
          if ("" !== e) {
            const n = x.getTodo(),
              t = { text: e, completed: !1, index: n.length },
              r = { text: e, completed: !1, index: b };
            if (y) {
              const e = n.find((e, n) => n === b);
              return (
                Object.assign(e, r),
                localStorage.setItem("todo", JSON.stringify(n)),
                this.loadTodo(n),
                (y = !1),
                (b = null),
                void (document.querySelector(".type-task").value = "")
              );
            }
            n.push(t),
              localStorage.setItem("todo", JSON.stringify(n)),
              this.loadTodo(n),
              (document.querySelector(".type-task").value = "");
          }
        };
        static editTodo = (e) => {
          const n = x.getTodo().find((n, t) => t === e);
          (document.querySelector(".type-task").value = n.text),
            (y = !0),
            (b = e);
        };
        static editEvent = () => {
          document.querySelectorAll(".edit-btn").forEach((e, n) => {
            e.addEventListener("click", (e) => {
              e.preventDefault(), this.editTodo(n);
            });
          });
        };
      }
      const k = document.querySelector("#edit-todo-item"),
        T = document.querySelector(".enter-btn"),
        S = document.querySelector(".todo-edit-input");
      window.addEventListener("DOMContentLoaded", () => {
        const e = x.getTodo();
        x.loadTodo(e);
      }),
        T.addEventListener("click", () => {
          x.addTodo();
        }),
        k.addEventListener("submit", (e) => {
          e.preventDefault();
          const n = Number(S.getAttribute("id"));
          x.updateTaskInput(S.value, n),
            (S.value = ""),
            (document.querySelector(".type-task").style.display = "block"),
            (k.style.display = "none");
        });
    },
  },
  (e) => {
    e((e.s = 694));
  },
]);

