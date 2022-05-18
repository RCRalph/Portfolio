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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/flickity/dist/flickity.min.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/flickity/dist/flickity.min.css ***!
  \*******************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*! Flickity v2.3.0\\nhttps://flickity.metafizzy.co\\n---------------------------------------------- */\\n.flickity-enabled{position:relative}.flickity-enabled:focus{outline:0}.flickity-viewport{overflow:hidden;position:relative;height:100%}.flickity-slider{position:absolute;width:100%;height:100%}.flickity-enabled.is-draggable{-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.flickity-enabled.is-draggable .flickity-viewport{cursor:move;cursor:-webkit-grab;cursor:grab}.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down{cursor:-webkit-grabbing;cursor:grabbing}.flickity-button{position:absolute;background:hsla(0,0%,100%,.75);border:none;color:#333}.flickity-button:hover{background:#fff;cursor:pointer}.flickity-button:focus{outline:0;box-shadow:0 0 0 5px #19f}.flickity-button:active{opacity:.6}.flickity-button:disabled{opacity:.3;cursor:auto;pointer-events:none}.flickity-button-icon{fill:currentColor}.flickity-prev-next-button{top:50%;width:44px;height:44px;border-radius:50%;transform:translateY(-50%)}.flickity-prev-next-button.previous{left:10px}.flickity-prev-next-button.next{right:10px}.flickity-rtl .flickity-prev-next-button.previous{left:auto;right:10px}.flickity-rtl .flickity-prev-next-button.next{right:auto;left:10px}.flickity-prev-next-button .flickity-button-icon{position:absolute;left:20%;top:20%;width:60%;height:60%}.flickity-page-dots{position:absolute;width:100%;bottom:-25px;padding:0;margin:0;list-style:none;text-align:center;line-height:1}.flickity-rtl .flickity-page-dots{direction:rtl}.flickity-page-dots .dot{display:inline-block;width:10px;height:10px;margin:0 8px;background:#333;border-radius:50%;opacity:.25;cursor:pointer}.flickity-page-dots .dot.is-selected{opacity:1}\", \"\"]);\n// Exports\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://portfolio/./node_modules/flickity/dist/flickity.min.css?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2%5B0%5D.rules%5B0%5D.use%5B1%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./resources/scss/main.scss":
/*!**********************************!*\
  !*** ./resources/scss/main.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./resources/scss/main.scss?");

/***/ }),

