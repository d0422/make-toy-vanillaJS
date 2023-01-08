/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Block.js":
/*!**********************!*\
  !*** ./src/Block.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dom */ \"./src/Dom.js\");\n\r\n\r\nclass Block {\r\n  constructor(main) {\r\n    const newBlock = new _Dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n      'input',\r\n      'block',\r\n      '명령어 사용 시 \"/\"를 입력하세요'\r\n    );\r\n    newBlock.focus();\r\n    main.append(newBlock);\r\n\r\n    newBlock.addEventListener('keydown', (event) => {\r\n      if (event.key === 'Enter') {\r\n        newBlock.placeholder = '';\r\n        newBlock.onblur();\r\n        new Block(main);\r\n      }\r\n      if (event.key === 'Backspace' && newBlock.value === '') {\r\n        main.remove(newBlock);\r\n        if (main.childElementCount != 2) {\r\n          main.lastChild.placeholder = '명령어 사용 시 \" / \"를 입력하세요';\r\n        }\r\n        setTimeout(() => main.lastChild.focus(), 0);\r\n      }\r\n      if (event.key === '/') {\r\n        console.log('/눌러짐');\r\n      }\r\n      if (event.key === 'ArrowUp') {\r\n        newBlock.placeholder = '';\r\n        setTimeout(() => {\r\n          newBlock.previousSibling.focus();\r\n          newBlock.previousSibling.placeholder =\r\n            '명령어 사용 시 \" / \"를 입력하세요';\r\n        }, 0);\r\n      }\r\n      if (event.key === 'ArrowDown') {\r\n        if (newBlock.nextSibling) {\r\n          newBlock.placeholder = '';\r\n          setTimeout(() => {\r\n            newBlock.nextSibling.focus();\r\n            newBlock.nextSibling.placeholder =\r\n              '명령어 사용 시 \" / \"를 입력하세요';\r\n          }, 0);\r\n        }\r\n      }\r\n    });\r\n    newBlock.addEventListener('keyup', (event) => {\r\n      if (event.key === ' ' && newBlock.value === '# ') {\r\n        newBlock.addClass('h1');\r\n        newBlock.value = '';\r\n        newBlock.placeholder = '제목1';\r\n      }\r\n      if (event.key === ' ' && newBlock.value === '## ') {\r\n        newBlock.addClass('h2');\r\n        newBlock.value = '';\r\n        newBlock.placeholder = '제목2';\r\n      }\r\n      if (event.key === ' ' && newBlock.value === '### ') {\r\n        newBlock.addClass('h3');\r\n        newBlock.value = '';\r\n        newBlock.placeholder = '제목3';\r\n      }\r\n    });\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Block);\r\n\n\n//# sourceURL=webpack://notion/./src/Block.js?");

/***/ }),

/***/ "./src/Dom.js":
/*!********************!*\
  !*** ./src/Dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Dom {\r\n  constructor(elementType, className, innerHTML) {\r\n    this.element = document.createElement(elementType);\r\n    if (innerHTML !== undefined) {\r\n      if (elementType === 'input') {\r\n        this.element.placeholder = innerHTML;\r\n      } else {\r\n        this.element.innerHTML = innerHTML;\r\n      }\r\n    }\r\n    if (className !== undefined) this.element.classList.add(className);\r\n  }\r\n  get firstChild() {\r\n    return this.element.firstChild;\r\n  }\r\n  get lastChild() {\r\n    return this.element.lastChild;\r\n  }\r\n\r\n  get value() {\r\n    return this.element.value;\r\n  }\r\n  set value(inputValue) {\r\n    this.element.value = inputValue;\r\n  }\r\n\r\n  get placeholder() {\r\n    return this.element.placeholder;\r\n  }\r\n  set placeholder(inputValue) {\r\n    this.element.placeholder = inputValue;\r\n  }\r\n\r\n  get innerHTML() {\r\n    return this.element.innerHTML;\r\n  }\r\n  set innerHTML(inputValue) {\r\n    this.element.innerHTML = inputValue;\r\n  }\r\n  get childElementCount() {\r\n    return this.element.childElementCount;\r\n  }\r\n  get previousSibling() {\r\n    return this.element.previousSibling;\r\n  }\r\n  get nextSibling() {\r\n    return this.element.nextSibling;\r\n  }\r\n  append(domInstance) {\r\n    this.element.appendChild(domInstance.element);\r\n  }\r\n  remove(domInstance) {\r\n    this.element.removeChild(domInstance.element);\r\n  }\r\n  addEventListener(event, func) {\r\n    this.element.addEventListener(event, func);\r\n  }\r\n  focus() {\r\n    setTimeout(() => this.element.focus(), 0);\r\n  }\r\n  onblur() {\r\n    setTimeout(() => this.element.blur(), 0);\r\n  }\r\n  hasChildNodes() {\r\n    return this.element.hasChildNodes();\r\n  }\r\n  addClass(className) {\r\n    this.element.classList.add(className);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dom);\r\n\n\n//# sourceURL=webpack://notion/./src/Dom.js?");

/***/ }),

