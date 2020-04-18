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

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\DjangoProjects\\\\django_react\\\\django_react\\\\frontend\\\\src\\\\components\\\\App.js: Support for the experimental syntax 'classProperties' isn't currently enabled (147:18):\\n\\n\\u001b[0m \\u001b[90m 145 | \\u001b[39m        }\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 146 | \\u001b[39m    }\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 147 | \\u001b[39m    onCreateLead \\u001b[33m=\\u001b[39m () \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m     | \\u001b[39m                 \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 148 | \\u001b[39m        let leadinfo \\u001b[33m=\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 149 | \\u001b[39m            name\\u001b[33m:\\u001b[39m \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mrefs\\u001b[33m.\\u001b[39mname\\u001b[33m.\\u001b[39mvalue\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 150 | \\u001b[39m            email\\u001b[33m:\\u001b[39m \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mrefs\\u001b[33m.\\u001b[39memail\\u001b[33m.\\u001b[39mvalue\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\nAdd @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.\\n    at Object._raise (C:\\\\DjangoProjects\\\\django_react\\\\django_react\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:742:17)\\n    at Object.raiseWithData (C:\\\\DjangoProjects\\\\django_react\\\\django_react\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:735:17)\\n    at Object.expectPlugin (C:\\\\DjangoProjects\\\\django_react\\\\django_react\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8762:18)\\n    at Object.parseClassProperty (C:\\\\DjangoProjects\\\\django_react\\\\django_react\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12110:12)\\n    at Object.pushClassProperty (C:\\\\DjangoProjects\\\\django_react\\\\django_react\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12070:30)\\n    at Object.parseClassMemberWithIsStatic (C:\\\\DjangoProjects\\\\django_react\\\\django_react\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12003:14)\\n    at Object.parseClassMember (C:\\\\DjangoProjects\\\\django_react\\\\django_react\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11940:10)\\n    at C:\\\\DjangoProjects\\\\django_react\\\\django_react\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11885:14\\n    at Object.withTopicForbiddingContext (C:\\\\DjangoProjects\\\\django_react\\\\django_react\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10956:14)\\n    at Object.parseClassBody (C:\\\\DjangoProjects\\\\django_react\\\\django_react\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11862:10)\\n    at Object.parseClass (C:\\\\DjangoProjects\\\\django_react\\\\django_react\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11836:22)\\n    at Object.parseStatementContent (C:\\\\DjangoProjects\\\\django_react\\\\django_react\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11123:21)\\n    at Object.parseStatement (C:\\\\DjangoProjects\\\\django_react\\\\django_react\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11081:17)\\n    at Object.parseBlockOrModuleBlockBody (C:\\\\DjangoProjects\\\\django_react\\\\django_react\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11656:25)\\n    at Object.parseBlockBody (C:\\\\DjangoProjects\\\\django_react\\\\django_react\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11642:10)\\n    at Object.parseTopLevel (C:\\\\DjangoProjects\\\\django_react\\\\django_react\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11012:10)\\n    at Object.parse (C:\\\\DjangoProjects\\\\django_react\\\\django_react\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12637:10)\\n    at parse (C:\\\\DjangoProjects\\\\django_react\\\\django_react\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12688:38)\\n    at parser (C:\\\\DjangoProjects\\\\django_react\\\\django_react\\\\frontend\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\parser\\\\index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (C:\\\\DjangoProjects\\\\django_react\\\\django_react\\\\frontend\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:93:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (C:\\\\DjangoProjects\\\\django_react\\\\django_react\\\\frontend\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:31:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (C:\\\\DjangoProjects\\\\django_react\\\\django_react\\\\frontend\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:27:41)\\n    at transform.next (<anonymous>)\\n    at step (C:\\\\DjangoProjects\\\\django_react\\\\django_react\\\\frontend\\\\node_modules\\\\gensync\\\\index.js:254:32)\\n    at C:\\\\DjangoProjects\\\\django_react\\\\django_react\\\\frontend\\\\node_modules\\\\gensync\\\\index.js:266:13\\n    at async.call.result.err.err (C:\\\\DjangoProjects\\\\django_react\\\\django_react\\\\frontend\\\\node_modules\\\\gensync\\\\index.js:216:11)\");\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.js\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });