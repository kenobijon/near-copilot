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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"a7e85a1b1f0b\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9nbG9iYWxzLmNzcz83MDYwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiYTdlODVhMWIxZjBiXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./src/components/firebase/signup-email.tsx":
/*!**************************************************!*\
  !*** ./src/components/firebase/signup-email.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"(app-client)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebaseConfig */ \"(app-client)/./src/firebaseConfig.ts\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"(app-client)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst SignUpWithEmail = (param)=>{\n    let { onSignUpSuccess } = param;\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const signUp = async (e)=>{\n        e.preventDefault();\n        try {\n            // Attempt to create a user\n            const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__.auth, email, password);\n            console.log(userCredential);\n            onSignUpSuccess(userCredential.user); // Call the callback with the user info\n            // Add user information to the database\n            const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__.db, \"users\"), {\n                email: userCredential.user.email // assuming the email is in userCredential.user.email\n            });\n            console.log(\"Document written with ID: \", docRef.id); // usually we log docRef.id\n        } catch (error) {\n            console.error(\"Error: \", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sign-up-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: signUp,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Create Account\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\calia\\\\Desktop\\\\near-copilot\\\\src\\\\components\\\\firebase\\\\signup-email.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"email\",\n                    placeholder: \"Enter your email\",\n                    value: email,\n                    onChange: (e)=>setEmail(e.target.value)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\calia\\\\Desktop\\\\near-copilot\\\\src\\\\components\\\\firebase\\\\signup-email.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    placeholder: \"Enter your password\",\n                    value: password,\n                    onChange: (e)=>setPassword(e.target.value)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\calia\\\\Desktop\\\\near-copilot\\\\src\\\\components\\\\firebase\\\\signup-email.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Sign Up\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\calia\\\\Desktop\\\\near-copilot\\\\src\\\\components\\\\firebase\\\\signup-email.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\calia\\\\Desktop\\\\near-copilot\\\\src\\\\components\\\\firebase\\\\signup-email.tsx\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\calia\\\\Desktop\\\\near-copilot\\\\src\\\\components\\\\firebase\\\\signup-email.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SignUpWithEmail, \"TSZhDBNy8CmbxXgprY/vvMmTG1Q=\");\n_c = SignUpWithEmail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUpWithEmail);\nvar _c;\n$RefreshReg$(_c, \"SignUpWithEmail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvZmlyZWJhc2Uvc2lnbnVwLWVtYWlsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0Q7QUFDeEI7QUFDSTtBQUNhO0FBQ2Y7QUFPekMsTUFBTU8sa0JBQWtEO1FBQUMsRUFBRUMsZUFBZSxFQUFFOztJQUN4RSxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1XLFNBQVMsT0FBT0M7UUFDbEJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSTtZQUNBLDJCQUEyQjtZQUMzQixNQUFNQyxpQkFBaUIsTUFBTWhCLDZFQUE4QkEsQ0FBQ0csaURBQUlBLEVBQUVNLE9BQU9FO1lBQ3pFTSxRQUFRQyxHQUFHLENBQUNGO1lBQ1pSLGdCQUFnQlEsZUFBZUcsSUFBSSxHQUFHLHVDQUF1QztZQUM3RSx1Q0FBdUM7WUFDdkMsTUFBTUMsU0FBUyxNQUFNZiwwREFBTUEsQ0FBQ0QsOERBQVVBLENBQUNFLCtDQUFFQSxFQUFFLFVBQVU7Z0JBQ2pERyxPQUFPTyxlQUFlRyxJQUFJLENBQUNWLEtBQUssQ0FBRSxxREFBcUQ7WUFDM0Y7WUFDQVEsUUFBUUMsR0FBRyxDQUFDLDhCQUE4QkUsT0FBT0MsRUFBRSxHQUFHLDJCQUEyQjtRQUNyRixFQUFFLE9BQU9DLE9BQU87WUFDWkwsUUFBUUssS0FBSyxDQUFDLFdBQVdBO1FBQzdCO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBWTtrQkFDYiw0RUFBQ0M7WUFBS0MsVUFBVWI7OzhCQUNaLDhEQUFDYzs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDQztvQkFDREMsTUFBSztvQkFDTEMsYUFBWTtvQkFDWkMsT0FBT3RCO29CQUNQdUIsVUFBVSxDQUFDbEIsSUFBTUosU0FBU0ksRUFBRW1CLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7OzhCQUV4Qyw4REFBQ0g7b0JBQ0RDLE1BQUs7b0JBQ0xDLGFBQVk7b0JBQ1pDLE9BQU9wQjtvQkFDUHFCLFVBQVUsQ0FBQ2xCLElBQU1GLFlBQVlFLEVBQUVtQixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs4QkFFM0MsOERBQUNHO29CQUFPTCxNQUFLOzhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl0QztHQXpDTXRCO0tBQUFBO0FBMkNOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2ZpcmViYXNlL3NpZ251cC1lbWFpbC50c3g/YjgxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQgfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vLi4vZmlyZWJhc2VDb25maWdcIlxyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBhZGREb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7IFxyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi8uLi9maXJlYmFzZUNvbmZpZ1wiXHJcbmltcG9ydCB7IEZvcm1FdmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBTaWduVXBXaXRoRW1haWxQcm9wcyB7XHJcbiAgICBvblNpZ25VcFN1Y2Nlc3M6ICh1c2VyOiBhbnkpID0+IHZvaWQ7IC8vIGNhbGxiYWNrIHByb3AgZm9yIHNpZ251cCBzdWNjZXNzXHJcbn1cclxuXHJcbmNvbnN0IFNpZ25VcFdpdGhFbWFpbDogUmVhY3QuRkM8U2lnblVwV2l0aEVtYWlsUHJvcHM+ID0gKHsgb25TaWduVXBTdWNjZXNzIH0pID0+IHtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IHNpZ25VcCA9IGFzeW5jIChlOiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBBdHRlbXB0IHRvIGNyZWF0ZSBhIHVzZXJcclxuICAgICAgICAgICAgY29uc3QgdXNlckNyZWRlbnRpYWwgPSBhd2FpdCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXNlckNyZWRlbnRpYWwpO1xyXG4gICAgICAgICAgICBvblNpZ25VcFN1Y2Nlc3ModXNlckNyZWRlbnRpYWwudXNlcik7IC8vIENhbGwgdGhlIGNhbGxiYWNrIHdpdGggdGhlIHVzZXIgaW5mb1xyXG4gICAgICAgICAgICAvLyBBZGQgdXNlciBpbmZvcm1hdGlvbiB0byB0aGUgZGF0YWJhc2VcclxuICAgICAgICAgICAgY29uc3QgZG9jUmVmID0gYXdhaXQgYWRkRG9jKGNvbGxlY3Rpb24oZGIsIFwidXNlcnNcIiksIHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyQ3JlZGVudGlhbC51c2VyLmVtYWlsICAvLyBhc3N1bWluZyB0aGUgZW1haWwgaXMgaW4gdXNlckNyZWRlbnRpYWwudXNlci5lbWFpbFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEb2N1bWVudCB3cml0dGVuIHdpdGggSUQ6IFwiLCBkb2NSZWYuaWQpOyAvLyB1c3VhbGx5IHdlIGxvZyBkb2NSZWYuaWRcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6IFwiLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ3NpZ24tdXAtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3NpZ25VcH0+XHJcbiAgICAgICAgICAgICAgICA8aDE+Q3JlYXRlIEFjY291bnQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIiBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIFVwPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnblVwV2l0aEVtYWlsOyJdLCJuYW1lcyI6WyJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJSZWFjdCIsInVzZVN0YXRlIiwiYXV0aCIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJkYiIsIlNpZ25VcFdpdGhFbWFpbCIsIm9uU2lnblVwU3VjY2VzcyIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwic2lnblVwIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlckNyZWRlbnRpYWwiLCJjb25zb2xlIiwibG9nIiwidXNlciIsImRvY1JlZiIsImlkIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/firebase/signup-email.tsx\n"));

/***/ })

});