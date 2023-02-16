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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"userSession\": () => (/* binding */ userSession)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stacks_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stacks/connect */ \"@stacks/connect\");\n/* harmony import */ var _stacks_connect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stacks_connect__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst appConfig = new _stacks_connect__WEBPACK_IMPORTED_MODULE_2__.AppConfig([\n    \"store_write\",\n    \"publish_data\"\n]);\nconst userSession = new _stacks_connect__WEBPACK_IMPORTED_MODULE_2__.UserSession({\n    appConfig\n});\nfunction authenticate() {\n    (0,_stacks_connect__WEBPACK_IMPORTED_MODULE_2__.showConnect)({\n        appDetails: {\n            name: \"Stacks Next.js Starter\",\n            icon: window.location.origin + \"/logo512.png\"\n        },\n        redirectTo: \"/\",\n        onFinish: ()=>{\n            window.location.reload();\n        },\n        userSession\n    });\n}\nfunction disconnect() {\n    userSession.signUserOut(\"/\");\n}\nconst ConnectWallet = ()=>{\n    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>setMounted(true), []);\n    if (mounted && userSession.isUserSignedIn()) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container flex flex-wrap justify-between mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: \"text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2\",\n                onClick: disconnect,\n                children: \"Disconnect Wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/ciaramaria/Documents/Camp/api-calls/components/ConnectWallet.js\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/ciaramaria/Documents/Camp/api-calls/components/ConnectWallet.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: \"text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2\",\n        onClick: authenticate,\n        children: \"Connect Wallet\"\n    }, void 0, false, {\n        fileName: \"/Users/ciaramaria/Documents/Camp/api-calls/components/ConnectWallet.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectWallet);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nvbm5lY3RXYWxsZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFtRDtBQUNtQjtBQUV0RSxNQUFNTSxTQUFTLEdBQUcsSUFBSUgsc0RBQVMsQ0FBQztJQUFDLGFBQWE7SUFBRSxjQUFjO0NBQUMsQ0FBQztBQUV6RCxNQUFNSSxXQUFXLEdBQUcsSUFBSUYsd0RBQVcsQ0FBQztJQUFFQyxTQUFTO0NBQUUsQ0FBQyxDQUFDO0FBRTFELFNBQVNFLFlBQVksR0FBRztJQUN0QkosNERBQVcsQ0FBQztRQUNWSyxVQUFVLEVBQUU7WUFDVkMsSUFBSSxFQUFFLHdCQUF3QjtZQUM5QkMsSUFBSSxFQUFFQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxHQUFHLGNBQWM7U0FDOUM7UUFDREMsVUFBVSxFQUFFLEdBQUc7UUFDZkMsUUFBUSxFQUFFLElBQU07WUFDZEosTUFBTSxDQUFDQyxRQUFRLENBQUNJLE1BQU0sRUFBRSxDQUFDO1NBQzFCO1FBQ0RWLFdBQVc7S0FDWixDQUFDLENBQUM7Q0FDSjtBQUVELFNBQVNXLFVBQVUsR0FBRztJQUNwQlgsV0FBVyxDQUFDWSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDOUI7QUFFRCxNQUFNQyxhQUFhLEdBQUcsSUFBTTtJQUMxQixNQUFNLEtBQUNDLE9BQU8sTUFBRUMsVUFBVSxNQUFJcEIsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFDN0NELGdEQUFTLENBQUMsSUFBTXFCLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUV0QyxJQUFJRCxPQUFPLElBQUlkLFdBQVcsQ0FBQ2dCLGNBQWMsRUFBRSxFQUFFO1FBQzNDLHFCQUNFLDhEQUFDQyxLQUFHO1lBQUNDLFNBQVMsRUFBQyxrREFBa0Q7c0JBQy9ELDRFQUFDQyxRQUFNO2dCQUNQQyxJQUFJLEVBQUMsUUFBUTtnQkFDYkYsU0FBUyxFQUFDLDZGQUE2RjtnQkFDdkdHLE9BQU8sRUFBRVYsVUFBVTswQkFDbEIsbUJBRUQ7Ozs7O3lCQUFTOzs7OztxQkFDTCxDQUNOO0tBQ0g7SUFFRCxxQkFDRSw4REFBQ1EsUUFBTTtRQUNQQyxJQUFJLEVBQUMsUUFBUTtRQUNiRixTQUFTLEVBQUMsK0ZBQStGO1FBQ3pHRyxPQUFPLEVBQUVwQixZQUFZO2tCQUNwQixnQkFFRDs7Ozs7aUJBQVMsQ0FDVDtDQUNIO0FBRUQsaUVBQWVZLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaS1jYWxscy8uL2NvbXBvbmVudHMvQ29ubmVjdFdhbGxldC5qcz83OTA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcHBDb25maWcsIHNob3dDb25uZWN0LCBVc2VyU2Vzc2lvbiB9IGZyb20gXCJAc3RhY2tzL2Nvbm5lY3RcIjtcblxuY29uc3QgYXBwQ29uZmlnID0gbmV3IEFwcENvbmZpZyhbXCJzdG9yZV93cml0ZVwiLCBcInB1Ymxpc2hfZGF0YVwiXSk7XG5cbmV4cG9ydCBjb25zdCB1c2VyU2Vzc2lvbiA9IG5ldyBVc2VyU2Vzc2lvbih7IGFwcENvbmZpZyB9KTtcblxuZnVuY3Rpb24gYXV0aGVudGljYXRlKCkge1xuICBzaG93Q29ubmVjdCh7XG4gICAgYXBwRGV0YWlsczoge1xuICAgICAgbmFtZTogXCJTdGFja3MgTmV4dC5qcyBTdGFydGVyXCIsXG4gICAgICBpY29uOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgXCIvbG9nbzUxMi5wbmdcIixcbiAgICB9LFxuICAgIHJlZGlyZWN0VG86IFwiL1wiLFxuICAgIG9uRmluaXNoOiAoKSA9PiB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSxcbiAgICB1c2VyU2Vzc2lvbixcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gIHVzZXJTZXNzaW9uLnNpZ25Vc2VyT3V0KFwiL1wiKTtcbn1cblxuY29uc3QgQ29ubmVjdFdhbGxldCA9ICgpID0+IHtcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4gc2V0TW91bnRlZCh0cnVlKSwgW10pO1xuXG4gIGlmIChtb3VudGVkICYmIHVzZXJTZXNzaW9uLmlzVXNlclNpZ25lZEluKCkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuIG14LWF1dG9cIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1yZWQtNzAwIGhvdmVyOmJnLXJlZC04MDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IG1yLTIgbWItMlwiXG4gICAgICAgIG9uQ2xpY2s9e2Rpc2Nvbm5lY3R9XG4gICAgICAgID5cbiAgICAgICAgICBEaXNjb25uZWN0IFdhbGxldFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIGhvdmVyOmJnLWJsdWUtODAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSBtci0yIG1iLTJcIlxuICAgIG9uQ2xpY2s9e2F1dGhlbnRpY2F0ZX1cbiAgICA+XG4gICAgICBDb25uZWN0IFdhbGxldFxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdFdhbGxldDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXBwQ29uZmlnIiwic2hvd0Nvbm5lY3QiLCJVc2VyU2Vzc2lvbiIsImFwcENvbmZpZyIsInVzZXJTZXNzaW9uIiwiYXV0aGVudGljYXRlIiwiYXBwRGV0YWlscyIsIm5hbWUiLCJpY29uIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJyZWRpcmVjdFRvIiwib25GaW5pc2giLCJyZWxvYWQiLCJkaXNjb25uZWN0Iiwic2lnblVzZXJPdXQiLCJDb25uZWN0V2FsbGV0IiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJpc1VzZXJTaWduZWRJbiIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ConnectWallet.js\n");

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