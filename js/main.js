(function() {
    var g, h = this;

    function m(a) {
        a.k = function() {
            // if (a.Db) {
            // a.Db
            // } else {
            // a.Db = new a
            // }
            return a.Db ? a.Db : a.Db = new a
        }
    }

    function aa(a) {
        // aのデータ型を示す文字列を返す
        var b = typeof a;
        // bがオブジェクトの場合
        if ("object" == b)
        // 引数aがtrueの場合
        // すなわちaを型変換してtrueが返る場合
            if (a) {
                // aがArrayであれば
                if (a instanceof Array)
                // return "array"を返す
                    return "array";
                // aがObjectであれば
                if (a instanceof Object)
                // return bを返す
                    return b;
                /**
                 * [c description]
                 * @type {cの型判定を行う}
                 */
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c)
                    return "object";
                // cがAArrayオブジェクト、または右辺の全てを満たす場合、return "array"を返す
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                    return "array";
                // ｃがfunctionオブジェクト、またはaがundefinedではない、aの中にundefinedがない、aの中にcallがない場合はreturn "function"を返す
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                    return "function"
            } else
                // aを型変換しfalseが返る場合、return "null"を返す
                return "null";
        // bがfunction、あるいはaの中にundefinedがない場合、return "object"を返す
        else if ("function" == b && "undefined" == typeof a.call)
            return "object";
        // bがobjectでもfunctionでもない場合、そのままbをreturnする
        return b
    }

    function n(a) {
        // 引数aがundefinedかどうかの判定
        // void 0 === undefinedなので、undefined !== aとなる
        return void 0 !== a
    }

    function q(a) {
        // 引数aのArrayオブジェクト判定
        // boolean
        return "array" == aa(a)
    }

    function ba(a) {
        // 引数aのArray、あるいはobject、あるいはnumber判定
        // boolean
        var b = aa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function r(a) {
        // 引数aのStringオブジェクト判定
        // boolean
        return "string" == typeof a
    }

    function s(a) {
        // 引数aのfunctionオブジェクト判定
        return "function" == aa(a)
    }

    function ca(a) {
        // 引数aはobjectでありnullではない、またはfunctionオブジェクトである判定
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function da(a) {
        return a[ea] || (a[ea] = ++fa)
    }
    var ea = "closure_uid_" + (1E9 * Math.random() >>> 0),
        fa = 0;

    function ga(a, b, c) {
        // 関数aのthisに引数a.bindを参照させ呼び出す
        return a.call.apply(a.bind, arguments)
    }

    function ha(a, b, c) {
        // 引数aがfalseであればエラーを返す
        if (!a)
            throw Error();
        // argumentsのlengthが2より大きい場合
        if (2 < arguments.length) {
            // dはArrayオブジェクトのプロトタイプ生成した配列の中からargumentsから2までｑを取り出す
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                // cはArrayオブジェクトのプロトタイプ生成した配列の中からargumentsより最後までの配列を取り出す
                var c = Array.prototype.slice.call(arguments);
                // Arrayプロトタイプの配列の先頭にcとdを順番に挿入する
                Array.prototype.unshift.apply(c, d);
                // a.b生成とa関数の引数にcを渡す
                return a.apply(b, c)
            }
        }
        return function() {
            // a.b生成とa関数の引数にargumentsを渡す
            return a.apply(b, arguments)
        }
    }

    function t(a, b, c) {
        // tはFunction.prototypeをbindでき、かつ"native code"が存在するならばga関数、しなければha関数の結果が正の値
        t = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ga : ha;
        // thisにnullを呼び出し、引数にargumentsを参照し実行する
        return t.apply(null, arguments)
    }

    function ia(a, b) {
        // cはArrayオブジェクトをプロトタイプし、第二引数からを返す
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            // 配列コピー
            var b = c.slice();
            // bをArrayライクなオブジェクトに変換
            // bはオブジェクトなのでArrayのメソッドであるapplyを実行するとエラーになる
            b.push.apply(b, arguments);
            // bを引数としてaのthisにiaのthisを呼び出し実行
            return a.apply(this, b)
        }
    }
    var ja = Date.now || function() {
        // 時刻をNumberオブジェクトとしてreturn
        return +new Date
    };

    function u(a, b) {
        var c = a.split("."),
            d = h;
        // c[0]がdオブジェクトにあるか、dはexecScriptではないか、VBScriptで'var " + c[0]'がtrueならばuはtrue
        c[0] in d || !d.execScript || d.execScript("var " + c[0]);

        // var eで、cのlengthがtrueになり、かつeの配列の最初の要素を取り除けるまでループ
        for (var e; c.length && (e = c.shift());)
            //
            c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
    }

    function v(a, b) {

        function c() {}
        // bのprototypeをcにprototype
        c.prototype = b.prototype;
        // a.gメソッドはb.prototype
        a.g = b.prototype;
        // a.prototypeはcオブジェクト
        a.prototype = new c;
        // a.prototypeの生成元はa
        a.prototype.constructor = a;
        a.Ec = function(a, c, f) {
            // bのprototypeのcメソッドを、thisにaを呼び出し、引数にArrayの2番目からを使い実行
            return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
        }
    }

    // function.prototypeのbindメソッドは、Function.prototype.bindでtrue、
    function.prototype.bind = Function.prototype.bind || function(a, b) {
        // かつargumentsのlengthが1以上なら
        if (1 < arguments.length) {
            // cはArrayのprototypeの配列の1番目からの配列
            var c = Array.prototype.slice.call(arguments, 1);
            // cの配列の最初にthisとaを順番に追加
            c.unshift(this, a);
            // オブジェクトtを、thisをnullで呼び出し、cを引数として実行
            return t.apply(null, c)
        }
        // tのthisにvのthisを呼び出し、引数にaを参照し実行する
        return t(this, a)
    };

    function ka(a) {
        // Error.captureStackTraceが有効であれば、
        if (Error.captureStackTrace)
            // kaの関数情報を除外しError出力
            Error.captureStackTrace(this, ka);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    v(ka, Error);
    ka.prototype.name = "CustomError";
    var ma;

    function na(a, b) {
        for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;)
            d += c.shift() + e.shift();
        return d + c.join("%s")
    }

    function oa(a) {
        if (!pa.test(a))
            return a; - 1 != a.indexOf("&") && (a = a.replace(qa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(ra, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(sa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ta, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(ua, "&#39;"));
        return a
    }
    var qa = /&/g,
        ra = /</g,
        sa = />/g,
        ta = /"/g,
        ua = /'/g,
        pa = /[&<>"']/;

    function va(a) {
        return Array.prototype.join.call(arguments, "")
    }

    function wa(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }

    function xa(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        })
    }

    function ya(a) {
        var b = r(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
            return b + e.toUpperCase()
        })
    };

    function za(a, b) {
        b.unshift(a);
        ka.call(this, na.apply(null, b));
        b.shift()
    }
    v(za, ka);
    za.prototype.name = "AssertionError";

    function Aa(a, b) {
        throw new za("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    };
    var w = Array.prototype,
        Ba = w.indexOf ? function(a, b, c) {
            return w.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (r(a))
                return r(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b)
                    return c;
            return -1
        },
        Ca = w.forEach ? function(a, b, c) {
            w.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = r(a) ? a.split("") : a, f = 0; f < d; f++)
                f in e && b.call(c, e[f], f, a)
        },
        Da = w.filter ? function(a, b, c) {
            return w.filter.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, k = r(a) ?
                    a.split("") : a, l = 0; l < d; l++)
                if (l in k) {
                    var p = k[l];
                    b.call(c, p, l, a) && (e[f++] = p)
                }
            return e
        };

    function Ea(a, b) {
        return 0 <= Ba(a, b)
    }

    function Fa(a, b) {
        var c = Ba(a, b),
            d;
        (d = 0 <= c) && w.splice.call(a, c, 1);
        return d
    }

    function Ga(a) {
        return w.concat.apply(w, arguments)
    }

    function Ha(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }

    function Ia(a, b, c, d) {
        w.splice.apply(a, Ja(arguments, 1))
    }

    function Ja(a, b, c) {
        return 2 >= arguments.length ? w.slice.call(a, b) : w.slice.call(a, b, c)
    };

    function Ka(a, b) {
        for (var c in a)
            b.call(void 0, a[c], c, a)
    }

    function La(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a))
                return !0;
        return !1
    }

    function Ma(a) {
        var b = [],
            c = 0,
            d;
        for (d in a)
            b[c++] = d;
        return b
    }

    function Na() {
        var a = Oa,
            b;
        for (b in a)
            return !1;
        return !0
    }
    var Pa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Qa(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < Pa.length; f++)
                c = Pa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };

    function Ra(a, b) {
        this.F = {};
        this.d = [];
        this.h = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                this.set(arguments[d], arguments[d + 1])
        } else if (a) {
            if (a instanceof Ra)
                c = a.ka(), d = a.M();
            else {
                var c = Ma(a),
                    e = [],
                    f = 0;
                for (d in a)
                    e[f++] = a[d];
                d = e
            }
            for (e = 0; e < c.length; e++)
                this.set(c[e], d[e])
        }
    }
    g = Ra.prototype;
    g.M = function() {
        Sa(this);
        for (var a = [], b = 0; b < this.d.length; b++)
            a.push(this.F[this.d[b]]);
        return a
    };
    g.ka = function() {
        Sa(this);
        return this.d.concat()
    };
    g.J = function(a) {
        return Ta(this.F, a)
    };
    g.remove = function(a) {
        return Ta(this.F, a) ? (delete this.F[a], this.h--, this.d.length > 2 * this.h && Sa(this), !0) : !1
    };

    function Sa(a) {
        if (a.h != a.d.length) {
            for (var b = 0, c = 0; b < a.d.length;) {
                var d = a.d[b];
                Ta(a.F, d) && (a.d[c++] = d);
                b++
            }
            a.d.length = c
        }
        if (a.h != a.d.length) {
            for (var e = {}, c = b = 0; b < a.d.length;)
                d = a.d[b], Ta(e, d) || (a.d[c++] = d, e[d] = 1), b++;
            a.d.length = c
        }
    }
    g.get = function(a, b) {
        return Ta(this.F, a) ? this.F[a] : b
    };
    g.set = function(a, b) {
        Ta(this.F, a) || (this.h++, this.d.push(a));
        this.F[a] = b
    };
    g.forEach = function(a, b) {
        for (var c = this.ka(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    g.I = function() {
        return new Ra(this)
    };

    function Ta(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var Ua;
    a: {
        var Va = h.navigator;
        if (Va) {
            var Wa = Va.userAgent;
            if (Wa) {
                Ua = Wa;
                break a
            }
        }
        Ua = ""
    }

    function x(a) {
        return -1 != Ua.indexOf(a)
    };
    var Xa = x("Opera") || x("OPR"),
        y = x("Trident") || x("MSIE"),
        A = x("Gecko") && -1 == Ua.toLowerCase().indexOf("webkit") && !(x("Trident") || x("MSIE")),
        B = -1 != Ua.toLowerCase().indexOf("webkit");

    function Ya() {
        var a = h.document;
        return a ? a.documentMode : void 0
    }
    var Za = function() {
            var a = "",
                b;
            if (Xa && h.opera)
                return a = h.opera.version, s(a) ? a() : a;
            A ? b = /rv\:([^\);]+)(\)|;)/ : y ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : B && (b = /WebKit\/(\S+)/);
            b && (a = (a = b.exec(Ua)) ? a[1] : "");
            return y && (b = Ya(), b > parseFloat(a)) ? String(b) : a
        }(),
        $a = {};

    function C(a) {
        var b;
        if (!(b = $a[a])) {
            b = 0;
            for (var c = String(Za).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var k = c[f] || "",
                    l = d[f] || "",
                    p = RegExp("(\\d*)(\\D*)", "g"),
                    z = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var N = p.exec(k) || ["", "", ""],
                        J = z.exec(l) || ["", "", ""];
                    if (0 == N[0].length && 0 == J[0].length)
                        break;
                    b = wa(0 == N[1].length ? 0 : parseInt(N[1], 10), 0 == J[1].length ? 0 : parseInt(J[1], 10)) || wa(0 == N[2].length, 0 == J[2].length) ||
                        wa(N[2], J[2])
                } while (0 == b)
            }
            b = $a[a] = 0 <= b
        }
        return b
    }
    var ab = h.document,
        bb = ab && y ? Ya() || ("CSS1Compat" == ab.compatMode ? parseInt(Za, 10) : 5) : void 0;
    var cb = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

    function db(a) {
        if (eb) {
            eb = !1;
            var b = h.location;
            if (b) {
                var c = b.href;
                if (c && (c = (c = db(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname)
                    throw eb = !0, Error();
            }
        }
        return a.match(cb)
    }
    var eb = B;

    function D(a, b) {
        var c;
        if (a instanceof D)
            this.q = n(b) ? b : a.q, fb(this, a.ga), c = a.Na, E(this), this.Na = c, c = a.P, E(this), this.P = c, gb(this, a.Ja), c = a.da, E(this), this.da = c, hb(this, a.G.I()), c = a.K, E(this), this.K = c;
        else if (a && (c = db(String(a)))) {
            this.q = !!b;
            fb(this, c[1] || "", !0);
            var d = c[2] || "";
            E(this);
            this.Na = ib(d);
            d = c[3] || "";
            E(this);
            this.P = ib(d);
            gb(this, c[4]);
            d = c[5] || "";
            E(this);
            this.da = ib(d);
            hb(this, c[6] || "", !0);
            c = c[7] || "";
            E(this);
            this.K = ib(c)
        } else
            this.q = !!b, this.G = new F(null, 0, this.q)
    }
    g = D.prototype;
    g.ga = "";
    g.Na = "";
    g.P = "";
    g.Ja = null;
    g.da = "";
    g.K = "";
    g.lc = !1;
    g.q = !1;
    g.toString = function() {
        var a = [],
            b = this.ga;
        b && a.push(jb(b, kb), ":");
        if (b = this.P) {
            a.push("//");
            var c = this.Na;
            c && a.push(jb(c, kb), "@");
            a.push(encodeURIComponent(String(b)));
            b = this.Ja;
            null != b && a.push(":", String(b))
        }
        if (b = this.da)
            this.P && "/" != b.charAt(0) && a.push("/"), a.push(jb(b, "/" == b.charAt(0) ? lb : mb));
        (b = this.G.toString()) && a.push("?", b);
        (b = this.K) && a.push("#", jb(b, nb));
        return a.join("")
    };
    g.I = function() {
        return new D(this)
    };

    function fb(a, b, c) {
        E(a);
        a.ga = c ? ib(b) : b;
        a.ga && (a.ga = a.ga.replace(/:$/, ""))
    }

    function gb(a, b) {
        E(a);
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b)
                throw Error("Bad port number " + b);
            a.Ja = b
        } else
            a.Ja = null
    }

    function hb(a, b, c) {
        E(a);
        b instanceof F ? (a.G = b, a.G.kb(a.q)) : (c || (b = jb(b, ob)), a.G = new F(b, 0, a.q))
    }

    function E(a) {
        if (a.lc)
            throw Error("Tried to modify a read-only Uri");
    }
    g.kb = function(a) {
        this.q = a;
        this.G && this.G.kb(a);
        return this
    };

    function pb(a) {
        return a instanceof D ? a.I() : new D(a, void 0)
    }

    function ib(a) {
        return a ? decodeURIComponent(a) : ""
    }

    function jb(a, b) {
        return r(a) ? encodeURI(a).replace(b, qb) : null
    }

    function qb(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    var kb = /[#\/\?@]/g,
        mb = /[\#\?:]/g,
        lb = /[\#\?]/g,
        ob = /[\#\?@]/g,
        nb = /#/g;

    function F(a, b, c) {
        this.o = a || null;
        this.q = !!c
    }

    function G(a) {
        if (!a.c && (a.c = new Ra, a.h = 0, a.o))
            for (var b = a.o.split("&"), c = 0; c < b.length; c++) {
                var d = b[c].indexOf("="),
                    e = null,
                    f = null;
                0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
                e = decodeURIComponent(e.replace(/\+/g, " "));
                e = H(a, e);
                a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
            }
    }
    g = F.prototype;
    g.c = null;
    g.h = null;
    g.add = function(a, b) {
        G(this);
        this.o = null;
        a = H(this, a);
        var c = this.c.get(a);
        c || this.c.set(a, c = []);
        c.push(b);
        this.h++;
        return this
    };
    g.remove = function(a) {
        G(this);
        a = H(this, a);
        return this.c.J(a) ? (this.o = null, this.h -= this.c.get(a).length, this.c.remove(a)) : !1
    };
    g.J = function(a) {
        G(this);
        a = H(this, a);
        return this.c.J(a)
    };
    g.ka = function() {
        G(this);
        for (var a = this.c.M(), b = this.c.ka(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++)
                c.push(b[d]);
        return c
    };
    g.M = function(a) {
        G(this);
        var b = [];
        if (r(a))
            this.J(a) && (b = Ga(b, this.c.get(H(this, a))));
        else {
            a = this.c.M();
            for (var c = 0; c < a.length; c++)
                b = Ga(b, a[c])
        }
        return b
    };
    g.set = function(a, b) {
        G(this);
        this.o = null;
        a = H(this, a);
        this.J(a) && (this.h -= this.c.get(a).length);
        this.c.set(a, [b]);
        this.h++;
        return this
    };
    g.get = function(a, b) {
        var c = a ? this.M(a) : [];
        return 0 < c.length ? String(c[0]) : b
    };

    function rb(a, b, c) {
        a.remove(b);
        0 < c.length && (a.o = null, a.c.set(H(a, b), Ha(c)), a.h += c.length)
    }
    g.toString = function() {
        if (this.o)
            return this.o;
        if (!this.c)
            return "";
        for (var a = [], b = this.c.ka(), c = 0; c < b.length; c++)
            for (var d = b[c], e = encodeURIComponent(String(d)), d = this.M(d), f = 0; f < d.length; f++) {
                var k = e;
                "" !== d[f] && (k += "=" + encodeURIComponent(String(d[f])));
                a.push(k)
            }
        return this.o = a.join("&")
    };
    g.I = function() {
        var a = new F;
        a.o = this.o;
        this.c && (a.c = this.c.I(), a.h = this.h);
        return a
    };

    function H(a, b) {
        var c = String(b);
        a.q && (c = c.toLowerCase());
        return c
    }
    g.kb = function(a) {
        a && !this.q && (G(this), this.o = null, this.c.forEach(function(a, c) {
            var d = c.toLowerCase();
            c != d && (this.remove(c), rb(this, d, a))
        }, this));
        this.q = a
    };
    var sb = !y || y && 9 <= bb;
    !A && !y || y && y && 9 <= bb || A && C("1.9.1");
    y && C("9");
    var I = {
        set: function(a, b) {
            a.className = b
        },
        get: function(a) {
            a = a.className;
            return r(a) && a.match(/\S+/g) || []
        },
        add: function(a, b) {
            var c = I.get(a),
                d = Ja(arguments, 1),
                e = c.length + d.length;
            I.pb(c, d);
            I.set(a, c.join(" "));
            return c.length == e
        },
        remove: function(a, b) {
            var c = I.get(a),
                d = Ja(arguments, 1),
                e = I.wb(c, d);
            I.set(a, e.join(" "));
            return e.length == c.length - d.length
        },
        pb: function(a, b) {
            for (var c = 0; c < b.length; c++)
                Ea(a, b[c]) || a.push(b[c])
        },
        wb: function(a, b) {
            return Da(a, function(a) {
                return !Ea(b, a)
            })
        },
        zc: function(a, b, c) {
            for (var d =
                    I.get(a), e = !1, f = 0; f < d.length; f++)
                d[f] == b && (Ia(d, f--, 1), e = !0);
            e && (d.push(c), I.set(a, d.join(" ")));
            return e
        },
        Dc: function(a, b, c) {
            var d = I.get(a);
            r(b) ? Fa(d, b) : q(b) && (d = I.wb(d, b));
            r(c) && !Ea(d, c) ? d.push(c) : q(c) && I.pb(d, c);
            I.set(a, d.join(" "))
        },
        ab: function(a, b) {
            return Ea(I.get(a), b)
        },
        enable: function(a, b, c) {
            c ? I.add(a, b) : I.remove(a, b)
        },
        toggle: function(a, b) {
            var c = !I.ab(a, b);
            I.enable(a, b, c);
            return c
        }
    };

    function K(a, b) {
        this.x = n(a) ? a : 0;
        this.y = n(b) ? b : 0
    }
    K.prototype.I = function() {
        return new K(this.x, this.y)
    };
    K.prototype.toString = function() {
        return "(" + this.x + ", " + this.y + ")"
    };

    function tb(a, b) {
        this.width = a;
        this.height = b
    }
    tb.prototype.I = function() {
        return new tb(this.width, this.height)
    };
    tb.prototype.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    };

    function L(a) {
        return a ? new ub(vb(a)) : ma || (ma = new ub)
    }

    function wb(a, b, c) {
        var d = document;
        c = c || d;
        a = a && "*" != a ? a.toUpperCase() : "";
        if (c.querySelectorAll && c.querySelector && (a || b))
            return c.querySelectorAll(a + (b ? "." + b : ""));
        if (b && c.getElementsByClassName) {
            c = c.getElementsByClassName(b);
            if (a) {
                for (var d = {}, e = 0, f = 0, k; k = c[f]; f++)
                    a == k.nodeName && (d[e++] = k);
                d.length = e;
                return d
            }
            return c
        }
        c = c.getElementsByTagName(a || "*");
        if (b) {
            d = {};
            for (f = e = 0; k = c[f]; f++)
                a = k.className, "function" == typeof a.split && Ea(a.split(/\s+/), b) && (d[e++] = k);
            d.length = e;
            return d
        }
        return c
    }

    function xb(a, b) {
        Ka(b, function(b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in yb ? a.setAttribute(yb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    }
    var yb = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function zb(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new tb(a.clientWidth, a.clientHeight)
    }

    function Ab(a) {
        var b = B || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return y && C("10") && a.pageYOffset != b.scrollTop ? new K(b.scrollLeft, b.scrollTop) : new K(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function Bb(a, b, c) {
        return Cb(document, arguments)
    }

    function Cb(a, b) {
        var c = b[0],
            d = b[1];
        if (!sb && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', oa(d.name), '"');
            if (d.type) {
                c.push(' type="', oa(d.type), '"');
                var e = {};
                Qa(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (r(d) ? c.className = d : q(d) ? I.add.apply(null, [c].concat(d)) : xb(c, d));
        2 < b.length && Db(a, c, b);
        return c
    }

    function Db(a, b, c) {

        function d(c) {
            c && b.appendChild(r(c) ? a.createTextNode(c) : c)
        }
        for (var e = 2; e < c.length; e++) {
            var f = c[e];
            !ba(f) || ca(f) && 0 < f.nodeType ? d(f) : Ca(Eb(f) ? Ha(f) : f, d)
        }
    }

    function Fb(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }

    function Gb(a) {
        for (; a && 1 != a.nodeType;)
            a = a.nextSibling;
        return a
    }

    function vb(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function Eb(a) {
        if (a && "number" == typeof a.length) {
            if (ca(a))
                return "function" == typeof a.item || "string" == typeof a.item;
            if (s(a))
                return "function" == typeof a.item
        }
        return !1
    }

    function Hb(a) {
        return Ib(a, function(a) {
            return "A" == a.nodeName && I.ab(a, "gweb-smoothscroll-control")
        })
    }

    function Ib(a, b) {
        for (var c = 0; a;) {
            if (b(a))
                return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function ub(a) {
        this.n = a || h.document || document
    }
    g = ub.prototype;
    g.$ = L;
    g.aa = function(a) {
        return r(a) ? this.n.getElementById(a) : a
    };
    g.Ya = function(a, b) {
        var c = b || this.n,
            d = c || document,
            e = null;
        return (e = d.querySelectorAll && d.querySelector ? d.querySelector("." + a) : wb("*", a, c)[0]) || null
    };
    g.Ta = function(a, b, c) {
        return Cb(this.n, arguments)
    };
    g.createElement = function(a) {
        return this.n.createElement(a)
    };
    g.createTextNode = function(a) {
        return this.n.createTextNode(String(a))
    };

    function Jb(a) {
        a = a.n;
        return a.parentWindow || a.defaultView
    }
    g.appendChild = function(a, b) {
        a.appendChild(b)
    };
    g.contains = function(a, b) {
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;)
            b = b.parentNode;
        return b == a
    };
    var M = {},
        Kb = !y || y && 9 <= bb,
        Lb = y && !C("9");
    !B || C("528");
    A && C("1.9b") || y && C("8") || Xa && C("9.5") || B && C("528");
    A && !C("8") || y && C("9");
    var Mb = "ontouchstart" in h || !!(h.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!h.navigator || !h.navigator.msMaxTouchPoints);

    function O() {
        0 != Nb && (Ob[da(this)] = this)
    }
    var Nb = 0,
        Ob = {};
    O.prototype.qb = !1;
    O.prototype.W = function() {
        if (!this.qb && (this.qb = !0, this.e(), 0 != Nb)) {
            var a = da(this);
            delete Ob[a]
        }
    };
    O.prototype.e = function() {
        if (this.Ib)
            for (; this.Ib.length;)
                this.Ib.shift()()
    };

    function Pb(a) {
        a && "function" == typeof a.W && a.W()
    };

    function P(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.U = !1;
        this.Jb = !0
    }
    P.prototype.e = function() {};
    P.prototype.W = function() {};
    P.prototype.stopPropagation = function() {
        this.U = !0
    };
    P.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.Jb = !1
    };
    M.Mc = function(a) {
        return B ? "webkit" + a : Xa ? "o" + a.toLowerCase() : a.toLowerCase()
    };

    function Qb(a) {
        Qb[" "](a);
        return a
    }
    Qb[" "] = function() {};

    function Q(a, b) {
        P.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.ia = this.state = null;
        if (a) {
            var c = this.type = a.type;
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            var d = a.relatedTarget;
            if (d) {
                if (A) {
                    var e;
                    a: {
                        try {
                            Qb(d.nodeName);
                            e = !0;
                            break a
                        } catch (f) {}
                        e = !1
                    }
                    e || (d = null)
                }
            } else
                "mouseover" == c ?
                d = a.fromElement : "mouseout" == c && (d = a.toElement);
            this.relatedTarget = d;
            this.offsetX = B || void 0 !== a.offsetX ? a.offsetX : a.layerX;
            this.offsetY = B || void 0 !== a.offsetY ? a.offsetY : a.layerY;
            this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
            this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
            this.screenX = a.screenX || 0;
            this.screenY = a.screenY || 0;
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey =
                a.metaKey;
            this.state = a.state;
            this.ia = a;
            a.defaultPrevented && this.preventDefault()
        }
    }
    v(Q, P);
    Q.prototype.stopPropagation = function() {
        Q.g.stopPropagation.call(this);
        this.ia.stopPropagation ? this.ia.stopPropagation() : this.ia.cancelBubble = !0
    };
    Q.prototype.preventDefault = function() {
        Q.g.preventDefault.call(this);
        var a = this.ia;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1, Lb)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {}
    };
    Q.prototype.e = function() {};
    var Rb = "closure_listenable_" + (1E6 * Math.random() | 0);

    function R(a) {
        try {
            return !(!a || !a[Rb])
        } catch (b) {
            return !1
        }
    }
    var Sb = 0;

    function Tb(a, b, c, d, e) {
        this.T = a;
        this.Ka = null;
        this.src = b;
        this.type = c;
        this.V = !!d;
        this.Aa = e;
        this.key = ++Sb;
        this.fa = this.ta = !1
    }

    function Ub(a) {
        a.fa = !0;
        a.T = null;
        a.Ka = null;
        a.src = null;
        a.Aa = null
    };

    function Vb(a) {
        this.src = a;
        this.f = {};
        this.ra = 0
    }
    g = Vb.prototype;
    g.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.f[f];
        a || (a = this.f[f] = [], this.ra++);
        var k = Wb(a, b, d, e); - 1 < k ? (b = a[k], c || (b.ta = !1)) : (b = new Tb(b, this.src, f, !!d, e), b.ta = c, a.push(b));
        return b
    };
    g.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.f))
            return !1;
        var e = this.f[a];
        b = Wb(e, b, c, d);
        return -1 < b ? (Ub(e[b]), w.splice.call(e, b, 1), 0 == e.length && (delete this.f[a], this.ra--), !0) : !1
    };

    function Xb(a, b) {
        var c = b.type;
        if (!(c in a.f))
            return !1;
        var d = Fa(a.f[c], b);
        d && (Ub(b), 0 == a.f[c].length && (delete a.f[c], a.ra--));
        return d
    }
    g.O = function(a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.f)
            if (!a || c == a) {
                for (var d = this.f[c], e = 0; e < d.length; e++)
                    ++b, Ub(d[e]);
                delete this.f[c];
                this.ra--
            }
        return b
    };
    g.la = function(a, b) {
        var c = this.f[a.toString()],
            d = [];
        if (c)
            for (var e = 0; e < c.length; ++e) {
                var f = c[e];
                f.V == b && d.push(f)
            }
        return d
    };
    g.R = function(a, b, c, d) {
        a = this.f[a.toString()];
        var e = -1;
        a && (e = Wb(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    g.ma = function(a, b) {
        var c = n(a),
            d = c ? a.toString() : "",
            e = n(b);
        return La(this.f, function(a) {
            for (var k = 0; k < a.length; ++k)
                if (!(c && a[k].type != d || e && a[k].V != b))
                    return !0;
            return !1
        })
    };

    function Wb(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.fa && f.T == b && f.V == !!c && f.Aa == d)
                return e
        }
        return -1
    };
    M.Nc = {};
    M.Ra = "closure_lm_" + (1E6 * Math.random() | 0);
    M.tc = "on";
    M.hb = {};
    M.Pa = 2;
    M.Da = 0;
    M.b = function(a, b, c, d, e) {
        if (q(b)) {
            for (var f = 0; f < b.length; f++)
                M.b(a, b[f], c, d, e);
            return null
        }
        c = M.Oa(c);
        return R(a) ? a.b(b, c, d, e) : M.Ca(a, b, c, !1, d, e)
    };
    M.Ca = function(a, b, c, d, e, f) {
        if (!b)
            throw Error("Invalid event type");
        var k = !!e;
        if (k && !Kb) {
            if (0 == M.Pa)
                return Aa("Can not register capture listener in IE8-."), null;
            if (1 == M.Pa)
                return null
        }
        var l = M.L(a);
        l || (a[M.Ra] = l = new Vb(a));
        c = l.add(b, c, d, e, f);
        if (c.Ka)
            return c;
        d = M.ec();
        c.Ka = d;
        d.src = a;
        d.T = c;
        a.addEventListener ? a.addEventListener(b.toString(), d, k) : a.attachEvent(M.xb(b.toString()), d);
        M.Da++;
        return c
    };
    M.ec = function() {
        var a = M.Za,
            b = Kb ? function(c) {
                return a.call(b.src, b.T, c)
            } : function(c) {
                c = a.call(b.src, b.T, c);
                if (!c)
                    return c
            };
        return b
    };
    M.ca = function(a, b, c, d, e) {
        if (q(b)) {
            for (var f = 0; f < b.length; f++)
                M.ca(a, b[f], c, d, e);
            return null
        }
        c = M.Oa(c);
        return R(a) ? a.ca(b, c, d, e) : M.Ca(a, b, c, !0, d, e)
    };
    M.mc = function(a, b, c, d, e) {
        b.b(a, c, d, e)
    };
    M.s = function(a, b, c, d, e) {
        if (q(b)) {
            for (var f = 0; f < b.length; f++)
                M.s(a, b[f], c, d, e);
            return null
        }
        c = M.Oa(c);
        if (R(a))
            return a.s(b, c, d, e);
        if (!a)
            return !1;
        if (a = M.L(a))
            if (b = a.R(b, c, !!d, e))
                return M.H(b);
        return !1
    };
    M.H = function(a) {
        if ("number" == typeof a || !a || a.fa)
            return !1;
        var b = a.src;
        if (R(b))
            return b.H(a);
        var c = a.type,
            d = a.Ka;
        b.removeEventListener ? b.removeEventListener(c, d, a.V) : b.detachEvent && b.detachEvent(M.xb(c), d);
        M.Da--;
        (c = M.L(b)) ? (Xb(c, a), 0 == c.ra && (c.src = null, b[M.Ra] = null)) : Ub(a);
        return !0
    };
    M.Bc = function(a, b, c, d, e) {
        b.s(a, c, d, e)
    };
    M.O = function(a, b) {
        if (!a)
            return 0;
        if (R(a))
            return a.p ? a.p.O(b) : 0;
        var c = M.L(a);
        if (!c)
            return 0;
        var d = 0,
            e = b && b.toString(),
            f;
        for (f in c.f)
            if (!e || f == e)
                for (var k = Ha(c.f[f]), l = 0; l < k.length; ++l)
                    M.H(k[l]) && ++d;
        return d
    };
    M.Qc = function() {
        return M.Da = 0
    };
    M.la = function(a, b, c) {
        return R(a) ? a.la(b, c) : a ? (a = M.L(a)) ? a.la(b, c) : [] : []
    };
    M.R = function(a, b, c, d, e) {
        c = M.Oa(c);
        d = !!d;
        return R(a) ? a.R(b, c, d, e) : a ? (a = M.L(a)) ? a.R(b, c, d, e) : null : null
    };
    M.ma = function(a, b, c) {
        if (R(a))
            return a.ma(b, c);
        a = M.L(a);
        return !!a && a.ma(b, c)
    };
    M.Jc = function(a) {
        var b = [],
            c;
        for (c in a)
            a[c] && a[c].id ? b.push(c + " = " + a[c] + " (" + a[c].id + ")") : b.push(c + " = " + a[c]);
        return b.join("\n")
    };
    M.xb = function(a) {
        return a in M.hb ? M.hb[a] : M.hb[a] = M.tc + a
    };
    M.Z = function(a, b, c, d) {
        return R(a) ? a.Z(b, c, d) : M.Xa(a, b, c, d)
    };
    M.Xa = function(a, b, c, d) {
        var e = 1;
        if (a = M.L(a))
            if (b = a.f[b.toString()])
                for (b = Ha(b), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.V == c && !f.fa && (e &= !1 !== M.Wa(f, d))
                }
        return Boolean(e)
    };
    M.Wa = function(a, b) {
        var c = a.T,
            d = a.Aa || a.src;
        a.ta && M.H(a);
        return c.call(d, b)
    };
    M.Kc = function() {
        return M.Da
    };
    M.dispatchEvent = function(a, b) {
        return a.dispatchEvent(b)
    };
    M.Oc = function(a) {
        M.Za = a.Pc(M.Za)
    };
    M.Za = function(a, b) {
        if (a.fa)
            return !0;
        if (!Kb) {
            var c;
            if (!(c = b))
                a: {
                    c = ["window", "event"];
                    for (var d = h, e; e = c.shift();)
                        if (null != d[e])
                            d = d[e];
                        else {
                            c = null;
                            break a
                        }
                    c = d
                }
            e = c;
            c = new Q(e, this);
            d = !0;
            if (2 == M.Pa) {
                if (!M.kc(e)) {
                    M.nc(e);
                    e = [];
                    for (var f = c.currentTarget; f; f = f.parentNode)
                        e.push(f);
                    for (var f = a.type, k = e.length - 1; !c.U && 0 <= k; k--)
                        c.currentTarget = e[k], d &= M.Xa(e[k], f, !0, c);
                    for (k = 0; !c.U && k < e.length; k++)
                        c.currentTarget = e[k], d &= M.Xa(e[k], f, !1, c)
                }
            } else
                d = M.Wa(a, c);
            return d
        }
        return M.Wa(a, new Q(b, this))
    };
    M.nc = function(a) {
        var b = !1;
        if (0 == a.keyCode)
            try {
                a.keyCode = -1;
                return
            } catch (c) {
                b = !0
            }
        if (b || void 0 == a.returnValue)
            a.returnValue = !0
    };
    M.kc = function(a) {
        return 0 > a.keyCode || void 0 != a.returnValue
    };
    M.Ac = 0;
    M.Lc = function(a) {
        return a + "_" + M.Ac++
    };
    M.L = function(a) {
        a = a[M.Ra];
        return a instanceof Vb ? a : null
    };
    M.nb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    M.Oa = function(a) {
        return s(a) ? a : a[M.nb] || (a[M.nb] = function(b) {
            return a.handleEvent(b)
        })
    };

    function T(a) {
        O.call(this);
        this.N = a;
        this.d = {}
    }
    v(T, O);
    var Yb = [];
    g = T.prototype;
    g.b = function(a, b, c, d) {
        return this.Ca(a, b, c, d)
    };
    g.Ca = function(a, b, c, d, e) {
        q(b) || (b && (Yb[0] = b.toString()), b = Yb);
        for (var f = 0; f < b.length; f++) {
            var k = M.b(a, b[f], c || this.handleEvent, d || !1, e || this.N || this);
            if (!k)
                break;
            this.d[k.key] = k
        }
        return this
    };
    g.ca = function(a, b, c, d) {
        return Zb(this, a, b, c, d)
    };

    function Zb(a, b, c, d, e, f) {
        if (q(c))
            for (var k = 0; k < c.length; k++)
                Zb(a, b, c[k], d, e, f);
        else {
            b = M.ca(b, c, d || a.handleEvent, e, f || a.N || a);
            if (!b)
                return a;
            a.d[b.key] = b
        }
        return a
    }
    g.mc = function(a, b, c, d) {
        b.b(a, c, d, this.N || this, this);
        return this
    };
    g.s = function(a, b, c, d, e) {
        if (q(b))
            for (var f = 0; f < b.length; f++)
                this.s(a, b[f], c, d, e);
        else if (a = M.R(a, b, c || this.handleEvent, d, e || this.N || this))
            M.H(a), delete this.d[a.key];
        return this
    };
    g.Bc = function(a, b, c, d, e) {
        b.s(a, c, d, e || this.N || this, this);
        return this
    };
    g.O = function() {
        Ka(this.d, M.H);
        this.d = {}
    };
    g.e = function() {
        T.g.e.call(this);
        this.O()
    };
    g.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };

    function U() {
        O.call(this);
        this.p = new Vb(this);
        this.Tb = this
    }
    v(U, O);
    U.prototype[Rb] = !0;
    g = U.prototype;
    g.Ga = null;
    g.lb = function(a) {
        this.Ga = a
    };
    g.addEventListener = function(a, b, c, d) {
        M.b(this, a, b, c, d)
    };
    g.removeEventListener = function(a, b, c, d) {
        M.s(this, a, b, c, d)
    };
    g.dispatchEvent = function(a) {
        var b, c = this.Ga;
        if (c)
            for (b = []; c; c = c.Ga)
                b.push(c);
        var c = this.Tb,
            d = a.type || a;
        if (r(a))
            a = new P(a, c);
        else if (a instanceof P)
            a.target = a.target || c;
        else {
            var e = a;
            a = new P(d, c);
            Qa(a, e)
        }
        var e = !0,
            f;
        if (b)
            for (var k = b.length - 1; !a.U && 0 <= k; k--)
                f = a.currentTarget = b[k], e = f.Z(d, !0, a) && e;
        a.U || (f = a.currentTarget = c, e = f.Z(d, !0, a) && e, a.U || (e = f.Z(d, !1, a) && e));
        if (b)
            for (k = 0; !a.U && k < b.length; k++)
                f = a.currentTarget = b[k], e = f.Z(d, !1, a) && e;
        return e
    };
    g.e = function() {
        U.g.e.call(this);
        this.p && this.p.O(void 0);
        this.Ga = null
    };
    g.b = function(a, b, c, d) {
        return this.p.add(String(a), b, !1, c, d)
    };
    g.ca = function(a, b, c, d) {
        return this.p.add(String(a), b, !0, c, d)
    };
    g.s = function(a, b, c, d) {
        return this.p.remove(String(a), b, c, d)
    };
    g.H = function(a) {
        return Xb(this.p, a)
    };
    g.Z = function(a, b, c) {
        a = this.p.f[String(a)];
        if (!a)
            return !0;
        a = Ha(a);
        for (var d = !0, e = 0; e < a.length; ++e) {
            var f = a[e];
            if (f && !f.fa && f.V == b) {
                var k = f.T,
                    l = f.Aa || f.src;
                f.ta && this.H(f);
                d = !1 !== k.call(l, c) && d
            }
        }
        return d && !1 != c.Jb
    };
    g.la = function(a, b) {
        return this.p.la(String(a), b)
    };
    g.R = function(a, b, c, d) {
        return this.p.R(String(a), b, c, d)
    };
    g.ma = function(a, b) {
        return this.p.ma(n(a) ? String(a) : void 0, b)
    };

    function $b() {
        U.call(this);
        this.i = ac;
        this.tb = this.startTime = null
    }
    v($b, U);
    var ac = 0;
    $b.prototype.u = function(a) {
        this.dispatchEvent(a)
    };

    function bc(a, b, c) {
        O.call(this);
        this.eb = a;
        this.jc = b || 0;
        this.N = c;
        this.Xb = t(this.bc, this)
    }
    v(bc, O);
    g = bc.prototype;
    g.D = 0;
    g.e = function() {
        bc.g.e.call(this);
        this.stop();
        delete this.eb;
        delete this.N
    };
    g.start = function(a) {
        this.stop();
        var b = this.Xb;
        a = n(a) ? a : this.jc;
        if (!s(b))
            if (b && "function" == typeof b.handleEvent)
                b = t(b.handleEvent, b);
            else
                throw Error("Invalid listener argument");
        this.D = 2147483647 < a ? -1 : h.setTimeout(b, a || 0)
    };
    g.stop = function() {
        0 != this.D && h.clearTimeout(this.D);
        this.D = 0
    };
    g.bc = function() {
        this.D = 0;
        this.eb && this.eb.call(this.N)
    };
    var Oa = {},
        cc = null;

    function dc(a) {
        a = da(a);
        delete Oa[a];
        Na() && cc && cc.stop()
    }

    function ec() {
        cc || (cc = new bc(function() {
            fc()
        }, 20));
        var a = cc;
        0 != a.D || a.start()
    }

    function fc() {
        var a = ja();
        Ka(Oa, function(b) {
            gc(b, a)
        });
        Na() || ec()
    };

    function hc(a, b, c, d) {
        $b.call(this);
        if (!q(a) || !q(b))
            throw Error("Start and end parameters must be arrays");
        if (a.length != b.length)
            throw Error("Start and end points must be the same length");
        this.pa = a;
        this.dc = b;
        this.duration = c;
        this.ob = d;
        this.coords = []
    }
    v(hc, $b);
    g = hc.prototype;
    g.r = 0;
    g.play = function(a) {
        if (a || this.i == ac)
            this.r = 0, this.coords = this.pa;
        else if (1 == this.i)
            return !1;
        dc(this);
        this.startTime = a = ja(); - 1 == this.i && (this.startTime -= this.duration * this.r);
        this.tb = this.startTime + this.duration;
        this.r || this.u("begin");
        this.u("play"); - 1 == this.i && this.u("resume");
        this.i = 1;
        var b = da(this);
        b in Oa || (Oa[b] = this);
        ec();
        gc(this, a);
        return !0
    };
    g.stop = function(a) {
        dc(this);
        this.i = ac;
        a && (this.r = 1);
        ic(this, this.r);
        this.u("stop");
        this.u("end")
    };
    g.pause = function() {
        1 == this.i && (dc(this), this.i = -1, this.u("pause"))
    };
    g.e = function() {
        this.i == ac || this.stop(!1);
        this.u("destroy");
        hc.g.e.call(this)
    };

    function gc(a, b) {
        a.r = (b - a.startTime) / (a.tb - a.startTime);
        1 <= a.r && (a.r = 1);
        ic(a, a.r);
        1 == a.r ? (a.i = ac, dc(a), a.u("finish"), a.u("end")) : 1 == a.i && a.u("animate")
    }

    function ic(a, b) {
        s(a.ob) && (b = a.ob(b));
        a.coords = Array(a.pa.length);
        for (var c = 0; c < a.pa.length; c++)
            a.coords[c] = (a.dc[c] - a.pa[c]) * b + a.pa[c]
    }
    g.u = function(a) {
        this.dispatchEvent(new jc(a, this))
    };

    function jc(a, b) {
        P.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.z = b.coords[2];
        this.duration = b.duration;
        this.r = b.r;
        this.state = b.i
    }
    v(jc, P);

    function kc(a) {
        return 1 - Math.pow(1 - a, 3)
    };

    function lc(a, b) {
        r(b) ? mc(a, void 0, b) : Ka(b, ia(mc, a))
    }

    function mc(a, b, c) {
        var d;
        a: if (d = xa(c), void 0 === a.style[d] && (c = (B ? "Webkit" : A ? "Moz" : y ? "ms" : Xa ? "O" : null) + ya(c), void 0 !== a.style[c])) {
                d = c;
                break a
            }
        d && (a.style[d] = b)
    }

    function nc(a) {
        var b;
        a: {
            b = vb(a);
            if (b.defaultView && b.defaultView.getComputedStyle && (b = b.defaultView.getComputedStyle(a, null))) {
                b = b.position || b.getPropertyValue("position") || "";
                break a
            }
            b = ""
        }
        return b || (a.currentStyle ? a.currentStyle.position : null) || a.style && a.style.position
    }

    function qc(a) {
        if (y && !(y && 8 <= bb))
            return a.offsetParent;
        var b = vb(a),
            c = nc(a),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (c = nc(a), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
                return a;
        return null
    };

    function rc() {}
    m(rc);
    rc.prototype.Hb = 0;

    function V() {
        O.call(this);
        this.A = [];
        this.qa = {}
    }
    v(V, O);
    V.prototype.Eb = 1;
    V.prototype.La = 0;

    function sc(a, b, c, d) {
        var e = a.qa[b];
        e || (e = a.qa[b] = []);
        var f = a.Eb;
        a.A[f] = b;
        a.A[f + 1] = c;
        a.A[f + 2] = d;
        a.Eb = f + 3;
        e.push(f)
    }
    V.prototype.ib = function(a, b) {
        var c = this.qa[a];
        if (c) {
            this.La++;
            for (var d = Ja(arguments, 1), e = 0, f = c.length; e < f; e++) {
                var k = c[e];
                this.A[k + 1].apply(this.A[k + 2], d)
            }
            this.La--;
            if (this.oa && 0 == this.La)
                for (; c = this.oa.pop();)
                    if (0 != this.La)
                        this.oa || (this.oa = []), this.oa.push(c);
                    else if (d = this.A[c])
                (d = this.qa[d]) && Fa(d, c), delete this.A[c], delete this.A[c + 1], delete this.A[c + 2]
        }
    };
    V.prototype.e = function() {
        V.g.e.call(this);
        delete this.A;
        delete this.qa;
        delete this.oa
    };

    function W(a) {
        U.call(this);
        this.l = a || L()
    }
    v(W, U);
    g = W.prototype;
    g.bb = rc.k();
    g.D = null;
    g.ba = !1;
    g.a = null;
    g.Ha = null;
    g.wa = null;
    g.va = null;
    g.Nb = !1;
    g.aa = function() {
        return this.a
    };
    g.Ya = function(a) {
        return this.a ? this.l.Ya(a, this.a) : null
    };

    function tc(a) {
        a.S || (a.S = new T(a));
        return a.S
    }
    g.lb = function(a) {
        if (this.Ha && this.Ha != a)
            throw Error("Method not supported");
        W.g.lb.call(this, a)
    };
    g.$ = function() {
        return this.l
    };
    g.Ta = function() {
        this.a = this.l.createElement("div")
    };
    g.m = function(a) {
        this.a = a
    };

    function uc(a) {
        a.ba = !0;
        vc(a, function(a) {
            !a.ba && a.aa() && uc(a)
        })
    }

    function wc(a) {
        vc(a, function(a) {
            a.ba && wc(a)
        });
        a.S && a.S.O();
        a.ba = !1
    }
    g.e = function() {
        this.ba && wc(this);
        this.S && (this.S.W(), delete this.S);
        vc(this, function(a) {
            a.W()
        });
        !this.Nb && this.a && Fb(this.a);
        this.Ha = this.a = this.va = this.wa = null;
        W.g.e.call(this)
    };
    g.ja = function() {
        return this.a
    };

    function vc(a, b) {
        a.wa && Ca(a.wa, b, void 0)
    }
    g.removeChild = function(a, b) {
        if (a) {
            var c = r(a) ? a : a.D || (a.D = ":" + (a.bb.Hb++).toString(36)),
                d;
            this.va && c ? (d = this.va, d = (c in d ? d[c] : void 0) || null) : d = null;
            a = d;
            if (c && a) {
                d = this.va;
                c in d && delete d[c];
                Fa(this.wa, a);
                b && (wc(a), a.a && Fb(a.a));
                c = a;
                if (null == c)
                    throw Error("Unable to set parent component");
                c.Ha = null;
                W.g.lb.call(c, null)
            }
        }
        if (!a)
            throw Error("Child is not in parent component");
        return a
    };

    function xc(a) {
        U.call(this);
        this.j = a || window;
        this.Ea = M.b(this.j, "resize", this.za, !1, this);
        this.ha = zb(this.j || window)
    }
    v(xc, U);
    g = xc.prototype;
    g.Ea = null;
    g.j = null;
    g.ha = null;
    g.e = function() {
        xc.g.e.call(this);
        this.Ea && (M.H(this.Ea), this.Ea = null);
        this.ha = this.j = null
    };
    g.za = function() {
        var a = zb(this.j || window),
            b = this.ha;
        a == b || a && b && a.width == b.width && a.height == b.height || (this.ha = a, this.dispatchEvent("resize"))
    };
    var yc;

    function zc(a) {
        if (a.classList)
            return a.classList;
        a = a.className;
        return r(a) && a.match(/\S+/g) || []
    }

    function Ac(a, b) {
        return a.classList ? a.classList.contains(b) : Ea(zc(a), b)
    }

    function Bc(a, b) {
        a.classList ? a.classList.add(b) : Ac(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }

    function Cc(a, b) {
        a.classList ? a.classList.remove(b) : Ac(a, b) && (a.className = Da(zc(a), function(a) {
            return a != b
        }).join(" "))
    };

    function X(a, b, c, d, e) {

        function f(a) {
            a && (a.tabIndex = 0, a.setAttribute("role", "tab"), Bc(a, "goog-zippy-header"), a && k.Gb.b(a, "click", k.rc), a && k.Fb.b(a, "keydown", k.sc))
        }
        U.call(this);
        this.l = e || L();
        this.Y = this.l.aa(a) || null;
        this.Va = this.l.aa(d || null);
        this.X = (this.cb = s(b) ? b : null) || !b ? null : this.l.aa(b);
        this.Q = !0 == c;
        this.Fb = new T(this);
        this.Gb = new T(this);
        var k = this;
        f(this.Y);
        f(this.Va);
        this.jb(this.Q)
    }
    v(X, U);
    g = X.prototype;
    g.e = function() {
        X.g.e.call(this);
        Pb(this.Fb);
        Pb(this.Gb)
    };
    g.ja = function() {
        return this.X
    };
    g.toggle = function() {
        this.jb(!this.Q)
    };
    g.jb = function(a) {
        this.X ? this.X.style.display = a ? "" : "none" : a && this.cb && (this.X = this.cb());
        this.X && Bc(this.X, "goog-zippy-content");
        this.Va ? (this.Y.style.display = a ? "none" : "", this.Va.style.display = a ? "" : "none") : Dc(this, a);
        this.Q = a;
        this.dispatchEvent(new Ec("toggle", this))
    };

    function Dc(a, b) {
        if (a.Y) {
            var c = a.Y;
            b ? Bc(c, "goog-zippy-expanded") : Cc(c, "goog-zippy-expanded");
            c = a.Y;
            b ? Cc(c, "goog-zippy-collapsed") : Bc(c, "goog-zippy-collapsed");
            var c = a.Y,
                d = b;
            ba(d) && (d = d.join(" "));
            "" === d || void 0 == d ? (yc || (yc = {
                atomic: !1,
                autocomplete: "none",
                dropeffect: "none",
                haspopup: !1,
                live: "off",
                multiline: !1,
                multiselectable: !1,
                orientation: "vertical",
                readonly: !1,
                relevant: "additions text",
                required: !1,
                sort: "none",
                busy: !1,
                disabled: !1,
                hidden: !1,
                invalid: "false"
            }), d = yc, "expanded" in d ? c.setAttribute("aria-expanded",
                d.expanded) : c.removeAttribute("aria-expanded")) : c.setAttribute("aria-expanded", d)
        }
    }
    g.sc = function(a) {
        if (13 == a.keyCode || 32 == a.keyCode)
            this.toggle(), this.dispatchEvent(new P("action", this)), a.preventDefault(), a.stopPropagation()
    };
    g.rc = function() {
        this.toggle();
        this.dispatchEvent(new P("action", this))
    };

    function Ec(a, b) {
        P.call(this, a, b)
    }
    v(Ec, P);

    function Fc() {
        P.call(this, "navigate")
    }
    v(Fc, P);

    function Gc(a, b) {
        U.call(this);
        this.j = a || window;
        this.Ma = b || null;
        M.b(this.j, "popstate", this.Fa, !1, this);
        M.b(this.j, "hashchange", this.Fa, !1, this)
    }
    v(Gc, U);
    g = Gc.prototype;
    g.cc = !1;
    g.mb = !0;
    g.Ia = "/";
    g.e = function() {
        M.s(this.j, "popstate", this.Fa, !1, this);
        this.mb && M.s(this.j, "hashchange", this.Fa, !1, this)
    };
    g.Fa = function() {
        this.cc && this.dispatchEvent(new Fc)
    };

    function Hc(a, b, c, d) {
        d = d || L();
        var e = d.Ta("div", {
            style: "overflow:hidden"
        });
        b = d.aa(b);
        b.parentNode.replaceChild(e, b);
        e.appendChild(b);
        this.xa = e;
        this.v = null;
        X.call(this, a, b, c, void 0, d);
        a = this.Q;
        this.xa.style.display = a ? "" : "none";
        Dc(this, a)
    }
    v(Hc, X);
    g = Hc.prototype;
    g.Vb = 500;
    g.Ub = kc;
    g.jb = function(a) {
        if (this.Q != a || this.v) {
            "none" == this.xa.style.display && (this.xa.style.display = "");
            var b = this.ja().offsetHeight,
                c = 0;
            this.v ? (a = this.Q, M.O(this.v), this.v.stop(!1), c = b - Math.abs(parseInt(this.ja().style.marginTop, 10))) : c = a ? 0 : b;
            Dc(this, a);
            this.v = new hc([0, c], [0, a ? b : 0], this.Vb, this.Ub);
            M.b(this.v, ["begin", "animate", "end"], this.pc, !1, this);
            M.b(this.v, "end", t(this.qc, this, a));
            this.v.play(!1)
        }
    };
    g.pc = function(a) {
        var b = this.ja();
        b.style.marginTop = a.y - b.offsetHeight + "px"
    };
    g.qc = function(a) {
        a && (this.ja().style.marginTop = "0");
        M.O(this.v);
        this.Q = a;
        this.v = null;
        a || (this.xa.style.display = "none");
        this.dispatchEvent(new Ec("toggle", this))
    };

    function Ic() {
        U.call(this);
        this.vc = 600;
        this.xc = 1;
        this.yc = kc;
        this.wc = new K(0, 0);
        this.Ua = Ab(document);
        this.l = new L;
        this.ub = new T(this)
    }
    v(Ic, U);
    Ic.prototype.scrollTo = function(a, b) {
        this.Ua = Ab(document);
        var c = b || this.wc;
        a = new K(c.x + a.x, c.y + a.y);
        c = new hc([this.Ua.x, this.Ua.y], [a.x, a.y], this.xc * this.vc, this.yc);
        this.ub.b(c, ["begin", "finish", "animate"], this.hc);
        c.play()
    };
    Ic.prototype.hc = function(a) {
        switch (a.type) {
            case "begin":
                this.dispatchEvent("b");
                break;
            case "finish":
                window.scrollTo(a.x, a.y);
                this.dispatchEvent("a");
                a.W();
                break;
            case "animate":
                window.scrollTo(a.x, a.y)
        }
    };
    Ic.prototype.fc = function(a) {
        a.preventDefault();
        a = a.target;
        var b = Hb(a);
        b && (a = b);
        a = a.href.match(/(#)(.*)/)[2];
        b = r(a) ? document.getElementById(a) : a;
        Jc(b, !0);
        var c, d = vb(b),
            e = nc(b),
            f = A && d.getBoxObjectFor && !b.getBoundingClientRect && "absolute" == e && (c = d.getBoxObjectFor(b)) && (0 > c.screenX || 0 > c.screenY),
            k = new K(0, 0),
            l;
        c = d ? vb(d) : document;
        (l = !y || y && 9 <= bb) || (l = "CSS1Compat" == L(c).n.compatMode);
        l = l ? c.documentElement : c.body;
        if (b != l)
            if (b.getBoundingClientRect) {
                b: {
                    var p;
                    try {
                        p = b.getBoundingClientRect()
                    } catch (z) {
                        c = {
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0
                        };
                        break b
                    }
                    y && b.ownerDocument.body && (c = b.ownerDocument, p.left -= c.documentElement.clientLeft + c.body.clientLeft, p.top -= c.documentElement.clientTop + c.body.clientTop);
                    c = p
                }
                p = L(d);
                p = Ab(p.n);
                k.x = c.left + p.x;
                k.y = c.top + p.y
            } else if (d.getBoxObjectFor && !f)
            c = d.getBoxObjectFor(b), p = d.getBoxObjectFor(l), k.x = c.screenX - p.screenX, k.y = c.screenY - p.screenY;
        else {
            c = b;
            do {
                k.x += c.offsetLeft;
                k.y += c.offsetTop;
                c != b && (k.x += c.clientLeft || 0, k.y += c.clientTop || 0);
                if (B && "fixed" == nc(c)) {
                    k.x += d.body.scrollLeft;
                    k.y +=
                        d.body.scrollTop;
                    break
                }
                c = c.offsetParent
            } while (c && c != b);
            if (Xa || B && "absolute" == e)
                k.y -= d.body.offsetTop;
            for (c = b;
                (c = qc(c)) && c != d.body && c != l;)
                k.x -= c.scrollLeft, Xa && "TR" == c.tagName || (k.y -= c.scrollTop)
        }
        this.scrollTo(k, void 0);
        window.location.hash = a;
        Jc(b, !1)
    };

    function Jc(a, b) {
        var c = a.id.match("_temp");
        b != c && (a.id = b ? a.id + "_temp" : a.id.replace("_temp", ""))
    }
    var Kc = ["subid", "utm_source", "utm_campaign", "utm_medium"];

    function Lc(a) {
        var b = a.getAttribute("href") || "";
        return I.ab(a, "gweb-uri-ignore") || 0 == b.indexOf("#")
    }

    function Mc() {
        this.C = {};
        this.bb = rc.k()
    }
    m(Mc);
    u("qp.Data", Mc);
    Mc.prototype.Qa = "data-qp-ui-data-id";
    Mc.prototype.set = function(a, b, c) {
        var d = a.getAttribute(this.Qa);
        d || (d = ":" + (this.bb.Hb++).toString(36), a.setAttribute(this.Qa, "qp" + d));
        this.C.hasOwnProperty(d) || (this.C[d] = {});
        n(c) ? this.C[d][b] = c : delete this.C[d][b]
    };
    Mc.prototype.get = function(a, b) {
        var c = a.getAttribute(this.Qa),
            d, e;
        c && this.C.hasOwnProperty(c) && (d = this.C[c]);
        n(b) ? d && d.hasOwnProperty(b) && (e = d[b]) : e = d;
        return e
    };

    function Nc() {
        V.call(this)
    }
    v(Nc, V);
    m(Nc);
    u("qp.PubSub", Nc);

    function Oc() {
        for (var a = {
                uc: "subid utm_source utm_campaign utm_medium utm_term utm_content _adc sourceid".split(" "),
                Wb: !1
            }, b = new D(a.url || window.location.href), c = {}, d = a.uc || Kc, e = 0, f; f = d[e]; e++) {
            var k;
            k = f;
            var l = b.G,
                p = new F(b.K);
            k = l.J(k) ? l.M(k) : p.M(k);
            c[f] = k
        }
        b = a.Wb;
        d = a.links || document.getElementsByTagName("a");
        a = a.Ic || Lc;
        b = n(b) ? b : !0;
        for (e = 0; f = d[e]; e++)
            if (!a(f)) {
                var p = k = new D(f.getAttribute("href")),
                    z = c,
                    N = b,
                    J = p.G,
                    ad = p.K,
                    l = null,
                    oc = !1,
                    pc = !1,
                    S = void 0,
                    la = void 0;
                for (la in z)
                    S = z[la], q(S) && (J.J(la) || !N ? S &&
                        S.length && (rb(J, la, S), oc = !0) : (null === l && (l = new F(ad)), (l.J(la) || N) && S && S.length && (rb(l, la, S), pc = !0)));
                oc && hb(p, J);
                null !== l && pc && (l = ib(l.toString()), E(p), p.K = l);
                f.setAttribute("href", k.toString())
            }
    }
    m(Oc);
    u("qp.tracking.SubID", Oc);
    var Pc = {};

    function Qc() {
        this.C = Mc.k();
        "loading" === document.readyState ? M.ca(document, "readystatechange", this.Cb, !1, this) : this.Cb()
    }
    m(Qc);
    u("qp.ui", Pc);
    u("qp.ui.Initializer", Qc);
    Qc.prototype.Cb = function() {
        var a, b = (a = document) || document;
        a = b.querySelectorAll && b.querySelector ? b.querySelectorAll(".qp-ui") : wb("*", "qp-ui", a);
        for (var b = 0, c = a.length; b < c; ++b) {
            var d = a[b],
                e = d.getAttribute("data-qp-ui"),
                e = e ? JSON.parse(e.replace(/'/g, '"')) : {},
                f = void 0;
            for (f in e)
                if (e.hasOwnProperty(f)) {
                    var k = d,
                        l = f,
                        p = e[f];
                    if (Pc.hasOwnProperty(l)) {
                        var z = this.C.get(k, l);
                        z || (z = Pc[l], z = s(z.k) ? z.k() : new z(k, p), this.C.set(k, l, z))
                    }
                }
        }
    };

    function Y() {
        this.sa = null
    }
    m(Y);
    u("qp.ui.Features", Y);
    Y.prototype.ic = function() {
        "HAS_TOUCH" in this || (this.Sb = Mb);
        return this.Sb
    };
    Y.prototype.hasTouch = Y.prototype.ic;
    Y.prototype.ua = function() {
        "CAN_PLAY_VIDEO" in this || (this.sa = Bb("video"), this.Qb = !!this.sa.canPlayType);
        return this.Qb
    };
    Y.prototype.canPlayVideo = Y.prototype.ua;
    Y.prototype.Yb = function() {
        "CAN_PLAY_H264_VIDEO" in this || (this.Ob = this.ua() && !!this.sa.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""));
        return this.Ob
    };
    Y.prototype.canPlayH264Video = Y.prototype.Yb;
    Y.prototype.$b = function() {
        "CAN_PLAY_WEBM_VIDEO" in this || (this.Rb = this.ua() && !!this.sa.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""));
        return this.Rb
    };
    Y.prototype.canPlayWebmVideo = Y.prototype.$b;
    Y.prototype.Zb = function() {
        "CAN_PLAY_OGG_VIDEO" in this || (this.Pb = this.ua() && !!this.sa.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""));
        return this.Pb
    };
    Y.prototype.canPlayOggVideo = Y.prototype.Zb;
    u("qp.ui.Futurizr", function(a, b) {
        var c = Y.k(),
            d;
        for (d in b)
            b.hasOwnProperty(d) && s(c[d]) && I.enable(a, b[d], c[d]())
    });

    function Z(a, b) {
        this.t = {};
        Qa(this.t, this.constructor && this.constructor.Gc || {}, b || {});
        W.call(this, this.t.Hc);
        if (this.ba)
            throw Error("Component already rendered");
        if (a) {
            this.Nb = !0;
            var c = vb(a);
            this.l && this.l.n == c || (this.l = L(a));
            this.m(a);
            uc(this)
        } else
            throw Error("Invalid element to decorate");
    }
    v(Z, W);
    u("qp.ui.Widget", Z);
    Z.UI_CLASS = "qp-ui-widget";
    Z.defaults = {};
    Z.prototype.m = function(a) {
        Z.g.m.call(this, a);
        (a = (this.constructor || this.__proto__.constructor).UI_CLASS) && I.add(this.a, a)
    };

    function Rc(a, b) {
        Z.call(this, a, b);
        this.w = Nc.k();
        sc(this.w, "uiSideNavDrawerShow", this.show, this);
        sc(this.w, "uiSideNavDrawerHide", this.Ba, this)
    }
    v(Rc, Z);
    u("qp.ui.Mask", Rc);
    Rc.UI_CLASS = "qp-ui-mask";
    Rc.prototype.m = function(a) {
        Rc.g.m.call(this, a);
        this.Kb = this.l.n.documentElement;
        this.fb = this.l.Ta("div", "qp-ui-mask-modal");
        this.l.appendChild(this.a, this.fb)
    };
    Rc.prototype.show = function() {
        I.add(this.fb, "qp-ui-mask-visible");
        I.add(this.Kb, "qp-ui-mask-disable-scroll")
    };
    Rc.prototype.Ba = function() {
        I.remove(this.fb, "qp-ui-mask-visible");
        I.remove(this.Kb, "qp-ui-mask-disable-scroll")
    };

    function Sc() {
        this.gb = h.matchMedia || Tc()
    }
    m(Sc);
    u("qp.ui.MatchMedia", Sc);

    function Tc() {
        var a = document.documentElement,
            b = a.firstElementChild || a.firstChild,
            c = Bb("body"),
            d = Bb("div", {
                id: "mq-test-1"
            });
        lc(d, {
            position: "absolute",
            top: "-100em"
        });
        lc(c, {
            background: "none"
        });
        c.appendChild(d);
        return function(a) {
            var f = !1;
            d.innerHTML = va('&shy;<style media="', oa(a), '">', oa("#mq-test-1 { width: 42px; }"), "</style>");
            b.parentNode && b.parentNode.insertBefore(c, b);
            f = 42 === d.offsetWidth;
            Fb(c);
            return {
                matches: f,
                media: a
            }
        }
    }

    function Uc() {
        xc.call(this);
        U.call(this);
        this.t = {
            base: "desktop",
            breakpoints: {
                "(max-width: 360px)": "mobile",
                "(max-width: 767px)": "desktop-sm",
                "(max-width: 1159px)": "desktop",
                "(max-width: 1429px)": "desktop-lg",
                "(min-width: 1430px)": "desktop-xl"
            }
        };
        this.gb = Sc.k();
        this.i = this.t.base;
        this.Sa = Ma(this.t.breakpoints);
        Vc(this)
    }
    v(Uc, xc);
    m(Uc);
    u("qp.ui.ViewportStateMonitor", Uc);

    function Vc(a) {
        a.za = function() {
            this.ha && this.ha.I();
            var a = this.t.base,
                c = this.Sa.length - 1;
            for (c; 0 <= c; c -= 1) {
                var d = this.gb.gb.call(h, this.Sa[c]);
                d.matches && s(void 0) && (void 0)(d.media);
                d.matches && (a = this.t.breakpoints[this.Sa[c]])
            }
            this.i !== a && (this.i = a, this.dispatchEvent("viewstatechange"))
        };
        M.b(a, "resize", a.za, null, a);
        a.za()
    }

    function Wc(a) {
        var b = Uc.k(); - 1 !== ["mobile", "desktop-sm"].indexOf(b.i) && X.call(this, a, void 0 != a.nextElementSibling ? a.nextElementSibling : Gb(a.nextSibling), !1)
    }
    v(Wc, X);
    u("qp.ui.ResponsiveZippy", Wc);

    function Xc(a, b) {
        Z.call(this, a, b);
        this.na = !1
    }
    v(Xc, Z);
    u("qp.ui.Peekaboo", Xc);
    Xc.UI_CLASS = "qp-ui-peekaboo";
    u("qp.ui.Peekaboo.defaults", {
        "default": -1
    });
    Xc.prototype.m = function(a) {
        Xc.g.m.call(this, a);
        this.ea = this.a.cloneNode(!0);
        I.zc(this.ea, "qp-ui-peekaboo", "qp-ui-peekaboo-placeholder");
        this.ea.setAttribute("aria-hidden", !0);
        a = this.a;
        a.parentNode && a.parentNode.insertBefore(this.ea, a.nextSibling);
        tc(this).b(Jb(this.$()), ["scroll", "resize"], this.Lb, !1, this);
        this.Mb = Uc.k();
        this.Mb.b("viewstatechange", this.Ab, !1, this);
        this.Ab()
    };
    Xc.prototype.Ab = function() {
        var a = this.Mb.i;
        this.oc = this.t.hasOwnProperty(a) ? this.t[a] : this.t.hasOwnProperty("default") ? this.t["default"] : -1;
        this.Lb()
    };
    Xc.prototype.Lb = function() {
        (this.na ? this.ea : this.a).getBoundingClientRect().top <= this.oc ? this.na || (this.na = !0, I.add(this.a, "qp-ui-peekaboo-active"), I.add(this.ea, "qp-ui-peekaboo-active")) : this.na && (this.na = !1, I.remove(this.a, "qp-ui-peekaboo-active"), I.remove(this.ea, "qp-ui-peekaboo-active"))
    };
    u("qp.ui.ScrollSpy", function(a) {
        Yc.k().addElement(a)
    });

    function Yc() {
        W.call(this);
        this.rb = [];
        this.Bb = new Gc;
        tc(this).b(Jb(this.$()), ["scroll", "resize"], this.Cc)
    }
    v(Yc, W);
    m(Yc);
    u("qp.ui.ScrollSpyMonitor", Yc);
    Yc.prototype.addElement = function(a) {
        a.id && this.rb.push(a)
    };
    Yc.prototype.Cc = function() {
        for (var a = this.rb, b = -Infinity, c = "", d = 0, e = a.length; d < e; ++d) {
            var f = a[d],
                k = f.getBoundingClientRect().top;
            0 >= k && k > b && (c = f.id, b = k)
        }
        a = this.Bb;
        a.mb ? (a = a.j.location.href, b = a.indexOf("#"), a = 0 > b ? "" : a.substring(b + 1)) : a = a.Ma ? a.Ma.Rc(a.Ia, a.j.location) : a.j.location.pathname.substr(a.Ia.length);
        c !== a && (a = this.Bb, a.j.history.replaceState(null, a.j.document.title || "", a.mb ? "#" + c : a.Ma ? a.Ma.Fc(c, a.Ia, a.j.location) : a.Ia + c + a.j.location.search), a.dispatchEvent(new Fc))
    };

    function Zc(a, b) {
        Z.call(this, a, b);
        this.w = Nc.k();
        sc(this.w, "uiSideNavToggleClick", this.show, this)
    }
    v(Zc, Z);
    u("qp.ui.SideNavDrawer", Zc);
    Zc.UI_CLASS = "qp-ui-side-nav-drawer";
    g = Zc.prototype;
    g.m = function(a) {
        Zc.g.m.call(this, a);
        this.vb = Mb ? "touchstart" : "click"
    };
    g.contains = function(a) {
        var b = this.a;
        return !!Ib(a, function(a) {
            return b === a
        })
    };
    g.yb = function(a) {
        this.contains(a.target) || this.Ba()
    };
    g.ya = function(a) {
        27 === a.keyCode && this.Ba()
    };
    g.show = function() {
        var a;
        a = this.$().n;
        var b = t(M.b, M, a.body, this.vb, this.yb, !1, this);
        setTimeout(b);
        M.b(a, "keyup", this.ya, !1, this);
        I.add(this.a, "qp-ui-side-nav-drawer-visible");
        this.w.ib("uiSideNavDrawerShow")
    };
    g.Ba = function() {
        var a;
        a = this.$().n;
        var b = t(I.remove, I, this.a, "qp-ui-side-nav-drawer-visible");
        setTimeout(b);
        M.s(a.body, this.vb, this.yb, !1, this);
        M.s(a, "keyup", this.ya, !1, this);
        this.w.ib("uiSideNavDrawerHide")
    };

    function $(a, b) {
        Z.call(this, a, b);
        this.w = Nc.k();
        sc(this.w, "uiSideNavDrawerHide", this.sb, this);
        sc(this.w, "uiSideNavDrawerShow", this.ac, this)
    }
    v($, Z);
    u("qp.ui.SideNavToggle", $);
    $.UI_CLASS = "qp-ui-side-nav-toggle";
    $.prototype.m = function(a) {
        $.g.m.call(this, a);
        this.sb();
        M.b(a, "click", this.$a, !1, this)
    };
    $.prototype.$a = function() {
        this.w.ib("uiSideNavToggleClick");
        this.a.blur()
    };
    $.prototype.sb = function() {
        this.a.setAttribute("aria-expanded", !1)
    };
    $.prototype.ac = function() {
        this.a.setAttribute("aria-expanded", !0)
    };

    function $c(a, b) {
        Hc.call(this, a, void 0 != a.nextElementSibling ? a.nextElementSibling : Gb(a.nextSibling), b)
    }
    v($c, Hc);
    u("qp.ui.SideNavZippy", $c);

    function bd() {
        Ic.call(this);
        var a;
        if (a = wb("a", "gweb-smoothscroll-control", null))
            for (var b = 0, c; c = a[b]; b++) {
                var d;
                d = pb(c.href);
                var e = d.P + d.da,
                    f = pb(window.location.hostname + window.location.pathname);
                if (e == f.P + f.da && d.K) {
                    d = c.href.match(/(#)(.*)/)[2];
                    var k = r(d) ? document.getElementById(d) : d
                }
                k && this.ub.b(c, "click", this.fc)
            }
    }
    v(bd, Ic);
    m(bd);
    u("qp.ui.SmoothScroll", bd);

    function cd(a) {
        Z.call(this, a)
    }
    v(cd, Z);
    u("qp.ui.VideoPlayer", cd);
    cd.UI_CLASS = "qp-ui-video-player";
    g = cd.prototype;
    g.m = function(a) {
        cd.g.m.call(this, a);
        this.B = a.getElementsByTagName("video")[0];
        Mb ? (I.add(this.a, "qp-ui-video-player-touch"), this.a.style.paddingBottom = this.B.height / this.B.width * 100 + "%") : (I.add(this.a, "qp-ui-video-player-mouse"), M.b(a, "click", this.$a, !1, this), this.B.removeAttribute("controls"), this.B.setAttribute("tabindex", 0), M.b(a, ["mouseenter", "mouseleave"], this.zb, !1, this), M.b(this.B, ["focus", "blur"], this.zb, !1, this), M.b(this.B, ["play", "pause"], this.gc, !1, this), M.b(this.B, "keyup", this.ya, !1, this))
    };
    g.zb = function(a) {
        I.enable(this.a, "qp-ui-video-player-hover", "mouseenter" === a.type || "focus" === a.type)
    };
    g.gc = function(a) {
        "play" === a.type ? (I.remove(this.a, "qp-ui-video-player-hover"), I.add(this.a, "qp-ui-video-player-playing")) : I.remove(this.a, "qp-ui-video-player-playing")
    };
    g.$a = function() {
        this.toggle()
    };
    g.ya = function(a) {
        a = a.keyCode;
        27 === a && I.remove(this.a, "qp-ui-video-player-hover");
        if (this.$().Ya("cvox_indicator_container"))
            return null;
        switch (a) {
            case 13:
            case 32:
                this.toggle()
        }
    };
    g.play = function() {
        this.B.play()
    };
    g.pause = function() {
        this.B.pause()
    };
    g.toggle = function() {
        this.B.paused ? this.play() : this.pause()
    };
    Oc.k();
    Qc.k();
})();
