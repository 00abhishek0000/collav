"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/lobby/[lobby]/page",{

/***/ "(app-pages-browser)/./app/components/Docs.tsx":
/*!*********************************!*\
  !*** ./app/components/Docs.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-quill */ \"(app-pages-browser)/./node_modules/react-quill/lib/index.js\");\n/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ \"(app-pages-browser)/./node_modules/react-quill/dist/quill.snow.css\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"http://localhost:3001\");\n\nconst Docs = ()=>{\n    _s();\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const quillstyles = {\n        height: \"800px\",\n        width: \"800px\",\n        backgroundColor: \"white\",\n        color: \"#004\"\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        socket.on(\"contentChange\", (newContent)=>{\n            setContent(newContent);\n        });\n        socket.on(\"getDocState\", ()=>{\n            socket.emit(\"DocState\", content);\n        });\n        socket.on(\"DocStateFromServer\", (content)=>{\n            setContent(content);\n        });\n    }, []);\n    const handleContentChange = (newContent)=>{\n        setContent(newContent);\n        socket.emit(\"contentChange\", newContent);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_quill__WEBPACK_IMPORTED_MODULE_1___default()), {\n        value: content,\n        style: quillstyles,\n        onChange: handleContentChange,\n        theme: \"snow\"\n    }, void 0, false, {\n        fileName: \"/Users/abhi/Desktop/collav/client/app/components/Docs.tsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Docs, \"qK7hKmYotXV7M4IAzrTlzZXomQM=\");\n_c = Docs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Docs);\nvar _c;\n$RefreshReg$(_c, \"Docs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0RvY3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBcUM7QUFDSTtBQUNSO0FBQ2pDLE1BQU1FLFNBQVNELDREQUFFQSxDQUFDO0FBR2dDO0FBRWxELE1BQU1LLE9BQU87O0lBQ1QsTUFBTSxDQUFDQyxTQUFRQyxXQUFXLEdBQUdILCtDQUFRQSxDQUFDO0lBRXRDLE1BQU1JLGNBQWM7UUFDaEJDLFFBQVM7UUFDVEMsT0FBUTtRQUNSQyxpQkFBa0I7UUFDbEJDLE9BQVE7SUFDWjtJQUNBVCxnREFBU0EsQ0FBQztRQUNSRixPQUFPWSxFQUFFLENBQUMsaUJBQWdCLENBQUNDO1lBQ3pCUCxXQUFXTztRQUNiO1FBRUFiLE9BQU9ZLEVBQUUsQ0FBQyxlQUFjO1lBQ3RCWixPQUFPYyxJQUFJLENBQUMsWUFBV1Q7UUFDekI7UUFFQUwsT0FBT1ksRUFBRSxDQUFDLHNCQUFxQixDQUFDUDtZQUM5QkMsV0FBV0Q7UUFDYjtJQUVGLEdBQUUsRUFBRTtJQUNKLE1BQU1VLHNCQUFzQixDQUFDRjtRQUMzQlAsV0FBV087UUFDWGIsT0FBT2MsSUFBSSxDQUFDLGlCQUFnQkQ7SUFDOUI7SUFFRixxQkFDTSw4REFBQ2Ysb0RBQVVBO1FBQUNrQixPQUFPWDtRQUFTWSxPQUFPVjtRQUFhVyxVQUFVSDtRQUFxQkksT0FBTTs7Ozs7O0FBRTdGO0dBL0JNZjtLQUFBQTtBQWlDTiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Eb2NzLnRzeD9lMDBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdFF1aWxsIGZyb20gXCJyZWFjdC1xdWlsbFwiO1xuaW1wb3J0ICdyZWFjdC1xdWlsbC9kaXN0L3F1aWxsLnNub3cuY3NzJztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuY29uc3Qgc29ja2V0ID0gaW8oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMScpO1xuXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IERvY3MgPSAoKSA9PiB7XG4gICAgY29uc3QgW2NvbnRlbnQsc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBxdWlsbHN0eWxlcyA9IHtcbiAgICAgICAgaGVpZ2h0IDogJzgwMHB4JyxcbiAgICAgICAgd2lkdGggOiAnODAwcHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnd2hpdGUnLCBcbiAgICAgICAgY29sb3IgOiAnIzAwNCcsXG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgc29ja2V0Lm9uKCdjb250ZW50Q2hhbmdlJywobmV3Q29udGVudCk9PntcbiAgICAgICAgc2V0Q29udGVudChuZXdDb250ZW50KTtcbiAgICAgIH0pO1xuXG4gICAgICBzb2NrZXQub24oJ2dldERvY1N0YXRlJywoKT0+e1xuICAgICAgICBzb2NrZXQuZW1pdCgnRG9jU3RhdGUnLGNvbnRlbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIHNvY2tldC5vbignRG9jU3RhdGVGcm9tU2VydmVyJywoY29udGVudCk9PntcbiAgICAgICAgc2V0Q29udGVudChjb250ZW50KTtcbiAgICAgIH0pO1xuXG4gICAgfSxbXSlcbiAgICBjb25zdCBoYW5kbGVDb250ZW50Q2hhbmdlID0gKG5ld0NvbnRlbnQgOiBzdHJpbmcpPT57XG4gICAgICBzZXRDb250ZW50KG5ld0NvbnRlbnQpO1xuICAgICAgc29ja2V0LmVtaXQoJ2NvbnRlbnRDaGFuZ2UnLG5ld0NvbnRlbnQpO1xuICAgIH1cblxuICByZXR1cm4gKFxuICAgICAgICA8UmVhY3RRdWlsbCB2YWx1ZT17Y29udGVudH0gc3R5bGU9e3F1aWxsc3R5bGVzfSBvbkNoYW5nZT17aGFuZGxlQ29udGVudENoYW5nZX0gdGhlbWU9XCJzbm93XCIvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERvY3MiXSwibmFtZXMiOlsiUmVhY3RRdWlsbCIsImlvIiwic29ja2V0IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRvY3MiLCJjb250ZW50Iiwic2V0Q29udGVudCIsInF1aWxsc3R5bGVzIiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIm9uIiwibmV3Q29udGVudCIsImVtaXQiLCJoYW5kbGVDb250ZW50Q2hhbmdlIiwidmFsdWUiLCJzdHlsZSIsIm9uQ2hhbmdlIiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Docs.tsx\n"));

/***/ })

});