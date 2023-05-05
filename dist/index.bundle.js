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
___CSS_LOADER_EXPORT___.push([module.id, ".today {\n  text-align: center;\n}\n\n.location {\n  font-weight: 400;\n  font-size: 2em;\n  text-shadow: 2px 2px 3px #3339;\n  margin: 1em;\n}\n\n.condition img {\n  height: 7em;\n  width: 7em;\n  background: #3331;\n  padding: 1em;\n  border-radius: 5em;\n}\n\n.condition {\n  font-weight: 500;\n  font-size: 1.2em;\n}\n\n.today .temperature {\n  font-weight: 500;\n  font-size: 4em;\n  margin: 0;\n  text-shadow: 3px 3px 5px #333a;\n}\n\n.wind > section {\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  gap: 1em;\n}\n\n.other {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-row-gap: 1em;\n  text-align: center;\n  margin: 2em;\n  background: #3331;\n  border-radius: 2em;\n  padding: 1em;\n}\n\n.forecast {\n  background: #3331;\n  padding: 1.2em 1.6em;\n  margin: 0.8em;\n  border-radius: 2em;\n  text-align: center;\n}\n\n.forecast > * {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-style: italic;\n  gap: 1.2em;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/weather.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,WAAW;EACX,UAAU;EACV,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,SAAS;EACT,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,aAAa;EACb,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,UAAU;AACZ","sourcesContent":[".today {\n  text-align: center;\n}\n\n.location {\n  font-weight: 400;\n  font-size: 2em;\n  text-shadow: 2px 2px 3px #3339;\n  margin: 1em;\n}\n\n.condition img {\n  height: 7em;\n  width: 7em;\n  background: #3331;\n  padding: 1em;\n  border-radius: 5em;\n}\n\n.condition {\n  font-weight: 500;\n  font-size: 1.2em;\n}\n\n.today .temperature {\n  font-weight: 500;\n  font-size: 4em;\n  margin: 0;\n  text-shadow: 3px 3px 5px #333a;\n}\n\n.wind > section {\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  gap: 1em;\n}\n\n.other {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-row-gap: 1em;\n  text-align: center;\n  margin: 2em;\n  background: #3331;\n  border-radius: 2em;\n  padding: 1em;\n}\n\n.forecast {\n  background: #3331;\n  padding: 1.2em 1.6em;\n  margin: 0.8em;\n  border-radius: 2em;\n  text-align: center;\n}\n\n.forecast > * {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-style: italic;\n  gap: 1.2em;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBYTs7QUFFYixJQUFNQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztBQUM5QyxJQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0FBQzFELElBQU1FLElBQUksR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDOztBQUUzQztBQUNBO0FBQ0E7QUFDQSxpRUFBZTtFQUNiRyxTQUFTLFdBQUFBLFVBQUNDLE9BQU8sRUFBRTtJQUNqQk4sS0FBSyxDQUFDTyxLQUFLLENBQUNDLFVBQVUsR0FBRyxTQUFTO0lBQ2xDTCxRQUFRLENBQUNNLFdBQVcsR0FBR0gsT0FBTztJQUM5QkYsSUFBSSxDQUFDSyxXQUFXLEdBQUcsRUFBRTtFQUN2QixDQUFDO0VBRURDLFVBQVUsV0FBQUEsV0FBQSxFQUFHO0lBQ1hWLEtBQUssQ0FBQ08sS0FBSyxDQUFDQyxVQUFVLEdBQUcsUUFBUTtJQUNqQ0wsUUFBUSxDQUFDTSxXQUFXLEdBQUcsRUFBRTtFQUMzQixDQUFDO0VBRURFLFdBQVcsV0FBQUEsWUFBQ0MsV0FBVyxFQUFFQyxLQUFLLEVBQUU7SUFDOUIsSUFBSSxDQUFDQyxZQUFZLEVBQUU7SUFDbkJWLElBQUksQ0FBQ1csV0FBVyxDQUFDQyxLQUFLLENBQUNKLFdBQVcsRUFBRUMsS0FBSyxDQUFDLENBQUM7SUFDM0NULElBQUksQ0FBQ1csV0FBVyxDQUFDRSxRQUFRLENBQUNMLFdBQVcsQ0FBQ0ssUUFBUSxFQUFFSixLQUFLLENBQUNLLFFBQVEsQ0FBQyxDQUFDO0VBQ2xFLENBQUM7RUFFREosWUFBWSxXQUFBQSxhQUFBLEVBQUc7SUFDYlYsSUFBSSxDQUFDSyxXQUFXLEdBQUcsRUFBRTtFQUN2QixDQUFDO0VBRURVLE9BQU8sV0FBQUEsUUFBQSxFQUFHO0lBQ1IsSUFBSSxDQUFDTCxZQUFZLEVBQUU7SUFDbkIsSUFBTU0sTUFBTSxHQUFHbkIsUUFBUSxDQUFDb0IsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUM1Q0QsTUFBTSxDQUFDRSxTQUFTLEdBQUcsUUFBUTtJQUMzQmxCLElBQUksQ0FBQ1csV0FBVyxDQUFDSyxNQUFNLENBQUM7RUFDMUI7QUFDRixDQUFDLEVBQUM7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTSixLQUFLQSxDQUFDSixXQUFXLEVBQUVDLEtBQUssRUFBRTtFQUNqQyxJQUFNVSxTQUFTLEdBQUd0QixRQUFRLENBQUNvQixhQUFhLENBQUMsU0FBUyxDQUFDO0VBQ25ERSxTQUFTLENBQUNELFNBQVMsR0FBRyxPQUFPO0VBRTdCLElBQU1FLE9BQU8sR0FBR3ZCLFFBQVEsQ0FBQ29CLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDNUNHLE9BQU8sQ0FBQ2YsV0FBVyxHQUFHLFdBQVc7RUFDakNjLFNBQVMsQ0FBQ1IsV0FBVyxDQUFDUyxPQUFPLENBQUM7RUFFOUIsSUFBTUMsV0FBVyxHQUFHLENBQ2xCQyxRQUFRLENBQUNkLFdBQVcsQ0FBQ2MsUUFBUSxDQUFDLEVBQzlCQyxTQUFTLENBQUNmLFdBQVcsQ0FBQ2dCLE9BQU8sQ0FBQ0QsU0FBUyxDQUFDLEVBQ3hDRSxXQUFXLENBQUNqQixXQUFXLENBQUNnQixPQUFPLEVBQUVmLEtBQUssQ0FBQ0ssUUFBUSxDQUFDLEVBQ2hEWSxJQUFJLENBQUNsQixXQUFXLENBQUNnQixPQUFPLEVBQUVmLEtBQUssQ0FBQ2tCLFNBQVMsQ0FBQyxFQUMxQ0MsS0FBSyxDQUFDcEIsV0FBVyxDQUFDZ0IsT0FBTyxFQUFFZixLQUFLLENBQUNrQixTQUFTLENBQUMsQ0FDNUM7RUFFRCxTQUFBRSxFQUFBLE1BQUFDLFlBQUEsR0FBZ0JULFdBQVcsRUFBQVEsRUFBQSxHQUFBQyxZQUFBLENBQUFDLE1BQUEsRUFBQUYsRUFBQTtJQUF0QixJQUFJRyxHQUFHLEdBQUFGLFlBQUEsQ0FBQUQsRUFBQTtJQUFpQlYsU0FBUyxDQUFDUixXQUFXLENBQUNxQixHQUFHLENBQUM7RUFBQztFQUV4RCxPQUFPYixTQUFTO0FBQ2xCO0FBRUEsU0FBU04sUUFBUUEsQ0FBQ0wsV0FBVyxFQUFFTSxRQUFRLEVBQUU7RUFDdkMsSUFBTW1CLFdBQVcsR0FBR3BDLFFBQVEsQ0FBQ29CLGFBQWEsQ0FBQyxTQUFTLENBQUM7RUFDckRnQixXQUFXLENBQUNmLFNBQVMsR0FBRyxVQUFVO0VBRWxDLElBQU1FLE9BQU8sR0FBR3ZCLFFBQVEsQ0FBQ29CLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDNUNHLE9BQU8sQ0FBQ2YsV0FBVyxHQUFHLFVBQVU7RUFDaEM0QixXQUFXLENBQUN0QixXQUFXLENBQUNTLE9BQU8sQ0FBQztFQUVoQyxLQUFLLElBQUljLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzFCLFdBQVcsQ0FBQzJCLFdBQVcsQ0FBQ0osTUFBTSxFQUFFLEVBQUVHLENBQUMsRUFBRTtJQUN2RCxJQUFNRSxHQUFHLEdBQUd2QyxRQUFRLENBQUNvQixhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ3pDbUIsR0FBRyxDQUFDbEIsU0FBUyxHQUFHLGNBQWM7SUFFOUIsSUFBTU8sWUFBVyxHQUFHNUIsUUFBUSxDQUFDb0IsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUNqRFEsWUFBVyxDQUFDUCxTQUFTLEdBQUcsYUFBYTtJQUNyQ08sWUFBVyxDQUFDcEIsV0FBVyxNQUFBZ0MsTUFBQSxDQUNyQjdCLFdBQVcsQ0FBQzJCLFdBQVcsQ0FBQ0QsQ0FBQyxDQUFDLENBQUNFLEdBQUcsQ0FBQyxVQUFVLEdBQUd0QixRQUFRLENBQUMsRUFBQXVCLE1BQUEsQ0FDcER2QixRQUFRLENBQUN3QixXQUFXLEVBQUUsQ0FBRTtJQUMzQixJQUFNQyxJQUFJLEdBQUcxQyxRQUFRLENBQUNvQixhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzFDc0IsSUFBSSxDQUFDckIsU0FBUyxHQUFHLE1BQU07SUFDdkJxQixJQUFJLENBQUNDLEdBQUcsR0FBR2hDLFdBQVcsQ0FBQzJCLFdBQVcsQ0FBQ0QsQ0FBQyxDQUFDLENBQUNFLEdBQUcsQ0FBQ2IsU0FBUyxDQUFDZ0IsSUFBSTtJQUN4RCxJQUFNRSxJQUFJLEdBQUc1QyxRQUFRLENBQUNvQixhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzFDd0IsSUFBSSxDQUFDdkIsU0FBUyxHQUFHLE1BQU07SUFDdkJ1QixJQUFJLENBQUNwQyxXQUFXLEdBQUdHLFdBQVcsQ0FBQzJCLFdBQVcsQ0FBQ0QsQ0FBQyxDQUFDLENBQUNPLElBQUk7SUFFbERMLEdBQUcsQ0FBQ3pCLFdBQVcsQ0FBQ2MsWUFBVyxDQUFDO0lBQzVCVyxHQUFHLENBQUN6QixXQUFXLENBQUM0QixJQUFJLENBQUM7SUFDckJILEdBQUcsQ0FBQ3pCLFdBQVcsQ0FBQzhCLElBQUksQ0FBQztJQUVyQlIsV0FBVyxDQUFDdEIsV0FBVyxDQUFDeUIsR0FBRyxDQUFDO0VBQzlCO0VBRUEsT0FBT0gsV0FBVztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU1gsUUFBUUEsQ0FBQ29CLFlBQVksRUFBRTtFQUM5QixJQUFNQyxXQUFXLEdBQUc5QyxRQUFRLENBQUNvQixhQUFhLENBQUMsU0FBUyxDQUFDO0VBQ3JEMEIsV0FBVyxDQUFDekIsU0FBUyxHQUFHLFVBQVU7RUFDbEN5QixXQUFXLENBQUN0QyxXQUFXLE1BQUFnQyxNQUFBLENBQU1LLFlBQVksQ0FBQ0UsSUFBSSxRQUFBUCxNQUFBLENBQUtLLFlBQVksQ0FBQ0csT0FBTyxDQUFFO0VBRXpFLE9BQU9GLFdBQVc7QUFDcEI7O0FBRUE7QUFDQSxTQUFTcEIsU0FBU0EsQ0FBQ3VCLGFBQWEsRUFBRTtFQUNoQyxJQUFNQyxZQUFZLEdBQUdsRCxRQUFRLENBQUNvQixhQUFhLENBQUMsU0FBUyxDQUFDO0VBQ3REOEIsWUFBWSxDQUFDN0IsU0FBUyxHQUFHLFdBQVc7RUFDcEMsSUFBTXFCLElBQUksR0FBRzFDLFFBQVEsQ0FBQ29CLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDMUNzQixJQUFJLENBQUNDLEdBQUcsR0FBR00sYUFBYSxDQUFDUCxJQUFJO0VBQzdCLElBQU1TLElBQUksR0FBR25ELFFBQVEsQ0FBQ29CLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDeEMrQixJQUFJLENBQUMzQyxXQUFXLEdBQUd5QyxhQUFhLENBQUNFLElBQUk7RUFDckNELFlBQVksQ0FBQ3BDLFdBQVcsQ0FBQzRCLElBQUksQ0FBQztFQUM5QlEsWUFBWSxDQUFDcEMsV0FBVyxDQUFDcUMsSUFBSSxDQUFDO0VBRTlCLE9BQU9ELFlBQVk7QUFDckI7O0FBRUE7QUFDQSxTQUFTdEIsV0FBV0EsQ0FBQ2pCLFdBQVcsRUFBRU0sUUFBUSxFQUFFO0VBQzFDLElBQU1tQyxjQUFjLEdBQUdwRCxRQUFRLENBQUNvQixhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3BEZ0MsY0FBYyxDQUFDNUMsV0FBVyxNQUFBZ0MsTUFBQSxDQUN4QjdCLFdBQVcsQ0FBQyxPQUFPLEdBQUdNLFFBQVEsQ0FBQyxFQUFBdUIsTUFBQSxDQUM5QnZCLFFBQVEsQ0FBQ3dCLFdBQVcsRUFBRSxDQUFFO0VBQzNCVyxjQUFjLENBQUMvQixTQUFTLEdBQUcsYUFBYTtFQUV4QyxPQUFPK0IsY0FBYztBQUN2Qjs7QUFFQTtBQUNBLFNBQVN2QixJQUFJQSxDQUFDbEIsV0FBVyxFQUFFbUIsU0FBUyxFQUFFO0VBQ3BDLElBQU11QixTQUFTLEdBQUdyRCxRQUFRLENBQUNvQixhQUFhLENBQUMsS0FBSyxDQUFDO0VBQy9DaUMsU0FBUyxDQUFDN0MsV0FBVyxNQUFBZ0MsTUFBQSxDQUFNN0IsV0FBVyxDQUFDMkMsV0FBVyxTQUFHO0VBQ3JELElBQU1DLE9BQU8sR0FBR3ZELFFBQVEsQ0FBQ29CLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDN0NtQyxPQUFPLENBQUMvQyxXQUFXLEdBQUdHLFdBQVcsQ0FBQzZDLFFBQVE7RUFDMUMsSUFBTUMsU0FBUyxHQUFHekQsUUFBUSxDQUFDb0IsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUMvQ3FDLFNBQVMsQ0FBQ2pELFdBQVcsTUFBQWdDLE1BQUEsQ0FBTTdCLFdBQVcsQ0FBQyxPQUFPLEdBQUdtQixTQUFTLENBQUMsRUFBQVUsTUFBQSxDQUFHVixTQUFTLENBQUU7RUFDekUyQixTQUFTLENBQUNwQyxTQUFTLEdBQUcsWUFBWTtFQUVsQyxJQUFNcUMsUUFBUSxHQUFHMUQsUUFBUSxDQUFDb0IsYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUNsRHNDLFFBQVEsQ0FBQzVDLFdBQVcsQ0FBQ3VDLFNBQVMsQ0FBQztFQUMvQkssUUFBUSxDQUFDNUMsV0FBVyxDQUFDeUMsT0FBTyxDQUFDO0VBQzdCRyxRQUFRLENBQUM1QyxXQUFXLENBQUMyQyxTQUFTLENBQUM7RUFFL0IsSUFBTWxDLE9BQU8sR0FBR3ZCLFFBQVEsQ0FBQ29CLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDNUNHLE9BQU8sQ0FBQ2YsV0FBVyxHQUFHLE1BQU07RUFFNUIsSUFBTW1ELE9BQU8sR0FBRzNELFFBQVEsQ0FBQ29CLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDN0N1QyxPQUFPLENBQUN0QyxTQUFTLEdBQUcsTUFBTTtFQUMxQnNDLE9BQU8sQ0FBQzdDLFdBQVcsQ0FBQ1MsT0FBTyxDQUFDO0VBQzVCb0MsT0FBTyxDQUFDN0MsV0FBVyxDQUFDNEMsUUFBUSxDQUFDO0VBRTdCLE9BQU9DLE9BQU87QUFDaEI7O0FBRUE7QUFDQSxTQUFTNUIsS0FBS0EsQ0FBQ3BCLFdBQVcsRUFBRW1CLFNBQVMsRUFBRTtFQUNyQyxJQUFNOEIsU0FBUyxHQUFHNUQsUUFBUSxDQUFDb0IsYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUNuRHdDLFNBQVMsQ0FBQ3ZDLFNBQVMsR0FBRyxPQUFPO0VBRTdCLElBQU13QyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUM7RUFDL0MsSUFBTUMsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDO0VBRWxELEtBQUssSUFBSXpCLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3dCLEtBQUssQ0FBQzNCLE1BQU0sRUFBRUcsQ0FBQyxFQUFFLEVBQUU7SUFDckMsSUFBTWQsT0FBTyxHQUFHdkIsUUFBUSxDQUFDb0IsYUFBYSxDQUFDLElBQUksQ0FBQztJQUM1Q0csT0FBTyxDQUFDZixXQUFXLEdBQUdxRCxLQUFLLENBQUN4QixDQUFDLENBQUM7SUFDOUIsSUFBTTBCLEtBQUssR0FBRy9ELFFBQVEsQ0FBQ29CLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDM0MsSUFBSTBDLElBQUksQ0FBQ3pCLENBQUMsQ0FBQyxLQUFLLE9BQU8sRUFDckIwQixLQUFLLENBQUN2RCxXQUFXLEdBQUdHLFdBQVcsQ0FBQ21ELElBQUksQ0FBQ3pCLENBQUMsQ0FBQyxHQUFHUCxTQUFTLENBQUMsR0FBR0EsU0FBUyxDQUFDLEtBQzlEaUMsS0FBSyxDQUFDdkQsV0FBVyxHQUFHRyxXQUFXLENBQUNtRCxJQUFJLENBQUN6QixDQUFDLENBQUMsQ0FBQztJQUM3QzBCLEtBQUssQ0FBQzFDLFNBQVMsR0FBR3dDLEtBQUssQ0FBQ3hCLENBQUMsQ0FBQyxDQUFDMkIsV0FBVyxFQUFFO0lBRXhDLElBQU1DLE9BQU8sR0FBR2pFLFFBQVEsQ0FBQ29CLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDakQ2QyxPQUFPLENBQUNuRCxXQUFXLENBQUNTLE9BQU8sQ0FBQztJQUM1QjBDLE9BQU8sQ0FBQ25ELFdBQVcsQ0FBQ2lELEtBQUssQ0FBQztJQUMxQkgsU0FBUyxDQUFDOUMsV0FBVyxDQUFDbUQsT0FBTyxDQUFDO0VBQ2hDO0VBRUEsT0FBT0wsU0FBUztBQUNsQjs7Ozs7Ozs7Ozs7Ozs7O0FDMUxhOztBQUFBLFNBQUFNLFFBQUFDLEdBQUEsc0NBQUFELE9BQUEsd0JBQUFFLE1BQUEsdUJBQUFBLE1BQUEsQ0FBQUMsUUFBQSxhQUFBRixHQUFBLGtCQUFBQSxHQUFBLGdCQUFBQSxHQUFBLFdBQUFBLEdBQUEseUJBQUFDLE1BQUEsSUFBQUQsR0FBQSxDQUFBRyxXQUFBLEtBQUFGLE1BQUEsSUFBQUQsR0FBQSxLQUFBQyxNQUFBLENBQUFHLFNBQUEscUJBQUFKLEdBQUEsS0FBQUQsT0FBQSxDQUFBQyxHQUFBO0FBQUEsU0FBQUssb0JBQUEsa0JBQ2IscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLE9BQUEsU0FBQUEsT0FBQSxPQUFBQyxFQUFBLEdBQUFDLE1BQUEsQ0FBQUosU0FBQSxFQUFBSyxNQUFBLEdBQUFGLEVBQUEsQ0FBQUcsY0FBQSxFQUFBQyxjQUFBLEdBQUFILE1BQUEsQ0FBQUcsY0FBQSxjQUFBWCxHQUFBLEVBQUFZLEdBQUEsRUFBQUMsSUFBQSxJQUFBYixHQUFBLENBQUFZLEdBQUEsSUFBQUMsSUFBQSxDQUFBakIsS0FBQSxLQUFBa0IsT0FBQSx3QkFBQWIsTUFBQSxHQUFBQSxNQUFBLE9BQUFjLGNBQUEsR0FBQUQsT0FBQSxDQUFBWixRQUFBLGtCQUFBYyxtQkFBQSxHQUFBRixPQUFBLENBQUFHLGFBQUEsdUJBQUFDLGlCQUFBLEdBQUFKLE9BQUEsQ0FBQUssV0FBQSw4QkFBQUMsT0FBQXBCLEdBQUEsRUFBQVksR0FBQSxFQUFBaEIsS0FBQSxXQUFBWSxNQUFBLENBQUFHLGNBQUEsQ0FBQVgsR0FBQSxFQUFBWSxHQUFBLElBQUFoQixLQUFBLEVBQUFBLEtBQUEsRUFBQXlCLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUF2QixHQUFBLENBQUFZLEdBQUEsV0FBQVEsTUFBQSxtQkFBQUksR0FBQSxJQUFBSixNQUFBLFlBQUFBLE9BQUFwQixHQUFBLEVBQUFZLEdBQUEsRUFBQWhCLEtBQUEsV0FBQUksR0FBQSxDQUFBWSxHQUFBLElBQUFoQixLQUFBLGdCQUFBNkIsS0FBQUMsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxRQUFBQyxjQUFBLEdBQUFILE9BQUEsSUFBQUEsT0FBQSxDQUFBdkIsU0FBQSxZQUFBMkIsU0FBQSxHQUFBSixPQUFBLEdBQUFJLFNBQUEsRUFBQUMsU0FBQSxHQUFBeEIsTUFBQSxDQUFBeUIsTUFBQSxDQUFBSCxjQUFBLENBQUExQixTQUFBLEdBQUE4QixPQUFBLE9BQUFDLE9BQUEsQ0FBQU4sV0FBQSxnQkFBQWxCLGNBQUEsQ0FBQXFCLFNBQUEsZUFBQXBDLEtBQUEsRUFBQXdDLGdCQUFBLENBQUFWLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLE1BQUFGLFNBQUEsYUFBQUssU0FBQUMsRUFBQSxFQUFBdEMsR0FBQSxFQUFBdUMsR0FBQSxtQkFBQUMsSUFBQSxZQUFBRCxHQUFBLEVBQUFELEVBQUEsQ0FBQUcsSUFBQSxDQUFBekMsR0FBQSxFQUFBdUMsR0FBQSxjQUFBZixHQUFBLGFBQUFnQixJQUFBLFdBQUFELEdBQUEsRUFBQWYsR0FBQSxRQUFBbEIsT0FBQSxDQUFBbUIsSUFBQSxHQUFBQSxJQUFBLE1BQUFpQixnQkFBQSxnQkFBQVgsVUFBQSxjQUFBWSxrQkFBQSxjQUFBQywyQkFBQSxTQUFBQyxpQkFBQSxPQUFBekIsTUFBQSxDQUFBeUIsaUJBQUEsRUFBQTlCLGNBQUEscUNBQUErQixRQUFBLEdBQUF0QyxNQUFBLENBQUF1QyxjQUFBLEVBQUFDLHVCQUFBLEdBQUFGLFFBQUEsSUFBQUEsUUFBQSxDQUFBQSxRQUFBLENBQUFHLE1BQUEsUUFBQUQsdUJBQUEsSUFBQUEsdUJBQUEsS0FBQXpDLEVBQUEsSUFBQUUsTUFBQSxDQUFBZ0MsSUFBQSxDQUFBTyx1QkFBQSxFQUFBakMsY0FBQSxNQUFBOEIsaUJBQUEsR0FBQUcsdUJBQUEsT0FBQUUsRUFBQSxHQUFBTiwwQkFBQSxDQUFBeEMsU0FBQSxHQUFBMkIsU0FBQSxDQUFBM0IsU0FBQSxHQUFBSSxNQUFBLENBQUF5QixNQUFBLENBQUFZLGlCQUFBLFlBQUFNLHNCQUFBL0MsU0FBQSxnQ0FBQWdELE9BQUEsV0FBQUMsTUFBQSxJQUFBakMsTUFBQSxDQUFBaEIsU0FBQSxFQUFBaUQsTUFBQSxZQUFBZCxHQUFBLGdCQUFBZSxPQUFBLENBQUFELE1BQUEsRUFBQWQsR0FBQSxzQkFBQWdCLGNBQUF2QixTQUFBLEVBQUF3QixXQUFBLGFBQUFDLE9BQUFKLE1BQUEsRUFBQWQsR0FBQSxFQUFBbUIsT0FBQSxFQUFBQyxNQUFBLFFBQUFDLE1BQUEsR0FBQXZCLFFBQUEsQ0FBQUwsU0FBQSxDQUFBcUIsTUFBQSxHQUFBckIsU0FBQSxFQUFBTyxHQUFBLG1CQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxRQUFBcUIsTUFBQSxHQUFBRCxNQUFBLENBQUFyQixHQUFBLEVBQUEzQyxLQUFBLEdBQUFpRSxNQUFBLENBQUFqRSxLQUFBLFNBQUFBLEtBQUEsZ0JBQUFHLE9BQUEsQ0FBQUgsS0FBQSxLQUFBYSxNQUFBLENBQUFnQyxJQUFBLENBQUE3QyxLQUFBLGVBQUE0RCxXQUFBLENBQUFFLE9BQUEsQ0FBQTlELEtBQUEsQ0FBQWtFLE9BQUEsRUFBQUMsSUFBQSxXQUFBbkUsS0FBQSxJQUFBNkQsTUFBQSxTQUFBN0QsS0FBQSxFQUFBOEQsT0FBQSxFQUFBQyxNQUFBLGdCQUFBbkMsR0FBQSxJQUFBaUMsTUFBQSxVQUFBakMsR0FBQSxFQUFBa0MsT0FBQSxFQUFBQyxNQUFBLFFBQUFILFdBQUEsQ0FBQUUsT0FBQSxDQUFBOUQsS0FBQSxFQUFBbUUsSUFBQSxXQUFBQyxTQUFBLElBQUFILE1BQUEsQ0FBQWpFLEtBQUEsR0FBQW9FLFNBQUEsRUFBQU4sT0FBQSxDQUFBRyxNQUFBLGdCQUFBakksS0FBQSxXQUFBNkgsTUFBQSxVQUFBN0gsS0FBQSxFQUFBOEgsT0FBQSxFQUFBQyxNQUFBLFNBQUFBLE1BQUEsQ0FBQUMsTUFBQSxDQUFBckIsR0FBQSxTQUFBMEIsZUFBQSxFQUFBdEQsY0FBQSxvQkFBQWYsS0FBQSxXQUFBQSxNQUFBeUQsTUFBQSxFQUFBZCxHQUFBLGFBQUEyQiwyQkFBQSxlQUFBVixXQUFBLFdBQUFFLE9BQUEsRUFBQUMsTUFBQSxJQUFBRixNQUFBLENBQUFKLE1BQUEsRUFBQWQsR0FBQSxFQUFBbUIsT0FBQSxFQUFBQyxNQUFBLGdCQUFBTSxlQUFBLEdBQUFBLGVBQUEsR0FBQUEsZUFBQSxDQUFBRixJQUFBLENBQUFHLDBCQUFBLEVBQUFBLDBCQUFBLElBQUFBLDBCQUFBLHFCQUFBOUIsaUJBQUFWLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLFFBQUFpQyxLQUFBLHNDQUFBZCxNQUFBLEVBQUFkLEdBQUEsd0JBQUE0QixLQUFBLFlBQUFDLEtBQUEsc0RBQUFELEtBQUEsb0JBQUFkLE1BQUEsUUFBQWQsR0FBQSxTQUFBOEIsVUFBQSxXQUFBbkMsT0FBQSxDQUFBbUIsTUFBQSxHQUFBQSxNQUFBLEVBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQUEsR0FBQSxVQUFBK0IsUUFBQSxHQUFBcEMsT0FBQSxDQUFBb0MsUUFBQSxNQUFBQSxRQUFBLFFBQUFDLGNBQUEsR0FBQUMsbUJBQUEsQ0FBQUYsUUFBQSxFQUFBcEMsT0FBQSxPQUFBcUMsY0FBQSxRQUFBQSxjQUFBLEtBQUE3QixnQkFBQSxtQkFBQTZCLGNBQUEscUJBQUFyQyxPQUFBLENBQUFtQixNQUFBLEVBQUFuQixPQUFBLENBQUF1QyxJQUFBLEdBQUF2QyxPQUFBLENBQUF3QyxLQUFBLEdBQUF4QyxPQUFBLENBQUFLLEdBQUEsc0JBQUFMLE9BQUEsQ0FBQW1CLE1BQUEsNkJBQUFjLEtBQUEsUUFBQUEsS0FBQSxnQkFBQWpDLE9BQUEsQ0FBQUssR0FBQSxFQUFBTCxPQUFBLENBQUF5QyxpQkFBQSxDQUFBekMsT0FBQSxDQUFBSyxHQUFBLHVCQUFBTCxPQUFBLENBQUFtQixNQUFBLElBQUFuQixPQUFBLENBQUEwQyxNQUFBLFdBQUExQyxPQUFBLENBQUFLLEdBQUEsR0FBQTRCLEtBQUEsb0JBQUFQLE1BQUEsR0FBQXZCLFFBQUEsQ0FBQVgsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsb0JBQUEwQixNQUFBLENBQUFwQixJQUFBLFFBQUEyQixLQUFBLEdBQUFqQyxPQUFBLENBQUEyQyxJQUFBLG1DQUFBakIsTUFBQSxDQUFBckIsR0FBQSxLQUFBRyxnQkFBQSxxQkFBQTlDLEtBQUEsRUFBQWdFLE1BQUEsQ0FBQXJCLEdBQUEsRUFBQXNDLElBQUEsRUFBQTNDLE9BQUEsQ0FBQTJDLElBQUEsa0JBQUFqQixNQUFBLENBQUFwQixJQUFBLEtBQUEyQixLQUFBLGdCQUFBakMsT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUFxQixNQUFBLENBQUFyQixHQUFBLG1CQUFBaUMsb0JBQUFGLFFBQUEsRUFBQXBDLE9BQUEsUUFBQTRDLFVBQUEsR0FBQTVDLE9BQUEsQ0FBQW1CLE1BQUEsRUFBQUEsTUFBQSxHQUFBaUIsUUFBQSxDQUFBcEUsUUFBQSxDQUFBNEUsVUFBQSxPQUFBQyxTQUFBLEtBQUExQixNQUFBLFNBQUFuQixPQUFBLENBQUFvQyxRQUFBLHFCQUFBUSxVQUFBLElBQUFSLFFBQUEsQ0FBQXBFLFFBQUEsZUFBQWdDLE9BQUEsQ0FBQW1CLE1BQUEsYUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBd0MsU0FBQSxFQUFBUCxtQkFBQSxDQUFBRixRQUFBLEVBQUFwQyxPQUFBLGVBQUFBLE9BQUEsQ0FBQW1CLE1BQUEsa0JBQUF5QixVQUFBLEtBQUE1QyxPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsT0FBQXlDLFNBQUEsdUNBQUFGLFVBQUEsaUJBQUFwQyxnQkFBQSxNQUFBa0IsTUFBQSxHQUFBdkIsUUFBQSxDQUFBZ0IsTUFBQSxFQUFBaUIsUUFBQSxDQUFBcEUsUUFBQSxFQUFBZ0MsT0FBQSxDQUFBSyxHQUFBLG1CQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxTQUFBTixPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQXFCLE1BQUEsQ0FBQXJCLEdBQUEsRUFBQUwsT0FBQSxDQUFBb0MsUUFBQSxTQUFBNUIsZ0JBQUEsTUFBQXVDLElBQUEsR0FBQXJCLE1BQUEsQ0FBQXJCLEdBQUEsU0FBQTBDLElBQUEsR0FBQUEsSUFBQSxDQUFBSixJQUFBLElBQUEzQyxPQUFBLENBQUFvQyxRQUFBLENBQUFZLFVBQUEsSUFBQUQsSUFBQSxDQUFBckYsS0FBQSxFQUFBc0MsT0FBQSxDQUFBaUQsSUFBQSxHQUFBYixRQUFBLENBQUFjLE9BQUEsZUFBQWxELE9BQUEsQ0FBQW1CLE1BQUEsS0FBQW5CLE9BQUEsQ0FBQW1CLE1BQUEsV0FBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBd0MsU0FBQSxHQUFBN0MsT0FBQSxDQUFBb0MsUUFBQSxTQUFBNUIsZ0JBQUEsSUFBQXVDLElBQUEsSUFBQS9DLE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxPQUFBeUMsU0FBQSxzQ0FBQTlDLE9BQUEsQ0FBQW9DLFFBQUEsU0FBQTVCLGdCQUFBLGNBQUEyQyxhQUFBQyxJQUFBLFFBQUFDLEtBQUEsS0FBQUMsTUFBQSxFQUFBRixJQUFBLFlBQUFBLElBQUEsS0FBQUMsS0FBQSxDQUFBRSxRQUFBLEdBQUFILElBQUEsV0FBQUEsSUFBQSxLQUFBQyxLQUFBLENBQUFHLFVBQUEsR0FBQUosSUFBQSxLQUFBQyxLQUFBLENBQUFJLFFBQUEsR0FBQUwsSUFBQSxXQUFBTSxVQUFBLENBQUFDLElBQUEsQ0FBQU4sS0FBQSxjQUFBTyxjQUFBUCxLQUFBLFFBQUEzQixNQUFBLEdBQUEyQixLQUFBLENBQUFRLFVBQUEsUUFBQW5DLE1BQUEsQ0FBQXBCLElBQUEsb0JBQUFvQixNQUFBLENBQUFyQixHQUFBLEVBQUFnRCxLQUFBLENBQUFRLFVBQUEsR0FBQW5DLE1BQUEsYUFBQXpCLFFBQUFOLFdBQUEsU0FBQStELFVBQUEsTUFBQUosTUFBQSxhQUFBM0QsV0FBQSxDQUFBdUIsT0FBQSxDQUFBaUMsWUFBQSxjQUFBVyxLQUFBLGlCQUFBL0MsT0FBQWdELFFBQUEsUUFBQUEsUUFBQSxRQUFBQyxjQUFBLEdBQUFELFFBQUEsQ0FBQWxGLGNBQUEsT0FBQW1GLGNBQUEsU0FBQUEsY0FBQSxDQUFBekQsSUFBQSxDQUFBd0QsUUFBQSw0QkFBQUEsUUFBQSxDQUFBZCxJQUFBLFNBQUFjLFFBQUEsT0FBQUUsS0FBQSxDQUFBRixRQUFBLENBQUFsSSxNQUFBLFNBQUFHLENBQUEsT0FBQWlILElBQUEsWUFBQUEsS0FBQSxhQUFBakgsQ0FBQSxHQUFBK0gsUUFBQSxDQUFBbEksTUFBQSxPQUFBMEMsTUFBQSxDQUFBZ0MsSUFBQSxDQUFBd0QsUUFBQSxFQUFBL0gsQ0FBQSxVQUFBaUgsSUFBQSxDQUFBdkYsS0FBQSxHQUFBcUcsUUFBQSxDQUFBL0gsQ0FBQSxHQUFBaUgsSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsU0FBQUEsSUFBQSxDQUFBdkYsS0FBQSxHQUFBbUYsU0FBQSxFQUFBSSxJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxZQUFBQSxJQUFBLENBQUFBLElBQUEsR0FBQUEsSUFBQSxlQUFBQSxJQUFBLEVBQUFkLFVBQUEsZUFBQUEsV0FBQSxhQUFBekUsS0FBQSxFQUFBbUYsU0FBQSxFQUFBRixJQUFBLGlCQUFBbEMsaUJBQUEsQ0FBQXZDLFNBQUEsR0FBQXdDLDBCQUFBLEVBQUFqQyxjQUFBLENBQUF1QyxFQUFBLG1CQUFBdEQsS0FBQSxFQUFBZ0QsMEJBQUEsRUFBQXRCLFlBQUEsU0FBQVgsY0FBQSxDQUFBaUMsMEJBQUEsbUJBQUFoRCxLQUFBLEVBQUErQyxpQkFBQSxFQUFBckIsWUFBQSxTQUFBcUIsaUJBQUEsQ0FBQXlELFdBQUEsR0FBQWhGLE1BQUEsQ0FBQXdCLDBCQUFBLEVBQUExQixpQkFBQSx3QkFBQVosT0FBQSxDQUFBK0YsbUJBQUEsYUFBQUMsTUFBQSxRQUFBQyxJQUFBLHdCQUFBRCxNQUFBLElBQUFBLE1BQUEsQ0FBQW5HLFdBQUEsV0FBQW9HLElBQUEsS0FBQUEsSUFBQSxLQUFBNUQsaUJBQUEsNkJBQUE0RCxJQUFBLENBQUFILFdBQUEsSUFBQUcsSUFBQSxDQUFBM0gsSUFBQSxPQUFBMEIsT0FBQSxDQUFBa0csSUFBQSxhQUFBRixNQUFBLFdBQUE5RixNQUFBLENBQUFpRyxjQUFBLEdBQUFqRyxNQUFBLENBQUFpRyxjQUFBLENBQUFILE1BQUEsRUFBQTFELDBCQUFBLEtBQUEwRCxNQUFBLENBQUFJLFNBQUEsR0FBQTlELDBCQUFBLEVBQUF4QixNQUFBLENBQUFrRixNQUFBLEVBQUFwRixpQkFBQSx5QkFBQW9GLE1BQUEsQ0FBQWxHLFNBQUEsR0FBQUksTUFBQSxDQUFBeUIsTUFBQSxDQUFBaUIsRUFBQSxHQUFBb0QsTUFBQSxLQUFBaEcsT0FBQSxDQUFBcUcsS0FBQSxhQUFBcEUsR0FBQSxhQUFBdUIsT0FBQSxFQUFBdkIsR0FBQSxPQUFBWSxxQkFBQSxDQUFBSSxhQUFBLENBQUFuRCxTQUFBLEdBQUFnQixNQUFBLENBQUFtQyxhQUFBLENBQUFuRCxTQUFBLEVBQUFZLG1CQUFBLGlDQUFBVixPQUFBLENBQUFpRCxhQUFBLEdBQUFBLGFBQUEsRUFBQWpELE9BQUEsQ0FBQXNHLEtBQUEsYUFBQWxGLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsRUFBQTJCLFdBQUEsZUFBQUEsV0FBQSxLQUFBQSxXQUFBLEdBQUFxRCxPQUFBLE9BQUFDLElBQUEsT0FBQXZELGFBQUEsQ0FBQTlCLElBQUEsQ0FBQUMsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxHQUFBMkIsV0FBQSxVQUFBbEQsT0FBQSxDQUFBK0YsbUJBQUEsQ0FBQTFFLE9BQUEsSUFBQW1GLElBQUEsR0FBQUEsSUFBQSxDQUFBM0IsSUFBQSxHQUFBcEIsSUFBQSxXQUFBRixNQUFBLFdBQUFBLE1BQUEsQ0FBQWdCLElBQUEsR0FBQWhCLE1BQUEsQ0FBQWpFLEtBQUEsR0FBQWtILElBQUEsQ0FBQTNCLElBQUEsV0FBQWhDLHFCQUFBLENBQUFELEVBQUEsR0FBQTlCLE1BQUEsQ0FBQThCLEVBQUEsRUFBQWhDLGlCQUFBLGdCQUFBRSxNQUFBLENBQUE4QixFQUFBLEVBQUFuQyxjQUFBLGlDQUFBSyxNQUFBLENBQUE4QixFQUFBLDZEQUFBNUMsT0FBQSxDQUFBWCxJQUFBLGFBQUFvSCxHQUFBLFFBQUFDLE1BQUEsR0FBQXhHLE1BQUEsQ0FBQXVHLEdBQUEsR0FBQXBILElBQUEsZ0JBQUFpQixHQUFBLElBQUFvRyxNQUFBLEVBQUFySCxJQUFBLENBQUFrRyxJQUFBLENBQUFqRixHQUFBLFVBQUFqQixJQUFBLENBQUFzSCxPQUFBLGFBQUE5QixLQUFBLFdBQUF4RixJQUFBLENBQUE1QixNQUFBLFNBQUE2QyxHQUFBLEdBQUFqQixJQUFBLENBQUF1SCxHQUFBLFFBQUF0RyxHQUFBLElBQUFvRyxNQUFBLFNBQUE3QixJQUFBLENBQUF2RixLQUFBLEdBQUFnQixHQUFBLEVBQUF1RSxJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxXQUFBQSxJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxRQUFBN0UsT0FBQSxDQUFBMkMsTUFBQSxHQUFBQSxNQUFBLEVBQUFkLE9BQUEsQ0FBQS9CLFNBQUEsS0FBQUQsV0FBQSxFQUFBZ0MsT0FBQSxFQUFBNkQsS0FBQSxXQUFBQSxNQUFBbUIsYUFBQSxhQUFBQyxJQUFBLFdBQUFqQyxJQUFBLFdBQUFWLElBQUEsUUFBQUMsS0FBQSxHQUFBSyxTQUFBLE9BQUFGLElBQUEsWUFBQVAsUUFBQSxjQUFBakIsTUFBQSxnQkFBQWQsR0FBQSxHQUFBd0MsU0FBQSxPQUFBYSxVQUFBLENBQUF4QyxPQUFBLENBQUEwQyxhQUFBLElBQUFxQixhQUFBLFdBQUF2SSxJQUFBLGtCQUFBQSxJQUFBLENBQUF5SSxNQUFBLE9BQUE1RyxNQUFBLENBQUFnQyxJQUFBLE9BQUE3RCxJQUFBLE1BQUF1SCxLQUFBLEVBQUF2SCxJQUFBLENBQUEwSSxLQUFBLGNBQUExSSxJQUFBLElBQUFtRyxTQUFBLE1BQUF3QyxJQUFBLFdBQUFBLEtBQUEsU0FBQTFDLElBQUEsV0FBQTJDLFVBQUEsUUFBQTVCLFVBQUEsSUFBQUcsVUFBQSxrQkFBQXlCLFVBQUEsQ0FBQWhGLElBQUEsUUFBQWdGLFVBQUEsQ0FBQWpGLEdBQUEsY0FBQWtGLElBQUEsS0FBQTlDLGlCQUFBLFdBQUFBLGtCQUFBK0MsU0FBQSxhQUFBN0MsSUFBQSxRQUFBNkMsU0FBQSxNQUFBeEYsT0FBQSxrQkFBQXlGLE9BQUFDLEdBQUEsRUFBQUMsTUFBQSxXQUFBakUsTUFBQSxDQUFBcEIsSUFBQSxZQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxHQUFBbUYsU0FBQSxFQUFBeEYsT0FBQSxDQUFBaUQsSUFBQSxHQUFBeUMsR0FBQSxFQUFBQyxNQUFBLEtBQUEzRixPQUFBLENBQUFtQixNQUFBLFdBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQXdDLFNBQUEsS0FBQThDLE1BQUEsYUFBQTNKLENBQUEsUUFBQTBILFVBQUEsQ0FBQTdILE1BQUEsTUFBQUcsQ0FBQSxTQUFBQSxDQUFBLFFBQUFxSCxLQUFBLFFBQUFLLFVBQUEsQ0FBQTFILENBQUEsR0FBQTBGLE1BQUEsR0FBQTJCLEtBQUEsQ0FBQVEsVUFBQSxpQkFBQVIsS0FBQSxDQUFBQyxNQUFBLFNBQUFtQyxNQUFBLGFBQUFwQyxLQUFBLENBQUFDLE1BQUEsU0FBQTRCLElBQUEsUUFBQVUsUUFBQSxHQUFBckgsTUFBQSxDQUFBZ0MsSUFBQSxDQUFBOEMsS0FBQSxlQUFBd0MsVUFBQSxHQUFBdEgsTUFBQSxDQUFBZ0MsSUFBQSxDQUFBOEMsS0FBQSxxQkFBQXVDLFFBQUEsSUFBQUMsVUFBQSxhQUFBWCxJQUFBLEdBQUE3QixLQUFBLENBQUFFLFFBQUEsU0FBQWtDLE1BQUEsQ0FBQXBDLEtBQUEsQ0FBQUUsUUFBQSxnQkFBQTJCLElBQUEsR0FBQTdCLEtBQUEsQ0FBQUcsVUFBQSxTQUFBaUMsTUFBQSxDQUFBcEMsS0FBQSxDQUFBRyxVQUFBLGNBQUFvQyxRQUFBLGFBQUFWLElBQUEsR0FBQTdCLEtBQUEsQ0FBQUUsUUFBQSxTQUFBa0MsTUFBQSxDQUFBcEMsS0FBQSxDQUFBRSxRQUFBLHFCQUFBc0MsVUFBQSxZQUFBM0QsS0FBQSxxREFBQWdELElBQUEsR0FBQTdCLEtBQUEsQ0FBQUcsVUFBQSxTQUFBaUMsTUFBQSxDQUFBcEMsS0FBQSxDQUFBRyxVQUFBLFlBQUFkLE1BQUEsV0FBQUEsT0FBQXBDLElBQUEsRUFBQUQsR0FBQSxhQUFBckUsQ0FBQSxRQUFBMEgsVUFBQSxDQUFBN0gsTUFBQSxNQUFBRyxDQUFBLFNBQUFBLENBQUEsUUFBQXFILEtBQUEsUUFBQUssVUFBQSxDQUFBMUgsQ0FBQSxPQUFBcUgsS0FBQSxDQUFBQyxNQUFBLFNBQUE0QixJQUFBLElBQUEzRyxNQUFBLENBQUFnQyxJQUFBLENBQUE4QyxLQUFBLHdCQUFBNkIsSUFBQSxHQUFBN0IsS0FBQSxDQUFBRyxVQUFBLFFBQUFzQyxZQUFBLEdBQUF6QyxLQUFBLGFBQUF5QyxZQUFBLGlCQUFBeEYsSUFBQSxtQkFBQUEsSUFBQSxLQUFBd0YsWUFBQSxDQUFBeEMsTUFBQSxJQUFBakQsR0FBQSxJQUFBQSxHQUFBLElBQUF5RixZQUFBLENBQUF0QyxVQUFBLEtBQUFzQyxZQUFBLGNBQUFwRSxNQUFBLEdBQUFvRSxZQUFBLEdBQUFBLFlBQUEsQ0FBQWpDLFVBQUEsY0FBQW5DLE1BQUEsQ0FBQXBCLElBQUEsR0FBQUEsSUFBQSxFQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxHQUFBQSxHQUFBLEVBQUF5RixZQUFBLFNBQUEzRSxNQUFBLGdCQUFBOEIsSUFBQSxHQUFBNkMsWUFBQSxDQUFBdEMsVUFBQSxFQUFBaEQsZ0JBQUEsU0FBQXVGLFFBQUEsQ0FBQXJFLE1BQUEsTUFBQXFFLFFBQUEsV0FBQUEsU0FBQXJFLE1BQUEsRUFBQStCLFFBQUEsb0JBQUEvQixNQUFBLENBQUFwQixJQUFBLFFBQUFvQixNQUFBLENBQUFyQixHQUFBLHFCQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxtQkFBQW9CLE1BQUEsQ0FBQXBCLElBQUEsUUFBQTJDLElBQUEsR0FBQXZCLE1BQUEsQ0FBQXJCLEdBQUEsZ0JBQUFxQixNQUFBLENBQUFwQixJQUFBLFNBQUFpRixJQUFBLFFBQUFsRixHQUFBLEdBQUFxQixNQUFBLENBQUFyQixHQUFBLE9BQUFjLE1BQUEsa0JBQUE4QixJQUFBLHlCQUFBdkIsTUFBQSxDQUFBcEIsSUFBQSxJQUFBbUQsUUFBQSxVQUFBUixJQUFBLEdBQUFRLFFBQUEsR0FBQWpELGdCQUFBLEtBQUF3RixNQUFBLFdBQUFBLE9BQUF4QyxVQUFBLGFBQUF4SCxDQUFBLFFBQUEwSCxVQUFBLENBQUE3SCxNQUFBLE1BQUFHLENBQUEsU0FBQUEsQ0FBQSxRQUFBcUgsS0FBQSxRQUFBSyxVQUFBLENBQUExSCxDQUFBLE9BQUFxSCxLQUFBLENBQUFHLFVBQUEsS0FBQUEsVUFBQSxjQUFBdUMsUUFBQSxDQUFBMUMsS0FBQSxDQUFBUSxVQUFBLEVBQUFSLEtBQUEsQ0FBQUksUUFBQSxHQUFBRyxhQUFBLENBQUFQLEtBQUEsR0FBQTdDLGdCQUFBLHlCQUFBeUYsT0FBQTNDLE1BQUEsYUFBQXRILENBQUEsUUFBQTBILFVBQUEsQ0FBQTdILE1BQUEsTUFBQUcsQ0FBQSxTQUFBQSxDQUFBLFFBQUFxSCxLQUFBLFFBQUFLLFVBQUEsQ0FBQTFILENBQUEsT0FBQXFILEtBQUEsQ0FBQUMsTUFBQSxLQUFBQSxNQUFBLFFBQUE1QixNQUFBLEdBQUEyQixLQUFBLENBQUFRLFVBQUEsa0JBQUFuQyxNQUFBLENBQUFwQixJQUFBLFFBQUE0RixNQUFBLEdBQUF4RSxNQUFBLENBQUFyQixHQUFBLEVBQUF1RCxhQUFBLENBQUFQLEtBQUEsWUFBQTZDLE1BQUEsZ0JBQUFoRSxLQUFBLDhCQUFBaUUsYUFBQSxXQUFBQSxjQUFBcEMsUUFBQSxFQUFBZixVQUFBLEVBQUFFLE9BQUEsZ0JBQUFkLFFBQUEsS0FBQXBFLFFBQUEsRUFBQStDLE1BQUEsQ0FBQWdELFFBQUEsR0FBQWYsVUFBQSxFQUFBQSxVQUFBLEVBQUFFLE9BQUEsRUFBQUEsT0FBQSxvQkFBQS9CLE1BQUEsVUFBQWQsR0FBQSxHQUFBd0MsU0FBQSxHQUFBckMsZ0JBQUEsT0FBQXBDLE9BQUE7QUFBQSxTQUFBZ0ksbUJBQUFDLEdBQUEsRUFBQTdFLE9BQUEsRUFBQUMsTUFBQSxFQUFBNkUsS0FBQSxFQUFBQyxNQUFBLEVBQUE3SCxHQUFBLEVBQUEyQixHQUFBLGNBQUEwQyxJQUFBLEdBQUFzRCxHQUFBLENBQUEzSCxHQUFBLEVBQUEyQixHQUFBLE9BQUEzQyxLQUFBLEdBQUFxRixJQUFBLENBQUFyRixLQUFBLFdBQUFoRSxLQUFBLElBQUErSCxNQUFBLENBQUEvSCxLQUFBLGlCQUFBcUosSUFBQSxDQUFBSixJQUFBLElBQUFuQixPQUFBLENBQUE5RCxLQUFBLFlBQUFpSCxPQUFBLENBQUFuRCxPQUFBLENBQUE5RCxLQUFBLEVBQUFtRSxJQUFBLENBQUF5RSxLQUFBLEVBQUFDLE1BQUE7QUFBQSxTQUFBQyxrQkFBQXBHLEVBQUEsNkJBQUFWLElBQUEsU0FBQStHLElBQUEsR0FBQUMsU0FBQSxhQUFBL0IsT0FBQSxXQUFBbkQsT0FBQSxFQUFBQyxNQUFBLFFBQUE0RSxHQUFBLEdBQUFqRyxFQUFBLENBQUF1RyxLQUFBLENBQUFqSCxJQUFBLEVBQUErRyxJQUFBLFlBQUFILE1BQUE1SSxLQUFBLElBQUEwSSxrQkFBQSxDQUFBQyxHQUFBLEVBQUE3RSxPQUFBLEVBQUFDLE1BQUEsRUFBQTZFLEtBQUEsRUFBQUMsTUFBQSxVQUFBN0ksS0FBQSxjQUFBNkksT0FBQWpILEdBQUEsSUFBQThHLGtCQUFBLENBQUFDLEdBQUEsRUFBQTdFLE9BQUEsRUFBQUMsTUFBQSxFQUFBNkUsS0FBQSxFQUFBQyxNQUFBLFdBQUFqSCxHQUFBLEtBQUFnSCxLQUFBLENBQUF6RCxTQUFBO0FBQzJCO0FBQ1c7QUFDTztBQUNoQjtBQUU3QixJQUFJakksUUFBUSxHQUFHLEdBQUc7QUFDbEIsSUFBSWEsU0FBUyxHQUFHLEtBQUs7O0FBRXJCO0FBQ0EsSUFBTXNMLGFBQWEsR0FBR3BOLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0FBQy9EbU4sYUFBYSxDQUFDckosS0FBSyxHQUFHLGNBQWM7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBLElBQU1zSixRQUFRLEdBQUdyTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFDdkRvTixRQUFRLENBQUNDLGdCQUFnQixDQUFDLE9BQU87RUFBQSxJQUFBQyxJQUFBLEdBQUFWLGlCQUFBLGVBQUFySSxtQkFBQSxHQUFBbUcsSUFBQSxDQUFFLFNBQUE2QyxRQUFPQyxLQUFLO0lBQUEsT0FBQWpKLG1CQUFBLEdBQUFvQixJQUFBLFVBQUE4SCxTQUFBQyxRQUFBO01BQUEsa0JBQUFBLFFBQUEsQ0FBQXBDLElBQUEsR0FBQW9DLFFBQUEsQ0FBQXJFLElBQUE7UUFBQTtVQUM3QyxJQUFJOEQsYUFBYSxDQUFDUSxRQUFRLENBQUNDLFlBQVksS0FBSyxLQUFLLEVBQUU7WUFDakRuTixXQUFXLENBQUMwTSxhQUFhLENBQUNySixLQUFLLEVBQUU7Y0FBRWpDLFNBQVMsRUFBVEEsU0FBUztjQUFFYixRQUFRLEVBQVJBO1lBQVMsQ0FBQyxDQUFDO1VBQzNELENBQUMsTUFBTWdNLHlEQUFhLENBQUMsMEJBQTBCLENBQUM7VUFFaERRLEtBQUssQ0FBQ0ssY0FBYyxFQUFFO1FBQUM7UUFBQTtVQUFBLE9BQUFILFFBQUEsQ0FBQWpDLElBQUE7TUFBQTtJQUFBLEdBQUE4QixPQUFBO0VBQUEsQ0FDeEI7RUFBQSxpQkFBQU8sRUFBQTtJQUFBLE9BQUFSLElBQUEsQ0FBQVAsS0FBQSxPQUFBRCxTQUFBO0VBQUE7QUFBQSxJQUFDOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTWlCLGFBQWEsR0FBR2hPLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGtCQUFrQixDQUFDO0FBQ2hFK04sYUFBYSxDQUFDVixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVMLDBEQUFjLENBQUM7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSWdCLGFBQWE7QUFFakIsU0FBU3ZOLFdBQVdBLENBQUN3TixLQUFLLEVBQUV0TixLQUFLLEVBQUU7RUFDakNxTSx1REFBVyxFQUFFO0VBQ2IsSUFBTWtCLElBQUksR0FBR2pCLHVEQUFVLENBQUNnQixLQUFLLENBQUM7RUFDOUJDLElBQUksQ0FDRGpHLElBQUksQ0FBQyxVQUFDaUcsSUFBSSxFQUFLO0lBQ2RGLGFBQWEsR0FBR0UsSUFBSTtJQUNwQmxCLDJEQUFlLENBQUNrQixJQUFJLEVBQUV2TixLQUFLLENBQUM7SUFDNUJxTSwwREFBYyxFQUFFO0VBQ2xCLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQ2tCLElBQUksRUFBSztJQUNmRixhQUFhLEdBQUcvRSxTQUFTO0lBQ3pCK0QseURBQWEsQ0FBQ2tCLElBQUksQ0FBQzlOLE9BQU8sQ0FBQztFQUM3QixDQUFDLENBQUM7QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTStOLGFBQWEsR0FBR3BPLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLCtCQUErQixDQUFDO0FBQzdFbU8sYUFBYSxDQUFDZCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0csS0FBSyxFQUFLO0VBQ2pELElBQU1ZLFdBQVcsR0FBR3JPLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0VBRWpFLElBQUlnQixRQUFRLEtBQUssR0FBRyxFQUFFO0lBQ3BCQSxRQUFRLEdBQUcsR0FBRztJQUNkLElBQU1XLFdBQVcsR0FBR3FNLGFBQWEsQ0FBQ3RNLE9BQU8sQ0FBQzJNLE1BQU07SUFDaERELFdBQVcsQ0FBQzdOLFdBQVcsTUFBQWdDLE1BQUEsQ0FBTStMLFFBQVEsQ0FBQzNNLFdBQVcsQ0FBQyxVQUFJO0VBQ3hELENBQUMsTUFBTTtJQUNMWCxRQUFRLEdBQUcsR0FBRztJQUNkLElBQU1XLFlBQVcsR0FBR3FNLGFBQWEsQ0FBQ3RNLE9BQU8sQ0FBQzZNLE1BQU07SUFDaERILFdBQVcsQ0FBQzdOLFdBQVcsTUFBQWdDLE1BQUEsQ0FBTStMLFFBQVEsQ0FBQzNNLFlBQVcsQ0FBQyxNQUFHO0VBQ3ZEO0VBRUEsSUFBTVosUUFBUSxHQUFHaEIsUUFBUSxDQUFDeU8sZ0JBQWdCLENBQUMsZUFBZSxDQUFDO0VBQzNELEtBQUssSUFBSXBNLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3JCLFFBQVEsQ0FBQ2tCLE1BQU0sRUFBRSxFQUFFRyxDQUFDLEVBQUU7SUFDeEMsSUFBTXFNLElBQUksR0FBRzFOLFFBQVEsQ0FBQ3FCLENBQUMsQ0FBQyxDQUFDcEMsYUFBYSxDQUFDLGNBQWMsQ0FBQztJQUN0RCxJQUFNMkIsYUFBVyxHQUNmcU0sYUFBYSxDQUFDak4sUUFBUSxDQUFDc0IsV0FBVyxDQUFDRCxDQUFDLENBQUMsQ0FBQ0UsR0FBRyxDQUFDLFVBQVUsR0FBR3RCLFFBQVEsQ0FBQztJQUNsRSxJQUFJQSxRQUFRLEtBQUssR0FBRyxFQUFFeU4sSUFBSSxDQUFDbE8sV0FBVyxNQUFBZ0MsTUFBQSxDQUFNK0wsUUFBUSxDQUFDM00sYUFBVyxDQUFDLFVBQUksQ0FBQyxLQUNqRThNLElBQUksQ0FBQ2xPLFdBQVcsTUFBQWdDLE1BQUEsQ0FBTStMLFFBQVEsQ0FBQzNNLGFBQVcsQ0FBQyxNQUFHO0VBQ3JEO0VBRUE2TCxLQUFLLENBQUNrQixlQUFlLEVBQUU7QUFDekIsQ0FBQyxDQUFDOztBQUVGO0FBQ0EsSUFBTUMsY0FBYyxHQUFHNU8sUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0NBQWdDLENBQUM7QUFDL0UyTyxjQUFjLENBQUN0QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0csS0FBSyxFQUFLO0VBQ2xELElBQU1oSyxTQUFTLEdBQUd6RCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztFQUM3RCxJQUFNNE8sSUFBSSxHQUFHN08sUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0VBRW5ELElBQUk2QixTQUFTLEtBQUssS0FBSyxFQUFFQSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQ3RDQSxTQUFTLEdBQUcsS0FBSztFQUV0QjJCLFNBQVMsQ0FBQ2pELFdBQVcsR0FDbkJ5TixhQUFhLENBQUN0TSxPQUFPLENBQUMsT0FBTyxHQUFHRyxTQUFTLENBQUMsR0FBR0EsU0FBUztFQUN4RCtNLElBQUksQ0FBQ3JPLFdBQVcsR0FBR3lOLGFBQWEsQ0FBQ3RNLE9BQU8sQ0FBQyxPQUFPLEdBQUdHLFNBQVMsQ0FBQyxHQUFHQSxTQUFTO0VBRXpFMkwsS0FBSyxDQUFDa0IsZUFBZSxFQUFFO0FBQ3pCLENBQUMsQ0FBQztBQUVGak8sV0FBVyxDQUFDME0sYUFBYSxDQUFDckosS0FBSyxFQUFFO0VBQUVqQyxTQUFTLEVBQVRBLFNBQVM7RUFBRWIsUUFBUSxFQUFSQTtBQUFTLENBQUMsQ0FBQztBQUN6RGtNLGlFQUFxQixFQUFFOzs7Ozs7Ozs7Ozs7OztBQ3RHVjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzRCLE1BQU1BLENBQUNDLFVBQVUsRUFBRTtFQUMxQkEsVUFBVSxHQUFHQyxpQkFBaUIsQ0FBQ0QsVUFBVSxDQUFDO0VBRTFDLElBQU03QixZQUFZLEdBQUduTixRQUFRLENBQUNvQixhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ2xEK0wsWUFBWSxDQUFDOUwsU0FBUyxHQUFHLGVBQWU7RUFDeEM4TCxZQUFZLENBQUM3TSxLQUFLLENBQUM0TyxPQUFPLEdBQUdDLFNBQVMsQ0FDcENILFVBQVUsQ0FBQ0ksVUFBVSxDQUFDakMsWUFBWSxFQUNsQzZCLFVBQVUsQ0FBQ0ssSUFBSSxDQUNoQjtFQUVELElBQU1DLFFBQVEsR0FBR3RQLFFBQVEsQ0FBQ29CLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDOUNrTyxRQUFRLENBQUNqTyxTQUFTLEdBQUcsd0JBQXdCO0VBQzdDaU8sUUFBUSxDQUFDaFAsS0FBSyxDQUFDNE8sT0FBTyxHQUFHSyxXQUFXLENBQ2xDUCxVQUFVLENBQUNJLFVBQVUsQ0FBQ0UsUUFBUSxFQUM5Qk4sVUFBVSxDQUFDSyxJQUFJLENBQ2hCO0VBQ0RDLFFBQVEsQ0FBQ2hDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDRyxLQUFLLEVBQUs7SUFDNUMrQixPQUFPLENBQUNyQyxZQUFZLEVBQUVNLEtBQUssQ0FBQ2dDLE1BQU0sRUFBRVQsVUFBVSxDQUFDO0VBQ2pELENBQUMsQ0FBQztFQUVGN0IsWUFBWSxDQUFDck0sV0FBVyxDQUFDd08sUUFBUSxDQUFDO0VBRWxDLE9BQU9uQyxZQUFZO0FBQ3JCOztBQUVBO0FBQ0EsU0FBUzJCLFFBQVFBLENBQUNFLFVBQVUsRUFBRTdNLEdBQUcsRUFBRTtFQUNqQyxJQUFJdU4sUUFBUTtFQUNaVixVQUFVLEdBQUdDLGlCQUFpQixDQUFDRCxVQUFVLENBQUM7RUFFMUMsSUFBSTdNLEdBQUcsS0FBSytHLFNBQVMsRUFBRTtJQUNyQndHLFFBQVEsR0FBRzFQLFFBQVEsQ0FBQ3lPLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO0VBQ3hELENBQUMsTUFBTTtJQUNMaUIsUUFBUSxHQUFHdk4sR0FBRyxDQUFDc00sZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7RUFDbkQ7RUFBQyxJQUFBa0IsS0FBQSxZQUFBQSxNQUFBdE4sQ0FBQSxFQUV5QztJQUN4Q3FOLFFBQVEsQ0FBQ3JOLENBQUMsQ0FBQyxDQUFDL0IsS0FBSyxDQUFDNE8sT0FBTyxHQUFHQyxTQUFTLENBQ25DSCxVQUFVLENBQUNJLFVBQVUsQ0FBQ2pDLFlBQVksRUFDbEM2QixVQUFVLENBQUNLLElBQUksQ0FDaEI7SUFFRCxJQUFNQyxRQUFRLEdBQUdJLFFBQVEsQ0FBQ3JOLENBQUMsQ0FBQyxDQUFDcEMsYUFBYSxDQUFDLHlCQUF5QixDQUFDO0lBQ3JFcVAsUUFBUSxDQUFDaFAsS0FBSyxDQUFDNE8sT0FBTyxHQUFHSyxXQUFXLENBQ2xDUCxVQUFVLENBQUNJLFVBQVUsQ0FBQ0UsUUFBUSxFQUM5Qk4sVUFBVSxDQUFDSyxJQUFJLENBQ2hCO0lBQ0RDLFFBQVEsQ0FBQ2hDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDRyxLQUFLLEVBQUs7TUFDNUMrQixPQUFPLENBQUNFLFFBQVEsQ0FBQ3JOLENBQUMsQ0FBQyxFQUFFb0wsS0FBSyxDQUFDZ0MsTUFBTSxFQUFFVCxVQUFVLENBQUM7SUFDaEQsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQWRELEtBQUssSUFBSTNNLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3FOLFFBQVEsQ0FBQ3hOLE1BQU0sRUFBRSxFQUFFRyxDQUFDO0lBQUFzTixLQUFBLENBQUF0TixDQUFBO0VBQUE7QUFlMUM7O0FBRUE7QUFDQSxTQUFTbU4sT0FBT0EsQ0FBQ3JDLFlBQVksRUFBRW1DLFFBQVEsRUFBRU4sVUFBVSxFQUFFO0VBQ25ELElBQU1ZLE1BQU0sR0FBR04sUUFBUSxDQUFDaFAsS0FBSyxDQUFDdVAsVUFBVTtFQUV4QyxJQUFJRCxNQUFNLEtBQUssRUFBRSxJQUFJQSxNQUFNLFFBQUFwTixNQUFBLENBQVFzTixJQUFJLENBQUMsQ0FBQyxHQUFHZCxVQUFVLENBQUNLLElBQUksQ0FBQyxPQUFJLEVBQUU7SUFDaEVDLFFBQVEsQ0FBQ2hQLEtBQUssQ0FBQ3VQLFVBQVUsTUFBQXJOLE1BQUEsQ0FBTXNOLElBQUksQ0FBQyxJQUFJLEdBQUdkLFVBQVUsQ0FBQ0ssSUFBSSxDQUFDLE9BQUk7SUFDL0RsQyxZQUFZLENBQUM3TSxLQUFLLENBQUM4TyxVQUFVLEdBQUdKLFVBQVUsQ0FBQ0ksVUFBVSxDQUFDVyxNQUFNO0VBQzlELENBQUMsTUFBTTtJQUNMVCxRQUFRLENBQUNoUCxLQUFLLENBQUN1UCxVQUFVLE1BQUFyTixNQUFBLENBQU1zTixJQUFJLENBQUMsQ0FBQyxHQUFHZCxVQUFVLENBQUNLLElBQUksQ0FBQyxPQUFJO0lBQzVEbEMsWUFBWSxDQUFDN00sS0FBSyxDQUFDOE8sVUFBVSxHQUFHSixVQUFVLENBQUNJLFVBQVUsQ0FBQ2pDLFlBQVk7RUFDcEU7QUFDRjs7QUFFQTtBQUNBLFNBQVM4QixpQkFBaUJBLENBQUNELFVBQVUsRUFBRTtFQUNyQyxJQUFNZ0IsaUJBQWlCLEdBQUc7SUFDeEJYLElBQUksRUFBRSxHQUFHO0lBQ1RELFVBQVUsRUFBRTtNQUNWVyxNQUFNLEVBQUUsTUFBTTtNQUNkVCxRQUFRLEVBQUUsTUFBTTtNQUNoQm5DLFlBQVksRUFBRTtJQUNoQjtFQUNGLENBQUM7RUFFRHhJLE1BQU0sQ0FBQ3NMLE1BQU0sQ0FBQ0QsaUJBQWlCLENBQUM7RUFFaEMsSUFBSSxDQUFDaEIsVUFBVSxFQUFFO0lBQ2ZBLFVBQVUsR0FBR2tCLGVBQWUsQ0FBQ0YsaUJBQWlCLENBQUM7RUFDakQsQ0FBQyxNQUFNO0lBQ0wsSUFBSWhCLFVBQVUsQ0FBQ0ssSUFBSSxFQUFFTCxVQUFVLENBQUNLLElBQUksR0FBR1MsSUFBSSxDQUFDZCxVQUFVLENBQUNLLElBQUksQ0FBQztJQUU1RCxJQUFJLENBQUNMLFVBQVUsQ0FBQ0ksVUFBVSxFQUFFO01BQzFCSixVQUFVLENBQUNJLFVBQVUsR0FBR1ksaUJBQWlCLENBQUNaLFVBQVU7SUFDdEQsQ0FBQyxNQUFNO01BQ0x6SyxNQUFNLENBQUNpRyxjQUFjLENBQ25Cb0UsVUFBVSxDQUFDSSxVQUFVLEVBQ3JCWSxpQkFBaUIsQ0FBQ1osVUFBVSxDQUM3QjtJQUNIO0VBQ0Y7RUFFQXpLLE1BQU0sQ0FBQ2lHLGNBQWMsQ0FBQ29FLFVBQVUsRUFBRWdCLGlCQUFpQixDQUFDO0VBRXBELE9BQU9oQixVQUFVO0FBQ25COztBQUVBO0FBQ0EsU0FBU2MsSUFBSUEsQ0FBQy9MLEtBQUssRUFBRTtFQUNuQixJQUFJaUUsTUFBTSxNQUFBeEYsTUFBQSxDQUFNdUIsS0FBSyxDQUFDb00sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFFO0VBRWxDLElBQUluSSxNQUFNLENBQUNBLE1BQU0sQ0FBQzlGLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsT0FBT3FNLFFBQVEsQ0FBQ3hLLEtBQUssQ0FBQztFQUU3RCxPQUFPaUUsTUFBTTtBQUNmOztBQUVBO0FBQ0EsU0FBU21ILFNBQVNBLENBQUNpQixFQUFFLEVBQUVmLElBQUksRUFBRTtFQUMzQiwwQkFBQTdNLE1BQUEsQ0FDZ0I0TixFQUFFLDRCQUFBNU4sTUFBQSxDQUNDLEVBQUUsR0FBRzZNLElBQUksdUJBQUE3TSxNQUFBLENBQ2hCLEVBQUUsR0FBRzZNLElBQUksc0JBQUE3TSxNQUFBLENBQ1YsRUFBRSxHQUFHNk0sSUFBSSx3R0FBQTdNLE1BQUEsQ0FJUixDQUFDLEdBQUc2TSxJQUFJO0FBR3RCOztBQUVBO0FBQ0EsU0FBU0UsV0FBV0EsQ0FBQ2EsRUFBRSxFQUFFZixJQUFJLEVBQUU7RUFDN0IsNkJBQUE3TSxNQUFBLENBQ21CLEVBQUUsR0FBRzZNLElBQUksMkJBQUE3TSxNQUFBLENBQ1o0TixFQUFFLHFCQUFBNU4sTUFBQSxDQUNOc04sSUFBSSxDQUFDLENBQUMsR0FBR1QsSUFBSSxDQUFDLFNBQUE3TSxNQUFBLENBQU1zTixJQUFJLENBQUMsQ0FBQyxHQUFHVCxJQUFJLENBQUMsdUJBQUE3TSxNQUFBLENBQ2xDLEVBQUUsR0FBRzZNLElBQUksc0JBQUE3TSxNQUFBLENBQ1YsRUFBRSxHQUFHNk0sSUFBSTtBQUV0QjtBQUVBLGlFQUFlO0VBQUVQLFFBQVEsRUFBUkEsUUFBUTtFQUFFQyxNQUFNLEVBQU5BO0FBQU8sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUM5SnRCOztBQUFBLFNBQUE3SyxRQUFBQyxHQUFBLHNDQUFBRCxPQUFBLHdCQUFBRSxNQUFBLHVCQUFBQSxNQUFBLENBQUFDLFFBQUEsYUFBQUYsR0FBQSxrQkFBQUEsR0FBQSxnQkFBQUEsR0FBQSxXQUFBQSxHQUFBLHlCQUFBQyxNQUFBLElBQUFELEdBQUEsQ0FBQUcsV0FBQSxLQUFBRixNQUFBLElBQUFELEdBQUEsS0FBQUMsTUFBQSxDQUFBRyxTQUFBLHFCQUFBSixHQUFBLEtBQUFELE9BQUEsQ0FBQUMsR0FBQTtBQUFBLFNBQUFLLG9CQUFBLGtCQUNiLHFKQUFBQSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxPQUFBLFNBQUFBLE9BQUEsT0FBQUMsRUFBQSxHQUFBQyxNQUFBLENBQUFKLFNBQUEsRUFBQUssTUFBQSxHQUFBRixFQUFBLENBQUFHLGNBQUEsRUFBQUMsY0FBQSxHQUFBSCxNQUFBLENBQUFHLGNBQUEsY0FBQVgsR0FBQSxFQUFBWSxHQUFBLEVBQUFDLElBQUEsSUFBQWIsR0FBQSxDQUFBWSxHQUFBLElBQUFDLElBQUEsQ0FBQWpCLEtBQUEsS0FBQWtCLE9BQUEsd0JBQUFiLE1BQUEsR0FBQUEsTUFBQSxPQUFBYyxjQUFBLEdBQUFELE9BQUEsQ0FBQVosUUFBQSxrQkFBQWMsbUJBQUEsR0FBQUYsT0FBQSxDQUFBRyxhQUFBLHVCQUFBQyxpQkFBQSxHQUFBSixPQUFBLENBQUFLLFdBQUEsOEJBQUFDLE9BQUFwQixHQUFBLEVBQUFZLEdBQUEsRUFBQWhCLEtBQUEsV0FBQVksTUFBQSxDQUFBRyxjQUFBLENBQUFYLEdBQUEsRUFBQVksR0FBQSxJQUFBaEIsS0FBQSxFQUFBQSxLQUFBLEVBQUF5QixVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBdkIsR0FBQSxDQUFBWSxHQUFBLFdBQUFRLE1BQUEsbUJBQUFJLEdBQUEsSUFBQUosTUFBQSxZQUFBQSxPQUFBcEIsR0FBQSxFQUFBWSxHQUFBLEVBQUFoQixLQUFBLFdBQUFJLEdBQUEsQ0FBQVksR0FBQSxJQUFBaEIsS0FBQSxnQkFBQTZCLEtBQUFDLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsUUFBQUMsY0FBQSxHQUFBSCxPQUFBLElBQUFBLE9BQUEsQ0FBQXZCLFNBQUEsWUFBQTJCLFNBQUEsR0FBQUosT0FBQSxHQUFBSSxTQUFBLEVBQUFDLFNBQUEsR0FBQXhCLE1BQUEsQ0FBQXlCLE1BQUEsQ0FBQUgsY0FBQSxDQUFBMUIsU0FBQSxHQUFBOEIsT0FBQSxPQUFBQyxPQUFBLENBQUFOLFdBQUEsZ0JBQUFsQixjQUFBLENBQUFxQixTQUFBLGVBQUFwQyxLQUFBLEVBQUF3QyxnQkFBQSxDQUFBVixPQUFBLEVBQUFFLElBQUEsRUFBQU0sT0FBQSxNQUFBRixTQUFBLGFBQUFLLFNBQUFDLEVBQUEsRUFBQXRDLEdBQUEsRUFBQXVDLEdBQUEsbUJBQUFDLElBQUEsWUFBQUQsR0FBQSxFQUFBRCxFQUFBLENBQUFHLElBQUEsQ0FBQXpDLEdBQUEsRUFBQXVDLEdBQUEsY0FBQWYsR0FBQSxhQUFBZ0IsSUFBQSxXQUFBRCxHQUFBLEVBQUFmLEdBQUEsUUFBQWxCLE9BQUEsQ0FBQW1CLElBQUEsR0FBQUEsSUFBQSxNQUFBaUIsZ0JBQUEsZ0JBQUFYLFVBQUEsY0FBQVksa0JBQUEsY0FBQUMsMkJBQUEsU0FBQUMsaUJBQUEsT0FBQXpCLE1BQUEsQ0FBQXlCLGlCQUFBLEVBQUE5QixjQUFBLHFDQUFBK0IsUUFBQSxHQUFBdEMsTUFBQSxDQUFBdUMsY0FBQSxFQUFBQyx1QkFBQSxHQUFBRixRQUFBLElBQUFBLFFBQUEsQ0FBQUEsUUFBQSxDQUFBRyxNQUFBLFFBQUFELHVCQUFBLElBQUFBLHVCQUFBLEtBQUF6QyxFQUFBLElBQUFFLE1BQUEsQ0FBQWdDLElBQUEsQ0FBQU8sdUJBQUEsRUFBQWpDLGNBQUEsTUFBQThCLGlCQUFBLEdBQUFHLHVCQUFBLE9BQUFFLEVBQUEsR0FBQU4sMEJBQUEsQ0FBQXhDLFNBQUEsR0FBQTJCLFNBQUEsQ0FBQTNCLFNBQUEsR0FBQUksTUFBQSxDQUFBeUIsTUFBQSxDQUFBWSxpQkFBQSxZQUFBTSxzQkFBQS9DLFNBQUEsZ0NBQUFnRCxPQUFBLFdBQUFDLE1BQUEsSUFBQWpDLE1BQUEsQ0FBQWhCLFNBQUEsRUFBQWlELE1BQUEsWUFBQWQsR0FBQSxnQkFBQWUsT0FBQSxDQUFBRCxNQUFBLEVBQUFkLEdBQUEsc0JBQUFnQixjQUFBdkIsU0FBQSxFQUFBd0IsV0FBQSxhQUFBQyxPQUFBSixNQUFBLEVBQUFkLEdBQUEsRUFBQW1CLE9BQUEsRUFBQUMsTUFBQSxRQUFBQyxNQUFBLEdBQUF2QixRQUFBLENBQUFMLFNBQUEsQ0FBQXFCLE1BQUEsR0FBQXJCLFNBQUEsRUFBQU8sR0FBQSxtQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsUUFBQXFCLE1BQUEsR0FBQUQsTUFBQSxDQUFBckIsR0FBQSxFQUFBM0MsS0FBQSxHQUFBaUUsTUFBQSxDQUFBakUsS0FBQSxTQUFBQSxLQUFBLGdCQUFBRyxPQUFBLENBQUFILEtBQUEsS0FBQWEsTUFBQSxDQUFBZ0MsSUFBQSxDQUFBN0MsS0FBQSxlQUFBNEQsV0FBQSxDQUFBRSxPQUFBLENBQUE5RCxLQUFBLENBQUFrRSxPQUFBLEVBQUFDLElBQUEsV0FBQW5FLEtBQUEsSUFBQTZELE1BQUEsU0FBQTdELEtBQUEsRUFBQThELE9BQUEsRUFBQUMsTUFBQSxnQkFBQW5DLEdBQUEsSUFBQWlDLE1BQUEsVUFBQWpDLEdBQUEsRUFBQWtDLE9BQUEsRUFBQUMsTUFBQSxRQUFBSCxXQUFBLENBQUFFLE9BQUEsQ0FBQTlELEtBQUEsRUFBQW1FLElBQUEsV0FBQUMsU0FBQSxJQUFBSCxNQUFBLENBQUFqRSxLQUFBLEdBQUFvRSxTQUFBLEVBQUFOLE9BQUEsQ0FBQUcsTUFBQSxnQkFBQWpJLEtBQUEsV0FBQTZILE1BQUEsVUFBQTdILEtBQUEsRUFBQThILE9BQUEsRUFBQUMsTUFBQSxTQUFBQSxNQUFBLENBQUFDLE1BQUEsQ0FBQXJCLEdBQUEsU0FBQTBCLGVBQUEsRUFBQXRELGNBQUEsb0JBQUFmLEtBQUEsV0FBQUEsTUFBQXlELE1BQUEsRUFBQWQsR0FBQSxhQUFBMkIsMkJBQUEsZUFBQVYsV0FBQSxXQUFBRSxPQUFBLEVBQUFDLE1BQUEsSUFBQUYsTUFBQSxDQUFBSixNQUFBLEVBQUFkLEdBQUEsRUFBQW1CLE9BQUEsRUFBQUMsTUFBQSxnQkFBQU0sZUFBQSxHQUFBQSxlQUFBLEdBQUFBLGVBQUEsQ0FBQUYsSUFBQSxDQUFBRywwQkFBQSxFQUFBQSwwQkFBQSxJQUFBQSwwQkFBQSxxQkFBQTlCLGlCQUFBVixPQUFBLEVBQUFFLElBQUEsRUFBQU0sT0FBQSxRQUFBaUMsS0FBQSxzQ0FBQWQsTUFBQSxFQUFBZCxHQUFBLHdCQUFBNEIsS0FBQSxZQUFBQyxLQUFBLHNEQUFBRCxLQUFBLG9CQUFBZCxNQUFBLFFBQUFkLEdBQUEsU0FBQThCLFVBQUEsV0FBQW5DLE9BQUEsQ0FBQW1CLE1BQUEsR0FBQUEsTUFBQSxFQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUFBLEdBQUEsVUFBQStCLFFBQUEsR0FBQXBDLE9BQUEsQ0FBQW9DLFFBQUEsTUFBQUEsUUFBQSxRQUFBQyxjQUFBLEdBQUFDLG1CQUFBLENBQUFGLFFBQUEsRUFBQXBDLE9BQUEsT0FBQXFDLGNBQUEsUUFBQUEsY0FBQSxLQUFBN0IsZ0JBQUEsbUJBQUE2QixjQUFBLHFCQUFBckMsT0FBQSxDQUFBbUIsTUFBQSxFQUFBbkIsT0FBQSxDQUFBdUMsSUFBQSxHQUFBdkMsT0FBQSxDQUFBd0MsS0FBQSxHQUFBeEMsT0FBQSxDQUFBSyxHQUFBLHNCQUFBTCxPQUFBLENBQUFtQixNQUFBLDZCQUFBYyxLQUFBLFFBQUFBLEtBQUEsZ0JBQUFqQyxPQUFBLENBQUFLLEdBQUEsRUFBQUwsT0FBQSxDQUFBeUMsaUJBQUEsQ0FBQXpDLE9BQUEsQ0FBQUssR0FBQSx1QkFBQUwsT0FBQSxDQUFBbUIsTUFBQSxJQUFBbkIsT0FBQSxDQUFBMEMsTUFBQSxXQUFBMUMsT0FBQSxDQUFBSyxHQUFBLEdBQUE0QixLQUFBLG9CQUFBUCxNQUFBLEdBQUF2QixRQUFBLENBQUFYLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLG9CQUFBMEIsTUFBQSxDQUFBcEIsSUFBQSxRQUFBMkIsS0FBQSxHQUFBakMsT0FBQSxDQUFBMkMsSUFBQSxtQ0FBQWpCLE1BQUEsQ0FBQXJCLEdBQUEsS0FBQUcsZ0JBQUEscUJBQUE5QyxLQUFBLEVBQUFnRSxNQUFBLENBQUFyQixHQUFBLEVBQUFzQyxJQUFBLEVBQUEzQyxPQUFBLENBQUEyQyxJQUFBLGtCQUFBakIsTUFBQSxDQUFBcEIsSUFBQSxLQUFBMkIsS0FBQSxnQkFBQWpDLE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBcUIsTUFBQSxDQUFBckIsR0FBQSxtQkFBQWlDLG9CQUFBRixRQUFBLEVBQUFwQyxPQUFBLFFBQUE0QyxVQUFBLEdBQUE1QyxPQUFBLENBQUFtQixNQUFBLEVBQUFBLE1BQUEsR0FBQWlCLFFBQUEsQ0FBQXBFLFFBQUEsQ0FBQTRFLFVBQUEsT0FBQUMsU0FBQSxLQUFBMUIsTUFBQSxTQUFBbkIsT0FBQSxDQUFBb0MsUUFBQSxxQkFBQVEsVUFBQSxJQUFBUixRQUFBLENBQUFwRSxRQUFBLGVBQUFnQyxPQUFBLENBQUFtQixNQUFBLGFBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQXdDLFNBQUEsRUFBQVAsbUJBQUEsQ0FBQUYsUUFBQSxFQUFBcEMsT0FBQSxlQUFBQSxPQUFBLENBQUFtQixNQUFBLGtCQUFBeUIsVUFBQSxLQUFBNUMsT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLE9BQUF5QyxTQUFBLHVDQUFBRixVQUFBLGlCQUFBcEMsZ0JBQUEsTUFBQWtCLE1BQUEsR0FBQXZCLFFBQUEsQ0FBQWdCLE1BQUEsRUFBQWlCLFFBQUEsQ0FBQXBFLFFBQUEsRUFBQWdDLE9BQUEsQ0FBQUssR0FBQSxtQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsU0FBQU4sT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUFxQixNQUFBLENBQUFyQixHQUFBLEVBQUFMLE9BQUEsQ0FBQW9DLFFBQUEsU0FBQTVCLGdCQUFBLE1BQUF1QyxJQUFBLEdBQUFyQixNQUFBLENBQUFyQixHQUFBLFNBQUEwQyxJQUFBLEdBQUFBLElBQUEsQ0FBQUosSUFBQSxJQUFBM0MsT0FBQSxDQUFBb0MsUUFBQSxDQUFBWSxVQUFBLElBQUFELElBQUEsQ0FBQXJGLEtBQUEsRUFBQXNDLE9BQUEsQ0FBQWlELElBQUEsR0FBQWIsUUFBQSxDQUFBYyxPQUFBLGVBQUFsRCxPQUFBLENBQUFtQixNQUFBLEtBQUFuQixPQUFBLENBQUFtQixNQUFBLFdBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQXdDLFNBQUEsR0FBQTdDLE9BQUEsQ0FBQW9DLFFBQUEsU0FBQTVCLGdCQUFBLElBQUF1QyxJQUFBLElBQUEvQyxPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsT0FBQXlDLFNBQUEsc0NBQUE5QyxPQUFBLENBQUFvQyxRQUFBLFNBQUE1QixnQkFBQSxjQUFBMkMsYUFBQUMsSUFBQSxRQUFBQyxLQUFBLEtBQUFDLE1BQUEsRUFBQUYsSUFBQSxZQUFBQSxJQUFBLEtBQUFDLEtBQUEsQ0FBQUUsUUFBQSxHQUFBSCxJQUFBLFdBQUFBLElBQUEsS0FBQUMsS0FBQSxDQUFBRyxVQUFBLEdBQUFKLElBQUEsS0FBQUMsS0FBQSxDQUFBSSxRQUFBLEdBQUFMLElBQUEsV0FBQU0sVUFBQSxDQUFBQyxJQUFBLENBQUFOLEtBQUEsY0FBQU8sY0FBQVAsS0FBQSxRQUFBM0IsTUFBQSxHQUFBMkIsS0FBQSxDQUFBUSxVQUFBLFFBQUFuQyxNQUFBLENBQUFwQixJQUFBLG9CQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxFQUFBZ0QsS0FBQSxDQUFBUSxVQUFBLEdBQUFuQyxNQUFBLGFBQUF6QixRQUFBTixXQUFBLFNBQUErRCxVQUFBLE1BQUFKLE1BQUEsYUFBQTNELFdBQUEsQ0FBQXVCLE9BQUEsQ0FBQWlDLFlBQUEsY0FBQVcsS0FBQSxpQkFBQS9DLE9BQUFnRCxRQUFBLFFBQUFBLFFBQUEsUUFBQUMsY0FBQSxHQUFBRCxRQUFBLENBQUFsRixjQUFBLE9BQUFtRixjQUFBLFNBQUFBLGNBQUEsQ0FBQXpELElBQUEsQ0FBQXdELFFBQUEsNEJBQUFBLFFBQUEsQ0FBQWQsSUFBQSxTQUFBYyxRQUFBLE9BQUFFLEtBQUEsQ0FBQUYsUUFBQSxDQUFBbEksTUFBQSxTQUFBRyxDQUFBLE9BQUFpSCxJQUFBLFlBQUFBLEtBQUEsYUFBQWpILENBQUEsR0FBQStILFFBQUEsQ0FBQWxJLE1BQUEsT0FBQTBDLE1BQUEsQ0FBQWdDLElBQUEsQ0FBQXdELFFBQUEsRUFBQS9ILENBQUEsVUFBQWlILElBQUEsQ0FBQXZGLEtBQUEsR0FBQXFHLFFBQUEsQ0FBQS9ILENBQUEsR0FBQWlILElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFNBQUFBLElBQUEsQ0FBQXZGLEtBQUEsR0FBQW1GLFNBQUEsRUFBQUksSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsWUFBQUEsSUFBQSxDQUFBQSxJQUFBLEdBQUFBLElBQUEsZUFBQUEsSUFBQSxFQUFBZCxVQUFBLGVBQUFBLFdBQUEsYUFBQXpFLEtBQUEsRUFBQW1GLFNBQUEsRUFBQUYsSUFBQSxpQkFBQWxDLGlCQUFBLENBQUF2QyxTQUFBLEdBQUF3QywwQkFBQSxFQUFBakMsY0FBQSxDQUFBdUMsRUFBQSxtQkFBQXRELEtBQUEsRUFBQWdELDBCQUFBLEVBQUF0QixZQUFBLFNBQUFYLGNBQUEsQ0FBQWlDLDBCQUFBLG1CQUFBaEQsS0FBQSxFQUFBK0MsaUJBQUEsRUFBQXJCLFlBQUEsU0FBQXFCLGlCQUFBLENBQUF5RCxXQUFBLEdBQUFoRixNQUFBLENBQUF3QiwwQkFBQSxFQUFBMUIsaUJBQUEsd0JBQUFaLE9BQUEsQ0FBQStGLG1CQUFBLGFBQUFDLE1BQUEsUUFBQUMsSUFBQSx3QkFBQUQsTUFBQSxJQUFBQSxNQUFBLENBQUFuRyxXQUFBLFdBQUFvRyxJQUFBLEtBQUFBLElBQUEsS0FBQTVELGlCQUFBLDZCQUFBNEQsSUFBQSxDQUFBSCxXQUFBLElBQUFHLElBQUEsQ0FBQTNILElBQUEsT0FBQTBCLE9BQUEsQ0FBQWtHLElBQUEsYUFBQUYsTUFBQSxXQUFBOUYsTUFBQSxDQUFBaUcsY0FBQSxHQUFBakcsTUFBQSxDQUFBaUcsY0FBQSxDQUFBSCxNQUFBLEVBQUExRCwwQkFBQSxLQUFBMEQsTUFBQSxDQUFBSSxTQUFBLEdBQUE5RCwwQkFBQSxFQUFBeEIsTUFBQSxDQUFBa0YsTUFBQSxFQUFBcEYsaUJBQUEseUJBQUFvRixNQUFBLENBQUFsRyxTQUFBLEdBQUFJLE1BQUEsQ0FBQXlCLE1BQUEsQ0FBQWlCLEVBQUEsR0FBQW9ELE1BQUEsS0FBQWhHLE9BQUEsQ0FBQXFHLEtBQUEsYUFBQXBFLEdBQUEsYUFBQXVCLE9BQUEsRUFBQXZCLEdBQUEsT0FBQVkscUJBQUEsQ0FBQUksYUFBQSxDQUFBbkQsU0FBQSxHQUFBZ0IsTUFBQSxDQUFBbUMsYUFBQSxDQUFBbkQsU0FBQSxFQUFBWSxtQkFBQSxpQ0FBQVYsT0FBQSxDQUFBaUQsYUFBQSxHQUFBQSxhQUFBLEVBQUFqRCxPQUFBLENBQUFzRyxLQUFBLGFBQUFsRixPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLEVBQUEyQixXQUFBLGVBQUFBLFdBQUEsS0FBQUEsV0FBQSxHQUFBcUQsT0FBQSxPQUFBQyxJQUFBLE9BQUF2RCxhQUFBLENBQUE5QixJQUFBLENBQUFDLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsR0FBQTJCLFdBQUEsVUFBQWxELE9BQUEsQ0FBQStGLG1CQUFBLENBQUExRSxPQUFBLElBQUFtRixJQUFBLEdBQUFBLElBQUEsQ0FBQTNCLElBQUEsR0FBQXBCLElBQUEsV0FBQUYsTUFBQSxXQUFBQSxNQUFBLENBQUFnQixJQUFBLEdBQUFoQixNQUFBLENBQUFqRSxLQUFBLEdBQUFrSCxJQUFBLENBQUEzQixJQUFBLFdBQUFoQyxxQkFBQSxDQUFBRCxFQUFBLEdBQUE5QixNQUFBLENBQUE4QixFQUFBLEVBQUFoQyxpQkFBQSxnQkFBQUUsTUFBQSxDQUFBOEIsRUFBQSxFQUFBbkMsY0FBQSxpQ0FBQUssTUFBQSxDQUFBOEIsRUFBQSw2REFBQTVDLE9BQUEsQ0FBQVgsSUFBQSxhQUFBb0gsR0FBQSxRQUFBQyxNQUFBLEdBQUF4RyxNQUFBLENBQUF1RyxHQUFBLEdBQUFwSCxJQUFBLGdCQUFBaUIsR0FBQSxJQUFBb0csTUFBQSxFQUFBckgsSUFBQSxDQUFBa0csSUFBQSxDQUFBakYsR0FBQSxVQUFBakIsSUFBQSxDQUFBc0gsT0FBQSxhQUFBOUIsS0FBQSxXQUFBeEYsSUFBQSxDQUFBNUIsTUFBQSxTQUFBNkMsR0FBQSxHQUFBakIsSUFBQSxDQUFBdUgsR0FBQSxRQUFBdEcsR0FBQSxJQUFBb0csTUFBQSxTQUFBN0IsSUFBQSxDQUFBdkYsS0FBQSxHQUFBZ0IsR0FBQSxFQUFBdUUsSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsV0FBQUEsSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsUUFBQTdFLE9BQUEsQ0FBQTJDLE1BQUEsR0FBQUEsTUFBQSxFQUFBZCxPQUFBLENBQUEvQixTQUFBLEtBQUFELFdBQUEsRUFBQWdDLE9BQUEsRUFBQTZELEtBQUEsV0FBQUEsTUFBQW1CLGFBQUEsYUFBQUMsSUFBQSxXQUFBakMsSUFBQSxXQUFBVixJQUFBLFFBQUFDLEtBQUEsR0FBQUssU0FBQSxPQUFBRixJQUFBLFlBQUFQLFFBQUEsY0FBQWpCLE1BQUEsZ0JBQUFkLEdBQUEsR0FBQXdDLFNBQUEsT0FBQWEsVUFBQSxDQUFBeEMsT0FBQSxDQUFBMEMsYUFBQSxJQUFBcUIsYUFBQSxXQUFBdkksSUFBQSxrQkFBQUEsSUFBQSxDQUFBeUksTUFBQSxPQUFBNUcsTUFBQSxDQUFBZ0MsSUFBQSxPQUFBN0QsSUFBQSxNQUFBdUgsS0FBQSxFQUFBdkgsSUFBQSxDQUFBMEksS0FBQSxjQUFBMUksSUFBQSxJQUFBbUcsU0FBQSxNQUFBd0MsSUFBQSxXQUFBQSxLQUFBLFNBQUExQyxJQUFBLFdBQUEyQyxVQUFBLFFBQUE1QixVQUFBLElBQUFHLFVBQUEsa0JBQUF5QixVQUFBLENBQUFoRixJQUFBLFFBQUFnRixVQUFBLENBQUFqRixHQUFBLGNBQUFrRixJQUFBLEtBQUE5QyxpQkFBQSxXQUFBQSxrQkFBQStDLFNBQUEsYUFBQTdDLElBQUEsUUFBQTZDLFNBQUEsTUFBQXhGLE9BQUEsa0JBQUF5RixPQUFBQyxHQUFBLEVBQUFDLE1BQUEsV0FBQWpFLE1BQUEsQ0FBQXBCLElBQUEsWUFBQW9CLE1BQUEsQ0FBQXJCLEdBQUEsR0FBQW1GLFNBQUEsRUFBQXhGLE9BQUEsQ0FBQWlELElBQUEsR0FBQXlDLEdBQUEsRUFBQUMsTUFBQSxLQUFBM0YsT0FBQSxDQUFBbUIsTUFBQSxXQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUF3QyxTQUFBLEtBQUE4QyxNQUFBLGFBQUEzSixDQUFBLFFBQUEwSCxVQUFBLENBQUE3SCxNQUFBLE1BQUFHLENBQUEsU0FBQUEsQ0FBQSxRQUFBcUgsS0FBQSxRQUFBSyxVQUFBLENBQUExSCxDQUFBLEdBQUEwRixNQUFBLEdBQUEyQixLQUFBLENBQUFRLFVBQUEsaUJBQUFSLEtBQUEsQ0FBQUMsTUFBQSxTQUFBbUMsTUFBQSxhQUFBcEMsS0FBQSxDQUFBQyxNQUFBLFNBQUE0QixJQUFBLFFBQUFVLFFBQUEsR0FBQXJILE1BQUEsQ0FBQWdDLElBQUEsQ0FBQThDLEtBQUEsZUFBQXdDLFVBQUEsR0FBQXRILE1BQUEsQ0FBQWdDLElBQUEsQ0FBQThDLEtBQUEscUJBQUF1QyxRQUFBLElBQUFDLFVBQUEsYUFBQVgsSUFBQSxHQUFBN0IsS0FBQSxDQUFBRSxRQUFBLFNBQUFrQyxNQUFBLENBQUFwQyxLQUFBLENBQUFFLFFBQUEsZ0JBQUEyQixJQUFBLEdBQUE3QixLQUFBLENBQUFHLFVBQUEsU0FBQWlDLE1BQUEsQ0FBQXBDLEtBQUEsQ0FBQUcsVUFBQSxjQUFBb0MsUUFBQSxhQUFBVixJQUFBLEdBQUE3QixLQUFBLENBQUFFLFFBQUEsU0FBQWtDLE1BQUEsQ0FBQXBDLEtBQUEsQ0FBQUUsUUFBQSxxQkFBQXNDLFVBQUEsWUFBQTNELEtBQUEscURBQUFnRCxJQUFBLEdBQUE3QixLQUFBLENBQUFHLFVBQUEsU0FBQWlDLE1BQUEsQ0FBQXBDLEtBQUEsQ0FBQUcsVUFBQSxZQUFBZCxNQUFBLFdBQUFBLE9BQUFwQyxJQUFBLEVBQUFELEdBQUEsYUFBQXJFLENBQUEsUUFBQTBILFVBQUEsQ0FBQTdILE1BQUEsTUFBQUcsQ0FBQSxTQUFBQSxDQUFBLFFBQUFxSCxLQUFBLFFBQUFLLFVBQUEsQ0FBQTFILENBQUEsT0FBQXFILEtBQUEsQ0FBQUMsTUFBQSxTQUFBNEIsSUFBQSxJQUFBM0csTUFBQSxDQUFBZ0MsSUFBQSxDQUFBOEMsS0FBQSx3QkFBQTZCLElBQUEsR0FBQTdCLEtBQUEsQ0FBQUcsVUFBQSxRQUFBc0MsWUFBQSxHQUFBekMsS0FBQSxhQUFBeUMsWUFBQSxpQkFBQXhGLElBQUEsbUJBQUFBLElBQUEsS0FBQXdGLFlBQUEsQ0FBQXhDLE1BQUEsSUFBQWpELEdBQUEsSUFBQUEsR0FBQSxJQUFBeUYsWUFBQSxDQUFBdEMsVUFBQSxLQUFBc0MsWUFBQSxjQUFBcEUsTUFBQSxHQUFBb0UsWUFBQSxHQUFBQSxZQUFBLENBQUFqQyxVQUFBLGNBQUFuQyxNQUFBLENBQUFwQixJQUFBLEdBQUFBLElBQUEsRUFBQW9CLE1BQUEsQ0FBQXJCLEdBQUEsR0FBQUEsR0FBQSxFQUFBeUYsWUFBQSxTQUFBM0UsTUFBQSxnQkFBQThCLElBQUEsR0FBQTZDLFlBQUEsQ0FBQXRDLFVBQUEsRUFBQWhELGdCQUFBLFNBQUF1RixRQUFBLENBQUFyRSxNQUFBLE1BQUFxRSxRQUFBLFdBQUFBLFNBQUFyRSxNQUFBLEVBQUErQixRQUFBLG9CQUFBL0IsTUFBQSxDQUFBcEIsSUFBQSxRQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxxQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsbUJBQUFvQixNQUFBLENBQUFwQixJQUFBLFFBQUEyQyxJQUFBLEdBQUF2QixNQUFBLENBQUFyQixHQUFBLGdCQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxTQUFBaUYsSUFBQSxRQUFBbEYsR0FBQSxHQUFBcUIsTUFBQSxDQUFBckIsR0FBQSxPQUFBYyxNQUFBLGtCQUFBOEIsSUFBQSx5QkFBQXZCLE1BQUEsQ0FBQXBCLElBQUEsSUFBQW1ELFFBQUEsVUFBQVIsSUFBQSxHQUFBUSxRQUFBLEdBQUFqRCxnQkFBQSxLQUFBd0YsTUFBQSxXQUFBQSxPQUFBeEMsVUFBQSxhQUFBeEgsQ0FBQSxRQUFBMEgsVUFBQSxDQUFBN0gsTUFBQSxNQUFBRyxDQUFBLFNBQUFBLENBQUEsUUFBQXFILEtBQUEsUUFBQUssVUFBQSxDQUFBMUgsQ0FBQSxPQUFBcUgsS0FBQSxDQUFBRyxVQUFBLEtBQUFBLFVBQUEsY0FBQXVDLFFBQUEsQ0FBQTFDLEtBQUEsQ0FBQVEsVUFBQSxFQUFBUixLQUFBLENBQUFJLFFBQUEsR0FBQUcsYUFBQSxDQUFBUCxLQUFBLEdBQUE3QyxnQkFBQSx5QkFBQXlGLE9BQUEzQyxNQUFBLGFBQUF0SCxDQUFBLFFBQUEwSCxVQUFBLENBQUE3SCxNQUFBLE1BQUFHLENBQUEsU0FBQUEsQ0FBQSxRQUFBcUgsS0FBQSxRQUFBSyxVQUFBLENBQUExSCxDQUFBLE9BQUFxSCxLQUFBLENBQUFDLE1BQUEsS0FBQUEsTUFBQSxRQUFBNUIsTUFBQSxHQUFBMkIsS0FBQSxDQUFBUSxVQUFBLGtCQUFBbkMsTUFBQSxDQUFBcEIsSUFBQSxRQUFBNEYsTUFBQSxHQUFBeEUsTUFBQSxDQUFBckIsR0FBQSxFQUFBdUQsYUFBQSxDQUFBUCxLQUFBLFlBQUE2QyxNQUFBLGdCQUFBaEUsS0FBQSw4QkFBQWlFLGFBQUEsV0FBQUEsY0FBQXBDLFFBQUEsRUFBQWYsVUFBQSxFQUFBRSxPQUFBLGdCQUFBZCxRQUFBLEtBQUFwRSxRQUFBLEVBQUErQyxNQUFBLENBQUFnRCxRQUFBLEdBQUFmLFVBQUEsRUFBQUEsVUFBQSxFQUFBRSxPQUFBLEVBQUFBLE9BQUEsb0JBQUEvQixNQUFBLFVBQUFkLEdBQUEsR0FBQXdDLFNBQUEsR0FBQXJDLGdCQUFBLE9BQUFwQyxPQUFBO0FBQUEsU0FBQWdJLG1CQUFBQyxHQUFBLEVBQUE3RSxPQUFBLEVBQUFDLE1BQUEsRUFBQTZFLEtBQUEsRUFBQUMsTUFBQSxFQUFBN0gsR0FBQSxFQUFBMkIsR0FBQSxjQUFBMEMsSUFBQSxHQUFBc0QsR0FBQSxDQUFBM0gsR0FBQSxFQUFBMkIsR0FBQSxPQUFBM0MsS0FBQSxHQUFBcUYsSUFBQSxDQUFBckYsS0FBQSxXQUFBaEUsS0FBQSxJQUFBK0gsTUFBQSxDQUFBL0gsS0FBQSxpQkFBQXFKLElBQUEsQ0FBQUosSUFBQSxJQUFBbkIsT0FBQSxDQUFBOUQsS0FBQSxZQUFBaUgsT0FBQSxDQUFBbkQsT0FBQSxDQUFBOUQsS0FBQSxFQUFBbUUsSUFBQSxDQUFBeUUsS0FBQSxFQUFBQyxNQUFBO0FBQUEsU0FBQUMsa0JBQUFwRyxFQUFBLDZCQUFBVixJQUFBLFNBQUErRyxJQUFBLEdBQUFDLFNBQUEsYUFBQS9CLE9BQUEsV0FBQW5ELE9BQUEsRUFBQUMsTUFBQSxRQUFBNEUsR0FBQSxHQUFBakcsRUFBQSxDQUFBdUcsS0FBQSxDQUFBakgsSUFBQSxFQUFBK0csSUFBQSxZQUFBSCxNQUFBNUksS0FBQSxJQUFBMEksa0JBQUEsQ0FBQUMsR0FBQSxFQUFBN0UsT0FBQSxFQUFBQyxNQUFBLEVBQUE2RSxLQUFBLEVBQUFDLE1BQUEsVUFBQTdJLEtBQUEsY0FBQTZJLE9BQUFqSCxHQUFBLElBQUE4RyxrQkFBQSxDQUFBQyxHQUFBLEVBQUE3RSxPQUFBLEVBQUFDLE1BQUEsRUFBQTZFLEtBQUEsRUFBQUMsTUFBQSxXQUFBakgsR0FBQSxLQUFBZ0gsS0FBQSxDQUFBekQsU0FBQTtBQUNlLFNBQWVnRSxVQUFVQSxDQUFBYSxFQUFBO0VBQUEsT0FBQXNDLFdBQUEsQ0FBQXJELEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBaUJ2QyxTQUFBc0QsWUFBQTtFQUFBQSxXQUFBLEdBQUF4RCxpQkFBQSxlQUFBckksbUJBQUEsR0FBQW1HLElBQUEsQ0FqQmMsU0FBQTZDLFFBQTBCVSxLQUFLO0lBQUEsSUFBQW9DLEtBQUEsRUFBQUMsUUFBQSxFQUFBcEMsSUFBQTtJQUFBLE9BQUEzSixtQkFBQSxHQUFBb0IsSUFBQSxVQUFBOEgsU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUFwQyxJQUFBLEdBQUFvQyxRQUFBLENBQUFyRSxJQUFBO1FBQUE7VUFDdENnSCxLQUFLLEdBQUc7WUFBRSxDQUFDLEVBQUUsVUFBVTtZQUFFLENBQUMsRUFBRTtVQUFVLENBQUM7VUFBQTNDLFFBQUEsQ0FBQXBDLElBQUE7VUFBQW9DLFFBQUEsQ0FBQXJFLElBQUE7VUFBQSxPQUdwQmtILEtBQUssQ0FDMUIsOENBQThDLGdCQUFBaE8sTUFBQSxDQUMvQjhOLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBQTlOLE1BQUEsQ0FBUThOLEtBQUssQ0FBQyxHQUFHLENBQUMsY0FBQTlOLE1BQUEsQ0FBVzBMLEtBQUssWUFBUyxFQUNwRTtZQUFFdUMsSUFBSSxFQUFFO1VBQUssQ0FBQyxDQUNmO1FBQUE7VUFKS0YsUUFBUSxHQUFBNUMsUUFBQSxDQUFBL0UsSUFBQTtVQUFBK0UsUUFBQSxDQUFBckUsSUFBQTtVQUFBLE9BS0tpSCxRQUFRLENBQUNHLElBQUksRUFBRTtRQUFBO1VBQTVCdkMsSUFBSSxHQUFBUixRQUFBLENBQUEvRSxJQUFBO1VBQUEsTUFFTnVGLElBQUksQ0FBQ3BPLEtBQUssSUFBSW1KLFNBQVM7WUFBQXlFLFFBQUEsQ0FBQXJFLElBQUE7WUFBQTtVQUFBO1VBQUEsT0FBQXFFLFFBQUEsQ0FBQTVFLE1BQUEsV0FBU29GLElBQUk7UUFBQTtVQUFBLE1BRWxDQSxJQUFJLENBQUNwTyxLQUFLO1FBQUE7VUFBQTROLFFBQUEsQ0FBQXBDLElBQUE7VUFBQW9DLFFBQUEsQ0FBQWdELEVBQUEsR0FBQWhELFFBQUE7VUFBQSxPQUFBQSxRQUFBLENBQUE1RSxNQUFBLFdBRVRpQyxPQUFPLENBQUNsRCxNQUFNLENBQUE2RixRQUFBLENBQUFnRCxFQUFBLENBQU07UUFBQTtRQUFBO1VBQUEsT0FBQWhELFFBQUEsQ0FBQWpDLElBQUE7TUFBQTtJQUFBLEdBQUE4QixPQUFBO0VBQUEsQ0FFOUI7RUFBQSxPQUFBNkMsV0FBQSxDQUFBckQsS0FBQSxPQUFBRCxTQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRDtBQUM2RztBQUNqQjtBQUNjO0FBQ1A7QUFDbkcsNENBQTRDLDRIQUEyQztBQUN2Riw0Q0FBNEMsZ0lBQTZDO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsMEJBQTBCLHdGQUFpQztBQUMzRCx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSw0TUFBNE0sNkZBQTZGLGlCQUFpQix5QkFBeUIsMkJBQTJCLDBCQUEwQixrQkFBa0IsMkJBQTJCLEdBQUcsVUFBVSxZQUFZLHNCQUFzQixnQkFBZ0Isa0JBQWtCLG1CQUFtQix3Q0FBd0Msc0NBQXNDLEdBQUcsa0tBQWtLLGtCQUFrQix3QkFBd0IsbUNBQW1DLDBCQUEwQix5QkFBeUIsR0FBRyxlQUFlLDhCQUE4QixtQkFBbUIscUNBQXFDLHFCQUFxQixnQkFBZ0IsbUNBQW1DLEdBQUcsV0FBVyxxQkFBcUIsZ0JBQWdCLHFCQUFxQixrQkFBa0Isb0NBQW9DLEdBQUcsaUJBQWlCLG9CQUFvQixHQUFHLG9CQUFvQixzQkFBc0IsR0FBRyxVQUFVLHlCQUF5QixXQUFXLHdCQUF3Qix5QkFBeUIsR0FBRyxnQkFBZ0IsbUJBQW1CLHNCQUFzQixpQkFBaUIsR0FBRyw2QkFBNkIsZ0JBQWdCLHVCQUF1QixHQUFHLHFCQUFxQixpQkFBaUIsMENBQTBDLGtDQUFrQyxnQkFBZ0IscUJBQXFCLDRCQUE0QixvQkFBb0IsR0FBRyxxQ0FBcUMsb0JBQW9CLHNDQUFzQyxHQUFHLGlDQUFpQyxpRkFBaUYsNkJBQTZCLGlCQUFpQixrQkFBa0IsR0FBRyw4SUFBOEkseUJBQXlCLHdCQUF3Qiw0QkFBNEIsdUNBQXVDLHdDQUF3Qyx1QkFBdUIsMEJBQTBCLHVCQUF1QixHQUFHLHFCQUFxQixvQkFBb0IsNEJBQTRCLHFCQUFxQixHQUFHLHNCQUFzQixxQkFBcUIsNEJBQTRCLGlCQUFpQixvQkFBb0IscUJBQXFCLGNBQWMsd0JBQXdCLGVBQWUsR0FBRyw2QkFBNkIsZ0JBQWdCLEdBQUcsa0tBQWtLLGtCQUFrQiw4QkFBOEIseUJBQXlCLDBCQUEwQixxQkFBcUIsNEJBQTRCLHdCQUF3QixhQUFhLEdBQUcsUUFBUSxrQkFBa0IsR0FBRyxnSkFBZ0osNEJBQTRCLHNCQUFzQix3QkFBd0Isd0NBQXdDLHVCQUF1QixrQkFBa0IsZUFBZSxnQkFBZ0IseUNBQXlDLEdBQUcscUJBQXFCLFFBQVEsOEJBQThCLEtBQUssVUFBVSxnQ0FBZ0MsS0FBSyxHQUFHLFNBQVMsK0ZBQStGLE9BQU8sT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGNBQWMsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsUUFBUSxNQUFNLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sT0FBTyxNQUFNLFVBQVUsS0FBSyxPQUFPLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSw4RUFBOEUsdUlBQXVJLDZFQUE2RSxpQkFBaUIseUJBQXlCLDJCQUEyQiwwQkFBMEIsa0JBQWtCLDJCQUEyQixHQUFHLFVBQVUsWUFBWSxzQkFBc0IsZ0JBQWdCLGtCQUFrQixtQkFBbUIsd0NBQXdDLHNDQUFzQyxHQUFHLGtLQUFrSyxrQkFBa0Isd0JBQXdCLG1DQUFtQywwQkFBMEIseUJBQXlCLEdBQUcsZUFBZSw4QkFBOEIsbUJBQW1CLHFDQUFxQyxxQkFBcUIsZ0JBQWdCLG1DQUFtQyxHQUFHLFdBQVcscUJBQXFCLGdCQUFnQixxQkFBcUIsa0JBQWtCLG9DQUFvQyxHQUFHLGlCQUFpQixvQkFBb0IsR0FBRyxvQkFBb0Isc0JBQXNCLEdBQUcsVUFBVSx5QkFBeUIsV0FBVyx3QkFBd0IseUJBQXlCLEdBQUcsZ0JBQWdCLG1CQUFtQixzQkFBc0IsaUJBQWlCLEdBQUcsNkJBQTZCLGdCQUFnQix1QkFBdUIsR0FBRyxxQkFBcUIsaUJBQWlCLDBDQUEwQyxrQ0FBa0MsZ0JBQWdCLHFCQUFxQiw0QkFBNEIsb0JBQW9CLEdBQUcscUNBQXFDLG9CQUFvQixzQ0FBc0MsR0FBRyxpQ0FBaUMsbUVBQW1FLDZCQUE2QixpQkFBaUIsa0JBQWtCLEdBQUcsOElBQThJLHlCQUF5Qix3QkFBd0IsNEJBQTRCLHVDQUF1Qyx3Q0FBd0MsdUJBQXVCLDBCQUEwQix1QkFBdUIsR0FBRyxxQkFBcUIsb0JBQW9CLDRCQUE0QixxQkFBcUIsR0FBRyxzQkFBc0IscUJBQXFCLDRCQUE0QixpQkFBaUIsb0JBQW9CLHFCQUFxQixjQUFjLHdCQUF3QixlQUFlLEdBQUcsNkJBQTZCLGdCQUFnQixHQUFHLGtLQUFrSyxrQkFBa0IsOEJBQThCLHlCQUF5QiwwQkFBMEIscUJBQXFCLDRCQUE0Qix3QkFBd0IsYUFBYSxHQUFHLFFBQVEsa0JBQWtCLEdBQUcsZ0pBQWdKLDRCQUE0QixzQkFBc0Isd0JBQXdCLHdDQUF3Qyx1QkFBdUIsa0JBQWtCLGVBQWUsZ0JBQWdCLHlDQUF5QyxHQUFHLHFCQUFxQixRQUFRLDhCQUE4QixLQUFLLFVBQVUsZ0NBQWdDLEtBQUssR0FBRyxxQkFBcUI7QUFDNWdSO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGtEQUFrRCx1QkFBdUIsR0FBRyxlQUFlLHFCQUFxQixtQkFBbUIsbUNBQW1DLGdCQUFnQixHQUFHLG9CQUFvQixnQkFBZ0IsZUFBZSxzQkFBc0IsaUJBQWlCLHVCQUF1QixHQUFHLGdCQUFnQixxQkFBcUIscUJBQXFCLEdBQUcseUJBQXlCLHFCQUFxQixtQkFBbUIsY0FBYyxtQ0FBbUMsR0FBRyxxQkFBcUIsa0JBQWtCLDRCQUE0QixjQUFjLGFBQWEsR0FBRyxZQUFZLGtCQUFrQiwwQ0FBMEMsc0JBQXNCLHVCQUF1QixnQkFBZ0Isc0JBQXNCLHVCQUF1QixpQkFBaUIsR0FBRyxlQUFlLHNCQUFzQix5QkFBeUIsa0JBQWtCLHVCQUF1Qix1QkFBdUIsR0FBRyxtQkFBbUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IscUJBQXFCLHVCQUF1QixlQUFlLEdBQUcsU0FBUyx5RkFBeUYsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxpQ0FBaUMsdUJBQXVCLEdBQUcsZUFBZSxxQkFBcUIsbUJBQW1CLG1DQUFtQyxnQkFBZ0IsR0FBRyxvQkFBb0IsZ0JBQWdCLGVBQWUsc0JBQXNCLGlCQUFpQix1QkFBdUIsR0FBRyxnQkFBZ0IscUJBQXFCLHFCQUFxQixHQUFHLHlCQUF5QixxQkFBcUIsbUJBQW1CLGNBQWMsbUNBQW1DLEdBQUcscUJBQXFCLGtCQUFrQiw0QkFBNEIsY0FBYyxhQUFhLEdBQUcsWUFBWSxrQkFBa0IsMENBQTBDLHNCQUFzQix1QkFBdUIsZ0JBQWdCLHNCQUFzQix1QkFBdUIsaUJBQWlCLEdBQUcsZUFBZSxzQkFBc0IseUJBQXlCLGtCQUFrQix1QkFBdUIsdUJBQXVCLEdBQUcsbUJBQW1CLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHFCQUFxQix1QkFBdUIsZUFBZSxHQUFHLHFCQUFxQjtBQUNyc0Y7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vc3JjL3NjcmlwdHMvZG9tLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vc3JjL3NjcmlwdHMvdG9nZ2xlU3dpdGNoLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9zcmMvc2NyaXB0cy93ZWF0aGVyLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vc3JjL3N0eWxlcy93ZWF0aGVyLmNzcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJyk7XG5jb25zdCBlcnJvck1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvciAubWVzc2FnZScpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBGdW5jdGlvbnMgcHJvdmlkZWQgb3V0c2lkZSBtb2R1bGFyIHVzZVxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBzaG93RXJyb3IobWVzc2FnZSkge1xuICAgIGVycm9yLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgZXJyb3JNc2cudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgfSxcblxuICBjbG9zZUVycm9yKCkge1xuICAgIGVycm9yLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBlcnJvck1zZy50ZXh0Q29udGVudCA9ICcnO1xuICB9LFxuXG4gIHNob3dXZWF0aGVyKHdlYXRoZXJEYXRhLCB1bml0cykge1xuICAgIHRoaXMuY2xlYXJXZWF0aGVyKCk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0b2RheSh3ZWF0aGVyRGF0YSwgdW5pdHMpKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGZvcmVjYXN0KHdlYXRoZXJEYXRhLmZvcmVjYXN0LCB1bml0cy50ZW1wVW5pdCkpO1xuICB9LFxuXG4gIGNsZWFyV2VhdGhlcigpIHtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gIH0sXG5cbiAgbG9hZGluZygpIHtcbiAgICB0aGlzLmNsZWFyV2VhdGhlcigpO1xuICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvYWRlci5jbGFzc05hbWUgPSAnbG9hZGVyJztcbiAgICBtYWluLmFwcGVuZENoaWxkKGxvYWRlcik7XG4gIH0sXG59O1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqICBDcmVhdGVzIGFsbCBET00gZWxlbWVudHMgdXNpbmcgZGF0YSBvZiBjdXJyZW50XG4gKiAgd2VhdGhlci5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmZ1bmN0aW9uIHRvZGF5KHdlYXRoZXJEYXRhLCB1bml0cykge1xuICBjb25zdCB3ZXRoZXJET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIHdldGhlckRPTS5jbGFzc05hbWUgPSAndG9kYXknO1xuXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0N1cnJlbnRseSc7XG4gIHdldGhlckRPTS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICBjb25zdCBjaGlsZHJlbkRPTSA9IFtcbiAgICBsb2NhdGlvbih3ZWF0aGVyRGF0YS5sb2NhdGlvbiksXG4gICAgY29uZGl0aW9uKHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uKSxcbiAgICB0ZW1wZXJhdHVyZSh3ZWF0aGVyRGF0YS5jdXJyZW50LCB1bml0cy50ZW1wVW5pdCksXG4gICAgd2luZCh3ZWF0aGVyRGF0YS5jdXJyZW50LCB1bml0cy5zcGVlZFVuaXQpLFxuICAgIG90aGVyKHdlYXRoZXJEYXRhLmN1cnJlbnQsIHVuaXRzLnNwZWVkVW5pdCksXG4gIF07XG5cbiAgZm9yIChsZXQgZG9tIG9mIGNoaWxkcmVuRE9NKSB3ZXRoZXJET00uYXBwZW5kQ2hpbGQoZG9tKTtcblxuICByZXR1cm4gd2V0aGVyRE9NO1xufVxuXG5mdW5jdGlvbiBmb3JlY2FzdCh3ZWF0aGVyRGF0YSwgdGVtcFVuaXQpIHtcbiAgY29uc3QgZm9yZWNhc3RET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGZvcmVjYXN0RE9NLmNsYXNzTmFtZSA9ICdmb3JlY2FzdCc7XG5cbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnRm9yZWNhc3QnO1xuICBmb3JlY2FzdERPTS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHdlYXRoZXJEYXRhLmZvcmVjYXN0ZGF5Lmxlbmd0aDsgKytpKSB7XG4gICAgY29uc3QgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF5LmNsYXNzTmFtZSA9ICdmb3JlY2FzdC1kYXknO1xuXG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZW1wZXJhdHVyZS5jbGFzc05hbWUgPSAndGVtcGVyYXR1cmUnO1xuICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7XG4gICAgICB3ZWF0aGVyRGF0YS5mb3JlY2FzdGRheVtpXS5kYXlbJ2F2Z3RlbXBfJyArIHRlbXBVbml0XVxuICAgIH0ke3RlbXBVbml0LnRvVXBwZXJDYXNlKCl9YDtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaWNvbi5jbGFzc05hbWUgPSAnaWNvbic7XG4gICAgaWNvbi5zcmMgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdGRheVtpXS5kYXkuY29uZGl0aW9uLmljb247XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhdGUuY2xhc3NOYW1lID0gJ2RhdGUnO1xuICAgIGRhdGUudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdGRheVtpXS5kYXRlO1xuXG4gICAgZGF5LmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlKTtcbiAgICBkYXkuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgZGF5LmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgZm9yZWNhc3RET00uYXBwZW5kQ2hpbGQoZGF5KTtcbiAgfVxuXG4gIHJldHVybiBmb3JlY2FzdERPTTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBGdW5jdGlvbnMgdGhhdCBjcmVhdGUgdmFyaW91cyB3ZWF0aGVyIGRhdGFcbiAqIGNvbXBvbmVudHMuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vLyBHZW5lcmF0ZSBET00gZm9yIGxvY2F0aW9uIGRhdGFcbmZ1bmN0aW9uIGxvY2F0aW9uKGxvY2F0aW9uRGF0YSkge1xuICBjb25zdCBsb2NhdGlvbkRPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgbG9jYXRpb25ET00uY2xhc3NOYW1lID0gJ2xvY2F0aW9uJztcbiAgbG9jYXRpb25ET00udGV4dENvbnRlbnQgPSBgJHtsb2NhdGlvbkRhdGEubmFtZX0sICR7bG9jYXRpb25EYXRhLmNvdW50cnl9YDtcblxuICByZXR1cm4gbG9jYXRpb25ET007XG59XG5cbi8vIEdlbmVyYXRlIERPTSBmb3IgY29uZGl0aW9uIGRhdGFcbmZ1bmN0aW9uIGNvbmRpdGlvbihjb25kaXRpb25EYXRhKSB7XG4gIGNvbnN0IGNvbmRpdGlvbkRPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgY29uZGl0aW9uRE9NLmNsYXNzTmFtZSA9ICdjb25kaXRpb24nO1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGljb24uc3JjID0gY29uZGl0aW9uRGF0YS5pY29uO1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gY29uZGl0aW9uRGF0YS50ZXh0O1xuICBjb25kaXRpb25ET00uYXBwZW5kQ2hpbGQoaWNvbik7XG4gIGNvbmRpdGlvbkRPTS5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICByZXR1cm4gY29uZGl0aW9uRE9NO1xufVxuXG4vLyBHZW5lcmF0ZSBET00gZm9yIHRlbXBlcmF0dXJlIGRhdGFcbmZ1bmN0aW9uIHRlbXBlcmF0dXJlKHdlYXRoZXJEYXRhLCB0ZW1wVW5pdCkge1xuICBjb25zdCB0ZW1wZXJhdHVyZURPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0ZW1wZXJhdHVyZURPTS50ZXh0Q29udGVudCA9IGAke1xuICAgIHdlYXRoZXJEYXRhWyd0ZW1wXycgKyB0ZW1wVW5pdF1cbiAgfSR7dGVtcFVuaXQudG9VcHBlckNhc2UoKX1gO1xuICB0ZW1wZXJhdHVyZURPTS5jbGFzc05hbWUgPSAndGVtcGVyYXR1cmUnO1xuXG4gIHJldHVybiB0ZW1wZXJhdHVyZURPTTtcbn1cblxuLy8gR2VuZXJhdGUgRE9NIGZvciB3aW5kIGRhdGFcbmZ1bmN0aW9uIHdpbmQod2VhdGhlckRhdGEsIHNwZWVkVW5pdCkge1xuICBjb25zdCB3aW5kQW5nbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2luZEFuZ2xlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEud2luZF9kZWdyZWV9wrBgO1xuICBjb25zdCB3aW5kRGlyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdpbmREaXIudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS53aW5kX2RpcjtcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhWyd3aW5kXycgKyBzcGVlZFVuaXRdfSR7c3BlZWRVbml0fWA7XG4gIHdpbmRTcGVlZC5jbGFzc05hbWUgPSAnd2luZC1zcGVlZCc7XG5cbiAgY29uc3Qgd2luZEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIHdpbmRJbmZvLmFwcGVuZENoaWxkKHdpbmRBbmdsZSk7XG4gIHdpbmRJbmZvLmFwcGVuZENoaWxkKHdpbmREaXIpO1xuICB3aW5kSW5mby5hcHBlbmRDaGlsZCh3aW5kU3BlZWQpO1xuXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1dpbmQnO1xuXG4gIGNvbnN0IHdpbmRET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2luZERPTS5jbGFzc05hbWUgPSAnd2luZCc7XG4gIHdpbmRET00uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIHdpbmRET00uYXBwZW5kQ2hpbGQod2luZEluZm8pO1xuXG4gIHJldHVybiB3aW5kRE9NO1xufVxuXG4vLyBHZW5lcmF0ZSBET00gZm9yIG90aGVyIGRhdGFcbmZ1bmN0aW9uIG90aGVyKHdlYXRoZXJEYXRhLCBzcGVlZFVuaXQpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjb250YWluZXIuY2xhc3NOYW1lID0gJ290aGVyJztcblxuICBjb25zdCB0aXRsZSA9IFsnVVYnLCAnR3VzdCcsICdIdW1pZGl0eScsICdEYXknXTtcbiAgY29uc3Qga2V5cyA9IFsndXYnLCAnZ3VzdF8nLCAnaHVtaWRpdHknLCAnaXNfZGF5J107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSB0aXRsZVtpXTtcbiAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlmIChrZXlzW2ldID09PSAnZ3VzdF8nKVxuICAgICAgdmFsdWUudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YVtrZXlzW2ldICsgc3BlZWRVbml0XSArIHNwZWVkVW5pdDtcbiAgICBlbHNlIHZhbHVlLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGFba2V5c1tpXV07XG4gICAgdmFsdWUuY2xhc3NOYW1lID0gdGl0bGVbaV0udG9Mb3dlckNhc2UoKTtcblxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHZhbHVlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG4gIH1cblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgRE9NIGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCBnZXRXZWF0aGVyIGZyb20gJy4vd2VhdGhlci5qcyc7XG5pbXBvcnQgdG9nZ2xlU3dpdGNoIGZyb20gJy4vdG9nZ2xlU3dpdGNoLmpzJztcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLmNzcyc7XG5cbmxldCB0ZW1wVW5pdCA9ICdmJztcbmxldCBzcGVlZFVuaXQgPSAna3BoJztcblxuLy8gR2V0IGFuZCBzZXQgbG9jYXRpb24gaW5wdXQgZmllbGQgdG8gJ0FjY3JhLCBHaGFuYSdcbmNvbnN0IGxvY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24taW5wdXQnKTtcbmxvY2F0aW9uSW5wdXQudmFsdWUgPSAnQWNjcmEsIEdoYW5hJztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBGZXRjaCBhbmQgZGlzcGxheSB3ZWF0aGVyIHJlcG9ydFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5jb25zdCBxdWVyeUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZXQtd2VhdGhlcicpO1xucXVlcnlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgaWYgKGxvY2F0aW9uSW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nID09PSBmYWxzZSkge1xuICAgIHNob3dXZWF0aGVyKGxvY2F0aW9uSW5wdXQudmFsdWUsIHsgc3BlZWRVbml0LCB0ZW1wVW5pdCB9KTtcbiAgfSBlbHNlIERPTS5zaG93RXJyb3IoJ1NlYXJjaCBpdGVtIG5vdCBwcm92aWRlZCcpO1xuXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBDbGVhciBlcnJvciBtZXNzYWdlIHdoZW4gZXJyb3IgY2xvc2UgYnV0dG9uIGlzXG4gKiBjbGlja2VkLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5jb25zdCBjbG9zZUVycm9yQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWVycm9yLWJ0bicpO1xuY2xvc2VFcnJvckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTS5jbG9zZUVycm9yKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBHZXQgd2VhdGhlciByZXBvcnQgb2YgbG9jYXRpb24gZW50ZXJlZCBieSB1c2VyXG4gKiBhbmQgZGlzcGxheSByZXN1bHRzLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5sZXQgd2VhdGhlclJlcG9ydDtcblxuZnVuY3Rpb24gc2hvd1dlYXRoZXIocXVlcnksIHVuaXRzKSB7XG4gIERPTS5sb2FkaW5nKCk7XG4gIGNvbnN0IGRhdGEgPSBnZXRXZWF0aGVyKHF1ZXJ5KTtcbiAgZGF0YVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICB3ZWF0aGVyUmVwb3J0ID0gZGF0YTtcbiAgICAgIERPTS5zaG93V2VhdGhlcihkYXRhLCB1bml0cyk7XG4gICAgICBET00uY2xvc2VFcnJvcigpO1xuICAgIH0pXG4gICAgLmNhdGNoKChkYXRhKSA9PiB7XG4gICAgICB3ZWF0aGVyUmVwb3J0ID0gdW5kZWZpbmVkO1xuICAgICAgRE9NLnNob3dFcnJvcihkYXRhLm1lc3NhZ2UpO1xuICAgIH0pO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIENvbnZlcnQgdGVtcGVyYXR1cmUgb3Igc3BlZWQgd2hlbiB0aGVpciB2YXJpb3VzXG4gKiBidXR0b25zIGFyZSBjbGlja2VkLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vLyBUZW1wZXJhdHVyZSB1bml0IGNvbnZlcnNpb24gYnV0dG9uXG5jb25zdCB0ZW1wQ29udmVydGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAgLnRvZ2dsZS1zd2l0Y2gtYWN0dWF0b3InKTtcbnRlbXBDb252ZXJ0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXkgLnRlbXBlcmF0dXJlJyk7XG5cbiAgaWYgKHRlbXBVbml0ID09PSAnZicpIHtcbiAgICB0ZW1wVW5pdCA9ICdjJztcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IHdlYXRoZXJSZXBvcnQuY3VycmVudC50ZW1wX2M7XG4gICAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBgJHtwYXJzZUludCh0ZW1wZXJhdHVyZSl9wrBDYDtcbiAgfSBlbHNlIHtcbiAgICB0ZW1wVW5pdCA9ICdmJztcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IHdlYXRoZXJSZXBvcnQuY3VycmVudC50ZW1wX2Y7XG4gICAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBgJHtwYXJzZUludCh0ZW1wZXJhdHVyZSl9RmA7XG4gIH1cblxuICBjb25zdCBmb3JlY2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JlY2FzdC1kYXknKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JlY2FzdC5sZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IHRlbXAgPSBmb3JlY2FzdFtpXS5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKTtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9XG4gICAgICB3ZWF0aGVyUmVwb3J0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheVsnYXZndGVtcF8nICsgdGVtcFVuaXRdO1xuICAgIGlmICh0ZW1wVW5pdCA9PT0gJ2MnKSB0ZW1wLnRleHRDb250ZW50ID0gYCR7cGFyc2VJbnQodGVtcGVyYXR1cmUpfcKwQ2A7XG4gICAgZWxzZSB0ZW1wLnRleHRDb250ZW50ID0gYCR7cGFyc2VJbnQodGVtcGVyYXR1cmUpfUZgO1xuICB9XG5cbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59KTtcblxuLy8gU3BlZWQgdW5pdCBjb252ZXJzaW9uIGJ1dHRvblxuY29uc3Qgc3BlZWRDb252ZXJ0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BlZWQgLnRvZ2dsZS1zd2l0Y2gtYWN0dWF0b3InKTtcbnNwZWVkQ29udmVydGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kIC53aW5kLXNwZWVkJyk7XG4gIGNvbnN0IGd1c3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3RoZXIgLmd1c3QnKTtcblxuICBpZiAoc3BlZWRVbml0ID09PSAna3BoJykgc3BlZWRVbml0ID0gJ21waCc7XG4gIGVsc2Ugc3BlZWRVbml0ID0gJ2twaCc7XG5cbiAgd2luZFNwZWVkLnRleHRDb250ZW50ID1cbiAgICB3ZWF0aGVyUmVwb3J0LmN1cnJlbnRbJ3dpbmRfJyArIHNwZWVkVW5pdF0gKyBzcGVlZFVuaXQ7XG4gIGd1c3QudGV4dENvbnRlbnQgPSB3ZWF0aGVyUmVwb3J0LmN1cnJlbnRbJ2d1c3RfJyArIHNwZWVkVW5pdF0gKyBzcGVlZFVuaXQ7XG5cbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59KTtcblxuc2hvd1dlYXRoZXIobG9jYXRpb25JbnB1dC52YWx1ZSwgeyBzcGVlZFVuaXQsIHRlbXBVbml0IH0pO1xudG9nZ2xlU3dpdGNoLmFjdGl2YXRlKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFN3aXRjaCB0ZW1wbGF0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgIDxkaXYgY2xhc3M9Jy50b2dnbGUtc3dpdGNoJz5cbiAgICAgPGRpdiBjbGFzcz0ndG9nZ2xlLXN3aXRjaC1hY3R1YXRvcic+PC9kaXY+XG4gICA8L2Rpdj5cblxuICAgY29uc3QgcHJvcGVydGllcyA9IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICBzaXplOiAxLjMsXG4gICAgIGNvbG9yOiB7XG4gICAgICAgYm9keTogZ3JleTtcbiAgICAgICBhY3R1YXRvcjogJyM3YWYnLFxuICAgICAgIGFjdGl2ZTogIzY1ZixcbiAgICAgfVxuICAgfTtcblxuICAgLy8gTW9kdWxlIHVzYWdlOlxuICAgY29uc3QgYnV0dG9uID0gbmV3QnRuKHByb3BlcnRpZXMpO1xuICAgYWN0aXZhdGUocHJvcGVydGllcywgRE9NKTtcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIEdlbmVyYXRlIGFuZCByZXR1cm5zIG5ldyB0b2dnbGUgc3dpdGNoIGRvbVxuZnVuY3Rpb24gbmV3QnRuKHByb3BlcnRpZXMpIHtcbiAgcHJvcGVydGllcyA9IHByb2Nlc3NQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuXG4gIGNvbnN0IHRvZ2dsZVN3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2dnbGVTd2l0Y2guY2xhc3NOYW1lID0gJ3RvZ2dsZS1zd2l0Y2gnO1xuICB0b2dnbGVTd2l0Y2guc3R5bGUuY3NzVGV4dCA9IHN3aXRjaENTUyhcbiAgICBwcm9wZXJ0aWVzLmJhY2tncm91bmQudG9nZ2xlU3dpdGNoLFxuICAgIHByb3BlcnRpZXMuc2l6ZVxuICApO1xuXG4gIGNvbnN0IGFjdHVhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFjdHVhdG9yLmNsYXNzTmFtZSA9ICd0b2dnbGUtc3dpdGNoLWFjdHVhdG9yJztcbiAgYWN0dWF0b3Iuc3R5bGUuY3NzVGV4dCA9IGFjdHVhdG9yQ1NTKFxuICAgIHByb3BlcnRpZXMuYmFja2dyb3VuZC5hY3R1YXRvcixcbiAgICBwcm9wZXJ0aWVzLnNpemVcbiAgKTtcbiAgYWN0dWF0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBhbmltYXRlKHRvZ2dsZVN3aXRjaCwgZXZlbnQudGFyZ2V0LCBwcm9wZXJ0aWVzKTtcbiAgfSk7XG5cbiAgdG9nZ2xlU3dpdGNoLmFwcGVuZENoaWxkKGFjdHVhdG9yKTtcblxuICByZXR1cm4gdG9nZ2xlU3dpdGNoO1xufVxuXG4vLyBUdXJucyBhbGwgZWxlbWVudHMgaW4gZG9tIHdpdGggXCJ0b2dnbGUtc3dpdGNoXCIgY2xhc3MgdG8gc3dpdGNoZXNcbmZ1bmN0aW9uIGFjdGl2YXRlKHByb3BlcnRpZXMsIGRvbSkge1xuICBsZXQgc3dpdGNoZXM7XG4gIHByb3BlcnRpZXMgPSBwcm9jZXNzUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICBpZiAoZG9tID09PSB1bmRlZmluZWQpIHtcbiAgICBzd2l0Y2hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2dnbGUtc3dpdGNoJyk7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoZXMgPSBkb20ucXVlcnlTZWxlY3RvckFsbCgnLnRvZ2dsZS1zd2l0Y2gnKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3dpdGNoZXMubGVuZ3RoOyArK2kpIHtcbiAgICBzd2l0Y2hlc1tpXS5zdHlsZS5jc3NUZXh0ID0gc3dpdGNoQ1NTKFxuICAgICAgcHJvcGVydGllcy5iYWNrZ3JvdW5kLnRvZ2dsZVN3aXRjaCxcbiAgICAgIHByb3BlcnRpZXMuc2l6ZVxuICAgICk7XG5cbiAgICBjb25zdCBhY3R1YXRvciA9IHN3aXRjaGVzW2ldLnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtc3dpdGNoLWFjdHVhdG9yJyk7XG4gICAgYWN0dWF0b3Iuc3R5bGUuY3NzVGV4dCA9IGFjdHVhdG9yQ1NTKFxuICAgICAgcHJvcGVydGllcy5iYWNrZ3JvdW5kLmFjdHVhdG9yLFxuICAgICAgcHJvcGVydGllcy5zaXplXG4gICAgKTtcbiAgICBhY3R1YXRvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgYW5pbWF0ZShzd2l0Y2hlc1tpXSwgZXZlbnQudGFyZ2V0LCBwcm9wZXJ0aWVzKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBBbmltYXRlIGJ1dHRvbiBvbiB3aGVuIHRyaWdnZXJlZFxuZnVuY3Rpb24gYW5pbWF0ZSh0b2dnbGVTd2l0Y2gsIGFjdHVhdG9yLCBwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IG1hcmdpbiA9IGFjdHVhdG9yLnN0eWxlLm1hcmdpbkxlZnQ7XG5cbiAgaWYgKG1hcmdpbiA9PT0gJycgfHwgbWFyZ2luID09PSBgJHtjYWxjKDMgKiBwcm9wZXJ0aWVzLnNpemUpfXB4YCkge1xuICAgIGFjdHVhdG9yLnN0eWxlLm1hcmdpbkxlZnQgPSBgJHtjYWxjKDE3LjUgKiBwcm9wZXJ0aWVzLnNpemUpfXB4YDtcbiAgICB0b2dnbGVTd2l0Y2guc3R5bGUuYmFja2dyb3VuZCA9IHByb3BlcnRpZXMuYmFja2dyb3VuZC5hY3RpdmU7XG4gIH0gZWxzZSB7XG4gICAgYWN0dWF0b3Iuc3R5bGUubWFyZ2luTGVmdCA9IGAke2NhbGMoMyAqIHByb3BlcnRpZXMuc2l6ZSl9cHhgO1xuICAgIHRvZ2dsZVN3aXRjaC5zdHlsZS5iYWNrZ3JvdW5kID0gcHJvcGVydGllcy5iYWNrZ3JvdW5kLnRvZ2dsZVN3aXRjaDtcbiAgfVxufVxuXG4vLyBDaGVjayBhbmQgZml4IG1pc3NpbmcgcHJvcGVydGllc1xuZnVuY3Rpb24gcHJvY2Vzc1Byb3BlcnRpZXMocHJvcGVydGllcykge1xuICBjb25zdCBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBzaXplOiAxLjMsXG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgYWN0aXZlOiAnIzNhZicsXG4gICAgICBhY3R1YXRvcjogJyNmZmYnLFxuICAgICAgdG9nZ2xlU3dpdGNoOiAnI2FhYScsXG4gICAgfSxcbiAgfTtcblxuICBPYmplY3QuZnJlZXplKGRlZmF1bHRQcm9wZXJ0aWVzKTtcblxuICBpZiAoIXByb3BlcnRpZXMpIHtcbiAgICBwcm9wZXJ0aWVzID0gc3RydWN0dXJlZENsb25lKGRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocHJvcGVydGllcy5zaXplKSBwcm9wZXJ0aWVzLnNpemUgPSBjYWxjKHByb3BlcnRpZXMuc2l6ZSk7XG5cbiAgICBpZiAoIXByb3BlcnRpZXMuYmFja2dyb3VuZCkge1xuICAgICAgcHJvcGVydGllcy5iYWNrZ3JvdW5kID0gZGVmYXVsdFByb3BlcnRpZXMuYmFja2dyb3VuZDtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKFxuICAgICAgICBwcm9wZXJ0aWVzLmJhY2tncm91bmQsXG4gICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzLmJhY2tncm91bmRcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuLy8gUHJlY2lzaW9uIENhbGN1bGF0ZWQgdmFsdWVzIHRvIG9uZSBkZWNpbWFsIHBvaW50XG5mdW5jdGlvbiBjYWxjKHZhbHVlKSB7XG4gIGxldCByZXN1bHQgPSBgJHt2YWx1ZS50b0ZpeGVkKDEpfWA7XG5cbiAgaWYgKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0gPT09ICcwJykgcmV0dXJuIHBhcnNlSW50KHZhbHVlKTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBHZXQgU3dpdGNoIENTUyB3aXRoIGFuIGFkanVzdG1lbnQgaW4gdmFsdWVzXG5mdW5jdGlvbiBzd2l0Y2hDU1MoYmcsIHNpemUpIHtcbiAgcmV0dXJuIGBcXFxuICAgIGJhY2tncm91bmQ6ICR7Ymd9O1xuICAgIGJvcmRlci1yYWRpdXM6ICR7MTAgKiBzaXplfXB4O1xuICAgIGhlaWdodDogJHsxNiAqIHNpemV9cHg7XG4gICAgd2lkdGg6ICR7MzIgKiBzaXplfXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogJHs1ICogc2l6ZX1weDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjRzIGVhc2UtaW4tb3V0IC4zc2A7XG59XG5cbi8vIEdldCBBY3R1YXRvciBDU1Mgd2l0aCBhbiBhZGp1c3RtZW50IGluIHZhbHVlc1xuZnVuY3Rpb24gYWN0dWF0b3JDU1MoYmcsIHNpemUpIHtcbiAgcmV0dXJuIGBcXFxuICAgIGJvcmRlci1yYWRpdXM6ICR7MTIgKiBzaXplfXB4O1xuICAgIGJhY2tncm91bmQ6ICR7Ymd9O1xuICAgIG1hcmdpbjogJHtjYWxjKDMgKiBzaXplKX1weCAke2NhbGMoMyAqIHNpemUpfXB4O1xuICAgIGhlaWdodDogJHsxMCAqIHNpemV9cHg7XG4gICAgd2lkdGg6ICR7MTAgKiBzaXplfXB4O1xuICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IC42cyBlYXNlLWluLW91dCAuMXM7YDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBhY3RpdmF0ZSwgbmV3QnRuIH07XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIocXVlcnkpIHtcbiAgY29uc3QgcGllY2UgPSB7IDE6ICdmNTg4ZDg0MScsIDI6ICcxNDEzNTYyJyB9O1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uPycgK1xuICAgICAgICBga2V5PTdlMDU0MCR7cGllY2VbJzEnXX1mYjg1MiR7cGllY2VbJzInXX0zMjEwNCZxPSR7cXVlcnl9JmRheXM9M2AsXG4gICAgICB7IGNvcnM6IHRydWUgfVxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGlmIChkYXRhLmVycm9yID09IHVuZGVmaW5lZCkgcmV0dXJuIGRhdGE7XG5cbiAgICB0aHJvdyBkYXRhLmVycm9yO1xuICB9IGNhdGNoIChkYXRhKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGRhdGEpO1xuICB9XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWF0aGVyLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaWNvbnMvc2VhcmNoLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBXZWF0aGVyIERPTSBzdHlsZXNoZWV0Ki9cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBSb290IHN0eWxpbmdcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuOnJvb3Qge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgZml4ZWQgY2VudGVyL2NvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgLS1iYWNrZ3JvdW5kMTogI2ZmZjtcXG4gIC0tY29sb3I6ICMwMDA7XFxuICAtLWJvcmRlci1yYWRpdXM6IDAuNmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kOiAjZmZmNztcXG4gIGNvbG9yOiAjMzMzO1xcbiAgbWFyZ2luOiAwLjVlbTtcXG4gIHBhZGRpbmc6IDAuNGVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIEhlYWRlciBjb250ZW50IGFuZCBoZWFkZXIgZm9ybSBpbnB1dFxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjRlbTtcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gIG1hcmdpbjogMC4zZW0gMC4yZW0gMC4xZW07XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjhlbTtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggM3B4ICMzMzM5O1xcbn1cXG5cXG4udW5pdCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgY29sb3I6ICMzMzM7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMC40ZW0gMC42ZW0gMC40ZW0gMC40ZW07XFxufVxcblxcbi51bml0ID4gZGl2IHtcXG4gIG1hcmdpbjogMCAwLjhlbTtcXG59XFxuXFxuaGVhZGVyIGgxIHNwYW4ge1xcbiAgZm9udC1zaXplOiAxLjA1ZW07XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBnYXA6IDA7XFxuICBtYXJnaW46IDAuNWVtIDAuOGVtO1xcbiAgcGFkZGluZzogMC4xZW0gMC41ZW07XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgcGFkZGluZzogMC4yZW07XFxuICBmb250LXNpemU6IDEuMDZlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICM0NDQ7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5sb2NhdGlvbi1pbnB1dCB7XFxuICB3aWR0aDogMTIwcHg7XFxuICB0cmFuc2l0aW9uOiB3aWR0aCAuNXMgZWFzZS1pbi1vdXQgLjFzO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDA7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDAuMTZlbTtcXG59XFxuXFxuZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTsgIFxcbiAgd2lkdGg6IGNsYW1wKDEwMHB4LCAyNTBweCwgNDAwcHgpO1xcbn1cXG5cXG5mb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIHdpZHRoOiAxLjNlbTtcXG4gIGhlaWdodDogMS4zZW07XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIEVycm9yIHBvcHVwIG1lbnVcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmVycm9yIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiByZ2IoMjU1LCA5OSwgNzEpO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgOTksIDcxKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNmVtO1xcbiAgcGFkZGluZzogMC4xNWVtIDAuNWVtO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uZXJyb3IgLm1lc3NhZ2Uge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uY2xvc2UtZXJyb3ItYnRuIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogcmdiKDI1NSwgOTksIDcxKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZvbnQtc2l6ZTogMS42ZW07XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNsb3NlLWVycm9yLWJ0bjphY3RpdmUge1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIE1haW46ICB3ZWF0aGVyIGNvbnRlbnQgZGlzcGxheSBzdHlsaW5nXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG59XFxuXFxuaDQge1xcbiAgbWFyZ2luOiAwLjFlbTtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogTG9hZGluZyBhbmltYXRpb25cXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmxvYWRlciB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci13aWR0aDogNHB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogIzMzMyAjMzMzIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luOiAyLjNlbTtcXG4gIHdpZHRoOiAyZW07XFxuICBoZWlnaHQ6IDJlbTtcXG4gIGFuaW1hdGlvbjogc3BpbiAxLjVzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMEJBQTBCOztBQUcxQjs7bURBRW1EO0FBQ25EO0VBQ0UsZ0ZBQXdFO0VBQ3hFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsc0JBQXNCOztFQUV0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLE9BQU87RUFDUCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGlDQUFpQztBQUNuQzs7O0FBR0E7O21EQUVtRDtBQUNuRDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLE1BQU07RUFDTixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxvRUFBOEQ7RUFDOUQsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7OztBQUdBOzttREFFbUQ7QUFDbkQ7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiOzs7QUFHQTs7bURBRW1EO0FBQ25EO0VBQ0UsYUFBYTtFQUNiO3dCQUNzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtBQUNmOzs7QUFHQTs7bURBRW1EO0FBQ25EO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtFQUNWLFdBQVc7RUFDWCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogV2VhdGhlciBET00gc3R5bGVzaGVldCovXFxuQGltcG9ydCAnLi93ZWF0aGVyLmNzcyc7XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogUm9vdCBzdHlsaW5nXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbjpyb290IHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL2JhY2tncm91bmQuanBnJykgbm8tcmVwZWF0IGZpeGVkIGNlbnRlci9jb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIC0tYmFja2dyb3VuZDE6ICNmZmY7XFxuICAtLWNvbG9yOiAjMDAwO1xcbiAgLS1ib3JkZXItcmFkaXVzOiAwLjZlbTtcXG59XFxuXFxuYm9keSB7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZDogI2ZmZjc7XFxuICBjb2xvcjogIzMzMztcXG4gIG1hcmdpbjogMC41ZW07XFxuICBwYWRkaW5nOiAwLjRlbTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBIZWFkZXIgY29udGVudCBhbmQgaGVhZGVyIGZvcm0gaW5wdXRcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40ZW07XFxufVxcblxcbmhlYWRlciBoMSB7XFxuICBtYXJnaW46IDAuM2VtIDAuMmVtIDAuMWVtO1xcbiAgcGFkZGluZzogMC4yZW07XFxuICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS44ZW07XFxuICBjb2xvcjogIzMzMztcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDNweCAjMzMzOTtcXG59XFxuXFxuLnVuaXQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDAuNGVtIDAuNmVtIDAuNGVtIDAuNGVtO1xcbn1cXG5cXG4udW5pdCA+IGRpdiB7XFxuICBtYXJnaW46IDAgMC44ZW07XFxufVxcblxcbmhlYWRlciBoMSBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMS4wNWVtO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZ2FwOiAwO1xcbiAgbWFyZ2luOiAwLjVlbSAwLjhlbTtcXG4gIHBhZGRpbmc6IDAuMWVtIDAuNWVtO1xcbn1cXG5cXG5mb3JtIGlucHV0IHtcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbiAgZm9udC1zaXplOiAxLjA2ZW07XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjNDQ0O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ubG9jYXRpb24taW5wdXQge1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgdHJhbnNpdGlvbjogd2lkdGggLjVzIGVhc2UtaW4tb3V0IC4xcztcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDAwO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAwLjE2ZW07XFxufVxcblxcbmZvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7ICBcXG4gIHdpZHRoOiBjbGFtcCgxMDBweCwgMjUwcHgsIDQwMHB4KTtcXG59XFxuXFxuZm9ybSBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9pY29ucy9zZWFyY2guc3ZnJykgbm8tcmVwZWF0IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIHdpZHRoOiAxLjNlbTtcXG4gIGhlaWdodDogMS4zZW07XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIEVycm9yIHBvcHVwIG1lbnVcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmVycm9yIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiByZ2IoMjU1LCA5OSwgNzEpO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgOTksIDcxKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNmVtO1xcbiAgcGFkZGluZzogMC4xNWVtIDAuNWVtO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uZXJyb3IgLm1lc3NhZ2Uge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uY2xvc2UtZXJyb3ItYnRuIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogcmdiKDI1NSwgOTksIDcxKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZvbnQtc2l6ZTogMS42ZW07XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNsb3NlLWVycm9yLWJ0bjphY3RpdmUge1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIE1haW46ICB3ZWF0aGVyIGNvbnRlbnQgZGlzcGxheSBzdHlsaW5nXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG59XFxuXFxuaDQge1xcbiAgbWFyZ2luOiAwLjFlbTtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogTG9hZGluZyBhbmltYXRpb25cXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmxvYWRlciB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci13aWR0aDogNHB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogIzMzMyAjMzMzIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luOiAyLjNlbTtcXG4gIHdpZHRoOiAyZW07XFxuICBoZWlnaHQ6IDJlbTtcXG4gIGFuaW1hdGlvbjogc3BpbiAxLjVzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRvZGF5IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDNweCAjMzMzOTtcXG4gIG1hcmdpbjogMWVtO1xcbn1cXG5cXG4uY29uZGl0aW9uIGltZyB7XFxuICBoZWlnaHQ6IDdlbTtcXG4gIHdpZHRoOiA3ZW07XFxuICBiYWNrZ3JvdW5kOiAjMzMzMTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVlbTtcXG59XFxuXFxuLmNvbmRpdGlvbiB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuXFxuLnRvZGF5IC50ZW1wZXJhdHVyZSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiA0ZW07XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCA1cHggIzMzM2E7XFxufVxcblxcbi53aW5kID4gc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBnYXA6IDFlbTtcXG59XFxuXFxuLm90aGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC1yb3ctZ2FwOiAxZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDJlbTtcXG4gIGJhY2tncm91bmQ6ICMzMzMxO1xcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcbiAgYmFja2dyb3VuZDogIzMzMzE7XFxuICBwYWRkaW5nOiAxLjJlbSAxLjZlbTtcXG4gIG1hcmdpbjogMC44ZW07XFxuICBib3JkZXItcmFkaXVzOiAyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdCA+ICoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBnYXA6IDEuMmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3dlYXRoZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFNBQVM7RUFDVCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50b2RheSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAzcHggIzMzMzk7XFxuICBtYXJnaW46IDFlbTtcXG59XFxuXFxuLmNvbmRpdGlvbiBpbWcge1xcbiAgaGVpZ2h0OiA3ZW07XFxuICB3aWR0aDogN2VtO1xcbiAgYmFja2dyb3VuZDogIzMzMzE7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiA1ZW07XFxufVxcblxcbi5jb25kaXRpb24ge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbi50b2RheSAudGVtcGVyYXR1cmUge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogNGVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggNXB4ICMzMzNhO1xcbn1cXG5cXG4ud2luZCA+IHNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgZ2FwOiAxZW07XFxufVxcblxcbi5vdGhlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtcm93LWdhcDogMWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAyZW07XFxuICBiYWNrZ3JvdW5kOiAjMzMzMTtcXG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gIGJhY2tncm91bmQ6ICMzMzMxO1xcbiAgcGFkZGluZzogMS4yZW0gMS42ZW07XFxuICBtYXJnaW46IDAuOGVtO1xcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QgPiAqIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZ2FwOiAxLjJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiZXJyb3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlcnJvck1zZyIsIm1haW4iLCJzaG93RXJyb3IiLCJtZXNzYWdlIiwic3R5bGUiLCJ2aXNpYmlsaXR5IiwidGV4dENvbnRlbnQiLCJjbG9zZUVycm9yIiwic2hvd1dlYXRoZXIiLCJ3ZWF0aGVyRGF0YSIsInVuaXRzIiwiY2xlYXJXZWF0aGVyIiwiYXBwZW5kQ2hpbGQiLCJ0b2RheSIsImZvcmVjYXN0IiwidGVtcFVuaXQiLCJsb2FkaW5nIiwibG9hZGVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIndldGhlckRPTSIsImhlYWRpbmciLCJjaGlsZHJlbkRPTSIsImxvY2F0aW9uIiwiY29uZGl0aW9uIiwiY3VycmVudCIsInRlbXBlcmF0dXJlIiwid2luZCIsInNwZWVkVW5pdCIsIm90aGVyIiwiX2kiLCJfY2hpbGRyZW5ET00iLCJsZW5ndGgiLCJkb20iLCJmb3JlY2FzdERPTSIsImkiLCJmb3JlY2FzdGRheSIsImRheSIsImNvbmNhdCIsInRvVXBwZXJDYXNlIiwiaWNvbiIsInNyYyIsImRhdGUiLCJsb2NhdGlvbkRhdGEiLCJsb2NhdGlvbkRPTSIsIm5hbWUiLCJjb3VudHJ5IiwiY29uZGl0aW9uRGF0YSIsImNvbmRpdGlvbkRPTSIsInRleHQiLCJ0ZW1wZXJhdHVyZURPTSIsIndpbmRBbmdsZSIsIndpbmRfZGVncmVlIiwid2luZERpciIsIndpbmRfZGlyIiwid2luZFNwZWVkIiwid2luZEluZm8iLCJ3aW5kRE9NIiwiY29udGFpbmVyIiwidGl0bGUiLCJrZXlzIiwidmFsdWUiLCJ0b0xvd2VyQ2FzZSIsInNlY3Rpb24iLCJfdHlwZW9mIiwib2JqIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiZGVzYyIsIiRTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsIkRPTSIsImdldFdlYXRoZXIiLCJ0b2dnbGVTd2l0Y2giLCJsb2NhdGlvbklucHV0IiwicXVlcnlCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiX3JlZiIsIl9jYWxsZWUiLCJldmVudCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJ2YWxpZGl0eSIsInZhbHVlTWlzc2luZyIsInByZXZlbnREZWZhdWx0IiwiX3giLCJjbG9zZUVycm9yQnRuIiwid2VhdGhlclJlcG9ydCIsInF1ZXJ5IiwiZGF0YSIsInRlbXBDb252ZXJ0ZXIiLCJjdXJyZW50VGVtcCIsInRlbXBfYyIsInBhcnNlSW50IiwidGVtcF9mIiwicXVlcnlTZWxlY3RvckFsbCIsInRlbXAiLCJzdG9wUHJvcGFnYXRpb24iLCJzcGVlZENvbnZlcnRlciIsImd1c3QiLCJhY3RpdmF0ZSIsIm5ld0J0biIsInByb3BlcnRpZXMiLCJwcm9jZXNzUHJvcGVydGllcyIsImNzc1RleHQiLCJzd2l0Y2hDU1MiLCJiYWNrZ3JvdW5kIiwic2l6ZSIsImFjdHVhdG9yIiwiYWN0dWF0b3JDU1MiLCJhbmltYXRlIiwidGFyZ2V0Iiwic3dpdGNoZXMiLCJfbG9vcCIsIm1hcmdpbiIsIm1hcmdpbkxlZnQiLCJjYWxjIiwiYWN0aXZlIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJmcmVlemUiLCJzdHJ1Y3R1cmVkQ2xvbmUiLCJ0b0ZpeGVkIiwiYmciLCJfZ2V0V2VhdGhlciIsInBpZWNlIiwicmVzcG9uc2UiLCJmZXRjaCIsImNvcnMiLCJqc29uIiwidDAiXSwic291cmNlUm9vdCI6IiJ9