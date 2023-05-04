"use strict";
(self["webpackChunkodin_weather_app"] = self["webpackChunkodin_weather_app"] || []).push([["index"],{

/***/ "./src/scripts/dom.js":
/*!****************************!*\
  !*** ./src/scripts/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


var error = document.querySelector('.error');
var errorMsg = document.querySelector('.error .message');
var main = document.querySelector('main');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  showError: function showError(message) {
    error.style.visibility = 'visible';
    errorMsg.textContent = message;
  },
  closeError: function closeError() {
    error.style.visibility = 'hidden';
    errorMsg.textContent = '';
  },
  showWeather: function showWeather(data) {
    this.clearWeather();
    var cloud = document.createElement('section');
    var cloudIcon = document.createElement('img');
    cloudIcon.className = 'cloud-icon';
    cloudIcon.setAttribute('src', data.current.condition.icon);
    var cloudType = document.createElement('p');
    cloudType.textContent = data.current.condition.text;
    cloud.appendChild(cloudIcon);
    cloud.appendChild(cloudType);
    cloud.className = 'cloud';
    var temperature = document.createElement('section');
    temperature.textContent = "".concat(parseInt(data.current.temp_f), "\xB0F");
    temperature.className = 'temperature';
    var wind = document.createElement('section');
    wind.className = 'wind';
    var heading, container;
    heading = document.createElement('h3');
    heading.textContent = 'Wind';
    wind.appendChild(heading);
    var windDirection = document.createElement('div');
    heading = document.createElement('h4');
    heading.textContent = 'Direction';
    var direction = document.createElement('p');
    direction.textContent = data.current.wind_dir;
    windDirection.appendChild(heading);
    windDirection.appendChild(direction);
    var windDegree = document.createElement('div');
    heading = document.createElement('h4');
    heading.textContent = 'Degree';
    var degree = document.createElement('p');
    degree.textContent = data.current.wind_degree;
    windDegree.appendChild(heading);
    windDegree.appendChild(degree);
    container = document.createElement('div');
    container.className = 'container';
    container.appendChild(windDirection);
    container.appendChild(windDegree);
    wind.appendChild(container);
    var windSpeed = document.createElement('div');
    heading = document.createElement('h4');
    heading.textContent = 'Speed';
    var kph = document.createElement('p');
    kph.textContent = "".concat(data.current.wind_kph, "kph");
    var mph = document.createElement('p');
    mph.textContent = "".concat(data.current.wind_mph, "mph");
    windSpeed.appendChild(heading);
    container = document.createElement('div');
    container.className = 'container';
    container.appendChild(kph);
    container.appendChild(mph);
    windSpeed.appendChild(container);
    wind.appendChild(windSpeed);
    main.appendChild(cloud);
    main.appendChild(temperature);
    main.appendChild(wind);
  },
  clearWeather: function clearWeather() {
    main.textContent = '';
  },
  loading: function loading() {
    this.clearWeather();
    var loader = document.createElement('div');
    loader.className = 'loader';
    main.appendChild(loader);
  }
});

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/scripts/dom.js");
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.js */ "./src/scripts/weather.js");
/* harmony import */ var _toggleSwitch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggleSwitch.js */ "./src/scripts/toggleSwitch.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_weather_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/weather.css */ "./src/styles/weather.css");


// import DOM from './dom';
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




// Dom styling



// Set default input field value
var input = document.querySelector('.location-input');
input.value = 'Paris, France';

// Fetch and display weather report
var submitBtn = document.querySelector('.get-weather');
submitBtn.addEventListener('click', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (input.validity.valueMissing == false) {
            displayWeather();
          } else {
            _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].showError('Search item not provided');
          }
          event.preventDefault();
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

// Close Error popup
var hideError = document.querySelector('.close-error-btn');
hideError.addEventListener('click', _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].closeError);

// Display default weather
displayWeather();

// Show Weather for location entered by user
function displayWeather() {
  _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].loading();
  var data = (0,_weather_js__WEBPACK_IMPORTED_MODULE_1__["default"])(input.value);
  data.then(function (data) {
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].closeError();
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].showWeather(data);
  })["catch"](function (data) {
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].showError(data.message);
  });
}
_toggleSwitch_js__WEBPACK_IMPORTED_MODULE_2__["default"].activate();

/*
(function () {
  var script = document.createElement('script');
  script.src = '//cdn.jsdelivr.net/npm/eruda';
  document.body.appendChild(script);
  script.onload = function () {
    eruda.init();
  };
})();
*/

/***/ }),

/***/ "./src/scripts/toggleSwitch.js":
/*!*************************************!*\
  !*** ./src/scripts/toggleSwitch.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/************************************************
 * Switch template                              *
 ************************************************
   <div class='.toggle-switch'>
     <div class='toggle-switch-actuator'></div>
   </div>

   const properties = {                                      
     size: 1.3,
     color: {
       body: grey;
       actuator: '#7af',
       active: #65f,
     }
   };

   // Module usage:
   const button = newBtn(properties);
   activate(properties, DOM);
 ************************************************/

// Generate and returns new toggle switch dom
function newBtn(properties) {
  properties = processProperties(properties);
  var toggleSwitch = document.createElement('div');
  toggleSwitch.className = 'toggle-switch';
  toggleSwitch.style.cssText = switchCSS(properties.background.toggleSwitch, properties.size);
  var actuator = document.createElement('div');
  actuator.className = 'toggle-switch-actuator';
  actuator.style.cssText = actuatorCSS(properties.background.actuator, properties.size);
  actuator.addEventListener('click', function (event) {
    animate(toggleSwitch, event.target, properties);
  });
  toggleSwitch.appendChild(actuator);
  return toggleSwitch;
}

// Turns all elements in dom with "toggle-switch" class to switches
function activate(properties, dom) {
  var switches;
  properties = processProperties(properties);
  if (dom === undefined) {
    switches = document.querySelectorAll('.toggle-switch');
  } else {
    switches = dom.querySelectorAll('.toggle-switch');
  }
  var _loop = function _loop(i) {
    switches[i].style.cssText = switchCSS(properties.background.toggleSwitch, properties.size);
    var actuator = switches[i].querySelector('.toggle-switch-actuator');
    actuator.style.cssText = actuatorCSS(properties.background.actuator, properties.size);
    actuator.addEventListener('click', function (event) {
      animate(switches[i], event.target, properties);
    });
  };
  for (var i = 0; i < switches.length; ++i) {
    _loop(i);
  }
}

