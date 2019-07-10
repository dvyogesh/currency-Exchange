(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    685: function(e, t, n) {
      'use strict';
      n.r(t);
      function r(e) {
        return {
          input: {},
          textAlign: { textAlign: 'center' },
          listUnstyled: { display: 'block', padding: 0, marginBottom: 10 },
          paper: { padding: 10, maxWidth: '85%', position: 'relative' },
          removeBtn: {
            color: '#F0655D !important',
            cursor: 'pointer',
            margin: 0,
            marginLeft: 5,
            marginTop: 0,
            position: 'absolute',
            top: '35%',
            right: '-50px',
            fontSize: '35px'
          },
          addmoreBtn: { marginTop: 5 },
          currencyListMain: { paddingBottom: 15 }
        };
      }
      var a = n(98),
        o = n.n(a),
        i = n(99),
        l = n.n(i),
        c = n(100),
        s = n.n(c),
        u = n(101),
        d = n.n(u),
        p = n(254),
        m = n.n(p),
        f = n(102),
        g = n.n(f),
        h = n(687),
        b = n.n(h),
        y = n(1),
        v = n.n(y),
        C = n(688),
        E = n(28),
        S = n.n(E),
        x = n(6029),
        w = n(169),
        D = n(696),
        O = n.n(D),
        k = n(2),
        L = n.n(k),
        P = n(30),
        N = n.n(P),
        R = {
          card: {
            display: 'inline-block',
            position: 'relative',
            overflow: 'visible',
            width: '100%',
            minWidth: 380,
            textAlign: 'left',
            margin: '10px 0',
            boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
            borderRadius: '6px',
            color: 'rgba(0, 0, 0, 0.87)',
            background: '#fff'
          },
          cardHeader: {
            margin: '10px 15px 0',
            fontSize: '0.6rem',
            borderRadius: '3px',
            padding: 5,
            paddingLeft: 10,
            paddingRight: 10
          },
          cardTitle: { marginTop: '0', marginBottom: '3px', fontSize: '1.3em' },
          cardSubtitle: {
            marginBottom: '0',
            color: 'rgba(255, 255, 255, 0.62)',
            fontSize: '14px'
          },
          cardActions: { padding: '14px', display: 'block', height: 'auto' },
          cardContent: {
            padding: '10px 10px',
            paddingBottom: '0px !important',
            position: 'relative'
          },
          left: { textAlign: 'left' },
          right: { textAlign: 'right' },
          center: { textAlign: 'center' },
          orangeCardHeader: {
            background: 'linear-gradient(60deg, #ffa726, #fb8c00)'
          },
          greenCardHeader: {
            background: 'linear-gradient(60deg, #66bb6a, #43a047)'
          },
          redCardHeader: {
            background: 'linear-gradient(60deg, #ef5350, #e53935)'
          },
          blueCardHeader: {
            background: 'linear-gradient(60deg, #26c6da, #00acc1)'
          },
          purpleCardHeader: {
            background: 'linear-gradient(60deg, #ab47bc, #8e24aa)'
          },
          roseCardHeader: {
            background: 'linear-gradient(60deg, #ec407a, #d81b60)'
          },
          whiteCardHeader: { background: 'white' }
        };
      function U(e) {
        var t = O()({}, e),
          n = t.classes,
          r = t.headerColor,
          a = t.plainCard,
          o = t.cardTitle,
          i = t.cardSubtitle,
          l = t.content,
          c = t.footer,
          s = t.footerAlign,
          u = N()(b()({}, ' '.concat(n.cardPlain), a)),
          d = N()(b()({}, ' '.concat(n.cardPlainHeader), a)),
          p = ''
            .concat(n.cardActions, '  ')
            .concat(N()(b()({}, n[s], void 0 !== s)));
        return v.a.createElement(
          C.b,
          { className: n.card + u },
          v.a.createElement(C.e, {
            classes: {
              root: ''
                .concat(n.cardHeader, ' ')
                .concat(n[''.concat(r, 'CardHeader')])
                .concat(d),
              title: n.cardTitle,
              subheader: n.cardSubtitle
            },
            title: o,
            subheader: i
          }),
          v.a.createElement(C.d, { className: n.cardContent }, l),
          void 0 !== c ? v.a.createElement(C.c, { className: p }, c) : null
        );
      }
      (U.defaultProps = { headerColor: 'purple' }),
        (U.propTypes = {
          plainCard: L.a.bool,
          classes: L.a.object.isRequired,
          headerColor: L.a.oneOf([
            'orange',
            'green',
            'red',
            'blue',
            'purple',
            'rose',
            'white'
          ]),
          cardTitle: L.a.node,
          cardSubtitle: L.a.node,
          content: L.a.node,
          footer: L.a.node,
          footerAlign: L.a.oneOf(['left', 'center', 'right'])
        });
      var T = S()(R)(U),
        A = {
          currencyList: [],
          countryFullName: {
            CAD: 'Canadian dollar',
            HKD: 'Hong kong dollar',
            ISK: 'Icelandic kcrown',
            PHP: 'Philippines Peso',
            DKK: 'Denmark Krone',
            HUF: 'Hungary Forint',
            CZK: 'Czech Republic Koruna',
            GBP: 'United Kingdom Pound',
            RON: 'Romania Leu',
            SEK: 'Sweden Krona',
            IDR: 'Indonesia Rupiah',
            INR: 'India Rupee',
            BRL: 'Brazil Real',
            RUB: 'Russia Ruble'
          }
        },
        j = n(714),
        I = n.n(j),
        B = n(6075),
        H = n(248),
        q = n.n(H),
        V = (function(e) {
          function t() {
            return o()(this, t), s()(this, d()(t).apply(this, arguments));
          }
          return (
            g()(t, e),
            l()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.classes,
                    n = e.children;
                  return v.a.createElement(q.a, { className: t.root }, n);
                }
              }
            ]),
            t
          );
        })(v.a.Component),
        F = S()(function(e) {
          return {
            root: {
              width: '100%',
              backgroundColor: e.palette.background.paper
            },
            inline: { display: 'inline' }
          };
        })(V);
      var K = S()(r)(function(e) {
          var n = e.classes,
            t = e.currencyList,
            r = e.USDValue,
            a = e.removeCurrencyList;
          return v.a.createElement(
            'ul',
            { className: n.listUnstyled },
            t.map(function(e, t) {
              return v.a.createElement(
                'li',
                { className: n.listUnstyled, key: 'currencyList_'.concat(t) },
                v.a.createElement(
                  F,
                  null,
                  v.a.createElement(
                    'div',
                    { className: n.paper },
                    v.a.createElement(
                      C.f,
                      { container: !0 },
                      v.a.createElement(
                        C.f,
                        { item: !0, xs: 6 },
                        v.a.createElement('p', null, e.shortName)
                      ),
                      v.a.createElement(
                        C.f,
                        { item: !0, xs: 6 },
                        v.a.createElement(
                          'p',
                          null,
                          (e.oneUnitInUSD * r).toFixed(4)
                        )
                      )
                    ),
                    v.a.createElement(
                      'p',
                      null,
                      e.shortName,
                      ' - ',
                      v.a.createElement('i', null, e.fullName)
                    ),
                    v.a.createElement(
                      'p',
                      null,
                      '1 USD =',
                      ' ',
                      v.a.createElement(
                        'i',
                        null,
                        e.shortName,
                        ' ',
                        e.oneUnitInUSD.toFixed(4)
                      )
                    ),
                    v.a.createElement(B.a, {
                      className: n.removeBtn,
                      onClick: function() {
                        return a(t);
                      }
                    })
                  )
                )
              );
            })
          );
        }),
        M = {
          inputLabelWidth: { '&formControl': { width: '100%' } },
          formControl: {
            verticalAlign: 'baseline !important',
            background: 'rgba(230,231,232,0.38)',
            paddingTop: 2,
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            lineHeight: 1.7,
            fontSize: 14
          },
          label: { paddingLeft: 10, fontSize: 12 },
          inputProps: { padding: '0 10px' }
        },
        z = (function(e) {
          function n(e) {
            var t;
            return (
              o()(this, n),
              ((t = s()(this, d()(n).call(this, e))).state = {}),
              t
            );
          }
          return (
            g()(n, e),
            l()(n, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    r = e.classes,
                    t = e.value,
                    n = e.id,
                    a = e.name,
                    o = e.menuOptions,
                    i = e.handleOnChange,
                    l = e.inputLabel,
                    c = e.disabled;
                  return v.a.createElement(
                    'div',
                    { className: r.formControl },
                    v.a.createElement(
                      C.g,
                      { classes: { root: r.label }, htmlFor: n },
                      l
                    ),
                    v.a.createElement(
                      C.i,
                      {
                        classes: { select: r.select },
                        MenuProps: { className: r.selectMenu },
                        inputProps: {
                          name: a,
                          id: n,
                          classes: { root: r.inputProps }
                        },
                        value: t,
                        disabled: c,
                        onChange: i,
                        fullWidth: !0
                      },
                      o &&
                        o.map(function(e) {
                          var t = void 0 !== e.name ? e.name : e,
                            n = void 0 !== e.value ? e.value : e;
                          return v.a.createElement(
                            C.h,
                            {
                              classes: {
                                root: r.selectMenuItem,
                                selected: r.selectMenuItemSelected
                              },
                              value: n,
                              key: t
                            },
                            t
                          );
                        })
                    )
                  );
                }
              }
            ]),
            n
          );
        })(v.a.Component);
      b()(z, 'propTypes', {
        classes: k.object.isRequired,
        value: k.string.isRequired,
        id: k.string.isRequired,
        name: k.string.isRequired,
        inputLabel: k.string.isRequired,
        menuOptions: k.array.isRequired,
        handleOnChange: k.func.isRequired
      }),
        (z.propTypes = { disabled: L.a.bool }),
        (z.defaultProps = { disabled: !1 });
      var W = S()(M)(z);
      function J(e) {
        return {
          textFieldInputId: { marginTop: 'auto', paddingTop: 2 },
          label: b()(
            { paddingLeft: 10, fontSize: 14, left: 5 },
            e.breakpoints.down('xs'),
            { fontSize: 15 }
          ),
          focusedLabel: { paddingLeft: 10, paddingTop: 10 }
        };
      }
      var _ = S()(r)(function(e) {
          var t = e.classes,
            n = e.dropDownValue,
            r = e.handleAddCurrency,
            a = e.currencyPrices,
            o = e.handleChange;
          return v.a.createElement(
            C.f,
            { container: !0 },
            v.a.createElement(
              C.f,
              { item: !0, xs: 8 },
              v.a.createElement(W, {
                id: 'inputIds',
                name: 'onBoardingComponent',
                inputLabel: 'Select Cuurency To Add',
                value: n,
                handleOnChange: o('dropDownValue'),
                menuOptions: Object.keys(a)
              })
            ),
            v.a.createElement(
              C.f,
              { item: !0, xs: 4, className: t.textAlign },
              v.a.createElement(
                C.a,
                {
                  className: t.addmoreBtn,
                  id: 'addmore_btn_',
                  variant: 'outlined',
                  color: 'primary',
                  onClick: function() {
                    return r();
                  }
                },
                '+ Add'
              )
            )
          );
        }),
        G = (function(e) {
          function t() {
            return o()(this, t), s()(this, d()(t).apply(this, arguments));
          }
          return (
            g()(t, e),
            l()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.classes,
                    n = e.value,
                    r = e.id,
                    a = e.label,
                    o = e.onChange,
                    i = e.placeholder,
                    l = e.type,
                    c = void 0 === l ? 'text' : l,
                    s = e.onBlur,
                    u = e.disabled,
                    d = e.required,
                    p = e.error,
                    m = e.errorMsg,
                    f = e.multiline,
                    g = void 0 !== f && f,
                    h = e.rows,
                    b = void 0 === h ? 3 : h;
                  return v.a.createElement(
                    y.Fragment,
                    null,
                    v.a.createElement(
                      C.j,
                      O()(
                        {
                          className: t.textFieldInputId,
                          id: r,
                          name: r,
                          value: n,
                          type: c,
                          InputLabelProps: {
                            classes: { root: t.label, shrink: t.focusedLabel }
                          },
                          InputProps: { classes: { root: t.label } },
                          fullWidth: !0,
                          label: a,
                          placeholder: i,
                          onChange: o,
                          onBlur: s,
                          disabled: u,
                          required: d,
                          error: p
                        },
                        g ? { multiline: !0, rows: b } : {}
                      )
                    ),
                    p &&
                      v.a.createElement('span', { className: t.errorText }, m)
                  );
                }
              }
            ]),
            t
          );
        })(y.Component);
      b()(G, 'propTypes', {
        classes: k.object.isRequired,
        id: k.string.isRequired,
        label: k.string.isRequired,
        onChange: k.func.isRequired,
        placeholder: k.string,
        type: k.string,
        onBlur: k.func,
        disabled: k.bool,
        required: k.bool,
        error: k.bool,
        errorMsg: k.string,
        multiline: k.bool,
        rows: k.number
      }),
        b()(G, 'defaultProps', {
          placeholder: '',
          type: 'text',
          onBlur: function() {},
          disabled: !1,
          required: !1,
          error: !1,
          errorMsg: 'This field is mandatory'
        });
      var Z = S()(J)(G);
      var Q = S()(r)(function(e) {
          var t = e.classes,
            n = e.USDValue,
            r = e.handleChange;
          return v.a.createElement(
            v.a.Fragment,
            null,
            v.a.createElement(
              'p',
              null,
              'USD - ',
              v.a.createElement('i', null, 'United States Doller')
            ),
            v.a.createElement(
              C.f,
              { container: !0 },
              v.a.createElement(
                C.f,
                { item: !0, xs: 6 },
                v.a.createElement(
                  'h3',
                  null,
                  v.a.createElement('b', null, 'USD')
                )
              ),
              v.a.createElement(
                C.f,
                { item: !0, xs: 6 },
                v.a.createElement(Z, {
                  className: t.input,
                  type: 'number',
                  id: 'inputIds',
                  value: n,
                  label: 'Key',
                  onChange: r('USDValue')
                })
              )
            )
          );
        }),
        X = n(715);
      var Y = (function(e) {
        function t(e) {
          var a;
          return (
            o()(this, t),
            (a = s()(this, d()(t).call(this, e))),
            b()(m()(a), 'feetchCurrencyData', function() {
              X.a.featchCurrencyData
                .currencyApi()
                .then(function(e) {
                  a.setState({ currencyPrices: e.rates }), a.pushOneCuuency();
                })
                .catch(function(e) {
                  a.setState({ loading: !1 }), w.b.error(''.concat(e));
                });
            }),
            b()(m()(a), 'pushOneCuuency', function() {
              var e = a.state,
                t = e.currencyList,
                n = e.currencyPrices,
                r = e.dropDownValue;
              t.push({ fullName: r, shortName: r, oneUnitInUSD: n[r] }),
                a.setState({ currencyList: t });
            }),
            b()(m()(a), 'handleChange', function(t) {
              return function(e) {
                a.setState(b()({}, t, e.target.value));
              };
            }),
            b()(m()(a), 'handleModalClose', function() {
              a.setState({ modalOpen: !1 });
            }),
            b()(m()(a), 'handleAddCurrency', function() {
              var e = a.state,
                t = e.currencyList,
                n = e.currencyPrices,
                r = e.dropDownValue;
              r && a.checkAddedCurrcy()
                ? (t.push(
                    (function(t) {
                      for (var e = 1; e < arguments.length; e++)
                        if (e % 2) {
                          var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                          'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                              Object.getOwnPropertySymbols(n).filter(function(
                                e
                              ) {
                                return Object.getOwnPropertyDescriptor(n, e)
                                  .enumerable;
                              })
                            )),
                            r.forEach(function(e) {
                              b()(t, e, n[e]);
                            });
                        } else
                          Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(arguments[e])
                          );
                      return t;
                    })({}, t, {
                      fullName: A.countryFullName[r] || 'One Nation Currency',
                      shortName: r,
                      oneUnitInUSD: n[r]
                    })
                  ),
                  a.setState({ currencyList: t }))
                : w.b.error('select proper Cuurency');
            }),
            b()(m()(a), 'removeCurrencyList', function(e) {
              var t = a.state.currencyList;
              t.splice(e, 1), a.setState({ currencyList: t });
            }),
            b()(m()(a), 'checkAddedCurrcy', function() {
              var e = a.state,
                t = e.currencyList,
                n = e.dropDownValue;
              return (
                !Object(x.find)(t, { shortName: n }) ||
                (w.b.error('currency exist'), !1)
              );
            }),
            (a.state = {
              currencyList: Object(x.cloneDeep)(A.currencyList),
              dropDownValue: 'INR',
              USDValue: 1,
              currencyPrices: {}
            }),
            a
          );
        }
        return (
          g()(t, e),
          l()(t, [
            {
              key: 'componentDidMount',
              value: function() {
                this.feetchCurrencyData();
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this.state,
                  t = e.dropDownValue,
                  n = e.USDValue,
                  r = e.currencyList,
                  a = e.currencyPrices,
                  o = this.props.classes;
                return v.a.createElement(
                  C.f,
                  { container: !0 },
                  v.a.createElement(
                    C.f,
                    { item: !0, xs: 12, md: 6, style: { margin: '0 auto' } },
                    v.a.createElement(T, {
                      headerColor: 'white',
                      cardTitle: v.a.createElement(Q, {
                        USDValue: n,
                        handleChange: this.handleChange
                      }),
                      content: v.a.createElement(
                        'div',
                        { className: o.currencyListMain },
                        v.a.createElement(I.a, null),
                        v.a.createElement(K, {
                          USDValue: n,
                          currencyList: r,
                          removeCurrencyList: this.removeCurrencyList
                        })
                      ),
                      footer: v.a.createElement(_, {
                        dropDownValue: t,
                        handleAddCurrency: this.handleAddCurrency,
                        currencyPrices: a,
                        handleChange: this.handleChange
                      })
                    })
                  )
                );
              }
            }
          ]),
          t
        );
      })(v.a.Component);
      t.default = S()(r)(Y);
    },
    715: function(e, t, n) {
      'use strict';
      var r = n(687),
        a = n.n(r),
        o = n(695),
        i = n.n(o);
      function l(t) {
        for (var e = 1; e < arguments.length; e++)
          if (e % 2) {
            var n = null != arguments[e] ? arguments[e] : {},
              r = Object.keys(n);
            'function' == typeof Object.getOwnPropertySymbols &&
              (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
              )),
              r.forEach(function(e) {
                a()(t, e, n[e]);
              });
          } else
            Object.defineProperties(
              t,
              Object.getOwnPropertyDescriptors(arguments[e])
            );
        return t;
      }
      function c(a) {
        return {
          get: function(e, t) {
            return i()(a + e, t).then(function(e) {
              if (!e.ok) throw new Error(e.statusText);
              return e.json();
            });
          },
          post: function(e, t, n) {
            var r = 2 < arguments.length && void 0 !== n ? n : {};
            return i()(
              a + e,
              l({}, r, {
                method: 'POST',
                body: JSON.stringify(t),
                headers: l({ 'Content-Type': 'application/json' }, r.headers)
              })
            ).then(function(e) {
              if (!e.ok) throw new Error(e.statusText);
              return e.json();
            });
          }
        };
      }
      n.d(t, 'a', function() {
        return p;
      });
      var s,
        u,
        d = c('http://localhost:3000'),
        p = {
          todos:
            ((u = d),
            {
              all: function() {
                return u.get('/api/todos');
              },
              create: function(e) {
                return u.post('/api/todos', e);
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
//# sourceMappingURL=CurrencyExchange.fbebab65.chunk.js.map
