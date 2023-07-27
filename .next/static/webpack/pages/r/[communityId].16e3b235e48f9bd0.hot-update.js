"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/r/[communityId]",{

/***/ "./src/components/Posts/PostItem.tsx":
/*!*******************************************!*\
  !*** ./src/components/Posts/PostItem.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n\n\n\n\nconst PostItem = (param)=>{\n    let { post, userIsCreator, userVoteValue, onVote, onDeletePost, onSelectPost } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        border: \"1px solid\",\n        bg: \"white\",\n        borderColor: \"gray.300\",\n        borderRadius: \"4px 4px 0px 0px\",\n        cursor: \"pointer\",\n        _hover: {\n            borderColor: \"gray.500\"\n        },\n        onClick: onSelectPost,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                direction: \"column\",\n                align: \"center\",\n                bg: \"gray.100\",\n                p: 2,\n                width: \"40px\",\n                borderRadius: \"3px 0px 0px 3px\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n                        as: userVoteValue === 1 ? react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoArrowUpCircleSharp : react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoArrowUpCircleOutline,\n                        color: userVoteValue === 1 ? \"brand.100\" : \"gray.400\",\n                        fontSize: 22,\n                        cursor: \"pointer\",\n                        onClick: onVote\n                    }, void 0, false, {\n                        fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/PostItem.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        fontSize: \"9pt\",\n                        fontWeight: 600,\n                        children: post.voteStatus\n                    }, void 0, false, {\n                        fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/PostItem.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n                        as: userVoteValue === -1 ? react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoArrowDownCircleSharp : react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoArrowDownCircleOutline,\n                        color: userVoteValue === -1 ? \"#4379FF\" : \"gray.400\",\n                        fontSize: 22,\n                        cursor: \"pointer\",\n                        onClick: onVote\n                    }, void 0, false, {\n                        fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/PostItem.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/PostItem.tsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                direction: \"column\",\n                width: \"100%\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                    spacing: 1,\n                    p: \"10px 10px\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                        direction: \"row\",\n                        spacing: 0.6,\n                        align: \"center\",\n                        fontSize: \"9pt\"\n                    }, void 0, false, {\n                        fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/PostItem.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/PostItem.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/PostItem.tsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/PostItem.tsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, undefined);\n};\n_c = PostItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostItem);\nvar _c;\n$RefreshReg$(_c, \"PostItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb3N0cy9Qb3N0SXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDd0M7QUFTZDtBQVlEO0FBWXpCLE1BQU1TLFdBQW1DO1FBQUMsRUFDdENDLElBQUksRUFDSkMsYUFBYSxFQUNiQyxhQUFhLEVBQ2JDLE1BQU0sRUFDTkMsWUFBWSxFQUNaQyxZQUFZLEVBRWY7SUFFRyxxQkFDSSw4REFBQ2Qsa0RBQUlBO1FBQ0xlLFFBQU87UUFDUEMsSUFBRztRQUNIQyxhQUFZO1FBQ1pDLGNBQWE7UUFDYkMsUUFBTztRQUNQQyxRQUFRO1lBQUVILGFBQVk7UUFBVztRQUNqQ0ksU0FBU1A7OzBCQUVMLDhEQUFDZCxrREFBSUE7Z0JBQ0xzQixXQUFVO2dCQUNWQyxPQUFNO2dCQUNOUCxJQUFJO2dCQUNKUSxHQUFHO2dCQUNIQyxPQUFNO2dCQUNOUCxjQUFjOztrQ0FFViw4REFBQ2pCLGtEQUFJQTt3QkFBQ3lCLElBQ0ZmLGtCQUFrQixJQUFJSixpRUFBb0JBLEdBQUdELG1FQUFzQkE7d0JBQ25FcUIsT0FBT2hCLGtCQUFrQixJQUFJLGNBQWM7d0JBQzNDaUIsVUFBVTt3QkFDVlQsUUFBTzt3QkFDUEUsU0FBU1Q7Ozs7OztrQ0FFYiw4REFBQ1Qsa0RBQUlBO3dCQUFDeUIsVUFBUzt3QkFBTUMsWUFBWTtrQ0FDNUJwQixLQUFLcUIsVUFBVTs7Ozs7O2tDQUVwQiw4REFBQzdCLGtEQUFJQTt3QkFDRHlCLElBQ0lmLGtCQUFrQixDQUFDLElBQ2pCTixtRUFBc0JBLEdBQ3RCRCxxRUFBd0JBO3dCQUU5QnVCLE9BQU9oQixrQkFBa0IsQ0FBQyxJQUFJLFlBQVk7d0JBQzFDaUIsVUFBVTt3QkFDVlQsUUFBTzt3QkFDUEUsU0FBU1Q7Ozs7Ozs7Ozs7OzswQkFHakIsOERBQUNaLGtEQUFJQTtnQkFBQ3NCLFdBQVU7Z0JBQVNHLE9BQU07MEJBQzNCLDRFQUFDdkIsbURBQUtBO29CQUFDNkIsU0FBUztvQkFBR1AsR0FBRTs4QkFDakIsNEVBQUN0QixtREFBS0E7d0JBQUNvQixXQUFVO3dCQUFNUyxTQUFTO3dCQUFLUixPQUFNO3dCQUFTSyxVQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2pGO0tBM0RNcEI7QUE0RE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdHMvUG9zdEl0ZW0udHN4PzA5MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9zdCB9IGZyb20gJ0Avc3JjL2F0b21zL3Bvc3RzQXRvbSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEZsZXgsXG4gIEljb24sXG4gIEltYWdlLFxuICBTa2VsZXRvbixcbiAgU3Bpbm5lcixcbiAgU3RhY2ssXG4gIFRleHQsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBBaU91dGxpbmVEZWxldGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmltcG9ydCB7IEJzQ2hhdCwgQnNEb3QgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCB7IEZhUmVkZGl0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQge1xuICBJb0Fycm93RG93bkNpcmNsZU91dGxpbmUsXG4gIElvQXJyb3dEb3duQ2lyY2xlU2hhcnAsXG4gIElvQXJyb3dSZWRvT3V0bGluZSxcbiAgSW9BcnJvd1VwQ2lyY2xlT3V0bGluZSxcbiAgSW9BcnJvd1VwQ2lyY2xlU2hhcnAsXG4gIElvQm9va21hcmtPdXRsaW5lLFxufSBmcm9tIFwicmVhY3QtaWNvbnMvaW81XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbnR5cGUgUG9zdEl0ZW1Qcm9wcyA9IHtcbiAgICBwb3N0OiBQb3N0O1xuICAgIHVzZXJJc0NyZWF0b3I6IGJvb2xlYW47XG4gICAgdXNlclZvdGVWYWx1ZT86IG51bWJlcjtcbiAgICBvblZvdGU6ICgpID0+IHt9O1xuICAgIG9uRGVsZXRlUG9zdDogKCkgPT4ge307XG4gICAgb25TZWxlY3RQb3N0OiAoKSA9PiB2b2lkO1xufTtcblxuY29uc3QgUG9zdEl0ZW06UmVhY3QuRkM8UG9zdEl0ZW1Qcm9wcz4gPSAoeyBcbiAgICBwb3N0LFxuICAgIHVzZXJJc0NyZWF0b3IsXG4gICAgdXNlclZvdGVWYWx1ZSxcbiAgICBvblZvdGUsXG4gICAgb25EZWxldGVQb3N0LFxuICAgIG9uU2VsZWN0UG9zdCxcblxufSkgPT4ge1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxGbGV4IFxuICAgICAgICBib3JkZXI9XCIxcHggc29saWRcIlxuICAgICAgICBiZz1cIndoaXRlXCJcbiAgICAgICAgYm9yZGVyQ29sb3I9XCJncmF5LjMwMFwiXG4gICAgICAgIGJvcmRlclJhZGl1cz1cIjRweCA0cHggMHB4IDBweFwiXG4gICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgICAgICBfaG92ZXI9e3sgYm9yZGVyQ29sb3I6XCJncmF5LjUwMFwiIH19XG4gICAgICAgIG9uQ2xpY2s9e29uU2VsZWN0UG9zdH1cbiAgICAgICAgPlxuICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICBiZz17XCJncmF5LjEwMFwifVxuICAgICAgICAgICAgcD17Mn1cbiAgICAgICAgICAgIHdpZHRoPVwiNDBweFwiXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9e1wiM3B4IDBweCAwcHggM3B4XCJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEljb24gYXM9e1xuICAgICAgICAgICAgICAgICAgICB1c2VyVm90ZVZhbHVlID09PSAxID8gSW9BcnJvd1VwQ2lyY2xlU2hhcnAgOiBJb0Fycm93VXBDaXJjbGVPdXRsaW5lIH1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e3VzZXJWb3RlVmFsdWUgPT09IDEgPyBcImJyYW5kLjEwMFwiIDogXCJncmF5LjQwMFwifVxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17MjJ9XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblZvdGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cIjlwdFwiIGZvbnRXZWlnaHQ9ezYwMH0+XG4gICAgICAgICAgICAgICAgICAgIHtwb3N0LnZvdGVTdGF0dXN9XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgIGFzPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJWb3RlVmFsdWUgPT09IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICA/IElvQXJyb3dEb3duQ2lyY2xlU2hhcnBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogSW9BcnJvd0Rvd25DaXJjbGVPdXRsaW5lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e3VzZXJWb3RlVmFsdWUgPT09IC0xID8gXCIjNDM3OUZGXCIgOiBcImdyYXkuNDAwXCJ9XG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsyMn1cbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uVm90ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezF9IHA9XCIxMHB4IDEwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezAuNn0gYWxpZ249XCJjZW50ZXJcIiBmb250U2l6ZT1cIjlwdFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9GbGV4PlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IFBvc3RJdGVtOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkZsZXgiLCJJY29uIiwiU3RhY2siLCJUZXh0IiwiSW9BcnJvd0Rvd25DaXJjbGVPdXRsaW5lIiwiSW9BcnJvd0Rvd25DaXJjbGVTaGFycCIsIklvQXJyb3dVcENpcmNsZU91dGxpbmUiLCJJb0Fycm93VXBDaXJjbGVTaGFycCIsIlBvc3RJdGVtIiwicG9zdCIsInVzZXJJc0NyZWF0b3IiLCJ1c2VyVm90ZVZhbHVlIiwib25Wb3RlIiwib25EZWxldGVQb3N0Iiwib25TZWxlY3RQb3N0IiwiYm9yZGVyIiwiYmciLCJib3JkZXJDb2xvciIsImJvcmRlclJhZGl1cyIsImN1cnNvciIsIl9ob3ZlciIsIm9uQ2xpY2siLCJkaXJlY3Rpb24iLCJhbGlnbiIsInAiLCJ3aWR0aCIsImFzIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ2b3RlU3RhdHVzIiwic3BhY2luZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Posts/PostItem.tsx\n"));

/***/ })

});