"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"7a102fec813e\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9nbG9iYWxzLmNzcz83MDYwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiN2ExMDJmZWM4MTNlXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var _components_chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/chat */ \"(app-client)/./src/components/chat.tsx\");\n/* harmony import */ var _sign_in__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in */ \"(app-client)/./src/app/sign-in.tsx\");\n/* harmony import */ var _components_firebase_signup_email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/firebase/signup-email */ \"(app-client)/./src/components/firebase/signup-email.tsx\");\n/* harmony import */ var _components_firebase_signin_email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/firebase/signin-email */ \"(app-client)/./src/components/firebase/signin-email.tsx\");\n/* harmony import */ var _components_firebase_signup_email_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/firebase/signup-email.css */ \"(app-client)/./src/components/firebase/signup-email.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen min-h-screen items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sign_in__WEBPACK_IMPORTED_MODULE_2__.SignIn, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\calia\\\\Desktop\\\\near-copilot\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_firebase_signin_email__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onSignInSuccess: (user)=>{\n                    console.log(\"User signed in:\", user);\n                //setIsSignedInWithEmail(true);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\calia\\\\Desktop\\\\near-copilot\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_firebase_signup_email__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onSignUpSuccess: (user)=>{\n                    console.log(\"User signed in:\", user);\n                //setIsSignedInWithEmail(true);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\calia\\\\Desktop\\\\near-copilot\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chat__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\calia\\\\Desktop\\\\near-copilot\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\calia\\\\Desktop\\\\near-copilot\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNxQztBQUVGO0FBQytCO0FBQ0E7QUFDakI7QUFFbEMsU0FBU0k7SUFFdEIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUliLDhEQUFDTCw0Q0FBTUE7Ozs7OzBCQUNQLDhEQUFDRSx5RUFBZUE7Z0JBQ2RJLGlCQUFpQixDQUFDQztvQkFDaEJDLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJGO2dCQUMvQiwrQkFBK0I7Z0JBQ2pDOzs7Ozs7MEJBRUYsOERBQUNOLHlFQUFlQTtnQkFDZFMsaUJBQWlCLENBQUNIO29CQUNoQkMsUUFBUUMsR0FBRyxDQUFDLG1CQUFtQkY7Z0JBQy9CLCtCQUErQjtnQkFDakM7Ozs7OzswQkFFRiw4REFBQ1Isd0RBQUlBOzs7Ozs7Ozs7OztBQUdYO0tBdkJ3QkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgQ2hhdCBmcm9tIFwiQC9jb21wb25lbnRzL2NoYXRcIjtcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XHJcbmltcG9ydCB7IFNpZ25JbiB9IGZyb20gXCIuL3NpZ24taW5cIjtcclxuaW1wb3J0IFNpZ25VcFdpdGhFbWFpbCBmcm9tIFwiLi4vY29tcG9uZW50cy9maXJlYmFzZS9zaWdudXAtZW1haWxcIjtcclxuaW1wb3J0IFNpZ25JbldpdGhFbWFpbCBmcm9tIFwiLi4vY29tcG9uZW50cy9maXJlYmFzZS9zaWduaW4tZW1haWxcIjtcclxuaW1wb3J0ICcuLi9jb21wb25lbnRzL2ZpcmViYXNlL3NpZ251cC1lbWFpbC5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuIG1pbi1oLXNjcmVlbiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgey8qIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gPFJlYWN0TWFya2Rvd24ga2V5PXtpfSBjaGlsZHJlbj17bWVzc2FnZS5jb250ZW50fSAvPjtcclxuICAgICAgfSl9ICovfVxyXG4gICAgICA8U2lnbkluIC8+XHJcbiAgICAgIDxTaWduSW5XaXRoRW1haWxcclxuICAgICAgICBvblNpZ25JblN1Y2Nlc3M9eyh1c2VyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgc2lnbmVkIGluOlwiLCB1c2VyKTtcclxuICAgICAgICAgIC8vc2V0SXNTaWduZWRJbldpdGhFbWFpbCh0cnVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8U2lnblVwV2l0aEVtYWlsXHJcbiAgICAgICAgb25TaWduVXBTdWNjZXNzPXsodXNlcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIHNpZ25lZCBpbjpcIiwgdXNlcik7XHJcbiAgICAgICAgICAvL3NldElzU2lnbmVkSW5XaXRoRW1haWwodHJ1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPENoYXQgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNoYXQiLCJTaWduSW4iLCJTaWduVXBXaXRoRW1haWwiLCJTaWduSW5XaXRoRW1haWwiLCJIb21lIiwiZGl2IiwiY2xhc3NOYW1lIiwib25TaWduSW5TdWNjZXNzIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJvblNpZ25VcFN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/page.tsx\n"));

/***/ })

});