"use strict";
(self["webpackChunkodin_weather_app"] = self["webpackChunkodin_weather_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_weather_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./weather.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/weather.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/background.jpg */ "./src/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/search.svg */ "./src/images/icons/search.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_weather_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Weather DOM stylesheet*/\n\n/**************************************************\n * Root styling\n **************************************************/\n:root {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat fixed center/cover;\n  height: 100%;\n  display: inline-flex;\n  flex-direction: column;\n\n  --background1: #fff;\n  --color: #000;\n  --border-radius: 0.6em;\n}\n\nbody {\n  flex: 1;\n  background: #fff7;\n  color: #333;\n  margin: 0.5em;\n  padding: 0.4em;\n  border-radius: var(--border-radius);\n  font-family: 'Oxygen', sans-serif;\n}\n\n\n/**************************************************\n * Header content and header form input\n **************************************************/\nheader {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 0.4em;\n}\n\nheader h1 {\n  margin: 0.3em 0.2em 0.1em;\n  padding: 0.2em;\n  font-family: 'Rubik', sans-serif;\n  font-size: 1.8em;\n  color: #333;\n  text-shadow: 2px 2px 3px #3339;\n}\n\n.unit {\n  text-align: left;\n  color: #333;\n  font-weight: 700;\n  display: flex;\n  margin: 0.4em 0.6em 0.4em 0.4em;\n}\n\n.unit > div {\n  margin: 0 0.8em;\n}\n\nheader h1 span {\n  font-size: 1.05em;\n}\n\nform {\n  display: inline-flex;\n  gap: 0;\n  margin: 0.5em 0.8em;\n  padding: 0.1em 0.5em;\n}\n\nform input {\n  padding: 0.2em;\n  font-size: 1.06em;\n  border: none;\n}\n\nform input::placeholder {\n  color: #444;\n  font-style: italic;\n}\n\n.location-input {\n  width: 120px;\n  transition: width .5s ease-in-out .1s;\n  border-bottom: 3px solid #000;\n  color: #000;\n  font-weight: 400;\n  background: transparent;\n  padding: 0.16em;\n}\n\nform input[type=\"text\"]:focus {\n  outline: none;  \n  width: clamp(100px, 250px, 400px);\n}\n\nform input[type=\"submit\"] {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center;\n  background-size: contain;\n  width: 1.3em;\n  height: 1.3em;\n}\n\n\n/**************************************************\n * Error popup menu\n **************************************************/\n.error {\n  display: inline-flex;\n  align-items: center;\n  color: rgb(255, 99, 71);\n  border: 2px solid rgb(255, 99, 71);\n  border-radius: var(--border-radius);\n  margin-left: 0.6em;\n  padding: 0.15em 0.5em;\n  visibility: hidden;\n}\n\n.error .message {\n  display: inline;\n  font-family: sans-serif;\n  font-weight: 500;\n}\n\n.close-error-btn {\n  background: none;\n  color: rgb(255, 99, 71);\n  border: none;\n  display: inline;\n  font-size: 1.6em;\n  margin: 0;\n  margin-right: 0.2em;\n  padding: 0;\n}\n\n.close-error-btn:active {\n  color: #333;\n}\n\n\n/**************************************************\n * Main:  weather content display styling\n **************************************************/\nmain {\n  display: flex;\n  /* flex-direction: column;\n  align-items: center; */\n  flex-flow: row wrap;\n  flex-basis: 100%;\n  justify-content: center;\n  align-items: center;\n  gap: 2em;\n}\n\nh4 {\n  margin: 0.1em;\n}\n\n\n/**************************************************\n * Loading animation\n **************************************************/\n.loader {\n  background: transparent;\n  border-width: 4px;\n  border-style: solid;\n  border-color: #333 #333 transparent;\n  border-radius: 50%;\n  margin: 2.3em;\n  width: 2em;\n  height: 2em;\n  animation: spin 1.5s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA,0BAA0B;;AAG1B;;mDAEmD;AACnD;EACE,gFAAwE;EACxE,YAAY;EACZ,oBAAoB;EACpB,sBAAsB;;EAEtB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,OAAO;EACP,iBAAiB;EACjB,WAAW;EACX,aAAa;EACb,cAAc;EACd,mCAAmC;EACnC,iCAAiC;AACnC;;;AAGA;;mDAEmD;AACnD;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,gCAAgC;EAChC,gBAAgB;EAChB,WAAW;EACX,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;EACpB,MAAM;EACN,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,qCAAqC;EACrC,6BAA6B;EAC7B,WAAW;EACX,gBAAgB;EAChB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,oEAA8D;EAC9D,wBAAwB;EACxB,YAAY;EACZ,aAAa;AACf;;;AAGA;;mDAEmD;AACnD;EACE,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,kCAAkC;EAClC,mCAAmC;EACnC,kBAAkB;EAClB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,SAAS;EACT,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;;AAGA;;mDAEmD;AACnD;EACE,aAAa;EACb;wBACsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,aAAa;AACf;;;AAGA;;mDAEmD;AACnD;EACE,uBAAuB;EACvB,iBAAiB;EACjB,mBAAmB;EACnB,mCAAmC;EACnC,kBAAkB;EAClB,aAAa;EACb,UAAU;EACV,WAAW;EACX,oCAAoC;AACtC;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF","sourcesContent":["/* Weather DOM stylesheet*/\n@import './weather.css';\n\n/**************************************************\n * Root styling\n **************************************************/\n:root {\n  background: url('../images/background.jpg') no-repeat fixed center/cover;\n  height: 100%;\n  display: inline-flex;\n  flex-direction: column;\n\n  --background1: #fff;\n  --color: #000;\n  --border-radius: 0.6em;\n}\n\nbody {\n  flex: 1;\n  background: #fff7;\n  color: #333;\n  margin: 0.5em;\n  padding: 0.4em;\n  border-radius: var(--border-radius);\n  font-family: 'Oxygen', sans-serif;\n}\n\n\n/**************************************************\n * Header content and header form input\n **************************************************/\nheader {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 0.4em;\n}\n\nheader h1 {\n  margin: 0.3em 0.2em 0.1em;\n  padding: 0.2em;\n  font-family: 'Rubik', sans-serif;\n  font-size: 1.8em;\n  color: #333;\n  text-shadow: 2px 2px 3px #3339;\n}\n\n.unit {\n  text-align: left;\n  color: #333;\n  font-weight: 700;\n  display: flex;\n  margin: 0.4em 0.6em 0.4em 0.4em;\n}\n\n.unit > div {\n  margin: 0 0.8em;\n}\n\nheader h1 span {\n  font-size: 1.05em;\n}\n\nform {\n  display: inline-flex;\n  gap: 0;\n  margin: 0.5em 0.8em;\n  padding: 0.1em 0.5em;\n}\n\nform input {\n  padding: 0.2em;\n  font-size: 1.06em;\n  border: none;\n}\n\nform input::placeholder {\n  color: #444;\n  font-style: italic;\n}\n\n.location-input {\n  width: 120px;\n  transition: width .5s ease-in-out .1s;\n  border-bottom: 3px solid #000;\n  color: #000;\n  font-weight: 400;\n  background: transparent;\n  padding: 0.16em;\n}\n\nform input[type=\"text\"]:focus {\n  outline: none;  \n  width: clamp(100px, 250px, 400px);\n}\n\nform input[type=\"submit\"] {\n  background: url('../images/icons/search.svg') no-repeat center;\n  background-size: contain;\n  width: 1.3em;\n  height: 1.3em;\n}\n\n\n/**************************************************\n * Error popup menu\n **************************************************/\n.error {\n  display: inline-flex;\n  align-items: center;\n  color: rgb(255, 99, 71);\n  border: 2px solid rgb(255, 99, 71);\n  border-radius: var(--border-radius);\n  margin-left: 0.6em;\n  padding: 0.15em 0.5em;\n  visibility: hidden;\n}\n\n.error .message {\n  display: inline;\n  font-family: sans-serif;\n  font-weight: 500;\n}\n\n.close-error-btn {\n  background: none;\n  color: rgb(255, 99, 71);\n  border: none;\n  display: inline;\n  font-size: 1.6em;\n  margin: 0;\n  margin-right: 0.2em;\n  padding: 0;\n}\n\n.close-error-btn:active {\n  color: #333;\n}\n\n\n/**************************************************\n * Main:  weather content display styling\n **************************************************/\nmain {\n  display: flex;\n  /* flex-direction: column;\n  align-items: center; */\n  flex-flow: row wrap;\n  flex-basis: 100%;\n  justify-content: center;\n  align-items: center;\n  gap: 2em;\n}\n\nh4 {\n  margin: 0.1em;\n}\n\n\n/**************************************************\n * Loading animation\n **************************************************/\n.loader {\n  background: transparent;\n  border-width: 4px;\n  border-style: solid;\n  border-color: #333 #333 transparent;\n  border-radius: 50%;\n  margin: 2.3em;\n  width: 2em;\n  height: 2em;\n  animation: spin 1.5s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/weather.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/weather.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".current {\n  text-align: center;\n}\n\n.location {\n  font-weight: 400;\n  font-size: 2em;\n  text-shadow: 2px 2px 3px #3339;\n  margin: 1em;\n}\n\n.condition img {\n  height: 7em;\n  width: 7em;\n  background: #3331;\n  padding: 1em;\n  border-radius: 5em;\n}\n\n.condition {\n  font-weight: 500;\n  font-size: 1.2em;\n}\n\n.current .temperature {\n  font-weight: 500;\n  font-size: 4em;\n  margin: 0;\n  text-shadow: 3px 3px 5px #333a;\n}\n\n.wind > section {\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  gap: 1em;\n}\n\n.other {\n  display: inline-grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-row-gap: 1em;\n  text-align: center;\n  margin: 1em;\n  background: #3331;\n  border-radius: 2em;\n  padding: 1em;\n}\n\n.forecast {\n  background: #3331;\n  padding: 1.2em 1.6em;\n  margin: 0.8em;\n  border-radius: 2em;\n  text-align: center;\n}\n\n.forecast > * {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-style: italic;\n  gap: 1.2em;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/weather.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,WAAW;EACX,UAAU;EACV,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,SAAS;EACT,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,QAAQ;AACV;;AAEA;EACE,oBAAoB;EACpB,qCAAqC;EACrC,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,aAAa;EACb,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,UAAU;AACZ","sourcesContent":[".current {\n  text-align: center;\n}\n\n.location {\n  font-weight: 400;\n  font-size: 2em;\n  text-shadow: 2px 2px 3px #3339;\n  margin: 1em;\n}\n\n.condition img {\n  height: 7em;\n  width: 7em;\n  background: #3331;\n  padding: 1em;\n  border-radius: 5em;\n}\n\n.condition {\n  font-weight: 500;\n  font-size: 1.2em;\n}\n\n.current .temperature {\n  font-weight: 500;\n  font-size: 4em;\n  margin: 0;\n  text-shadow: 3px 3px 5px #333a;\n}\n\n.wind > section {\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  gap: 1em;\n}\n\n.other {\n  display: inline-grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-row-gap: 1em;\n  text-align: center;\n  margin: 1em;\n  background: #3331;\n  border-radius: 2em;\n  padding: 1em;\n}\n\n.forecast {\n  background: #3331;\n  padding: 1.2em 1.6em;\n  margin: 0.8em;\n  border-radius: 2em;\n  text-align: center;\n}\n\n.forecast > * {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-style: italic;\n  gap: 1.2em;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/dom.ts":
/*!****************************!*\
  !*** ./src/scripts/dom.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const error = document.querySelector('.error');
const errorMsg = document.querySelector('.error .message');
const main = document.querySelector('main');
/**************************************************
 * Functions provided outside modular use
 **************************************************/
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    showError(message) {
        error.style.visibility = 'visible';
        errorMsg.textContent = message;
        main.textContent = '';
    },
    closeError() {
        error.style.visibility = 'hidden';
        errorMsg.textContent = '';
    },
    showWeather(weatherReport, units) {
        this.clearWeather();
        main.appendChild(currentWeather(weatherReport, units));
        main.appendChild(forecast(weatherReport.forecast, units.tempUnit));
    },
    clearWeather() {
        main.textContent = '';
    },
    loading() {
        this.clearWeather();
        const loader = document.createElement('div');
        loader.className = 'loader';
        main.appendChild(loader);
    }
});
/**************************************************
 *  Creates all DOM elements using data of current
 *  weather.
 **************************************************/
function currentWeather(weatherReport, units) {
    const wetherDOM = document.createElement('section');
    wetherDOM.className = 'current';
    const heading = document.createElement('h4');
    heading.textContent = 'Currently';
    wetherDOM.appendChild(heading);
    const childrenDOM = [
        location(weatherReport.location),
        condition(weatherReport.current.condition),
        temperature(weatherReport.current, units.tempUnit),
        wind(weatherReport.current, units.speedUnit),
        other(weatherReport.current, units.speedUnit)
    ];
    for (const dom of childrenDOM)
        wetherDOM.appendChild(dom);
    return wetherDOM;
}
function forecast(forecastReport, tempUnit) {
    const forecastDOM = document.createElement('section');
    forecastDOM.className = 'forecast';
    const heading = document.createElement('h4');
    heading.textContent = 'Forecast';
    forecastDOM.appendChild(heading);
    for (let i = 0; i < forecastReport.forecastday.length; ++i) {
        const day = document.createElement('div');
        day.className = 'forecast-day';
        const temperature = document.createElement('div');
        temperature.className = 'temperature';
        temperature.textContent = `${forecastReport.forecastday[i].day['avgtemp_' + tempUnit]}${tempUnit.toUpperCase()}`;
        const icon = document.createElement('img');
        icon.className = 'icon';
        icon.src = forecastReport.forecastday[i].day.condition.icon;
        const date = document.createElement('div');
        date.className = 'date';
        date.textContent = forecastReport.forecastday[i].date;
        day.appendChild(temperature);
        day.appendChild(icon);
        day.appendChild(date);
        forecastDOM.appendChild(day);
    }
    return forecastDOM;
}
/**************************************************
 * Functions that create various weather data
 * components.
 **************************************************/
// Generate DOM for location data
function location(locationData) {
    const locationDOM = document.createElement('section');
    locationDOM.className = 'location';
    locationDOM.textContent = `${locationData.name}, ${locationData.country}`;
    return locationDOM;
}
// Generate DOM for condition data
function condition(conditionData) {
    const conditionDOM = document.createElement('section');
    conditionDOM.className = 'condition';
    const icon = document.createElement('img');
    icon.src = conditionData.icon;
    const text = document.createElement('p');
    text.textContent = conditionData.text;
    conditionDOM.appendChild(icon);
    conditionDOM.appendChild(text);
    return conditionDOM;
}
// Generate DOM for temperature data
function temperature(weatherReport, tempUnit) {
    const temperatureDOM = document.createElement('div');
    temperatureDOM.textContent = `${weatherReport['temp_' + tempUnit]}${tempUnit.toUpperCase()}`;
    temperatureDOM.className = 'temperature';
    return temperatureDOM;
}
// Generate DOM for wind data
function wind(weatherReport, speedUnit) {
    const windAngle = document.createElement('div');
    windAngle.textContent = `${weatherReport.wind_degree}°`;
    const windDir = document.createElement('div');
    windDir.textContent = weatherReport.wind_dir;
    const windSpeed = document.createElement('div');
    windSpeed.textContent = `${weatherReport['wind_' + speedUnit]}${speedUnit}`;
    windSpeed.className = 'wind-speed';
    const windInfo = document.createElement('section');
    windInfo.appendChild(windAngle);
    windInfo.appendChild(windDir);
    windInfo.appendChild(windSpeed);
    const heading = document.createElement('h3');
    heading.textContent = 'Wind';
    const windDOM = document.createElement('div');
    windDOM.className = 'wind';
    windDOM.appendChild(heading);
    windDOM.appendChild(windInfo);
    return windDOM;
}
// Generate DOM for other data
function other(weatherReport, speedUnit) {
    const container = document.createElement('section');
    container.className = 'other';
    const title = ['UV', 'Gust', 'Humidity', 'Day'];
    const keys = ['uv', 'gust_', 'humidity', 'is_day'];
    for (let i = 0; i < title.length; i++) {
        const heading = document.createElement('h4');
        heading.textContent = title[i];
        const value = document.createElement('div');
        if (keys[i] === 'gust_')
            value.textContent = weatherReport[keys[i] + speedUnit] + speedUnit;
        else
            value.textContent = weatherReport[keys[i]];
        value.className = title[i].toLowerCase();
        const section = document.createElement('section');
        section.appendChild(heading);
        section.appendChild(value);
        container.appendChild(section);
    }
    return container;
}


/***/ }),

