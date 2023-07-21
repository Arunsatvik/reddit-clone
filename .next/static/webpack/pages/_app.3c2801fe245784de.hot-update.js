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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst CreateCommunityModal = (param)=>{\n    let { open, handleClose } = param;\n    _s();\n    const [communityName, setCommunityName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [charsRemaining, setCharsRemaining] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(21);\n    const [communityType, setCommunityType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"public\");\n    const handleChange = (event)=>{\n        if (event.target.value.length > 21) return;\n        setCommunityName(event.target.value);\n        //Recalculate how many chars we have in the name\n        setCharsRemaining(21 - event.target.value.length);\n    };\n    const onCommunityTypeChange = (event)=>{\n        setCommunityType(event.target.name);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n            isOpen: open,\n            onClose: handleClose,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}, void 0, false, {\n                    fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            fontSize: 15,\n                            padding: 3,\n                            children: \"Create a community\"\n                        }, void 0, false, {\n                            fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                            pl: 3,\n                            pr: 3,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {\n                                    fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalCloseButton, {}, void 0, false, {\n                                    fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {\n                                    display: \"flex\",\n                                    flexDirection: \"column\",\n                                    padding: \"10px 0px\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                            fontWeight: 600,\n                                            fontSize: 15,\n                                            children: \"Name\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                            fontSize: 11,\n                                            color: \"gray.500\",\n                                            children: \"Community names including capitalization cannot be changed\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                            position: \"relative\",\n                                            top: \"28px\",\n                                            left: \"10px\",\n                                            width: \"20px\",\n                                            color: \"gray.400\",\n                                            children: \"r/\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                            position: \"relative\",\n                                            value: communityName,\n                                            size: \"sm\",\n                                            pl: \"22px\",\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                            fontSize: \"9pt\",\n                                            color: charsRemaining === 0 ? \"red\" : \"gray.500\",\n                                            children: [\n                                                charsRemaining,\n                                                \"Characters remaining\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                            mt: 4,\n                                            mb: 4,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                                    fontWeight: 600,\n                                                    fontSize: 15,\n                                                    children: \"Community Type\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 29\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                                                    spacing: 2\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 29\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {\n                                                    name: \"public\",\n                                                    isChecked: communityType === \"public\",\n                                                    onChange: onCommunityTypeChange,\n                                                    children: \"Public\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 33\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {\n                                                    name: \"restricted\",\n                                                    isChecked: communityType === \"restricted\",\n                                                    onChange: onCommunityTypeChange,\n                                                    children: \"Restricted\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 33\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {\n                                                    name: \"private\",\n                                                    isChecked: communityType === \"private\",\n                                                    onChange: onCommunityTypeChange,\n                                                    children: \"Private\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalFooter, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    colorScheme: \"blue\",\n                                    mr: 3,\n                                    onClick: handleClose,\n                                    children: \"Close\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    variant: \"ghost\",\n                                    children: \"Create Community\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\",\n            lineNumber: 30,\n            columnNumber: 11\n        }, undefined)\n    }, void 0, false);\n};\n_s(CreateCommunityModal, \"od6yZf36GZc4bWZRaOxgSWGOoN0=\");\n_c = CreateCommunityModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateCommunityModal);\nvar _c;\n$RefreshReg$(_c, \"CreateCommunityModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9DcmVhdGVDb21tdW5pdHkvQ3JlYXRlQ29tbXVuaXR5TW9kYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdMO0FBQ3hJO0FBT3hDLE1BQU1nQix1QkFBMkQ7UUFBQyxFQUM5REMsSUFBSSxFQUNKQyxXQUFXLEVBQ2Q7O0lBQ0csTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDTSxnQkFBZ0JDLGtCQUFrQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNRLGVBQWVDLGlCQUFpQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUVuRCxNQUFNVSxlQUFlLENBQUNDO1FBQ2xCLElBQUdBLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLEdBQUMsSUFBSTtRQUNqQ1QsaUJBQWlCTSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7UUFDbkMsZ0RBQWdEO1FBQ2hETixrQkFBa0IsS0FBS0ksTUFBTUMsTUFBTSxDQUFDQyxLQUFLLENBQUNDLE1BQU07SUFDcEQ7SUFFQSxNQUFNQyx3QkFBd0IsQ0FBQ0o7UUFDM0JGLGlCQUFpQkUsTUFBTUMsTUFBTSxDQUFDSSxJQUFJO0lBQ3RDO0lBQ0MscUJBQ0c7a0JBRUUsNEVBQUM5QixtREFBS0E7WUFBQytCLFFBQVFmO1lBQU1nQixTQUFTZjs7OEJBQzVCLDhEQUFDaEIsMERBQVlBOzs7Ozs4QkFDYiw4REFBQ0MsMERBQVlBOztzQ0FDWCw4REFBQ0MseURBQVdBOzRCQUNaOEIsU0FBUTs0QkFDUkMsZUFBYzs0QkFDZEMsVUFBVTs0QkFDVkMsU0FBUztzQ0FDUjs7Ozs7O3NDQUdDLDhEQUFDN0IsaURBQUdBOzRCQUFDOEIsSUFBSTs0QkFBR0MsSUFBSTs7OENBQ1osOERBQUM5QixxREFBT0E7Ozs7OzhDQUNSLDhEQUFDSiw4REFBZ0JBOzs7Ozs4Q0FDakIsOERBQUNDLHVEQUFTQTtvQ0FDVjRCLFNBQVE7b0NBQ1JDLGVBQWM7b0NBQ2RFLFNBQVE7O3NEQUVKLDhEQUFDM0Isa0RBQUlBOzRDQUFDOEIsWUFBWTs0Q0FBS0osVUFBVTtzREFBSTs7Ozs7O3NEQUdyQyw4REFBQzFCLGtEQUFJQTs0Q0FBQzBCLFVBQVU7NENBQUlLLE9BQU07c0RBQVc7Ozs7OztzREFHckMsOERBQUMvQixrREFBSUE7NENBQ0xnQyxVQUFTOzRDQUNUQyxLQUFJOzRDQUNKQyxNQUFLOzRDQUNMQyxPQUFNOzRDQUNOSixPQUFNO3NEQUFXOzs7Ozs7c0RBQ2pCLDhEQUFDOUIsbURBQUtBOzRDQUNOK0IsVUFBUzs0Q0FDVGQsT0FBT1Q7NENBQ1AyQixNQUFLOzRDQUNMUixJQUFHOzRDQUNIUyxVQUFVdEI7Ozs7OztzREFFViw4REFBQ2Ysa0RBQUlBOzRDQUNMMEIsVUFBUzs0Q0FDVEssT0FBT3BCLG1CQUFtQixJQUFHLFFBQVE7O2dEQUNuQ0E7Z0RBQWU7Ozs7Ozs7c0RBRWpCLDhEQUFDYixpREFBR0E7NENBQUN3QyxJQUFJOzRDQUFHQyxJQUFJOzs4REFDWiw4REFBQ3ZDLGtEQUFJQTtvREFBQzhCLFlBQVk7b0RBQUtKLFVBQVU7OERBQUk7Ozs7Ozs4REFJckMsOERBQUN4QixtREFBS0E7b0RBQUNzQyxTQUFTOzs7Ozs7OERBRVosOERBQUNyQyxzREFBUUE7b0RBQ1RrQixNQUFLO29EQUNMb0IsV0FBVzVCLGtCQUFnQjtvREFDM0J3QixVQUFVakI7OERBQ1Q7Ozs7Ozs4REFHRCw4REFBQ2pCLHNEQUFRQTtvREFDVGtCLE1BQUs7b0RBQ0xvQixXQUFXNUIsa0JBQWdCO29EQUMzQndCLFVBQVVqQjs4REFDVDs7Ozs7OzhEQUdELDhEQUFDakIsc0RBQVFBO29EQUNUa0IsTUFBSztvREFDTG9CLFdBQVc1QixrQkFBZ0I7b0RBQzNCd0IsVUFBVWpCOzhEQUNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBT25CLDhEQUFDdkIseURBQVdBOzs4Q0FDViw4REFBQ1Asb0RBQU1BO29DQUFDb0QsYUFBWTtvQ0FBT0MsSUFBSTtvQ0FBR0MsU0FBU3BDOzhDQUFhOzs7Ozs7OENBR3hELDhEQUFDbEIsb0RBQU1BO29DQUFDdUQsU0FBUTs4Q0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14QztHQTFHTXZDO0tBQUFBO0FBMkdOLCtEQUFlQSxvQkFBb0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWwvQ3JlYXRlQ29tbXVuaXR5L0NyZWF0ZUNvbW11bml0eU1vZGFsLnRzeD8wOWU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgTW9kYWwsIE1vZGFsT3ZlcmxheSwgTW9kYWxDb250ZW50LCBNb2RhbEhlYWRlciwgTW9kYWxDbG9zZUJ1dHRvbiwgTW9kYWxCb2R5LCBNb2RhbEZvb3RlciwgQm94LCBEaXZpZGVyLCBUZXh0LCBJbnB1dCwgU3RhY2ssIENoZWNrYm94IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbnR5cGUgQ3JlYXRlQ29tbXVuaXR5TW9kYWxQcm9wcyA9IHtcbiAgICBvcGVuOiBib29sZWFuO1xuICAgIGhhbmRsZUNsb3NlOiAoKSA9PiB2b2lkO1xufTtcblxuY29uc3QgQ3JlYXRlQ29tbXVuaXR5TW9kYWw6UmVhY3QuRkM8Q3JlYXRlQ29tbXVuaXR5TW9kYWxQcm9wcz4gPSAoe1xuICAgIG9wZW4sXG4gICAgaGFuZGxlQ2xvc2Vcbn0pID0+IHtcbiAgICBjb25zdCBbY29tbXVuaXR5TmFtZSwgc2V0Q29tbXVuaXR5TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2NoYXJzUmVtYWluaW5nLCBzZXRDaGFyc1JlbWFpbmluZ10gPSB1c2VTdGF0ZSgyMSk7XG4gICAgY29uc3QgW2NvbW11bml0eVR5cGUsIHNldENvbW11bml0eVR5cGVdID0gdXNlU3RhdGUoXCJwdWJsaWNcIik7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGg+MjEpIHJldHVybjtcbiAgICAgICAgc2V0Q29tbXVuaXR5TmFtZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAvL1JlY2FsY3VsYXRlIGhvdyBtYW55IGNoYXJzIHdlIGhhdmUgaW4gdGhlIG5hbWVcbiAgICAgICAgc2V0Q2hhcnNSZW1haW5pbmcoMjEgLSBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25Db21tdW5pdHlUeXBlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBzZXRDb21tdW5pdHlUeXBlKGV2ZW50LnRhcmdldC5uYW1lKTtcbiAgICB9XG47ICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgXG4gICAgICAgICAgPE1vZGFsIGlzT3Blbj17b3Blbn0gb25DbG9zZT17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgPE1vZGFsT3ZlcmxheSAvPlxuICAgICAgICAgICAgPE1vZGFsQ29udGVudD5cbiAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyXG4gICAgICAgICAgICAgIGRpc3BsYXk9J2ZsZXgnXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICBmb250U2l6ZT17MTV9XG4gICAgICAgICAgICAgIHBhZGRpbmc9ezN9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDcmVhdGUgYSBjb21tdW5pdHlcbiAgICAgICAgICAgICAgICA8L01vZGFsSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxCb3ggcGw9ezN9IHByPXszfT5cbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsQ2xvc2VCdXR0b24gLz5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsQm9keVxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PSdmbGV4J1xuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZz1cIjEwcHggMHB4XCIgIFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PXs2MDB9IGZvbnRTaXplPXsxNX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9ezExfSBjb2xvcj1cImdyYXkuNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tbXVuaXR5IG5hbWVzIGluY2x1ZGluZyBjYXBpdGFsaXphdGlvbiBjYW5ub3QgYmUgY2hhbmdlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj0ncmVsYXRpdmUnIFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wPVwiMjhweFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdD1cIjEwcHhcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBweFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmF5LjQwMFwiPnIvPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249J3JlbGF0aXZlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbW11bml0eU5hbWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBwbD1cIjIycHhcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiOXB0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y2hhcnNSZW1haW5pbmcgPT09IDA/ICdyZWQnIDogXCJncmF5LjUwMFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPntjaGFyc1JlbWFpbmluZ31DaGFyYWN0ZXJzIHJlbWFpbmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBtdD17NH0gbWI9ezQgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PXs2MDB9IGZvbnRTaXplPXsxNX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbW11bml0eSBUeXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBjaGVja2JveCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHVibGljXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2hlY2tlZD17Y29tbXVuaXR5VHlwZT09PSdwdWJsaWMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25Db21tdW5pdHlUeXBlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQdWJsaWNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmVzdHJpY3RlZFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NoZWNrZWQ9e2NvbW11bml0eVR5cGU9PT0ncmVzdHJpY3RlZCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNvbW11bml0eVR5cGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlc3RyaWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJpdmF0ZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NoZWNrZWQ9e2NvbW11bml0eVR5cGU9PT0ncHJpdmF0ZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNvbW11bml0eVR5cGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaXZhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsQm9keT5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICBcbiAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9J2JsdWUnIG1yPXszfSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nZ2hvc3QnPkNyZWF0ZSBDb21tdW5pdHk8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgIDwvTW9kYWxDb250ZW50PlxuICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvPlxuICAgICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlQ29tbXVuaXR5TW9kYWw7Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIk1vZGFsIiwiTW9kYWxPdmVybGF5IiwiTW9kYWxDb250ZW50IiwiTW9kYWxIZWFkZXIiLCJNb2RhbENsb3NlQnV0dG9uIiwiTW9kYWxCb2R5IiwiTW9kYWxGb290ZXIiLCJCb3giLCJEaXZpZGVyIiwiVGV4dCIsIklucHV0IiwiU3RhY2siLCJDaGVja2JveCIsIlJlYWN0IiwidXNlU3RhdGUiLCJDcmVhdGVDb21tdW5pdHlNb2RhbCIsIm9wZW4iLCJoYW5kbGVDbG9zZSIsImNvbW11bml0eU5hbWUiLCJzZXRDb21tdW5pdHlOYW1lIiwiY2hhcnNSZW1haW5pbmciLCJzZXRDaGFyc1JlbWFpbmluZyIsImNvbW11bml0eVR5cGUiLCJzZXRDb21tdW5pdHlUeXBlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsIm9uQ29tbXVuaXR5VHlwZUNoYW5nZSIsIm5hbWUiLCJpc09wZW4iLCJvbkNsb3NlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmb250U2l6ZSIsInBhZGRpbmciLCJwbCIsInByIiwiZm9udFdlaWdodCIsImNvbG9yIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJzaXplIiwib25DaGFuZ2UiLCJtdCIsIm1iIiwic3BhY2luZyIsImlzQ2hlY2tlZCIsImNvbG9yU2NoZW1lIiwibXIiLCJvbkNsaWNrIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Modal/CreateCommunity/CreateCommunityModal.tsx\n"));

/***/ })

});