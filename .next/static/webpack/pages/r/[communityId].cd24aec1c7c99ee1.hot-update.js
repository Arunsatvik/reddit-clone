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

/***/ "./src/components/Posts/Posts.tsx":
/*!****************************************!*\
  !*** ./src/components/Posts/Posts.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase/clientApp */ \"./src/firebase/clientApp.ts\");\n/* harmony import */ var _src_hooks_usePosts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/src/hooks/usePosts */ \"./src/hooks/usePosts.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Posts = (param)=>{\n    let { communityData } = param;\n    _s();\n    //useAuthstate\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { postStateValue, setPostStateValue } = (0,_src_hooks_usePosts__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const getPosts = async ()=>{\n        try {\n            //getposts for this community\n            const postsQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__.firestore, \"posts\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"communityId\", \"==\", communityData.id), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)(\"createdAt\", \"desc\"));\n            //store in post state\n            const postDocs = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(postsQuery);\n            const posts = postDocs.docs.map((doc)=>({\n                    id: doc.id,\n                    ...doc.data()\n                }));\n            setPostStateValue((prev)=>({\n                    ...prev,\n                    posts: posts\n                }));\n            console.log(\"posts\", posts);\n        } catch (error) {\n            console.log(\"getPosts error\", error.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getPosts();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Posts\"\n    }, void 0, false, {\n        fileName: \"/Users/SATVIK/Desktop/reddit-clone/src/components/Posts/Posts.tsx\",\n        lineNumber: 64,\n        columnNumber: 12\n    }, undefined);\n};\n_s(Posts, \"sCgMcIRQjwjVo3ODXpAUw8NierQ=\", false, function() {\n    return [\n        _src_hooks_usePosts__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb3N0cy9Qb3N0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFtRDtBQVd2QjtBQUl5QjtBQUlUO0FBUzVDLE1BQU1VLFFBQTZCO1FBQUMsRUFBRUMsYUFBYSxFQUFFOztJQUVqRCxjQUFjO0lBQ2QsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sRUFBRVksY0FBYyxFQUFFQyxpQkFBaUIsRUFBRSxHQUFHTiwrREFBUUE7SUFFdEQsTUFBTU8sV0FBVztRQUNiLElBQUk7WUFDQSw2QkFBNkI7WUFDN0IsTUFBTUMsYUFBYVgseURBQUtBLENBQ3BCSCw4REFBVUEsQ0FBQ0ssMERBQVNBLEVBQUUsVUFDdEJELHlEQUFLQSxDQUFDLGVBQWUsTUFBTUksY0FBY08sRUFBRSxHQUMzQ2IsMkRBQU9BLENBQUMsYUFBYTtZQUd6QixxQkFBcUI7WUFDckIsTUFBTWMsV0FBVyxNQUFNZiwyREFBT0EsQ0FBQ2E7WUFDL0IsTUFBTUcsUUFBUUQsU0FBU0UsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBUztvQkFBRUwsSUFBSUssSUFBSUwsRUFBRTtvQkFBRSxHQUFHSyxJQUFJQyxJQUFJLEVBQUU7Z0JBQUM7WUFFdEVULGtCQUFrQixDQUFDVSxPQUFVO29CQUN6QixHQUFHQSxJQUFJO29CQUNQTCxPQUFPQTtnQkFDWDtZQUVBTSxRQUFRQyxHQUFHLENBQUUsU0FBU1A7UUFFMUIsRUFBRSxPQUFPUSxPQUFZO1lBQ2pCRixRQUFRQyxHQUFHLENBQUMsa0JBQWtCQyxNQUFNQyxPQUFPO1FBRS9DO0lBQ0o7SUFFQTVCLGdEQUFTQSxDQUFDO1FBQ05lO0lBQ0osR0FBRyxFQUFFO0lBQ0wscUJBQU8sOERBQUNjO2tCQUFJOzs7Ozs7QUFDaEI7R0FwQ01wQjs7UUFJNENELDJEQUFRQTs7O0tBSnBEQztBQXFDTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qb3N0cy9Qb3N0cy50c3g/YTQxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHtcbiAgY29sbGVjdGlvbixcbiAgZG9jLFxuICBnZXREb2NzLFxuICBvblNuYXBzaG90LFxuICBvcmRlckJ5LFxuICBxdWVyeSxcbiAgd2hlcmUsXG4gIHdyaXRlQmF0Y2gsXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlLCB1c2VTZXRSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IGF1dGhNb2RhbFN0YXRlIH0gZnJvbSBcIi4uLy4uL2F0b21zL2F1dGhNb2RhbEF0b21cIjtcbmltcG9ydCB7IENvbW11bml0eSB9IGZyb20gXCIuLi8uLi9hdG9tcy9jb21tdW5pdGllc0F0b21cIjtcbmltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gXCIuLi8uLi9maXJlYmFzZS9jbGllbnRBcHBcIjtcblxuaW1wb3J0IHsgUG9zdCwgcG9zdFN0YXRlIH0gZnJvbSBcIi4uLy4uL2F0b21zL3Bvc3RzQXRvbVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgdXNlUG9zdHMgZnJvbSBcIkAvc3JjL2hvb2tzL3VzZVBvc3RzXCI7XG5cblxuXG50eXBlIFBvc3RzUHJvcHMgPSB7XG4gICAgY29tbXVuaXR5RGF0YTogQ29tbXVuaXR5O1xuICAgIFxufTtcblxuY29uc3QgUG9zdHM6UmVhY3QuRkM8UG9zdHNQcm9wcz4gPSAoeyBjb21tdW5pdHlEYXRhIH0pID0+IHtcbiAgICBcbiAgICAvL3VzZUF1dGhzdGF0ZVxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB7IHBvc3RTdGF0ZVZhbHVlLCBzZXRQb3N0U3RhdGVWYWx1ZSB9ID0gdXNlUG9zdHMoKTtcblxuICAgIGNvbnN0IGdldFBvc3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy9nZXRwb3N0cyBmb3IgdGhpcyBjb21tdW5pdHlcbiAgICAgICAgICAgIGNvbnN0IHBvc3RzUXVlcnkgPSBxdWVyeShcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uKGZpcmVzdG9yZSwgXCJwb3N0c1wiKSxcbiAgICAgICAgICAgICAgICB3aGVyZShcImNvbW11bml0eUlkXCIsIFwiPT1cIiwgY29tbXVuaXR5RGF0YS5pZCEpLFxuICAgICAgICAgICAgICAgIG9yZGVyQnkoXCJjcmVhdGVkQXRcIiwgXCJkZXNjXCIpXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vc3RvcmUgaW4gcG9zdCBzdGF0ZVxuICAgICAgICAgICAgY29uc3QgcG9zdERvY3MgPSBhd2FpdCBnZXREb2NzKHBvc3RzUXVlcnkpO1xuICAgICAgICAgICAgY29uc3QgcG9zdHMgPSBwb3N0RG9jcy5kb2NzLm1hcCgoZG9jKSA9PiAoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKTtcblxuICAgICAgICAgICAgc2V0UG9zdFN0YXRlVmFsdWUoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBwb3N0czogcG9zdHMgYXMgUG9zdFtdLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggXCJwb3N0c1wiLCBwb3N0cyk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldFBvc3RzIGVycm9yJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2V0UG9zdHMoKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIDxkaXY+UG9zdHM8L2Rpdj5cbn1cbmV4cG9ydCBkZWZhdWx0IFBvc3RzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsIm9yZGVyQnkiLCJxdWVyeSIsIndoZXJlIiwiZmlyZXN0b3JlIiwidXNlUG9zdHMiLCJQb3N0cyIsImNvbW11bml0eURhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInBvc3RTdGF0ZVZhbHVlIiwic2V0UG9zdFN0YXRlVmFsdWUiLCJnZXRQb3N0cyIsInBvc3RzUXVlcnkiLCJpZCIsInBvc3REb2NzIiwicG9zdHMiLCJkb2NzIiwibWFwIiwiZG9jIiwiZGF0YSIsInByZXYiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJtZXNzYWdlIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Posts/Posts.tsx\n"));

/***/ })

});