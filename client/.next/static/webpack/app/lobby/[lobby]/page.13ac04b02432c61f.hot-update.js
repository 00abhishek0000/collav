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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useDraw */ \"(app-pages-browser)/./app/hooks/useDraw.ts\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _functions_drawLine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/drawLine */ \"(app-pages-browser)/./app/functions/drawLine.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)(\"http://localhost:3001\");\nconst Canvas = (param)=>{\n    let { clear } = param;\n    _s();\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#000\");\n    const { canvasRef, onMouseDown } = (0,_hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__.useDraw)(createLine);\n    const [fullClear, setFullClear] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    if (canvasRef.current) {\n        let canvasWidth1 = canvasRef.current.parentElement.clientWidth;\n        let canvasHeight1 = canvasRef.current.parentElement.clientHeight;\n    } else {}\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        socket.on(\"clear\", allclear);\n        socket.on(\"clear_done\", clearDone);\n        if (clear || fullClear) {\n            canvasRef.current.getContext(\"2d\").clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);\n        }\n        return ()=>{\n            socket.off(\"clear\");\n        };\n    }, [\n        clear,\n        fullClear\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _canvasRef_current;\n        const ctx = (_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.getContext(\"2d\");\n        socket.emit(\"newClient\");\n        socket.on(\"getCanvasState\", ()=>{\n            var _canvasRef_current, _canvasRef_current1;\n            if (!((_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.toDataURL())) return;\n            socket.emit(\"canvasState\", (_canvasRef_current1 = canvasRef.current) === null || _canvasRef_current1 === void 0 ? void 0 : _canvasRef_current1.toDataURL());\n        });\n        socket.on(\"draw_line\", (param)=>{\n            let { prevPoint, currentPoint, color } = param;\n            if (!ctx) return;\n            (0,_functions_drawLine__WEBPACK_IMPORTED_MODULE_4__.drawLine)({\n                prevPoint,\n                currentPoint,\n                ctx,\n                color\n            });\n        });\n        socket.on(\"canvStateFromServer\", (state)=>{\n            const img = new Image;\n            img.src = state;\n            img.onload = ()=>{\n                var _ctx;\n                (_ctx = ctx) === null || _ctx === void 0 ? void 0 : _ctx.drawImage(img, 0, 0);\n            };\n        });\n        return ()=>{\n            socket.off(\"draw_line\");\n            socket.off(\"canvStateFromServer\");\n            socket.off(\"getCanvasState\");\n        };\n    }, [\n        canvasRef\n    ]);\n    function allclear() {\n        setFullClear(true);\n    }\n    function clearDone() {\n        setFullClear(false);\n    }\n    function createLine(param) {\n        let { prevPoint, currentPoint, ctx } = param;\n        socket.emit(\"draw_line\", {\n            prevPoint,\n            currentPoint,\n            color\n        });\n        (0,_functions_drawLine__WEBPACK_IMPORTED_MODULE_4__.drawLine)({\n            prevPoint,\n            currentPoint,\n            ctx,\n            color\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n            onMouseDown: onMouseDown,\n            width: canvasWidth,\n            height: canvasHeight,\n            ref: canvasRef,\n            className: \"canvas\"\n        }, void 0, false, {\n            fileName: \"/Users/abhi/Desktop/collav/client/app/components/Canvas.tsx\",\n            lineNumber: 82,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Canvas, \"GVrZ1X08QQFrIPZpgbwu13IT9+I=\", false, function() {\n    return [\n        _hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__.useDraw\n    ];\n});\n_c = Canvas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Canvas);\nvar _c;\n$RefreshReg$(_c, \"Canvas\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzBEO0FBQ2Y7QUFDUDtBQUNhO0FBRWpELE1BQU1NLFNBQVNGLG9EQUFFQSxDQUFDO0FBV2xCLE1BQU1HLFNBQWlDO1FBQUMsRUFBQ0MsS0FBSyxFQUFDOztJQUM3QyxNQUFNLENBQUNDLE9BQU1DLFNBQVMsR0FBR1IsK0NBQVFBLENBQVM7SUFDMUMsTUFBTSxFQUFDUyxTQUFTLEVBQUNDLFdBQVcsRUFBQyxHQUFHVCx1REFBT0EsQ0FBQ1U7SUFDeEMsTUFBTSxDQUFDQyxXQUFVQyxhQUFhLEdBQUdiLCtDQUFRQSxDQUFVO0lBQ25ELElBQUdTLFVBQVVLLE9BQU8sRUFBQztRQUNuQixJQUFJQyxlQUFjTixVQUFXSyxPQUFPLENBQUVFLGFBQWEsQ0FBRUMsV0FBVztRQUNoRSxJQUFJQyxnQkFBZVQsVUFBV0ssT0FBTyxDQUFFRSxhQUFhLENBQUVHLFlBQVk7SUFDcEUsT0FBSyxDQUVMO0lBR0FwQixnREFBU0EsQ0FBQztRQUNOSyxPQUFPZ0IsRUFBRSxDQUFDLFNBQVFDO1FBQ2xCakIsT0FBT2dCLEVBQUUsQ0FBQyxjQUFhRTtRQUN2QixJQUFHaEIsU0FBU00sV0FBVTtZQUNwQkgsVUFBV0ssT0FBTyxDQUFFUyxVQUFVLENBQUMsTUFBT0MsU0FBUyxDQUFDLEdBQUUsR0FBRWYsVUFBVUssT0FBTyxDQUFFVyxLQUFLLEVBQUNoQixVQUFVSyxPQUFPLENBQUVZLE1BQU07UUFDeEc7UUFDQSxPQUFNO1lBQ0p0QixPQUFPdUIsR0FBRyxDQUFDO1FBQ2I7SUFDSixHQUFFO1FBQUNyQjtRQUFNTTtLQUFVO0lBRW5CYixnREFBU0EsQ0FBQztZQUNLVTtRQUFiLE1BQU1tQixPQUFPbkIscUJBQUFBLFVBQVVLLE9BQU8sY0FBakJMLHlDQUFBQSxtQkFBbUJjLFVBQVUsQ0FBQztRQUMzQ25CLE9BQU95QixJQUFJLENBQUM7UUFDWnpCLE9BQU9nQixFQUFFLENBQUMsa0JBQWlCO2dCQUNyQlgsb0JBQ3NCQTtZQUQxQixJQUFHLEdBQUNBLHFCQUFBQSxVQUFVSyxPQUFPLGNBQWpCTCx5Q0FBQUEsbUJBQW1CcUIsU0FBUyxLQUFJO1lBQ3BDMUIsT0FBT3lCLElBQUksQ0FBQyxnQkFBY3BCLHNCQUFBQSxVQUFVSyxPQUFPLGNBQWpCTCwwQ0FBQUEsb0JBQW1CcUIsU0FBUztRQUN4RDtRQUNBMUIsT0FBT2dCLEVBQUUsQ0FBQyxhQUFZO2dCQUFDLEVBQUNXLFNBQVMsRUFBQ0MsWUFBWSxFQUFDekIsS0FBSyxFQUFlO1lBQy9ELElBQUcsQ0FBQ3FCLEtBQUs7WUFDVHpCLDZEQUFRQSxDQUFDO2dCQUFDNEI7Z0JBQVVDO2dCQUFhSjtnQkFBSXJCO1lBQUs7UUFDOUM7UUFDQUgsT0FBT2dCLEVBQUUsQ0FBQyx1QkFBc0IsQ0FBQ2E7WUFDN0IsTUFBTUMsTUFBTSxJQUFJQztZQUNoQkQsSUFBSUUsR0FBRyxHQUFHSDtZQUNWQyxJQUFJRyxNQUFNLEdBQUc7b0JBQ1hUO2lCQUFBQSxPQUFBQSxpQkFBQUEsMkJBQUFBLEtBQUtVLFNBQVMsQ0FBQ0osS0FBSSxHQUFFO1lBQ3ZCO1FBQ0o7UUFFQSxPQUFNO1lBQ0o5QixPQUFPdUIsR0FBRyxDQUFDO1lBQ1h2QixPQUFPdUIsR0FBRyxDQUFDO1lBQ1h2QixPQUFPdUIsR0FBRyxDQUFDO1FBQ2I7SUFFRixHQUFFO1FBQUNsQjtLQUFVO0lBRWIsU0FBU1k7UUFDTFIsYUFBYTtJQUNqQjtJQUNBLFNBQVNTO1FBQ1BULGFBQWE7SUFDZjtJQUVBLFNBQVNGLFdBQVcsS0FBbUM7WUFBbkMsRUFBQ29CLFNBQVMsRUFBQ0MsWUFBWSxFQUFDSixHQUFHLEVBQVEsR0FBbkM7UUFDbEJ4QixPQUFPeUIsSUFBSSxDQUFDLGFBQWE7WUFBQ0U7WUFBVUM7WUFBYXpCO1FBQUs7UUFDdERKLDZEQUFRQSxDQUFDO1lBQUM0QjtZQUFVQztZQUFhSjtZQUFJckI7UUFBSztJQUM1QztJQUVBLHFCQUNFO2tCQUNFLDRFQUFDZ0M7WUFBTzdCLGFBQWFBO1lBQWNlLE9BQU9WO1lBQWFXLFFBQVFSO1lBQWNzQixLQUFLL0I7WUFBV2dDLFdBQVU7Ozs7Ozs7QUFJN0c7R0FwRU1wQzs7UUFFNEJKLG1EQUFPQTs7O0tBRm5DSTtBQXNFTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9DYW52YXMudHN4PzlmZTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZURyYXcgfSBmcm9tICcuLi9ob29rcy91c2VEcmF3JztcbmltcG9ydCB7aW99IGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuaW1wb3J0IHsgZHJhd0xpbmUgfSBmcm9tICcuLi9mdW5jdGlvbnMvZHJhd0xpbmUnO1xuXG5jb25zdCBzb2NrZXQgPSBpbygnaHR0cDovL2xvY2FsaG9zdDozMDAxJylcblxuaW50ZXJmYWNlIENhbnZhc1Byb3Bze1xuICBjbGVhciA6IGJvb2xlYW4sXG59XG50eXBlIERyYXdMaW5lUHJvcHMgPSB7XG4gIGNvbG9yIDogc3RyaW5nLFxuICBwcmV2UG9pbnQgOiBQb2ludCB8IG51bGwsXG4gIGN1cnJlbnRQb2ludDogUG9pbnQsXG59XG5cbmNvbnN0IENhbnZhcyA6IFJlYWN0LkZDPENhbnZhc1Byb3BzPiA9ICh7Y2xlYXJ9KSA9PiB7XG4gIGNvbnN0IFtjb2xvcixzZXRDb2xvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcjMDAwJyk7XG4gIGNvbnN0IHtjYW52YXNSZWYsb25Nb3VzZURvd259ID0gdXNlRHJhdyhjcmVhdGVMaW5lKTtcbiAgY29uc3QgW2Z1bGxDbGVhcixzZXRGdWxsQ2xlYXJdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBpZihjYW52YXNSZWYuY3VycmVudCl7XG4gICAgbGV0IGNhbnZhc1dpZHRoID0gY2FudmFzUmVmIS5jdXJyZW50IS5wYXJlbnRFbGVtZW50IS5jbGllbnRXaWR0aDtcbiAgICBsZXQgY2FudmFzSGVpZ2h0ID0gY2FudmFzUmVmIS5jdXJyZW50IS5wYXJlbnRFbGVtZW50IS5jbGllbnRIZWlnaHQ7XG4gIH1lbHNle1xuICAgIFxuICB9XG4gIFxuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgc29ja2V0Lm9uKCdjbGVhcicsYWxsY2xlYXIpO1xuICAgICAgc29ja2V0Lm9uKCdjbGVhcl9kb25lJyxjbGVhckRvbmUpO1xuICAgICAgaWYoY2xlYXIgfHwgZnVsbENsZWFyKXtcbiAgICAgICAgY2FudmFzUmVmIS5jdXJyZW50IS5nZXRDb250ZXh0KCcyZCcpIS5jbGVhclJlY3QoMCwwLGNhbnZhc1JlZi5jdXJyZW50IS53aWR0aCxjYW52YXNSZWYuY3VycmVudCEuaGVpZ2h0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybigpPT57XG4gICAgICAgIHNvY2tldC5vZmYoJ2NsZWFyJylcbiAgICAgIH1cbiAgfSxbY2xlYXIsZnVsbENsZWFyXSlcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zdCBjdHggPSAgY2FudmFzUmVmLmN1cnJlbnQ/LmdldENvbnRleHQoJzJkJyk7XG4gICAgc29ja2V0LmVtaXQoJ25ld0NsaWVudCcpO1xuICAgIHNvY2tldC5vbignZ2V0Q2FudmFzU3RhdGUnLCgpPT57XG4gICAgICBpZighY2FudmFzUmVmLmN1cnJlbnQ/LnRvRGF0YVVSTCgpKSByZXR1cm47XG4gICAgICBzb2NrZXQuZW1pdCgnY2FudmFzU3RhdGUnLGNhbnZhc1JlZi5jdXJyZW50Py50b0RhdGFVUkwoKSk7XG4gICAgfSlcbiAgICBzb2NrZXQub24oJ2RyYXdfbGluZScsKHtwcmV2UG9pbnQsY3VycmVudFBvaW50LGNvbG9yfTpEcmF3TGluZVByb3BzKT0+e1xuICAgICAgICBpZighY3R4KSByZXR1cm47XG4gICAgICAgIGRyYXdMaW5lKHtwcmV2UG9pbnQsY3VycmVudFBvaW50LGN0eCxjb2xvcn0pO1xuICAgIH0pXG4gICAgc29ja2V0Lm9uKCdjYW52U3RhdGVGcm9tU2VydmVyJywoc3RhdGU6c3RyaW5nKT0+e1xuICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2U7XG4gICAgICAgIGltZy5zcmMgPSBzdGF0ZTtcbiAgICAgICAgaW1nLm9ubG9hZCA9ICgpPT57XG4gICAgICAgICAgY3R4Py5kcmF3SW1hZ2UoaW1nLDAsMCk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuKCk9PntcbiAgICAgIHNvY2tldC5vZmYoJ2RyYXdfbGluZScpXG4gICAgICBzb2NrZXQub2ZmKCdjYW52U3RhdGVGcm9tU2VydmVyJylcbiAgICAgIHNvY2tldC5vZmYoJ2dldENhbnZhc1N0YXRlJylcbiAgICB9XG5cbiAgfSxbY2FudmFzUmVmXSlcbiAgXG4gIGZ1bmN0aW9uIGFsbGNsZWFyKCl7XG4gICAgICBzZXRGdWxsQ2xlYXIodHJ1ZSk7XG4gIH1cbiAgZnVuY3Rpb24gY2xlYXJEb25lKCl7XG4gICAgc2V0RnVsbENsZWFyKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUxpbmUoe3ByZXZQb2ludCxjdXJyZW50UG9pbnQsY3R4fSA6IERyYXcpe1xuICAgIHNvY2tldC5lbWl0KCdkcmF3X2xpbmUnLCh7cHJldlBvaW50LGN1cnJlbnRQb2ludCxjb2xvcn0pKVxuICAgIGRyYXdMaW5lKHtwcmV2UG9pbnQsY3VycmVudFBvaW50LGN0eCxjb2xvcn0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Y2FudmFzIG9uTW91c2VEb3duPXtvbk1vdXNlRG93bn0gIHdpZHRoPXtjYW52YXNXaWR0aH0gaGVpZ2h0PXtjYW52YXNIZWlnaHR9IHJlZj17Y2FudmFzUmVmfSBjbGFzc05hbWU9J2NhbnZhcyc+XG4gICAgICA8L2NhbnZhcz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW52YXMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZURyYXciLCJpbyIsImRyYXdMaW5lIiwic29ja2V0IiwiQ2FudmFzIiwiY2xlYXIiLCJjb2xvciIsInNldENvbG9yIiwiY2FudmFzUmVmIiwib25Nb3VzZURvd24iLCJjcmVhdGVMaW5lIiwiZnVsbENsZWFyIiwic2V0RnVsbENsZWFyIiwiY3VycmVudCIsImNhbnZhc1dpZHRoIiwicGFyZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiY2FudmFzSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwib24iLCJhbGxjbGVhciIsImNsZWFyRG9uZSIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIm9mZiIsImN0eCIsImVtaXQiLCJ0b0RhdGFVUkwiLCJwcmV2UG9pbnQiLCJjdXJyZW50UG9pbnQiLCJzdGF0ZSIsImltZyIsIkltYWdlIiwic3JjIiwib25sb2FkIiwiZHJhd0ltYWdlIiwiY2FudmFzIiwicmVmIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Canvas.tsx\n"));

/***/ })

});