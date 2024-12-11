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
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductGrid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout_ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layout/ProductCard */ \"(app-pages-browser)/./src/components/layout/ProductCard.tsx\");\n/* harmony import */ var _components_layout_ProductCard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_layout_ProductCard__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout_PaginationControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/layout/PaginationControls */ \"(app-pages-browser)/./src/components/layout/PaginationControls.tsx\");\n/* harmony import */ var _components_layout_useProducts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/layout/useProducts */ \"(app-pages-browser)/./src/components/layout/useProducts.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProductGrid() {\n    _s();\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const { products, isLoading, error } = (0,_components_layout_useProducts__WEBPACK_IMPORTED_MODULE_4__.useProducts)();\n    const PRODUCTS_PER_PAGE = 8 // 4 cards per row * 2 rows\n    ;\n    const totalPages = Math.ceil(((products === null || products === void 0 ? void 0 : products.length) || 0) / PRODUCTS_PER_PAGE);\n    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;\n    const endIndex = startIndex + PRODUCTS_PER_PAGE;\n    const currentProducts = (products === null || products === void 0 ? void 0 : products.slice(startIndex, endIndex)) || [];\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center py-8\",\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/lorenzofilippini/Desktop/grabit-ui/src/components/layout/ProductGrid.tsx\",\n            lineNumber: 20,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center py-8 text-red-500\",\n            children: \"Error loading products\"\n        }, void 0, false, {\n            fileName: \"/Users/lorenzofilippini/Desktop/grabit-ui/src/components/layout/ProductGrid.tsx\",\n            lineNumber: 24,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-6 bg-gray-50 p-6 rounded-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4\",\n                children: currentProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_layout_ProductCard__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        product: product\n                    }, product.id, false, {\n                        fileName: \"/Users/lorenzofilippini/Desktop/grabit-ui/src/components/layout/ProductGrid.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/lorenzofilippini/Desktop/grabit-ui/src/components/layout/ProductGrid.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_PaginationControls__WEBPACK_IMPORTED_MODULE_3__.PaginationControls, {\n                currentPage: currentPage,\n                totalPages: totalPages,\n                onPageChange: setCurrentPage,\n                className: \"mt-8\"\n            }, void 0, false, {\n                fileName: \"/Users/lorenzofilippini/Desktop/grabit-ui/src/components/layout/ProductGrid.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lorenzofilippini/Desktop/grabit-ui/src/components/layout/ProductGrid.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductGrid, \"FrTOj/VCluR0kUgroR/wMzCU6ZU=\", false, function() {\n    return [\n        _components_layout_useProducts__WEBPACK_IMPORTED_MODULE_4__.useProducts\n    ];\n});\n_c = ProductGrid;\nvar _c;\n$RefreshReg$(_c, \"ProductGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9Qcm9kdWN0R3JpZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVnQztBQUN5QjtBQUNrQjtBQUNkO0FBRTlDLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR04sK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxFQUFFTyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFLEdBQUdOLDJFQUFXQTtJQUVsRCxNQUFNTyxvQkFBb0IsRUFBRSwyQkFBMkI7O0lBQ3ZELE1BQU1DLGFBQWFDLEtBQUtDLElBQUksQ0FBQyxDQUFDTixDQUFBQSxxQkFBQUEsK0JBQUFBLFNBQVVPLE1BQU0sS0FBSSxLQUFLSjtJQUV2RCxNQUFNSyxhQUFhLENBQUNWLGNBQWMsS0FBS0s7SUFDdkMsTUFBTU0sV0FBV0QsYUFBYUw7SUFDOUIsTUFBTU8sa0JBQWtCVixDQUFBQSxxQkFBQUEsK0JBQUFBLFNBQVVXLEtBQUssQ0FBQ0gsWUFBWUMsY0FBYSxFQUFFO0lBRW5FLElBQUlSLFdBQVc7UUFDYixxQkFBTyw4REFBQ1c7WUFBSUMsV0FBVTtzQkFBbUI7Ozs7OztJQUMzQztJQUVBLElBQUlYLE9BQU87UUFDVCxxQkFBTyw4REFBQ1U7WUFBSUMsV0FBVTtzQkFBZ0M7Ozs7OztJQUN4RDtJQUVBLHFCQUNFLDhEQUFDRDtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pILGdCQUFnQkksR0FBRyxDQUFDLENBQUNDLHdCQUNwQiw4REFBQ3JCLHVFQUFXQTt3QkFBa0JxQixTQUFTQTt1QkFBckJBLFFBQVFDLEVBQUU7Ozs7Ozs7Ozs7MEJBSWhDLDhEQUFDckIscUZBQWtCQTtnQkFDakJHLGFBQWFBO2dCQUNiTSxZQUFZQTtnQkFDWmEsY0FBY2xCO2dCQUNkYyxXQUFVOzs7Ozs7Ozs7Ozs7QUFJbEI7R0FuQ3dCaEI7O1FBRWlCRCx1RUFBV0E7OztLQUY1QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L1Byb2R1Y3RHcmlkLnRzeD9lMzg4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9sYXlvdXQvUHJvZHVjdENhcmQnXG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29udHJvbHMgfSBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0L1BhZ2luYXRpb25Db250cm9scydcbmltcG9ydCB7IHVzZVByb2R1Y3RzIH0gZnJvbSAnQC9jb21wb25lbnRzL2xheW91dC91c2VQcm9kdWN0cydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdEdyaWQoKSB7XG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSlcbiAgY29uc3QgeyBwcm9kdWN0cywgaXNMb2FkaW5nLCBlcnJvciB9ID0gdXNlUHJvZHVjdHMoKVxuXG4gIGNvbnN0IFBST0RVQ1RTX1BFUl9QQUdFID0gOCAvLyA0IGNhcmRzIHBlciByb3cgKiAyIHJvd3NcbiAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbCgocHJvZHVjdHM/Lmxlbmd0aCB8fCAwKSAvIFBST0RVQ1RTX1BFUl9QQUdFKVxuICBcbiAgY29uc3Qgc3RhcnRJbmRleCA9IChjdXJyZW50UGFnZSAtIDEpICogUFJPRFVDVFNfUEVSX1BBR0VcbiAgY29uc3QgZW5kSW5kZXggPSBzdGFydEluZGV4ICsgUFJPRFVDVFNfUEVSX1BBR0VcbiAgY29uc3QgY3VycmVudFByb2R1Y3RzID0gcHJvZHVjdHM/LnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KSB8fCBbXVxuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS04XCI+TG9hZGluZy4uLjwvZGl2PlxuICB9XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktOCB0ZXh0LXJlZC01MDBcIj5FcnJvciBsb2FkaW5nIHByb2R1Y3RzPC9kaXY+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02IGJnLWdyYXktNTAgcC02IHJvdW5kZWQtbGdcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNFwiPlxuICAgICAgICB7Y3VycmVudFByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgIDxQcm9kdWN0Q2FyZCBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxQYWdpbmF0aW9uQ29udHJvbHNcbiAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxuICAgICAgICB0b3RhbFBhZ2VzPXt0b3RhbFBhZ2VzfVxuICAgICAgICBvblBhZ2VDaGFuZ2U9e3NldEN1cnJlbnRQYWdlfVxuICAgICAgICBjbGFzc05hbWU9XCJtdC04XCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJQcm9kdWN0Q2FyZCIsIlBhZ2luYXRpb25Db250cm9scyIsInVzZVByb2R1Y3RzIiwiUHJvZHVjdEdyaWQiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwicHJvZHVjdHMiLCJpc0xvYWRpbmciLCJlcnJvciIsIlBST0RVQ1RTX1BFUl9QQUdFIiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwiY3VycmVudFByb2R1Y3RzIiwic2xpY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJvblBhZ2VDaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/layout/ProductGrid.tsx\n"));

/***/ })

});