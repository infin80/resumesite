!function(t, e, i) {
    t.fn.jScrollPane = function(e) {
        function n(e, n) {
            function o(n) {
                var r, h, l, c, p, b, f = !1, g = !1;
                if (R = n, X === i) p = e.scrollTop(), b = e.scrollLeft(), e.css({
                    overflow: "hidden",
                    padding: 0
                }), N = e.innerWidth() + wt, Y = e.innerHeight(), e.width(N), X = t('<div class="jspPane" />').css("padding", vt).append(e.children()), 
                q = t('<div class="jspContainer" />').css({
                    width: N + "px",
                    height: Y + "px"
                }).append(X).appendTo(e); else {
                    if (e.css("width", ""), f = R.stickToBottom && k(), g = R.stickToRight && j(), c = e.innerWidth() + wt != N || e.outerHeight() != Y, 
                    c && (N = e.innerWidth() + wt, Y = e.innerHeight(), q.css({
                        width: N + "px",
                        height: Y + "px"
                    })), !c && yt == G && X.outerHeight() == Q) return void e.width(N);
                    yt = G, X.css("width", ""), e.width(N), q.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end();
                }
                X.css("overflow", "auto"), G = n.contentWidth ? n.contentWidth : X[0].scrollWidth, 
                Q = X[0].scrollHeight, X.css("overflow", ""), V = G / N, U = Q / Y, K = U > 1, $ = V > 1, 
                $ || K ? (e.addClass("jspScrollable"), r = R.maintainPosition && (tt || nt), r && (h = I(), 
                l = x()), s(), a(), u(), r && (_(g ? G - N : h, !1), S(f ? Q - Y : l, !1)), A(), 
                H(), F(), R.enableKeyboardNavigation && W(), R.clickOnTrack && d(), P(), R.hijackInternalLinks && E()) : (e.removeClass("jspScrollable"), 
                X.css({
                    top: 0,
                    width: q.width() - wt
                }), z(), D(), B(), m(), M()), R.autoReinitialise && !gt ? gt = setInterval(function() {
                    o(R);
                }, R.autoReinitialiseDelay) : !R.autoReinitialise && gt && clearInterval(gt), p && e.scrollTop(0) && S(p, !1), 
                b && e.scrollLeft(0) && _(b, !1), e.trigger("jsp-initialised", [ $ || K ]);
            }
            function s() {
                K && (q.append(t('<div class="jspVerticalBar" />').append(t('<div class="jspCap jspCapTop" />'), t('<div class="jspTrack" />').append(t('<div class="jspDrag" />').append(t('<div class="jspDragTop" />'), t('<div class="jspDragBottom" />'))), t('<div class="jspCap jspCapBottom" />'))), 
                ot = q.find(">.jspVerticalBar"), st = ot.find(">.jspTrack"), J = st.find(">.jspDrag"), 
                R.showArrows && (ut = t('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", c(0, -1)).bind("click.jsp", O), 
                lt = t('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", c(0, 1)).bind("click.jsp", O), 
                R.arrowScrollOnHover && (ut.bind("mouseover.jsp", c(0, -1, ut)), lt.bind("mouseover.jsp", c(0, 1, lt))), 
                l(st, R.verticalArrowPositions, ut, lt)), at = Y, q.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
                    at -= t(this).outerHeight();
                }), J.hover(function() {
                    J.addClass("jspHover");
                }, function() {
                    J.removeClass("jspHover");
                }).bind("mousedown.jsp", function(e) {
                    t("html").bind("dragstart.jsp selectstart.jsp", O), J.addClass("jspActive");
                    var i = e.pageY - J.position().top;
                    return t("html").bind("mousemove.jsp", function(t) {
                        f(t.pageY - i, !1);
                    }).bind("mouseup.jsp mouseleave.jsp", b), !1;
                }), r());
            }
            function r() {
                st.height(at + "px"), tt = 0, rt = R.verticalGutter + st.outerWidth(), X.width(N - rt - wt);
                try {
                    0 === ot.position().left && X.css("margin-left", rt + "px");
                } catch (t) {}
            }
            function a() {
                $ && (q.append(t('<div class="jspHorizontalBar" />').append(t('<div class="jspCap jspCapLeft" />'), t('<div class="jspTrack" />').append(t('<div class="jspDrag" />').append(t('<div class="jspDragLeft" />'), t('<div class="jspDragRight" />'))), t('<div class="jspCap jspCapRight" />'))), 
                ct = q.find(">.jspHorizontalBar"), pt = ct.find(">.jspTrack"), et = pt.find(">.jspDrag"), 
                R.showArrows && (bt = t('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", c(-1, 0)).bind("click.jsp", O), 
                ft = t('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", c(1, 0)).bind("click.jsp", O), 
                R.arrowScrollOnHover && (bt.bind("mouseover.jsp", c(-1, 0, bt)), ft.bind("mouseover.jsp", c(1, 0, ft))), 
                l(pt, R.horizontalArrowPositions, bt, ft)), et.hover(function() {
                    et.addClass("jspHover");
                }, function() {
                    et.removeClass("jspHover");
                }).bind("mousedown.jsp", function(e) {
                    t("html").bind("dragstart.jsp selectstart.jsp", O), et.addClass("jspActive");
                    var i = e.pageX - et.position().left;
                    return t("html").bind("mousemove.jsp", function(t) {
                        v(t.pageX - i, !1);
                    }).bind("mouseup.jsp mouseleave.jsp", b), !1;
                }), dt = q.innerWidth(), h());
            }
            function h() {
                q.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
                    dt -= t(this).outerWidth();
                }), pt.width(dt + "px"), nt = 0;
            }
            function u() {
                if ($ && K) {
                    var e = pt.outerHeight(), i = st.outerWidth();
                    at -= e, t(ct).find(">.jspCap:visible,>.jspArrow").each(function() {
                        dt += t(this).outerWidth();
                    }), dt -= i, Y -= i, N -= e, pt.parent().append(t('<div class="jspCorner" />').css("width", e + "px")), 
                    r(), h();
                }
                $ && X.width(q.outerWidth() - wt + "px"), Q = X.outerHeight(), U = Q / Y, $ && (mt = Math.ceil(1 / V * dt), 
                mt > R.horizontalDragMaxWidth ? mt = R.horizontalDragMaxWidth : mt < R.horizontalDragMinWidth && (mt = R.horizontalDragMinWidth), 
                et.width(mt + "px"), it = dt - mt, w(nt)), K && (ht = Math.ceil(1 / U * at), ht > R.verticalDragMaxHeight ? ht = R.verticalDragMaxHeight : ht < R.verticalDragMinHeight && (ht = R.verticalDragMinHeight), 
                J.height(ht + "px"), Z = at - ht, g(tt));
            }
            function l(t, e, i, n) {
                var o, s = "before", r = "after";
                "os" == e && (e = /Mac/.test(navigator.platform) ? "after" : "split"), e == s ? r = e : e == r && (s = e, 
                o = i, i = n, n = o), t[s](i)[r](n);
            }
            function c(t, e, i) {
                return function() {
                    return p(t, e, this, i), this.blur(), !1;
                };
            }
            function p(e, i, n, o) {
                n = t(n).addClass("jspActive");
                var s, r, a = !0, h = function() {
                    0 !== e && Ct.scrollByX(e * R.arrowButtonSpeed), 0 !== i && Ct.scrollByY(i * R.arrowButtonSpeed), 
                    r = setTimeout(h, a ? R.initialDelay : R.arrowRepeatFreq), a = !1;
                };
                h(), s = o ? "mouseout.jsp" : "mouseup.jsp", o = o || t("html"), o.bind(s, function() {
                    n.removeClass("jspActive"), r && clearTimeout(r), r = null, o.unbind(s);
                });
            }
            function d() {
                m(), K && st.bind("mousedown.jsp", function(e) {
                    if (e.originalTarget === i || e.originalTarget == e.currentTarget) {
                        var n, o = t(this), s = o.offset(), r = e.pageY - s.top - tt, a = !0, h = function() {
                            var t = o.offset(), i = e.pageY - t.top - ht / 2, s = Y * R.scrollPagePercent, l = Z * s / (Q - Y);
                            if (0 > r) tt - l > i ? Ct.scrollByY(-s) : f(i); else {
                                if (!(r > 0)) return void u();
                                i > tt + l ? Ct.scrollByY(s) : f(i);
                            }
                            n = setTimeout(h, a ? R.initialDelay : R.trackClickRepeatFreq), a = !1;
                        }, u = function() {
                            n && clearTimeout(n), n = null, t(document).unbind("mouseup.jsp", u);
                        };
                        return h(), t(document).bind("mouseup.jsp", u), !1;
                    }
                }), $ && pt.bind("mousedown.jsp", function(e) {
                    if (e.originalTarget === i || e.originalTarget == e.currentTarget) {
                        var n, o = t(this), s = o.offset(), r = e.pageX - s.left - nt, a = !0, h = function() {
                            var t = o.offset(), i = e.pageX - t.left - mt / 2, s = N * R.scrollPagePercent, l = it * s / (G - N);
                            if (0 > r) nt - l > i ? Ct.scrollByX(-s) : v(i); else {
                                if (!(r > 0)) return void u();
                                i > nt + l ? Ct.scrollByX(s) : v(i);
                            }
                            n = setTimeout(h, a ? R.initialDelay : R.trackClickRepeatFreq), a = !1;
                        }, u = function() {
                            n && clearTimeout(n), n = null, t(document).unbind("mouseup.jsp", u);
                        };
                        return h(), t(document).bind("mouseup.jsp", u), !1;
                    }
                });
            }
            function m() {
                pt && pt.unbind("mousedown.jsp"), st && st.unbind("mousedown.jsp");
            }
            function b() {
                t("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), 
                J && J.removeClass("jspActive"), et && et.removeClass("jspActive");
            }
            function f(t, e) {
                K && (0 > t ? t = 0 : t > Z && (t = Z), e === i && (e = R.animateScroll), e ? Ct.animate(J, "top", t, g) : (J.css("top", t), 
                g(t)));
            }
            function g(t) {
                t === i && (t = J.position().top), q.scrollTop(0), tt = t;
                var n = 0 === tt, o = tt == Z, s = t / Z, r = -s * (Q - Y);
                (St != n || Tt != o) && (St = n, Tt = o, e.trigger("jsp-arrow-change", [ St, Tt, _t, It ])), 
                y(n, o), X.css("top", r), e.trigger("jsp-scroll-y", [ -r, n, o ]).trigger("scroll");
            }
            function v(t, e) {
                $ && (0 > t ? t = 0 : t > it && (t = it), e === i && (e = R.animateScroll), e ? Ct.animate(et, "left", t, w) : (et.css("left", t), 
                w(t)));
            }
            function w(t) {
                t === i && (t = et.position().left), q.scrollTop(0), nt = t;
                var n = 0 === nt, o = nt == it, s = t / it, r = -s * (G - N);
                (_t != n || It != o) && (_t = n, It = o, e.trigger("jsp-arrow-change", [ St, Tt, _t, It ])), 
                C(n, o), X.css("left", r), e.trigger("jsp-scroll-x", [ -r, n, o ]).trigger("scroll");
            }
            function y(t, e) {
                R.showArrows && (ut[t ? "addClass" : "removeClass"]("jspDisabled"), lt[e ? "addClass" : "removeClass"]("jspDisabled"));
            }
            function C(t, e) {
                R.showArrows && (bt[t ? "addClass" : "removeClass"]("jspDisabled"), ft[e ? "addClass" : "removeClass"]("jspDisabled"));
            }
            function S(t, e) {
                var i = t / (Q - Y);
                f(i * Z, e);
            }
            function _(t, e) {
                var i = t / (G - N);
                v(i * it, e);
            }
            function T(e, i, n) {
                var o, s, r, a, h, u, l, c, p, d = 0, m = 0;
                try {
                    o = t(e);
                } catch (b) {
                    return;
                }
                for (s = o.outerHeight(), r = o.outerWidth(), q.scrollTop(0), q.scrollLeft(0); !o.is(".jspPane"); ) if (d += o.position().top, 
                m += o.position().left, o = o.offsetParent(), /^body|html$/i.test(o[0].nodeName)) return;
                a = x(), u = a + Y, a > d || i ? c = d - R.verticalGutter : d + s > u && (c = d - Y + s + R.verticalGutter), 
                c && S(c, n), h = I(), l = h + N, h > m || i ? p = m - R.horizontalGutter : m + r > l && (p = m - N + r + R.horizontalGutter), 
                p && _(p, n);
            }
            function I() {
                return -X.position().left;
            }
            function x() {
                return -X.position().top;
            }
            function k() {
                var t = Q - Y;
                return t > 20 && t - x() < 10;
            }
            function j() {
                var t = G - N;
                return t > 20 && t - I() < 10;
            }
            function H() {
                q.unbind(kt).bind(kt, function(t, e, i, n) {
                    var o = nt, s = tt;
                    return Ct.scrollBy(i * R.mouseWheelSpeed, -n * R.mouseWheelSpeed, !1), o == nt && s == tt;
                });
            }
            function z() {
                q.unbind(kt);
            }
            function O() {
                return !1;
            }
            function A() {
                X.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function(t) {
                    T(t.target, !1);
                });
            }
            function D() {
                X.find(":input,a").unbind("focus.jsp");
            }
            function W() {
                function i() {
                    var t = nt, e = tt;
                    switch (n) {
                      case 40:
                        Ct.scrollByY(R.keyboardSpeed, !1);
                        break;

                      case 38:
                        Ct.scrollByY(-R.keyboardSpeed, !1);
                        break;

                      case 34:
                      case 32:
                        Ct.scrollByY(Y * R.scrollPagePercent, !1);
                        break;

                      case 33:
                        Ct.scrollByY(-Y * R.scrollPagePercent, !1);
                        break;

                      case 39:
                        Ct.scrollByX(R.keyboardSpeed, !1);
                        break;

                      case 37:
                        Ct.scrollByX(-R.keyboardSpeed, !1);
                    }
                    return o = t != nt || e != tt;
                }
                var n, o, s = [];
                $ && s.push(ct[0]), K && s.push(ot[0]), X.focus(function() {
                    e.focus();
                }), e.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function(e) {
                    if (e.target === this || s.length && t(e.target).closest(s).length) {
                        var r = nt, a = tt;
                        switch (e.keyCode) {
                          case 40:
                          case 38:
                          case 34:
                          case 32:
                          case 33:
                          case 39:
                          case 37:
                            n = e.keyCode, i();
                            break;

                          case 35:
                            S(Q - Y), n = null;
                            break;

                          case 36:
                            S(0), n = null;
                        }
                        return o = e.keyCode == n && r != nt || a != tt, !o;
                    }
                }).bind("keypress.jsp", function(t) {
                    return t.keyCode == n && i(), !o;
                }), R.hideFocus ? (e.css("outline", "none"), "hideFocus" in q[0] && e.attr("hideFocus", !0)) : (e.css("outline", ""), 
                "hideFocus" in q[0] && e.attr("hideFocus", !1));
            }
            function B() {
                e.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp");
            }
            function P() {
                if (location.hash && location.hash.length > 1) {
                    var e, i, n = escape(location.hash);
                    try {
                        e = t(n);
                    } catch (o) {
                        return;
                    }
                    e.length && X.find(n) && (0 === q.scrollTop() ? i = setInterval(function() {
                        q.scrollTop() > 0 && (T(n, !0), t(document).scrollTop(q.position().top), clearInterval(i));
                    }, 50) : (T(n, !0), t(document).scrollTop(q.position().top)));
                }
            }
            function M() {
                t("a.jspHijack").unbind("click.jsp-hijack").removeClass("jspHijack");
            }
            function E() {
                M(), t("a[href^=#]").addClass("jspHijack").bind("click.jsp-hijack", function() {
                    var t, e = this.href.split("#");
                    return e.length > 1 && (t = e[1], t.length > 0 && X.find("#" + t).length > 0) ? (T("#" + t, !0), 
                    !1) : void 0;
                });
            }
            function F() {
                var t, e, i, n, o, s = !1;
                q.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(r) {
                    var a = r.originalEvent.touches[0];
                    t = I(), e = x(), i = a.pageX, n = a.pageY, o = !1, s = !0;
                }).bind("touchmove.jsp", function(r) {
                    if (s) {
                        var a = r.originalEvent.touches[0], h = nt, u = tt;
                        return Ct.scrollTo(t + i - a.pageX, e + n - a.pageY), o = o || Math.abs(i - a.pageX) > 5 || Math.abs(n - a.pageY) > 5, 
                        h == nt && u == tt;
                    }
                }).bind("touchend.jsp", function(t) {
                    s = !1;
                }).bind("click.jsp-touchclick", function(t) {
                    return o ? (o = !1, !1) : void 0;
                });
            }
            function L() {
                var t = x(), i = I();
                e.removeClass("jspScrollable").unbind(".jsp"), e.replaceWith(xt.append(X.children())), 
                xt.scrollTop(t), xt.scrollLeft(i);
            }
            var R, X, N, Y, q, G, Q, V, U, K, $, J, Z, tt, et, it, nt, ot, st, rt, at, ht, ut, lt, ct, pt, dt, mt, bt, ft, gt, vt, wt, yt, Ct = this, St = !0, _t = !0, Tt = !1, It = !1, xt = e.clone(!1, !1).empty(), kt = t.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            vt = e.css("paddingTop") + " " + e.css("paddingRight") + " " + e.css("paddingBottom") + " " + e.css("paddingLeft"), 
            wt = (parseInt(e.css("paddingLeft"), 10) || 0) + (parseInt(e.css("paddingRight"), 10) || 0), 
            t.extend(Ct, {
                reinitialise: function(e) {
                    e = t.extend({}, R, e), o(e);
                },
                scrollToElement: function(t, e, i) {
                    T(t, e, i);
                },
                scrollTo: function(t, e, i) {
                    _(t, i), S(e, i);
                },
                scrollToX: function(t, e) {
                    _(t, e);
                },
                scrollToY: function(t, e) {
                    S(t, e);
                },
                scrollToPercentX: function(t, e) {
                    _(t * (G - N), e);
                },
                scrollToPercentY: function(t, e) {
                    S(t * (Q - Y), e);
                },
                scrollBy: function(t, e, i) {
                    Ct.scrollByX(t, i), Ct.scrollByY(e, i);
                },
                scrollByX: function(t, e) {
                    var i = I() + Math[0 > t ? "floor" : "ceil"](t), n = i / (G - N);
                    v(n * it, e);
                },
                scrollByY: function(t, e) {
                    var i = x() + Math[0 > t ? "floor" : "ceil"](t), n = i / (Q - Y);
                    f(n * Z, e);
                },
                positionDragX: function(t, e) {
                    v(t, e);
                },
                positionDragY: function(t, e) {
                    f(t, e);
                },
                animate: function(t, e, i, n) {
                    var o = {};
                    o[e] = i, t.animate(o, {
                        duration: R.animateDuration,
                        easing: R.animateEase,
                        queue: !1,
                        step: n
                    });
                },
                getContentPositionX: function() {
                    return I();
                },
                getContentPositionY: function() {
                    return x();
                },
                getContentWidth: function() {
                    return G;
                },
                getContentHeight: function() {
                    return Q;
                },
                getPercentScrolledX: function() {
                    return I() / (G - N);
                },
                getPercentScrolledY: function() {
                    return x() / (Q - Y);
                },
                getIsScrollableH: function() {
                    return $;
                },
                getIsScrollableV: function() {
                    return K;
                },
                getContentPane: function() {
                    return X;
                },
                scrollToBottom: function(t) {
                    f(Z, t);
                },
                hijackInternalLinks: function() {
                    E();
                },
                destroy: function() {
                    L();
                }
            }), o(n);
        }
        return e = t.extend({}, t.fn.jScrollPane.defaults, e), t.each([ "mouseWheelSpeed", "arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed" ], function() {
            e[this] = e[this] || e.speed;
        }), this.each(function() {
            var i = t(this), o = i.data("jsp");
            o ? o.reinitialise(e) : (o = new n(i, e), i.data("jsp", o));
        });
    }, t.fn.jScrollPane.defaults = {
        showArrows: !1,
        maintainPosition: !0,
        stickToBottom: !1,
        stickToRight: !1,
        clickOnTrack: !0,
        autoReinitialise: !1,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        contentWidth: i,
        animateScroll: !1,
        animateDuration: 300,
        animateEase: "linear",
        hijackInternalLinks: !1,
        verticalGutter: 4,
        horizontalGutter: 4,
        mouseWheelSpeed: 0,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: !1,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: "split",
        horizontalArrowPositions: "split",
        enableKeyboardNavigation: !0,
        hideFocus: !1,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: .8
    };
}(jQuery, this), function(t) {
    function e(e) {
        var i = e || window.event, n = [].slice.call(arguments, 1), o = 0, s = 0, r = 0;
        return e = t.event.fix(i), e.type = "mousewheel", i.wheelDelta && (o = i.wheelDelta / 120), 
        i.detail && (o = -i.detail / 3), r = o, void 0 !== i.axis && i.axis === i.HORIZONTAL_AXIS && (r = 0, 
        s = -1 * o), void 0 !== i.wheelDeltaY && (r = i.wheelDeltaY / 120), void 0 !== i.wheelDeltaX && (s = -1 * i.wheelDeltaX / 120), 
        n.unshift(e, o, s, r), (t.event.dispatch || t.event.handle).apply(this, n);
    }
    var i = [ "DOMMouseScroll", "mousewheel" ];
    if (t.event.fixHooks) for (var n = i.length; n; ) t.event.fixHooks[i[--n]] = t.event.mouseHooks;
    t.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) for (var t = i.length; t; ) this.addEventListener(i[--t], e, !1); else this.onmousewheel = e;
        },
        teardown: function() {
            if (this.removeEventListener) for (var t = i.length; t; ) this.removeEventListener(i[--t], e, !1); else this.onmousewheel = null;
        }
    }, t.fn.extend({
        mousewheel: function(t) {
            return t ? this.bind("mousewheel", t) : this.trigger("mousewheel");
        },
        unmousewheel: function(t) {
            return this.unbind("mousewheel", t);
        }
    });
}(jQuery), function(t) {
    function e(e, i) {
        function n() {
            var t, e, i, n, s, r = !1;
            o.thumbInnerContainer.unbind("touchstart.ap touchmove.ap touchend.ap click.ap-touchclick").bind("touchstart.ap", function(a) {
                return o._componentInited ? o.touchOn ? (a = a.originalEvent.touches[0], t = o.thumbInnerContainer.position().left, 
                e = o.thumbInnerContainer.position().top, i = a.pageX, n = a.pageY, s = !1, void (r = !0)) : !0 : !1;
            }).bind("touchmove.ap", function(a) {
                if (r) {
                    a = a.originalEvent.touches[0];
                    var h;
                    return "horizontal" == o._thumbOrientation ? (h = t - i + a.pageX, h > o._thumbBackwardSize ? h = o._thumbBackwardSize : h < o._getComponentSize("w") - o.thumbInnerContainerSize - o._thumbForwardSize && (h = o._getComponentSize("w") - o.thumbInnerContainerSize - o._thumbForwardSize), 
                    o.thumbInnerContainer.css("left", h + "px")) : (h = e - n + a.pageY, h > o._thumbBackwardSize ? h = o._thumbBackwardSize : h < o._getComponentSize("h") - o.thumbInnerContainerSize - o._thumbForwardSize && (h = o._getComponentSize("h") - o.thumbInnerContainerSize - o._thumbForwardSize), 
                    o.thumbInnerContainer.css("top", h + "px")), s = s || 5 < Math.abs(i - a.pageX) || 5 < Math.abs(n - a.pageY), 
                    !1;
                }
            }).bind("touchend.ap", function(t) {
                r = !1;
            }).bind("click.ap-touchclick", function(t) {
                return s ? s = !1 : void 0;
            });
        }
        this._componentInited = !1;
        var o = this;
        this.settings = t.extend({}, t.fn.thumbGallery.defaults, i), this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent), 
        o.ic_thumb_forward = "data/icons/thumb_forward.png", o.ic_thumb_forward_on = "data/icons/thumb_forward_on.png", 
        o.ic_thumb_backward = "data/icons/thumb_backward.png", o.ic_thumb_backward_on = "data/icons/thumb_backward_on.png", 
        o.ic_thumb_forward_v = "data/icons/thumb_forward_v.png", o.ic_thumb_forward_v_on = "data/icons/thumb_forward_v_on.png", 
        o.ic_thumb_backward_v = "data/icons/thumb_backward_v.png", o.ic_thumb_backward_v_on = "data/icons/thumb_backward_v_on.png", 
        this._upEvent = this._moveEvent = this._downEvent = "", this.hasTouch, this.touchOn = !0, 
        "ontouchstart" in window ? (this.hasTouch = !0, this._downEvent = "touchstart.ap", 
        this._moveEvent = "touchmove.ap", this._upEvent = "touchend.ap") : (this.hasTouch = !1, 
        this._downEvent = "mousedown.ap", this._moveEvent = "mousemove.ap", this._upEvent = "mouseup.ap"), 
        this._body = t("body"), this._window = t(window), this._doc = t(document), this._windowResizeTimeout = 150, 
        this._windowResizeTimeoutID, this._thumbHolderArr = [], this._thumbsScrollValue = 100, 
        this.thumbTransitionOn = !1, this.boxWidth, this.boxHeight, this.thumbContainerWidth, 
        this.thumbContainerHeight, this.thumbContainerLeft, this.thumbContainerTop, this.thumbInnerContainerSize = 0, 
        this.gridArr = [], this.rows, this.columns, this.allColumns, this.allRows, this.lastWheelCounter = this.rowCounter = this.columnCounter = 0, 
        this.scrollPaneApi, this.tempScrollOffset, this.innerSlideshowExist = !1, this.slideShowData = [], 
        this.innerSlideshowDelay = this.settings.innerSlideshowDelay, this.autoPlay = this.settings.autoPlay, 
        this._thumbOrientation = this.settings.thumbOrientation, this.buttonSpacing = this.settings.buttonSpacing, 
        this._layoutType = this.settings.layoutType, this._moveType = this.settings.moveType, 
        this.horizontalSpacing = this.settings.horizontalSpacing, this.verticalSpacing = this.settings.verticalSpacing, 
        this.grid_direction = this.settings.direction, this.scrollOffset = this.settings.scrollOffset, 
        this.componentWrapper = t(e), this.thumbContainer = this.componentWrapper.find(".thumbContainer"), 
        this.thumbBackward = this.componentWrapper.find(".thumbBackward").css({
            cursor: "pointer",
            display: "none"
        }), this.thumbForward = this.componentWrapper.find(".thumbForward").css({
            cursor: "pointer",
            display: "none"
        }), this.thumbInnerContainer = this.componentWrapper.find(".thumbInnerContainer"), 
        "scroll" != this._moveType && (this.isMobile || (this.thumbForward.bind("mouseover", function() {
            return t(this).find("img").attr("src", "horizontal" == o._thumbOrientation ? o.ic_thumb_forward_on : o.ic_thumb_forward_v_on), 
            !1;
        }).bind("mouseout", function() {
            return t(this).find("img").attr("src", "horizontal" == o._thumbOrientation ? o.ic_thumb_forward : o.ic_thumb_forward_v), 
            !1;
        }), this.thumbBackward.bind("mouseover", function() {
            return t(this).find("img").attr("src", "horizontal" == o._thumbOrientation ? o.ic_thumb_backward_on : o.ic_thumb_backward_v_on), 
            !1;
        }).bind("mouseout", function() {
            return t(this).find("img").attr("src", "horizontal" == o._thumbOrientation ? o.ic_thumb_backward : o.ic_thumb_backward_v), 
            !1;
        })), "grid" == this._layoutType ? (this.thumbBackward.bind(this._downEvent, function() {
            if (!o.thumbTransitionOn) {
                o.thumbTransitionOn = !0;
                var t, e;
                return "horizontal" == o._thumbOrientation ? (t = parseInt(o.thumbInnerContainer.css("left"), 10), 
                t += o.thumbContainerWidth + o.verticalSpacing, t > 0 && (t = 0), e = Math.ceil(o.thumbContainerWidth / (o.boxWidth + o.verticalSpacing)), 
                o.lastWheelCounter += e, o.thumbInnerContainer.stop().animate({
                    left: t + "px"
                }, {
                    duration: 700,
                    easing: "easeOutQuart",
                    complete: function() {
                        o.thumbTransitionOn = !1;
                    }
                })) : (t = parseInt(o.thumbInnerContainer.css("top"), 10), t += o.thumbContainerHeight + o.horizontalSpacing, 
                t > 0 && (t = 0), e = Math.ceil(o.thumbContainerHeight / (o.boxHeight + o.horizontalSpacing)), 
                o.lastWheelCounter += e, o.thumbInnerContainer.stop().animate({
                    top: t + "px"
                }, {
                    duration: 700,
                    easing: "easeOutQuart",
                    complete: function() {
                        o.thumbTransitionOn = !1;
                    }
                })), !1;
            }
        }), this.thumbForward.bind(this._downEvent, function() {
            if (!o.thumbTransitionOn) {
                o.thumbTransitionOn = !0;
                var t, e;
                return "horizontal" == o._thumbOrientation ? (t = parseInt(o.thumbInnerContainer.css("left"), 10), 
                t -= o.thumbContainerWidth + o.verticalSpacing, t < -o.thumbInnerContainerSize + o.thumbContainerWidth && (t = -o.thumbInnerContainerSize + o.thumbContainerWidth), 
                e = Math.ceil(o.thumbContainerWidth / (o.boxWidth + o.verticalSpacing)), o.lastWheelCounter -= e, 
                o.thumbInnerContainer.stop().animate({
                    left: t + "px"
                }, {
                    duration: 700,
                    easing: "easeOutQuart",
                    complete: function() {
                        o.thumbTransitionOn = !1;
                    }
                })) : (t = parseInt(o.thumbInnerContainer.css("top"), 10), t -= o.thumbContainerHeight + o.horizontalSpacing, 
                t < -o.thumbInnerContainerSize + o.thumbContainerHeight && (t = -o.thumbInnerContainerSize + o.thumbContainerHeight), 
                e = Math.ceil(o.thumbContainerHeight / (o.boxHeight + o.horizontalSpacing)), o.lastWheelCounter -= e, 
                o.thumbInnerContainer.stop().animate({
                    top: t + "px"
                }, {
                    duration: 700,
                    easing: "easeOutQuart",
                    complete: function() {
                        o.thumbTransitionOn = !1;
                    }
                })), !1;
            }
        })) : (this.thumbBackward.bind(this._downEvent, function() {
            if (!o.thumbTransitionOn) {
                o.thumbTransitionOn = !0;
                var t, e, i, n;
                return "horizontal" == o._thumbOrientation ? (e = o.thumbInnerContainer.width(), 
                i = o.thumbContainer.width(), t = parseInt(o.thumbInnerContainer.css("left"), 10), 
                n = Math.floor(i / (o.boxWidth + o.spacing)), t += n * (o.boxWidth + o.spacing), 
                o.lastWheelCounter += n, t > 0 && (t = 0), 0 != t % (o.boxWidth + o.spacing) && (value2 = Math.floor(t / (o.boxWidth + o.spacing)), 
                t = value2 * (o.boxWidth + o.spacing), t > 0 && (t = 0), -e + i > t && (t = -e + i)), 
                o.thumbInnerContainer.stop().animate({
                    left: t + "px"
                }, {
                    duration: 700,
                    easing: "easeOutQuart",
                    complete: function() {
                        o.thumbTransitionOn = !1;
                    }
                })) : (e = o.thumbInnerContainer.height(), i = o.thumbContainer.height(), t = parseInt(o.thumbInnerContainer.css("top"), 10), 
                n = Math.floor(i / (o.boxHeight + o.spacing)), t += n * (o.boxHeight + o.spacing), 
                o.lastWheelCounter += n, t > 0 && (t = 0), 0 != t % (o.boxHeight + o.spacing) && (value2 = Math.floor(t / (o.boxHeight + o.spacing)), 
                t = value2 * (o.boxHeight + o.spacing), t > 0 && (t = 0), -e + i > t && (t = -e + i)), 
                o.thumbInnerContainer.stop().animate({
                    top: t + "px"
                }, {
                    duration: 700,
                    easing: "easeOutQuart",
                    complete: function() {
                        o.thumbTransitionOn = !1;
                    }
                })), !1;
            }
        }), this.thumbForward.bind(this._downEvent, function() {
            if (!o.thumbTransitionOn) {
                o.thumbTransitionOn = !0;
                var t, e, i, n;
                return "horizontal" == o._thumbOrientation ? (e = o.thumbInnerContainer.width(), 
                i = o.thumbContainer.width(), t = parseInt(o.thumbInnerContainer.css("left"), 10), 
                n = Math.floor(i / (o.boxWidth + o.spacing)), t -= n * (o.boxWidth + o.spacing), 
                o.lastWheelCounter -= n, -e + i > t && (t = -e + i), o.thumbInnerContainer.stop().animate({
                    left: t + "px"
                }, {
                    duration: 700,
                    easing: "easeOutQuart",
                    complete: function() {
                        o.thumbTransitionOn = !1;
                    }
                })) : (e = o.thumbInnerContainer.height(), i = o.thumbContainer.height(), t = parseInt(o.thumbInnerContainer.css("top"), 10), 
                n = Math.floor(i / (o.boxHeight + o.spacing)), t -= n * (o.boxHeight + o.spacing), 
                o.lastWheelCounter -= n, -e + i > t && (t = -e + i), o.thumbInnerContainer.stop().animate({
                    top: t + "px"
                }, {
                    duration: 700,
                    easing: "easeOutQuart",
                    complete: function() {
                        o.thumbTransitionOn = !1;
                    }
                })), !1;
            }
        })), this.isMobile || this.thumbContainer.bind("mousewheel", function(t, e, i, n) {
            if (o._componentInited) {
                if (o.thumbTransitionOn = !0, i = e > 0 ? 1 : -1, "grid" == o._layoutType) if ("horizontal" == o._thumbOrientation) {
                    if (o.thumbInnerContainerSize == o.thumbContainerWidth) return;
                    o.columnCounter != o.lastWheelCounter && (o.columnCounter = o.lastWheelCounter), 
                    o.columnCounter += i, 0 < o.columnCounter ? o.columnCounter = 0 : o.columnCounter < -o.allColumns + o.columns && (o.columnCounter = -o.allColumns + o.columns), 
                    o.lastWheelCounter = o.columnCounter, i = o.columnCounter * (o.boxWidth + o.verticalSpacing), 
                    o.thumbInnerContainer.stop().animate({
                        left: i + "px"
                    }, {
                        duration: 700,
                        easing: "easeOutQuart",
                        complete: function() {
                            o.thumbTransitionOn = !1;
                        }
                    });
                } else {
                    if (o.thumbInnerContainerSize == o.thumbContainerHeight) return;
                    o.columnCounter != o.lastWheelCounter && (o.rowCounter = o.lastWheelCounter), o.rowCounter += i, 
                    0 < o.rowCounter ? o.rowCounter = 0 : o.rowCounter < -o.allRows + o.rows && (o.rowCounter = -o.allRows + o.rows), 
                    o.lastWheelCounter = o.rowCounter, i = o.rowCounter * (o.boxHeight + o.horizontalSpacing), 
                    o.thumbInnerContainer.stop().animate({
                        top: i + "px"
                    }, {
                        duration: 700,
                        easing: "easeOutQuart",
                        complete: function() {
                            o.thumbTransitionOn = !1;
                        }
                    });
                } else if ("horizontal" == o._thumbOrientation) {
                    if (t = o.thumbInnerContainer.width(), e = o.thumbContainer.width(), t == e) return;
                    o.columnCounter != o.lastWheelCounter && (o.columnCounter = o.lastWheelCounter), 
                    o.columnCounter += i, 0 < o.columnCounter ? o.columnCounter = 0 : o.columnCounter < -o.allColumns + o.columns && (o.columnCounter = -o.allColumns + o.columns), 
                    o.lastWheelCounter = o.columnCounter, i = o.columnCounter * (o.boxWidth + o.spacing), 
                    i > 0 ? i = 0 : -t + e > i && (i = -t + e), 0 != i % (o.boxWidth + o.spacing) && (i = Math.floor(i / (o.boxWidth + o.spacing)), 
                    i *= o.boxWidth + o.spacing, i > 0 && (i = 0), -t + e > i && (i = -t + e)), o.thumbInnerContainer.stop().animate({
                        left: i + "px"
                    }, {
                        duration: 700,
                        easing: "easeOutQuart",
                        complete: function() {
                            o.thumbTransitionOn = !1;
                        }
                    });
                } else t = o.thumbInnerContainer.height(), e = o.thumbContainer.height(), o.rowCounter != o.lastWheelCounter && (o.rowCounter = o.lastWheelCounter), 
                o.rowCounter += i, 0 < o.rowCounter ? o.rowCounter = 0 : o.rowCounter < -o.allRows + o.rows && (o.rowCounter = -o.allRows + o.rows), 
                o.lastWheelCounter = o.rowCounter, i = o.rowCounter * (o.boxHeight + o.spacing), 
                i > 0 ? i = 0 : -t + e > i && (i = -t + e), 0 != i % (o.boxHeight + o.spacing) && (i = Math.floor(i / (o.boxHeight + o.spacing)), 
                i *= o.boxHeight + o.spacing, i > 0 && (i = 0), -t + e > i && (i = -t + e)), o.thumbInnerContainer.stop().animate({
                    top: i + "px"
                }, {
                    duration: 700,
                    easing: "easeOutQuart",
                    complete: function() {
                        o.thumbTransitionOn = !1;
                    }
                });
                return !1;
            }
        }), "horizontal" == this._thumbOrientation ? (this._thumbBackwardSize = this.thumbBackward.width(), 
        this._thumbForwardSize = this.thumbForward.width()) : (this._thumbBackwardSize = this.thumbBackward.height(), 
        this._thumbForwardSize = this.thumbForward.height())), this._componentFixedSize || this._window.bind("resize", function() {
            return o._componentInited ? (o._windowResizeTimeoutID && clearTimeout(o._windowResizeTimeoutID), 
            o._windowResizeTimeoutID = setTimeout(function() {
                o._doneResizing();
            }, o._windowResizeTimeout), !1) : !1;
        });
        var s, r, a = 0, h = !1;
        if (this.thumbInnerContainer.children("div[class=thumbHolder]").each(function() {
            if (s = t(this).attr({
                "data-id-i": a,
                "data-id-j": 0
            }), o._thumbHolderArr.push(s), h || (o.boxWidth = o._thumbHolderArr[0].width(), 
            o.boxHeight = o._thumbHolderArr[0].height(), h = !0), 0 < s.find("div[class='innerThumbHolder']").length) {
                o.innerSlideshowExist = !0;
                var e = [], i = 0;
                s.find("div[class='innerThumbHolder']").each(function() {
                    r = t(this).attr({
                        "data-id-i": a,
                        "data-id-j": i
                    }), e.push(r), void 0 == r.attr("data-title") || o._isEmpty(r.attr("data-title")) || o.createTitle(r), 
                    o.isMobile || r.bind("mouseenter", function(e) {
                        if (!o._componentInited) return !1;
                        if (e || (e = window.event), e.cancelBubble ? e.cancelBubble = !0 : e.stopPropagation && e.stopPropagation(), 
                        e = t(e.currentTarget), "undefined" != typeof overThumb && overThumb(parseInt(e.attr("data-id-i"), 10), parseInt(e.attr("data-id-j"), 10)), 
                        void 0 != e.data("caption")) {
                            e = e.data("caption");
                            var i = o.boxHeight - parseInt(e.data("finalHeight"), 10) + 1;
                            return e.stop().animate({
                                top: i + "px"
                            }, {
                                duration: 500,
                                easing: "easeOutQuint"
                            }), !1;
                        }
                    }).bind("mouseleave", function(e) {
                        return o._componentInited ? (e || (e = window.event), e.cancelBubble ? e.cancelBubble = !0 : e.stopPropagation && e.stopPropagation(), 
                        e = t(e.currentTarget), "undefined" != typeof outThumb && outThumb(parseInt(e.attr("data-id-i"), 10), parseInt(e.attr("data-id-j"), 10)), 
                        void 0 != e.data("caption") ? (e.data("caption").stop().animate({
                            top: o.boxHeight + "px"
                        }, {
                            duration: 500,
                            easing: "easeOutQuint"
                        }), !1) : void 0) : !1;
                    }), 0 < r.find("a[class=pp_content]").length && r.find("a[class=pp_content]").bind("click", function() {
                        "undefined" != typeof detailActivated && detailActivated();
                    }), i > 0 && r.css({
                        display: "none",
                        opacity: 0
                    }), i++;
                }), s.data({
                    slideArr: e,
                    position: a,
                    counter: 0
                }), o.slideShowData[a] = o.createSlideshow(s);
            } else void 0 == s.attr("data-title") || o._isEmpty(s.attr("data-title")) || o.createTitle(s), 
            o.isMobile || s.bind("mouseenter", function(e) {
                if (!o._componentInited) return !1;
                if (e || (e = window.event), e.cancelBubble ? e.cancelBubble = !0 : e.stopPropagation && e.stopPropagation(), 
                e = t(e.currentTarget), "undefined" != typeof overThumb && overThumb(parseInt(e.attr("data-id-i"), 10), parseInt(e.attr("data-id-j"), 10)), 
                void 0 != e.data("caption")) {
                    e = e.data("caption");
                    var i = o.boxHeight - parseInt(e.data("finalHeight"), 10) + 1;
                    return e.stop().animate({
                        top: i + "px"
                    }, {
                        duration: 500,
                        easing: "easeOutQuint"
                    }), !1;
                }
            }).bind("mouseleave", function(e) {
                return o._componentInited ? (e || (e = window.event), e.cancelBubble ? e.cancelBubble = !0 : e.stopPropagation && e.stopPropagation(), 
                e = t(e.currentTarget), "undefined" != typeof outThumb && outThumb(parseInt(e.attr("data-id-i"), 10), parseInt(e.attr("data-id-j"), 10)), 
                void 0 != e.data("caption") ? (e.data("caption").stop().animate({
                    top: o.boxHeight + "px"
                }, {
                    duration: 500,
                    easing: "easeOutQuint"
                }), !1) : void 0) : !1;
            }), 0 < s.find("a[class=pp_content]").length && s.find("a[class=pp_content]").bind("click", function(t) {
                "undefined" != typeof detailActivated && detailActivated();
            });
            a++;
        }), this._playlistLength = this._thumbHolderArr.length, "line" == this._layoutType) {
            for ("horizontal" == this._thumbOrientation ? (this.allColumns = this._playlistLength, 
            this.spacing = parseInt(this._thumbHolderArr[this._playlistLength - 1].css("marginRight"), 10), 
            this._thumbHolderArr[this._playlistLength - 1].css("marginRight", "0px")) : (this.allRows = this._playlistLength, 
            this.spacing = parseInt(this._thumbHolderArr[this._playlistLength - 1].css("marginBottom"), 10), 
            this._thumbHolderArr[this._playlistLength - 1].css("marginBottom", "0px")), a = 0; a < this._playlistLength; a++) this.thumbInnerContainerSize = "horizontal" == this._thumbOrientation ? this.thumbInnerContainerSize + this._thumbHolderArr[a].outerWidth(!0) : this.thumbInnerContainerSize + this._thumbHolderArr[a].outerHeight(!0);
            "horizontal" == this._thumbOrientation ? this.thumbInnerContainer.width(this.thumbInnerContainerSize) : this.thumbInnerContainer.height(this.thumbInnerContainerSize);
        }
        "buttons" == this._moveType && this.hasTouch && n(), this.thumbInnerContainer.css("display", "block"), 
        this._doneResizing(), this._componentInited = !0, "undefined" != typeof thumbGallerySetupDone && thumbGallerySetupDone(), 
        t(".thumb_hidden").stop().animate({
            opacity: 1
        }, {
            duration: 500,
            easing: "easeOutSine"
        }), this.innerSlideshowExist && this.settings.innerSlideshowOn && this.toggleInnerslideShow(!0);
    }
    e.prototype = {
        toggleInnerslideShow: function(t) {
            if (this._componentInited && this.innerSlideshowExist) {
                var e = 0, i = this.slideShowData.length;
                for (e; i > e; e++) void 0 != this.slideShowData[e] && (t ? this.slideShowData[e].start() : this.slideShowData[e].stop());
            }
        },
        toggleInnerslideShowNum: function(t, e) {
            this._componentInited && this.innerSlideshowExist && void 0 != this.slideShowData[t] && (e ? this.slideShowData[t].start() : this.slideShowData[t].stop());
        },
        getThumbHolder: function(t) {
            return this._componentInited && void 0 != this._thumbHolderArr[t] ? this._thumbHolderArr[t] : void 0;
        },
        createTitle: function(e) {
            var i, n, o;
            i = e.attr("data-title"), i = t("<div/>").html(i).addClass("title").appendTo(this.componentWrapper), 
            n = parseInt(i.css("paddingLeft"), 10), o = parseInt(i.css("paddingRight"), 10), 
            parseInt(i.css("paddingTop"), 10), parseInt(i.css("paddingBottom"), 10), this.isMobile ? i.css("top", this.boxHeight - i.outerHeight() + "px") : i.css("top", this.boxHeight + "px"), 
            i.css("width", this.boxWidth - n - o + "px"), i.data("finalHeight", i.outerHeight()), 
            i.appendTo(e), e.data("caption", i);
        },
        createSlideshow: function(e) {
            function i(t) {
                this.slideDiv = t, this.len = this.slideDiv.data("slideArr").length, this.counter = parseInt(this.slideDiv.data("counter"), 10), 
                this.delay, this.timeoutID, this.time = 1e3, this.ease = "easeOutSine", this.running = !1;
            }
            var n = this;
            return i.prototype = {
                start: function() {
                    var t = this;
                    this.delay = n._randomMinMax(n.innerSlideshowDelay[0], n.innerSlideshowDelay[1]), 
                    this.delay *= 1e3, this.timeoutID && clearTimeout(this.timeoutID), this.timeoutID = setTimeout(function() {
                        t.next();
                    }, this.delay), this.running = !0;
                },
                stop: function() {
                    this.timeoutID && clearTimeout(this.timeoutID), this.running = !1;
                },
                next: function() {
                    var e = this;
                    this.timeoutID && clearTimeout(this.timeoutID), this.slideDiv.data("slideArr")[this.counter].stop().animate({
                        opacity: 0
                    }, {
                        duration: this.time,
                        easing: this.ease,
                        complete: function() {
                            t(this).css("display", "none");
                        }
                    }), this.counter++, this.counter > this.len - 1 && (this.counter = 0), this.slideDiv.data("counter", this.counter), 
                    this.slideDiv.data("slideArr")[this.counter].css({
                        opacity: 0,
                        display: "block"
                    }).stop().animate({
                        opacity: 1
                    }, {
                        duration: this.time,
                        easing: this.ease,
                        complete: function() {
                            e.running && e.start();
                        }
                    });
                }
            }, new i(e);
        },
        checkScroll: function() {
            var e = this;
            this.scrollPaneApi ? this.scrollPaneApi.reinitialise() : (this.scrollPaneApi = this.thumbContainer.jScrollPane().data().jsp, 
            this.thumbContainer.bind("jsp-initialised", function(e, i) {
                i || "vertical" == this._thumbOrientation || t(".jspPane").css("left", "0px");
            }), "vertical" == this._thumbOrientation ? this.thumbContainer.jScrollPane({
                verticalDragMinHeight: 80,
                verticalDragMaxHeight: 100
            }) : (this.thumbContainer.jScrollPane({
                horizontalDragMinWidth: 80,
                horizontalDragMaxWidth: 100
            }), this.thumbContainer.bind("mousewheel", function(t, i, n, o) {
                return e._componentInited && e.scrollPaneApi ? (e.scrollPaneApi && e.scrollPaneApi.scrollByX((i > 0 ? -1 : 1) * e._thumbsScrollValue), 
                !1) : void 0;
            })));
        },
        toggleThumbBackward: function(t) {
            "on" == t ? this.thumbBackward.css("display", "block") : this.thumbBackward.css("display", "none");
        },
        toggleThumbForward: function(t) {
            "on" == t ? this.thumbForward.css("display", "block") : this.thumbForward.css("display", "none");
        },
        calculateGrid: function(t) {
            this.tempScrollOffset = t ? parseInt(t, 10) : this.scrollOffset;
            var e = this._getComponentSize("w"), i = this._getComponentSize("h");
            if (t = "left2right" == this.grid_direction ? !0 : !1, "horizontal" == this._thumbOrientation) {
                if ("scroll" == this._moveType && (i -= this.tempScrollOffset), this.rows = Math.floor(i / (this.boxHeight + this.horizontalSpacing)), 
                this.rows * (this.boxHeight + this.horizontalSpacing) + this.boxHeight <= i && (this.rows += 1), 
                this.columns = Math.floor(e / (this.boxWidth + this.verticalSpacing)), this.allColumns = Math.ceil(this._playlistLength / this.rows), 
                e = this.allColumns < this.columns ? this.allColumns : this.columns, this.gridArr = this.createGrid(this.allColumns, this.rows, this.boxWidth, this.boxHeight, this.horizontalSpacing, this.verticalSpacing, 0, 0, t), 
                void 0 == this.gridArr[0]) return alert("Improper grid dimesions!"), !1;
                this.thumbInnerContainerSize = this.allColumns * this.boxWidth + (this.allColumns - 1) * this.verticalSpacing, 
                this.thumbContainerWidth = e * this.boxWidth + (e - 1) * this.verticalSpacing, this.thumbContainerHeight = this.rows * this.boxHeight + (this.rows - 1) * this.horizontalSpacing;
            } else {
                if ("scroll" == this._moveType && (e -= this.tempScrollOffset), this.columns = Math.floor(e / (this.boxWidth + this.verticalSpacing)), 
                this.columns * (this.boxWidth + this.verticalSpacing) + this.boxWidth <= e && (this.columns += 1), 
                this.rows = Math.floor(i / (this.boxHeight + this.horizontalSpacing)), this.allRows = Math.ceil(this._playlistLength / this.columns), 
                e = this.allRows < this.rows ? this.allRows : this.rows, this.gridArr = this.createGrid(this.columns, this.allRows, this.boxWidth, this.boxHeight, this.horizontalSpacing, this.verticalSpacing, 0, 0, t), 
                void 0 == this.gridArr[0]) return alert("Improper grid dimesions!"), !1;
                this.thumbInnerContainerSize = this.allRows * this.boxHeight + (this.allRows - 1) * this.horizontalSpacing, 
                this.thumbContainerWidth = this.columns * this.boxWidth + (this.columns - 1) * this.verticalSpacing, 
                this.thumbContainerHeight = e * this.boxHeight + (e - 1) * this.horizontalSpacing;
            }
        },
        layoutTypeGrid: function() {
            var e = 0;
            for (e; e < this._playlistLength; e++) t(this._thumbHolderArr[e]).css({
                left: this.gridArr[e].x + "px",
                top: this.gridArr[e].y + "px"
            });
            var e = this._getComponentSize("w"), i = this._getComponentSize("h");
            if (this.thumbContainerLeft = Math.ceil(e / 2 - this.thumbContainerWidth / 2), this.thumbContainerTop = Math.ceil(i / 2 - this.thumbContainerHeight / 2), 
            "scroll" != this._moveType) {
                if ("horizontal" == this._thumbOrientation) {
                    var n = parseInt(this.thumbInnerContainer.css("left"), 10);
                    n < -this.thumbInnerContainerSize + this.thumbContainerWidth && (n = -this.thumbInnerContainerSize + this.thumbContainerWidth, 
                    this.thumbInnerContainer.css("left", n + "px")), this.thumbInnerContainerSize > this.thumbContainerWidth ? (this.thumbBackward.css("display", "block"), 
                    this.thumbForward.css("display", "block"), this.touchOn = !0) : (this.thumbBackward.css("display", "none"), 
                    this.thumbForward.css("display", "none"), this.thumbInnerContainer.css("left", "0px"), 
                    this.touchOn = !1), i = this.thumbContainerLeft - this._thumbBackwardSize - this.buttonSpacing, 
                    0 > i && (i = 0), n = this.thumbContainerLeft + this.thumbContainerWidth + this.buttonSpacing, 
                    n > e - this._thumbForwardSize && (n = e - this._thumbForwardSize), this.thumbBackward.css("left", i + "px"), 
                    this.thumbForward.css("left", n + "px");
                } else n = parseInt(this.thumbInnerContainer.css("top"), 10), n < -this.thumbInnerContainerSize + this.thumbContainerHeight && (n = -this.thumbInnerContainerSize + this.thumbContainerHeight, 
                this.thumbInnerContainer.css("top", n + "px")), this.thumbInnerContainerSize > this.thumbContainerHeight ? (this.thumbBackward.css("display", "block"), 
                this.thumbForward.css("display", "block"), this.touchOn = !0) : (this.thumbBackward.css("display", "none"), 
                this.thumbForward.css("display", "none"), this.thumbInnerContainer.css("top", "0px"), 
                this.touchOn = !1), e = this.thumbContainerTop - this._thumbBackwardSize - this.buttonSpacing, 
                0 > e && (e = 0), n = this.thumbContainerTop + this.thumbContainerHeight + this.buttonSpacing, 
                n > i - this._thumbForwardSize && (n = i - this._thumbForwardSize), this.thumbBackward.css("top", e + "px"), 
                this.thumbForward.css("top", n + "px");
                this.thumbContainer.css({
                    width: this.thumbContainerWidth + "px",
                    height: this.thumbContainerHeight + "px",
                    left: this.thumbContainerLeft + "px",
                    top: this.thumbContainerTop + "px"
                });
            } else "horizontal" == this._thumbOrientation ? (this.thumbContainerTop -= this.tempScrollOffset / 2, 
            this.thumbContainerHeight += this.tempScrollOffset) : (this.thumbContainerLeft -= this.tempScrollOffset / 2, 
            this.thumbContainerWidth += this.tempScrollOffset), this.thumbContainer.css({
                width: this.thumbContainerWidth + "px",
                height: this.thumbContainerHeight + "px"
            }), "horizontal" == this._thumbOrientation ? this.thumbInnerContainer.css({
                width: this.thumbInnerContainerSize + "px",
                height: this.thumbContainerHeight + "px"
            }) : this.thumbInnerContainer.css({
                width: this.thumbContainerWidth + "px",
                height: this.thumbInnerContainerSize + "px"
            });
        },
        layoutTypeLine: function() {
            if (this._getComponentSize("w"), this._getComponentSize("h"), "horizontal" == this._thumbOrientation) {
                if ("scroll" != this._moveType) {
                    var t = this.thumbInnerContainer.width(), e = this.thumbContainer.width();
                    if (this.thumbInnerContainerSize > e) {
                        this.thumbBackward.css("display", "block"), this.thumbForward.css("display", "block"), 
                        this.touchOn = !0;
                        var i = parseInt(this.thumbInnerContainer.css("left"), 10);
                        e - t > i ? i = e - t : i > 0 && (i = 0), this.thumbInnerContainer.css("left", i + "px");
                    } else this.thumbBackward.css("display", "none"), this.thumbForward.css("display", "none"), 
                    this.touchOn = !1, this.thumbInnerContainer.css("left", e / 2 - t / 2 + "px");
                }
            } else "scroll" != this._moveType && (t = this.thumbInnerContainer.height(), e = this.thumbContainer.height(), 
            this.thumbInnerContainerSize > e ? (this.thumbBackward.css("display", "block"), 
            this.thumbForward.css("display", "block"), this.touchOn = !0, i = parseInt(this.thumbInnerContainer.css("top"), 10), 
            e - t > i ? i = e - t : i > 0 && (i = 0), this.thumbInnerContainer.css("top", i + "px")) : (this.thumbBackward.css("display", "none"), 
            this.thumbForward.css("display", "none"), this.touchOn = !1, this.thumbInnerContainer.css("top", e / 2 - t / 2 + "px")));
        },
        _getComponentSize: function(t) {
            return "w" == t ? this.componentWrapper.width() : this.componentWrapper.height();
        },
        _randomMinMax: function(t, e) {
            return Math.random() * (e - t) + t;
        },
        _stringCounter: function(t) {
            return 9 > t ? "0" + (t + 1) : t + 1;
        },
        _preventSelect: function(e) {
            t(e).each(function() {
                t(this).attr("unselectable", "on").css({
                    "-moz-user-select": "none",
                    "-webkit-user-select": "none",
                    "user-select": "none"
                }).each(function() {
                    this.onselectstart = function() {
                        return !1;
                    };
                });
            });
        },
        _doneResizing: function() {
            "grid" == this._layoutType ? (this.calculateGrid(this.scrollOffset), "scroll" == this._moveType && ("horizontal" == this._thumbOrientation ? this.thumbInnerContainerSize <= this.thumbContainerWidth && this.calculateGrid("0") : this.thumbInnerContainerSize <= this.thumbContainerHeight && this.calculateGrid("0")), 
            this.layoutTypeGrid(this.scrollOffset)) : ("horizontal" == this._thumbOrientation ? this.columns = this.thumbContainer.width() / this._thumbHolderArr[0].outerWidth(!0) : this.rows = this.thumbContainer.height() / this._thumbHolderArr[0].outerHeight(!0), 
            this.layoutTypeLine()), "scroll" == this._moveType && this.checkScroll();
        },
        _isEmpty: function(t) {
            return 0 == t.replace(/^\s+|\s+$/g, "").length;
        },
        createGrid: function(t, e, i, n, o, s, r, a, h) {
            for (var u, l, c, p = [], d = t * e, m = 0; d > m; m++) u = {}, h ? (l = m % t, 
            c = Math.floor(m / t), u.x = l * (i + o) + r, u.y = c * (n + s) + a) : (l = m % e, 
            c = Math.floor(m / e), u.x = c * (i + o) + r, u.y = l * (n + s) + a), p.push(u);
            return p;
        }
    }, t.fn.thumbGallery = function(i) {
        return this.each(function() {
            var n = new e(t(this), i);
            t(this).data("thumbGallery", n), t.fn.thumbGallery.toggleInnerslideShow = function(t) {
                n.toggleInnerslideShow(t);
            }, t.fn.thumbGallery.toggleInnerslideShowNum = function(t, e) {
                n.toggleInnerslideShowNum(t, e);
            }, t.fn.thumbGallery.getThumbHolder = function(t) {
                return n.getThumbHolder(t);
            };
        });
    }, t.fn.thumbGallery.defaults = {}, t.fn.thumbGallery.settings = {};
}(jQuery), function(t) {
    t.fn.UItoTop = function(e) {
        var i = {
            text: "To Top",
            min: 200,
            inDelay: 600,
            outDelay: 400,
            containerID: "toTop",
            containerHoverID: "toTopHover",
            scrollSpeed: 1200,
            easingType: "linear"
        }, n = t.extend(i, e), o = "#" + n.containerID, s = "#" + n.containerHoverID;
        t("body").append('<a href="#" id="' + n.containerID + '">' + n.text + "</a>"), t(o).hide().on("click.UItoTop", function() {
            return t("html, body").animate({
                scrollTop: 0
            }, n.scrollSpeed, n.easingType), t("#" + n.containerHoverID, this).stop().animate({
                opacity: 0
            }, n.inDelay, n.easingType), !1;
        }).prepend('<span id="' + n.containerHoverID + '"></span>').hover(function() {
            t(s, this).stop().animate({
                opacity: 1
            }, 600, "linear");
        }, function() {
            t(s, this).stop().animate({
                opacity: 0
            }, 700, "linear");
        }), t(window).scroll(function() {
            var e = t(window).scrollTop();
            "undefined" == typeof document.body.style.maxHeight && t(o).css({
                position: "absolute",
                top: e + t(window).height() - 50
            }), e > n.min ? t(o).fadeIn(n.inDelay) : t(o).fadeOut(n.Outdelay);
        });
    };
}(jQuery);