/***/ "./src/scripts/index.ts":
/*!******************************!*\
  !*** ./src/scripts/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/scripts/dom.ts");
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather */ "./src/scripts/weather.ts");
/* harmony import */ var _toggle_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle-switch */ "./src/scripts/toggle-switch.ts");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");





let tempUnit = 'f';
let speedUnit = 'kph';
/**************************************************
 * Fetch and display weather report
 *************************************************/
const queryBtn = document.querySelector('.get-weather');
queryBtn.addEventListener('click', async (event) => {
    const locationInput = document.querySelector('.location-input');
    if (locationInput.validity.valueMissing === false) {
        showWeather(locationInput.value, { speedUnit, tempUnit });
    }
    else
        _dom__WEBPACK_IMPORTED_MODULE_0__["default"].showError('Please provide a location');
    event.preventDefault();
});
/**************************************************
 * Clear error message when error close button is
 * clicked.
 *************************************************/
const closeErrorBtn = document.querySelector('.close-error-btn');
closeErrorBtn.addEventListener('click', _dom__WEBPACK_IMPORTED_MODULE_0__["default"].closeError);
/**************************************************
 * Get weather report of location entered by user
 * and display results.
 *************************************************/
let weatherReport;
function showWeather(query, units) {
    _dom__WEBPACK_IMPORTED_MODULE_0__["default"].loading();
    const data = (0,_weather__WEBPACK_IMPORTED_MODULE_1__.getWeatherReport)(query);
    data
        .then((data) => {
        weatherReport = data;
        _dom__WEBPACK_IMPORTED_MODULE_0__["default"].showWeather(weatherReport, units);
        _dom__WEBPACK_IMPORTED_MODULE_0__["default"].closeError();
    })
        .catch((data) => {
        weatherReport = undefined;
        _dom__WEBPACK_IMPORTED_MODULE_0__["default"].showError(data.message);
    });
}
/**************************************************
 * Convert temperature or speed when their various
 * buttons are clicked.
 *************************************************/
