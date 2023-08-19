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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useDraw */ \"(app-pages-browser)/./app/hooks/useDraw.ts\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _functions_drawLine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/drawLine */ \"(app-pages-browser)/./app/functions/drawLine.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)(\"http://localhost:3001\");\nconst Canvas = (param)=>{\n    let { clear, adn } = param;\n    _s();\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#000\");\n    const { canvasRef, onMouseDown } = (0,_hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__.useDraw)(createLine);\n    const [fullClear, setFullClear] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        socket.on(\"clear\", allclear);\n        socket.on(\"clear_done\", clearDone);\n        if (clear || fullClear) {\n            canvasRef.current.getContext(\"2d\").clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);\n        }\n        return ()=>{\n            socket.off(\"clear\");\n        };\n    }, [\n        clear,\n        fullClear\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _canvasRef_current;\n        const ctx = (_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.getContext(\"2d\");\n        socket.emit(\"newClient\");\n        socket.on(\"getCanvasState\", ()=>{\n            var _canvasRef_current, _canvasRef_current1;\n            if (!((_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.toDataURL())) return;\n            socket.emit(\"canvasState\", (_canvasRef_current1 = canvasRef.current) === null || _canvasRef_current1 === void 0 ? void 0 : _canvasRef_current1.toDataURL());\n        });\n        socket.on(\"draw_line\", (param)=>{\n            let { prevPoint, currentPoint, color } = param;\n            if (!ctx) return;\n            (0,_functions_drawLine__WEBPACK_IMPORTED_MODULE_4__.drawLine)({\n                prevPoint,\n                currentPoint,\n                ctx,\n                color\n            });\n        });\n        socket.on(\"canvStateFromServer\", (state)=>{\n            const img = new Image;\n            img.src = state;\n            img.onload = ()=>{\n                var _ctx;\n                (_ctx = ctx) === null || _ctx === void 0 ? void 0 : _ctx.drawImage(img, 0, 0);\n            };\n        });\n        return ()=>{\n            socket.off(\"draw_line\");\n            socket.off(\"canvStateFromServer\");\n            socket.off(\"getCanvasState\");\n        };\n    }, [\n        canvasRef\n    ]);\n    function allclear() {\n        setFullClear(true);\n    }\n    function clearDone() {\n        setFullClear(false);\n    }\n    function createLine(param) {\n        let { prevPoint, currentPoint, ctx } = param;\n        socket.emit(\"draw_line\", {\n            prevPoint,\n            currentPoint,\n            color\n        });\n        (0,_functions_drawLine__WEBPACK_IMPORTED_MODULE_4__.drawLine)({\n            prevPoint,\n            currentPoint,\n            ctx,\n            color\n        });\n    }\n    console.log(adn);\n    // let canvasWidth = 750;\n    // if(adn.current) canvasWidth =  adn.current.clientWidth*95/100;\n    // let canvasHeight = 770;\n    // if(adn.current) canvasHeight =  adn.current.clientHeight*95/100;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n            onMouseDown: onMouseDown,\n            ref: canvasRef,\n            width: canvasWidth,\n            height: canvasHeight,\n            className: \"canvas\"\n        }, void 0, false, {\n            fileName: \"/Users/abhi/Desktop/collav/client/app/components/Canvas.tsx\",\n            lineNumber: 82,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Canvas, \"GVrZ1X08QQFrIPZpgbwu13IT9+I=\", false, function() {\n    return [\n        _hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__.useDraw\n    ];\n});\n_c = Canvas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Canvas);\nvar _c;\n$RefreshReg$(_c, \"Canvas\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzBEO0FBQ2Y7QUFDUDtBQUNhO0FBRWpELE1BQU1NLFNBQVNGLG9EQUFFQSxDQUFDO0FBWWxCLE1BQU1HLFNBQWlDO1FBQUMsRUFBQ0MsS0FBSyxFQUFDQyxHQUFHLEVBQUM7O0lBQ2pELE1BQU0sQ0FBQ0MsT0FBTUMsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBUztJQUMxQyxNQUFNLEVBQUNVLFNBQVMsRUFBQ0MsV0FBVyxFQUFDLEdBQUdWLHVEQUFPQSxDQUFDVztJQUN4QyxNQUFNLENBQUNDLFdBQVVDLGFBQWEsR0FBR2QsK0NBQVFBLENBQVU7SUFFbkRELGdEQUFTQSxDQUFDO1FBQ05LLE9BQU9XLEVBQUUsQ0FBQyxTQUFRQztRQUNsQlosT0FBT1csRUFBRSxDQUFDLGNBQWFFO1FBQ3ZCLElBQUdYLFNBQVNPLFdBQVU7WUFDcEJILFVBQVdRLE9BQU8sQ0FBRUMsVUFBVSxDQUFDLE1BQU9DLFNBQVMsQ0FBQyxHQUFFLEdBQUVWLFVBQVVRLE9BQU8sQ0FBRUcsS0FBSyxFQUFDWCxVQUFVUSxPQUFPLENBQUVJLE1BQU07UUFDeEc7UUFDQSxPQUFNO1lBQ0psQixPQUFPbUIsR0FBRyxDQUFDO1FBQ2I7SUFDSixHQUFFO1FBQUNqQjtRQUFNTztLQUFVO0lBRW5CZCxnREFBU0EsQ0FBQztZQUVLVztRQUFiLE1BQU1jLE9BQU9kLHFCQUFBQSxVQUFVUSxPQUFPLGNBQWpCUix5Q0FBQUEsbUJBQW1CUyxVQUFVLENBQUM7UUFDM0NmLE9BQU9xQixJQUFJLENBQUM7UUFDWnJCLE9BQU9XLEVBQUUsQ0FBQyxrQkFBaUI7Z0JBQ3JCTCxvQkFDc0JBO1lBRDFCLElBQUcsR0FBQ0EscUJBQUFBLFVBQVVRLE9BQU8sY0FBakJSLHlDQUFBQSxtQkFBbUJnQixTQUFTLEtBQUk7WUFDcEN0QixPQUFPcUIsSUFBSSxDQUFDLGdCQUFjZixzQkFBQUEsVUFBVVEsT0FBTyxjQUFqQlIsMENBQUFBLG9CQUFtQmdCLFNBQVM7UUFDeEQ7UUFDQXRCLE9BQU9XLEVBQUUsQ0FBQyxhQUFZO2dCQUFDLEVBQUNZLFNBQVMsRUFBQ0MsWUFBWSxFQUFDcEIsS0FBSyxFQUFlO1lBQy9ELElBQUcsQ0FBQ2dCLEtBQUs7WUFDVHJCLDZEQUFRQSxDQUFDO2dCQUFDd0I7Z0JBQVVDO2dCQUFhSjtnQkFBSWhCO1lBQUs7UUFDOUM7UUFDQUosT0FBT1csRUFBRSxDQUFDLHVCQUFzQixDQUFDYztZQUM3QixNQUFNQyxNQUFNLElBQUlDO1lBQ2hCRCxJQUFJRSxHQUFHLEdBQUdIO1lBQ1ZDLElBQUlHLE1BQU0sR0FBRztvQkFDWFQ7aUJBQUFBLE9BQUFBLGlCQUFBQSwyQkFBQUEsS0FBS1UsU0FBUyxDQUFDSixLQUFJLEdBQUU7WUFDdkI7UUFDSjtRQUVBLE9BQU07WUFDSjFCLE9BQU9tQixHQUFHLENBQUM7WUFDWG5CLE9BQU9tQixHQUFHLENBQUM7WUFDWG5CLE9BQU9tQixHQUFHLENBQUM7UUFDYjtJQUVGLEdBQUU7UUFBQ2I7S0FBVTtJQUViLFNBQVNNO1FBQ0xGLGFBQWE7SUFDakI7SUFDQSxTQUFTRztRQUNQSCxhQUFhO0lBQ2Y7SUFFQSxTQUFTRixXQUFXLEtBQW1DO1lBQW5DLEVBQUNlLFNBQVMsRUFBQ0MsWUFBWSxFQUFDSixHQUFHLEVBQVEsR0FBbkM7UUFDbEJwQixPQUFPcUIsSUFBSSxDQUFDLGFBQWE7WUFBQ0U7WUFBVUM7WUFBYXBCO1FBQUs7UUFDdERMLDZEQUFRQSxDQUFDO1lBQUN3QjtZQUFVQztZQUFhSjtZQUFJaEI7UUFBSztJQUM1QztJQUNBMkIsUUFBUUMsR0FBRyxDQUFDN0I7SUFDWix5QkFBeUI7SUFDekIsaUVBQWlFO0lBQ2pFLDBCQUEwQjtJQUMxQixtRUFBbUU7SUFFbkUscUJBQ0U7a0JBQ0UsNEVBQUM4QjtZQUFPMUIsYUFBYUE7WUFBYzJCLEtBQUs1QjtZQUFXVyxPQUFPa0I7WUFBYWpCLFFBQVFrQjtZQUFlQyxXQUFVOzs7Ozs7O0FBSTlHO0dBbkVNcEM7O1FBRTRCSixtREFBT0E7OztLQUZuQ0k7QUFxRU4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzLnRzeD85ZmU4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VEcmF3IH0gZnJvbSAnLi4vaG9va3MvdXNlRHJhdyc7XG5pbXBvcnQge2lvfSBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcbmltcG9ydCB7IGRyYXdMaW5lIH0gZnJvbSAnLi4vZnVuY3Rpb25zL2RyYXdMaW5lJztcblxuY29uc3Qgc29ja2V0ID0gaW8oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMScpXG5cbmludGVyZmFjZSBDYW52YXNQcm9wc3tcbiAgY2xlYXIgOiBib29sZWFuLFxuICBhZG4gOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+LFxufVxudHlwZSBEcmF3TGluZVByb3BzID0ge1xuICBjb2xvciA6IHN0cmluZyxcbiAgcHJldlBvaW50IDogUG9pbnQgfCBudWxsLFxuICBjdXJyZW50UG9pbnQ6IFBvaW50LFxufVxuXG5jb25zdCBDYW52YXMgOiBSZWFjdC5GQzxDYW52YXNQcm9wcz4gPSAoe2NsZWFyLGFkbn0pID0+IHtcbiAgY29uc3QgW2NvbG9yLHNldENvbG9yXSA9IHVzZVN0YXRlPHN0cmluZz4oJyMwMDAnKTtcbiAgY29uc3Qge2NhbnZhc1JlZixvbk1vdXNlRG93bn0gPSB1c2VEcmF3KGNyZWF0ZUxpbmUpO1xuICBjb25zdCBbZnVsbENsZWFyLHNldEZ1bGxDbGVhcl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIFxuICB1c2VFZmZlY3QoKCk9PntcbiAgICAgIHNvY2tldC5vbignY2xlYXInLGFsbGNsZWFyKTtcbiAgICAgIHNvY2tldC5vbignY2xlYXJfZG9uZScsY2xlYXJEb25lKTtcbiAgICAgIGlmKGNsZWFyIHx8IGZ1bGxDbGVhcil7XG4gICAgICAgIGNhbnZhc1JlZiEuY3VycmVudCEuZ2V0Q29udGV4dCgnMmQnKSEuY2xlYXJSZWN0KDAsMCxjYW52YXNSZWYuY3VycmVudCEud2lkdGgsY2FudmFzUmVmLmN1cnJlbnQhLmhlaWdodCk7XG4gICAgICB9XG4gICAgICByZXR1cm4oKT0+e1xuICAgICAgICBzb2NrZXQub2ZmKCdjbGVhcicpXG4gICAgICB9XG4gIH0sW2NsZWFyLGZ1bGxDbGVhcl0pXG5cbiAgdXNlRWZmZWN0KCgpPT57XG5cbiAgICBjb25zdCBjdHggPSAgY2FudmFzUmVmLmN1cnJlbnQ/LmdldENvbnRleHQoJzJkJyk7XG4gICAgc29ja2V0LmVtaXQoJ25ld0NsaWVudCcpO1xuICAgIHNvY2tldC5vbignZ2V0Q2FudmFzU3RhdGUnLCgpPT57XG4gICAgICBpZighY2FudmFzUmVmLmN1cnJlbnQ/LnRvRGF0YVVSTCgpKSByZXR1cm47XG4gICAgICBzb2NrZXQuZW1pdCgnY2FudmFzU3RhdGUnLGNhbnZhc1JlZi5jdXJyZW50Py50b0RhdGFVUkwoKSk7XG4gICAgfSlcbiAgICBzb2NrZXQub24oJ2RyYXdfbGluZScsKHtwcmV2UG9pbnQsY3VycmVudFBvaW50LGNvbG9yfTpEcmF3TGluZVByb3BzKT0+e1xuICAgICAgICBpZighY3R4KSByZXR1cm47XG4gICAgICAgIGRyYXdMaW5lKHtwcmV2UG9pbnQsY3VycmVudFBvaW50LGN0eCxjb2xvcn0pO1xuICAgIH0pXG4gICAgc29ja2V0Lm9uKCdjYW52U3RhdGVGcm9tU2VydmVyJywoc3RhdGU6c3RyaW5nKT0+e1xuICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2U7XG4gICAgICAgIGltZy5zcmMgPSBzdGF0ZTtcbiAgICAgICAgaW1nLm9ubG9hZCA9ICgpPT57XG4gICAgICAgICAgY3R4Py5kcmF3SW1hZ2UoaW1nLDAsMCk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuKCk9PntcbiAgICAgIHNvY2tldC5vZmYoJ2RyYXdfbGluZScpXG4gICAgICBzb2NrZXQub2ZmKCdjYW52U3RhdGVGcm9tU2VydmVyJylcbiAgICAgIHNvY2tldC5vZmYoJ2dldENhbnZhc1N0YXRlJylcbiAgICB9XG5cbiAgfSxbY2FudmFzUmVmXSlcbiAgXG4gIGZ1bmN0aW9uIGFsbGNsZWFyKCl7XG4gICAgICBzZXRGdWxsQ2xlYXIodHJ1ZSk7XG4gIH1cbiAgZnVuY3Rpb24gY2xlYXJEb25lKCl7XG4gICAgc2V0RnVsbENsZWFyKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUxpbmUoe3ByZXZQb2ludCxjdXJyZW50UG9pbnQsY3R4fSA6IERyYXcpe1xuICAgIHNvY2tldC5lbWl0KCdkcmF3X2xpbmUnLCh7cHJldlBvaW50LGN1cnJlbnRQb2ludCxjb2xvcn0pKVxuICAgIGRyYXdMaW5lKHtwcmV2UG9pbnQsY3VycmVudFBvaW50LGN0eCxjb2xvcn0pXG4gIH1cbiAgY29uc29sZS5sb2coYWRuKTtcbiAgLy8gbGV0IGNhbnZhc1dpZHRoID0gNzUwO1xuICAvLyBpZihhZG4uY3VycmVudCkgY2FudmFzV2lkdGggPSAgYWRuLmN1cnJlbnQuY2xpZW50V2lkdGgqOTUvMTAwO1xuICAvLyBsZXQgY2FudmFzSGVpZ2h0ID0gNzcwO1xuICAvLyBpZihhZG4uY3VycmVudCkgY2FudmFzSGVpZ2h0ID0gIGFkbi5jdXJyZW50LmNsaWVudEhlaWdodCo5NS8xMDA7XG4gXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxjYW52YXMgb25Nb3VzZURvd249e29uTW91c2VEb3dufSAgcmVmPXtjYW52YXNSZWZ9IHdpZHRoPXtjYW52YXNXaWR0aH0gaGVpZ2h0PXtjYW52YXNIZWlnaHR9ICBjbGFzc05hbWU9J2NhbnZhcyc+XG4gICAgICA8L2NhbnZhcz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW52YXMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZURyYXciLCJpbyIsImRyYXdMaW5lIiwic29ja2V0IiwiQ2FudmFzIiwiY2xlYXIiLCJhZG4iLCJjb2xvciIsInNldENvbG9yIiwiY2FudmFzUmVmIiwib25Nb3VzZURvd24iLCJjcmVhdGVMaW5lIiwiZnVsbENsZWFyIiwic2V0RnVsbENsZWFyIiwib24iLCJhbGxjbGVhciIsImNsZWFyRG9uZSIsImN1cnJlbnQiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJvZmYiLCJjdHgiLCJlbWl0IiwidG9EYXRhVVJMIiwicHJldlBvaW50IiwiY3VycmVudFBvaW50Iiwic3RhdGUiLCJpbWciLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsImRyYXdJbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJjYW52YXMiLCJyZWYiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Canvas.tsx\n"));

/***/ })

});