/***/ "./node_modules/flickity/dist/flickity.min.css":
/*!*****************************************************!*\
  !*** ./node_modules/flickity/dist/flickity.min.css ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./flickity.min.css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[1]!./node_modules/flickity/dist/flickity.min.css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"6120053a\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://portfolio/./node_modules/flickity/dist/flickity.min.css?");

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addStylesClient)\n/* harmony export */ });\n/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ \"./node_modules/vue-style-loader/lib/listToStyles.js\");\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n  Modified by Evan You @yyx990803\n*/\n\n\n\nvar hasDocument = typeof document !== 'undefined'\n\nif (typeof DEBUG !== 'undefined' && DEBUG) {\n  if (!hasDocument) {\n    throw new Error(\n    'vue-style-loader cannot be used in a non-browser environment. ' +\n    \"Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.\"\n  ) }\n}\n\n/*\ntype StyleObject = {\n  id: number;\n  parts: Array<StyleObjectPart>\n}\n\ntype StyleObjectPart = {\n  css: string;\n  media: string;\n  sourceMap: ?string\n}\n*/\n\nvar stylesInDom = {/*\n  [id: number]: {\n    id: number,\n    refs: number,\n    parts: Array<(obj?: StyleObjectPart) => void>\n  }\n*/}\n\nvar head = hasDocument && (document.head || document.getElementsByTagName('head')[0])\nvar singletonElement = null\nvar singletonCounter = 0\nvar isProduction = false\nvar noop = function () {}\nvar options = null\nvar ssrIdKey = 'data-vue-ssr-id'\n\n// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n// tags it will allow on a page\nvar isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase())\n\nfunction addStylesClient (parentId, list, _isProduction, _options) {\n  isProduction = _isProduction\n\n  options = _options || {}\n\n  var styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parentId, list)\n  addStylesToDom(styles)\n\n  return function update (newList) {\n    var mayRemove = []\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i]\n      var domStyle = stylesInDom[item.id]\n      domStyle.refs--\n      mayRemove.push(domStyle)\n    }\n    if (newList) {\n      styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parentId, newList)\n      addStylesToDom(styles)\n    } else {\n      styles = []\n    }\n    for (var i = 0; i < mayRemove.length; i++) {\n      var domStyle = mayRemove[i]\n      if (domStyle.refs === 0) {\n        for (var j = 0; j < domStyle.parts.length; j++) {\n          domStyle.parts[j]()\n        }\n        delete stylesInDom[domStyle.id]\n      }\n    }\n  }\n}\n\nfunction addStylesToDom (styles /* Array<StyleObject> */) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i]\n    var domStyle = stylesInDom[item.id]\n    if (domStyle) {\n      domStyle.refs++\n      for (var j = 0; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j])\n      }\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j]))\n      }\n      if (domStyle.parts.length > item.parts.length) {\n        domStyle.parts.length = item.parts.length\n      }\n    } else {\n      var parts = []\n      for (var j = 0; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j]))\n      }\n      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }\n    }\n  }\n}\n\nfunction createStyleElement () {\n  var styleElement = document.createElement('style')\n  styleElement.type = 'text/css'\n  head.appendChild(styleElement)\n  return styleElement\n}\n\nfunction addStyle (obj /* StyleObjectPart */) {\n  var update, remove\n  var styleElement = document.querySelector('style[' + ssrIdKey + '~=\"' + obj.id + '\"]')\n\n  if (styleElement) {\n    if (isProduction) {\n      // has SSR styles and in production mode.\n      // simply do nothing.\n      return noop\n    } else {\n      // has SSR styles but in dev mode.\n      // for some reason Chrome can't handle source map in server-rendered\n      // style tags - source maps in <style> only works if the style tag is\n      // created and inserted dynamically. So we remove the server rendered\n      // styles and inject new ones.\n      styleElement.parentNode.removeChild(styleElement)\n    }\n  }\n\n  if (isOldIE) {\n    // use singleton mode for IE9.\n    var styleIndex = singletonCounter++\n    styleElement = singletonElement || (singletonElement = createStyleElement())\n    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)\n    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)\n  } else {\n    // use multi-style-tag mode in all other cases\n    styleElement = createStyleElement()\n    update = applyToTag.bind(null, styleElement)\n    remove = function () {\n      styleElement.parentNode.removeChild(styleElement)\n    }\n  }\n\n  update(obj)\n\n  return function updateStyle (newObj /* StyleObjectPart */) {\n    if (newObj) {\n      if (newObj.css === obj.css &&\n          newObj.media === obj.media &&\n          newObj.sourceMap === obj.sourceMap) {\n        return\n      }\n      update(obj = newObj)\n    } else {\n      remove()\n    }\n  }\n}\n\nvar replaceText = (function () {\n  var textStore = []\n\n  return function (index, replacement) {\n    textStore[index] = replacement\n    return textStore.filter(Boolean).join('\\n')\n  }\n})()\n\nfunction applyToSingletonTag (styleElement, index, remove, obj) {\n  var css = remove ? '' : obj.css\n\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = replaceText(index, css)\n  } else {\n    var cssNode = document.createTextNode(css)\n    var childNodes = styleElement.childNodes\n    if (childNodes[index]) styleElement.removeChild(childNodes[index])\n    if (childNodes.length) {\n      styleElement.insertBefore(cssNode, childNodes[index])\n    } else {\n      styleElement.appendChild(cssNode)\n    }\n  }\n}\n\nfunction applyToTag (styleElement, obj) {\n  var css = obj.css\n  var media = obj.media\n  var sourceMap = obj.sourceMap\n\n  if (media) {\n    styleElement.setAttribute('media', media)\n  }\n  if (options.ssrId) {\n    styleElement.setAttribute(ssrIdKey, obj.id)\n  }\n\n  if (sourceMap) {\n    // https://developer.chrome.com/devtools/docs/javascript-debugging\n    // this makes source maps inside style tags work properly in Chrome\n    css += '\\n/*# sourceURL=' + sourceMap.sources[0] + ' */'\n    // http://stackoverflow.com/a/26603875\n    css += '\\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'\n  }\n\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild)\n    }\n    styleElement.appendChild(document.createTextNode(css))\n  }\n}\n\n\n//# sourceURL=webpack://portfolio/./node_modules/vue-style-loader/lib/addStylesClient.js?");

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ listToStyles)\n/* harmony export */ });\n/**\n * Translates the list format produced by css-loader into something\n * easier to manipulate.\n */\nfunction listToStyles (parentId, list) {\n  var styles = []\n  var newStyles = {}\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i]\n    var id = item[0]\n    var css = item[1]\n    var media = item[2]\n    var sourceMap = item[3]\n    var part = {\n      id: parentId + ':' + i,\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    }\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = { id: id, parts: [part] })\n    } else {\n      newStyles[id].parts.push(part)\n    }\n  }\n  return styles\n}\n\n\n//# sourceURL=webpack://portfolio/./node_modules/vue-style-loader/lib/listToStyles.js?");

