"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i4 = decorators.length - 1, decorator; i4 >= 0; i4--)
      if (decorator = decorators[i4])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp(target, key, result);
    return result;
  };

  // node_modules/html-entities/lib/named-references.js
  var require_named_references = __commonJS({
    "node_modules/html-entities/lib/named-references.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.bodyRegExps = { xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g, html4: /&notin;|&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g, html5: /&centerdot;|&copysr;|&divideontimes;|&gtcc;|&gtcir;|&gtdot;|&gtlPar;|&gtquest;|&gtrapprox;|&gtrarr;|&gtrdot;|&gtreqless;|&gtreqqless;|&gtrless;|&gtrsim;|&ltcc;|&ltcir;|&ltdot;|&lthree;|&ltimes;|&ltlarr;|&ltquest;|&ltrPar;|&ltri;|&ltrie;|&ltrif;|&notin;|&notinE;|&notindot;|&notinva;|&notinvb;|&notinvc;|&notni;|&notniva;|&notnivb;|&notnivc;|&parallel;|&timesb;|&timesbar;|&timesd;|&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g };
      exports.namedReferences = { xml: { entities: { "&lt;": "<", "&gt;": ">", "&quot;": '"', "&apos;": "'", "&amp;": "&" }, characters: { "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;", "&": "&amp;" } }, html4: { entities: { "&apos;": "'", "&nbsp": "\xA0", "&nbsp;": "\xA0", "&iexcl": "\xA1", "&iexcl;": "\xA1", "&cent": "\xA2", "&cent;": "\xA2", "&pound": "\xA3", "&pound;": "\xA3", "&curren": "\xA4", "&curren;": "\xA4", "&yen": "\xA5", "&yen;": "\xA5", "&brvbar": "\xA6", "&brvbar;": "\xA6", "&sect": "\xA7", "&sect;": "\xA7", "&uml": "\xA8", "&uml;": "\xA8", "&copy": "\xA9", "&copy;": "\xA9", "&ordf": "\xAA", "&ordf;": "\xAA", "&laquo": "\xAB", "&laquo;": "\xAB", "&not": "\xAC", "&not;": "\xAC", "&shy": "\xAD", "&shy;": "\xAD", "&reg": "\xAE", "&reg;": "\xAE", "&macr": "\xAF", "&macr;": "\xAF", "&deg": "\xB0", "&deg;": "\xB0", "&plusmn": "\xB1", "&plusmn;": "\xB1", "&sup2": "\xB2", "&sup2;": "\xB2", "&sup3": "\xB3", "&sup3;": "\xB3", "&acute": "\xB4", "&acute;": "\xB4", "&micro": "\xB5", "&micro;": "\xB5", "&para": "\xB6", "&para;": "\xB6", "&middot": "\xB7", "&middot;": "\xB7", "&cedil": "\xB8", "&cedil;": "\xB8", "&sup1": "\xB9", "&sup1;": "\xB9", "&ordm": "\xBA", "&ordm;": "\xBA", "&raquo": "\xBB", "&raquo;": "\xBB", "&frac14": "\xBC", "&frac14;": "\xBC", "&frac12": "\xBD", "&frac12;": "\xBD", "&frac34": "\xBE", "&frac34;": "\xBE", "&iquest": "\xBF", "&iquest;": "\xBF", "&Agrave": "\xC0", "&Agrave;": "\xC0", "&Aacute": "\xC1", "&Aacute;": "\xC1", "&Acirc": "\xC2", "&Acirc;": "\xC2", "&Atilde": "\xC3", "&Atilde;": "\xC3", "&Auml": "\xC4", "&Auml;": "\xC4", "&Aring": "\xC5", "&Aring;": "\xC5", "&AElig": "\xC6", "&AElig;": "\xC6", "&Ccedil": "\xC7", "&Ccedil;": "\xC7", "&Egrave": "\xC8", "&Egrave;": "\xC8", "&Eacute": "\xC9", "&Eacute;": "\xC9", "&Ecirc": "\xCA", "&Ecirc;": "\xCA", "&Euml": "\xCB", "&Euml;": "\xCB", "&Igrave": "\xCC", "&Igrave;": "\xCC", "&Iacute": "\xCD", "&Iacute;": "\xCD", "&Icirc": "\xCE", "&Icirc;": "\xCE", "&Iuml": "\xCF", "&Iuml;": "\xCF", "&ETH": "\xD0", "&ETH;": "\xD0", "&Ntilde": "\xD1", "&Ntilde;": "\xD1", "&Ograve": "\xD2", "&Ograve;": "\xD2", "&Oacute": "\xD3", "&Oacute;": "\xD3", "&Ocirc": "\xD4", "&Ocirc;": "\xD4", "&Otilde": "\xD5", "&Otilde;": "\xD5", "&Ouml": "\xD6", "&Ouml;": "\xD6", "&times": "\xD7", "&times;": "\xD7", "&Oslash": "\xD8", "&Oslash;": "\xD8", "&Ugrave": "\xD9", "&Ugrave;": "\xD9", "&Uacute": "\xDA", "&Uacute;": "\xDA", "&Ucirc": "\xDB", "&Ucirc;": "\xDB", "&Uuml": "\xDC", "&Uuml;": "\xDC", "&Yacute": "\xDD", "&Yacute;": "\xDD", "&THORN": "\xDE", "&THORN;": "\xDE", "&szlig": "\xDF", "&szlig;": "\xDF", "&agrave": "\xE0", "&agrave;": "\xE0", "&aacute": "\xE1", "&aacute;": "\xE1", "&acirc": "\xE2", "&acirc;": "\xE2", "&atilde": "\xE3", "&atilde;": "\xE3", "&auml": "\xE4", "&auml;": "\xE4", "&aring": "\xE5", "&aring;": "\xE5", "&aelig": "\xE6", "&aelig;": "\xE6", "&ccedil": "\xE7", "&ccedil;": "\xE7", "&egrave": "\xE8", "&egrave;": "\xE8", "&eacute": "\xE9", "&eacute;": "\xE9", "&ecirc": "\xEA", "&ecirc;": "\xEA", "&euml": "\xEB", "&euml;": "\xEB", "&igrave": "\xEC", "&igrave;": "\xEC", "&iacute": "\xED", "&iacute;": "\xED", "&icirc": "\xEE", "&icirc;": "\xEE", "&iuml": "\xEF", "&iuml;": "\xEF", "&eth": "\xF0", "&eth;": "\xF0", "&ntilde": "\xF1", "&ntilde;": "\xF1", "&ograve": "\xF2", "&ograve;": "\xF2", "&oacute": "\xF3", "&oacute;": "\xF3", "&ocirc": "\xF4", "&ocirc;": "\xF4", "&otilde": "\xF5", "&otilde;": "\xF5", "&ouml": "\xF6", "&ouml;": "\xF6", "&divide": "\xF7", "&divide;": "\xF7", "&oslash": "\xF8", "&oslash;": "\xF8", "&ugrave": "\xF9", "&ugrave;": "\xF9", "&uacute": "\xFA", "&uacute;": "\xFA", "&ucirc": "\xFB", "&ucirc;": "\xFB", "&uuml": "\xFC", "&uuml;": "\xFC", "&yacute": "\xFD", "&yacute;": "\xFD", "&thorn": "\xFE", "&thorn;": "\xFE", "&yuml": "\xFF", "&yuml;": "\xFF", "&quot": '"', "&quot;": '"', "&amp": "&", "&amp;": "&", "&lt": "<", "&lt;": "<", "&gt": ">", "&gt;": ">", "&OElig;": "\u0152", "&oelig;": "\u0153", "&Scaron;": "\u0160", "&scaron;": "\u0161", "&Yuml;": "\u0178", "&circ;": "\u02C6", "&tilde;": "\u02DC", "&ensp;": "\u2002", "&emsp;": "\u2003", "&thinsp;": "\u2009", "&zwnj;": "\u200C", "&zwj;": "\u200D", "&lrm;": "\u200E", "&rlm;": "\u200F", "&ndash;": "\u2013", "&mdash;": "\u2014", "&lsquo;": "\u2018", "&rsquo;": "\u2019", "&sbquo;": "\u201A", "&ldquo;": "\u201C", "&rdquo;": "\u201D", "&bdquo;": "\u201E", "&dagger;": "\u2020", "&Dagger;": "\u2021", "&permil;": "\u2030", "&lsaquo;": "\u2039", "&rsaquo;": "\u203A", "&euro;": "\u20AC", "&fnof;": "\u0192", "&Alpha;": "\u0391", "&Beta;": "\u0392", "&Gamma;": "\u0393", "&Delta;": "\u0394", "&Epsilon;": "\u0395", "&Zeta;": "\u0396", "&Eta;": "\u0397", "&Theta;": "\u0398", "&Iota;": "\u0399", "&Kappa;": "\u039A", "&Lambda;": "\u039B", "&Mu;": "\u039C", "&Nu;": "\u039D", "&Xi;": "\u039E", "&Omicron;": "\u039F", "&Pi;": "\u03A0", "&Rho;": "\u03A1", "&Sigma;": "\u03A3", "&Tau;": "\u03A4", "&Upsilon;": "\u03A5", "&Phi;": "\u03A6", "&Chi;": "\u03A7", "&Psi;": "\u03A8", "&Omega;": "\u03A9", "&alpha;": "\u03B1", "&beta;": "\u03B2", "&gamma;": "\u03B3", "&delta;": "\u03B4", "&epsilon;": "\u03B5", "&zeta;": "\u03B6", "&eta;": "\u03B7", "&theta;": "\u03B8", "&iota;": "\u03B9", "&kappa;": "\u03BA", "&lambda;": "\u03BB", "&mu;": "\u03BC", "&nu;": "\u03BD", "&xi;": "\u03BE", "&omicron;": "\u03BF", "&pi;": "\u03C0", "&rho;": "\u03C1", "&sigmaf;": "\u03C2", "&sigma;": "\u03C3", "&tau;": "\u03C4", "&upsilon;": "\u03C5", "&phi;": "\u03C6", "&chi;": "\u03C7", "&psi;": "\u03C8", "&omega;": "\u03C9", "&thetasym;": "\u03D1", "&upsih;": "\u03D2", "&piv;": "\u03D6", "&bull;": "\u2022", "&hellip;": "\u2026", "&prime;": "\u2032", "&Prime;": "\u2033", "&oline;": "\u203E", "&frasl;": "\u2044", "&weierp;": "\u2118", "&image;": "\u2111", "&real;": "\u211C", "&trade;": "\u2122", "&alefsym;": "\u2135", "&larr;": "\u2190", "&uarr;": "\u2191", "&rarr;": "\u2192", "&darr;": "\u2193", "&harr;": "\u2194", "&crarr;": "\u21B5", "&lArr;": "\u21D0", "&uArr;": "\u21D1", "&rArr;": "\u21D2", "&dArr;": "\u21D3", "&hArr;": "\u21D4", "&forall;": "\u2200", "&part;": "\u2202", "&exist;": "\u2203", "&empty;": "\u2205", "&nabla;": "\u2207", "&isin;": "\u2208", "&notin;": "\u2209", "&ni;": "\u220B", "&prod;": "\u220F", "&sum;": "\u2211", "&minus;": "\u2212", "&lowast;": "\u2217", "&radic;": "\u221A", "&prop;": "\u221D", "&infin;": "\u221E", "&ang;": "\u2220", "&and;": "\u2227", "&or;": "\u2228", "&cap;": "\u2229", "&cup;": "\u222A", "&int;": "\u222B", "&there4;": "\u2234", "&sim;": "\u223C", "&cong;": "\u2245", "&asymp;": "\u2248", "&ne;": "\u2260", "&equiv;": "\u2261", "&le;": "\u2264", "&ge;": "\u2265", "&sub;": "\u2282", "&sup;": "\u2283", "&nsub;": "\u2284", "&sube;": "\u2286", "&supe;": "\u2287", "&oplus;": "\u2295", "&otimes;": "\u2297", "&perp;": "\u22A5", "&sdot;": "\u22C5", "&lceil;": "\u2308", "&rceil;": "\u2309", "&lfloor;": "\u230A", "&rfloor;": "\u230B", "&lang;": "\u2329", "&rang;": "\u232A", "&loz;": "\u25CA", "&spades;": "\u2660", "&clubs;": "\u2663", "&hearts;": "\u2665", "&diams;": "\u2666" }, characters: { "'": "&apos;", "\xA0": "&nbsp;", "\xA1": "&iexcl;", "\xA2": "&cent;", "\xA3": "&pound;", "\xA4": "&curren;", "\xA5": "&yen;", "\xA6": "&brvbar;", "\xA7": "&sect;", "\xA8": "&uml;", "\xA9": "&copy;", "\xAA": "&ordf;", "\xAB": "&laquo;", "\xAC": "&not;", "\xAD": "&shy;", "\xAE": "&reg;", "\xAF": "&macr;", "\xB0": "&deg;", "\xB1": "&plusmn;", "\xB2": "&sup2;", "\xB3": "&sup3;", "\xB4": "&acute;", "\xB5": "&micro;", "\xB6": "&para;", "\xB7": "&middot;", "\xB8": "&cedil;", "\xB9": "&sup1;", "\xBA": "&ordm;", "\xBB": "&raquo;", "\xBC": "&frac14;", "\xBD": "&frac12;", "\xBE": "&frac34;", "\xBF": "&iquest;", "\xC0": "&Agrave;", "\xC1": "&Aacute;", "\xC2": "&Acirc;", "\xC3": "&Atilde;", "\xC4": "&Auml;", "\xC5": "&Aring;", "\xC6": "&AElig;", "\xC7": "&Ccedil;", "\xC8": "&Egrave;", "\xC9": "&Eacute;", "\xCA": "&Ecirc;", "\xCB": "&Euml;", "\xCC": "&Igrave;", "\xCD": "&Iacute;", "\xCE": "&Icirc;", "\xCF": "&Iuml;", "\xD0": "&ETH;", "\xD1": "&Ntilde;", "\xD2": "&Ograve;", "\xD3": "&Oacute;", "\xD4": "&Ocirc;", "\xD5": "&Otilde;", "\xD6": "&Ouml;", "\xD7": "&times;", "\xD8": "&Oslash;", "\xD9": "&Ugrave;", "\xDA": "&Uacute;", "\xDB": "&Ucirc;", "\xDC": "&Uuml;", "\xDD": "&Yacute;", "\xDE": "&THORN;", "\xDF": "&szlig;", "\xE0": "&agrave;", "\xE1": "&aacute;", "\xE2": "&acirc;", "\xE3": "&atilde;", "\xE4": "&auml;", "\xE5": "&aring;", "\xE6": "&aelig;", "\xE7": "&ccedil;", "\xE8": "&egrave;", "\xE9": "&eacute;", "\xEA": "&ecirc;", "\xEB": "&euml;", "\xEC": "&igrave;", "\xED": "&iacute;", "\xEE": "&icirc;", "\xEF": "&iuml;", "\xF0": "&eth;", "\xF1": "&ntilde;", "\xF2": "&ograve;", "\xF3": "&oacute;", "\xF4": "&ocirc;", "\xF5": "&otilde;", "\xF6": "&ouml;", "\xF7": "&divide;", "\xF8": "&oslash;", "\xF9": "&ugrave;", "\xFA": "&uacute;", "\xFB": "&ucirc;", "\xFC": "&uuml;", "\xFD": "&yacute;", "\xFE": "&thorn;", "\xFF": "&yuml;", '"': "&quot;", "&": "&amp;", "<": "&lt;", ">": "&gt;", "\u0152": "&OElig;", "\u0153": "&oelig;", "\u0160": "&Scaron;", "\u0161": "&scaron;", "\u0178": "&Yuml;", "\u02C6": "&circ;", "\u02DC": "&tilde;", "\u2002": "&ensp;", "\u2003": "&emsp;", "\u2009": "&thinsp;", "\u200C": "&zwnj;", "\u200D": "&zwj;", "\u200E": "&lrm;", "\u200F": "&rlm;", "\u2013": "&ndash;", "\u2014": "&mdash;", "\u2018": "&lsquo;", "\u2019": "&rsquo;", "\u201A": "&sbquo;", "\u201C": "&ldquo;", "\u201D": "&rdquo;", "\u201E": "&bdquo;", "\u2020": "&dagger;", "\u2021": "&Dagger;", "\u2030": "&permil;", "\u2039": "&lsaquo;", "\u203A": "&rsaquo;", "\u20AC": "&euro;", "\u0192": "&fnof;", "\u0391": "&Alpha;", "\u0392": "&Beta;", "\u0393": "&Gamma;", "\u0394": "&Delta;", "\u0395": "&Epsilon;", "\u0396": "&Zeta;", "\u0397": "&Eta;", "\u0398": "&Theta;", "\u0399": "&Iota;", "\u039A": "&Kappa;", "\u039B": "&Lambda;", "\u039C": "&Mu;", "\u039D": "&Nu;", "\u039E": "&Xi;", "\u039F": "&Omicron;", "\u03A0": "&Pi;", "\u03A1": "&Rho;", "\u03A3": "&Sigma;", "\u03A4": "&Tau;", "\u03A5": "&Upsilon;", "\u03A6": "&Phi;", "\u03A7": "&Chi;", "\u03A8": "&Psi;", "\u03A9": "&Omega;", "\u03B1": "&alpha;", "\u03B2": "&beta;", "\u03B3": "&gamma;", "\u03B4": "&delta;", "\u03B5": "&epsilon;", "\u03B6": "&zeta;", "\u03B7": "&eta;", "\u03B8": "&theta;", "\u03B9": "&iota;", "\u03BA": "&kappa;", "\u03BB": "&lambda;", "\u03BC": "&mu;", "\u03BD": "&nu;", "\u03BE": "&xi;", "\u03BF": "&omicron;", "\u03C0": "&pi;", "\u03C1": "&rho;", "\u03C2": "&sigmaf;", "\u03C3": "&sigma;", "\u03C4": "&tau;", "\u03C5": "&upsilon;", "\u03C6": "&phi;", "\u03C7": "&chi;", "\u03C8": "&psi;", "\u03C9": "&omega;", "\u03D1": "&thetasym;", "\u03D2": "&upsih;", "\u03D6": "&piv;", "\u2022": "&bull;", "\u2026": "&hellip;", "\u2032": "&prime;", "\u2033": "&Prime;", "\u203E": "&oline;", "\u2044": "&frasl;", "\u2118": "&weierp;", "\u2111": "&image;", "\u211C": "&real;", "\u2122": "&trade;", "\u2135": "&alefsym;", "\u2190": "&larr;", "\u2191": "&uarr;", "\u2192": "&rarr;", "\u2193": "&darr;", "\u2194": "&harr;", "\u21B5": "&crarr;", "\u21D0": "&lArr;", "\u21D1": "&uArr;", "\u21D2": "&rArr;", "\u21D3": "&dArr;", "\u21D4": "&hArr;", "\u2200": "&forall;", "\u2202": "&part;", "\u2203": "&exist;", "\u2205": "&empty;", "\u2207": "&nabla;", "\u2208": "&isin;", "\u2209": "&notin;", "\u220B": "&ni;", "\u220F": "&prod;", "\u2211": "&sum;", "\u2212": "&minus;", "\u2217": "&lowast;", "\u221A": "&radic;", "\u221D": "&prop;", "\u221E": "&infin;", "\u2220": "&ang;", "\u2227": "&and;", "\u2228": "&or;", "\u2229": "&cap;", "\u222A": "&cup;", "\u222B": "&int;", "\u2234": "&there4;", "\u223C": "&sim;", "\u2245": "&cong;", "\u2248": "&asymp;", "\u2260": "&ne;", "\u2261": "&equiv;", "\u2264": "&le;", "\u2265": "&ge;", "\u2282": "&sub;", "\u2283": "&sup;", "\u2284": "&nsub;", "\u2286": "&sube;", "\u2287": "&supe;", "\u2295": "&oplus;", "\u2297": "&otimes;", "\u22A5": "&perp;", "\u22C5": "&sdot;", "\u2308": "&lceil;", "\u2309": "&rceil;", "\u230A": "&lfloor;", "\u230B": "&rfloor;", "\u2329": "&lang;", "\u232A": "&rang;", "\u25CA": "&loz;", "\u2660": "&spades;", "\u2663": "&clubs;", "\u2665": "&hearts;", "\u2666": "&diams;" } }, html5: { entities: { "&AElig": "\xC6", "&AElig;": "\xC6", "&AMP": "&", "&AMP;": "&", "&Aacute": "\xC1", "&Aacute;": "\xC1", "&Abreve;": "\u0102", "&Acirc": "\xC2", "&Acirc;": "\xC2", "&Acy;": "\u0410", "&Afr;": "\u{1D504}", "&Agrave": "\xC0", "&Agrave;": "\xC0", "&Alpha;": "\u0391", "&Amacr;": "\u0100", "&And;": "\u2A53", "&Aogon;": "\u0104", "&Aopf;": "\u{1D538}", "&ApplyFunction;": "\u2061", "&Aring": "\xC5", "&Aring;": "\xC5", "&Ascr;": "\u{1D49C}", "&Assign;": "\u2254", "&Atilde": "\xC3", "&Atilde;": "\xC3", "&Auml": "\xC4", "&Auml;": "\xC4", "&Backslash;": "\u2216", "&Barv;": "\u2AE7", "&Barwed;": "\u2306", "&Bcy;": "\u0411", "&Because;": "\u2235", "&Bernoullis;": "\u212C", "&Beta;": "\u0392", "&Bfr;": "\u{1D505}", "&Bopf;": "\u{1D539}", "&Breve;": "\u02D8", "&Bscr;": "\u212C", "&Bumpeq;": "\u224E", "&CHcy;": "\u0427", "&COPY": "\xA9", "&COPY;": "\xA9", "&Cacute;": "\u0106", "&Cap;": "\u22D2", "&CapitalDifferentialD;": "\u2145", "&Cayleys;": "\u212D", "&Ccaron;": "\u010C", "&Ccedil": "\xC7", "&Ccedil;": "\xC7", "&Ccirc;": "\u0108", "&Cconint;": "\u2230", "&Cdot;": "\u010A", "&Cedilla;": "\xB8", "&CenterDot;": "\xB7", "&Cfr;": "\u212D", "&Chi;": "\u03A7", "&CircleDot;": "\u2299", "&CircleMinus;": "\u2296", "&CirclePlus;": "\u2295", "&CircleTimes;": "\u2297", "&ClockwiseContourIntegral;": "\u2232", "&CloseCurlyDoubleQuote;": "\u201D", "&CloseCurlyQuote;": "\u2019", "&Colon;": "\u2237", "&Colone;": "\u2A74", "&Congruent;": "\u2261", "&Conint;": "\u222F", "&ContourIntegral;": "\u222E", "&Copf;": "\u2102", "&Coproduct;": "\u2210", "&CounterClockwiseContourIntegral;": "\u2233", "&Cross;": "\u2A2F", "&Cscr;": "\u{1D49E}", "&Cup;": "\u22D3", "&CupCap;": "\u224D", "&DD;": "\u2145", "&DDotrahd;": "\u2911", "&DJcy;": "\u0402", "&DScy;": "\u0405", "&DZcy;": "\u040F", "&Dagger;": "\u2021", "&Darr;": "\u21A1", "&Dashv;": "\u2AE4", "&Dcaron;": "\u010E", "&Dcy;": "\u0414", "&Del;": "\u2207", "&Delta;": "\u0394", "&Dfr;": "\u{1D507}", "&DiacriticalAcute;": "\xB4", "&DiacriticalDot;": "\u02D9", "&DiacriticalDoubleAcute;": "\u02DD", "&DiacriticalGrave;": "`", "&DiacriticalTilde;": "\u02DC", "&Diamond;": "\u22C4", "&DifferentialD;": "\u2146", "&Dopf;": "\u{1D53B}", "&Dot;": "\xA8", "&DotDot;": "\u20DC", "&DotEqual;": "\u2250", "&DoubleContourIntegral;": "\u222F", "&DoubleDot;": "\xA8", "&DoubleDownArrow;": "\u21D3", "&DoubleLeftArrow;": "\u21D0", "&DoubleLeftRightArrow;": "\u21D4", "&DoubleLeftTee;": "\u2AE4", "&DoubleLongLeftArrow;": "\u27F8", "&DoubleLongLeftRightArrow;": "\u27FA", "&DoubleLongRightArrow;": "\u27F9", "&DoubleRightArrow;": "\u21D2", "&DoubleRightTee;": "\u22A8", "&DoubleUpArrow;": "\u21D1", "&DoubleUpDownArrow;": "\u21D5", "&DoubleVerticalBar;": "\u2225", "&DownArrow;": "\u2193", "&DownArrowBar;": "\u2913", "&DownArrowUpArrow;": "\u21F5", "&DownBreve;": "\u0311", "&DownLeftRightVector;": "\u2950", "&DownLeftTeeVector;": "\u295E", "&DownLeftVector;": "\u21BD", "&DownLeftVectorBar;": "\u2956", "&DownRightTeeVector;": "\u295F", "&DownRightVector;": "\u21C1", "&DownRightVectorBar;": "\u2957", "&DownTee;": "\u22A4", "&DownTeeArrow;": "\u21A7", "&Downarrow;": "\u21D3", "&Dscr;": "\u{1D49F}", "&Dstrok;": "\u0110", "&ENG;": "\u014A", "&ETH": "\xD0", "&ETH;": "\xD0", "&Eacute": "\xC9", "&Eacute;": "\xC9", "&Ecaron;": "\u011A", "&Ecirc": "\xCA", "&Ecirc;": "\xCA", "&Ecy;": "\u042D", "&Edot;": "\u0116", "&Efr;": "\u{1D508}", "&Egrave": "\xC8", "&Egrave;": "\xC8", "&Element;": "\u2208", "&Emacr;": "\u0112", "&EmptySmallSquare;": "\u25FB", "&EmptyVerySmallSquare;": "\u25AB", "&Eogon;": "\u0118", "&Eopf;": "\u{1D53C}", "&Epsilon;": "\u0395", "&Equal;": "\u2A75", "&EqualTilde;": "\u2242", "&Equilibrium;": "\u21CC", "&Escr;": "\u2130", "&Esim;": "\u2A73", "&Eta;": "\u0397", "&Euml": "\xCB", "&Euml;": "\xCB", "&Exists;": "\u2203", "&ExponentialE;": "\u2147", "&Fcy;": "\u0424", "&Ffr;": "\u{1D509}", "&FilledSmallSquare;": "\u25FC", "&FilledVerySmallSquare;": "\u25AA", "&Fopf;": "\u{1D53D}", "&ForAll;": "\u2200", "&Fouriertrf;": "\u2131", "&Fscr;": "\u2131", "&GJcy;": "\u0403", "&GT": ">", "&GT;": ">", "&Gamma;": "\u0393", "&Gammad;": "\u03DC", "&Gbreve;": "\u011E", "&Gcedil;": "\u0122", "&Gcirc;": "\u011C", "&Gcy;": "\u0413", "&Gdot;": "\u0120", "&Gfr;": "\u{1D50A}", "&Gg;": "\u22D9", "&Gopf;": "\u{1D53E}", "&GreaterEqual;": "\u2265", "&GreaterEqualLess;": "\u22DB", "&GreaterFullEqual;": "\u2267", "&GreaterGreater;": "\u2AA2", "&GreaterLess;": "\u2277", "&GreaterSlantEqual;": "\u2A7E", "&GreaterTilde;": "\u2273", "&Gscr;": "\u{1D4A2}", "&Gt;": "\u226B", "&HARDcy;": "\u042A", "&Hacek;": "\u02C7", "&Hat;": "^", "&Hcirc;": "\u0124", "&Hfr;": "\u210C", "&HilbertSpace;": "\u210B", "&Hopf;": "\u210D", "&HorizontalLine;": "\u2500", "&Hscr;": "\u210B", "&Hstrok;": "\u0126", "&HumpDownHump;": "\u224E", "&HumpEqual;": "\u224F", "&IEcy;": "\u0415", "&IJlig;": "\u0132", "&IOcy;": "\u0401", "&Iacute": "\xCD", "&Iacute;": "\xCD", "&Icirc": "\xCE", "&Icirc;": "\xCE", "&Icy;": "\u0418", "&Idot;": "\u0130", "&Ifr;": "\u2111", "&Igrave": "\xCC", "&Igrave;": "\xCC", "&Im;": "\u2111", "&Imacr;": "\u012A", "&ImaginaryI;": "\u2148", "&Implies;": "\u21D2", "&Int;": "\u222C", "&Integral;": "\u222B", "&Intersection;": "\u22C2", "&InvisibleComma;": "\u2063", "&InvisibleTimes;": "\u2062", "&Iogon;": "\u012E", "&Iopf;": "\u{1D540}", "&Iota;": "\u0399", "&Iscr;": "\u2110", "&Itilde;": "\u0128", "&Iukcy;": "\u0406", "&Iuml": "\xCF", "&Iuml;": "\xCF", "&Jcirc;": "\u0134", "&Jcy;": "\u0419", "&Jfr;": "\u{1D50D}", "&Jopf;": "\u{1D541}", "&Jscr;": "\u{1D4A5}", "&Jsercy;": "\u0408", "&Jukcy;": "\u0404", "&KHcy;": "\u0425", "&KJcy;": "\u040C", "&Kappa;": "\u039A", "&Kcedil;": "\u0136", "&Kcy;": "\u041A", "&Kfr;": "\u{1D50E}", "&Kopf;": "\u{1D542}", "&Kscr;": "\u{1D4A6}", "&LJcy;": "\u0409", "&LT": "<", "&LT;": "<", "&Lacute;": "\u0139", "&Lambda;": "\u039B", "&Lang;": "\u27EA", "&Laplacetrf;": "\u2112", "&Larr;": "\u219E", "&Lcaron;": "\u013D", "&Lcedil;": "\u013B", "&Lcy;": "\u041B", "&LeftAngleBracket;": "\u27E8", "&LeftArrow;": "\u2190", "&LeftArrowBar;": "\u21E4", "&LeftArrowRightArrow;": "\u21C6", "&LeftCeiling;": "\u2308", "&LeftDoubleBracket;": "\u27E6", "&LeftDownTeeVector;": "\u2961", "&LeftDownVector;": "\u21C3", "&LeftDownVectorBar;": "\u2959", "&LeftFloor;": "\u230A", "&LeftRightArrow;": "\u2194", "&LeftRightVector;": "\u294E", "&LeftTee;": "\u22A3", "&LeftTeeArrow;": "\u21A4", "&LeftTeeVector;": "\u295A", "&LeftTriangle;": "\u22B2", "&LeftTriangleBar;": "\u29CF", "&LeftTriangleEqual;": "\u22B4", "&LeftUpDownVector;": "\u2951", "&LeftUpTeeVector;": "\u2960", "&LeftUpVector;": "\u21BF", "&LeftUpVectorBar;": "\u2958", "&LeftVector;": "\u21BC", "&LeftVectorBar;": "\u2952", "&Leftarrow;": "\u21D0", "&Leftrightarrow;": "\u21D4", "&LessEqualGreater;": "\u22DA", "&LessFullEqual;": "\u2266", "&LessGreater;": "\u2276", "&LessLess;": "\u2AA1", "&LessSlantEqual;": "\u2A7D", "&LessTilde;": "\u2272", "&Lfr;": "\u{1D50F}", "&Ll;": "\u22D8", "&Lleftarrow;": "\u21DA", "&Lmidot;": "\u013F", "&LongLeftArrow;": "\u27F5", "&LongLeftRightArrow;": "\u27F7", "&LongRightArrow;": "\u27F6", "&Longleftarrow;": "\u27F8", "&Longleftrightarrow;": "\u27FA", "&Longrightarrow;": "\u27F9", "&Lopf;": "\u{1D543}", "&LowerLeftArrow;": "\u2199", "&LowerRightArrow;": "\u2198", "&Lscr;": "\u2112", "&Lsh;": "\u21B0", "&Lstrok;": "\u0141", "&Lt;": "\u226A", "&Map;": "\u2905", "&Mcy;": "\u041C", "&MediumSpace;": "\u205F", "&Mellintrf;": "\u2133", "&Mfr;": "\u{1D510}", "&MinusPlus;": "\u2213", "&Mopf;": "\u{1D544}", "&Mscr;": "\u2133", "&Mu;": "\u039C", "&NJcy;": "\u040A", "&Nacute;": "\u0143", "&Ncaron;": "\u0147", "&Ncedil;": "\u0145", "&Ncy;": "\u041D", "&NegativeMediumSpace;": "\u200B", "&NegativeThickSpace;": "\u200B", "&NegativeThinSpace;": "\u200B", "&NegativeVeryThinSpace;": "\u200B", "&NestedGreaterGreater;": "\u226B", "&NestedLessLess;": "\u226A", "&NewLine;": "\n", "&Nfr;": "\u{1D511}", "&NoBreak;": "\u2060", "&NonBreakingSpace;": "\xA0", "&Nopf;": "\u2115", "&Not;": "\u2AEC", "&NotCongruent;": "\u2262", "&NotCupCap;": "\u226D", "&NotDoubleVerticalBar;": "\u2226", "&NotElement;": "\u2209", "&NotEqual;": "\u2260", "&NotEqualTilde;": "\u2242\u0338", "&NotExists;": "\u2204", "&NotGreater;": "\u226F", "&NotGreaterEqual;": "\u2271", "&NotGreaterFullEqual;": "\u2267\u0338", "&NotGreaterGreater;": "\u226B\u0338", "&NotGreaterLess;": "\u2279", "&NotGreaterSlantEqual;": "\u2A7E\u0338", "&NotGreaterTilde;": "\u2275", "&NotHumpDownHump;": "\u224E\u0338", "&NotHumpEqual;": "\u224F\u0338", "&NotLeftTriangle;": "\u22EA", "&NotLeftTriangleBar;": "\u29CF\u0338", "&NotLeftTriangleEqual;": "\u22EC", "&NotLess;": "\u226E", "&NotLessEqual;": "\u2270", "&NotLessGreater;": "\u2278", "&NotLessLess;": "\u226A\u0338", "&NotLessSlantEqual;": "\u2A7D\u0338", "&NotLessTilde;": "\u2274", "&NotNestedGreaterGreater;": "\u2AA2\u0338", "&NotNestedLessLess;": "\u2AA1\u0338", "&NotPrecedes;": "\u2280", "&NotPrecedesEqual;": "\u2AAF\u0338", "&NotPrecedesSlantEqual;": "\u22E0", "&NotReverseElement;": "\u220C", "&NotRightTriangle;": "\u22EB", "&NotRightTriangleBar;": "\u29D0\u0338", "&NotRightTriangleEqual;": "\u22ED", "&NotSquareSubset;": "\u228F\u0338", "&NotSquareSubsetEqual;": "\u22E2", "&NotSquareSuperset;": "\u2290\u0338", "&NotSquareSupersetEqual;": "\u22E3", "&NotSubset;": "\u2282\u20D2", "&NotSubsetEqual;": "\u2288", "&NotSucceeds;": "\u2281", "&NotSucceedsEqual;": "\u2AB0\u0338", "&NotSucceedsSlantEqual;": "\u22E1", "&NotSucceedsTilde;": "\u227F\u0338", "&NotSuperset;": "\u2283\u20D2", "&NotSupersetEqual;": "\u2289", "&NotTilde;": "\u2241", "&NotTildeEqual;": "\u2244", "&NotTildeFullEqual;": "\u2247", "&NotTildeTilde;": "\u2249", "&NotVerticalBar;": "\u2224", "&Nscr;": "\u{1D4A9}", "&Ntilde": "\xD1", "&Ntilde;": "\xD1", "&Nu;": "\u039D", "&OElig;": "\u0152", "&Oacute": "\xD3", "&Oacute;": "\xD3", "&Ocirc": "\xD4", "&Ocirc;": "\xD4", "&Ocy;": "\u041E", "&Odblac;": "\u0150", "&Ofr;": "\u{1D512}", "&Ograve": "\xD2", "&Ograve;": "\xD2", "&Omacr;": "\u014C", "&Omega;": "\u03A9", "&Omicron;": "\u039F", "&Oopf;": "\u{1D546}", "&OpenCurlyDoubleQuote;": "\u201C", "&OpenCurlyQuote;": "\u2018", "&Or;": "\u2A54", "&Oscr;": "\u{1D4AA}", "&Oslash": "\xD8", "&Oslash;": "\xD8", "&Otilde": "\xD5", "&Otilde;": "\xD5", "&Otimes;": "\u2A37", "&Ouml": "\xD6", "&Ouml;": "\xD6", "&OverBar;": "\u203E", "&OverBrace;": "\u23DE", "&OverBracket;": "\u23B4", "&OverParenthesis;": "\u23DC", "&PartialD;": "\u2202", "&Pcy;": "\u041F", "&Pfr;": "\u{1D513}", "&Phi;": "\u03A6", "&Pi;": "\u03A0", "&PlusMinus;": "\xB1", "&Poincareplane;": "\u210C", "&Popf;": "\u2119", "&Pr;": "\u2ABB", "&Precedes;": "\u227A", "&PrecedesEqual;": "\u2AAF", "&PrecedesSlantEqual;": "\u227C", "&PrecedesTilde;": "\u227E", "&Prime;": "\u2033", "&Product;": "\u220F", "&Proportion;": "\u2237", "&Proportional;": "\u221D", "&Pscr;": "\u{1D4AB}", "&Psi;": "\u03A8", "&QUOT": '"', "&QUOT;": '"', "&Qfr;": "\u{1D514}", "&Qopf;": "\u211A", "&Qscr;": "\u{1D4AC}", "&RBarr;": "\u2910", "&REG": "\xAE", "&REG;": "\xAE", "&Racute;": "\u0154", "&Rang;": "\u27EB", "&Rarr;": "\u21A0", "&Rarrtl;": "\u2916", "&Rcaron;": "\u0158", "&Rcedil;": "\u0156", "&Rcy;": "\u0420", "&Re;": "\u211C", "&ReverseElement;": "\u220B", "&ReverseEquilibrium;": "\u21CB", "&ReverseUpEquilibrium;": "\u296F", "&Rfr;": "\u211C", "&Rho;": "\u03A1", "&RightAngleBracket;": "\u27E9", "&RightArrow;": "\u2192", "&RightArrowBar;": "\u21E5", "&RightArrowLeftArrow;": "\u21C4", "&RightCeiling;": "\u2309", "&RightDoubleBracket;": "\u27E7", "&RightDownTeeVector;": "\u295D", "&RightDownVector;": "\u21C2", "&RightDownVectorBar;": "\u2955", "&RightFloor;": "\u230B", "&RightTee;": "\u22A2", "&RightTeeArrow;": "\u21A6", "&RightTeeVector;": "\u295B", "&RightTriangle;": "\u22B3", "&RightTriangleBar;": "\u29D0", "&RightTriangleEqual;": "\u22B5", "&RightUpDownVector;": "\u294F", "&RightUpTeeVector;": "\u295C", "&RightUpVector;": "\u21BE", "&RightUpVectorBar;": "\u2954", "&RightVector;": "\u21C0", "&RightVectorBar;": "\u2953", "&Rightarrow;": "\u21D2", "&Ropf;": "\u211D", "&RoundImplies;": "\u2970", "&Rrightarrow;": "\u21DB", "&Rscr;": "\u211B", "&Rsh;": "\u21B1", "&RuleDelayed;": "\u29F4", "&SHCHcy;": "\u0429", "&SHcy;": "\u0428", "&SOFTcy;": "\u042C", "&Sacute;": "\u015A", "&Sc;": "\u2ABC", "&Scaron;": "\u0160", "&Scedil;": "\u015E", "&Scirc;": "\u015C", "&Scy;": "\u0421", "&Sfr;": "\u{1D516}", "&ShortDownArrow;": "\u2193", "&ShortLeftArrow;": "\u2190", "&ShortRightArrow;": "\u2192", "&ShortUpArrow;": "\u2191", "&Sigma;": "\u03A3", "&SmallCircle;": "\u2218", "&Sopf;": "\u{1D54A}", "&Sqrt;": "\u221A", "&Square;": "\u25A1", "&SquareIntersection;": "\u2293", "&SquareSubset;": "\u228F", "&SquareSubsetEqual;": "\u2291", "&SquareSuperset;": "\u2290", "&SquareSupersetEqual;": "\u2292", "&SquareUnion;": "\u2294", "&Sscr;": "\u{1D4AE}", "&Star;": "\u22C6", "&Sub;": "\u22D0", "&Subset;": "\u22D0", "&SubsetEqual;": "\u2286", "&Succeeds;": "\u227B", "&SucceedsEqual;": "\u2AB0", "&SucceedsSlantEqual;": "\u227D", "&SucceedsTilde;": "\u227F", "&SuchThat;": "\u220B", "&Sum;": "\u2211", "&Sup;": "\u22D1", "&Superset;": "\u2283", "&SupersetEqual;": "\u2287", "&Supset;": "\u22D1", "&THORN": "\xDE", "&THORN;": "\xDE", "&TRADE;": "\u2122", "&TSHcy;": "\u040B", "&TScy;": "\u0426", "&Tab;": "	", "&Tau;": "\u03A4", "&Tcaron;": "\u0164", "&Tcedil;": "\u0162", "&Tcy;": "\u0422", "&Tfr;": "\u{1D517}", "&Therefore;": "\u2234", "&Theta;": "\u0398", "&ThickSpace;": "\u205F\u200A", "&ThinSpace;": "\u2009", "&Tilde;": "\u223C", "&TildeEqual;": "\u2243", "&TildeFullEqual;": "\u2245", "&TildeTilde;": "\u2248", "&Topf;": "\u{1D54B}", "&TripleDot;": "\u20DB", "&Tscr;": "\u{1D4AF}", "&Tstrok;": "\u0166", "&Uacute": "\xDA", "&Uacute;": "\xDA", "&Uarr;": "\u219F", "&Uarrocir;": "\u2949", "&Ubrcy;": "\u040E", "&Ubreve;": "\u016C", "&Ucirc": "\xDB", "&Ucirc;": "\xDB", "&Ucy;": "\u0423", "&Udblac;": "\u0170", "&Ufr;": "\u{1D518}", "&Ugrave": "\xD9", "&Ugrave;": "\xD9", "&Umacr;": "\u016A", "&UnderBar;": "_", "&UnderBrace;": "\u23DF", "&UnderBracket;": "\u23B5", "&UnderParenthesis;": "\u23DD", "&Union;": "\u22C3", "&UnionPlus;": "\u228E", "&Uogon;": "\u0172", "&Uopf;": "\u{1D54C}", "&UpArrow;": "\u2191", "&UpArrowBar;": "\u2912", "&UpArrowDownArrow;": "\u21C5", "&UpDownArrow;": "\u2195", "&UpEquilibrium;": "\u296E", "&UpTee;": "\u22A5", "&UpTeeArrow;": "\u21A5", "&Uparrow;": "\u21D1", "&Updownarrow;": "\u21D5", "&UpperLeftArrow;": "\u2196", "&UpperRightArrow;": "\u2197", "&Upsi;": "\u03D2", "&Upsilon;": "\u03A5", "&Uring;": "\u016E", "&Uscr;": "\u{1D4B0}", "&Utilde;": "\u0168", "&Uuml": "\xDC", "&Uuml;": "\xDC", "&VDash;": "\u22AB", "&Vbar;": "\u2AEB", "&Vcy;": "\u0412", "&Vdash;": "\u22A9", "&Vdashl;": "\u2AE6", "&Vee;": "\u22C1", "&Verbar;": "\u2016", "&Vert;": "\u2016", "&VerticalBar;": "\u2223", "&VerticalLine;": "|", "&VerticalSeparator;": "\u2758", "&VerticalTilde;": "\u2240", "&VeryThinSpace;": "\u200A", "&Vfr;": "\u{1D519}", "&Vopf;": "\u{1D54D}", "&Vscr;": "\u{1D4B1}", "&Vvdash;": "\u22AA", "&Wcirc;": "\u0174", "&Wedge;": "\u22C0", "&Wfr;": "\u{1D51A}", "&Wopf;": "\u{1D54E}", "&Wscr;": "\u{1D4B2}", "&Xfr;": "\u{1D51B}", "&Xi;": "\u039E", "&Xopf;": "\u{1D54F}", "&Xscr;": "\u{1D4B3}", "&YAcy;": "\u042F", "&YIcy;": "\u0407", "&YUcy;": "\u042E", "&Yacute": "\xDD", "&Yacute;": "\xDD", "&Ycirc;": "\u0176", "&Ycy;": "\u042B", "&Yfr;": "\u{1D51C}", "&Yopf;": "\u{1D550}", "&Yscr;": "\u{1D4B4}", "&Yuml;": "\u0178", "&ZHcy;": "\u0416", "&Zacute;": "\u0179", "&Zcaron;": "\u017D", "&Zcy;": "\u0417", "&Zdot;": "\u017B", "&ZeroWidthSpace;": "\u200B", "&Zeta;": "\u0396", "&Zfr;": "\u2128", "&Zopf;": "\u2124", "&Zscr;": "\u{1D4B5}", "&aacute": "\xE1", "&aacute;": "\xE1", "&abreve;": "\u0103", "&ac;": "\u223E", "&acE;": "\u223E\u0333", "&acd;": "\u223F", "&acirc": "\xE2", "&acirc;": "\xE2", "&acute": "\xB4", "&acute;": "\xB4", "&acy;": "\u0430", "&aelig": "\xE6", "&aelig;": "\xE6", "&af;": "\u2061", "&afr;": "\u{1D51E}", "&agrave": "\xE0", "&agrave;": "\xE0", "&alefsym;": "\u2135", "&aleph;": "\u2135", "&alpha;": "\u03B1", "&amacr;": "\u0101", "&amalg;": "\u2A3F", "&amp": "&", "&amp;": "&", "&and;": "\u2227", "&andand;": "\u2A55", "&andd;": "\u2A5C", "&andslope;": "\u2A58", "&andv;": "\u2A5A", "&ang;": "\u2220", "&ange;": "\u29A4", "&angle;": "\u2220", "&angmsd;": "\u2221", "&angmsdaa;": "\u29A8", "&angmsdab;": "\u29A9", "&angmsdac;": "\u29AA", "&angmsdad;": "\u29AB", "&angmsdae;": "\u29AC", "&angmsdaf;": "\u29AD", "&angmsdag;": "\u29AE", "&angmsdah;": "\u29AF", "&angrt;": "\u221F", "&angrtvb;": "\u22BE", "&angrtvbd;": "\u299D", "&angsph;": "\u2222", "&angst;": "\xC5", "&angzarr;": "\u237C", "&aogon;": "\u0105", "&aopf;": "\u{1D552}", "&ap;": "\u2248", "&apE;": "\u2A70", "&apacir;": "\u2A6F", "&ape;": "\u224A", "&apid;": "\u224B", "&apos;": "'", "&approx;": "\u2248", "&approxeq;": "\u224A", "&aring": "\xE5", "&aring;": "\xE5", "&ascr;": "\u{1D4B6}", "&ast;": "*", "&asymp;": "\u2248", "&asympeq;": "\u224D", "&atilde": "\xE3", "&atilde;": "\xE3", "&auml": "\xE4", "&auml;": "\xE4", "&awconint;": "\u2233", "&awint;": "\u2A11", "&bNot;": "\u2AED", "&backcong;": "\u224C", "&backepsilon;": "\u03F6", "&backprime;": "\u2035", "&backsim;": "\u223D", "&backsimeq;": "\u22CD", "&barvee;": "\u22BD", "&barwed;": "\u2305", "&barwedge;": "\u2305", "&bbrk;": "\u23B5", "&bbrktbrk;": "\u23B6", "&bcong;": "\u224C", "&bcy;": "\u0431", "&bdquo;": "\u201E", "&becaus;": "\u2235", "&because;": "\u2235", "&bemptyv;": "\u29B0", "&bepsi;": "\u03F6", "&bernou;": "\u212C", "&beta;": "\u03B2", "&beth;": "\u2136", "&between;": "\u226C", "&bfr;": "\u{1D51F}", "&bigcap;": "\u22C2", "&bigcirc;": "\u25EF", "&bigcup;": "\u22C3", "&bigodot;": "\u2A00", "&bigoplus;": "\u2A01", "&bigotimes;": "\u2A02", "&bigsqcup;": "\u2A06", "&bigstar;": "\u2605", "&bigtriangledown;": "\u25BD", "&bigtriangleup;": "\u25B3", "&biguplus;": "\u2A04", "&bigvee;": "\u22C1", "&bigwedge;": "\u22C0", "&bkarow;": "\u290D", "&blacklozenge;": "\u29EB", "&blacksquare;": "\u25AA", "&blacktriangle;": "\u25B4", "&blacktriangledown;": "\u25BE", "&blacktriangleleft;": "\u25C2", "&blacktriangleright;": "\u25B8", "&blank;": "\u2423", "&blk12;": "\u2592", "&blk14;": "\u2591", "&blk34;": "\u2593", "&block;": "\u2588", "&bne;": "=\u20E5", "&bnequiv;": "\u2261\u20E5", "&bnot;": "\u2310", "&bopf;": "\u{1D553}", "&bot;": "\u22A5", "&bottom;": "\u22A5", "&bowtie;": "\u22C8", "&boxDL;": "\u2557", "&boxDR;": "\u2554", "&boxDl;": "\u2556", "&boxDr;": "\u2553", "&boxH;": "\u2550", "&boxHD;": "\u2566", "&boxHU;": "\u2569", "&boxHd;": "\u2564", "&boxHu;": "\u2567", "&boxUL;": "\u255D", "&boxUR;": "\u255A", "&boxUl;": "\u255C", "&boxUr;": "\u2559", "&boxV;": "\u2551", "&boxVH;": "\u256C", "&boxVL;": "\u2563", "&boxVR;": "\u2560", "&boxVh;": "\u256B", "&boxVl;": "\u2562", "&boxVr;": "\u255F", "&boxbox;": "\u29C9", "&boxdL;": "\u2555", "&boxdR;": "\u2552", "&boxdl;": "\u2510", "&boxdr;": "\u250C", "&boxh;": "\u2500", "&boxhD;": "\u2565", "&boxhU;": "\u2568", "&boxhd;": "\u252C", "&boxhu;": "\u2534", "&boxminus;": "\u229F", "&boxplus;": "\u229E", "&boxtimes;": "\u22A0", "&boxuL;": "\u255B", "&boxuR;": "\u2558", "&boxul;": "\u2518", "&boxur;": "\u2514", "&boxv;": "\u2502", "&boxvH;": "\u256A", "&boxvL;": "\u2561", "&boxvR;": "\u255E", "&boxvh;": "\u253C", "&boxvl;": "\u2524", "&boxvr;": "\u251C", "&bprime;": "\u2035", "&breve;": "\u02D8", "&brvbar": "\xA6", "&brvbar;": "\xA6", "&bscr;": "\u{1D4B7}", "&bsemi;": "\u204F", "&bsim;": "\u223D", "&bsime;": "\u22CD", "&bsol;": "\\", "&bsolb;": "\u29C5", "&bsolhsub;": "\u27C8", "&bull;": "\u2022", "&bullet;": "\u2022", "&bump;": "\u224E", "&bumpE;": "\u2AAE", "&bumpe;": "\u224F", "&bumpeq;": "\u224F", "&cacute;": "\u0107", "&cap;": "\u2229", "&capand;": "\u2A44", "&capbrcup;": "\u2A49", "&capcap;": "\u2A4B", "&capcup;": "\u2A47", "&capdot;": "\u2A40", "&caps;": "\u2229\uFE00", "&caret;": "\u2041", "&caron;": "\u02C7", "&ccaps;": "\u2A4D", "&ccaron;": "\u010D", "&ccedil": "\xE7", "&ccedil;": "\xE7", "&ccirc;": "\u0109", "&ccups;": "\u2A4C", "&ccupssm;": "\u2A50", "&cdot;": "\u010B", "&cedil": "\xB8", "&cedil;": "\xB8", "&cemptyv;": "\u29B2", "&cent": "\xA2", "&cent;": "\xA2", "&centerdot;": "\xB7", "&cfr;": "\u{1D520}", "&chcy;": "\u0447", "&check;": "\u2713", "&checkmark;": "\u2713", "&chi;": "\u03C7", "&cir;": "\u25CB", "&cirE;": "\u29C3", "&circ;": "\u02C6", "&circeq;": "\u2257", "&circlearrowleft;": "\u21BA", "&circlearrowright;": "\u21BB", "&circledR;": "\xAE", "&circledS;": "\u24C8", "&circledast;": "\u229B", "&circledcirc;": "\u229A", "&circleddash;": "\u229D", "&cire;": "\u2257", "&cirfnint;": "\u2A10", "&cirmid;": "\u2AEF", "&cirscir;": "\u29C2", "&clubs;": "\u2663", "&clubsuit;": "\u2663", "&colon;": ":", "&colone;": "\u2254", "&coloneq;": "\u2254", "&comma;": ",", "&commat;": "@", "&comp;": "\u2201", "&compfn;": "\u2218", "&complement;": "\u2201", "&complexes;": "\u2102", "&cong;": "\u2245", "&congdot;": "\u2A6D", "&conint;": "\u222E", "&copf;": "\u{1D554}", "&coprod;": "\u2210", "&copy": "\xA9", "&copy;": "\xA9", "&copysr;": "\u2117", "&crarr;": "\u21B5", "&cross;": "\u2717", "&cscr;": "\u{1D4B8}", "&csub;": "\u2ACF", "&csube;": "\u2AD1", "&csup;": "\u2AD0", "&csupe;": "\u2AD2", "&ctdot;": "\u22EF", "&cudarrl;": "\u2938", "&cudarrr;": "\u2935", "&cuepr;": "\u22DE", "&cuesc;": "\u22DF", "&cularr;": "\u21B6", "&cularrp;": "\u293D", "&cup;": "\u222A", "&cupbrcap;": "\u2A48", "&cupcap;": "\u2A46", "&cupcup;": "\u2A4A", "&cupdot;": "\u228D", "&cupor;": "\u2A45", "&cups;": "\u222A\uFE00", "&curarr;": "\u21B7", "&curarrm;": "\u293C", "&curlyeqprec;": "\u22DE", "&curlyeqsucc;": "\u22DF", "&curlyvee;": "\u22CE", "&curlywedge;": "\u22CF", "&curren": "\xA4", "&curren;": "\xA4", "&curvearrowleft;": "\u21B6", "&curvearrowright;": "\u21B7", "&cuvee;": "\u22CE", "&cuwed;": "\u22CF", "&cwconint;": "\u2232", "&cwint;": "\u2231", "&cylcty;": "\u232D", "&dArr;": "\u21D3", "&dHar;": "\u2965", "&dagger;": "\u2020", "&daleth;": "\u2138", "&darr;": "\u2193", "&dash;": "\u2010", "&dashv;": "\u22A3", "&dbkarow;": "\u290F", "&dblac;": "\u02DD", "&dcaron;": "\u010F", "&dcy;": "\u0434", "&dd;": "\u2146", "&ddagger;": "\u2021", "&ddarr;": "\u21CA", "&ddotseq;": "\u2A77", "&deg": "\xB0", "&deg;": "\xB0", "&delta;": "\u03B4", "&demptyv;": "\u29B1", "&dfisht;": "\u297F", "&dfr;": "\u{1D521}", "&dharl;": "\u21C3", "&dharr;": "\u21C2", "&diam;": "\u22C4", "&diamond;": "\u22C4", "&diamondsuit;": "\u2666", "&diams;": "\u2666", "&die;": "\xA8", "&digamma;": "\u03DD", "&disin;": "\u22F2", "&div;": "\xF7", "&divide": "\xF7", "&divide;": "\xF7", "&divideontimes;": "\u22C7", "&divonx;": "\u22C7", "&djcy;": "\u0452", "&dlcorn;": "\u231E", "&dlcrop;": "\u230D", "&dollar;": "$", "&dopf;": "\u{1D555}", "&dot;": "\u02D9", "&doteq;": "\u2250", "&doteqdot;": "\u2251", "&dotminus;": "\u2238", "&dotplus;": "\u2214", "&dotsquare;": "\u22A1", "&doublebarwedge;": "\u2306", "&downarrow;": "\u2193", "&downdownarrows;": "\u21CA", "&downharpoonleft;": "\u21C3", "&downharpoonright;": "\u21C2", "&drbkarow;": "\u2910", "&drcorn;": "\u231F", "&drcrop;": "\u230C", "&dscr;": "\u{1D4B9}", "&dscy;": "\u0455", "&dsol;": "\u29F6", "&dstrok;": "\u0111", "&dtdot;": "\u22F1", "&dtri;": "\u25BF", "&dtrif;": "\u25BE", "&duarr;": "\u21F5", "&duhar;": "\u296F", "&dwangle;": "\u29A6", "&dzcy;": "\u045F", "&dzigrarr;": "\u27FF", "&eDDot;": "\u2A77", "&eDot;": "\u2251", "&eacute": "\xE9", "&eacute;": "\xE9", "&easter;": "\u2A6E", "&ecaron;": "\u011B", "&ecir;": "\u2256", "&ecirc": "\xEA", "&ecirc;": "\xEA", "&ecolon;": "\u2255", "&ecy;": "\u044D", "&edot;": "\u0117", "&ee;": "\u2147", "&efDot;": "\u2252", "&efr;": "\u{1D522}", "&eg;": "\u2A9A", "&egrave": "\xE8", "&egrave;": "\xE8", "&egs;": "\u2A96", "&egsdot;": "\u2A98", "&el;": "\u2A99", "&elinters;": "\u23E7", "&ell;": "\u2113", "&els;": "\u2A95", "&elsdot;": "\u2A97", "&emacr;": "\u0113", "&empty;": "\u2205", "&emptyset;": "\u2205", "&emptyv;": "\u2205", "&emsp13;": "\u2004", "&emsp14;": "\u2005", "&emsp;": "\u2003", "&eng;": "\u014B", "&ensp;": "\u2002", "&eogon;": "\u0119", "&eopf;": "\u{1D556}", "&epar;": "\u22D5", "&eparsl;": "\u29E3", "&eplus;": "\u2A71", "&epsi;": "\u03B5", "&epsilon;": "\u03B5", "&epsiv;": "\u03F5", "&eqcirc;": "\u2256", "&eqcolon;": "\u2255", "&eqsim;": "\u2242", "&eqslantgtr;": "\u2A96", "&eqslantless;": "\u2A95", "&equals;": "=", "&equest;": "\u225F", "&equiv;": "\u2261", "&equivDD;": "\u2A78", "&eqvparsl;": "\u29E5", "&erDot;": "\u2253", "&erarr;": "\u2971", "&escr;": "\u212F", "&esdot;": "\u2250", "&esim;": "\u2242", "&eta;": "\u03B7", "&eth": "\xF0", "&eth;": "\xF0", "&euml": "\xEB", "&euml;": "\xEB", "&euro;": "\u20AC", "&excl;": "!", "&exist;": "\u2203", "&expectation;": "\u2130", "&exponentiale;": "\u2147", "&fallingdotseq;": "\u2252", "&fcy;": "\u0444", "&female;": "\u2640", "&ffilig;": "\uFB03", "&fflig;": "\uFB00", "&ffllig;": "\uFB04", "&ffr;": "\u{1D523}", "&filig;": "\uFB01", "&fjlig;": "fj", "&flat;": "\u266D", "&fllig;": "\uFB02", "&fltns;": "\u25B1", "&fnof;": "\u0192", "&fopf;": "\u{1D557}", "&forall;": "\u2200", "&fork;": "\u22D4", "&forkv;": "\u2AD9", "&fpartint;": "\u2A0D", "&frac12": "\xBD", "&frac12;": "\xBD", "&frac13;": "\u2153", "&frac14": "\xBC", "&frac14;": "\xBC", "&frac15;": "\u2155", "&frac16;": "\u2159", "&frac18;": "\u215B", "&frac23;": "\u2154", "&frac25;": "\u2156", "&frac34": "\xBE", "&frac34;": "\xBE", "&frac35;": "\u2157", "&frac38;": "\u215C", "&frac45;": "\u2158", "&frac56;": "\u215A", "&frac58;": "\u215D", "&frac78;": "\u215E", "&frasl;": "\u2044", "&frown;": "\u2322", "&fscr;": "\u{1D4BB}", "&gE;": "\u2267", "&gEl;": "\u2A8C", "&gacute;": "\u01F5", "&gamma;": "\u03B3", "&gammad;": "\u03DD", "&gap;": "\u2A86", "&gbreve;": "\u011F", "&gcirc;": "\u011D", "&gcy;": "\u0433", "&gdot;": "\u0121", "&ge;": "\u2265", "&gel;": "\u22DB", "&geq;": "\u2265", "&geqq;": "\u2267", "&geqslant;": "\u2A7E", "&ges;": "\u2A7E", "&gescc;": "\u2AA9", "&gesdot;": "\u2A80", "&gesdoto;": "\u2A82", "&gesdotol;": "\u2A84", "&gesl;": "\u22DB\uFE00", "&gesles;": "\u2A94", "&gfr;": "\u{1D524}", "&gg;": "\u226B", "&ggg;": "\u22D9", "&gimel;": "\u2137", "&gjcy;": "\u0453", "&gl;": "\u2277", "&glE;": "\u2A92", "&gla;": "\u2AA5", "&glj;": "\u2AA4", "&gnE;": "\u2269", "&gnap;": "\u2A8A", "&gnapprox;": "\u2A8A", "&gne;": "\u2A88", "&gneq;": "\u2A88", "&gneqq;": "\u2269", "&gnsim;": "\u22E7", "&gopf;": "\u{1D558}", "&grave;": "`", "&gscr;": "\u210A", "&gsim;": "\u2273", "&gsime;": "\u2A8E", "&gsiml;": "\u2A90", "&gt": ">", "&gt;": ">", "&gtcc;": "\u2AA7", "&gtcir;": "\u2A7A", "&gtdot;": "\u22D7", "&gtlPar;": "\u2995", "&gtquest;": "\u2A7C", "&gtrapprox;": "\u2A86", "&gtrarr;": "\u2978", "&gtrdot;": "\u22D7", "&gtreqless;": "\u22DB", "&gtreqqless;": "\u2A8C", "&gtrless;": "\u2277", "&gtrsim;": "\u2273", "&gvertneqq;": "\u2269\uFE00", "&gvnE;": "\u2269\uFE00", "&hArr;": "\u21D4", "&hairsp;": "\u200A", "&half;": "\xBD", "&hamilt;": "\u210B", "&hardcy;": "\u044A", "&harr;": "\u2194", "&harrcir;": "\u2948", "&harrw;": "\u21AD", "&hbar;": "\u210F", "&hcirc;": "\u0125", "&hearts;": "\u2665", "&heartsuit;": "\u2665", "&hellip;": "\u2026", "&hercon;": "\u22B9", "&hfr;": "\u{1D525}", "&hksearow;": "\u2925", "&hkswarow;": "\u2926", "&hoarr;": "\u21FF", "&homtht;": "\u223B", "&hookleftarrow;": "\u21A9", "&hookrightarrow;": "\u21AA", "&hopf;": "\u{1D559}", "&horbar;": "\u2015", "&hscr;": "\u{1D4BD}", "&hslash;": "\u210F", "&hstrok;": "\u0127", "&hybull;": "\u2043", "&hyphen;": "\u2010", "&iacute": "\xED", "&iacute;": "\xED", "&ic;": "\u2063", "&icirc": "\xEE", "&icirc;": "\xEE", "&icy;": "\u0438", "&iecy;": "\u0435", "&iexcl": "\xA1", "&iexcl;": "\xA1", "&iff;": "\u21D4", "&ifr;": "\u{1D526}", "&igrave": "\xEC", "&igrave;": "\xEC", "&ii;": "\u2148", "&iiiint;": "\u2A0C", "&iiint;": "\u222D", "&iinfin;": "\u29DC", "&iiota;": "\u2129", "&ijlig;": "\u0133", "&imacr;": "\u012B", "&image;": "\u2111", "&imagline;": "\u2110", "&imagpart;": "\u2111", "&imath;": "\u0131", "&imof;": "\u22B7", "&imped;": "\u01B5", "&in;": "\u2208", "&incare;": "\u2105", "&infin;": "\u221E", "&infintie;": "\u29DD", "&inodot;": "\u0131", "&int;": "\u222B", "&intcal;": "\u22BA", "&integers;": "\u2124", "&intercal;": "\u22BA", "&intlarhk;": "\u2A17", "&intprod;": "\u2A3C", "&iocy;": "\u0451", "&iogon;": "\u012F", "&iopf;": "\u{1D55A}", "&iota;": "\u03B9", "&iprod;": "\u2A3C", "&iquest": "\xBF", "&iquest;": "\xBF", "&iscr;": "\u{1D4BE}", "&isin;": "\u2208", "&isinE;": "\u22F9", "&isindot;": "\u22F5", "&isins;": "\u22F4", "&isinsv;": "\u22F3", "&isinv;": "\u2208", "&it;": "\u2062", "&itilde;": "\u0129", "&iukcy;": "\u0456", "&iuml": "\xEF", "&iuml;": "\xEF", "&jcirc;": "\u0135", "&jcy;": "\u0439", "&jfr;": "\u{1D527}", "&jmath;": "\u0237", "&jopf;": "\u{1D55B}", "&jscr;": "\u{1D4BF}", "&jsercy;": "\u0458", "&jukcy;": "\u0454", "&kappa;": "\u03BA", "&kappav;": "\u03F0", "&kcedil;": "\u0137", "&kcy;": "\u043A", "&kfr;": "\u{1D528}", "&kgreen;": "\u0138", "&khcy;": "\u0445", "&kjcy;": "\u045C", "&kopf;": "\u{1D55C}", "&kscr;": "\u{1D4C0}", "&lAarr;": "\u21DA", "&lArr;": "\u21D0", "&lAtail;": "\u291B", "&lBarr;": "\u290E", "&lE;": "\u2266", "&lEg;": "\u2A8B", "&lHar;": "\u2962", "&lacute;": "\u013A", "&laemptyv;": "\u29B4", "&lagran;": "\u2112", "&lambda;": "\u03BB", "&lang;": "\u27E8", "&langd;": "\u2991", "&langle;": "\u27E8", "&lap;": "\u2A85", "&laquo": "\xAB", "&laquo;": "\xAB", "&larr;": "\u2190", "&larrb;": "\u21E4", "&larrbfs;": "\u291F", "&larrfs;": "\u291D", "&larrhk;": "\u21A9", "&larrlp;": "\u21AB", "&larrpl;": "\u2939", "&larrsim;": "\u2973", "&larrtl;": "\u21A2", "&lat;": "\u2AAB", "&latail;": "\u2919", "&late;": "\u2AAD", "&lates;": "\u2AAD\uFE00", "&lbarr;": "\u290C", "&lbbrk;": "\u2772", "&lbrace;": "{", "&lbrack;": "[", "&lbrke;": "\u298B", "&lbrksld;": "\u298F", "&lbrkslu;": "\u298D", "&lcaron;": "\u013E", "&lcedil;": "\u013C", "&lceil;": "\u2308", "&lcub;": "{", "&lcy;": "\u043B", "&ldca;": "\u2936", "&ldquo;": "\u201C", "&ldquor;": "\u201E", "&ldrdhar;": "\u2967", "&ldrushar;": "\u294B", "&ldsh;": "\u21B2", "&le;": "\u2264", "&leftarrow;": "\u2190", "&leftarrowtail;": "\u21A2", "&leftharpoondown;": "\u21BD", "&leftharpoonup;": "\u21BC", "&leftleftarrows;": "\u21C7", "&leftrightarrow;": "\u2194", "&leftrightarrows;": "\u21C6", "&leftrightharpoons;": "\u21CB", "&leftrightsquigarrow;": "\u21AD", "&leftthreetimes;": "\u22CB", "&leg;": "\u22DA", "&leq;": "\u2264", "&leqq;": "\u2266", "&leqslant;": "\u2A7D", "&les;": "\u2A7D", "&lescc;": "\u2AA8", "&lesdot;": "\u2A7F", "&lesdoto;": "\u2A81", "&lesdotor;": "\u2A83", "&lesg;": "\u22DA\uFE00", "&lesges;": "\u2A93", "&lessapprox;": "\u2A85", "&lessdot;": "\u22D6", "&lesseqgtr;": "\u22DA", "&lesseqqgtr;": "\u2A8B", "&lessgtr;": "\u2276", "&lesssim;": "\u2272", "&lfisht;": "\u297C", "&lfloor;": "\u230A", "&lfr;": "\u{1D529}", "&lg;": "\u2276", "&lgE;": "\u2A91", "&lhard;": "\u21BD", "&lharu;": "\u21BC", "&lharul;": "\u296A", "&lhblk;": "\u2584", "&ljcy;": "\u0459", "&ll;": "\u226A", "&llarr;": "\u21C7", "&llcorner;": "\u231E", "&llhard;": "\u296B", "&lltri;": "\u25FA", "&lmidot;": "\u0140", "&lmoust;": "\u23B0", "&lmoustache;": "\u23B0", "&lnE;": "\u2268", "&lnap;": "\u2A89", "&lnapprox;": "\u2A89", "&lne;": "\u2A87", "&lneq;": "\u2A87", "&lneqq;": "\u2268", "&lnsim;": "\u22E6", "&loang;": "\u27EC", "&loarr;": "\u21FD", "&lobrk;": "\u27E6", "&longleftarrow;": "\u27F5", "&longleftrightarrow;": "\u27F7", "&longmapsto;": "\u27FC", "&longrightarrow;": "\u27F6", "&looparrowleft;": "\u21AB", "&looparrowright;": "\u21AC", "&lopar;": "\u2985", "&lopf;": "\u{1D55D}", "&loplus;": "\u2A2D", "&lotimes;": "\u2A34", "&lowast;": "\u2217", "&lowbar;": "_", "&loz;": "\u25CA", "&lozenge;": "\u25CA", "&lozf;": "\u29EB", "&lpar;": "(", "&lparlt;": "\u2993", "&lrarr;": "\u21C6", "&lrcorner;": "\u231F", "&lrhar;": "\u21CB", "&lrhard;": "\u296D", "&lrm;": "\u200E", "&lrtri;": "\u22BF", "&lsaquo;": "\u2039", "&lscr;": "\u{1D4C1}", "&lsh;": "\u21B0", "&lsim;": "\u2272", "&lsime;": "\u2A8D", "&lsimg;": "\u2A8F", "&lsqb;": "[", "&lsquo;": "\u2018", "&lsquor;": "\u201A", "&lstrok;": "\u0142", "&lt": "<", "&lt;": "<", "&ltcc;": "\u2AA6", "&ltcir;": "\u2A79", "&ltdot;": "\u22D6", "&lthree;": "\u22CB", "&ltimes;": "\u22C9", "&ltlarr;": "\u2976", "&ltquest;": "\u2A7B", "&ltrPar;": "\u2996", "&ltri;": "\u25C3", "&ltrie;": "\u22B4", "&ltrif;": "\u25C2", "&lurdshar;": "\u294A", "&luruhar;": "\u2966", "&lvertneqq;": "\u2268\uFE00", "&lvnE;": "\u2268\uFE00", "&mDDot;": "\u223A", "&macr": "\xAF", "&macr;": "\xAF", "&male;": "\u2642", "&malt;": "\u2720", "&maltese;": "\u2720", "&map;": "\u21A6", "&mapsto;": "\u21A6", "&mapstodown;": "\u21A7", "&mapstoleft;": "\u21A4", "&mapstoup;": "\u21A5", "&marker;": "\u25AE", "&mcomma;": "\u2A29", "&mcy;": "\u043C", "&mdash;": "\u2014", "&measuredangle;": "\u2221", "&mfr;": "\u{1D52A}", "&mho;": "\u2127", "&micro": "\xB5", "&micro;": "\xB5", "&mid;": "\u2223", "&midast;": "*", "&midcir;": "\u2AF0", "&middot": "\xB7", "&middot;": "\xB7", "&minus;": "\u2212", "&minusb;": "\u229F", "&minusd;": "\u2238", "&minusdu;": "\u2A2A", "&mlcp;": "\u2ADB", "&mldr;": "\u2026", "&mnplus;": "\u2213", "&models;": "\u22A7", "&mopf;": "\u{1D55E}", "&mp;": "\u2213", "&mscr;": "\u{1D4C2}", "&mstpos;": "\u223E", "&mu;": "\u03BC", "&multimap;": "\u22B8", "&mumap;": "\u22B8", "&nGg;": "\u22D9\u0338", "&nGt;": "\u226B\u20D2", "&nGtv;": "\u226B\u0338", "&nLeftarrow;": "\u21CD", "&nLeftrightarrow;": "\u21CE", "&nLl;": "\u22D8\u0338", "&nLt;": "\u226A\u20D2", "&nLtv;": "\u226A\u0338", "&nRightarrow;": "\u21CF", "&nVDash;": "\u22AF", "&nVdash;": "\u22AE", "&nabla;": "\u2207", "&nacute;": "\u0144", "&nang;": "\u2220\u20D2", "&nap;": "\u2249", "&napE;": "\u2A70\u0338", "&napid;": "\u224B\u0338", "&napos;": "\u0149", "&napprox;": "\u2249", "&natur;": "\u266E", "&natural;": "\u266E", "&naturals;": "\u2115", "&nbsp": "\xA0", "&nbsp;": "\xA0", "&nbump;": "\u224E\u0338", "&nbumpe;": "\u224F\u0338", "&ncap;": "\u2A43", "&ncaron;": "\u0148", "&ncedil;": "\u0146", "&ncong;": "\u2247", "&ncongdot;": "\u2A6D\u0338", "&ncup;": "\u2A42", "&ncy;": "\u043D", "&ndash;": "\u2013", "&ne;": "\u2260", "&neArr;": "\u21D7", "&nearhk;": "\u2924", "&nearr;": "\u2197", "&nearrow;": "\u2197", "&nedot;": "\u2250\u0338", "&nequiv;": "\u2262", "&nesear;": "\u2928", "&nesim;": "\u2242\u0338", "&nexist;": "\u2204", "&nexists;": "\u2204", "&nfr;": "\u{1D52B}", "&ngE;": "\u2267\u0338", "&nge;": "\u2271", "&ngeq;": "\u2271", "&ngeqq;": "\u2267\u0338", "&ngeqslant;": "\u2A7E\u0338", "&nges;": "\u2A7E\u0338", "&ngsim;": "\u2275", "&ngt;": "\u226F", "&ngtr;": "\u226F", "&nhArr;": "\u21CE", "&nharr;": "\u21AE", "&nhpar;": "\u2AF2", "&ni;": "\u220B", "&nis;": "\u22FC", "&nisd;": "\u22FA", "&niv;": "\u220B", "&njcy;": "\u045A", "&nlArr;": "\u21CD", "&nlE;": "\u2266\u0338", "&nlarr;": "\u219A", "&nldr;": "\u2025", "&nle;": "\u2270", "&nleftarrow;": "\u219A", "&nleftrightarrow;": "\u21AE", "&nleq;": "\u2270", "&nleqq;": "\u2266\u0338", "&nleqslant;": "\u2A7D\u0338", "&nles;": "\u2A7D\u0338", "&nless;": "\u226E", "&nlsim;": "\u2274", "&nlt;": "\u226E", "&nltri;": "\u22EA", "&nltrie;": "\u22EC", "&nmid;": "\u2224", "&nopf;": "\u{1D55F}", "&not": "\xAC", "&not;": "\xAC", "&notin;": "\u2209", "&notinE;": "\u22F9\u0338", "&notindot;": "\u22F5\u0338", "&notinva;": "\u2209", "&notinvb;": "\u22F7", "&notinvc;": "\u22F6", "&notni;": "\u220C", "&notniva;": "\u220C", "&notnivb;": "\u22FE", "&notnivc;": "\u22FD", "&npar;": "\u2226", "&nparallel;": "\u2226", "&nparsl;": "\u2AFD\u20E5", "&npart;": "\u2202\u0338", "&npolint;": "\u2A14", "&npr;": "\u2280", "&nprcue;": "\u22E0", "&npre;": "\u2AAF\u0338", "&nprec;": "\u2280", "&npreceq;": "\u2AAF\u0338", "&nrArr;": "\u21CF", "&nrarr;": "\u219B", "&nrarrc;": "\u2933\u0338", "&nrarrw;": "\u219D\u0338", "&nrightarrow;": "\u219B", "&nrtri;": "\u22EB", "&nrtrie;": "\u22ED", "&nsc;": "\u2281", "&nsccue;": "\u22E1", "&nsce;": "\u2AB0\u0338", "&nscr;": "\u{1D4C3}", "&nshortmid;": "\u2224", "&nshortparallel;": "\u2226", "&nsim;": "\u2241", "&nsime;": "\u2244", "&nsimeq;": "\u2244", "&nsmid;": "\u2224", "&nspar;": "\u2226", "&nsqsube;": "\u22E2", "&nsqsupe;": "\u22E3", "&nsub;": "\u2284", "&nsubE;": "\u2AC5\u0338", "&nsube;": "\u2288", "&nsubset;": "\u2282\u20D2", "&nsubseteq;": "\u2288", "&nsubseteqq;": "\u2AC5\u0338", "&nsucc;": "\u2281", "&nsucceq;": "\u2AB0\u0338", "&nsup;": "\u2285", "&nsupE;": "\u2AC6\u0338", "&nsupe;": "\u2289", "&nsupset;": "\u2283\u20D2", "&nsupseteq;": "\u2289", "&nsupseteqq;": "\u2AC6\u0338", "&ntgl;": "\u2279", "&ntilde": "\xF1", "&ntilde;": "\xF1", "&ntlg;": "\u2278", "&ntriangleleft;": "\u22EA", "&ntrianglelefteq;": "\u22EC", "&ntriangleright;": "\u22EB", "&ntrianglerighteq;": "\u22ED", "&nu;": "\u03BD", "&num;": "#", "&numero;": "\u2116", "&numsp;": "\u2007", "&nvDash;": "\u22AD", "&nvHarr;": "\u2904", "&nvap;": "\u224D\u20D2", "&nvdash;": "\u22AC", "&nvge;": "\u2265\u20D2", "&nvgt;": ">\u20D2", "&nvinfin;": "\u29DE", "&nvlArr;": "\u2902", "&nvle;": "\u2264\u20D2", "&nvlt;": "<\u20D2", "&nvltrie;": "\u22B4\u20D2", "&nvrArr;": "\u2903", "&nvrtrie;": "\u22B5\u20D2", "&nvsim;": "\u223C\u20D2", "&nwArr;": "\u21D6", "&nwarhk;": "\u2923", "&nwarr;": "\u2196", "&nwarrow;": "\u2196", "&nwnear;": "\u2927", "&oS;": "\u24C8", "&oacute": "\xF3", "&oacute;": "\xF3", "&oast;": "\u229B", "&ocir;": "\u229A", "&ocirc": "\xF4", "&ocirc;": "\xF4", "&ocy;": "\u043E", "&odash;": "\u229D", "&odblac;": "\u0151", "&odiv;": "\u2A38", "&odot;": "\u2299", "&odsold;": "\u29BC", "&oelig;": "\u0153", "&ofcir;": "\u29BF", "&ofr;": "\u{1D52C}", "&ogon;": "\u02DB", "&ograve": "\xF2", "&ograve;": "\xF2", "&ogt;": "\u29C1", "&ohbar;": "\u29B5", "&ohm;": "\u03A9", "&oint;": "\u222E", "&olarr;": "\u21BA", "&olcir;": "\u29BE", "&olcross;": "\u29BB", "&oline;": "\u203E", "&olt;": "\u29C0", "&omacr;": "\u014D", "&omega;": "\u03C9", "&omicron;": "\u03BF", "&omid;": "\u29B6", "&ominus;": "\u2296", "&oopf;": "\u{1D560}", "&opar;": "\u29B7", "&operp;": "\u29B9", "&oplus;": "\u2295", "&or;": "\u2228", "&orarr;": "\u21BB", "&ord;": "\u2A5D", "&order;": "\u2134", "&orderof;": "\u2134", "&ordf": "\xAA", "&ordf;": "\xAA", "&ordm": "\xBA", "&ordm;": "\xBA", "&origof;": "\u22B6", "&oror;": "\u2A56", "&orslope;": "\u2A57", "&orv;": "\u2A5B", "&oscr;": "\u2134", "&oslash": "\xF8", "&oslash;": "\xF8", "&osol;": "\u2298", "&otilde": "\xF5", "&otilde;": "\xF5", "&otimes;": "\u2297", "&otimesas;": "\u2A36", "&ouml": "\xF6", "&ouml;": "\xF6", "&ovbar;": "\u233D", "&par;": "\u2225", "&para": "\xB6", "&para;": "\xB6", "&parallel;": "\u2225", "&parsim;": "\u2AF3", "&parsl;": "\u2AFD", "&part;": "\u2202", "&pcy;": "\u043F", "&percnt;": "%", "&period;": ".", "&permil;": "\u2030", "&perp;": "\u22A5", "&pertenk;": "\u2031", "&pfr;": "\u{1D52D}", "&phi;": "\u03C6", "&phiv;": "\u03D5", "&phmmat;": "\u2133", "&phone;": "\u260E", "&pi;": "\u03C0", "&pitchfork;": "\u22D4", "&piv;": "\u03D6", "&planck;": "\u210F", "&planckh;": "\u210E", "&plankv;": "\u210F", "&plus;": "+", "&plusacir;": "\u2A23", "&plusb;": "\u229E", "&pluscir;": "\u2A22", "&plusdo;": "\u2214", "&plusdu;": "\u2A25", "&pluse;": "\u2A72", "&plusmn": "\xB1", "&plusmn;": "\xB1", "&plussim;": "\u2A26", "&plustwo;": "\u2A27", "&pm;": "\xB1", "&pointint;": "\u2A15", "&popf;": "\u{1D561}", "&pound": "\xA3", "&pound;": "\xA3", "&pr;": "\u227A", "&prE;": "\u2AB3", "&prap;": "\u2AB7", "&prcue;": "\u227C", "&pre;": "\u2AAF", "&prec;": "\u227A", "&precapprox;": "\u2AB7", "&preccurlyeq;": "\u227C", "&preceq;": "\u2AAF", "&precnapprox;": "\u2AB9", "&precneqq;": "\u2AB5", "&precnsim;": "\u22E8", "&precsim;": "\u227E", "&prime;": "\u2032", "&primes;": "\u2119", "&prnE;": "\u2AB5", "&prnap;": "\u2AB9", "&prnsim;": "\u22E8", "&prod;": "\u220F", "&profalar;": "\u232E", "&profline;": "\u2312", "&profsurf;": "\u2313", "&prop;": "\u221D", "&propto;": "\u221D", "&prsim;": "\u227E", "&prurel;": "\u22B0", "&pscr;": "\u{1D4C5}", "&psi;": "\u03C8", "&puncsp;": "\u2008", "&qfr;": "\u{1D52E}", "&qint;": "\u2A0C", "&qopf;": "\u{1D562}", "&qprime;": "\u2057", "&qscr;": "\u{1D4C6}", "&quaternions;": "\u210D", "&quatint;": "\u2A16", "&quest;": "?", "&questeq;": "\u225F", "&quot": '"', "&quot;": '"', "&rAarr;": "\u21DB", "&rArr;": "\u21D2", "&rAtail;": "\u291C", "&rBarr;": "\u290F", "&rHar;": "\u2964", "&race;": "\u223D\u0331", "&racute;": "\u0155", "&radic;": "\u221A", "&raemptyv;": "\u29B3", "&rang;": "\u27E9", "&rangd;": "\u2992", "&range;": "\u29A5", "&rangle;": "\u27E9", "&raquo": "\xBB", "&raquo;": "\xBB", "&rarr;": "\u2192", "&rarrap;": "\u2975", "&rarrb;": "\u21E5", "&rarrbfs;": "\u2920", "&rarrc;": "\u2933", "&rarrfs;": "\u291E", "&rarrhk;": "\u21AA", "&rarrlp;": "\u21AC", "&rarrpl;": "\u2945", "&rarrsim;": "\u2974", "&rarrtl;": "\u21A3", "&rarrw;": "\u219D", "&ratail;": "\u291A", "&ratio;": "\u2236", "&rationals;": "\u211A", "&rbarr;": "\u290D", "&rbbrk;": "\u2773", "&rbrace;": "}", "&rbrack;": "]", "&rbrke;": "\u298C", "&rbrksld;": "\u298E", "&rbrkslu;": "\u2990", "&rcaron;": "\u0159", "&rcedil;": "\u0157", "&rceil;": "\u2309", "&rcub;": "}", "&rcy;": "\u0440", "&rdca;": "\u2937", "&rdldhar;": "\u2969", "&rdquo;": "\u201D", "&rdquor;": "\u201D", "&rdsh;": "\u21B3", "&real;": "\u211C", "&realine;": "\u211B", "&realpart;": "\u211C", "&reals;": "\u211D", "&rect;": "\u25AD", "&reg": "\xAE", "&reg;": "\xAE", "&rfisht;": "\u297D", "&rfloor;": "\u230B", "&rfr;": "\u{1D52F}", "&rhard;": "\u21C1", "&rharu;": "\u21C0", "&rharul;": "\u296C", "&rho;": "\u03C1", "&rhov;": "\u03F1", "&rightarrow;": "\u2192", "&rightarrowtail;": "\u21A3", "&rightharpoondown;": "\u21C1", "&rightharpoonup;": "\u21C0", "&rightleftarrows;": "\u21C4", "&rightleftharpoons;": "\u21CC", "&rightrightarrows;": "\u21C9", "&rightsquigarrow;": "\u219D", "&rightthreetimes;": "\u22CC", "&ring;": "\u02DA", "&risingdotseq;": "\u2253", "&rlarr;": "\u21C4", "&rlhar;": "\u21CC", "&rlm;": "\u200F", "&rmoust;": "\u23B1", "&rmoustache;": "\u23B1", "&rnmid;": "\u2AEE", "&roang;": "\u27ED", "&roarr;": "\u21FE", "&robrk;": "\u27E7", "&ropar;": "\u2986", "&ropf;": "\u{1D563}", "&roplus;": "\u2A2E", "&rotimes;": "\u2A35", "&rpar;": ")", "&rpargt;": "\u2994", "&rppolint;": "\u2A12", "&rrarr;": "\u21C9", "&rsaquo;": "\u203A", "&rscr;": "\u{1D4C7}", "&rsh;": "\u21B1", "&rsqb;": "]", "&rsquo;": "\u2019", "&rsquor;": "\u2019", "&rthree;": "\u22CC", "&rtimes;": "\u22CA", "&rtri;": "\u25B9", "&rtrie;": "\u22B5", "&rtrif;": "\u25B8", "&rtriltri;": "\u29CE", "&ruluhar;": "\u2968", "&rx;": "\u211E", "&sacute;": "\u015B", "&sbquo;": "\u201A", "&sc;": "\u227B", "&scE;": "\u2AB4", "&scap;": "\u2AB8", "&scaron;": "\u0161", "&sccue;": "\u227D", "&sce;": "\u2AB0", "&scedil;": "\u015F", "&scirc;": "\u015D", "&scnE;": "\u2AB6", "&scnap;": "\u2ABA", "&scnsim;": "\u22E9", "&scpolint;": "\u2A13", "&scsim;": "\u227F", "&scy;": "\u0441", "&sdot;": "\u22C5", "&sdotb;": "\u22A1", "&sdote;": "\u2A66", "&seArr;": "\u21D8", "&searhk;": "\u2925", "&searr;": "\u2198", "&searrow;": "\u2198", "&sect": "\xA7", "&sect;": "\xA7", "&semi;": ";", "&seswar;": "\u2929", "&setminus;": "\u2216", "&setmn;": "\u2216", "&sext;": "\u2736", "&sfr;": "\u{1D530}", "&sfrown;": "\u2322", "&sharp;": "\u266F", "&shchcy;": "\u0449", "&shcy;": "\u0448", "&shortmid;": "\u2223", "&shortparallel;": "\u2225", "&shy": "\xAD", "&shy;": "\xAD", "&sigma;": "\u03C3", "&sigmaf;": "\u03C2", "&sigmav;": "\u03C2", "&sim;": "\u223C", "&simdot;": "\u2A6A", "&sime;": "\u2243", "&simeq;": "\u2243", "&simg;": "\u2A9E", "&simgE;": "\u2AA0", "&siml;": "\u2A9D", "&simlE;": "\u2A9F", "&simne;": "\u2246", "&simplus;": "\u2A24", "&simrarr;": "\u2972", "&slarr;": "\u2190", "&smallsetminus;": "\u2216", "&smashp;": "\u2A33", "&smeparsl;": "\u29E4", "&smid;": "\u2223", "&smile;": "\u2323", "&smt;": "\u2AAA", "&smte;": "\u2AAC", "&smtes;": "\u2AAC\uFE00", "&softcy;": "\u044C", "&sol;": "/", "&solb;": "\u29C4", "&solbar;": "\u233F", "&sopf;": "\u{1D564}", "&spades;": "\u2660", "&spadesuit;": "\u2660", "&spar;": "\u2225", "&sqcap;": "\u2293", "&sqcaps;": "\u2293\uFE00", "&sqcup;": "\u2294", "&sqcups;": "\u2294\uFE00", "&sqsub;": "\u228F", "&sqsube;": "\u2291", "&sqsubset;": "\u228F", "&sqsubseteq;": "\u2291", "&sqsup;": "\u2290", "&sqsupe;": "\u2292", "&sqsupset;": "\u2290", "&sqsupseteq;": "\u2292", "&squ;": "\u25A1", "&square;": "\u25A1", "&squarf;": "\u25AA", "&squf;": "\u25AA", "&srarr;": "\u2192", "&sscr;": "\u{1D4C8}", "&ssetmn;": "\u2216", "&ssmile;": "\u2323", "&sstarf;": "\u22C6", "&star;": "\u2606", "&starf;": "\u2605", "&straightepsilon;": "\u03F5", "&straightphi;": "\u03D5", "&strns;": "\xAF", "&sub;": "\u2282", "&subE;": "\u2AC5", "&subdot;": "\u2ABD", "&sube;": "\u2286", "&subedot;": "\u2AC3", "&submult;": "\u2AC1", "&subnE;": "\u2ACB", "&subne;": "\u228A", "&subplus;": "\u2ABF", "&subrarr;": "\u2979", "&subset;": "\u2282", "&subseteq;": "\u2286", "&subseteqq;": "\u2AC5", "&subsetneq;": "\u228A", "&subsetneqq;": "\u2ACB", "&subsim;": "\u2AC7", "&subsub;": "\u2AD5", "&subsup;": "\u2AD3", "&succ;": "\u227B", "&succapprox;": "\u2AB8", "&succcurlyeq;": "\u227D", "&succeq;": "\u2AB0", "&succnapprox;": "\u2ABA", "&succneqq;": "\u2AB6", "&succnsim;": "\u22E9", "&succsim;": "\u227F", "&sum;": "\u2211", "&sung;": "\u266A", "&sup1": "\xB9", "&sup1;": "\xB9", "&sup2": "\xB2", "&sup2;": "\xB2", "&sup3": "\xB3", "&sup3;": "\xB3", "&sup;": "\u2283", "&supE;": "\u2AC6", "&supdot;": "\u2ABE", "&supdsub;": "\u2AD8", "&supe;": "\u2287", "&supedot;": "\u2AC4", "&suphsol;": "\u27C9", "&suphsub;": "\u2AD7", "&suplarr;": "\u297B", "&supmult;": "\u2AC2", "&supnE;": "\u2ACC", "&supne;": "\u228B", "&supplus;": "\u2AC0", "&supset;": "\u2283", "&supseteq;": "\u2287", "&supseteqq;": "\u2AC6", "&supsetneq;": "\u228B", "&supsetneqq;": "\u2ACC", "&supsim;": "\u2AC8", "&supsub;": "\u2AD4", "&supsup;": "\u2AD6", "&swArr;": "\u21D9", "&swarhk;": "\u2926", "&swarr;": "\u2199", "&swarrow;": "\u2199", "&swnwar;": "\u292A", "&szlig": "\xDF", "&szlig;": "\xDF", "&target;": "\u2316", "&tau;": "\u03C4", "&tbrk;": "\u23B4", "&tcaron;": "\u0165", "&tcedil;": "\u0163", "&tcy;": "\u0442", "&tdot;": "\u20DB", "&telrec;": "\u2315", "&tfr;": "\u{1D531}", "&there4;": "\u2234", "&therefore;": "\u2234", "&theta;": "\u03B8", "&thetasym;": "\u03D1", "&thetav;": "\u03D1", "&thickapprox;": "\u2248", "&thicksim;": "\u223C", "&thinsp;": "\u2009", "&thkap;": "\u2248", "&thksim;": "\u223C", "&thorn": "\xFE", "&thorn;": "\xFE", "&tilde;": "\u02DC", "&times": "\xD7", "&times;": "\xD7", "&timesb;": "\u22A0", "&timesbar;": "\u2A31", "&timesd;": "\u2A30", "&tint;": "\u222D", "&toea;": "\u2928", "&top;": "\u22A4", "&topbot;": "\u2336", "&topcir;": "\u2AF1", "&topf;": "\u{1D565}", "&topfork;": "\u2ADA", "&tosa;": "\u2929", "&tprime;": "\u2034", "&trade;": "\u2122", "&triangle;": "\u25B5", "&triangledown;": "\u25BF", "&triangleleft;": "\u25C3", "&trianglelefteq;": "\u22B4", "&triangleq;": "\u225C", "&triangleright;": "\u25B9", "&trianglerighteq;": "\u22B5", "&tridot;": "\u25EC", "&trie;": "\u225C", "&triminus;": "\u2A3A", "&triplus;": "\u2A39", "&trisb;": "\u29CD", "&tritime;": "\u2A3B", "&trpezium;": "\u23E2", "&tscr;": "\u{1D4C9}", "&tscy;": "\u0446", "&tshcy;": "\u045B", "&tstrok;": "\u0167", "&twixt;": "\u226C", "&twoheadleftarrow;": "\u219E", "&twoheadrightarrow;": "\u21A0", "&uArr;": "\u21D1", "&uHar;": "\u2963", "&uacute": "\xFA", "&uacute;": "\xFA", "&uarr;": "\u2191", "&ubrcy;": "\u045E", "&ubreve;": "\u016D", "&ucirc": "\xFB", "&ucirc;": "\xFB", "&ucy;": "\u0443", "&udarr;": "\u21C5", "&udblac;": "\u0171", "&udhar;": "\u296E", "&ufisht;": "\u297E", "&ufr;": "\u{1D532}", "&ugrave": "\xF9", "&ugrave;": "\xF9", "&uharl;": "\u21BF", "&uharr;": "\u21BE", "&uhblk;": "\u2580", "&ulcorn;": "\u231C", "&ulcorner;": "\u231C", "&ulcrop;": "\u230F", "&ultri;": "\u25F8", "&umacr;": "\u016B", "&uml": "\xA8", "&uml;": "\xA8", "&uogon;": "\u0173", "&uopf;": "\u{1D566}", "&uparrow;": "\u2191", "&updownarrow;": "\u2195", "&upharpoonleft;": "\u21BF", "&upharpoonright;": "\u21BE", "&uplus;": "\u228E", "&upsi;": "\u03C5", "&upsih;": "\u03D2", "&upsilon;": "\u03C5", "&upuparrows;": "\u21C8", "&urcorn;": "\u231D", "&urcorner;": "\u231D", "&urcrop;": "\u230E", "&uring;": "\u016F", "&urtri;": "\u25F9", "&uscr;": "\u{1D4CA}", "&utdot;": "\u22F0", "&utilde;": "\u0169", "&utri;": "\u25B5", "&utrif;": "\u25B4", "&uuarr;": "\u21C8", "&uuml": "\xFC", "&uuml;": "\xFC", "&uwangle;": "\u29A7", "&vArr;": "\u21D5", "&vBar;": "\u2AE8", "&vBarv;": "\u2AE9", "&vDash;": "\u22A8", "&vangrt;": "\u299C", "&varepsilon;": "\u03F5", "&varkappa;": "\u03F0", "&varnothing;": "\u2205", "&varphi;": "\u03D5", "&varpi;": "\u03D6", "&varpropto;": "\u221D", "&varr;": "\u2195", "&varrho;": "\u03F1", "&varsigma;": "\u03C2", "&varsubsetneq;": "\u228A\uFE00", "&varsubsetneqq;": "\u2ACB\uFE00", "&varsupsetneq;": "\u228B\uFE00", "&varsupsetneqq;": "\u2ACC\uFE00", "&vartheta;": "\u03D1", "&vartriangleleft;": "\u22B2", "&vartriangleright;": "\u22B3", "&vcy;": "\u0432", "&vdash;": "\u22A2", "&vee;": "\u2228", "&veebar;": "\u22BB", "&veeeq;": "\u225A", "&vellip;": "\u22EE", "&verbar;": "|", "&vert;": "|", "&vfr;": "\u{1D533}", "&vltri;": "\u22B2", "&vnsub;": "\u2282\u20D2", "&vnsup;": "\u2283\u20D2", "&vopf;": "\u{1D567}", "&vprop;": "\u221D", "&vrtri;": "\u22B3", "&vscr;": "\u{1D4CB}", "&vsubnE;": "\u2ACB\uFE00", "&vsubne;": "\u228A\uFE00", "&vsupnE;": "\u2ACC\uFE00", "&vsupne;": "\u228B\uFE00", "&vzigzag;": "\u299A", "&wcirc;": "\u0175", "&wedbar;": "\u2A5F", "&wedge;": "\u2227", "&wedgeq;": "\u2259", "&weierp;": "\u2118", "&wfr;": "\u{1D534}", "&wopf;": "\u{1D568}", "&wp;": "\u2118", "&wr;": "\u2240", "&wreath;": "\u2240", "&wscr;": "\u{1D4CC}", "&xcap;": "\u22C2", "&xcirc;": "\u25EF", "&xcup;": "\u22C3", "&xdtri;": "\u25BD", "&xfr;": "\u{1D535}", "&xhArr;": "\u27FA", "&xharr;": "\u27F7", "&xi;": "\u03BE", "&xlArr;": "\u27F8", "&xlarr;": "\u27F5", "&xmap;": "\u27FC", "&xnis;": "\u22FB", "&xodot;": "\u2A00", "&xopf;": "\u{1D569}", "&xoplus;": "\u2A01", "&xotime;": "\u2A02", "&xrArr;": "\u27F9", "&xrarr;": "\u27F6", "&xscr;": "\u{1D4CD}", "&xsqcup;": "\u2A06", "&xuplus;": "\u2A04", "&xutri;": "\u25B3", "&xvee;": "\u22C1", "&xwedge;": "\u22C0", "&yacute": "\xFD", "&yacute;": "\xFD", "&yacy;": "\u044F", "&ycirc;": "\u0177", "&ycy;": "\u044B", "&yen": "\xA5", "&yen;": "\xA5", "&yfr;": "\u{1D536}", "&yicy;": "\u0457", "&yopf;": "\u{1D56A}", "&yscr;": "\u{1D4CE}", "&yucy;": "\u044E", "&yuml": "\xFF", "&yuml;": "\xFF", "&zacute;": "\u017A", "&zcaron;": "\u017E", "&zcy;": "\u0437", "&zdot;": "\u017C", "&zeetrf;": "\u2128", "&zeta;": "\u03B6", "&zfr;": "\u{1D537}", "&zhcy;": "\u0436", "&zigrarr;": "\u21DD", "&zopf;": "\u{1D56B}", "&zscr;": "\u{1D4CF}", "&zwj;": "\u200D", "&zwnj;": "\u200C" }, characters: { "\xC6": "&AElig;", "&": "&amp;", "\xC1": "&Aacute;", "\u0102": "&Abreve;", "\xC2": "&Acirc;", "\u0410": "&Acy;", "\u{1D504}": "&Afr;", "\xC0": "&Agrave;", "\u0391": "&Alpha;", "\u0100": "&Amacr;", "\u2A53": "&And;", "\u0104": "&Aogon;", "\u{1D538}": "&Aopf;", "\u2061": "&af;", "\xC5": "&angst;", "\u{1D49C}": "&Ascr;", "\u2254": "&coloneq;", "\xC3": "&Atilde;", "\xC4": "&Auml;", "\u2216": "&ssetmn;", "\u2AE7": "&Barv;", "\u2306": "&doublebarwedge;", "\u0411": "&Bcy;", "\u2235": "&because;", "\u212C": "&bernou;", "\u0392": "&Beta;", "\u{1D505}": "&Bfr;", "\u{1D539}": "&Bopf;", "\u02D8": "&breve;", "\u224E": "&bump;", "\u0427": "&CHcy;", "\xA9": "&copy;", "\u0106": "&Cacute;", "\u22D2": "&Cap;", "\u2145": "&DD;", "\u212D": "&Cfr;", "\u010C": "&Ccaron;", "\xC7": "&Ccedil;", "\u0108": "&Ccirc;", "\u2230": "&Cconint;", "\u010A": "&Cdot;", "\xB8": "&cedil;", "\xB7": "&middot;", "\u03A7": "&Chi;", "\u2299": "&odot;", "\u2296": "&ominus;", "\u2295": "&oplus;", "\u2297": "&otimes;", "\u2232": "&cwconint;", "\u201D": "&rdquor;", "\u2019": "&rsquor;", "\u2237": "&Proportion;", "\u2A74": "&Colone;", "\u2261": "&equiv;", "\u222F": "&DoubleContourIntegral;", "\u222E": "&oint;", "\u2102": "&complexes;", "\u2210": "&coprod;", "\u2233": "&awconint;", "\u2A2F": "&Cross;", "\u{1D49E}": "&Cscr;", "\u22D3": "&Cup;", "\u224D": "&asympeq;", "\u2911": "&DDotrahd;", "\u0402": "&DJcy;", "\u0405": "&DScy;", "\u040F": "&DZcy;", "\u2021": "&ddagger;", "\u21A1": "&Darr;", "\u2AE4": "&DoubleLeftTee;", "\u010E": "&Dcaron;", "\u0414": "&Dcy;", "\u2207": "&nabla;", "\u0394": "&Delta;", "\u{1D507}": "&Dfr;", "\xB4": "&acute;", "\u02D9": "&dot;", "\u02DD": "&dblac;", "`": "&grave;", "\u02DC": "&tilde;", "\u22C4": "&diamond;", "\u2146": "&dd;", "\u{1D53B}": "&Dopf;", "\xA8": "&uml;", "\u20DC": "&DotDot;", "\u2250": "&esdot;", "\u21D3": "&dArr;", "\u21D0": "&lArr;", "\u21D4": "&iff;", "\u27F8": "&xlArr;", "\u27FA": "&xhArr;", "\u27F9": "&xrArr;", "\u21D2": "&rArr;", "\u22A8": "&vDash;", "\u21D1": "&uArr;", "\u21D5": "&vArr;", "\u2225": "&spar;", "\u2193": "&downarrow;", "\u2913": "&DownArrowBar;", "\u21F5": "&duarr;", "\u0311": "&DownBreve;", "\u2950": "&DownLeftRightVector;", "\u295E": "&DownLeftTeeVector;", "\u21BD": "&lhard;", "\u2956": "&DownLeftVectorBar;", "\u295F": "&DownRightTeeVector;", "\u21C1": "&rightharpoondown;", "\u2957": "&DownRightVectorBar;", "\u22A4": "&top;", "\u21A7": "&mapstodown;", "\u{1D49F}": "&Dscr;", "\u0110": "&Dstrok;", "\u014A": "&ENG;", "\xD0": "&ETH;", "\xC9": "&Eacute;", "\u011A": "&Ecaron;", "\xCA": "&Ecirc;", "\u042D": "&Ecy;", "\u0116": "&Edot;", "\u{1D508}": "&Efr;", "\xC8": "&Egrave;", "\u2208": "&isinv;", "\u0112": "&Emacr;", "\u25FB": "&EmptySmallSquare;", "\u25AB": "&EmptyVerySmallSquare;", "\u0118": "&Eogon;", "\u{1D53C}": "&Eopf;", "\u0395": "&Epsilon;", "\u2A75": "&Equal;", "\u2242": "&esim;", "\u21CC": "&rlhar;", "\u2130": "&expectation;", "\u2A73": "&Esim;", "\u0397": "&Eta;", "\xCB": "&Euml;", "\u2203": "&exist;", "\u2147": "&exponentiale;", "\u0424": "&Fcy;", "\u{1D509}": "&Ffr;", "\u25FC": "&FilledSmallSquare;", "\u25AA": "&squf;", "\u{1D53D}": "&Fopf;", "\u2200": "&forall;", "\u2131": "&Fscr;", "\u0403": "&GJcy;", ">": "&gt;", "\u0393": "&Gamma;", "\u03DC": "&Gammad;", "\u011E": "&Gbreve;", "\u0122": "&Gcedil;", "\u011C": "&Gcirc;", "\u0413": "&Gcy;", "\u0120": "&Gdot;", "\u{1D50A}": "&Gfr;", "\u22D9": "&ggg;", "\u{1D53E}": "&Gopf;", "\u2265": "&geq;", "\u22DB": "&gtreqless;", "\u2267": "&geqq;", "\u2AA2": "&GreaterGreater;", "\u2277": "&gtrless;", "\u2A7E": "&ges;", "\u2273": "&gtrsim;", "\u{1D4A2}": "&Gscr;", "\u226B": "&gg;", "\u042A": "&HARDcy;", "\u02C7": "&caron;", "^": "&Hat;", "\u0124": "&Hcirc;", "\u210C": "&Poincareplane;", "\u210B": "&hamilt;", "\u210D": "&quaternions;", "\u2500": "&boxh;", "\u0126": "&Hstrok;", "\u224F": "&bumpeq;", "\u0415": "&IEcy;", "\u0132": "&IJlig;", "\u0401": "&IOcy;", "\xCD": "&Iacute;", "\xCE": "&Icirc;", "\u0418": "&Icy;", "\u0130": "&Idot;", "\u2111": "&imagpart;", "\xCC": "&Igrave;", "\u012A": "&Imacr;", "\u2148": "&ii;", "\u222C": "&Int;", "\u222B": "&int;", "\u22C2": "&xcap;", "\u2063": "&ic;", "\u2062": "&it;", "\u012E": "&Iogon;", "\u{1D540}": "&Iopf;", "\u0399": "&Iota;", "\u2110": "&imagline;", "\u0128": "&Itilde;", "\u0406": "&Iukcy;", "\xCF": "&Iuml;", "\u0134": "&Jcirc;", "\u0419": "&Jcy;", "\u{1D50D}": "&Jfr;", "\u{1D541}": "&Jopf;", "\u{1D4A5}": "&Jscr;", "\u0408": "&Jsercy;", "\u0404": "&Jukcy;", "\u0425": "&KHcy;", "\u040C": "&KJcy;", "\u039A": "&Kappa;", "\u0136": "&Kcedil;", "\u041A": "&Kcy;", "\u{1D50E}": "&Kfr;", "\u{1D542}": "&Kopf;", "\u{1D4A6}": "&Kscr;", "\u0409": "&LJcy;", "<": "&lt;", "\u0139": "&Lacute;", "\u039B": "&Lambda;", "\u27EA": "&Lang;", "\u2112": "&lagran;", "\u219E": "&twoheadleftarrow;", "\u013D": "&Lcaron;", "\u013B": "&Lcedil;", "\u041B": "&Lcy;", "\u27E8": "&langle;", "\u2190": "&slarr;", "\u21E4": "&larrb;", "\u21C6": "&lrarr;", "\u2308": "&lceil;", "\u27E6": "&lobrk;", "\u2961": "&LeftDownTeeVector;", "\u21C3": "&downharpoonleft;", "\u2959": "&LeftDownVectorBar;", "\u230A": "&lfloor;", "\u2194": "&leftrightarrow;", "\u294E": "&LeftRightVector;", "\u22A3": "&dashv;", "\u21A4": "&mapstoleft;", "\u295A": "&LeftTeeVector;", "\u22B2": "&vltri;", "\u29CF": "&LeftTriangleBar;", "\u22B4": "&trianglelefteq;", "\u2951": "&LeftUpDownVector;", "\u2960": "&LeftUpTeeVector;", "\u21BF": "&upharpoonleft;", "\u2958": "&LeftUpVectorBar;", "\u21BC": "&lharu;", "\u2952": "&LeftVectorBar;", "\u22DA": "&lesseqgtr;", "\u2266": "&leqq;", "\u2276": "&lg;", "\u2AA1": "&LessLess;", "\u2A7D": "&les;", "\u2272": "&lsim;", "\u{1D50F}": "&Lfr;", "\u22D8": "&Ll;", "\u21DA": "&lAarr;", "\u013F": "&Lmidot;", "\u27F5": "&xlarr;", "\u27F7": "&xharr;", "\u27F6": "&xrarr;", "\u{1D543}": "&Lopf;", "\u2199": "&swarrow;", "\u2198": "&searrow;", "\u21B0": "&lsh;", "\u0141": "&Lstrok;", "\u226A": "&ll;", "\u2905": "&Map;", "\u041C": "&Mcy;", "\u205F": "&MediumSpace;", "\u2133": "&phmmat;", "\u{1D510}": "&Mfr;", "\u2213": "&mp;", "\u{1D544}": "&Mopf;", "\u039C": "&Mu;", "\u040A": "&NJcy;", "\u0143": "&Nacute;", "\u0147": "&Ncaron;", "\u0145": "&Ncedil;", "\u041D": "&Ncy;", "\u200B": "&ZeroWidthSpace;", "\n": "&NewLine;", "\u{1D511}": "&Nfr;", "\u2060": "&NoBreak;", "\xA0": "&nbsp;", "\u2115": "&naturals;", "\u2AEC": "&Not;", "\u2262": "&nequiv;", "\u226D": "&NotCupCap;", "\u2226": "&nspar;", "\u2209": "&notinva;", "\u2260": "&ne;", "\u2242\u0338": "&nesim;", "\u2204": "&nexists;", "\u226F": "&ngtr;", "\u2271": "&ngeq;", "\u2267\u0338": "&ngeqq;", "\u226B\u0338": "&nGtv;", "\u2279": "&ntgl;", "\u2A7E\u0338": "&nges;", "\u2275": "&ngsim;", "\u224E\u0338": "&nbump;", "\u224F\u0338": "&nbumpe;", "\u22EA": "&ntriangleleft;", "\u29CF\u0338": "&NotLeftTriangleBar;", "\u22EC": "&ntrianglelefteq;", "\u226E": "&nlt;", "\u2270": "&nleq;", "\u2278": "&ntlg;", "\u226A\u0338": "&nLtv;", "\u2A7D\u0338": "&nles;", "\u2274": "&nlsim;", "\u2AA2\u0338": "&NotNestedGreaterGreater;", "\u2AA1\u0338": "&NotNestedLessLess;", "\u2280": "&nprec;", "\u2AAF\u0338": "&npreceq;", "\u22E0": "&nprcue;", "\u220C": "&notniva;", "\u22EB": "&ntriangleright;", "\u29D0\u0338": "&NotRightTriangleBar;", "\u22ED": "&ntrianglerighteq;", "\u228F\u0338": "&NotSquareSubset;", "\u22E2": "&nsqsube;", "\u2290\u0338": "&NotSquareSuperset;", "\u22E3": "&nsqsupe;", "\u2282\u20D2": "&vnsub;", "\u2288": "&nsubseteq;", "\u2281": "&nsucc;", "\u2AB0\u0338": "&nsucceq;", "\u22E1": "&nsccue;", "\u227F\u0338": "&NotSucceedsTilde;", "\u2283\u20D2": "&vnsup;", "\u2289": "&nsupseteq;", "\u2241": "&nsim;", "\u2244": "&nsimeq;", "\u2247": "&ncong;", "\u2249": "&napprox;", "\u2224": "&nsmid;", "\u{1D4A9}": "&Nscr;", "\xD1": "&Ntilde;", "\u039D": "&Nu;", "\u0152": "&OElig;", "\xD3": "&Oacute;", "\xD4": "&Ocirc;", "\u041E": "&Ocy;", "\u0150": "&Odblac;", "\u{1D512}": "&Ofr;", "\xD2": "&Ograve;", "\u014C": "&Omacr;", "\u03A9": "&ohm;", "\u039F": "&Omicron;", "\u{1D546}": "&Oopf;", "\u201C": "&ldquo;", "\u2018": "&lsquo;", "\u2A54": "&Or;", "\u{1D4AA}": "&Oscr;", "\xD8": "&Oslash;", "\xD5": "&Otilde;", "\u2A37": "&Otimes;", "\xD6": "&Ouml;", "\u203E": "&oline;", "\u23DE": "&OverBrace;", "\u23B4": "&tbrk;", "\u23DC": "&OverParenthesis;", "\u2202": "&part;", "\u041F": "&Pcy;", "\u{1D513}": "&Pfr;", "\u03A6": "&Phi;", "\u03A0": "&Pi;", "\xB1": "&pm;", "\u2119": "&primes;", "\u2ABB": "&Pr;", "\u227A": "&prec;", "\u2AAF": "&preceq;", "\u227C": "&preccurlyeq;", "\u227E": "&prsim;", "\u2033": "&Prime;", "\u220F": "&prod;", "\u221D": "&vprop;", "\u{1D4AB}": "&Pscr;", "\u03A8": "&Psi;", '"': "&quot;", "\u{1D514}": "&Qfr;", "\u211A": "&rationals;", "\u{1D4AC}": "&Qscr;", "\u2910": "&drbkarow;", "\xAE": "&reg;", "\u0154": "&Racute;", "\u27EB": "&Rang;", "\u21A0": "&twoheadrightarrow;", "\u2916": "&Rarrtl;", "\u0158": "&Rcaron;", "\u0156": "&Rcedil;", "\u0420": "&Rcy;", "\u211C": "&realpart;", "\u220B": "&niv;", "\u21CB": "&lrhar;", "\u296F": "&duhar;", "\u03A1": "&Rho;", "\u27E9": "&rangle;", "\u2192": "&srarr;", "\u21E5": "&rarrb;", "\u21C4": "&rlarr;", "\u2309": "&rceil;", "\u27E7": "&robrk;", "\u295D": "&RightDownTeeVector;", "\u21C2": "&downharpoonright;", "\u2955": "&RightDownVectorBar;", "\u230B": "&rfloor;", "\u22A2": "&vdash;", "\u21A6": "&mapsto;", "\u295B": "&RightTeeVector;", "\u22B3": "&vrtri;", "\u29D0": "&RightTriangleBar;", "\u22B5": "&trianglerighteq;", "\u294F": "&RightUpDownVector;", "\u295C": "&RightUpTeeVector;", "\u21BE": "&upharpoonright;", "\u2954": "&RightUpVectorBar;", "\u21C0": "&rightharpoonup;", "\u2953": "&RightVectorBar;", "\u211D": "&reals;", "\u2970": "&RoundImplies;", "\u21DB": "&rAarr;", "\u211B": "&realine;", "\u21B1": "&rsh;", "\u29F4": "&RuleDelayed;", "\u0429": "&SHCHcy;", "\u0428": "&SHcy;", "\u042C": "&SOFTcy;", "\u015A": "&Sacute;", "\u2ABC": "&Sc;", "\u0160": "&Scaron;", "\u015E": "&Scedil;", "\u015C": "&Scirc;", "\u0421": "&Scy;", "\u{1D516}": "&Sfr;", "\u2191": "&uparrow;", "\u03A3": "&Sigma;", "\u2218": "&compfn;", "\u{1D54A}": "&Sopf;", "\u221A": "&radic;", "\u25A1": "&square;", "\u2293": "&sqcap;", "\u228F": "&sqsubset;", "\u2291": "&sqsubseteq;", "\u2290": "&sqsupset;", "\u2292": "&sqsupseteq;", "\u2294": "&sqcup;", "\u{1D4AE}": "&Sscr;", "\u22C6": "&sstarf;", "\u22D0": "&Subset;", "\u2286": "&subseteq;", "\u227B": "&succ;", "\u2AB0": "&succeq;", "\u227D": "&succcurlyeq;", "\u227F": "&succsim;", "\u2211": "&sum;", "\u22D1": "&Supset;", "\u2283": "&supset;", "\u2287": "&supseteq;", "\xDE": "&THORN;", "\u2122": "&trade;", "\u040B": "&TSHcy;", "\u0426": "&TScy;", "	": "&Tab;", "\u03A4": "&Tau;", "\u0164": "&Tcaron;", "\u0162": "&Tcedil;", "\u0422": "&Tcy;", "\u{1D517}": "&Tfr;", "\u2234": "&therefore;", "\u0398": "&Theta;", "\u205F\u200A": "&ThickSpace;", "\u2009": "&thinsp;", "\u223C": "&thksim;", "\u2243": "&simeq;", "\u2245": "&cong;", "\u2248": "&thkap;", "\u{1D54B}": "&Topf;", "\u20DB": "&tdot;", "\u{1D4AF}": "&Tscr;", "\u0166": "&Tstrok;", "\xDA": "&Uacute;", "\u219F": "&Uarr;", "\u2949": "&Uarrocir;", "\u040E": "&Ubrcy;", "\u016C": "&Ubreve;", "\xDB": "&Ucirc;", "\u0423": "&Ucy;", "\u0170": "&Udblac;", "\u{1D518}": "&Ufr;", "\xD9": "&Ugrave;", "\u016A": "&Umacr;", _: "&lowbar;", "\u23DF": "&UnderBrace;", "\u23B5": "&bbrk;", "\u23DD": "&UnderParenthesis;", "\u22C3": "&xcup;", "\u228E": "&uplus;", "\u0172": "&Uogon;", "\u{1D54C}": "&Uopf;", "\u2912": "&UpArrowBar;", "\u21C5": "&udarr;", "\u2195": "&varr;", "\u296E": "&udhar;", "\u22A5": "&perp;", "\u21A5": "&mapstoup;", "\u2196": "&nwarrow;", "\u2197": "&nearrow;", "\u03D2": "&upsih;", "\u03A5": "&Upsilon;", "\u016E": "&Uring;", "\u{1D4B0}": "&Uscr;", "\u0168": "&Utilde;", "\xDC": "&Uuml;", "\u22AB": "&VDash;", "\u2AEB": "&Vbar;", "\u0412": "&Vcy;", "\u22A9": "&Vdash;", "\u2AE6": "&Vdashl;", "\u22C1": "&xvee;", "\u2016": "&Vert;", "\u2223": "&smid;", "|": "&vert;", "\u2758": "&VerticalSeparator;", "\u2240": "&wreath;", "\u200A": "&hairsp;", "\u{1D519}": "&Vfr;", "\u{1D54D}": "&Vopf;", "\u{1D4B1}": "&Vscr;", "\u22AA": "&Vvdash;", "\u0174": "&Wcirc;", "\u22C0": "&xwedge;", "\u{1D51A}": "&Wfr;", "\u{1D54E}": "&Wopf;", "\u{1D4B2}": "&Wscr;", "\u{1D51B}": "&Xfr;", "\u039E": "&Xi;", "\u{1D54F}": "&Xopf;", "\u{1D4B3}": "&Xscr;", "\u042F": "&YAcy;", "\u0407": "&YIcy;", "\u042E": "&YUcy;", "\xDD": "&Yacute;", "\u0176": "&Ycirc;", "\u042B": "&Ycy;", "\u{1D51C}": "&Yfr;", "\u{1D550}": "&Yopf;", "\u{1D4B4}": "&Yscr;", "\u0178": "&Yuml;", "\u0416": "&ZHcy;", "\u0179": "&Zacute;", "\u017D": "&Zcaron;", "\u0417": "&Zcy;", "\u017B": "&Zdot;", "\u0396": "&Zeta;", "\u2128": "&zeetrf;", "\u2124": "&integers;", "\u{1D4B5}": "&Zscr;", "\xE1": "&aacute;", "\u0103": "&abreve;", "\u223E": "&mstpos;", "\u223E\u0333": "&acE;", "\u223F": "&acd;", "\xE2": "&acirc;", "\u0430": "&acy;", "\xE6": "&aelig;", "\u{1D51E}": "&afr;", "\xE0": "&agrave;", "\u2135": "&aleph;", "\u03B1": "&alpha;", "\u0101": "&amacr;", "\u2A3F": "&amalg;", "\u2227": "&wedge;", "\u2A55": "&andand;", "\u2A5C": "&andd;", "\u2A58": "&andslope;", "\u2A5A": "&andv;", "\u2220": "&angle;", "\u29A4": "&ange;", "\u2221": "&measuredangle;", "\u29A8": "&angmsdaa;", "\u29A9": "&angmsdab;", "\u29AA": "&angmsdac;", "\u29AB": "&angmsdad;", "\u29AC": "&angmsdae;", "\u29AD": "&angmsdaf;", "\u29AE": "&angmsdag;", "\u29AF": "&angmsdah;", "\u221F": "&angrt;", "\u22BE": "&angrtvb;", "\u299D": "&angrtvbd;", "\u2222": "&angsph;", "\u237C": "&angzarr;", "\u0105": "&aogon;", "\u{1D552}": "&aopf;", "\u2A70": "&apE;", "\u2A6F": "&apacir;", "\u224A": "&approxeq;", "\u224B": "&apid;", "'": "&apos;", "\xE5": "&aring;", "\u{1D4B6}": "&ascr;", "*": "&midast;", "\xE3": "&atilde;", "\xE4": "&auml;", "\u2A11": "&awint;", "\u2AED": "&bNot;", "\u224C": "&bcong;", "\u03F6": "&bepsi;", "\u2035": "&bprime;", "\u223D": "&bsim;", "\u22CD": "&bsime;", "\u22BD": "&barvee;", "\u2305": "&barwedge;", "\u23B6": "&bbrktbrk;", "\u0431": "&bcy;", "\u201E": "&ldquor;", "\u29B0": "&bemptyv;", "\u03B2": "&beta;", "\u2136": "&beth;", "\u226C": "&twixt;", "\u{1D51F}": "&bfr;", "\u25EF": "&xcirc;", "\u2A00": "&xodot;", "\u2A01": "&xoplus;", "\u2A02": "&xotime;", "\u2A06": "&xsqcup;", "\u2605": "&starf;", "\u25BD": "&xdtri;", "\u25B3": "&xutri;", "\u2A04": "&xuplus;", "\u290D": "&rbarr;", "\u29EB": "&lozf;", "\u25B4": "&utrif;", "\u25BE": "&dtrif;", "\u25C2": "&ltrif;", "\u25B8": "&rtrif;", "\u2423": "&blank;", "\u2592": "&blk12;", "\u2591": "&blk14;", "\u2593": "&blk34;", "\u2588": "&block;", "=\u20E5": "&bne;", "\u2261\u20E5": "&bnequiv;", "\u2310": "&bnot;", "\u{1D553}": "&bopf;", "\u22C8": "&bowtie;", "\u2557": "&boxDL;", "\u2554": "&boxDR;", "\u2556": "&boxDl;", "\u2553": "&boxDr;", "\u2550": "&boxH;", "\u2566": "&boxHD;", "\u2569": "&boxHU;", "\u2564": "&boxHd;", "\u2567": "&boxHu;", "\u255D": "&boxUL;", "\u255A": "&boxUR;", "\u255C": "&boxUl;", "\u2559": "&boxUr;", "\u2551": "&boxV;", "\u256C": "&boxVH;", "\u2563": "&boxVL;", "\u2560": "&boxVR;", "\u256B": "&boxVh;", "\u2562": "&boxVl;", "\u255F": "&boxVr;", "\u29C9": "&boxbox;", "\u2555": "&boxdL;", "\u2552": "&boxdR;", "\u2510": "&boxdl;", "\u250C": "&boxdr;", "\u2565": "&boxhD;", "\u2568": "&boxhU;", "\u252C": "&boxhd;", "\u2534": "&boxhu;", "\u229F": "&minusb;", "\u229E": "&plusb;", "\u22A0": "&timesb;", "\u255B": "&boxuL;", "\u2558": "&boxuR;", "\u2518": "&boxul;", "\u2514": "&boxur;", "\u2502": "&boxv;", "\u256A": "&boxvH;", "\u2561": "&boxvL;", "\u255E": "&boxvR;", "\u253C": "&boxvh;", "\u2524": "&boxvl;", "\u251C": "&boxvr;", "\xA6": "&brvbar;", "\u{1D4B7}": "&bscr;", "\u204F": "&bsemi;", "\\": "&bsol;", "\u29C5": "&bsolb;", "\u27C8": "&bsolhsub;", "\u2022": "&bullet;", "\u2AAE": "&bumpE;", "\u0107": "&cacute;", "\u2229": "&cap;", "\u2A44": "&capand;", "\u2A49": "&capbrcup;", "\u2A4B": "&capcap;", "\u2A47": "&capcup;", "\u2A40": "&capdot;", "\u2229\uFE00": "&caps;", "\u2041": "&caret;", "\u2A4D": "&ccaps;", "\u010D": "&ccaron;", "\xE7": "&ccedil;", "\u0109": "&ccirc;", "\u2A4C": "&ccups;", "\u2A50": "&ccupssm;", "\u010B": "&cdot;", "\u29B2": "&cemptyv;", "\xA2": "&cent;", "\u{1D520}": "&cfr;", "\u0447": "&chcy;", "\u2713": "&checkmark;", "\u03C7": "&chi;", "\u25CB": "&cir;", "\u29C3": "&cirE;", "\u02C6": "&circ;", "\u2257": "&cire;", "\u21BA": "&olarr;", "\u21BB": "&orarr;", "\u24C8": "&oS;", "\u229B": "&oast;", "\u229A": "&ocir;", "\u229D": "&odash;", "\u2A10": "&cirfnint;", "\u2AEF": "&cirmid;", "\u29C2": "&cirscir;", "\u2663": "&clubsuit;", ":": "&colon;", ",": "&comma;", "@": "&commat;", "\u2201": "&complement;", "\u2A6D": "&congdot;", "\u{1D554}": "&copf;", "\u2117": "&copysr;", "\u21B5": "&crarr;", "\u2717": "&cross;", "\u{1D4B8}": "&cscr;", "\u2ACF": "&csub;", "\u2AD1": "&csube;", "\u2AD0": "&csup;", "\u2AD2": "&csupe;", "\u22EF": "&ctdot;", "\u2938": "&cudarrl;", "\u2935": "&cudarrr;", "\u22DE": "&curlyeqprec;", "\u22DF": "&curlyeqsucc;", "\u21B6": "&curvearrowleft;", "\u293D": "&cularrp;", "\u222A": "&cup;", "\u2A48": "&cupbrcap;", "\u2A46": "&cupcap;", "\u2A4A": "&cupcup;", "\u228D": "&cupdot;", "\u2A45": "&cupor;", "\u222A\uFE00": "&cups;", "\u21B7": "&curvearrowright;", "\u293C": "&curarrm;", "\u22CE": "&cuvee;", "\u22CF": "&cuwed;", "\xA4": "&curren;", "\u2231": "&cwint;", "\u232D": "&cylcty;", "\u2965": "&dHar;", "\u2020": "&dagger;", "\u2138": "&daleth;", "\u2010": "&hyphen;", "\u290F": "&rBarr;", "\u010F": "&dcaron;", "\u0434": "&dcy;", "\u21CA": "&downdownarrows;", "\u2A77": "&eDDot;", "\xB0": "&deg;", "\u03B4": "&delta;", "\u29B1": "&demptyv;", "\u297F": "&dfisht;", "\u{1D521}": "&dfr;", "\u2666": "&diams;", "\u03DD": "&gammad;", "\u22F2": "&disin;", "\xF7": "&divide;", "\u22C7": "&divonx;", "\u0452": "&djcy;", "\u231E": "&llcorner;", "\u230D": "&dlcrop;", $: "&dollar;", "\u{1D555}": "&dopf;", "\u2251": "&eDot;", "\u2238": "&minusd;", "\u2214": "&plusdo;", "\u22A1": "&sdotb;", "\u231F": "&lrcorner;", "\u230C": "&drcrop;", "\u{1D4B9}": "&dscr;", "\u0455": "&dscy;", "\u29F6": "&dsol;", "\u0111": "&dstrok;", "\u22F1": "&dtdot;", "\u25BF": "&triangledown;", "\u29A6": "&dwangle;", "\u045F": "&dzcy;", "\u27FF": "&dzigrarr;", "\xE9": "&eacute;", "\u2A6E": "&easter;", "\u011B": "&ecaron;", "\u2256": "&eqcirc;", "\xEA": "&ecirc;", "\u2255": "&eqcolon;", "\u044D": "&ecy;", "\u0117": "&edot;", "\u2252": "&fallingdotseq;", "\u{1D522}": "&efr;", "\u2A9A": "&eg;", "\xE8": "&egrave;", "\u2A96": "&eqslantgtr;", "\u2A98": "&egsdot;", "\u2A99": "&el;", "\u23E7": "&elinters;", "\u2113": "&ell;", "\u2A95": "&eqslantless;", "\u2A97": "&elsdot;", "\u0113": "&emacr;", "\u2205": "&varnothing;", "\u2004": "&emsp13;", "\u2005": "&emsp14;", "\u2003": "&emsp;", "\u014B": "&eng;", "\u2002": "&ensp;", "\u0119": "&eogon;", "\u{1D556}": "&eopf;", "\u22D5": "&epar;", "\u29E3": "&eparsl;", "\u2A71": "&eplus;", "\u03B5": "&epsilon;", "\u03F5": "&varepsilon;", "=": "&equals;", "\u225F": "&questeq;", "\u2A78": "&equivDD;", "\u29E5": "&eqvparsl;", "\u2253": "&risingdotseq;", "\u2971": "&erarr;", "\u212F": "&escr;", "\u03B7": "&eta;", "\xF0": "&eth;", "\xEB": "&euml;", "\u20AC": "&euro;", "!": "&excl;", "\u0444": "&fcy;", "\u2640": "&female;", "\uFB03": "&ffilig;", "\uFB00": "&fflig;", "\uFB04": "&ffllig;", "\u{1D523}": "&ffr;", "\uFB01": "&filig;", fj: "&fjlig;", "\u266D": "&flat;", "\uFB02": "&fllig;", "\u25B1": "&fltns;", "\u0192": "&fnof;", "\u{1D557}": "&fopf;", "\u22D4": "&pitchfork;", "\u2AD9": "&forkv;", "\u2A0D": "&fpartint;", "\xBD": "&half;", "\u2153": "&frac13;", "\xBC": "&frac14;", "\u2155": "&frac15;", "\u2159": "&frac16;", "\u215B": "&frac18;", "\u2154": "&frac23;", "\u2156": "&frac25;", "\xBE": "&frac34;", "\u2157": "&frac35;", "\u215C": "&frac38;", "\u2158": "&frac45;", "\u215A": "&frac56;", "\u215D": "&frac58;", "\u215E": "&frac78;", "\u2044": "&frasl;", "\u2322": "&sfrown;", "\u{1D4BB}": "&fscr;", "\u2A8C": "&gtreqqless;", "\u01F5": "&gacute;", "\u03B3": "&gamma;", "\u2A86": "&gtrapprox;", "\u011F": "&gbreve;", "\u011D": "&gcirc;", "\u0433": "&gcy;", "\u0121": "&gdot;", "\u2AA9": "&gescc;", "\u2A80": "&gesdot;", "\u2A82": "&gesdoto;", "\u2A84": "&gesdotol;", "\u22DB\uFE00": "&gesl;", "\u2A94": "&gesles;", "\u{1D524}": "&gfr;", "\u2137": "&gimel;", "\u0453": "&gjcy;", "\u2A92": "&glE;", "\u2AA5": "&gla;", "\u2AA4": "&glj;", "\u2269": "&gneqq;", "\u2A8A": "&gnapprox;", "\u2A88": "&gneq;", "\u22E7": "&gnsim;", "\u{1D558}": "&gopf;", "\u210A": "&gscr;", "\u2A8E": "&gsime;", "\u2A90": "&gsiml;", "\u2AA7": "&gtcc;", "\u2A7A": "&gtcir;", "\u22D7": "&gtrdot;", "\u2995": "&gtlPar;", "\u2A7C": "&gtquest;", "\u2978": "&gtrarr;", "\u2269\uFE00": "&gvnE;", "\u044A": "&hardcy;", "\u2948": "&harrcir;", "\u21AD": "&leftrightsquigarrow;", "\u210F": "&plankv;", "\u0125": "&hcirc;", "\u2665": "&heartsuit;", "\u2026": "&mldr;", "\u22B9": "&hercon;", "\u{1D525}": "&hfr;", "\u2925": "&searhk;", "\u2926": "&swarhk;", "\u21FF": "&hoarr;", "\u223B": "&homtht;", "\u21A9": "&larrhk;", "\u21AA": "&rarrhk;", "\u{1D559}": "&hopf;", "\u2015": "&horbar;", "\u{1D4BD}": "&hscr;", "\u0127": "&hstrok;", "\u2043": "&hybull;", "\xED": "&iacute;", "\xEE": "&icirc;", "\u0438": "&icy;", "\u0435": "&iecy;", "\xA1": "&iexcl;", "\u{1D526}": "&ifr;", "\xEC": "&igrave;", "\u2A0C": "&qint;", "\u222D": "&tint;", "\u29DC": "&iinfin;", "\u2129": "&iiota;", "\u0133": "&ijlig;", "\u012B": "&imacr;", "\u0131": "&inodot;", "\u22B7": "&imof;", "\u01B5": "&imped;", "\u2105": "&incare;", "\u221E": "&infin;", "\u29DD": "&infintie;", "\u22BA": "&intercal;", "\u2A17": "&intlarhk;", "\u2A3C": "&iprod;", "\u0451": "&iocy;", "\u012F": "&iogon;", "\u{1D55A}": "&iopf;", "\u03B9": "&iota;", "\xBF": "&iquest;", "\u{1D4BE}": "&iscr;", "\u22F9": "&isinE;", "\u22F5": "&isindot;", "\u22F4": "&isins;", "\u22F3": "&isinsv;", "\u0129": "&itilde;", "\u0456": "&iukcy;", "\xEF": "&iuml;", "\u0135": "&jcirc;", "\u0439": "&jcy;", "\u{1D527}": "&jfr;", "\u0237": "&jmath;", "\u{1D55B}": "&jopf;", "\u{1D4BF}": "&jscr;", "\u0458": "&jsercy;", "\u0454": "&jukcy;", "\u03BA": "&kappa;", "\u03F0": "&varkappa;", "\u0137": "&kcedil;", "\u043A": "&kcy;", "\u{1D528}": "&kfr;", "\u0138": "&kgreen;", "\u0445": "&khcy;", "\u045C": "&kjcy;", "\u{1D55C}": "&kopf;", "\u{1D4C0}": "&kscr;", "\u291B": "&lAtail;", "\u290E": "&lBarr;", "\u2A8B": "&lesseqqgtr;", "\u2962": "&lHar;", "\u013A": "&lacute;", "\u29B4": "&laemptyv;", "\u03BB": "&lambda;", "\u2991": "&langd;", "\u2A85": "&lessapprox;", "\xAB": "&laquo;", "\u291F": "&larrbfs;", "\u291D": "&larrfs;", "\u21AB": "&looparrowleft;", "\u2939": "&larrpl;", "\u2973": "&larrsim;", "\u21A2": "&leftarrowtail;", "\u2AAB": "&lat;", "\u2919": "&latail;", "\u2AAD": "&late;", "\u2AAD\uFE00": "&lates;", "\u290C": "&lbarr;", "\u2772": "&lbbrk;", "{": "&lcub;", "[": "&lsqb;", "\u298B": "&lbrke;", "\u298F": "&lbrksld;", "\u298D": "&lbrkslu;", "\u013E": "&lcaron;", "\u013C": "&lcedil;", "\u043B": "&lcy;", "\u2936": "&ldca;", "\u2967": "&ldrdhar;", "\u294B": "&ldrushar;", "\u21B2": "&ldsh;", "\u2264": "&leq;", "\u21C7": "&llarr;", "\u22CB": "&lthree;", "\u2AA8": "&lescc;", "\u2A7F": "&lesdot;", "\u2A81": "&lesdoto;", "\u2A83": "&lesdotor;", "\u22DA\uFE00": "&lesg;", "\u2A93": "&lesges;", "\u22D6": "&ltdot;", "\u297C": "&lfisht;", "\u{1D529}": "&lfr;", "\u2A91": "&lgE;", "\u296A": "&lharul;", "\u2584": "&lhblk;", "\u0459": "&ljcy;", "\u296B": "&llhard;", "\u25FA": "&lltri;", "\u0140": "&lmidot;", "\u23B0": "&lmoustache;", "\u2268": "&lneqq;", "\u2A89": "&lnapprox;", "\u2A87": "&lneq;", "\u22E6": "&lnsim;", "\u27EC": "&loang;", "\u21FD": "&loarr;", "\u27FC": "&xmap;", "\u21AC": "&rarrlp;", "\u2985": "&lopar;", "\u{1D55D}": "&lopf;", "\u2A2D": "&loplus;", "\u2A34": "&lotimes;", "\u2217": "&lowast;", "\u25CA": "&lozenge;", "(": "&lpar;", "\u2993": "&lparlt;", "\u296D": "&lrhard;", "\u200E": "&lrm;", "\u22BF": "&lrtri;", "\u2039": "&lsaquo;", "\u{1D4C1}": "&lscr;", "\u2A8D": "&lsime;", "\u2A8F": "&lsimg;", "\u201A": "&sbquo;", "\u0142": "&lstrok;", "\u2AA6": "&ltcc;", "\u2A79": "&ltcir;", "\u22C9": "&ltimes;", "\u2976": "&ltlarr;", "\u2A7B": "&ltquest;", "\u2996": "&ltrPar;", "\u25C3": "&triangleleft;", "\u294A": "&lurdshar;", "\u2966": "&luruhar;", "\u2268\uFE00": "&lvnE;", "\u223A": "&mDDot;", "\xAF": "&strns;", "\u2642": "&male;", "\u2720": "&maltese;", "\u25AE": "&marker;", "\u2A29": "&mcomma;", "\u043C": "&mcy;", "\u2014": "&mdash;", "\u{1D52A}": "&mfr;", "\u2127": "&mho;", "\xB5": "&micro;", "\u2AF0": "&midcir;", "\u2212": "&minus;", "\u2A2A": "&minusdu;", "\u2ADB": "&mlcp;", "\u22A7": "&models;", "\u{1D55E}": "&mopf;", "\u{1D4C2}": "&mscr;", "\u03BC": "&mu;", "\u22B8": "&mumap;", "\u22D9\u0338": "&nGg;", "\u226B\u20D2": "&nGt;", "\u21CD": "&nlArr;", "\u21CE": "&nhArr;", "\u22D8\u0338": "&nLl;", "\u226A\u20D2": "&nLt;", "\u21CF": "&nrArr;", "\u22AF": "&nVDash;", "\u22AE": "&nVdash;", "\u0144": "&nacute;", "\u2220\u20D2": "&nang;", "\u2A70\u0338": "&napE;", "\u224B\u0338": "&napid;", "\u0149": "&napos;", "\u266E": "&natural;", "\u2A43": "&ncap;", "\u0148": "&ncaron;", "\u0146": "&ncedil;", "\u2A6D\u0338": "&ncongdot;", "\u2A42": "&ncup;", "\u043D": "&ncy;", "\u2013": "&ndash;", "\u21D7": "&neArr;", "\u2924": "&nearhk;", "\u2250\u0338": "&nedot;", "\u2928": "&toea;", "\u{1D52B}": "&nfr;", "\u21AE": "&nleftrightarrow;", "\u2AF2": "&nhpar;", "\u22FC": "&nis;", "\u22FA": "&nisd;", "\u045A": "&njcy;", "\u2266\u0338": "&nleqq;", "\u219A": "&nleftarrow;", "\u2025": "&nldr;", "\u{1D55F}": "&nopf;", "\xAC": "&not;", "\u22F9\u0338": "&notinE;", "\u22F5\u0338": "&notindot;", "\u22F7": "&notinvb;", "\u22F6": "&notinvc;", "\u22FE": "&notnivb;", "\u22FD": "&notnivc;", "\u2AFD\u20E5": "&nparsl;", "\u2202\u0338": "&npart;", "\u2A14": "&npolint;", "\u219B": "&nrightarrow;", "\u2933\u0338": "&nrarrc;", "\u219D\u0338": "&nrarrw;", "\u{1D4C3}": "&nscr;", "\u2284": "&nsub;", "\u2AC5\u0338": "&nsubseteqq;", "\u2285": "&nsup;", "\u2AC6\u0338": "&nsupseteqq;", "\xF1": "&ntilde;", "\u03BD": "&nu;", "#": "&num;", "\u2116": "&numero;", "\u2007": "&numsp;", "\u22AD": "&nvDash;", "\u2904": "&nvHarr;", "\u224D\u20D2": "&nvap;", "\u22AC": "&nvdash;", "\u2265\u20D2": "&nvge;", ">\u20D2": "&nvgt;", "\u29DE": "&nvinfin;", "\u2902": "&nvlArr;", "\u2264\u20D2": "&nvle;", "<\u20D2": "&nvlt;", "\u22B4\u20D2": "&nvltrie;", "\u2903": "&nvrArr;", "\u22B5\u20D2": "&nvrtrie;", "\u223C\u20D2": "&nvsim;", "\u21D6": "&nwArr;", "\u2923": "&nwarhk;", "\u2927": "&nwnear;", "\xF3": "&oacute;", "\xF4": "&ocirc;", "\u043E": "&ocy;", "\u0151": "&odblac;", "\u2A38": "&odiv;", "\u29BC": "&odsold;", "\u0153": "&oelig;", "\u29BF": "&ofcir;", "\u{1D52C}": "&ofr;", "\u02DB": "&ogon;", "\xF2": "&ograve;", "\u29C1": "&ogt;", "\u29B5": "&ohbar;", "\u29BE": "&olcir;", "\u29BB": "&olcross;", "\u29C0": "&olt;", "\u014D": "&omacr;", "\u03C9": "&omega;", "\u03BF": "&omicron;", "\u29B6": "&omid;", "\u{1D560}": "&oopf;", "\u29B7": "&opar;", "\u29B9": "&operp;", "\u2228": "&vee;", "\u2A5D": "&ord;", "\u2134": "&oscr;", "\xAA": "&ordf;", "\xBA": "&ordm;", "\u22B6": "&origof;", "\u2A56": "&oror;", "\u2A57": "&orslope;", "\u2A5B": "&orv;", "\xF8": "&oslash;", "\u2298": "&osol;", "\xF5": "&otilde;", "\u2A36": "&otimesas;", "\xF6": "&ouml;", "\u233D": "&ovbar;", "\xB6": "&para;", "\u2AF3": "&parsim;", "\u2AFD": "&parsl;", "\u043F": "&pcy;", "%": "&percnt;", ".": "&period;", "\u2030": "&permil;", "\u2031": "&pertenk;", "\u{1D52D}": "&pfr;", "\u03C6": "&phi;", "\u03D5": "&varphi;", "\u260E": "&phone;", "\u03C0": "&pi;", "\u03D6": "&varpi;", "\u210E": "&planckh;", "+": "&plus;", "\u2A23": "&plusacir;", "\u2A22": "&pluscir;", "\u2A25": "&plusdu;", "\u2A72": "&pluse;", "\u2A26": "&plussim;", "\u2A27": "&plustwo;", "\u2A15": "&pointint;", "\u{1D561}": "&popf;", "\xA3": "&pound;", "\u2AB3": "&prE;", "\u2AB7": "&precapprox;", "\u2AB9": "&prnap;", "\u2AB5": "&prnE;", "\u22E8": "&prnsim;", "\u2032": "&prime;", "\u232E": "&profalar;", "\u2312": "&profline;", "\u2313": "&profsurf;", "\u22B0": "&prurel;", "\u{1D4C5}": "&pscr;", "\u03C8": "&psi;", "\u2008": "&puncsp;", "\u{1D52E}": "&qfr;", "\u{1D562}": "&qopf;", "\u2057": "&qprime;", "\u{1D4C6}": "&qscr;", "\u2A16": "&quatint;", "?": "&quest;", "\u291C": "&rAtail;", "\u2964": "&rHar;", "\u223D\u0331": "&race;", "\u0155": "&racute;", "\u29B3": "&raemptyv;", "\u2992": "&rangd;", "\u29A5": "&range;", "\xBB": "&raquo;", "\u2975": "&rarrap;", "\u2920": "&rarrbfs;", "\u2933": "&rarrc;", "\u291E": "&rarrfs;", "\u2945": "&rarrpl;", "\u2974": "&rarrsim;", "\u21A3": "&rightarrowtail;", "\u219D": "&rightsquigarrow;", "\u291A": "&ratail;", "\u2236": "&ratio;", "\u2773": "&rbbrk;", "}": "&rcub;", "]": "&rsqb;", "\u298C": "&rbrke;", "\u298E": "&rbrksld;", "\u2990": "&rbrkslu;", "\u0159": "&rcaron;", "\u0157": "&rcedil;", "\u0440": "&rcy;", "\u2937": "&rdca;", "\u2969": "&rdldhar;", "\u21B3": "&rdsh;", "\u25AD": "&rect;", "\u297D": "&rfisht;", "\u{1D52F}": "&rfr;", "\u296C": "&rharul;", "\u03C1": "&rho;", "\u03F1": "&varrho;", "\u21C9": "&rrarr;", "\u22CC": "&rthree;", "\u02DA": "&ring;", "\u200F": "&rlm;", "\u23B1": "&rmoustache;", "\u2AEE": "&rnmid;", "\u27ED": "&roang;", "\u21FE": "&roarr;", "\u2986": "&ropar;", "\u{1D563}": "&ropf;", "\u2A2E": "&roplus;", "\u2A35": "&rotimes;", ")": "&rpar;", "\u2994": "&rpargt;", "\u2A12": "&rppolint;", "\u203A": "&rsaquo;", "\u{1D4C7}": "&rscr;", "\u22CA": "&rtimes;", "\u25B9": "&triangleright;", "\u29CE": "&rtriltri;", "\u2968": "&ruluhar;", "\u211E": "&rx;", "\u015B": "&sacute;", "\u2AB4": "&scE;", "\u2AB8": "&succapprox;", "\u0161": "&scaron;", "\u015F": "&scedil;", "\u015D": "&scirc;", "\u2AB6": "&succneqq;", "\u2ABA": "&succnapprox;", "\u22E9": "&succnsim;", "\u2A13": "&scpolint;", "\u0441": "&scy;", "\u22C5": "&sdot;", "\u2A66": "&sdote;", "\u21D8": "&seArr;", "\xA7": "&sect;", ";": "&semi;", "\u2929": "&tosa;", "\u2736": "&sext;", "\u{1D530}": "&sfr;", "\u266F": "&sharp;", "\u0449": "&shchcy;", "\u0448": "&shcy;", "\xAD": "&shy;", "\u03C3": "&sigma;", "\u03C2": "&varsigma;", "\u2A6A": "&simdot;", "\u2A9E": "&simg;", "\u2AA0": "&simgE;", "\u2A9D": "&siml;", "\u2A9F": "&simlE;", "\u2246": "&simne;", "\u2A24": "&simplus;", "\u2972": "&simrarr;", "\u2A33": "&smashp;", "\u29E4": "&smeparsl;", "\u2323": "&ssmile;", "\u2AAA": "&smt;", "\u2AAC": "&smte;", "\u2AAC\uFE00": "&smtes;", "\u044C": "&softcy;", "/": "&sol;", "\u29C4": "&solb;", "\u233F": "&solbar;", "\u{1D564}": "&sopf;", "\u2660": "&spadesuit;", "\u2293\uFE00": "&sqcaps;", "\u2294\uFE00": "&sqcups;", "\u{1D4C8}": "&sscr;", "\u2606": "&star;", "\u2282": "&subset;", "\u2AC5": "&subseteqq;", "\u2ABD": "&subdot;", "\u2AC3": "&subedot;", "\u2AC1": "&submult;", "\u2ACB": "&subsetneqq;", "\u228A": "&subsetneq;", "\u2ABF": "&subplus;", "\u2979": "&subrarr;", "\u2AC7": "&subsim;", "\u2AD5": "&subsub;", "\u2AD3": "&subsup;", "\u266A": "&sung;", "\xB9": "&sup1;", "\xB2": "&sup2;", "\xB3": "&sup3;", "\u2AC6": "&supseteqq;", "\u2ABE": "&supdot;", "\u2AD8": "&supdsub;", "\u2AC4": "&supedot;", "\u27C9": "&suphsol;", "\u2AD7": "&suphsub;", "\u297B": "&suplarr;", "\u2AC2": "&supmult;", "\u2ACC": "&supsetneqq;", "\u228B": "&supsetneq;", "\u2AC0": "&supplus;", "\u2AC8": "&supsim;", "\u2AD4": "&supsub;", "\u2AD6": "&supsup;", "\u21D9": "&swArr;", "\u292A": "&swnwar;", "\xDF": "&szlig;", "\u2316": "&target;", "\u03C4": "&tau;", "\u0165": "&tcaron;", "\u0163": "&tcedil;", "\u0442": "&tcy;", "\u2315": "&telrec;", "\u{1D531}": "&tfr;", "\u03B8": "&theta;", "\u03D1": "&vartheta;", "\xFE": "&thorn;", "\xD7": "&times;", "\u2A31": "&timesbar;", "\u2A30": "&timesd;", "\u2336": "&topbot;", "\u2AF1": "&topcir;", "\u{1D565}": "&topf;", "\u2ADA": "&topfork;", "\u2034": "&tprime;", "\u25B5": "&utri;", "\u225C": "&trie;", "\u25EC": "&tridot;", "\u2A3A": "&triminus;", "\u2A39": "&triplus;", "\u29CD": "&trisb;", "\u2A3B": "&tritime;", "\u23E2": "&trpezium;", "\u{1D4C9}": "&tscr;", "\u0446": "&tscy;", "\u045B": "&tshcy;", "\u0167": "&tstrok;", "\u2963": "&uHar;", "\xFA": "&uacute;", "\u045E": "&ubrcy;", "\u016D": "&ubreve;", "\xFB": "&ucirc;", "\u0443": "&ucy;", "\u0171": "&udblac;", "\u297E": "&ufisht;", "\u{1D532}": "&ufr;", "\xF9": "&ugrave;", "\u2580": "&uhblk;", "\u231C": "&ulcorner;", "\u230F": "&ulcrop;", "\u25F8": "&ultri;", "\u016B": "&umacr;", "\u0173": "&uogon;", "\u{1D566}": "&uopf;", "\u03C5": "&upsilon;", "\u21C8": "&uuarr;", "\u231D": "&urcorner;", "\u230E": "&urcrop;", "\u016F": "&uring;", "\u25F9": "&urtri;", "\u{1D4CA}": "&uscr;", "\u22F0": "&utdot;", "\u0169": "&utilde;", "\xFC": "&uuml;", "\u29A7": "&uwangle;", "\u2AE8": "&vBar;", "\u2AE9": "&vBarv;", "\u299C": "&vangrt;", "\u228A\uFE00": "&vsubne;", "\u2ACB\uFE00": "&vsubnE;", "\u228B\uFE00": "&vsupne;", "\u2ACC\uFE00": "&vsupnE;", "\u0432": "&vcy;", "\u22BB": "&veebar;", "\u225A": "&veeeq;", "\u22EE": "&vellip;", "\u{1D533}": "&vfr;", "\u{1D567}": "&vopf;", "\u{1D4CB}": "&vscr;", "\u299A": "&vzigzag;", "\u0175": "&wcirc;", "\u2A5F": "&wedbar;", "\u2259": "&wedgeq;", "\u2118": "&wp;", "\u{1D534}": "&wfr;", "\u{1D568}": "&wopf;", "\u{1D4CC}": "&wscr;", "\u{1D535}": "&xfr;", "\u03BE": "&xi;", "\u22FB": "&xnis;", "\u{1D569}": "&xopf;", "\u{1D4CD}": "&xscr;", "\xFD": "&yacute;", "\u044F": "&yacy;", "\u0177": "&ycirc;", "\u044B": "&ycy;", "\xA5": "&yen;", "\u{1D536}": "&yfr;", "\u0457": "&yicy;", "\u{1D56A}": "&yopf;", "\u{1D4CE}": "&yscr;", "\u044E": "&yucy;", "\xFF": "&yuml;", "\u017A": "&zacute;", "\u017E": "&zcaron;", "\u0437": "&zcy;", "\u017C": "&zdot;", "\u03B6": "&zeta;", "\u{1D537}": "&zfr;", "\u0436": "&zhcy;", "\u21DD": "&zigrarr;", "\u{1D56B}": "&zopf;", "\u{1D4CF}": "&zscr;", "\u200D": "&zwj;", "\u200C": "&zwnj;" } } };
    }
  });

  // node_modules/html-entities/lib/numeric-unicode-map.js
  var require_numeric_unicode_map = __commonJS({
    "node_modules/html-entities/lib/numeric-unicode-map.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.numericUnicodeMap = { 0: 65533, 128: 8364, 130: 8218, 131: 402, 132: 8222, 133: 8230, 134: 8224, 135: 8225, 136: 710, 137: 8240, 138: 352, 139: 8249, 140: 338, 142: 381, 145: 8216, 146: 8217, 147: 8220, 148: 8221, 149: 8226, 150: 8211, 151: 8212, 152: 732, 153: 8482, 154: 353, 155: 8250, 156: 339, 158: 382, 159: 376 };
    }
  });

  // node_modules/html-entities/lib/surrogate-pairs.js
  var require_surrogate_pairs = __commonJS({
    "node_modules/html-entities/lib/surrogate-pairs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.fromCodePoint = String.fromCodePoint || function(astralCodePoint) {
        return String.fromCharCode(Math.floor((astralCodePoint - 65536) / 1024) + 55296, (astralCodePoint - 65536) % 1024 + 56320);
      };
      exports.getCodePoint = String.prototype.codePointAt ? function(input, position) {
        return input.codePointAt(position);
      } : function(input, position) {
        return (input.charCodeAt(position) - 55296) * 1024 + input.charCodeAt(position + 1) - 56320 + 65536;
      };
      exports.highSurrogateFrom = 55296;
      exports.highSurrogateTo = 56319;
    }
  });

  // node_modules/html-entities/lib/index.js
  var require_lib = __commonJS({
    "node_modules/html-entities/lib/index.js"(exports) {
      "use strict";
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t4) {
          for (var s2, i4 = 1, n5 = arguments.length; i4 < n5; i4++) {
            s2 = arguments[i4];
            for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2)) t4[p2] = s2[p2];
          }
          return t4;
        };
        return __assign.apply(this, arguments);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var named_references_1 = require_named_references();
      var numeric_unicode_map_1 = require_numeric_unicode_map();
      var surrogate_pairs_1 = require_surrogate_pairs();
      var allNamedReferences = __assign(__assign({}, named_references_1.namedReferences), { all: named_references_1.namedReferences.html5 });
      function replaceUsingRegExp(macroText, macroRegExp, macroReplacer) {
        macroRegExp.lastIndex = 0;
        var replaceMatch = macroRegExp.exec(macroText);
        var replaceResult;
        if (replaceMatch) {
          replaceResult = "";
          var replaceLastIndex = 0;
          do {
            if (replaceLastIndex !== replaceMatch.index) {
              replaceResult += macroText.substring(replaceLastIndex, replaceMatch.index);
            }
            var replaceInput = replaceMatch[0];
            replaceResult += macroReplacer(replaceInput);
            replaceLastIndex = replaceMatch.index + replaceInput.length;
          } while (replaceMatch = macroRegExp.exec(macroText));
          if (replaceLastIndex !== macroText.length) {
            replaceResult += macroText.substring(replaceLastIndex);
          }
        } else {
          replaceResult = macroText;
        }
        return replaceResult;
      }
      var encodeRegExps = { specialChars: /[<>'"&]/g, nonAscii: /[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g, nonAsciiPrintable: /[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g, nonAsciiPrintableOnly: /[\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g, extensive: /[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g };
      var defaultEncodeOptions = { mode: "specialChars", level: "all", numeric: "decimal" };
      function encode(text, _a) {
        var _b = _a === void 0 ? defaultEncodeOptions : _a, _c = _b.mode, mode = _c === void 0 ? "specialChars" : _c, _d = _b.numeric, numeric = _d === void 0 ? "decimal" : _d, _e = _b.level, level = _e === void 0 ? "all" : _e;
        if (!text) {
          return "";
        }
        var encodeRegExp = encodeRegExps[mode];
        var references = allNamedReferences[level].characters;
        var isHex = numeric === "hexadecimal";
        return replaceUsingRegExp(text, encodeRegExp, function(input) {
          var result = references[input];
          if (!result) {
            var code = input.length > 1 ? surrogate_pairs_1.getCodePoint(input, 0) : input.charCodeAt(0);
            result = (isHex ? "&#x" + code.toString(16) : "&#" + code) + ";";
          }
          return result;
        });
      }
      exports.encode = encode;
      var defaultDecodeOptions = { scope: "body", level: "all" };
      var strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
      var attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
      var baseDecodeRegExps = { xml: { strict, attribute, body: named_references_1.bodyRegExps.xml }, html4: { strict, attribute, body: named_references_1.bodyRegExps.html4 }, html5: { strict, attribute, body: named_references_1.bodyRegExps.html5 } };
      var decodeRegExps = __assign(__assign({}, baseDecodeRegExps), { all: baseDecodeRegExps.html5 });
      var fromCharCode = String.fromCharCode;
      var outOfBoundsChar = fromCharCode(65533);
      var defaultDecodeEntityOptions = { level: "all" };
      function getDecodedEntity(entity, references, isAttribute, isStrict) {
        var decodeResult = entity;
        var decodeEntityLastChar = entity[entity.length - 1];
        if (isAttribute && decodeEntityLastChar === "=") {
          decodeResult = entity;
        } else if (isStrict && decodeEntityLastChar !== ";") {
          decodeResult = entity;
        } else {
          var decodeResultByReference = references[entity];
          if (decodeResultByReference) {
            decodeResult = decodeResultByReference;
          } else if (entity[0] === "&" && entity[1] === "#") {
            var decodeSecondChar = entity[2];
            var decodeCode = decodeSecondChar == "x" || decodeSecondChar == "X" ? parseInt(entity.substr(3), 16) : parseInt(entity.substr(2));
            decodeResult = decodeCode >= 1114111 ? outOfBoundsChar : decodeCode > 65535 ? surrogate_pairs_1.fromCodePoint(decodeCode) : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode] || decodeCode);
          }
        }
        return decodeResult;
      }
      function decodeEntity(entity, _a) {
        var _b = (_a === void 0 ? defaultDecodeEntityOptions : _a).level, level = _b === void 0 ? "all" : _b;
        if (!entity) {
          return "";
        }
        return getDecodedEntity(entity, allNamedReferences[level].entities, false, false);
      }
      exports.decodeEntity = decodeEntity;
      function decode2(text, _a) {
        var _b = _a === void 0 ? defaultDecodeOptions : _a, _c = _b.level, level = _c === void 0 ? "all" : _c, _d = _b.scope, scope = _d === void 0 ? level === "xml" ? "strict" : "body" : _d;
        if (!text) {
          return "";
        }
        var decodeRegExp = decodeRegExps[level][scope];
        var references = allNamedReferences[level].entities;
        var isAttribute = scope === "attribute";
        var isStrict = scope === "strict";
        return replaceUsingRegExp(text, decodeRegExp, function(entity) {
          return getDecodedEntity(entity, references, isAttribute, isStrict);
        });
      }
      exports.decode = decode2;
    }
  });

  // node_modules/highlight.js/lib/core.js
  var require_core = __commonJS({
    "node_modules/highlight.js/lib/core.js"(exports, module) {
      function deepFreeze(obj) {
        if (obj instanceof Map) {
          obj.clear = obj.delete = obj.set = function() {
            throw new Error("map is read-only");
          };
        } else if (obj instanceof Set) {
          obj.add = obj.clear = obj.delete = function() {
            throw new Error("set is read-only");
          };
        }
        Object.freeze(obj);
        Object.getOwnPropertyNames(obj).forEach((name) => {
          const prop = obj[name];
          const type = typeof prop;
          if ((type === "object" || type === "function") && !Object.isFrozen(prop)) {
            deepFreeze(prop);
          }
        });
        return obj;
      }
      var Response = class {
        /**
         * @param {CompiledMode} mode
         */
        constructor(mode) {
          if (mode.data === void 0) mode.data = {};
          this.data = mode.data;
          this.isMatchIgnored = false;
        }
        ignoreMatch() {
          this.isMatchIgnored = true;
        }
      };
      function escapeHTML(value) {
        return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
      }
      function inherit$1(original, ...objects) {
        const result = /* @__PURE__ */ Object.create(null);
        for (const key in original) {
          result[key] = original[key];
        }
        objects.forEach(function(obj) {
          for (const key in obj) {
            result[key] = obj[key];
          }
        });
        return (
          /** @type {T} */
          result
        );
      }
      var SPAN_CLOSE = "</span>";
      var emitsWrappingTags = (node) => {
        return !!node.scope;
      };
      var scopeToCSSClass = (name, { prefix }) => {
        if (name.startsWith("language:")) {
          return name.replace("language:", "language-");
        }
        if (name.includes(".")) {
          const pieces = name.split(".");
          return [
            `${prefix}${pieces.shift()}`,
            ...pieces.map((x2, i4) => `${x2}${"_".repeat(i4 + 1)}`)
          ].join(" ");
        }
        return `${prefix}${name}`;
      };
      var HTMLRenderer = class {
        /**
         * Creates a new HTMLRenderer
         *
         * @param {Tree} parseTree - the parse tree (must support `walk` API)
         * @param {{classPrefix: string}} options
         */
        constructor(parseTree, options) {
          this.buffer = "";
          this.classPrefix = options.classPrefix;
          parseTree.walk(this);
        }
        /**
         * Adds texts to the output stream
         *
         * @param {string} text */
        addText(text) {
          this.buffer += escapeHTML(text);
        }
        /**
         * Adds a node open to the output stream (if needed)
         *
         * @param {Node} node */
        openNode(node) {
          if (!emitsWrappingTags(node)) return;
          const className = scopeToCSSClass(
            node.scope,
            { prefix: this.classPrefix }
          );
          this.span(className);
        }
        /**
         * Adds a node close to the output stream (if needed)
         *
         * @param {Node} node */
        closeNode(node) {
          if (!emitsWrappingTags(node)) return;
          this.buffer += SPAN_CLOSE;
        }
        /**
         * returns the accumulated buffer
        */
        value() {
          return this.buffer;
        }
        // helpers
        /**
         * Builds a span element
         *
         * @param {string} className */
        span(className) {
          this.buffer += `<span class="${className}">`;
        }
      };
      var newNode = (opts = {}) => {
        const result = { children: [] };
        Object.assign(result, opts);
        return result;
      };
      var TokenTree = class _TokenTree {
        constructor() {
          this.rootNode = newNode();
          this.stack = [this.rootNode];
        }
        get top() {
          return this.stack[this.stack.length - 1];
        }
        get root() {
          return this.rootNode;
        }
        /** @param {Node} node */
        add(node) {
          this.top.children.push(node);
        }
        /** @param {string} scope */
        openNode(scope) {
          const node = newNode({ scope });
          this.add(node);
          this.stack.push(node);
        }
        closeNode() {
          if (this.stack.length > 1) {
            return this.stack.pop();
          }
          return void 0;
        }
        closeAllNodes() {
          while (this.closeNode()) ;
        }
        toJSON() {
          return JSON.stringify(this.rootNode, null, 4);
        }
        /**
         * @typedef { import("./html_renderer").Renderer } Renderer
         * @param {Renderer} builder
         */
        walk(builder) {
          return this.constructor._walk(builder, this.rootNode);
        }
        /**
         * @param {Renderer} builder
         * @param {Node} node
         */
        static _walk(builder, node) {
          if (typeof node === "string") {
            builder.addText(node);
          } else if (node.children) {
            builder.openNode(node);
            node.children.forEach((child) => this._walk(builder, child));
            builder.closeNode(node);
          }
          return builder;
        }
        /**
         * @param {Node} node
         */
        static _collapse(node) {
          if (typeof node === "string") return;
          if (!node.children) return;
          if (node.children.every((el) => typeof el === "string")) {
            node.children = [node.children.join("")];
          } else {
            node.children.forEach((child) => {
              _TokenTree._collapse(child);
            });
          }
        }
      };
      var TokenTreeEmitter = class extends TokenTree {
        /**
         * @param {*} options
         */
        constructor(options) {
          super();
          this.options = options;
        }
        /**
         * @param {string} text
         */
        addText(text) {
          if (text === "") {
            return;
          }
          this.add(text);
        }
        /** @param {string} scope */
        startScope(scope) {
          this.openNode(scope);
        }
        endScope() {
          this.closeNode();
        }
        /**
         * @param {Emitter & {root: DataNode}} emitter
         * @param {string} name
         */
        __addSublanguage(emitter, name) {
          const node = emitter.root;
          if (name) node.scope = `language:${name}`;
          this.add(node);
        }
        toHTML() {
          const renderer = new HTMLRenderer(this, this.options);
          return renderer.value();
        }
        finalize() {
          this.closeAllNodes();
          return true;
        }
      };
      function source(re) {
        if (!re) return null;
        if (typeof re === "string") return re;
        return re.source;
      }
      function lookahead(re) {
        return concat("(?=", re, ")");
      }
      function anyNumberOfTimes(re) {
        return concat("(?:", re, ")*");
      }
      function optional(re) {
        return concat("(?:", re, ")?");
      }
      function concat(...args) {
        const joined = args.map((x2) => source(x2)).join("");
        return joined;
      }
      function stripOptionsFromArgs(args) {
        const opts = args[args.length - 1];
        if (typeof opts === "object" && opts.constructor === Object) {
          args.splice(args.length - 1, 1);
          return opts;
        } else {
          return {};
        }
      }
      function either(...args) {
        const opts = stripOptionsFromArgs(args);
        const joined = "(" + (opts.capture ? "" : "?:") + args.map((x2) => source(x2)).join("|") + ")";
        return joined;
      }
      function countMatchGroups(re) {
        return new RegExp(re.toString() + "|").exec("").length - 1;
      }
      function startsWith(re, lexeme) {
        const match = re && re.exec(lexeme);
        return match && match.index === 0;
      }
      var BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
      function _rewriteBackreferences(regexps, { joinWith }) {
        let numCaptures = 0;
        return regexps.map((regex) => {
          numCaptures += 1;
          const offset = numCaptures;
          let re = source(regex);
          let out = "";
          while (re.length > 0) {
            const match = BACKREF_RE.exec(re);
            if (!match) {
              out += re;
              break;
            }
            out += re.substring(0, match.index);
            re = re.substring(match.index + match[0].length);
            if (match[0][0] === "\\" && match[1]) {
              out += "\\" + String(Number(match[1]) + offset);
            } else {
              out += match[0];
              if (match[0] === "(") {
                numCaptures++;
              }
            }
          }
          return out;
        }).map((re) => `(${re})`).join(joinWith);
      }
      var MATCH_NOTHING_RE = /\b\B/;
      var IDENT_RE = "[a-zA-Z]\\w*";
      var UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*";
      var NUMBER_RE = "\\b\\d+(\\.\\d+)?";
      var C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
      var BINARY_NUMBER_RE = "\\b(0b[01]+)";
      var RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
      var SHEBANG = (opts = {}) => {
        const beginShebang = /^#![ ]*\//;
        if (opts.binary) {
          opts.begin = concat(
            beginShebang,
            /.*\b/,
            opts.binary,
            /\b.*/
          );
        }
        return inherit$1({
          scope: "meta",
          begin: beginShebang,
          end: /$/,
          relevance: 0,
          /** @type {ModeCallback} */
          "on:begin": (m2, resp) => {
            if (m2.index !== 0) resp.ignoreMatch();
          }
        }, opts);
      };
      var BACKSLASH_ESCAPE = {
        begin: "\\\\[\\s\\S]",
        relevance: 0
      };
      var APOS_STRING_MODE = {
        scope: "string",
        begin: "'",
        end: "'",
        illegal: "\\n",
        contains: [BACKSLASH_ESCAPE]
      };
      var QUOTE_STRING_MODE = {
        scope: "string",
        begin: '"',
        end: '"',
        illegal: "\\n",
        contains: [BACKSLASH_ESCAPE]
      };
      var PHRASAL_WORDS_MODE = {
        begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      };
      var COMMENT = function(begin, end, modeOptions = {}) {
        const mode = inherit$1(
          {
            scope: "comment",
            begin,
            end,
            contains: []
          },
          modeOptions
        );
        mode.contains.push({
          scope: "doctag",
          // hack to avoid the space from being included. the space is necessary to
          // match here to prevent the plain text rule below from gobbling up doctags
          begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: true,
          relevance: 0
        });
        const ENGLISH_WORD = either(
          // list of common 1 and 2 letter words in English
          "I",
          "a",
          "is",
          "so",
          "us",
          "to",
          "at",
          "if",
          "in",
          "it",
          "on",
          // note: this is not an exhaustive list of contractions, just popular ones
          /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
          // contractions - can't we'd they're let's, etc
          /[A-Za-z]+[-][a-z]+/,
          // `no-way`, etc.
          /[A-Za-z][a-z]{2,}/
          // allow capitalized words at beginning of sentences
        );
        mode.contains.push(
          {
            // TODO: how to include ", (, ) without breaking grammars that use these for
            // comment delimiters?
            // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
            // ---
            // this tries to find sequences of 3 english words in a row (without any
            // "programming" type syntax) this gives us a strong signal that we've
            // TRULY found a comment - vs perhaps scanning with the wrong language.
            // It's possible to find something that LOOKS like the start of the
            // comment - but then if there is no readable text - good chance it is a
            // false match and not a comment.
            //
            // for a visual example please see:
            // https://github.com/highlightjs/highlight.js/issues/2827
            begin: concat(
              /[ ]+/,
              // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
              "(",
              ENGLISH_WORD,
              /[.]?[:]?([.][ ]|[ ])/,
              "){3}"
            )
            // look for 3 words in a row
          }
        );
        return mode;
      };
      var C_LINE_COMMENT_MODE = COMMENT("//", "$");
      var C_BLOCK_COMMENT_MODE = COMMENT("/\\*", "\\*/");
      var HASH_COMMENT_MODE = COMMENT("#", "$");
      var NUMBER_MODE = {
        scope: "number",
        begin: NUMBER_RE,
        relevance: 0
      };
      var C_NUMBER_MODE = {
        scope: "number",
        begin: C_NUMBER_RE,
        relevance: 0
      };
      var BINARY_NUMBER_MODE = {
        scope: "number",
        begin: BINARY_NUMBER_RE,
        relevance: 0
      };
      var REGEXP_MODE = {
        scope: "regexp",
        begin: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [
          BACKSLASH_ESCAPE,
          {
            begin: /\[/,
            end: /\]/,
            relevance: 0,
            contains: [BACKSLASH_ESCAPE]
          }
        ]
      };
      var TITLE_MODE = {
        scope: "title",
        begin: IDENT_RE,
        relevance: 0
      };
      var UNDERSCORE_TITLE_MODE = {
        scope: "title",
        begin: UNDERSCORE_IDENT_RE,
        relevance: 0
      };
      var METHOD_GUARD = {
        // excludes method names from keyword processing
        begin: "\\.\\s*" + UNDERSCORE_IDENT_RE,
        relevance: 0
      };
      var END_SAME_AS_BEGIN = function(mode) {
        return Object.assign(
          mode,
          {
            /** @type {ModeCallback} */
            "on:begin": (m2, resp) => {
              resp.data._beginMatch = m2[1];
            },
            /** @type {ModeCallback} */
            "on:end": (m2, resp) => {
              if (resp.data._beginMatch !== m2[1]) resp.ignoreMatch();
            }
          }
        );
      };
      var MODES = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        APOS_STRING_MODE,
        BACKSLASH_ESCAPE,
        BINARY_NUMBER_MODE,
        BINARY_NUMBER_RE,
        COMMENT,
        C_BLOCK_COMMENT_MODE,
        C_LINE_COMMENT_MODE,
        C_NUMBER_MODE,
        C_NUMBER_RE,
        END_SAME_AS_BEGIN,
        HASH_COMMENT_MODE,
        IDENT_RE,
        MATCH_NOTHING_RE,
        METHOD_GUARD,
        NUMBER_MODE,
        NUMBER_RE,
        PHRASAL_WORDS_MODE,
        QUOTE_STRING_MODE,
        REGEXP_MODE,
        RE_STARTERS_RE,
        SHEBANG,
        TITLE_MODE,
        UNDERSCORE_IDENT_RE,
        UNDERSCORE_TITLE_MODE
      });
      function skipIfHasPrecedingDot(match, response) {
        const before = match.input[match.index - 1];
        if (before === ".") {
          response.ignoreMatch();
        }
      }
      function scopeClassName(mode, _parent) {
        if (mode.className !== void 0) {
          mode.scope = mode.className;
          delete mode.className;
        }
      }
      function beginKeywords(mode, parent) {
        if (!parent) return;
        if (!mode.beginKeywords) return;
        mode.begin = "\\b(" + mode.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)";
        mode.__beforeBegin = skipIfHasPrecedingDot;
        mode.keywords = mode.keywords || mode.beginKeywords;
        delete mode.beginKeywords;
        if (mode.relevance === void 0) mode.relevance = 0;
      }
      function compileIllegal(mode, _parent) {
        if (!Array.isArray(mode.illegal)) return;
        mode.illegal = either(...mode.illegal);
      }
      function compileMatch(mode, _parent) {
        if (!mode.match) return;
        if (mode.begin || mode.end) throw new Error("begin & end are not supported with match");
        mode.begin = mode.match;
        delete mode.match;
      }
      function compileRelevance(mode, _parent) {
        if (mode.relevance === void 0) mode.relevance = 1;
      }
      var beforeMatchExt = (mode, parent) => {
        if (!mode.beforeMatch) return;
        if (mode.starts) throw new Error("beforeMatch cannot be used with starts");
        const originalMode = Object.assign({}, mode);
        Object.keys(mode).forEach((key) => {
          delete mode[key];
        });
        mode.keywords = originalMode.keywords;
        mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
        mode.starts = {
          relevance: 0,
          contains: [
            Object.assign(originalMode, { endsParent: true })
          ]
        };
        mode.relevance = 0;
        delete originalMode.beforeMatch;
      };
      var COMMON_KEYWORDS = [
        "of",
        "and",
        "for",
        "in",
        "not",
        "or",
        "if",
        "then",
        "parent",
        // common variable name
        "list",
        // common variable name
        "value"
        // common variable name
      ];
      var DEFAULT_KEYWORD_SCOPE = "keyword";
      function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
        const compiledKeywords = /* @__PURE__ */ Object.create(null);
        if (typeof rawKeywords === "string") {
          compileList(scopeName, rawKeywords.split(" "));
        } else if (Array.isArray(rawKeywords)) {
          compileList(scopeName, rawKeywords);
        } else {
          Object.keys(rawKeywords).forEach(function(scopeName2) {
            Object.assign(
              compiledKeywords,
              compileKeywords(rawKeywords[scopeName2], caseInsensitive, scopeName2)
            );
          });
        }
        return compiledKeywords;
        function compileList(scopeName2, keywordList) {
          if (caseInsensitive) {
            keywordList = keywordList.map((x2) => x2.toLowerCase());
          }
          keywordList.forEach(function(keyword) {
            const pair = keyword.split("|");
            compiledKeywords[pair[0]] = [scopeName2, scoreForKeyword(pair[0], pair[1])];
          });
        }
      }
      function scoreForKeyword(keyword, providedScore) {
        if (providedScore) {
          return Number(providedScore);
        }
        return commonKeyword(keyword) ? 0 : 1;
      }
      function commonKeyword(keyword) {
        return COMMON_KEYWORDS.includes(keyword.toLowerCase());
      }
      var seenDeprecations = {};
      var error = (message) => {
        console.error(message);
      };
      var warn = (message, ...args) => {
        console.log(`WARN: ${message}`, ...args);
      };
      var deprecated = (version2, message) => {
        if (seenDeprecations[`${version2}/${message}`]) return;
        console.log(`Deprecated as of ${version2}. ${message}`);
        seenDeprecations[`${version2}/${message}`] = true;
      };
      var MultiClassError = new Error();
      function remapScopeNames(mode, regexes, { key }) {
        let offset = 0;
        const scopeNames = mode[key];
        const emit = {};
        const positions = {};
        for (let i4 = 1; i4 <= regexes.length; i4++) {
          positions[i4 + offset] = scopeNames[i4];
          emit[i4 + offset] = true;
          offset += countMatchGroups(regexes[i4 - 1]);
        }
        mode[key] = positions;
        mode[key]._emit = emit;
        mode[key]._multi = true;
      }
      function beginMultiClass(mode) {
        if (!Array.isArray(mode.begin)) return;
        if (mode.skip || mode.excludeBegin || mode.returnBegin) {
          error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
          throw MultiClassError;
        }
        if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
          error("beginScope must be object");
          throw MultiClassError;
        }
        remapScopeNames(mode, mode.begin, { key: "beginScope" });
        mode.begin = _rewriteBackreferences(mode.begin, { joinWith: "" });
      }
      function endMultiClass(mode) {
        if (!Array.isArray(mode.end)) return;
        if (mode.skip || mode.excludeEnd || mode.returnEnd) {
          error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
          throw MultiClassError;
        }
        if (typeof mode.endScope !== "object" || mode.endScope === null) {
          error("endScope must be object");
          throw MultiClassError;
        }
        remapScopeNames(mode, mode.end, { key: "endScope" });
        mode.end = _rewriteBackreferences(mode.end, { joinWith: "" });
      }
      function scopeSugar(mode) {
        if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
          mode.beginScope = mode.scope;
          delete mode.scope;
        }
      }
      function MultiClass(mode) {
        scopeSugar(mode);
        if (typeof mode.beginScope === "string") {
          mode.beginScope = { _wrap: mode.beginScope };
        }
        if (typeof mode.endScope === "string") {
          mode.endScope = { _wrap: mode.endScope };
        }
        beginMultiClass(mode);
        endMultiClass(mode);
      }
      function compileLanguage(language) {
        function langRe(value, global) {
          return new RegExp(
            source(value),
            "m" + (language.case_insensitive ? "i" : "") + (language.unicodeRegex ? "u" : "") + (global ? "g" : "")
          );
        }
        class MultiRegex {
          constructor() {
            this.matchIndexes = {};
            this.regexes = [];
            this.matchAt = 1;
            this.position = 0;
          }
          // @ts-ignore
          addRule(re, opts) {
            opts.position = this.position++;
            this.matchIndexes[this.matchAt] = opts;
            this.regexes.push([opts, re]);
            this.matchAt += countMatchGroups(re) + 1;
          }
          compile() {
            if (this.regexes.length === 0) {
              this.exec = () => null;
            }
            const terminators = this.regexes.map((el) => el[1]);
            this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: "|" }), true);
            this.lastIndex = 0;
          }
          /** @param {string} s */
          exec(s2) {
            this.matcherRe.lastIndex = this.lastIndex;
            const match = this.matcherRe.exec(s2);
            if (!match) {
              return null;
            }
            const i4 = match.findIndex((el, i5) => i5 > 0 && el !== void 0);
            const matchData = this.matchIndexes[i4];
            match.splice(0, i4);
            return Object.assign(match, matchData);
          }
        }
        class ResumableMultiRegex {
          constructor() {
            this.rules = [];
            this.multiRegexes = [];
            this.count = 0;
            this.lastIndex = 0;
            this.regexIndex = 0;
          }
          // @ts-ignore
          getMatcher(index) {
            if (this.multiRegexes[index]) return this.multiRegexes[index];
            const matcher = new MultiRegex();
            this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
            matcher.compile();
            this.multiRegexes[index] = matcher;
            return matcher;
          }
          resumingScanAtSamePosition() {
            return this.regexIndex !== 0;
          }
          considerAll() {
            this.regexIndex = 0;
          }
          // @ts-ignore
          addRule(re, opts) {
            this.rules.push([re, opts]);
            if (opts.type === "begin") this.count++;
          }
          /** @param {string} s */
          exec(s2) {
            const m2 = this.getMatcher(this.regexIndex);
            m2.lastIndex = this.lastIndex;
            let result = m2.exec(s2);
            if (this.resumingScanAtSamePosition()) {
              if (result && result.index === this.lastIndex) ;
              else {
                const m22 = this.getMatcher(0);
                m22.lastIndex = this.lastIndex + 1;
                result = m22.exec(s2);
              }
            }
            if (result) {
              this.regexIndex += result.position + 1;
              if (this.regexIndex === this.count) {
                this.considerAll();
              }
            }
            return result;
          }
        }
        function buildModeRegex(mode) {
          const mm = new ResumableMultiRegex();
          mode.contains.forEach((term) => mm.addRule(term.begin, { rule: term, type: "begin" }));
          if (mode.terminatorEnd) {
            mm.addRule(mode.terminatorEnd, { type: "end" });
          }
          if (mode.illegal) {
            mm.addRule(mode.illegal, { type: "illegal" });
          }
          return mm;
        }
        function compileMode(mode, parent) {
          const cmode = (
            /** @type CompiledMode */
            mode
          );
          if (mode.isCompiled) return cmode;
          [
            scopeClassName,
            // do this early so compiler extensions generally don't have to worry about
            // the distinction between match/begin
            compileMatch,
            MultiClass,
            beforeMatchExt
          ].forEach((ext) => ext(mode, parent));
          language.compilerExtensions.forEach((ext) => ext(mode, parent));
          mode.__beforeBegin = null;
          [
            beginKeywords,
            // do this later so compiler extensions that come earlier have access to the
            // raw array if they wanted to perhaps manipulate it, etc.
            compileIllegal,
            // default to 1 relevance if not specified
            compileRelevance
          ].forEach((ext) => ext(mode, parent));
          mode.isCompiled = true;
          let keywordPattern = null;
          if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
            mode.keywords = Object.assign({}, mode.keywords);
            keywordPattern = mode.keywords.$pattern;
            delete mode.keywords.$pattern;
          }
          keywordPattern = keywordPattern || /\w+/;
          if (mode.keywords) {
            mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
          }
          cmode.keywordPatternRe = langRe(keywordPattern, true);
          if (parent) {
            if (!mode.begin) mode.begin = /\B|\b/;
            cmode.beginRe = langRe(cmode.begin);
            if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
            if (mode.end) cmode.endRe = langRe(cmode.end);
            cmode.terminatorEnd = source(cmode.end) || "";
            if (mode.endsWithParent && parent.terminatorEnd) {
              cmode.terminatorEnd += (mode.end ? "|" : "") + parent.terminatorEnd;
            }
          }
          if (mode.illegal) cmode.illegalRe = langRe(
            /** @type {RegExp | string} */
            mode.illegal
          );
          if (!mode.contains) mode.contains = [];
          mode.contains = [].concat(...mode.contains.map(function(c4) {
            return expandOrCloneMode(c4 === "self" ? mode : c4);
          }));
          mode.contains.forEach(function(c4) {
            compileMode(
              /** @type Mode */
              c4,
              cmode
            );
          });
          if (mode.starts) {
            compileMode(mode.starts, parent);
          }
          cmode.matcher = buildModeRegex(cmode);
          return cmode;
        }
        if (!language.compilerExtensions) language.compilerExtensions = [];
        if (language.contains && language.contains.includes("self")) {
          throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
        }
        language.classNameAliases = inherit$1(language.classNameAliases || {});
        return compileMode(
          /** @type Mode */
          language
        );
      }
      function dependencyOnParent(mode) {
        if (!mode) return false;
        return mode.endsWithParent || dependencyOnParent(mode.starts);
      }
      function expandOrCloneMode(mode) {
        if (mode.variants && !mode.cachedVariants) {
          mode.cachedVariants = mode.variants.map(function(variant) {
            return inherit$1(mode, { variants: null }, variant);
          });
        }
        if (mode.cachedVariants) {
          return mode.cachedVariants;
        }
        if (dependencyOnParent(mode)) {
          return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });
        }
        if (Object.isFrozen(mode)) {
          return inherit$1(mode);
        }
        return mode;
      }
      var version = "11.10.0";
      var HTMLInjectionError = class extends Error {
        constructor(reason, html) {
          super(reason);
          this.name = "HTMLInjectionError";
          this.html = html;
        }
      };
      var escape = escapeHTML;
      var inherit = inherit$1;
      var NO_MATCH = Symbol("nomatch");
      var MAX_KEYWORD_HITS = 7;
      var HLJS = function(hljs) {
        const languages = /* @__PURE__ */ Object.create(null);
        const aliases = /* @__PURE__ */ Object.create(null);
        const plugins = [];
        let SAFE_MODE = true;
        const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
        const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: "Plain text", contains: [] };
        let options = {
          ignoreUnescapedHTML: false,
          throwUnescapedHTML: false,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          // beta configuration options, subject to change, welcome to discuss
          // https://github.com/highlightjs/highlight.js/issues/1086
          __emitter: TokenTreeEmitter
        };
        function shouldNotHighlight(languageName) {
          return options.noHighlightRe.test(languageName);
        }
        function blockLanguage(block) {
          let classes = block.className + " ";
          classes += block.parentNode ? block.parentNode.className : "";
          const match = options.languageDetectRe.exec(classes);
          if (match) {
            const language = getLanguage(match[1]);
            if (!language) {
              warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
              warn("Falling back to no-highlight mode for this block.", block);
            }
            return language ? match[1] : "no-highlight";
          }
          return classes.split(/\s+/).find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
        }
        function highlight2(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
          let code = "";
          let languageName = "";
          if (typeof optionsOrCode === "object") {
            code = codeOrLanguageName;
            ignoreIllegals = optionsOrCode.ignoreIllegals;
            languageName = optionsOrCode.language;
          } else {
            deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
            deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
            languageName = codeOrLanguageName;
            code = optionsOrCode;
          }
          if (ignoreIllegals === void 0) {
            ignoreIllegals = true;
          }
          const context = {
            code,
            language: languageName
          };
          fire("before:highlight", context);
          const result = context.result ? context.result : _highlight(context.language, context.code, ignoreIllegals);
          result.code = context.code;
          fire("after:highlight", result);
          return result;
        }
        function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
          const keywordHits = /* @__PURE__ */ Object.create(null);
          function keywordData(mode, matchText) {
            return mode.keywords[matchText];
          }
          function processKeywords() {
            if (!top.keywords) {
              emitter.addText(modeBuffer);
              return;
            }
            let lastIndex = 0;
            top.keywordPatternRe.lastIndex = 0;
            let match = top.keywordPatternRe.exec(modeBuffer);
            let buf = "";
            while (match) {
              buf += modeBuffer.substring(lastIndex, match.index);
              const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
              const data = keywordData(top, word);
              if (data) {
                const [kind, keywordRelevance] = data;
                emitter.addText(buf);
                buf = "";
                keywordHits[word] = (keywordHits[word] || 0) + 1;
                if (keywordHits[word] <= MAX_KEYWORD_HITS) relevance += keywordRelevance;
                if (kind.startsWith("_")) {
                  buf += match[0];
                } else {
                  const cssClass = language.classNameAliases[kind] || kind;
                  emitKeyword(match[0], cssClass);
                }
              } else {
                buf += match[0];
              }
              lastIndex = top.keywordPatternRe.lastIndex;
              match = top.keywordPatternRe.exec(modeBuffer);
            }
            buf += modeBuffer.substring(lastIndex);
            emitter.addText(buf);
          }
          function processSubLanguage() {
            if (modeBuffer === "") return;
            let result2 = null;
            if (typeof top.subLanguage === "string") {
              if (!languages[top.subLanguage]) {
                emitter.addText(modeBuffer);
                return;
              }
              result2 = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
              continuations[top.subLanguage] = /** @type {CompiledMode} */
              result2._top;
            } else {
              result2 = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
            }
            if (top.relevance > 0) {
              relevance += result2.relevance;
            }
            emitter.__addSublanguage(result2._emitter, result2.language);
          }
          function processBuffer() {
            if (top.subLanguage != null) {
              processSubLanguage();
            } else {
              processKeywords();
            }
            modeBuffer = "";
          }
          function emitKeyword(keyword, scope) {
            if (keyword === "") return;
            emitter.startScope(scope);
            emitter.addText(keyword);
            emitter.endScope();
          }
          function emitMultiClass(scope, match) {
            let i4 = 1;
            const max = match.length - 1;
            while (i4 <= max) {
              if (!scope._emit[i4]) {
                i4++;
                continue;
              }
              const klass = language.classNameAliases[scope[i4]] || scope[i4];
              const text = match[i4];
              if (klass) {
                emitKeyword(text, klass);
              } else {
                modeBuffer = text;
                processKeywords();
                modeBuffer = "";
              }
              i4++;
            }
          }
          function startNewMode(mode, match) {
            if (mode.scope && typeof mode.scope === "string") {
              emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
            }
            if (mode.beginScope) {
              if (mode.beginScope._wrap) {
                emitKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
                modeBuffer = "";
              } else if (mode.beginScope._multi) {
                emitMultiClass(mode.beginScope, match);
                modeBuffer = "";
              }
            }
            top = Object.create(mode, { parent: { value: top } });
            return top;
          }
          function endOfMode(mode, match, matchPlusRemainder) {
            let matched = startsWith(mode.endRe, matchPlusRemainder);
            if (matched) {
              if (mode["on:end"]) {
                const resp = new Response(mode);
                mode["on:end"](match, resp);
                if (resp.isMatchIgnored) matched = false;
              }
              if (matched) {
                while (mode.endsParent && mode.parent) {
                  mode = mode.parent;
                }
                return mode;
              }
            }
            if (mode.endsWithParent) {
              return endOfMode(mode.parent, match, matchPlusRemainder);
            }
          }
          function doIgnore(lexeme) {
            if (top.matcher.regexIndex === 0) {
              modeBuffer += lexeme[0];
              return 1;
            } else {
              resumeScanAtSamePosition = true;
              return 0;
            }
          }
          function doBeginMatch(match) {
            const lexeme = match[0];
            const newMode = match.rule;
            const resp = new Response(newMode);
            const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
            for (const cb of beforeCallbacks) {
              if (!cb) continue;
              cb(match, resp);
              if (resp.isMatchIgnored) return doIgnore(lexeme);
            }
            if (newMode.skip) {
              modeBuffer += lexeme;
            } else {
              if (newMode.excludeBegin) {
                modeBuffer += lexeme;
              }
              processBuffer();
              if (!newMode.returnBegin && !newMode.excludeBegin) {
                modeBuffer = lexeme;
              }
            }
            startNewMode(newMode, match);
            return newMode.returnBegin ? 0 : lexeme.length;
          }
          function doEndMatch(match) {
            const lexeme = match[0];
            const matchPlusRemainder = codeToHighlight.substring(match.index);
            const endMode = endOfMode(top, match, matchPlusRemainder);
            if (!endMode) {
              return NO_MATCH;
            }
            const origin = top;
            if (top.endScope && top.endScope._wrap) {
              processBuffer();
              emitKeyword(lexeme, top.endScope._wrap);
            } else if (top.endScope && top.endScope._multi) {
              processBuffer();
              emitMultiClass(top.endScope, match);
            } else if (origin.skip) {
              modeBuffer += lexeme;
            } else {
              if (!(origin.returnEnd || origin.excludeEnd)) {
                modeBuffer += lexeme;
              }
              processBuffer();
              if (origin.excludeEnd) {
                modeBuffer = lexeme;
              }
            }
            do {
              if (top.scope) {
                emitter.closeNode();
              }
              if (!top.skip && !top.subLanguage) {
                relevance += top.relevance;
              }
              top = top.parent;
            } while (top !== endMode.parent);
            if (endMode.starts) {
              startNewMode(endMode.starts, match);
            }
            return origin.returnEnd ? 0 : lexeme.length;
          }
          function processContinuations() {
            const list = [];
            for (let current = top; current !== language; current = current.parent) {
              if (current.scope) {
                list.unshift(current.scope);
              }
            }
            list.forEach((item) => emitter.openNode(item));
          }
          let lastMatch = {};
          function processLexeme(textBeforeMatch, match) {
            const lexeme = match && match[0];
            modeBuffer += textBeforeMatch;
            if (lexeme == null) {
              processBuffer();
              return 0;
            }
            if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
              modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
              if (!SAFE_MODE) {
                const err = new Error(`0 width match regex (${languageName})`);
                err.languageName = languageName;
                err.badRule = lastMatch.rule;
                throw err;
              }
              return 1;
            }
            lastMatch = match;
            if (match.type === "begin") {
              return doBeginMatch(match);
            } else if (match.type === "illegal" && !ignoreIllegals) {
              const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.scope || "<unnamed>") + '"');
              err.mode = top;
              throw err;
            } else if (match.type === "end") {
              const processed = doEndMatch(match);
              if (processed !== NO_MATCH) {
                return processed;
              }
            }
            if (match.type === "illegal" && lexeme === "") {
              return 1;
            }
            if (iterations > 1e5 && iterations > match.index * 3) {
              const err = new Error("potential infinite loop, way more iterations than matches");
              throw err;
            }
            modeBuffer += lexeme;
            return lexeme.length;
          }
          const language = getLanguage(languageName);
          if (!language) {
            error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
            throw new Error('Unknown language: "' + languageName + '"');
          }
          const md = compileLanguage(language);
          let result = "";
          let top = continuation || md;
          const continuations = {};
          const emitter = new options.__emitter(options);
          processContinuations();
          let modeBuffer = "";
          let relevance = 0;
          let index = 0;
          let iterations = 0;
          let resumeScanAtSamePosition = false;
          try {
            if (!language.__emitTokens) {
              top.matcher.considerAll();
              for (; ; ) {
                iterations++;
                if (resumeScanAtSamePosition) {
                  resumeScanAtSamePosition = false;
                } else {
                  top.matcher.considerAll();
                }
                top.matcher.lastIndex = index;
                const match = top.matcher.exec(codeToHighlight);
                if (!match) break;
                const beforeMatch = codeToHighlight.substring(index, match.index);
                const processedCount = processLexeme(beforeMatch, match);
                index = match.index + processedCount;
              }
              processLexeme(codeToHighlight.substring(index));
            } else {
              language.__emitTokens(codeToHighlight, emitter);
            }
            emitter.finalize();
            result = emitter.toHTML();
            return {
              language: languageName,
              value: result,
              relevance,
              illegal: false,
              _emitter: emitter,
              _top: top
            };
          } catch (err) {
            if (err.message && err.message.includes("Illegal")) {
              return {
                language: languageName,
                value: escape(codeToHighlight),
                illegal: true,
                relevance: 0,
                _illegalBy: {
                  message: err.message,
                  index,
                  context: codeToHighlight.slice(index - 100, index + 100),
                  mode: err.mode,
                  resultSoFar: result
                },
                _emitter: emitter
              };
            } else if (SAFE_MODE) {
              return {
                language: languageName,
                value: escape(codeToHighlight),
                illegal: false,
                relevance: 0,
                errorRaised: err,
                _emitter: emitter,
                _top: top
              };
            } else {
              throw err;
            }
          }
        }
        function justTextHighlightResult(code) {
          const result = {
            value: escape(code),
            illegal: false,
            relevance: 0,
            _top: PLAINTEXT_LANGUAGE,
            _emitter: new options.__emitter(options)
          };
          result._emitter.addText(code);
          return result;
        }
        function highlightAuto(code, languageSubset) {
          languageSubset = languageSubset || options.languages || Object.keys(languages);
          const plaintext = justTextHighlightResult(code);
          const results = languageSubset.filter(getLanguage).filter(autoDetection).map(
            (name) => _highlight(name, code, false)
          );
          results.unshift(plaintext);
          const sorted = results.sort((a2, b2) => {
            if (a2.relevance !== b2.relevance) return b2.relevance - a2.relevance;
            if (a2.language && b2.language) {
              if (getLanguage(a2.language).supersetOf === b2.language) {
                return 1;
              } else if (getLanguage(b2.language).supersetOf === a2.language) {
                return -1;
              }
            }
            return 0;
          });
          const [best, secondBest] = sorted;
          const result = best;
          result.secondBest = secondBest;
          return result;
        }
        function updateClassName(element, currentLang, resultLang) {
          const language = currentLang && aliases[currentLang] || resultLang;
          element.classList.add("hljs");
          element.classList.add(`language-${language}`);
        }
        function highlightElement(element) {
          let node = null;
          const language = blockLanguage(element);
          if (shouldNotHighlight(language)) return;
          fire(
            "before:highlightElement",
            { el: element, language }
          );
          if (element.dataset.highlighted) {
            console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", element);
            return;
          }
          if (element.children.length > 0) {
            if (!options.ignoreUnescapedHTML) {
              console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
              console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
              console.warn("The element with unescaped HTML:");
              console.warn(element);
            }
            if (options.throwUnescapedHTML) {
              const err = new HTMLInjectionError(
                "One of your code blocks includes unescaped HTML.",
                element.innerHTML
              );
              throw err;
            }
          }
          node = element;
          const text = node.textContent;
          const result = language ? highlight2(text, { language, ignoreIllegals: true }) : highlightAuto(text);
          element.innerHTML = result.value;
          element.dataset.highlighted = "yes";
          updateClassName(element, language, result.language);
          element.result = {
            language: result.language,
            // TODO: remove with version 11.0
            re: result.relevance,
            relevance: result.relevance
          };
          if (result.secondBest) {
            element.secondBest = {
              language: result.secondBest.language,
              relevance: result.secondBest.relevance
            };
          }
          fire("after:highlightElement", { el: element, result, text });
        }
        function configure(userOptions) {
          options = inherit(options, userOptions);
        }
        const initHighlighting = () => {
          highlightAll();
          deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
        };
        function initHighlightingOnLoad() {
          highlightAll();
          deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
        }
        let wantsHighlight = false;
        function highlightAll() {
          if (document.readyState === "loading") {
            wantsHighlight = true;
            return;
          }
          const blocks = document.querySelectorAll(options.cssSelector);
          blocks.forEach(highlightElement);
        }
        function boot() {
          if (wantsHighlight) highlightAll();
        }
        if (typeof window !== "undefined" && window.addEventListener) {
          window.addEventListener("DOMContentLoaded", boot, false);
        }
        function registerLanguage(languageName, languageDefinition) {
          let lang = null;
          try {
            lang = languageDefinition(hljs);
          } catch (error$1) {
            error("Language definition for '{}' could not be registered.".replace("{}", languageName));
            if (!SAFE_MODE) {
              throw error$1;
            } else {
              error(error$1);
            }
            lang = PLAINTEXT_LANGUAGE;
          }
          if (!lang.name) lang.name = languageName;
          languages[languageName] = lang;
          lang.rawDefinition = languageDefinition.bind(null, hljs);
          if (lang.aliases) {
            registerAliases(lang.aliases, { languageName });
          }
        }
        function unregisterLanguage(languageName) {
          delete languages[languageName];
          for (const alias of Object.keys(aliases)) {
            if (aliases[alias] === languageName) {
              delete aliases[alias];
            }
          }
        }
        function listLanguages() {
          return Object.keys(languages);
        }
        function getLanguage(name) {
          name = (name || "").toLowerCase();
          return languages[name] || languages[aliases[name]];
        }
        function registerAliases(aliasList, { languageName }) {
          if (typeof aliasList === "string") {
            aliasList = [aliasList];
          }
          aliasList.forEach((alias) => {
            aliases[alias.toLowerCase()] = languageName;
          });
        }
        function autoDetection(name) {
          const lang = getLanguage(name);
          return lang && !lang.disableAutodetect;
        }
        function upgradePluginAPI(plugin) {
          if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
            plugin["before:highlightElement"] = (data) => {
              plugin["before:highlightBlock"](
                Object.assign({ block: data.el }, data)
              );
            };
          }
          if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
            plugin["after:highlightElement"] = (data) => {
              plugin["after:highlightBlock"](
                Object.assign({ block: data.el }, data)
              );
            };
          }
        }
        function addPlugin(plugin) {
          upgradePluginAPI(plugin);
          plugins.push(plugin);
        }
        function removePlugin(plugin) {
          const index = plugins.indexOf(plugin);
          if (index !== -1) {
            plugins.splice(index, 1);
          }
        }
        function fire(event, args) {
          const cb = event;
          plugins.forEach(function(plugin) {
            if (plugin[cb]) {
              plugin[cb](args);
            }
          });
        }
        function deprecateHighlightBlock(el) {
          deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
          deprecated("10.7.0", "Please use highlightElement now.");
          return highlightElement(el);
        }
        Object.assign(hljs, {
          highlight: highlight2,
          highlightAuto,
          highlightAll,
          highlightElement,
          // TODO: Remove with v12 API
          highlightBlock: deprecateHighlightBlock,
          configure,
          initHighlighting,
          initHighlightingOnLoad,
          registerLanguage,
          unregisterLanguage,
          listLanguages,
          getLanguage,
          registerAliases,
          autoDetection,
          inherit,
          addPlugin,
          removePlugin
        });
        hljs.debugMode = function() {
          SAFE_MODE = false;
        };
        hljs.safeMode = function() {
          SAFE_MODE = true;
        };
        hljs.versionString = version;
        hljs.regex = {
          concat,
          lookahead,
          either,
          optional,
          anyNumberOfTimes
        };
        for (const key in MODES) {
          if (typeof MODES[key] === "object") {
            deepFreeze(MODES[key]);
          }
        }
        Object.assign(hljs, MODES);
        return hljs;
      };
      var highlight = HLJS({});
      highlight.newInstance = () => HLJS({});
      module.exports = highlight;
      highlight.HighlightJS = highlight;
      highlight.default = highlight;
    }
  });

  // node_modules/highlight.js/lib/languages/xml.js
  var require_xml = __commonJS({
    "node_modules/highlight.js/lib/languages/xml.js"(exports, module) {
      function xml(hljs) {
        const regex = hljs.regex;
        const TAG_NAME_RE = regex.concat(/[\p{L}_]/u, regex.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u);
        const XML_IDENT_RE = /[\p{L}0-9._:-]+/u;
        const XML_ENTITIES = {
          className: "symbol",
          begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
        };
        const XML_META_KEYWORDS = {
          begin: /\s/,
          contains: [
            {
              className: "keyword",
              begin: /#?[a-z_][a-z1-9_-]+/,
              illegal: /\n/
            }
          ]
        };
        const XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
          begin: /\(/,
          end: /\)/
        });
        const APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, { className: "string" });
        const QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, { className: "string" });
        const TAG_INTERNALS = {
          endsWithParent: true,
          illegal: /</,
          relevance: 0,
          contains: [
            {
              className: "attr",
              begin: XML_IDENT_RE,
              relevance: 0
            },
            {
              begin: /=\s*/,
              relevance: 0,
              contains: [
                {
                  className: "string",
                  endsParent: true,
                  variants: [
                    {
                      begin: /"/,
                      end: /"/,
                      contains: [XML_ENTITIES]
                    },
                    {
                      begin: /'/,
                      end: /'/,
                      contains: [XML_ENTITIES]
                    },
                    { begin: /[^\s"'=<>`]+/ }
                  ]
                }
              ]
            }
          ]
        };
        return {
          name: "HTML, XML",
          aliases: [
            "html",
            "xhtml",
            "rss",
            "atom",
            "xjb",
            "xsd",
            "xsl",
            "plist",
            "wsf",
            "svg"
          ],
          case_insensitive: true,
          unicodeRegex: true,
          contains: [
            {
              className: "meta",
              begin: /<![a-z]/,
              end: />/,
              relevance: 10,
              contains: [
                XML_META_KEYWORDS,
                QUOTE_META_STRING_MODE,
                APOS_META_STRING_MODE,
                XML_META_PAR_KEYWORDS,
                {
                  begin: /\[/,
                  end: /\]/,
                  contains: [
                    {
                      className: "meta",
                      begin: /<![a-z]/,
                      end: />/,
                      contains: [
                        XML_META_KEYWORDS,
                        XML_META_PAR_KEYWORDS,
                        QUOTE_META_STRING_MODE,
                        APOS_META_STRING_MODE
                      ]
                    }
                  ]
                }
              ]
            },
            hljs.COMMENT(
              /<!--/,
              /-->/,
              { relevance: 10 }
            ),
            {
              begin: /<!\[CDATA\[/,
              end: /\]\]>/,
              relevance: 10
            },
            XML_ENTITIES,
            // xml processing instructions
            {
              className: "meta",
              end: /\?>/,
              variants: [
                {
                  begin: /<\?xml/,
                  relevance: 10,
                  contains: [
                    QUOTE_META_STRING_MODE
                  ]
                },
                {
                  begin: /<\?[a-z][a-z0-9]+/
                }
              ]
            },
            {
              className: "tag",
              /*
              The lookahead pattern (?=...) ensures that 'begin' only matches
              '<style' as a single word, followed by a whitespace or an
              ending bracket.
              */
              begin: /<style(?=\s|>)/,
              end: />/,
              keywords: { name: "style" },
              contains: [TAG_INTERNALS],
              starts: {
                end: /<\/style>/,
                returnEnd: true,
                subLanguage: [
                  "css",
                  "xml"
                ]
              }
            },
            {
              className: "tag",
              // See the comment in the <style tag about the lookahead pattern
              begin: /<script(?=\s|>)/,
              end: />/,
              keywords: { name: "script" },
              contains: [TAG_INTERNALS],
              starts: {
                end: /<\/script>/,
                returnEnd: true,
                subLanguage: [
                  "javascript",
                  "handlebars",
                  "xml"
                ]
              }
            },
            // we need this for now for jSX
            {
              className: "tag",
              begin: /<>|<\/>/
            },
            // open tag
            {
              className: "tag",
              begin: regex.concat(
                /</,
                regex.lookahead(regex.concat(
                  TAG_NAME_RE,
                  // <tag/>
                  // <tag>
                  // <tag ...
                  regex.either(/\/>/, />/, /\s/)
                ))
              ),
              end: /\/?>/,
              contains: [
                {
                  className: "name",
                  begin: TAG_NAME_RE,
                  relevance: 0,
                  starts: TAG_INTERNALS
                }
              ]
            },
            // close tag
            {
              className: "tag",
              begin: regex.concat(
                /<\//,
                regex.lookahead(regex.concat(
                  TAG_NAME_RE,
                  />/
                ))
              ),
              contains: [
                {
                  className: "name",
                  begin: TAG_NAME_RE,
                  relevance: 0
                },
                {
                  begin: />/,
                  relevance: 0,
                  endsParent: true
                }
              ]
            }
          ]
        };
      }
      module.exports = xml;
    }
  });

  // node_modules/highlight.js/lib/languages/bash.js
  var require_bash = __commonJS({
    "node_modules/highlight.js/lib/languages/bash.js"(exports, module) {
      function bash(hljs) {
        const regex = hljs.regex;
        const VAR = {};
        const BRACED_VAR = {
          begin: /\$\{/,
          end: /\}/,
          contains: [
            "self",
            {
              begin: /:-/,
              contains: [VAR]
            }
            // default values
          ]
        };
        Object.assign(VAR, {
          className: "variable",
          variants: [
            { begin: regex.concat(
              /\$[\w\d#@][\w\d_]*/,
              // negative look-ahead tries to avoid matching patterns that are not
              // Perl at all like $ident$, @ident@, etc.
              `(?![\\w\\d])(?![$])`
            ) },
            BRACED_VAR
          ]
        });
        const SUBST = {
          className: "subst",
          begin: /\$\(/,
          end: /\)/,
          contains: [hljs.BACKSLASH_ESCAPE]
        };
        const COMMENT = hljs.inherit(
          hljs.COMMENT(),
          {
            match: [
              /(^|\s)/,
              /#.*$/
            ],
            scope: {
              2: "comment"
            }
          }
        );
        const HERE_DOC = {
          begin: /<<-?\s*(?=\w+)/,
          starts: { contains: [
            hljs.END_SAME_AS_BEGIN({
              begin: /(\w+)/,
              end: /(\w+)/,
              className: "string"
            })
          ] }
        };
        const QUOTE_STRING = {
          className: "string",
          begin: /"/,
          end: /"/,
          contains: [
            hljs.BACKSLASH_ESCAPE,
            VAR,
            SUBST
          ]
        };
        SUBST.contains.push(QUOTE_STRING);
        const ESCAPED_QUOTE = {
          match: /\\"/
        };
        const APOS_STRING = {
          className: "string",
          begin: /'/,
          end: /'/
        };
        const ESCAPED_APOS = {
          match: /\\'/
        };
        const ARITHMETIC = {
          begin: /\$?\(\(/,
          end: /\)\)/,
          contains: [
            {
              begin: /\d+#[0-9a-f]+/,
              className: "number"
            },
            hljs.NUMBER_MODE,
            VAR
          ]
        };
        const SH_LIKE_SHELLS = [
          "fish",
          "bash",
          "zsh",
          "sh",
          "csh",
          "ksh",
          "tcsh",
          "dash",
          "scsh"
        ];
        const KNOWN_SHEBANG = hljs.SHEBANG({
          binary: `(${SH_LIKE_SHELLS.join("|")})`,
          relevance: 10
        });
        const FUNCTION = {
          className: "function",
          begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
          returnBegin: true,
          contains: [hljs.inherit(hljs.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
          relevance: 0
        };
        const KEYWORDS = [
          "if",
          "then",
          "else",
          "elif",
          "fi",
          "for",
          "while",
          "until",
          "in",
          "do",
          "done",
          "case",
          "esac",
          "function",
          "select"
        ];
        const LITERALS = [
          "true",
          "false"
        ];
        const PATH_MODE = { match: /(\/[a-z._-]+)+/ };
        const SHELL_BUILT_INS = [
          "break",
          "cd",
          "continue",
          "eval",
          "exec",
          "exit",
          "export",
          "getopts",
          "hash",
          "pwd",
          "readonly",
          "return",
          "shift",
          "test",
          "times",
          "trap",
          "umask",
          "unset"
        ];
        const BASH_BUILT_INS = [
          "alias",
          "bind",
          "builtin",
          "caller",
          "command",
          "declare",
          "echo",
          "enable",
          "help",
          "let",
          "local",
          "logout",
          "mapfile",
          "printf",
          "read",
          "readarray",
          "source",
          "sudo",
          "type",
          "typeset",
          "ulimit",
          "unalias"
        ];
        const ZSH_BUILT_INS = [
          "autoload",
          "bg",
          "bindkey",
          "bye",
          "cap",
          "chdir",
          "clone",
          "comparguments",
          "compcall",
          "compctl",
          "compdescribe",
          "compfiles",
          "compgroups",
          "compquote",
          "comptags",
          "comptry",
          "compvalues",
          "dirs",
          "disable",
          "disown",
          "echotc",
          "echoti",
          "emulate",
          "fc",
          "fg",
          "float",
          "functions",
          "getcap",
          "getln",
          "history",
          "integer",
          "jobs",
          "kill",
          "limit",
          "log",
          "noglob",
          "popd",
          "print",
          "pushd",
          "pushln",
          "rehash",
          "sched",
          "setcap",
          "setopt",
          "stat",
          "suspend",
          "ttyctl",
          "unfunction",
          "unhash",
          "unlimit",
          "unsetopt",
          "vared",
          "wait",
          "whence",
          "where",
          "which",
          "zcompile",
          "zformat",
          "zftp",
          "zle",
          "zmodload",
          "zparseopts",
          "zprof",
          "zpty",
          "zregexparse",
          "zsocket",
          "zstyle",
          "ztcp"
        ];
        const GNU_CORE_UTILS = [
          "chcon",
          "chgrp",
          "chown",
          "chmod",
          "cp",
          "dd",
          "df",
          "dir",
          "dircolors",
          "ln",
          "ls",
          "mkdir",
          "mkfifo",
          "mknod",
          "mktemp",
          "mv",
          "realpath",
          "rm",
          "rmdir",
          "shred",
          "sync",
          "touch",
          "truncate",
          "vdir",
          "b2sum",
          "base32",
          "base64",
          "cat",
          "cksum",
          "comm",
          "csplit",
          "cut",
          "expand",
          "fmt",
          "fold",
          "head",
          "join",
          "md5sum",
          "nl",
          "numfmt",
          "od",
          "paste",
          "ptx",
          "pr",
          "sha1sum",
          "sha224sum",
          "sha256sum",
          "sha384sum",
          "sha512sum",
          "shuf",
          "sort",
          "split",
          "sum",
          "tac",
          "tail",
          "tr",
          "tsort",
          "unexpand",
          "uniq",
          "wc",
          "arch",
          "basename",
          "chroot",
          "date",
          "dirname",
          "du",
          "echo",
          "env",
          "expr",
          "factor",
          // "false", // keyword literal already
          "groups",
          "hostid",
          "id",
          "link",
          "logname",
          "nice",
          "nohup",
          "nproc",
          "pathchk",
          "pinky",
          "printenv",
          "printf",
          "pwd",
          "readlink",
          "runcon",
          "seq",
          "sleep",
          "stat",
          "stdbuf",
          "stty",
          "tee",
          "test",
          "timeout",
          // "true", // keyword literal already
          "tty",
          "uname",
          "unlink",
          "uptime",
          "users",
          "who",
          "whoami",
          "yes"
        ];
        return {
          name: "Bash",
          aliases: [
            "sh",
            "zsh"
          ],
          keywords: {
            $pattern: /\b[a-z][a-z0-9._-]+\b/,
            keyword: KEYWORDS,
            literal: LITERALS,
            built_in: [
              ...SHELL_BUILT_INS,
              ...BASH_BUILT_INS,
              // Shell modifiers
              "set",
              "shopt",
              ...ZSH_BUILT_INS,
              ...GNU_CORE_UTILS
            ]
          },
          contains: [
            KNOWN_SHEBANG,
            // to catch known shells and boost relevancy
            hljs.SHEBANG(),
            // to catch unknown shells but still highlight the shebang
            FUNCTION,
            ARITHMETIC,
            COMMENT,
            HERE_DOC,
            PATH_MODE,
            QUOTE_STRING,
            ESCAPED_QUOTE,
            APOS_STRING,
            ESCAPED_APOS,
            VAR
          ]
        };
      }
      module.exports = bash;
    }
  });

  // node_modules/highlight.js/lib/languages/c.js
  var require_c = __commonJS({
    "node_modules/highlight.js/lib/languages/c.js"(exports, module) {
      function c4(hljs) {
        const regex = hljs.regex;
        const C_LINE_COMMENT_MODE = hljs.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] });
        const DECLTYPE_AUTO_RE = "decltype\\(auto\\)";
        const NAMESPACE_RE = "[a-zA-Z_]\\w*::";
        const TEMPLATE_ARGUMENT_RE = "<[^<>]+>";
        const FUNCTION_TYPE_RE = "(" + DECLTYPE_AUTO_RE + "|" + regex.optional(NAMESPACE_RE) + "[a-zA-Z_]\\w*" + regex.optional(TEMPLATE_ARGUMENT_RE) + ")";
        const TYPES = {
          className: "type",
          variants: [
            { begin: "\\b[a-z\\d_]*_t\\b" },
            { match: /\batomic_[a-z]{3,6}\b/ }
          ]
        };
        const CHARACTER_ESCAPES = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)";
        const STRINGS = {
          className: "string",
          variants: [
            {
              begin: '(u8?|U|L)?"',
              end: '"',
              illegal: "\\n",
              contains: [hljs.BACKSLASH_ESCAPE]
            },
            {
              begin: "(u8?|U|L)?'(" + CHARACTER_ESCAPES + "|.)",
              end: "'",
              illegal: "."
            },
            hljs.END_SAME_AS_BEGIN({
              begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
              end: /\)([^()\\ ]{0,16})"/
            })
          ]
        };
        const NUMBERS = {
          className: "number",
          variants: [
            { begin: "\\b(0b[01']+)" },
            { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)" },
            { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }
          ],
          relevance: 0
        };
        const PREPROCESSOR = {
          className: "meta",
          begin: /#\s*[a-z]+\b/,
          end: /$/,
          keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef elifdef elifndef include" },
          contains: [
            {
              begin: /\\\n/,
              relevance: 0
            },
            hljs.inherit(STRINGS, { className: "string" }),
            {
              className: "string",
              begin: /<.*?>/
            },
            C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE
          ]
        };
        const TITLE_MODE = {
          className: "title",
          begin: regex.optional(NAMESPACE_RE) + hljs.IDENT_RE,
          relevance: 0
        };
        const FUNCTION_TITLE = regex.optional(NAMESPACE_RE) + hljs.IDENT_RE + "\\s*\\(";
        const C_KEYWORDS = [
          "asm",
          "auto",
          "break",
          "case",
          "continue",
          "default",
          "do",
          "else",
          "enum",
          "extern",
          "for",
          "fortran",
          "goto",
          "if",
          "inline",
          "register",
          "restrict",
          "return",
          "sizeof",
          "typeof",
          "typeof_unqual",
          "struct",
          "switch",
          "typedef",
          "union",
          "volatile",
          "while",
          "_Alignas",
          "_Alignof",
          "_Atomic",
          "_Generic",
          "_Noreturn",
          "_Static_assert",
          "_Thread_local",
          // aliases
          "alignas",
          "alignof",
          "noreturn",
          "static_assert",
          "thread_local",
          // not a C keyword but is, for all intents and purposes, treated exactly like one.
          "_Pragma"
        ];
        const C_TYPES = [
          "float",
          "double",
          "signed",
          "unsigned",
          "int",
          "short",
          "long",
          "char",
          "void",
          "_Bool",
          "_BitInt",
          "_Complex",
          "_Imaginary",
          "_Decimal32",
          "_Decimal64",
          "_Decimal96",
          "_Decimal128",
          "_Decimal64x",
          "_Decimal128x",
          "_Float16",
          "_Float32",
          "_Float64",
          "_Float128",
          "_Float32x",
          "_Float64x",
          "_Float128x",
          // modifiers
          "const",
          "static",
          "constexpr",
          // aliases
          "complex",
          "bool",
          "imaginary"
        ];
        const KEYWORDS = {
          keyword: C_KEYWORDS,
          type: C_TYPES,
          literal: "true false NULL",
          // TODO: apply hinting work similar to what was done in cpp.js
          built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
        };
        const EXPRESSION_CONTAINS = [
          PREPROCESSOR,
          TYPES,
          C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          NUMBERS,
          STRINGS
        ];
        const EXPRESSION_CONTEXT = {
          // This mode covers expression context where we can't expect a function
          // definition and shouldn't highlight anything that looks like one:
          // `return some()`, `else if()`, `(x*sum(1, 2))`
          variants: [
            {
              begin: /=/,
              end: /;/
            },
            {
              begin: /\(/,
              end: /\)/
            },
            {
              beginKeywords: "new throw return else",
              end: /;/
            }
          ],
          keywords: KEYWORDS,
          contains: EXPRESSION_CONTAINS.concat([
            {
              begin: /\(/,
              end: /\)/,
              keywords: KEYWORDS,
              contains: EXPRESSION_CONTAINS.concat(["self"]),
              relevance: 0
            }
          ]),
          relevance: 0
        };
        const FUNCTION_DECLARATION = {
          begin: "(" + FUNCTION_TYPE_RE + "[\\*&\\s]+)+" + FUNCTION_TITLE,
          returnBegin: true,
          end: /[{;=]/,
          excludeEnd: true,
          keywords: KEYWORDS,
          illegal: /[^\w\s\*&:<>.]/,
          contains: [
            {
              // to prevent it from being confused as the function title
              begin: DECLTYPE_AUTO_RE,
              keywords: KEYWORDS,
              relevance: 0
            },
            {
              begin: FUNCTION_TITLE,
              returnBegin: true,
              contains: [hljs.inherit(TITLE_MODE, { className: "title.function" })],
              relevance: 0
            },
            // allow for multiple declarations, e.g.:
            // extern void f(int), g(char);
            {
              relevance: 0,
              match: /,/
            },
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              keywords: KEYWORDS,
              relevance: 0,
              contains: [
                C_LINE_COMMENT_MODE,
                hljs.C_BLOCK_COMMENT_MODE,
                STRINGS,
                NUMBERS,
                TYPES,
                // Count matching parentheses.
                {
                  begin: /\(/,
                  end: /\)/,
                  keywords: KEYWORDS,
                  relevance: 0,
                  contains: [
                    "self",
                    C_LINE_COMMENT_MODE,
                    hljs.C_BLOCK_COMMENT_MODE,
                    STRINGS,
                    NUMBERS,
                    TYPES
                  ]
                }
              ]
            },
            TYPES,
            C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            PREPROCESSOR
          ]
        };
        return {
          name: "C",
          aliases: ["h"],
          keywords: KEYWORDS,
          // Until differentiations are added between `c` and `cpp`, `c` will
          // not be auto-detected to avoid auto-detect conflicts between C and C++
          disableAutodetect: true,
          illegal: "</",
          contains: [].concat(
            EXPRESSION_CONTEXT,
            FUNCTION_DECLARATION,
            EXPRESSION_CONTAINS,
            [
              PREPROCESSOR,
              {
                begin: hljs.IDENT_RE + "::",
                keywords: KEYWORDS
              },
              {
                className: "class",
                beginKeywords: "enum class struct union",
                end: /[{;:<>=]/,
                contains: [
                  { beginKeywords: "final class struct" },
                  hljs.TITLE_MODE
                ]
              }
            ]
          ),
          exports: {
            preprocessor: PREPROCESSOR,
            strings: STRINGS,
            keywords: KEYWORDS
          }
        };
      }
      module.exports = c4;
    }
  });

  // node_modules/highlight.js/lib/languages/cpp.js
  var require_cpp = __commonJS({
    "node_modules/highlight.js/lib/languages/cpp.js"(exports, module) {
      function cpp(hljs) {
        const regex = hljs.regex;
        const C_LINE_COMMENT_MODE = hljs.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] });
        const DECLTYPE_AUTO_RE = "decltype\\(auto\\)";
        const NAMESPACE_RE = "[a-zA-Z_]\\w*::";
        const TEMPLATE_ARGUMENT_RE = "<[^<>]+>";
        const FUNCTION_TYPE_RE = "(?!struct)(" + DECLTYPE_AUTO_RE + "|" + regex.optional(NAMESPACE_RE) + "[a-zA-Z_]\\w*" + regex.optional(TEMPLATE_ARGUMENT_RE) + ")";
        const CPP_PRIMITIVE_TYPES = {
          className: "type",
          begin: "\\b[a-z\\d_]*_t\\b"
        };
        const CHARACTER_ESCAPES = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)";
        const STRINGS = {
          className: "string",
          variants: [
            {
              begin: '(u8?|U|L)?"',
              end: '"',
              illegal: "\\n",
              contains: [hljs.BACKSLASH_ESCAPE]
            },
            {
              begin: "(u8?|U|L)?'(" + CHARACTER_ESCAPES + "|.)",
              end: "'",
              illegal: "."
            },
            hljs.END_SAME_AS_BEGIN({
              begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
              end: /\)([^()\\ ]{0,16})"/
            })
          ]
        };
        const NUMBERS = {
          className: "number",
          variants: [
            // Floating-point literal.
            {
              begin: "[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"
            },
            // Integer literal.
            {
              begin: "[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"
              // Note: there are user-defined literal suffixes too, but perhaps having the custom suffix not part of the
              // literal highlight actually makes it stand out more.
            }
          ],
          relevance: 0
        };
        const PREPROCESSOR = {
          className: "meta",
          begin: /#\s*[a-z]+\b/,
          end: /$/,
          keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include" },
          contains: [
            {
              begin: /\\\n/,
              relevance: 0
            },
            hljs.inherit(STRINGS, { className: "string" }),
            {
              className: "string",
              begin: /<.*?>/
            },
            C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE
          ]
        };
        const TITLE_MODE = {
          className: "title",
          begin: regex.optional(NAMESPACE_RE) + hljs.IDENT_RE,
          relevance: 0
        };
        const FUNCTION_TITLE = regex.optional(NAMESPACE_RE) + hljs.IDENT_RE + "\\s*\\(";
        const RESERVED_KEYWORDS = [
          "alignas",
          "alignof",
          "and",
          "and_eq",
          "asm",
          "atomic_cancel",
          "atomic_commit",
          "atomic_noexcept",
          "auto",
          "bitand",
          "bitor",
          "break",
          "case",
          "catch",
          "class",
          "co_await",
          "co_return",
          "co_yield",
          "compl",
          "concept",
          "const_cast|10",
          "consteval",
          "constexpr",
          "constinit",
          "continue",
          "decltype",
          "default",
          "delete",
          "do",
          "dynamic_cast|10",
          "else",
          "enum",
          "explicit",
          "export",
          "extern",
          "false",
          "final",
          "for",
          "friend",
          "goto",
          "if",
          "import",
          "inline",
          "module",
          "mutable",
          "namespace",
          "new",
          "noexcept",
          "not",
          "not_eq",
          "nullptr",
          "operator",
          "or",
          "or_eq",
          "override",
          "private",
          "protected",
          "public",
          "reflexpr",
          "register",
          "reinterpret_cast|10",
          "requires",
          "return",
          "sizeof",
          "static_assert",
          "static_cast|10",
          "struct",
          "switch",
          "synchronized",
          "template",
          "this",
          "thread_local",
          "throw",
          "transaction_safe",
          "transaction_safe_dynamic",
          "true",
          "try",
          "typedef",
          "typeid",
          "typename",
          "union",
          "using",
          "virtual",
          "volatile",
          "while",
          "xor",
          "xor_eq"
        ];
        const RESERVED_TYPES = [
          "bool",
          "char",
          "char16_t",
          "char32_t",
          "char8_t",
          "double",
          "float",
          "int",
          "long",
          "short",
          "void",
          "wchar_t",
          "unsigned",
          "signed",
          "const",
          "static"
        ];
        const TYPE_HINTS = [
          "any",
          "auto_ptr",
          "barrier",
          "binary_semaphore",
          "bitset",
          "complex",
          "condition_variable",
          "condition_variable_any",
          "counting_semaphore",
          "deque",
          "false_type",
          "future",
          "imaginary",
          "initializer_list",
          "istringstream",
          "jthread",
          "latch",
          "lock_guard",
          "multimap",
          "multiset",
          "mutex",
          "optional",
          "ostringstream",
          "packaged_task",
          "pair",
          "promise",
          "priority_queue",
          "queue",
          "recursive_mutex",
          "recursive_timed_mutex",
          "scoped_lock",
          "set",
          "shared_future",
          "shared_lock",
          "shared_mutex",
          "shared_timed_mutex",
          "shared_ptr",
          "stack",
          "string_view",
          "stringstream",
          "timed_mutex",
          "thread",
          "true_type",
          "tuple",
          "unique_lock",
          "unique_ptr",
          "unordered_map",
          "unordered_multimap",
          "unordered_multiset",
          "unordered_set",
          "variant",
          "vector",
          "weak_ptr",
          "wstring",
          "wstring_view"
        ];
        const FUNCTION_HINTS = [
          "abort",
          "abs",
          "acos",
          "apply",
          "as_const",
          "asin",
          "atan",
          "atan2",
          "calloc",
          "ceil",
          "cerr",
          "cin",
          "clog",
          "cos",
          "cosh",
          "cout",
          "declval",
          "endl",
          "exchange",
          "exit",
          "exp",
          "fabs",
          "floor",
          "fmod",
          "forward",
          "fprintf",
          "fputs",
          "free",
          "frexp",
          "fscanf",
          "future",
          "invoke",
          "isalnum",
          "isalpha",
          "iscntrl",
          "isdigit",
          "isgraph",
          "islower",
          "isprint",
          "ispunct",
          "isspace",
          "isupper",
          "isxdigit",
          "labs",
          "launder",
          "ldexp",
          "log",
          "log10",
          "make_pair",
          "make_shared",
          "make_shared_for_overwrite",
          "make_tuple",
          "make_unique",
          "malloc",
          "memchr",
          "memcmp",
          "memcpy",
          "memset",
          "modf",
          "move",
          "pow",
          "printf",
          "putchar",
          "puts",
          "realloc",
          "scanf",
          "sin",
          "sinh",
          "snprintf",
          "sprintf",
          "sqrt",
          "sscanf",
          "std",
          "stderr",
          "stdin",
          "stdout",
          "strcat",
          "strchr",
          "strcmp",
          "strcpy",
          "strcspn",
          "strlen",
          "strncat",
          "strncmp",
          "strncpy",
          "strpbrk",
          "strrchr",
          "strspn",
          "strstr",
          "swap",
          "tan",
          "tanh",
          "terminate",
          "to_underlying",
          "tolower",
          "toupper",
          "vfprintf",
          "visit",
          "vprintf",
          "vsprintf"
        ];
        const LITERALS = [
          "NULL",
          "false",
          "nullopt",
          "nullptr",
          "true"
        ];
        const BUILT_IN = ["_Pragma"];
        const CPP_KEYWORDS = {
          type: RESERVED_TYPES,
          keyword: RESERVED_KEYWORDS,
          literal: LITERALS,
          built_in: BUILT_IN,
          _type_hints: TYPE_HINTS
        };
        const FUNCTION_DISPATCH = {
          className: "function.dispatch",
          relevance: 0,
          keywords: {
            // Only for relevance, not highlighting.
            _hint: FUNCTION_HINTS
          },
          begin: regex.concat(
            /\b/,
            /(?!decltype)/,
            /(?!if)/,
            /(?!for)/,
            /(?!switch)/,
            /(?!while)/,
            hljs.IDENT_RE,
            regex.lookahead(/(<[^<>]+>|)\s*\(/)
          )
        };
        const EXPRESSION_CONTAINS = [
          FUNCTION_DISPATCH,
          PREPROCESSOR,
          CPP_PRIMITIVE_TYPES,
          C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          NUMBERS,
          STRINGS
        ];
        const EXPRESSION_CONTEXT = {
          // This mode covers expression context where we can't expect a function
          // definition and shouldn't highlight anything that looks like one:
          // `return some()`, `else if()`, `(x*sum(1, 2))`
          variants: [
            {
              begin: /=/,
              end: /;/
            },
            {
              begin: /\(/,
              end: /\)/
            },
            {
              beginKeywords: "new throw return else",
              end: /;/
            }
          ],
          keywords: CPP_KEYWORDS,
          contains: EXPRESSION_CONTAINS.concat([
            {
              begin: /\(/,
              end: /\)/,
              keywords: CPP_KEYWORDS,
              contains: EXPRESSION_CONTAINS.concat(["self"]),
              relevance: 0
            }
          ]),
          relevance: 0
        };
        const FUNCTION_DECLARATION = {
          className: "function",
          begin: "(" + FUNCTION_TYPE_RE + "[\\*&\\s]+)+" + FUNCTION_TITLE,
          returnBegin: true,
          end: /[{;=]/,
          excludeEnd: true,
          keywords: CPP_KEYWORDS,
          illegal: /[^\w\s\*&:<>.]/,
          contains: [
            {
              // to prevent it from being confused as the function title
              begin: DECLTYPE_AUTO_RE,
              keywords: CPP_KEYWORDS,
              relevance: 0
            },
            {
              begin: FUNCTION_TITLE,
              returnBegin: true,
              contains: [TITLE_MODE],
              relevance: 0
            },
            // needed because we do not have look-behind on the below rule
            // to prevent it from grabbing the final : in a :: pair
            {
              begin: /::/,
              relevance: 0
            },
            // initializers
            {
              begin: /:/,
              endsWithParent: true,
              contains: [
                STRINGS,
                NUMBERS
              ]
            },
            // allow for multiple declarations, e.g.:
            // extern void f(int), g(char);
            {
              relevance: 0,
              match: /,/
            },
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              keywords: CPP_KEYWORDS,
              relevance: 0,
              contains: [
                C_LINE_COMMENT_MODE,
                hljs.C_BLOCK_COMMENT_MODE,
                STRINGS,
                NUMBERS,
                CPP_PRIMITIVE_TYPES,
                // Count matching parentheses.
                {
                  begin: /\(/,
                  end: /\)/,
                  keywords: CPP_KEYWORDS,
                  relevance: 0,
                  contains: [
                    "self",
                    C_LINE_COMMENT_MODE,
                    hljs.C_BLOCK_COMMENT_MODE,
                    STRINGS,
                    NUMBERS,
                    CPP_PRIMITIVE_TYPES
                  ]
                }
              ]
            },
            CPP_PRIMITIVE_TYPES,
            C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            PREPROCESSOR
          ]
        };
        return {
          name: "C++",
          aliases: [
            "cc",
            "c++",
            "h++",
            "hpp",
            "hh",
            "hxx",
            "cxx"
          ],
          keywords: CPP_KEYWORDS,
          illegal: "</",
          classNameAliases: { "function.dispatch": "built_in" },
          contains: [].concat(
            EXPRESSION_CONTEXT,
            FUNCTION_DECLARATION,
            FUNCTION_DISPATCH,
            EXPRESSION_CONTAINS,
            [
              PREPROCESSOR,
              {
                // containers: ie, `vector <int> rooms (9);`
                begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
                end: ">",
                keywords: CPP_KEYWORDS,
                contains: [
                  "self",
                  CPP_PRIMITIVE_TYPES
                ]
              },
              {
                begin: hljs.IDENT_RE + "::",
                keywords: CPP_KEYWORDS
              },
              {
                match: [
                  // extra complexity to deal with `enum class` and `enum struct`
                  /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
                  /\s+/,
                  /\w+/
                ],
                className: {
                  1: "keyword",
                  3: "title.class"
                }
              }
            ]
          )
        };
      }
      module.exports = cpp;
    }
  });

  // node_modules/highlight.js/lib/languages/csharp.js
  var require_csharp = __commonJS({
    "node_modules/highlight.js/lib/languages/csharp.js"(exports, module) {
      function csharp(hljs) {
        const BUILT_IN_KEYWORDS = [
          "bool",
          "byte",
          "char",
          "decimal",
          "delegate",
          "double",
          "dynamic",
          "enum",
          "float",
          "int",
          "long",
          "nint",
          "nuint",
          "object",
          "sbyte",
          "short",
          "string",
          "ulong",
          "uint",
          "ushort"
        ];
        const FUNCTION_MODIFIERS = [
          "public",
          "private",
          "protected",
          "static",
          "internal",
          "protected",
          "abstract",
          "async",
          "extern",
          "override",
          "unsafe",
          "virtual",
          "new",
          "sealed",
          "partial"
        ];
        const LITERAL_KEYWORDS = [
          "default",
          "false",
          "null",
          "true"
        ];
        const NORMAL_KEYWORDS = [
          "abstract",
          "as",
          "base",
          "break",
          "case",
          "catch",
          "class",
          "const",
          "continue",
          "do",
          "else",
          "event",
          "explicit",
          "extern",
          "finally",
          "fixed",
          "for",
          "foreach",
          "goto",
          "if",
          "implicit",
          "in",
          "interface",
          "internal",
          "is",
          "lock",
          "namespace",
          "new",
          "operator",
          "out",
          "override",
          "params",
          "private",
          "protected",
          "public",
          "readonly",
          "record",
          "ref",
          "return",
          "scoped",
          "sealed",
          "sizeof",
          "stackalloc",
          "static",
          "struct",
          "switch",
          "this",
          "throw",
          "try",
          "typeof",
          "unchecked",
          "unsafe",
          "using",
          "virtual",
          "void",
          "volatile",
          "while"
        ];
        const CONTEXTUAL_KEYWORDS = [
          "add",
          "alias",
          "and",
          "ascending",
          "async",
          "await",
          "by",
          "descending",
          "equals",
          "from",
          "get",
          "global",
          "group",
          "init",
          "into",
          "join",
          "let",
          "nameof",
          "not",
          "notnull",
          "on",
          "or",
          "orderby",
          "partial",
          "remove",
          "select",
          "set",
          "unmanaged",
          "value|0",
          "var",
          "when",
          "where",
          "with",
          "yield"
        ];
        const KEYWORDS = {
          keyword: NORMAL_KEYWORDS.concat(CONTEXTUAL_KEYWORDS),
          built_in: BUILT_IN_KEYWORDS,
          literal: LITERAL_KEYWORDS
        };
        const TITLE_MODE = hljs.inherit(hljs.TITLE_MODE, { begin: "[a-zA-Z](\\.?\\w)*" });
        const NUMBERS = {
          className: "number",
          variants: [
            { begin: "\\b(0b[01']+)" },
            { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)" },
            { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }
          ],
          relevance: 0
        };
        const RAW_STRING = {
          className: "string",
          begin: /"""("*)(?!")(.|\n)*?"""\1/,
          relevance: 1
        };
        const VERBATIM_STRING = {
          className: "string",
          begin: '@"',
          end: '"',
          contains: [{ begin: '""' }]
        };
        const VERBATIM_STRING_NO_LF = hljs.inherit(VERBATIM_STRING, { illegal: /\n/ });
        const SUBST = {
          className: "subst",
          begin: /\{/,
          end: /\}/,
          keywords: KEYWORDS
        };
        const SUBST_NO_LF = hljs.inherit(SUBST, { illegal: /\n/ });
        const INTERPOLATED_STRING = {
          className: "string",
          begin: /\$"/,
          end: '"',
          illegal: /\n/,
          contains: [
            { begin: /\{\{/ },
            { begin: /\}\}/ },
            hljs.BACKSLASH_ESCAPE,
            SUBST_NO_LF
          ]
        };
        const INTERPOLATED_VERBATIM_STRING = {
          className: "string",
          begin: /\$@"/,
          end: '"',
          contains: [
            { begin: /\{\{/ },
            { begin: /\}\}/ },
            { begin: '""' },
            SUBST
          ]
        };
        const INTERPOLATED_VERBATIM_STRING_NO_LF = hljs.inherit(INTERPOLATED_VERBATIM_STRING, {
          illegal: /\n/,
          contains: [
            { begin: /\{\{/ },
            { begin: /\}\}/ },
            { begin: '""' },
            SUBST_NO_LF
          ]
        });
        SUBST.contains = [
          INTERPOLATED_VERBATIM_STRING,
          INTERPOLATED_STRING,
          VERBATIM_STRING,
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          NUMBERS,
          hljs.C_BLOCK_COMMENT_MODE
        ];
        SUBST_NO_LF.contains = [
          INTERPOLATED_VERBATIM_STRING_NO_LF,
          INTERPOLATED_STRING,
          VERBATIM_STRING_NO_LF,
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          NUMBERS,
          hljs.inherit(hljs.C_BLOCK_COMMENT_MODE, { illegal: /\n/ })
        ];
        const STRING = { variants: [
          RAW_STRING,
          INTERPOLATED_VERBATIM_STRING,
          INTERPOLATED_STRING,
          VERBATIM_STRING,
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE
        ] };
        const GENERIC_MODIFIER = {
          begin: "<",
          end: ">",
          contains: [
            { beginKeywords: "in out" },
            TITLE_MODE
          ]
        };
        const TYPE_IDENT_RE = hljs.IDENT_RE + "(<" + hljs.IDENT_RE + "(\\s*,\\s*" + hljs.IDENT_RE + ")*>)?(\\[\\])?";
        const AT_IDENTIFIER = {
          // prevents expressions like `@class` from incorrect flagging
          // `class` as a keyword
          begin: "@" + hljs.IDENT_RE,
          relevance: 0
        };
        return {
          name: "C#",
          aliases: [
            "cs",
            "c#"
          ],
          keywords: KEYWORDS,
          illegal: /::/,
          contains: [
            hljs.COMMENT(
              "///",
              "$",
              {
                returnBegin: true,
                contains: [
                  {
                    className: "doctag",
                    variants: [
                      {
                        begin: "///",
                        relevance: 0
                      },
                      { begin: "<!--|-->" },
                      {
                        begin: "</?",
                        end: ">"
                      }
                    ]
                  }
                ]
              }
            ),
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            {
              className: "meta",
              begin: "#",
              end: "$",
              keywords: { keyword: "if else elif endif define undef warning error line region endregion pragma checksum" }
            },
            STRING,
            NUMBERS,
            {
              beginKeywords: "class interface",
              relevance: 0,
              end: /[{;=]/,
              illegal: /[^\s:,]/,
              contains: [
                { beginKeywords: "where class" },
                TITLE_MODE,
                GENERIC_MODIFIER,
                hljs.C_LINE_COMMENT_MODE,
                hljs.C_BLOCK_COMMENT_MODE
              ]
            },
            {
              beginKeywords: "namespace",
              relevance: 0,
              end: /[{;=]/,
              illegal: /[^\s:]/,
              contains: [
                TITLE_MODE,
                hljs.C_LINE_COMMENT_MODE,
                hljs.C_BLOCK_COMMENT_MODE
              ]
            },
            {
              beginKeywords: "record",
              relevance: 0,
              end: /[{;=]/,
              illegal: /[^\s:]/,
              contains: [
                TITLE_MODE,
                GENERIC_MODIFIER,
                hljs.C_LINE_COMMENT_MODE,
                hljs.C_BLOCK_COMMENT_MODE
              ]
            },
            {
              // [Attributes("")]
              className: "meta",
              begin: "^\\s*\\[(?=[\\w])",
              excludeBegin: true,
              end: "\\]",
              excludeEnd: true,
              contains: [
                {
                  className: "string",
                  begin: /"/,
                  end: /"/
                }
              ]
            },
            {
              // Expression keywords prevent 'keyword Name(...)' from being
              // recognized as a function definition
              beginKeywords: "new return throw await else",
              relevance: 0
            },
            {
              className: "function",
              begin: "(" + TYPE_IDENT_RE + "\\s+)+" + hljs.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
              returnBegin: true,
              end: /\s*[{;=]/,
              excludeEnd: true,
              keywords: KEYWORDS,
              contains: [
                // prevents these from being highlighted `title`
                {
                  beginKeywords: FUNCTION_MODIFIERS.join(" "),
                  relevance: 0
                },
                {
                  begin: hljs.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
                  returnBegin: true,
                  contains: [
                    hljs.TITLE_MODE,
                    GENERIC_MODIFIER
                  ],
                  relevance: 0
                },
                { match: /\(\)/ },
                {
                  className: "params",
                  begin: /\(/,
                  end: /\)/,
                  excludeBegin: true,
                  excludeEnd: true,
                  keywords: KEYWORDS,
                  relevance: 0,
                  contains: [
                    STRING,
                    NUMBERS,
                    hljs.C_BLOCK_COMMENT_MODE
                  ]
                },
                hljs.C_LINE_COMMENT_MODE,
                hljs.C_BLOCK_COMMENT_MODE
              ]
            },
            AT_IDENTIFIER
          ]
        };
      }
      module.exports = csharp;
    }
  });

  // node_modules/highlight.js/lib/languages/css.js
  var require_css = __commonJS({
    "node_modules/highlight.js/lib/languages/css.js"(exports, module) {
      var MODES = (hljs) => {
        return {
          IMPORTANT: {
            scope: "meta",
            begin: "!important"
          },
          BLOCK_COMMENT: hljs.C_BLOCK_COMMENT_MODE,
          HEXCOLOR: {
            scope: "number",
            begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
          },
          FUNCTION_DISPATCH: {
            className: "built_in",
            begin: /[\w-]+(?=\()/
          },
          ATTRIBUTE_SELECTOR_MODE: {
            scope: "selector-attr",
            begin: /\[/,
            end: /\]/,
            illegal: "$",
            contains: [
              hljs.APOS_STRING_MODE,
              hljs.QUOTE_STRING_MODE
            ]
          },
          CSS_NUMBER_MODE: {
            scope: "number",
            begin: hljs.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
            relevance: 0
          },
          CSS_VARIABLE: {
            className: "attr",
            begin: /--[A-Za-z_][A-Za-z0-9_-]*/
          }
        };
      };
      var HTML_TAGS = [
        "a",
        "abbr",
        "address",
        "article",
        "aside",
        "audio",
        "b",
        "blockquote",
        "body",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "dd",
        "del",
        "details",
        "dfn",
        "div",
        "dl",
        "dt",
        "em",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "header",
        "hgroup",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "label",
        "legend",
        "li",
        "main",
        "mark",
        "menu",
        "nav",
        "object",
        "ol",
        "optgroup",
        "option",
        "p",
        "picture",
        "q",
        "quote",
        "samp",
        "section",
        "select",
        "source",
        "span",
        "strong",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "tr",
        "ul",
        "var",
        "video"
      ];
      var SVG_TAGS = [
        "defs",
        "g",
        "marker",
        "mask",
        "pattern",
        "svg",
        "switch",
        "symbol",
        "feBlend",
        "feColorMatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feFlood",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMorphology",
        "feOffset",
        "feSpecularLighting",
        "feTile",
        "feTurbulence",
        "linearGradient",
        "radialGradient",
        "stop",
        "circle",
        "ellipse",
        "image",
        "line",
        "path",
        "polygon",
        "polyline",
        "rect",
        "text",
        "use",
        "textPath",
        "tspan",
        "foreignObject",
        "clipPath"
      ];
      var TAGS = [
        ...HTML_TAGS,
        ...SVG_TAGS
      ];
      var MEDIA_FEATURES = [
        "any-hover",
        "any-pointer",
        "aspect-ratio",
        "color",
        "color-gamut",
        "color-index",
        "device-aspect-ratio",
        "device-height",
        "device-width",
        "display-mode",
        "forced-colors",
        "grid",
        "height",
        "hover",
        "inverted-colors",
        "monochrome",
        "orientation",
        "overflow-block",
        "overflow-inline",
        "pointer",
        "prefers-color-scheme",
        "prefers-contrast",
        "prefers-reduced-motion",
        "prefers-reduced-transparency",
        "resolution",
        "scan",
        "scripting",
        "update",
        "width",
        // TODO: find a better solution?
        "min-width",
        "max-width",
        "min-height",
        "max-height"
      ].sort().reverse();
      var PSEUDO_CLASSES = [
        "active",
        "any-link",
        "blank",
        "checked",
        "current",
        "default",
        "defined",
        "dir",
        // dir()
        "disabled",
        "drop",
        "empty",
        "enabled",
        "first",
        "first-child",
        "first-of-type",
        "fullscreen",
        "future",
        "focus",
        "focus-visible",
        "focus-within",
        "has",
        // has()
        "host",
        // host or host()
        "host-context",
        // host-context()
        "hover",
        "indeterminate",
        "in-range",
        "invalid",
        "is",
        // is()
        "lang",
        // lang()
        "last-child",
        "last-of-type",
        "left",
        "link",
        "local-link",
        "not",
        // not()
        "nth-child",
        // nth-child()
        "nth-col",
        // nth-col()
        "nth-last-child",
        // nth-last-child()
        "nth-last-col",
        // nth-last-col()
        "nth-last-of-type",
        //nth-last-of-type()
        "nth-of-type",
        //nth-of-type()
        "only-child",
        "only-of-type",
        "optional",
        "out-of-range",
        "past",
        "placeholder-shown",
        "read-only",
        "read-write",
        "required",
        "right",
        "root",
        "scope",
        "target",
        "target-within",
        "user-invalid",
        "valid",
        "visited",
        "where"
        // where()
      ].sort().reverse();
      var PSEUDO_ELEMENTS = [
        "after",
        "backdrop",
        "before",
        "cue",
        "cue-region",
        "first-letter",
        "first-line",
        "grammar-error",
        "marker",
        "part",
        "placeholder",
        "selection",
        "slotted",
        "spelling-error"
      ].sort().reverse();
      var ATTRIBUTES = [
        "accent-color",
        "align-content",
        "align-items",
        "align-self",
        "alignment-baseline",
        "all",
        "animation",
        "animation-delay",
        "animation-direction",
        "animation-duration",
        "animation-fill-mode",
        "animation-iteration-count",
        "animation-name",
        "animation-play-state",
        "animation-timing-function",
        "appearance",
        "backface-visibility",
        "background",
        "background-attachment",
        "background-blend-mode",
        "background-clip",
        "background-color",
        "background-image",
        "background-origin",
        "background-position",
        "background-repeat",
        "background-size",
        "baseline-shift",
        "block-size",
        "border",
        "border-block",
        "border-block-color",
        "border-block-end",
        "border-block-end-color",
        "border-block-end-style",
        "border-block-end-width",
        "border-block-start",
        "border-block-start-color",
        "border-block-start-style",
        "border-block-start-width",
        "border-block-style",
        "border-block-width",
        "border-bottom",
        "border-bottom-color",
        "border-bottom-left-radius",
        "border-bottom-right-radius",
        "border-bottom-style",
        "border-bottom-width",
        "border-collapse",
        "border-color",
        "border-image",
        "border-image-outset",
        "border-image-repeat",
        "border-image-slice",
        "border-image-source",
        "border-image-width",
        "border-inline",
        "border-inline-color",
        "border-inline-end",
        "border-inline-end-color",
        "border-inline-end-style",
        "border-inline-end-width",
        "border-inline-start",
        "border-inline-start-color",
        "border-inline-start-style",
        "border-inline-start-width",
        "border-inline-style",
        "border-inline-width",
        "border-left",
        "border-left-color",
        "border-left-style",
        "border-left-width",
        "border-radius",
        "border-right",
        "border-end-end-radius",
        "border-end-start-radius",
        "border-right-color",
        "border-right-style",
        "border-right-width",
        "border-spacing",
        "border-start-end-radius",
        "border-start-start-radius",
        "border-style",
        "border-top",
        "border-top-color",
        "border-top-left-radius",
        "border-top-right-radius",
        "border-top-style",
        "border-top-width",
        "border-width",
        "bottom",
        "box-decoration-break",
        "box-shadow",
        "box-sizing",
        "break-after",
        "break-before",
        "break-inside",
        "cx",
        "cy",
        "caption-side",
        "caret-color",
        "clear",
        "clip",
        "clip-path",
        "clip-rule",
        "color",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "color-scheme",
        "column-count",
        "column-fill",
        "column-gap",
        "column-rule",
        "column-rule-color",
        "column-rule-style",
        "column-rule-width",
        "column-span",
        "column-width",
        "columns",
        "contain",
        "content",
        "content-visibility",
        "counter-increment",
        "counter-reset",
        "cue",
        "cue-after",
        "cue-before",
        "cursor",
        "direction",
        "display",
        "dominant-baseline",
        "empty-cells",
        "enable-background",
        "fill",
        "fill-opacity",
        "fill-rule",
        "filter",
        "flex",
        "flex-basis",
        "flex-direction",
        "flex-flow",
        "flex-grow",
        "flex-shrink",
        "flex-wrap",
        "float",
        "flow",
        "flood-color",
        "flood-opacity",
        "font",
        "font-display",
        "font-family",
        "font-feature-settings",
        "font-kerning",
        "font-language-override",
        "font-size",
        "font-size-adjust",
        "font-smoothing",
        "font-stretch",
        "font-style",
        "font-synthesis",
        "font-variant",
        "font-variant-caps",
        "font-variant-east-asian",
        "font-variant-ligatures",
        "font-variant-numeric",
        "font-variant-position",
        "font-variation-settings",
        "font-weight",
        "gap",
        "glyph-orientation-horizontal",
        "glyph-orientation-vertical",
        "grid",
        "grid-area",
        "grid-auto-columns",
        "grid-auto-flow",
        "grid-auto-rows",
        "grid-column",
        "grid-column-end",
        "grid-column-start",
        "grid-gap",
        "grid-row",
        "grid-row-end",
        "grid-row-start",
        "grid-template",
        "grid-template-areas",
        "grid-template-columns",
        "grid-template-rows",
        "hanging-punctuation",
        "height",
        "hyphens",
        "icon",
        "image-orientation",
        "image-rendering",
        "image-resolution",
        "ime-mode",
        "inline-size",
        "inset",
        "inset-block",
        "inset-block-end",
        "inset-block-start",
        "inset-inline",
        "inset-inline-end",
        "inset-inline-start",
        "isolation",
        "kerning",
        "justify-content",
        "justify-items",
        "justify-self",
        "left",
        "letter-spacing",
        "lighting-color",
        "line-break",
        "line-height",
        "list-style",
        "list-style-image",
        "list-style-position",
        "list-style-type",
        "marker",
        "marker-end",
        "marker-mid",
        "marker-start",
        "mask",
        "margin",
        "margin-block",
        "margin-block-end",
        "margin-block-start",
        "margin-bottom",
        "margin-inline",
        "margin-inline-end",
        "margin-inline-start",
        "margin-left",
        "margin-right",
        "margin-top",
        "marks",
        "mask",
        "mask-border",
        "mask-border-mode",
        "mask-border-outset",
        "mask-border-repeat",
        "mask-border-slice",
        "mask-border-source",
        "mask-border-width",
        "mask-clip",
        "mask-composite",
        "mask-image",
        "mask-mode",
        "mask-origin",
        "mask-position",
        "mask-repeat",
        "mask-size",
        "mask-type",
        "max-block-size",
        "max-height",
        "max-inline-size",
        "max-width",
        "min-block-size",
        "min-height",
        "min-inline-size",
        "min-width",
        "mix-blend-mode",
        "nav-down",
        "nav-index",
        "nav-left",
        "nav-right",
        "nav-up",
        "none",
        "normal",
        "object-fit",
        "object-position",
        "opacity",
        "order",
        "orphans",
        "outline",
        "outline-color",
        "outline-offset",
        "outline-style",
        "outline-width",
        "overflow",
        "overflow-wrap",
        "overflow-x",
        "overflow-y",
        "padding",
        "padding-block",
        "padding-block-end",
        "padding-block-start",
        "padding-bottom",
        "padding-inline",
        "padding-inline-end",
        "padding-inline-start",
        "padding-left",
        "padding-right",
        "padding-top",
        "page-break-after",
        "page-break-before",
        "page-break-inside",
        "pause",
        "pause-after",
        "pause-before",
        "perspective",
        "perspective-origin",
        "pointer-events",
        "position",
        "quotes",
        "r",
        "resize",
        "rest",
        "rest-after",
        "rest-before",
        "right",
        "rotate",
        "row-gap",
        "scale",
        "scroll-margin",
        "scroll-margin-block",
        "scroll-margin-block-end",
        "scroll-margin-block-start",
        "scroll-margin-bottom",
        "scroll-margin-inline",
        "scroll-margin-inline-end",
        "scroll-margin-inline-start",
        "scroll-margin-left",
        "scroll-margin-right",
        "scroll-margin-top",
        "scroll-padding",
        "scroll-padding-block",
        "scroll-padding-block-end",
        "scroll-padding-block-start",
        "scroll-padding-bottom",
        "scroll-padding-inline",
        "scroll-padding-inline-end",
        "scroll-padding-inline-start",
        "scroll-padding-left",
        "scroll-padding-right",
        "scroll-padding-top",
        "scroll-snap-align",
        "scroll-snap-stop",
        "scroll-snap-type",
        "scrollbar-color",
        "scrollbar-gutter",
        "scrollbar-width",
        "shape-image-threshold",
        "shape-margin",
        "shape-outside",
        "shape-rendering",
        "stop-color",
        "stop-opacity",
        "stroke",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke-width",
        "speak",
        "speak-as",
        "src",
        // @font-face
        "tab-size",
        "table-layout",
        "text-anchor",
        "text-align",
        "text-align-all",
        "text-align-last",
        "text-combine-upright",
        "text-decoration",
        "text-decoration-color",
        "text-decoration-line",
        "text-decoration-skip-ink",
        "text-decoration-style",
        "text-decoration-thickness",
        "text-emphasis",
        "text-emphasis-color",
        "text-emphasis-position",
        "text-emphasis-style",
        "text-indent",
        "text-justify",
        "text-orientation",
        "text-overflow",
        "text-rendering",
        "text-shadow",
        "text-transform",
        "text-underline-offset",
        "text-underline-position",
        "top",
        "transform",
        "transform-box",
        "transform-origin",
        "transform-style",
        "transition",
        "transition-delay",
        "transition-duration",
        "transition-property",
        "transition-timing-function",
        "translate",
        "unicode-bidi",
        "vector-effect",
        "vertical-align",
        "visibility",
        "voice-balance",
        "voice-duration",
        "voice-family",
        "voice-pitch",
        "voice-range",
        "voice-rate",
        "voice-stress",
        "voice-volume",
        "white-space",
        "widows",
        "width",
        "will-change",
        "word-break",
        "word-spacing",
        "word-wrap",
        "writing-mode",
        "x",
        "y",
        "z-index"
      ].sort().reverse();
      function css(hljs) {
        const regex = hljs.regex;
        const modes = MODES(hljs);
        const VENDOR_PREFIX = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ };
        const AT_MODIFIERS = "and or not only";
        const AT_PROPERTY_RE = /@-?\w[\w]*(-\w+)*/;
        const IDENT_RE = "[a-zA-Z-][a-zA-Z0-9_-]*";
        const STRINGS = [
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE
        ];
        return {
          name: "CSS",
          case_insensitive: true,
          illegal: /[=|'\$]/,
          keywords: { keyframePosition: "from to" },
          classNameAliases: {
            // for visual continuity with `tag {}` and because we
            // don't have a great class for this?
            keyframePosition: "selector-tag"
          },
          contains: [
            modes.BLOCK_COMMENT,
            VENDOR_PREFIX,
            // to recognize keyframe 40% etc which are outside the scope of our
            // attribute value mode
            modes.CSS_NUMBER_MODE,
            {
              className: "selector-id",
              begin: /#[A-Za-z0-9_-]+/,
              relevance: 0
            },
            {
              className: "selector-class",
              begin: "\\." + IDENT_RE,
              relevance: 0
            },
            modes.ATTRIBUTE_SELECTOR_MODE,
            {
              className: "selector-pseudo",
              variants: [
                { begin: ":(" + PSEUDO_CLASSES.join("|") + ")" },
                { begin: ":(:)?(" + PSEUDO_ELEMENTS.join("|") + ")" }
              ]
            },
            // we may actually need this (12/2020)
            // { // pseudo-selector params
            //   begin: /\(/,
            //   end: /\)/,
            //   contains: [ hljs.CSS_NUMBER_MODE ]
            // },
            modes.CSS_VARIABLE,
            {
              className: "attribute",
              begin: "\\b(" + ATTRIBUTES.join("|") + ")\\b"
            },
            // attribute values
            {
              begin: /:/,
              end: /[;}{]/,
              contains: [
                modes.BLOCK_COMMENT,
                modes.HEXCOLOR,
                modes.IMPORTANT,
                modes.CSS_NUMBER_MODE,
                ...STRINGS,
                // needed to highlight these as strings and to avoid issues with
                // illegal characters that might be inside urls that would tigger the
                // languages illegal stack
                {
                  begin: /(url|data-uri)\(/,
                  end: /\)/,
                  relevance: 0,
                  // from keywords
                  keywords: { built_in: "url data-uri" },
                  contains: [
                    ...STRINGS,
                    {
                      className: "string",
                      // any character other than `)` as in `url()` will be the start
                      // of a string, which ends with `)` (from the parent mode)
                      begin: /[^)]/,
                      endsWithParent: true,
                      excludeEnd: true
                    }
                  ]
                },
                modes.FUNCTION_DISPATCH
              ]
            },
            {
              begin: regex.lookahead(/@/),
              end: "[{;]",
              relevance: 0,
              illegal: /:/,
              // break on Less variables @var: ...
              contains: [
                {
                  className: "keyword",
                  begin: AT_PROPERTY_RE
                },
                {
                  begin: /\s/,
                  endsWithParent: true,
                  excludeEnd: true,
                  relevance: 0,
                  keywords: {
                    $pattern: /[a-z-]+/,
                    keyword: AT_MODIFIERS,
                    attribute: MEDIA_FEATURES.join(" ")
                  },
                  contains: [
                    {
                      begin: /[a-z-]+(?=:)/,
                      className: "attribute"
                    },
                    ...STRINGS,
                    modes.CSS_NUMBER_MODE
                  ]
                }
              ]
            },
            {
              className: "selector-tag",
              begin: "\\b(" + TAGS.join("|") + ")\\b"
            }
          ]
        };
      }
      module.exports = css;
    }
  });

  // node_modules/highlight.js/lib/languages/markdown.js
  var require_markdown = __commonJS({
    "node_modules/highlight.js/lib/languages/markdown.js"(exports, module) {
      function markdown(hljs) {
        const regex = hljs.regex;
        const INLINE_HTML = {
          begin: /<\/?[A-Za-z_]/,
          end: ">",
          subLanguage: "xml",
          relevance: 0
        };
        const HORIZONTAL_RULE = {
          begin: "^[-\\*]{3,}",
          end: "$"
        };
        const CODE = {
          className: "code",
          variants: [
            // TODO: fix to allow these to work with sublanguage also
            { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
            { begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
            // needed to allow markdown as a sublanguage to work
            {
              begin: "```",
              end: "```+[ ]*$"
            },
            {
              begin: "~~~",
              end: "~~~+[ ]*$"
            },
            { begin: "`.+?`" },
            {
              begin: "(?=^( {4}|\\t))",
              // use contains to gobble up multiple lines to allow the block to be whatever size
              // but only have a single open/close tag vs one per line
              contains: [
                {
                  begin: "^( {4}|\\t)",
                  end: "(\\n)$"
                }
              ],
              relevance: 0
            }
          ]
        };
        const LIST = {
          className: "bullet",
          begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
          end: "\\s+",
          excludeEnd: true
        };
        const LINK_REFERENCE = {
          begin: /^\[[^\n]+\]:/,
          returnBegin: true,
          contains: [
            {
              className: "symbol",
              begin: /\[/,
              end: /\]/,
              excludeBegin: true,
              excludeEnd: true
            },
            {
              className: "link",
              begin: /:\s*/,
              end: /$/,
              excludeBegin: true
            }
          ]
        };
        const URL_SCHEME = /[A-Za-z][A-Za-z0-9+.-]*/;
        const LINK = {
          variants: [
            // too much like nested array access in so many languages
            // to have any real relevance
            {
              begin: /\[.+?\]\[.*?\]/,
              relevance: 0
            },
            // popular internet URLs
            {
              begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
              relevance: 2
            },
            {
              begin: regex.concat(/\[.+?\]\(/, URL_SCHEME, /:\/\/.*?\)/),
              relevance: 2
            },
            // relative urls
            {
              begin: /\[.+?\]\([./?&#].*?\)/,
              relevance: 1
            },
            // whatever else, lower relevance (might not be a link at all)
            {
              begin: /\[.*?\]\(.*?\)/,
              relevance: 0
            }
          ],
          returnBegin: true,
          contains: [
            {
              // empty strings for alt or link text
              match: /\[(?=\])/
            },
            {
              className: "string",
              relevance: 0,
              begin: "\\[",
              end: "\\]",
              excludeBegin: true,
              returnEnd: true
            },
            {
              className: "link",
              relevance: 0,
              begin: "\\]\\(",
              end: "\\)",
              excludeBegin: true,
              excludeEnd: true
            },
            {
              className: "symbol",
              relevance: 0,
              begin: "\\]\\[",
              end: "\\]",
              excludeBegin: true,
              excludeEnd: true
            }
          ]
        };
        const BOLD = {
          className: "strong",
          contains: [],
          // defined later
          variants: [
            {
              begin: /_{2}(?!\s)/,
              end: /_{2}/
            },
            {
              begin: /\*{2}(?!\s)/,
              end: /\*{2}/
            }
          ]
        };
        const ITALIC = {
          className: "emphasis",
          contains: [],
          // defined later
          variants: [
            {
              begin: /\*(?![*\s])/,
              end: /\*/
            },
            {
              begin: /_(?![_\s])/,
              end: /_/,
              relevance: 0
            }
          ]
        };
        const BOLD_WITHOUT_ITALIC = hljs.inherit(BOLD, { contains: [] });
        const ITALIC_WITHOUT_BOLD = hljs.inherit(ITALIC, { contains: [] });
        BOLD.contains.push(ITALIC_WITHOUT_BOLD);
        ITALIC.contains.push(BOLD_WITHOUT_ITALIC);
        let CONTAINABLE = [
          INLINE_HTML,
          LINK
        ];
        [
          BOLD,
          ITALIC,
          BOLD_WITHOUT_ITALIC,
          ITALIC_WITHOUT_BOLD
        ].forEach((m2) => {
          m2.contains = m2.contains.concat(CONTAINABLE);
        });
        CONTAINABLE = CONTAINABLE.concat(BOLD, ITALIC);
        const HEADER = {
          className: "section",
          variants: [
            {
              begin: "^#{1,6}",
              end: "$",
              contains: CONTAINABLE
            },
            {
              begin: "(?=^.+?\\n[=-]{2,}$)",
              contains: [
                { begin: "^[=-]*$" },
                {
                  begin: "^",
                  end: "\\n",
                  contains: CONTAINABLE
                }
              ]
            }
          ]
        };
        const BLOCKQUOTE = {
          className: "quote",
          begin: "^>\\s+",
          contains: CONTAINABLE,
          end: "$"
        };
        const ENTITY = {
          //https://spec.commonmark.org/0.31.2/#entity-references
          scope: "literal",
          match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/
        };
        return {
          name: "Markdown",
          aliases: [
            "md",
            "mkdown",
            "mkd"
          ],
          contains: [
            HEADER,
            INLINE_HTML,
            LIST,
            BOLD,
            ITALIC,
            BLOCKQUOTE,
            CODE,
            HORIZONTAL_RULE,
            LINK,
            LINK_REFERENCE,
            ENTITY
          ]
        };
      }
      module.exports = markdown;
    }
  });

  // node_modules/highlight.js/lib/languages/diff.js
  var require_diff = __commonJS({
    "node_modules/highlight.js/lib/languages/diff.js"(exports, module) {
      function diff(hljs) {
        const regex = hljs.regex;
        return {
          name: "Diff",
          aliases: ["patch"],
          contains: [
            {
              className: "meta",
              relevance: 10,
              match: regex.either(
                /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,
                /^\*\*\* +\d+,\d+ +\*\*\*\*$/,
                /^--- +\d+,\d+ +----$/
              )
            },
            {
              className: "comment",
              variants: [
                {
                  begin: regex.either(
                    /Index: /,
                    /^index/,
                    /={3,}/,
                    /^-{3}/,
                    /^\*{3} /,
                    /^\+{3}/,
                    /^diff --git/
                  ),
                  end: /$/
                },
                { match: /^\*{15}$/ }
              ]
            },
            {
              className: "addition",
              begin: /^\+/,
              end: /$/
            },
            {
              className: "deletion",
              begin: /^-/,
              end: /$/
            },
            {
              className: "addition",
              begin: /^!/,
              end: /$/
            }
          ]
        };
      }
      module.exports = diff;
    }
  });

  // node_modules/highlight.js/lib/languages/ruby.js
  var require_ruby = __commonJS({
    "node_modules/highlight.js/lib/languages/ruby.js"(exports, module) {
      function ruby(hljs) {
        const regex = hljs.regex;
        const RUBY_METHOD_RE = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)";
        const CLASS_NAME_RE = regex.either(
          /\b([A-Z]+[a-z0-9]+)+/,
          // ends in caps
          /\b([A-Z]+[a-z0-9]+)+[A-Z]+/
        );
        const CLASS_NAME_WITH_NAMESPACE_RE = regex.concat(CLASS_NAME_RE, /(::\w+)*/);
        const PSEUDO_KWS = [
          "include",
          "extend",
          "prepend",
          "public",
          "private",
          "protected",
          "raise",
          "throw"
        ];
        const RUBY_KEYWORDS = {
          "variable.constant": [
            "__FILE__",
            "__LINE__",
            "__ENCODING__"
          ],
          "variable.language": [
            "self",
            "super"
          ],
          keyword: [
            "alias",
            "and",
            "begin",
            "BEGIN",
            "break",
            "case",
            "class",
            "defined",
            "do",
            "else",
            "elsif",
            "end",
            "END",
            "ensure",
            "for",
            "if",
            "in",
            "module",
            "next",
            "not",
            "or",
            "redo",
            "require",
            "rescue",
            "retry",
            "return",
            "then",
            "undef",
            "unless",
            "until",
            "when",
            "while",
            "yield",
            ...PSEUDO_KWS
          ],
          built_in: [
            "proc",
            "lambda",
            "attr_accessor",
            "attr_reader",
            "attr_writer",
            "define_method",
            "private_constant",
            "module_function"
          ],
          literal: [
            "true",
            "false",
            "nil"
          ]
        };
        const YARDOCTAG = {
          className: "doctag",
          begin: "@[A-Za-z]+"
        };
        const IRB_OBJECT = {
          begin: "#<",
          end: ">"
        };
        const COMMENT_MODES = [
          hljs.COMMENT(
            "#",
            "$",
            { contains: [YARDOCTAG] }
          ),
          hljs.COMMENT(
            "^=begin",
            "^=end",
            {
              contains: [YARDOCTAG],
              relevance: 10
            }
          ),
          hljs.COMMENT("^__END__", hljs.MATCH_NOTHING_RE)
        ];
        const SUBST = {
          className: "subst",
          begin: /#\{/,
          end: /\}/,
          keywords: RUBY_KEYWORDS
        };
        const STRING = {
          className: "string",
          contains: [
            hljs.BACKSLASH_ESCAPE,
            SUBST
          ],
          variants: [
            {
              begin: /'/,
              end: /'/
            },
            {
              begin: /"/,
              end: /"/
            },
            {
              begin: /`/,
              end: /`/
            },
            {
              begin: /%[qQwWx]?\(/,
              end: /\)/
            },
            {
              begin: /%[qQwWx]?\[/,
              end: /\]/
            },
            {
              begin: /%[qQwWx]?\{/,
              end: /\}/
            },
            {
              begin: /%[qQwWx]?</,
              end: />/
            },
            {
              begin: /%[qQwWx]?\//,
              end: /\//
            },
            {
              begin: /%[qQwWx]?%/,
              end: /%/
            },
            {
              begin: /%[qQwWx]?-/,
              end: /-/
            },
            {
              begin: /%[qQwWx]?\|/,
              end: /\|/
            },
            // in the following expressions, \B in the beginning suppresses recognition of ?-sequences
            // where ? is the last character of a preceding identifier, as in: `func?4`
            { begin: /\B\?(\\\d{1,3})/ },
            { begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
            { begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/ },
            { begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/ },
            { begin: /\B\?\\(c|C-)[\x20-\x7e]/ },
            { begin: /\B\?\\?\S/ },
            // heredocs
            {
              // this guard makes sure that we have an entire heredoc and not a false
              // positive (auto-detect, etc.)
              begin: regex.concat(
                /<<[-~]?'?/,
                regex.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)
              ),
              contains: [
                hljs.END_SAME_AS_BEGIN({
                  begin: /(\w+)/,
                  end: /(\w+)/,
                  contains: [
                    hljs.BACKSLASH_ESCAPE,
                    SUBST
                  ]
                })
              ]
            }
          ]
        };
        const decimal = "[1-9](_?[0-9])*|0";
        const digits = "[0-9](_?[0-9])*";
        const NUMBER = {
          className: "number",
          relevance: 0,
          variants: [
            // decimal integer/float, optionally exponential or rational, optionally imaginary
            { begin: `\\b(${decimal})(\\.(${digits}))?([eE][+-]?(${digits})|r)?i?\\b` },
            // explicit decimal/binary/octal/hexadecimal integer,
            // optionally rational and/or imaginary
            { begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b" },
            { begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b" },
            { begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b" },
            { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b" },
            // 0-prefixed implicit octal integer, optionally rational and/or imaginary
            { begin: "\\b0(_?[0-7])+r?i?\\b" }
          ]
        };
        const PARAMS = {
          variants: [
            {
              match: /\(\)/
            },
            {
              className: "params",
              begin: /\(/,
              end: /(?=\))/,
              excludeBegin: true,
              endsParent: true,
              keywords: RUBY_KEYWORDS
            }
          ]
        };
        const INCLUDE_EXTEND = {
          match: [
            /(include|extend)\s+/,
            CLASS_NAME_WITH_NAMESPACE_RE
          ],
          scope: {
            2: "title.class"
          },
          keywords: RUBY_KEYWORDS
        };
        const CLASS_DEFINITION = {
          variants: [
            {
              match: [
                /class\s+/,
                CLASS_NAME_WITH_NAMESPACE_RE,
                /\s+<\s+/,
                CLASS_NAME_WITH_NAMESPACE_RE
              ]
            },
            {
              match: [
                /\b(class|module)\s+/,
                CLASS_NAME_WITH_NAMESPACE_RE
              ]
            }
          ],
          scope: {
            2: "title.class",
            4: "title.class.inherited"
          },
          keywords: RUBY_KEYWORDS
        };
        const UPPER_CASE_CONSTANT = {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        };
        const METHOD_DEFINITION = {
          match: [
            /def/,
            /\s+/,
            RUBY_METHOD_RE
          ],
          scope: {
            1: "keyword",
            3: "title.function"
          },
          contains: [
            PARAMS
          ]
        };
        const OBJECT_CREATION = {
          relevance: 0,
          match: [
            CLASS_NAME_WITH_NAMESPACE_RE,
            /\.new[. (]/
          ],
          scope: {
            1: "title.class"
          }
        };
        const CLASS_REFERENCE = {
          relevance: 0,
          match: CLASS_NAME_RE,
          scope: "title.class"
        };
        const RUBY_DEFAULT_CONTAINS = [
          STRING,
          CLASS_DEFINITION,
          INCLUDE_EXTEND,
          OBJECT_CREATION,
          UPPER_CASE_CONSTANT,
          CLASS_REFERENCE,
          METHOD_DEFINITION,
          {
            // swallow namespace qualifiers before symbols
            begin: hljs.IDENT_RE + "::"
          },
          {
            className: "symbol",
            begin: hljs.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
            relevance: 0
          },
          {
            className: "symbol",
            begin: ":(?!\\s)",
            contains: [
              STRING,
              { begin: RUBY_METHOD_RE }
            ],
            relevance: 0
          },
          NUMBER,
          {
            // negative-look forward attempts to prevent false matches like:
            // @ident@ or $ident$ that might indicate this is not ruby at all
            className: "variable",
            begin: `(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])`
          },
          {
            className: "params",
            begin: /\|/,
            end: /\|/,
            excludeBegin: true,
            excludeEnd: true,
            relevance: 0,
            // this could be a lot of things (in other languages) other than params
            keywords: RUBY_KEYWORDS
          },
          {
            // regexp container
            begin: "(" + hljs.RE_STARTERS_RE + "|unless)\\s*",
            keywords: "unless",
            contains: [
              {
                className: "regexp",
                contains: [
                  hljs.BACKSLASH_ESCAPE,
                  SUBST
                ],
                illegal: /\n/,
                variants: [
                  {
                    begin: "/",
                    end: "/[a-z]*"
                  },
                  {
                    begin: /%r\{/,
                    end: /\}[a-z]*/
                  },
                  {
                    begin: "%r\\(",
                    end: "\\)[a-z]*"
                  },
                  {
                    begin: "%r!",
                    end: "![a-z]*"
                  },
                  {
                    begin: "%r\\[",
                    end: "\\][a-z]*"
                  }
                ]
              }
            ].concat(IRB_OBJECT, COMMENT_MODES),
            relevance: 0
          }
        ].concat(IRB_OBJECT, COMMENT_MODES);
        SUBST.contains = RUBY_DEFAULT_CONTAINS;
        PARAMS.contains = RUBY_DEFAULT_CONTAINS;
        const SIMPLE_PROMPT = "[>?]>";
        const DEFAULT_PROMPT = "[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]";
        const RVM_PROMPT = "(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>";
        const IRB_DEFAULT = [
          {
            begin: /^\s*=>/,
            starts: {
              end: "$",
              contains: RUBY_DEFAULT_CONTAINS
            }
          },
          {
            className: "meta.prompt",
            begin: "^(" + SIMPLE_PROMPT + "|" + DEFAULT_PROMPT + "|" + RVM_PROMPT + ")(?=[ ])",
            starts: {
              end: "$",
              keywords: RUBY_KEYWORDS,
              contains: RUBY_DEFAULT_CONTAINS
            }
          }
        ];
        COMMENT_MODES.unshift(IRB_OBJECT);
        return {
          name: "Ruby",
          aliases: [
            "rb",
            "gemspec",
            "podspec",
            "thor",
            "irb"
          ],
          keywords: RUBY_KEYWORDS,
          illegal: /\/\*/,
          contains: [hljs.SHEBANG({ binary: "ruby" })].concat(IRB_DEFAULT).concat(COMMENT_MODES).concat(RUBY_DEFAULT_CONTAINS)
        };
      }
      module.exports = ruby;
    }
  });

  // node_modules/highlight.js/lib/languages/go.js
  var require_go = __commonJS({
    "node_modules/highlight.js/lib/languages/go.js"(exports, module) {
      function go(hljs) {
        const LITERALS = [
          "true",
          "false",
          "iota",
          "nil"
        ];
        const BUILT_INS = [
          "append",
          "cap",
          "close",
          "complex",
          "copy",
          "imag",
          "len",
          "make",
          "new",
          "panic",
          "print",
          "println",
          "real",
          "recover",
          "delete"
        ];
        const TYPES = [
          "bool",
          "byte",
          "complex64",
          "complex128",
          "error",
          "float32",
          "float64",
          "int8",
          "int16",
          "int32",
          "int64",
          "string",
          "uint8",
          "uint16",
          "uint32",
          "uint64",
          "int",
          "uint",
          "uintptr",
          "rune"
        ];
        const KWS = [
          "break",
          "case",
          "chan",
          "const",
          "continue",
          "default",
          "defer",
          "else",
          "fallthrough",
          "for",
          "func",
          "go",
          "goto",
          "if",
          "import",
          "interface",
          "map",
          "package",
          "range",
          "return",
          "select",
          "struct",
          "switch",
          "type",
          "var"
        ];
        const KEYWORDS = {
          keyword: KWS,
          type: TYPES,
          literal: LITERALS,
          built_in: BUILT_INS
        };
        return {
          name: "Go",
          aliases: ["golang"],
          keywords: KEYWORDS,
          illegal: "</",
          contains: [
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            {
              className: "string",
              variants: [
                hljs.QUOTE_STRING_MODE,
                hljs.APOS_STRING_MODE,
                {
                  begin: "`",
                  end: "`"
                }
              ]
            },
            {
              className: "number",
              variants: [
                {
                  match: /-?\b0[xX]\.[a-fA-F0-9](_?[a-fA-F0-9])*[pP][+-]?\d(_?\d)*i?/,
                  // hex without a present digit before . (making a digit afterwards required)
                  relevance: 0
                },
                {
                  match: /-?\b0[xX](_?[a-fA-F0-9])+((\.([a-fA-F0-9](_?[a-fA-F0-9])*)?)?[pP][+-]?\d(_?\d)*)?i?/,
                  // hex with a present digit before . (making a digit afterwards optional)
                  relevance: 0
                },
                {
                  match: /-?\b0[oO](_?[0-7])*i?/,
                  // leading 0o octal
                  relevance: 0
                },
                {
                  match: /-?\.\d(_?\d)*([eE][+-]?\d(_?\d)*)?i?/,
                  // decimal without a present digit before . (making a digit afterwards required)
                  relevance: 0
                },
                {
                  match: /-?\b\d(_?\d)*(\.(\d(_?\d)*)?)?([eE][+-]?\d(_?\d)*)?i?/,
                  // decimal with a present digit before . (making a digit afterwards optional)
                  relevance: 0
                }
              ]
            },
            {
              begin: /:=/
              // relevance booster
            },
            {
              className: "function",
              beginKeywords: "func",
              end: "\\s*(\\{|$)",
              excludeEnd: true,
              contains: [
                hljs.TITLE_MODE,
                {
                  className: "params",
                  begin: /\(/,
                  end: /\)/,
                  endsParent: true,
                  keywords: KEYWORDS,
                  illegal: /["']/
                }
              ]
            }
          ]
        };
      }
      module.exports = go;
    }
  });

  // node_modules/highlight.js/lib/languages/graphql.js
  var require_graphql = __commonJS({
    "node_modules/highlight.js/lib/languages/graphql.js"(exports, module) {
      function graphql(hljs) {
        const regex = hljs.regex;
        const GQL_NAME = /[_A-Za-z][_0-9A-Za-z]*/;
        return {
          name: "GraphQL",
          aliases: ["gql"],
          case_insensitive: true,
          disableAutodetect: false,
          keywords: {
            keyword: [
              "query",
              "mutation",
              "subscription",
              "type",
              "input",
              "schema",
              "directive",
              "interface",
              "union",
              "scalar",
              "fragment",
              "enum",
              "on"
            ],
            literal: [
              "true",
              "false",
              "null"
            ]
          },
          contains: [
            hljs.HASH_COMMENT_MODE,
            hljs.QUOTE_STRING_MODE,
            hljs.NUMBER_MODE,
            {
              scope: "punctuation",
              match: /[.]{3}/,
              relevance: 0
            },
            {
              scope: "punctuation",
              begin: /[\!\(\)\:\=\[\]\{\|\}]{1}/,
              relevance: 0
            },
            {
              scope: "variable",
              begin: /\$/,
              end: /\W/,
              excludeEnd: true,
              relevance: 0
            },
            {
              scope: "meta",
              match: /@\w+/,
              excludeEnd: true
            },
            {
              scope: "symbol",
              begin: regex.concat(GQL_NAME, regex.lookahead(/\s*:/)),
              relevance: 0
            }
          ],
          illegal: [
            /[;<']/,
            /BEGIN/
          ]
        };
      }
      module.exports = graphql;
    }
  });

  // node_modules/highlight.js/lib/languages/ini.js
  var require_ini = __commonJS({
    "node_modules/highlight.js/lib/languages/ini.js"(exports, module) {
      function ini(hljs) {
        const regex = hljs.regex;
        const NUMBERS = {
          className: "number",
          relevance: 0,
          variants: [
            { begin: /([+-]+)?[\d]+_[\d_]+/ },
            { begin: hljs.NUMBER_RE }
          ]
        };
        const COMMENTS = hljs.COMMENT();
        COMMENTS.variants = [
          {
            begin: /;/,
            end: /$/
          },
          {
            begin: /#/,
            end: /$/
          }
        ];
        const VARIABLES = {
          className: "variable",
          variants: [
            { begin: /\$[\w\d"][\w\d_]*/ },
            { begin: /\$\{(.*?)\}/ }
          ]
        };
        const LITERALS = {
          className: "literal",
          begin: /\bon|off|true|false|yes|no\b/
        };
        const STRINGS = {
          className: "string",
          contains: [hljs.BACKSLASH_ESCAPE],
          variants: [
            {
              begin: "'''",
              end: "'''",
              relevance: 10
            },
            {
              begin: '"""',
              end: '"""',
              relevance: 10
            },
            {
              begin: '"',
              end: '"'
            },
            {
              begin: "'",
              end: "'"
            }
          ]
        };
        const ARRAY = {
          begin: /\[/,
          end: /\]/,
          contains: [
            COMMENTS,
            LITERALS,
            VARIABLES,
            STRINGS,
            NUMBERS,
            "self"
          ],
          relevance: 0
        };
        const BARE_KEY = /[A-Za-z0-9_-]+/;
        const QUOTED_KEY_DOUBLE_QUOTE = /"(\\"|[^"])*"/;
        const QUOTED_KEY_SINGLE_QUOTE = /'[^']*'/;
        const ANY_KEY = regex.either(
          BARE_KEY,
          QUOTED_KEY_DOUBLE_QUOTE,
          QUOTED_KEY_SINGLE_QUOTE
        );
        const DOTTED_KEY = regex.concat(
          ANY_KEY,
          "(\\s*\\.\\s*",
          ANY_KEY,
          ")*",
          regex.lookahead(/\s*=\s*[^#\s]/)
        );
        return {
          name: "TOML, also INI",
          aliases: ["toml"],
          case_insensitive: true,
          illegal: /\S/,
          contains: [
            COMMENTS,
            {
              className: "section",
              begin: /\[+/,
              end: /\]+/
            },
            {
              begin: DOTTED_KEY,
              className: "attr",
              starts: {
                end: /$/,
                contains: [
                  COMMENTS,
                  ARRAY,
                  LITERALS,
                  VARIABLES,
                  STRINGS,
                  NUMBERS
                ]
              }
            }
          ]
        };
      }
      module.exports = ini;
    }
  });

  // node_modules/highlight.js/lib/languages/java.js
  var require_java = __commonJS({
    "node_modules/highlight.js/lib/languages/java.js"(exports, module) {
      var decimalDigits = "[0-9](_*[0-9])*";
      var frac = `\\.(${decimalDigits})`;
      var hexDigits = "[0-9a-fA-F](_*[0-9a-fA-F])*";
      var NUMERIC = {
        className: "number",
        variants: [
          // DecimalFloatingPointLiteral
          // including ExponentPart
          { begin: `(\\b(${decimalDigits})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})[fFdD]?\\b` },
          // excluding ExponentPart
          { begin: `\\b(${decimalDigits})((${frac})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
          { begin: `(${frac})[fFdD]?\\b` },
          { begin: `\\b(${decimalDigits})[fFdD]\\b` },
          // HexadecimalFloatingPointLiteral
          { begin: `\\b0[xX]((${hexDigits})\\.?|(${hexDigits})?\\.(${hexDigits}))[pP][+-]?(${decimalDigits})[fFdD]?\\b` },
          // DecimalIntegerLiteral
          { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
          // HexIntegerLiteral
          { begin: `\\b0[xX](${hexDigits})[lL]?\\b` },
          // OctalIntegerLiteral
          { begin: "\\b0(_*[0-7])*[lL]?\\b" },
          // BinaryIntegerLiteral
          { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
        ],
        relevance: 0
      };
      function recurRegex(re, substitution, depth) {
        if (depth === -1) return "";
        return re.replace(substitution, (_2) => {
          return recurRegex(re, substitution, depth - 1);
        });
      }
      function java(hljs) {
        const regex = hljs.regex;
        const JAVA_IDENT_RE = "[\xC0-\u02B8a-zA-Z_$][\xC0-\u02B8a-zA-Z_$0-9]*";
        const GENERIC_IDENT_RE = JAVA_IDENT_RE + recurRegex("(?:<" + JAVA_IDENT_RE + "~~~(?:\\s*,\\s*" + JAVA_IDENT_RE + "~~~)*>)?", /~~~/g, 2);
        const MAIN_KEYWORDS = [
          "synchronized",
          "abstract",
          "private",
          "var",
          "static",
          "if",
          "const ",
          "for",
          "while",
          "strictfp",
          "finally",
          "protected",
          "import",
          "native",
          "final",
          "void",
          "enum",
          "else",
          "break",
          "transient",
          "catch",
          "instanceof",
          "volatile",
          "case",
          "assert",
          "package",
          "default",
          "public",
          "try",
          "switch",
          "continue",
          "throws",
          "protected",
          "public",
          "private",
          "module",
          "requires",
          "exports",
          "do",
          "sealed",
          "yield",
          "permits",
          "goto"
        ];
        const BUILT_INS = [
          "super",
          "this"
        ];
        const LITERALS = [
          "false",
          "true",
          "null"
        ];
        const TYPES = [
          "char",
          "boolean",
          "long",
          "float",
          "int",
          "byte",
          "short",
          "double"
        ];
        const KEYWORDS = {
          keyword: MAIN_KEYWORDS,
          literal: LITERALS,
          type: TYPES,
          built_in: BUILT_INS
        };
        const ANNOTATION = {
          className: "meta",
          begin: "@" + JAVA_IDENT_RE,
          contains: [
            {
              begin: /\(/,
              end: /\)/,
              contains: ["self"]
              // allow nested () inside our annotation
            }
          ]
        };
        const PARAMS = {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: KEYWORDS,
          relevance: 0,
          contains: [hljs.C_BLOCK_COMMENT_MODE],
          endsParent: true
        };
        return {
          name: "Java",
          aliases: ["jsp"],
          keywords: KEYWORDS,
          illegal: /<\/|#/,
          contains: [
            hljs.COMMENT(
              "/\\*\\*",
              "\\*/",
              {
                relevance: 0,
                contains: [
                  {
                    // eat up @'s in emails to prevent them to be recognized as doctags
                    begin: /\w+@/,
                    relevance: 0
                  },
                  {
                    className: "doctag",
                    begin: "@[A-Za-z]+"
                  }
                ]
              }
            ),
            // relevance boost
            {
              begin: /import java\.[a-z]+\./,
              keywords: "import",
              relevance: 2
            },
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            {
              begin: /"""/,
              end: /"""/,
              className: "string",
              contains: [hljs.BACKSLASH_ESCAPE]
            },
            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE,
            {
              match: [
                /\b(?:class|interface|enum|extends|implements|new)/,
                /\s+/,
                JAVA_IDENT_RE
              ],
              className: {
                1: "keyword",
                3: "title.class"
              }
            },
            {
              // Exceptions for hyphenated keywords
              match: /non-sealed/,
              scope: "keyword"
            },
            {
              begin: [
                regex.concat(/(?!else)/, JAVA_IDENT_RE),
                /\s+/,
                JAVA_IDENT_RE,
                /\s+/,
                /=(?!=)/
              ],
              className: {
                1: "type",
                3: "variable",
                5: "operator"
              }
            },
            {
              begin: [
                /record/,
                /\s+/,
                JAVA_IDENT_RE
              ],
              className: {
                1: "keyword",
                3: "title.class"
              },
              contains: [
                PARAMS,
                hljs.C_LINE_COMMENT_MODE,
                hljs.C_BLOCK_COMMENT_MODE
              ]
            },
            {
              // Expression keywords prevent 'keyword Name(...)' from being
              // recognized as a function definition
              beginKeywords: "new throw return else",
              relevance: 0
            },
            {
              begin: [
                "(?:" + GENERIC_IDENT_RE + "\\s+)",
                hljs.UNDERSCORE_IDENT_RE,
                /\s*(?=\()/
              ],
              className: { 2: "title.function" },
              keywords: KEYWORDS,
              contains: [
                {
                  className: "params",
                  begin: /\(/,
                  end: /\)/,
                  keywords: KEYWORDS,
                  relevance: 0,
                  contains: [
                    ANNOTATION,
                    hljs.APOS_STRING_MODE,
                    hljs.QUOTE_STRING_MODE,
                    NUMERIC,
                    hljs.C_BLOCK_COMMENT_MODE
                  ]
                },
                hljs.C_LINE_COMMENT_MODE,
                hljs.C_BLOCK_COMMENT_MODE
              ]
            },
            NUMERIC,
            ANNOTATION
          ]
        };
      }
      module.exports = java;
    }
  });

  // node_modules/highlight.js/lib/languages/javascript.js
  var require_javascript = __commonJS({
    "node_modules/highlight.js/lib/languages/javascript.js"(exports, module) {
      var IDENT_RE = "[A-Za-z$_][0-9A-Za-z$_]*";
      var KEYWORDS = [
        "as",
        // for exports
        "in",
        "of",
        "if",
        "for",
        "while",
        "finally",
        "var",
        "new",
        "function",
        "do",
        "return",
        "void",
        "else",
        "break",
        "catch",
        "instanceof",
        "with",
        "throw",
        "case",
        "default",
        "try",
        "switch",
        "continue",
        "typeof",
        "delete",
        "let",
        "yield",
        "const",
        "class",
        // JS handles these with a special rule
        // "get",
        // "set",
        "debugger",
        "async",
        "await",
        "static",
        "import",
        "from",
        "export",
        "extends"
      ];
      var LITERALS = [
        "true",
        "false",
        "null",
        "undefined",
        "NaN",
        "Infinity"
      ];
      var TYPES = [
        // Fundamental objects
        "Object",
        "Function",
        "Boolean",
        "Symbol",
        // numbers and dates
        "Math",
        "Date",
        "Number",
        "BigInt",
        // text
        "String",
        "RegExp",
        // Indexed collections
        "Array",
        "Float32Array",
        "Float64Array",
        "Int8Array",
        "Uint8Array",
        "Uint8ClampedArray",
        "Int16Array",
        "Int32Array",
        "Uint16Array",
        "Uint32Array",
        "BigInt64Array",
        "BigUint64Array",
        // Keyed collections
        "Set",
        "Map",
        "WeakSet",
        "WeakMap",
        // Structured data
        "ArrayBuffer",
        "SharedArrayBuffer",
        "Atomics",
        "DataView",
        "JSON",
        // Control abstraction objects
        "Promise",
        "Generator",
        "GeneratorFunction",
        "AsyncFunction",
        // Reflection
        "Reflect",
        "Proxy",
        // Internationalization
        "Intl",
        // WebAssembly
        "WebAssembly"
      ];
      var ERROR_TYPES = [
        "Error",
        "EvalError",
        "InternalError",
        "RangeError",
        "ReferenceError",
        "SyntaxError",
        "TypeError",
        "URIError"
      ];
      var BUILT_IN_GLOBALS = [
        "setInterval",
        "setTimeout",
        "clearInterval",
        "clearTimeout",
        "require",
        "exports",
        "eval",
        "isFinite",
        "isNaN",
        "parseFloat",
        "parseInt",
        "decodeURI",
        "decodeURIComponent",
        "encodeURI",
        "encodeURIComponent",
        "escape",
        "unescape"
      ];
      var BUILT_IN_VARIABLES = [
        "arguments",
        "this",
        "super",
        "console",
        "window",
        "document",
        "localStorage",
        "sessionStorage",
        "module",
        "global"
        // Node.js
      ];
      var BUILT_INS = [].concat(
        BUILT_IN_GLOBALS,
        TYPES,
        ERROR_TYPES
      );
      function javascript(hljs) {
        const regex = hljs.regex;
        const hasClosingTag = (match, { after }) => {
          const tag = "</" + match[0].slice(1);
          const pos = match.input.indexOf(tag, after);
          return pos !== -1;
        };
        const IDENT_RE$1 = IDENT_RE;
        const FRAGMENT = {
          begin: "<>",
          end: "</>"
        };
        const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
        const XML_TAG = {
          begin: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          /**
           * @param {RegExpMatchArray} match
           * @param {CallbackResponse} response
           */
          isTrulyOpeningTag: (match, response) => {
            const afterMatchIndex = match[0].length + match.index;
            const nextChar = match.input[afterMatchIndex];
            if (
              // HTML should not include another raw `<` inside a tag
              // nested type?
              // `<Array<Array<number>>`, etc.
              nextChar === "<" || // the , gives away that this is not HTML
              // `<T, A extends keyof T, V>`
              nextChar === ","
            ) {
              response.ignoreMatch();
              return;
            }
            if (nextChar === ">") {
              if (!hasClosingTag(match, { after: afterMatchIndex })) {
                response.ignoreMatch();
              }
            }
            let m2;
            const afterMatch = match.input.substring(afterMatchIndex);
            if (m2 = afterMatch.match(/^\s*=/)) {
              response.ignoreMatch();
              return;
            }
            if (m2 = afterMatch.match(/^\s+extends\s+/)) {
              if (m2.index === 0) {
                response.ignoreMatch();
                return;
              }
            }
          }
        };
        const KEYWORDS$1 = {
          $pattern: IDENT_RE,
          keyword: KEYWORDS,
          literal: LITERALS,
          built_in: BUILT_INS,
          "variable.language": BUILT_IN_VARIABLES
        };
        const decimalDigits = "[0-9](_?[0-9])*";
        const frac = `\\.(${decimalDigits})`;
        const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
        const NUMBER = {
          className: "number",
          variants: [
            // DecimalLiteral
            { begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})\\b` },
            { begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },
            // DecimalBigIntegerLiteral
            { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
            // NonDecimalIntegerLiteral
            { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
            { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
            { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
            // LegacyOctalIntegerLiteral (does not include underscore separators)
            // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
            { begin: "\\b0[0-7]+n?\\b" }
          ],
          relevance: 0
        };
        const SUBST = {
          className: "subst",
          begin: "\\$\\{",
          end: "\\}",
          keywords: KEYWORDS$1,
          contains: []
          // defined later
        };
        const HTML_TEMPLATE = {
          begin: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: false,
            contains: [
              hljs.BACKSLASH_ESCAPE,
              SUBST
            ],
            subLanguage: "xml"
          }
        };
        const CSS_TEMPLATE = {
          begin: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: false,
            contains: [
              hljs.BACKSLASH_ESCAPE,
              SUBST
            ],
            subLanguage: "css"
          }
        };
        const GRAPHQL_TEMPLATE = {
          begin: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: false,
            contains: [
              hljs.BACKSLASH_ESCAPE,
              SUBST
            ],
            subLanguage: "graphql"
          }
        };
        const TEMPLATE_STRING = {
          className: "string",
          begin: "`",
          end: "`",
          contains: [
            hljs.BACKSLASH_ESCAPE,
            SUBST
          ]
        };
        const JSDOC_COMMENT = hljs.COMMENT(
          /\/\*\*(?!\/)/,
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                begin: "(?=@[A-Za-z]+)",
                relevance: 0,
                contains: [
                  {
                    className: "doctag",
                    begin: "@[A-Za-z]+"
                  },
                  {
                    className: "type",
                    begin: "\\{",
                    end: "\\}",
                    excludeEnd: true,
                    excludeBegin: true,
                    relevance: 0
                  },
                  {
                    className: "variable",
                    begin: IDENT_RE$1 + "(?=\\s*(-)|$)",
                    endsParent: true,
                    relevance: 0
                  },
                  // eat spaces (not newlines) so we can find
                  // types or variables
                  {
                    begin: /(?=[^\n])\s/,
                    relevance: 0
                  }
                ]
              }
            ]
          }
        );
        const COMMENT = {
          className: "comment",
          variants: [
            JSDOC_COMMENT,
            hljs.C_BLOCK_COMMENT_MODE,
            hljs.C_LINE_COMMENT_MODE
          ]
        };
        const SUBST_INTERNALS = [
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          HTML_TEMPLATE,
          CSS_TEMPLATE,
          GRAPHQL_TEMPLATE,
          TEMPLATE_STRING,
          // Skip numbers when they are part of a variable name
          { match: /\$\d+/ },
          NUMBER
          // This is intentional:
          // See https://github.com/highlightjs/highlight.js/issues/3288
          // hljs.REGEXP_MODE
        ];
        SUBST.contains = SUBST_INTERNALS.concat({
          // we need to pair up {} inside our subst to prevent
          // it from ending too early by matching another }
          begin: /\{/,
          end: /\}/,
          keywords: KEYWORDS$1,
          contains: [
            "self"
          ].concat(SUBST_INTERNALS)
        });
        const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
        const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
          // eat recursive parens in sub expressions
          {
            begin: /(\s*)\(/,
            end: /\)/,
            keywords: KEYWORDS$1,
            contains: ["self"].concat(SUBST_AND_COMMENTS)
          }
        ]);
        const PARAMS = {
          className: "params",
          // convert this to negative lookbehind in v12
          begin: /(\s*)\(/,
          // to match the parms with 
          end: /\)/,
          excludeBegin: true,
          excludeEnd: true,
          keywords: KEYWORDS$1,
          contains: PARAMS_CONTAINS
        };
        const CLASS_OR_EXTENDS = {
          variants: [
            // class Car extends vehicle
            {
              match: [
                /class/,
                /\s+/,
                IDENT_RE$1,
                /\s+/,
                /extends/,
                /\s+/,
                regex.concat(IDENT_RE$1, "(", regex.concat(/\./, IDENT_RE$1), ")*")
              ],
              scope: {
                1: "keyword",
                3: "title.class",
                5: "keyword",
                7: "title.class.inherited"
              }
            },
            // class Car
            {
              match: [
                /class/,
                /\s+/,
                IDENT_RE$1
              ],
              scope: {
                1: "keyword",
                3: "title.class"
              }
            }
          ]
        };
        const CLASS_REFERENCE = {
          relevance: 0,
          match: regex.either(
            // Hard coded exceptions
            /\bJSON/,
            // Float32Array, OutT
            /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
            // CSSFactory, CSSFactoryT
            /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
            // FPs, FPsT
            /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
            // P
            // single letters are not highlighted
            // BLAH
            // this will be flagged as a UPPER_CASE_CONSTANT instead
          ),
          className: "title.class",
          keywords: {
            _: [
              // se we still get relevance credit for JS library classes
              ...TYPES,
              ...ERROR_TYPES
            ]
          }
        };
        const USE_STRICT = {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          begin: /^\s*['"]use (strict|asm)['"]/
        };
        const FUNCTION_DEFINITION = {
          variants: [
            {
              match: [
                /function/,
                /\s+/,
                IDENT_RE$1,
                /(?=\s*\()/
              ]
            },
            // anonymous function
            {
              match: [
                /function/,
                /\s*(?=\()/
              ]
            }
          ],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [PARAMS],
          illegal: /%/
        };
        const UPPER_CASE_CONSTANT = {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        };
        function noneOf(list) {
          return regex.concat("(?!", list.join("|"), ")");
        }
        const FUNCTION_CALL = {
          match: regex.concat(
            /\b/,
            noneOf([
              ...BUILT_IN_GLOBALS,
              "super",
              "import"
            ].map((x2) => `${x2}\\s*\\(`)),
            IDENT_RE$1,
            regex.lookahead(/\s*\(/)
          ),
          className: "title.function",
          relevance: 0
        };
        const PROPERTY_ACCESS = {
          begin: regex.concat(/\./, regex.lookahead(
            regex.concat(IDENT_RE$1, /(?![0-9A-Za-z$_(])/)
          )),
          end: IDENT_RE$1,
          excludeBegin: true,
          keywords: "prototype",
          className: "property",
          relevance: 0
        };
        const GETTER_OR_SETTER = {
          match: [
            /get|set/,
            /\s+/,
            IDENT_RE$1,
            /(?=\()/
          ],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [
            {
              // eat to avoid empty params
              begin: /\(\)/
            },
            PARAMS
          ]
        };
        const FUNC_LEAD_IN_RE = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>";
        const FUNCTION_VARIABLE = {
          match: [
            /const|var|let/,
            /\s+/,
            IDENT_RE$1,
            /\s*/,
            /=\s*/,
            /(async\s*)?/,
            // async is optional
            regex.lookahead(FUNC_LEAD_IN_RE)
          ],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [
            PARAMS
          ]
        };
        return {
          name: "JavaScript",
          aliases: ["js", "jsx", "mjs", "cjs"],
          keywords: KEYWORDS$1,
          // this will be extended by TypeScript
          exports: { PARAMS_CONTAINS, CLASS_REFERENCE },
          illegal: /#(?![$_A-z])/,
          contains: [
            hljs.SHEBANG({
              label: "shebang",
              binary: "node",
              relevance: 5
            }),
            USE_STRICT,
            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE,
            HTML_TEMPLATE,
            CSS_TEMPLATE,
            GRAPHQL_TEMPLATE,
            TEMPLATE_STRING,
            COMMENT,
            // Skip numbers when they are part of a variable name
            { match: /\$\d+/ },
            NUMBER,
            CLASS_REFERENCE,
            {
              className: "attr",
              begin: IDENT_RE$1 + regex.lookahead(":"),
              relevance: 0
            },
            FUNCTION_VARIABLE,
            {
              // "value" container
              begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
              keywords: "return throw case",
              relevance: 0,
              contains: [
                COMMENT,
                hljs.REGEXP_MODE,
                {
                  className: "function",
                  // we have to count the parens to make sure we actually have the
                  // correct bounding ( ) before the =>.  There could be any number of
                  // sub-expressions inside also surrounded by parens.
                  begin: FUNC_LEAD_IN_RE,
                  returnBegin: true,
                  end: "\\s*=>",
                  contains: [
                    {
                      className: "params",
                      variants: [
                        {
                          begin: hljs.UNDERSCORE_IDENT_RE,
                          relevance: 0
                        },
                        {
                          className: null,
                          begin: /\(\s*\)/,
                          skip: true
                        },
                        {
                          begin: /(\s*)\(/,
                          end: /\)/,
                          excludeBegin: true,
                          excludeEnd: true,
                          keywords: KEYWORDS$1,
                          contains: PARAMS_CONTAINS
                        }
                      ]
                    }
                  ]
                },
                {
                  // could be a comma delimited list of params to a function call
                  begin: /,/,
                  relevance: 0
                },
                {
                  match: /\s+/,
                  relevance: 0
                },
                {
                  // JSX
                  variants: [
                    { begin: FRAGMENT.begin, end: FRAGMENT.end },
                    { match: XML_SELF_CLOSING },
                    {
                      begin: XML_TAG.begin,
                      // we carefully check the opening tag to see if it truly
                      // is a tag and not a false positive
                      "on:begin": XML_TAG.isTrulyOpeningTag,
                      end: XML_TAG.end
                    }
                  ],
                  subLanguage: "xml",
                  contains: [
                    {
                      begin: XML_TAG.begin,
                      end: XML_TAG.end,
                      skip: true,
                      contains: ["self"]
                    }
                  ]
                }
              ]
            },
            FUNCTION_DEFINITION,
            {
              // prevent this from getting swallowed up by function
              // since they appear "function like"
              beginKeywords: "while if switch catch for"
            },
            {
              // we have to count the parens to make sure we actually have the correct
              // bounding ( ).  There could be any number of sub-expressions inside
              // also surrounded by parens.
              begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
              // end parens
              returnBegin: true,
              label: "func.def",
              contains: [
                PARAMS,
                hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1, className: "title.function" })
              ]
            },
            // catch ... so it won't trigger the property rule below
            {
              match: /\.\.\./,
              relevance: 0
            },
            PROPERTY_ACCESS,
            // hack: prevents detection of keywords in some circumstances
            // .keyword()
            // $keyword = x
            {
              match: "\\$" + IDENT_RE$1,
              relevance: 0
            },
            {
              match: [/\bconstructor(?=\s*\()/],
              className: { 1: "title.function" },
              contains: [PARAMS]
            },
            FUNCTION_CALL,
            UPPER_CASE_CONSTANT,
            CLASS_OR_EXTENDS,
            GETTER_OR_SETTER,
            {
              match: /\$[(.]/
              // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
            }
          ]
        };
      }
      module.exports = javascript;
    }
  });

  // node_modules/highlight.js/lib/languages/json.js
  var require_json = __commonJS({
    "node_modules/highlight.js/lib/languages/json.js"(exports, module) {
      function json(hljs) {
        const ATTRIBUTE = {
          className: "attr",
          begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
          relevance: 1.01
        };
        const PUNCTUATION = {
          match: /[{}[\],:]/,
          className: "punctuation",
          relevance: 0
        };
        const LITERALS = [
          "true",
          "false",
          "null"
        ];
        const LITERALS_MODE = {
          scope: "literal",
          beginKeywords: LITERALS.join(" ")
        };
        return {
          name: "JSON",
          aliases: ["jsonc"],
          keywords: {
            literal: LITERALS
          },
          contains: [
            ATTRIBUTE,
            PUNCTUATION,
            hljs.QUOTE_STRING_MODE,
            LITERALS_MODE,
            hljs.C_NUMBER_MODE,
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE
          ],
          illegal: "\\S"
        };
      }
      module.exports = json;
    }
  });

  // node_modules/highlight.js/lib/languages/kotlin.js
  var require_kotlin = __commonJS({
    "node_modules/highlight.js/lib/languages/kotlin.js"(exports, module) {
      var decimalDigits = "[0-9](_*[0-9])*";
      var frac = `\\.(${decimalDigits})`;
      var hexDigits = "[0-9a-fA-F](_*[0-9a-fA-F])*";
      var NUMERIC = {
        className: "number",
        variants: [
          // DecimalFloatingPointLiteral
          // including ExponentPart
          { begin: `(\\b(${decimalDigits})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})[fFdD]?\\b` },
          // excluding ExponentPart
          { begin: `\\b(${decimalDigits})((${frac})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
          { begin: `(${frac})[fFdD]?\\b` },
          { begin: `\\b(${decimalDigits})[fFdD]\\b` },
          // HexadecimalFloatingPointLiteral
          { begin: `\\b0[xX]((${hexDigits})\\.?|(${hexDigits})?\\.(${hexDigits}))[pP][+-]?(${decimalDigits})[fFdD]?\\b` },
          // DecimalIntegerLiteral
          { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
          // HexIntegerLiteral
          { begin: `\\b0[xX](${hexDigits})[lL]?\\b` },
          // OctalIntegerLiteral
          { begin: "\\b0(_*[0-7])*[lL]?\\b" },
          // BinaryIntegerLiteral
          { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
        ],
        relevance: 0
      };
      function kotlin(hljs) {
        const KEYWORDS = {
          keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
          built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
          literal: "true false null"
        };
        const KEYWORDS_WITH_LABEL = {
          className: "keyword",
          begin: /\b(break|continue|return|this)\b/,
          starts: { contains: [
            {
              className: "symbol",
              begin: /@\w+/
            }
          ] }
        };
        const LABEL = {
          className: "symbol",
          begin: hljs.UNDERSCORE_IDENT_RE + "@"
        };
        const SUBST = {
          className: "subst",
          begin: /\$\{/,
          end: /\}/,
          contains: [hljs.C_NUMBER_MODE]
        };
        const VARIABLE = {
          className: "variable",
          begin: "\\$" + hljs.UNDERSCORE_IDENT_RE
        };
        const STRING = {
          className: "string",
          variants: [
            {
              begin: '"""',
              end: '"""(?=[^"])',
              contains: [
                VARIABLE,
                SUBST
              ]
            },
            // Can't use built-in modes easily, as we want to use STRING in the meta
            // context as 'meta-string' and there's no syntax to remove explicitly set
            // classNames in built-in modes.
            {
              begin: "'",
              end: "'",
              illegal: /\n/,
              contains: [hljs.BACKSLASH_ESCAPE]
            },
            {
              begin: '"',
              end: '"',
              illegal: /\n/,
              contains: [
                hljs.BACKSLASH_ESCAPE,
                VARIABLE,
                SUBST
              ]
            }
          ]
        };
        SUBST.contains.push(STRING);
        const ANNOTATION_USE_SITE = {
          className: "meta",
          begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + hljs.UNDERSCORE_IDENT_RE + ")?"
        };
        const ANNOTATION = {
          className: "meta",
          begin: "@" + hljs.UNDERSCORE_IDENT_RE,
          contains: [
            {
              begin: /\(/,
              end: /\)/,
              contains: [
                hljs.inherit(STRING, { className: "string" }),
                "self"
              ]
            }
          ]
        };
        const KOTLIN_NUMBER_MODE = NUMERIC;
        const KOTLIN_NESTED_COMMENT = hljs.COMMENT(
          "/\\*",
          "\\*/",
          { contains: [hljs.C_BLOCK_COMMENT_MODE] }
        );
        const KOTLIN_PAREN_TYPE = { variants: [
          {
            className: "type",
            begin: hljs.UNDERSCORE_IDENT_RE
          },
          {
            begin: /\(/,
            end: /\)/,
            contains: []
            // defined later
          }
        ] };
        const KOTLIN_PAREN_TYPE2 = KOTLIN_PAREN_TYPE;
        KOTLIN_PAREN_TYPE2.variants[1].contains = [KOTLIN_PAREN_TYPE];
        KOTLIN_PAREN_TYPE.variants[1].contains = [KOTLIN_PAREN_TYPE2];
        return {
          name: "Kotlin",
          aliases: [
            "kt",
            "kts"
          ],
          keywords: KEYWORDS,
          contains: [
            hljs.COMMENT(
              "/\\*\\*",
              "\\*/",
              {
                relevance: 0,
                contains: [
                  {
                    className: "doctag",
                    begin: "@[A-Za-z]+"
                  }
                ]
              }
            ),
            hljs.C_LINE_COMMENT_MODE,
            KOTLIN_NESTED_COMMENT,
            KEYWORDS_WITH_LABEL,
            LABEL,
            ANNOTATION_USE_SITE,
            ANNOTATION,
            {
              className: "function",
              beginKeywords: "fun",
              end: "[(]|$",
              returnBegin: true,
              excludeEnd: true,
              keywords: KEYWORDS,
              relevance: 5,
              contains: [
                {
                  begin: hljs.UNDERSCORE_IDENT_RE + "\\s*\\(",
                  returnBegin: true,
                  relevance: 0,
                  contains: [hljs.UNDERSCORE_TITLE_MODE]
                },
                {
                  className: "type",
                  begin: /</,
                  end: />/,
                  keywords: "reified",
                  relevance: 0
                },
                {
                  className: "params",
                  begin: /\(/,
                  end: /\)/,
                  endsParent: true,
                  keywords: KEYWORDS,
                  relevance: 0,
                  contains: [
                    {
                      begin: /:/,
                      end: /[=,\/]/,
                      endsWithParent: true,
                      contains: [
                        KOTLIN_PAREN_TYPE,
                        hljs.C_LINE_COMMENT_MODE,
                        KOTLIN_NESTED_COMMENT
                      ],
                      relevance: 0
                    },
                    hljs.C_LINE_COMMENT_MODE,
                    KOTLIN_NESTED_COMMENT,
                    ANNOTATION_USE_SITE,
                    ANNOTATION,
                    STRING,
                    hljs.C_NUMBER_MODE
                  ]
                },
                KOTLIN_NESTED_COMMENT
              ]
            },
            {
              begin: [
                /class|interface|trait/,
                /\s+/,
                hljs.UNDERSCORE_IDENT_RE
              ],
              beginScope: {
                3: "title.class"
              },
              keywords: "class interface trait",
              end: /[:\{(]|$/,
              excludeEnd: true,
              illegal: "extends implements",
              contains: [
                { beginKeywords: "public protected internal private constructor" },
                hljs.UNDERSCORE_TITLE_MODE,
                {
                  className: "type",
                  begin: /</,
                  end: />/,
                  excludeBegin: true,
                  excludeEnd: true,
                  relevance: 0
                },
                {
                  className: "type",
                  begin: /[,:]\s*/,
                  end: /[<\(,){\s]|$/,
                  excludeBegin: true,
                  returnEnd: true
                },
                ANNOTATION_USE_SITE,
                ANNOTATION
              ]
            },
            STRING,
            {
              className: "meta",
              begin: "^#!/usr/bin/env",
              end: "$",
              illegal: "\n"
            },
            KOTLIN_NUMBER_MODE
          ]
        };
      }
      module.exports = kotlin;
    }
  });

  // node_modules/highlight.js/lib/languages/less.js
  var require_less = __commonJS({
    "node_modules/highlight.js/lib/languages/less.js"(exports, module) {
      var MODES = (hljs) => {
        return {
          IMPORTANT: {
            scope: "meta",
            begin: "!important"
          },
          BLOCK_COMMENT: hljs.C_BLOCK_COMMENT_MODE,
          HEXCOLOR: {
            scope: "number",
            begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
          },
          FUNCTION_DISPATCH: {
            className: "built_in",
            begin: /[\w-]+(?=\()/
          },
          ATTRIBUTE_SELECTOR_MODE: {
            scope: "selector-attr",
            begin: /\[/,
            end: /\]/,
            illegal: "$",
            contains: [
              hljs.APOS_STRING_MODE,
              hljs.QUOTE_STRING_MODE
            ]
          },
          CSS_NUMBER_MODE: {
            scope: "number",
            begin: hljs.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
            relevance: 0
          },
          CSS_VARIABLE: {
            className: "attr",
            begin: /--[A-Za-z_][A-Za-z0-9_-]*/
          }
        };
      };
      var HTML_TAGS = [
        "a",
        "abbr",
        "address",
        "article",
        "aside",
        "audio",
        "b",
        "blockquote",
        "body",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "dd",
        "del",
        "details",
        "dfn",
        "div",
        "dl",
        "dt",
        "em",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "header",
        "hgroup",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "label",
        "legend",
        "li",
        "main",
        "mark",
        "menu",
        "nav",
        "object",
        "ol",
        "optgroup",
        "option",
        "p",
        "picture",
        "q",
        "quote",
        "samp",
        "section",
        "select",
        "source",
        "span",
        "strong",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "tr",
        "ul",
        "var",
        "video"
      ];
      var SVG_TAGS = [
        "defs",
        "g",
        "marker",
        "mask",
        "pattern",
        "svg",
        "switch",
        "symbol",
        "feBlend",
        "feColorMatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feFlood",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMorphology",
        "feOffset",
        "feSpecularLighting",
        "feTile",
        "feTurbulence",
        "linearGradient",
        "radialGradient",
        "stop",
        "circle",
        "ellipse",
        "image",
        "line",
        "path",
        "polygon",
        "polyline",
        "rect",
        "text",
        "use",
        "textPath",
        "tspan",
        "foreignObject",
        "clipPath"
      ];
      var TAGS = [
        ...HTML_TAGS,
        ...SVG_TAGS
      ];
      var MEDIA_FEATURES = [
        "any-hover",
        "any-pointer",
        "aspect-ratio",
        "color",
        "color-gamut",
        "color-index",
        "device-aspect-ratio",
        "device-height",
        "device-width",
        "display-mode",
        "forced-colors",
        "grid",
        "height",
        "hover",
        "inverted-colors",
        "monochrome",
        "orientation",
        "overflow-block",
        "overflow-inline",
        "pointer",
        "prefers-color-scheme",
        "prefers-contrast",
        "prefers-reduced-motion",
        "prefers-reduced-transparency",
        "resolution",
        "scan",
        "scripting",
        "update",
        "width",
        // TODO: find a better solution?
        "min-width",
        "max-width",
        "min-height",
        "max-height"
      ].sort().reverse();
      var PSEUDO_CLASSES = [
        "active",
        "any-link",
        "blank",
        "checked",
        "current",
        "default",
        "defined",
        "dir",
        // dir()
        "disabled",
        "drop",
        "empty",
        "enabled",
        "first",
        "first-child",
        "first-of-type",
        "fullscreen",
        "future",
        "focus",
        "focus-visible",
        "focus-within",
        "has",
        // has()
        "host",
        // host or host()
        "host-context",
        // host-context()
        "hover",
        "indeterminate",
        "in-range",
        "invalid",
        "is",
        // is()
        "lang",
        // lang()
        "last-child",
        "last-of-type",
        "left",
        "link",
        "local-link",
        "not",
        // not()
        "nth-child",
        // nth-child()
        "nth-col",
        // nth-col()
        "nth-last-child",
        // nth-last-child()
        "nth-last-col",
        // nth-last-col()
        "nth-last-of-type",
        //nth-last-of-type()
        "nth-of-type",
        //nth-of-type()
        "only-child",
        "only-of-type",
        "optional",
        "out-of-range",
        "past",
        "placeholder-shown",
        "read-only",
        "read-write",
        "required",
        "right",
        "root",
        "scope",
        "target",
        "target-within",
        "user-invalid",
        "valid",
        "visited",
        "where"
        // where()
      ].sort().reverse();
      var PSEUDO_ELEMENTS = [
        "after",
        "backdrop",
        "before",
        "cue",
        "cue-region",
        "first-letter",
        "first-line",
        "grammar-error",
        "marker",
        "part",
        "placeholder",
        "selection",
        "slotted",
        "spelling-error"
      ].sort().reverse();
      var ATTRIBUTES = [
        "accent-color",
        "align-content",
        "align-items",
        "align-self",
        "alignment-baseline",
        "all",
        "animation",
        "animation-delay",
        "animation-direction",
        "animation-duration",
        "animation-fill-mode",
        "animation-iteration-count",
        "animation-name",
        "animation-play-state",
        "animation-timing-function",
        "appearance",
        "backface-visibility",
        "background",
        "background-attachment",
        "background-blend-mode",
        "background-clip",
        "background-color",
        "background-image",
        "background-origin",
        "background-position",
        "background-repeat",
        "background-size",
        "baseline-shift",
        "block-size",
        "border",
        "border-block",
        "border-block-color",
        "border-block-end",
        "border-block-end-color",
        "border-block-end-style",
        "border-block-end-width",
        "border-block-start",
        "border-block-start-color",
        "border-block-start-style",
        "border-block-start-width",
        "border-block-style",
        "border-block-width",
        "border-bottom",
        "border-bottom-color",
        "border-bottom-left-radius",
        "border-bottom-right-radius",
        "border-bottom-style",
        "border-bottom-width",
        "border-collapse",
        "border-color",
        "border-image",
        "border-image-outset",
        "border-image-repeat",
        "border-image-slice",
        "border-image-source",
        "border-image-width",
        "border-inline",
        "border-inline-color",
        "border-inline-end",
        "border-inline-end-color",
        "border-inline-end-style",
        "border-inline-end-width",
        "border-inline-start",
        "border-inline-start-color",
        "border-inline-start-style",
        "border-inline-start-width",
        "border-inline-style",
        "border-inline-width",
        "border-left",
        "border-left-color",
        "border-left-style",
        "border-left-width",
        "border-radius",
        "border-right",
        "border-end-end-radius",
        "border-end-start-radius",
        "border-right-color",
        "border-right-style",
        "border-right-width",
        "border-spacing",
        "border-start-end-radius",
        "border-start-start-radius",
        "border-style",
        "border-top",
        "border-top-color",
        "border-top-left-radius",
        "border-top-right-radius",
        "border-top-style",
        "border-top-width",
        "border-width",
        "bottom",
        "box-decoration-break",
        "box-shadow",
        "box-sizing",
        "break-after",
        "break-before",
        "break-inside",
        "cx",
        "cy",
        "caption-side",
        "caret-color",
        "clear",
        "clip",
        "clip-path",
        "clip-rule",
        "color",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "color-scheme",
        "column-count",
        "column-fill",
        "column-gap",
        "column-rule",
        "column-rule-color",
        "column-rule-style",
        "column-rule-width",
        "column-span",
        "column-width",
        "columns",
        "contain",
        "content",
        "content-visibility",
        "counter-increment",
        "counter-reset",
        "cue",
        "cue-after",
        "cue-before",
        "cursor",
        "direction",
        "display",
        "dominant-baseline",
        "empty-cells",
        "enable-background",
        "fill",
        "fill-opacity",
        "fill-rule",
        "filter",
        "flex",
        "flex-basis",
        "flex-direction",
        "flex-flow",
        "flex-grow",
        "flex-shrink",
        "flex-wrap",
        "float",
        "flow",
        "flood-color",
        "flood-opacity",
        "font",
        "font-display",
        "font-family",
        "font-feature-settings",
        "font-kerning",
        "font-language-override",
        "font-size",
        "font-size-adjust",
        "font-smoothing",
        "font-stretch",
        "font-style",
        "font-synthesis",
        "font-variant",
        "font-variant-caps",
        "font-variant-east-asian",
        "font-variant-ligatures",
        "font-variant-numeric",
        "font-variant-position",
        "font-variation-settings",
        "font-weight",
        "gap",
        "glyph-orientation-horizontal",
        "glyph-orientation-vertical",
        "grid",
        "grid-area",
        "grid-auto-columns",
        "grid-auto-flow",
        "grid-auto-rows",
        "grid-column",
        "grid-column-end",
        "grid-column-start",
        "grid-gap",
        "grid-row",
        "grid-row-end",
        "grid-row-start",
        "grid-template",
        "grid-template-areas",
        "grid-template-columns",
        "grid-template-rows",
        "hanging-punctuation",
        "height",
        "hyphens",
        "icon",
        "image-orientation",
        "image-rendering",
        "image-resolution",
        "ime-mode",
        "inline-size",
        "inset",
        "inset-block",
        "inset-block-end",
        "inset-block-start",
        "inset-inline",
        "inset-inline-end",
        "inset-inline-start",
        "isolation",
        "kerning",
        "justify-content",
        "justify-items",
        "justify-self",
        "left",
        "letter-spacing",
        "lighting-color",
        "line-break",
        "line-height",
        "list-style",
        "list-style-image",
        "list-style-position",
        "list-style-type",
        "marker",
        "marker-end",
        "marker-mid",
        "marker-start",
        "mask",
        "margin",
        "margin-block",
        "margin-block-end",
        "margin-block-start",
        "margin-bottom",
        "margin-inline",
        "margin-inline-end",
        "margin-inline-start",
        "margin-left",
        "margin-right",
        "margin-top",
        "marks",
        "mask",
        "mask-border",
        "mask-border-mode",
        "mask-border-outset",
        "mask-border-repeat",
        "mask-border-slice",
        "mask-border-source",
        "mask-border-width",
        "mask-clip",
        "mask-composite",
        "mask-image",
        "mask-mode",
        "mask-origin",
        "mask-position",
        "mask-repeat",
        "mask-size",
        "mask-type",
        "max-block-size",
        "max-height",
        "max-inline-size",
        "max-width",
        "min-block-size",
        "min-height",
        "min-inline-size",
        "min-width",
        "mix-blend-mode",
        "nav-down",
        "nav-index",
        "nav-left",
        "nav-right",
        "nav-up",
        "none",
        "normal",
        "object-fit",
        "object-position",
        "opacity",
        "order",
        "orphans",
        "outline",
        "outline-color",
        "outline-offset",
        "outline-style",
        "outline-width",
        "overflow",
        "overflow-wrap",
        "overflow-x",
        "overflow-y",
        "padding",
        "padding-block",
        "padding-block-end",
        "padding-block-start",
        "padding-bottom",
        "padding-inline",
        "padding-inline-end",
        "padding-inline-start",
        "padding-left",
        "padding-right",
        "padding-top",
        "page-break-after",
        "page-break-before",
        "page-break-inside",
        "pause",
        "pause-after",
        "pause-before",
        "perspective",
        "perspective-origin",
        "pointer-events",
        "position",
        "quotes",
        "r",
        "resize",
        "rest",
        "rest-after",
        "rest-before",
        "right",
        "rotate",
        "row-gap",
        "scale",
        "scroll-margin",
        "scroll-margin-block",
        "scroll-margin-block-end",
        "scroll-margin-block-start",
        "scroll-margin-bottom",
        "scroll-margin-inline",
        "scroll-margin-inline-end",
        "scroll-margin-inline-start",
        "scroll-margin-left",
        "scroll-margin-right",
        "scroll-margin-top",
        "scroll-padding",
        "scroll-padding-block",
        "scroll-padding-block-end",
        "scroll-padding-block-start",
        "scroll-padding-bottom",
        "scroll-padding-inline",
        "scroll-padding-inline-end",
        "scroll-padding-inline-start",
        "scroll-padding-left",
        "scroll-padding-right",
        "scroll-padding-top",
        "scroll-snap-align",
        "scroll-snap-stop",
        "scroll-snap-type",
        "scrollbar-color",
        "scrollbar-gutter",
        "scrollbar-width",
        "shape-image-threshold",
        "shape-margin",
        "shape-outside",
        "shape-rendering",
        "stop-color",
        "stop-opacity",
        "stroke",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke-width",
        "speak",
        "speak-as",
        "src",
        // @font-face
        "tab-size",
        "table-layout",
        "text-anchor",
        "text-align",
        "text-align-all",
        "text-align-last",
        "text-combine-upright",
        "text-decoration",
        "text-decoration-color",
        "text-decoration-line",
        "text-decoration-skip-ink",
        "text-decoration-style",
        "text-decoration-thickness",
        "text-emphasis",
        "text-emphasis-color",
        "text-emphasis-position",
        "text-emphasis-style",
        "text-indent",
        "text-justify",
        "text-orientation",
        "text-overflow",
        "text-rendering",
        "text-shadow",
        "text-transform",
        "text-underline-offset",
        "text-underline-position",
        "top",
        "transform",
        "transform-box",
        "transform-origin",
        "transform-style",
        "transition",
        "transition-delay",
        "transition-duration",
        "transition-property",
        "transition-timing-function",
        "translate",
        "unicode-bidi",
        "vector-effect",
        "vertical-align",
        "visibility",
        "voice-balance",
        "voice-duration",
        "voice-family",
        "voice-pitch",
        "voice-range",
        "voice-rate",
        "voice-stress",
        "voice-volume",
        "white-space",
        "widows",
        "width",
        "will-change",
        "word-break",
        "word-spacing",
        "word-wrap",
        "writing-mode",
        "x",
        "y",
        "z-index"
      ].sort().reverse();
      var PSEUDO_SELECTORS = PSEUDO_CLASSES.concat(PSEUDO_ELEMENTS).sort().reverse();
      function less(hljs) {
        const modes = MODES(hljs);
        const PSEUDO_SELECTORS$1 = PSEUDO_SELECTORS;
        const AT_MODIFIERS = "and or not only";
        const IDENT_RE = "[\\w-]+";
        const INTERP_IDENT_RE = "(" + IDENT_RE + "|@\\{" + IDENT_RE + "\\})";
        const RULES = [];
        const VALUE_MODES = [];
        const STRING_MODE = function(c4) {
          return {
            // Less strings are not multiline (also include '~' for more consistent coloring of "escaped" strings)
            className: "string",
            begin: "~?" + c4 + ".*?" + c4
          };
        };
        const IDENT_MODE = function(name, begin, relevance) {
          return {
            className: name,
            begin,
            relevance
          };
        };
        const AT_KEYWORDS = {
          $pattern: /[a-z-]+/,
          keyword: AT_MODIFIERS,
          attribute: MEDIA_FEATURES.join(" ")
        };
        const PARENS_MODE = {
          // used only to properly balance nested parens inside mixin call, def. arg list
          begin: "\\(",
          end: "\\)",
          contains: VALUE_MODES,
          keywords: AT_KEYWORDS,
          relevance: 0
        };
        VALUE_MODES.push(
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          STRING_MODE("'"),
          STRING_MODE('"'),
          modes.CSS_NUMBER_MODE,
          // fixme: it does not include dot for numbers like .5em :(
          {
            begin: "(url|data-uri)\\(",
            starts: {
              className: "string",
              end: "[\\)\\n]",
              excludeEnd: true
            }
          },
          modes.HEXCOLOR,
          PARENS_MODE,
          IDENT_MODE("variable", "@@?" + IDENT_RE, 10),
          IDENT_MODE("variable", "@\\{" + IDENT_RE + "\\}"),
          IDENT_MODE("built_in", "~?`[^`]*?`"),
          // inline javascript (or whatever host language) *multiline* string
          {
            // @media features (it’s here to not duplicate things in AT_RULE_MODE with extra PARENS_MODE overriding):
            className: "attribute",
            begin: IDENT_RE + "\\s*:",
            end: ":",
            returnBegin: true,
            excludeEnd: true
          },
          modes.IMPORTANT,
          { beginKeywords: "and not" },
          modes.FUNCTION_DISPATCH
        );
        const VALUE_WITH_RULESETS = VALUE_MODES.concat({
          begin: /\{/,
          end: /\}/,
          contains: RULES
        });
        const MIXIN_GUARD_MODE = {
          beginKeywords: "when",
          endsWithParent: true,
          contains: [{ beginKeywords: "and not" }].concat(VALUE_MODES)
          // using this form to override VALUE’s 'function' match
        };
        const RULE_MODE = {
          begin: INTERP_IDENT_RE + "\\s*:",
          returnBegin: true,
          end: /[;}]/,
          relevance: 0,
          contains: [
            { begin: /-(webkit|moz|ms|o)-/ },
            modes.CSS_VARIABLE,
            {
              className: "attribute",
              begin: "\\b(" + ATTRIBUTES.join("|") + ")\\b",
              end: /(?=:)/,
              starts: {
                endsWithParent: true,
                illegal: "[<=$]",
                relevance: 0,
                contains: VALUE_MODES
              }
            }
          ]
        };
        const AT_RULE_MODE = {
          className: "keyword",
          begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
          starts: {
            end: "[;{}]",
            keywords: AT_KEYWORDS,
            returnEnd: true,
            contains: VALUE_MODES,
            relevance: 0
          }
        };
        const VAR_RULE_MODE = {
          className: "variable",
          variants: [
            // using more strict pattern for higher relevance to increase chances of Less detection.
            // this is *the only* Less specific statement used in most of the sources, so...
            // (we’ll still often loose to the css-parser unless there's '//' comment,
            // simply because 1 variable just can't beat 99 properties :)
            {
              begin: "@" + IDENT_RE + "\\s*:",
              relevance: 15
            },
            { begin: "@" + IDENT_RE }
          ],
          starts: {
            end: "[;}]",
            returnEnd: true,
            contains: VALUE_WITH_RULESETS
          }
        };
        const SELECTOR_MODE = {
          // first parse unambiguous selectors (i.e. those not starting with tag)
          // then fall into the scary lookahead-discriminator variant.
          // this mode also handles mixin definitions and calls
          variants: [
            {
              begin: "[\\.#:&\\[>]",
              end: "[;{}]"
              // mixin calls end with ';'
            },
            {
              begin: INTERP_IDENT_RE,
              end: /\{/
            }
          ],
          returnBegin: true,
          returnEnd: true,
          illegal: `[<='$"]`,
          relevance: 0,
          contains: [
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            MIXIN_GUARD_MODE,
            IDENT_MODE("keyword", "all\\b"),
            IDENT_MODE("variable", "@\\{" + IDENT_RE + "\\}"),
            // otherwise it’s identified as tag
            {
              begin: "\\b(" + TAGS.join("|") + ")\\b",
              className: "selector-tag"
            },
            modes.CSS_NUMBER_MODE,
            IDENT_MODE("selector-tag", INTERP_IDENT_RE, 0),
            IDENT_MODE("selector-id", "#" + INTERP_IDENT_RE),
            IDENT_MODE("selector-class", "\\." + INTERP_IDENT_RE, 0),
            IDENT_MODE("selector-tag", "&", 0),
            modes.ATTRIBUTE_SELECTOR_MODE,
            {
              className: "selector-pseudo",
              begin: ":(" + PSEUDO_CLASSES.join("|") + ")"
            },
            {
              className: "selector-pseudo",
              begin: ":(:)?(" + PSEUDO_ELEMENTS.join("|") + ")"
            },
            {
              begin: /\(/,
              end: /\)/,
              relevance: 0,
              contains: VALUE_WITH_RULESETS
            },
            // argument list of parametric mixins
            { begin: "!important" },
            // eat !important after mixin call or it will be colored as tag
            modes.FUNCTION_DISPATCH
          ]
        };
        const PSEUDO_SELECTOR_MODE = {
          begin: IDENT_RE + `:(:)?(${PSEUDO_SELECTORS$1.join("|")})`,
          returnBegin: true,
          contains: [SELECTOR_MODE]
        };
        RULES.push(
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          AT_RULE_MODE,
          VAR_RULE_MODE,
          PSEUDO_SELECTOR_MODE,
          RULE_MODE,
          SELECTOR_MODE,
          MIXIN_GUARD_MODE,
          modes.FUNCTION_DISPATCH
        );
        return {
          name: "Less",
          case_insensitive: true,
          illegal: `[=>'/<($"]`,
          contains: RULES
        };
      }
      module.exports = less;
    }
  });

  // node_modules/highlight.js/lib/languages/lua.js
  var require_lua = __commonJS({
    "node_modules/highlight.js/lib/languages/lua.js"(exports, module) {
      function lua(hljs) {
        const OPENING_LONG_BRACKET = "\\[=*\\[";
        const CLOSING_LONG_BRACKET = "\\]=*\\]";
        const LONG_BRACKETS = {
          begin: OPENING_LONG_BRACKET,
          end: CLOSING_LONG_BRACKET,
          contains: ["self"]
        };
        const COMMENTS = [
          hljs.COMMENT("--(?!" + OPENING_LONG_BRACKET + ")", "$"),
          hljs.COMMENT(
            "--" + OPENING_LONG_BRACKET,
            CLOSING_LONG_BRACKET,
            {
              contains: [LONG_BRACKETS],
              relevance: 10
            }
          )
        ];
        return {
          name: "Lua",
          keywords: {
            $pattern: hljs.UNDERSCORE_IDENT_RE,
            literal: "true false nil",
            keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
            built_in: (
              // Metatags and globals:
              "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
            )
          },
          contains: COMMENTS.concat([
            {
              className: "function",
              beginKeywords: "function",
              end: "\\)",
              contains: [
                hljs.inherit(hljs.TITLE_MODE, { begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*" }),
                {
                  className: "params",
                  begin: "\\(",
                  endsWithParent: true,
                  contains: COMMENTS
                }
              ].concat(COMMENTS)
            },
            hljs.C_NUMBER_MODE,
            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE,
            {
              className: "string",
              begin: OPENING_LONG_BRACKET,
              end: CLOSING_LONG_BRACKET,
              contains: [LONG_BRACKETS],
              relevance: 5
            }
          ])
        };
      }
      module.exports = lua;
    }
  });

  // node_modules/highlight.js/lib/languages/makefile.js
  var require_makefile = __commonJS({
    "node_modules/highlight.js/lib/languages/makefile.js"(exports, module) {
      function makefile(hljs) {
        const VARIABLE = {
          className: "variable",
          variants: [
            {
              begin: "\\$\\(" + hljs.UNDERSCORE_IDENT_RE + "\\)",
              contains: [hljs.BACKSLASH_ESCAPE]
            },
            { begin: /\$[@%<?\^\+\*]/ }
          ]
        };
        const QUOTE_STRING = {
          className: "string",
          begin: /"/,
          end: /"/,
          contains: [
            hljs.BACKSLASH_ESCAPE,
            VARIABLE
          ]
        };
        const FUNC = {
          className: "variable",
          begin: /\$\([\w-]+\s/,
          end: /\)/,
          keywords: { built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value" },
          contains: [VARIABLE]
        };
        const ASSIGNMENT = { begin: "^" + hljs.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)" };
        const META = {
          className: "meta",
          begin: /^\.PHONY:/,
          end: /$/,
          keywords: {
            $pattern: /[\.\w]+/,
            keyword: ".PHONY"
          }
        };
        const TARGET = {
          className: "section",
          begin: /^[^\s]+:/,
          end: /$/,
          contains: [VARIABLE]
        };
        return {
          name: "Makefile",
          aliases: [
            "mk",
            "mak",
            "make"
          ],
          keywords: {
            $pattern: /[\w-]+/,
            keyword: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
          },
          contains: [
            hljs.HASH_COMMENT_MODE,
            VARIABLE,
            QUOTE_STRING,
            FUNC,
            ASSIGNMENT,
            META,
            TARGET
          ]
        };
      }
      module.exports = makefile;
    }
  });

  // node_modules/highlight.js/lib/languages/perl.js
  var require_perl = __commonJS({
    "node_modules/highlight.js/lib/languages/perl.js"(exports, module) {
      function perl(hljs) {
        const regex = hljs.regex;
        const KEYWORDS = [
          "abs",
          "accept",
          "alarm",
          "and",
          "atan2",
          "bind",
          "binmode",
          "bless",
          "break",
          "caller",
          "chdir",
          "chmod",
          "chomp",
          "chop",
          "chown",
          "chr",
          "chroot",
          "class",
          "close",
          "closedir",
          "connect",
          "continue",
          "cos",
          "crypt",
          "dbmclose",
          "dbmopen",
          "defined",
          "delete",
          "die",
          "do",
          "dump",
          "each",
          "else",
          "elsif",
          "endgrent",
          "endhostent",
          "endnetent",
          "endprotoent",
          "endpwent",
          "endservent",
          "eof",
          "eval",
          "exec",
          "exists",
          "exit",
          "exp",
          "fcntl",
          "field",
          "fileno",
          "flock",
          "for",
          "foreach",
          "fork",
          "format",
          "formline",
          "getc",
          "getgrent",
          "getgrgid",
          "getgrnam",
          "gethostbyaddr",
          "gethostbyname",
          "gethostent",
          "getlogin",
          "getnetbyaddr",
          "getnetbyname",
          "getnetent",
          "getpeername",
          "getpgrp",
          "getpriority",
          "getprotobyname",
          "getprotobynumber",
          "getprotoent",
          "getpwent",
          "getpwnam",
          "getpwuid",
          "getservbyname",
          "getservbyport",
          "getservent",
          "getsockname",
          "getsockopt",
          "given",
          "glob",
          "gmtime",
          "goto",
          "grep",
          "gt",
          "hex",
          "if",
          "index",
          "int",
          "ioctl",
          "join",
          "keys",
          "kill",
          "last",
          "lc",
          "lcfirst",
          "length",
          "link",
          "listen",
          "local",
          "localtime",
          "log",
          "lstat",
          "lt",
          "ma",
          "map",
          "method",
          "mkdir",
          "msgctl",
          "msgget",
          "msgrcv",
          "msgsnd",
          "my",
          "ne",
          "next",
          "no",
          "not",
          "oct",
          "open",
          "opendir",
          "or",
          "ord",
          "our",
          "pack",
          "package",
          "pipe",
          "pop",
          "pos",
          "print",
          "printf",
          "prototype",
          "push",
          "q|0",
          "qq",
          "quotemeta",
          "qw",
          "qx",
          "rand",
          "read",
          "readdir",
          "readline",
          "readlink",
          "readpipe",
          "recv",
          "redo",
          "ref",
          "rename",
          "require",
          "reset",
          "return",
          "reverse",
          "rewinddir",
          "rindex",
          "rmdir",
          "say",
          "scalar",
          "seek",
          "seekdir",
          "select",
          "semctl",
          "semget",
          "semop",
          "send",
          "setgrent",
          "sethostent",
          "setnetent",
          "setpgrp",
          "setpriority",
          "setprotoent",
          "setpwent",
          "setservent",
          "setsockopt",
          "shift",
          "shmctl",
          "shmget",
          "shmread",
          "shmwrite",
          "shutdown",
          "sin",
          "sleep",
          "socket",
          "socketpair",
          "sort",
          "splice",
          "split",
          "sprintf",
          "sqrt",
          "srand",
          "stat",
          "state",
          "study",
          "sub",
          "substr",
          "symlink",
          "syscall",
          "sysopen",
          "sysread",
          "sysseek",
          "system",
          "syswrite",
          "tell",
          "telldir",
          "tie",
          "tied",
          "time",
          "times",
          "tr",
          "truncate",
          "uc",
          "ucfirst",
          "umask",
          "undef",
          "unless",
          "unlink",
          "unpack",
          "unshift",
          "untie",
          "until",
          "use",
          "utime",
          "values",
          "vec",
          "wait",
          "waitpid",
          "wantarray",
          "warn",
          "when",
          "while",
          "write",
          "x|0",
          "xor",
          "y|0"
        ];
        const REGEX_MODIFIERS = /[dualxmsipngr]{0,12}/;
        const PERL_KEYWORDS = {
          $pattern: /[\w.]+/,
          keyword: KEYWORDS.join(" ")
        };
        const SUBST = {
          className: "subst",
          begin: "[$@]\\{",
          end: "\\}",
          keywords: PERL_KEYWORDS
        };
        const METHOD = {
          begin: /->\{/,
          end: /\}/
          // contains defined later
        };
        const ATTR = {
          scope: "attr",
          match: /\s+:\s*\w+(\s*\(.*?\))?/
        };
        const VAR = {
          scope: "variable",
          variants: [
            { begin: /\$\d/ },
            {
              begin: regex.concat(
                /[$%@](?!")(\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,
                // negative look-ahead tries to avoid matching patterns that are not
                // Perl at all like $ident$, @ident@, etc.
                `(?![A-Za-z])(?![@$%])`
              )
            },
            {
              // Only $= is a special Perl variable and one can't declare @= or %=.
              begin: /[$%@](?!")[^\s\w{=]|\$=/,
              relevance: 0
            }
          ],
          contains: [ATTR]
        };
        const NUMBER = {
          className: "number",
          variants: [
            // decimal numbers:
            // include the case where a number starts with a dot (eg. .9), and
            // the leading 0? avoids mixing the first and second match on 0.x cases
            { match: /0?\.[0-9][0-9_]+\b/ },
            // include the special versioned number (eg. v5.38)
            { match: /\bv?(0|[1-9][0-9_]*(\.[0-9_]+)?|[1-9][0-9_]*)\b/ },
            // non-decimal numbers:
            { match: /\b0[0-7][0-7_]*\b/ },
            { match: /\b0x[0-9a-fA-F][0-9a-fA-F_]*\b/ },
            { match: /\b0b[0-1][0-1_]*\b/ }
          ],
          relevance: 0
        };
        const STRING_CONTAINS = [
          hljs.BACKSLASH_ESCAPE,
          SUBST,
          VAR
        ];
        const REGEX_DELIMS = [
          /!/,
          /\//,
          /\|/,
          /\?/,
          /'/,
          /"/,
          // valid but infrequent and weird
          /#/
          // valid but infrequent and weird
        ];
        const PAIRED_DOUBLE_RE = (prefix, open, close = "\\1") => {
          const middle = close === "\\1" ? close : regex.concat(close, open);
          return regex.concat(
            regex.concat("(?:", prefix, ")"),
            open,
            /(?:\\.|[^\\\/])*?/,
            middle,
            /(?:\\.|[^\\\/])*?/,
            close,
            REGEX_MODIFIERS
          );
        };
        const PAIRED_RE = (prefix, open, close) => {
          return regex.concat(
            regex.concat("(?:", prefix, ")"),
            open,
            /(?:\\.|[^\\\/])*?/,
            close,
            REGEX_MODIFIERS
          );
        };
        const PERL_DEFAULT_CONTAINS = [
          VAR,
          hljs.HASH_COMMENT_MODE,
          hljs.COMMENT(
            /^=\w/,
            /=cut/,
            { endsWithParent: true }
          ),
          METHOD,
          {
            className: "string",
            contains: STRING_CONTAINS,
            variants: [
              {
                begin: "q[qwxr]?\\s*\\(",
                end: "\\)",
                relevance: 5
              },
              {
                begin: "q[qwxr]?\\s*\\[",
                end: "\\]",
                relevance: 5
              },
              {
                begin: "q[qwxr]?\\s*\\{",
                end: "\\}",
                relevance: 5
              },
              {
                begin: "q[qwxr]?\\s*\\|",
                end: "\\|",
                relevance: 5
              },
              {
                begin: "q[qwxr]?\\s*<",
                end: ">",
                relevance: 5
              },
              {
                begin: "qw\\s+q",
                end: "q",
                relevance: 5
              },
              {
                begin: "'",
                end: "'",
                contains: [hljs.BACKSLASH_ESCAPE]
              },
              {
                begin: '"',
                end: '"'
              },
              {
                begin: "`",
                end: "`",
                contains: [hljs.BACKSLASH_ESCAPE]
              },
              {
                begin: /\{\w+\}/,
                relevance: 0
              },
              {
                begin: "-?\\w+\\s*=>",
                relevance: 0
              }
            ]
          },
          NUMBER,
          {
            // regexp container
            begin: "(\\/\\/|" + hljs.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
            keywords: "split return print reverse grep",
            relevance: 0,
            contains: [
              hljs.HASH_COMMENT_MODE,
              {
                className: "regexp",
                variants: [
                  // allow matching common delimiters
                  { begin: PAIRED_DOUBLE_RE("s|tr|y", regex.either(...REGEX_DELIMS, { capture: true })) },
                  // and then paired delmis
                  { begin: PAIRED_DOUBLE_RE("s|tr|y", "\\(", "\\)") },
                  { begin: PAIRED_DOUBLE_RE("s|tr|y", "\\[", "\\]") },
                  { begin: PAIRED_DOUBLE_RE("s|tr|y", "\\{", "\\}") }
                ],
                relevance: 2
              },
              {
                className: "regexp",
                variants: [
                  {
                    // could be a comment in many languages so do not count
                    // as relevant
                    begin: /(m|qr)\/\//,
                    relevance: 0
                  },
                  // prefix is optional with /regex/
                  { begin: PAIRED_RE("(?:m|qr)?", /\//, /\//) },
                  // allow matching common delimiters
                  { begin: PAIRED_RE("m|qr", regex.either(...REGEX_DELIMS, { capture: true }), /\1/) },
                  // allow common paired delmins
                  { begin: PAIRED_RE("m|qr", /\(/, /\)/) },
                  { begin: PAIRED_RE("m|qr", /\[/, /\]/) },
                  { begin: PAIRED_RE("m|qr", /\{/, /\}/) }
                ]
              }
            ]
          },
          {
            className: "function",
            beginKeywords: "sub method",
            end: "(\\s*\\(.*?\\))?[;{]",
            excludeEnd: true,
            relevance: 5,
            contains: [hljs.TITLE_MODE, ATTR]
          },
          {
            className: "class",
            beginKeywords: "class",
            end: "[;{]",
            excludeEnd: true,
            relevance: 5,
            contains: [hljs.TITLE_MODE, ATTR, NUMBER]
          },
          {
            begin: "-\\w\\b",
            relevance: 0
          },
          {
            begin: "^__DATA__$",
            end: "^__END__$",
            subLanguage: "mojolicious",
            contains: [
              {
                begin: "^@@.*",
                end: "$",
                className: "comment"
              }
            ]
          }
        ];
        SUBST.contains = PERL_DEFAULT_CONTAINS;
        METHOD.contains = PERL_DEFAULT_CONTAINS;
        return {
          name: "Perl",
          aliases: [
            "pl",
            "pm"
          ],
          keywords: PERL_KEYWORDS,
          contains: PERL_DEFAULT_CONTAINS
        };
      }
      module.exports = perl;
    }
  });

  // node_modules/highlight.js/lib/languages/objectivec.js
  var require_objectivec = __commonJS({
    "node_modules/highlight.js/lib/languages/objectivec.js"(exports, module) {
      function objectivec(hljs) {
        const API_CLASS = {
          className: "built_in",
          begin: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
        };
        const IDENTIFIER_RE = /[a-zA-Z@][a-zA-Z0-9_]*/;
        const TYPES = [
          "int",
          "float",
          "char",
          "unsigned",
          "signed",
          "short",
          "long",
          "double",
          "wchar_t",
          "unichar",
          "void",
          "bool",
          "BOOL",
          "id|0",
          "_Bool"
        ];
        const KWS = [
          "while",
          "export",
          "sizeof",
          "typedef",
          "const",
          "struct",
          "for",
          "union",
          "volatile",
          "static",
          "mutable",
          "if",
          "do",
          "return",
          "goto",
          "enum",
          "else",
          "break",
          "extern",
          "asm",
          "case",
          "default",
          "register",
          "explicit",
          "typename",
          "switch",
          "continue",
          "inline",
          "readonly",
          "assign",
          "readwrite",
          "self",
          "@synchronized",
          "id",
          "typeof",
          "nonatomic",
          "IBOutlet",
          "IBAction",
          "strong",
          "weak",
          "copy",
          "in",
          "out",
          "inout",
          "bycopy",
          "byref",
          "oneway",
          "__strong",
          "__weak",
          "__block",
          "__autoreleasing",
          "@private",
          "@protected",
          "@public",
          "@try",
          "@property",
          "@end",
          "@throw",
          "@catch",
          "@finally",
          "@autoreleasepool",
          "@synthesize",
          "@dynamic",
          "@selector",
          "@optional",
          "@required",
          "@encode",
          "@package",
          "@import",
          "@defs",
          "@compatibility_alias",
          "__bridge",
          "__bridge_transfer",
          "__bridge_retained",
          "__bridge_retain",
          "__covariant",
          "__contravariant",
          "__kindof",
          "_Nonnull",
          "_Nullable",
          "_Null_unspecified",
          "__FUNCTION__",
          "__PRETTY_FUNCTION__",
          "__attribute__",
          "getter",
          "setter",
          "retain",
          "unsafe_unretained",
          "nonnull",
          "nullable",
          "null_unspecified",
          "null_resettable",
          "class",
          "instancetype",
          "NS_DESIGNATED_INITIALIZER",
          "NS_UNAVAILABLE",
          "NS_REQUIRES_SUPER",
          "NS_RETURNS_INNER_POINTER",
          "NS_INLINE",
          "NS_AVAILABLE",
          "NS_DEPRECATED",
          "NS_ENUM",
          "NS_OPTIONS",
          "NS_SWIFT_UNAVAILABLE",
          "NS_ASSUME_NONNULL_BEGIN",
          "NS_ASSUME_NONNULL_END",
          "NS_REFINED_FOR_SWIFT",
          "NS_SWIFT_NAME",
          "NS_SWIFT_NOTHROW",
          "NS_DURING",
          "NS_HANDLER",
          "NS_ENDHANDLER",
          "NS_VALUERETURN",
          "NS_VOIDRETURN"
        ];
        const LITERALS = [
          "false",
          "true",
          "FALSE",
          "TRUE",
          "nil",
          "YES",
          "NO",
          "NULL"
        ];
        const BUILT_INS = [
          "dispatch_once_t",
          "dispatch_queue_t",
          "dispatch_sync",
          "dispatch_async",
          "dispatch_once"
        ];
        const KEYWORDS = {
          "variable.language": [
            "this",
            "super"
          ],
          $pattern: IDENTIFIER_RE,
          keyword: KWS,
          literal: LITERALS,
          built_in: BUILT_INS,
          type: TYPES
        };
        const CLASS_KEYWORDS = {
          $pattern: IDENTIFIER_RE,
          keyword: [
            "@interface",
            "@class",
            "@protocol",
            "@implementation"
          ]
        };
        return {
          name: "Objective-C",
          aliases: [
            "mm",
            "objc",
            "obj-c",
            "obj-c++",
            "objective-c++"
          ],
          keywords: KEYWORDS,
          illegal: "</",
          contains: [
            API_CLASS,
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            hljs.C_NUMBER_MODE,
            hljs.QUOTE_STRING_MODE,
            hljs.APOS_STRING_MODE,
            {
              className: "string",
              variants: [
                {
                  begin: '@"',
                  end: '"',
                  illegal: "\\n",
                  contains: [hljs.BACKSLASH_ESCAPE]
                }
              ]
            },
            {
              className: "meta",
              begin: /#\s*[a-z]+\b/,
              end: /$/,
              keywords: { keyword: "if else elif endif define undef warning error line pragma ifdef ifndef include" },
              contains: [
                {
                  begin: /\\\n/,
                  relevance: 0
                },
                hljs.inherit(hljs.QUOTE_STRING_MODE, { className: "string" }),
                {
                  className: "string",
                  begin: /<.*?>/,
                  end: /$/,
                  illegal: "\\n"
                },
                hljs.C_LINE_COMMENT_MODE,
                hljs.C_BLOCK_COMMENT_MODE
              ]
            },
            {
              className: "class",
              begin: "(" + CLASS_KEYWORDS.keyword.join("|") + ")\\b",
              end: /(\{|$)/,
              excludeEnd: true,
              keywords: CLASS_KEYWORDS,
              contains: [hljs.UNDERSCORE_TITLE_MODE]
            },
            {
              begin: "\\." + hljs.UNDERSCORE_IDENT_RE,
              relevance: 0
            }
          ]
        };
      }
      module.exports = objectivec;
    }
  });

  // node_modules/highlight.js/lib/languages/php.js
  var require_php = __commonJS({
    "node_modules/highlight.js/lib/languages/php.js"(exports, module) {
      function php(hljs) {
        const regex = hljs.regex;
        const NOT_PERL_ETC = /(?![A-Za-z0-9])(?![$])/;
        const IDENT_RE = regex.concat(
          /[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,
          NOT_PERL_ETC
        );
        const PASCAL_CASE_CLASS_NAME_RE = regex.concat(
          /(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,
          NOT_PERL_ETC
        );
        const VARIABLE = {
          scope: "variable",
          match: "\\$+" + IDENT_RE
        };
        const PREPROCESSOR = {
          scope: "meta",
          variants: [
            { begin: /<\?php/, relevance: 10 },
            // boost for obvious PHP
            { begin: /<\?=/ },
            // less relevant per PSR-1 which says not to use short-tags
            { begin: /<\?/, relevance: 0.1 },
            { begin: /\?>/ }
            // end php tag
          ]
        };
        const SUBST = {
          scope: "subst",
          variants: [
            { begin: /\$\w+/ },
            {
              begin: /\{\$/,
              end: /\}/
            }
          ]
        };
        const SINGLE_QUOTED = hljs.inherit(hljs.APOS_STRING_MODE, { illegal: null });
        const DOUBLE_QUOTED = hljs.inherit(hljs.QUOTE_STRING_MODE, {
          illegal: null,
          contains: hljs.QUOTE_STRING_MODE.contains.concat(SUBST)
        });
        const HEREDOC = {
          begin: /<<<[ \t]*(?:(\w+)|"(\w+)")\n/,
          end: /[ \t]*(\w+)\b/,
          contains: hljs.QUOTE_STRING_MODE.contains.concat(SUBST),
          "on:begin": (m2, resp) => {
            resp.data._beginMatch = m2[1] || m2[2];
          },
          "on:end": (m2, resp) => {
            if (resp.data._beginMatch !== m2[1]) resp.ignoreMatch();
          }
        };
        const NOWDOC = hljs.END_SAME_AS_BEGIN({
          begin: /<<<[ \t]*'(\w+)'\n/,
          end: /[ \t]*(\w+)\b/
        });
        const WHITESPACE = "[ 	\n]";
        const STRING = {
          scope: "string",
          variants: [
            DOUBLE_QUOTED,
            SINGLE_QUOTED,
            HEREDOC,
            NOWDOC
          ]
        };
        const NUMBER = {
          scope: "number",
          variants: [
            { begin: `\\b0[bB][01]+(?:_[01]+)*\\b` },
            // Binary w/ underscore support
            { begin: `\\b0[oO][0-7]+(?:_[0-7]+)*\\b` },
            // Octals w/ underscore support
            { begin: `\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b` },
            // Hex w/ underscore support
            // Decimals w/ underscore support, with optional fragments and scientific exponent (e) suffix.
            { begin: `(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?` }
          ],
          relevance: 0
        };
        const LITERALS = [
          "false",
          "null",
          "true"
        ];
        const KWS = [
          // Magic constants:
          // <https://www.php.net/manual/en/language.constants.predefined.php>
          "__CLASS__",
          "__DIR__",
          "__FILE__",
          "__FUNCTION__",
          "__COMPILER_HALT_OFFSET__",
          "__LINE__",
          "__METHOD__",
          "__NAMESPACE__",
          "__TRAIT__",
          // Function that look like language construct or language construct that look like function:
          // List of keywords that may not require parenthesis
          "die",
          "echo",
          "exit",
          "include",
          "include_once",
          "print",
          "require",
          "require_once",
          // These are not language construct (function) but operate on the currently-executing function and can access the current symbol table
          // 'compact extract func_get_arg func_get_args func_num_args get_called_class get_parent_class ' +
          // Other keywords:
          // <https://www.php.net/manual/en/reserved.php>
          // <https://www.php.net/manual/en/language.types.type-juggling.php>
          "array",
          "abstract",
          "and",
          "as",
          "binary",
          "bool",
          "boolean",
          "break",
          "callable",
          "case",
          "catch",
          "class",
          "clone",
          "const",
          "continue",
          "declare",
          "default",
          "do",
          "double",
          "else",
          "elseif",
          "empty",
          "enddeclare",
          "endfor",
          "endforeach",
          "endif",
          "endswitch",
          "endwhile",
          "enum",
          "eval",
          "extends",
          "final",
          "finally",
          "float",
          "for",
          "foreach",
          "from",
          "global",
          "goto",
          "if",
          "implements",
          "instanceof",
          "insteadof",
          "int",
          "integer",
          "interface",
          "isset",
          "iterable",
          "list",
          "match|0",
          "mixed",
          "new",
          "never",
          "object",
          "or",
          "private",
          "protected",
          "public",
          "readonly",
          "real",
          "return",
          "string",
          "switch",
          "throw",
          "trait",
          "try",
          "unset",
          "use",
          "var",
          "void",
          "while",
          "xor",
          "yield"
        ];
        const BUILT_INS = [
          // Standard PHP library:
          // <https://www.php.net/manual/en/book.spl.php>
          "Error|0",
          "AppendIterator",
          "ArgumentCountError",
          "ArithmeticError",
          "ArrayIterator",
          "ArrayObject",
          "AssertionError",
          "BadFunctionCallException",
          "BadMethodCallException",
          "CachingIterator",
          "CallbackFilterIterator",
          "CompileError",
          "Countable",
          "DirectoryIterator",
          "DivisionByZeroError",
          "DomainException",
          "EmptyIterator",
          "ErrorException",
          "Exception",
          "FilesystemIterator",
          "FilterIterator",
          "GlobIterator",
          "InfiniteIterator",
          "InvalidArgumentException",
          "IteratorIterator",
          "LengthException",
          "LimitIterator",
          "LogicException",
          "MultipleIterator",
          "NoRewindIterator",
          "OutOfBoundsException",
          "OutOfRangeException",
          "OuterIterator",
          "OverflowException",
          "ParentIterator",
          "ParseError",
          "RangeException",
          "RecursiveArrayIterator",
          "RecursiveCachingIterator",
          "RecursiveCallbackFilterIterator",
          "RecursiveDirectoryIterator",
          "RecursiveFilterIterator",
          "RecursiveIterator",
          "RecursiveIteratorIterator",
          "RecursiveRegexIterator",
          "RecursiveTreeIterator",
          "RegexIterator",
          "RuntimeException",
          "SeekableIterator",
          "SplDoublyLinkedList",
          "SplFileInfo",
          "SplFileObject",
          "SplFixedArray",
          "SplHeap",
          "SplMaxHeap",
          "SplMinHeap",
          "SplObjectStorage",
          "SplObserver",
          "SplPriorityQueue",
          "SplQueue",
          "SplStack",
          "SplSubject",
          "SplTempFileObject",
          "TypeError",
          "UnderflowException",
          "UnexpectedValueException",
          "UnhandledMatchError",
          // Reserved interfaces:
          // <https://www.php.net/manual/en/reserved.interfaces.php>
          "ArrayAccess",
          "BackedEnum",
          "Closure",
          "Fiber",
          "Generator",
          "Iterator",
          "IteratorAggregate",
          "Serializable",
          "Stringable",
          "Throwable",
          "Traversable",
          "UnitEnum",
          "WeakReference",
          "WeakMap",
          // Reserved classes:
          // <https://www.php.net/manual/en/reserved.classes.php>
          "Directory",
          "__PHP_Incomplete_Class",
          "parent",
          "php_user_filter",
          "self",
          "static",
          "stdClass"
        ];
        const dualCase = (items) => {
          const result = [];
          items.forEach((item) => {
            result.push(item);
            if (item.toLowerCase() === item) {
              result.push(item.toUpperCase());
            } else {
              result.push(item.toLowerCase());
            }
          });
          return result;
        };
        const KEYWORDS = {
          keyword: KWS,
          literal: dualCase(LITERALS),
          built_in: BUILT_INS
        };
        const normalizeKeywords = (items) => {
          return items.map((item) => {
            return item.replace(/\|\d+$/, "");
          });
        };
        const CONSTRUCTOR_CALL = { variants: [
          {
            match: [
              /new/,
              regex.concat(WHITESPACE, "+"),
              // to prevent built ins from being confused as the class constructor call
              regex.concat("(?!", normalizeKeywords(BUILT_INS).join("\\b|"), "\\b)"),
              PASCAL_CASE_CLASS_NAME_RE
            ],
            scope: {
              1: "keyword",
              4: "title.class"
            }
          }
        ] };
        const CONSTANT_REFERENCE = regex.concat(IDENT_RE, "\\b(?!\\()");
        const LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON = { variants: [
          {
            match: [
              regex.concat(
                /::/,
                regex.lookahead(/(?!class\b)/)
              ),
              CONSTANT_REFERENCE
            ],
            scope: { 2: "variable.constant" }
          },
          {
            match: [
              /::/,
              /class/
            ],
            scope: { 2: "variable.language" }
          },
          {
            match: [
              PASCAL_CASE_CLASS_NAME_RE,
              regex.concat(
                /::/,
                regex.lookahead(/(?!class\b)/)
              ),
              CONSTANT_REFERENCE
            ],
            scope: {
              1: "title.class",
              3: "variable.constant"
            }
          },
          {
            match: [
              PASCAL_CASE_CLASS_NAME_RE,
              regex.concat(
                "::",
                regex.lookahead(/(?!class\b)/)
              )
            ],
            scope: { 1: "title.class" }
          },
          {
            match: [
              PASCAL_CASE_CLASS_NAME_RE,
              /::/,
              /class/
            ],
            scope: {
              1: "title.class",
              3: "variable.language"
            }
          }
        ] };
        const NAMED_ARGUMENT = {
          scope: "attr",
          match: regex.concat(IDENT_RE, regex.lookahead(":"), regex.lookahead(/(?!::)/))
        };
        const PARAMS_MODE = {
          relevance: 0,
          begin: /\(/,
          end: /\)/,
          keywords: KEYWORDS,
          contains: [
            NAMED_ARGUMENT,
            VARIABLE,
            LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON,
            hljs.C_BLOCK_COMMENT_MODE,
            STRING,
            NUMBER,
            CONSTRUCTOR_CALL
          ]
        };
        const FUNCTION_INVOKE = {
          relevance: 0,
          match: [
            /\b/,
            // to prevent keywords from being confused as the function title
            regex.concat("(?!fn\\b|function\\b|", normalizeKeywords(KWS).join("\\b|"), "|", normalizeKeywords(BUILT_INS).join("\\b|"), "\\b)"),
            IDENT_RE,
            regex.concat(WHITESPACE, "*"),
            regex.lookahead(/(?=\()/)
          ],
          scope: { 3: "title.function.invoke" },
          contains: [PARAMS_MODE]
        };
        PARAMS_MODE.contains.push(FUNCTION_INVOKE);
        const ATTRIBUTE_CONTAINS = [
          NAMED_ARGUMENT,
          LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON,
          hljs.C_BLOCK_COMMENT_MODE,
          STRING,
          NUMBER,
          CONSTRUCTOR_CALL
        ];
        const ATTRIBUTES = {
          begin: regex.concat(/#\[\s*/, PASCAL_CASE_CLASS_NAME_RE),
          beginScope: "meta",
          end: /]/,
          endScope: "meta",
          keywords: {
            literal: LITERALS,
            keyword: [
              "new",
              "array"
            ]
          },
          contains: [
            {
              begin: /\[/,
              end: /]/,
              keywords: {
                literal: LITERALS,
                keyword: [
                  "new",
                  "array"
                ]
              },
              contains: [
                "self",
                ...ATTRIBUTE_CONTAINS
              ]
            },
            ...ATTRIBUTE_CONTAINS,
            {
              scope: "meta",
              match: PASCAL_CASE_CLASS_NAME_RE
            }
          ]
        };
        return {
          case_insensitive: false,
          keywords: KEYWORDS,
          contains: [
            ATTRIBUTES,
            hljs.HASH_COMMENT_MODE,
            hljs.COMMENT("//", "$"),
            hljs.COMMENT(
              "/\\*",
              "\\*/",
              { contains: [
                {
                  scope: "doctag",
                  match: "@[A-Za-z]+"
                }
              ] }
            ),
            {
              match: /__halt_compiler\(\);/,
              keywords: "__halt_compiler",
              starts: {
                scope: "comment",
                end: hljs.MATCH_NOTHING_RE,
                contains: [
                  {
                    match: /\?>/,
                    scope: "meta",
                    endsParent: true
                  }
                ]
              }
            },
            PREPROCESSOR,
            {
              scope: "variable.language",
              match: /\$this\b/
            },
            VARIABLE,
            FUNCTION_INVOKE,
            LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON,
            {
              match: [
                /const/,
                /\s/,
                IDENT_RE
              ],
              scope: {
                1: "keyword",
                3: "variable.constant"
              }
            },
            CONSTRUCTOR_CALL,
            {
              scope: "function",
              relevance: 0,
              beginKeywords: "fn function",
              end: /[;{]/,
              excludeEnd: true,
              illegal: "[$%\\[]",
              contains: [
                { beginKeywords: "use" },
                hljs.UNDERSCORE_TITLE_MODE,
                {
                  begin: "=>",
                  // No markup, just a relevance booster
                  endsParent: true
                },
                {
                  scope: "params",
                  begin: "\\(",
                  end: "\\)",
                  excludeBegin: true,
                  excludeEnd: true,
                  keywords: KEYWORDS,
                  contains: [
                    "self",
                    VARIABLE,
                    LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON,
                    hljs.C_BLOCK_COMMENT_MODE,
                    STRING,
                    NUMBER
                  ]
                }
              ]
            },
            {
              scope: "class",
              variants: [
                {
                  beginKeywords: "enum",
                  illegal: /[($"]/
                },
                {
                  beginKeywords: "class interface trait",
                  illegal: /[:($"]/
                }
              ],
              relevance: 0,
              end: /\{/,
              excludeEnd: true,
              contains: [
                { beginKeywords: "extends implements" },
                hljs.UNDERSCORE_TITLE_MODE
              ]
            },
            // both use and namespace still use "old style" rules (vs multi-match)
            // because the namespace name can include `\` and we still want each
            // element to be treated as its own *individual* title
            {
              beginKeywords: "namespace",
              relevance: 0,
              end: ";",
              illegal: /[.']/,
              contains: [hljs.inherit(hljs.UNDERSCORE_TITLE_MODE, { scope: "title.class" })]
            },
            {
              beginKeywords: "use",
              relevance: 0,
              end: ";",
              contains: [
                // TODO: title.function vs title.class
                {
                  match: /\b(as|const|function)\b/,
                  scope: "keyword"
                },
                // TODO: could be title.class or title.function
                hljs.UNDERSCORE_TITLE_MODE
              ]
            },
            STRING,
            NUMBER
          ]
        };
      }
      module.exports = php;
    }
  });

  // node_modules/highlight.js/lib/languages/php-template.js
  var require_php_template = __commonJS({
    "node_modules/highlight.js/lib/languages/php-template.js"(exports, module) {
      function phpTemplate(hljs) {
        return {
          name: "PHP template",
          subLanguage: "xml",
          contains: [
            {
              begin: /<\?(php|=)?/,
              end: /\?>/,
              subLanguage: "php",
              contains: [
                // We don't want the php closing tag ?> to close the PHP block when
                // inside any of the following blocks:
                {
                  begin: "/\\*",
                  end: "\\*/",
                  skip: true
                },
                {
                  begin: 'b"',
                  end: '"',
                  skip: true
                },
                {
                  begin: "b'",
                  end: "'",
                  skip: true
                },
                hljs.inherit(hljs.APOS_STRING_MODE, {
                  illegal: null,
                  className: null,
                  contains: null,
                  skip: true
                }),
                hljs.inherit(hljs.QUOTE_STRING_MODE, {
                  illegal: null,
                  className: null,
                  contains: null,
                  skip: true
                })
              ]
            }
          ]
        };
      }
      module.exports = phpTemplate;
    }
  });

  // node_modules/highlight.js/lib/languages/plaintext.js
  var require_plaintext = __commonJS({
    "node_modules/highlight.js/lib/languages/plaintext.js"(exports, module) {
      function plaintext(hljs) {
        return {
          name: "Plain text",
          aliases: [
            "text",
            "txt"
          ],
          disableAutodetect: true
        };
      }
      module.exports = plaintext;
    }
  });

  // node_modules/highlight.js/lib/languages/python.js
  var require_python = __commonJS({
    "node_modules/highlight.js/lib/languages/python.js"(exports, module) {
      function python(hljs) {
        const regex = hljs.regex;
        const IDENT_RE = /[\p{XID_Start}_]\p{XID_Continue}*/u;
        const RESERVED_WORDS = [
          "and",
          "as",
          "assert",
          "async",
          "await",
          "break",
          "case",
          "class",
          "continue",
          "def",
          "del",
          "elif",
          "else",
          "except",
          "finally",
          "for",
          "from",
          "global",
          "if",
          "import",
          "in",
          "is",
          "lambda",
          "match",
          "nonlocal|10",
          "not",
          "or",
          "pass",
          "raise",
          "return",
          "try",
          "while",
          "with",
          "yield"
        ];
        const BUILT_INS = [
          "__import__",
          "abs",
          "all",
          "any",
          "ascii",
          "bin",
          "bool",
          "breakpoint",
          "bytearray",
          "bytes",
          "callable",
          "chr",
          "classmethod",
          "compile",
          "complex",
          "delattr",
          "dict",
          "dir",
          "divmod",
          "enumerate",
          "eval",
          "exec",
          "filter",
          "float",
          "format",
          "frozenset",
          "getattr",
          "globals",
          "hasattr",
          "hash",
          "help",
          "hex",
          "id",
          "input",
          "int",
          "isinstance",
          "issubclass",
          "iter",
          "len",
          "list",
          "locals",
          "map",
          "max",
          "memoryview",
          "min",
          "next",
          "object",
          "oct",
          "open",
          "ord",
          "pow",
          "print",
          "property",
          "range",
          "repr",
          "reversed",
          "round",
          "set",
          "setattr",
          "slice",
          "sorted",
          "staticmethod",
          "str",
          "sum",
          "super",
          "tuple",
          "type",
          "vars",
          "zip"
        ];
        const LITERALS = [
          "__debug__",
          "Ellipsis",
          "False",
          "None",
          "NotImplemented",
          "True"
        ];
        const TYPES = [
          "Any",
          "Callable",
          "Coroutine",
          "Dict",
          "List",
          "Literal",
          "Generic",
          "Optional",
          "Sequence",
          "Set",
          "Tuple",
          "Type",
          "Union"
        ];
        const KEYWORDS = {
          $pattern: /[A-Za-z]\w+|__\w+__/,
          keyword: RESERVED_WORDS,
          built_in: BUILT_INS,
          literal: LITERALS,
          type: TYPES
        };
        const PROMPT = {
          className: "meta",
          begin: /^(>>>|\.\.\.) /
        };
        const SUBST = {
          className: "subst",
          begin: /\{/,
          end: /\}/,
          keywords: KEYWORDS,
          illegal: /#/
        };
        const LITERAL_BRACKET = {
          begin: /\{\{/,
          relevance: 0
        };
        const STRING = {
          className: "string",
          contains: [hljs.BACKSLASH_ESCAPE],
          variants: [
            {
              begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
              end: /'''/,
              contains: [
                hljs.BACKSLASH_ESCAPE,
                PROMPT
              ],
              relevance: 10
            },
            {
              begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
              end: /"""/,
              contains: [
                hljs.BACKSLASH_ESCAPE,
                PROMPT
              ],
              relevance: 10
            },
            {
              begin: /([fF][rR]|[rR][fF]|[fF])'''/,
              end: /'''/,
              contains: [
                hljs.BACKSLASH_ESCAPE,
                PROMPT,
                LITERAL_BRACKET,
                SUBST
              ]
            },
            {
              begin: /([fF][rR]|[rR][fF]|[fF])"""/,
              end: /"""/,
              contains: [
                hljs.BACKSLASH_ESCAPE,
                PROMPT,
                LITERAL_BRACKET,
                SUBST
              ]
            },
            {
              begin: /([uU]|[rR])'/,
              end: /'/,
              relevance: 10
            },
            {
              begin: /([uU]|[rR])"/,
              end: /"/,
              relevance: 10
            },
            {
              begin: /([bB]|[bB][rR]|[rR][bB])'/,
              end: /'/
            },
            {
              begin: /([bB]|[bB][rR]|[rR][bB])"/,
              end: /"/
            },
            {
              begin: /([fF][rR]|[rR][fF]|[fF])'/,
              end: /'/,
              contains: [
                hljs.BACKSLASH_ESCAPE,
                LITERAL_BRACKET,
                SUBST
              ]
            },
            {
              begin: /([fF][rR]|[rR][fF]|[fF])"/,
              end: /"/,
              contains: [
                hljs.BACKSLASH_ESCAPE,
                LITERAL_BRACKET,
                SUBST
              ]
            },
            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE
          ]
        };
        const digitpart = "[0-9](_?[0-9])*";
        const pointfloat = `(\\b(${digitpart}))?\\.(${digitpart})|\\b(${digitpart})\\.`;
        const lookahead = `\\b|${RESERVED_WORDS.join("|")}`;
        const NUMBER = {
          className: "number",
          relevance: 0,
          variants: [
            // exponentfloat, pointfloat
            // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
            // optionally imaginary
            // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
            // Note: no leading \b because floats can start with a decimal point
            // and we don't want to mishandle e.g. `fn(.5)`,
            // no trailing \b for pointfloat because it can end with a decimal point
            // and we don't want to mishandle e.g. `0..hex()`; this should be safe
            // because both MUST contain a decimal point and so cannot be confused with
            // the interior part of an identifier
            {
              begin: `(\\b(${digitpart})|(${pointfloat}))[eE][+-]?(${digitpart})[jJ]?(?=${lookahead})`
            },
            {
              begin: `(${pointfloat})[jJ]?`
            },
            // decinteger, bininteger, octinteger, hexinteger
            // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
            // optionally "long" in Python 2
            // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
            // decinteger is optionally imaginary
            // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
            {
              begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${lookahead})`
            },
            {
              begin: `\\b0[bB](_?[01])+[lL]?(?=${lookahead})`
            },
            {
              begin: `\\b0[oO](_?[0-7])+[lL]?(?=${lookahead})`
            },
            {
              begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${lookahead})`
            },
            // imagnumber (digitpart-based)
            // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
            {
              begin: `\\b(${digitpart})[jJ](?=${lookahead})`
            }
          ]
        };
        const COMMENT_TYPE = {
          className: "comment",
          begin: regex.lookahead(/# type:/),
          end: /$/,
          keywords: KEYWORDS,
          contains: [
            {
              // prevent keywords from coloring `type`
              begin: /# type:/
            },
            // comment within a datatype comment includes no keywords
            {
              begin: /#/,
              end: /\b\B/,
              endsWithParent: true
            }
          ]
        };
        const PARAMS = {
          className: "params",
          variants: [
            // Exclude params in functions without params
            {
              className: "",
              begin: /\(\s*\)/,
              skip: true
            },
            {
              begin: /\(/,
              end: /\)/,
              excludeBegin: true,
              excludeEnd: true,
              keywords: KEYWORDS,
              contains: [
                "self",
                PROMPT,
                NUMBER,
                STRING,
                hljs.HASH_COMMENT_MODE
              ]
            }
          ]
        };
        SUBST.contains = [
          STRING,
          NUMBER,
          PROMPT
        ];
        return {
          name: "Python",
          aliases: [
            "py",
            "gyp",
            "ipython"
          ],
          unicodeRegex: true,
          keywords: KEYWORDS,
          illegal: /(<\/|\?)|=>/,
          contains: [
            PROMPT,
            NUMBER,
            {
              // very common convention
              scope: "variable.language",
              match: /\bself\b/
            },
            {
              // eat "if" prior to string so that it won't accidentally be
              // labeled as an f-string
              beginKeywords: "if",
              relevance: 0
            },
            { match: /\bor\b/, scope: "keyword" },
            STRING,
            COMMENT_TYPE,
            hljs.HASH_COMMENT_MODE,
            {
              match: [
                /\bdef/,
                /\s+/,
                IDENT_RE
              ],
              scope: {
                1: "keyword",
                3: "title.function"
              },
              contains: [PARAMS]
            },
            {
              variants: [
                {
                  match: [
                    /\bclass/,
                    /\s+/,
                    IDENT_RE,
                    /\s*/,
                    /\(\s*/,
                    IDENT_RE,
                    /\s*\)/
                  ]
                },
                {
                  match: [
                    /\bclass/,
                    /\s+/,
                    IDENT_RE
                  ]
                }
              ],
              scope: {
                1: "keyword",
                3: "title.class",
                6: "title.class.inherited"
              }
            },
            {
              className: "meta",
              begin: /^[\t ]*@/,
              end: /(?=#)|$/,
              contains: [
                NUMBER,
                PARAMS,
                STRING
              ]
            }
          ]
        };
      }
      module.exports = python;
    }
  });

  // node_modules/highlight.js/lib/languages/python-repl.js
  var require_python_repl = __commonJS({
    "node_modules/highlight.js/lib/languages/python-repl.js"(exports, module) {
      function pythonRepl(hljs) {
        return {
          aliases: ["pycon"],
          contains: [
            {
              className: "meta.prompt",
              starts: {
                // a space separates the REPL prefix from the actual code
                // this is purely for cleaner HTML output
                end: / |$/,
                starts: {
                  end: "$",
                  subLanguage: "python"
                }
              },
              variants: [
                { begin: /^>>>(?=[ ]|$)/ },
                { begin: /^\.\.\.(?=[ ]|$)/ }
              ]
            }
          ]
        };
      }
      module.exports = pythonRepl;
    }
  });

  // node_modules/highlight.js/lib/languages/r.js
  var require_r = __commonJS({
    "node_modules/highlight.js/lib/languages/r.js"(exports, module) {
      function r5(hljs) {
        const regex = hljs.regex;
        const IDENT_RE = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/;
        const NUMBER_TYPES_RE = regex.either(
          // Special case: only hexadecimal binary powers can contain fractions
          /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,
          // Hexadecimal numbers without fraction and optional binary power
          /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,
          // Decimal numbers
          /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/
        );
        const OPERATORS_RE = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/;
        const PUNCTUATION_RE = regex.either(
          /[()]/,
          /[{}]/,
          /\[\[/,
          /[[\]]/,
          /\\/,
          /,/
        );
        return {
          name: "R",
          keywords: {
            $pattern: IDENT_RE,
            keyword: "function if in break next repeat else for while",
            literal: "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
            built_in: (
              // Builtin constants
              "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
            )
          },
          contains: [
            // Roxygen comments
            hljs.COMMENT(
              /#'/,
              /$/,
              { contains: [
                {
                  // Handle `@examples` separately to cause all subsequent code
                  // until the next `@`-tag on its own line to be kept as-is,
                  // preventing highlighting. This code is example R code, so nested
                  // doctags shouldn’t be treated as such. See
                  // `test/markup/r/roxygen.txt` for an example.
                  scope: "doctag",
                  match: /@examples/,
                  starts: {
                    end: regex.lookahead(regex.either(
                      // end if another doc comment
                      /\n^#'\s*(?=@[a-zA-Z]+)/,
                      // or a line with no comment
                      /\n^(?!#')/
                    )),
                    endsParent: true
                  }
                },
                {
                  // Handle `@param` to highlight the parameter name following
                  // after.
                  scope: "doctag",
                  begin: "@param",
                  end: /$/,
                  contains: [
                    {
                      scope: "variable",
                      variants: [
                        { match: IDENT_RE },
                        { match: /`(?:\\.|[^`\\])+`/ }
                      ],
                      endsParent: true
                    }
                  ]
                },
                {
                  scope: "doctag",
                  match: /@[a-zA-Z]+/
                },
                {
                  scope: "keyword",
                  match: /\\[a-zA-Z]+/
                }
              ] }
            ),
            hljs.HASH_COMMENT_MODE,
            {
              scope: "string",
              contains: [hljs.BACKSLASH_ESCAPE],
              variants: [
                hljs.END_SAME_AS_BEGIN({
                  begin: /[rR]"(-*)\(/,
                  end: /\)(-*)"/
                }),
                hljs.END_SAME_AS_BEGIN({
                  begin: /[rR]"(-*)\{/,
                  end: /\}(-*)"/
                }),
                hljs.END_SAME_AS_BEGIN({
                  begin: /[rR]"(-*)\[/,
                  end: /\](-*)"/
                }),
                hljs.END_SAME_AS_BEGIN({
                  begin: /[rR]'(-*)\(/,
                  end: /\)(-*)'/
                }),
                hljs.END_SAME_AS_BEGIN({
                  begin: /[rR]'(-*)\{/,
                  end: /\}(-*)'/
                }),
                hljs.END_SAME_AS_BEGIN({
                  begin: /[rR]'(-*)\[/,
                  end: /\](-*)'/
                }),
                {
                  begin: '"',
                  end: '"',
                  relevance: 0
                },
                {
                  begin: "'",
                  end: "'",
                  relevance: 0
                }
              ]
            },
            // Matching numbers immediately following punctuation and operators is
            // tricky since we need to look at the character ahead of a number to
            // ensure the number is not part of an identifier, and we cannot use
            // negative look-behind assertions. So instead we explicitly handle all
            // possible combinations of (operator|punctuation), number.
            // TODO: replace with negative look-behind when available
            // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/ },
            // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/ },
            // { begin: /(?<![a-zA-Z0-9._])(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/ }
            {
              relevance: 0,
              variants: [
                {
                  scope: {
                    1: "operator",
                    2: "number"
                  },
                  match: [
                    OPERATORS_RE,
                    NUMBER_TYPES_RE
                  ]
                },
                {
                  scope: {
                    1: "operator",
                    2: "number"
                  },
                  match: [
                    /%[^%]*%/,
                    NUMBER_TYPES_RE
                  ]
                },
                {
                  scope: {
                    1: "punctuation",
                    2: "number"
                  },
                  match: [
                    PUNCTUATION_RE,
                    NUMBER_TYPES_RE
                  ]
                },
                {
                  scope: { 2: "number" },
                  match: [
                    /[^a-zA-Z0-9._]|^/,
                    // not part of an identifier, or start of document
                    NUMBER_TYPES_RE
                  ]
                }
              ]
            },
            // Operators/punctuation when they're not directly followed by numbers
            {
              // Relevance boost for the most common assignment form.
              scope: { 3: "operator" },
              match: [
                IDENT_RE,
                /\s+/,
                /<-/,
                /\s+/
              ]
            },
            {
              scope: "operator",
              relevance: 0,
              variants: [
                { match: OPERATORS_RE },
                { match: /%[^%]*%/ }
              ]
            },
            {
              scope: "punctuation",
              relevance: 0,
              match: PUNCTUATION_RE
            },
            {
              // Escaped identifier
              begin: "`",
              end: "`",
              contains: [{ begin: /\\./ }]
            }
          ]
        };
      }
      module.exports = r5;
    }
  });

  // node_modules/highlight.js/lib/languages/rust.js
  var require_rust = __commonJS({
    "node_modules/highlight.js/lib/languages/rust.js"(exports, module) {
      function rust(hljs) {
        const regex = hljs.regex;
        const RAW_IDENTIFIER = /(r#)?/;
        const UNDERSCORE_IDENT_RE = regex.concat(RAW_IDENTIFIER, hljs.UNDERSCORE_IDENT_RE);
        const IDENT_RE = regex.concat(RAW_IDENTIFIER, hljs.IDENT_RE);
        const FUNCTION_INVOKE = {
          className: "title.function.invoke",
          relevance: 0,
          begin: regex.concat(
            /\b/,
            /(?!let|for|while|if|else|match\b)/,
            IDENT_RE,
            regex.lookahead(/\s*\(/)
          )
        };
        const NUMBER_SUFFIX = "([ui](8|16|32|64|128|size)|f(32|64))?";
        const KEYWORDS = [
          "abstract",
          "as",
          "async",
          "await",
          "become",
          "box",
          "break",
          "const",
          "continue",
          "crate",
          "do",
          "dyn",
          "else",
          "enum",
          "extern",
          "false",
          "final",
          "fn",
          "for",
          "if",
          "impl",
          "in",
          "let",
          "loop",
          "macro",
          "match",
          "mod",
          "move",
          "mut",
          "override",
          "priv",
          "pub",
          "ref",
          "return",
          "self",
          "Self",
          "static",
          "struct",
          "super",
          "trait",
          "true",
          "try",
          "type",
          "typeof",
          "union",
          "unsafe",
          "unsized",
          "use",
          "virtual",
          "where",
          "while",
          "yield"
        ];
        const LITERALS = [
          "true",
          "false",
          "Some",
          "None",
          "Ok",
          "Err"
        ];
        const BUILTINS = [
          // functions
          "drop ",
          // traits
          "Copy",
          "Send",
          "Sized",
          "Sync",
          "Drop",
          "Fn",
          "FnMut",
          "FnOnce",
          "ToOwned",
          "Clone",
          "Debug",
          "PartialEq",
          "PartialOrd",
          "Eq",
          "Ord",
          "AsRef",
          "AsMut",
          "Into",
          "From",
          "Default",
          "Iterator",
          "Extend",
          "IntoIterator",
          "DoubleEndedIterator",
          "ExactSizeIterator",
          "SliceConcatExt",
          "ToString",
          // macros
          "assert!",
          "assert_eq!",
          "bitflags!",
          "bytes!",
          "cfg!",
          "col!",
          "concat!",
          "concat_idents!",
          "debug_assert!",
          "debug_assert_eq!",
          "env!",
          "eprintln!",
          "panic!",
          "file!",
          "format!",
          "format_args!",
          "include_bytes!",
          "include_str!",
          "line!",
          "local_data_key!",
          "module_path!",
          "option_env!",
          "print!",
          "println!",
          "select!",
          "stringify!",
          "try!",
          "unimplemented!",
          "unreachable!",
          "vec!",
          "write!",
          "writeln!",
          "macro_rules!",
          "assert_ne!",
          "debug_assert_ne!"
        ];
        const TYPES = [
          "i8",
          "i16",
          "i32",
          "i64",
          "i128",
          "isize",
          "u8",
          "u16",
          "u32",
          "u64",
          "u128",
          "usize",
          "f32",
          "f64",
          "str",
          "char",
          "bool",
          "Box",
          "Option",
          "Result",
          "String",
          "Vec"
        ];
        return {
          name: "Rust",
          aliases: ["rs"],
          keywords: {
            $pattern: hljs.IDENT_RE + "!?",
            type: TYPES,
            keyword: KEYWORDS,
            literal: LITERALS,
            built_in: BUILTINS
          },
          illegal: "</",
          contains: [
            hljs.C_LINE_COMMENT_MODE,
            hljs.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
            hljs.inherit(hljs.QUOTE_STRING_MODE, {
              begin: /b?"/,
              illegal: null
            }),
            {
              className: "string",
              variants: [
                { begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ },
                { begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/ }
              ]
            },
            {
              className: "symbol",
              begin: /'[a-zA-Z_][a-zA-Z0-9_]*/
            },
            {
              className: "number",
              variants: [
                { begin: "\\b0b([01_]+)" + NUMBER_SUFFIX },
                { begin: "\\b0o([0-7_]+)" + NUMBER_SUFFIX },
                { begin: "\\b0x([A-Fa-f0-9_]+)" + NUMBER_SUFFIX },
                { begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + NUMBER_SUFFIX }
              ],
              relevance: 0
            },
            {
              begin: [
                /fn/,
                /\s+/,
                UNDERSCORE_IDENT_RE
              ],
              className: {
                1: "keyword",
                3: "title.function"
              }
            },
            {
              className: "meta",
              begin: "#!?\\[",
              end: "\\]",
              contains: [
                {
                  className: "string",
                  begin: /"/,
                  end: /"/,
                  contains: [
                    hljs.BACKSLASH_ESCAPE
                  ]
                }
              ]
            },
            {
              begin: [
                /let/,
                /\s+/,
                /(?:mut\s+)?/,
                UNDERSCORE_IDENT_RE
              ],
              className: {
                1: "keyword",
                3: "keyword",
                4: "variable"
              }
            },
            // must come before impl/for rule later
            {
              begin: [
                /for/,
                /\s+/,
                UNDERSCORE_IDENT_RE,
                /\s+/,
                /in/
              ],
              className: {
                1: "keyword",
                3: "variable",
                5: "keyword"
              }
            },
            {
              begin: [
                /type/,
                /\s+/,
                UNDERSCORE_IDENT_RE
              ],
              className: {
                1: "keyword",
                3: "title.class"
              }
            },
            {
              begin: [
                /(?:trait|enum|struct|union|impl|for)/,
                /\s+/,
                UNDERSCORE_IDENT_RE
              ],
              className: {
                1: "keyword",
                3: "title.class"
              }
            },
            {
              begin: hljs.IDENT_RE + "::",
              keywords: {
                keyword: "Self",
                built_in: BUILTINS,
                type: TYPES
              }
            },
            {
              className: "punctuation",
              begin: "->"
            },
            FUNCTION_INVOKE
          ]
        };
      }
      module.exports = rust;
    }
  });

  // node_modules/highlight.js/lib/languages/scss.js
  var require_scss = __commonJS({
    "node_modules/highlight.js/lib/languages/scss.js"(exports, module) {
      var MODES = (hljs) => {
        return {
          IMPORTANT: {
            scope: "meta",
            begin: "!important"
          },
          BLOCK_COMMENT: hljs.C_BLOCK_COMMENT_MODE,
          HEXCOLOR: {
            scope: "number",
            begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
          },
          FUNCTION_DISPATCH: {
            className: "built_in",
            begin: /[\w-]+(?=\()/
          },
          ATTRIBUTE_SELECTOR_MODE: {
            scope: "selector-attr",
            begin: /\[/,
            end: /\]/,
            illegal: "$",
            contains: [
              hljs.APOS_STRING_MODE,
              hljs.QUOTE_STRING_MODE
            ]
          },
          CSS_NUMBER_MODE: {
            scope: "number",
            begin: hljs.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
            relevance: 0
          },
          CSS_VARIABLE: {
            className: "attr",
            begin: /--[A-Za-z_][A-Za-z0-9_-]*/
          }
        };
      };
      var HTML_TAGS = [
        "a",
        "abbr",
        "address",
        "article",
        "aside",
        "audio",
        "b",
        "blockquote",
        "body",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "dd",
        "del",
        "details",
        "dfn",
        "div",
        "dl",
        "dt",
        "em",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "header",
        "hgroup",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "label",
        "legend",
        "li",
        "main",
        "mark",
        "menu",
        "nav",
        "object",
        "ol",
        "optgroup",
        "option",
        "p",
        "picture",
        "q",
        "quote",
        "samp",
        "section",
        "select",
        "source",
        "span",
        "strong",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "tr",
        "ul",
        "var",
        "video"
      ];
      var SVG_TAGS = [
        "defs",
        "g",
        "marker",
        "mask",
        "pattern",
        "svg",
        "switch",
        "symbol",
        "feBlend",
        "feColorMatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feFlood",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMorphology",
        "feOffset",
        "feSpecularLighting",
        "feTile",
        "feTurbulence",
        "linearGradient",
        "radialGradient",
        "stop",
        "circle",
        "ellipse",
        "image",
        "line",
        "path",
        "polygon",
        "polyline",
        "rect",
        "text",
        "use",
        "textPath",
        "tspan",
        "foreignObject",
        "clipPath"
      ];
      var TAGS = [
        ...HTML_TAGS,
        ...SVG_TAGS
      ];
      var MEDIA_FEATURES = [
        "any-hover",
        "any-pointer",
        "aspect-ratio",
        "color",
        "color-gamut",
        "color-index",
        "device-aspect-ratio",
        "device-height",
        "device-width",
        "display-mode",
        "forced-colors",
        "grid",
        "height",
        "hover",
        "inverted-colors",
        "monochrome",
        "orientation",
        "overflow-block",
        "overflow-inline",
        "pointer",
        "prefers-color-scheme",
        "prefers-contrast",
        "prefers-reduced-motion",
        "prefers-reduced-transparency",
        "resolution",
        "scan",
        "scripting",
        "update",
        "width",
        // TODO: find a better solution?
        "min-width",
        "max-width",
        "min-height",
        "max-height"
      ].sort().reverse();
      var PSEUDO_CLASSES = [
        "active",
        "any-link",
        "blank",
        "checked",
        "current",
        "default",
        "defined",
        "dir",
        // dir()
        "disabled",
        "drop",
        "empty",
        "enabled",
        "first",
        "first-child",
        "first-of-type",
        "fullscreen",
        "future",
        "focus",
        "focus-visible",
        "focus-within",
        "has",
        // has()
        "host",
        // host or host()
        "host-context",
        // host-context()
        "hover",
        "indeterminate",
        "in-range",
        "invalid",
        "is",
        // is()
        "lang",
        // lang()
        "last-child",
        "last-of-type",
        "left",
        "link",
        "local-link",
        "not",
        // not()
        "nth-child",
        // nth-child()
        "nth-col",
        // nth-col()
        "nth-last-child",
        // nth-last-child()
        "nth-last-col",
        // nth-last-col()
        "nth-last-of-type",
        //nth-last-of-type()
        "nth-of-type",
        //nth-of-type()
        "only-child",
        "only-of-type",
        "optional",
        "out-of-range",
        "past",
        "placeholder-shown",
        "read-only",
        "read-write",
        "required",
        "right",
        "root",
        "scope",
        "target",
        "target-within",
        "user-invalid",
        "valid",
        "visited",
        "where"
        // where()
      ].sort().reverse();
      var PSEUDO_ELEMENTS = [
        "after",
        "backdrop",
        "before",
        "cue",
        "cue-region",
        "first-letter",
        "first-line",
        "grammar-error",
        "marker",
        "part",
        "placeholder",
        "selection",
        "slotted",
        "spelling-error"
      ].sort().reverse();
      var ATTRIBUTES = [
        "accent-color",
        "align-content",
        "align-items",
        "align-self",
        "alignment-baseline",
        "all",
        "animation",
        "animation-delay",
        "animation-direction",
        "animation-duration",
        "animation-fill-mode",
        "animation-iteration-count",
        "animation-name",
        "animation-play-state",
        "animation-timing-function",
        "appearance",
        "backface-visibility",
        "background",
        "background-attachment",
        "background-blend-mode",
        "background-clip",
        "background-color",
        "background-image",
        "background-origin",
        "background-position",
        "background-repeat",
        "background-size",
        "baseline-shift",
        "block-size",
        "border",
        "border-block",
        "border-block-color",
        "border-block-end",
        "border-block-end-color",
        "border-block-end-style",
        "border-block-end-width",
        "border-block-start",
        "border-block-start-color",
        "border-block-start-style",
        "border-block-start-width",
        "border-block-style",
        "border-block-width",
        "border-bottom",
        "border-bottom-color",
        "border-bottom-left-radius",
        "border-bottom-right-radius",
        "border-bottom-style",
        "border-bottom-width",
        "border-collapse",
        "border-color",
        "border-image",
        "border-image-outset",
        "border-image-repeat",
        "border-image-slice",
        "border-image-source",
        "border-image-width",
        "border-inline",
        "border-inline-color",
        "border-inline-end",
        "border-inline-end-color",
        "border-inline-end-style",
        "border-inline-end-width",
        "border-inline-start",
        "border-inline-start-color",
        "border-inline-start-style",
        "border-inline-start-width",
        "border-inline-style",
        "border-inline-width",
        "border-left",
        "border-left-color",
        "border-left-style",
        "border-left-width",
        "border-radius",
        "border-right",
        "border-end-end-radius",
        "border-end-start-radius",
        "border-right-color",
        "border-right-style",
        "border-right-width",
        "border-spacing",
        "border-start-end-radius",
        "border-start-start-radius",
        "border-style",
        "border-top",
        "border-top-color",
        "border-top-left-radius",
        "border-top-right-radius",
        "border-top-style",
        "border-top-width",
        "border-width",
        "bottom",
        "box-decoration-break",
        "box-shadow",
        "box-sizing",
        "break-after",
        "break-before",
        "break-inside",
        "cx",
        "cy",
        "caption-side",
        "caret-color",
        "clear",
        "clip",
        "clip-path",
        "clip-rule",
        "color",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "color-scheme",
        "column-count",
        "column-fill",
        "column-gap",
        "column-rule",
        "column-rule-color",
        "column-rule-style",
        "column-rule-width",
        "column-span",
        "column-width",
        "columns",
        "contain",
        "content",
        "content-visibility",
        "counter-increment",
        "counter-reset",
        "cue",
        "cue-after",
        "cue-before",
        "cursor",
        "direction",
        "display",
        "dominant-baseline",
        "empty-cells",
        "enable-background",
        "fill",
        "fill-opacity",
        "fill-rule",
        "filter",
        "flex",
        "flex-basis",
        "flex-direction",
        "flex-flow",
        "flex-grow",
        "flex-shrink",
        "flex-wrap",
        "float",
        "flow",
        "flood-color",
        "flood-opacity",
        "font",
        "font-display",
        "font-family",
        "font-feature-settings",
        "font-kerning",
        "font-language-override",
        "font-size",
        "font-size-adjust",
        "font-smoothing",
        "font-stretch",
        "font-style",
        "font-synthesis",
        "font-variant",
        "font-variant-caps",
        "font-variant-east-asian",
        "font-variant-ligatures",
        "font-variant-numeric",
        "font-variant-position",
        "font-variation-settings",
        "font-weight",
        "gap",
        "glyph-orientation-horizontal",
        "glyph-orientation-vertical",
        "grid",
        "grid-area",
        "grid-auto-columns",
        "grid-auto-flow",
        "grid-auto-rows",
        "grid-column",
        "grid-column-end",
        "grid-column-start",
        "grid-gap",
        "grid-row",
        "grid-row-end",
        "grid-row-start",
        "grid-template",
        "grid-template-areas",
        "grid-template-columns",
        "grid-template-rows",
        "hanging-punctuation",
        "height",
        "hyphens",
        "icon",
        "image-orientation",
        "image-rendering",
        "image-resolution",
        "ime-mode",
        "inline-size",
        "inset",
        "inset-block",
        "inset-block-end",
        "inset-block-start",
        "inset-inline",
        "inset-inline-end",
        "inset-inline-start",
        "isolation",
        "kerning",
        "justify-content",
        "justify-items",
        "justify-self",
        "left",
        "letter-spacing",
        "lighting-color",
        "line-break",
        "line-height",
        "list-style",
        "list-style-image",
        "list-style-position",
        "list-style-type",
        "marker",
        "marker-end",
        "marker-mid",
        "marker-start",
        "mask",
        "margin",
        "margin-block",
        "margin-block-end",
        "margin-block-start",
        "margin-bottom",
        "margin-inline",
        "margin-inline-end",
        "margin-inline-start",
        "margin-left",
        "margin-right",
        "margin-top",
        "marks",
        "mask",
        "mask-border",
        "mask-border-mode",
        "mask-border-outset",
        "mask-border-repeat",
        "mask-border-slice",
        "mask-border-source",
        "mask-border-width",
        "mask-clip",
        "mask-composite",
        "mask-image",
        "mask-mode",
        "mask-origin",
        "mask-position",
        "mask-repeat",
        "mask-size",
        "mask-type",
        "max-block-size",
        "max-height",
        "max-inline-size",
        "max-width",
        "min-block-size",
        "min-height",
        "min-inline-size",
        "min-width",
        "mix-blend-mode",
        "nav-down",
        "nav-index",
        "nav-left",
        "nav-right",
        "nav-up",
        "none",
        "normal",
        "object-fit",
        "object-position",
        "opacity",
        "order",
        "orphans",
        "outline",
        "outline-color",
        "outline-offset",
        "outline-style",
        "outline-width",
        "overflow",
        "overflow-wrap",
        "overflow-x",
        "overflow-y",
        "padding",
        "padding-block",
        "padding-block-end",
        "padding-block-start",
        "padding-bottom",
        "padding-inline",
        "padding-inline-end",
        "padding-inline-start",
        "padding-left",
        "padding-right",
        "padding-top",
        "page-break-after",
        "page-break-before",
        "page-break-inside",
        "pause",
        "pause-after",
        "pause-before",
        "perspective",
        "perspective-origin",
        "pointer-events",
        "position",
        "quotes",
        "r",
        "resize",
        "rest",
        "rest-after",
        "rest-before",
        "right",
        "rotate",
        "row-gap",
        "scale",
        "scroll-margin",
        "scroll-margin-block",
        "scroll-margin-block-end",
        "scroll-margin-block-start",
        "scroll-margin-bottom",
        "scroll-margin-inline",
        "scroll-margin-inline-end",
        "scroll-margin-inline-start",
        "scroll-margin-left",
        "scroll-margin-right",
        "scroll-margin-top",
        "scroll-padding",
        "scroll-padding-block",
        "scroll-padding-block-end",
        "scroll-padding-block-start",
        "scroll-padding-bottom",
        "scroll-padding-inline",
        "scroll-padding-inline-end",
        "scroll-padding-inline-start",
        "scroll-padding-left",
        "scroll-padding-right",
        "scroll-padding-top",
        "scroll-snap-align",
        "scroll-snap-stop",
        "scroll-snap-type",
        "scrollbar-color",
        "scrollbar-gutter",
        "scrollbar-width",
        "shape-image-threshold",
        "shape-margin",
        "shape-outside",
        "shape-rendering",
        "stop-color",
        "stop-opacity",
        "stroke",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke-width",
        "speak",
        "speak-as",
        "src",
        // @font-face
        "tab-size",
        "table-layout",
        "text-anchor",
        "text-align",
        "text-align-all",
        "text-align-last",
        "text-combine-upright",
        "text-decoration",
        "text-decoration-color",
        "text-decoration-line",
        "text-decoration-skip-ink",
        "text-decoration-style",
        "text-decoration-thickness",
        "text-emphasis",
        "text-emphasis-color",
        "text-emphasis-position",
        "text-emphasis-style",
        "text-indent",
        "text-justify",
        "text-orientation",
        "text-overflow",
        "text-rendering",
        "text-shadow",
        "text-transform",
        "text-underline-offset",
        "text-underline-position",
        "top",
        "transform",
        "transform-box",
        "transform-origin",
        "transform-style",
        "transition",
        "transition-delay",
        "transition-duration",
        "transition-property",
        "transition-timing-function",
        "translate",
        "unicode-bidi",
        "vector-effect",
        "vertical-align",
        "visibility",
        "voice-balance",
        "voice-duration",
        "voice-family",
        "voice-pitch",
        "voice-range",
        "voice-rate",
        "voice-stress",
        "voice-volume",
        "white-space",
        "widows",
        "width",
        "will-change",
        "word-break",
        "word-spacing",
        "word-wrap",
        "writing-mode",
        "x",
        "y",
        "z-index"
      ].sort().reverse();
      function scss(hljs) {
        const modes = MODES(hljs);
        const PSEUDO_ELEMENTS$1 = PSEUDO_ELEMENTS;
        const PSEUDO_CLASSES$1 = PSEUDO_CLASSES;
        const AT_IDENTIFIER = "@[a-z-]+";
        const AT_MODIFIERS = "and or not only";
        const IDENT_RE = "[a-zA-Z-][a-zA-Z0-9_-]*";
        const VARIABLE = {
          className: "variable",
          begin: "(\\$" + IDENT_RE + ")\\b",
          relevance: 0
        };
        return {
          name: "SCSS",
          case_insensitive: true,
          illegal: "[=/|']",
          contains: [
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            // to recognize keyframe 40% etc which are outside the scope of our
            // attribute value mode
            modes.CSS_NUMBER_MODE,
            {
              className: "selector-id",
              begin: "#[A-Za-z0-9_-]+",
              relevance: 0
            },
            {
              className: "selector-class",
              begin: "\\.[A-Za-z0-9_-]+",
              relevance: 0
            },
            modes.ATTRIBUTE_SELECTOR_MODE,
            {
              className: "selector-tag",
              begin: "\\b(" + TAGS.join("|") + ")\\b",
              // was there, before, but why?
              relevance: 0
            },
            {
              className: "selector-pseudo",
              begin: ":(" + PSEUDO_CLASSES$1.join("|") + ")"
            },
            {
              className: "selector-pseudo",
              begin: ":(:)?(" + PSEUDO_ELEMENTS$1.join("|") + ")"
            },
            VARIABLE,
            {
              // pseudo-selector params
              begin: /\(/,
              end: /\)/,
              contains: [modes.CSS_NUMBER_MODE]
            },
            modes.CSS_VARIABLE,
            {
              className: "attribute",
              begin: "\\b(" + ATTRIBUTES.join("|") + ")\\b"
            },
            { begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b" },
            {
              begin: /:/,
              end: /[;}{]/,
              relevance: 0,
              contains: [
                modes.BLOCK_COMMENT,
                VARIABLE,
                modes.HEXCOLOR,
                modes.CSS_NUMBER_MODE,
                hljs.QUOTE_STRING_MODE,
                hljs.APOS_STRING_MODE,
                modes.IMPORTANT,
                modes.FUNCTION_DISPATCH
              ]
            },
            // matching these here allows us to treat them more like regular CSS
            // rules so everything between the {} gets regular rule highlighting,
            // which is what we want for page and font-face
            {
              begin: "@(page|font-face)",
              keywords: {
                $pattern: AT_IDENTIFIER,
                keyword: "@page @font-face"
              }
            },
            {
              begin: "@",
              end: "[{;]",
              returnBegin: true,
              keywords: {
                $pattern: /[a-z-]+/,
                keyword: AT_MODIFIERS,
                attribute: MEDIA_FEATURES.join(" ")
              },
              contains: [
                {
                  begin: AT_IDENTIFIER,
                  className: "keyword"
                },
                {
                  begin: /[a-z-]+(?=:)/,
                  className: "attribute"
                },
                VARIABLE,
                hljs.QUOTE_STRING_MODE,
                hljs.APOS_STRING_MODE,
                modes.HEXCOLOR,
                modes.CSS_NUMBER_MODE
              ]
            },
            modes.FUNCTION_DISPATCH
          ]
        };
      }
      module.exports = scss;
    }
  });

  // node_modules/highlight.js/lib/languages/shell.js
  var require_shell = __commonJS({
    "node_modules/highlight.js/lib/languages/shell.js"(exports, module) {
      function shell(hljs) {
        return {
          name: "Shell Session",
          aliases: [
            "console",
            "shellsession"
          ],
          contains: [
            {
              className: "meta.prompt",
              // We cannot add \s (spaces) in the regular expression otherwise it will be too broad and produce unexpected result.
              // For instance, in the following example, it would match "echo /path/to/home >" as a prompt:
              // echo /path/to/home > t.exe
              begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
              starts: {
                end: /[^\\](?=\s*$)/,
                subLanguage: "bash"
              }
            }
          ]
        };
      }
      module.exports = shell;
    }
  });

  // node_modules/highlight.js/lib/languages/sql.js
  var require_sql = __commonJS({
    "node_modules/highlight.js/lib/languages/sql.js"(exports, module) {
      function sql(hljs) {
        const regex = hljs.regex;
        const COMMENT_MODE = hljs.COMMENT("--", "$");
        const STRING = {
          className: "string",
          variants: [
            {
              begin: /'/,
              end: /'/,
              contains: [{ begin: /''/ }]
            }
          ]
        };
        const QUOTED_IDENTIFIER = {
          begin: /"/,
          end: /"/,
          contains: [{ begin: /""/ }]
        };
        const LITERALS = [
          "true",
          "false",
          // Not sure it's correct to call NULL literal, and clauses like IS [NOT] NULL look strange that way.
          // "null",
          "unknown"
        ];
        const MULTI_WORD_TYPES = [
          "double precision",
          "large object",
          "with timezone",
          "without timezone"
        ];
        const TYPES = [
          "bigint",
          "binary",
          "blob",
          "boolean",
          "char",
          "character",
          "clob",
          "date",
          "dec",
          "decfloat",
          "decimal",
          "float",
          "int",
          "integer",
          "interval",
          "nchar",
          "nclob",
          "national",
          "numeric",
          "real",
          "row",
          "smallint",
          "time",
          "timestamp",
          "varchar",
          "varying",
          // modifier (character varying)
          "varbinary"
        ];
        const NON_RESERVED_WORDS = [
          "add",
          "asc",
          "collation",
          "desc",
          "final",
          "first",
          "last",
          "view"
        ];
        const RESERVED_WORDS = [
          "abs",
          "acos",
          "all",
          "allocate",
          "alter",
          "and",
          "any",
          "are",
          "array",
          "array_agg",
          "array_max_cardinality",
          "as",
          "asensitive",
          "asin",
          "asymmetric",
          "at",
          "atan",
          "atomic",
          "authorization",
          "avg",
          "begin",
          "begin_frame",
          "begin_partition",
          "between",
          "bigint",
          "binary",
          "blob",
          "boolean",
          "both",
          "by",
          "call",
          "called",
          "cardinality",
          "cascaded",
          "case",
          "cast",
          "ceil",
          "ceiling",
          "char",
          "char_length",
          "character",
          "character_length",
          "check",
          "classifier",
          "clob",
          "close",
          "coalesce",
          "collate",
          "collect",
          "column",
          "commit",
          "condition",
          "connect",
          "constraint",
          "contains",
          "convert",
          "copy",
          "corr",
          "corresponding",
          "cos",
          "cosh",
          "count",
          "covar_pop",
          "covar_samp",
          "create",
          "cross",
          "cube",
          "cume_dist",
          "current",
          "current_catalog",
          "current_date",
          "current_default_transform_group",
          "current_path",
          "current_role",
          "current_row",
          "current_schema",
          "current_time",
          "current_timestamp",
          "current_path",
          "current_role",
          "current_transform_group_for_type",
          "current_user",
          "cursor",
          "cycle",
          "date",
          "day",
          "deallocate",
          "dec",
          "decimal",
          "decfloat",
          "declare",
          "default",
          "define",
          "delete",
          "dense_rank",
          "deref",
          "describe",
          "deterministic",
          "disconnect",
          "distinct",
          "double",
          "drop",
          "dynamic",
          "each",
          "element",
          "else",
          "empty",
          "end",
          "end_frame",
          "end_partition",
          "end-exec",
          "equals",
          "escape",
          "every",
          "except",
          "exec",
          "execute",
          "exists",
          "exp",
          "external",
          "extract",
          "false",
          "fetch",
          "filter",
          "first_value",
          "float",
          "floor",
          "for",
          "foreign",
          "frame_row",
          "free",
          "from",
          "full",
          "function",
          "fusion",
          "get",
          "global",
          "grant",
          "group",
          "grouping",
          "groups",
          "having",
          "hold",
          "hour",
          "identity",
          "in",
          "indicator",
          "initial",
          "inner",
          "inout",
          "insensitive",
          "insert",
          "int",
          "integer",
          "intersect",
          "intersection",
          "interval",
          "into",
          "is",
          "join",
          "json_array",
          "json_arrayagg",
          "json_exists",
          "json_object",
          "json_objectagg",
          "json_query",
          "json_table",
          "json_table_primitive",
          "json_value",
          "lag",
          "language",
          "large",
          "last_value",
          "lateral",
          "lead",
          "leading",
          "left",
          "like",
          "like_regex",
          "listagg",
          "ln",
          "local",
          "localtime",
          "localtimestamp",
          "log",
          "log10",
          "lower",
          "match",
          "match_number",
          "match_recognize",
          "matches",
          "max",
          "member",
          "merge",
          "method",
          "min",
          "minute",
          "mod",
          "modifies",
          "module",
          "month",
          "multiset",
          "national",
          "natural",
          "nchar",
          "nclob",
          "new",
          "no",
          "none",
          "normalize",
          "not",
          "nth_value",
          "ntile",
          "null",
          "nullif",
          "numeric",
          "octet_length",
          "occurrences_regex",
          "of",
          "offset",
          "old",
          "omit",
          "on",
          "one",
          "only",
          "open",
          "or",
          "order",
          "out",
          "outer",
          "over",
          "overlaps",
          "overlay",
          "parameter",
          "partition",
          "pattern",
          "per",
          "percent",
          "percent_rank",
          "percentile_cont",
          "percentile_disc",
          "period",
          "portion",
          "position",
          "position_regex",
          "power",
          "precedes",
          "precision",
          "prepare",
          "primary",
          "procedure",
          "ptf",
          "range",
          "rank",
          "reads",
          "real",
          "recursive",
          "ref",
          "references",
          "referencing",
          "regr_avgx",
          "regr_avgy",
          "regr_count",
          "regr_intercept",
          "regr_r2",
          "regr_slope",
          "regr_sxx",
          "regr_sxy",
          "regr_syy",
          "release",
          "result",
          "return",
          "returns",
          "revoke",
          "right",
          "rollback",
          "rollup",
          "row",
          "row_number",
          "rows",
          "running",
          "savepoint",
          "scope",
          "scroll",
          "search",
          "second",
          "seek",
          "select",
          "sensitive",
          "session_user",
          "set",
          "show",
          "similar",
          "sin",
          "sinh",
          "skip",
          "smallint",
          "some",
          "specific",
          "specifictype",
          "sql",
          "sqlexception",
          "sqlstate",
          "sqlwarning",
          "sqrt",
          "start",
          "static",
          "stddev_pop",
          "stddev_samp",
          "submultiset",
          "subset",
          "substring",
          "substring_regex",
          "succeeds",
          "sum",
          "symmetric",
          "system",
          "system_time",
          "system_user",
          "table",
          "tablesample",
          "tan",
          "tanh",
          "then",
          "time",
          "timestamp",
          "timezone_hour",
          "timezone_minute",
          "to",
          "trailing",
          "translate",
          "translate_regex",
          "translation",
          "treat",
          "trigger",
          "trim",
          "trim_array",
          "true",
          "truncate",
          "uescape",
          "union",
          "unique",
          "unknown",
          "unnest",
          "update",
          "upper",
          "user",
          "using",
          "value",
          "values",
          "value_of",
          "var_pop",
          "var_samp",
          "varbinary",
          "varchar",
          "varying",
          "versioning",
          "when",
          "whenever",
          "where",
          "width_bucket",
          "window",
          "with",
          "within",
          "without",
          "year"
        ];
        const RESERVED_FUNCTIONS = [
          "abs",
          "acos",
          "array_agg",
          "asin",
          "atan",
          "avg",
          "cast",
          "ceil",
          "ceiling",
          "coalesce",
          "corr",
          "cos",
          "cosh",
          "count",
          "covar_pop",
          "covar_samp",
          "cume_dist",
          "dense_rank",
          "deref",
          "element",
          "exp",
          "extract",
          "first_value",
          "floor",
          "json_array",
          "json_arrayagg",
          "json_exists",
          "json_object",
          "json_objectagg",
          "json_query",
          "json_table",
          "json_table_primitive",
          "json_value",
          "lag",
          "last_value",
          "lead",
          "listagg",
          "ln",
          "log",
          "log10",
          "lower",
          "max",
          "min",
          "mod",
          "nth_value",
          "ntile",
          "nullif",
          "percent_rank",
          "percentile_cont",
          "percentile_disc",
          "position",
          "position_regex",
          "power",
          "rank",
          "regr_avgx",
          "regr_avgy",
          "regr_count",
          "regr_intercept",
          "regr_r2",
          "regr_slope",
          "regr_sxx",
          "regr_sxy",
          "regr_syy",
          "row_number",
          "sin",
          "sinh",
          "sqrt",
          "stddev_pop",
          "stddev_samp",
          "substring",
          "substring_regex",
          "sum",
          "tan",
          "tanh",
          "translate",
          "translate_regex",
          "treat",
          "trim",
          "trim_array",
          "unnest",
          "upper",
          "value_of",
          "var_pop",
          "var_samp",
          "width_bucket"
        ];
        const POSSIBLE_WITHOUT_PARENS = [
          "current_catalog",
          "current_date",
          "current_default_transform_group",
          "current_path",
          "current_role",
          "current_schema",
          "current_transform_group_for_type",
          "current_user",
          "session_user",
          "system_time",
          "system_user",
          "current_time",
          "localtime",
          "current_timestamp",
          "localtimestamp"
        ];
        const COMBOS = [
          "create table",
          "insert into",
          "primary key",
          "foreign key",
          "not null",
          "alter table",
          "add constraint",
          "grouping sets",
          "on overflow",
          "character set",
          "respect nulls",
          "ignore nulls",
          "nulls first",
          "nulls last",
          "depth first",
          "breadth first"
        ];
        const FUNCTIONS = RESERVED_FUNCTIONS;
        const KEYWORDS = [
          ...RESERVED_WORDS,
          ...NON_RESERVED_WORDS
        ].filter((keyword) => {
          return !RESERVED_FUNCTIONS.includes(keyword);
        });
        const VARIABLE = {
          className: "variable",
          begin: /@[a-z0-9][a-z0-9_]*/
        };
        const OPERATOR = {
          className: "operator",
          begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
          relevance: 0
        };
        const FUNCTION_CALL = {
          begin: regex.concat(/\b/, regex.either(...FUNCTIONS), /\s*\(/),
          relevance: 0,
          keywords: { built_in: FUNCTIONS }
        };
        function reduceRelevancy(list, {
          exceptions,
          when
        } = {}) {
          const qualifyFn = when;
          exceptions = exceptions || [];
          return list.map((item) => {
            if (item.match(/\|\d+$/) || exceptions.includes(item)) {
              return item;
            } else if (qualifyFn(item)) {
              return `${item}|0`;
            } else {
              return item;
            }
          });
        }
        return {
          name: "SQL",
          case_insensitive: true,
          // does not include {} or HTML tags `</`
          illegal: /[{}]|<\//,
          keywords: {
            $pattern: /\b[\w\.]+/,
            keyword: reduceRelevancy(KEYWORDS, { when: (x2) => x2.length < 3 }),
            literal: LITERALS,
            type: TYPES,
            built_in: POSSIBLE_WITHOUT_PARENS
          },
          contains: [
            {
              begin: regex.either(...COMBOS),
              relevance: 0,
              keywords: {
                $pattern: /[\w\.]+/,
                keyword: KEYWORDS.concat(COMBOS),
                literal: LITERALS,
                type: TYPES
              }
            },
            {
              className: "type",
              begin: regex.either(...MULTI_WORD_TYPES)
            },
            FUNCTION_CALL,
            VARIABLE,
            STRING,
            QUOTED_IDENTIFIER,
            hljs.C_NUMBER_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            COMMENT_MODE,
            OPERATOR
          ]
        };
      }
      module.exports = sql;
    }
  });

  // node_modules/highlight.js/lib/languages/swift.js
  var require_swift = __commonJS({
    "node_modules/highlight.js/lib/languages/swift.js"(exports, module) {
      function source(re) {
        if (!re) return null;
        if (typeof re === "string") return re;
        return re.source;
      }
      function lookahead(re) {
        return concat("(?=", re, ")");
      }
      function concat(...args) {
        const joined = args.map((x2) => source(x2)).join("");
        return joined;
      }
      function stripOptionsFromArgs(args) {
        const opts = args[args.length - 1];
        if (typeof opts === "object" && opts.constructor === Object) {
          args.splice(args.length - 1, 1);
          return opts;
        } else {
          return {};
        }
      }
      function either(...args) {
        const opts = stripOptionsFromArgs(args);
        const joined = "(" + (opts.capture ? "" : "?:") + args.map((x2) => source(x2)).join("|") + ")";
        return joined;
      }
      var keywordWrapper = (keyword) => concat(
        /\b/,
        keyword,
        /\w$/.test(keyword) ? /\b/ : /\B/
      );
      var dotKeywords = [
        "Protocol",
        // contextual
        "Type"
        // contextual
      ].map(keywordWrapper);
      var optionalDotKeywords = [
        "init",
        "self"
      ].map(keywordWrapper);
      var keywordTypes = [
        "Any",
        "Self"
      ];
      var keywords = [
        // strings below will be fed into the regular `keywords` engine while regex
        // will result in additional modes being created to scan for those keywords to
        // avoid conflicts with other rules
        "actor",
        "any",
        // contextual
        "associatedtype",
        "async",
        "await",
        /as\?/,
        // operator
        /as!/,
        // operator
        "as",
        // operator
        "borrowing",
        // contextual
        "break",
        "case",
        "catch",
        "class",
        "consume",
        // contextual
        "consuming",
        // contextual
        "continue",
        "convenience",
        // contextual
        "copy",
        // contextual
        "default",
        "defer",
        "deinit",
        "didSet",
        // contextual
        "distributed",
        "do",
        "dynamic",
        // contextual
        "each",
        "else",
        "enum",
        "extension",
        "fallthrough",
        /fileprivate\(set\)/,
        "fileprivate",
        "final",
        // contextual
        "for",
        "func",
        "get",
        // contextual
        "guard",
        "if",
        "import",
        "indirect",
        // contextual
        "infix",
        // contextual
        /init\?/,
        /init!/,
        "inout",
        /internal\(set\)/,
        "internal",
        "in",
        "is",
        // operator
        "isolated",
        // contextual
        "nonisolated",
        // contextual
        "lazy",
        // contextual
        "let",
        "macro",
        "mutating",
        // contextual
        "nonmutating",
        // contextual
        /open\(set\)/,
        // contextual
        "open",
        // contextual
        "operator",
        "optional",
        // contextual
        "override",
        // contextual
        "package",
        "postfix",
        // contextual
        "precedencegroup",
        "prefix",
        // contextual
        /private\(set\)/,
        "private",
        "protocol",
        /public\(set\)/,
        "public",
        "repeat",
        "required",
        // contextual
        "rethrows",
        "return",
        "set",
        // contextual
        "some",
        // contextual
        "static",
        "struct",
        "subscript",
        "super",
        "switch",
        "throws",
        "throw",
        /try\?/,
        // operator
        /try!/,
        // operator
        "try",
        // operator
        "typealias",
        /unowned\(safe\)/,
        // contextual
        /unowned\(unsafe\)/,
        // contextual
        "unowned",
        // contextual
        "var",
        "weak",
        // contextual
        "where",
        "while",
        "willSet"
        // contextual
      ];
      var literals = [
        "false",
        "nil",
        "true"
      ];
      var precedencegroupKeywords = [
        "assignment",
        "associativity",
        "higherThan",
        "left",
        "lowerThan",
        "none",
        "right"
      ];
      var numberSignKeywords = [
        "#colorLiteral",
        "#column",
        "#dsohandle",
        "#else",
        "#elseif",
        "#endif",
        "#error",
        "#file",
        "#fileID",
        "#fileLiteral",
        "#filePath",
        "#function",
        "#if",
        "#imageLiteral",
        "#keyPath",
        "#line",
        "#selector",
        "#sourceLocation",
        "#warning"
      ];
      var builtIns = [
        "abs",
        "all",
        "any",
        "assert",
        "assertionFailure",
        "debugPrint",
        "dump",
        "fatalError",
        "getVaList",
        "isKnownUniquelyReferenced",
        "max",
        "min",
        "numericCast",
        "pointwiseMax",
        "pointwiseMin",
        "precondition",
        "preconditionFailure",
        "print",
        "readLine",
        "repeatElement",
        "sequence",
        "stride",
        "swap",
        "swift_unboxFromSwiftValueWithType",
        "transcode",
        "type",
        "unsafeBitCast",
        "unsafeDowncast",
        "withExtendedLifetime",
        "withUnsafeMutablePointer",
        "withUnsafePointer",
        "withVaList",
        "withoutActuallyEscaping",
        "zip"
      ];
      var operatorHead = either(
        /[/=\-+!*%<>&|^~?]/,
        /[\u00A1-\u00A7]/,
        /[\u00A9\u00AB]/,
        /[\u00AC\u00AE]/,
        /[\u00B0\u00B1]/,
        /[\u00B6\u00BB\u00BF\u00D7\u00F7]/,
        /[\u2016-\u2017]/,
        /[\u2020-\u2027]/,
        /[\u2030-\u203E]/,
        /[\u2041-\u2053]/,
        /[\u2055-\u205E]/,
        /[\u2190-\u23FF]/,
        /[\u2500-\u2775]/,
        /[\u2794-\u2BFF]/,
        /[\u2E00-\u2E7F]/,
        /[\u3001-\u3003]/,
        /[\u3008-\u3020]/,
        /[\u3030]/
      );
      var operatorCharacter = either(
        operatorHead,
        /[\u0300-\u036F]/,
        /[\u1DC0-\u1DFF]/,
        /[\u20D0-\u20FF]/,
        /[\uFE00-\uFE0F]/,
        /[\uFE20-\uFE2F]/
        // TODO: The following characters are also allowed, but the regex isn't supported yet.
        // /[\u{E0100}-\u{E01EF}]/u
      );
      var operator = concat(operatorHead, operatorCharacter, "*");
      var identifierHead = either(
        /[a-zA-Z_]/,
        /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,
        /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,
        /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,
        /[\u1E00-\u1FFF]/,
        /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,
        /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,
        /[\u2C00-\u2DFF\u2E80-\u2FFF]/,
        /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,
        /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,
        /[\uFE47-\uFEFE\uFF00-\uFFFD]/
        // Should be /[\uFE47-\uFFFD]/, but we have to exclude FEFF.
        // The following characters are also allowed, but the regexes aren't supported yet.
        // /[\u{10000}-\u{1FFFD}\u{20000-\u{2FFFD}\u{30000}-\u{3FFFD}\u{40000}-\u{4FFFD}]/u,
        // /[\u{50000}-\u{5FFFD}\u{60000-\u{6FFFD}\u{70000}-\u{7FFFD}\u{80000}-\u{8FFFD}]/u,
        // /[\u{90000}-\u{9FFFD}\u{A0000-\u{AFFFD}\u{B0000}-\u{BFFFD}\u{C0000}-\u{CFFFD}]/u,
        // /[\u{D0000}-\u{DFFFD}\u{E0000-\u{EFFFD}]/u
      );
      var identifierCharacter = either(
        identifierHead,
        /\d/,
        /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/
      );
      var identifier = concat(identifierHead, identifierCharacter, "*");
      var typeIdentifier = concat(/[A-Z]/, identifierCharacter, "*");
      var keywordAttributes = [
        "attached",
        "autoclosure",
        concat(/convention\(/, either("swift", "block", "c"), /\)/),
        "discardableResult",
        "dynamicCallable",
        "dynamicMemberLookup",
        "escaping",
        "freestanding",
        "frozen",
        "GKInspectable",
        "IBAction",
        "IBDesignable",
        "IBInspectable",
        "IBOutlet",
        "IBSegueAction",
        "inlinable",
        "main",
        "nonobjc",
        "NSApplicationMain",
        "NSCopying",
        "NSManaged",
        concat(/objc\(/, identifier, /\)/),
        "objc",
        "objcMembers",
        "propertyWrapper",
        "requires_stored_property_inits",
        "resultBuilder",
        "Sendable",
        "testable",
        "UIApplicationMain",
        "unchecked",
        "unknown",
        "usableFromInline",
        "warn_unqualified_access"
      ];
      var availabilityKeywords = [
        "iOS",
        "iOSApplicationExtension",
        "macOS",
        "macOSApplicationExtension",
        "macCatalyst",
        "macCatalystApplicationExtension",
        "watchOS",
        "watchOSApplicationExtension",
        "tvOS",
        "tvOSApplicationExtension",
        "swift"
      ];
      function swift(hljs) {
        const WHITESPACE = {
          match: /\s+/,
          relevance: 0
        };
        const BLOCK_COMMENT = hljs.COMMENT(
          "/\\*",
          "\\*/",
          { contains: ["self"] }
        );
        const COMMENTS = [
          hljs.C_LINE_COMMENT_MODE,
          BLOCK_COMMENT
        ];
        const DOT_KEYWORD = {
          match: [
            /\./,
            either(...dotKeywords, ...optionalDotKeywords)
          ],
          className: { 2: "keyword" }
        };
        const KEYWORD_GUARD = {
          // Consume .keyword to prevent highlighting properties and methods as keywords.
          match: concat(/\./, either(...keywords)),
          relevance: 0
        };
        const PLAIN_KEYWORDS = keywords.filter((kw) => typeof kw === "string").concat(["_|0"]);
        const REGEX_KEYWORDS = keywords.filter((kw) => typeof kw !== "string").concat(keywordTypes).map(keywordWrapper);
        const KEYWORD = { variants: [
          {
            className: "keyword",
            match: either(...REGEX_KEYWORDS, ...optionalDotKeywords)
          }
        ] };
        const KEYWORDS = {
          $pattern: either(
            /\b\w+/,
            // regular keywords
            /#\w+/
            // number keywords
          ),
          keyword: PLAIN_KEYWORDS.concat(numberSignKeywords),
          literal: literals
        };
        const KEYWORD_MODES = [
          DOT_KEYWORD,
          KEYWORD_GUARD,
          KEYWORD
        ];
        const BUILT_IN_GUARD = {
          // Consume .built_in to prevent highlighting properties and methods.
          match: concat(/\./, either(...builtIns)),
          relevance: 0
        };
        const BUILT_IN = {
          className: "built_in",
          match: concat(/\b/, either(...builtIns), /(?=\()/)
        };
        const BUILT_INS = [
          BUILT_IN_GUARD,
          BUILT_IN
        ];
        const OPERATOR_GUARD = {
          // Prevent -> from being highlighting as an operator.
          match: /->/,
          relevance: 0
        };
        const OPERATOR = {
          className: "operator",
          relevance: 0,
          variants: [
            { match: operator },
            {
              // dot-operator: only operators that start with a dot are allowed to use dots as
              // characters (..., ...<, .*, etc). So there rule here is: a dot followed by one or more
              // characters that may also include dots.
              match: `\\.(\\.|${operatorCharacter})+`
            }
          ]
        };
        const OPERATORS = [
          OPERATOR_GUARD,
          OPERATOR
        ];
        const decimalDigits = "([0-9]_*)+";
        const hexDigits = "([0-9a-fA-F]_*)+";
        const NUMBER = {
          className: "number",
          relevance: 0,
          variants: [
            // decimal floating-point-literal (subsumes decimal-literal)
            { match: `\\b(${decimalDigits})(\\.(${decimalDigits}))?([eE][+-]?(${decimalDigits}))?\\b` },
            // hexadecimal floating-point-literal (subsumes hexadecimal-literal)
            { match: `\\b0x(${hexDigits})(\\.(${hexDigits}))?([pP][+-]?(${decimalDigits}))?\\b` },
            // octal-literal
            { match: /\b0o([0-7]_*)+\b/ },
            // binary-literal
            { match: /\b0b([01]_*)+\b/ }
          ]
        };
        const ESCAPED_CHARACTER = (rawDelimiter = "") => ({
          className: "subst",
          variants: [
            { match: concat(/\\/, rawDelimiter, /[0\\tnr"']/) },
            { match: concat(/\\/, rawDelimiter, /u\{[0-9a-fA-F]{1,8}\}/) }
          ]
        });
        const ESCAPED_NEWLINE = (rawDelimiter = "") => ({
          className: "subst",
          match: concat(/\\/, rawDelimiter, /[\t ]*(?:[\r\n]|\r\n)/)
        });
        const INTERPOLATION = (rawDelimiter = "") => ({
          className: "subst",
          label: "interpol",
          begin: concat(/\\/, rawDelimiter, /\(/),
          end: /\)/
        });
        const MULTILINE_STRING = (rawDelimiter = "") => ({
          begin: concat(rawDelimiter, /"""/),
          end: concat(/"""/, rawDelimiter),
          contains: [
            ESCAPED_CHARACTER(rawDelimiter),
            ESCAPED_NEWLINE(rawDelimiter),
            INTERPOLATION(rawDelimiter)
          ]
        });
        const SINGLE_LINE_STRING = (rawDelimiter = "") => ({
          begin: concat(rawDelimiter, /"/),
          end: concat(/"/, rawDelimiter),
          contains: [
            ESCAPED_CHARACTER(rawDelimiter),
            INTERPOLATION(rawDelimiter)
          ]
        });
        const STRING = {
          className: "string",
          variants: [
            MULTILINE_STRING(),
            MULTILINE_STRING("#"),
            MULTILINE_STRING("##"),
            MULTILINE_STRING("###"),
            SINGLE_LINE_STRING(),
            SINGLE_LINE_STRING("#"),
            SINGLE_LINE_STRING("##"),
            SINGLE_LINE_STRING("###")
          ]
        };
        const REGEXP_CONTENTS = [
          hljs.BACKSLASH_ESCAPE,
          {
            begin: /\[/,
            end: /\]/,
            relevance: 0,
            contains: [hljs.BACKSLASH_ESCAPE]
          }
        ];
        const BARE_REGEXP_LITERAL = {
          begin: /\/[^\s](?=[^/\n]*\/)/,
          end: /\//,
          contains: REGEXP_CONTENTS
        };
        const EXTENDED_REGEXP_LITERAL = (rawDelimiter) => {
          const begin = concat(rawDelimiter, /\//);
          const end = concat(/\//, rawDelimiter);
          return {
            begin,
            end,
            contains: [
              ...REGEXP_CONTENTS,
              {
                scope: "comment",
                begin: `#(?!.*${end})`,
                end: /$/
              }
            ]
          };
        };
        const REGEXP = {
          scope: "regexp",
          variants: [
            EXTENDED_REGEXP_LITERAL("###"),
            EXTENDED_REGEXP_LITERAL("##"),
            EXTENDED_REGEXP_LITERAL("#"),
            BARE_REGEXP_LITERAL
          ]
        };
        const QUOTED_IDENTIFIER = { match: concat(/`/, identifier, /`/) };
        const IMPLICIT_PARAMETER = {
          className: "variable",
          match: /\$\d+/
        };
        const PROPERTY_WRAPPER_PROJECTION = {
          className: "variable",
          match: `\\$${identifierCharacter}+`
        };
        const IDENTIFIERS = [
          QUOTED_IDENTIFIER,
          IMPLICIT_PARAMETER,
          PROPERTY_WRAPPER_PROJECTION
        ];
        const AVAILABLE_ATTRIBUTE = {
          match: /(@|#(un)?)available/,
          scope: "keyword",
          starts: { contains: [
            {
              begin: /\(/,
              end: /\)/,
              keywords: availabilityKeywords,
              contains: [
                ...OPERATORS,
                NUMBER,
                STRING
              ]
            }
          ] }
        };
        const KEYWORD_ATTRIBUTE = {
          scope: "keyword",
          match: concat(/@/, either(...keywordAttributes), lookahead(either(/\(/, /\s+/)))
        };
        const USER_DEFINED_ATTRIBUTE = {
          scope: "meta",
          match: concat(/@/, identifier)
        };
        const ATTRIBUTES = [
          AVAILABLE_ATTRIBUTE,
          KEYWORD_ATTRIBUTE,
          USER_DEFINED_ATTRIBUTE
        ];
        const TYPE = {
          match: lookahead(/\b[A-Z]/),
          relevance: 0,
          contains: [
            {
              // Common Apple frameworks, for relevance boost
              className: "type",
              match: concat(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, identifierCharacter, "+")
            },
            {
              // Type identifier
              className: "type",
              match: typeIdentifier,
              relevance: 0
            },
            {
              // Optional type
              match: /[?!]+/,
              relevance: 0
            },
            {
              // Variadic parameter
              match: /\.\.\./,
              relevance: 0
            },
            {
              // Protocol composition
              match: concat(/\s+&\s+/, lookahead(typeIdentifier)),
              relevance: 0
            }
          ]
        };
        const GENERIC_ARGUMENTS = {
          begin: /</,
          end: />/,
          keywords: KEYWORDS,
          contains: [
            ...COMMENTS,
            ...KEYWORD_MODES,
            ...ATTRIBUTES,
            OPERATOR_GUARD,
            TYPE
          ]
        };
        TYPE.contains.push(GENERIC_ARGUMENTS);
        const TUPLE_ELEMENT_NAME = {
          match: concat(identifier, /\s*:/),
          keywords: "_|0",
          relevance: 0
        };
        const TUPLE = {
          begin: /\(/,
          end: /\)/,
          relevance: 0,
          keywords: KEYWORDS,
          contains: [
            "self",
            TUPLE_ELEMENT_NAME,
            ...COMMENTS,
            REGEXP,
            ...KEYWORD_MODES,
            ...BUILT_INS,
            ...OPERATORS,
            NUMBER,
            STRING,
            ...IDENTIFIERS,
            ...ATTRIBUTES,
            TYPE
          ]
        };
        const GENERIC_PARAMETERS = {
          begin: /</,
          end: />/,
          keywords: "repeat each",
          contains: [
            ...COMMENTS,
            TYPE
          ]
        };
        const FUNCTION_PARAMETER_NAME = {
          begin: either(
            lookahead(concat(identifier, /\s*:/)),
            lookahead(concat(identifier, /\s+/, identifier, /\s*:/))
          ),
          end: /:/,
          relevance: 0,
          contains: [
            {
              className: "keyword",
              match: /\b_\b/
            },
            {
              className: "params",
              match: identifier
            }
          ]
        };
        const FUNCTION_PARAMETERS = {
          begin: /\(/,
          end: /\)/,
          keywords: KEYWORDS,
          contains: [
            FUNCTION_PARAMETER_NAME,
            ...COMMENTS,
            ...KEYWORD_MODES,
            ...OPERATORS,
            NUMBER,
            STRING,
            ...ATTRIBUTES,
            TYPE,
            TUPLE
          ],
          endsParent: true,
          illegal: /["']/
        };
        const FUNCTION_OR_MACRO = {
          match: [
            /(func|macro)/,
            /\s+/,
            either(QUOTED_IDENTIFIER.match, identifier, operator)
          ],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [
            GENERIC_PARAMETERS,
            FUNCTION_PARAMETERS,
            WHITESPACE
          ],
          illegal: [
            /\[/,
            /%/
          ]
        };
        const INIT_SUBSCRIPT = {
          match: [
            /\b(?:subscript|init[?!]?)/,
            /\s*(?=[<(])/
          ],
          className: { 1: "keyword" },
          contains: [
            GENERIC_PARAMETERS,
            FUNCTION_PARAMETERS,
            WHITESPACE
          ],
          illegal: /\[|%/
        };
        const OPERATOR_DECLARATION = {
          match: [
            /operator/,
            /\s+/,
            operator
          ],
          className: {
            1: "keyword",
            3: "title"
          }
        };
        const PRECEDENCEGROUP = {
          begin: [
            /precedencegroup/,
            /\s+/,
            typeIdentifier
          ],
          className: {
            1: "keyword",
            3: "title"
          },
          contains: [TYPE],
          keywords: [
            ...precedencegroupKeywords,
            ...literals
          ],
          end: /}/
        };
        const TYPE_DECLARATION = {
          begin: [
            /(struct|protocol|class|extension|enum|actor)/,
            /\s+/,
            identifier,
            /\s*/
          ],
          beginScope: {
            1: "keyword",
            3: "title.class"
          },
          keywords: KEYWORDS,
          contains: [
            GENERIC_PARAMETERS,
            ...KEYWORD_MODES,
            {
              begin: /:/,
              end: /\{/,
              keywords: KEYWORDS,
              contains: [
                {
                  scope: "title.class.inherited",
                  match: typeIdentifier
                },
                ...KEYWORD_MODES
              ],
              relevance: 0
            }
          ]
        };
        for (const variant of STRING.variants) {
          const interpolation = variant.contains.find((mode) => mode.label === "interpol");
          interpolation.keywords = KEYWORDS;
          const submodes = [
            ...KEYWORD_MODES,
            ...BUILT_INS,
            ...OPERATORS,
            NUMBER,
            STRING,
            ...IDENTIFIERS
          ];
          interpolation.contains = [
            ...submodes,
            {
              begin: /\(/,
              end: /\)/,
              contains: [
                "self",
                ...submodes
              ]
            }
          ];
        }
        return {
          name: "Swift",
          keywords: KEYWORDS,
          contains: [
            ...COMMENTS,
            FUNCTION_OR_MACRO,
            INIT_SUBSCRIPT,
            TYPE_DECLARATION,
            OPERATOR_DECLARATION,
            PRECEDENCEGROUP,
            {
              beginKeywords: "import",
              end: /$/,
              contains: [...COMMENTS],
              relevance: 0
            },
            REGEXP,
            ...KEYWORD_MODES,
            ...BUILT_INS,
            ...OPERATORS,
            NUMBER,
            STRING,
            ...IDENTIFIERS,
            ...ATTRIBUTES,
            TYPE,
            TUPLE
          ]
        };
      }
      module.exports = swift;
    }
  });

  // node_modules/highlight.js/lib/languages/yaml.js
  var require_yaml = __commonJS({
    "node_modules/highlight.js/lib/languages/yaml.js"(exports, module) {
      function yaml(hljs) {
        const LITERALS = "true false yes no null";
        const URI_CHARACTERS = "[\\w#;/?:@&=+$,.~*'()[\\]]+";
        const KEY = {
          className: "attr",
          variants: [
            // added brackets support 
            { begin: /\w[\w :()\./-]*:(?=[ \t]|$)/ },
            {
              // double quoted keys - with brackets
              begin: /"\w[\w :()\./-]*":(?=[ \t]|$)/
            },
            {
              // single quoted keys - with brackets
              begin: /'\w[\w :()\./-]*':(?=[ \t]|$)/
            }
          ]
        };
        const TEMPLATE_VARIABLES = {
          className: "template-variable",
          variants: [
            {
              // jinja templates Ansible
              begin: /\{\{/,
              end: /\}\}/
            },
            {
              // Ruby i18n
              begin: /%\{/,
              end: /\}/
            }
          ]
        };
        const STRING = {
          className: "string",
          relevance: 0,
          variants: [
            {
              begin: /'/,
              end: /'/
            },
            {
              begin: /"/,
              end: /"/
            },
            { begin: /\S+/ }
          ],
          contains: [
            hljs.BACKSLASH_ESCAPE,
            TEMPLATE_VARIABLES
          ]
        };
        const CONTAINER_STRING = hljs.inherit(STRING, { variants: [
          {
            begin: /'/,
            end: /'/
          },
          {
            begin: /"/,
            end: /"/
          },
          { begin: /[^\s,{}[\]]+/ }
        ] });
        const DATE_RE = "[0-9]{4}(-[0-9][0-9]){0,2}";
        const TIME_RE = "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?";
        const FRACTION_RE = "(\\.[0-9]*)?";
        const ZONE_RE = "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?";
        const TIMESTAMP = {
          className: "number",
          begin: "\\b" + DATE_RE + TIME_RE + FRACTION_RE + ZONE_RE + "\\b"
        };
        const VALUE_CONTAINER = {
          end: ",",
          endsWithParent: true,
          excludeEnd: true,
          keywords: LITERALS,
          relevance: 0
        };
        const OBJECT = {
          begin: /\{/,
          end: /\}/,
          contains: [VALUE_CONTAINER],
          illegal: "\\n",
          relevance: 0
        };
        const ARRAY = {
          begin: "\\[",
          end: "\\]",
          contains: [VALUE_CONTAINER],
          illegal: "\\n",
          relevance: 0
        };
        const MODES = [
          KEY,
          {
            className: "meta",
            begin: "^---\\s*$",
            relevance: 10
          },
          {
            // multi line string
            // Blocks start with a | or > followed by a newline
            //
            // Indentation of subsequent lines must be the same to
            // be considered part of the block
            className: "string",
            begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
          },
          {
            // Ruby/Rails erb
            begin: "<%[%=-]?",
            end: "[%-]?%>",
            subLanguage: "ruby",
            excludeBegin: true,
            excludeEnd: true,
            relevance: 0
          },
          {
            // named tags
            className: "type",
            begin: "!\\w+!" + URI_CHARACTERS
          },
          // https://yaml.org/spec/1.2/spec.html#id2784064
          {
            // verbatim tags
            className: "type",
            begin: "!<" + URI_CHARACTERS + ">"
          },
          {
            // primary tags
            className: "type",
            begin: "!" + URI_CHARACTERS
          },
          {
            // secondary tags
            className: "type",
            begin: "!!" + URI_CHARACTERS
          },
          {
            // fragment id &ref
            className: "meta",
            begin: "&" + hljs.UNDERSCORE_IDENT_RE + "$"
          },
          {
            // fragment reference *ref
            className: "meta",
            begin: "\\*" + hljs.UNDERSCORE_IDENT_RE + "$"
          },
          {
            // array listing
            className: "bullet",
            // TODO: remove |$ hack when we have proper look-ahead support
            begin: "-(?=[ ]|$)",
            relevance: 0
          },
          hljs.HASH_COMMENT_MODE,
          {
            beginKeywords: LITERALS,
            keywords: { literal: LITERALS }
          },
          TIMESTAMP,
          // numbers are any valid C-style number that
          // sit isolated from other words
          {
            className: "number",
            begin: hljs.C_NUMBER_RE + "\\b",
            relevance: 0
          },
          OBJECT,
          ARRAY,
          STRING
        ];
        const VALUE_MODES = [...MODES];
        VALUE_MODES.pop();
        VALUE_MODES.push(CONTAINER_STRING);
        VALUE_CONTAINER.contains = VALUE_MODES;
        return {
          name: "YAML",
          case_insensitive: true,
          aliases: ["yml"],
          contains: MODES
        };
      }
      module.exports = yaml;
    }
  });

  // node_modules/highlight.js/lib/languages/typescript.js
  var require_typescript = __commonJS({
    "node_modules/highlight.js/lib/languages/typescript.js"(exports, module) {
      var IDENT_RE = "[A-Za-z$_][0-9A-Za-z$_]*";
      var KEYWORDS = [
        "as",
        // for exports
        "in",
        "of",
        "if",
        "for",
        "while",
        "finally",
        "var",
        "new",
        "function",
        "do",
        "return",
        "void",
        "else",
        "break",
        "catch",
        "instanceof",
        "with",
        "throw",
        "case",
        "default",
        "try",
        "switch",
        "continue",
        "typeof",
        "delete",
        "let",
        "yield",
        "const",
        "class",
        // JS handles these with a special rule
        // "get",
        // "set",
        "debugger",
        "async",
        "await",
        "static",
        "import",
        "from",
        "export",
        "extends"
      ];
      var LITERALS = [
        "true",
        "false",
        "null",
        "undefined",
        "NaN",
        "Infinity"
      ];
      var TYPES = [
        // Fundamental objects
        "Object",
        "Function",
        "Boolean",
        "Symbol",
        // numbers and dates
        "Math",
        "Date",
        "Number",
        "BigInt",
        // text
        "String",
        "RegExp",
        // Indexed collections
        "Array",
        "Float32Array",
        "Float64Array",
        "Int8Array",
        "Uint8Array",
        "Uint8ClampedArray",
        "Int16Array",
        "Int32Array",
        "Uint16Array",
        "Uint32Array",
        "BigInt64Array",
        "BigUint64Array",
        // Keyed collections
        "Set",
        "Map",
        "WeakSet",
        "WeakMap",
        // Structured data
        "ArrayBuffer",
        "SharedArrayBuffer",
        "Atomics",
        "DataView",
        "JSON",
        // Control abstraction objects
        "Promise",
        "Generator",
        "GeneratorFunction",
        "AsyncFunction",
        // Reflection
        "Reflect",
        "Proxy",
        // Internationalization
        "Intl",
        // WebAssembly
        "WebAssembly"
      ];
      var ERROR_TYPES = [
        "Error",
        "EvalError",
        "InternalError",
        "RangeError",
        "ReferenceError",
        "SyntaxError",
        "TypeError",
        "URIError"
      ];
      var BUILT_IN_GLOBALS = [
        "setInterval",
        "setTimeout",
        "clearInterval",
        "clearTimeout",
        "require",
        "exports",
        "eval",
        "isFinite",
        "isNaN",
        "parseFloat",
        "parseInt",
        "decodeURI",
        "decodeURIComponent",
        "encodeURI",
        "encodeURIComponent",
        "escape",
        "unescape"
      ];
      var BUILT_IN_VARIABLES = [
        "arguments",
        "this",
        "super",
        "console",
        "window",
        "document",
        "localStorage",
        "sessionStorage",
        "module",
        "global"
        // Node.js
      ];
      var BUILT_INS = [].concat(
        BUILT_IN_GLOBALS,
        TYPES,
        ERROR_TYPES
      );
      function javascript(hljs) {
        const regex = hljs.regex;
        const hasClosingTag = (match, { after }) => {
          const tag = "</" + match[0].slice(1);
          const pos = match.input.indexOf(tag, after);
          return pos !== -1;
        };
        const IDENT_RE$1 = IDENT_RE;
        const FRAGMENT = {
          begin: "<>",
          end: "</>"
        };
        const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
        const XML_TAG = {
          begin: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          /**
           * @param {RegExpMatchArray} match
           * @param {CallbackResponse} response
           */
          isTrulyOpeningTag: (match, response) => {
            const afterMatchIndex = match[0].length + match.index;
            const nextChar = match.input[afterMatchIndex];
            if (
              // HTML should not include another raw `<` inside a tag
              // nested type?
              // `<Array<Array<number>>`, etc.
              nextChar === "<" || // the , gives away that this is not HTML
              // `<T, A extends keyof T, V>`
              nextChar === ","
            ) {
              response.ignoreMatch();
              return;
            }
            if (nextChar === ">") {
              if (!hasClosingTag(match, { after: afterMatchIndex })) {
                response.ignoreMatch();
              }
            }
            let m2;
            const afterMatch = match.input.substring(afterMatchIndex);
            if (m2 = afterMatch.match(/^\s*=/)) {
              response.ignoreMatch();
              return;
            }
            if (m2 = afterMatch.match(/^\s+extends\s+/)) {
              if (m2.index === 0) {
                response.ignoreMatch();
                return;
              }
            }
          }
        };
        const KEYWORDS$1 = {
          $pattern: IDENT_RE,
          keyword: KEYWORDS,
          literal: LITERALS,
          built_in: BUILT_INS,
          "variable.language": BUILT_IN_VARIABLES
        };
        const decimalDigits = "[0-9](_?[0-9])*";
        const frac = `\\.(${decimalDigits})`;
        const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
        const NUMBER = {
          className: "number",
          variants: [
            // DecimalLiteral
            { begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})\\b` },
            { begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },
            // DecimalBigIntegerLiteral
            { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
            // NonDecimalIntegerLiteral
            { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
            { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
            { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
            // LegacyOctalIntegerLiteral (does not include underscore separators)
            // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
            { begin: "\\b0[0-7]+n?\\b" }
          ],
          relevance: 0
        };
        const SUBST = {
          className: "subst",
          begin: "\\$\\{",
          end: "\\}",
          keywords: KEYWORDS$1,
          contains: []
          // defined later
        };
        const HTML_TEMPLATE = {
          begin: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: false,
            contains: [
              hljs.BACKSLASH_ESCAPE,
              SUBST
            ],
            subLanguage: "xml"
          }
        };
        const CSS_TEMPLATE = {
          begin: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: false,
            contains: [
              hljs.BACKSLASH_ESCAPE,
              SUBST
            ],
            subLanguage: "css"
          }
        };
        const GRAPHQL_TEMPLATE = {
          begin: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: false,
            contains: [
              hljs.BACKSLASH_ESCAPE,
              SUBST
            ],
            subLanguage: "graphql"
          }
        };
        const TEMPLATE_STRING = {
          className: "string",
          begin: "`",
          end: "`",
          contains: [
            hljs.BACKSLASH_ESCAPE,
            SUBST
          ]
        };
        const JSDOC_COMMENT = hljs.COMMENT(
          /\/\*\*(?!\/)/,
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                begin: "(?=@[A-Za-z]+)",
                relevance: 0,
                contains: [
                  {
                    className: "doctag",
                    begin: "@[A-Za-z]+"
                  },
                  {
                    className: "type",
                    begin: "\\{",
                    end: "\\}",
                    excludeEnd: true,
                    excludeBegin: true,
                    relevance: 0
                  },
                  {
                    className: "variable",
                    begin: IDENT_RE$1 + "(?=\\s*(-)|$)",
                    endsParent: true,
                    relevance: 0
                  },
                  // eat spaces (not newlines) so we can find
                  // types or variables
                  {
                    begin: /(?=[^\n])\s/,
                    relevance: 0
                  }
                ]
              }
            ]
          }
        );
        const COMMENT = {
          className: "comment",
          variants: [
            JSDOC_COMMENT,
            hljs.C_BLOCK_COMMENT_MODE,
            hljs.C_LINE_COMMENT_MODE
          ]
        };
        const SUBST_INTERNALS = [
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          HTML_TEMPLATE,
          CSS_TEMPLATE,
          GRAPHQL_TEMPLATE,
          TEMPLATE_STRING,
          // Skip numbers when they are part of a variable name
          { match: /\$\d+/ },
          NUMBER
          // This is intentional:
          // See https://github.com/highlightjs/highlight.js/issues/3288
          // hljs.REGEXP_MODE
        ];
        SUBST.contains = SUBST_INTERNALS.concat({
          // we need to pair up {} inside our subst to prevent
          // it from ending too early by matching another }
          begin: /\{/,
          end: /\}/,
          keywords: KEYWORDS$1,
          contains: [
            "self"
          ].concat(SUBST_INTERNALS)
        });
        const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
        const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
          // eat recursive parens in sub expressions
          {
            begin: /(\s*)\(/,
            end: /\)/,
            keywords: KEYWORDS$1,
            contains: ["self"].concat(SUBST_AND_COMMENTS)
          }
        ]);
        const PARAMS = {
          className: "params",
          // convert this to negative lookbehind in v12
          begin: /(\s*)\(/,
          // to match the parms with 
          end: /\)/,
          excludeBegin: true,
          excludeEnd: true,
          keywords: KEYWORDS$1,
          contains: PARAMS_CONTAINS
        };
        const CLASS_OR_EXTENDS = {
          variants: [
            // class Car extends vehicle
            {
              match: [
                /class/,
                /\s+/,
                IDENT_RE$1,
                /\s+/,
                /extends/,
                /\s+/,
                regex.concat(IDENT_RE$1, "(", regex.concat(/\./, IDENT_RE$1), ")*")
              ],
              scope: {
                1: "keyword",
                3: "title.class",
                5: "keyword",
                7: "title.class.inherited"
              }
            },
            // class Car
            {
              match: [
                /class/,
                /\s+/,
                IDENT_RE$1
              ],
              scope: {
                1: "keyword",
                3: "title.class"
              }
            }
          ]
        };
        const CLASS_REFERENCE = {
          relevance: 0,
          match: regex.either(
            // Hard coded exceptions
            /\bJSON/,
            // Float32Array, OutT
            /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
            // CSSFactory, CSSFactoryT
            /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
            // FPs, FPsT
            /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
            // P
            // single letters are not highlighted
            // BLAH
            // this will be flagged as a UPPER_CASE_CONSTANT instead
          ),
          className: "title.class",
          keywords: {
            _: [
              // se we still get relevance credit for JS library classes
              ...TYPES,
              ...ERROR_TYPES
            ]
          }
        };
        const USE_STRICT = {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          begin: /^\s*['"]use (strict|asm)['"]/
        };
        const FUNCTION_DEFINITION = {
          variants: [
            {
              match: [
                /function/,
                /\s+/,
                IDENT_RE$1,
                /(?=\s*\()/
              ]
            },
            // anonymous function
            {
              match: [
                /function/,
                /\s*(?=\()/
              ]
            }
          ],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [PARAMS],
          illegal: /%/
        };
        const UPPER_CASE_CONSTANT = {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        };
        function noneOf(list) {
          return regex.concat("(?!", list.join("|"), ")");
        }
        const FUNCTION_CALL = {
          match: regex.concat(
            /\b/,
            noneOf([
              ...BUILT_IN_GLOBALS,
              "super",
              "import"
            ].map((x2) => `${x2}\\s*\\(`)),
            IDENT_RE$1,
            regex.lookahead(/\s*\(/)
          ),
          className: "title.function",
          relevance: 0
        };
        const PROPERTY_ACCESS = {
          begin: regex.concat(/\./, regex.lookahead(
            regex.concat(IDENT_RE$1, /(?![0-9A-Za-z$_(])/)
          )),
          end: IDENT_RE$1,
          excludeBegin: true,
          keywords: "prototype",
          className: "property",
          relevance: 0
        };
        const GETTER_OR_SETTER = {
          match: [
            /get|set/,
            /\s+/,
            IDENT_RE$1,
            /(?=\()/
          ],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [
            {
              // eat to avoid empty params
              begin: /\(\)/
            },
            PARAMS
          ]
        };
        const FUNC_LEAD_IN_RE = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>";
        const FUNCTION_VARIABLE = {
          match: [
            /const|var|let/,
            /\s+/,
            IDENT_RE$1,
            /\s*/,
            /=\s*/,
            /(async\s*)?/,
            // async is optional
            regex.lookahead(FUNC_LEAD_IN_RE)
          ],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [
            PARAMS
          ]
        };
        return {
          name: "JavaScript",
          aliases: ["js", "jsx", "mjs", "cjs"],
          keywords: KEYWORDS$1,
          // this will be extended by TypeScript
          exports: { PARAMS_CONTAINS, CLASS_REFERENCE },
          illegal: /#(?![$_A-z])/,
          contains: [
            hljs.SHEBANG({
              label: "shebang",
              binary: "node",
              relevance: 5
            }),
            USE_STRICT,
            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE,
            HTML_TEMPLATE,
            CSS_TEMPLATE,
            GRAPHQL_TEMPLATE,
            TEMPLATE_STRING,
            COMMENT,
            // Skip numbers when they are part of a variable name
            { match: /\$\d+/ },
            NUMBER,
            CLASS_REFERENCE,
            {
              className: "attr",
              begin: IDENT_RE$1 + regex.lookahead(":"),
              relevance: 0
            },
            FUNCTION_VARIABLE,
            {
              // "value" container
              begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
              keywords: "return throw case",
              relevance: 0,
              contains: [
                COMMENT,
                hljs.REGEXP_MODE,
                {
                  className: "function",
                  // we have to count the parens to make sure we actually have the
                  // correct bounding ( ) before the =>.  There could be any number of
                  // sub-expressions inside also surrounded by parens.
                  begin: FUNC_LEAD_IN_RE,
                  returnBegin: true,
                  end: "\\s*=>",
                  contains: [
                    {
                      className: "params",
                      variants: [
                        {
                          begin: hljs.UNDERSCORE_IDENT_RE,
                          relevance: 0
                        },
                        {
                          className: null,
                          begin: /\(\s*\)/,
                          skip: true
                        },
                        {
                          begin: /(\s*)\(/,
                          end: /\)/,
                          excludeBegin: true,
                          excludeEnd: true,
                          keywords: KEYWORDS$1,
                          contains: PARAMS_CONTAINS
                        }
                      ]
                    }
                  ]
                },
                {
                  // could be a comma delimited list of params to a function call
                  begin: /,/,
                  relevance: 0
                },
                {
                  match: /\s+/,
                  relevance: 0
                },
                {
                  // JSX
                  variants: [
                    { begin: FRAGMENT.begin, end: FRAGMENT.end },
                    { match: XML_SELF_CLOSING },
                    {
                      begin: XML_TAG.begin,
                      // we carefully check the opening tag to see if it truly
                      // is a tag and not a false positive
                      "on:begin": XML_TAG.isTrulyOpeningTag,
                      end: XML_TAG.end
                    }
                  ],
                  subLanguage: "xml",
                  contains: [
                    {
                      begin: XML_TAG.begin,
                      end: XML_TAG.end,
                      skip: true,
                      contains: ["self"]
                    }
                  ]
                }
              ]
            },
            FUNCTION_DEFINITION,
            {
              // prevent this from getting swallowed up by function
              // since they appear "function like"
              beginKeywords: "while if switch catch for"
            },
            {
              // we have to count the parens to make sure we actually have the correct
              // bounding ( ).  There could be any number of sub-expressions inside
              // also surrounded by parens.
              begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
              // end parens
              returnBegin: true,
              label: "func.def",
              contains: [
                PARAMS,
                hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1, className: "title.function" })
              ]
            },
            // catch ... so it won't trigger the property rule below
            {
              match: /\.\.\./,
              relevance: 0
            },
            PROPERTY_ACCESS,
            // hack: prevents detection of keywords in some circumstances
            // .keyword()
            // $keyword = x
            {
              match: "\\$" + IDENT_RE$1,
              relevance: 0
            },
            {
              match: [/\bconstructor(?=\s*\()/],
              className: { 1: "title.function" },
              contains: [PARAMS]
            },
            FUNCTION_CALL,
            UPPER_CASE_CONSTANT,
            CLASS_OR_EXTENDS,
            GETTER_OR_SETTER,
            {
              match: /\$[(.]/
              // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
            }
          ]
        };
      }
      function typescript(hljs) {
        const tsLanguage = javascript(hljs);
        const IDENT_RE$1 = IDENT_RE;
        const TYPES2 = [
          "any",
          "void",
          "number",
          "boolean",
          "string",
          "object",
          "never",
          "symbol",
          "bigint",
          "unknown"
        ];
        const NAMESPACE = {
          begin: [
            /namespace/,
            /\s+/,
            hljs.IDENT_RE
          ],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        };
        const INTERFACE = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: true,
          keywords: {
            keyword: "interface extends",
            built_in: TYPES2
          },
          contains: [tsLanguage.exports.CLASS_REFERENCE]
        };
        const USE_STRICT = {
          className: "meta",
          relevance: 10,
          begin: /^\s*['"]use strict['"]/
        };
        const TS_SPECIFIC_KEYWORDS = [
          "type",
          // "namespace",
          "interface",
          "public",
          "private",
          "protected",
          "implements",
          "declare",
          "abstract",
          "readonly",
          "enum",
          "override",
          "satisfies"
        ];
        const KEYWORDS$1 = {
          $pattern: IDENT_RE,
          keyword: KEYWORDS.concat(TS_SPECIFIC_KEYWORDS),
          literal: LITERALS,
          built_in: BUILT_INS.concat(TYPES2),
          "variable.language": BUILT_IN_VARIABLES
        };
        const DECORATOR = {
          className: "meta",
          begin: "@" + IDENT_RE$1
        };
        const swapMode = (mode, label, replacement) => {
          const indx = mode.contains.findIndex((m2) => m2.label === label);
          if (indx === -1) {
            throw new Error("can not find mode to replace");
          }
          mode.contains.splice(indx, 1, replacement);
        };
        Object.assign(tsLanguage.keywords, KEYWORDS$1);
        tsLanguage.exports.PARAMS_CONTAINS.push(DECORATOR);
        const ATTRIBUTE_HIGHLIGHT = tsLanguage.contains.find((c4) => c4.className === "attr");
        tsLanguage.exports.PARAMS_CONTAINS.push([
          tsLanguage.exports.CLASS_REFERENCE,
          // class reference for highlighting the params types
          ATTRIBUTE_HIGHLIGHT
          // highlight the params key
        ]);
        tsLanguage.contains = tsLanguage.contains.concat([
          DECORATOR,
          NAMESPACE,
          INTERFACE
        ]);
        swapMode(tsLanguage, "shebang", hljs.SHEBANG());
        swapMode(tsLanguage, "use_strict", USE_STRICT);
        const functionDeclaration = tsLanguage.contains.find((m2) => m2.label === "func.def");
        functionDeclaration.relevance = 0;
        Object.assign(tsLanguage, {
          name: "TypeScript",
          aliases: [
            "ts",
            "tsx",
            "mts",
            "cts"
          ]
        });
        return tsLanguage;
      }
      module.exports = typescript;
    }
  });

  // node_modules/highlight.js/lib/languages/vbnet.js
  var require_vbnet = __commonJS({
    "node_modules/highlight.js/lib/languages/vbnet.js"(exports, module) {
      function vbnet(hljs) {
        const regex = hljs.regex;
        const CHARACTER = {
          className: "string",
          begin: /"(""|[^/n])"C\b/
        };
        const STRING = {
          className: "string",
          begin: /"/,
          end: /"/,
          illegal: /\n/,
          contains: [
            {
              // double quote escape
              begin: /""/
            }
          ]
        };
        const MM_DD_YYYY = /\d{1,2}\/\d{1,2}\/\d{4}/;
        const YYYY_MM_DD = /\d{4}-\d{1,2}-\d{1,2}/;
        const TIME_12H = /(\d|1[012])(:\d+){0,2} *(AM|PM)/;
        const TIME_24H = /\d{1,2}(:\d{1,2}){1,2}/;
        const DATE = {
          className: "literal",
          variants: [
            {
              // #YYYY-MM-DD# (ISO-Date) or #M/D/YYYY# (US-Date)
              begin: regex.concat(/# */, regex.either(YYYY_MM_DD, MM_DD_YYYY), / *#/)
            },
            {
              // #H:mm[:ss]# (24h Time)
              begin: regex.concat(/# */, TIME_24H, / *#/)
            },
            {
              // #h[:mm[:ss]] A# (12h Time)
              begin: regex.concat(/# */, TIME_12H, / *#/)
            },
            {
              // date plus time
              begin: regex.concat(
                /# */,
                regex.either(YYYY_MM_DD, MM_DD_YYYY),
                / +/,
                regex.either(TIME_12H, TIME_24H),
                / *#/
              )
            }
          ]
        };
        const NUMBER = {
          className: "number",
          relevance: 0,
          variants: [
            {
              // Float
              begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
            },
            {
              // Integer (base 10)
              begin: /\b\d[\d_]*((U?[SIL])|[%&])?/
            },
            {
              // Integer (base 16)
              begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/
            },
            {
              // Integer (base 8)
              begin: /&O[0-7_]+((U?[SIL])|[%&])?/
            },
            {
              // Integer (base 2)
              begin: /&B[01_]+((U?[SIL])|[%&])?/
            }
          ]
        };
        const LABEL = {
          className: "label",
          begin: /^\w+:/
        };
        const DOC_COMMENT = hljs.COMMENT(/'''/, /$/, { contains: [
          {
            className: "doctag",
            begin: /<\/?/,
            end: />/
          }
        ] });
        const COMMENT = hljs.COMMENT(null, /$/, { variants: [
          { begin: /'/ },
          {
            // TODO: Use multi-class for leading spaces
            begin: /([\t ]|^)REM(?=\s)/
          }
        ] });
        const DIRECTIVES = {
          className: "meta",
          // TODO: Use multi-class for indentation once available
          begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
          end: /$/,
          keywords: { keyword: "const disable else elseif enable end externalsource if region then" },
          contains: [COMMENT]
        };
        return {
          name: "Visual Basic .NET",
          aliases: ["vb"],
          case_insensitive: true,
          classNameAliases: { label: "symbol" },
          keywords: {
            keyword: "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
            built_in: (
              // Operators https://docs.microsoft.com/dotnet/visual-basic/language-reference/operators
              "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort"
            ),
            type: (
              // Data types https://docs.microsoft.com/dotnet/visual-basic/language-reference/data-types
              "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort"
            ),
            literal: "true false nothing"
          },
          illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
          contains: [
            CHARACTER,
            STRING,
            DATE,
            NUMBER,
            LABEL,
            DOC_COMMENT,
            COMMENT,
            DIRECTIVES
          ]
        };
      }
      module.exports = vbnet;
    }
  });

  // node_modules/highlight.js/lib/languages/wasm.js
  var require_wasm = __commonJS({
    "node_modules/highlight.js/lib/languages/wasm.js"(exports, module) {
      function wasm(hljs) {
        hljs.regex;
        const BLOCK_COMMENT = hljs.COMMENT(/\(;/, /;\)/);
        BLOCK_COMMENT.contains.push("self");
        const LINE_COMMENT = hljs.COMMENT(/;;/, /$/);
        const KWS = [
          "anyfunc",
          "block",
          "br",
          "br_if",
          "br_table",
          "call",
          "call_indirect",
          "data",
          "drop",
          "elem",
          "else",
          "end",
          "export",
          "func",
          "global.get",
          "global.set",
          "local.get",
          "local.set",
          "local.tee",
          "get_global",
          "get_local",
          "global",
          "if",
          "import",
          "local",
          "loop",
          "memory",
          "memory.grow",
          "memory.size",
          "module",
          "mut",
          "nop",
          "offset",
          "param",
          "result",
          "return",
          "select",
          "set_global",
          "set_local",
          "start",
          "table",
          "tee_local",
          "then",
          "type",
          "unreachable"
        ];
        const FUNCTION_REFERENCE = {
          begin: [
            /(?:func|call|call_indirect)/,
            /\s+/,
            /\$[^\s)]+/
          ],
          className: {
            1: "keyword",
            3: "title.function"
          }
        };
        const ARGUMENT = {
          className: "variable",
          begin: /\$[\w_]+/
        };
        const PARENS = {
          match: /(\((?!;)|\))+/,
          className: "punctuation",
          relevance: 0
        };
        const NUMBER = {
          className: "number",
          relevance: 0,
          // borrowed from Prism, TODO: split out into variants
          match: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/
        };
        const TYPE = {
          // look-ahead prevents us from gobbling up opcodes
          match: /(i32|i64|f32|f64)(?!\.)/,
          className: "type"
        };
        const MATH_OPERATIONS = {
          className: "keyword",
          // borrowed from Prism, TODO: split out into variants
          match: /\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/
        };
        const OFFSET_ALIGN = {
          match: [
            /(?:offset|align)/,
            /\s*/,
            /=/
          ],
          className: {
            1: "keyword",
            3: "operator"
          }
        };
        return {
          name: "WebAssembly",
          keywords: {
            $pattern: /[\w.]+/,
            keyword: KWS
          },
          contains: [
            LINE_COMMENT,
            BLOCK_COMMENT,
            OFFSET_ALIGN,
            ARGUMENT,
            PARENS,
            FUNCTION_REFERENCE,
            hljs.QUOTE_STRING_MODE,
            TYPE,
            MATH_OPERATIONS,
            NUMBER
          ]
        };
      }
      module.exports = wasm;
    }
  });

  // node_modules/highlight.js/lib/common.js
  var require_common = __commonJS({
    "node_modules/highlight.js/lib/common.js"(exports, module) {
      var hljs = require_core();
      hljs.registerLanguage("xml", require_xml());
      hljs.registerLanguage("bash", require_bash());
      hljs.registerLanguage("c", require_c());
      hljs.registerLanguage("cpp", require_cpp());
      hljs.registerLanguage("csharp", require_csharp());
      hljs.registerLanguage("css", require_css());
      hljs.registerLanguage("markdown", require_markdown());
      hljs.registerLanguage("diff", require_diff());
      hljs.registerLanguage("ruby", require_ruby());
      hljs.registerLanguage("go", require_go());
      hljs.registerLanguage("graphql", require_graphql());
      hljs.registerLanguage("ini", require_ini());
      hljs.registerLanguage("java", require_java());
      hljs.registerLanguage("javascript", require_javascript());
      hljs.registerLanguage("json", require_json());
      hljs.registerLanguage("kotlin", require_kotlin());
      hljs.registerLanguage("less", require_less());
      hljs.registerLanguage("lua", require_lua());
      hljs.registerLanguage("makefile", require_makefile());
      hljs.registerLanguage("perl", require_perl());
      hljs.registerLanguage("objectivec", require_objectivec());
      hljs.registerLanguage("php", require_php());
      hljs.registerLanguage("php-template", require_php_template());
      hljs.registerLanguage("plaintext", require_plaintext());
      hljs.registerLanguage("python", require_python());
      hljs.registerLanguage("python-repl", require_python_repl());
      hljs.registerLanguage("r", require_r());
      hljs.registerLanguage("rust", require_rust());
      hljs.registerLanguage("scss", require_scss());
      hljs.registerLanguage("shell", require_shell());
      hljs.registerLanguage("sql", require_sql());
      hljs.registerLanguage("swift", require_swift());
      hljs.registerLanguage("yaml", require_yaml());
      hljs.registerLanguage("typescript", require_typescript());
      hljs.registerLanguage("vbnet", require_vbnet());
      hljs.registerLanguage("wasm", require_wasm());
      hljs.HighlightJS = hljs;
      hljs.default = hljs;
      module.exports = hljs;
    }
  });

  // src/atom/style/init.ts
  document.addEventListener("DOMContentLoaded", () => {
    if (document.body.classList.contains("dark-theme") || document.body.classList.contains("light-theme")) {
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)")) {
        document.body.classList.add("dark-theme");
      } else {
        document.body.classList.add("light-theme");
      }
    }
  });

  // node_modules/@lit/reactive-element/css-tag.js
  var t = globalThis;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var o = /* @__PURE__ */ new WeakMap();
  var n = class {
    constructor(t4, e6, o4) {
      if (this._$cssResult$ = true, o4 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t4, this.t = e6;
    }
    get styleSheet() {
      let t4 = this.o;
      const s2 = this.t;
      if (e && void 0 === t4) {
        const e6 = void 0 !== s2 && 1 === s2.length;
        e6 && (t4 = o.get(s2)), void 0 === t4 && ((this.o = t4 = new CSSStyleSheet()).replaceSync(this.cssText), e6 && o.set(s2, t4));
      }
      return t4;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t4) => new n("string" == typeof t4 ? t4 : t4 + "", void 0, s);
  var i = (t4, ...e6) => {
    const o4 = 1 === t4.length ? t4[0] : e6.reduce((e7, s2, o5) => e7 + ((t5) => {
      if (true === t5._$cssResult$) return t5.cssText;
      if ("number" == typeof t5) return t5;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t5 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s2) + t4[o5 + 1], t4[0]);
    return new n(o4, t4, s);
  };
  var S = (s2, o4) => {
    if (e) s2.adoptedStyleSheets = o4.map((t4) => t4 instanceof CSSStyleSheet ? t4 : t4.styleSheet);
    else for (const e6 of o4) {
      const o5 = document.createElement("style"), n5 = t.litNonce;
      void 0 !== n5 && o5.setAttribute("nonce", n5), o5.textContent = e6.cssText, s2.appendChild(o5);
    }
  };
  var c = e ? (t4) => t4 : (t4) => t4 instanceof CSSStyleSheet ? ((t5) => {
    let e6 = "";
    for (const s2 of t5.cssRules) e6 += s2.cssText;
    return r(e6);
  })(t4) : t4;

  // node_modules/@lit/reactive-element/reactive-element.js
  var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: r2, getOwnPropertyNames: h, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
  var a = globalThis;
  var c2 = a.trustedTypes;
  var l = c2 ? c2.emptyScript : "";
  var p = a.reactiveElementPolyfillSupport;
  var d = (t4, s2) => t4;
  var u = { toAttribute(t4, s2) {
    switch (s2) {
      case Boolean:
        t4 = t4 ? l : null;
        break;
      case Object:
      case Array:
        t4 = null == t4 ? t4 : JSON.stringify(t4);
    }
    return t4;
  }, fromAttribute(t4, s2) {
    let i4 = t4;
    switch (s2) {
      case Boolean:
        i4 = null !== t4;
        break;
      case Number:
        i4 = null === t4 ? null : Number(t4);
        break;
      case Object:
      case Array:
        try {
          i4 = JSON.parse(t4);
        } catch (t5) {
          i4 = null;
        }
    }
    return i4;
  } };
  var f = (t4, s2) => !i2(t4, s2);
  var y = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
  Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
  var b = class extends HTMLElement {
    static addInitializer(t4) {
      this._$Ei(), (this.l ??= []).push(t4);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t4, s2 = y) {
      if (s2.state && (s2.attribute = false), this._$Ei(), this.elementProperties.set(t4, s2), !s2.noAccessor) {
        const i4 = Symbol(), r5 = this.getPropertyDescriptor(t4, i4, s2);
        void 0 !== r5 && e2(this.prototype, t4, r5);
      }
    }
    static getPropertyDescriptor(t4, s2, i4) {
      const { get: e6, set: h4 } = r2(this.prototype, t4) ?? { get() {
        return this[s2];
      }, set(t5) {
        this[s2] = t5;
      } };
      return { get() {
        return e6?.call(this);
      }, set(s3) {
        const r5 = e6?.call(this);
        h4.call(this, s3), this.requestUpdate(t4, r5, i4);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t4) {
      return this.elementProperties.get(t4) ?? y;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d("elementProperties"))) return;
      const t4 = n2(this);
      t4.finalize(), void 0 !== t4.l && (this.l = [...t4.l]), this.elementProperties = new Map(t4.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
        const t5 = this.properties, s2 = [...h(t5), ...o2(t5)];
        for (const i4 of s2) this.createProperty(i4, t5[i4]);
      }
      const t4 = this[Symbol.metadata];
      if (null !== t4) {
        const s2 = litPropertyMetadata.get(t4);
        if (void 0 !== s2) for (const [t5, i4] of s2) this.elementProperties.set(t5, i4);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t5, s2] of this.elementProperties) {
        const i4 = this._$Eu(t5, s2);
        void 0 !== i4 && this._$Eh.set(i4, t5);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s2) {
      const i4 = [];
      if (Array.isArray(s2)) {
        const e6 = new Set(s2.flat(1 / 0).reverse());
        for (const s3 of e6) i4.unshift(c(s3));
      } else void 0 !== s2 && i4.push(c(s2));
      return i4;
    }
    static _$Eu(t4, s2) {
      const i4 = s2.attribute;
      return false === i4 ? void 0 : "string" == typeof i4 ? i4 : "string" == typeof t4 ? t4.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$ES = new Promise((t4) => this.enableUpdating = t4), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t4) => t4(this));
    }
    addController(t4) {
      (this._$EO ??= /* @__PURE__ */ new Set()).add(t4), void 0 !== this.renderRoot && this.isConnected && t4.hostConnected?.();
    }
    removeController(t4) {
      this._$EO?.delete(t4);
    }
    _$E_() {
      const t4 = /* @__PURE__ */ new Map(), s2 = this.constructor.elementProperties;
      for (const i4 of s2.keys()) this.hasOwnProperty(i4) && (t4.set(i4, this[i4]), delete this[i4]);
      t4.size > 0 && (this._$Ep = t4);
    }
    createRenderRoot() {
      const t4 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S(t4, this.constructor.elementStyles), t4;
    }
    connectedCallback() {
      this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t4) => t4.hostConnected?.());
    }
    enableUpdating(t4) {
    }
    disconnectedCallback() {
      this._$EO?.forEach((t4) => t4.hostDisconnected?.());
    }
    attributeChangedCallback(t4, s2, i4) {
      this._$AK(t4, i4);
    }
    _$EC(t4, s2) {
      const i4 = this.constructor.elementProperties.get(t4), e6 = this.constructor._$Eu(t4, i4);
      if (void 0 !== e6 && true === i4.reflect) {
        const r5 = (void 0 !== i4.converter?.toAttribute ? i4.converter : u).toAttribute(s2, i4.type);
        this._$Em = t4, null == r5 ? this.removeAttribute(e6) : this.setAttribute(e6, r5), this._$Em = null;
      }
    }
    _$AK(t4, s2) {
      const i4 = this.constructor, e6 = i4._$Eh.get(t4);
      if (void 0 !== e6 && this._$Em !== e6) {
        const t5 = i4.getPropertyOptions(e6), r5 = "function" == typeof t5.converter ? { fromAttribute: t5.converter } : void 0 !== t5.converter?.fromAttribute ? t5.converter : u;
        this._$Em = e6, this[e6] = r5.fromAttribute(s2, t5.type), this._$Em = null;
      }
    }
    requestUpdate(t4, s2, i4) {
      if (void 0 !== t4) {
        if (i4 ??= this.constructor.getPropertyOptions(t4), !(i4.hasChanged ?? f)(this[t4], s2)) return;
        this.P(t4, s2, i4);
      }
      false === this.isUpdatePending && (this._$ES = this._$ET());
    }
    P(t4, s2, i4) {
      this._$AL.has(t4) || this._$AL.set(t4, s2), true === i4.reflect && this._$Em !== t4 && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t4);
    }
    async _$ET() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (t5) {
        Promise.reject(t5);
      }
      const t4 = this.scheduleUpdate();
      return null != t4 && await t4, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
          for (const [t6, s3] of this._$Ep) this[t6] = s3;
          this._$Ep = void 0;
        }
        const t5 = this.constructor.elementProperties;
        if (t5.size > 0) for (const [s3, i4] of t5) true !== i4.wrapped || this._$AL.has(s3) || void 0 === this[s3] || this.P(s3, this[s3], i4);
      }
      let t4 = false;
      const s2 = this._$AL;
      try {
        t4 = this.shouldUpdate(s2), t4 ? (this.willUpdate(s2), this._$EO?.forEach((t5) => t5.hostUpdate?.()), this.update(s2)) : this._$EU();
      } catch (s3) {
        throw t4 = false, this._$EU(), s3;
      }
      t4 && this._$AE(s2);
    }
    willUpdate(t4) {
    }
    _$AE(t4) {
      this._$EO?.forEach((t5) => t5.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t4)), this.updated(t4);
    }
    _$EU() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t4) {
      return true;
    }
    update(t4) {
      this._$Ej &&= this._$Ej.forEach((t5) => this._$EC(t5, this[t5])), this._$EU();
    }
    updated(t4) {
    }
    firstUpdated(t4) {
    }
  };
  b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[d("elementProperties")] = /* @__PURE__ */ new Map(), b[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: b }), (a.reactiveElementVersions ??= []).push("2.0.4");

  // node_modules/lit-html/lit-html.js
  var n3 = globalThis;
  var c3 = n3.trustedTypes;
  var h2 = c3 ? c3.createPolicy("lit-html", { createHTML: (t4) => t4 }) : void 0;
  var f2 = "$lit$";
  var v = `lit$${Math.random().toFixed(9).slice(2)}$`;
  var m = "?" + v;
  var _ = `<${m}>`;
  var w = document;
  var lt = () => w.createComment("");
  var st = (t4) => null === t4 || "object" != typeof t4 && "function" != typeof t4;
  var g = Array.isArray;
  var $ = (t4) => g(t4) || "function" == typeof t4?.[Symbol.iterator];
  var x = "[ 	\n\f\r]";
  var T = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var E = /-->/g;
  var k = />/g;
  var O = RegExp(`>|${x}(?:([^\\s"'>=/]+)(${x}*=${x}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var S2 = /'/g;
  var j = /"/g;
  var M = /^(?:script|style|textarea|title)$/i;
  var P = (t4) => (i4, ...s2) => ({ _$litType$: t4, strings: i4, values: s2 });
  var ke = P(1);
  var Oe = P(2);
  var Se = P(3);
  var R = Symbol.for("lit-noChange");
  var D = Symbol.for("lit-nothing");
  var V = /* @__PURE__ */ new WeakMap();
  var I = w.createTreeWalker(w, 129);
  function N(t4, i4) {
    if (!g(t4) || !t4.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== h2 ? h2.createHTML(i4) : i4;
  }
  var U = (t4, i4) => {
    const s2 = t4.length - 1, e6 = [];
    let h4, o4 = 2 === i4 ? "<svg>" : 3 === i4 ? "<math>" : "", n5 = T;
    for (let i5 = 0; i5 < s2; i5++) {
      const s3 = t4[i5];
      let r5, l2, c4 = -1, a2 = 0;
      for (; a2 < s3.length && (n5.lastIndex = a2, l2 = n5.exec(s3), null !== l2); ) a2 = n5.lastIndex, n5 === T ? "!--" === l2[1] ? n5 = E : void 0 !== l2[1] ? n5 = k : void 0 !== l2[2] ? (M.test(l2[2]) && (h4 = RegExp("</" + l2[2], "g")), n5 = O) : void 0 !== l2[3] && (n5 = O) : n5 === O ? ">" === l2[0] ? (n5 = h4 ?? T, c4 = -1) : void 0 === l2[1] ? c4 = -2 : (c4 = n5.lastIndex - l2[2].length, r5 = l2[1], n5 = void 0 === l2[3] ? O : '"' === l2[3] ? j : S2) : n5 === j || n5 === S2 ? n5 = O : n5 === E || n5 === k ? n5 = T : (n5 = O, h4 = void 0);
      const u2 = n5 === O && t4[i5 + 1].startsWith("/>") ? " " : "";
      o4 += n5 === T ? s3 + _ : c4 >= 0 ? (e6.push(r5), s3.slice(0, c4) + f2 + s3.slice(c4) + v + u2) : s3 + v + (-2 === c4 ? i5 : u2);
    }
    return [N(t4, o4 + (t4[s2] || "<?>") + (2 === i4 ? "</svg>" : 3 === i4 ? "</math>" : "")), e6];
  };
  var B = class _B {
    constructor({ strings: t4, _$litType$: i4 }, s2) {
      let e6;
      this.parts = [];
      let h4 = 0, o4 = 0;
      const n5 = t4.length - 1, r5 = this.parts, [l2, a2] = U(t4, i4);
      if (this.el = _B.createElement(l2, s2), I.currentNode = this.el.content, 2 === i4 || 3 === i4) {
        const t5 = this.el.content.firstChild;
        t5.replaceWith(...t5.childNodes);
      }
      for (; null !== (e6 = I.nextNode()) && r5.length < n5; ) {
        if (1 === e6.nodeType) {
          if (e6.hasAttributes()) for (const t5 of e6.getAttributeNames()) if (t5.endsWith(f2)) {
            const i5 = a2[o4++], s3 = e6.getAttribute(t5).split(v), n6 = /([.?@])?(.*)/.exec(i5);
            r5.push({ type: 1, index: h4, name: n6[2], strings: s3, ctor: "." === n6[1] ? Y : "?" === n6[1] ? Z : "@" === n6[1] ? q : G }), e6.removeAttribute(t5);
          } else t5.startsWith(v) && (r5.push({ type: 6, index: h4 }), e6.removeAttribute(t5));
          if (M.test(e6.tagName)) {
            const t5 = e6.textContent.split(v), i5 = t5.length - 1;
            if (i5 > 0) {
              e6.textContent = c3 ? c3.emptyScript : "";
              for (let s3 = 0; s3 < i5; s3++) e6.append(t5[s3], lt()), I.nextNode(), r5.push({ type: 2, index: ++h4 });
              e6.append(t5[i5], lt());
            }
          }
        } else if (8 === e6.nodeType) if (e6.data === m) r5.push({ type: 2, index: h4 });
        else {
          let t5 = -1;
          for (; -1 !== (t5 = e6.data.indexOf(v, t5 + 1)); ) r5.push({ type: 7, index: h4 }), t5 += v.length - 1;
        }
        h4++;
      }
    }
    static createElement(t4, i4) {
      const s2 = w.createElement("template");
      return s2.innerHTML = t4, s2;
    }
  };
  function z(t4, i4, s2 = t4, e6) {
    if (i4 === R) return i4;
    let h4 = void 0 !== e6 ? s2.o?.[e6] : s2.l;
    const o4 = st(i4) ? void 0 : i4._$litDirective$;
    return h4?.constructor !== o4 && (h4?._$AO?.(false), void 0 === o4 ? h4 = void 0 : (h4 = new o4(t4), h4._$AT(t4, s2, e6)), void 0 !== e6 ? (s2.o ??= [])[e6] = h4 : s2.l = h4), void 0 !== h4 && (i4 = z(t4, h4._$AS(t4, i4.values), h4, e6)), i4;
  }
  var F = class {
    constructor(t4, i4) {
      this._$AV = [], this._$AN = void 0, this._$AD = t4, this._$AM = i4;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t4) {
      const { el: { content: i4 }, parts: s2 } = this._$AD, e6 = (t4?.creationScope ?? w).importNode(i4, true);
      I.currentNode = e6;
      let h4 = I.nextNode(), o4 = 0, n5 = 0, r5 = s2[0];
      for (; void 0 !== r5; ) {
        if (o4 === r5.index) {
          let i5;
          2 === r5.type ? i5 = new et(h4, h4.nextSibling, this, t4) : 1 === r5.type ? i5 = new r5.ctor(h4, r5.name, r5.strings, this, t4) : 6 === r5.type && (i5 = new K(h4, this, t4)), this._$AV.push(i5), r5 = s2[++n5];
        }
        o4 !== r5?.index && (h4 = I.nextNode(), o4++);
      }
      return I.currentNode = w, e6;
    }
    p(t4) {
      let i4 = 0;
      for (const s2 of this._$AV) void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t4, s2, i4), i4 += s2.strings.length - 2) : s2._$AI(t4[i4])), i4++;
    }
  };
  var et = class _et {
    get _$AU() {
      return this._$AM?._$AU ?? this.v;
    }
    constructor(t4, i4, s2, e6) {
      this.type = 2, this._$AH = D, this._$AN = void 0, this._$AA = t4, this._$AB = i4, this._$AM = s2, this.options = e6, this.v = e6?.isConnected ?? true;
    }
    get parentNode() {
      let t4 = this._$AA.parentNode;
      const i4 = this._$AM;
      return void 0 !== i4 && 11 === t4?.nodeType && (t4 = i4.parentNode), t4;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t4, i4 = this) {
      t4 = z(this, t4, i4), st(t4) ? t4 === D || null == t4 || "" === t4 ? (this._$AH !== D && this._$AR(), this._$AH = D) : t4 !== this._$AH && t4 !== R && this._(t4) : void 0 !== t4._$litType$ ? this.$(t4) : void 0 !== t4.nodeType ? this.T(t4) : $(t4) ? this.k(t4) : this._(t4);
    }
    O(t4) {
      return this._$AA.parentNode.insertBefore(t4, this._$AB);
    }
    T(t4) {
      this._$AH !== t4 && (this._$AR(), this._$AH = this.O(t4));
    }
    _(t4) {
      this._$AH !== D && st(this._$AH) ? this._$AA.nextSibling.data = t4 : this.T(w.createTextNode(t4)), this._$AH = t4;
    }
    $(t4) {
      const { values: i4, _$litType$: s2 } = t4, e6 = "number" == typeof s2 ? this._$AC(t4) : (void 0 === s2.el && (s2.el = B.createElement(N(s2.h, s2.h[0]), this.options)), s2);
      if (this._$AH?._$AD === e6) this._$AH.p(i4);
      else {
        const t5 = new F(e6, this), s3 = t5.u(this.options);
        t5.p(i4), this.T(s3), this._$AH = t5;
      }
    }
    _$AC(t4) {
      let i4 = V.get(t4.strings);
      return void 0 === i4 && V.set(t4.strings, i4 = new B(t4)), i4;
    }
    k(t4) {
      g(this._$AH) || (this._$AH = [], this._$AR());
      const i4 = this._$AH;
      let s2, e6 = 0;
      for (const h4 of t4) e6 === i4.length ? i4.push(s2 = new _et(this.O(lt()), this.O(lt()), this, this.options)) : s2 = i4[e6], s2._$AI(h4), e6++;
      e6 < i4.length && (this._$AR(s2 && s2._$AB.nextSibling, e6), i4.length = e6);
    }
    _$AR(t4 = this._$AA.nextSibling, i4) {
      for (this._$AP?.(false, true, i4); t4 && t4 !== this._$AB; ) {
        const i5 = t4.nextSibling;
        t4.remove(), t4 = i5;
      }
    }
    setConnected(t4) {
      void 0 === this._$AM && (this.v = t4, this._$AP?.(t4));
    }
  };
  var G = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t4, i4, s2, e6, h4) {
      this.type = 1, this._$AH = D, this._$AN = void 0, this.element = t4, this.name = i4, this._$AM = e6, this.options = h4, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = D;
    }
    _$AI(t4, i4 = this, s2, e6) {
      const h4 = this.strings;
      let o4 = false;
      if (void 0 === h4) t4 = z(this, t4, i4, 0), o4 = !st(t4) || t4 !== this._$AH && t4 !== R, o4 && (this._$AH = t4);
      else {
        const e7 = t4;
        let n5, r5;
        for (t4 = h4[0], n5 = 0; n5 < h4.length - 1; n5++) r5 = z(this, e7[s2 + n5], i4, n5), r5 === R && (r5 = this._$AH[n5]), o4 ||= !st(r5) || r5 !== this._$AH[n5], r5 === D ? t4 = D : t4 !== D && (t4 += (r5 ?? "") + h4[n5 + 1]), this._$AH[n5] = r5;
      }
      o4 && !e6 && this.j(t4);
    }
    j(t4) {
      t4 === D ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t4 ?? "");
    }
  };
  var Y = class extends G {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t4) {
      this.element[this.name] = t4 === D ? void 0 : t4;
    }
  };
  var Z = class extends G {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t4) {
      this.element.toggleAttribute(this.name, !!t4 && t4 !== D);
    }
  };
  var q = class extends G {
    constructor(t4, i4, s2, e6, h4) {
      super(t4, i4, s2, e6, h4), this.type = 5;
    }
    _$AI(t4, i4 = this) {
      if ((t4 = z(this, t4, i4, 0) ?? D) === R) return;
      const s2 = this._$AH, e6 = t4 === D && s2 !== D || t4.capture !== s2.capture || t4.once !== s2.once || t4.passive !== s2.passive, h4 = t4 !== D && (s2 === D || e6);
      e6 && this.element.removeEventListener(this.name, this, s2), h4 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
    }
    handleEvent(t4) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t4) : this._$AH.handleEvent(t4);
    }
  };
  var K = class {
    constructor(t4, i4, s2) {
      this.element = t4, this.type = 6, this._$AN = void 0, this._$AM = i4, this.options = s2;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t4) {
      z(this, t4);
    }
  };
  var Re = n3.litHtmlPolyfillSupport;
  Re?.(B, et), (n3.litHtmlVersions ??= []).push("3.2.0");
  var Q = (t4, i4, s2) => {
    const e6 = s2?.renderBefore ?? i4;
    let h4 = e6._$litPart$;
    if (void 0 === h4) {
      const t5 = s2?.renderBefore ?? null;
      e6._$litPart$ = h4 = new et(i4.insertBefore(lt(), t5), t5, void 0, s2 ?? {});
    }
    return h4._$AI(t4), h4;
  };

  // node_modules/lit-element/lit-element.js
  var h3 = class extends b {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this.o = void 0;
    }
    createRenderRoot() {
      const t4 = super.createRenderRoot();
      return this.renderOptions.renderBefore ??= t4.firstChild, t4;
    }
    update(t4) {
      const e6 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t4), this.o = Q(e6, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this.o?.setConnected(true);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.o?.setConnected(false);
    }
    render() {
      return R;
    }
  };
  h3._$litElement$ = true, h3["finalized"] = true, globalThis.litElementHydrateSupport?.({ LitElement: h3 });
  var f3 = globalThis.litElementPolyfillSupport;
  f3?.({ LitElement: h3 });
  (globalThis.litElementVersions ??= []).push("4.1.0");

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  var t2 = (t4) => (e6, o4) => {
    void 0 !== o4 ? o4.addInitializer(() => {
      customElements.define(t4, e6);
    }) : customElements.define(t4, e6);
  };

  // node_modules/@lit/reactive-element/decorators/property.js
  var o3 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
  var r3 = (t4 = o3, e6, r5) => {
    const { kind: n5, metadata: i4 } = r5;
    let s2 = globalThis.litPropertyMetadata.get(i4);
    if (void 0 === s2 && globalThis.litPropertyMetadata.set(i4, s2 = /* @__PURE__ */ new Map()), s2.set(r5.name, t4), "accessor" === n5) {
      const { name: o4 } = r5;
      return { set(r6) {
        const n6 = e6.get.call(this);
        e6.set.call(this, r6), this.requestUpdate(o4, n6, t4);
      }, init(e7) {
        return void 0 !== e7 && this.P(o4, void 0, t4), e7;
      } };
    }
    if ("setter" === n5) {
      const { name: o4 } = r5;
      return function(r6) {
        const n6 = this[o4];
        e6.call(this, r6), this.requestUpdate(o4, n6, t4);
      };
    }
    throw Error("Unsupported decorator location: " + n5);
  };
  function n4(t4) {
    return (e6, o4) => "object" == typeof o4 ? r3(t4, e6, o4) : ((t5, e7, o5) => {
      const r5 = e7.hasOwnProperty(o5);
      return e7.constructor.createProperty(o5, r5 ? { ...t5, wrapped: true } : t5), r5 ? Object.getOwnPropertyDescriptor(e7, o5) : void 0;
    })(t4, e6, o4);
  }

  // node_modules/@lit/reactive-element/decorators/state.js
  function r4(r5) {
    return n4({ ...r5, state: true, attribute: false });
  }

  // node_modules/@lit/reactive-element/decorators/base.js
  var e3 = (e6, t4, c4) => (c4.configurable = true, c4.enumerable = true, Reflect.decorate && "object" != typeof t4 && Object.defineProperty(e6, t4, c4), c4);

  // node_modules/@lit/reactive-element/decorators/query.js
  function e4(e6, r5) {
    return (n5, s2, i4) => {
      const o4 = (t4) => t4.renderRoot?.querySelector(e6) ?? null;
      if (r5) {
        const { get: e7, set: r6 } = "object" == typeof s2 ? n5 : i4 ?? (() => {
          const t4 = Symbol();
          return { get() {
            return this[t4];
          }, set(e8) {
            this[t4] = e8;
          } };
        })();
        return e3(n5, s2, { get() {
          let t4 = e7.call(this);
          return void 0 === t4 && (t4 = o4(this), (null !== t4 || this.hasUpdated) && r6.call(this, t4)), t4;
        } });
      }
      return e3(n5, s2, { get() {
        return o4(this);
      } });
    };
  }

  // src/state.ts
  var initialState = {
    num: 10,
    clicks: 90,
    airplane_mode: 0,
    color: "#0099ff"
  };

  // src/atom/lib/State.ts
  var state = initialState;
  var subscribers = /* @__PURE__ */ new Set();
  function getState() {
    return Object.freeze({ ...state });
  }
  function update(key, value) {
    state[key] = value;
    notifySubscribers();
  }
  function updateMany(data) {
    Object.entries(data).forEach(([key, value]) => {
      if (key in state) {
        state[key] = value;
      }
    });
    notifySubscribers();
  }
  function subscribe(callback) {
    subscribers.add(callback);
    return () => unsubscribe(callback);
  }
  function unsubscribe(callback) {
    subscribers.delete(callback);
  }
  function notifySubscribers() {
    const currentState = getState();
    subscribers.forEach((callback) => callback(currentState));
  }
  updateMany(initialState);
  console.log("initialState", state);

  // src/atom/lib/Atom.ts
  var Atom = class extends h3 {
    constructor() {
      super(...arguments);
      this.value = 0;
      this.disabled = false;
      this.label = "";
      this.bind = void 0;
    }
    async connectedCallback() {
      super.connectedCallback();
      if (this.bind !== void 0) {
        this.value = getState()[this.bind];
        this.cancelSubscription = subscribe((s2) => {
          if (this.bind !== void 0) {
            this.value = s2[this.bind];
            this.stateUpdate();
          }
        });
      }
    }
    disconnectedCallback() {
      if (this.cancelSubscription) {
        this.cancelSubscription();
      }
    }
    // Stub method to be overridden in derived classes
    action(_event) {
    }
    // Stub method to be overridden in derived classes
    stateUpdate() {
    }
    announce(eventKey, value, originalEvent) {
      if (originalEvent) {
        originalEvent.stopPropagation();
      }
      if (this.bind !== void 0) {
        update(this.bind, value);
      } else {
        this.value = value;
      }
      let finalEventKey = eventKey;
      if (eventKey === "click" && originalEvent && originalEvent instanceof KeyboardEvent) {
        finalEventKey = "keyup";
      }
      const event = new CustomEvent(finalEventKey, {
        bubbles: true,
        composed: true,
        detail: { value, originalEvent }
      });
      console.log("@Atom dispatch event:", eventKey, value);
      this.dispatchEvent(event);
    }
  };
  __decorateClass([
    n4()
  ], Atom.prototype, "value", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], Atom.prototype, "disabled", 2);
  __decorateClass([
    n4({ type: String, reflect: true })
  ], Atom.prototype, "label", 2);
  __decorateClass([
    n4({ reflect: false })
  ], Atom.prototype, "bind", 2);

  // src/atom/components/binding.css.ts
  var styles = i`
    span {
        background-color: var(--atom-control-bg);
        color: var(--atom-fg);
        padding: 4px;
        padding-top: 3px;
        padding-bottom: 4px;
        border-radius: 4px;
        font: var(--atom-font-code);
    }
`;

  // src/atom/components/binding.ts
  var Binding = class extends Atom {
    render() {
      return ke`<span>${this.value}</span>`;
    }
  };
  Binding.styles = styles;
  Binding = __decorateClass([
    t2("atom-binding")
  ], Binding);

  // src/atom/components/range.css.ts
  var styles2 = i`
.range {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

.labels {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    padding-inline: 2px;
    margin-bottom: 0.25rem;
}
.label {
    flex-grow: 1;
    font: var(--atom-font-label);
}
.label.value {
    text-align: right;
    font: var(--atom-font-code);
}

input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 100%;
    height: 8px;
    border-radius: 9999px;
}

input[type="range"]:focus {
    outline: none;
}
        
/* webkit */

input[type=range]::-webkit-slider-runnable-track {
    height: 8px;
}

input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none; 
    height: 22px;
    width: 22px;
    margin-top: -7px;
    background-color: var(--atom-bg);
    border-radius: 50%;
    border: 3px solid var(--atom-color-accent);
    transition: border cubic-bezier(0.165, 0.84, 0.44, 1) 100ms;
}

input[type=range]::-webkit-slider-thumb:active {
    border-width: 7px;
}

/* moz */

input[type=range]::-moz-range-thumb {
    height: 16px;
    width: 16px;
    background-color: var(--atom-bg);
    border-radius: 50%;
    border: 3px solid var(--atom-color-accent);
}

input[type=range]::-moz-range-thumb:active {
    height: 8px;
    width: 8px;
    border-width: 7px;
}

input[type="range"]:focus {
    outline: none;
}
input[type=range]:focus-visible::-webkit-slider-runnable-track, input[type=range]:focus::-webkit-slider-runnable-track {
    outline: none;
}
input[type=range]:focus-visible::-webkit-slider-thumb {
    outline: 4px solid #f00;
    outline-offset: 4px;
}
input[type=range]:focus-visible::-moz-range-thumb {
    outline: 4px solid #f00;
    outline-offset: 8px;
}

/* disabled */
input[disabled] {
    opacity: 0.5;
    pointer-events: none;
}
`;

  // src/atom/components/range.ts
  var Range = class extends Atom {
    constructor() {
      super(...arguments);
      this.min = 1;
      this.max = 30;
      this.step = 1;
      this.label = "Slider";
      this.value = 6;
    }
    stateUpdate() {
      this.rangeElement.value = `${this.value}`;
    }
    action(event) {
      const value = Number.parseFloat(event.target.value);
      this.announce(Range.atomEvent, value, event);
    }
    render() {
      const pct = (this.value - this.min) / (this.max - this.min) * 100;
      const css = `background: linear-gradient(to right, var(--atom-color-accent) ${pct}%, var(--atom-control-bg) ${pct - 1}%)`;
      return ke`    
    <div class="range">
		<div class="labels">
			<div class="label">${this.label}</div>
			<div class="label value">${this.value}</div>
		</div>		
        <input
			style=${css}
            type="range"
			?disabled=${this.disabled}
            min=${this.min}
            max=${this.max}
            step=${this.step}
            value=${this.value}
            @change=${this.action}
            @input=${this.action}
			aria-label=${this.label}
        />
    </div>`;
    }
  };
  Range.atomEvent = "change";
  Range.styles = styles2;
  __decorateClass([
    n4({ type: Number, reflect: true })
  ], Range.prototype, "min", 2);
  __decorateClass([
    n4({ type: Number, reflect: true })
  ], Range.prototype, "max", 2);
  __decorateClass([
    n4({ type: Number, reflect: true })
  ], Range.prototype, "step", 2);
  __decorateClass([
    n4({ type: Number, reflect: true })
  ], Range.prototype, "value", 2);
  __decorateClass([
    e4("input[type=range]")
  ], Range.prototype, "rangeElement", 2);
  Range = __decorateClass([
    t2("atom-range")
  ], Range);

  // src/atom/components/range-color.ts
  var local_styles = i`
	:host {
		/* private, dynamic: */
		--_thumb_color: #f00;
	}

	input[type=range]::-webkit-slider-runnable-track {
		border-radius: 500px;
		background: linear-gradient(to right, rgb(255 0 0) 0%, rgb(255 255 0) 17%, rgb(0 255 0) 33%, rgb(0 255 255) 50%, rgb(0 0 255) 67%, rgb(255 0 255) 83%, rgb(255 0 0) 100%);
	}
	input[type=range]::-webkit-slider-thumb {
		border-color: var(--_thumb_color);
	}


	input[type=range]::-moz-range-track {
		height: 8px;
		border-radius: 9999px;
		border-radius: 500px;
		background: linear-gradient(to right, rgb(255 0 0) 0%, rgb(255 255 0) 17%, rgb(0 255 0) 33%, rgb(0 255 255) 50%, rgb(0 0 255) 67%, rgb(255 0 255) 83%, rgb(255 0 0) 100%);
	}
	input[type=range]::-moz-range-thumb {
		border-color: var(--_thumb_color);
	}
`;
  var RangeColor = class extends Atom {
    constructor() {
      super(...arguments);
      this.min = 1;
      this.max = 360;
      this.step = 1;
      this.color = "#00ff00";
      this.label = "ColorSlider";
    }
    stateUpdate() {
      console.log("range color bound @stateUpdate", this.value);
      this.color = this.value;
      this.value = this.hexToHsv(this.color).h;
      this.rangeElement.value = `${this.value}`;
    }
    async connectedCallback() {
      super.connectedCallback();
      if (`${this.value}`.indexOf("#") === -1) {
        console.log("range color NUM", this.value);
        const v2 = Number.parseInt(`${this.value}`);
        this.value = v2 % this.max;
        this.color = this.hsvToHex(v2, 100, 50);
      } else {
        console.log("range color STR", this.value);
        this.color = this.value;
        this.value = this.hexToHsv(this.color).h;
      }
      this.style.setProperty("--_thumb_color", this.color);
    }
    action(event) {
      this.value = Number.parseFloat(event.target.value);
      this.color = this.hsvToHex(this.value, 100, 50);
      this.style.setProperty("--_thumb_color", this.color);
      this.announce(RangeColor.atomEvent, this.color, event);
    }
    render() {
      return ke`    
    <div class="range">
		<div class="labels">
			<div class="label">${this.label}</div>
			<div class="label value">${this.color}</div>
		</div>
        <input
            type="range"
            min=${this.min}
            max=${this.max}
            step=${this.step}
            value=${this.value}
            @change=${this.action}
            @input=${this.action}
			aria-label=${this.label}
        />
    </div>`;
    }
    hsvToHex(h4, s2, v2) {
      const l2 = v2 / 100;
      const a2 = s2 * Math.min(l2, 1 - l2) / 100;
      const f4 = (n5) => {
        const k2 = (n5 + h4 / 30) % 12;
        const color = l2 - a2 * Math.max(Math.min(k2 - 3, 9 - k2, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, "0");
      };
      return `#${f4(0)}${f4(8)}${f4(4)}`;
    }
    hexToHsv(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      if (!result) {
        throw new Error("Could not parse Hex Color");
      }
      const rHex = Number.parseInt(result[1], 16);
      const gHex = Number.parseInt(result[2], 16);
      const bHex = Number.parseInt(result[3], 16);
      const r5 = rHex / 255;
      const g2 = gHex / 255;
      const b2 = bHex / 255;
      const max = Math.max(r5, g2, b2);
      const min = Math.min(r5, g2, b2);
      let h4 = (max + min) / 2;
      let s2 = h4;
      let l2 = h4;
      if (max === min) {
        return { h: 0, s: 0, l: l2 };
      }
      const d2 = max - min;
      s2 = l2 > 0.5 ? d2 / (2 - max - min) : d2 / (max + min);
      switch (max) {
        case r5:
          h4 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
          break;
        case g2:
          h4 = (b2 - r5) / d2 + 2;
          break;
        case b2:
          h4 = (r5 - g2) / d2 + 4;
          break;
      }
      h4 /= 6;
      s2 = s2 * 100;
      s2 = Math.round(s2);
      l2 = l2 * 100;
      l2 = Math.round(l2);
      h4 = Math.round(360 * h4);
      return { h: h4, s: s2, l: l2 };
    }
  };
  RangeColor.atomEvent = "change";
  RangeColor.styles = [styles2, local_styles];
  __decorateClass([
    n4({ type: String, reflect: true })
  ], RangeColor.prototype, "color", 2);
  __decorateClass([
    e4("input[type=range]")
  ], RangeColor.prototype, "rangeElement", 2);
  RangeColor = __decorateClass([
    t2("atom-range-color")
  ], RangeColor);

  // src/atom/components/button.css.ts
  var styles3 = i`
:host {
    display: inline-block;
    position: relative;
    width: auto;
    /* font: var(--atom-font-p); */
}

.button {
    cursor: pointer;
    display: inline;
    align-items: stretch;
    justify-content: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;

    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;

    border-width: 1px;
    border-color: var(--atom-fg);
    border-style: solid;
    border-radius: var(--atom-button-border-radius);
    padding-block: var(--atom-button-padding-block);
    padding-inline: var(--atom-button-padding-inline);
    margin-block-end: 4px;

    font: var(--atom-font-control);
}

/* normal */
.button {
    background-color: var(--atom-btn-normal-bg);
    border-color: var(--atom-btn-normal-bg);
    color: var(--atom-btn-normal-fg);
}

.button:hover {
    background-color: var(--atom-button-normal-hover);
    border-color: var(--atom-button-normal-hover);
}

/* primary */
.button.primary {
    background-color: var(--atom-btn-primary-bg);
    border-color: var(--atom-btn-primary-bg);
    color: var(--atom-btn-primary-fg);
}

.button.primary:hover {
    background-color: var(--atom-button-primary-hover);
    border-color: var(--atom-button-primary-hover);
}

/* destructive */
.button.destructive {
    background-color: var(--atom-color-destructive);
    border-color: var(--atom-color-destructive);
    color: var(--atom-btn-destructive-fg);
}
.button.destructive:hover {
    background-color: var(--atom-button-destructive-hover);
    border-color: var(--atom-button-destructive-hover);
}

/* constructive */
.button.constructive {
    background-color: var(--atom-color-constructive);
    border-color: var(--atom-color-constructive);
    color: var(--atom-btn-constructive-fg);
}
.button.constructive:hover {
    background-color: var(--atom-button-constructive-hover);
    border-color: var(--atom-button-constructive-hover);
}

/* outline */
.button.outline {
    background-color: var(--atom-bg);
    border-color: var(--atom-button-subtle-hover);
    color: var(--atom-fg);
}
.button.outline:hover {
    background-color: var(--atom-color-subtle);
}

/* subtle */
.button.subtle {
    background-color: var(--atom-color-subtle);
    border-color: var(--atom-color-subtle); 
    color: var(--atom-fg);
}
.button.subtle:hover {
    background-color: var(--atom-button-subtle-hover);
    border-color: var(--atom-button-subtle-hover);
}

/* content */

.label {
    margin-top: -1px;
}

.inner {
    height: var(--atom-icon-size);
    line-height: var(--atom-icon-size);
    display: grid;
    grid-template-columns: auto auto auto;
}

.inner > slot {
    display: block;
    height: var(--atom-icon-size);
}

slot[name=left]::slotted(atom-icon){
    padding-right: var(--atom-button-icon-padding);
    margin-left: var(--atom-button-icon-offset);
}
slot[name=right]::slotted(atom-icon){
    padding-left: var(--atom-button-icon-padding);
    margin-right: var(--atom-button-icon-offset);
}

`;

  // src/atom/components/button.ts
  var Button = class extends Atom {
    constructor() {
      super(...arguments);
      this.value = 0;
      this.variant = "normal";
      this.label = "Button";
    }
    action(event) {
      console.log("@Button action", event);
      this.value++;
      this.announce(Button.atomEvent, this.value, event);
    }
    render() {
      return ke`    
        <button @click=${this.action} class="button ${this.variant}" role="button" tabindex="0" aria-label="${this.label}">
            <div class="inner">
                <slot name="left" class="prefix"></slot>
                <slot name="center" class="center"><div class="label">${this.label}</div></slot>
                <slot name="right" class="suffix"></slot>
            </div>
        </button>`;
    }
  };
  Button.atomEvent = "click";
  Button.styles = styles3;
  __decorateClass([
    n4({ type: Number, reflect: true })
  ], Button.prototype, "value", 2);
  __decorateClass([
    n4({ type: String })
  ], Button.prototype, "variant", 2);
  Button = __decorateClass([
    t2("atom-button")
  ], Button);

  // node_modules/lit-html/directive.js
  var t3 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
  var e5 = (t4) => (...e6) => ({ _$litDirective$: t4, values: e6 });
  var i3 = class {
    constructor(t4) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t4, e6, i4) {
      this.t = t4, this._$AM = e6, this.i = i4;
    }
    _$AS(t4, e6) {
      return this.update(t4, e6);
    }
    update(t4, e6) {
      return this.render(...e6);
    }
  };

  // node_modules/lit-html/directives/unsafe-html.js
  var le = class extends i3 {
    constructor(i4) {
      if (super(i4), this.it = D, i4.type !== t3.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
    }
    render(t4) {
      if (t4 === D || null == t4) return this._t = void 0, this.it = t4;
      if (t4 === R) return t4;
      if ("string" != typeof t4) throw Error(this.constructor.directiveName + "() called with a non-string value");
      if (t4 === this.it) return this._t;
      this.it = t4;
      const i4 = [t4];
      return i4.raw = i4, this._t = { _$litType$: this.constructor.resultType, strings: i4, values: [] };
    }
  };
  le.directiveName = "unsafeHTML", le.resultType = 1;
  var ae = e5(le);

  // node_modules/lit-html/directives/unsafe-svg.js
  var pe = class extends le {
  };
  pe.directiveName = "unsafeSVG", pe.resultType = 2;
  var fe = e5(pe);

  // src/atom/lib/FeatherIconShapes.ts
  var FeatherIconShapes_exports = {};
  __export(FeatherIconShapes_exports, {
    icon_activity: () => icon_activity,
    icon_airplay: () => icon_airplay,
    icon_alert_circle: () => icon_alert_circle,
    icon_alert_octagon: () => icon_alert_octagon,
    icon_alert_triangle: () => icon_alert_triangle,
    icon_align_center: () => icon_align_center,
    icon_align_justify: () => icon_align_justify,
    icon_align_left: () => icon_align_left,
    icon_align_right: () => icon_align_right,
    icon_anchor: () => icon_anchor,
    icon_aperture: () => icon_aperture,
    icon_archive: () => icon_archive,
    icon_arrow_down: () => icon_arrow_down,
    icon_arrow_down_circle: () => icon_arrow_down_circle,
    icon_arrow_down_left: () => icon_arrow_down_left,
    icon_arrow_down_right: () => icon_arrow_down_right,
    icon_arrow_left: () => icon_arrow_left,
    icon_arrow_left_circle: () => icon_arrow_left_circle,
    icon_arrow_right: () => icon_arrow_right,
    icon_arrow_right_circle: () => icon_arrow_right_circle,
    icon_arrow_up: () => icon_arrow_up,
    icon_arrow_up_circle: () => icon_arrow_up_circle,
    icon_arrow_up_left: () => icon_arrow_up_left,
    icon_arrow_up_right: () => icon_arrow_up_right,
    icon_at_sign: () => icon_at_sign,
    icon_award: () => icon_award,
    icon_bar_chart: () => icon_bar_chart,
    icon_bar_chart_2: () => icon_bar_chart_2,
    icon_battery: () => icon_battery,
    icon_battery_charging: () => icon_battery_charging,
    icon_bell: () => icon_bell,
    icon_bell_off: () => icon_bell_off,
    icon_bluetooth: () => icon_bluetooth,
    icon_bold: () => icon_bold,
    icon_book: () => icon_book,
    icon_book_open: () => icon_book_open,
    icon_bookmark: () => icon_bookmark,
    icon_box: () => icon_box,
    icon_briefcase: () => icon_briefcase,
    icon_calendar: () => icon_calendar,
    icon_camera: () => icon_camera,
    icon_camera_off: () => icon_camera_off,
    icon_cast: () => icon_cast,
    icon_check: () => icon_check,
    icon_check_circle: () => icon_check_circle,
    icon_check_square: () => icon_check_square,
    icon_chevron_down: () => icon_chevron_down,
    icon_chevron_left: () => icon_chevron_left,
    icon_chevron_right: () => icon_chevron_right,
    icon_chevron_up: () => icon_chevron_up,
    icon_chevrons_down: () => icon_chevrons_down,
    icon_chevrons_left: () => icon_chevrons_left,
    icon_chevrons_right: () => icon_chevrons_right,
    icon_chevrons_up: () => icon_chevrons_up,
    icon_chrome: () => icon_chrome,
    icon_circle: () => icon_circle,
    icon_clipboard: () => icon_clipboard,
    icon_clock: () => icon_clock,
    icon_cloud: () => icon_cloud,
    icon_cloud_drizzle: () => icon_cloud_drizzle,
    icon_cloud_lightning: () => icon_cloud_lightning,
    icon_cloud_off: () => icon_cloud_off,
    icon_cloud_rain: () => icon_cloud_rain,
    icon_cloud_snow: () => icon_cloud_snow,
    icon_code: () => icon_code,
    icon_codepen: () => icon_codepen,
    icon_codesandbox: () => icon_codesandbox,
    icon_coffee: () => icon_coffee,
    icon_columns: () => icon_columns,
    icon_command: () => icon_command,
    icon_compass: () => icon_compass,
    icon_copy: () => icon_copy,
    icon_corner_down_left: () => icon_corner_down_left,
    icon_corner_down_right: () => icon_corner_down_right,
    icon_corner_left_down: () => icon_corner_left_down,
    icon_corner_left_up: () => icon_corner_left_up,
    icon_corner_right_down: () => icon_corner_right_down,
    icon_corner_right_up: () => icon_corner_right_up,
    icon_corner_up_left: () => icon_corner_up_left,
    icon_corner_up_right: () => icon_corner_up_right,
    icon_cpu: () => icon_cpu,
    icon_credit_card: () => icon_credit_card,
    icon_crop: () => icon_crop,
    icon_crosshair: () => icon_crosshair,
    icon_database: () => icon_database,
    icon_delete: () => icon_delete,
    icon_disc: () => icon_disc,
    icon_divide: () => icon_divide,
    icon_divide_circle: () => icon_divide_circle,
    icon_divide_square: () => icon_divide_square,
    icon_dollar_sign: () => icon_dollar_sign,
    icon_download: () => icon_download,
    icon_download_cloud: () => icon_download_cloud,
    icon_dribbble: () => icon_dribbble,
    icon_droplet: () => icon_droplet,
    icon_edit: () => icon_edit,
    icon_edit_2: () => icon_edit_2,
    icon_edit_3: () => icon_edit_3,
    icon_external_link: () => icon_external_link,
    icon_eye: () => icon_eye,
    icon_eye_off: () => icon_eye_off,
    icon_facebook: () => icon_facebook,
    icon_fast_forward: () => icon_fast_forward,
    icon_feather: () => icon_feather,
    icon_figma: () => icon_figma,
    icon_file: () => icon_file,
    icon_file_minus: () => icon_file_minus,
    icon_file_plus: () => icon_file_plus,
    icon_file_text: () => icon_file_text,
    icon_film: () => icon_film,
    icon_filter: () => icon_filter,
    icon_flag: () => icon_flag,
    icon_folder: () => icon_folder,
    icon_folder_minus: () => icon_folder_minus,
    icon_folder_plus: () => icon_folder_plus,
    icon_framer: () => icon_framer,
    icon_frown: () => icon_frown,
    icon_gift: () => icon_gift,
    icon_git_branch: () => icon_git_branch,
    icon_git_commit: () => icon_git_commit,
    icon_git_merge: () => icon_git_merge,
    icon_git_pull_request: () => icon_git_pull_request,
    icon_github: () => icon_github,
    icon_gitlab: () => icon_gitlab,
    icon_globe: () => icon_globe,
    icon_grid: () => icon_grid,
    icon_hard_drive: () => icon_hard_drive,
    icon_hash: () => icon_hash,
    icon_headphones: () => icon_headphones,
    icon_heart: () => icon_heart,
    icon_help_circle: () => icon_help_circle,
    icon_hexagon: () => icon_hexagon,
    icon_home: () => icon_home,
    icon_image: () => icon_image,
    icon_inbox: () => icon_inbox,
    icon_info: () => icon_info,
    icon_instagram: () => icon_instagram,
    icon_italic: () => icon_italic,
    icon_key: () => icon_key,
    icon_layers: () => icon_layers,
    icon_layout: () => icon_layout,
    icon_life_buoy: () => icon_life_buoy,
    icon_link: () => icon_link,
    icon_link_2: () => icon_link_2,
    icon_linkedin: () => icon_linkedin,
    icon_list: () => icon_list,
    icon_loader: () => icon_loader,
    icon_lock: () => icon_lock,
    icon_log_in: () => icon_log_in,
    icon_log_out: () => icon_log_out,
    icon_mail: () => icon_mail,
    icon_map: () => icon_map,
    icon_map_pin: () => icon_map_pin,
    icon_maximize: () => icon_maximize,
    icon_maximize_2: () => icon_maximize_2,
    icon_meh: () => icon_meh,
    icon_menu: () => icon_menu,
    icon_message_circle: () => icon_message_circle,
    icon_message_square: () => icon_message_square,
    icon_mic: () => icon_mic,
    icon_mic_off: () => icon_mic_off,
    icon_minimize: () => icon_minimize,
    icon_minimize_2: () => icon_minimize_2,
    icon_minus: () => icon_minus,
    icon_minus_circle: () => icon_minus_circle,
    icon_minus_square: () => icon_minus_square,
    icon_monitor: () => icon_monitor,
    icon_moon: () => icon_moon,
    icon_more_horizontal: () => icon_more_horizontal,
    icon_more_vertical: () => icon_more_vertical,
    icon_mouse_pointer: () => icon_mouse_pointer,
    icon_move: () => icon_move,
    icon_music: () => icon_music,
    icon_navigation: () => icon_navigation,
    icon_navigation_2: () => icon_navigation_2,
    icon_octagon: () => icon_octagon,
    icon_package: () => icon_package,
    icon_paperclip: () => icon_paperclip,
    icon_pause: () => icon_pause,
    icon_pause_circle: () => icon_pause_circle,
    icon_pen_tool: () => icon_pen_tool,
    icon_percent: () => icon_percent,
    icon_phone: () => icon_phone,
    icon_phone_call: () => icon_phone_call,
    icon_phone_forwarded: () => icon_phone_forwarded,
    icon_phone_incoming: () => icon_phone_incoming,
    icon_phone_missed: () => icon_phone_missed,
    icon_phone_off: () => icon_phone_off,
    icon_phone_outgoing: () => icon_phone_outgoing,
    icon_pie_chart: () => icon_pie_chart,
    icon_play: () => icon_play,
    icon_play_circle: () => icon_play_circle,
    icon_plus: () => icon_plus,
    icon_plus_circle: () => icon_plus_circle,
    icon_plus_square: () => icon_plus_square,
    icon_pocket: () => icon_pocket,
    icon_power: () => icon_power,
    icon_printer: () => icon_printer,
    icon_radio: () => icon_radio,
    icon_refresh_ccw: () => icon_refresh_ccw,
    icon_refresh_cw: () => icon_refresh_cw,
    icon_repeat: () => icon_repeat,
    icon_rewind: () => icon_rewind,
    icon_rotate_ccw: () => icon_rotate_ccw,
    icon_rotate_cw: () => icon_rotate_cw,
    icon_rss: () => icon_rss,
    icon_save: () => icon_save,
    icon_scissors: () => icon_scissors,
    icon_search: () => icon_search,
    icon_send: () => icon_send,
    icon_server: () => icon_server,
    icon_settings: () => icon_settings,
    icon_share: () => icon_share,
    icon_share_2: () => icon_share_2,
    icon_shield: () => icon_shield,
    icon_shield_off: () => icon_shield_off,
    icon_shopping_bag: () => icon_shopping_bag,
    icon_shopping_cart: () => icon_shopping_cart,
    icon_shuffle: () => icon_shuffle,
    icon_sidebar: () => icon_sidebar,
    icon_skip_back: () => icon_skip_back,
    icon_skip_forward: () => icon_skip_forward,
    icon_slack: () => icon_slack,
    icon_slash: () => icon_slash,
    icon_sliders: () => icon_sliders,
    icon_smartphone: () => icon_smartphone,
    icon_smile: () => icon_smile,
    icon_speaker: () => icon_speaker,
    icon_square: () => icon_square,
    icon_star: () => icon_star,
    icon_stop_circle: () => icon_stop_circle,
    icon_sun: () => icon_sun,
    icon_sunrise: () => icon_sunrise,
    icon_sunset: () => icon_sunset,
    icon_table: () => icon_table,
    icon_tablet: () => icon_tablet,
    icon_tag: () => icon_tag,
    icon_target: () => icon_target,
    icon_terminal: () => icon_terminal,
    icon_thermometer: () => icon_thermometer,
    icon_thumbs_down: () => icon_thumbs_down,
    icon_thumbs_up: () => icon_thumbs_up,
    icon_toggle_left: () => icon_toggle_left,
    icon_toggle_right: () => icon_toggle_right,
    icon_tool: () => icon_tool,
    icon_trash: () => icon_trash,
    icon_trash_2: () => icon_trash_2,
    icon_trello: () => icon_trello,
    icon_trending_down: () => icon_trending_down,
    icon_trending_up: () => icon_trending_up,
    icon_triangle: () => icon_triangle,
    icon_truck: () => icon_truck,
    icon_tv: () => icon_tv,
    icon_twitch: () => icon_twitch,
    icon_twitter: () => icon_twitter,
    icon_type: () => icon_type,
    icon_umbrella: () => icon_umbrella,
    icon_underline: () => icon_underline,
    icon_unlock: () => icon_unlock,
    icon_upload: () => icon_upload,
    icon_upload_cloud: () => icon_upload_cloud,
    icon_user: () => icon_user,
    icon_user_check: () => icon_user_check,
    icon_user_minus: () => icon_user_minus,
    icon_user_plus: () => icon_user_plus,
    icon_user_x: () => icon_user_x,
    icon_users: () => icon_users,
    icon_video: () => icon_video,
    icon_video_off: () => icon_video_off,
    icon_voicemail: () => icon_voicemail,
    icon_volume: () => icon_volume,
    icon_volume_1: () => icon_volume_1,
    icon_volume_2: () => icon_volume_2,
    icon_volume_x: () => icon_volume_x,
    icon_watch: () => icon_watch,
    icon_wifi: () => icon_wifi,
    icon_wifi_off: () => icon_wifi_off,
    icon_wind: () => icon_wind,
    icon_x: () => icon_x,
    icon_x_circle: () => icon_x_circle,
    icon_x_octagon: () => icon_x_octagon,
    icon_x_square: () => icon_x_square,
    icon_youtube: () => icon_youtube,
    icon_zap: () => icon_zap,
    icon_zap_off: () => icon_zap_off,
    icon_zoom_in: () => icon_zoom_in,
    icon_zoom_out: () => icon_zoom_out
  });
  var icon_activity = `<svg class="atom-icon" id="activity" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`;
  var icon_airplay = `<svg class="atom-icon" id="airplay" viewBox="0 0 24 24"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><polygon points="12 15 17 21 7 21 12 15"/></svg>`;
  var icon_alert_circle = `<svg class="atom-icon" id="alert-circle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
  var icon_alert_octagon = `<svg class="atom-icon" id="alert-octagon" viewBox="0 0 24 24"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
  var icon_alert_triangle = `<svg class="atom-icon" id="alert-triangle" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;
  var icon_align_center = `<svg class="atom-icon" id="align-center" viewBox="0 0 24 24"><line x1="18" y1="10" x2="6" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="18" y1="18" x2="6" y2="18"/></svg>`;
  var icon_align_justify = `<svg class="atom-icon" id="align-justify" viewBox="0 0 24 24"><line x1="21" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="3" y2="18"/></svg>`;
  var icon_align_left = `<svg class="atom-icon" id="align-left" viewBox="0 0 24 24"><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>`;
  var icon_align_right = `<svg class="atom-icon" id="align-right" viewBox="0 0 24 24"><line x1="21" y1="10" x2="7" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="7" y2="18"/></svg>`;
  var icon_anchor = `<svg class="atom-icon" id="anchor" viewBox="0 0 24 24"><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>`;
  var icon_aperture = `<svg class="atom-icon" id="aperture" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="14.31" y1="8" x2="20.05" y2="17.94"/><line x1="9.69" y1="8" x2="21.17" y2="8"/><line x1="7.38" y1="12" x2="13.12" y2="2.06"/><line x1="9.69" y1="16" x2="3.95" y2="6.06"/><line x1="14.31" y1="16" x2="2.83" y2="16"/><line x1="16.62" y1="12" x2="10.88" y2="21.94"/></svg>`;
  var icon_archive = `<svg class="atom-icon" id="archive" viewBox="0 0 24 24"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>`;
  var icon_arrow_down_circle = `<svg class="atom-icon" id="arrow-down-circle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="8 12 12 16 16 12"/><line x1="12" y1="8" x2="12" y2="16"/></svg>`;
  var icon_arrow_down_left = `<svg class="atom-icon" id="arrow-down-left" viewBox="0 0 24 24"><line x1="17" y1="7" x2="7" y2="17"/><polyline points="17 17 7 17 7 7"/></svg>`;
  var icon_arrow_down_right = `<svg class="atom-icon" id="arrow-down-right" viewBox="0 0 24 24"><line x1="7" y1="7" x2="17" y2="17"/><polyline points="17 7 17 17 7 17"/></svg>`;
  var icon_arrow_down = `<svg class="atom-icon" id="arrow-down" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>`;
  var icon_arrow_left_circle = `<svg class="atom-icon" id="arrow-left-circle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 8 8 12 12 16"/><line x1="16" y1="12" x2="8" y2="12"/></svg>`;
  var icon_arrow_left = `<svg class="atom-icon" id="arrow-left" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`;
  var icon_arrow_right_circle = `<svg class="atom-icon" id="arrow-right-circle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 16 16 12 12 8"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`;
  var icon_arrow_right = `<svg class="atom-icon" id="arrow-right" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;
  var icon_arrow_up_circle = `<svg class="atom-icon" id="arrow-up-circle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="16 12 12 8 8 12"/><line x1="12" y1="16" x2="12" y2="8"/></svg>`;
  var icon_arrow_up_left = `<svg class="atom-icon" id="arrow-up-left" viewBox="0 0 24 24"><line x1="17" y1="17" x2="7" y2="7"/><polyline points="7 17 7 7 17 7"/></svg>`;
  var icon_arrow_up_right = `<svg class="atom-icon" id="arrow-up-right" viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`;
  var icon_arrow_up = `<svg class="atom-icon" id="arrow-up" viewBox="0 0 24 24"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>`;
  var icon_at_sign = `<svg class="atom-icon" id="at-sign" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/></svg>`;
  var icon_award = `<svg class="atom-icon" id="award" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`;
  var icon_bar_chart_2 = `<svg class="atom-icon" id="bar-chart-2" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`;
  var icon_bar_chart = `<svg class="atom-icon" id="bar-chart" viewBox="0 0 24 24"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>`;
  var icon_battery_charging = `<svg class="atom-icon" id="battery-charging" viewBox="0 0 24 24"><path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"/><line x1="23" y1="13" x2="23" y2="11"/><polyline points="11 6 7 12 13 12 9 18"/></svg>`;
  var icon_battery = `<svg class="atom-icon" id="battery" viewBox="0 0 24 24"><rect x="1" y="6" width="18" height="12" rx="2" ry="2"/><line x1="23" y1="13" x2="23" y2="11"/></svg>`;
  var icon_bell_off = `<svg class="atom-icon" id="bell-off" viewBox="0 0 24 24"><path d="M13.73 21a2 2 0 0 1-3.46 0"/><path d="M18.63 13A17.89 17.89 0 0 1 18 8"/><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"/><path d="M18 8a6 6 0 0 0-9.33-5"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;
  var icon_bell = `<svg class="atom-icon" id="bell" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`;
  var icon_bluetooth = `<svg class="atom-icon" id="bluetooth" viewBox="0 0 24 24"><polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"/></svg>`;
  var icon_bold = `<svg class="atom-icon" id="bold" viewBox="0 0 24 24"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/></svg>`;
  var icon_book_open = `<svg class="atom-icon" id="book-open" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`;
  var icon_book = `<svg class="atom-icon" id="book" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`;
  var icon_bookmark = `<svg class="atom-icon" id="bookmark" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`;
  var icon_box = `<svg class="atom-icon" id="box" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`;
  var icon_briefcase = `<svg class="atom-icon" id="briefcase" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`;
  var icon_calendar = `<svg class="atom-icon" id="calendar" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`;
  var icon_camera_off = `<svg class="atom-icon" id="camera-off" viewBox="0 0 24 24"><line x1="1" y1="1" x2="23" y2="23"/><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"/></svg>`;
  var icon_camera = `<svg class="atom-icon" id="camera" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`;
  var icon_cast = `<svg class="atom-icon" id="cast" viewBox="0 0 24 24"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"/><line x1="2" y1="20" x2="2.01" y2="20"/></svg>`;
  var icon_check_circle = `<svg class="atom-icon" id="check-circle" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
  var icon_check_square = `<svg class="atom-icon" id="check-square" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`;
  var icon_check = `<svg class="atom-icon" id="check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`;
  var icon_chevron_down = `<svg class="atom-icon" id="chevron-down" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>`;
  var icon_chevron_left = `<svg class="atom-icon" id="chevron-left" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>`;
  var icon_chevron_right = `<svg class="atom-icon" id="chevron-right" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>`;
  var icon_chevron_up = `<svg class="atom-icon" id="chevron-up" viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg>`;
  var icon_chevrons_down = `<svg class="atom-icon" id="chevrons-down" viewBox="0 0 24 24"><polyline points="7 13 12 18 17 13"/><polyline points="7 6 12 11 17 6"/></svg>`;
  var icon_chevrons_left = `<svg class="atom-icon" id="chevrons-left" viewBox="0 0 24 24"><polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/></svg>`;
  var icon_chevrons_right = `<svg class="atom-icon" id="chevrons-right" viewBox="0 0 24 24"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>`;
  var icon_chevrons_up = `<svg class="atom-icon" id="chevrons-up" viewBox="0 0 24 24"><polyline points="17 11 12 6 7 11"/><polyline points="17 18 12 13 7 18"/></svg>`;
  var icon_chrome = `<svg class="atom-icon" id="chrome" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" y1="8" x2="12" y2="8"/><line x1="3.95" y1="6.06" x2="8.54" y2="14"/><line x1="10.88" y1="21.94" x2="15.46" y2="14"/></svg>`;
  var icon_circle = `<svg class="atom-icon" id="circle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>`;
  var icon_clipboard = `<svg class="atom-icon" id="clipboard" viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>`;
  var icon_clock = `<svg class="atom-icon" id="clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
  var icon_cloud_drizzle = `<svg class="atom-icon" id="cloud-drizzle" viewBox="0 0 24 24"><line x1="8" y1="19" x2="8" y2="21"/><line x1="8" y1="13" x2="8" y2="15"/><line x1="16" y1="19" x2="16" y2="21"/><line x1="16" y1="13" x2="16" y2="15"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="12" y1="15" x2="12" y2="17"/><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/></svg>`;
  var icon_cloud_lightning = `<svg class="atom-icon" id="cloud-lightning" viewBox="0 0 24 24"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"/><polyline points="13 11 9 17 15 17 11 23"/></svg>`;
  var icon_cloud_off = `<svg class="atom-icon" id="cloud-off" viewBox="0 0 24 24"><path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;
  var icon_cloud_rain = `<svg class="atom-icon" id="cloud-rain" viewBox="0 0 24 24"><line x1="16" y1="13" x2="16" y2="21"/><line x1="8" y1="13" x2="8" y2="21"/><line x1="12" y1="15" x2="12" y2="23"/><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/></svg>`;
  var icon_cloud_snow = `<svg class="atom-icon" id="cloud-snow" viewBox="0 0 24 24"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="8" y1="20" x2="8.01" y2="20"/><line x1="12" y1="18" x2="12.01" y2="18"/><line x1="12" y1="22" x2="12.01" y2="22"/><line x1="16" y1="16" x2="16.01" y2="16"/><line x1="16" y1="20" x2="16.01" y2="20"/></svg>`;
  var icon_cloud = `<svg class="atom-icon" id="cloud" viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`;
  var icon_code = `<svg class="atom-icon" id="code" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
  var icon_codepen = `<svg class="atom-icon" id="codepen" viewBox="0 0 24 24"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/><polyline points="2 15.5 12 8.5 22 15.5"/><line x1="12" y1="2" x2="12" y2="8.5"/></svg>`;
  var icon_codesandbox = `<svg class="atom-icon" id="codesandbox" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`;
  var icon_coffee = `<svg class="atom-icon" id="coffee" viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`;
  var icon_columns = `<svg class="atom-icon" id="columns" viewBox="0 0 24 24"><path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"/></svg>`;
  var icon_command = `<svg class="atom-icon" id="command" viewBox="0 0 24 24"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>`;
  var icon_compass = `<svg class="atom-icon" id="compass" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`;
  var icon_copy = `<svg class="atom-icon" id="copy" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
  var icon_corner_down_left = `<svg class="atom-icon" id="corner-down-left" viewBox="0 0 24 24"><polyline points="9 10 4 15 9 20"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/></svg>`;
  var icon_corner_down_right = `<svg class="atom-icon" id="corner-down-right" viewBox="0 0 24 24"><polyline points="15 10 20 15 15 20"/><path d="M4 4v7a4 4 0 0 0 4 4h12"/></svg>`;
  var icon_corner_left_down = `<svg class="atom-icon" id="corner-left-down" viewBox="0 0 24 24"><polyline points="14 15 9 20 4 15"/><path d="M20 4h-7a4 4 0 0 0-4 4v12"/></svg>`;
  var icon_corner_left_up = `<svg class="atom-icon" id="corner-left-up" viewBox="0 0 24 24"><polyline points="14 9 9 4 4 9"/><path d="M20 20h-7a4 4 0 0 1-4-4V4"/></svg>`;
  var icon_corner_right_down = `<svg class="atom-icon" id="corner-right-down" viewBox="0 0 24 24"><polyline points="10 15 15 20 20 15"/><path d="M4 4h7a4 4 0 0 1 4 4v12"/></svg>`;
  var icon_corner_right_up = `<svg class="atom-icon" id="corner-right-up" viewBox="0 0 24 24"><polyline points="10 9 15 4 20 9"/><path d="M4 20h7a4 4 0 0 0 4-4V4"/></svg>`;
  var icon_corner_up_left = `<svg class="atom-icon" id="corner-up-left" viewBox="0 0 24 24"><polyline points="9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/></svg>`;
  var icon_corner_up_right = `<svg class="atom-icon" id="corner-up-right" viewBox="0 0 24 24"><polyline points="15 14 20 9 15 4"/><path d="M4 20v-7a4 4 0 0 1 4-4h12"/></svg>`;
  var icon_cpu = `<svg class="atom-icon" id="cpu" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`;
  var icon_credit_card = `<svg class="atom-icon" id="credit-card" viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`;
  var icon_crop = `<svg class="atom-icon" id="crop" viewBox="0 0 24 24"><path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"/><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"/></svg>`;
  var icon_crosshair = `<svg class="atom-icon" id="crosshair" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>`;
  var icon_database = `<svg class="atom-icon" id="database" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`;
  var icon_delete = `<svg class="atom-icon" id="delete" viewBox="0 0 24 24"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/><line x1="18" y1="9" x2="12" y2="15"/><line x1="12" y1="9" x2="18" y2="15"/></svg>`;
  var icon_disc = `<svg class="atom-icon" id="disc" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>`;
  var icon_divide_circle = `<svg class="atom-icon" id="divide-circle" viewBox="0 0 24 24"><line x1="8" y1="12" x2="16" y2="12"/><line x1="12" y1="16" x2="12" y2="16"/><line x1="12" y1="8" x2="12" y2="8"/><circle cx="12" cy="12" r="10"/></svg>`;
  var icon_divide_square = `<svg class="atom-icon" id="divide-square" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="12" y1="16" x2="12" y2="16"/><line x1="12" y1="8" x2="12" y2="8"/></svg>`;
  var icon_divide = `<svg class="atom-icon" id="divide" viewBox="0 0 24 24"><circle cx="12" cy="6" r="2"/><line x1="5" y1="12" x2="19" y2="12"/><circle cx="12" cy="18" r="2"/></svg>`;
  var icon_dollar_sign = `<svg class="atom-icon" id="dollar-sign" viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`;
  var icon_download_cloud = `<svg class="atom-icon" id="download-cloud" viewBox="0 0 24 24"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>`;
  var icon_download = `<svg class="atom-icon" id="download" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;
  var icon_dribbble = `<svg class="atom-icon" id="dribbble" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>`;
  var icon_droplet = `<svg class="atom-icon" id="droplet" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`;
  var icon_edit_2 = `<svg class="atom-icon" id="edit-2" viewBox="0 0 24 24"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>`;
  var icon_edit_3 = `<svg class="atom-icon" id="edit-3" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`;
  var icon_edit = `<svg class="atom-icon" id="edit" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`;
  var icon_external_link = `<svg class="atom-icon" id="external-link" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
  var icon_eye_off = `<svg class="atom-icon" id="eye-off" viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;
  var icon_eye = `<svg class="atom-icon" id="eye" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
  var icon_facebook = `<svg class="atom-icon" id="facebook" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`;
  var icon_fast_forward = `<svg class="atom-icon" id="fast-forward" viewBox="0 0 24 24"><polygon points="13 19 22 12 13 5 13 19"/><polygon points="2 19 11 12 2 5 2 19"/></svg>`;
  var icon_feather = `<svg class="atom-icon" id="feather" viewBox="0 0 24 24"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>`;
  var icon_figma = `<svg class="atom-icon" id="figma" viewBox="0 0 24 24"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>`;
  var icon_file_minus = `<svg class="atom-icon" id="file-minus" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/></svg>`;
  var icon_file_plus = `<svg class="atom-icon" id="file-plus" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>`;
  var icon_file_text = `<svg class="atom-icon" id="file-text" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`;
  var icon_file = `<svg class="atom-icon" id="file" viewBox="0 0 24 24"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>`;
  var icon_film = `<svg class="atom-icon" id="film" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>`;
  var icon_filter = `<svg class="atom-icon" id="filter" viewBox="0 0 24 24"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`;
  var icon_flag = `<svg class="atom-icon" id="flag" viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>`;
  var icon_folder_minus = `<svg class="atom-icon" id="folder-minus" viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="9" y1="14" x2="15" y2="14"/></svg>`;
  var icon_folder_plus = `<svg class="atom-icon" id="folder-plus" viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>`;
  var icon_folder = `<svg class="atom-icon" id="folder" viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`;
  var icon_framer = `<svg class="atom-icon" id="framer" viewBox="0 0 24 24"><path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"/></svg>`;
  var icon_frown = `<svg class="atom-icon" id="frown" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`;
  var icon_gift = `<svg class="atom-icon" id="gift" viewBox="0 0 24 24"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`;
  var icon_git_branch = `<svg class="atom-icon" id="git-branch" viewBox="0 0 24 24"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>`;
  var icon_git_commit = `<svg class="atom-icon" id="git-commit" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><line x1="1.05" y1="12" x2="7" y2="12"/><line x1="17.01" y1="12" x2="22.96" y2="12"/></svg>`;
  var icon_git_merge = `<svg class="atom-icon" id="git-merge" viewBox="0 0 24 24"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>`;
  var icon_git_pull_request = `<svg class="atom-icon" id="git-pull-request" viewBox="0 0 24 24"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" y1="9" x2="6" y2="21"/></svg>`;
  var icon_github = `<svg class="atom-icon" id="github" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`;
  var icon_gitlab = `<svg class="atom-icon" id="gitlab" viewBox="0 0 24 24"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"/></svg>`;
  var icon_globe = `<svg class="atom-icon" id="globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;
  var icon_grid = `<svg class="atom-icon" id="grid" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`;
  var icon_hard_drive = `<svg class="atom-icon" id="hard-drive" viewBox="0 0 24 24"><line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/></svg>`;
  var icon_hash = `<svg class="atom-icon" id="hash" viewBox="0 0 24 24"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>`;
  var icon_headphones = `<svg class="atom-icon" id="headphones" viewBox="0 0 24 24"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`;
  var icon_heart = `<svg class="atom-icon" id="heart" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
  var icon_help_circle = `<svg class="atom-icon" id="help-circle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;
  var icon_hexagon = `<svg class="atom-icon" id="hexagon" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`;
  var icon_home = `<svg class="atom-icon" id="home" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;
  var icon_image = `<svg class="atom-icon" id="image" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`;
  var icon_inbox = `<svg class="atom-icon" id="inbox" viewBox="0 0 24 24"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>`;
  var icon_info = `<svg class="atom-icon" id="info" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
  var icon_instagram = `<svg class="atom-icon" id="instagram" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`;
  var icon_italic = `<svg class="atom-icon" id="italic" viewBox="0 0 24 24"><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></svg>`;
  var icon_key = `<svg class="atom-icon" id="key" viewBox="0 0 24 24"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>`;
  var icon_layers = `<svg class="atom-icon" id="layers" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`;
  var icon_layout = `<svg class="atom-icon" id="layout" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`;
  var icon_life_buoy = `<svg class="atom-icon" id="life-buoy" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/></svg>`;
  var icon_link_2 = `<svg class="atom-icon" id="link-2" viewBox="0 0 24 24"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`;
  var icon_link = `<svg class="atom-icon" id="link" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
  var icon_linkedin = `<svg class="atom-icon" id="linkedin" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`;
  var icon_list = `<svg class="atom-icon" id="list" viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`;
  var icon_loader = `<svg class="atom-icon" id="loader" viewBox="0 0 24 24"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>`;
  var icon_lock = `<svg class="atom-icon" id="lock" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;
  var icon_log_in = `<svg class="atom-icon" id="log-in" viewBox="0 0 24 24"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>`;
  var icon_log_out = `<svg class="atom-icon" id="log-out" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`;
  var icon_mail = `<svg class="atom-icon" id="mail" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;
  var icon_map_pin = `<svg class="atom-icon" id="map-pin" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
  var icon_map = `<svg class="atom-icon" id="map" viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>`;
  var icon_maximize_2 = `<svg class="atom-icon" id="maximize-2" viewBox="0 0 24 24"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>`;
  var icon_maximize = `<svg class="atom-icon" id="maximize" viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>`;
  var icon_meh = `<svg class="atom-icon" id="meh" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`;
  var icon_menu = `<svg class="atom-icon" id="menu" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
  var icon_message_circle = `<svg class="atom-icon" id="message-circle" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`;
  var icon_message_square = `<svg class="atom-icon" id="message-square" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
  var icon_mic_off = `<svg class="atom-icon" id="mic-off" viewBox="0 0 24 24"><line x1="1" y1="1" x2="23" y2="23"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`;
  var icon_mic = `<svg class="atom-icon" id="mic" viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`;
  var icon_minimize_2 = `<svg class="atom-icon" id="minimize-2" viewBox="0 0 24 24"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="3" y1="21" x2="10" y2="14"/></svg>`;
  var icon_minimize = `<svg class="atom-icon" id="minimize" viewBox="0 0 24 24"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg>`;
  var icon_minus_circle = `<svg class="atom-icon" id="minus-circle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`;
  var icon_minus_square = `<svg class="atom-icon" id="minus-square" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`;
  var icon_minus = `<svg class="atom-icon" id="minus" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/></svg>`;
  var icon_monitor = `<svg class="atom-icon" id="monitor" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`;
  var icon_moon = `<svg class="atom-icon" id="moon" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  var icon_more_horizontal = `<svg class="atom-icon" id="more-horizontal" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>`;
  var icon_more_vertical = `<svg class="atom-icon" id="more-vertical" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>`;
  var icon_mouse_pointer = `<svg class="atom-icon" id="mouse-pointer" viewBox="0 0 24 24"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="M13 13l6 6"/></svg>`;
  var icon_move = `<svg class="atom-icon" id="move" viewBox="0 0 24 24"><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/></svg>`;
  var icon_music = `<svg class="atom-icon" id="music" viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`;
  var icon_navigation_2 = `<svg class="atom-icon" id="navigation-2" viewBox="0 0 24 24"><polygon points="12 2 19 21 12 17 5 21 12 2"/></svg>`;
  var icon_navigation = `<svg class="atom-icon" id="navigation" viewBox="0 0 24 24"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>`;
  var icon_octagon = `<svg class="atom-icon" id="octagon" viewBox="0 0 24 24"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/></svg>`;
  var icon_package = `<svg class="atom-icon" id="package" viewBox="0 0 24 24"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`;
  var icon_paperclip = `<svg class="atom-icon" id="paperclip" viewBox="0 0 24 24"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`;
  var icon_pause_circle = `<svg class="atom-icon" id="pause-circle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="10" y1="15" x2="10" y2="9"/><line x1="14" y1="15" x2="14" y2="9"/></svg>`;
  var icon_pause = `<svg class="atom-icon" id="pause" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`;
  var icon_pen_tool = `<svg class="atom-icon" id="pen-tool" viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`;
  var icon_percent = `<svg class="atom-icon" id="percent" viewBox="0 0 24 24"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>`;
  var icon_phone_call = `<svg class="atom-icon" id="phone-call" viewBox="0 0 24 24"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;
  var icon_phone_forwarded = `<svg class="atom-icon" id="phone-forwarded" viewBox="0 0 24 24"><polyline points="19 1 23 5 19 9"/><line x1="15" y1="5" x2="23" y2="5"/><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;
  var icon_phone_incoming = `<svg class="atom-icon" id="phone-incoming" viewBox="0 0 24 24"><polyline points="16 2 16 8 22 8"/><line x1="23" y1="1" x2="16" y2="8"/><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;
  var icon_phone_missed = `<svg class="atom-icon" id="phone-missed" viewBox="0 0 24 24"><line x1="23" y1="1" x2="17" y2="7"/><line x1="17" y1="1" x2="23" y2="7"/><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;
  var icon_phone_off = `<svg class="atom-icon" id="phone-off" viewBox="0 0 24 24"><path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"/><line x1="23" y1="1" x2="1" y2="23"/></svg>`;
  var icon_phone_outgoing = `<svg class="atom-icon" id="phone-outgoing" viewBox="0 0 24 24"><polyline points="23 7 23 1 17 1"/><line x1="16" y1="8" x2="23" y2="1"/><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;
  var icon_phone = `<svg class="atom-icon" id="phone" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;
  var icon_pie_chart = `<svg class="atom-icon" id="pie-chart" viewBox="0 0 24 24"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>`;
  var icon_play_circle = `<svg class="atom-icon" id="play-circle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>`;
  var icon_play = `<svg class="atom-icon" id="play" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
  var icon_plus_circle = `<svg class="atom-icon" id="plus-circle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`;
  var icon_plus_square = `<svg class="atom-icon" id="plus-square" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`;
  var icon_plus = `<svg class="atom-icon" id="plus" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;
  var icon_pocket = `<svg class="atom-icon" id="pocket" viewBox="0 0 24 24"><path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"/><polyline points="8 10 12 14 16 10"/></svg>`;
  var icon_power = `<svg class="atom-icon" id="power" viewBox="0 0 24 24"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/></svg>`;
  var icon_printer = `<svg class="atom-icon" id="printer" viewBox="0 0 24 24"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`;
  var icon_radio = `<svg class="atom-icon" id="radio" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></svg>`;
  var icon_refresh_ccw = `<svg class="atom-icon" id="refresh-ccw" viewBox="0 0 24 24"><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>`;
  var icon_refresh_cw = `<svg class="atom-icon" id="refresh-cw" viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`;
  var icon_repeat = `<svg class="atom-icon" id="repeat" viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`;
  var icon_rewind = `<svg class="atom-icon" id="rewind" viewBox="0 0 24 24"><polygon points="11 19 2 12 11 5 11 19"/><polygon points="22 19 13 12 22 5 22 19"/></svg>`;
  var icon_rotate_ccw = `<svg class="atom-icon" id="rotate-ccw" viewBox="0 0 24 24"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>`;
  var icon_rotate_cw = `<svg class="atom-icon" id="rotate-cw" viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`;
  var icon_rss = `<svg class="atom-icon" id="rss" viewBox="0 0 24 24"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>`;
  var icon_save = `<svg class="atom-icon" id="save" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>`;
  var icon_scissors = `<svg class="atom-icon" id="scissors" viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>`;
  var icon_search = `<svg class="atom-icon" id="search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
  var icon_send = `<svg class="atom-icon" id="send" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;
  var icon_server = `<svg class="atom-icon" id="server" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`;
  var icon_settings = `<svg class="atom-icon" id="settings" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`;
  var icon_share_2 = `<svg class="atom-icon" id="share-2" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`;
  var icon_share = `<svg class="atom-icon" id="share" viewBox="0 0 24 24"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>`;
  var icon_shield_off = `<svg class="atom-icon" id="shield-off" viewBox="0 0 24 24"><path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"/><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;
  var icon_shield = `<svg class="atom-icon" id="shield" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`;
  var icon_shopping_bag = `<svg class="atom-icon" id="shopping-bag" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`;
  var icon_shopping_cart = `<svg class="atom-icon" id="shopping-cart" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`;
  var icon_shuffle = `<svg class="atom-icon" id="shuffle" viewBox="0 0 24 24"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>`;
  var icon_sidebar = `<svg class="atom-icon" id="sidebar" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>`;
  var icon_skip_back = `<svg class="atom-icon" id="skip-back" viewBox="0 0 24 24"><polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5"/></svg>`;
  var icon_skip_forward = `<svg class="atom-icon" id="skip-forward" viewBox="0 0 24 24"><polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/></svg>`;
  var icon_slack = `<svg class="atom-icon" id="slack" viewBox="0 0 24 24"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/></svg>`;
  var icon_slash = `<svg class="atom-icon" id="slash" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>`;
  var icon_sliders = `<svg class="atom-icon" id="sliders" viewBox="0 0 24 24"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`;
  var icon_smartphone = `<svg class="atom-icon" id="smartphone" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`;
  var icon_smile = `<svg class="atom-icon" id="smile" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`;
  var icon_speaker = `<svg class="atom-icon" id="speaker" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><circle cx="12" cy="14" r="4"/><line x1="12" y1="6" x2="12.01" y2="6"/></svg>`;
  var icon_square = `<svg class="atom-icon" id="square" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg>`;
  var icon_star = `<svg class="atom-icon" id="star" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  var icon_stop_circle = `<svg class="atom-icon" id="stop-circle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><rect x="9" y="9" width="6" height="6"/></svg>`;
  var icon_sun = `<svg class="atom-icon" id="sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  var icon_sunrise = `<svg class="atom-icon" id="sunrise" viewBox="0 0 24 24"><path d="M17 18a5 5 0 0 0-10 0"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"/><line x1="1" y1="18" x2="3" y2="18"/><line x1="21" y1="18" x2="23" y2="18"/><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"/><line x1="23" y1="22" x2="1" y2="22"/><polyline points="8 6 12 2 16 6"/></svg>`;
  var icon_sunset = `<svg class="atom-icon" id="sunset" viewBox="0 0 24 24"><path d="M17 18a5 5 0 0 0-10 0"/><line x1="12" y1="9" x2="12" y2="2"/><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"/><line x1="1" y1="18" x2="3" y2="18"/><line x1="21" y1="18" x2="23" y2="18"/><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"/><line x1="23" y1="22" x2="1" y2="22"/><polyline points="16 5 12 9 8 5"/></svg>`;
  var icon_table = `<svg class="atom-icon" id="table" viewBox="0 0 24 24"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>`;
  var icon_tablet = `<svg class="atom-icon" id="tablet" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`;
  var icon_tag = `<svg class="atom-icon" id="tag" viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`;
  var icon_target = `<svg class="atom-icon" id="target" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`;
  var icon_terminal = `<svg class="atom-icon" id="terminal" viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;
  var icon_thermometer = `<svg class="atom-icon" id="thermometer" viewBox="0 0 24 24"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>`;
  var icon_thumbs_down = `<svg class="atom-icon" id="thumbs-down" viewBox="0 0 24 24"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/></svg>`;
  var icon_thumbs_up = `<svg class="atom-icon" id="thumbs-up" viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>`;
  var icon_toggle_left = `<svg class="atom-icon" id="toggle-left" viewBox="0 0 24 24"><rect x="1" y="5" width="22" height="14" rx="7" ry="7"/><circle cx="8" cy="12" r="3"/></svg>`;
  var icon_toggle_right = `<svg class="atom-icon" id="toggle-right" viewBox="0 0 24 24"><rect x="1" y="5" width="22" height="14" rx="7" ry="7"/><circle cx="16" cy="12" r="3"/></svg>`;
  var icon_tool = `<svg class="atom-icon" id="tool" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`;
  var icon_trash_2 = `<svg class="atom-icon" id="trash-2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>`;
  var icon_trash = `<svg class="atom-icon" id="trash" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`;
  var icon_trello = `<svg class="atom-icon" id="trello" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><rect x="7" y="7" width="3" height="9"/><rect x="14" y="7" width="3" height="5"/></svg>`;
  var icon_trending_down = `<svg class="atom-icon" id="trending-down" viewBox="0 0 24 24"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>`;
  var icon_trending_up = `<svg class="atom-icon" id="trending-up" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`;
  var icon_triangle = `<svg class="atom-icon" id="triangle" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>`;
  var icon_truck = `<svg class="atom-icon" id="truck" viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`;
  var icon_tv = `<svg class="atom-icon" id="tv" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>`;
  var icon_twitch = `<svg class="atom-icon" id="twitch" viewBox="0 0 24 24"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"/></svg>`;
  var icon_twitter = `<svg class="atom-icon" id="twitter" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>`;
  var icon_type = `<svg class="atom-icon" id="type" viewBox="0 0 24 24"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>`;
  var icon_umbrella = `<svg class="atom-icon" id="umbrella" viewBox="0 0 24 24"><path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"/></svg>`;
  var icon_underline = `<svg class="atom-icon" id="underline" viewBox="0 0 24 24"><path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"/><line x1="4" y1="21" x2="20" y2="21"/></svg>`;
  var icon_unlock = `<svg class="atom-icon" id="unlock" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>`;
  var icon_upload_cloud = `<svg class="atom-icon" id="upload-cloud" viewBox="0 0 24 24"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/><polyline points="16 16 12 12 8 16"/></svg>`;
  var icon_upload = `<svg class="atom-icon" id="upload" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`;
  var icon_user_check = `<svg class="atom-icon" id="user-check" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>`;
  var icon_user_minus = `<svg class="atom-icon" id="user-minus" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="23" y1="11" x2="17" y2="11"/></svg>`;
  var icon_user_plus = `<svg class="atom-icon" id="user-plus" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>`;
  var icon_user_x = `<svg class="atom-icon" id="user-x" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="18" y1="8" x2="23" y2="13"/><line x1="23" y1="8" x2="18" y2="13"/></svg>`;
  var icon_user = `<svg class="atom-icon" id="user" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
  var icon_users = `<svg class="atom-icon" id="users" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
  var icon_video_off = `<svg class="atom-icon" id="video-off" viewBox="0 0 24 24"><path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;
  var icon_video = `<svg class="atom-icon" id="video" viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`;
  var icon_voicemail = `<svg class="atom-icon" id="voicemail" viewBox="0 0 24 24"><circle cx="5.5" cy="11.5" r="4.5"/><circle cx="18.5" cy="11.5" r="4.5"/><line x1="5.5" y1="16" x2="18.5" y2="16"/></svg>`;
  var icon_volume_1 = `<svg class="atom-icon" id="volume-1" viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`;
  var icon_volume_2 = `<svg class="atom-icon" id="volume-2" viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`;
  var icon_volume_x = `<svg class="atom-icon" id="volume-x" viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`;
  var icon_volume = `<svg class="atom-icon" id="volume" viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/></svg>`;
  var icon_watch = `<svg class="atom-icon" id="watch" viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/><polyline points="12 9 12 12 13.5 13.5"/><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"/></svg>`;
  var icon_wifi_off = `<svg class="atom-icon" id="wifi-off" viewBox="0 0 24 24"><line x1="1" y1="1" x2="23" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.58 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`;
  var icon_wifi = `<svg class="atom-icon" id="wifi" viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`;
  var icon_wind = `<svg class="atom-icon" id="wind" viewBox="0 0 24 24"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>`;
  var icon_x_circle = `<svg class="atom-icon" id="x-circle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`;
  var icon_x_octagon = `<svg class="atom-icon" id="x-octagon" viewBox="0 0 24 24"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`;
  var icon_x_square = `<svg class="atom-icon" id="x-square" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/></svg>`;
  var icon_x = `<svg class="atom-icon" id="x" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
  var icon_youtube = `<svg class="atom-icon" id="youtube" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>`;
  var icon_zap_off = `<svg class="atom-icon" id="zap-off" viewBox="0 0 24 24"><polyline points="12.41 6.75 13 2 10.57 4.92"/><polyline points="18.57 12.91 21 10 15.66 10"/><polyline points="8 8 3 14 12 14 11 22 16 16"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;
  var icon_zap = `<svg class="atom-icon" id="zap" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`;
  var icon_zoom_in = `<svg class="atom-icon" id="zoom-in" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`;
  var icon_zoom_out = `<svg class="atom-icon" id="zoom-out" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`;

  // src/atom/components/icon.ts
  var styles4 = i`
:host {
	display: inline-block;
	--_size: 1;
}

.atom-icon.full {
	--_size: 1.0;
}
.atom-icon.full > svg {
	width: 100%;
	height: 100%;
}


.atom-icon.xxxl {
	--_size: 4.0;
}
.atom-icon.xxl {
	--_size: 3.0;
}
.atom-icon.xl {
	--_size: 2;
}
.atom-icon.l {
	--_size: 1.5;
}
.atom-icon.m {
	--_size: 1;
}
.atom-icon.s {
	--_size: 0.75;
}

.atom-icon > svg {
	display: block;
	width: calc(var(--_size) * var(--atom-icon-size, 12px));
	height: calc(var(--_size) * var(--atom-icon-size, 12px));
	stroke: currentColor;
	stroke-linecap: round;
	stroke-linejoin: round;
	stroke-width: 1;
	fill: none;
}
.atom-icon.full > svg { stroke-width: 1; }
.atom-icon.xxxl > svg { stroke-width: 1; }
.atom-icon.xxl > svg { stroke-width: 1.25; }
.atom-icon.xl > svg { stroke-width: 1.5; }
.atom-icon.l > svg { stroke-width: 1.75; }
.atom-icon.m > svg { stroke-width: 2; }
.atom-icon.s > svg { stroke-width: 1.5; }
`;
  var Icon = class extends Atom {
    constructor() {
      super(...arguments);
      this.name = "icon_airplay";
      this.size = "m";
    }
    render() {
      return ke`<div class="atom-icon ${this.size}">${fe(FeatherIconShapes_exports[this.name])}</div>`;
    }
  };
  Icon.styles = [styles4];
  __decorateClass([
    n4({ type: String, reflect: true })
  ], Icon.prototype, "name", 2);
  __decorateClass([
    n4({ type: String, reflect: true })
  ], Icon.prototype, "size", 2);
  Icon = __decorateClass([
    t2("atom-icon")
  ], Icon);

  // src/atom/components/switch.css.ts
  var styles5 = i`
:host {
    display: inline-block;
    position: relative;
    width: auto;        
    font-size: var(--atom-button-fontsize);
    font-weight: var(--atom-button-fontweight);
}

.button {
    cursor: pointer;
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 50px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;        
    border: none;
    border-radius: 9999px;
    margin-block-end: 4px;
    transition-property: background;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;

    padding: 2px;
}

.thumb {
    display: block;
    position: relative;
    width: 18px;
    height: 18px;
    margin: 1px;
    border-radius: 9999px;
    transition-property: left;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
    background: var(--atom-bg);
}

.button.on {
    background: var(--atom-color-accent);
}

.button.off {
    background: var(--atom-control-bg);
}

.button.off .thumb {
    left: -13px;
}
.button.on .thumb {
    left: 13px;
}

.button.on.disabled,
.button.off.disabled,
.button.disabled {
    /* opacity: 0.5; */
    background: light-dark(
        hsl(var(--atom-colorbase-hue) 0% 50% / 25%),
        hsl(var(--atom-colorbase-hue) 0% 50% / 50%)
    );
    cursor: not-allowed;
}
.button.on.disabled .thumb,
.button.off.disabled  .thumb,
.button.disabled  .thumb {
    background: light-dark(
        hsl(var(--atom-colorbase-hue) 0% 100% / 66%),
        hsl(var(--atom-colorbase-hue) 0% 50% / 33%)
    );
    left:0px;
}

.label {
    margin-left: 4px;
    font: var(--atom-font-label);
}
.label.disabled {
    opacity: 0.5;
}
`;

  // src/atom/components/switch.ts
  var Switch = class extends Atom {
    constructor() {
      super(...arguments);
      this.label = "Switch";
      this.value = 0;
    }
    attributeChangedCallback(name, _old, value) {
      if (name === "disabled" && _old === null && value !== "false") {
        this.disabled = true;
      }
      super.attributeChangedCallback(name, _old, value);
    }
    action(event) {
      this.value = this.value === 1 ? 0 : 1;
      this.announce(Switch.atomEvent, this.value, event);
    }
    render() {
      return ke`    
        <button aria-label="${this.label}" @click=${this.disabled ? null : this.action} class="button ${this.value ? "on" : "off"} ${this.disabled ? "disabled" : ""}">
            <div class="thumb"></div>
        </button>
        <span class="label ${this.disabled ? "disabled" : ""}"><slot></slot></span>`;
    }
  };
  Switch.atomEvent = "change";
  Switch.styles = styles5;
  __decorateClass([
    n4({ type: Number, reflect: true })
  ], Switch.prototype, "value", 2);
  Switch = __decorateClass([
    t2("atom-switch")
  ], Switch);

  // src/atom/components/toast.ts
  var Toast = class extends Atom {
    // ms
    constructor() {
      super();
      this.timeout_hide = void 0;
      this.timeout_remove = void 0;
      this.DISPLAY_DURATION = 2e3;
      window.toast = (title, msg) => {
        console.log("toast:", title, msg);
        this.container.innerHTML = `
                <h4>${title}</h4>
                <p>${msg}</p>
            `;
        clearTimeout(this.timeout_hide);
        clearTimeout(this.timeout_remove);
        this.container.classList.remove("hide");
        this.container.classList.remove("fadein");
        this.container.classList.remove("fadeout");
        this.container.classList.add("fadein");
        this.timeout_hide = setTimeout(() => {
          this.container.classList.add("fadeout");
        }, this.DISPLAY_DURATION);
        this.timeout_remove = setTimeout(() => {
          this.container.classList.remove("fadeout");
          this.container.classList.add("hide");
        }, this.DISPLAY_DURATION + 500);
      };
    }
    render() {
      return ke`<div class="container"><h4>title</h4>
                <p>msg</p></div>`;
    }
  };
  Toast.styles = i`
		:host {
			position: fixed;
            bottom: 1rem;
            right: 1rem;
            z-index: 999;
            isolation: isolate;
        }
        h4 {
            font: 500 16px/32px var(--atom-font-family-default);
            margin: 0;
        }
        p {
            font: 400 14px/16px var(--atom-font-family-default);
            margin: 0;
        }
        .container {
            display: none;
            background-color: var(--atom-fg);
            color: var(--atom-bg);
            padding: 0.5rem 1rem;
            padding-bottom: 1rem;
            border-radius: 4px;
            width: 300px;
            opacity: 0;
            transition: opacity cubic-bezier(0.165, 0.84, 0.44, 1) 500ms;
        }
        .container.fadein {
            display: block;
            opacity: 1;
        }
        
        .container.fadeout {
            opacity: 0;
        }

        .container.hide {
            display: none;
            opacity: 0;
        }
	`;
  __decorateClass([
    e4(".container")
  ], Toast.prototype, "container", 2);
  Toast = __decorateClass([
    t2("atom-toast")
  ], Toast);

  // src/atom/components/button-group.ts
  var ButtonGroup = class extends Atom {
    constructor() {
      super(...arguments);
      this.selected = "";
      this.options = "";
    }
    select(label, event) {
      console.log("select", label);
      this.selected = label;
      this.announce(ButtonGroup.atomEvent, this.selected, event);
    }
    item(label) {
      const selected = label === this.selected ? "selected" : "";
      return ke`<div @click=${(event) => this.select(label, event)} class="item ${selected}">${label}</div>`;
    }
    render() {
      return ke`${this.options.split(",").map((opt) => this.item(opt.trim()))}`;
    }
  };
  ButtonGroup.atomEvent = "click";
  // @property({ type: String, reflect: true })
  // override value = "";
  ButtonGroup.styles = i`
		:host {
            background-color: var(--atom-color-subtle);
            border-radius: calc(var(--atom-button-border-radius) + 4px);
            padding: 4px;
            display: inline-flex;
        }
        
        .item {
            display: inline-block;
            font: var(--atom-font-control);
            padding-inline: var(--atom-button-padding-inline);
            padding-block: calc(var(--atom-button-padding-block) / 2);
            border-radius: var(--atom-button-border-radius);
            color: var(--atom-fg);
            cursor: pointer;
            /* background-color: #f00; */
            margin-right: 0.25rem;
        }
        :host div:last-child {
            margin-right: 0;
        }
        .item:hover {
            background-color: var(--atom-bg);
        }

        .item.selected {
            background-color: var(--atom-fg);
            color: var(--atom-bg);
        }
	`;
  __decorateClass([
    n4({ type: String, reflect: true })
  ], ButtonGroup.prototype, "selected", 2);
  __decorateClass([
    n4({ type: String, reflect: true })
  ], ButtonGroup.prototype, "options", 2);
  ButtonGroup = __decorateClass([
    t2("atom-button-group")
  ], ButtonGroup);

  // src/atom/components/breadcrumbs.css.ts
  var styles6 = i`
:host {
    display: flex;
    align-items: center;
}
a {
    color: #0077cc;
    text-decoration: none;
    margin: 0;
    padding: 0;
}
a:hover {
    text-decoration: underline;
}
span {
    /* margin: 0 5px; */
    color: #666;
}
span.slash {
    margin: 0 0.5rem
}
`;

  // src/atom/components/breadcrumbs.ts
  var Breadcrumbs = class extends h3 {
    constructor() {
      super();
      this.breadcrumbs = [];
      this.breadcrumbs = this.getBreadcrumbs();
    }
    getBreadcrumbs() {
      const path = window.location.pathname;
      const parts = path.split("/").filter(Boolean);
      const result = [
        { name: "Home", path: "/" },
        ...parts.map((part, index) => {
          const pageName = (part.charAt(0).toUpperCase() + part.slice(1)).replace(
            ".html",
            ""
          );
          return {
            name: pageName,
            path: `/${parts.slice(0, index + 1).join("/")}/`
          };
        })
      ];
      return result;
    }
    render() {
      return ke`
      ${this.breadcrumbs.map(
        (crumb, index) => ke`
          ${index > 0 ? ke`<span class="slash">/</span>` : ""}
          ${index === this.breadcrumbs.length - 1 ? ke`<span>${crumb.name}</span>` : ke`<a href="${crumb.path}">${crumb.name}</a>`}
        `
      )}
    `;
    }
  };
  Breadcrumbs.styles = styles6;
  __decorateClass([
    r4()
  ], Breadcrumbs.prototype, "breadcrumbs", 2);
  Breadcrumbs = __decorateClass([
    t2("atom-breadcrumbs")
  ], Breadcrumbs);

  // src/atom/components/code.css.ts
  var styles7 = i`

    :host {
        --atom-hljs-bg: #282c34;
        --atom-hljs-color: #9abbda;
        --atom-hljs-comment: #B2BABD;

        --atom-hljs-keyword: #61aeee;
        --atom-hljs-attribute: #c678dd;
        --atom-hljs-literal: #96d0ff;
        --atom-hljs-string: #50b0ff;

        --atom-hljs-symbol: #c59bc1;
        --atom-hljs-namespace: #fff;
        --atom-hljs-punctuation: #cccccc;
        --atom-hljs-deletion: #de7176;
        --atom-hljs-addition: #76c490;

        /* todo: develop light-theme */
    }

    .container {
        position: relative;
    }

    /* @media(color-scheme: dark){
        .container {
            filter: invert(0);
        }
    } */

    .container, code {
        border-radius: var(--atom-button-border-radius);
        background: var(--atom-hljs-bg);
    }

    pre {
        border-top: 1px solid var(--atom-bg);
        margin: 0;
        cursor: text;
    }
    
    .header {
        padding: 0px;
        font-size: normal;
        display: flex;
    }
    .header button {
        background: none;
        height: 100%;
        display: inline-block;
        appearance: none;
        border: none;
        color: #fff6;
        color: #FFFFFFab;
        padding: 8px 16px;
        margin: 0;
        border-right: 1px solid var(--atom-bg);
        font: var(--atom-font-label);

    }
    .header button.hasmany {
        cursor: pointer;
    }
    .header button:hover, .header button.selected {
        color: #fff;
        border-bottom: 2px solid #09fc;
    }
    .header button.selected {
        border-bottom: 2px solid #09f;
    }

    .copyBtn {
        cursor: pointer;
        position: absolute;
        right: 4px;
        top: calc(2rem + 4px);
        transition: all 0.2s;
        background-color: #0000;
        opacity: 0;
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--atom-button-border-radius);

        * {
            pointer-events: none;
        }
    }
    .container:hover .copyBtn.active:hover, .copyBtn.active {
        color: #000;
        background: #fff;
    }
    .container:hover .copyBtn:hover {
        opacity: 1;
        background-color: #000;
        color: #fff;
    }

    .container:hover .copyBtn {
        opacity: 1;
        background-color: #0006;
        color: #fff6;
    }
  `;

  // src/atom/components/code-hljs.css.ts
  var hljsstyles = i`

pre code.hljs {
	display: block;
	overflow-x: auto;
	padding: 1em
}
code.hljs {
	padding: 3px 5px
}
/*

Atom One Dark With support for ReasonML by Gidi Morris, based off work by Daniel Gamage

Original One Dark Syntax theme from https://github.com/atom/one-dark-syntax

*/
.hljs {
	color: var(--atom-hljs-color);
	background: var(--atom-hljs-bg);
}

.hljs-subst {
	color: var(--atom-hljs-color);
}

.hljs-comment {
	color: var(--atom-hljs-comment);
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-meta .hljs-keyword,
.hljs-doctag,
.hljs-section {
	color: var(--atom-hljs-keyword);
}

.hljs-attr {
	color: var(--atom-hljs-attribute);
}

.hljs-attribute {
	color: var(--atom-hljs-symbol);
}

.hljs-name,
.hljs-type,
.hljs-number,
.hljs-selector-id,
.hljs-quote,
.hljs-template-tag {
	color: var(--atom-hljs-namespace);
}

.hljs-selector-class {
	color: var(--atom-hljs-keyword);
}

.hljs-string,
.hljs-regexp,
.hljs-symbol,
.hljs-variable,
.hljs-template-variable,
.hljs-link,
.hljs-selector-attr {
	color: var(--atom-hljs-string);
}

.hljs-meta,
.hljs-selector-pseudo {
	color: var(--atom-hljs-keyword);
}

.hljs-built_in,
.hljs-title,
.hljs-literal {
	color: var(--atom-hljs-literal);
}

.hljs-bullet,
.hljs-code {
	color: var(--atom-hljs-punctuation);
}

.hljs-meta .hljs-string {
	color: var(--atom-hljs-variable);
}

.hljs-deletion {
	color: var(--atom-hljs-deletion);
}

.hljs-addition {
	color: var(--atom-hljs-addition);
}

.hljs-emphasis {
	font-style: italic;
}

.hljs-strong {
	font-weight: bold;
}

`;

  // src/atom/lib/Dedent.ts
  function dedent(raw) {
    const lines = raw.split("\n");
    let mindent = null;
    for (const l2 of lines) {
      const m2 = l2.match(/^(\s+)\S+/);
      if (m2) {
        const indent = m2[1].length;
        if (!mindent) {
          mindent = indent;
        } else {
          mindent = Math.min(mindent, indent);
        }
      }
    }
    if (mindent !== null) {
      return lines.map((l2) => l2[0] === " " || l2[0] === "	" ? l2.slice(mindent) : l2).join("\n").trim();
    }
    return raw;
  }

  // src/atom/components/code.ts
  var import_html_entities = __toESM(require_lib());

  // node_modules/highlight.js/es/common.js
  var import_common = __toESM(require_common(), 1);
  var common_default = import_common.default;

  // src/atom/components/code.ts
  var atom_code_example = `
    <atom-code>        
        <code lang="html">
            <!-- your code here -->
        </code>
    </atom-code>`;
  var langMap = {
    "ATOM-CODE-EXAMPLE": "Component usage",
    javascript: "JavaScript",
    typescript: "TypeScript",
    html: "HTML",
    css: "CSS",
    csharp: "C#",
    cpp: "C++",
    sh: "Shell"
  };
  var Code = class extends Atom {
    constructor() {
      super(...arguments);
      this.fragmentIndex = -1;
      this.selected = "";
      this.sections = [];
    }
    async connectedCallback() {
      super.connectedCallback();
      this.sections = [];
      let nextFragmentIndex = 0;
      [...this.querySelectorAll("code")].map((frag, index) => {
        const raw = frag.innerHTML;
        const language = frag.getAttribute("lang") || "plain";
        if (this.selected === "") {
          const selected = frag.getAttribute("selected") === "true" || false;
          if (selected) nextFragmentIndex = index;
        }
        if (language === this.selected) {
          nextFragmentIndex = index;
        }
        if (language === "ATOM-CODE-EXAMPLE") {
          this.sections.push(this.format(atom_code_example, language));
        } else {
          this.sections.push(this.format(raw, language));
        }
      });
      this.fragmentIndex = nextFragmentIndex;
    }
    format(raw, language) {
      const clean = raw.replace("<textarea>", "").replace("</textarea>", "");
      const text = (0, import_html_entities.decode)(dedent(clean));
      if (language === "ATOM-CODE-EXAMPLE") {
        return {
          language,
          raw: text,
          html: common_default.highlight(text, { language: "html" }).value
        };
      }
      return {
        language,
        raw: text,
        html: common_default.highlight(text, { language }).value
      };
    }
    setFragmentIndex(index) {
      this.fragmentIndex = index;
    }
    copy() {
      navigator.clipboard.writeText(this.sections[this.fragmentIndex].raw);
      const btn = this.renderRoot.querySelector(".copyBtn");
      if (btn) {
        btn.classList.add("active");
        setTimeout(() => {
          btn.classList.remove("active");
        }, 500);
      }
    }
    langString(lang) {
      if (Object.keys(langMap).includes(lang)) {
        return langMap[lang];
      }
      return lang;
    }
    render() {
      if (this.sections.length === 0)
        return ke`<!-- atom-code: no code fragments to render -->`;
      const buttons = this.sections.length > 1 ? this.sections.map(
        (s2, index) => ke`<button class="hasmany ${this.fragmentIndex === index ? "selected" : ""}" @click=${() => this.setFragmentIndex(index)}>${this.langString(s2.language)}</button> `
      ) : ke`<button class="selected">${this.langString(this.sections[0].language)}</button>`;
      return ke`    
        <div class="container">
            <div class="header">${buttons}</div>
            
            <pre><code class="hljs">${ae(this.sections[this.fragmentIndex].html)}</code></pre>
            
            <div class="copyBtn" @click=${() => this.copy()}>
                <atom-icon slot="left" name="icon_copy"></atom-icon>
            </div>
        </div>`;
    }
  };
  Code.styles = [styles7, hljsstyles];
  __decorateClass([
    r4()
  ], Code.prototype, "fragmentIndex", 2);
  __decorateClass([
    n4({ type: String, reflect: true })
  ], Code.prototype, "selected", 2);
  Code = __decorateClass([
    t2("atom-code")
  ], Code);

  // src/atom/components/switch-darkmode.ts
  var LOCALSTORAGE_KEY = "atom-theme";
  var SwitchDarkmode = class extends Switch {
    constructor() {
      super(...arguments);
      this.default = "light";
    }
    // default to light mode
    willUpdate(changedProperties) {
      if (changedProperties.has("default") && changedProperties.get("default") === void 0) {
        let useDark = false;
        console.log("lightdark init");
        const user_prefers = localStorage.getItem(LOCALSTORAGE_KEY);
        console.log("lightdark user_prefers", user_prefers);
        if (user_prefers !== null) {
          useDark = user_prefers === "dark";
        } else {
          useDark = Boolean(window.matchMedia("(prefers-color-scheme: dark)"));
        }
        this.value = useDark ? 1 : 0;
        this.setTheme();
      }
    }
    action() {
      this.value = this.value === 1 ? 0 : 1;
      this.setTheme();
    }
    setTheme() {
      console.log(
        "lightdark setTheme, this.value:",
        this.value,
        this.value === 1 ? "dark" : "light"
      );
      if (this.value === 1) {
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
      } else {
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
      }
      localStorage.setItem(LOCALSTORAGE_KEY, this.value === 1 ? "dark" : "light");
    }
  };
  __decorateClass([
    n4({ type: String })
  ], SwitchDarkmode.prototype, "default", 2);
  SwitchDarkmode = __decorateClass([
    t2("atom-switch-darkmode")
  ], SwitchDarkmode);
})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-svg.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