// Animate button on when triggered
function animate(toggleSwitch, actuator, properties) {
  var margin = actuator.style.marginLeft;
  if (margin === '' || margin === "".concat(calc(3 * properties.size), "px")) {
    actuator.style.marginLeft = "".concat(calc(17.5 * properties.size), "px");
    toggleSwitch.style.background = properties.background.active;
  } else {
    actuator.style.marginLeft = "".concat(calc(3 * properties.size), "px");
    toggleSwitch.style.background = properties.background.toggleSwitch;
  }
}

// Check and fix missing properties
function processProperties(properties) {
  var defaultProperties = {
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
  } else {
    if (properties.size) properties.size = calc(properties.size);
    if (!properties.background) {
      properties.background = defaultProperties.background;
    } else {
      Object.setPrototypeOf(properties.background, defaultProperties.background);
    }
  }
  Object.setPrototypeOf(properties, defaultProperties);
  return properties;
}

// Precision Calculated values to one decimal point
function calc(value) {
  var result = "".concat(value.toFixed(1));
  if (result[result.length - 1] === '0') return parseInt(value);
  return result;
}

// Get Switch CSS with an adjustment in values
function switchCSS(bg, size) {
  return "    background: ".concat(bg, ";\n    border-radius: ").concat(10 * size, "px;\n    height: ").concat(16 * size, "px;\n    width: ").concat(32 * size, "px;\n    display: inline-flex;\n    justify-content: left;\n    align-items: center;\n    margin: ").concat(10 * size, "px;\n    padding: 0;\n    transition: background .4s ease-in-out .3s");
}

// Get Actuator CSS with an adjustment in values
function actuatorCSS(bg, size) {
  return "    border-radius: ".concat(12 * size, "px;\n    background: ").concat(bg, ";\n    margin: ").concat(calc(3 * size), "px ").concat(calc(3 * size), "px;\n    height: ").concat(10 * size, "px;\n    width: ").concat(10 * size, "px;\n    transition: margin-left .6s ease-in-out .1s;");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  activate: activate,
  newBtn: newBtn
});

/***/ }),

/***/ "./src/scripts/weather.js":
/*!********************************!*\
  !*** ./src/scripts/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeather)
/* harmony export */ });


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function getWeather(_x) {
  return _getWeather.apply(this, arguments);
}
function _getWeather() {
  _getWeather = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(query) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch('https://api.weatherapi.com/v1/forecast.json?' + "key=7e0540f588d841fb852141356232104&q=".concat(query, "&days=5"), {
            cors: true
          });
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();
        case 6:
          data = _context.sent;
          if (!data.error) {
            _context.next = 11;
            break;
          }
          throw new Error(data.error.message);
        case 11:
          if (Object.keys(data).length) {
            _context.next = 13;
            break;
          }
          throw new Error('An unexpected error occured');
        case 13:
          return _context.abrupt("return", Promise.resolve(data));
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", Promise.reject(_context.t0));
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 16]]);
  }));
  return _getWeather.apply(this, arguments);
}