/***/ }),

/***/ "./resources/js/functions/darkmode-switcher.js":
/*!*****************************************************!*\
  !*** ./resources/js/functions/darkmode-switcher.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function darkmodeSwitcher() {\n\tconst switchDarkmode = () => {\n\t\tconst darkmodeSwitchers = [\n\t\t\tdocument.getElementById(\"darkmode-switcher\"),\n\t\t\tdocument.getElementById(\"darkmode-switcher-dropdown\")\n\t\t];\n\t\tdocument.body.classList.toggle(\"darkmode\");\n\n\t\tconst icon = darkmodeSwitchers[0].children[0]\n\t\t\t.attributes[\"data-icon\"].value == \"moon\" ? \"sun\" : \"moon\";\n\n\t\tdarkmodeSwitchers.forEach(item => {\n\t\t\titem.classList.toggle(\"light\");\n\t\t\titem.children[0].attributes[\"data-icon\"].value = icon;\n\t\t});\n\t\t\n\t\tconst expirationDate = new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000);\n\t\tconst value = !document.body.classList.contains(\"darkmode\");\n\t\tdocument.cookie = `lightmode=${value};expires=${expirationDate};SameSite=Strict;path=/`\n\t};\n\n\tdocument.getElementById(\"darkmode-switcher\")\n\t\t.addEventListener(\n\t\t\t\"click\",\n\t\t\tswitchDarkmode\n\t\t);\n\n\tdocument.getElementById(\"darkmode-switcher-dropdown\")\n\t\t.addEventListener(\n\t\t\t\"click\",\n\t\t\tswitchDarkmode\n\t);\n}\n\nexports.darkmodeSwitcher = darkmodeSwitcher;\n\n//# sourceURL=webpack://portfolio/./resources/js/functions/darkmode-switcher.js?");

/***/ }),

/***/ "./resources/js/functions/dropdown-menu.js":
/*!*************************************************!*\
  !*** ./resources/js/functions/dropdown-menu.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function dropdownMenu() {\n\tconst bars = document.getElementById(\"burger-bars\");\n\tconst menu = document.getElementById(\"menu-drop\");\n\n\tconst switchMenuDropOpenClosed = () => {\n\t\tmenu.classList.toggle(\"open\");\n\t\tbars.classList.toggle(\"open\");\n\t}\n\n\tdocument.getElementById(\"burger\")\n\t\t.addEventListener(\"click\", switchMenuDropOpenClosed);\n\n\tif (window.location.pathname == \"/\") {\n\t\tdocument.getElementById(\"about-me-tab-click\")\n\t\t\t.addEventListener(\"click\", switchMenuDropOpenClosed);\n\t}\n}\n\nexports.dropdownMenu = dropdownMenu;\n\n//# sourceURL=webpack://portfolio/./resources/js/functions/dropdown-menu.js?");

/***/ }),

