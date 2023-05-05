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

/**************************************************
 * Functions provided outside modular use
 **************************************************/
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  showError: function showError(message) {
    error.style.visibility = 'visible';
    errorMsg.textContent = message;
    main.textContent = '';
  },
  closeError: function closeError() {
    error.style.visibility = 'hidden';
    errorMsg.textContent = '';
  },
  showWeather: function showWeather(weatherData, units) {
    this.clearWeather();
    main.appendChild(currentWeather(weatherData, units));
    main.appendChild(forecast(weatherData.forecast, units.tempUnit));
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

/**************************************************
 *  Creates all DOM elements using data of current
 *  weather.
 **************************************************/
function currentWeather(weatherData, units) {
  var wetherDOM = document.createElement('section');
  wetherDOM.className = 'current';
  var heading = document.createElement('h4');
  heading.textContent = 'Currently';
  wetherDOM.appendChild(heading);
  var childrenDOM = [location(weatherData.location), condition(weatherData.current.condition), temperature(weatherData.current, units.tempUnit), wind(weatherData.current, units.speedUnit), other(weatherData.current, units.speedUnit)];
  for (var _i = 0, _childrenDOM = childrenDOM; _i < _childrenDOM.length; _i++) {
    var dom = _childrenDOM[_i];
    wetherDOM.appendChild(dom);
  }
  return wetherDOM;
}
function forecast(weatherData, tempUnit) {
  var forecastDOM = document.createElement('section');
  forecastDOM.className = 'forecast';
  var heading = document.createElement('h4');
  heading.textContent = 'Forecast';
  forecastDOM.appendChild(heading);
  for (var i = 0; i < weatherData.forecastday.length; ++i) {
    var day = document.createElement('div');
    day.className = 'forecast-day';
    var _temperature = document.createElement('div');
    _temperature.className = 'temperature';
    _temperature.textContent = "".concat(weatherData.forecastday[i].day['avgtemp_' + tempUnit]).concat(tempUnit.toUpperCase());
    var icon = document.createElement('img');
    icon.className = 'icon';
    icon.src = weatherData.forecastday[i].day.condition.icon;
    var date = document.createElement('div');
    date.className = 'date';
    date.textContent = weatherData.forecastday[i].date;
    day.appendChild(_temperature);
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
  var locationDOM = document.createElement('section');
  locationDOM.className = 'location';
  locationDOM.textContent = "".concat(locationData.name, ", ").concat(locationData.country);
  return locationDOM;
}

// Generate DOM for condition data
function condition(conditionData) {
  var conditionDOM = document.createElement('section');
  conditionDOM.className = 'condition';
  var icon = document.createElement('img');
  icon.src = conditionData.icon;
  var text = document.createElement('p');
  text.textContent = conditionData.text;
  conditionDOM.appendChild(icon);
  conditionDOM.appendChild(text);
  return conditionDOM;
}

// Generate DOM for temperature data
function temperature(weatherData, tempUnit) {
  var temperatureDOM = document.createElement('div');
  temperatureDOM.textContent = "".concat(weatherData['temp_' + tempUnit]).concat(tempUnit.toUpperCase());
  temperatureDOM.className = 'temperature';
  return temperatureDOM;
}

// Generate DOM for wind data
function wind(weatherData, speedUnit) {
  var windAngle = document.createElement('div');
  windAngle.textContent = "".concat(weatherData.wind_degree, "\xB0");
  var windDir = document.createElement('div');
  windDir.textContent = weatherData.wind_dir;
  var windSpeed = document.createElement('div');
  windSpeed.textContent = "".concat(weatherData['wind_' + speedUnit]).concat(speedUnit);
  windSpeed.className = 'wind-speed';
  var windInfo = document.createElement('section');
  windInfo.appendChild(windAngle);
  windInfo.appendChild(windDir);
  windInfo.appendChild(windSpeed);
  var heading = document.createElement('h3');
  heading.textContent = 'Wind';
  var windDOM = document.createElement('div');
  windDOM.className = 'wind';
  windDOM.appendChild(heading);
  windDOM.appendChild(windInfo);
  return windDOM;
}

// Generate DOM for other data
function other(weatherData, speedUnit) {
  var container = document.createElement('section');
  container.className = 'other';
  var title = ['UV', 'Gust', 'Humidity', 'Day'];
  var keys = ['uv', 'gust_', 'humidity', 'is_day'];
  for (var i = 0; i < title.length; i++) {
    var heading = document.createElement('h4');
    heading.textContent = title[i];
    var value = document.createElement('div');
    if (keys[i] === 'gust_') value.textContent = weatherData[keys[i] + speedUnit] + speedUnit;else value.textContent = weatherData[keys[i]];
    value.className = title[i].toLowerCase();
    var section = document.createElement('section');
    section.appendChild(heading);
    section.appendChild(value);
    container.appendChild(section);
  }
  return container;
}

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


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var tempUnit = 'f';
var speedUnit = 'kph';

/**************************************************
 * Fetch and display weather report
 *************************************************/
var queryBtn = document.querySelector('.get-weather');
queryBtn.addEventListener('click', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
    var locationInput;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          locationInput = document.querySelector('.location-input');
          if (locationInput.validity.valueMissing === false) {
            showWeather(locationInput.value, {
              speedUnit: speedUnit,
              tempUnit: tempUnit
            });
          } else _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].showError('Search item not provided');
          event.preventDefault();
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

/**************************************************
 * Clear error message when error close button is
 * clicked.
 *************************************************/
var closeErrorBtn = document.querySelector('.close-error-btn');
closeErrorBtn.addEventListener('click', _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].closeError);

/**************************************************
 * Get weather report of location entered by user
 * and display results.
 *************************************************/
var weatherReport;
function showWeather(query, units) {
  _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].loading();
  var data = (0,_weather_js__WEBPACK_IMPORTED_MODULE_1__["default"])(query);
  data.then(function (data) {
    weatherReport = data;
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].showWeather(data, units);
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].closeError();
  })["catch"](function (data) {
    weatherReport = undefined;
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].showError(data.message);
  });
}

/**************************************************
 * Convert temperature or speed when their various
 * buttons are clicked.
 *************************************************/