/***/ "./src/List.js":
/*!*********************!*\
  !*** ./src/List.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dom */ \"./src/Dom.js\");\n\r\n\r\nclass List {\r\n  constructor() {\r\n    const newPageList = new _Dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('div', 'newPageList');\r\n    const newIcon = new _Dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('div', 'clickableDark', '📄');\r\n    const newToggle = new _Dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('div', 'clickableDark', '>');\r\n    const newText = new _Dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('div', 'newText', '제목없음');\r\n\r\n    newPageList.append(newToggle);\r\n    newPageList.append(newIcon);\r\n    newPageList.append(newText);\r\n\r\n    newIcon.addClass('newText');\r\n\r\n    const nav = document.querySelector('nav');\r\n    nav.appendChild(newPageList.element);\r\n    this.element = newPageList.element;\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);\r\n\n\n//# sourceURL=webpack://notion/./src/List.js?");

/***/ }),

/***/ "./src/Page.js":
/*!*********************!*\
  !*** ./src/Page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Block */ \"./src/Block.js\");\n/* harmony import */ var _Dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dom */ \"./src/Dom.js\");\n\r\n\r\n\r\nclass Page {\r\n  constructor() {\r\n    this.pageInit();\r\n\r\n    this.newTitle.addEventListener('keydown', (event) => {\r\n      if (event.key === 'Enter') {\r\n        console.log(this.newPage.childElementCount);\r\n        if (this.newPage.childElementCount != 2) {\r\n          this.destroyTemplate();\r\n        }\r\n        this.newTitle.onblur();\r\n        new _Block__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.newPage);\r\n      }\r\n    });\r\n  }\r\n  pageInit() {\r\n    this.iconBar = new _Dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('div', 'iconBar', '☺ 아이콘 추가');\r\n    this.mainUI = new _Dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('div', 'main');\r\n    document.body.appendChild(this.mainUI.element);\r\n    this.newPage = new _Dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('div', 'newPage');\r\n    this.newTitle = new _Dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('input', 'title', '제목없음');\r\n    this.newPage.append(this.iconBar);\r\n    this.newPage.append(this.newTitle);\r\n    this.introduce = new _Dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n      'div',\r\n      'introduce',\r\n      'Enter 키를 눌러 빈 페이지로 시작하거나, ↕키로 원하는 템플릿을 선택하세요.'\r\n    );\r\n    this.noIconTemplate = new _Dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('div', 'template', '📄 빈 페이지');\r\n    this.iconTemplate = new _Dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n      'div',\r\n      'template',\r\n      '📑 아이콘이 있는 빈 페이지'\r\n    );\r\n    this.newPage.append(this.introduce);\r\n    this.newPage.append(this.iconTemplate);\r\n    this.newPage.append(this.noIconTemplate);\r\n\r\n    this.noIconTemplate.addEventListener('click', () => {\r\n      this.destroyTemplate();\r\n      new _Block__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.newPage);\r\n    });\r\n    this.iconTemplate.addEventListener('click', () => {\r\n      this.iconAdd();\r\n      this.destroyTemplate();\r\n      new _Block__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.newPage);\r\n    });\r\n    this.iconBar.addEventListener('click', () => this.iconAdd());\r\n    this.mainUI.append(this.newPage);\r\n  }\r\n  destroyTemplate() {\r\n    this.newPage.remove(this.iconTemplate);\r\n    this.newPage.remove(this.noIconTemplate);\r\n    this.newPage.remove(this.introduce);\r\n  }\r\n  iconAdd() {\r\n    this.iconBar.innerHTML = '😚';\r\n    this.iconBar.element.style.fontSize = '70px';\r\n    this.iconBar.element.style.width = '80px';\r\n    this.iconBar.element.style.height = '80px';\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\r\n\n\n//# sourceURL=webpack://notion/./src/Page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dom */ \"./src/Dom.js\");\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List */ \"./src/List.js\");\n/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page */ \"./src/Page.js\");\n\r\n\r\n\r\nfunction resize() {\r\n  const nav = document.querySelector('nav');\r\n  let pressed = false;\r\n  const resizeButton = new _Dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('div', 'resizeBar');\r\n  document.body.appendChild(resizeButton.element);\r\n  resizeButton.addEventListener('mousedown', () => {\r\n    console.log('눌림!');\r\n    pressed = true;\r\n    if (window.event.pageX >= 150) {\r\n      nav.style.width = window.event.pageX - 5 + 'px';\r\n      resizeButton.element.style.paddingLeft = window.event.pageX + 'px';\r\n      if (document.querySelector('.main')) {\r\n        const main = document.querySelector('.main');\r\n        main.style.paddingLeft = resizeButton.element.style.paddingLeft + 'px';\r\n      }\r\n    }\r\n  });\r\n  resizeButton.addEventListener('mouseup', () => {\r\n    pressed = false;\r\n  });\r\n  resizeButton.addEventListener('mousemove', () => {\r\n    if (pressed) {\r\n      if (window.event.pageX >= 150) {\r\n        nav.style.width = window.event.pageX - 5 + 'px';\r\n        resizeButton.element.style.paddingLeft = window.event.pageX + 'px';\r\n        if (document.querySelector('.main')) {\r\n          const main = document.querySelector('.main');\r\n          main.style.paddingLeft = window.event.pageX + 'px';\r\n        }\r\n      }\r\n    }\r\n  });\r\n}\r\nresize();\r\nconst plusButton = document.querySelector('.pluspage');\r\nconst list = [];\r\nconst pages = [];\r\nplusButton.addEventListener('click', () => {\r\n  const newPage = new _Page__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n  const newList = new _List__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n  pages.push(newPage);\r\n  list.push(newList);\r\n  newList.element.style.backgroundColor = '#ededeb';\r\n});\r\n\n\n//# sourceURL=webpack://notion/./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;