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
    main.appendChild(today(weatherData, units));
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
function today(weatherData, units) {
  var wetherDOM = document.createElement('section');
  wetherDOM.className = 'today';
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

// Get and set location input field to 'Accra, Ghana'
var locationInput = document.querySelector('.location-input');
locationInput.value = 'Accra, Ghana';

/**************************************************
 * Fetch and display weather report
 *************************************************/
var queryBtn = document.querySelector('.get-weather');
queryBtn.addEventListener('click', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (locationInput.validity.valueMissing === false) {
            showWeather(locationInput.value, {
              speedUnit: speedUnit,
              tempUnit: tempUnit
            });
          } else _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].showError('Search item not provided');
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
  var currentTemp = document.querySelector('.today .temperature');
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
showWeather(locationInput.value, {
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
___CSS_LOADER_EXPORT___.push([module.id, ".today {\n  text-align: center;\n}\n\n.location {\n  font-weight: 400;\n  font-size: 2em;\n  text-shadow: 2px 2px 3px #3339;\n  margin: 1em;\n}\n\n.condition img {\n  height: 7em;\n  width: 7em;\n  background: #3331;\n  padding: 1em;\n  border-radius: 5em;\n}\n\n.condition {\n  font-weight: 500;\n  font-size: 1.2em;\n}\n\n.today .temperature {\n  font-weight: 500;\n  font-size: 4em;\n  margin: 0;\n  text-shadow: 3px 3px 5px #333a;\n}\n\n.wind > section {\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  gap: 1em;\n}\n\n.other {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-row-gap: 1em;\n  text-align: center;\n  margin: 2em;\n}\n\n.forecast {\n  background: #3331;\n  padding: 1.2em 1.6em;\n  margin: 0.8em;\n  border-radius: 2em;\n  text-align: center;\n}\n\n.forecast > * {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-style: italic;\n  gap: 1.2em;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/weather.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,WAAW;EACX,UAAU;EACV,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,SAAS;EACT,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,aAAa;EACb,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,UAAU;AACZ","sourcesContent":[".today {\n  text-align: center;\n}\n\n.location {\n  font-weight: 400;\n  font-size: 2em;\n  text-shadow: 2px 2px 3px #3339;\n  margin: 1em;\n}\n\n.condition img {\n  height: 7em;\n  width: 7em;\n  background: #3331;\n  padding: 1em;\n  border-radius: 5em;\n}\n\n.condition {\n  font-weight: 500;\n  font-size: 1.2em;\n}\n\n.today .temperature {\n  font-weight: 500;\n  font-size: 4em;\n  margin: 0;\n  text-shadow: 3px 3px 5px #333a;\n}\n\n.wind > section {\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  gap: 1em;\n}\n\n.other {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-row-gap: 1em;\n  text-align: center;\n  margin: 2em;\n}\n\n.forecast {\n  background: #3331;\n  padding: 1.2em 1.6em;\n  margin: 0.8em;\n  border-radius: 2em;\n  text-align: center;\n}\n\n.forecast > * {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-style: italic;\n  gap: 1.2em;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9zcmMvc2NyaXB0cy9kb20uanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9zcmMvc2NyaXB0cy90b2dnbGVTd2l0Y2guanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL3NyYy9zY3JpcHRzL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9zcmMvc3R5bGVzL3dlYXRoZXIuY3NzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKTtcbmNvbnN0IGVycm9yTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yIC5tZXNzYWdlJyk7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEZ1bmN0aW9ucyBwcm92aWRlZCBvdXRzaWRlIG1vZHVsYXIgdXNlXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNob3dFcnJvcihtZXNzYWdlKSB7XG4gICAgZXJyb3Iuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICBlcnJvck1zZy50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICB9LFxuXG4gIGNsb3NlRXJyb3IoKSB7XG4gICAgZXJyb3Iuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIGVycm9yTXNnLnRleHRDb250ZW50ID0gJyc7XG4gIH0sXG5cbiAgc2hvd1dlYXRoZXIod2VhdGhlckRhdGEsIHVuaXRzKSB7XG4gICAgdGhpcy5jbGVhcldlYXRoZXIoKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHRvZGF5KHdlYXRoZXJEYXRhLCB1bml0cykpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZm9yZWNhc3Qod2VhdGhlckRhdGEuZm9yZWNhc3QsIHVuaXRzLnRlbXBVbml0KSk7XG4gIH0sXG5cbiAgY2xlYXJXZWF0aGVyKCkge1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgfSxcblxuICBsb2FkaW5nKCkge1xuICAgIHRoaXMuY2xlYXJXZWF0aGVyKCk7XG4gICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9hZGVyLmNsYXNzTmFtZSA9ICdsb2FkZXInO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobG9hZGVyKTtcbiAgfSxcbn07XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogIENyZWF0ZXMgYWxsIERPTSBlbGVtZW50cyB1c2luZyBkYXRhIG9mIGN1cnJlbnRcbiAqICB3ZWF0aGVyLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gdG9kYXkod2VhdGhlckRhdGEsIHVuaXRzKSB7XG4gIGNvbnN0IHdldGhlckRPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgd2V0aGVyRE9NLmNsYXNzTmFtZSA9ICd0b2RheSc7XG5cbiAgY29uc3QgY2hpbGRyZW5ET00gPSBbXG4gICAgbG9jYXRpb24od2VhdGhlckRhdGEubG9jYXRpb24pLFxuICAgIGNvbmRpdGlvbih3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbiksXG4gICAgdGVtcGVyYXR1cmUod2VhdGhlckRhdGEuY3VycmVudCwgdW5pdHMudGVtcFVuaXQpLFxuICAgIHdpbmQod2VhdGhlckRhdGEuY3VycmVudCwgdW5pdHMuc3BlZWRVbml0KSxcbiAgICBvdGhlcih3ZWF0aGVyRGF0YS5jdXJyZW50LCB1bml0cy5zcGVlZFVuaXQpLFxuICBdO1xuXG4gIGZvciAobGV0IGRvbSBvZiBjaGlsZHJlbkRPTSkgd2V0aGVyRE9NLmFwcGVuZENoaWxkKGRvbSk7XG5cbiAgcmV0dXJuIHdldGhlckRPTTtcbn1cblxuZnVuY3Rpb24gZm9yZWNhc3Qod2VhdGhlckRhdGEsIHRlbXBVbml0KSB7XG4gIGNvbnN0IGZvcmVjYXN0RE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBmb3JlY2FzdERPTS5jbGFzc05hbWUgPSAnZm9yZWNhc3QnO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd2VhdGhlckRhdGEuZm9yZWNhc3RkYXkubGVuZ3RoOyArK2kpIHtcbiAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXkuY2xhc3NOYW1lID0gJ2ZvcmVjYXN0LWRheSc7XG5cbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlbXBlcmF0dXJlLmNsYXNzTmFtZSA9ICd0ZW1wZXJhdHVyZSc7XG4gICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtcbiAgICAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0ZGF5W2ldLmRheVsnYXZndGVtcF8nICsgdGVtcFVuaXRdXG4gICAgfSR7dGVtcFVuaXQudG9VcHBlckNhc2UoKX1gO1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpY29uLmNsYXNzTmFtZSA9ICdpY29uJztcbiAgICBpY29uLnNyYyA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0ZGF5W2ldLmRheS5jb25kaXRpb24uaWNvbjtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0ZS5jbGFzc05hbWUgPSAnZGF0ZSc7XG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0ZGF5W2ldLmRhdGU7XG5cbiAgICBkYXkuYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmUpO1xuICAgIGRheS5hcHBlbmRDaGlsZChpY29uKTtcbiAgICBkYXkuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICBmb3JlY2FzdERPTS5hcHBlbmRDaGlsZChkYXkpO1xuICB9XG5cbiAgcmV0dXJuIGZvcmVjYXN0RE9NO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEZ1bmN0aW9ucyB0aGF0IGNyZWF0ZSB2YXJpb3VzIHdlYXRoZXIgZGF0YVxuICogY29tcG9uZW50cy5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8vIEdlbmVyYXRlIERPTSBmb3IgbG9jYXRpb24gZGF0YVxuZnVuY3Rpb24gbG9jYXRpb24obG9jYXRpb25EYXRhKSB7XG4gIGNvbnN0IGxvY2F0aW9uRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBsb2NhdGlvbkRPTS5jbGFzc05hbWUgPSAnbG9jYXRpb24nO1xuICBsb2NhdGlvbkRPTS50ZXh0Q29udGVudCA9IGAke2xvY2F0aW9uRGF0YS5uYW1lfSwgJHtsb2NhdGlvbkRhdGEuY291bnRyeX1gO1xuXG4gIHJldHVybiBsb2NhdGlvbkRPTTtcbn1cblxuLy8gR2VuZXJhdGUgRE9NIGZvciBjb25kaXRpb24gZGF0YVxuZnVuY3Rpb24gY29uZGl0aW9uKGNvbmRpdGlvbkRhdGEpIHtcbiAgY29uc3QgY29uZGl0aW9uRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjb25kaXRpb25ET00uY2xhc3NOYW1lID0gJ2NvbmRpdGlvbic7XG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaWNvbi5zcmMgPSBjb25kaXRpb25EYXRhLmljb247XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRleHQudGV4dENvbnRlbnQgPSBjb25kaXRpb25EYXRhLnRleHQ7XG4gIGNvbmRpdGlvbkRPTS5hcHBlbmRDaGlsZChpY29uKTtcbiAgY29uZGl0aW9uRE9NLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gIHJldHVybiBjb25kaXRpb25ET007XG59XG5cbi8vIEdlbmVyYXRlIERPTSBmb3IgdGVtcGVyYXR1cmUgZGF0YVxuZnVuY3Rpb24gdGVtcGVyYXR1cmUod2VhdGhlckRhdGEsIHRlbXBVbml0KSB7XG4gIGNvbnN0IHRlbXBlcmF0dXJlRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRlbXBlcmF0dXJlRE9NLnRleHRDb250ZW50ID0gYCR7XG4gICAgd2VhdGhlckRhdGFbJ3RlbXBfJyArIHRlbXBVbml0XVxuICB9JHt0ZW1wVW5pdC50b1VwcGVyQ2FzZSgpfWA7XG4gIHRlbXBlcmF0dXJlRE9NLmNsYXNzTmFtZSA9ICd0ZW1wZXJhdHVyZSc7XG5cbiAgcmV0dXJuIHRlbXBlcmF0dXJlRE9NO1xufVxuXG4vLyBHZW5lcmF0ZSBET00gZm9yIHdpbmQgZGF0YVxuZnVuY3Rpb24gd2luZCh3ZWF0aGVyRGF0YSwgc3BlZWRVbml0KSB7XG4gIGNvbnN0IHdpbmRBbmdsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3aW5kQW5nbGUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS53aW5kX2RlZ3JlZX3CsGA7XG4gIGNvbnN0IHdpbmREaXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2luZERpci50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLndpbmRfZGlyO1xuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGFbJ3dpbmRfJyArIHNwZWVkVW5pdF19JHtzcGVlZFVuaXR9YDtcbiAgd2luZFNwZWVkLmNsYXNzTmFtZSA9ICd3aW5kLXNwZWVkJztcblxuICBjb25zdCB3aW5kSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgd2luZEluZm8uYXBwZW5kQ2hpbGQod2luZEFuZ2xlKTtcbiAgd2luZEluZm8uYXBwZW5kQ2hpbGQod2luZERpcik7XG4gIHdpbmRJbmZvLmFwcGVuZENoaWxkKHdpbmRTcGVlZCk7XG5cbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnV2luZCc7XG5cbiAgY29uc3Qgd2luZERPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3aW5kRE9NLmNsYXNzTmFtZSA9ICd3aW5kJztcbiAgd2luZERPTS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgd2luZERPTS5hcHBlbmRDaGlsZCh3aW5kSW5mbyk7XG5cbiAgcmV0dXJuIHdpbmRET007XG59XG5cbi8vIEdlbmVyYXRlIERPTSBmb3Igb3RoZXIgZGF0YVxuZnVuY3Rpb24gb3RoZXIod2VhdGhlckRhdGEsIHNwZWVkVW5pdCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnb3RoZXInO1xuXG4gIGNvbnN0IHRpdGxlID0gWydVVicsICdHdXN0JywgJ0h1bWlkaXR5JywgJ0RheSddO1xuICBjb25zdCBrZXlzID0gWyd1dicsICdndXN0XycsICdodW1pZGl0eScsICdpc19kYXknXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IHRpdGxlW2ldO1xuICAgIGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWYgKGtleXNbaV0gPT09ICdndXN0XycpXG4gICAgICB2YWx1ZS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhW2tleXNbaV0gKyBzcGVlZFVuaXRdICsgc3BlZWRVbml0O1xuICAgIGVsc2UgdmFsdWUudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YVtrZXlzW2ldXTtcbiAgICB2YWx1ZS5jbGFzc05hbWUgPSB0aXRsZVtpXS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQodmFsdWUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgfVxuXG4gIHJldHVybiBjb250YWluZXI7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBET00gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IGdldFdlYXRoZXIgZnJvbSAnLi93ZWF0aGVyLmpzJztcbmltcG9ydCB0b2dnbGVTd2l0Y2ggZnJvbSAnLi90b2dnbGVTd2l0Y2guanMnO1xuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcblxubGV0IHRlbXBVbml0ID0gJ2YnO1xubGV0IHNwZWVkVW5pdCA9ICdrcGgnO1xuXG4vLyBHZXQgYW5kIHNldCBsb2NhdGlvbiBpbnB1dCBmaWVsZCB0byAnQWNjcmEsIEdoYW5hJ1xuY29uc3QgbG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi1pbnB1dCcpO1xubG9jYXRpb25JbnB1dC52YWx1ZSA9ICdBY2NyYSwgR2hhbmEnO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEZldGNoIGFuZCBkaXNwbGF5IHdlYXRoZXIgcmVwb3J0XG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmNvbnN0IHF1ZXJ5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdldC13ZWF0aGVyJyk7XG5xdWVyeUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCkgPT4ge1xuICBpZiAobG9jYXRpb25JbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcgPT09IGZhbHNlKSB7XG4gICAgc2hvd1dlYXRoZXIobG9jYXRpb25JbnB1dC52YWx1ZSwgeyBzcGVlZFVuaXQsIHRlbXBVbml0IH0pO1xuICB9IGVsc2UgRE9NLnNob3dFcnJvcignU2VhcmNoIGl0ZW0gbm90IHByb3ZpZGVkJyk7XG5cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIENsZWFyIGVycm9yIG1lc3NhZ2Ugd2hlbiBlcnJvciBjbG9zZSBidXR0b24gaXNcbiAqIGNsaWNrZWQuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmNvbnN0IGNsb3NlRXJyb3JCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtZXJyb3ItYnRuJyk7XG5jbG9zZUVycm9yQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NLmNsb3NlRXJyb3IpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEdldCB3ZWF0aGVyIHJlcG9ydCBvZiBsb2NhdGlvbiBlbnRlcmVkIGJ5IHVzZXJcbiAqIGFuZCBkaXNwbGF5IHJlc3VsdHMuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmxldCB3ZWF0aGVyUmVwb3J0O1xuXG5mdW5jdGlvbiBzaG93V2VhdGhlcihxdWVyeSwgdW5pdHMpIHtcbiAgRE9NLmxvYWRpbmcoKTtcbiAgY29uc3QgZGF0YSA9IGdldFdlYXRoZXIocXVlcnkpO1xuICBkYXRhXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHdlYXRoZXJSZXBvcnQgPSBkYXRhO1xuICAgICAgRE9NLnNob3dXZWF0aGVyKGRhdGEsIHVuaXRzKTtcbiAgICAgIERPTS5jbG9zZUVycm9yKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGRhdGEpID0+IHtcbiAgICAgIHdlYXRoZXJSZXBvcnQgPSB1bmRlZmluZWQ7XG4gICAgICBET00uc2hvd0Vycm9yKGRhdGEubWVzc2FnZSk7XG4gICAgfSk7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogQ29udmVydCB0ZW1wZXJhdHVyZSBvciBzcGVlZCB3aGVuIHRoZWlyIHZhcmlvdXNcbiAqIGJ1dHRvbnMgYXJlIGNsaWNrZWQuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8vIFRlbXBlcmF0dXJlIHVuaXQgY29udmVyc2lvbiBidXR0b25cbmNvbnN0IHRlbXBDb252ZXJ0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcCAudG9nZ2xlLXN3aXRjaC1hY3R1YXRvcicpO1xudGVtcENvbnZlcnRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBjb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheSAudGVtcGVyYXR1cmUnKTtcblxuICBpZiAodGVtcFVuaXQgPT09ICdmJykge1xuICAgIHRlbXBVbml0ID0gJ2MnO1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gd2VhdGhlclJlcG9ydC5jdXJyZW50LnRlbXBfYztcbiAgICBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IGAke3BhcnNlSW50KHRlbXBlcmF0dXJlKX3CsENgO1xuICB9IGVsc2Uge1xuICAgIHRlbXBVbml0ID0gJ2YnO1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gd2VhdGhlclJlcG9ydC5jdXJyZW50LnRlbXBfZjtcbiAgICBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IGAke3BhcnNlSW50KHRlbXBlcmF0dXJlKX1GYDtcbiAgfVxuXG4gIGNvbnN0IGZvcmVjYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcmVjYXN0LWRheScpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcmVjYXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgY29uc3QgdGVtcCA9IGZvcmVjYXN0W2ldLnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZScpO1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlID1cbiAgICAgIHdlYXRoZXJSZXBvcnQuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Wydhdmd0ZW1wXycgKyB0ZW1wVW5pdF07XG4gICAgaWYgKHRlbXBVbml0ID09PSAnYycpIHRlbXAudGV4dENvbnRlbnQgPSBgJHtwYXJzZUludCh0ZW1wZXJhdHVyZSl9wrBDYDtcbiAgICBlbHNlIHRlbXAudGV4dENvbnRlbnQgPSBgJHtwYXJzZUludCh0ZW1wZXJhdHVyZSl9RmA7XG4gIH1cblxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn0pO1xuXG4vLyBTcGVlZCB1bml0IGNvbnZlcnNpb24gYnV0dG9uXG5jb25zdCBzcGVlZENvbnZlcnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGVlZCAudG9nZ2xlLXN3aXRjaC1hY3R1YXRvcicpO1xuc3BlZWRDb252ZXJ0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQgLndpbmQtc3BlZWQnKTtcbiAgY29uc3QgZ3VzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdGhlciAuZ3VzdCcpO1xuXG4gIGlmIChzcGVlZFVuaXQgPT09ICdrcGgnKSBzcGVlZFVuaXQgPSAnbXBoJztcbiAgZWxzZSBzcGVlZFVuaXQgPSAna3BoJztcblxuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPVxuICAgIHdlYXRoZXJSZXBvcnQuY3VycmVudFsnd2luZF8nICsgc3BlZWRVbml0XSArIHNwZWVkVW5pdDtcbiAgZ3VzdC50ZXh0Q29udGVudCA9IHdlYXRoZXJSZXBvcnQuY3VycmVudFsnZ3VzdF8nICsgc3BlZWRVbml0XSArIHNwZWVkVW5pdDtcblxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn0pO1xuXG5zaG93V2VhdGhlcihsb2NhdGlvbklucHV0LnZhbHVlLCB7IHNwZWVkVW5pdCwgdGVtcFVuaXQgfSk7XG50b2dnbGVTd2l0Y2guYWN0aXZhdGUoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogU3dpdGNoIHRlbXBsYXRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgPGRpdiBjbGFzcz0nLnRvZ2dsZS1zd2l0Y2gnPlxuICAgICA8ZGl2IGNsYXNzPSd0b2dnbGUtc3dpdGNoLWFjdHVhdG9yJz48L2Rpdj5cbiAgIDwvZGl2PlxuXG4gICBjb25zdCBwcm9wZXJ0aWVzID0geyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgIHNpemU6IDEuMyxcbiAgICAgY29sb3I6IHtcbiAgICAgICBib2R5OiBncmV5O1xuICAgICAgIGFjdHVhdG9yOiAnIzdhZicsXG4gICAgICAgYWN0aXZlOiAjNjVmLFxuICAgICB9XG4gICB9O1xuXG4gICAvLyBNb2R1bGUgdXNhZ2U6XG4gICBjb25zdCBidXR0b24gPSBuZXdCdG4ocHJvcGVydGllcyk7XG4gICBhY3RpdmF0ZShwcm9wZXJ0aWVzLCBET00pO1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gR2VuZXJhdGUgYW5kIHJldHVybnMgbmV3IHRvZ2dsZSBzd2l0Y2ggZG9tXG5mdW5jdGlvbiBuZXdCdG4ocHJvcGVydGllcykge1xuICBwcm9wZXJ0aWVzID0gcHJvY2Vzc1Byb3BlcnRpZXMocHJvcGVydGllcyk7XG5cbiAgY29uc3QgdG9nZ2xlU3dpdGNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZ2dsZVN3aXRjaC5jbGFzc05hbWUgPSAndG9nZ2xlLXN3aXRjaCc7XG4gIHRvZ2dsZVN3aXRjaC5zdHlsZS5jc3NUZXh0ID0gc3dpdGNoQ1NTKFxuICAgIHByb3BlcnRpZXMuYmFja2dyb3VuZC50b2dnbGVTd2l0Y2gsXG4gICAgcHJvcGVydGllcy5zaXplXG4gICk7XG5cbiAgY29uc3QgYWN0dWF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWN0dWF0b3IuY2xhc3NOYW1lID0gJ3RvZ2dsZS1zd2l0Y2gtYWN0dWF0b3InO1xuICBhY3R1YXRvci5zdHlsZS5jc3NUZXh0ID0gYWN0dWF0b3JDU1MoXG4gICAgcHJvcGVydGllcy5iYWNrZ3JvdW5kLmFjdHVhdG9yLFxuICAgIHByb3BlcnRpZXMuc2l6ZVxuICApO1xuICBhY3R1YXRvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGFuaW1hdGUodG9nZ2xlU3dpdGNoLCBldmVudC50YXJnZXQsIHByb3BlcnRpZXMpO1xuICB9KTtcblxuICB0b2dnbGVTd2l0Y2guYXBwZW5kQ2hpbGQoYWN0dWF0b3IpO1xuXG4gIHJldHVybiB0b2dnbGVTd2l0Y2g7XG59XG5cbi8vIFR1cm5zIGFsbCBlbGVtZW50cyBpbiBkb20gd2l0aCBcInRvZ2dsZS1zd2l0Y2hcIiBjbGFzcyB0byBzd2l0Y2hlc1xuZnVuY3Rpb24gYWN0aXZhdGUocHJvcGVydGllcywgZG9tKSB7XG4gIGxldCBzd2l0Y2hlcztcbiAgcHJvcGVydGllcyA9IHByb2Nlc3NQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuXG4gIGlmIChkb20gPT09IHVuZGVmaW5lZCkge1xuICAgIHN3aXRjaGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZ2dsZS1zd2l0Y2gnKTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2hlcyA9IGRvbS5xdWVyeVNlbGVjdG9yQWxsKCcudG9nZ2xlLXN3aXRjaCcpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzd2l0Y2hlcy5sZW5ndGg7ICsraSkge1xuICAgIHN3aXRjaGVzW2ldLnN0eWxlLmNzc1RleHQgPSBzd2l0Y2hDU1MoXG4gICAgICBwcm9wZXJ0aWVzLmJhY2tncm91bmQudG9nZ2xlU3dpdGNoLFxuICAgICAgcHJvcGVydGllcy5zaXplXG4gICAgKTtcblxuICAgIGNvbnN0IGFjdHVhdG9yID0gc3dpdGNoZXNbaV0ucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1zd2l0Y2gtYWN0dWF0b3InKTtcbiAgICBhY3R1YXRvci5zdHlsZS5jc3NUZXh0ID0gYWN0dWF0b3JDU1MoXG4gICAgICBwcm9wZXJ0aWVzLmJhY2tncm91bmQuYWN0dWF0b3IsXG4gICAgICBwcm9wZXJ0aWVzLnNpemVcbiAgICApO1xuICAgIGFjdHVhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBhbmltYXRlKHN3aXRjaGVzW2ldLCBldmVudC50YXJnZXQsIHByb3BlcnRpZXMpO1xuICAgIH0pO1xuICB9XG59XG5cbi8vIEFuaW1hdGUgYnV0dG9uIG9uIHdoZW4gdHJpZ2dlcmVkXG5mdW5jdGlvbiBhbmltYXRlKHRvZ2dsZVN3aXRjaCwgYWN0dWF0b3IsIHByb3BlcnRpZXMpIHtcbiAgY29uc3QgbWFyZ2luID0gYWN0dWF0b3Iuc3R5bGUubWFyZ2luTGVmdDtcblxuICBpZiAobWFyZ2luID09PSAnJyB8fCBtYXJnaW4gPT09IGAke2NhbGMoMyAqIHByb3BlcnRpZXMuc2l6ZSl9cHhgKSB7XG4gICAgYWN0dWF0b3Iuc3R5bGUubWFyZ2luTGVmdCA9IGAke2NhbGMoMTcuNSAqIHByb3BlcnRpZXMuc2l6ZSl9cHhgO1xuICAgIHRvZ2dsZVN3aXRjaC5zdHlsZS5iYWNrZ3JvdW5kID0gcHJvcGVydGllcy5iYWNrZ3JvdW5kLmFjdGl2ZTtcbiAgfSBlbHNlIHtcbiAgICBhY3R1YXRvci5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7Y2FsYygzICogcHJvcGVydGllcy5zaXplKX1weGA7XG4gICAgdG9nZ2xlU3dpdGNoLnN0eWxlLmJhY2tncm91bmQgPSBwcm9wZXJ0aWVzLmJhY2tncm91bmQudG9nZ2xlU3dpdGNoO1xuICB9XG59XG5cbi8vIENoZWNrIGFuZCBmaXggbWlzc2luZyBwcm9wZXJ0aWVzXG5mdW5jdGlvbiBwcm9jZXNzUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHNpemU6IDEuMyxcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICBhY3RpdmU6ICcjM2FmJyxcbiAgICAgIGFjdHVhdG9yOiAnI2ZmZicsXG4gICAgICB0b2dnbGVTd2l0Y2g6ICcjYWFhJyxcbiAgICB9LFxuICB9O1xuXG4gIE9iamVjdC5mcmVlemUoZGVmYXVsdFByb3BlcnRpZXMpO1xuXG4gIGlmICghcHJvcGVydGllcykge1xuICAgIHByb3BlcnRpZXMgPSBzdHJ1Y3R1cmVkQ2xvbmUoZGVmYXVsdFByb3BlcnRpZXMpO1xuICB9IGVsc2Uge1xuICAgIGlmIChwcm9wZXJ0aWVzLnNpemUpIHByb3BlcnRpZXMuc2l6ZSA9IGNhbGMocHJvcGVydGllcy5zaXplKTtcblxuICAgIGlmICghcHJvcGVydGllcy5iYWNrZ3JvdW5kKSB7XG4gICAgICBwcm9wZXJ0aWVzLmJhY2tncm91bmQgPSBkZWZhdWx0UHJvcGVydGllcy5iYWNrZ3JvdW5kO1xuICAgIH0gZWxzZSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoXG4gICAgICAgIHByb3BlcnRpZXMuYmFja2dyb3VuZCxcbiAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMuYmFja2dyb3VuZFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMpO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG4vLyBQcmVjaXNpb24gQ2FsY3VsYXRlZCB2YWx1ZXMgdG8gb25lIGRlY2ltYWwgcG9pbnRcbmZ1bmN0aW9uIGNhbGModmFsdWUpIHtcbiAgbGV0IHJlc3VsdCA9IGAke3ZhbHVlLnRvRml4ZWQoMSl9YDtcblxuICBpZiAocmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSA9PT0gJzAnKSByZXR1cm4gcGFyc2VJbnQodmFsdWUpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIEdldCBTd2l0Y2ggQ1NTIHdpdGggYW4gYWRqdXN0bWVudCBpbiB2YWx1ZXNcbmZ1bmN0aW9uIHN3aXRjaENTUyhiZywgc2l6ZSkge1xuICByZXR1cm4gYFxcXG4gICAgYmFja2dyb3VuZDogJHtiZ307XG4gICAgYm9yZGVyLXJhZGl1czogJHsxMCAqIHNpemV9cHg7XG4gICAgaGVpZ2h0OiAkezE2ICogc2l6ZX1weDtcbiAgICB3aWR0aDogJHszMiAqIHNpemV9cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAkezUgKiBzaXplfXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuNHMgZWFzZS1pbi1vdXQgLjNzYDtcbn1cblxuLy8gR2V0IEFjdHVhdG9yIENTUyB3aXRoIGFuIGFkanVzdG1lbnQgaW4gdmFsdWVzXG5mdW5jdGlvbiBhY3R1YXRvckNTUyhiZywgc2l6ZSkge1xuICByZXR1cm4gYFxcXG4gICAgYm9yZGVyLXJhZGl1czogJHsxMiAqIHNpemV9cHg7XG4gICAgYmFja2dyb3VuZDogJHtiZ307XG4gICAgbWFyZ2luOiAke2NhbGMoMyAqIHNpemUpfXB4ICR7Y2FsYygzICogc2l6ZSl9cHg7XG4gICAgaGVpZ2h0OiAkezEwICogc2l6ZX1weDtcbiAgICB3aWR0aDogJHsxMCAqIHNpemV9cHg7XG4gICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgLjZzIGVhc2UtaW4tb3V0IC4xcztgO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IGFjdGl2YXRlLCBuZXdCdG4gfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihxdWVyeSkge1xuICBjb25zdCBwaWVjZSA9IHsgMTogJ2Y1ODhkODQxJywgMjogJzE0MTM1NjInIH07XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgJ2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/JyArXG4gICAgICAgIGBrZXk9N2UwNTQwJHtwaWVjZVsnMSddfWZiODUyJHtwaWVjZVsnMiddfTMyMTA0JnE9JHtxdWVyeX0mZGF5cz0zYCxcbiAgICAgIHsgY29yczogdHJ1ZSB9XG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgaWYgKGRhdGEuZXJyb3IgPT0gdW5kZWZpbmVkKSByZXR1cm4gZGF0YTtcblxuICAgIHRocm93IGRhdGEuZXJyb3I7XG4gIH0gY2F0Y2ggKGRhdGEpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZGF0YSk7XG4gIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dlYXRoZXIuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9pY29ucy9zZWFyY2guc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFdlYXRoZXIgRE9NIHN0eWxlc2hlZXQqL1xcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIFJvb3Qgc3R5bGluZ1xcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG46cm9vdCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBmaXhlZCBjZW50ZXIvY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAtLWJhY2tncm91bmQxOiAjZmZmO1xcbiAgLS1jb2xvcjogIzAwMDtcXG4gIC0tYm9yZGVyLXJhZGl1czogMC42ZW07XFxufVxcblxcbmJvZHkge1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQ6ICNmZmY3O1xcbiAgY29sb3I6ICMzMzM7XFxuICBtYXJnaW46IDAuNWVtO1xcbiAgcGFkZGluZzogMC40ZW07XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogSGVhZGVyIGNvbnRlbnQgYW5kIGhlYWRlciBmb3JtIGlucHV0XFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNGVtO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgbWFyZ2luOiAwLjNlbSAwLjJlbSAwLjFlbTtcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbiAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuOGVtO1xcbiAgY29sb3I6ICMzMzM7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAzcHggIzMzMzk7XFxufVxcblxcbi51bml0IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjb2xvcjogIzMzMztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwLjRlbSAwLjZlbSAwLjRlbSAwLjRlbTtcXG59XFxuXFxuLnVuaXQgPiBkaXYge1xcbiAgbWFyZ2luOiAwIDAuOGVtO1xcbn1cXG5cXG5oZWFkZXIgaDEgc3BhbiB7XFxuICBmb250LXNpemU6IDEuMDVlbTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGdhcDogMDtcXG4gIG1hcmdpbjogMC41ZW0gMC44ZW07XFxuICBwYWRkaW5nOiAwLjFlbSAwLjVlbTtcXG59XFxuXFxuZm9ybSBpbnB1dCB7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIGZvbnQtc2l6ZTogMS4wNmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5mb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzQ0NDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmxvY2F0aW9uLWlucHV0IHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIHRyYW5zaXRpb246IHdpZHRoIC41cyBlYXNlLWluLW91dCAuMXM7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwMDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMC4xNmVtO1xcbn1cXG5cXG5mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lOyAgXFxuICB3aWR0aDogY2xhbXAoMTAwcHgsIDI1MHB4LCA0MDBweCk7XFxufVxcblxcbmZvcm0gaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgd2lkdGg6IDEuM2VtO1xcbiAgaGVpZ2h0OiAxLjNlbTtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogRXJyb3IgcG9wdXAgbWVudVxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uZXJyb3Ige1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHJnYigyNTUsIDk5LCA3MSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCA5OSwgNzEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBtYXJnaW4tbGVmdDogMC42ZW07XFxuICBwYWRkaW5nOiAwLjE1ZW0gMC41ZW07XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5lcnJvciAubWVzc2FnZSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5jbG9zZS1lcnJvci1idG4ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMjU1LCA5OSwgNzEpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1zaXplOiAxLjZlbTtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1yaWdodDogMC4yZW07XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY2xvc2UtZXJyb3ItYnRuOmFjdGl2ZSB7XFxuICBjb2xvcjogIzMzMztcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogTWFpbjogIHdlYXRoZXIgY29udGVudCBkaXNwbGF5IHN0eWxpbmdcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgZmxleC1iYXNpczogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMmVtO1xcbn1cXG5cXG5oNCB7XFxuICBtYXJnaW46IDAuMWVtO1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBMb2FkaW5nIGFuaW1hdGlvblxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4ubG9hZGVyIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiAjMzMzICMzMzMgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW46IDIuM2VtO1xcbiAgd2lkdGg6IDJlbTtcXG4gIGhlaWdodDogMmVtO1xcbiAgYW5pbWF0aW9uOiBzcGluIDEuNXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwwQkFBMEI7O0FBRzFCOzttREFFbUQ7QUFDbkQ7RUFDRSxnRkFBd0U7RUFDeEUsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixzQkFBc0I7O0VBRXRCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQ0FBbUM7RUFDbkMsaUNBQWlDO0FBQ25DOzs7QUFHQTs7bURBRW1EO0FBQ25EO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsTUFBTTtFQUNOLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG9FQUE4RDtFQUM5RCx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7O0FBR0E7O21EQUVtRDtBQUNuRDtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtDQUFrQztFQUNsQyxtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7OztBQUdBOzttREFFbUQ7QUFDbkQ7RUFDRSxhQUFhO0VBQ2I7d0JBQ3NCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7OztBQUdBOzttREFFbUQ7QUFDbkQ7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1YsV0FBVztFQUNYLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBXZWF0aGVyIERPTSBzdHlsZXNoZWV0Ki9cXG5AaW1wb3J0ICcuL3dlYXRoZXIuY3NzJztcXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBSb290IHN0eWxpbmdcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuOnJvb3Qge1xcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvYmFja2dyb3VuZC5qcGcnKSBuby1yZXBlYXQgZml4ZWQgY2VudGVyL2NvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgLS1iYWNrZ3JvdW5kMTogI2ZmZjtcXG4gIC0tY29sb3I6ICMwMDA7XFxuICAtLWJvcmRlci1yYWRpdXM6IDAuNmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kOiAjZmZmNztcXG4gIGNvbG9yOiAjMzMzO1xcbiAgbWFyZ2luOiAwLjVlbTtcXG4gIHBhZGRpbmc6IDAuNGVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIEhlYWRlciBjb250ZW50IGFuZCBoZWFkZXIgZm9ybSBpbnB1dFxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjRlbTtcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gIG1hcmdpbjogMC4zZW0gMC4yZW0gMC4xZW07XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjhlbTtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggM3B4ICMzMzM5O1xcbn1cXG5cXG4udW5pdCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgY29sb3I6ICMzMzM7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMC40ZW0gMC42ZW0gMC40ZW0gMC40ZW07XFxufVxcblxcbi51bml0ID4gZGl2IHtcXG4gIG1hcmdpbjogMCAwLjhlbTtcXG59XFxuXFxuaGVhZGVyIGgxIHNwYW4ge1xcbiAgZm9udC1zaXplOiAxLjA1ZW07XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBnYXA6IDA7XFxuICBtYXJnaW46IDAuNWVtIDAuOGVtO1xcbiAgcGFkZGluZzogMC4xZW0gMC41ZW07XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgcGFkZGluZzogMC4yZW07XFxuICBmb250LXNpemU6IDEuMDZlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICM0NDQ7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5sb2NhdGlvbi1pbnB1dCB7XFxuICB3aWR0aDogMTIwcHg7XFxuICB0cmFuc2l0aW9uOiB3aWR0aCAuNXMgZWFzZS1pbi1vdXQgLjFzO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDA7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDAuMTZlbTtcXG59XFxuXFxuZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTsgIFxcbiAgd2lkdGg6IGNsYW1wKDEwMHB4LCAyNTBweCwgNDAwcHgpO1xcbn1cXG5cXG5mb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL2ljb25zL3NlYXJjaC5zdmcnKSBuby1yZXBlYXQgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgd2lkdGg6IDEuM2VtO1xcbiAgaGVpZ2h0OiAxLjNlbTtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogRXJyb3IgcG9wdXAgbWVudVxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uZXJyb3Ige1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHJnYigyNTUsIDk5LCA3MSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCA5OSwgNzEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBtYXJnaW4tbGVmdDogMC42ZW07XFxuICBwYWRkaW5nOiAwLjE1ZW0gMC41ZW07XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5lcnJvciAubWVzc2FnZSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5jbG9zZS1lcnJvci1idG4ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMjU1LCA5OSwgNzEpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1zaXplOiAxLjZlbTtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1yaWdodDogMC4yZW07XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY2xvc2UtZXJyb3ItYnRuOmFjdGl2ZSB7XFxuICBjb2xvcjogIzMzMztcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogTWFpbjogIHdlYXRoZXIgY29udGVudCBkaXNwbGF5IHN0eWxpbmdcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgZmxleC1iYXNpczogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMmVtO1xcbn1cXG5cXG5oNCB7XFxuICBtYXJnaW46IDAuMWVtO1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBMb2FkaW5nIGFuaW1hdGlvblxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4ubG9hZGVyIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiAjMzMzICMzMzMgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW46IDIuM2VtO1xcbiAgd2lkdGg6IDJlbTtcXG4gIGhlaWdodDogMmVtO1xcbiAgYW5pbWF0aW9uOiBzcGluIDEuNXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudG9kYXkge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggM3B4ICMzMzM5O1xcbiAgbWFyZ2luOiAxZW07XFxufVxcblxcbi5jb25kaXRpb24gaW1nIHtcXG4gIGhlaWdodDogN2VtO1xcbiAgd2lkdGg6IDdlbTtcXG4gIGJhY2tncm91bmQ6ICMzMzMxO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNWVtO1xcbn1cXG5cXG4uY29uZGl0aW9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG4udG9kYXkgLnRlbXBlcmF0dXJlIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDRlbTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDVweCAjMzMzYTtcXG59XFxuXFxuLndpbmQgPiBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG4gIGdhcDogMWVtO1xcbn1cXG5cXG4ub3RoZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXJvdy1nYXA6IDFlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMmVtO1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcbiAgYmFja2dyb3VuZDogIzMzMzE7XFxuICBwYWRkaW5nOiAxLjJlbSAxLjZlbTtcXG4gIG1hcmdpbjogMC44ZW07XFxuICBib3JkZXItcmFkaXVzOiAyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdCA+ICoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBnYXA6IDEuMmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3dlYXRoZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFNBQVM7RUFDVCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50b2RheSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAzcHggIzMzMzk7XFxuICBtYXJnaW46IDFlbTtcXG59XFxuXFxuLmNvbmRpdGlvbiBpbWcge1xcbiAgaGVpZ2h0OiA3ZW07XFxuICB3aWR0aDogN2VtO1xcbiAgYmFja2dyb3VuZDogIzMzMzE7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiA1ZW07XFxufVxcblxcbi5jb25kaXRpb24ge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbi50b2RheSAudGVtcGVyYXR1cmUge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogNGVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggNXB4ICMzMzNhO1xcbn1cXG5cXG4ud2luZCA+IHNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgZ2FwOiAxZW07XFxufVxcblxcbi5vdGhlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtcm93LWdhcDogMWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAyZW07XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICBiYWNrZ3JvdW5kOiAjMzMzMTtcXG4gIHBhZGRpbmc6IDEuMmVtIDEuNmVtO1xcbiAgbWFyZ2luOiAwLjhlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0ID4gKiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGdhcDogMS4yZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbImVycm9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZXJyb3JNc2ciLCJtYWluIiwic2hvd0Vycm9yIiwibWVzc2FnZSIsInN0eWxlIiwidmlzaWJpbGl0eSIsInRleHRDb250ZW50IiwiY2xvc2VFcnJvciIsInNob3dXZWF0aGVyIiwid2VhdGhlckRhdGEiLCJ1bml0cyIsImNsZWFyV2VhdGhlciIsImFwcGVuZENoaWxkIiwidG9kYXkiLCJmb3JlY2FzdCIsInRlbXBVbml0IiwibG9hZGluZyIsImxvYWRlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ3ZXRoZXJET00iLCJjaGlsZHJlbkRPTSIsImxvY2F0aW9uIiwiY29uZGl0aW9uIiwiY3VycmVudCIsInRlbXBlcmF0dXJlIiwid2luZCIsInNwZWVkVW5pdCIsIm90aGVyIiwiX2kiLCJfY2hpbGRyZW5ET00iLCJsZW5ndGgiLCJkb20iLCJmb3JlY2FzdERPTSIsImkiLCJmb3JlY2FzdGRheSIsImRheSIsImNvbmNhdCIsInRvVXBwZXJDYXNlIiwiaWNvbiIsInNyYyIsImRhdGUiLCJsb2NhdGlvbkRhdGEiLCJsb2NhdGlvbkRPTSIsIm5hbWUiLCJjb3VudHJ5IiwiY29uZGl0aW9uRGF0YSIsImNvbmRpdGlvbkRPTSIsInRleHQiLCJ0ZW1wZXJhdHVyZURPTSIsIndpbmRBbmdsZSIsIndpbmRfZGVncmVlIiwid2luZERpciIsIndpbmRfZGlyIiwid2luZFNwZWVkIiwid2luZEluZm8iLCJoZWFkaW5nIiwid2luZERPTSIsImNvbnRhaW5lciIsInRpdGxlIiwia2V5cyIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJzZWN0aW9uIiwiX3R5cGVvZiIsIm9iaiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsImRlc2MiLCIkU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJET00iLCJnZXRXZWF0aGVyIiwidG9nZ2xlU3dpdGNoIiwibG9jYXRpb25JbnB1dCIsInF1ZXJ5QnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9yZWYiLCJfY2FsbGVlIiwiZXZlbnQiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwidmFsaWRpdHkiLCJ2YWx1ZU1pc3NpbmciLCJwcmV2ZW50RGVmYXVsdCIsIl94IiwiY2xvc2VFcnJvckJ0biIsIndlYXRoZXJSZXBvcnQiLCJxdWVyeSIsImRhdGEiLCJ0ZW1wQ29udmVydGVyIiwiY3VycmVudFRlbXAiLCJ0ZW1wX2MiLCJwYXJzZUludCIsInRlbXBfZiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0ZW1wIiwic3RvcFByb3BhZ2F0aW9uIiwic3BlZWRDb252ZXJ0ZXIiLCJndXN0IiwiYWN0aXZhdGUiLCJuZXdCdG4iLCJwcm9wZXJ0aWVzIiwicHJvY2Vzc1Byb3BlcnRpZXMiLCJjc3NUZXh0Iiwic3dpdGNoQ1NTIiwiYmFja2dyb3VuZCIsInNpemUiLCJhY3R1YXRvciIsImFjdHVhdG9yQ1NTIiwiYW5pbWF0ZSIsInRhcmdldCIsInN3aXRjaGVzIiwiX2xvb3AiLCJtYXJnaW4iLCJtYXJnaW5MZWZ0IiwiY2FsYyIsImFjdGl2ZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiZnJlZXplIiwic3RydWN0dXJlZENsb25lIiwidG9GaXhlZCIsImJnIiwiX2dldFdlYXRoZXIiLCJwaWVjZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJjb3JzIiwianNvbiIsInQwIl0sInNvdXJjZVJvb3QiOiIifQ==