var PDFObject = function(t) {
    if (!t || !t.url) return !1;
    var e, i, n = "1.2", o = t.id || !1, s = t.width || "100%", r = t.height || "100%", a = t.pdfOpenParams, h = function() {
        var t = null;
        return window.ActiveXObject && (t = new ActiveXObject("AcroPDF.PDF"), t || (t = new ActiveXObject("PDF.PdfCtrl")), 
        null !== t) ? !0 : !1;
    }, u = function() {
        var t, e = navigator.plugins, i = e.length, n = /Adobe Reader|Adobe PDF|Acrobat/gi;
        for (t = 0; i > t; t++) if (n.test(e[t].name)) return !0;
        return !1;
    }, l = function() {
        var t = navigator.mimeTypes["application/pdf"];
        return t && t.enabledPlugin;
    }, c = function() {
        var t = null;
        return u() || h() ? t = "Adobe" : l() && (t = "generic"), t;
    }, p = function() {
        var t = document.getElementsByTagName("html");
        if (!t) return !1;
        var e = t[0].style, i = document.body.style;
        e.height = "100%", e.overflow = "hidden", i.margin = "0", i.padding = "0", i.height = "100%", 
        i.overflow = "hidden";
    }, d = function(t) {
        var e, i = "";
        if (!t) return i;
        for (e in t) t.hasOwnProperty(e) && (i += e + "=", i += "search" === e ? encodeURI(t[e]) : t[e], 
        i += "&");
        return i.slice(0, i.length - 1);
    }, m = function(t) {
        var h = null;
        switch (t) {
          case "url":
            h = e;
            break;

          case "id":
            h = o;
            break;

          case "width":
            h = s;
            break;

          case "height":
            h = r;
            break;

          case "pdfOpenParams":
            h = a;
            break;

          case "pluginTypeFound":
            h = i;
            break;

          case "pdfobjectversion":
            h = n;
        }
        return h;
    }, b = function(t) {
        if (!i) return !1;
        var n = null;
        if (t) {
            if (n = t.nodeType && 1 === t.nodeType ? t : document.getElementById(t), !n) return !1;
        } else n = document.body, p(), s = "100%", r = "100%";
        return n.innerHTML = '<object\tdata="' + e + '" type="application/pdf" width="' + s + '" height="' + r + '"></object>', 
        n.getElementsByTagName("object")[0];
    };
    return e = encodeURI(t.url) + "#" + d(a), i = c(), this.get = function(t) {
        return m(t);
    }, this.embed = function(t) {
        return b(t);
    }, this;
};

