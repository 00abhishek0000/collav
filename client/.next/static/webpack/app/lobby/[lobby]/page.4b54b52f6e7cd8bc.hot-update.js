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

/***/ "(app-pages-browser)/./app/components/Canvas.tsx":
/*!***********************************!*\
  !*** ./app/components/Canvas.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useDraw */ \"(app-pages-browser)/./app/hooks/useDraw.ts\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _functions_drawLine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/drawLine */ \"(app-pages-browser)/./app/functions/drawLine.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)(\"http://localhost:3001\");\nconst Canvas = (param)=>{\n    let { clear } = param;\n    _s();\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#000\");\n    const { canvasRef, onMouseDown } = (0,_hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__.useDraw)(createLine);\n    const [fullClear, setFullClear] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        socket.on(\"clear\", allclear);\n        socket.on(\"clear_done\", clearDone);\n        if (clear || fullClear) {\n            canvasRef.current.getContext(\"2d\").clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);\n        }\n        return ()=>{\n            socket.off(\"clear\");\n        };\n    }, [\n        clear,\n        fullClear\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _canvasRef_current;\n        const ctx = (_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.getContext(\"2d\");\n        socket.emit(\"newClient\");\n        socket.on(\"getCanvasState\", ()=>{\n            var _canvasRef_current, _canvasRef_current1;\n            if (!((_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.toDataURL())) return;\n            socket.emit(\"canvasState\", (_canvasRef_current1 = canvasRef.current) === null || _canvasRef_current1 === void 0 ? void 0 : _canvasRef_current1.toDataURL());\n        });\n        socket.on(\"draw_line\", (param)=>{\n            let { prevPoint, currentPoint, color } = param;\n            if (!ctx) return;\n            (0,_functions_drawLine__WEBPACK_IMPORTED_MODULE_4__.drawLine)({\n                prevPoint,\n                currentPoint,\n                ctx,\n                color\n            });\n        });\n        socket.on(\"canvStateFromServer\", (state)=>{\n            const img = new Image;\n            img.src = state;\n            img.onload = ()=>{\n                var _ctx;\n                (_ctx = ctx) === null || _ctx === void 0 ? void 0 : _ctx.drawImage(img, 0, 0);\n            };\n        });\n        return ()=>{\n            socket.off(\"draw_line\");\n            socket.off(\"canvStateFromServer\");\n            socket.off(\"getCanvasState\");\n        };\n    }, [\n        canvasRef\n    ]);\n    function allclear() {\n        setFullClear(true);\n    }\n    function clearDone() {\n        setFullClear(false);\n    }\n    function createLine(param) {\n        let { prevPoint, currentPoint, ctx } = param;\n        socket.emit(\"draw_line\", {\n            prevPoint,\n            currentPoint,\n            color\n        });\n        (0,_functions_drawLine__WEBPACK_IMPORTED_MODULE_4__.drawLine)({\n            prevPoint,\n            currentPoint,\n            ctx,\n            color\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n            onMouseDown: onMouseDown,\n            width: \"800\",\n            height: \"600\",\n            ref: canvasRef,\n            className: \"canvas\"\n        }, void 0, false, {\n            fileName: \"/Users/abhi/Desktop/collav/client/app/components/Canvas.tsx\",\n            lineNumber: 75,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Canvas, \"GVrZ1X08QQFrIPZpgbwu13IT9+I=\", false, function() {\n    return [\n        _hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__.useDraw\n    ];\n});\n_c = Canvas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Canvas);\nvar _c;\n$RefreshReg$(_c, \"Canvas\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzBEO0FBQ2Y7QUFDUDtBQUNhO0FBRWpELE1BQU1NLFNBQVNGLG9EQUFFQSxDQUFDO0FBV2xCLE1BQU1HLFNBQWlDO1FBQUMsRUFBQ0MsS0FBSyxFQUFDOztJQUM3QyxNQUFNLENBQUNDLE9BQU1DLFNBQVMsR0FBR1IsK0NBQVFBLENBQVM7SUFDMUMsTUFBTSxFQUFDUyxTQUFTLEVBQUNDLFdBQVcsRUFBQyxHQUFHVCx1REFBT0EsQ0FBQ1U7SUFDeEMsTUFBTSxDQUFDQyxXQUFVQyxhQUFhLEdBQUdiLCtDQUFRQSxDQUFVO0lBRW5ERCxnREFBU0EsQ0FBQztRQUNOSyxPQUFPVSxFQUFFLENBQUMsU0FBUUM7UUFDbEJYLE9BQU9VLEVBQUUsQ0FBQyxjQUFhRTtRQUN2QixJQUFHVixTQUFTTSxXQUFVO1lBQ3BCSCxVQUFXUSxPQUFPLENBQUVDLFVBQVUsQ0FBQyxNQUFPQyxTQUFTLENBQUMsR0FBRSxHQUFFVixVQUFVUSxPQUFPLENBQUVHLEtBQUssRUFBQ1gsVUFBVVEsT0FBTyxDQUFFSSxNQUFNO1FBQ3hHO1FBQ0EsT0FBTTtZQUNKakIsT0FBT2tCLEdBQUcsQ0FBQztRQUNiO0lBQ0osR0FBRTtRQUFDaEI7UUFBTU07S0FBVTtJQUVuQmIsZ0RBQVNBLENBQUM7WUFDS1U7UUFBYixNQUFNYyxPQUFPZCxxQkFBQUEsVUFBVVEsT0FBTyxjQUFqQlIseUNBQUFBLG1CQUFtQlMsVUFBVSxDQUFDO1FBQzNDZCxPQUFPb0IsSUFBSSxDQUFDO1FBQ1pwQixPQUFPVSxFQUFFLENBQUMsa0JBQWlCO2dCQUNyQkwsb0JBQ3NCQTtZQUQxQixJQUFHLEdBQUNBLHFCQUFBQSxVQUFVUSxPQUFPLGNBQWpCUix5Q0FBQUEsbUJBQW1CZ0IsU0FBUyxLQUFJO1lBQ3BDckIsT0FBT29CLElBQUksQ0FBQyxnQkFBY2Ysc0JBQUFBLFVBQVVRLE9BQU8sY0FBakJSLDBDQUFBQSxvQkFBbUJnQixTQUFTO1FBQ3hEO1FBQ0FyQixPQUFPVSxFQUFFLENBQUMsYUFBWTtnQkFBQyxFQUFDWSxTQUFTLEVBQUNDLFlBQVksRUFBQ3BCLEtBQUssRUFBZTtZQUMvRCxJQUFHLENBQUNnQixLQUFLO1lBQ1RwQiw2REFBUUEsQ0FBQztnQkFBQ3VCO2dCQUFVQztnQkFBYUo7Z0JBQUloQjtZQUFLO1FBQzlDO1FBQ0FILE9BQU9VLEVBQUUsQ0FBQyx1QkFBc0IsQ0FBQ2M7WUFDN0IsTUFBTUMsTUFBTSxJQUFJQztZQUNoQkQsSUFBSUUsR0FBRyxHQUFHSDtZQUNWQyxJQUFJRyxNQUFNLEdBQUc7b0JBQ1hUO2lCQUFBQSxPQUFBQSxpQkFBQUEsMkJBQUFBLEtBQUtVLFNBQVMsQ0FBQ0osS0FBSSxHQUFFO1lBQ3ZCO1FBQ0o7UUFFQSxPQUFNO1lBQ0p6QixPQUFPa0IsR0FBRyxDQUFDO1lBQ1hsQixPQUFPa0IsR0FBRyxDQUFDO1lBQ1hsQixPQUFPa0IsR0FBRyxDQUFDO1FBQ2I7SUFFRixHQUFFO1FBQUNiO0tBQVU7SUFFYixTQUFTTTtRQUNMRixhQUFhO0lBQ2pCO0lBQ0EsU0FBU0c7UUFDUEgsYUFBYTtJQUNmO0lBRUEsU0FBU0YsV0FBVyxLQUFtQztZQUFuQyxFQUFDZSxTQUFTLEVBQUNDLFlBQVksRUFBQ0osR0FBRyxFQUFRLEdBQW5DO1FBQ2xCbkIsT0FBT29CLElBQUksQ0FBQyxhQUFhO1lBQUNFO1lBQVVDO1lBQWFwQjtRQUFLO1FBQ3RESiw2REFBUUEsQ0FBQztZQUFDdUI7WUFBVUM7WUFBYUo7WUFBSWhCO1FBQUs7SUFDNUM7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQzJCO1lBQU94QixhQUFhQTtZQUFjVSxPQUFNO1lBQU1DLFFBQU87WUFBTWMsS0FBSzFCO1lBQVcyQixXQUFVOzs7Ozs7O0FBSTVGO0dBN0RNL0I7O1FBRTRCSixtREFBT0E7OztLQUZuQ0k7QUErRE4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzLnRzeD85ZmU4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VEcmF3IH0gZnJvbSAnLi4vaG9va3MvdXNlRHJhdyc7XG5pbXBvcnQge2lvfSBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcbmltcG9ydCB7IGRyYXdMaW5lIH0gZnJvbSAnLi4vZnVuY3Rpb25zL2RyYXdMaW5lJztcblxuY29uc3Qgc29ja2V0ID0gaW8oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMScpXG5cbmludGVyZmFjZSBDYW52YXNQcm9wc3tcbiAgY2xlYXIgOiBib29sZWFuLFxufVxudHlwZSBEcmF3TGluZVByb3BzID0ge1xuICBjb2xvciA6IHN0cmluZyxcbiAgcHJldlBvaW50IDogUG9pbnQgfCBudWxsLFxuICBjdXJyZW50UG9pbnQ6IFBvaW50LFxufVxuXG5jb25zdCBDYW52YXMgOiBSZWFjdC5GQzxDYW52YXNQcm9wcz4gPSAoe2NsZWFyfSkgPT4ge1xuICBjb25zdCBbY29sb3Isc2V0Q29sb3JdID0gdXNlU3RhdGU8c3RyaW5nPignIzAwMCcpO1xuICBjb25zdCB7Y2FudmFzUmVmLG9uTW91c2VEb3dufSA9IHVzZURyYXcoY3JlYXRlTGluZSk7XG4gIGNvbnN0IFtmdWxsQ2xlYXIsc2V0RnVsbENsZWFyXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICAgIHNvY2tldC5vbignY2xlYXInLGFsbGNsZWFyKTtcbiAgICAgIHNvY2tldC5vbignY2xlYXJfZG9uZScsY2xlYXJEb25lKTtcbiAgICAgIGlmKGNsZWFyIHx8IGZ1bGxDbGVhcil7XG4gICAgICAgIGNhbnZhc1JlZiEuY3VycmVudCEuZ2V0Q29udGV4dCgnMmQnKSEuY2xlYXJSZWN0KDAsMCxjYW52YXNSZWYuY3VycmVudCEud2lkdGgsY2FudmFzUmVmLmN1cnJlbnQhLmhlaWdodCk7XG4gICAgICB9XG4gICAgICByZXR1cm4oKT0+e1xuICAgICAgICBzb2NrZXQub2ZmKCdjbGVhcicpXG4gICAgICB9XG4gIH0sW2NsZWFyLGZ1bGxDbGVhcl0pXG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgY29uc3QgY3R4ID0gIGNhbnZhc1JlZi5jdXJyZW50Py5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHNvY2tldC5lbWl0KCduZXdDbGllbnQnKTtcbiAgICBzb2NrZXQub24oJ2dldENhbnZhc1N0YXRlJywoKT0+e1xuICAgICAgaWYoIWNhbnZhc1JlZi5jdXJyZW50Py50b0RhdGFVUkwoKSkgcmV0dXJuO1xuICAgICAgc29ja2V0LmVtaXQoJ2NhbnZhc1N0YXRlJyxjYW52YXNSZWYuY3VycmVudD8udG9EYXRhVVJMKCkpO1xuICAgIH0pXG4gICAgc29ja2V0Lm9uKCdkcmF3X2xpbmUnLCh7cHJldlBvaW50LGN1cnJlbnRQb2ludCxjb2xvcn06RHJhd0xpbmVQcm9wcyk9PntcbiAgICAgICAgaWYoIWN0eCkgcmV0dXJuO1xuICAgICAgICBkcmF3TGluZSh7cHJldlBvaW50LGN1cnJlbnRQb2ludCxjdHgsY29sb3J9KTtcbiAgICB9KVxuICAgIHNvY2tldC5vbignY2FudlN0YXRlRnJvbVNlcnZlcicsKHN0YXRlOnN0cmluZyk9PntcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlO1xuICAgICAgICBpbWcuc3JjID0gc3RhdGU7XG4gICAgICAgIGltZy5vbmxvYWQgPSAoKT0+e1xuICAgICAgICAgIGN0eD8uZHJhd0ltYWdlKGltZywwLDApO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybigpPT57XG4gICAgICBzb2NrZXQub2ZmKCdkcmF3X2xpbmUnKVxuICAgICAgc29ja2V0Lm9mZignY2FudlN0YXRlRnJvbVNlcnZlcicpXG4gICAgICBzb2NrZXQub2ZmKCdnZXRDYW52YXNTdGF0ZScpXG4gICAgfVxuXG4gIH0sW2NhbnZhc1JlZl0pXG4gIFxuICBmdW5jdGlvbiBhbGxjbGVhcigpe1xuICAgICAgc2V0RnVsbENsZWFyKHRydWUpO1xuICB9XG4gIGZ1bmN0aW9uIGNsZWFyRG9uZSgpe1xuICAgIHNldEZ1bGxDbGVhcihmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVMaW5lKHtwcmV2UG9pbnQsY3VycmVudFBvaW50LGN0eH0gOiBEcmF3KXtcbiAgICBzb2NrZXQuZW1pdCgnZHJhd19saW5lJywoe3ByZXZQb2ludCxjdXJyZW50UG9pbnQsY29sb3J9KSlcbiAgICBkcmF3TGluZSh7cHJldlBvaW50LGN1cnJlbnRQb2ludCxjdHgsY29sb3J9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGNhbnZhcyBvbk1vdXNlRG93bj17b25Nb3VzZURvd259ICB3aWR0aD1cIjgwMFwiIGhlaWdodD1cIjYwMFwiIHJlZj17Y2FudmFzUmVmfSBjbGFzc05hbWU9J2NhbnZhcyc+XG4gICAgICA8L2NhbnZhcz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW52YXMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZURyYXciLCJpbyIsImRyYXdMaW5lIiwic29ja2V0IiwiQ2FudmFzIiwiY2xlYXIiLCJjb2xvciIsInNldENvbG9yIiwiY2FudmFzUmVmIiwib25Nb3VzZURvd24iLCJjcmVhdGVMaW5lIiwiZnVsbENsZWFyIiwic2V0RnVsbENsZWFyIiwib24iLCJhbGxjbGVhciIsImNsZWFyRG9uZSIsImN1cnJlbnQiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJvZmYiLCJjdHgiLCJlbWl0IiwidG9EYXRhVVJMIiwicHJldlBvaW50IiwiY3VycmVudFBvaW50Iiwic3RhdGUiLCJpbWciLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsImRyYXdJbWFnZSIsImNhbnZhcyIsInJlZiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Canvas.tsx\n"));

/***/ })

});