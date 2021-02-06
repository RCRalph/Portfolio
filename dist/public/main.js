/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/img/favicon.ico":
/*!***********************************!*\
  !*** ./resources/img/favicon.ico ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"public/favicon.ico\");\n\n//# sourceURL=webpack://portfolio/./resources/img/favicon.ico?");

/***/ }),

/***/ "./resources/img/logo.png":
/*!********************************!*\
  !*** ./resources/img/logo.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"public/img/logo.png\");\n\n//# sourceURL=webpack://portfolio/./resources/img/logo.png?");

/***/ }),

/***/ "./resources/scss/main.scss":
/*!**********************************!*\
  !*** ./resources/scss/main.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./resources/scss/main.scss?");

/***/ }),

/***/ "./resources/js/functions/darkmode-switcher.js":
/*!*****************************************************!*\
  !*** ./resources/js/functions/darkmode-switcher.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function darkmodeSwitcher() {\r\n\tconst switchDarkmode = () => {\r\n\t\tconst darkmodeSwitchers = [\r\n\t\t\tdocument.getElementById(\"darkmode-switcher\"),\r\n\t\t\tdocument.getElementById(\"darkmode-switcher-dropdown\")\r\n\t\t];\r\n\t\tdocument.body.classList.toggle(\"darkmode\");\r\n\r\n\t\tconst icon = darkmodeSwitchers[0].children[0]\r\n\t\t\t.attributes[\"data-icon\"].value == \"moon\" ? \"sun\" : \"moon\";\r\n\r\n\t\tdarkmodeSwitchers.forEach(item => {\r\n\t\t\titem.classList.toggle(\"light\");\r\n\t\t\titem.children[0].attributes[\"data-icon\"].value = icon;\r\n\t\t});\r\n\t\t\r\n\t\tconst expirationDate = new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000);\r\n\t\tconst value = !document.body.classList.contains(\"darkmode\");\r\n\t\tdocument.cookie = `lightmode=${value};expires=${expirationDate};SameSite=Strict`\r\n\t};\r\n\r\n\tdocument.getElementById(\"darkmode-switcher\")\r\n\t\t.addEventListener(\r\n\t\t\t\"click\",\r\n\t\t\tswitchDarkmode\r\n\t\t);\r\n\r\n\tdocument.getElementById(\"darkmode-switcher-dropdown\")\r\n\t\t.addEventListener(\r\n\t\t\t\"click\",\r\n\t\t\tswitchDarkmode\r\n\t);\r\n}\r\n\r\nexports.darkmodeSwitcher = darkmodeSwitcher;\n\n//# sourceURL=webpack://portfolio/./resources/js/functions/darkmode-switcher.js?");

/***/ }),

/***/ "./resources/js/functions/dropdown-menu.js":
/*!*************************************************!*\
  !*** ./resources/js/functions/dropdown-menu.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function dropdownMenu() {\r\n\tconst bars = document.getElementById(\"burger-bars\");\r\n\tconst menu = document.getElementById(\"menu-drop\");\r\n\r\n\tconst switchMenuDropOpenClosed = () => {\r\n\t\tmenu.classList.toggle(\"open\");\r\n\t\tbars.classList.toggle(\"open\");\r\n\t}\r\n\r\n\tdocument.getElementById(\"burger\")\r\n\t\t.addEventListener(\"click\", switchMenuDropOpenClosed);\r\n\r\n\tif (window.location.pathname == \"/\") {\r\n\t\tdocument.getElementById(\"about-me-tab-click\")\r\n\t\t\t.addEventListener(\"click\", switchMenuDropOpenClosed);\r\n\t}\r\n}\r\n\r\nexports.dropdownMenu = dropdownMenu;\n\n//# sourceURL=webpack://portfolio/./resources/js/functions/dropdown-menu.js?");

/***/ }),