/***/ }),

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/background.jpg */ "./src/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/search.svg */ "./src/images/icons/search.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")\n              no-repeat fixed center/cover;\n  display: flex;\n  flex-direction: row;\n\n  --shadow: 3px 3px 4px #333;\n  --t-bg: rgba(255, 255, 255, 0.2); \n  --background1: #fff;\n  --color: #000;\n  --border-radius: 0.6em;\n}\n\nbody {\n  border-radius: var(--border-radius);\n  background: #fff5;\n  font-family: 'Oxygen', sans-serif;\n  color: #333;\n  margin: 0.5em;\n  padding: 0.3em;\n  flex: 1;\n  height: 100%;\n}\n\n\n/* Hero */\nheader {\n  margin-bottom: 1.2em;\n}\n\nheader h1 {\n  margin: 0.3em 0.2em 0.1em;\n  font-family: 'Rubik', sans-serif;\n  font-size: 1.8em;\n  color: #333;\n}\n\n.unit {\n  text-align: left;\n  color: #333;\n  font-weight: 700;\n  display: flex;\n  margin-left: 0.8em;\n}\n\nheader h1 span {\n  font-size: 1.05em;\n}\n\nform {\n  display: inline-flex;\n  gap: 0;\n  margin: 0.5em 0.8em;\n  padding: 0.1em 0.5em;\n}\n\nform input {\n  padding: 0.2em;\n  font-size: 1.06em;\n  border: none;\n}\n\nform input::placeholder {\n  color: #dddddd;\n}\n\n.location-input {\n  width: 120px;\n  transition: width .5s ease-in-out .1s;\n  border-bottom: 3px solid #000000;\n  color: #000000;\n  font-weight: 400;\n  background: transparent;\n  padding: 0.16em;\n}\n\nform input[type=\"text\"]:focus {\n  outline: none;  \n  width: clamp(100px, 250px, 400px);\n}\n\nform input[type=\"submit\"] {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center;\n  background-size: contain;\n  width: 1.3em;\n  height: 1.3em;\n}\n\n\n/* Error popup */\n.error {\n  display: inline-flex;\n  align-items: center;\n  border: 2px solid rgb(255, 99, 71);\n  color: rgb(255, 99, 71);\n  margin-left: 0.6em;\n  padding: 0.15em 0.6em;\n  border-radius: var(--border-radius);\n  visibility: hidden;\n  min-width: 50px;\n}\n\n.close-error-btn {\n  background: none;\n  color: rgb(255, 99, 71);\n  border: none;\n  display: inline;\n  font-size: 1.6em;\n  border-radius: var(--border-radius);\n  margin: 0;\n  margin-right: 0.2em;\n  padding: 0;\n}\n\n.close-error-btn:active {\n  background: #eeeeee;\n  color: #333333;\n}\n\n.error .message {\n  display: inline;\n  font-family: sans-serif;\n  font-weight: 500;\n}\n\n\n/* Weather content */\nmain {\n  margin: 0.6em;\n  text-align: center;\n}\n\nh4 {\n  margin: 0.1em;\n}\n\n\n/* Loading animation */\n.loader {\n  background: transparent;\n  border-width: 4px;\n  border-style: solid;\n  border-color: #333 #333 transparent;\n  border-radius: 50%;\n  margin: 2.3em;\n  width: 2em;\n  height: 2em;\n  animation: spin 1.5s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE;0CACwC;EACxC,aAAa;EACb,mBAAmB;;EAEnB,0BAA0B;EAC1B,gCAAgC;EAChC,mBAAmB;EACnB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,mCAAmC;EACnC,iBAAiB;EACjB,iCAAiC;EACjC,WAAW;EACX,aAAa;EACb,cAAc;EACd,OAAO;EACP,YAAY;AACd;;;AAGA,SAAS;AACT;EACE,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;EACzB,gCAAgC;EAChC,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;EACpB,MAAM;EACN,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,qCAAqC;EACrC,gCAAgC;EAChC,cAAc;EACd,gBAAgB;EAChB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,oEAA8D;EAC9D,wBAAwB;EACxB,YAAY;EACZ,aAAa;AACf;;;AAGA,gBAAgB;AAChB;EACE,oBAAoB;EACpB,mBAAmB;EACnB,kCAAkC;EAClC,uBAAuB;EACvB,kBAAkB;EAClB,qBAAqB;EACrB,mCAAmC;EACnC,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,mCAAmC;EACnC,SAAS;EACT,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,uBAAuB;EACvB,gBAAgB;AAClB;;;AAGA,oBAAoB;AACpB;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;;AAGA,sBAAsB;AACtB;EACE,uBAAuB;EACvB,iBAAiB;EACjB,mBAAmB;EACnB,mCAAmC;EACnC,kBAAkB;EAClB,aAAa;EACb,UAAU;EACV,WAAW;EACX,oCAAoC;AACtC;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF","sourcesContent":[":root {\n  background: url('../images/background.jpg')\n              no-repeat fixed center/cover;\n  display: flex;\n  flex-direction: row;\n\n  --shadow: 3px 3px 4px #333;\n  --t-bg: rgba(255, 255, 255, 0.2); \n  --background1: #fff;\n  --color: #000;\n  --border-radius: 0.6em;\n}\n\nbody {\n  border-radius: var(--border-radius);\n  background: #fff5;\n  font-family: 'Oxygen', sans-serif;\n  color: #333;\n  margin: 0.5em;\n  padding: 0.3em;\n  flex: 1;\n  height: 100%;\n}\n\n\n/* Hero */\nheader {\n  margin-bottom: 1.2em;\n}\n\nheader h1 {\n  margin: 0.3em 0.2em 0.1em;\n  font-family: 'Rubik', sans-serif;\n  font-size: 1.8em;\n  color: #333;\n}\n\n.unit {\n  text-align: left;\n  color: #333;\n  font-weight: 700;\n  display: flex;\n  margin-left: 0.8em;\n}\n\nheader h1 span {\n  font-size: 1.05em;\n}\n\nform {\n  display: inline-flex;\n  gap: 0;\n  margin: 0.5em 0.8em;\n  padding: 0.1em 0.5em;\n}\n\nform input {\n  padding: 0.2em;\n  font-size: 1.06em;\n  border: none;\n}\n\nform input::placeholder {\n  color: #dddddd;\n}\n\n.location-input {\n  width: 120px;\n  transition: width .5s ease-in-out .1s;\n  border-bottom: 3px solid #000000;\n  color: #000000;\n  font-weight: 400;\n  background: transparent;\n  padding: 0.16em;\n}\n\nform input[type=\"text\"]:focus {\n  outline: none;  \n  width: clamp(100px, 250px, 400px);\n}\n\nform input[type=\"submit\"] {\n  background: url('../images/icons/search.svg') no-repeat center;\n  background-size: contain;\n  width: 1.3em;\n  height: 1.3em;\n}\n\n\n/* Error popup */\n.error {\n  display: inline-flex;\n  align-items: center;\n  border: 2px solid rgb(255, 99, 71);\n  color: rgb(255, 99, 71);\n  margin-left: 0.6em;\n  padding: 0.15em 0.6em;\n  border-radius: var(--border-radius);\n  visibility: hidden;\n  min-width: 50px;\n}\n\n.close-error-btn {\n  background: none;\n  color: rgb(255, 99, 71);\n  border: none;\n  display: inline;\n  font-size: 1.6em;\n  border-radius: var(--border-radius);\n  margin: 0;\n  margin-right: 0.2em;\n  padding: 0;\n}\n\n.close-error-btn:active {\n  background: #eeeeee;\n  color: #333333;\n}\n\n.error .message {\n  display: inline;\n  font-family: sans-serif;\n  font-weight: 500;\n}\n\n\n/* Weather content */\nmain {\n  margin: 0.6em;\n  text-align: center;\n}\n\nh4 {\n  margin: 0.1em;\n}\n\n\n/* Loading animation */\n.loader {\n  background: transparent;\n  border-width: 4px;\n  border-style: solid;\n  border-color: #333 #333 transparent;\n  border-radius: 50%;\n  margin: 2.3em;\n  width: 2em;\n  height: 2em;\n  animation: spin 1.5s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".temperature {\n  font-weight: 500;\n  font-size: 4.0em;\n  margin: 0;\n}\n\n.cloud-icon {\n  height: 8em;\n  width: 8em;\n  padding: 0.5em;\n  border-radius: 5em;\n  background: #0001;\n  margin: 0;\n}\n\n.container {\n  display: inline-flex;\n  gap: 1.2em;\n  text-align: center;\n}\n\n.wind,\n.cloud,\n.temperature {\n  font-weight: 600;\n  text-align: center;\n}\n\n.wind > div {\n  margin: 0.3em;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/weather.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,UAAU;EACV,cAAc;EACd,kBAAkB;EAClB,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,oBAAoB;EACpB,UAAU;EACV,kBAAkB;AACpB;;AAEA;;;EAGE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf","sourcesContent":[".temperature {\n  font-weight: 500;\n  font-size: 4.0em;\n  margin: 0;\n}\n\n.cloud-icon {\n  height: 8em;\n  width: 8em;\n  padding: 0.5em;\n  border-radius: 5em;\n  background: #0001;\n  margin: 0;\n}\n\n.container {\n  display: inline-flex;\n  gap: 1.2em;\n  text-align: center;\n}\n\n.wind,\n.cloud,\n.temperature {\n  font-weight: 600;\n  text-align: center;\n}\n\n.wind > div {\n  margin: 0.3em;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/weather.css":
/*!********************************!*\
  !*** ./src/styles/weather.css ***!
  \********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_weather_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./weather.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/weather.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_weather_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_weather_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_weather_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_weather_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vc3JjL3NjcmlwdHMvZG9tLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vc3JjL3NjcmlwdHMvdG9nZ2xlU3dpdGNoLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9zcmMvc2NyaXB0cy93ZWF0aGVyLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vc3JjL3N0eWxlcy93ZWF0aGVyLmNzcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZXMvd2VhdGhlci5jc3M/OTZiNCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKTtcbmNvbnN0IGVycm9yTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yIC5tZXNzYWdlJyk7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNob3dFcnJvcihtZXNzYWdlKSB7XG4gICAgZXJyb3Iuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICBlcnJvck1zZy50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gIH0sXG5cbiAgY2xvc2VFcnJvcigpIHtcbiAgICBlcnJvci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgZXJyb3JNc2cudGV4dENvbnRlbnQgPSAnJztcbiAgfSxcblxuICBzaG93V2VhdGhlcihkYXRhKSB7XG4gICAgdGhpcy5jbGVhcldlYXRoZXIoKTtcblxuICAgIGNvbnN0IGNsb3VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnN0IGNsb3VkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNsb3VkSWNvbi5jbGFzc05hbWUgPSAnY2xvdWQtaWNvbic7XG4gICAgY2xvdWRJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uKTtcbiAgICBjb25zdCBjbG91ZFR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2xvdWRUeXBlLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICAgIGNsb3VkLmFwcGVuZENoaWxkKGNsb3VkSWNvbik7XG4gICAgY2xvdWQuYXBwZW5kQ2hpbGQoY2xvdWRUeXBlKTtcbiAgICBjbG91ZC5jbGFzc05hbWUgPSAnY2xvdWQnO1xuXG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtwYXJzZUludChkYXRhLmN1cnJlbnQudGVtcF9mKX3CsEZgO1xuICAgIHRlbXBlcmF0dXJlLmNsYXNzTmFtZSA9ICd0ZW1wZXJhdHVyZSc7XG5cbiAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHdpbmQuY2xhc3NOYW1lID0gJ3dpbmQnO1xuICAgIGxldCBoZWFkaW5nLCBjb250YWluZXI7XG5cbiAgICBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1dpbmQnO1xuICAgIHdpbmQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICBjb25zdCB3aW5kRGlyZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdEaXJlY3Rpb24nO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkaXJlY3Rpb24udGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQud2luZF9kaXI7XG4gICAgd2luZERpcmVjdGlvbi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICB3aW5kRGlyZWN0aW9uLmFwcGVuZENoaWxkKGRpcmVjdGlvbik7XG5cbiAgICBjb25zdCB3aW5kRGVncmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdEZWdyZWUnO1xuICAgIGNvbnN0IGRlZ3JlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZWdyZWUudGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQud2luZF9kZWdyZWU7XG4gICAgd2luZERlZ3JlZS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICB3aW5kRGVncmVlLmFwcGVuZENoaWxkKGRlZ3JlZSk7XG5cbiAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdpbmREaXJlY3Rpb24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kRGVncmVlKTtcbiAgICB3aW5kLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1NwZWVkJztcbiAgICBjb25zdCBrcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAga3BoLnRleHRDb250ZW50ID0gYCR7ZGF0YS5jdXJyZW50LndpbmRfa3BofWtwaGA7XG4gICAgY29uc3QgbXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1waC50ZXh0Q29udGVudCA9IGAke2RhdGEuY3VycmVudC53aW5kX21waH1tcGhgO1xuICAgIHdpbmRTcGVlZC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGtwaCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1waCk7XG4gICAgd2luZFNwZWVkLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgd2luZC5hcHBlbmRDaGlsZCh3aW5kU3BlZWQpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjbG91ZCk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh3aW5kKTtcbiAgfSxcblxuICBjbGVhcldlYXRoZXIoKSB7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICB9LFxuXG4gIGxvYWRpbmcoKSB7XG4gICAgdGhpcy5jbGVhcldlYXRoZXIoKTtcbiAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2FkZXIuY2xhc3NOYW1lID0gJ2xvYWRlcic7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChsb2FkZXIpO1xuICB9LFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gaW1wb3J0IERPTSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgRE9NIGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCBnZXRXZWF0aGVyIGZyb20gJy4vd2VhdGhlci5qcyc7XG5pbXBvcnQgdG9nZ2xlU3dpdGNoIGZyb20gJy4vdG9nZ2xlU3dpdGNoLmpzJztcblxuLy8gRG9tIHN0eWxpbmdcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy93ZWF0aGVyLmNzcyc7XG5cbi8vIFNldCBkZWZhdWx0IGlucHV0IGZpZWxkIHZhbHVlXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi1pbnB1dCcpO1xuaW5wdXQudmFsdWUgPSAnUGFyaXMsIEZyYW5jZSc7XG5cbi8vIEZldGNoIGFuZCBkaXNwbGF5IHdlYXRoZXIgcmVwb3J0XG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2V0LXdlYXRoZXInKTtcbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCkgPT4ge1xuICBpZiAoaW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nID09IGZhbHNlKSB7XG4gICAgZGlzcGxheVdlYXRoZXIoKTtcbiAgfSBlbHNlIHtcbiAgICBET00uc2hvd0Vycm9yKCdTZWFyY2ggaXRlbSBub3QgcHJvdmlkZWQnKTtcbiAgfVxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbi8vIENsb3NlIEVycm9yIHBvcHVwXG5jb25zdCBoaWRlRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtZXJyb3ItYnRuJyk7XG5oaWRlRXJyb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET00uY2xvc2VFcnJvcik7XG5cbi8vIERpc3BsYXkgZGVmYXVsdCB3ZWF0aGVyXG5kaXNwbGF5V2VhdGhlcigpO1xuXG4vLyBTaG93IFdlYXRoZXIgZm9yIGxvY2F0aW9uIGVudGVyZWQgYnkgdXNlclxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIoKSB7XG4gIERPTS5sb2FkaW5nKCk7XG4gIGNvbnN0IGRhdGEgPSBnZXRXZWF0aGVyKGlucHV0LnZhbHVlKTtcbiAgZGF0YVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBET00uY2xvc2VFcnJvcigpO1xuICAgICAgRE9NLnNob3dXZWF0aGVyKGRhdGEpO1xuICAgIH0pXG4gICAgLmNhdGNoKChkYXRhKSA9PiB7XG4gICAgICBET00uc2hvd0Vycm9yKGRhdGEubWVzc2FnZSk7XG4gICAgfSk7XG59XG5cbnRvZ2dsZVN3aXRjaC5hY3RpdmF0ZSgpO1xuXG4vKlxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzY3JpcHQuc3JjID0gJy8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vZXJ1ZGEnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZXJ1ZGEuaW5pdCgpO1xuICB9O1xufSkoKTtcbiovXG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFN3aXRjaCB0ZW1wbGF0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgIDxkaXYgY2xhc3M9Jy50b2dnbGUtc3dpdGNoJz5cbiAgICAgPGRpdiBjbGFzcz0ndG9nZ2xlLXN3aXRjaC1hY3R1YXRvcic+PC9kaXY+XG4gICA8L2Rpdj5cblxuICAgY29uc3QgcHJvcGVydGllcyA9IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICBzaXplOiAxLjMsXG4gICAgIGNvbG9yOiB7XG4gICAgICAgYm9keTogZ3JleTtcbiAgICAgICBhY3R1YXRvcjogJyM3YWYnLFxuICAgICAgIGFjdGl2ZTogIzY1ZixcbiAgICAgfVxuICAgfTtcblxuICAgLy8gTW9kdWxlIHVzYWdlOlxuICAgY29uc3QgYnV0dG9uID0gbmV3QnRuKHByb3BlcnRpZXMpO1xuICAgYWN0aXZhdGUocHJvcGVydGllcywgRE9NKTtcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIEdlbmVyYXRlIGFuZCByZXR1cm5zIG5ldyB0b2dnbGUgc3dpdGNoIGRvbVxuZnVuY3Rpb24gbmV3QnRuKHByb3BlcnRpZXMpIHtcbiAgcHJvcGVydGllcyA9IHByb2Nlc3NQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuXG4gIGNvbnN0IHRvZ2dsZVN3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2dnbGVTd2l0Y2guY2xhc3NOYW1lID0gJ3RvZ2dsZS1zd2l0Y2gnO1xuICB0b2dnbGVTd2l0Y2guc3R5bGUuY3NzVGV4dCA9IHN3aXRjaENTUyhcbiAgICBwcm9wZXJ0aWVzLmJhY2tncm91bmQudG9nZ2xlU3dpdGNoLFxuICAgIHByb3BlcnRpZXMuc2l6ZVxuICApO1xuXG4gIGNvbnN0IGFjdHVhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFjdHVhdG9yLmNsYXNzTmFtZSA9ICd0b2dnbGUtc3dpdGNoLWFjdHVhdG9yJztcbiAgYWN0dWF0b3Iuc3R5bGUuY3NzVGV4dCA9IGFjdHVhdG9yQ1NTKFxuICAgIHByb3BlcnRpZXMuYmFja2dyb3VuZC5hY3R1YXRvcixcbiAgICBwcm9wZXJ0aWVzLnNpemVcbiAgKTtcbiAgYWN0dWF0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBhbmltYXRlKHRvZ2dsZVN3aXRjaCwgZXZlbnQudGFyZ2V0LCBwcm9wZXJ0aWVzKTtcbiAgfSk7XG5cbiAgdG9nZ2xlU3dpdGNoLmFwcGVuZENoaWxkKGFjdHVhdG9yKTtcblxuICByZXR1cm4gdG9nZ2xlU3dpdGNoO1xufVxuXG4vLyBUdXJucyBhbGwgZWxlbWVudHMgaW4gZG9tIHdpdGggXCJ0b2dnbGUtc3dpdGNoXCIgY2xhc3MgdG8gc3dpdGNoZXNcbmZ1bmN0aW9uIGFjdGl2YXRlKHByb3BlcnRpZXMsIGRvbSkge1xuICBsZXQgc3dpdGNoZXM7XG4gIHByb3BlcnRpZXMgPSBwcm9jZXNzUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICBpZiAoZG9tID09PSB1bmRlZmluZWQpIHtcbiAgICBzd2l0Y2hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2dnbGUtc3dpdGNoJyk7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoZXMgPSBkb20ucXVlcnlTZWxlY3RvckFsbCgnLnRvZ2dsZS1zd2l0Y2gnKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3dpdGNoZXMubGVuZ3RoOyArK2kpIHtcbiAgICBzd2l0Y2hlc1tpXS5zdHlsZS5jc3NUZXh0ID0gc3dpdGNoQ1NTKFxuICAgICAgcHJvcGVydGllcy5iYWNrZ3JvdW5kLnRvZ2dsZVN3aXRjaCxcbiAgICAgIHByb3BlcnRpZXMuc2l6ZVxuICAgICk7XG5cbiAgICBjb25zdCBhY3R1YXRvciA9IHN3aXRjaGVzW2ldLnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtc3dpdGNoLWFjdHVhdG9yJyk7XG4gICAgYWN0dWF0b3Iuc3R5bGUuY3NzVGV4dCA9IGFjdHVhdG9yQ1NTKFxuICAgICAgcHJvcGVydGllcy5iYWNrZ3JvdW5kLmFjdHVhdG9yLFxuICAgICAgcHJvcGVydGllcy5zaXplXG4gICAgKTtcbiAgICBhY3R1YXRvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgYW5pbWF0ZShzd2l0Y2hlc1tpXSwgZXZlbnQudGFyZ2V0LCBwcm9wZXJ0aWVzKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBBbmltYXRlIGJ1dHRvbiBvbiB3aGVuIHRyaWdnZXJlZFxuZnVuY3Rpb24gYW5pbWF0ZSh0b2dnbGVTd2l0Y2gsIGFjdHVhdG9yLCBwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IG1hcmdpbiA9IGFjdHVhdG9yLnN0eWxlLm1hcmdpbkxlZnQ7XG5cbiAgaWYgKG1hcmdpbiA9PT0gJycgfHwgbWFyZ2luID09PSBgJHtjYWxjKDMgKiBwcm9wZXJ0aWVzLnNpemUpfXB4YCkge1xuICAgIGFjdHVhdG9yLnN0eWxlLm1hcmdpbkxlZnQgPSBgJHtjYWxjKDE3LjUgKiBwcm9wZXJ0aWVzLnNpemUpfXB4YDtcbiAgICB0b2dnbGVTd2l0Y2guc3R5bGUuYmFja2dyb3VuZCA9IHByb3BlcnRpZXMuYmFja2dyb3VuZC5hY3RpdmU7XG4gIH0gZWxzZSB7XG4gICAgYWN0dWF0b3Iuc3R5bGUubWFyZ2luTGVmdCA9IGAke2NhbGMoMyAqIHByb3BlcnRpZXMuc2l6ZSl9cHhgO1xuICAgIHRvZ2dsZVN3aXRjaC5zdHlsZS5iYWNrZ3JvdW5kID0gcHJvcGVydGllcy5iYWNrZ3JvdW5kLnRvZ2dsZVN3aXRjaDtcbiAgfVxufVxuXG4vLyBDaGVjayBhbmQgZml4IG1pc3NpbmcgcHJvcGVydGllc1xuZnVuY3Rpb24gcHJvY2Vzc1Byb3BlcnRpZXMocHJvcGVydGllcykge1xuICBjb25zdCBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBzaXplOiAxLjMsXG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgYWN0aXZlOiAnIzNhZicsXG4gICAgICBhY3R1YXRvcjogJyNmZmYnLFxuICAgICAgdG9nZ2xlU3dpdGNoOiAnI2FhYScsXG4gICAgfSxcbiAgfTtcblxuICBPYmplY3QuZnJlZXplKGRlZmF1bHRQcm9wZXJ0aWVzKTtcblxuICBpZiAoIXByb3BlcnRpZXMpIHtcbiAgICBwcm9wZXJ0aWVzID0gc3RydWN0dXJlZENsb25lKGRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocHJvcGVydGllcy5zaXplKSBwcm9wZXJ0aWVzLnNpemUgPSBjYWxjKHByb3BlcnRpZXMuc2l6ZSk7XG5cbiAgICBpZiAoIXByb3BlcnRpZXMuYmFja2dyb3VuZCkge1xuICAgICAgcHJvcGVydGllcy5iYWNrZ3JvdW5kID0gZGVmYXVsdFByb3BlcnRpZXMuYmFja2dyb3VuZDtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKFxuICAgICAgICBwcm9wZXJ0aWVzLmJhY2tncm91bmQsXG4gICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzLmJhY2tncm91bmRcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuLy8gUHJlY2lzaW9uIENhbGN1bGF0ZWQgdmFsdWVzIHRvIG9uZSBkZWNpbWFsIHBvaW50XG5mdW5jdGlvbiBjYWxjKHZhbHVlKSB7XG4gIGxldCByZXN1bHQgPSBgJHt2YWx1ZS50b0ZpeGVkKDEpfWA7XG5cbiAgaWYgKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0gPT09ICcwJykgcmV0dXJuIHBhcnNlSW50KHZhbHVlKTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBHZXQgU3dpdGNoIENTUyB3aXRoIGFuIGFkanVzdG1lbnQgaW4gdmFsdWVzXG5mdW5jdGlvbiBzd2l0Y2hDU1MoYmcsIHNpemUpIHtcbiAgcmV0dXJuIGBcXFxuICAgIGJhY2tncm91bmQ6ICR7Ymd9O1xuICAgIGJvcmRlci1yYWRpdXM6ICR7MTAgKiBzaXplfXB4O1xuICAgIGhlaWdodDogJHsxNiAqIHNpemV9cHg7XG4gICAgd2lkdGg6ICR7MzIgKiBzaXplfXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogJHsxMCAqIHNpemV9cHg7XG4gICAgcGFkZGluZzogMDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC40cyBlYXNlLWluLW91dCAuM3NgO1xufVxuXG4vLyBHZXQgQWN0dWF0b3IgQ1NTIHdpdGggYW4gYWRqdXN0bWVudCBpbiB2YWx1ZXNcbmZ1bmN0aW9uIGFjdHVhdG9yQ1NTKGJnLCBzaXplKSB7XG4gIHJldHVybiBgXFxcbiAgICBib3JkZXItcmFkaXVzOiAkezEyICogc2l6ZX1weDtcbiAgICBiYWNrZ3JvdW5kOiAke2JnfTtcbiAgICBtYXJnaW46ICR7Y2FsYygzICogc2l6ZSl9cHggJHtjYWxjKDMgKiBzaXplKX1weDtcbiAgICBoZWlnaHQ6ICR7MTAgKiBzaXplfXB4O1xuICAgIHdpZHRoOiAkezEwICogc2l6ZX1weDtcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAuNnMgZWFzZS1pbi1vdXQgLjFzO2A7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgYWN0aXZhdGUsIG5ld0J0biB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKHF1ZXJ5KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uPycgK1xuICAgICAgICBga2V5PTdlMDU0MGY1ODhkODQxZmI4NTIxNDEzNTYyMzIxMDQmcT0ke3F1ZXJ5fSZkYXlzPTVgLFxuICAgICAgeyBjb3JzOiB0cnVlIH1cbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBpZiAoZGF0YS5lcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGRhdGEuZXJyb3IubWVzc2FnZSk7XG4gICAgfSBlbHNlIGlmICghT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJlZCcpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGF0YSk7XG4gIH0gY2F0Y2ggKGRhdGEpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZGF0YSk7XG4gIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaWNvbnMvc2VhcmNoLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpXFxuICAgICAgICAgICAgICBuby1yZXBlYXQgZml4ZWQgY2VudGVyL2NvdmVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFxuICAtLXNoYWRvdzogM3B4IDNweCA0cHggIzMzMztcXG4gIC0tdC1iZzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpOyBcXG4gIC0tYmFja2dyb3VuZDE6ICNmZmY7XFxuICAtLWNvbG9yOiAjMDAwO1xcbiAgLS1ib3JkZXItcmFkaXVzOiAwLjZlbTtcXG59XFxuXFxuYm9keSB7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGJhY2tncm91bmQ6ICNmZmY1O1xcbiAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMzMzM7XFxuICBtYXJnaW46IDAuNWVtO1xcbiAgcGFkZGluZzogMC4zZW07XFxuICBmbGV4OiAxO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG4vKiBIZXJvICovXFxuaGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDEuMmVtO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgbWFyZ2luOiAwLjNlbSAwLjJlbSAwLjFlbTtcXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjhlbTtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG4udW5pdCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgY29sb3I6ICMzMzM7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjhlbTtcXG59XFxuXFxuaGVhZGVyIGgxIHNwYW4ge1xcbiAgZm9udC1zaXplOiAxLjA1ZW07XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBnYXA6IDA7XFxuICBtYXJnaW46IDAuNWVtIDAuOGVtO1xcbiAgcGFkZGluZzogMC4xZW0gMC41ZW07XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgcGFkZGluZzogMC4yZW07XFxuICBmb250LXNpemU6IDEuMDZlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNkZGRkZGQ7XFxufVxcblxcbi5sb2NhdGlvbi1pbnB1dCB7XFxuICB3aWR0aDogMTIwcHg7XFxuICB0cmFuc2l0aW9uOiB3aWR0aCAuNXMgZWFzZS1pbi1vdXQgLjFzO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDAwMDA7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDAuMTZlbTtcXG59XFxuXFxuZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTsgIFxcbiAgd2lkdGg6IGNsYW1wKDEwMHB4LCAyNTBweCwgNDAwcHgpO1xcbn1cXG5cXG5mb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIHdpZHRoOiAxLjNlbTtcXG4gIGhlaWdodDogMS4zZW07XFxufVxcblxcblxcbi8qIEVycm9yIHBvcHVwICovXFxuLmVycm9yIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDk5LCA3MSk7XFxuICBjb2xvcjogcmdiKDI1NSwgOTksIDcxKTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjZlbTtcXG4gIHBhZGRpbmc6IDAuMTVlbSAwLjZlbTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgbWluLXdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uY2xvc2UtZXJyb3ItYnRuIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogcmdiKDI1NSwgOTksIDcxKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZvbnQtc2l6ZTogMS42ZW07XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1yaWdodDogMC4yZW07XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY2xvc2UtZXJyb3ItYnRuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcblxcbi5lcnJvciAubWVzc2FnZSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcblxcbi8qIFdlYXRoZXIgY29udGVudCAqL1xcbm1haW4ge1xcbiAgbWFyZ2luOiAwLjZlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaDQge1xcbiAgbWFyZ2luOiAwLjFlbTtcXG59XFxuXFxuXFxuLyogTG9hZGluZyBhbmltYXRpb24gKi9cXG4ubG9hZGVyIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiAjMzMzICMzMzMgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW46IDIuM2VtO1xcbiAgd2lkdGg6IDJlbTtcXG4gIGhlaWdodDogMmVtO1xcbiAgYW5pbWF0aW9uOiBzcGluIDEuNXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFOzBDQUN3QztFQUN4QyxhQUFhO0VBQ2IsbUJBQW1COztFQUVuQiwwQkFBMEI7RUFDMUIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakMsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QsT0FBTztFQUNQLFlBQVk7QUFDZDs7O0FBR0EsU0FBUztBQUNUO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixNQUFNO0VBQ04sbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usb0VBQThEO0VBQzlELHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osYUFBYTtBQUNmOzs7QUFHQSxnQkFBZ0I7QUFDaEI7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1DQUFtQztFQUNuQyxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7OztBQUdBLG9CQUFvQjtBQUNwQjtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7OztBQUdBLHNCQUFzQjtBQUN0QjtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFVBQVU7RUFDVixXQUFXO0VBQ1gsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL2JhY2tncm91bmQuanBnJylcXG4gICAgICAgICAgICAgIG5vLXJlcGVhdCBmaXhlZCBjZW50ZXIvY292ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXG4gIC0tc2hhZG93OiAzcHggM3B4IDRweCAjMzMzO1xcbiAgLS10LWJnOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7IFxcbiAgLS1iYWNrZ3JvdW5kMTogI2ZmZjtcXG4gIC0tY29sb3I6ICMwMDA7XFxuICAtLWJvcmRlci1yYWRpdXM6IDAuNmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgYmFja2dyb3VuZDogI2ZmZjU7XFxuICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzMzMztcXG4gIG1hcmdpbjogMC41ZW07XFxuICBwYWRkaW5nOiAwLjNlbTtcXG4gIGZsZXg6IDE7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcbi8qIEhlcm8gKi9cXG5oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMS4yZW07XFxufVxcblxcbmhlYWRlciBoMSB7XFxuICBtYXJnaW46IDAuM2VtIDAuMmVtIDAuMWVtO1xcbiAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuOGVtO1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcbi51bml0IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjb2xvcjogIzMzMztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWxlZnQ6IDAuOGVtO1xcbn1cXG5cXG5oZWFkZXIgaDEgc3BhbiB7XFxuICBmb250LXNpemU6IDEuMDVlbTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGdhcDogMDtcXG4gIG1hcmdpbjogMC41ZW0gMC44ZW07XFxuICBwYWRkaW5nOiAwLjFlbSAwLjVlbTtcXG59XFxuXFxuZm9ybSBpbnB1dCB7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIGZvbnQtc2l6ZTogMS4wNmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5mb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI2RkZGRkZDtcXG59XFxuXFxuLmxvY2F0aW9uLWlucHV0IHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIHRyYW5zaXRpb246IHdpZHRoIC41cyBlYXNlLWluLW91dCAuMXM7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwMDAwMDtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMC4xNmVtO1xcbn1cXG5cXG5mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lOyAgXFxuICB3aWR0aDogY2xhbXAoMTAwcHgsIDI1MHB4LCA0MDBweCk7XFxufVxcblxcbmZvcm0gaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvaWNvbnMvc2VhcmNoLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICB3aWR0aDogMS4zZW07XFxuICBoZWlnaHQ6IDEuM2VtO1xcbn1cXG5cXG5cXG4vKiBFcnJvciBwb3B1cCAqL1xcbi5lcnJvciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCA5OSwgNzEpO1xcbiAgY29sb3I6IHJnYigyNTUsIDk5LCA3MSk7XFxuICBtYXJnaW4tbGVmdDogMC42ZW07XFxuICBwYWRkaW5nOiAwLjE1ZW0gMC42ZW07XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG1pbi13aWR0aDogNTBweDtcXG59XFxuXFxuLmNsb3NlLWVycm9yLWJ0biB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IHJnYigyNTUsIDk5LCA3MSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmb250LXNpemU6IDEuNmVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNsb3NlLWVycm9yLWJ0bjphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG5cXG4uZXJyb3IgLm1lc3NhZ2Uge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5cXG4vKiBXZWF0aGVyIGNvbnRlbnQgKi9cXG5tYWluIHtcXG4gIG1hcmdpbjogMC42ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmg0IHtcXG4gIG1hcmdpbjogMC4xZW07XFxufVxcblxcblxcbi8qIExvYWRpbmcgYW5pbWF0aW9uICovXFxuLmxvYWRlciB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci13aWR0aDogNHB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogIzMzMyAjMzMzIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luOiAyLjNlbTtcXG4gIHdpZHRoOiAyZW07XFxuICBoZWlnaHQ6IDJlbTtcXG4gIGFuaW1hdGlvbjogc3BpbiAxLjVzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRlbXBlcmF0dXJlIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDQuMGVtO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY2xvdWQtaWNvbiB7XFxuICBoZWlnaHQ6IDhlbTtcXG4gIHdpZHRoOiA4ZW07XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVlbTtcXG4gIGJhY2tncm91bmQ6ICMwMDAxO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZ2FwOiAxLjJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndpbmQsXFxuLmNsb3VkLFxcbi50ZW1wZXJhdHVyZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ud2luZCA+IGRpdiB7XFxuICBtYXJnaW46IDAuM2VtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3dlYXRoZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50ZW1wZXJhdHVyZSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiA0LjBlbTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNsb3VkLWljb24ge1xcbiAgaGVpZ2h0OiA4ZW07XFxuICB3aWR0aDogOGVtO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBib3JkZXItcmFkaXVzOiA1ZW07XFxuICBiYWNrZ3JvdW5kOiAjMDAwMTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGdhcDogMS4yZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53aW5kLFxcbi5jbG91ZCxcXG4udGVtcGVyYXR1cmUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndpbmQgPiBkaXYge1xcbiAgbWFyZ2luOiAwLjNlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dlYXRoZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWF0aGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbImVycm9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZXJyb3JNc2ciLCJtYWluIiwic2hvd0Vycm9yIiwibWVzc2FnZSIsInN0eWxlIiwidmlzaWJpbGl0eSIsInRleHRDb250ZW50IiwiY2xvc2VFcnJvciIsInNob3dXZWF0aGVyIiwiZGF0YSIsImNsZWFyV2VhdGhlciIsImNsb3VkIiwiY3JlYXRlRWxlbWVudCIsImNsb3VkSWNvbiIsImNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZSIsImN1cnJlbnQiLCJjb25kaXRpb24iLCJpY29uIiwiY2xvdWRUeXBlIiwidGV4dCIsImFwcGVuZENoaWxkIiwidGVtcGVyYXR1cmUiLCJjb25jYXQiLCJwYXJzZUludCIsInRlbXBfZiIsIndpbmQiLCJoZWFkaW5nIiwiY29udGFpbmVyIiwid2luZERpcmVjdGlvbiIsImRpcmVjdGlvbiIsIndpbmRfZGlyIiwid2luZERlZ3JlZSIsImRlZ3JlZSIsIndpbmRfZGVncmVlIiwid2luZFNwZWVkIiwia3BoIiwid2luZF9rcGgiLCJtcGgiLCJ3aW5kX21waCIsImxvYWRpbmciLCJsb2FkZXIiLCJfdHlwZW9mIiwib2JqIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiRE9NIiwiZ2V0V2VhdGhlciIsInRvZ2dsZVN3aXRjaCIsImlucHV0Iiwic3VibWl0QnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9yZWYiLCJfY2FsbGVlIiwiZXZlbnQiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwidmFsaWRpdHkiLCJ2YWx1ZU1pc3NpbmciLCJkaXNwbGF5V2VhdGhlciIsInByZXZlbnREZWZhdWx0IiwiX3giLCJoaWRlRXJyb3IiLCJhY3RpdmF0ZSIsIm5ld0J0biIsInByb3BlcnRpZXMiLCJwcm9jZXNzUHJvcGVydGllcyIsImNzc1RleHQiLCJzd2l0Y2hDU1MiLCJiYWNrZ3JvdW5kIiwic2l6ZSIsImFjdHVhdG9yIiwiYWN0dWF0b3JDU1MiLCJhbmltYXRlIiwidGFyZ2V0IiwiZG9tIiwic3dpdGNoZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2xvb3AiLCJtYXJnaW4iLCJtYXJnaW5MZWZ0IiwiY2FsYyIsImFjdGl2ZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiZnJlZXplIiwic3RydWN0dXJlZENsb25lIiwidG9GaXhlZCIsImJnIiwiX2dldFdlYXRoZXIiLCJxdWVyeSIsInJlc3BvbnNlIiwiZmV0Y2giLCJjb3JzIiwianNvbiIsInQwIl0sInNvdXJjZVJvb3QiOiIifQ==