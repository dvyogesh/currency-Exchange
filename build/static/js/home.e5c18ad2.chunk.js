(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    6020: function(t, e, n) {
      var r = n(6021),
        o = n(6022),
        u = n(6023);
      t.exports = function(t) {
        return r(t) || o(t) || u();
      };
    },
    6021: function(t, e) {
      t.exports = function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++)
            n[e] = t[e];
          return n;
        }
      };
    },
    6022: function(t, e) {
      t.exports = function(t) {
        if (
          Symbol.iterator in Object(t) ||
          '[object Arguments]' === Object.prototype.toString.call(t)
        )
          return Array.from(t);
      };
    },
    6023: function(t, e) {
      t.exports = function() {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      };
    },
    6024: function(t, e, n) {
      var r = n(6025),
        o = n(6026),
        u = n(6027);
      t.exports = function(t, e) {
        return r(t) || o(t, e) || u();
      };
    },
    6025: function(t, e) {
      t.exports = function(t) {
        if (Array.isArray(t)) return t;
      };
    },
    6026: function(t, e) {
      t.exports = function(t, e) {
        var n = [],
          r = !0,
          o = !1,
          u = void 0;
        try {
          for (
            var a, i = t[Symbol.iterator]();
            !(r = (a = i.next()).done) &&
            (n.push(a.value), !e || n.length !== e);
            r = !0
          );
        } catch (t) {
          (o = !0), (u = t);
        } finally {
          try {
            r || null == i.return || i.return();
          } finally {
            if (o) throw u;
          }
        }
        return n;
      };
    },
    6027: function(t, e) {
      t.exports = function() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance'
        );
      };
    },
    684: function(t, e, n) {
      'use strict';
      n.r(e);
      function r() {
        var t = Object(b.b)(function(t) {
            return t.todos || [];
          }),
          e = Object(f.useState)(''),
          n = l()(e, 2),
          r = n[0],
          o = n[1],
          u = Object(f.useState)(t),
          a = l()(u, 2),
          i = a[0],
          c = a[1];
        return p.a.createElement(
          'div',
          null,
          p.a.createElement('h1', null, 'Home page '),
          p.a.createElement(
            'p',
            null,
            'You can check your',
            ' ',
            p.a.createElement(
              d.b,
              { to: '/CurrencyExchange' },
              'currency convertion'
            )
          ),
          p.a.createElement(
            'form',
            {
              onSubmit: function(t) {
                t.preventDefault();
                var e = { text: r };
                h.a.todos.create(e).then(function(t) {
                  c([].concat(s()(i), [t])), o('');
                });
              }
            },
            p.a.createElement('label', { htmlFor: 'todo' }, 'Add a todo'),
            p.a.createElement('br', null),
            p.a.createElement('p', null, 'enter input and hit enter'),
            p.a.createElement('input', {
              id: 'todo',
              type: 'text',
              value: r,
              autoComplete: 'off',
              onChange: function(t) {
                return o(t.target.value);
              }
            })
          ),
          p.a.createElement(
            'ul',
            null,
            i.map(function(t) {
              return p.a.createElement('li', { key: t.id }, t.text);
            })
          )
        );
      }
      var o = n(6020),
        s = n.n(o),
        u = n(6024),
        l = n.n(u),
        f = n(1),
        p = n.n(f),
        d = n(69),
        h = n(715),
        b = n(242);
      (r.fetchData = function() {
        return h.a.todos.all().then(function(t) {
          return { todos: t };
        });
      }),
        (e.default = r);
    },
    687: function(t, e) {
      t.exports = function(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      };
    },
    691: function(t, e, n) {
      'use strict';
      n.r(e),
        (e.default = function(c, s) {
          return (
            (s = s || {}),
            new Promise(function(t, e) {
              var n = new XMLHttpRequest(),
                r = [],
                o = [],
                u = {},
                a = function() {
                  return {
                    ok: 2 == ((n.status / 100) | 0),
                    statusText: n.statusText,
                    status: n.status,
                    url: n.responseURL,
                    text: function() {
                      return Promise.resolve(n.responseText);
                    },
                    json: function() {
                      return Promise.resolve(JSON.parse(n.responseText));
                    },
                    blob: function() {
                      return Promise.resolve(new Blob([n.response]));
                    },
                    clone: a,
                    headers: {
                      keys: function() {
                        return r;
                      },
                      entries: function() {
                        return o;
                      },
                      get: function(t) {
                        return u[t.toLowerCase()];
                      },
                      has: function(t) {
                        return t.toLowerCase() in u;
                      }
                    }
                  };
                };
              for (var i in (n.open(s.method || 'get', c, !0),
              (n.onload = function() {
                n
                  .getAllResponseHeaders()
                  .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(t, e, n) {
                    r.push((e = e.toLowerCase())),
                      o.push([e, n]),
                      (u[e] = u[e] ? u[e] + ',' + n : n);
                  }),
                  t(a());
              }),
              (n.onerror = e),
              (n.withCredentials = 'include' == s.credentials),
              s.headers))
                n.setRequestHeader(i, s.headers[i]);
              n.send(s.body || null);
            })
          );
        });
    },
    695: function(t, e, n) {
      t.exports = window.fetch || (window.fetch = n(691).default || n(691));
    },
    715: function(t, e, n) {
      'use strict';
      var r = n(687),
        o = n.n(r),
        u = n(695),
        a = n.n(u);
      function i(e) {
        for (var t = 1; t < arguments.length; t++)
          if (t % 2) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            'function' == typeof Object.getOwnPropertySymbols &&
              (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function(t) {
                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
              )),
              r.forEach(function(t) {
                o()(e, t, n[t]);
              });
          } else
            Object.defineProperties(
              e,
              Object.getOwnPropertyDescriptors(arguments[t])
            );
        return e;
      }
      function c(o) {
        return {
          get: function(t, e) {
            return a()(o + t, e).then(function(t) {
              if (!t.ok) throw new Error(t.statusText);
              return t.json();
            });
          },
          post: function(t, e, n) {
            var r = 2 < arguments.length && void 0 !== n ? n : {};
            return a()(
              o + t,
              i({}, r, {
                method: 'POST',
                body: JSON.stringify(e),
                headers: i({ 'Content-Type': 'application/json' }, r.headers)
              })
            ).then(function(t) {
              if (!t.ok) throw new Error(t.statusText);
              return t.json();
            });
          }
        };
      }
      n.d(e, 'a', function() {
        return p;
      });
      var s,
        l,
        f = c('http://localhost:3000'),
        p = {
          todos:
            ((l = f),
            {
              all: function() {
                return l.get('/api/todos');
              },
              create: function(t) {
                return l.post('/api/todos', t);
              }
            }),
          featchCurrencyData:
            ((s = c('')),
            {
              currencyApi: function() {
                return s.get('https://api.exchangeratesapi.io/latest?base=USD');
              }
            })
        };
    }
  }
]);
//# sourceMappingURL=home.e5c18ad2.chunk.js.map
