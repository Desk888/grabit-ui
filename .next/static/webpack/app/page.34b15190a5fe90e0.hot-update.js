/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/layout/ProductCard.tsx":
/*!***********************************************!*\
  !*** ./src/components/layout/ProductCard.tsx ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./src/components/layout/ProductGrid.tsx":
/*!***********************************************!*\
  !*** ./src/components/layout/ProductGrid.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductGrid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductCard */ \"(app-pages-browser)/./src/components/layout/ProductCard.tsx\");\n/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ProductCard__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst SAMPLE_PRODUCTS = [\n    {\n        id: 1,\n        title: \"Vintage Desk Lamp\",\n        description: \"Beautiful brass desk lamp in perfect working condition. Great for home office.\",\n        imageUrl: \"https://images.unsplash.com/photo-1507473885765-e6ed057f782c\",\n        location: \"Brooklyn, NY\",\n        postedDate: \"2 days ago\"\n    },\n    {\n        id: 2,\n        title: \"Acoustic Guitar\",\n        description: \"Beginner acoustic guitar, perfect for learning. Includes carry case.\",\n        imageUrl: \"https://images.unsplash.com/photo-1510915361894-db8b60106cb1\",\n        location: \"Queens, NY\",\n        postedDate: \"1 day ago\"\n    },\n    {\n        id: 3,\n        title: \"Plant Collection\",\n        description: \"Various indoor plants looking for a new home. All healthy and well-maintained.\",\n        imageUrl: \"https://images.unsplash.com/photo-1463320726281-696a485928c7\",\n        location: \"Manhattan, NY\",\n        postedDate: \"4 hours ago\"\n    }\n];\nfunction ProductGrid() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\",\n        children: SAMPLE_PRODUCTS.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_ProductCard__WEBPACK_IMPORTED_MODULE_2___default()), {\n                ...product\n            }, product.id, false, {\n                fileName: \"/Users/lorenzofilippini/workspace/grabit-ui/src/components/layout/ProductGrid.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/lorenzofilippini/workspace/grabit-ui/src/components/layout/ProductGrid.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_c = ProductGrid;\nvar _c;\n$RefreshReg$(_c, \"ProductGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9Qcm9kdWN0R3JpZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUNjO0FBRXhDLE1BQU1FLGtCQUFrQjtJQUN0QjtRQUNFQyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxVQUFVO1FBQ1ZDLFVBQVU7UUFDVkMsWUFBWTtJQUNkO0lBQ0E7UUFDRUwsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsVUFBVTtRQUNWQyxVQUFVO1FBQ1ZDLFlBQVk7SUFDZDtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLFVBQVU7UUFDVkMsVUFBVTtRQUNWQyxZQUFZO0lBQ2Q7Q0FDRDtBQUVjLFNBQVNDO0lBQ3RCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNaVCxnQkFBZ0JVLEdBQUcsQ0FBQyxDQUFDQyx3QkFDcEIsOERBQUNaLHFEQUFXQTtnQkFBbUIsR0FBR1ksT0FBTztlQUF2QkEsUUFBUVYsRUFBRTs7Ozs7Ozs7OztBQUlwQztLQVJ3Qk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L1Byb2R1Y3RHcmlkLnRzeD9lMzg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSAnLi9Qcm9kdWN0Q2FyZCc7XG5cbmNvbnN0IFNBTVBMRV9QUk9EVUNUUyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiAnVmludGFnZSBEZXNrIExhbXAnLFxuICAgIGRlc2NyaXB0aW9uOiAnQmVhdXRpZnVsIGJyYXNzIGRlc2sgbGFtcCBpbiBwZXJmZWN0IHdvcmtpbmcgY29uZGl0aW9uLiBHcmVhdCBmb3IgaG9tZSBvZmZpY2UuJyxcbiAgICBpbWFnZVVybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA3NDczODg1NzY1LWU2ZWQwNTdmNzgyYycsXG4gICAgbG9jYXRpb246ICdCcm9va2x5biwgTlknLFxuICAgIHBvc3RlZERhdGU6ICcyIGRheXMgYWdvJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiAnQWNvdXN0aWMgR3VpdGFyJyxcbiAgICBkZXNjcmlwdGlvbjogJ0JlZ2lubmVyIGFjb3VzdGljIGd1aXRhciwgcGVyZmVjdCBmb3IgbGVhcm5pbmcuIEluY2x1ZGVzIGNhcnJ5IGNhc2UuJyxcbiAgICBpbWFnZVVybDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTEwOTE1MzYxODk0LWRiOGI2MDEwNmNiMScsXG4gICAgbG9jYXRpb246ICdRdWVlbnMsIE5ZJyxcbiAgICBwb3N0ZWREYXRlOiAnMSBkYXkgYWdvJyxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiAnUGxhbnQgQ29sbGVjdGlvbicsXG4gICAgZGVzY3JpcHRpb246ICdWYXJpb3VzIGluZG9vciBwbGFudHMgbG9va2luZyBmb3IgYSBuZXcgaG9tZS4gQWxsIGhlYWx0aHkgYW5kIHdlbGwtbWFpbnRhaW5lZC4nLFxuICAgIGltYWdlVXJsOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NjMzMjA3MjYyODEtNjk2YTQ4NTkyOGM3JyxcbiAgICBsb2NhdGlvbjogJ01hbmhhdHRhbiwgTlknLFxuICAgIHBvc3RlZERhdGU6ICc0IGhvdXJzIGFnbycsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0R3JpZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTZcIj5cbiAgICAgIHtTQU1QTEVfUFJPRFVDVFMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgIDxQcm9kdWN0Q2FyZCBrZXk9e3Byb2R1Y3QuaWR9IHsuLi5wcm9kdWN0fSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvZHVjdENhcmQiLCJTQU1QTEVfUFJPRFVDVFMiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZVVybCIsImxvY2F0aW9uIiwicG9zdGVkRGF0ZSIsIlByb2R1Y3RHcmlkIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicHJvZHVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/layout/ProductGrid.tsx\n"));

/***/ })

});