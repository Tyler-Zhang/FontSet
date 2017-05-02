/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 195);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return KEY_BINDINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AVAILABLE_FONTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return INITIALIZED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIALIZE_CLIENT; });
/* unused harmony export CHANGE_CLIENT_SETTINGS */
var KEY_BINDINGS = 'KEY_BINDINGS';
var AVAILABLE_FONTS = 'AVAILABLE_FONTS';
var SETTINGS = 'SETTINGS';
var INITIALIZED = 'INITIALIZED';

var INITIALIZE_CLIENT = "INITIALIZE_CLIENT";
var CHANGE_CLIENT_SETTINGS = "CHANGE_CLIENT_SETTINGS";

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_defaults__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_definitions__ = __webpack_require__(14);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var currState = void 0;

function updateState() {
  chrome.storage.sync.get([__WEBPACK_IMPORTED_MODULE_1__lib_definitions__["c" /* KEY_BINDINGS */], __WEBPACK_IMPORTED_MODULE_1__lib_definitions__["b" /* AVAILABLE_FONTS */], __WEBPACK_IMPORTED_MODULE_1__lib_definitions__["d" /* SETTINGS */]], function (items) {
    currState = items;
    console.log(currState);
  });
}

function startClient() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, Object.assign({}, { type: __WEBPACK_IMPORTED_MODULE_1__lib_definitions__["a" /* INITIALIZE_CLIENT */] }, currState), function (response) {
      console.log(response);
    });
  });
}

chrome.storage.sync.get([__WEBPACK_IMPORTED_MODULE_1__lib_definitions__["c" /* KEY_BINDINGS */], __WEBPACK_IMPORTED_MODULE_1__lib_definitions__["b" /* AVAILABLE_FONTS */], __WEBPACK_IMPORTED_MODULE_1__lib_definitions__["d" /* SETTINGS */]], function (items) {
  if (!items[__WEBPACK_IMPORTED_MODULE_1__lib_definitions__["e" /* INITIALIZED */]]) {
    var _chrome$storage$sync$;

    // Load defaults into the settings
    chrome.storage.sync.set((_chrome$storage$sync$ = {}, _defineProperty(_chrome$storage$sync$, __WEBPACK_IMPORTED_MODULE_1__lib_definitions__["c" /* KEY_BINDINGS */], __WEBPACK_IMPORTED_MODULE_0__lib_defaults__["b" /* keyBindings */]), _defineProperty(_chrome$storage$sync$, __WEBPACK_IMPORTED_MODULE_1__lib_definitions__["b" /* AVAILABLE_FONTS */], __WEBPACK_IMPORTED_MODULE_0__lib_defaults__["c" /* availableFonts */]), _defineProperty(_chrome$storage$sync$, __WEBPACK_IMPORTED_MODULE_1__lib_definitions__["d" /* SETTINGS */], __WEBPACK_IMPORTED_MODULE_0__lib_defaults__["d" /* settings */]), _chrome$storage$sync$), function () {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      } else {
        chrome.storage.sync.set(_defineProperty({}, __WEBPACK_IMPORTED_MODULE_1__lib_definitions__["e" /* INITIALIZED */], true));
        updateState();
      }
    });
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type == __WEBPACK_IMPORTED_MODULE_1__lib_definitions__["a" /* INITIALIZE_CLIENT */]) {
    startClient();
  }
});

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return incSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return incSizeBig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return decSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return decSizeBig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return incFontWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return incFontWeightBig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return decFontWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return decFontWeightBig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return nextFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return nextFontBig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return prevFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return prevFontBig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return changeFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return changeFontStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return undo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selectHighlight; });
var incSize = 'incSize';
var incSizeBig = 'incSizeBig';
var decSize = 'decSize';
var decSizeBig = 'decSizeBig';
var incFontWeight = 'incFontWeight';
var incFontWeightBig = 'incFontWeightBig';
var decFontWeight = 'decFontWeight';
var decFontWeightBig = 'decFontWeightBig';
var nextFont = 'nextFont';
var nextFontBig = 'nextFontBig';
var prevFont = 'prevFont';
var prevFontBig = 'prevFontBig';
var changeFont = 'changefont';
var changeFontStyle = 'changeFontStyle';
var search = 'search';
var undo = 'undo';
var selectHighlight = 'selectHighlight';

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return keyBindings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return availableFonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return settings; });


var keyBindings = {
  w: __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* incSize */],
  W: __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* incSizeBig */],
  s: __WEBPACK_IMPORTED_MODULE_0__actions__["d" /* decSize */],
  S: __WEBPACK_IMPORTED_MODULE_0__actions__["e" /* decSizeBig */],
  r: __WEBPACK_IMPORTED_MODULE_0__actions__["f" /* incFontWeight */],
  R: __WEBPACK_IMPORTED_MODULE_0__actions__["g" /* incFontWeightBig */],
  f: __WEBPACK_IMPORTED_MODULE_0__actions__["h" /* decFontWeight */],
  F: __WEBPACK_IMPORTED_MODULE_0__actions__["i" /* decFontWeightBig */],
  d: __WEBPACK_IMPORTED_MODULE_0__actions__["j" /* nextFont */],
  D: __WEBPACK_IMPORTED_MODULE_0__actions__["k" /* nextFontBig */],
  a: __WEBPACK_IMPORTED_MODULE_0__actions__["l" /* prevFont */],
  A: __WEBPACK_IMPORTED_MODULE_0__actions__["m" /* prevFontBig */],
  q: __WEBPACK_IMPORTED_MODULE_0__actions__["n" /* changeFontStyle */],
  t: __WEBPACK_IMPORTED_MODULE_0__actions__["o" /* search */],
  u: __WEBPACK_IMPORTED_MODULE_0__actions__["p" /* undo */],
  z: __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* selectHighlight */]
};

var availableFonts = ['Palatino', 'Garamond', 'Bookman', 'Avant Garde', 'Verdana', 'Georgia', 'Comic Sans MS', 'Trebuchet MS', 'Arial Black', 'Impact'];
var styleList = ['normal', 'italic', 'oblique'];
var settings = {
  sizeStep: 3,
  sizeBigMult: 10,
  weightStep: 3,
  weightBigMult: 10,
  fontStep: 1,
  fontBigMult: 1
};

/***/ })

/******/ });