// Temperature unit conversion button
const tempConverter = document.querySelector('.temp .toggle-switch-actuator');
tempConverter.addEventListener('click', (event) => {
    const currentTemp = document.querySelector('.current .temperature');
    if ('forecast' in weatherReport) {
        if (tempUnit === 'f') {
            tempUnit = 'c';
            const temperature = `${weatherReport.current.temp_c}`;
            currentTemp.textContent = `${parseInt(temperature)}°C`;
        }
        else {
            tempUnit = 'f';
            const temperature = `${weatherReport.current.temp_f}`;
            currentTemp.textContent = `${parseInt(temperature)}F`;
        }
        const forecast = document.querySelectorAll('.forecast-day');
        for (let i = 0; i < forecast.length; ++i) {
            const temp = forecast[i].querySelector('.temperature');
            const temperature = weatherReport.forecast.forecastday[i].day['avgtemp_' + tempUnit];
            if (tempUnit === 'c')
                temp.textContent = `${parseInt(temperature)}°C`;
            else
                temp.textContent = `${parseInt(temperature)}F`;
        }
    }
    event.stopPropagation();
});
// Speed unit conversion button
const speedConverter = document.querySelector('.speed .toggle-switch-actuator');
speedConverter.addEventListener('click', (event) => {
    if ('current' in weatherReport) {
        const windSpeed = document.querySelector('.wind .wind-speed');
        const gust = document.querySelector('.other .gust');
        if (speedUnit === 'kph')
            speedUnit = 'mph';
        else
            speedUnit = 'kph';
        windSpeed.textContent =
            weatherReport.current['wind_' + speedUnit] + speedUnit;
        gust.textContent = weatherReport.current['gust_' + speedUnit] + speedUnit;
    }
    event.stopPropagation();
});
showWeather('Accra, Ghana', { speedUnit, tempUnit });
_toggle_switch__WEBPACK_IMPORTED_MODULE_2__["default"].activate();


/***/ }),

/***/ "./src/scripts/toggle-switch.ts":
/*!**************************************!*\
  !*** ./src/scripts/toggle-switch.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

// Generate and returns new toggle switch dom
function newBtn(properties) {
    properties = processProperties(properties);
    const toggleSwitch = document.createElement('div');
    toggleSwitch.className = 'toggle-switch';
    toggleSwitch.style.cssText = switchCSS(properties.background.toggleSwitch, properties.size);
    const actuator = document.createElement('div');
    actuator.className = 'toggle-switch-actuator';
    actuator.style.cssText = actuatorCSS(properties.background.actuator, properties.size);
    actuator.addEventListener('click', (event) => {
        animate(toggleSwitch, event.target, properties);
    });
    toggleSwitch.appendChild(actuator);
    return toggleSwitch;
}
// Turns all elements in dom with "toggle-switch" class to switches
function activate(properties = undefined, dom = undefined) {
    let switches;
    properties = processProperties(properties);
    if (dom === undefined) {
        switches = document.querySelectorAll('.toggle-switch');
    }
    else {
        switches = dom.querySelectorAll('.toggle-switch');
    }
    for (let i = 0; i < switches.length; ++i) {
        switches[i].style.cssText = switchCSS(properties.background.toggleSwitch, properties.size);
        const actuator = switches[i].querySelector('.toggle-switch-actuator');
        actuator.style.cssText = actuatorCSS(properties.background.actuator, properties.size);
        actuator.addEventListener('click', (event) => {
            animate(switches[i], event.target, properties);
        });
    }
}
// Animate button on when triggered
function animate(toggleSwitch, actuator, properties) {
    const margin = actuator.style.marginLeft;
    if (margin === '' || margin === `${calc(3 * properties.size)}px`) {
        actuator.style.marginLeft = `${calc(17.5 * properties.size)}px`;
        toggleSwitch.style.background = properties.background.active;
    }
    else {
        actuator.style.marginLeft = `${calc(3 * properties.size)}px`;
        toggleSwitch.style.background = properties.background.toggleSwitch;
    }
}
// Check and fix missing properties
function processProperties(properties) {
    const defaultProperties = {
        size: 1.3,
        background: {
            active: '#3af',
            actuator: '#fff',
            toggleSwitch: '#aaa'
        }
    };
    Object.freeze(defaultProperties);
    if (!properties) {
        properties = structuredClone(defaultProperties);
    }
    else {
        if (properties.size)
            properties.size = calc(properties.size);
        if (!properties.background) {
            properties.background = defaultProperties.background;
        }
        else {
            Object.setPrototypeOf(properties.background, defaultProperties.background);
        }
    }
    Object.setPrototypeOf(properties, defaultProperties);
    return properties;
}
// Precision Calculated values to one decimal point
function calc(value) {
    const result = `${value.toFixed(1)}`;
    if (result[result.length - 1] === '0')
        return parseInt(value);
    return result;
}
// Get Switch CSS with an adjustment in values
function switchCSS(bg, size) {
    return `\
    background: ${bg};
    border-radius: ${10 * size}px;
    height: ${16 * size}px;
    width: ${32 * size}px;
    display: inline-flex;
    justify-content: left;
    align-items: center;
    margin: ${5 * size}px;
    padding: 0;
    transition: background .4s ease-in-out .3s`;
}
// Get Actuator CSS with an adjustment in values
function actuatorCSS(bg, size) {
    return `\
    border-radius: ${12 * size}px;
    background: ${bg};
    margin: ${calc(3 * size)}px ${calc(3 * size)}px;
    height: ${10 * size}px;
    width: ${10 * size}px;
    transition: margin-left .6s ease-in-out .1s;`;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ activate, newBtn });


/***/ }),

