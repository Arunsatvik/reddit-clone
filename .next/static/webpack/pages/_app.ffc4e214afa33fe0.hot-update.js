"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Modal/CreateCommunity/CreateCommunityModal.tsx":
/*!***********************************************************************!*\
  !*** ./src/components/Modal/CreateCommunity/CreateCommunityModal.tsx ***!
  \***********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst CreateCommunityModal = (param)=>{\n    let { open, handleClose } = param;\n    _s();\n    const [communityName, setCommunityName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [charsRemaining, setCharsRemaining] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(21);\n    const handleChange = (event)=>{\n        if (event.target.value.length > 21) return;\n        setCommunityName(event.target.value);\n        //Recalculate how many chars we have in the name\n        setCharsRemaining(21 - event.target.value.length);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n            isOpen: open,\n            onClose: handleClose,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}, void 0, false, {\n                    fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            fontSize: 15,\n                            padding: 3,\n                            children: \"Create a community\"\n                        }, void 0, false, {\n                            fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                            pl: 3,\n                            pr: 3,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {\n                                    fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalCloseButton, {}, void 0, false, {\n                                    fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {\n                                    display: \"flex\",\n                                    flexDirection: \"column\",\n                                    padding: \"10px 0px\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                            fontWeight: 600,\n                                            fontSize: 15,\n                                            children: \"Name\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                            fontSize: 11,\n                                            color: \"gray.500\",\n                                            children: \"Community names including capitalization cannot be changed\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                            position: \"relative\",\n                                            top: \"28px\",\n                                            left: \"10px\",\n                                            width: \"20px\",\n                                            color: \"gray.400\",\n                                            children: \"r/\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                            position: \"relative\",\n                                            value: communityName,\n                                            size: \"sm\",\n                                            pl: \"22px\",\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                            children: [\n                                                charsRemaining,\n                                                \"Characters remaining\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalFooter, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    colorScheme: \"blue\",\n                                    mr: 3,\n                                    onClick: handleClose,\n                                    children: \"Close\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    variant: \"ghost\",\n                                    children: \"Create Community\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n            lineNumber: 25,\n            columnNumber: 11\n        }, undefined)\n    }, void 0, false);\n};\n_s(CreateCommunityModal, \"5zMW2hNoYq4DWc8EojQewKtA+zY=\");\n_c = CreateCommunityModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateCommunityModal);\nvar _c;\n$RefreshReg$(_c, \"CreateCommunityModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9DcmVhdGVDb21tdW5pdHkvQ3JlYXRlQ29tbXVuaXR5TW9kYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStKO0FBQ3ZIO0FBT3hDLE1BQU1jLHVCQUEyRDtRQUFDLEVBQzlEQyxJQUFJLEVBQ0pDLFdBQVcsRUFDZDs7SUFDRyxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNNLGdCQUFnQkMsa0JBQWtCLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXJELE1BQU1RLGVBQWUsQ0FBQ0M7UUFDbEIsSUFBR0EsTUFBTUMsTUFBTSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sR0FBQyxJQUFJO1FBQ2pDUCxpQkFBaUJJLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztRQUNuQyxnREFBZ0Q7UUFDaERKLGtCQUFrQixLQUFLRSxNQUFNQyxNQUFNLENBQUNDLEtBQUssQ0FBQ0MsTUFBTTtJQUNwRDtJQUNDLHFCQUNHO2tCQUVFLDRFQUFDeEIsbURBQUtBO1lBQUN5QixRQUFRWDtZQUFNWSxTQUFTWDs7OEJBQzVCLDhEQUFDZCwwREFBWUE7Ozs7OzhCQUNiLDhEQUFDQywwREFBWUE7O3NDQUNYLDhEQUFDQyx5REFBV0E7NEJBQ1p3QixTQUFROzRCQUNSQyxlQUFjOzRCQUNkQyxVQUFVOzRCQUNWQyxTQUFTO3NDQUNSOzs7Ozs7c0NBR0MsOERBQUN2QixpREFBR0E7NEJBQUN3QixJQUFJOzRCQUFHQyxJQUFJOzs4Q0FDWiw4REFBQ3hCLHFEQUFPQTs7Ozs7OENBQ1IsOERBQUNKLDhEQUFnQkE7Ozs7OzhDQUNqQiw4REFBQ0MsdURBQVNBO29DQUNWc0IsU0FBUTtvQ0FDUkMsZUFBYztvQ0FDZEUsU0FBUTs7c0RBRUosOERBQUNyQixrREFBSUE7NENBQUN3QixZQUFZOzRDQUFLSixVQUFVO3NEQUFJOzs7Ozs7c0RBR3JDLDhEQUFDcEIsa0RBQUlBOzRDQUFDb0IsVUFBVTs0Q0FBSUssT0FBTTtzREFBVzs7Ozs7O3NEQUdyQyw4REFBQ3pCLGtEQUFJQTs0Q0FDTDBCLFVBQVM7NENBQ1RDLEtBQUk7NENBQ0pDLE1BQUs7NENBQ0xDLE9BQU07NENBQ05KLE9BQU07c0RBQVc7Ozs7OztzREFDakIsOERBQUN4QixtREFBS0E7NENBQ055QixVQUFTOzRDQUNUWixPQUFPUDs0Q0FDUHVCLE1BQUs7NENBQ0xSLElBQUc7NENBQ0hTLFVBQVVwQjs7Ozs7O3NEQUVWLDhEQUFDWCxrREFBSUE7O2dEQUFFUztnREFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJaEMsOERBQUNaLHlEQUFXQTs7OENBQ1YsOERBQUNQLG9EQUFNQTtvQ0FBQzBDLGFBQVk7b0NBQU9DLElBQUk7b0NBQUdDLFNBQVM1Qjs4Q0FBYTs7Ozs7OzhDQUd4RCw4REFBQ2hCLG9EQUFNQTtvQ0FBQzZDLFNBQVE7OENBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNeEM7R0FwRU0vQjtLQUFBQTtBQXFFTiwrREFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01vZGFsL0NyZWF0ZUNvbW11bml0eS9DcmVhdGVDb21tdW5pdHlNb2RhbC50c3g/MDllOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIE1vZGFsLCBNb2RhbE92ZXJsYXksIE1vZGFsQ29udGVudCwgTW9kYWxIZWFkZXIsIE1vZGFsQ2xvc2VCdXR0b24sIE1vZGFsQm9keSwgTW9kYWxGb290ZXIsIEJveCwgRGl2aWRlciwgVGV4dCwgSW5wdXQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBDcmVhdGVDb21tdW5pdHlNb2RhbFByb3BzID0ge1xuICAgIG9wZW46IGJvb2xlYW47XG4gICAgaGFuZGxlQ2xvc2U6ICgpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBDcmVhdGVDb21tdW5pdHlNb2RhbDpSZWFjdC5GQzxDcmVhdGVDb21tdW5pdHlNb2RhbFByb3BzPiA9ICh7XG4gICAgb3BlbixcbiAgICBoYW5kbGVDbG9zZVxufSkgPT4ge1xuICAgIGNvbnN0IFtjb21tdW5pdHlOYW1lLCBzZXRDb21tdW5pdHlOYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbY2hhcnNSZW1haW5pbmcsIHNldENoYXJzUmVtYWluaW5nXSA9IHVzZVN0YXRlKDIxKTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aD4yMSkgcmV0dXJuO1xuICAgICAgICBzZXRDb21tdW5pdHlOYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIC8vUmVjYWxjdWxhdGUgaG93IG1hbnkgY2hhcnMgd2UgaGF2ZSBpbiB0aGUgbmFtZVxuICAgICAgICBzZXRDaGFyc1JlbWFpbmluZygyMSAtIGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGgpO1xuICAgIH1cbjsgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICBcbiAgICAgICAgICA8TW9kYWwgaXNPcGVuPXtvcGVufSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICA8TW9kYWxPdmVybGF5IC8+XG4gICAgICAgICAgICA8TW9kYWxDb250ZW50PlxuICAgICAgICAgICAgICA8TW9kYWxIZWFkZXJcbiAgICAgICAgICAgICAgZGlzcGxheT0nZmxleCdcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgIGZvbnRTaXplPXsxNX1cbiAgICAgICAgICAgICAgcGFkZGluZz17M31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENyZWF0ZSBhIGNvbW11bml0eVxuICAgICAgICAgICAgICAgIDwvTW9kYWxIZWFkZXI+XG4gICAgICAgICAgICAgICAgPEJveCBwbD17M30gcHI9ezN9PlxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxDbG9zZUJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxCb2R5XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9J2ZsZXgnXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nPVwiMTBweCAwcHhcIiAgXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9ezYwMH0gZm9udFNpemU9ezE1fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT17MTF9IGNvbG9yPVwiZ3JheS41MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21tdW5pdHkgbmFtZXMgaW5jbHVkaW5nIGNhcGl0YWxpemF0aW9uIGNhbm5vdCBiZSBjaGFuZ2VkXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPSdyZWxhdGl2ZScgXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A9XCIyOHB4XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0PVwiMTBweFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMHB4XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImdyYXkuNDAwXCI+ci88L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj0ncmVsYXRpdmUnXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tbXVuaXR5TmFtZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsPVwiMjJweFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD57Y2hhcnNSZW1haW5pbmd9Q2hhcmFjdGVycyByZW1haW5pbmc8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgIFxuICAgICAgICAgICAgICA8TW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT0nYmx1ZScgbXI9ezN9IG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdnaG9zdCc+Q3JlYXRlIENvbW11bml0eTwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L01vZGFsRm9vdGVyPlxuICAgICAgICAgICAgPC9Nb2RhbENvbnRlbnQ+XG4gICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPC8+XG4gICAgICApXG59XG5leHBvcnQgZGVmYXVsdCBDcmVhdGVDb21tdW5pdHlNb2RhbDsiXSwibmFtZXMiOlsiQnV0dG9uIiwiTW9kYWwiLCJNb2RhbE92ZXJsYXkiLCJNb2RhbENvbnRlbnQiLCJNb2RhbEhlYWRlciIsIk1vZGFsQ2xvc2VCdXR0b24iLCJNb2RhbEJvZHkiLCJNb2RhbEZvb3RlciIsIkJveCIsIkRpdmlkZXIiLCJUZXh0IiwiSW5wdXQiLCJSZWFjdCIsInVzZVN0YXRlIiwiQ3JlYXRlQ29tbXVuaXR5TW9kYWwiLCJvcGVuIiwiaGFuZGxlQ2xvc2UiLCJjb21tdW5pdHlOYW1lIiwic2V0Q29tbXVuaXR5TmFtZSIsImNoYXJzUmVtYWluaW5nIiwic2V0Q2hhcnNSZW1haW5pbmciLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwiaXNPcGVuIiwib25DbG9zZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZm9udFNpemUiLCJwYWRkaW5nIiwicGwiLCJwciIsImZvbnRXZWlnaHQiLCJjb2xvciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIndpZHRoIiwic2l6ZSIsIm9uQ2hhbmdlIiwiY29sb3JTY2hlbWUiLCJtciIsIm9uQ2xpY2siLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\n"));

/***/ })

});