/***/ "./resources/js/functions/modal.js":
/*!*****************************************!*\
  !*** ./resources/js/functions/modal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function modal() {\r\n\tconst popupDownbar = document.getElementsByClassName(\"popup-downbar\");\r\n\r\n\tif (popupDownbar.length) {\r\n\t\tconst popup = document.getElementsByClassName(\"popup\")[0];\r\n\r\n\t\tdocument.getElementById(\"modal-button\")\r\n\t\t\t.addEventListener(\"click\", () => {\r\n\t\t\t\tpopup.classList.add(\"hidden\");\r\n\r\n\t\t\t\tsetTimeout(() => {\r\n\t\t\t\t\tdocument\r\n\t\t\t\t\t\t.getElementById(\"modals\")\r\n\t\t\t\t\t\t.parentNode\r\n\t\t\t\t\t\t.removeChild(document.getElementById(\"modals\"));\r\n\t\t\t\t}, 1000)\r\n\t\t\t})\r\n\r\n\t\tpopupDownbar[0].classList.add(\"width-shrink\");\r\n\t\tsetTimeout(() => {\r\n\t\t\tif (document.getElementsByClassName(\"popup\").length && !popup.classList.contains(\"hidden\")) {\r\n\t\t\t\tpopup.classList.add(\"hidden\");\r\n\r\n\t\t\t\tsetTimeout(() => {\r\n\t\t\t\t\tpopup.parentNode.removeChild(popup);\r\n\t\t\t\t}, 1000);\r\n\t\t\t}\r\n\t\t}, 5000);\r\n\t}\r\n}\r\n\r\nexports.modal = modal;\n\n//# sourceURL=webpack://portfolio/./resources/js/functions/modal.js?");

/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./resources/scss/main.scss\");\n/* harmony import */ var _img_favicon_ico__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/favicon.ico */ \"./resources/img/favicon.ico\");\n/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/logo.png */ \"./resources/img/logo.png\");\n/* harmony import */ var _json_particles_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../json/particles.json */ \"./resources/json/particles.json\");\n/* harmony import */ var _functions_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/dropdown-menu.js */ \"./resources/js/functions/dropdown-menu.js\");\n/* harmony import */ var _functions_darkmode_switcher_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/darkmode-switcher.js */ \"./resources/js/functions/darkmode-switcher.js\");\n/* harmony import */ var _functions_modal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/modal.js */ \"./resources/js/functions/modal.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_functions_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_4__.dropdownMenu)();\r\n(0,_functions_darkmode_switcher_js__WEBPACK_IMPORTED_MODULE_5__.darkmodeSwitcher)();\r\n\r\n// Particles.js\r\nif (document.getElementById(\"particles-js\")) {\r\n\tparticlesJS.load(\"particles-js\", \"particles.json\");\r\n}\r\n\r\n(0,_functions_modal_js__WEBPACK_IMPORTED_MODULE_6__.modal)();\n\n//# sourceURL=webpack://portfolio/./resources/js/main.js?");

/***/ }),

/***/ "./resources/json/particles.json":
/*!***************************************!*\
  !*** ./resources/json/particles.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse(\"{\\\"particles\\\":{\\\"number\\\":{\\\"value\\\":80,\\\"density\\\":{\\\"enable\\\":true,\\\"value_area\\\":800}},\\\"color\\\":{\\\"value\\\":\\\"#00b8ff\\\"},\\\"shape\\\":{\\\"type\\\":\\\"circle\\\",\\\"stroke\\\":{\\\"width\\\":0,\\\"color\\\":\\\"#000000\\\"},\\\"polygon\\\":{\\\"nb_sides\\\":5},\\\"image\\\":{\\\"src\\\":\\\"img/github.svg\\\",\\\"width\\\":100,\\\"height\\\":100}},\\\"opacity\\\":{\\\"value\\\":0.49717086105258135,\\\"random\\\":false,\\\"anim\\\":{\\\"enable\\\":false,\\\"speed\\\":1,\\\"opacity_min\\\":0.1,\\\"sync\\\":false}},\\\"size\\\":{\\\"value\\\":10,\\\"random\\\":true,\\\"anim\\\":{\\\"enable\\\":true,\\\"speed\\\":50,\\\"size_min\\\":1,\\\"sync\\\":false}},\\\"line_linked\\\":{\\\"enable\\\":false,\\\"distance\\\":150,\\\"color\\\":\\\"#ffffff\\\",\\\"opacity\\\":0.4,\\\"width\\\":1},\\\"move\\\":{\\\"enable\\\":true,\\\"speed\\\":10,\\\"direction\\\":\\\"none\\\",\\\"random\\\":true,\\\"straight\\\":false,\\\"out_mode\\\":\\\"out\\\",\\\"bounce\\\":false,\\\"attract\\\":{\\\"enable\\\":false,\\\"rotateX\\\":600,\\\"rotateY\\\":1200}}},\\\"interactivity\\\":{\\\"detect_on\\\":\\\"canvas\\\",\\\"events\\\":{\\\"onhover\\\":{\\\"enable\\\":true,\\\"mode\\\":\\\"repulse\\\"},\\\"onclick\\\":{\\\"enable\\\":true,\\\"mode\\\":\\\"push\\\"},\\\"resize\\\":true},\\\"modes\\\":{\\\"grab\\\":{\\\"distance\\\":400,\\\"line_linked\\\":{\\\"opacity\\\":1}},\\\"bubble\\\":{\\\"distance\\\":400,\\\"size\\\":40,\\\"duration\\\":2,\\\"opacity\\\":8,\\\"speed\\\":3},\\\"repulse\\\":{\\\"distance\\\":200,\\\"duration\\\":0.4},\\\"push\\\":{\\\"particles_nb\\\":4},\\\"remove\\\":{\\\"particles_nb\\\":2}}},\\\"retina_detect\\\":true}\");\n\n//# sourceURL=webpack://portfolio/./resources/json/particles.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./resources/js/main.js"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	__webpack_require__.x();
/******/ })()
;