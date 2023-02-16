/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/ConnectWallet.js":
/*!*************************************!*\
  !*** ./components/ConnectWallet.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"userSession\": () => (/* binding */ userSession)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stacks_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stacks/connect */ \"@stacks/connect\");\n/* harmony import */ var _stacks_connect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stacks_connect__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst appConfig = new _stacks_connect__WEBPACK_IMPORTED_MODULE_2__.AppConfig([\n    \"store_write\",\n    \"publish_data\"\n]);\nconst userSession = new _stacks_connect__WEBPACK_IMPORTED_MODULE_2__.UserSession({\n    appConfig\n});\nfunction authenticate() {\n    (0,_stacks_connect__WEBPACK_IMPORTED_MODULE_2__.showConnect)({\n        appDetails: {\n            name: \"Stacks Next.js Starter\",\n            icon: window.location.origin + \"/logo512.png\"\n        },\n        redirectTo: \"/\",\n        onFinish: ()=>{\n            window.location.reload();\n        },\n        userSession\n    });\n}\nfunction disconnect() {\n    userSession.signUserOut(\"/\");\n}\nconst ConnectWallet = ()=>{\n    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>setMounted(true), []);\n    if (mounted && userSession.isUserSignedIn()) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"Connect\",\n                    onClick: disconnect,\n                    children: \"Disconnect Wallet\"\n                }, void 0, false, {\n                    fileName: \"/Users/ciaramaria/Documents/Camp/api-calls/components/ConnectWallet.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"mainnet: \",\n                        userSession.loadUserData().profile.stxAddress.mainnet\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ciaramaria/Documents/Camp/api-calls/components/ConnectWallet.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"testnet: \",\n                        userSession.loadUserData().profile.stxAddress.testnet\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ciaramaria/Documents/Camp/api-calls/components/ConnectWallet.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ciaramaria/Documents/Camp/api-calls/components/ConnectWallet.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"Connect\",\n        onClick: authenticate,\n        children: \"Connect Wallet\"\n    }, void 0, false, {\n        fileName: \"/Users/ciaramaria/Documents/Camp/api-calls/components/ConnectWallet.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectWallet);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nvbm5lY3RXYWxsZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFtRDtBQUNtQjtBQUV0RSxNQUFNTSxTQUFTLEdBQUcsSUFBSUgsc0RBQVMsQ0FBQztJQUFDLGFBQWE7SUFBRSxjQUFjO0NBQUMsQ0FBQztBQUV6RCxNQUFNSSxXQUFXLEdBQUcsSUFBSUYsd0RBQVcsQ0FBQztJQUFFQyxTQUFTO0NBQUUsQ0FBQyxDQUFDO0FBRTFELFNBQVNFLFlBQVksR0FBRztJQUN0QkosNERBQVcsQ0FBQztRQUNWSyxVQUFVLEVBQUU7WUFDVkMsSUFBSSxFQUFFLHdCQUF3QjtZQUM5QkMsSUFBSSxFQUFFQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxHQUFHLGNBQWM7U0FDOUM7UUFDREMsVUFBVSxFQUFFLEdBQUc7UUFDZkMsUUFBUSxFQUFFLElBQU07WUFDZEosTUFBTSxDQUFDQyxRQUFRLENBQUNJLE1BQU0sRUFBRSxDQUFDO1NBQzFCO1FBQ0RWLFdBQVc7S0FDWixDQUFDLENBQUM7Q0FDSjtBQUVELFNBQVNXLFVBQVUsR0FBRztJQUNwQlgsV0FBVyxDQUFDWSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDOUI7QUFFRCxNQUFNQyxhQUFhLEdBQUcsSUFBTTtJQUMxQixNQUFNLEtBQUNDLE9BQU8sTUFBRUMsVUFBVSxNQUFJcEIsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFDN0NELGdEQUFTLENBQUMsSUFBTXFCLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUV0QyxJQUFJRCxPQUFPLElBQUlkLFdBQVcsQ0FBQ2dCLGNBQWMsRUFBRSxFQUFFO1FBQzNDLHFCQUNFLDhEQUFDQyxLQUFHOzs4QkFDRiw4REFBQ0MsUUFBTTtvQkFBQ0MsU0FBUyxFQUFDLFNBQVM7b0JBQUNDLE9BQU8sRUFBRVQsVUFBVTs4QkFBRSxtQkFFakQ7Ozs7OzZCQUFTOzhCQUNULDhEQUFDVSxHQUFDOzt3QkFBQyxXQUFTO3dCQUFDckIsV0FBVyxDQUFDc0IsWUFBWSxFQUFFLENBQUNDLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDQyxPQUFPOzs7Ozs7NkJBQUs7OEJBQ3ZFLDhEQUFDSixHQUFDOzt3QkFBQyxXQUFTO3dCQUFDckIsV0FBVyxDQUFDc0IsWUFBWSxFQUFFLENBQUNDLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDRSxPQUFPOzs7Ozs7NkJBQUs7Ozs7OztxQkFDbkUsQ0FDTjtLQUNIO0lBRUQscUJBQ0UsOERBQUNSLFFBQU07UUFBQ0MsU0FBUyxFQUFDLFNBQVM7UUFBQ0MsT0FBTyxFQUFFbkIsWUFBWTtrQkFBRSxnQkFFbkQ7Ozs7O2lCQUFTLENBQ1Q7Q0FDSDtBQUVELGlFQUFlWSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcGktY2FsbHMvLi9jb21wb25lbnRzL0Nvbm5lY3RXYWxsZXQuanM/NzkwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXBwQ29uZmlnLCBzaG93Q29ubmVjdCwgVXNlclNlc3Npb24gfSBmcm9tIFwiQHN0YWNrcy9jb25uZWN0XCI7XG5cbmNvbnN0IGFwcENvbmZpZyA9IG5ldyBBcHBDb25maWcoW1wic3RvcmVfd3JpdGVcIiwgXCJwdWJsaXNoX2RhdGFcIl0pO1xuXG5leHBvcnQgY29uc3QgdXNlclNlc3Npb24gPSBuZXcgVXNlclNlc3Npb24oeyBhcHBDb25maWcgfSk7XG5cbmZ1bmN0aW9uIGF1dGhlbnRpY2F0ZSgpIHtcbiAgc2hvd0Nvbm5lY3Qoe1xuICAgIGFwcERldGFpbHM6IHtcbiAgICAgIG5hbWU6IFwiU3RhY2tzIE5leHQuanMgU3RhcnRlclwiLFxuICAgICAgaWNvbjogd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIFwiL2xvZ281MTIucG5nXCIsXG4gICAgfSxcbiAgICByZWRpcmVjdFRvOiBcIi9cIixcbiAgICBvbkZpbmlzaDogKCkgPT4ge1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0sXG4gICAgdXNlclNlc3Npb24sXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICB1c2VyU2Vzc2lvbi5zaWduVXNlck91dChcIi9cIik7XG59XG5cbmNvbnN0IENvbm5lY3RXYWxsZXQgPSAoKSA9PiB7XG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHNldE1vdW50ZWQodHJ1ZSksIFtdKTtcblxuICBpZiAobW91bnRlZCAmJiB1c2VyU2Vzc2lvbi5pc1VzZXJTaWduZWRJbigpKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiQ29ubmVjdFwiIG9uQ2xpY2s9e2Rpc2Nvbm5lY3R9PlxuICAgICAgICAgIERpc2Nvbm5lY3QgV2FsbGV0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8cD5tYWlubmV0OiB7dXNlclNlc3Npb24ubG9hZFVzZXJEYXRhKCkucHJvZmlsZS5zdHhBZGRyZXNzLm1haW5uZXR9PC9wPlxuICAgICAgICA8cD50ZXN0bmV0OiB7dXNlclNlc3Npb24ubG9hZFVzZXJEYXRhKCkucHJvZmlsZS5zdHhBZGRyZXNzLnRlc3RuZXR9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJDb25uZWN0XCIgb25DbGljaz17YXV0aGVudGljYXRlfT5cbiAgICAgIENvbm5lY3QgV2FsbGV0XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0V2FsbGV0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcHBDb25maWciLCJzaG93Q29ubmVjdCIsIlVzZXJTZXNzaW9uIiwiYXBwQ29uZmlnIiwidXNlclNlc3Npb24iLCJhdXRoZW50aWNhdGUiLCJhcHBEZXRhaWxzIiwibmFtZSIsImljb24iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsInJlZGlyZWN0VG8iLCJvbkZpbmlzaCIsInJlbG9hZCIsImRpc2Nvbm5lY3QiLCJzaWduVXNlck91dCIsIkNvbm5lY3RXYWxsZXQiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsImlzVXNlclNpZ25lZEluIiwiZGl2IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsInAiLCJsb2FkVXNlckRhdGEiLCJwcm9maWxlIiwic3R4QWRkcmVzcyIsIm1haW5uZXQiLCJ0ZXN0bmV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ConnectWallet.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stacks_connect_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stacks/connect-react */ \"@stacks/connect-react\");\n/* harmony import */ var _stacks_connect_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stacks_connect_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ConnectWallet */ \"./components/ConnectWallet.js\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    let icon;\n    if (false) {}\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stacks_connect_react__WEBPACK_IMPORTED_MODULE_2__.Connect, {\n        authOptions: {\n            appDetails: {\n                name: \"Stacks Next.js Template\",\n                icon\n            },\n            redirectTo: \"/\",\n            onFinish: ()=>{\n                window.location.reload();\n            },\n            userSession: _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_3__.userSession\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/ciaramaria/Documents/Camp/api-calls/pages/_app.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ciaramaria/Documents/Camp/api-calls/pages/_app.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFFaUI7QUFFVTtBQUUxRCxTQUFTRSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN2QyxJQUFJQyxJQUFJO0lBQ1IsSUFBSSxLQUE2QixFQUFFLEVBRWxDO0lBRUQscUJBQ0UsOERBQUNMLDBEQUFPO1FBQ05TLFdBQVcsRUFBRTtZQUNYQyxVQUFVLEVBQUU7Z0JBQ1ZDLElBQUksRUFBRSx5QkFBeUI7Z0JBQy9CTixJQUFJO2FBQ0w7WUFDRE8sVUFBVSxFQUFFLEdBQUc7WUFDZkMsUUFBUSxFQUFFLElBQU07Z0JBQ2RQLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDTyxNQUFNLEVBQUUsQ0FBQzthQUMxQjtZQUNEYixXQUFXO1NBQ1o7a0JBRUQsNEVBQUNFLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztnQkFBSTs7Ozs7WUFDcEIsQ0FDVjtDQUNIO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaS1jYWxscy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcblxuaW1wb3J0IHsgQ29ubmVjdCB9IGZyb20gXCJAc3RhY2tzL2Nvbm5lY3QtcmVhY3RcIjtcblxuaW1wb3J0IHsgdXNlclNlc3Npb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db25uZWN0V2FsbGV0XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBsZXQgaWNvbjtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBpY29uID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIFwiL25mdC1sb2dvLnBuZ1wiO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29ubmVjdFxuICAgICAgYXV0aE9wdGlvbnM9e3tcbiAgICAgICAgYXBwRGV0YWlsczoge1xuICAgICAgICAgIG5hbWU6IFwiU3RhY2tzIE5leHQuanMgVGVtcGxhdGVcIixcbiAgICAgICAgICBpY29uLFxuICAgICAgICB9LFxuICAgICAgICByZWRpcmVjdFRvOiBcIi9cIixcbiAgICAgICAgb25GaW5pc2g6ICgpID0+IHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHVzZXJTZXNzaW9uLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Db25uZWN0PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJDb25uZWN0IiwidXNlclNlc3Npb24iLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImljb24iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsImF1dGhPcHRpb25zIiwiYXBwRGV0YWlscyIsIm5hbWUiLCJyZWRpcmVjdFRvIiwib25GaW5pc2giLCJyZWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@stacks/connect":
/*!**********************************!*\
  !*** external "@stacks/connect" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stacks/connect");

/***/ }),

/***/ "@stacks/connect-react":
/*!****************************************!*\
  !*** external "@stacks/connect-react" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stacks/connect-react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();