!function(t) {
    "use strict";
    var e = function(e, i) {
        this.el = t(e), this.options = t.extend({}, t.fn.typed.defaults, i), this.isInput = this.el.is("input"), 
        this.attr = this.options.attr, this.showCursor = this.isInput ? !1 : this.options.showCursor, 
        this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, 
        this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, 
        this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, 
        this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, 
        this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, 
        this.stop = !1, this.cursorChar = this.options.cursorChar, this.build();
    };
    e.prototype = {
        constructor: e,
        init: function() {
            var t = this;
            t.timeout = setTimeout(function() {
                t.typewrite(t.strings[t.arrayPos], t.strPos);
            }, t.startDelay);
        },
        build: function() {
            this.showCursor === !0 && (this.cursor = t('<span class="typed-cursor" style="color:#dfd3c7;font-weight:400;font-size:1.6em;position:relative;bottom:-3px">' + this.cursorChar + "</span>"), 
            this.el.after(this.cursor)), this.init();
        },
        typewrite: function(t, e) {
            if (this.stop !== !0) {
                var i = Math.round(70 * Math.random()) + this.typeSpeed, n = this;
                n.timeout = setTimeout(function() {
                    var i = 0, o = t.substr(e);
                    if ("^" === o.charAt(0)) {
                        var s = 1;
                        /^\^\d+/.test(o) && (o = /\d+/.exec(o)[0], s += o.length, i = parseInt(o)), t = t.substring(0, e) + t.substring(e + s);
                    }
                    if ("html" === n.contentType) {
                        var r = t.substr(e).charAt(0);
                        if ("<" === r || "&" === r) {
                            var a = "", h = "";
                            for (h = "<" === r ? ">" : ";"; t.substr(e).charAt(0) !== h; ) a += t.substr(e).charAt(0), 
                            e++;
                            e++, a += h;
                        }
                    }
                    n.timeout = setTimeout(function() {
                        if (e === t.length) {
                            if (n.options.onStringTyped(n.arrayPos), n.arrayPos === n.strings.length - 1 && (n.options.callback(), 
                            n.curLoop++, n.loop === !1 || n.curLoop === n.loopCount)) return;
                            n.timeout = setTimeout(function() {
                                n.backspace(t, e);
                            }, n.backDelay);
                        } else {
                            0 === e && n.options.preStringTyped(n.arrayPos);
                            var i = t.substr(0, e + 1);
                            n.attr ? n.el.attr(n.attr, i) : n.isInput ? n.el.val(i) : "html" === n.contentType ? n.el.html(i) : n.el.text(i), 
                            e++, n.typewrite(t, e);
                        }
                    }, i);
                }, i);
            }
        },
        backspace: function(t, e) {
            if (this.stop !== !0) {
                var i = Math.round(70 * Math.random()) + this.backSpeed, n = this;
                n.timeout = setTimeout(function() {
                    if ("html" === n.contentType && ">" === t.substr(e).charAt(0)) {
                        for (var i = ""; "<" !== t.substr(e).charAt(0); ) i -= t.substr(e).charAt(0), e--;
                        e--, i += "<";
                    }
                    var o = t.substr(0, e);
                    n.attr ? n.el.attr(n.attr, o) : n.isInput ? n.el.val(o) : "html" === n.contentType ? n.el.html(o) : n.el.text(o), 
                    e > n.stopNum ? (e--, n.backspace(t, e)) : e <= n.stopNum && (n.arrayPos++, n.arrayPos === n.strings.length ? (n.arrayPos = 0, 
                    n.init()) : n.typewrite(n.strings[n.arrayPos], e));
                }, i);
            }
        },
        reset: function() {
            var t = this;
            clearInterval(t.timeout);
            var e = this.el.attr("id");
            this.el.after('<span id="' + e + '"/>'), this.el.remove(), "undefined" != typeof this.cursor && this.cursor.remove(), 
            t.options.resetCallback();
        }
    }, t.fn.typed = function(i) {
        return this.each(function() {
            var n = t(this), o = n.data("typed"), s = "object" == typeof i && i;
            o || n.data("typed", o = new e(this, s)), "string" == typeof i && o[i]();
        });
    }, t.fn.typed.defaults = {
        strings: [ "These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!" ],
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        backDelay: 500,
        loop: !1,
        loopCount: !1,
        showCursor: !0,
        cursorChar: "|",
        attr: null,
        contentType: "html",
        callback: function() {},
        preStringTyped: function() {},
        onStringTyped: function() {},
        resetCallback: function() {}
    };
}(window.jQuery);