/***/ "./src/scripts/weather.ts":
/*!********************************!*\
  !*** ./src/scripts/weather.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeatherReport": () => (/* binding */ getWeatherReport)
/* harmony export */ });

async function getWeatherReport(location) {
    const apiKey = '7e0540f588d841fb852141356232104';
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json` +
        `?key=${apiKey}&q=${location}&days=3`;
    try {
        const response = await fetch(apiUrl, { mode: 'cors' });
        const data = await response.json();
        if (!response.ok || 'error' in data) {
            throw new Error(data.error.message);
        }
        return data;
    }
    catch (error) {
        return Promise.reject({ message: error.message });
    }
}


/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3a1f54bbe2d4d0d5f3a.jpg";

/***/ }),

/***/ "./src/images/icons/search.svg":
/*!*************************************!*\
  !*** ./src/images/icons/search.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2018e891aba99967ff6d.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vc3JjL3N0eWxlcy93ZWF0aGVyLmNzcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vc3JjL3NjcmlwdHMvZG9tLnRzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9zcmMvc2NyaXB0cy9pbmRleC50cyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vc3JjL3NjcmlwdHMvdG9nZ2xlLXN3aXRjaC50cyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vc3JjL3NjcmlwdHMvd2VhdGhlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWF0aGVyLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaWNvbnMvc2VhcmNoLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBXZWF0aGVyIERPTSBzdHlsZXNoZWV0Ki9cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBSb290IHN0eWxpbmdcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuOnJvb3Qge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgZml4ZWQgY2VudGVyL2NvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgLS1iYWNrZ3JvdW5kMTogI2ZmZjtcXG4gIC0tY29sb3I6ICMwMDA7XFxuICAtLWJvcmRlci1yYWRpdXM6IDAuNmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kOiAjZmZmNztcXG4gIGNvbG9yOiAjMzMzO1xcbiAgbWFyZ2luOiAwLjVlbTtcXG4gIHBhZGRpbmc6IDAuNGVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIEhlYWRlciBjb250ZW50IGFuZCBoZWFkZXIgZm9ybSBpbnB1dFxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjRlbTtcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gIG1hcmdpbjogMC4zZW0gMC4yZW0gMC4xZW07XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjhlbTtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggM3B4ICMzMzM5O1xcbn1cXG5cXG4udW5pdCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgY29sb3I6ICMzMzM7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMC40ZW0gMC42ZW0gMC40ZW0gMC40ZW07XFxufVxcblxcbi51bml0ID4gZGl2IHtcXG4gIG1hcmdpbjogMCAwLjhlbTtcXG59XFxuXFxuaGVhZGVyIGgxIHNwYW4ge1xcbiAgZm9udC1zaXplOiAxLjA1ZW07XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBnYXA6IDA7XFxuICBtYXJnaW46IDAuNWVtIDAuOGVtO1xcbiAgcGFkZGluZzogMC4xZW0gMC41ZW07XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgcGFkZGluZzogMC4yZW07XFxuICBmb250LXNpemU6IDEuMDZlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICM0NDQ7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5sb2NhdGlvbi1pbnB1dCB7XFxuICB3aWR0aDogMTIwcHg7XFxuICB0cmFuc2l0aW9uOiB3aWR0aCAuNXMgZWFzZS1pbi1vdXQgLjFzO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDA7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDAuMTZlbTtcXG59XFxuXFxuZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTsgIFxcbiAgd2lkdGg6IGNsYW1wKDEwMHB4LCAyNTBweCwgNDAwcHgpO1xcbn1cXG5cXG5mb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIHdpZHRoOiAxLjNlbTtcXG4gIGhlaWdodDogMS4zZW07XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIEVycm9yIHBvcHVwIG1lbnVcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmVycm9yIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiByZ2IoMjU1LCA5OSwgNzEpO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgOTksIDcxKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNmVtO1xcbiAgcGFkZGluZzogMC4xNWVtIDAuNWVtO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uZXJyb3IgLm1lc3NhZ2Uge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uY2xvc2UtZXJyb3ItYnRuIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogcmdiKDI1NSwgOTksIDcxKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZvbnQtc2l6ZTogMS42ZW07XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNsb3NlLWVycm9yLWJ0bjphY3RpdmUge1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIE1haW46ICB3ZWF0aGVyIGNvbnRlbnQgZGlzcGxheSBzdHlsaW5nXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG59XFxuXFxuaDQge1xcbiAgbWFyZ2luOiAwLjFlbTtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogTG9hZGluZyBhbmltYXRpb25cXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmxvYWRlciB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci13aWR0aDogNHB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogIzMzMyAjMzMzIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luOiAyLjNlbTtcXG4gIHdpZHRoOiAyZW07XFxuICBoZWlnaHQ6IDJlbTtcXG4gIGFuaW1hdGlvbjogc3BpbiAxLjVzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMEJBQTBCOztBQUcxQjs7bURBRW1EO0FBQ25EO0VBQ0UsZ0ZBQXdFO0VBQ3hFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsc0JBQXNCOztFQUV0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLE9BQU87RUFDUCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGlDQUFpQztBQUNuQzs7O0FBR0E7O21EQUVtRDtBQUNuRDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLE1BQU07RUFDTixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxvRUFBOEQ7RUFDOUQsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7OztBQUdBOzttREFFbUQ7QUFDbkQ7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiOzs7QUFHQTs7bURBRW1EO0FBQ25EO0VBQ0UsYUFBYTtFQUNiO3dCQUNzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtBQUNmOzs7QUFHQTs7bURBRW1EO0FBQ25EO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtFQUNWLFdBQVc7RUFDWCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogV2VhdGhlciBET00gc3R5bGVzaGVldCovXFxuQGltcG9ydCAnLi93ZWF0aGVyLmNzcyc7XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogUm9vdCBzdHlsaW5nXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbjpyb290IHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL2JhY2tncm91bmQuanBnJykgbm8tcmVwZWF0IGZpeGVkIGNlbnRlci9jb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIC0tYmFja2dyb3VuZDE6ICNmZmY7XFxuICAtLWNvbG9yOiAjMDAwO1xcbiAgLS1ib3JkZXItcmFkaXVzOiAwLjZlbTtcXG59XFxuXFxuYm9keSB7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZDogI2ZmZjc7XFxuICBjb2xvcjogIzMzMztcXG4gIG1hcmdpbjogMC41ZW07XFxuICBwYWRkaW5nOiAwLjRlbTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBIZWFkZXIgY29udGVudCBhbmQgaGVhZGVyIGZvcm0gaW5wdXRcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40ZW07XFxufVxcblxcbmhlYWRlciBoMSB7XFxuICBtYXJnaW46IDAuM2VtIDAuMmVtIDAuMWVtO1xcbiAgcGFkZGluZzogMC4yZW07XFxuICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS44ZW07XFxuICBjb2xvcjogIzMzMztcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDNweCAjMzMzOTtcXG59XFxuXFxuLnVuaXQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDAuNGVtIDAuNmVtIDAuNGVtIDAuNGVtO1xcbn1cXG5cXG4udW5pdCA+IGRpdiB7XFxuICBtYXJnaW46IDAgMC44ZW07XFxufVxcblxcbmhlYWRlciBoMSBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMS4wNWVtO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZ2FwOiAwO1xcbiAgbWFyZ2luOiAwLjVlbSAwLjhlbTtcXG4gIHBhZGRpbmc6IDAuMWVtIDAuNWVtO1xcbn1cXG5cXG5mb3JtIGlucHV0IHtcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbiAgZm9udC1zaXplOiAxLjA2ZW07XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjNDQ0O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ubG9jYXRpb24taW5wdXQge1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgdHJhbnNpdGlvbjogd2lkdGggLjVzIGVhc2UtaW4tb3V0IC4xcztcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDAwO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAwLjE2ZW07XFxufVxcblxcbmZvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7ICBcXG4gIHdpZHRoOiBjbGFtcCgxMDBweCwgMjUwcHgsIDQwMHB4KTtcXG59XFxuXFxuZm9ybSBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9pY29ucy9zZWFyY2guc3ZnJykgbm8tcmVwZWF0IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIHdpZHRoOiAxLjNlbTtcXG4gIGhlaWdodDogMS4zZW07XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIEVycm9yIHBvcHVwIG1lbnVcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmVycm9yIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiByZ2IoMjU1LCA5OSwgNzEpO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgOTksIDcxKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNmVtO1xcbiAgcGFkZGluZzogMC4xNWVtIDAuNWVtO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uZXJyb3IgLm1lc3NhZ2Uge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uY2xvc2UtZXJyb3ItYnRuIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogcmdiKDI1NSwgOTksIDcxKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZvbnQtc2l6ZTogMS42ZW07XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNsb3NlLWVycm9yLWJ0bjphY3RpdmUge1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIE1haW46ICB3ZWF0aGVyIGNvbnRlbnQgZGlzcGxheSBzdHlsaW5nXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG59XFxuXFxuaDQge1xcbiAgbWFyZ2luOiAwLjFlbTtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogTG9hZGluZyBhbmltYXRpb25cXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmxvYWRlciB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci13aWR0aDogNHB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogIzMzMyAjMzMzIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luOiAyLjNlbTtcXG4gIHdpZHRoOiAyZW07XFxuICBoZWlnaHQ6IDJlbTtcXG4gIGFuaW1hdGlvbjogc3BpbiAxLjVzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmN1cnJlbnQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggM3B4ICMzMzM5O1xcbiAgbWFyZ2luOiAxZW07XFxufVxcblxcbi5jb25kaXRpb24gaW1nIHtcXG4gIGhlaWdodDogN2VtO1xcbiAgd2lkdGg6IDdlbTtcXG4gIGJhY2tncm91bmQ6ICMzMzMxO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNWVtO1xcbn1cXG5cXG4uY29uZGl0aW9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG4uY3VycmVudCAudGVtcGVyYXR1cmUge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogNGVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggNXB4ICMzMzNhO1xcbn1cXG5cXG4ud2luZCA+IHNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgZ2FwOiAxZW07XFxufVxcblxcbi5vdGhlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXJvdy1nYXA6IDFlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMWVtO1xcbiAgYmFja2dyb3VuZDogIzMzMzE7XFxuICBib3JkZXItcmFkaXVzOiAyZW07XFxuICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICBiYWNrZ3JvdW5kOiAjMzMzMTtcXG4gIHBhZGRpbmc6IDEuMmVtIDEuNmVtO1xcbiAgbWFyZ2luOiAwLjhlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0ID4gKiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGdhcDogMS4yZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvd2VhdGhlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLDhCQUE4QjtFQUM5QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsU0FBUztFQUNULDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFFBQVE7QUFDVjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixxQ0FBcUM7RUFDckMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmN1cnJlbnQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggM3B4ICMzMzM5O1xcbiAgbWFyZ2luOiAxZW07XFxufVxcblxcbi5jb25kaXRpb24gaW1nIHtcXG4gIGhlaWdodDogN2VtO1xcbiAgd2lkdGg6IDdlbTtcXG4gIGJhY2tncm91bmQ6ICMzMzMxO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNWVtO1xcbn1cXG5cXG4uY29uZGl0aW9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG4uY3VycmVudCAudGVtcGVyYXR1cmUge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogNGVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggNXB4ICMzMzNhO1xcbn1cXG5cXG4ud2luZCA+IHNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgZ2FwOiAxZW07XFxufVxcblxcbi5vdGhlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXJvdy1nYXA6IDFlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMWVtO1xcbiAgYmFja2dyb3VuZDogIzMzMzE7XFxuICBib3JkZXItcmFkaXVzOiAyZW07XFxuICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICBiYWNrZ3JvdW5kOiAjMzMzMTtcXG4gIHBhZGRpbmc6IDEuMmVtIDEuNmVtO1xcbiAgbWFyZ2luOiAwLjhlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0ID4gKiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGdhcDogMS4yZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiJ3VzZSBzdHJpY3QnO1xuY29uc3QgZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKTtcbmNvbnN0IGVycm9yTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yIC5tZXNzYWdlJyk7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBGdW5jdGlvbnMgcHJvdmlkZWQgb3V0c2lkZSBtb2R1bGFyIHVzZVxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIHNob3dFcnJvcihtZXNzYWdlKSB7XG4gICAgICAgIGVycm9yLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIGVycm9yTXNnLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICAgICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIH0sXG4gICAgY2xvc2VFcnJvcigpIHtcbiAgICAgICAgZXJyb3Iuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBlcnJvck1zZy50ZXh0Q29udGVudCA9ICcnO1xuICAgIH0sXG4gICAgc2hvd1dlYXRoZXIod2VhdGhlclJlcG9ydCwgdW5pdHMpIHtcbiAgICAgICAgdGhpcy5jbGVhcldlYXRoZXIoKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlcih3ZWF0aGVyUmVwb3J0LCB1bml0cykpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGZvcmVjYXN0KHdlYXRoZXJSZXBvcnQuZm9yZWNhc3QsIHVuaXRzLnRlbXBVbml0KSk7XG4gICAgfSxcbiAgICBjbGVhcldlYXRoZXIoKSB7XG4gICAgICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgICB9LFxuICAgIGxvYWRpbmcoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJXZWF0aGVyKCk7XG4gICAgICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsb2FkZXIuY2xhc3NOYW1lID0gJ2xvYWRlcic7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQobG9hZGVyKTtcbiAgICB9XG59O1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiAgQ3JlYXRlcyBhbGwgRE9NIGVsZW1lbnRzIHVzaW5nIGRhdGEgb2YgY3VycmVudFxuICogIHdlYXRoZXIuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5mdW5jdGlvbiBjdXJyZW50V2VhdGhlcih3ZWF0aGVyUmVwb3J0LCB1bml0cykge1xuICAgIGNvbnN0IHdldGhlckRPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICB3ZXRoZXJET00uY2xhc3NOYW1lID0gJ2N1cnJlbnQnO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnQ3VycmVudGx5JztcbiAgICB3ZXRoZXJET00uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgY29uc3QgY2hpbGRyZW5ET00gPSBbXG4gICAgICAgIGxvY2F0aW9uKHdlYXRoZXJSZXBvcnQubG9jYXRpb24pLFxuICAgICAgICBjb25kaXRpb24od2VhdGhlclJlcG9ydC5jdXJyZW50LmNvbmRpdGlvbiksXG4gICAgICAgIHRlbXBlcmF0dXJlKHdlYXRoZXJSZXBvcnQuY3VycmVudCwgdW5pdHMudGVtcFVuaXQpLFxuICAgICAgICB3aW5kKHdlYXRoZXJSZXBvcnQuY3VycmVudCwgdW5pdHMuc3BlZWRVbml0KSxcbiAgICAgICAgb3RoZXIod2VhdGhlclJlcG9ydC5jdXJyZW50LCB1bml0cy5zcGVlZFVuaXQpXG4gICAgXTtcbiAgICBmb3IgKGNvbnN0IGRvbSBvZiBjaGlsZHJlbkRPTSlcbiAgICAgICAgd2V0aGVyRE9NLmFwcGVuZENoaWxkKGRvbSk7XG4gICAgcmV0dXJuIHdldGhlckRPTTtcbn1cbmZ1bmN0aW9uIGZvcmVjYXN0KGZvcmVjYXN0UmVwb3J0LCB0ZW1wVW5pdCkge1xuICAgIGNvbnN0IGZvcmVjYXN0RE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGZvcmVjYXN0RE9NLmNsYXNzTmFtZSA9ICdmb3JlY2FzdCc7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdGb3JlY2FzdCc7XG4gICAgZm9yZWNhc3RET00uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JlY2FzdFJlcG9ydC5mb3JlY2FzdGRheS5sZW5ndGg7ICsraSkge1xuICAgICAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF5LmNsYXNzTmFtZSA9ICdmb3JlY2FzdC1kYXknO1xuICAgICAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZW1wZXJhdHVyZS5jbGFzc05hbWUgPSAndGVtcGVyYXR1cmUnO1xuICAgICAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0UmVwb3J0LmZvcmVjYXN0ZGF5W2ldLmRheVsnYXZndGVtcF8nICsgdGVtcFVuaXRdfSR7dGVtcFVuaXQudG9VcHBlckNhc2UoKX1gO1xuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGljb24uY2xhc3NOYW1lID0gJ2ljb24nO1xuICAgICAgICBpY29uLnNyYyA9IGZvcmVjYXN0UmVwb3J0LmZvcmVjYXN0ZGF5W2ldLmRheS5jb25kaXRpb24uaWNvbjtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXRlLmNsYXNzTmFtZSA9ICdkYXRlJztcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGZvcmVjYXN0UmVwb3J0LmZvcmVjYXN0ZGF5W2ldLmRhdGU7XG4gICAgICAgIGRheS5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZSk7XG4gICAgICAgIGRheS5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgZGF5LmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICBmb3JlY2FzdERPTS5hcHBlbmRDaGlsZChkYXkpO1xuICAgIH1cbiAgICByZXR1cm4gZm9yZWNhc3RET007XG59XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEZ1bmN0aW9ucyB0aGF0IGNyZWF0ZSB2YXJpb3VzIHdlYXRoZXIgZGF0YVxuICogY29tcG9uZW50cy5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8vIEdlbmVyYXRlIERPTSBmb3IgbG9jYXRpb24gZGF0YVxuZnVuY3Rpb24gbG9jYXRpb24obG9jYXRpb25EYXRhKSB7XG4gICAgY29uc3QgbG9jYXRpb25ET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgbG9jYXRpb25ET00uY2xhc3NOYW1lID0gJ2xvY2F0aW9uJztcbiAgICBsb2NhdGlvbkRPTS50ZXh0Q29udGVudCA9IGAke2xvY2F0aW9uRGF0YS5uYW1lfSwgJHtsb2NhdGlvbkRhdGEuY291bnRyeX1gO1xuICAgIHJldHVybiBsb2NhdGlvbkRPTTtcbn1cbi8vIEdlbmVyYXRlIERPTSBmb3IgY29uZGl0aW9uIGRhdGFcbmZ1bmN0aW9uIGNvbmRpdGlvbihjb25kaXRpb25EYXRhKSB7XG4gICAgY29uc3QgY29uZGl0aW9uRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbmRpdGlvbkRPTS5jbGFzc05hbWUgPSAnY29uZGl0aW9uJztcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaWNvbi5zcmMgPSBjb25kaXRpb25EYXRhLmljb247XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gY29uZGl0aW9uRGF0YS50ZXh0O1xuICAgIGNvbmRpdGlvbkRPTS5hcHBlbmRDaGlsZChpY29uKTtcbiAgICBjb25kaXRpb25ET00uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgcmV0dXJuIGNvbmRpdGlvbkRPTTtcbn1cbi8vIEdlbmVyYXRlIERPTSBmb3IgdGVtcGVyYXR1cmUgZGF0YVxuZnVuY3Rpb24gdGVtcGVyYXR1cmUod2VhdGhlclJlcG9ydCwgdGVtcFVuaXQpIHtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZURPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlbXBlcmF0dXJlRE9NLnRleHRDb250ZW50ID0gYCR7d2VhdGhlclJlcG9ydFsndGVtcF8nICsgdGVtcFVuaXRdfSR7dGVtcFVuaXQudG9VcHBlckNhc2UoKX1gO1xuICAgIHRlbXBlcmF0dXJlRE9NLmNsYXNzTmFtZSA9ICd0ZW1wZXJhdHVyZSc7XG4gICAgcmV0dXJuIHRlbXBlcmF0dXJlRE9NO1xufVxuLy8gR2VuZXJhdGUgRE9NIGZvciB3aW5kIGRhdGFcbmZ1bmN0aW9uIHdpbmQod2VhdGhlclJlcG9ydCwgc3BlZWRVbml0KSB7XG4gICAgY29uc3Qgd2luZEFuZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2luZEFuZ2xlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlclJlcG9ydC53aW5kX2RlZ3JlZX3CsGA7XG4gICAgY29uc3Qgd2luZERpciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdpbmREaXIudGV4dENvbnRlbnQgPSB3ZWF0aGVyUmVwb3J0LndpbmRfZGlyO1xuICAgIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJSZXBvcnRbJ3dpbmRfJyArIHNwZWVkVW5pdF19JHtzcGVlZFVuaXR9YDtcbiAgICB3aW5kU3BlZWQuY2xhc3NOYW1lID0gJ3dpbmQtc3BlZWQnO1xuICAgIGNvbnN0IHdpbmRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHdpbmRJbmZvLmFwcGVuZENoaWxkKHdpbmRBbmdsZSk7XG4gICAgd2luZEluZm8uYXBwZW5kQ2hpbGQod2luZERpcik7XG4gICAgd2luZEluZm8uYXBwZW5kQ2hpbGQod2luZFNwZWVkKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1dpbmQnO1xuICAgIGNvbnN0IHdpbmRET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3aW5kRE9NLmNsYXNzTmFtZSA9ICd3aW5kJztcbiAgICB3aW5kRE9NLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIHdpbmRET00uYXBwZW5kQ2hpbGQod2luZEluZm8pO1xuICAgIHJldHVybiB3aW5kRE9NO1xufVxuLy8gR2VuZXJhdGUgRE9NIGZvciBvdGhlciBkYXRhXG5mdW5jdGlvbiBvdGhlcih3ZWF0aGVyUmVwb3J0LCBzcGVlZFVuaXQpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdvdGhlcic7XG4gICAgY29uc3QgdGl0bGUgPSBbJ1VWJywgJ0d1c3QnLCAnSHVtaWRpdHknLCAnRGF5J107XG4gICAgY29uc3Qga2V5cyA9IFsndXYnLCAnZ3VzdF8nLCAnaHVtaWRpdHknLCAnaXNfZGF5J107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IHRpdGxlW2ldO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpZiAoa2V5c1tpXSA9PT0gJ2d1c3RfJylcbiAgICAgICAgICAgIHZhbHVlLnRleHRDb250ZW50ID0gd2VhdGhlclJlcG9ydFtrZXlzW2ldICsgc3BlZWRVbml0XSArIHNwZWVkVW5pdDtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdmFsdWUudGV4dENvbnRlbnQgPSB3ZWF0aGVyUmVwb3J0W2tleXNbaV1dO1xuICAgICAgICB2YWx1ZS5jbGFzc05hbWUgPSB0aXRsZVtpXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHZhbHVlKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICAgIH1cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IERPTSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyBnZXRXZWF0aGVyUmVwb3J0IH0gZnJvbSAnLi93ZWF0aGVyJztcbmltcG9ydCB0b2dnbGVTd2l0Y2ggZnJvbSAnLi90b2dnbGUtc3dpdGNoJztcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLmNzcyc7XG5sZXQgdGVtcFVuaXQgPSAnZic7XG5sZXQgc3BlZWRVbml0ID0gJ2twaCc7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEZldGNoIGFuZCBkaXNwbGF5IHdlYXRoZXIgcmVwb3J0XG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmNvbnN0IHF1ZXJ5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdldC13ZWF0aGVyJyk7XG5xdWVyeUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGxvY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24taW5wdXQnKTtcbiAgICBpZiAobG9jYXRpb25JbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgIHNob3dXZWF0aGVyKGxvY2F0aW9uSW5wdXQudmFsdWUsIHsgc3BlZWRVbml0LCB0ZW1wVW5pdCB9KTtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgICBET00uc2hvd0Vycm9yKCdQbGVhc2UgcHJvdmlkZSBhIGxvY2F0aW9uJyk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBDbGVhciBlcnJvciBtZXNzYWdlIHdoZW4gZXJyb3IgY2xvc2UgYnV0dG9uIGlzXG4gKiBjbGlja2VkLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5jb25zdCBjbG9zZUVycm9yQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWVycm9yLWJ0bicpO1xuY2xvc2VFcnJvckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTS5jbG9zZUVycm9yKTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogR2V0IHdlYXRoZXIgcmVwb3J0IG9mIGxvY2F0aW9uIGVudGVyZWQgYnkgdXNlclxuICogYW5kIGRpc3BsYXkgcmVzdWx0cy5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xubGV0IHdlYXRoZXJSZXBvcnQ7XG5mdW5jdGlvbiBzaG93V2VhdGhlcihxdWVyeSwgdW5pdHMpIHtcbiAgICBET00ubG9hZGluZygpO1xuICAgIGNvbnN0IGRhdGEgPSBnZXRXZWF0aGVyUmVwb3J0KHF1ZXJ5KTtcbiAgICBkYXRhXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHdlYXRoZXJSZXBvcnQgPSBkYXRhO1xuICAgICAgICBET00uc2hvd1dlYXRoZXIod2VhdGhlclJlcG9ydCwgdW5pdHMpO1xuICAgICAgICBET00uY2xvc2VFcnJvcigpO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZGF0YSkgPT4ge1xuICAgICAgICB3ZWF0aGVyUmVwb3J0ID0gdW5kZWZpbmVkO1xuICAgICAgICBET00uc2hvd0Vycm9yKGRhdGEubWVzc2FnZSk7XG4gICAgfSk7XG59XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIENvbnZlcnQgdGVtcGVyYXR1cmUgb3Igc3BlZWQgd2hlbiB0aGVpciB2YXJpb3VzXG4gKiBidXR0b25zIGFyZSBjbGlja2VkLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vLyBUZW1wZXJhdHVyZSB1bml0IGNvbnZlcnNpb24gYnV0dG9uXG5jb25zdCB0ZW1wQ29udmVydGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAgLnRvZ2dsZS1zd2l0Y2gtYWN0dWF0b3InKTtcbnRlbXBDb252ZXJ0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50IC50ZW1wZXJhdHVyZScpO1xuICAgIGlmICgnZm9yZWNhc3QnIGluIHdlYXRoZXJSZXBvcnQpIHtcbiAgICAgICAgaWYgKHRlbXBVbml0ID09PSAnZicpIHtcbiAgICAgICAgICAgIHRlbXBVbml0ID0gJ2MnO1xuICAgICAgICAgICAgY29uc3QgdGVtcGVyYXR1cmUgPSBgJHt3ZWF0aGVyUmVwb3J0LmN1cnJlbnQudGVtcF9jfWA7XG4gICAgICAgICAgICBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IGAke3BhcnNlSW50KHRlbXBlcmF0dXJlKX3CsENgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGVtcFVuaXQgPSAnZic7XG4gICAgICAgICAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGAke3dlYXRoZXJSZXBvcnQuY3VycmVudC50ZW1wX2Z9YDtcbiAgICAgICAgICAgIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gYCR7cGFyc2VJbnQodGVtcGVyYXR1cmUpfUZgO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcmVjYXN0LWRheScpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcmVjYXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gZm9yZWNhc3RbaV0ucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlJyk7XG4gICAgICAgICAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IHdlYXRoZXJSZXBvcnQuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Wydhdmd0ZW1wXycgKyB0ZW1wVW5pdF07XG4gICAgICAgICAgICBpZiAodGVtcFVuaXQgPT09ICdjJylcbiAgICAgICAgICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7cGFyc2VJbnQodGVtcGVyYXR1cmUpfcKwQ2A7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAke3BhcnNlSW50KHRlbXBlcmF0dXJlKX1GYDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn0pO1xuLy8gU3BlZWQgdW5pdCBjb252ZXJzaW9uIGJ1dHRvblxuY29uc3Qgc3BlZWRDb252ZXJ0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BlZWQgLnRvZ2dsZS1zd2l0Y2gtYWN0dWF0b3InKTtcbnNwZWVkQ29udmVydGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKCdjdXJyZW50JyBpbiB3ZWF0aGVyUmVwb3J0KSB7XG4gICAgICAgIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kIC53aW5kLXNwZWVkJyk7XG4gICAgICAgIGNvbnN0IGd1c3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3RoZXIgLmd1c3QnKTtcbiAgICAgICAgaWYgKHNwZWVkVW5pdCA9PT0gJ2twaCcpXG4gICAgICAgICAgICBzcGVlZFVuaXQgPSAnbXBoJztcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgc3BlZWRVbml0ID0gJ2twaCc7XG4gICAgICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICB3ZWF0aGVyUmVwb3J0LmN1cnJlbnRbJ3dpbmRfJyArIHNwZWVkVW5pdF0gKyBzcGVlZFVuaXQ7XG4gICAgICAgIGd1c3QudGV4dENvbnRlbnQgPSB3ZWF0aGVyUmVwb3J0LmN1cnJlbnRbJ2d1c3RfJyArIHNwZWVkVW5pdF0gKyBzcGVlZFVuaXQ7XG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufSk7XG5zaG93V2VhdGhlcignQWNjcmEsIEdoYW5hJywgeyBzcGVlZFVuaXQsIHRlbXBVbml0IH0pO1xudG9nZ2xlU3dpdGNoLmFjdGl2YXRlKCk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBHZW5lcmF0ZSBhbmQgcmV0dXJucyBuZXcgdG9nZ2xlIHN3aXRjaCBkb21cbmZ1bmN0aW9uIG5ld0J0bihwcm9wZXJ0aWVzKSB7XG4gICAgcHJvcGVydGllcyA9IHByb2Nlc3NQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICAgIGNvbnN0IHRvZ2dsZVN3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZ2dsZVN3aXRjaC5jbGFzc05hbWUgPSAndG9nZ2xlLXN3aXRjaCc7XG4gICAgdG9nZ2xlU3dpdGNoLnN0eWxlLmNzc1RleHQgPSBzd2l0Y2hDU1MocHJvcGVydGllcy5iYWNrZ3JvdW5kLnRvZ2dsZVN3aXRjaCwgcHJvcGVydGllcy5zaXplKTtcbiAgICBjb25zdCBhY3R1YXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFjdHVhdG9yLmNsYXNzTmFtZSA9ICd0b2dnbGUtc3dpdGNoLWFjdHVhdG9yJztcbiAgICBhY3R1YXRvci5zdHlsZS5jc3NUZXh0ID0gYWN0dWF0b3JDU1MocHJvcGVydGllcy5iYWNrZ3JvdW5kLmFjdHVhdG9yLCBwcm9wZXJ0aWVzLnNpemUpO1xuICAgIGFjdHVhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGFuaW1hdGUodG9nZ2xlU3dpdGNoLCBldmVudC50YXJnZXQsIHByb3BlcnRpZXMpO1xuICAgIH0pO1xuICAgIHRvZ2dsZVN3aXRjaC5hcHBlbmRDaGlsZChhY3R1YXRvcik7XG4gICAgcmV0dXJuIHRvZ2dsZVN3aXRjaDtcbn1cbi8vIFR1cm5zIGFsbCBlbGVtZW50cyBpbiBkb20gd2l0aCBcInRvZ2dsZS1zd2l0Y2hcIiBjbGFzcyB0byBzd2l0Y2hlc1xuZnVuY3Rpb24gYWN0aXZhdGUocHJvcGVydGllcyA9IHVuZGVmaW5lZCwgZG9tID0gdW5kZWZpbmVkKSB7XG4gICAgbGV0IHN3aXRjaGVzO1xuICAgIHByb3BlcnRpZXMgPSBwcm9jZXNzUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICBpZiAoZG9tID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3dpdGNoZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9nZ2xlLXN3aXRjaCcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3dpdGNoZXMgPSBkb20ucXVlcnlTZWxlY3RvckFsbCgnLnRvZ2dsZS1zd2l0Y2gnKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzd2l0Y2hlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICBzd2l0Y2hlc1tpXS5zdHlsZS5jc3NUZXh0ID0gc3dpdGNoQ1NTKHByb3BlcnRpZXMuYmFja2dyb3VuZC50b2dnbGVTd2l0Y2gsIHByb3BlcnRpZXMuc2l6ZSk7XG4gICAgICAgIGNvbnN0IGFjdHVhdG9yID0gc3dpdGNoZXNbaV0ucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1zd2l0Y2gtYWN0dWF0b3InKTtcbiAgICAgICAgYWN0dWF0b3Iuc3R5bGUuY3NzVGV4dCA9IGFjdHVhdG9yQ1NTKHByb3BlcnRpZXMuYmFja2dyb3VuZC5hY3R1YXRvciwgcHJvcGVydGllcy5zaXplKTtcbiAgICAgICAgYWN0dWF0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGFuaW1hdGUoc3dpdGNoZXNbaV0sIGV2ZW50LnRhcmdldCwgcHJvcGVydGllcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vIEFuaW1hdGUgYnV0dG9uIG9uIHdoZW4gdHJpZ2dlcmVkXG5mdW5jdGlvbiBhbmltYXRlKHRvZ2dsZVN3aXRjaCwgYWN0dWF0b3IsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBtYXJnaW4gPSBhY3R1YXRvci5zdHlsZS5tYXJnaW5MZWZ0O1xuICAgIGlmIChtYXJnaW4gPT09ICcnIHx8IG1hcmdpbiA9PT0gYCR7Y2FsYygzICogcHJvcGVydGllcy5zaXplKX1weGApIHtcbiAgICAgICAgYWN0dWF0b3Iuc3R5bGUubWFyZ2luTGVmdCA9IGAke2NhbGMoMTcuNSAqIHByb3BlcnRpZXMuc2l6ZSl9cHhgO1xuICAgICAgICB0b2dnbGVTd2l0Y2guc3R5bGUuYmFja2dyb3VuZCA9IHByb3BlcnRpZXMuYmFja2dyb3VuZC5hY3RpdmU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhY3R1YXRvci5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7Y2FsYygzICogcHJvcGVydGllcy5zaXplKX1weGA7XG4gICAgICAgIHRvZ2dsZVN3aXRjaC5zdHlsZS5iYWNrZ3JvdW5kID0gcHJvcGVydGllcy5iYWNrZ3JvdW5kLnRvZ2dsZVN3aXRjaDtcbiAgICB9XG59XG4vLyBDaGVjayBhbmQgZml4IG1pc3NpbmcgcHJvcGVydGllc1xuZnVuY3Rpb24gcHJvY2Vzc1Byb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgICAgICBzaXplOiAxLjMsXG4gICAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgICAgIGFjdGl2ZTogJyMzYWYnLFxuICAgICAgICAgICAgYWN0dWF0b3I6ICcjZmZmJyxcbiAgICAgICAgICAgIHRvZ2dsZVN3aXRjaDogJyNhYWEnXG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9iamVjdC5mcmVlemUoZGVmYXVsdFByb3BlcnRpZXMpO1xuICAgIGlmICghcHJvcGVydGllcykge1xuICAgICAgICBwcm9wZXJ0aWVzID0gc3RydWN0dXJlZENsb25lKGRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLnNpemUpXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLnNpemUgPSBjYWxjKHByb3BlcnRpZXMuc2l6ZSk7XG4gICAgICAgIGlmICghcHJvcGVydGllcy5iYWNrZ3JvdW5kKSB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzLmJhY2tncm91bmQgPSBkZWZhdWx0UHJvcGVydGllcy5iYWNrZ3JvdW5kO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHByb3BlcnRpZXMuYmFja2dyb3VuZCwgZGVmYXVsdFByb3BlcnRpZXMuYmFja2dyb3VuZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgICByZXR1cm4gcHJvcGVydGllcztcbn1cbi8vIFByZWNpc2lvbiBDYWxjdWxhdGVkIHZhbHVlcyB0byBvbmUgZGVjaW1hbCBwb2ludFxuZnVuY3Rpb24gY2FsYyh2YWx1ZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGAke3ZhbHVlLnRvRml4ZWQoMSl9YDtcbiAgICBpZiAocmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSA9PT0gJzAnKVxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG4vLyBHZXQgU3dpdGNoIENTUyB3aXRoIGFuIGFkanVzdG1lbnQgaW4gdmFsdWVzXG5mdW5jdGlvbiBzd2l0Y2hDU1MoYmcsIHNpemUpIHtcbiAgICByZXR1cm4gYFxcXG4gICAgYmFja2dyb3VuZDogJHtiZ307XG4gICAgYm9yZGVyLXJhZGl1czogJHsxMCAqIHNpemV9cHg7XG4gICAgaGVpZ2h0OiAkezE2ICogc2l6ZX1weDtcbiAgICB3aWR0aDogJHszMiAqIHNpemV9cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAkezUgKiBzaXplfXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuNHMgZWFzZS1pbi1vdXQgLjNzYDtcbn1cbi8vIEdldCBBY3R1YXRvciBDU1Mgd2l0aCBhbiBhZGp1c3RtZW50IGluIHZhbHVlc1xuZnVuY3Rpb24gYWN0dWF0b3JDU1MoYmcsIHNpemUpIHtcbiAgICByZXR1cm4gYFxcXG4gICAgYm9yZGVyLXJhZGl1czogJHsxMiAqIHNpemV9cHg7XG4gICAgYmFja2dyb3VuZDogJHtiZ307XG4gICAgbWFyZ2luOiAke2NhbGMoMyAqIHNpemUpfXB4ICR7Y2FsYygzICogc2l6ZSl9cHg7XG4gICAgaGVpZ2h0OiAkezEwICogc2l6ZX1weDtcbiAgICB3aWR0aDogJHsxMCAqIHNpemV9cHg7XG4gICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgLjZzIGVhc2UtaW4tb3V0IC4xcztgO1xufVxuZXhwb3J0IGRlZmF1bHQgeyBhY3RpdmF0ZSwgbmV3QnRuIH07XG4iLCIndXNlIHN0cmljdCc7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlclJlcG9ydChsb2NhdGlvbikge1xuICAgIGNvbnN0IGFwaUtleSA9ICc3ZTA1NDBmNTg4ZDg0MWZiODUyMTQxMzU2MjMyMTA0JztcbiAgICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbmAgK1xuICAgICAgICBgP2tleT0ke2FwaUtleX0mcT0ke2xvY2F0aW9ufSZkYXlzPTNgO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vayB8fCAnZXJyb3InIGluIGRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihkYXRhLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=