/***/ "./resources/js/functions/modal.js":
/*!*****************************************!*\
  !*** ./resources/js/functions/modal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function modal() {\n\tconst popupDownbar = document.getElementsByClassName(\"popup-downbar\");\n\n\tif (popupDownbar.length) {\n\t\tconst popup = document.getElementsByClassName(\"popup\")[0];\n\n\t\tdocument.getElementById(\"modal-button\")\n\t\t\t.addEventListener(\"click\", () => {\n\t\t\t\tpopup.classList.add(\"hidden\");\n\n\t\t\t\tsetTimeout(() => {\n\t\t\t\t\tdocument\n\t\t\t\t\t\t.getElementById(\"modals\")\n\t\t\t\t\t\t.parentNode\n\t\t\t\t\t\t.removeChild(document.getElementById(\"modals\"));\n\t\t\t\t}, 1000)\n\t\t\t})\n\n\t\tpopupDownbar[0].classList.add(\"width-shrink\");\n\t\tsetTimeout(() => {\n\t\t\tif (document.getElementsByClassName(\"popup\").length && !popup.classList.contains(\"hidden\")) {\n\t\t\t\tpopup.classList.add(\"hidden\");\n\n\t\t\t\tsetTimeout(() => {\n\t\t\t\t\tpopup.parentNode.removeChild(popup);\n\t\t\t\t\tdocument.getElementById(\"modals\").style.display = \"none\";\n\t\t\t\t}, 1000);\n\t\t\t}\n\t\t}, 5000);\n\n\n\t}\n}\n\nexports.modal = modal;\n\n//# sourceURL=webpack://portfolio/./resources/js/functions/modal.js?");

/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./resources/scss/main.scss\");\n/* harmony import */ var _json_particles_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json/particles.json */ \"./resources/json/particles.json\");\n/* harmony import */ var flickity_dist_flickity_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flickity/dist/flickity.min.css */ \"./node_modules/flickity/dist/flickity.min.css\");\n/* harmony import */ var flickity_dist_flickity_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flickity_dist_flickity_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _functions_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/dropdown-menu.js */ \"./resources/js/functions/dropdown-menu.js\");\n/* harmony import */ var _functions_darkmode_switcher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/darkmode-switcher.js */ \"./resources/js/functions/darkmode-switcher.js\");\n/* harmony import */ var _functions_modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/modal.js */ \"./resources/js/functions/modal.js\");\n\n\n\n\n\n\n\n\n(0,_functions_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_3__.dropdownMenu)();\n(0,_functions_darkmode_switcher_js__WEBPACK_IMPORTED_MODULE_4__.darkmodeSwitcher)();\n\n// Particles.js\nif (document.getElementById(\"particles-js\")) {\n\tparticlesJS.load(\"particles-js\", \"/particles.json\");\n}\n\n(0,_functions_modal_js__WEBPACK_IMPORTED_MODULE_5__.modal)();\n\n//# sourceURL=webpack://portfolio/./resources/js/main.js?");

/***/ }),

/***/ "./resources/json/particles.json":
/*!***************************************!*\
  !*** ./resources/json/particles.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"particles\":{\"number\":{\"value\":80,\"density\":{\"enable\":true,\"value_area\":800}},\"color\":{\"value\":\"#00b8ff\"},\"shape\":{\"type\":\"circle\",\"stroke\":{\"width\":0,\"color\":\"#000000\"},\"polygon\":{\"nb_sides\":5},\"image\":{\"src\":\"img/github.svg\",\"width\":100,\"height\":100}},\"opacity\":{\"value\":0.49717086105258135,\"random\":false,\"anim\":{\"enable\":false,\"speed\":1,\"opacity_min\":0.1,\"sync\":false}},\"size\":{\"value\":10,\"random\":true,\"anim\":{\"enable\":true,\"speed\":50,\"size_min\":1,\"sync\":false}},\"line_linked\":{\"enable\":false,\"distance\":150,\"color\":\"#ffffff\",\"opacity\":0.4,\"width\":1},\"move\":{\"enable\":true,\"speed\":10,\"direction\":\"none\",\"random\":true,\"straight\":false,\"out_mode\":\"out\",\"bounce\":false,\"attract\":{\"enable\":false,\"rotateX\":600,\"rotateY\":1200}}},\"interactivity\":{\"detect_on\":\"canvas\",\"events\":{\"onhover\":{\"enable\":true,\"mode\":\"repulse\"},\"onclick\":{\"enable\":true,\"mode\":\"push\"},\"resize\":true},\"modes\":{\"grab\":{\"distance\":400,\"line_linked\":{\"opacity\":1}},\"bubble\":{\"distance\":400,\"size\":40,\"duration\":2,\"opacity\":8,\"speed\":3},\"repulse\":{\"distance\":200,\"duration\":0.4},\"push\":{\"particles_nb\":4},\"remove\":{\"particles_nb\":2}}},\"retina_detect\":true}');\n\n//# sourceURL=webpack://portfolio/./resources/json/particles.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0,
/******/ 			"style": 0
/******/ 		};
/******/ 		
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./resources/js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;