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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"ef40030742d9\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9nbG9iYWxzLmNzcz83MDYwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiZWY0MDAzMDc0MmQ5XCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./src/components/firebase/email-auth-form.css":
/*!*****************************************************!*\
  !*** ./src/components/firebase/email-auth-form.css ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"ca0711afc814\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvZmlyZWJhc2UvZW1haWwtYXV0aC1mb3JtLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZmlyZWJhc2UvZW1haWwtYXV0aC1mb3JtLmNzcz81YWZmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiY2EwNzExYWZjODE0XCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/components/firebase/email-auth-form.css\n"));

/***/ }),

/***/ "(app-client)/./src/components/firebase/email-auth-form.tsx":
/*!*****************************************************!*\
  !*** ./src/components/firebase/email-auth-form.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _signin_email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin-email */ \"(app-client)/./src/components/firebase/signin-email.tsx\");\n/* harmony import */ var _signup_email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup-email */ \"(app-client)/./src/components/firebase/signup-email.tsx\");\n/* harmony import */ var _email_auth_form_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email-auth-form.css */ \"(app-client)/./src/components/firebase/email-auth-form.css\");\n\nvar _s = $RefreshSig$();\n\n // Adjust the path as needed\n // Adjust the path as needed\n\nconst EmailAuthForm = (param)=>{\n    let { onSignInSuccess, onSignUpSuccess } = param;\n    _s();\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const toggleForm = ()=>{\n        setIsLogin(!isLogin);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"auth-container\",\n        children: isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_signin_email__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    onSignInSuccess: onSignInSuccess\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\calia\\\\Desktop\\\\near-copilot\\\\src\\\\components\\\\firebase\\\\email-auth-form.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"toggle-button\",\n                    onClick: toggleForm,\n                    children: \"Need an account? Sign Up\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\calia\\\\Desktop\\\\near-copilot\\\\src\\\\components\\\\firebase\\\\email-auth-form.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_signup_email__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onSignUpSuccess: onSignUpSuccess\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\calia\\\\Desktop\\\\near-copilot\\\\src\\\\components\\\\firebase\\\\email-auth-form.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"toggle-button\",\n                    onClick: toggleForm,\n                    children: \"Already have an account? Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\calia\\\\Desktop\\\\near-copilot\\\\src\\\\components\\\\firebase\\\\email-auth-form.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\calia\\\\Desktop\\\\near-copilot\\\\src\\\\components\\\\firebase\\\\email-auth-form.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, undefined);\n};\n_s(EmailAuthForm, \"juHMKC6x2j1wnRvCiB5VrABnZyE=\");\n_c = EmailAuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmailAuthForm);\nvar _c;\n$RefreshReg$(_c, \"EmailAuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvZmlyZWJhc2UvZW1haWwtYXV0aC1mb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDSyxDQUFDLDRCQUE0QjtBQUM3QixDQUFDLDRCQUE0QjtBQUMzQztBQU8vQixNQUFNSSxnQkFBOEM7UUFBQyxFQUFFQyxlQUFlLEVBQUVDLGVBQWUsRUFBRTs7SUFDckYsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1RLGFBQWE7UUFDZkQsV0FBVyxDQUFDRDtJQUNoQjtJQUVBLHFCQUNJLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNWSix3QkFDRzs7OEJBQ0ksOERBQUNMLHFEQUFlQTtvQkFBQ0csaUJBQWlCQTs7Ozs7OzhCQUNsQyw4REFBQ087b0JBQU9ELFdBQVc7b0JBQWlCRSxTQUFTSjs4QkFBWTs7Ozs7Ozt5Q0FHN0Q7OzhCQUNJLDhEQUFDTixxREFBZUE7b0JBQUNHLGlCQUFpQkE7Ozs7Ozs4QkFDbEMsOERBQUNNO29CQUFPRCxXQUFXO29CQUFpQkUsU0FBU0o7OEJBQVk7Ozs7Ozs7Ozs7Ozs7QUFLN0U7R0F0Qk1MO0tBQUFBO0FBd0JOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2ZpcmViYXNlL2VtYWlsLWF1dGgtZm9ybS50c3g/YTI3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaWduSW5XaXRoRW1haWwgZnJvbSAnLi9zaWduaW4tZW1haWwnOyAvLyBBZGp1c3QgdGhlIHBhdGggYXMgbmVlZGVkXHJcbmltcG9ydCBTaWduVXBXaXRoRW1haWwgZnJvbSAnLi9zaWdudXAtZW1haWwnOyAvLyBBZGp1c3QgdGhlIHBhdGggYXMgbmVlZGVkXHJcbmltcG9ydCAnLi9lbWFpbC1hdXRoLWZvcm0uY3NzJztcclxuXHJcbmludGVyZmFjZSBFbWFpbEF1dGhGb3JtUHJvcHMge1xyXG4gICAgb25TaWduSW5TdWNjZXNzOiAodXNlcjogYW55KSA9PiB2b2lkO1xyXG4gICAgb25TaWduVXBTdWNjZXNzOiAodXNlcjogYW55KSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBFbWFpbEF1dGhGb3JtOiBSZWFjdC5GQzxFbWFpbEF1dGhGb3JtUHJvcHM+ID0gKHsgb25TaWduSW5TdWNjZXNzLCBvblNpZ25VcFN1Y2Nlc3MgfSkgPT4ge1xyXG4gICAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc0xvZ2luKCFpc0xvZ2luKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIHtpc0xvZ2luID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8U2lnbkluV2l0aEVtYWlsIG9uU2lnbkluU3VjY2Vzcz17b25TaWduSW5TdWNjZXNzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcInRvZ2dsZS1idXR0b25cIn0gb25DbGljaz17dG9nZ2xlRm9ybX0+TmVlZCBhbiBhY2NvdW50PyBTaWduIFVwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNpZ25VcFdpdGhFbWFpbCBvblNpZ25VcFN1Y2Nlc3M9e29uU2lnblVwU3VjY2Vzc30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJ0b2dnbGUtYnV0dG9uXCJ9IG9uQ2xpY2s9e3RvZ2dsZUZvcm19PkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PyBMb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1haWxBdXRoRm9ybTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTaWduSW5XaXRoRW1haWwiLCJTaWduVXBXaXRoRW1haWwiLCJFbWFpbEF1dGhGb3JtIiwib25TaWduSW5TdWNjZXNzIiwib25TaWduVXBTdWNjZXNzIiwiaXNMb2dpbiIsInNldElzTG9naW4iLCJ0b2dnbGVGb3JtIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/firebase/email-auth-form.tsx\n"));

/***/ })

});