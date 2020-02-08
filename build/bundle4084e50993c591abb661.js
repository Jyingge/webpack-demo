/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/1.JPG":
/*!*******************!*\
  !*** ./src/1.JPG ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/1.JPG?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _1_JPG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1.JPG */ \"./src/1.JPG\");\n/* harmony import */ var _1_JPG__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_1_JPG__WEBPACK_IMPORTED_MODULE_0__);\n// let str =require('./a');\r\n// console.log(str);\r\n// // 导入css文件\r\n// require('./index.css')\r\n// // 导入less文件\r\n// require('./index.less')\r\n\r\n// // 下面就是利用bouble转化es5的..\r\n// let fn=()=>{\r\n// \tconsole.log('111');\r\n// }\r\n// fn();\r\n// // 如果写了一个更高级的语法比如说class，就需要另个插件了yarn add @babel-plugin-proposal-class-properties -D \r\n// // @log 也就是所谓的装饰器\r\n// @log\r\n\r\n// class A{\r\n// \ta=6666\r\n// }\r\n// let a =new A();\r\n// console.log(a.a);\r\n\r\n// function log(target) {\r\n// \tconsole.log(target,'A');\r\n// }\r\n\r\n\r\n\r\n\r\n\r\n// 这里是第三方模块的使用方法.我们希望把jquery暴露出去，所以就用到了 expose-loader?$!jquery ,然而$的作用就是作为传参的方式，将文件暴露出去\r\n// import $ from 'expose-loader?$!jquery'\r\n// console.log(window.$);\r\n// import $ from 'jquery' //在准备注入全局对象的时候，就要把它关掉了\r\n\r\n// 如果说这个时候你想要暴露出全局的loader 那就需要一个模块expose-loader;\r\n// 如果说，你默认就像拿到jquery的$，那就需要在每个模块中注入$对象\r\n// console.log($,'jquery');\r\n\r\n// webpack 打包图片\r\n\r\nconsole.log(_1_JPG__WEBPACK_IMPORTED_MODULE_0___default.a);\r\nimage.src=_1_JPG__WEBPACK_IMPORTED_MODULE_0___default.a;\r\nlet image = new Image();\r\n// image.src = \"./1.JPG\";//如果你用这个方式引入的话，那打包出来就是一个字符串,甚至还会报错，1.JPG:1 GET http://127.0.0.1:5500/build/1.JPG 404 (Not Found)\r\ndocument.body.appendChild(image);\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });