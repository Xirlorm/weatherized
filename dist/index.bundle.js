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
    alert();
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
  windSpeed.textContent = weatherReport.current['wind_' + speedUnit] + speedUnit.toUpperCase();
  gust.textContent = weatherReport.current['gust_' + speedUnit] + speedUnit.toUpperCase();
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
___CSS_LOADER_EXPORT___.push([module.id, ".today {\n  text-align: center;\n}\n\n.location {\n  font-weight: 400;\n  font-size: 2em;\n  text-shadow: 2px 2px 3px #3339;\n  margin: 1em;\n}\n\n.condition img {\n  height: 7em;\n  width: 7em;\n  background: #3331;\n  padding: 1em;\n  border-radius: 5em;\n}\n\n.condition {\n  font-weight: 500;\n  font-size: 1.2em;\n}\n\n.today .temperature {\n  font-weight: 500;\n  font-size: 4em;\n  margin: 0;\n  text-shadow: 3px 3px 5px #333a;\n}\n\n.wind > section {\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  gap: 1em;\n}\n\n.other {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-row-gap: 1em;\n  text-align: center;\n  margin: 2em;\n}\n\n.forecast {\n  background: #3331;\n  padding: 1.2em 1.6em;\n  margin: 0.8em;\n  border-radius: 2em;\n  text-align: center;\n}\n\n.forecast > * {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  font-weight: 600;\n  font-style: italic;\n  gap: 1.2em;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/weather.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,WAAW;EACX,UAAU;EACV,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,SAAS;EACT,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,aAAa;EACb,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,UAAU;AACZ","sourcesContent":[".today {\n  text-align: center;\n}\n\n.location {\n  font-weight: 400;\n  font-size: 2em;\n  text-shadow: 2px 2px 3px #3339;\n  margin: 1em;\n}\n\n.condition img {\n  height: 7em;\n  width: 7em;\n  background: #3331;\n  padding: 1em;\n  border-radius: 5em;\n}\n\n.condition {\n  font-weight: 500;\n  font-size: 1.2em;\n}\n\n.today .temperature {\n  font-weight: 500;\n  font-size: 4em;\n  margin: 0;\n  text-shadow: 3px 3px 5px #333a;\n}\n\n.wind > section {\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  gap: 1em;\n}\n\n.other {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-row-gap: 1em;\n  text-align: center;\n  margin: 2em;\n}\n\n.forecast {\n  background: #3331;\n  padding: 1.2em 1.6em;\n  margin: 0.8em;\n  border-radius: 2em;\n  text-align: center;\n}\n\n.forecast > * {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  font-weight: 600;\n  font-style: italic;\n  gap: 1.2em;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vc3JjL3NjcmlwdHMvZG9tLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vc3JjL3NjcmlwdHMvdG9nZ2xlU3dpdGNoLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9zcmMvc2NyaXB0cy93ZWF0aGVyLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vc3JjL3N0eWxlcy93ZWF0aGVyLmNzcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJyk7XG5jb25zdCBlcnJvck1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvciAubWVzc2FnZScpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBGdW5jdGlvbnMgcHJvdmlkZWQgb3V0c2lkZSBtb2R1bGFyIHVzZVxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBzaG93RXJyb3IobWVzc2FnZSkge1xuICAgIGVycm9yLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgZXJyb3JNc2cudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgfSxcblxuICBjbG9zZUVycm9yKCkge1xuICAgIGVycm9yLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBlcnJvck1zZy50ZXh0Q29udGVudCA9ICcnO1xuICB9LFxuXG4gIHNob3dXZWF0aGVyKHdlYXRoZXJEYXRhLCB1bml0cykge1xuICAgIHRoaXMuY2xlYXJXZWF0aGVyKCk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0b2RheSh3ZWF0aGVyRGF0YSwgdW5pdHMpKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGZvcmVjYXN0KHdlYXRoZXJEYXRhLmZvcmVjYXN0LCB1bml0cy50ZW1wVW5pdCkpO1xuICB9LFxuXG4gIGNsZWFyV2VhdGhlcigpIHtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gIH0sXG5cbiAgbG9hZGluZygpIHtcbiAgICB0aGlzLmNsZWFyV2VhdGhlcigpO1xuICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvYWRlci5jbGFzc05hbWUgPSAnbG9hZGVyJztcbiAgICBtYWluLmFwcGVuZENoaWxkKGxvYWRlcik7XG4gIH0sXG59O1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqICBDcmVhdGVzIGFsbCBET00gZWxlbWVudHMgdXNpbmcgZGF0YSBvZiBjdXJyZW50XG4gKiAgd2VhdGhlci5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmZ1bmN0aW9uIHRvZGF5KHdlYXRoZXJEYXRhLCB1bml0cykge1xuICBjb25zdCB3ZXRoZXJET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIHdldGhlckRPTS5jbGFzc05hbWUgPSAndG9kYXknO1xuXG4gIGNvbnN0IGNoaWxkcmVuRE9NID0gW1xuICAgIGxvY2F0aW9uKHdlYXRoZXJEYXRhLmxvY2F0aW9uKSxcbiAgICBjb25kaXRpb24od2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24pLFxuICAgIHRlbXBlcmF0dXJlKHdlYXRoZXJEYXRhLmN1cnJlbnQsIHVuaXRzLnRlbXBVbml0KSxcbiAgICB3aW5kKHdlYXRoZXJEYXRhLmN1cnJlbnQsIHVuaXRzLnNwZWVkVW5pdCksXG4gICAgb3RoZXIod2VhdGhlckRhdGEuY3VycmVudCwgdW5pdHMuc3BlZWRVbml0KSxcbiAgXTtcblxuICBmb3IgKGxldCBkb20gb2YgY2hpbGRyZW5ET00pIHdldGhlckRPTS5hcHBlbmRDaGlsZChkb20pO1xuXG4gIHJldHVybiB3ZXRoZXJET007XG59XG5cbmZ1bmN0aW9uIGZvcmVjYXN0KHdlYXRoZXJEYXRhLCB0ZW1wVW5pdCkge1xuICBjb25zdCBmb3JlY2FzdERPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgZm9yZWNhc3RET00uY2xhc3NOYW1lID0gJ2ZvcmVjYXN0JztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHdlYXRoZXJEYXRhLmZvcmVjYXN0ZGF5Lmxlbmd0aDsgKytpKSB7XG4gICAgY29uc3QgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF5LmNsYXNzTmFtZSA9ICdmb3JlY2FzdC1kYXknO1xuXG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZW1wZXJhdHVyZS5jbGFzc05hbWUgPSAndGVtcGVyYXR1cmUnO1xuICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7XG4gICAgICB3ZWF0aGVyRGF0YS5mb3JlY2FzdGRheVtpXS5kYXlbJ2F2Z3RlbXBfJyArIHRlbXBVbml0XVxuICAgIH0ke3RlbXBVbml0LnRvVXBwZXJDYXNlKCl9YDtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaWNvbi5jbGFzc05hbWUgPSAnaWNvbic7XG4gICAgaWNvbi5zcmMgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdGRheVtpXS5kYXkuY29uZGl0aW9uLmljb247XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhdGUuY2xhc3NOYW1lID0gJ2RhdGUnO1xuICAgIGRhdGUudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdGRheVtpXS5kYXRlO1xuXG4gICAgZGF5LmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlKTtcbiAgICBkYXkuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgZGF5LmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgZm9yZWNhc3RET00uYXBwZW5kQ2hpbGQoZGF5KTtcbiAgfVxuXG4gIHJldHVybiBmb3JlY2FzdERPTTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBGdW5jdGlvbnMgdGhhdCBjcmVhdGUgdmFyaW91cyB3ZWF0aGVyIGRhdGFcbiAqIGNvbXBvbmVudHMuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vLyBHZW5lcmF0ZSBET00gZm9yIGxvY2F0aW9uIGRhdGFcbmZ1bmN0aW9uIGxvY2F0aW9uKGxvY2F0aW9uRGF0YSkge1xuICBjb25zdCBsb2NhdGlvbkRPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgbG9jYXRpb25ET00uY2xhc3NOYW1lID0gJ2xvY2F0aW9uJztcbiAgbG9jYXRpb25ET00udGV4dENvbnRlbnQgPSBgJHtsb2NhdGlvbkRhdGEubmFtZX0sICR7bG9jYXRpb25EYXRhLmNvdW50cnl9YDtcblxuICByZXR1cm4gbG9jYXRpb25ET007XG59XG5cbi8vIEdlbmVyYXRlIERPTSBmb3IgY29uZGl0aW9uIGRhdGFcbmZ1bmN0aW9uIGNvbmRpdGlvbihjb25kaXRpb25EYXRhKSB7XG4gIGNvbnN0IGNvbmRpdGlvbkRPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgY29uZGl0aW9uRE9NLmNsYXNzTmFtZSA9ICdjb25kaXRpb24nO1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGljb24uc3JjID0gY29uZGl0aW9uRGF0YS5pY29uO1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gY29uZGl0aW9uRGF0YS50ZXh0O1xuICBjb25kaXRpb25ET00uYXBwZW5kQ2hpbGQoaWNvbik7XG4gIGNvbmRpdGlvbkRPTS5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICByZXR1cm4gY29uZGl0aW9uRE9NO1xufVxuXG4vLyBHZW5lcmF0ZSBET00gZm9yIHRlbXBlcmF0dXJlIGRhdGFcbmZ1bmN0aW9uIHRlbXBlcmF0dXJlKHdlYXRoZXJEYXRhLCB0ZW1wVW5pdCkge1xuICBjb25zdCB0ZW1wZXJhdHVyZURPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0ZW1wZXJhdHVyZURPTS50ZXh0Q29udGVudCA9IGAke1xuICAgIHdlYXRoZXJEYXRhWyd0ZW1wXycgKyB0ZW1wVW5pdF1cbiAgfSR7dGVtcFVuaXQudG9VcHBlckNhc2UoKX1gO1xuICB0ZW1wZXJhdHVyZURPTS5jbGFzc05hbWUgPSAndGVtcGVyYXR1cmUnO1xuXG4gIHJldHVybiB0ZW1wZXJhdHVyZURPTTtcbn1cblxuLy8gR2VuZXJhdGUgRE9NIGZvciB3aW5kIGRhdGFcbmZ1bmN0aW9uIHdpbmQod2VhdGhlckRhdGEsIHNwZWVkVW5pdCkge1xuICBjb25zdCB3aW5kQW5nbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2luZEFuZ2xlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEud2luZF9kZWdyZWV9wrBgO1xuICBjb25zdCB3aW5kRGlyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdpbmREaXIudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS53aW5kX2RpcjtcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhWyd3aW5kXycgKyBzcGVlZFVuaXRdfSR7c3BlZWRVbml0fWA7XG4gIHdpbmRTcGVlZC5jbGFzc05hbWUgPSAnd2luZC1zcGVlZCc7XG5cbiAgY29uc3Qgd2luZEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIHdpbmRJbmZvLmFwcGVuZENoaWxkKHdpbmRBbmdsZSk7XG4gIHdpbmRJbmZvLmFwcGVuZENoaWxkKHdpbmREaXIpO1xuICB3aW5kSW5mby5hcHBlbmRDaGlsZCh3aW5kU3BlZWQpO1xuXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1dpbmQnO1xuXG4gIGNvbnN0IHdpbmRET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2luZERPTS5jbGFzc05hbWUgPSAnd2luZCc7XG4gIHdpbmRET00uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIHdpbmRET00uYXBwZW5kQ2hpbGQod2luZEluZm8pO1xuXG4gIHJldHVybiB3aW5kRE9NO1xufVxuXG4vLyBHZW5lcmF0ZSBET00gZm9yIG90aGVyIGRhdGFcbmZ1bmN0aW9uIG90aGVyKHdlYXRoZXJEYXRhLCBzcGVlZFVuaXQpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjb250YWluZXIuY2xhc3NOYW1lID0gJ290aGVyJztcblxuICBjb25zdCB0aXRsZSA9IFsnVVYnLCAnR3VzdCcsICdIdW1pZGl0eScsICdEYXknXTtcbiAgY29uc3Qga2V5cyA9IFsndXYnLCAnZ3VzdF8nLCAnaHVtaWRpdHknLCAnaXNfZGF5J107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSB0aXRsZVtpXTtcbiAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlmIChrZXlzW2ldID09PSAnZ3VzdF8nKVxuICAgICAgdmFsdWUudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YVtrZXlzW2ldICsgc3BlZWRVbml0XSArIHNwZWVkVW5pdDtcbiAgICBlbHNlIHZhbHVlLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGFba2V5c1tpXV07XG4gICAgdmFsdWUuY2xhc3NOYW1lID0gdGl0bGVbaV0udG9Mb3dlckNhc2UoKTtcblxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHZhbHVlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG4gIH1cblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgRE9NIGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCBnZXRXZWF0aGVyIGZyb20gJy4vd2VhdGhlci5qcyc7XG5pbXBvcnQgdG9nZ2xlU3dpdGNoIGZyb20gJy4vdG9nZ2xlU3dpdGNoLmpzJztcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLmNzcyc7XG5cbmxldCB0ZW1wVW5pdCA9ICdmJztcbmxldCBzcGVlZFVuaXQgPSAna3BoJztcblxuLy8gR2V0IGFuZCBzZXQgbG9jYXRpb24gaW5wdXQgZmllbGQgdG8gJ0FjY3JhLCBHaGFuYSdcbmNvbnN0IGxvY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24taW5wdXQnKTtcbmxvY2F0aW9uSW5wdXQudmFsdWUgPSAnQWNjcmEsIEdoYW5hJztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBGZXRjaCBhbmQgZGlzcGxheSB3ZWF0aGVyIHJlcG9ydFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5jb25zdCBxdWVyeUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZXQtd2VhdGhlcicpO1xucXVlcnlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgaWYgKGxvY2F0aW9uSW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nID09PSBmYWxzZSkge1xuICAgIHNob3dXZWF0aGVyKGxvY2F0aW9uSW5wdXQudmFsdWUsIHsgc3BlZWRVbml0LCB0ZW1wVW5pdCB9KTtcbiAgfSBlbHNlIERPTS5zaG93RXJyb3IoJ1NlYXJjaCBpdGVtIG5vdCBwcm92aWRlZCcpO1xuXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBDbGVhciBlcnJvciBtZXNzYWdlIHdoZW4gZXJyb3IgY2xvc2UgYnV0dG9uIGlzXG4gKiBjbGlja2VkLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5jb25zdCBjbG9zZUVycm9yQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWVycm9yLWJ0bicpO1xuY2xvc2VFcnJvckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTS5jbG9zZUVycm9yKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBHZXQgd2VhdGhlciByZXBvcnQgb2YgbG9jYXRpb24gZW50ZXJlZCBieSB1c2VyXG4gKiBhbmQgZGlzcGxheSByZXN1bHRzLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5sZXQgd2VhdGhlclJlcG9ydDtcblxuZnVuY3Rpb24gc2hvd1dlYXRoZXIocXVlcnksIHVuaXRzKSB7XG4gIERPTS5sb2FkaW5nKCk7XG4gIGNvbnN0IGRhdGEgPSBnZXRXZWF0aGVyKHF1ZXJ5KTtcbiAgZGF0YVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICB3ZWF0aGVyUmVwb3J0ID0gZGF0YTtcbiAgICAgIERPTS5zaG93V2VhdGhlcihkYXRhLCB1bml0cyk7XG4gICAgICBET00uY2xvc2VFcnJvcigpO1xuICAgIH0pXG4gICAgLmNhdGNoKChkYXRhKSA9PiB7XG4gICAgICB3ZWF0aGVyUmVwb3J0ID0gdW5kZWZpbmVkO1xuICAgICAgRE9NLnNob3dFcnJvcihkYXRhLm1lc3NhZ2UpO1xuICAgIH0pO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIENvbnZlcnQgdGVtcGVyYXR1cmUgb3Igc3BlZWQgd2hlbiB0aGVpciB2YXJpb3VzXG4gKiBidXR0b25zIGFyZSBjbGlja2VkLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vLyBUZW1wZXJhdHVyZSB1bml0IGNvbnZlcnNpb24gYnV0dG9uXG5jb25zdCB0ZW1wQ29udmVydGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAgLnRvZ2dsZS1zd2l0Y2gtYWN0dWF0b3InKTtcbnRlbXBDb252ZXJ0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXkgLnRlbXBlcmF0dXJlJyk7XG5cbiAgaWYgKHRlbXBVbml0ID09PSAnZicpIHtcbiAgICB0ZW1wVW5pdCA9ICdjJztcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IHdlYXRoZXJSZXBvcnQuY3VycmVudC50ZW1wX2M7XG4gICAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBgJHtwYXJzZUludCh0ZW1wZXJhdHVyZSl9wrBDYDtcbiAgfSBlbHNlIHtcbiAgICB0ZW1wVW5pdCA9ICdmJztcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IHdlYXRoZXJSZXBvcnQuY3VycmVudC50ZW1wX2Y7XG4gICAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBgJHtwYXJzZUludCh0ZW1wZXJhdHVyZSl9RmA7XG4gIH1cblxuICBjb25zdCBmb3JlY2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JlY2FzdC1kYXknKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JlY2FzdC5sZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IHRlbXAgPSBmb3JlY2FzdFtpXS5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKTtcbiAgICBhbGVydCgpO1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlID1cbiAgICAgIHdlYXRoZXJSZXBvcnQuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Wydhdmd0ZW1wXycgKyB0ZW1wVW5pdF07XG4gICAgaWYgKHRlbXBVbml0ID09PSAnYycpIHRlbXAudGV4dENvbnRlbnQgPSBgJHtwYXJzZUludCh0ZW1wZXJhdHVyZSl9wrBDYDtcbiAgICBlbHNlIHRlbXAudGV4dENvbnRlbnQgPSBgJHtwYXJzZUludCh0ZW1wZXJhdHVyZSl9RmA7XG4gIH1cblxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn0pO1xuXG4vLyBTcGVlZCB1bml0IGNvbnZlcnNpb24gYnV0dG9uXG5jb25zdCBzcGVlZENvbnZlcnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGVlZCAudG9nZ2xlLXN3aXRjaC1hY3R1YXRvcicpO1xuc3BlZWRDb252ZXJ0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQgLndpbmQtc3BlZWQnKTtcbiAgY29uc3QgZ3VzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdGhlciAuZ3VzdCcpO1xuXG4gIGlmIChzcGVlZFVuaXQgPT09ICdrcGgnKSBzcGVlZFVuaXQgPSAnbXBoJztcbiAgZWxzZSBzcGVlZFVuaXQgPSAna3BoJztcblxuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPVxuICAgIHdlYXRoZXJSZXBvcnQuY3VycmVudFsnd2luZF8nICsgc3BlZWRVbml0XSArIHNwZWVkVW5pdC50b1VwcGVyQ2FzZSgpO1xuICBndXN0LnRleHRDb250ZW50ID1cbiAgICB3ZWF0aGVyUmVwb3J0LmN1cnJlbnRbJ2d1c3RfJyArIHNwZWVkVW5pdF0gKyBzcGVlZFVuaXQudG9VcHBlckNhc2UoKTtcblxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn0pO1xuXG5zaG93V2VhdGhlcihsb2NhdGlvbklucHV0LnZhbHVlLCB7IHNwZWVkVW5pdCwgdGVtcFVuaXQgfSk7XG50b2dnbGVTd2l0Y2guYWN0aXZhdGUoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogU3dpdGNoIHRlbXBsYXRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgPGRpdiBjbGFzcz0nLnRvZ2dsZS1zd2l0Y2gnPlxuICAgICA8ZGl2IGNsYXNzPSd0b2dnbGUtc3dpdGNoLWFjdHVhdG9yJz48L2Rpdj5cbiAgIDwvZGl2PlxuXG4gICBjb25zdCBwcm9wZXJ0aWVzID0geyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgIHNpemU6IDEuMyxcbiAgICAgY29sb3I6IHtcbiAgICAgICBib2R5OiBncmV5O1xuICAgICAgIGFjdHVhdG9yOiAnIzdhZicsXG4gICAgICAgYWN0aXZlOiAjNjVmLFxuICAgICB9XG4gICB9O1xuXG4gICAvLyBNb2R1bGUgdXNhZ2U6XG4gICBjb25zdCBidXR0b24gPSBuZXdCdG4ocHJvcGVydGllcyk7XG4gICBhY3RpdmF0ZShwcm9wZXJ0aWVzLCBET00pO1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gR2VuZXJhdGUgYW5kIHJldHVybnMgbmV3IHRvZ2dsZSBzd2l0Y2ggZG9tXG5mdW5jdGlvbiBuZXdCdG4ocHJvcGVydGllcykge1xuICBwcm9wZXJ0aWVzID0gcHJvY2Vzc1Byb3BlcnRpZXMocHJvcGVydGllcyk7XG5cbiAgY29uc3QgdG9nZ2xlU3dpdGNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZ2dsZVN3aXRjaC5jbGFzc05hbWUgPSAndG9nZ2xlLXN3aXRjaCc7XG4gIHRvZ2dsZVN3aXRjaC5zdHlsZS5jc3NUZXh0ID0gc3dpdGNoQ1NTKFxuICAgIHByb3BlcnRpZXMuYmFja2dyb3VuZC50b2dnbGVTd2l0Y2gsXG4gICAgcHJvcGVydGllcy5zaXplXG4gICk7XG5cbiAgY29uc3QgYWN0dWF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWN0dWF0b3IuY2xhc3NOYW1lID0gJ3RvZ2dsZS1zd2l0Y2gtYWN0dWF0b3InO1xuICBhY3R1YXRvci5zdHlsZS5jc3NUZXh0ID0gYWN0dWF0b3JDU1MoXG4gICAgcHJvcGVydGllcy5iYWNrZ3JvdW5kLmFjdHVhdG9yLFxuICAgIHByb3BlcnRpZXMuc2l6ZVxuICApO1xuICBhY3R1YXRvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGFuaW1hdGUodG9nZ2xlU3dpdGNoLCBldmVudC50YXJnZXQsIHByb3BlcnRpZXMpO1xuICB9KTtcblxuICB0b2dnbGVTd2l0Y2guYXBwZW5kQ2hpbGQoYWN0dWF0b3IpO1xuXG4gIHJldHVybiB0b2dnbGVTd2l0Y2g7XG59XG5cbi8vIFR1cm5zIGFsbCBlbGVtZW50cyBpbiBkb20gd2l0aCBcInRvZ2dsZS1zd2l0Y2hcIiBjbGFzcyB0byBzd2l0Y2hlc1xuZnVuY3Rpb24gYWN0aXZhdGUocHJvcGVydGllcywgZG9tKSB7XG4gIGxldCBzd2l0Y2hlcztcbiAgcHJvcGVydGllcyA9IHByb2Nlc3NQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuXG4gIGlmIChkb20gPT09IHVuZGVmaW5lZCkge1xuICAgIHN3aXRjaGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZ2dsZS1zd2l0Y2gnKTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2hlcyA9IGRvbS5xdWVyeVNlbGVjdG9yQWxsKCcudG9nZ2xlLXN3aXRjaCcpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzd2l0Y2hlcy5sZW5ndGg7ICsraSkge1xuICAgIHN3aXRjaGVzW2ldLnN0eWxlLmNzc1RleHQgPSBzd2l0Y2hDU1MoXG4gICAgICBwcm9wZXJ0aWVzLmJhY2tncm91bmQudG9nZ2xlU3dpdGNoLFxuICAgICAgcHJvcGVydGllcy5zaXplXG4gICAgKTtcblxuICAgIGNvbnN0IGFjdHVhdG9yID0gc3dpdGNoZXNbaV0ucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1zd2l0Y2gtYWN0dWF0b3InKTtcbiAgICBhY3R1YXRvci5zdHlsZS5jc3NUZXh0ID0gYWN0dWF0b3JDU1MoXG4gICAgICBwcm9wZXJ0aWVzLmJhY2tncm91bmQuYWN0dWF0b3IsXG4gICAgICBwcm9wZXJ0aWVzLnNpemVcbiAgICApO1xuICAgIGFjdHVhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBhbmltYXRlKHN3aXRjaGVzW2ldLCBldmVudC50YXJnZXQsIHByb3BlcnRpZXMpO1xuICAgIH0pO1xuICB9XG59XG5cbi8vIEFuaW1hdGUgYnV0dG9uIG9uIHdoZW4gdHJpZ2dlcmVkXG5mdW5jdGlvbiBhbmltYXRlKHRvZ2dsZVN3aXRjaCwgYWN0dWF0b3IsIHByb3BlcnRpZXMpIHtcbiAgY29uc3QgbWFyZ2luID0gYWN0dWF0b3Iuc3R5bGUubWFyZ2luTGVmdDtcblxuICBpZiAobWFyZ2luID09PSAnJyB8fCBtYXJnaW4gPT09IGAke2NhbGMoMyAqIHByb3BlcnRpZXMuc2l6ZSl9cHhgKSB7XG4gICAgYWN0dWF0b3Iuc3R5bGUubWFyZ2luTGVmdCA9IGAke2NhbGMoMTcuNSAqIHByb3BlcnRpZXMuc2l6ZSl9cHhgO1xuICAgIHRvZ2dsZVN3aXRjaC5zdHlsZS5iYWNrZ3JvdW5kID0gcHJvcGVydGllcy5iYWNrZ3JvdW5kLmFjdGl2ZTtcbiAgfSBlbHNlIHtcbiAgICBhY3R1YXRvci5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7Y2FsYygzICogcHJvcGVydGllcy5zaXplKX1weGA7XG4gICAgdG9nZ2xlU3dpdGNoLnN0eWxlLmJhY2tncm91bmQgPSBwcm9wZXJ0aWVzLmJhY2tncm91bmQudG9nZ2xlU3dpdGNoO1xuICB9XG59XG5cbi8vIENoZWNrIGFuZCBmaXggbWlzc2luZyBwcm9wZXJ0aWVzXG5mdW5jdGlvbiBwcm9jZXNzUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHNpemU6IDEuMyxcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICBhY3RpdmU6ICcjM2FmJyxcbiAgICAgIGFjdHVhdG9yOiAnI2ZmZicsXG4gICAgICB0b2dnbGVTd2l0Y2g6ICcjYWFhJyxcbiAgICB9LFxuICB9O1xuXG4gIE9iamVjdC5mcmVlemUoZGVmYXVsdFByb3BlcnRpZXMpO1xuXG4gIGlmICghcHJvcGVydGllcykge1xuICAgIHByb3BlcnRpZXMgPSBzdHJ1Y3R1cmVkQ2xvbmUoZGVmYXVsdFByb3BlcnRpZXMpO1xuICB9IGVsc2Uge1xuICAgIGlmIChwcm9wZXJ0aWVzLnNpemUpIHByb3BlcnRpZXMuc2l6ZSA9IGNhbGMocHJvcGVydGllcy5zaXplKTtcblxuICAgIGlmICghcHJvcGVydGllcy5iYWNrZ3JvdW5kKSB7XG4gICAgICBwcm9wZXJ0aWVzLmJhY2tncm91bmQgPSBkZWZhdWx0UHJvcGVydGllcy5iYWNrZ3JvdW5kO1xuICAgIH0gZWxzZSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoXG4gICAgICAgIHByb3BlcnRpZXMuYmFja2dyb3VuZCxcbiAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMuYmFja2dyb3VuZFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMpO1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG4vLyBQcmVjaXNpb24gQ2FsY3VsYXRlZCB2YWx1ZXMgdG8gb25lIGRlY2ltYWwgcG9pbnRcbmZ1bmN0aW9uIGNhbGModmFsdWUpIHtcbiAgbGV0IHJlc3VsdCA9IGAke3ZhbHVlLnRvRml4ZWQoMSl9YDtcblxuICBpZiAocmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSA9PT0gJzAnKSByZXR1cm4gcGFyc2VJbnQodmFsdWUpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIEdldCBTd2l0Y2ggQ1NTIHdpdGggYW4gYWRqdXN0bWVudCBpbiB2YWx1ZXNcbmZ1bmN0aW9uIHN3aXRjaENTUyhiZywgc2l6ZSkge1xuICByZXR1cm4gYFxcXG4gICAgYmFja2dyb3VuZDogJHtiZ307XG4gICAgYm9yZGVyLXJhZGl1czogJHsxMCAqIHNpemV9cHg7XG4gICAgaGVpZ2h0OiAkezE2ICogc2l6ZX1weDtcbiAgICB3aWR0aDogJHszMiAqIHNpemV9cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAkezUgKiBzaXplfXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuNHMgZWFzZS1pbi1vdXQgLjNzYDtcbn1cblxuLy8gR2V0IEFjdHVhdG9yIENTUyB3aXRoIGFuIGFkanVzdG1lbnQgaW4gdmFsdWVzXG5mdW5jdGlvbiBhY3R1YXRvckNTUyhiZywgc2l6ZSkge1xuICByZXR1cm4gYFxcXG4gICAgYm9yZGVyLXJhZGl1czogJHsxMiAqIHNpemV9cHg7XG4gICAgYmFja2dyb3VuZDogJHtiZ307XG4gICAgbWFyZ2luOiAke2NhbGMoMyAqIHNpemUpfXB4ICR7Y2FsYygzICogc2l6ZSl9cHg7XG4gICAgaGVpZ2h0OiAkezEwICogc2l6ZX1weDtcbiAgICB3aWR0aDogJHsxMCAqIHNpemV9cHg7XG4gICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgLjZzIGVhc2UtaW4tb3V0IC4xcztgO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IGFjdGl2YXRlLCBuZXdCdG4gfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihxdWVyeSkge1xuICBjb25zdCBwaWVjZSA9IHsgMTogJ2Y1ODhkODQxJywgMjogJzE0MTM1NjInIH07XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgJ2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/JyArXG4gICAgICAgIGBrZXk9N2UwNTQwJHtwaWVjZVsnMSddfWZiODUyJHtwaWVjZVsnMiddfTMyMTA0JnE9JHtxdWVyeX0mZGF5cz0zYCxcbiAgICAgIHsgY29yczogdHJ1ZSB9XG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgaWYgKGRhdGEuZXJyb3IgPT0gdW5kZWZpbmVkKSByZXR1cm4gZGF0YTtcblxuICAgIHRocm93IGRhdGEuZXJyb3I7XG4gIH0gY2F0Y2ggKGRhdGEpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZGF0YSk7XG4gIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dlYXRoZXIuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9pY29ucy9zZWFyY2guc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFdlYXRoZXIgRE9NIHN0eWxlc2hlZXQqL1xcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIFJvb3Qgc3R5bGluZ1xcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG46cm9vdCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBmaXhlZCBjZW50ZXIvY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAtLWJhY2tncm91bmQxOiAjZmZmO1xcbiAgLS1jb2xvcjogIzAwMDtcXG4gIC0tYm9yZGVyLXJhZGl1czogMC42ZW07XFxufVxcblxcbmJvZHkge1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQ6ICNmZmY3O1xcbiAgY29sb3I6ICMzMzM7XFxuICBtYXJnaW46IDAuNWVtO1xcbiAgcGFkZGluZzogMC40ZW07XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogSGVhZGVyIGNvbnRlbnQgYW5kIGhlYWRlciBmb3JtIGlucHV0XFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNGVtO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgbWFyZ2luOiAwLjNlbSAwLjJlbSAwLjFlbTtcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbiAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuOGVtO1xcbiAgY29sb3I6ICMzMzM7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAzcHggIzMzMzk7XFxufVxcblxcbi51bml0IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjb2xvcjogIzMzMztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwLjRlbSAwLjZlbSAwLjRlbSAwLjRlbTtcXG59XFxuXFxuLnVuaXQgPiBkaXYge1xcbiAgbWFyZ2luOiAwIDAuOGVtO1xcbn1cXG5cXG5oZWFkZXIgaDEgc3BhbiB7XFxuICBmb250LXNpemU6IDEuMDVlbTtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGdhcDogMDtcXG4gIG1hcmdpbjogMC41ZW0gMC44ZW07XFxuICBwYWRkaW5nOiAwLjFlbSAwLjVlbTtcXG59XFxuXFxuZm9ybSBpbnB1dCB7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIGZvbnQtc2l6ZTogMS4wNmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5mb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzQ0NDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmxvY2F0aW9uLWlucHV0IHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIHRyYW5zaXRpb246IHdpZHRoIC41cyBlYXNlLWluLW91dCAuMXM7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwMDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMC4xNmVtO1xcbn1cXG5cXG5mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lOyAgXFxuICB3aWR0aDogY2xhbXAoMTAwcHgsIDI1MHB4LCA0MDBweCk7XFxufVxcblxcbmZvcm0gaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgd2lkdGg6IDEuM2VtO1xcbiAgaGVpZ2h0OiAxLjNlbTtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogRXJyb3IgcG9wdXAgbWVudVxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uZXJyb3Ige1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHJnYigyNTUsIDk5LCA3MSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCA5OSwgNzEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBtYXJnaW4tbGVmdDogMC42ZW07XFxuICBwYWRkaW5nOiAwLjE1ZW0gMC41ZW07XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5lcnJvciAubWVzc2FnZSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5jbG9zZS1lcnJvci1idG4ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMjU1LCA5OSwgNzEpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1zaXplOiAxLjZlbTtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1yaWdodDogMC4yZW07XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY2xvc2UtZXJyb3ItYnRuOmFjdGl2ZSB7XFxuICBjb2xvcjogIzMzMztcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogTWFpbjogIHdlYXRoZXIgY29udGVudCBkaXNwbGF5IHN0eWxpbmdcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgZmxleC1iYXNpczogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMmVtO1xcbn1cXG5cXG5oNCB7XFxuICBtYXJnaW46IDAuMWVtO1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBMb2FkaW5nIGFuaW1hdGlvblxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4ubG9hZGVyIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiAjMzMzICMzMzMgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW46IDIuM2VtO1xcbiAgd2lkdGg6IDJlbTtcXG4gIGhlaWdodDogMmVtO1xcbiAgYW5pbWF0aW9uOiBzcGluIDEuNXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwwQkFBMEI7O0FBRzFCOzttREFFbUQ7QUFDbkQ7RUFDRSxnRkFBd0U7RUFDeEUsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixzQkFBc0I7O0VBRXRCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQ0FBbUM7RUFDbkMsaUNBQWlDO0FBQ25DOzs7QUFHQTs7bURBRW1EO0FBQ25EO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsTUFBTTtFQUNOLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG9FQUE4RDtFQUM5RCx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7O0FBR0E7O21EQUVtRDtBQUNuRDtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtDQUFrQztFQUNsQyxtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7OztBQUdBOzttREFFbUQ7QUFDbkQ7RUFDRSxhQUFhO0VBQ2I7d0JBQ3NCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7OztBQUdBOzttREFFbUQ7QUFDbkQ7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1YsV0FBVztFQUNYLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBXZWF0aGVyIERPTSBzdHlsZXNoZWV0Ki9cXG5AaW1wb3J0ICcuL3dlYXRoZXIuY3NzJztcXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBSb290IHN0eWxpbmdcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuOnJvb3Qge1xcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvYmFja2dyb3VuZC5qcGcnKSBuby1yZXBlYXQgZml4ZWQgY2VudGVyL2NvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgLS1iYWNrZ3JvdW5kMTogI2ZmZjtcXG4gIC0tY29sb3I6ICMwMDA7XFxuICAtLWJvcmRlci1yYWRpdXM6IDAuNmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kOiAjZmZmNztcXG4gIGNvbG9yOiAjMzMzO1xcbiAgbWFyZ2luOiAwLjVlbTtcXG4gIHBhZGRpbmc6IDAuNGVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIEhlYWRlciBjb250ZW50IGFuZCBoZWFkZXIgZm9ybSBpbnB1dFxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjRlbTtcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gIG1hcmdpbjogMC4zZW0gMC4yZW0gMC4xZW07XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjhlbTtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggM3B4ICMzMzM5O1xcbn1cXG5cXG4udW5pdCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgY29sb3I6ICMzMzM7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMC40ZW0gMC42ZW0gMC40ZW0gMC40ZW07XFxufVxcblxcbi51bml0ID4gZGl2IHtcXG4gIG1hcmdpbjogMCAwLjhlbTtcXG59XFxuXFxuaGVhZGVyIGgxIHNwYW4ge1xcbiAgZm9udC1zaXplOiAxLjA1ZW07XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBnYXA6IDA7XFxuICBtYXJnaW46IDAuNWVtIDAuOGVtO1xcbiAgcGFkZGluZzogMC4xZW0gMC41ZW07XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgcGFkZGluZzogMC4yZW07XFxuICBmb250LXNpemU6IDEuMDZlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICM0NDQ7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5sb2NhdGlvbi1pbnB1dCB7XFxuICB3aWR0aDogMTIwcHg7XFxuICB0cmFuc2l0aW9uOiB3aWR0aCAuNXMgZWFzZS1pbi1vdXQgLjFzO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDA7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDAuMTZlbTtcXG59XFxuXFxuZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTsgIFxcbiAgd2lkdGg6IGNsYW1wKDEwMHB4LCAyNTBweCwgNDAwcHgpO1xcbn1cXG5cXG5mb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL2ljb25zL3NlYXJjaC5zdmcnKSBuby1yZXBlYXQgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgd2lkdGg6IDEuM2VtO1xcbiAgaGVpZ2h0OiAxLjNlbTtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogRXJyb3IgcG9wdXAgbWVudVxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uZXJyb3Ige1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHJnYigyNTUsIDk5LCA3MSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCA5OSwgNzEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBtYXJnaW4tbGVmdDogMC42ZW07XFxuICBwYWRkaW5nOiAwLjE1ZW0gMC41ZW07XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5lcnJvciAubWVzc2FnZSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5jbG9zZS1lcnJvci1idG4ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMjU1LCA5OSwgNzEpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1zaXplOiAxLjZlbTtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1yaWdodDogMC4yZW07XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY2xvc2UtZXJyb3ItYnRuOmFjdGl2ZSB7XFxuICBjb2xvcjogIzMzMztcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogTWFpbjogIHdlYXRoZXIgY29udGVudCBkaXNwbGF5IHN0eWxpbmdcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgZmxleC1iYXNpczogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMmVtO1xcbn1cXG5cXG5oNCB7XFxuICBtYXJnaW46IDAuMWVtO1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBMb2FkaW5nIGFuaW1hdGlvblxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4ubG9hZGVyIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiAjMzMzICMzMzMgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW46IDIuM2VtO1xcbiAgd2lkdGg6IDJlbTtcXG4gIGhlaWdodDogMmVtO1xcbiAgYW5pbWF0aW9uOiBzcGluIDEuNXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudG9kYXkge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggM3B4ICMzMzM5O1xcbiAgbWFyZ2luOiAxZW07XFxufVxcblxcbi5jb25kaXRpb24gaW1nIHtcXG4gIGhlaWdodDogN2VtO1xcbiAgd2lkdGg6IDdlbTtcXG4gIGJhY2tncm91bmQ6ICMzMzMxO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNWVtO1xcbn1cXG5cXG4uY29uZGl0aW9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG4udG9kYXkgLnRlbXBlcmF0dXJlIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDRlbTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDVweCAjMzMzYTtcXG59XFxuXFxuLndpbmQgPiBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG4gIGdhcDogMWVtO1xcbn1cXG5cXG4ub3RoZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXJvdy1nYXA6IDFlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMmVtO1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcbiAgYmFja2dyb3VuZDogIzMzMzE7XFxuICBwYWRkaW5nOiAxLjJlbSAxLjZlbTtcXG4gIG1hcmdpbjogMC44ZW07XFxuICBib3JkZXItcmFkaXVzOiAyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdCA+ICoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGdhcDogMS4yZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvd2VhdGhlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLDhCQUE4QjtFQUM5QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsU0FBUztFQUNULDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRvZGF5IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDNweCAjMzMzOTtcXG4gIG1hcmdpbjogMWVtO1xcbn1cXG5cXG4uY29uZGl0aW9uIGltZyB7XFxuICBoZWlnaHQ6IDdlbTtcXG4gIHdpZHRoOiA3ZW07XFxuICBiYWNrZ3JvdW5kOiAjMzMzMTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVlbTtcXG59XFxuXFxuLmNvbmRpdGlvbiB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuXFxuLnRvZGF5IC50ZW1wZXJhdHVyZSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiA0ZW07XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCA1cHggIzMzM2E7XFxufVxcblxcbi53aW5kID4gc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBnYXA6IDFlbTtcXG59XFxuXFxuLm90aGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC1yb3ctZ2FwOiAxZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDJlbTtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gIGJhY2tncm91bmQ6ICMzMzMxO1xcbiAgcGFkZGluZzogMS4yZW0gMS42ZW07XFxuICBtYXJnaW46IDAuOGVtO1xcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QgPiAqIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBnYXA6IDEuMmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJlcnJvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVycm9yTXNnIiwibWFpbiIsInNob3dFcnJvciIsIm1lc3NhZ2UiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJ0ZXh0Q29udGVudCIsImNsb3NlRXJyb3IiLCJzaG93V2VhdGhlciIsIndlYXRoZXJEYXRhIiwidW5pdHMiLCJjbGVhcldlYXRoZXIiLCJhcHBlbmRDaGlsZCIsInRvZGF5IiwiZm9yZWNhc3QiLCJ0ZW1wVW5pdCIsImxvYWRpbmciLCJsb2FkZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwid2V0aGVyRE9NIiwiY2hpbGRyZW5ET00iLCJsb2NhdGlvbiIsImNvbmRpdGlvbiIsImN1cnJlbnQiLCJ0ZW1wZXJhdHVyZSIsIndpbmQiLCJzcGVlZFVuaXQiLCJvdGhlciIsIl9pIiwiX2NoaWxkcmVuRE9NIiwibGVuZ3RoIiwiZG9tIiwiZm9yZWNhc3RET00iLCJpIiwiZm9yZWNhc3RkYXkiLCJkYXkiLCJjb25jYXQiLCJ0b1VwcGVyQ2FzZSIsImljb24iLCJzcmMiLCJkYXRlIiwibG9jYXRpb25EYXRhIiwibG9jYXRpb25ET00iLCJuYW1lIiwiY291bnRyeSIsImNvbmRpdGlvbkRhdGEiLCJjb25kaXRpb25ET00iLCJ0ZXh0IiwidGVtcGVyYXR1cmVET00iLCJ3aW5kQW5nbGUiLCJ3aW5kX2RlZ3JlZSIsIndpbmREaXIiLCJ3aW5kX2RpciIsIndpbmRTcGVlZCIsIndpbmRJbmZvIiwiaGVhZGluZyIsIndpbmRET00iLCJjb250YWluZXIiLCJ0aXRsZSIsImtleXMiLCJ2YWx1ZSIsInRvTG93ZXJDYXNlIiwic2VjdGlvbiIsIl90eXBlb2YiLCJvYmoiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJkZXNjIiwiJFN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiRE9NIiwiZ2V0V2VhdGhlciIsInRvZ2dsZVN3aXRjaCIsImxvY2F0aW9uSW5wdXQiLCJxdWVyeUJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJfcmVmIiwiX2NhbGxlZSIsImV2ZW50IiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInZhbGlkaXR5IiwidmFsdWVNaXNzaW5nIiwicHJldmVudERlZmF1bHQiLCJfeCIsImNsb3NlRXJyb3JCdG4iLCJ3ZWF0aGVyUmVwb3J0IiwicXVlcnkiLCJkYXRhIiwidGVtcENvbnZlcnRlciIsImN1cnJlbnRUZW1wIiwidGVtcF9jIiwicGFyc2VJbnQiLCJ0ZW1wX2YiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGVtcCIsImFsZXJ0Iiwic3RvcFByb3BhZ2F0aW9uIiwic3BlZWRDb252ZXJ0ZXIiLCJndXN0IiwiYWN0aXZhdGUiLCJuZXdCdG4iLCJwcm9wZXJ0aWVzIiwicHJvY2Vzc1Byb3BlcnRpZXMiLCJjc3NUZXh0Iiwic3dpdGNoQ1NTIiwiYmFja2dyb3VuZCIsInNpemUiLCJhY3R1YXRvciIsImFjdHVhdG9yQ1NTIiwiYW5pbWF0ZSIsInRhcmdldCIsInN3aXRjaGVzIiwiX2xvb3AiLCJtYXJnaW4iLCJtYXJnaW5MZWZ0IiwiY2FsYyIsImFjdGl2ZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiZnJlZXplIiwic3RydWN0dXJlZENsb25lIiwidG9GaXhlZCIsImJnIiwiX2dldFdlYXRoZXIiLCJwaWVjZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJjb3JzIiwianNvbiIsInQwIl0sInNvdXJjZVJvb3QiOiIifQ==