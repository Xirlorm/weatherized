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
    showWeather(weatherData, units) {
        this.clearWeather();
        main.appendChild(currentWeather(weatherData, units));
        main.appendChild(forecast(weatherData.forecast, units.tempUnit));
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
function currentWeather(weatherData, units) {
    const wetherDOM = document.createElement('section');
    wetherDOM.className = 'current';
    const heading = document.createElement('h4');
    heading.textContent = 'Currently';
    wetherDOM.appendChild(heading);
    const childrenDOM = [
        location(weatherData.location),
        condition(weatherData.current.condition),
        temperature(weatherData.current, units.tempUnit),
        wind(weatherData.current, units.speedUnit),
        other(weatherData.current, units.speedUnit)
    ];
    for (const dom of childrenDOM)
        wetherDOM.appendChild(dom);
    return wetherDOM;
}
function forecast(weatherData, tempUnit) {
    const forecastDOM = document.createElement('section');
    forecastDOM.className = 'forecast';
    const heading = document.createElement('h4');
    heading.textContent = 'Forecast';
    forecastDOM.appendChild(heading);
    for (let i = 0; i < weatherData.forecastday.length; ++i) {
        const day = document.createElement('div');
        day.className = 'forecast-day';
        const temperature = document.createElement('div');
        temperature.className = 'temperature';
        temperature.textContent = `${weatherData.forecastday[i].day['avgtemp_' + tempUnit]}${tempUnit.toUpperCase()}`;
        const icon = document.createElement('img');
        icon.className = 'icon';
        icon.src = weatherData.forecastday[i].day.condition.icon;
        const date = document.createElement('div');
        date.className = 'date';
        date.textContent = weatherData.forecastday[i].date;
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
function temperature(weatherData, tempUnit) {
    const temperatureDOM = document.createElement('div');
    temperatureDOM.textContent = `${weatherData['temp_' + tempUnit]}${tempUnit.toUpperCase()}`;
    temperatureDOM.className = 'temperature';
    return temperatureDOM;
}
// Generate DOM for wind data
function wind(weatherData, speedUnit) {
    const windAngle = document.createElement('div');
    windAngle.textContent = `${weatherData.wind_degree}°`;
    const windDir = document.createElement('div');
    windDir.textContent = weatherData.wind_dir;
    const windSpeed = document.createElement('div');
    windSpeed.textContent = `${weatherData['wind_' + speedUnit]}${speedUnit}`;
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
function other(weatherData, speedUnit) {
    const container = document.createElement('section');
    container.className = 'other';
    const title = ['UV', 'Gust', 'Humidity', 'Day'];
    const keys = ['uv', 'gust_', 'humidity', 'is_day'];
    for (let i = 0; i < title.length; i++) {
        const heading = document.createElement('h4');
        heading.textContent = title[i];
        const value = document.createElement('div');
        if (keys[i] === 'gust_')
            value.textContent = weatherData[keys[i] + speedUnit] + speedUnit;
        else
            value.textContent = weatherData[keys[i]];
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
        _dom__WEBPACK_IMPORTED_MODULE_0__["default"].showError('Search item not provided');
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
        _dom__WEBPACK_IMPORTED_MODULE_0__["default"].showWeather(data, units);
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
        if (!response.ok) {
            throw new Error('Network response was not bad');
        }
        const data = await response.json();
        if ('error' in data) {
            throw new Error(data.error.message);
        }
        return data;
    }
    catch (error) {
        return { message: error.message };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9zcmMvc3R5bGVzL3dlYXRoZXIuY3NzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9zcmMvc2NyaXB0cy9kb20udHMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL3NyYy9zY3JpcHRzL2luZGV4LnRzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9zcmMvc2NyaXB0cy90b2dnbGUtc3dpdGNoLnRzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9zcmMvc2NyaXB0cy93ZWF0aGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dlYXRoZXIuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9pY29ucy9zZWFyY2guc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFdlYXRoZXIgRE9NIHN0eWxlc2hlZXQqL1xcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIFJvb3Qgc3R5bGluZ1xcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG46cm9vdCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBmaXhlZCBjZW50ZXIvY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAtLWJhY2tncm91bmQxOiAjZmZmO1xcbiAgLS1jb2xvcjogIzAwMDtcXG4gIC0tYm9yZGVyLXJhZGl1czogMC42ZW07XFxufVxcblxcbmJvZHkge1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQ6ICNmZmY3O1xcbiAgY29sb3I6ICMzMzM7XFxuICBtYXJnaW46IDAuNWVtO1xcbiAgcGFkZGluZzogMC40ZW07XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogSGVhZGVyIGNvbnRlbnQgYW5kIGhlYWRlciBmb3JtIGlucHV0XFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNGVtO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgbWFyZ2luOiAwLjNlbSAwLjJlbSAwLjFlbTtcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbiAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuOGVtO1xcbiAgY29sb3I6ICMzMzM7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAzcHggIzMzMzk7XFxufVxcblxcbi51bml0IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjb2xvcjogIzMzMztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwLjRlbSAwLjZlbSAwLjRlbSAwLjRlbTtcXG59XFxuXFxuLnVuaXQgPiBkaXYge1xcbiAgbWFyZ2luOiAwIDAuOGVtO1xcbn1cXG5cXG5oZWFkZXIgaDEgc3BhbiB7XFxuICBmb250LXNpemU6IDEuMDVlbTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGdhcDogMDtcXG4gIG1hcmdpbjogMC41ZW0gMC44ZW07XFxuICBwYWRkaW5nOiAwLjFlbSAwLjVlbTtcXG59XFxuXFxuZm9ybSBpbnB1dCB7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIGZvbnQtc2l6ZTogMS4wNmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5mb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzQ0NDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmxvY2F0aW9uLWlucHV0IHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIHRyYW5zaXRpb246IHdpZHRoIC41cyBlYXNlLWluLW91dCAuMXM7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwMDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMC4xNmVtO1xcbn1cXG5cXG5mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lOyAgXFxuICB3aWR0aDogY2xhbXAoMTAwcHgsIDI1MHB4LCA0MDBweCk7XFxufVxcblxcbmZvcm0gaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgd2lkdGg6IDEuM2VtO1xcbiAgaGVpZ2h0OiAxLjNlbTtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogRXJyb3IgcG9wdXAgbWVudVxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uZXJyb3Ige1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHJnYigyNTUsIDk5LCA3MSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCA5OSwgNzEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBtYXJnaW4tbGVmdDogMC42ZW07XFxuICBwYWRkaW5nOiAwLjE1ZW0gMC41ZW07XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5lcnJvciAubWVzc2FnZSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5jbG9zZS1lcnJvci1idG4ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMjU1LCA5OSwgNzEpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1zaXplOiAxLjZlbTtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1yaWdodDogMC4yZW07XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY2xvc2UtZXJyb3ItYnRuOmFjdGl2ZSB7XFxuICBjb2xvcjogIzMzMztcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogTWFpbjogIHdlYXRoZXIgY29udGVudCBkaXNwbGF5IHN0eWxpbmdcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgZmxleC1iYXNpczogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMmVtO1xcbn1cXG5cXG5oNCB7XFxuICBtYXJnaW46IDAuMWVtO1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBMb2FkaW5nIGFuaW1hdGlvblxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4ubG9hZGVyIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiAjMzMzICMzMzMgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW46IDIuM2VtO1xcbiAgd2lkdGg6IDJlbTtcXG4gIGhlaWdodDogMmVtO1xcbiAgYW5pbWF0aW9uOiBzcGluIDEuNXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwwQkFBMEI7O0FBRzFCOzttREFFbUQ7QUFDbkQ7RUFDRSxnRkFBd0U7RUFDeEUsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixzQkFBc0I7O0VBRXRCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQ0FBbUM7RUFDbkMsaUNBQWlDO0FBQ25DOzs7QUFHQTs7bURBRW1EO0FBQ25EO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsTUFBTTtFQUNOLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG9FQUE4RDtFQUM5RCx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7O0FBR0E7O21EQUVtRDtBQUNuRDtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtDQUFrQztFQUNsQyxtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7OztBQUdBOzttREFFbUQ7QUFDbkQ7RUFDRSxhQUFhO0VBQ2I7d0JBQ3NCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7OztBQUdBOzttREFFbUQ7QUFDbkQ7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1YsV0FBVztFQUNYLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBXZWF0aGVyIERPTSBzdHlsZXNoZWV0Ki9cXG5AaW1wb3J0ICcuL3dlYXRoZXIuY3NzJztcXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBSb290IHN0eWxpbmdcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuOnJvb3Qge1xcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvYmFja2dyb3VuZC5qcGcnKSBuby1yZXBlYXQgZml4ZWQgY2VudGVyL2NvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgLS1iYWNrZ3JvdW5kMTogI2ZmZjtcXG4gIC0tY29sb3I6ICMwMDA7XFxuICAtLWJvcmRlci1yYWRpdXM6IDAuNmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kOiAjZmZmNztcXG4gIGNvbG9yOiAjMzMzO1xcbiAgbWFyZ2luOiAwLjVlbTtcXG4gIHBhZGRpbmc6IDAuNGVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIEhlYWRlciBjb250ZW50IGFuZCBoZWFkZXIgZm9ybSBpbnB1dFxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjRlbTtcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gIG1hcmdpbjogMC4zZW0gMC4yZW0gMC4xZW07XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjhlbTtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggM3B4ICMzMzM5O1xcbn1cXG5cXG4udW5pdCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgY29sb3I6ICMzMzM7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMC40ZW0gMC42ZW0gMC40ZW0gMC40ZW07XFxufVxcblxcbi51bml0ID4gZGl2IHtcXG4gIG1hcmdpbjogMCAwLjhlbTtcXG59XFxuXFxuaGVhZGVyIGgxIHNwYW4ge1xcbiAgZm9udC1zaXplOiAxLjA1ZW07XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBnYXA6IDA7XFxuICBtYXJnaW46IDAuNWVtIDAuOGVtO1xcbiAgcGFkZGluZzogMC4xZW0gMC41ZW07XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgcGFkZGluZzogMC4yZW07XFxuICBmb250LXNpemU6IDEuMDZlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICM0NDQ7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5sb2NhdGlvbi1pbnB1dCB7XFxuICB3aWR0aDogMTIwcHg7XFxuICB0cmFuc2l0aW9uOiB3aWR0aCAuNXMgZWFzZS1pbi1vdXQgLjFzO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDA7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDAuMTZlbTtcXG59XFxuXFxuZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTsgIFxcbiAgd2lkdGg6IGNsYW1wKDEwMHB4LCAyNTBweCwgNDAwcHgpO1xcbn1cXG5cXG5mb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL2ljb25zL3NlYXJjaC5zdmcnKSBuby1yZXBlYXQgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgd2lkdGg6IDEuM2VtO1xcbiAgaGVpZ2h0OiAxLjNlbTtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogRXJyb3IgcG9wdXAgbWVudVxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uZXJyb3Ige1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHJnYigyNTUsIDk5LCA3MSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCA5OSwgNzEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBtYXJnaW4tbGVmdDogMC42ZW07XFxuICBwYWRkaW5nOiAwLjE1ZW0gMC41ZW07XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5lcnJvciAubWVzc2FnZSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5jbG9zZS1lcnJvci1idG4ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMjU1LCA5OSwgNzEpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1zaXplOiAxLjZlbTtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1yaWdodDogMC4yZW07XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY2xvc2UtZXJyb3ItYnRuOmFjdGl2ZSB7XFxuICBjb2xvcjogIzMzMztcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogTWFpbjogIHdlYXRoZXIgY29udGVudCBkaXNwbGF5IHN0eWxpbmdcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgZmxleC1iYXNpczogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMmVtO1xcbn1cXG5cXG5oNCB7XFxuICBtYXJnaW46IDAuMWVtO1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBMb2FkaW5nIGFuaW1hdGlvblxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4ubG9hZGVyIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiAjMzMzICMzMzMgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW46IDIuM2VtO1xcbiAgd2lkdGg6IDJlbTtcXG4gIGhlaWdodDogMmVtO1xcbiAgYW5pbWF0aW9uOiBzcGluIDEuNXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY3VycmVudCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAzcHggIzMzMzk7XFxuICBtYXJnaW46IDFlbTtcXG59XFxuXFxuLmNvbmRpdGlvbiBpbWcge1xcbiAgaGVpZ2h0OiA3ZW07XFxuICB3aWR0aDogN2VtO1xcbiAgYmFja2dyb3VuZDogIzMzMzE7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiA1ZW07XFxufVxcblxcbi5jb25kaXRpb24ge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbi5jdXJyZW50IC50ZW1wZXJhdHVyZSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiA0ZW07XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCA1cHggIzMzM2E7XFxufVxcblxcbi53aW5kID4gc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBnYXA6IDFlbTtcXG59XFxuXFxuLm90aGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtcm93LWdhcDogMWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAxZW07XFxuICBiYWNrZ3JvdW5kOiAjMzMzMTtcXG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gIGJhY2tncm91bmQ6ICMzMzMxO1xcbiAgcGFkZGluZzogMS4yZW0gMS42ZW07XFxuICBtYXJnaW46IDAuOGVtO1xcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QgPiAqIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZ2FwOiAxLjJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy93ZWF0aGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxTQUFTO0VBQ1QsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsUUFBUTtBQUNWOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY3VycmVudCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAzcHggIzMzMzk7XFxuICBtYXJnaW46IDFlbTtcXG59XFxuXFxuLmNvbmRpdGlvbiBpbWcge1xcbiAgaGVpZ2h0OiA3ZW07XFxuICB3aWR0aDogN2VtO1xcbiAgYmFja2dyb3VuZDogIzMzMzE7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiA1ZW07XFxufVxcblxcbi5jb25kaXRpb24ge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbi5jdXJyZW50IC50ZW1wZXJhdHVyZSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiA0ZW07XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCA1cHggIzMzM2E7XFxufVxcblxcbi53aW5kID4gc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBnYXA6IDFlbTtcXG59XFxuXFxuLm90aGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtcm93LWdhcDogMWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAxZW07XFxuICBiYWNrZ3JvdW5kOiAjMzMzMTtcXG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gIGJhY2tncm91bmQ6ICMzMzMxO1xcbiAgcGFkZGluZzogMS4yZW0gMS42ZW07XFxuICBtYXJnaW46IDAuOGVtO1xcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QgPiAqIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZ2FwOiAxLjJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIndXNlIHN0cmljdCc7XG5jb25zdCBlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcicpO1xuY29uc3QgZXJyb3JNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3IgLm1lc3NhZ2UnKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEZ1bmN0aW9ucyBwcm92aWRlZCBvdXRzaWRlIG1vZHVsYXIgdXNlXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc2hvd0Vycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgZXJyb3Iuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgZXJyb3JNc2cudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICAgICAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgfSxcbiAgICBjbG9zZUVycm9yKCkge1xuICAgICAgICBlcnJvci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIGVycm9yTXNnLnRleHRDb250ZW50ID0gJyc7XG4gICAgfSxcbiAgICBzaG93V2VhdGhlcih3ZWF0aGVyRGF0YSwgdW5pdHMpIHtcbiAgICAgICAgdGhpcy5jbGVhcldlYXRoZXIoKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlcih3ZWF0aGVyRGF0YSwgdW5pdHMpKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChmb3JlY2FzdCh3ZWF0aGVyRGF0YS5mb3JlY2FzdCwgdW5pdHMudGVtcFVuaXQpKTtcbiAgICB9LFxuICAgIGNsZWFyV2VhdGhlcigpIHtcbiAgICAgICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIH0sXG4gICAgbG9hZGluZygpIHtcbiAgICAgICAgdGhpcy5jbGVhcldlYXRoZXIoKTtcbiAgICAgICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxvYWRlci5jbGFzc05hbWUgPSAnbG9hZGVyJztcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChsb2FkZXIpO1xuICAgIH1cbn07XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqICBDcmVhdGVzIGFsbCBET00gZWxlbWVudHMgdXNpbmcgZGF0YSBvZiBjdXJyZW50XG4gKiAgd2VhdGhlci5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmZ1bmN0aW9uIGN1cnJlbnRXZWF0aGVyKHdlYXRoZXJEYXRhLCB1bml0cykge1xuICAgIGNvbnN0IHdldGhlckRPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICB3ZXRoZXJET00uY2xhc3NOYW1lID0gJ2N1cnJlbnQnO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnQ3VycmVudGx5JztcbiAgICB3ZXRoZXJET00uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgY29uc3QgY2hpbGRyZW5ET00gPSBbXG4gICAgICAgIGxvY2F0aW9uKHdlYXRoZXJEYXRhLmxvY2F0aW9uKSxcbiAgICAgICAgY29uZGl0aW9uKHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uKSxcbiAgICAgICAgdGVtcGVyYXR1cmUod2VhdGhlckRhdGEuY3VycmVudCwgdW5pdHMudGVtcFVuaXQpLFxuICAgICAgICB3aW5kKHdlYXRoZXJEYXRhLmN1cnJlbnQsIHVuaXRzLnNwZWVkVW5pdCksXG4gICAgICAgIG90aGVyKHdlYXRoZXJEYXRhLmN1cnJlbnQsIHVuaXRzLnNwZWVkVW5pdClcbiAgICBdO1xuICAgIGZvciAoY29uc3QgZG9tIG9mIGNoaWxkcmVuRE9NKVxuICAgICAgICB3ZXRoZXJET00uYXBwZW5kQ2hpbGQoZG9tKTtcbiAgICByZXR1cm4gd2V0aGVyRE9NO1xufVxuZnVuY3Rpb24gZm9yZWNhc3Qod2VhdGhlckRhdGEsIHRlbXBVbml0KSB7XG4gICAgY29uc3QgZm9yZWNhc3RET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgZm9yZWNhc3RET00uY2xhc3NOYW1lID0gJ2ZvcmVjYXN0JztcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0ZvcmVjYXN0JztcbiAgICBmb3JlY2FzdERPTS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdlYXRoZXJEYXRhLmZvcmVjYXN0ZGF5Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXkuY2xhc3NOYW1lID0gJ2ZvcmVjYXN0LWRheSc7XG4gICAgICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlbXBlcmF0dXJlLmNsYXNzTmFtZSA9ICd0ZW1wZXJhdHVyZSc7XG4gICAgICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEuZm9yZWNhc3RkYXlbaV0uZGF5Wydhdmd0ZW1wXycgKyB0ZW1wVW5pdF19JHt0ZW1wVW5pdC50b1VwcGVyQ2FzZSgpfWA7XG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaWNvbi5jbGFzc05hbWUgPSAnaWNvbic7XG4gICAgICAgIGljb24uc3JjID0gd2VhdGhlckRhdGEuZm9yZWNhc3RkYXlbaV0uZGF5LmNvbmRpdGlvbi5pY29uO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRhdGUuY2xhc3NOYW1lID0gJ2RhdGUnO1xuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuZm9yZWNhc3RkYXlbaV0uZGF0ZTtcbiAgICAgICAgZGF5LmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlKTtcbiAgICAgICAgZGF5LmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICBkYXkuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgIGZvcmVjYXN0RE9NLmFwcGVuZENoaWxkKGRheSk7XG4gICAgfVxuICAgIHJldHVybiBmb3JlY2FzdERPTTtcbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogRnVuY3Rpb25zIHRoYXQgY3JlYXRlIHZhcmlvdXMgd2VhdGhlciBkYXRhXG4gKiBjb21wb25lbnRzLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLy8gR2VuZXJhdGUgRE9NIGZvciBsb2NhdGlvbiBkYXRhXG5mdW5jdGlvbiBsb2NhdGlvbihsb2NhdGlvbkRhdGEpIHtcbiAgICBjb25zdCBsb2NhdGlvbkRPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBsb2NhdGlvbkRPTS5jbGFzc05hbWUgPSAnbG9jYXRpb24nO1xuICAgIGxvY2F0aW9uRE9NLnRleHRDb250ZW50ID0gYCR7bG9jYXRpb25EYXRhLm5hbWV9LCAke2xvY2F0aW9uRGF0YS5jb3VudHJ5fWA7XG4gICAgcmV0dXJuIGxvY2F0aW9uRE9NO1xufVxuLy8gR2VuZXJhdGUgRE9NIGZvciBjb25kaXRpb24gZGF0YVxuZnVuY3Rpb24gY29uZGl0aW9uKGNvbmRpdGlvbkRhdGEpIHtcbiAgICBjb25zdCBjb25kaXRpb25ET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uZGl0aW9uRE9NLmNsYXNzTmFtZSA9ICdjb25kaXRpb24nO1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpY29uLnNyYyA9IGNvbmRpdGlvbkRhdGEuaWNvbjtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBjb25kaXRpb25EYXRhLnRleHQ7XG4gICAgY29uZGl0aW9uRE9NLmFwcGVuZENoaWxkKGljb24pO1xuICAgIGNvbmRpdGlvbkRPTS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICByZXR1cm4gY29uZGl0aW9uRE9NO1xufVxuLy8gR2VuZXJhdGUgRE9NIGZvciB0ZW1wZXJhdHVyZSBkYXRhXG5mdW5jdGlvbiB0ZW1wZXJhdHVyZSh3ZWF0aGVyRGF0YSwgdGVtcFVuaXQpIHtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZURPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlbXBlcmF0dXJlRE9NLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGFbJ3RlbXBfJyArIHRlbXBVbml0XX0ke3RlbXBVbml0LnRvVXBwZXJDYXNlKCl9YDtcbiAgICB0ZW1wZXJhdHVyZURPTS5jbGFzc05hbWUgPSAndGVtcGVyYXR1cmUnO1xuICAgIHJldHVybiB0ZW1wZXJhdHVyZURPTTtcbn1cbi8vIEdlbmVyYXRlIERPTSBmb3Igd2luZCBkYXRhXG5mdW5jdGlvbiB3aW5kKHdlYXRoZXJEYXRhLCBzcGVlZFVuaXQpIHtcbiAgICBjb25zdCB3aW5kQW5nbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3aW5kQW5nbGUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS53aW5kX2RlZ3JlZX3CsGA7XG4gICAgY29uc3Qgd2luZERpciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdpbmREaXIudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS53aW5kX2RpcjtcbiAgICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YVsnd2luZF8nICsgc3BlZWRVbml0XX0ke3NwZWVkVW5pdH1gO1xuICAgIHdpbmRTcGVlZC5jbGFzc05hbWUgPSAnd2luZC1zcGVlZCc7XG4gICAgY29uc3Qgd2luZEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgd2luZEluZm8uYXBwZW5kQ2hpbGQod2luZEFuZ2xlKTtcbiAgICB3aW5kSW5mby5hcHBlbmRDaGlsZCh3aW5kRGlyKTtcbiAgICB3aW5kSW5mby5hcHBlbmRDaGlsZCh3aW5kU3BlZWQpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnV2luZCc7XG4gICAgY29uc3Qgd2luZERPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdpbmRET00uY2xhc3NOYW1lID0gJ3dpbmQnO1xuICAgIHdpbmRET00uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgd2luZERPTS5hcHBlbmRDaGlsZCh3aW5kSW5mbyk7XG4gICAgcmV0dXJuIHdpbmRET007XG59XG4vLyBHZW5lcmF0ZSBET00gZm9yIG90aGVyIGRhdGFcbmZ1bmN0aW9uIG90aGVyKHdlYXRoZXJEYXRhLCBzcGVlZFVuaXQpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdvdGhlcic7XG4gICAgY29uc3QgdGl0bGUgPSBbJ1VWJywgJ0d1c3QnLCAnSHVtaWRpdHknLCAnRGF5J107XG4gICAgY29uc3Qga2V5cyA9IFsndXYnLCAnZ3VzdF8nLCAnaHVtaWRpdHknLCAnaXNfZGF5J107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IHRpdGxlW2ldO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpZiAoa2V5c1tpXSA9PT0gJ2d1c3RfJylcbiAgICAgICAgICAgIHZhbHVlLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGFba2V5c1tpXSArIHNwZWVkVW5pdF0gKyBzcGVlZFVuaXQ7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHZhbHVlLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGFba2V5c1tpXV07XG4gICAgICAgIHZhbHVlLmNsYXNzTmFtZSA9IHRpdGxlW2ldLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQodmFsdWUpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG4gICAgfVxuICAgIHJldHVybiBjb250YWluZXI7XG59XG4iLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgRE9NIGZyb20gJy4vZG9tJztcbmltcG9ydCB7IGdldFdlYXRoZXJSZXBvcnQgfSBmcm9tICcuL3dlYXRoZXInO1xuaW1wb3J0IHRvZ2dsZVN3aXRjaCBmcm9tICcuL3RvZ2dsZS1zd2l0Y2gnO1xuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcbmxldCB0ZW1wVW5pdCA9ICdmJztcbmxldCBzcGVlZFVuaXQgPSAna3BoJztcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogRmV0Y2ggYW5kIGRpc3BsYXkgd2VhdGhlciByZXBvcnRcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuY29uc3QgcXVlcnlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2V0LXdlYXRoZXInKTtcbnF1ZXJ5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi1pbnB1dCcpO1xuICAgIGlmIChsb2NhdGlvbklucHV0LnZhbGlkaXR5LnZhbHVlTWlzc2luZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgc2hvd1dlYXRoZXIobG9jYXRpb25JbnB1dC52YWx1ZSwgeyBzcGVlZFVuaXQsIHRlbXBVbml0IH0pO1xuICAgIH1cbiAgICBlbHNlXG4gICAgICAgIERPTS5zaG93RXJyb3IoJ1NlYXJjaCBpdGVtIG5vdCBwcm92aWRlZCcpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59KTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogQ2xlYXIgZXJyb3IgbWVzc2FnZSB3aGVuIGVycm9yIGNsb3NlIGJ1dHRvbiBpc1xuICogY2xpY2tlZC5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuY29uc3QgY2xvc2VFcnJvckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1lcnJvci1idG4nKTtcbmNsb3NlRXJyb3JCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET00uY2xvc2VFcnJvcik7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEdldCB3ZWF0aGVyIHJlcG9ydCBvZiBsb2NhdGlvbiBlbnRlcmVkIGJ5IHVzZXJcbiAqIGFuZCBkaXNwbGF5IHJlc3VsdHMuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmxldCB3ZWF0aGVyUmVwb3J0O1xuZnVuY3Rpb24gc2hvd1dlYXRoZXIocXVlcnksIHVuaXRzKSB7XG4gICAgRE9NLmxvYWRpbmcoKTtcbiAgICBjb25zdCBkYXRhID0gZ2V0V2VhdGhlclJlcG9ydChxdWVyeSk7XG4gICAgZGF0YVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB3ZWF0aGVyUmVwb3J0ID0gZGF0YTtcbiAgICAgICAgRE9NLnNob3dXZWF0aGVyKGRhdGEsIHVuaXRzKTtcbiAgICAgICAgRE9NLmNsb3NlRXJyb3IoKTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGRhdGEpID0+IHtcbiAgICAgICAgd2VhdGhlclJlcG9ydCA9IHVuZGVmaW5lZDtcbiAgICAgICAgRE9NLnNob3dFcnJvcihkYXRhLm1lc3NhZ2UpO1xuICAgIH0pO1xufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBDb252ZXJ0IHRlbXBlcmF0dXJlIG9yIHNwZWVkIHdoZW4gdGhlaXIgdmFyaW91c1xuICogYnV0dG9ucyBhcmUgY2xpY2tlZC5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLy8gVGVtcGVyYXR1cmUgdW5pdCBjb252ZXJzaW9uIGJ1dHRvblxuY29uc3QgdGVtcENvbnZlcnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wIC50b2dnbGUtc3dpdGNoLWFjdHVhdG9yJyk7XG50ZW1wQ29udmVydGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudCAudGVtcGVyYXR1cmUnKTtcbiAgICBpZiAoJ2ZvcmVjYXN0JyBpbiB3ZWF0aGVyUmVwb3J0KSB7XG4gICAgICAgIGlmICh0ZW1wVW5pdCA9PT0gJ2YnKSB7XG4gICAgICAgICAgICB0ZW1wVW5pdCA9ICdjJztcbiAgICAgICAgICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gYCR7d2VhdGhlclJlcG9ydC5jdXJyZW50LnRlbXBfY31gO1xuICAgICAgICAgICAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBgJHtwYXJzZUludCh0ZW1wZXJhdHVyZSl9wrBDYDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRlbXBVbml0ID0gJ2YnO1xuICAgICAgICAgICAgY29uc3QgdGVtcGVyYXR1cmUgPSBgJHt3ZWF0aGVyUmVwb3J0LmN1cnJlbnQudGVtcF9mfWA7XG4gICAgICAgICAgICBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IGAke3BhcnNlSW50KHRlbXBlcmF0dXJlKX1GYDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmb3JlY2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JlY2FzdC1kYXknKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JlY2FzdC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IGZvcmVjYXN0W2ldLnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZScpO1xuICAgICAgICAgICAgY29uc3QgdGVtcGVyYXR1cmUgPSB3ZWF0aGVyUmVwb3J0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheVsnYXZndGVtcF8nICsgdGVtcFVuaXRdO1xuICAgICAgICAgICAgaWYgKHRlbXBVbml0ID09PSAnYycpXG4gICAgICAgICAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAke3BhcnNlSW50KHRlbXBlcmF0dXJlKX3CsENgO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtwYXJzZUludCh0ZW1wZXJhdHVyZSl9RmA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59KTtcbi8vIFNwZWVkIHVuaXQgY29udmVyc2lvbiBidXR0b25cbmNvbnN0IHNwZWVkQ29udmVydGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwZWVkIC50b2dnbGUtc3dpdGNoLWFjdHVhdG9yJyk7XG5zcGVlZENvbnZlcnRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmICgnY3VycmVudCcgaW4gd2VhdGhlclJlcG9ydCkge1xuICAgICAgICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZCAud2luZC1zcGVlZCcpO1xuICAgICAgICBjb25zdCBndXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm90aGVyIC5ndXN0Jyk7XG4gICAgICAgIGlmIChzcGVlZFVuaXQgPT09ICdrcGgnKVxuICAgICAgICAgICAgc3BlZWRVbml0ID0gJ21waCc7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHNwZWVkVW5pdCA9ICdrcGgnO1xuICAgICAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgd2VhdGhlclJlcG9ydC5jdXJyZW50Wyd3aW5kXycgKyBzcGVlZFVuaXRdICsgc3BlZWRVbml0O1xuICAgICAgICBndXN0LnRleHRDb250ZW50ID0gd2VhdGhlclJlcG9ydC5jdXJyZW50WydndXN0XycgKyBzcGVlZFVuaXRdICsgc3BlZWRVbml0O1xuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn0pO1xuc2hvd1dlYXRoZXIoJ0FjY3JhLCBHaGFuYScsIHsgc3BlZWRVbml0LCB0ZW1wVW5pdCB9KTtcbnRvZ2dsZVN3aXRjaC5hY3RpdmF0ZSgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gR2VuZXJhdGUgYW5kIHJldHVybnMgbmV3IHRvZ2dsZSBzd2l0Y2ggZG9tXG5mdW5jdGlvbiBuZXdCdG4ocHJvcGVydGllcykge1xuICAgIHByb3BlcnRpZXMgPSBwcm9jZXNzUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICBjb25zdCB0b2dnbGVTd2l0Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2dnbGVTd2l0Y2guY2xhc3NOYW1lID0gJ3RvZ2dsZS1zd2l0Y2gnO1xuICAgIHRvZ2dsZVN3aXRjaC5zdHlsZS5jc3NUZXh0ID0gc3dpdGNoQ1NTKHByb3BlcnRpZXMuYmFja2dyb3VuZC50b2dnbGVTd2l0Y2gsIHByb3BlcnRpZXMuc2l6ZSk7XG4gICAgY29uc3QgYWN0dWF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhY3R1YXRvci5jbGFzc05hbWUgPSAndG9nZ2xlLXN3aXRjaC1hY3R1YXRvcic7XG4gICAgYWN0dWF0b3Iuc3R5bGUuY3NzVGV4dCA9IGFjdHVhdG9yQ1NTKHByb3BlcnRpZXMuYmFja2dyb3VuZC5hY3R1YXRvciwgcHJvcGVydGllcy5zaXplKTtcbiAgICBhY3R1YXRvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBhbmltYXRlKHRvZ2dsZVN3aXRjaCwgZXZlbnQudGFyZ2V0LCBwcm9wZXJ0aWVzKTtcbiAgICB9KTtcbiAgICB0b2dnbGVTd2l0Y2guYXBwZW5kQ2hpbGQoYWN0dWF0b3IpO1xuICAgIHJldHVybiB0b2dnbGVTd2l0Y2g7XG59XG4vLyBUdXJucyBhbGwgZWxlbWVudHMgaW4gZG9tIHdpdGggXCJ0b2dnbGUtc3dpdGNoXCIgY2xhc3MgdG8gc3dpdGNoZXNcbmZ1bmN0aW9uIGFjdGl2YXRlKHByb3BlcnRpZXMgPSB1bmRlZmluZWQsIGRvbSA9IHVuZGVmaW5lZCkge1xuICAgIGxldCBzd2l0Y2hlcztcbiAgICBwcm9wZXJ0aWVzID0gcHJvY2Vzc1Byb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgaWYgKGRvbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN3aXRjaGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZ2dsZS1zd2l0Y2gnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN3aXRjaGVzID0gZG9tLnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2dnbGUtc3dpdGNoJyk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3dpdGNoZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgc3dpdGNoZXNbaV0uc3R5bGUuY3NzVGV4dCA9IHN3aXRjaENTUyhwcm9wZXJ0aWVzLmJhY2tncm91bmQudG9nZ2xlU3dpdGNoLCBwcm9wZXJ0aWVzLnNpemUpO1xuICAgICAgICBjb25zdCBhY3R1YXRvciA9IHN3aXRjaGVzW2ldLnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtc3dpdGNoLWFjdHVhdG9yJyk7XG4gICAgICAgIGFjdHVhdG9yLnN0eWxlLmNzc1RleHQgPSBhY3R1YXRvckNTUyhwcm9wZXJ0aWVzLmJhY2tncm91bmQuYWN0dWF0b3IsIHByb3BlcnRpZXMuc2l6ZSk7XG4gICAgICAgIGFjdHVhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBhbmltYXRlKHN3aXRjaGVzW2ldLCBldmVudC50YXJnZXQsIHByb3BlcnRpZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyBBbmltYXRlIGJ1dHRvbiBvbiB3aGVuIHRyaWdnZXJlZFxuZnVuY3Rpb24gYW5pbWF0ZSh0b2dnbGVTd2l0Y2gsIGFjdHVhdG9yLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgbWFyZ2luID0gYWN0dWF0b3Iuc3R5bGUubWFyZ2luTGVmdDtcbiAgICBpZiAobWFyZ2luID09PSAnJyB8fCBtYXJnaW4gPT09IGAke2NhbGMoMyAqIHByb3BlcnRpZXMuc2l6ZSl9cHhgKSB7XG4gICAgICAgIGFjdHVhdG9yLnN0eWxlLm1hcmdpbkxlZnQgPSBgJHtjYWxjKDE3LjUgKiBwcm9wZXJ0aWVzLnNpemUpfXB4YDtcbiAgICAgICAgdG9nZ2xlU3dpdGNoLnN0eWxlLmJhY2tncm91bmQgPSBwcm9wZXJ0aWVzLmJhY2tncm91bmQuYWN0aXZlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYWN0dWF0b3Iuc3R5bGUubWFyZ2luTGVmdCA9IGAke2NhbGMoMyAqIHByb3BlcnRpZXMuc2l6ZSl9cHhgO1xuICAgICAgICB0b2dnbGVTd2l0Y2guc3R5bGUuYmFja2dyb3VuZCA9IHByb3BlcnRpZXMuYmFja2dyb3VuZC50b2dnbGVTd2l0Y2g7XG4gICAgfVxufVxuLy8gQ2hlY2sgYW5kIGZpeCBtaXNzaW5nIHByb3BlcnRpZXNcbmZ1bmN0aW9uIHByb2Nlc3NQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICAgICAgc2l6ZTogMS4zLFxuICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgICBhY3RpdmU6ICcjM2FmJyxcbiAgICAgICAgICAgIGFjdHVhdG9yOiAnI2ZmZicsXG4gICAgICAgICAgICB0b2dnbGVTd2l0Y2g6ICcjYWFhJ1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYmplY3QuZnJlZXplKGRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgICBpZiAoIXByb3BlcnRpZXMpIHtcbiAgICAgICAgcHJvcGVydGllcyA9IHN0cnVjdHVyZWRDbG9uZShkZWZhdWx0UHJvcGVydGllcyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAocHJvcGVydGllcy5zaXplKVxuICAgICAgICAgICAgcHJvcGVydGllcy5zaXplID0gY2FsYyhwcm9wZXJ0aWVzLnNpemUpO1xuICAgICAgICBpZiAoIXByb3BlcnRpZXMuYmFja2dyb3VuZCkge1xuICAgICAgICAgICAgcHJvcGVydGllcy5iYWNrZ3JvdW5kID0gZGVmYXVsdFByb3BlcnRpZXMuYmFja2dyb3VuZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihwcm9wZXJ0aWVzLmJhY2tncm91bmQsIGRlZmF1bHRQcm9wZXJ0aWVzLmJhY2tncm91bmQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcyk7XG4gICAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG4vLyBQcmVjaXNpb24gQ2FsY3VsYXRlZCB2YWx1ZXMgdG8gb25lIGRlY2ltYWwgcG9pbnRcbmZ1bmN0aW9uIGNhbGModmFsdWUpIHtcbiAgICBjb25zdCByZXN1bHQgPSBgJHt2YWx1ZS50b0ZpeGVkKDEpfWA7XG4gICAgaWYgKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0gPT09ICcwJylcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuLy8gR2V0IFN3aXRjaCBDU1Mgd2l0aCBhbiBhZGp1c3RtZW50IGluIHZhbHVlc1xuZnVuY3Rpb24gc3dpdGNoQ1NTKGJnLCBzaXplKSB7XG4gICAgcmV0dXJuIGBcXFxuICAgIGJhY2tncm91bmQ6ICR7Ymd9O1xuICAgIGJvcmRlci1yYWRpdXM6ICR7MTAgKiBzaXplfXB4O1xuICAgIGhlaWdodDogJHsxNiAqIHNpemV9cHg7XG4gICAgd2lkdGg6ICR7MzIgKiBzaXplfXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogJHs1ICogc2l6ZX1weDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjRzIGVhc2UtaW4tb3V0IC4zc2A7XG59XG4vLyBHZXQgQWN0dWF0b3IgQ1NTIHdpdGggYW4gYWRqdXN0bWVudCBpbiB2YWx1ZXNcbmZ1bmN0aW9uIGFjdHVhdG9yQ1NTKGJnLCBzaXplKSB7XG4gICAgcmV0dXJuIGBcXFxuICAgIGJvcmRlci1yYWRpdXM6ICR7MTIgKiBzaXplfXB4O1xuICAgIGJhY2tncm91bmQ6ICR7Ymd9O1xuICAgIG1hcmdpbjogJHtjYWxjKDMgKiBzaXplKX1weCAke2NhbGMoMyAqIHNpemUpfXB4O1xuICAgIGhlaWdodDogJHsxMCAqIHNpemV9cHg7XG4gICAgd2lkdGg6ICR7MTAgKiBzaXplfXB4O1xuICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IC42cyBlYXNlLWluLW91dCAuMXM7YDtcbn1cbmV4cG9ydCBkZWZhdWx0IHsgYWN0aXZhdGUsIG5ld0J0biB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJSZXBvcnQobG9jYXRpb24pIHtcbiAgICBjb25zdCBhcGlLZXkgPSAnN2UwNTQwZjU4OGQ4NDFmYjg1MjE0MTM1NjIzMjEwNCc7XG4gICAgY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb25gICtcbiAgICAgICAgYD9rZXk9JHthcGlLZXl9JnE9JHtsb2NhdGlvbn0mZGF5cz0zYDtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IGJhZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGlmICgnZXJyb3InIGluIGRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihkYXRhLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==