// 以下这句是三目运算的嵌套使用，s变量的初始值为4，若把1>2改为1<2则初始值为3，
// var s = 1 > 2 ? (45 < 3 ? 1 : 3) : 4
// var s = 1 > 2 ? 45 < 3 ? 1 : 3 : 4  // 这两句效果等同

// -------------初始化C--------------------------------
var k, R, C, O, I, M, D, U, N, V, L, F, H, j = 65536, B = 16777216;

function X() {
    R = new Int8Array(k),
        O = new Int16Array(k),
        I = new Int32Array(k),
        C = new Uint8Array(k),
        M = new Uint32Array(k)
}

function G() {
    Ge("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " + Q + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")
}

function K() {
    G()
}

D = V = L = H = 0,
    U = !1;

var W = 5242880
    , Q = 16777216;
var wasmMemory = new WebAssembly.Memory({
    initial: Q / j,
    maximum: Q / j
});
k = wasmMemory.buffer;
X();
I[0] = 1668509029;
O[1] = 25459,
115 !== C[2] || 99 !== C[3]

var z = []
    , Y = []
    , Z = []
    , ee = []
    , te = !1
    , oe = !1;

var a = 16;

function s(e) {
    var t = D;
    return w((D = D + e + 15 & -16) < Q, "not enough memory for static allocation - increase TOTAL_MEMORY"),
        t
}

function c(e, t) {
    // 不管怎么传值进来，t都是undefined,原因是函数放在调用之后创建，得放在调用之前创建
    // t = D;
    return t = t || a,
        e = Math.ceil(e / t) * t
}

D = 7952,
    Y.push();
D += 16,
    H = s(4),
    console.log('N', D)
    N = V = c(D),
    F = c(N + W),
I[H >> 2] = F,
    U = !0;

// -----------初始化C结束

function _getckey() {
    return wasmobject.exports._getckey.apply(null, arguments)
}

je = function stackSave() {
    return wasmobject.exports.stackSave.apply(null, arguments)
};

function _malloc() {
    return wasmobject.exports._malloc.apply(null, arguments)
}

He = function stackRestore() {
    return wasmobject.exports.stackRestore.apply(null, arguments)
};

Fe = function stackAlloc() {
    return wasmobject.exports.stackAlloc.apply(null, arguments)
}

var document = {
    URL: "https://v.qq.com/x/cover/tfc35o92twfe3vi/r0034cy0nt6.html",
    referrer: ""

};

var window = {
    document: document,
    navigator: {
        userAgent: "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36",
        appCodeName: "Mozilla",
        appName: "Netscape",
        platform: "Win32"
    },


};

var wasmTable = new WebAssembly.Table({
    initial: 99,
    maximum: 99,
    element: "anyfunc"
});


function w(e, t) {
    return e
}

function E(e, t, o, i) {
    if (!(0 < i))
        return 0;
    for (var n = o, r = o + i - 1, a = 0; a < e.length; ++a) {
        var s = e.charCodeAt(a);
        if (55296 <= s && s <= 57343 && (s = 65536 + ((1023 & s) << 10) | 1023 & e.charCodeAt(++a)),
        s <= 127) {
            if (r <= o)
                break;
            t[o++] = s
        } else if (s <= 2047) {
            if (r <= o + 1)
                break;
            t[o++] = 192 | s >> 6,
                t[o++] = 128 | 63 & s
        } else if (s <= 65535) {
            if (r <= o + 2)
                break;
            t[o++] = 224 | s >> 12,
                t[o++] = 128 | s >> 6 & 63,
                t[o++] = 128 | 63 & s
        } else if (s <= 2097151) {
            if (r <= o + 3)
                break;
            t[o++] = 240 | s >> 18,
                t[o++] = 128 | s >> 12 & 63,
                t[o++] = 128 | s >> 6 & 63,
                t[o++] = 128 | 63 & s
        } else if (s <= 67108863) {
            if (r <= o + 4)
                break;
            t[o++] = 248 | s >> 24,
                t[o++] = 128 | s >> 18 & 63,
                t[o++] = 128 | s >> 12 & 63,
                t[o++] = 128 | s >> 6 & 63,
                t[o++] = 128 | 63 & s
        } else {
            if (r <= o + 5)
                break;
            t[o++] = 252 | s >> 30,
                t[o++] = 128 | s >> 24 & 63,
                t[o++] = 128 | s >> 18 & 63,
                t[o++] = 128 | s >> 12 & 63,
                t[o++] = 128 | s >> 6 & 63,
                t[o++] = 128 | 63 & s
        }
    }
    return t[o] = 0,
    o - n
}

function S(e, t, o) {
    return w("number" == typeof o, "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),
        E(e, C, t, o)
}

function T(e, t) {
    if (0 === t || !e)
        return "";
    for (var o, i = 0, n = 0; w(e + n < Q),
        i |= o = C[e + n >> 0],
    (0 != o || t) && (n++,
    !t || n != t);)
        ;
    t = t || n;
    var r = "";
    if (i < 128) {
        for (var a; 0 < t;)
            a = String.fromCharCode.apply(String, C.subarray(e, e + Math.min(t, 1024))),
                r = r ? r + a : a,
                e += 1024,
                t -= 1024;
        return r
    }
    return _(C, e)
}

var l = {
    stackSave: function () {
        je()
    },
    stackRestore: function () {
        He()
    },
    arrayToC: function (e) {
        var t, o, i = Fe(e.length);
        return o = i,
            w(0 <= (t = e).length, "writeArrayToMemory array must have a length (should be an array or typed array)"),
            R.set(t, o),
            i
    },
    stringToC: function (e) {
        var t, o = 0;
        return null != e && 0 !== e && (t = 1 + (e.length << 2),
            S(e, o = Fe(t), t)),
            o
    }
}, x = {
    string: l.stringToC,
    array: l.arrayToC
};


function q(e) {
    for (var t = 0, o = 0; o < e.length; ++o) {
        var i = e.charCodeAt(o);
        55296 <= i && i <= 57343 && (i = 65536 + ((1023 & i) << 10) | 1023 & e.charCodeAt(++o)),
            i <= 127 ? ++t : t += i <= 2047 ? 2 : i <= 65535 ? 3 : i <= 2097151 ? 4 : i <= 67108863 ? 5 : 6
    }
    return t
}

// --------------------以下是获取GUID和flowid-----------------------------------

var createGUID = function (e) {
    e = e || 32;
    for (var t = "", o = 1; o <= e; o++) {
        t += Math.floor(16 * Math.random()).toString(16)
    }
    return t
};

var getFlowid = function (platform) {
    playerId = createGUID();
    flowid = playerId + "_" + platform;
    return flowid
};

var getTime = function () {
    return Date.parse(new Date()).toString().substr(0, 10)
}

// -------------------------------------------------------


function u(e, t, o, i, n) {
    // 3
    var r, a, s = (w(a = _getckey, "Cannot call unknown function " + r + ", make sure it is exported"),
        a), c = [], d = 0;
    if (i)
        for (var l = 0; l < i.length; l++) {
            var u = x[o[l]];
            u ? (0 === d && (d = je()),
                c[l] = u(i[l])) : c[l] = i[l]
        }
    var f, p = s.apply(null, c);
    console.log('f, p', f, p)  // 错误再此，初始化值不对，_getckey()函数出来后值不对
    return f = p,
        p = "string" === t ? T(f) : "boolean" === t ? Boolean(f) : f,
    0 !== d && He(d),
        p
}

function getCKey(platform, appVer, vid) {
    // 1
    var e = 'getckey';
    var t = "string";
    var o = ["number", "string", "string", "string", "string", "number"];
    var n = undefined;
    var _args = [platform, appVer, vid, "", createGUID(), Date.parse(new Date()).toString().substr(0, 10)];
    var t1 = u(e, t, o, _args, n);
    return t1
}

var fun_ = function fun() {
};

function getQ() {
    return Q
}

function get_str() {
    function a(e) {
        return e ? 48 < e.length ? e.substr(0, 48) : e : ""
    }

    var e = function () {
        var e = document.URL
            , t = window.navigator.userAgent.toLowerCase()
            , o = "";
        0 < document.referrer.length && (o = document.referrer);
        try {
            0 == o.length && 0 < opener.location.href.length && (o = opener.location.href)
        } catch (e) {
        }
        var i = window.navigator.appCodeName
            , n = window.navigator.appName
            , r = window.navigator.platform
            , e = a(e)
            , o = a(o);
        return e + "|" + (t = a(t)) + "|" + o + "|" + i + "|" + n + "|" + r
    }()
        , t = q(e) + 1
        , o = _malloc(t);
    console.log('o', o, t, e)
    return S(e, o, t + 1),
        o
}

var env = {
    abort: fun_,
    assert: fun_,
    abortOnCannotGrowMemory: fun_,
    abortStackOverflow: fun_,
    enlargeMemory: fun_,
    getTotalMemory: getQ,
    nullFunc_ii: fun_,
    nullFunc_iiii: fun_,
    nullFunc_v: fun_,
    nullFunc_vi: fun_,
    nullFunc_viiii: fun_,
    nullFunc_viiiii: fun_,
    nullFunc_viiiiii: fun_,
    invoke_ii: fun_,
    invoke_iiii: fun_,
    invoke_v: fun_,
    invoke_vi: fun_,
    invoke_viiii: fun_,
    invoke_viiiii: fun_,
    invoke_viiiiii: fun_,
    __ZSt18uncaught_exceptionv: fun_,
    ___cxa_find_matching_catch: fun_,
    ___gxx_personality_v0: fun_,
    ___lock: fun_,
    ___resumeException: fun_,
    ___setErrNo: fun_,
    ___syscall140: fun_,
    ___syscall146: fun_,
    ___syscall54: fun_,
    ___syscall6: fun_,
    ___unlock: fun_,
    _abort: fun_,
    _emscripten_memcpy_big: fun_,
    _get_unicode_str: get_str,
    flush_NO_FILESYSTEM: fun_,
    memory: wasmMemory,
    table: wasmTable,
    DYNAMICTOP_PTR: 7968,
    STACKTOP: 7984,
    STACK_MAX: 5250864,
    memoryBase: 1024,
    tableBase: 0,
    tempDoublePtr: 7952,
};

var wasm_env = {
    global: {
        NaN: NaN,
        Infinity: 1 / 0
    },
    env: env,
    asm2wasm: {
        "f64-rem": function (e, t) {
            return e % t
        },
        debugger: function () {
        }
    },
    "global.Math": Math,
    // parent: {},
};

const fs = require('fs');
var wasm_data = fs.readFileSync('./ckey.wasm');
var buffer = new Uint8Array(wasm_data);
var wasmobject = new WebAssembly.Instance(new WebAssembly.Module(buffer), wasm_env);
console.log('guid', createGUID())