// Temperature unit conversion button
var tempConverter = document.querySelector('.temp .toggle-switch-actuator');
tempConverter.addEventListener('click', function (event) {
  var currentTemp = document.querySelector('.current .temperature');
  if (tempUnit === 'f') {
    tempUnit = 'c';
    var temperature = weatherReport.current.temp_c;
    currentTemp.textContent = "".concat(parseInt(temperature), "\xB0C");
  } else {
    tempUnit = 'f';
    var _temperature = weatherReport.current.temp_f;
    currentTemp.textContent = "".concat(parseInt(_temperature), "F");
  }
  var forecast = document.querySelectorAll('.forecast-day');
  for (var i = 0; i < forecast.length; ++i) {
    var temp = forecast[i].querySelector('.temperature');
    var _temperature2 = weatherReport.forecast.forecastday[i].day['avgtemp_' + tempUnit];
    if (tempUnit === 'c') temp.textContent = "".concat(parseInt(_temperature2), "\xB0C");else temp.textContent = "".concat(parseInt(_temperature2), "F");
  }
  event.stopPropagation();
});

// Speed unit conversion button
var speedConverter = document.querySelector('.speed .toggle-switch-actuator');
speedConverter.addEventListener('click', function (event) {
  var windSpeed = document.querySelector('.wind .wind-speed');
  var gust = document.querySelector('.other .gust');
  if (speedUnit === 'kph') speedUnit = 'mph';else speedUnit = 'kph';
  windSpeed.textContent = weatherReport.current['wind_' + speedUnit] + speedUnit;
  gust.textContent = weatherReport.current['gust_' + speedUnit] + speedUnit;
  event.stopPropagation();
});
showWeather('Accra, Ghana', {
  speedUnit: speedUnit,
  tempUnit: tempUnit
});
_toggleSwitch_js__WEBPACK_IMPORTED_MODULE_2__["default"].activate();

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
  return "    background: ".concat(bg, ";\n    border-radius: ").concat(10 * size, "px;\n    height: ").concat(16 * size, "px;\n    width: ").concat(32 * size, "px;\n    display: inline-flex;\n    justify-content: left;\n    align-items: center;\n    margin: ").concat(5 * size, "px;\n    padding: 0;\n    transition: background .4s ease-in-out .3s");
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
    var piece, response, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          piece = {
            1: 'f588d841',
            2: '1413562'
          };
          _context.prev = 1;
          _context.next = 4;
          return fetch('https://api.weatherapi.com/v1/forecast.json?' + "key=7e0540".concat(piece['1'], "fb852").concat(piece['2'], "32104&q=").concat(query, "&days=3"), {
            cors: true
          });
        case 4:
          response = _context.sent;
          _context.next = 7;
          return response.json();
        case 7:
          data = _context.sent;
          if (!(data.error == undefined)) {
            _context.next = 10;
            break;
          }
          return _context.abrupt("return", data);
        case 10:
          throw data.error;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", Promise.reject(_context.t0));
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 13]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL3NyYy9zY3JpcHRzL2RvbS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL3NyYy9zY3JpcHRzL3RvZ2dsZVN3aXRjaC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vc3JjL3NjcmlwdHMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZXMvd2VhdGhlci5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcicpO1xuY29uc3QgZXJyb3JNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3IgLm1lc3NhZ2UnKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogRnVuY3Rpb25zIHByb3ZpZGVkIG91dHNpZGUgbW9kdWxhciB1c2VcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2hvd0Vycm9yKG1lc3NhZ2UpIHtcbiAgICBlcnJvci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIGVycm9yTXNnLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gIH0sXG5cbiAgY2xvc2VFcnJvcigpIHtcbiAgICBlcnJvci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgZXJyb3JNc2cudGV4dENvbnRlbnQgPSAnJztcbiAgfSxcblxuICBzaG93V2VhdGhlcih3ZWF0aGVyRGF0YSwgdW5pdHMpIHtcbiAgICB0aGlzLmNsZWFyV2VhdGhlcigpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXIod2VhdGhlckRhdGEsIHVuaXRzKSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChmb3JlY2FzdCh3ZWF0aGVyRGF0YS5mb3JlY2FzdCwgdW5pdHMudGVtcFVuaXQpKTtcbiAgfSxcblxuICBjbGVhcldlYXRoZXIoKSB7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICB9LFxuXG4gIGxvYWRpbmcoKSB7XG4gICAgdGhpcy5jbGVhcldlYXRoZXIoKTtcbiAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2FkZXIuY2xhc3NOYW1lID0gJ2xvYWRlcic7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChsb2FkZXIpO1xuICB9LFxufTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiAgQ3JlYXRlcyBhbGwgRE9NIGVsZW1lbnRzIHVzaW5nIGRhdGEgb2YgY3VycmVudFxuICogIHdlYXRoZXIuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5mdW5jdGlvbiBjdXJyZW50V2VhdGhlcih3ZWF0aGVyRGF0YSwgdW5pdHMpIHtcbiAgY29uc3Qgd2V0aGVyRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICB3ZXRoZXJET00uY2xhc3NOYW1lID0gJ2N1cnJlbnQnO1xuXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0N1cnJlbnRseSc7XG4gIHdldGhlckRPTS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICBjb25zdCBjaGlsZHJlbkRPTSA9IFtcbiAgICBsb2NhdGlvbih3ZWF0aGVyRGF0YS5sb2NhdGlvbiksXG4gICAgY29uZGl0aW9uKHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uKSxcbiAgICB0ZW1wZXJhdHVyZSh3ZWF0aGVyRGF0YS5jdXJyZW50LCB1bml0cy50ZW1wVW5pdCksXG4gICAgd2luZCh3ZWF0aGVyRGF0YS5jdXJyZW50LCB1bml0cy5zcGVlZFVuaXQpLFxuICAgIG90aGVyKHdlYXRoZXJEYXRhLmN1cnJlbnQsIHVuaXRzLnNwZWVkVW5pdCksXG4gIF07XG5cbiAgZm9yIChsZXQgZG9tIG9mIGNoaWxkcmVuRE9NKSB3ZXRoZXJET00uYXBwZW5kQ2hpbGQoZG9tKTtcblxuICByZXR1cm4gd2V0aGVyRE9NO1xufVxuXG5mdW5jdGlvbiBmb3JlY2FzdCh3ZWF0aGVyRGF0YSwgdGVtcFVuaXQpIHtcbiAgY29uc3QgZm9yZWNhc3RET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGZvcmVjYXN0RE9NLmNsYXNzTmFtZSA9ICdmb3JlY2FzdCc7XG5cbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnRm9yZWNhc3QnO1xuICBmb3JlY2FzdERPTS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHdlYXRoZXJEYXRhLmZvcmVjYXN0ZGF5Lmxlbmd0aDsgKytpKSB7XG4gICAgY29uc3QgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF5LmNsYXNzTmFtZSA9ICdmb3JlY2FzdC1kYXknO1xuXG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZW1wZXJhdHVyZS5jbGFzc05hbWUgPSAndGVtcGVyYXR1cmUnO1xuICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7XG4gICAgICB3ZWF0aGVyRGF0YS5mb3JlY2FzdGRheVtpXS5kYXlbJ2F2Z3RlbXBfJyArIHRlbXBVbml0XVxuICAgIH0ke3RlbXBVbml0LnRvVXBwZXJDYXNlKCl9YDtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaWNvbi5jbGFzc05hbWUgPSAnaWNvbic7XG4gICAgaWNvbi5zcmMgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdGRheVtpXS5kYXkuY29uZGl0aW9uLmljb247XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhdGUuY2xhc3NOYW1lID0gJ2RhdGUnO1xuICAgIGRhdGUudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdGRheVtpXS5kYXRlO1xuXG4gICAgZGF5LmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlKTtcbiAgICBkYXkuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgZGF5LmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgZm9yZWNhc3RET00uYXBwZW5kQ2hpbGQoZGF5KTtcbiAgfVxuXG4gIHJldHVybiBmb3JlY2FzdERPTTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBGdW5jdGlvbnMgdGhhdCBjcmVhdGUgdmFyaW91cyB3ZWF0aGVyIGRhdGFcbiAqIGNvbXBvbmVudHMuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vLyBHZW5lcmF0ZSBET00gZm9yIGxvY2F0aW9uIGRhdGFcbmZ1bmN0aW9uIGxvY2F0aW9uKGxvY2F0aW9uRGF0YSkge1xuICBjb25zdCBsb2NhdGlvbkRPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgbG9jYXRpb25ET00uY2xhc3NOYW1lID0gJ2xvY2F0aW9uJztcbiAgbG9jYXRpb25ET00udGV4dENvbnRlbnQgPSBgJHtsb2NhdGlvbkRhdGEubmFtZX0sICR7bG9jYXRpb25EYXRhLmNvdW50cnl9YDtcblxuICByZXR1cm4gbG9jYXRpb25ET007XG59XG5cbi8vIEdlbmVyYXRlIERPTSBmb3IgY29uZGl0aW9uIGRhdGFcbmZ1bmN0aW9uIGNvbmRpdGlvbihjb25kaXRpb25EYXRhKSB7XG4gIGNvbnN0IGNvbmRpdGlvbkRPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgY29uZGl0aW9uRE9NLmNsYXNzTmFtZSA9ICdjb25kaXRpb24nO1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGljb24uc3JjID0gY29uZGl0aW9uRGF0YS5pY29uO1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gY29uZGl0aW9uRGF0YS50ZXh0O1xuICBjb25kaXRpb25ET00uYXBwZW5kQ2hpbGQoaWNvbik7XG4gIGNvbmRpdGlvbkRPTS5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICByZXR1cm4gY29uZGl0aW9uRE9NO1xufVxuXG4vLyBHZW5lcmF0ZSBET00gZm9yIHRlbXBlcmF0dXJlIGRhdGFcbmZ1bmN0aW9uIHRlbXBlcmF0dXJlKHdlYXRoZXJEYXRhLCB0ZW1wVW5pdCkge1xuICBjb25zdCB0ZW1wZXJhdHVyZURPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0ZW1wZXJhdHVyZURPTS50ZXh0Q29udGVudCA9IGAke1xuICAgIHdlYXRoZXJEYXRhWyd0ZW1wXycgKyB0ZW1wVW5pdF1cbiAgfSR7dGVtcFVuaXQudG9VcHBlckNhc2UoKX1gO1xuICB0ZW1wZXJhdHVyZURPTS5jbGFzc05hbWUgPSAndGVtcGVyYXR1cmUnO1xuXG4gIHJldHVybiB0ZW1wZXJhdHVyZURPTTtcbn1cblxuLy8gR2VuZXJhdGUgRE9NIGZvciB3aW5kIGRhdGFcbmZ1bmN0aW9uIHdpbmQod2VhdGhlckRhdGEsIHNwZWVkVW5pdCkge1xuICBjb25zdCB3aW5kQW5nbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2luZEFuZ2xlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEud2luZF9kZWdyZWV9wrBgO1xuICBjb25zdCB3aW5kRGlyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdpbmREaXIudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS53aW5kX2RpcjtcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhWyd3aW5kXycgKyBzcGVlZFVuaXRdfSR7c3BlZWRVbml0fWA7XG4gIHdpbmRTcGVlZC5jbGFzc05hbWUgPSAnd2luZC1zcGVlZCc7XG5cbiAgY29uc3Qgd2luZEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIHdpbmRJbmZvLmFwcGVuZENoaWxkKHdpbmRBbmdsZSk7XG4gIHdpbmRJbmZvLmFwcGVuZENoaWxkKHdpbmREaXIpO1xuICB3aW5kSW5mby5hcHBlbmRDaGlsZCh3aW5kU3BlZWQpO1xuXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1dpbmQnO1xuXG4gIGNvbnN0IHdpbmRET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2luZERPTS5jbGFzc05hbWUgPSAnd2luZCc7XG4gIHdpbmRET00uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIHdpbmRET00uYXBwZW5kQ2hpbGQod2luZEluZm8pO1xuXG4gIHJldHVybiB3aW5kRE9NO1xufVxuXG4vLyBHZW5lcmF0ZSBET00gZm9yIG90aGVyIGRhdGFcbmZ1bmN0aW9uIG90aGVyKHdlYXRoZXJEYXRhLCBzcGVlZFVuaXQpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjb250YWluZXIuY2xhc3NOYW1lID0gJ290aGVyJztcblxuICBjb25zdCB0aXRsZSA9IFsnVVYnLCAnR3VzdCcsICdIdW1pZGl0eScsICdEYXknXTtcbiAgY29uc3Qga2V5cyA9IFsndXYnLCAnZ3VzdF8nLCAnaHVtaWRpdHknLCAnaXNfZGF5J107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSB0aXRsZVtpXTtcbiAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlmIChrZXlzW2ldID09PSAnZ3VzdF8nKVxuICAgICAgdmFsdWUudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YVtrZXlzW2ldICsgc3BlZWRVbml0XSArIHNwZWVkVW5pdDtcbiAgICBlbHNlIHZhbHVlLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGFba2V5c1tpXV07XG4gICAgdmFsdWUuY2xhc3NOYW1lID0gdGl0bGVbaV0udG9Mb3dlckNhc2UoKTtcblxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHZhbHVlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG4gIH1cblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgRE9NIGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCBnZXRXZWF0aGVyIGZyb20gJy4vd2VhdGhlci5qcyc7XG5pbXBvcnQgdG9nZ2xlU3dpdGNoIGZyb20gJy4vdG9nZ2xlU3dpdGNoLmpzJztcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLmNzcyc7XG5cbmxldCB0ZW1wVW5pdCA9ICdmJztcbmxldCBzcGVlZFVuaXQgPSAna3BoJztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBGZXRjaCBhbmQgZGlzcGxheSB3ZWF0aGVyIHJlcG9ydFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5jb25zdCBxdWVyeUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZXQtd2VhdGhlcicpO1xucXVlcnlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgY29uc3QgbG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi1pbnB1dCcpO1xuXG4gIGlmIChsb2NhdGlvbklucHV0LnZhbGlkaXR5LnZhbHVlTWlzc2luZyA9PT0gZmFsc2UpIHtcbiAgICBzaG93V2VhdGhlcihsb2NhdGlvbklucHV0LnZhbHVlLCB7IHNwZWVkVW5pdCwgdGVtcFVuaXQgfSk7XG4gIH0gZWxzZSBET00uc2hvd0Vycm9yKCdTZWFyY2ggaXRlbSBub3QgcHJvdmlkZWQnKTtcblxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogQ2xlYXIgZXJyb3IgbWVzc2FnZSB3aGVuIGVycm9yIGNsb3NlIGJ1dHRvbiBpc1xuICogY2xpY2tlZC5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuY29uc3QgY2xvc2VFcnJvckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1lcnJvci1idG4nKTtcbmNsb3NlRXJyb3JCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET00uY2xvc2VFcnJvcik7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogR2V0IHdlYXRoZXIgcmVwb3J0IG9mIGxvY2F0aW9uIGVudGVyZWQgYnkgdXNlclxuICogYW5kIGRpc3BsYXkgcmVzdWx0cy5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xubGV0IHdlYXRoZXJSZXBvcnQ7XG5cbmZ1bmN0aW9uIHNob3dXZWF0aGVyKHF1ZXJ5LCB1bml0cykge1xuICBET00ubG9hZGluZygpO1xuICBjb25zdCBkYXRhID0gZ2V0V2VhdGhlcihxdWVyeSk7XG4gIGRhdGFcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgd2VhdGhlclJlcG9ydCA9IGRhdGE7XG4gICAgICBET00uc2hvd1dlYXRoZXIoZGF0YSwgdW5pdHMpO1xuICAgICAgRE9NLmNsb3NlRXJyb3IoKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZGF0YSkgPT4ge1xuICAgICAgd2VhdGhlclJlcG9ydCA9IHVuZGVmaW5lZDtcbiAgICAgIERPTS5zaG93RXJyb3IoZGF0YS5tZXNzYWdlKTtcbiAgICB9KTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBDb252ZXJ0IHRlbXBlcmF0dXJlIG9yIHNwZWVkIHdoZW4gdGhlaXIgdmFyaW91c1xuICogYnV0dG9ucyBhcmUgY2xpY2tlZC5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLy8gVGVtcGVyYXR1cmUgdW5pdCBjb252ZXJzaW9uIGJ1dHRvblxuY29uc3QgdGVtcENvbnZlcnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wIC50b2dnbGUtc3dpdGNoLWFjdHVhdG9yJyk7XG50ZW1wQ29udmVydGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQgLnRlbXBlcmF0dXJlJyk7XG5cbiAgaWYgKHRlbXBVbml0ID09PSAnZicpIHtcbiAgICB0ZW1wVW5pdCA9ICdjJztcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IHdlYXRoZXJSZXBvcnQuY3VycmVudC50ZW1wX2M7XG4gICAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBgJHtwYXJzZUludCh0ZW1wZXJhdHVyZSl9wrBDYDtcbiAgfSBlbHNlIHtcbiAgICB0ZW1wVW5pdCA9ICdmJztcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IHdlYXRoZXJSZXBvcnQuY3VycmVudC50ZW1wX2Y7XG4gICAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBgJHtwYXJzZUludCh0ZW1wZXJhdHVyZSl9RmA7XG4gIH1cblxuICBjb25zdCBmb3JlY2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JlY2FzdC1kYXknKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JlY2FzdC5sZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IHRlbXAgPSBmb3JlY2FzdFtpXS5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKTtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9XG4gICAgICB3ZWF0aGVyUmVwb3J0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheVsnYXZndGVtcF8nICsgdGVtcFVuaXRdO1xuICAgIGlmICh0ZW1wVW5pdCA9PT0gJ2MnKSB0ZW1wLnRleHRDb250ZW50ID0gYCR7cGFyc2VJbnQodGVtcGVyYXR1cmUpfcKwQ2A7XG4gICAgZWxzZSB0ZW1wLnRleHRDb250ZW50ID0gYCR7cGFyc2VJbnQodGVtcGVyYXR1cmUpfUZgO1xuICB9XG5cbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59KTtcblxuLy8gU3BlZWQgdW5pdCBjb252ZXJzaW9uIGJ1dHRvblxuY29uc3Qgc3BlZWRDb252ZXJ0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BlZWQgLnRvZ2dsZS1zd2l0Y2gtYWN0dWF0b3InKTtcbnNwZWVkQ29udmVydGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kIC53aW5kLXNwZWVkJyk7XG4gIGNvbnN0IGd1c3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3RoZXIgLmd1c3QnKTtcblxuICBpZiAoc3BlZWRVbml0ID09PSAna3BoJykgc3BlZWRVbml0ID0gJ21waCc7XG4gIGVsc2Ugc3BlZWRVbml0ID0gJ2twaCc7XG5cbiAgd2luZFNwZWVkLnRleHRDb250ZW50ID1cbiAgICB3ZWF0aGVyUmVwb3J0LmN1cnJlbnRbJ3dpbmRfJyArIHNwZWVkVW5pdF0gKyBzcGVlZFVuaXQ7XG4gIGd1c3QudGV4dENvbnRlbnQgPSB3ZWF0aGVyUmVwb3J0LmN1cnJlbnRbJ2d1c3RfJyArIHNwZWVkVW5pdF0gKyBzcGVlZFVuaXQ7XG5cbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59KTtcblxuc2hvd1dlYXRoZXIoJ0FjY3JhLCBHaGFuYScsIHsgc3BlZWRVbml0LCB0ZW1wVW5pdCB9KTtcbnRvZ2dsZVN3aXRjaC5hY3RpdmF0ZSgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBTd2l0Y2ggdGVtcGxhdGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICA8ZGl2IGNsYXNzPScudG9nZ2xlLXN3aXRjaCc+XG4gICAgIDxkaXYgY2xhc3M9J3RvZ2dsZS1zd2l0Y2gtYWN0dWF0b3InPjwvZGl2PlxuICAgPC9kaXY+XG5cbiAgIGNvbnN0IHByb3BlcnRpZXMgPSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgc2l6ZTogMS4zLFxuICAgICBjb2xvcjoge1xuICAgICAgIGJvZHk6IGdyZXk7XG4gICAgICAgYWN0dWF0b3I6ICcjN2FmJyxcbiAgICAgICBhY3RpdmU6ICM2NWYsXG4gICAgIH1cbiAgIH07XG5cbiAgIC8vIE1vZHVsZSB1c2FnZTpcbiAgIGNvbnN0IGJ1dHRvbiA9IG5ld0J0bihwcm9wZXJ0aWVzKTtcbiAgIGFjdGl2YXRlKHByb3BlcnRpZXMsIERPTSk7XG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vLyBHZW5lcmF0ZSBhbmQgcmV0dXJucyBuZXcgdG9nZ2xlIHN3aXRjaCBkb21cbmZ1bmN0aW9uIG5ld0J0bihwcm9wZXJ0aWVzKSB7XG4gIHByb3BlcnRpZXMgPSBwcm9jZXNzUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICBjb25zdCB0b2dnbGVTd2l0Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9nZ2xlU3dpdGNoLmNsYXNzTmFtZSA9ICd0b2dnbGUtc3dpdGNoJztcbiAgdG9nZ2xlU3dpdGNoLnN0eWxlLmNzc1RleHQgPSBzd2l0Y2hDU1MoXG4gICAgcHJvcGVydGllcy5iYWNrZ3JvdW5kLnRvZ2dsZVN3aXRjaCxcbiAgICBwcm9wZXJ0aWVzLnNpemVcbiAgKTtcblxuICBjb25zdCBhY3R1YXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhY3R1YXRvci5jbGFzc05hbWUgPSAndG9nZ2xlLXN3aXRjaC1hY3R1YXRvcic7XG4gIGFjdHVhdG9yLnN0eWxlLmNzc1RleHQgPSBhY3R1YXRvckNTUyhcbiAgICBwcm9wZXJ0aWVzLmJhY2tncm91bmQuYWN0dWF0b3IsXG4gICAgcHJvcGVydGllcy5zaXplXG4gICk7XG4gIGFjdHVhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgYW5pbWF0ZSh0b2dnbGVTd2l0Y2gsIGV2ZW50LnRhcmdldCwgcHJvcGVydGllcyk7XG4gIH0pO1xuXG4gIHRvZ2dsZVN3aXRjaC5hcHBlbmRDaGlsZChhY3R1YXRvcik7XG5cbiAgcmV0dXJuIHRvZ2dsZVN3aXRjaDtcbn1cblxuLy8gVHVybnMgYWxsIGVsZW1lbnRzIGluIGRvbSB3aXRoIFwidG9nZ2xlLXN3aXRjaFwiIGNsYXNzIHRvIHN3aXRjaGVzXG5mdW5jdGlvbiBhY3RpdmF0ZShwcm9wZXJ0aWVzLCBkb20pIHtcbiAgbGV0IHN3aXRjaGVzO1xuICBwcm9wZXJ0aWVzID0gcHJvY2Vzc1Byb3BlcnRpZXMocHJvcGVydGllcyk7XG5cbiAgaWYgKGRvbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3dpdGNoZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9nZ2xlLXN3aXRjaCcpO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaGVzID0gZG9tLnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2dnbGUtc3dpdGNoJyk7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN3aXRjaGVzLmxlbmd0aDsgKytpKSB7XG4gICAgc3dpdGNoZXNbaV0uc3R5bGUuY3NzVGV4dCA9IHN3aXRjaENTUyhcbiAgICAgIHByb3BlcnRpZXMuYmFja2dyb3VuZC50b2dnbGVTd2l0Y2gsXG4gICAgICBwcm9wZXJ0aWVzLnNpemVcbiAgICApO1xuXG4gICAgY29uc3QgYWN0dWF0b3IgPSBzd2l0Y2hlc1tpXS5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLXN3aXRjaC1hY3R1YXRvcicpO1xuICAgIGFjdHVhdG9yLnN0eWxlLmNzc1RleHQgPSBhY3R1YXRvckNTUyhcbiAgICAgIHByb3BlcnRpZXMuYmFja2dyb3VuZC5hY3R1YXRvcixcbiAgICAgIHByb3BlcnRpZXMuc2l6ZVxuICAgICk7XG4gICAgYWN0dWF0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGFuaW1hdGUoc3dpdGNoZXNbaV0sIGV2ZW50LnRhcmdldCwgcHJvcGVydGllcyk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gQW5pbWF0ZSBidXR0b24gb24gd2hlbiB0cmlnZ2VyZWRcbmZ1bmN0aW9uIGFuaW1hdGUodG9nZ2xlU3dpdGNoLCBhY3R1YXRvciwgcHJvcGVydGllcykge1xuICBjb25zdCBtYXJnaW4gPSBhY3R1YXRvci5zdHlsZS5tYXJnaW5MZWZ0O1xuXG4gIGlmIChtYXJnaW4gPT09ICcnIHx8IG1hcmdpbiA9PT0gYCR7Y2FsYygzICogcHJvcGVydGllcy5zaXplKX1weGApIHtcbiAgICBhY3R1YXRvci5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7Y2FsYygxNy41ICogcHJvcGVydGllcy5zaXplKX1weGA7XG4gICAgdG9nZ2xlU3dpdGNoLnN0eWxlLmJhY2tncm91bmQgPSBwcm9wZXJ0aWVzLmJhY2tncm91bmQuYWN0aXZlO1xuICB9IGVsc2Uge1xuICAgIGFjdHVhdG9yLnN0eWxlLm1hcmdpbkxlZnQgPSBgJHtjYWxjKDMgKiBwcm9wZXJ0aWVzLnNpemUpfXB4YDtcbiAgICB0b2dnbGVTd2l0Y2guc3R5bGUuYmFja2dyb3VuZCA9IHByb3BlcnRpZXMuYmFja2dyb3VuZC50b2dnbGVTd2l0Y2g7XG4gIH1cbn1cblxuLy8gQ2hlY2sgYW5kIGZpeCBtaXNzaW5nIHByb3BlcnRpZXNcbmZ1bmN0aW9uIHByb2Nlc3NQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgc2l6ZTogMS4zLFxuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgIGFjdGl2ZTogJyMzYWYnLFxuICAgICAgYWN0dWF0b3I6ICcjZmZmJyxcbiAgICAgIHRvZ2dsZVN3aXRjaDogJyNhYWEnLFxuICAgIH0sXG4gIH07XG5cbiAgT2JqZWN0LmZyZWV6ZShkZWZhdWx0UHJvcGVydGllcyk7XG5cbiAgaWYgKCFwcm9wZXJ0aWVzKSB7XG4gICAgcHJvcGVydGllcyA9IHN0cnVjdHVyZWRDbG9uZShkZWZhdWx0UHJvcGVydGllcyk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHByb3BlcnRpZXMuc2l6ZSkgcHJvcGVydGllcy5zaXplID0gY2FsYyhwcm9wZXJ0aWVzLnNpemUpO1xuXG4gICAgaWYgKCFwcm9wZXJ0aWVzLmJhY2tncm91bmQpIHtcbiAgICAgIHByb3BlcnRpZXMuYmFja2dyb3VuZCA9IGRlZmF1bHRQcm9wZXJ0aWVzLmJhY2tncm91bmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihcbiAgICAgICAgcHJvcGVydGllcy5iYWNrZ3JvdW5kLFxuICAgICAgICBkZWZhdWx0UHJvcGVydGllcy5iYWNrZ3JvdW5kXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcyk7XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbi8vIFByZWNpc2lvbiBDYWxjdWxhdGVkIHZhbHVlcyB0byBvbmUgZGVjaW1hbCBwb2ludFxuZnVuY3Rpb24gY2FsYyh2YWx1ZSkge1xuICBsZXQgcmVzdWx0ID0gYCR7dmFsdWUudG9GaXhlZCgxKX1gO1xuXG4gIGlmIChyZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdID09PSAnMCcpIHJldHVybiBwYXJzZUludCh2YWx1ZSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gR2V0IFN3aXRjaCBDU1Mgd2l0aCBhbiBhZGp1c3RtZW50IGluIHZhbHVlc1xuZnVuY3Rpb24gc3dpdGNoQ1NTKGJnLCBzaXplKSB7XG4gIHJldHVybiBgXFxcbiAgICBiYWNrZ3JvdW5kOiAke2JnfTtcbiAgICBib3JkZXItcmFkaXVzOiAkezEwICogc2l6ZX1weDtcbiAgICBoZWlnaHQ6ICR7MTYgKiBzaXplfXB4O1xuICAgIHdpZHRoOiAkezMyICogc2l6ZX1weDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46ICR7NSAqIHNpemV9cHg7XG4gICAgcGFkZGluZzogMDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC40cyBlYXNlLWluLW91dCAuM3NgO1xufVxuXG4vLyBHZXQgQWN0dWF0b3IgQ1NTIHdpdGggYW4gYWRqdXN0bWVudCBpbiB2YWx1ZXNcbmZ1bmN0aW9uIGFjdHVhdG9yQ1NTKGJnLCBzaXplKSB7XG4gIHJldHVybiBgXFxcbiAgICBib3JkZXItcmFkaXVzOiAkezEyICogc2l6ZX1weDtcbiAgICBiYWNrZ3JvdW5kOiAke2JnfTtcbiAgICBtYXJnaW46ICR7Y2FsYygzICogc2l6ZSl9cHggJHtjYWxjKDMgKiBzaXplKX1weDtcbiAgICBoZWlnaHQ6ICR7MTAgKiBzaXplfXB4O1xuICAgIHdpZHRoOiAkezEwICogc2l6ZX1weDtcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAuNnMgZWFzZS1pbi1vdXQgLjFzO2A7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgYWN0aXZhdGUsIG5ld0J0biB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKHF1ZXJ5KSB7XG4gIGNvbnN0IHBpZWNlID0geyAxOiAnZjU4OGQ4NDEnLCAyOiAnMTQxMzU2MicgfTtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj8nICtcbiAgICAgICAgYGtleT03ZTA1NDAke3BpZWNlWycxJ119ZmI4NTIke3BpZWNlWycyJ119MzIxMDQmcT0ke3F1ZXJ5fSZkYXlzPTNgLFxuICAgICAgeyBjb3JzOiB0cnVlIH1cbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBpZiAoZGF0YS5lcnJvciA9PSB1bmRlZmluZWQpIHJldHVybiBkYXRhO1xuXG4gICAgdGhyb3cgZGF0YS5lcnJvcjtcbiAgfSBjYXRjaCAoZGF0YSkge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChkYXRhKTtcbiAgfVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2VhdGhlci5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2ljb25zL3NlYXJjaC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogV2VhdGhlciBET00gc3R5bGVzaGVldCovXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogUm9vdCBzdHlsaW5nXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbjpyb290IHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IGZpeGVkIGNlbnRlci9jb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIC0tYmFja2dyb3VuZDE6ICNmZmY7XFxuICAtLWNvbG9yOiAjMDAwO1xcbiAgLS1ib3JkZXItcmFkaXVzOiAwLjZlbTtcXG59XFxuXFxuYm9keSB7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZDogI2ZmZjc7XFxuICBjb2xvcjogIzMzMztcXG4gIG1hcmdpbjogMC41ZW07XFxuICBwYWRkaW5nOiAwLjRlbTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBIZWFkZXIgY29udGVudCBhbmQgaGVhZGVyIGZvcm0gaW5wdXRcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40ZW07XFxufVxcblxcbmhlYWRlciBoMSB7XFxuICBtYXJnaW46IDAuM2VtIDAuMmVtIDAuMWVtO1xcbiAgcGFkZGluZzogMC4yZW07XFxuICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS44ZW07XFxuICBjb2xvcjogIzMzMztcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDNweCAjMzMzOTtcXG59XFxuXFxuLnVuaXQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDAuNGVtIDAuNmVtIDAuNGVtIDAuNGVtO1xcbn1cXG5cXG4udW5pdCA+IGRpdiB7XFxuICBtYXJnaW46IDAgMC44ZW07XFxufVxcblxcbmhlYWRlciBoMSBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMS4wNWVtO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZ2FwOiAwO1xcbiAgbWFyZ2luOiAwLjVlbSAwLjhlbTtcXG4gIHBhZGRpbmc6IDAuMWVtIDAuNWVtO1xcbn1cXG5cXG5mb3JtIGlucHV0IHtcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbiAgZm9udC1zaXplOiAxLjA2ZW07XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjNDQ0O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ubG9jYXRpb24taW5wdXQge1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgdHJhbnNpdGlvbjogd2lkdGggLjVzIGVhc2UtaW4tb3V0IC4xcztcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDAwO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAwLjE2ZW07XFxufVxcblxcbmZvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7ICBcXG4gIHdpZHRoOiBjbGFtcCgxMDBweCwgMjUwcHgsIDQwMHB4KTtcXG59XFxuXFxuZm9ybSBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICB3aWR0aDogMS4zZW07XFxuICBoZWlnaHQ6IDEuM2VtO1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBFcnJvciBwb3B1cCBtZW51XFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5lcnJvciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiKDI1NSwgOTksIDcxKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDk5LCA3MSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjZlbTtcXG4gIHBhZGRpbmc6IDAuMTVlbSAwLjVlbTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmVycm9yIC5tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmNsb3NlLWVycm9yLWJ0biB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IHJnYigyNTUsIDk5LCA3MSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmb250LXNpemU6IDEuNmVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjJlbTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jbG9zZS1lcnJvci1idG46YWN0aXZlIHtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBNYWluOiAgd2VhdGhlciBjb250ZW50IGRpc3BsYXkgc3R5bGluZ1xcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxufVxcblxcbmg0IHtcXG4gIG1hcmdpbjogMC4xZW07XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIExvYWRpbmcgYW5pbWF0aW9uXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5sb2FkZXIge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItd2lkdGg6IDRweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICMzMzMgIzMzMyB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbjogMi4zZW07XFxuICB3aWR0aDogMmVtO1xcbiAgaGVpZ2h0OiAyZW07XFxuICBhbmltYXRpb246IHNwaW4gMS41cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDBCQUEwQjs7QUFHMUI7O21EQUVtRDtBQUNuRDtFQUNFLGdGQUF3RTtFQUN4RSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLHNCQUFzQjs7RUFFdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxpQ0FBaUM7QUFDbkM7OztBQUdBOzttREFFbUQ7QUFDbkQ7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixNQUFNO0VBQ04sbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usb0VBQThEO0VBQzlELHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osYUFBYTtBQUNmOzs7QUFHQTs7bURBRW1EO0FBQ25EO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0NBQWtDO0VBQ2xDLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7O0FBR0E7O21EQUVtRDtBQUNuRDtFQUNFLGFBQWE7RUFDYjt3QkFDc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7O0FBR0E7O21EQUVtRDtBQUNuRDtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFVBQVU7RUFDVixXQUFXO0VBQ1gsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFdlYXRoZXIgRE9NIHN0eWxlc2hlZXQqL1xcbkBpbXBvcnQgJy4vd2VhdGhlci5jc3MnO1xcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIFJvb3Qgc3R5bGluZ1xcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG46cm9vdCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZycpIG5vLXJlcGVhdCBmaXhlZCBjZW50ZXIvY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAtLWJhY2tncm91bmQxOiAjZmZmO1xcbiAgLS1jb2xvcjogIzAwMDtcXG4gIC0tYm9yZGVyLXJhZGl1czogMC42ZW07XFxufVxcblxcbmJvZHkge1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQ6ICNmZmY3O1xcbiAgY29sb3I6ICMzMzM7XFxuICBtYXJnaW46IDAuNWVtO1xcbiAgcGFkZGluZzogMC40ZW07XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogSGVhZGVyIGNvbnRlbnQgYW5kIGhlYWRlciBmb3JtIGlucHV0XFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNGVtO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgbWFyZ2luOiAwLjNlbSAwLjJlbSAwLjFlbTtcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbiAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuOGVtO1xcbiAgY29sb3I6ICMzMzM7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAzcHggIzMzMzk7XFxufVxcblxcbi51bml0IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjb2xvcjogIzMzMztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwLjRlbSAwLjZlbSAwLjRlbSAwLjRlbTtcXG59XFxuXFxuLnVuaXQgPiBkaXYge1xcbiAgbWFyZ2luOiAwIDAuOGVtO1xcbn1cXG5cXG5oZWFkZXIgaDEgc3BhbiB7XFxuICBmb250LXNpemU6IDEuMDVlbTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGdhcDogMDtcXG4gIG1hcmdpbjogMC41ZW0gMC44ZW07XFxuICBwYWRkaW5nOiAwLjFlbSAwLjVlbTtcXG59XFxuXFxuZm9ybSBpbnB1dCB7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIGZvbnQtc2l6ZTogMS4wNmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5mb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzQ0NDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmxvY2F0aW9uLWlucHV0IHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIHRyYW5zaXRpb246IHdpZHRoIC41cyBlYXNlLWluLW91dCAuMXM7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwMDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMC4xNmVtO1xcbn1cXG5cXG5mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lOyAgXFxuICB3aWR0aDogY2xhbXAoMTAwcHgsIDI1MHB4LCA0MDBweCk7XFxufVxcblxcbmZvcm0gaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvaWNvbnMvc2VhcmNoLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICB3aWR0aDogMS4zZW07XFxuICBoZWlnaHQ6IDEuM2VtO1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBFcnJvciBwb3B1cCBtZW51XFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5lcnJvciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiKDI1NSwgOTksIDcxKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDk5LCA3MSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjZlbTtcXG4gIHBhZGRpbmc6IDAuMTVlbSAwLjVlbTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmVycm9yIC5tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmNsb3NlLWVycm9yLWJ0biB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IHJnYigyNTUsIDk5LCA3MSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmb250LXNpemU6IDEuNmVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjJlbTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jbG9zZS1lcnJvci1idG46YWN0aXZlIHtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBNYWluOiAgd2VhdGhlciBjb250ZW50IGRpc3BsYXkgc3R5bGluZ1xcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxufVxcblxcbmg0IHtcXG4gIG1hcmdpbjogMC4xZW07XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIExvYWRpbmcgYW5pbWF0aW9uXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5sb2FkZXIge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItd2lkdGg6IDRweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICMzMzMgIzMzMyB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbjogMi4zZW07XFxuICB3aWR0aDogMmVtO1xcbiAgaGVpZ2h0OiAyZW07XFxuICBhbmltYXRpb246IHNwaW4gMS41cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jdXJyZW50IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDNweCAjMzMzOTtcXG4gIG1hcmdpbjogMWVtO1xcbn1cXG5cXG4uY29uZGl0aW9uIGltZyB7XFxuICBoZWlnaHQ6IDdlbTtcXG4gIHdpZHRoOiA3ZW07XFxuICBiYWNrZ3JvdW5kOiAjMzMzMTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVlbTtcXG59XFxuXFxuLmNvbmRpdGlvbiB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuXFxuLmN1cnJlbnQgLnRlbXBlcmF0dXJlIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDRlbTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDVweCAjMzMzYTtcXG59XFxuXFxuLndpbmQgPiBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG4gIGdhcDogMWVtO1xcbn1cXG5cXG4ub3RoZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC1yb3ctZ2FwOiAxZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDFlbTtcXG4gIGJhY2tncm91bmQ6ICMzMzMxO1xcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcbiAgYmFja2dyb3VuZDogIzMzMzE7XFxuICBwYWRkaW5nOiAxLjJlbSAxLjZlbTtcXG4gIG1hcmdpbjogMC44ZW07XFxuICBib3JkZXItcmFkaXVzOiAyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdCA+ICoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBnYXA6IDEuMmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3dlYXRoZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFNBQVM7RUFDVCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIscUNBQXFDO0VBQ3JDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jdXJyZW50IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDNweCAjMzMzOTtcXG4gIG1hcmdpbjogMWVtO1xcbn1cXG5cXG4uY29uZGl0aW9uIGltZyB7XFxuICBoZWlnaHQ6IDdlbTtcXG4gIHdpZHRoOiA3ZW07XFxuICBiYWNrZ3JvdW5kOiAjMzMzMTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVlbTtcXG59XFxuXFxuLmNvbmRpdGlvbiB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuXFxuLmN1cnJlbnQgLnRlbXBlcmF0dXJlIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDRlbTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDVweCAjMzMzYTtcXG59XFxuXFxuLndpbmQgPiBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG4gIGdhcDogMWVtO1xcbn1cXG5cXG4ub3RoZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC1yb3ctZ2FwOiAxZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDFlbTtcXG4gIGJhY2tncm91bmQ6ICMzMzMxO1xcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcbiAgYmFja2dyb3VuZDogIzMzMzE7XFxuICBwYWRkaW5nOiAxLjJlbSAxLjZlbTtcXG4gIG1hcmdpbjogMC44ZW07XFxuICBib3JkZXItcmFkaXVzOiAyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdCA+ICoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBnYXA6IDEuMmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJlcnJvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVycm9yTXNnIiwibWFpbiIsInNob3dFcnJvciIsIm1lc3NhZ2UiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJ0ZXh0Q29udGVudCIsImNsb3NlRXJyb3IiLCJzaG93V2VhdGhlciIsIndlYXRoZXJEYXRhIiwidW5pdHMiLCJjbGVhcldlYXRoZXIiLCJhcHBlbmRDaGlsZCIsImN1cnJlbnRXZWF0aGVyIiwiZm9yZWNhc3QiLCJ0ZW1wVW5pdCIsImxvYWRpbmciLCJsb2FkZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwid2V0aGVyRE9NIiwiaGVhZGluZyIsImNoaWxkcmVuRE9NIiwibG9jYXRpb24iLCJjb25kaXRpb24iLCJjdXJyZW50IiwidGVtcGVyYXR1cmUiLCJ3aW5kIiwic3BlZWRVbml0Iiwib3RoZXIiLCJfaSIsIl9jaGlsZHJlbkRPTSIsImxlbmd0aCIsImRvbSIsImZvcmVjYXN0RE9NIiwiaSIsImZvcmVjYXN0ZGF5IiwiZGF5IiwiY29uY2F0IiwidG9VcHBlckNhc2UiLCJpY29uIiwic3JjIiwiZGF0ZSIsImxvY2F0aW9uRGF0YSIsImxvY2F0aW9uRE9NIiwibmFtZSIsImNvdW50cnkiLCJjb25kaXRpb25EYXRhIiwiY29uZGl0aW9uRE9NIiwidGV4dCIsInRlbXBlcmF0dXJlRE9NIiwid2luZEFuZ2xlIiwid2luZF9kZWdyZWUiLCJ3aW5kRGlyIiwid2luZF9kaXIiLCJ3aW5kU3BlZWQiLCJ3aW5kSW5mbyIsIndpbmRET00iLCJjb250YWluZXIiLCJ0aXRsZSIsImtleXMiLCJ2YWx1ZSIsInRvTG93ZXJDYXNlIiwic2VjdGlvbiIsIl90eXBlb2YiLCJvYmoiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJkZXNjIiwiJFN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiRE9NIiwiZ2V0V2VhdGhlciIsInRvZ2dsZVN3aXRjaCIsInF1ZXJ5QnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9yZWYiLCJfY2FsbGVlIiwiZXZlbnQiLCJsb2NhdGlvbklucHV0IiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInZhbGlkaXR5IiwidmFsdWVNaXNzaW5nIiwicHJldmVudERlZmF1bHQiLCJfeCIsImNsb3NlRXJyb3JCdG4iLCJ3ZWF0aGVyUmVwb3J0IiwicXVlcnkiLCJkYXRhIiwidGVtcENvbnZlcnRlciIsImN1cnJlbnRUZW1wIiwidGVtcF9jIiwicGFyc2VJbnQiLCJ0ZW1wX2YiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGVtcCIsInN0b3BQcm9wYWdhdGlvbiIsInNwZWVkQ29udmVydGVyIiwiZ3VzdCIsImFjdGl2YXRlIiwibmV3QnRuIiwicHJvcGVydGllcyIsInByb2Nlc3NQcm9wZXJ0aWVzIiwiY3NzVGV4dCIsInN3aXRjaENTUyIsImJhY2tncm91bmQiLCJzaXplIiwiYWN0dWF0b3IiLCJhY3R1YXRvckNTUyIsImFuaW1hdGUiLCJ0YXJnZXQiLCJzd2l0Y2hlcyIsIl9sb29wIiwibWFyZ2luIiwibWFyZ2luTGVmdCIsImNhbGMiLCJhY3RpdmUiLCJkZWZhdWx0UHJvcGVydGllcyIsImZyZWV6ZSIsInN0cnVjdHVyZWRDbG9uZSIsInRvRml4ZWQiLCJiZyIsIl9nZXRXZWF0aGVyIiwicGllY2UiLCJyZXNwb25zZSIsImZldGNoIiwiY29ycyIsImpzb24iLCJ0MCJdLCJzb3VyY2VSb290IjoiIn0=