var VanillaForm = function(t) {
    "use strict";
    function e() {
        var t = "9320087105434084715";
        return t = t.split(""), t = t.reverse().join("");
    }
    function i(t) {
        t.formFocused = !0;
    }
    function n(t, e) {
        e.classList.remove("error"), e.removeEventListener("focus", r[e.name], !1), delete r[e.name], 
        r.length--, r.length <= 0 && (r.length = 0, t.setSubmitState("initial"));
    }
    function o(e) {
        var i = e.getBoundingClientRect(), n = Math.round(i.top) - 5, o = t.innerHeight;
        return 0 >= n ? void t.scrollBy(0, n) : void (n >= o && t.scrollBy(0, n - o + 30));
    }
    var s = function(t) {
        var e = this;
        return t ? (e.dict = {
            markedAsSpamError: "Your message was marked as spam and was not sent! Fix your message!",
            markedAsSpamServerError: "Your message was marked as SPAM and was not send.",
            sendSuccess: "We have received your inquiry. Stay tuned, we’ll get back to you very soon.",
            sendError: "Mail server has experienced an error. Please try again.",
            httpRequestError: "[%s] There was a problem with receiving response from mailing server",
            timeoutError: "Your request was timeout. Please try again.",
            parseResponseError: "Response from mailing server was unclear. Please contact administrator."
        }, e.responseTimeout = 5e3, e.httpRequest = null, e.url = t.action || location.href, 
        e.form = t, e.processing = !1, e.submitButton = t.querySelector('[type="submit"]'), 
        e.submitButton ? (e.notificationBox = t.querySelector(".notification-box"), e.notificationBox ? (e.notificationBox.addEventListener("click", function() {
            this.classList.remove("show-error"), this.classList.remove("show-success");
        }, !1), e.formFocused = !1, e.focusBound = null, e.init(), e) : (console.warn("Couldn't bind to submit button"), 
        null)) : (console.warn("Couldn't bind to submit button"), null)) : (console.warn("Couldn't bind to form element"), 
        null);
    }, r = {
        length: 0
    };
    return s.prototype.logError = function(t) {
        this.notify(t, "error");
    }, s.prototype.notify = function(t, e) {
        var i = this.notificationBox;
        return i ? (i.innerHTML = t, i.classList.add("show-" + (e || "error")), void o(i)) : void console.warn("Notification box not found");
    }, s.prototype.setSubmitState = function(t) {
        var e = this, i = e.submitButton, n = i.getAttribute("data-" + t), o = i.className.replace(/state-[a-z]+/gi, "");
        e.processing = "processing" === t, i.className = o + " state-" + t, i.value = n;
    }, s.prototype.validateForm = function() {
        var i, o, s, a = this, h = a.form, u = h.elements, l = !1, c = !1, p = /^([\w\-]+(?:\.[\w\-]+)*)@((?:[\w\-]+\.)*\w[\w\-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        for (o = u.length - 1; o >= 0; --o) s = u[o], l = !1, r[s.name] && n(a, s), "" === s.value && s.required ? l = !0 : ("checkbox" === s.type && s.required && !s.checked && (l = !0), 
        "email" !== s.type || "" === s.value || p.test(s.value) || (l = !0)), l ? (s.classList.add("error"), 
        r[s.name] = n.bind(null, a, s), r.length++, s.addEventListener("focus", r[s.name], !1), 
        c = !0) : s.classList.remove("error"), c && a.setSubmitState("error");
        if (!c) {
            if (a.formFocused !== !0) return a.logError(a.dict.markedAsSpamError), !1;
            i = h.querySelector('[name="contact_secret"]'), i || (i = document.createElement("input"), 
            i.type = "hidden", i.name = "contact_secret", h.appendChild(i)), i.value = e();
        }
        return setTimeout(function() {
            t.scrollBy(0, -1);
        }, 1), !c;
    }, s.prototype.resetForm = function() {
        var t, e, i = this, n = i.form, o = i.submitButton;
        for (e = n.length - 1; e >= 0; --e) t = n[e], t !== o && (t.classList.remove("success"), 
        t.value = "");
        i.setSubmitState("initial");
    }, s.prototype.successForm = function() {
        var t = this;
        t.setSubmitState("success"), t.notify(t.dict.sendSuccess, "success");
    }, s.prototype.processResponse = function(t) {
        var e, i = this, n = i.dict;
        try {
            e = JSON.parse(t);
        } catch (o) {
            console.error(o), e = {
                result: "ParseError"
            };
        }
        switch (e.result) {
          case "OK":
            i.successForm(n.sendSuccess), setTimeout(i.resetForm.bind(i), 4e3);
            break;

          case "NO_SPAM":
            i.logError(n.markedAsSpamServerError);
            break;

          case "SEND_ERROR":
            i.logError(n.sendError), i.setSubmitState("initial");
            break;

          case "ParseError":
            i.logError(n.parseResponseError);
        }
    }, s.prototype.requestStateChange = function() {
        var t = this, e = t.httpRequest;
        4 === e.readyState && (200 === e.status ? t.processResponse(e.responseText) : (t.setSubmitState("initial"), 
        0 !== e.status && t.logError(t.dict.httpRequestError.replace("%s", e.status))));
    }, s.prototype.init = function() {
        var e, n, o = this, s = o.form, r = o.submitButton, a = s.elements;
        if (s.addEventListener("submit", o.submitForm.bind(o), !0), t.XMLHttpRequest ? o.httpRequest = new XMLHttpRequest() : t.ActiveXObject("Microsoft.XMLHTTP") && (o.httpRequest = new ActiveXObject("Microsoft.XMLHTTP")), 
        o.focusBound = i.bind(null, o), !o.httpRequest) return console.error("Couldn't init XMLHttpRequest"), 
        null;
        for (o.formFocused = !1, n = a.length - 1; n >= 0; --n) e = a[n], "submit" !== e.type && e.addEventListener("focus", o.focusBound, !1);
        r.value !== r.getAttribute("data-initial") && (r.setAttribute("data-initial", r.value), 
        o.setSubmitState("initial"));
    }, s.prototype.send = function(t) {
        var e = this, i = e.httpRequest;
        i.open("POST", e.url, !0), i.timeout = e.responseTimeout, i.ontimeout = function() {
            e.logError(e.dict.timeoutError), e.setSubmitState("initial");
        }, i.send(t), i.onreadystatechange = e.requestStateChange.bind(e);
    }, s.prototype.submitForm = function(t) {
        var e = this, i = "";
        return t && (t.preventDefault(), t.stopPropagation()), e.validateForm() && (e.setSubmitState("processing"), 
        i = new FormData(e.form), e.send(i)), !1;
    }, s;
}(window);

(function() {
    var t, e, i = function(t, e) {
        return function() {
            return t.apply(e, arguments);
        };
    };
    t = function() {
        function t() {}
        return t.prototype.extend = function(t, e) {
            var i, n;
            for (i in t) n = t[i], null != n && (e[i] = n);
            return e;
        }, t.prototype.isMobile = function(t) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t);
        }, t;
    }(), e = this.WeakMap || (e = function() {
        function t() {
            this.keys = [], this.values = [];
        }
        return t.prototype.get = function(t) {
            var e, i, n, o, s;
            for (s = this.keys, e = n = 0, o = s.length; o > n; e = ++n) if (i = s[e], i === t) return this.values[e];
        }, t.prototype.set = function(t, e) {
            var i, n, o, s, r;
            for (r = this.keys, i = o = 0, s = r.length; s > o; i = ++o) if (n = r[i], n === t) return void (this.values[i] = e);
            return this.keys.push(t), this.values.push(e);
        }, t;
    }()), this.WOW = function() {
        function n(t) {
            null == t && (t = {}), this.scrollCallback = i(this.scrollCallback, this), this.scrollHandler = i(this.scrollHandler, this), 
            this.start = i(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), 
            this.animationNameCache = new e();
        }
        return n.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0
        }, n.prototype.init = function() {
            var t;
            return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : document.addEventListener("DOMContentLoaded", this.start);
        }, n.prototype.start = function() {
            var t, e, i, n;
            if (this.boxes = this.element.getElementsByClassName(this.config.boxClass), this.boxes.length) {
                if (this.disabled()) return this.resetStyle();
                for (n = this.boxes, e = 0, i = n.length; i > e; e++) t = n[e], this.applyStyle(t, !0);
                return window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), 
                this.interval = setInterval(this.scrollCallback, 50);
            }
        }, n.prototype.stop = function() {
            return window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), 
            null != this.interval ? clearInterval(this.interval) : void 0;
        }, n.prototype.show = function(t) {
            return this.applyStyle(t), t.className = "" + t.className + " " + this.config.animateClass;
        }, n.prototype.applyStyle = function(t, e) {
            var i, n, o;
            return n = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), 
            o = t.getAttribute("data-wow-iteration"), this.animate(function(s) {
                return function() {
                    return s.customStyle(t, e, n, i, o);
                };
            }(this));
        }, n.prototype.animate = function() {
            return "requestAnimationFrame" in window ? function(t) {
                return window.requestAnimationFrame(t);
            } : function(t) {
                return t();
            };
        }(), n.prototype.resetStyle = function() {
            var t, e, i, n, o;
            for (n = this.boxes, o = [], e = 0, i = n.length; i > e; e++) t = n[e], o.push(t.setAttribute("style", "visibility: visible;"));
            return o;
        }, n.prototype.customStyle = function(t, e, i, n, o) {
            return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", 
            i && this.vendorSet(t.style, {
                animationDuration: i
            }), n && this.vendorSet(t.style, {
                animationDelay: n
            }), o && this.vendorSet(t.style, {
                animationIterationCount: o
            }), this.vendorSet(t.style, {
                animationName: e ? "none" : this.cachedAnimationName(t)
            }), t;
        }, n.prototype.vendors = [ "moz", "webkit" ], n.prototype.vendorSet = function(t, e) {
            var i, n, o, s;
            s = [];
            for (i in e) n = e[i], t["" + i] = n, s.push(function() {
                var e, s, r, a;
                for (r = this.vendors, a = [], e = 0, s = r.length; s > e; e++) o = r[e], a.push(t["" + o + i.charAt(0).toUpperCase() + i.substr(1)] = n);
                return a;
            }.call(this));
            return s;
        }, n.prototype.vendorCSS = function(t, e) {
            var i, n, o, s, r, a;
            for (n = window.getComputedStyle(t), i = n.getPropertyCSSValue(e), a = this.vendors, 
            s = 0, r = a.length; r > s; s++) o = a[s], i = i || n.getPropertyCSSValue("-" + o + "-" + e);
            return i;
        }, n.prototype.animationName = function(t) {
            var e;
            try {
                e = this.vendorCSS(t, "animation-name").cssText;
            } catch (i) {
                e = window.getComputedStyle(t).getPropertyValue("animation-name");
            }
            return "none" === e ? "" : e;
        }, n.prototype.cacheAnimationName = function(t) {
            return this.animationNameCache.set(t, this.animationName(t));
        }, n.prototype.cachedAnimationName = function(t) {
            return this.animationNameCache.get(t);
        }, n.prototype.scrollHandler = function() {
            return this.scrolled = !0;
        }, n.prototype.scrollCallback = function() {
            var t;
            return this.scrolled && (this.scrolled = !1, this.boxes = function() {
                var e, i, n, o;
                for (n = this.boxes, o = [], e = 0, i = n.length; i > e; e++) t = n[e], t && (this.isVisible(t) ? this.show(t) : o.push(t));
                return o;
            }.call(this), !this.boxes.length) ? this.stop() : void 0;
        }, n.prototype.offsetTop = function(t) {
            for (var e; void 0 === t.offsetTop; ) t = t.parentNode;
            for (e = t.offsetTop; t = t.offsetParent; ) e += t.offsetTop;
            return e;
        }, n.prototype.isVisible = function(t) {
            var e, i, n, o, s;
            return i = t.getAttribute("data-wow-offset") || this.config.offset, s = window.pageYOffset, 
            o = s + this.element.clientHeight - i, n = this.offsetTop(t), e = n + t.clientHeight, 
            o >= n && e >= s;
        }, n.prototype.util = function() {
            return this._util || (this._util = new t());
        }, n.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent);
        }, n;
    }();
}).call(this);