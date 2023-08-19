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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useDraw */ \"(app-pages-browser)/./app/hooks/useDraw.ts\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _functions_drawLine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/drawLine */ \"(app-pages-browser)/./app/functions/drawLine.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)(\"http://localhost:3001\");\nconst Canvas = (param)=>{\n    let { clear } = param;\n    _s();\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#000\");\n    const { canvasRef, onMouseDown } = (0,_hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__.useDraw)(createLine);\n    const [fullClear, setFullClear] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const canvasWidth = canvasRef.current.parentElement.clientWidth / 100;\n    const canvasHeight = canvasRef.current.parentElement.clientHeight / 100;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        socket.on(\"clear\", allclear);\n        socket.on(\"clear_done\", clearDone);\n        if (clear || fullClear) {\n            canvasRef.current.getContext(\"2d\").clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);\n        }\n        return ()=>{\n            socket.off(\"clear\");\n        };\n    }, [\n        clear,\n        fullClear\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _canvasRef_current;\n        const ctx = (_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.getContext(\"2d\");\n        socket.emit(\"newClient\");\n        socket.on(\"getCanvasState\", ()=>{\n            var _canvasRef_current, _canvasRef_current1;\n            if (!((_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.toDataURL())) return;\n            socket.emit(\"canvasState\", (_canvasRef_current1 = canvasRef.current) === null || _canvasRef_current1 === void 0 ? void 0 : _canvasRef_current1.toDataURL());\n        });\n        socket.on(\"draw_line\", (param)=>{\n            let { prevPoint, currentPoint, color } = param;\n            if (!ctx) return;\n            (0,_functions_drawLine__WEBPACK_IMPORTED_MODULE_4__.drawLine)({\n                prevPoint,\n                currentPoint,\n                ctx,\n                color\n            });\n        });\n        socket.on(\"canvStateFromServer\", (state)=>{\n            const img = new Image;\n            img.src = state;\n            img.onload = ()=>{\n                var _ctx;\n                (_ctx = ctx) === null || _ctx === void 0 ? void 0 : _ctx.drawImage(img, 0, 0);\n            };\n        });\n        return ()=>{\n            socket.off(\"draw_line\");\n            socket.off(\"canvStateFromServer\");\n            socket.off(\"getCanvasState\");\n        };\n    }, [\n        canvasRef\n    ]);\n    function allclear() {\n        setFullClear(true);\n    }\n    function clearDone() {\n        setFullClear(false);\n    }\n    function createLine(param) {\n        let { prevPoint, currentPoint, ctx } = param;\n        socket.emit(\"draw_line\", {\n            prevPoint,\n            currentPoint,\n            color\n        });\n        (0,_functions_drawLine__WEBPACK_IMPORTED_MODULE_4__.drawLine)({\n            prevPoint,\n            currentPoint,\n            ctx,\n            color\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n            onMouseDown: onMouseDown,\n            width: canvasWidth,\n            height: canvasHeight,\n            ref: canvasRef,\n            className: \"canvas\"\n        }, void 0, false, {\n            fileName: \"/Users/abhi/Desktop/collav/client/app/components/Canvas.tsx\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Canvas, \"GVrZ1X08QQFrIPZpgbwu13IT9+I=\", false, function() {\n    return [\n        _hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__.useDraw\n    ];\n});\n_c = Canvas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Canvas);\nvar _c;\n$RefreshReg$(_c, \"Canvas\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzBEO0FBQ2Y7QUFDUDtBQUNhO0FBRWpELE1BQU1NLFNBQVNGLG9EQUFFQSxDQUFDO0FBV2xCLE1BQU1HLFNBQWlDO1FBQUMsRUFBQ0MsS0FBSyxFQUFDOztJQUM3QyxNQUFNLENBQUNDLE9BQU1DLFNBQVMsR0FBR1IsK0NBQVFBLENBQVM7SUFDMUMsTUFBTSxFQUFDUyxTQUFTLEVBQUNDLFdBQVcsRUFBQyxHQUFHVCx1REFBT0EsQ0FBQ1U7SUFDeEMsTUFBTSxDQUFDQyxXQUFVQyxhQUFhLEdBQUdiLCtDQUFRQSxDQUFVO0lBRW5ELE1BQU1jLGNBQWNMLFVBQVVNLE9BQU8sQ0FBRUMsYUFBYSxDQUFFQyxXQUFXLEdBQUM7SUFDbEUsTUFBTUMsZUFBZVQsVUFBVU0sT0FBTyxDQUFFQyxhQUFhLENBQUVHLFlBQVksR0FBQztJQUVwRXBCLGdEQUFTQSxDQUFDO1FBQ05LLE9BQU9nQixFQUFFLENBQUMsU0FBUUM7UUFDbEJqQixPQUFPZ0IsRUFBRSxDQUFDLGNBQWFFO1FBQ3ZCLElBQUdoQixTQUFTTSxXQUFVO1lBQ3BCSCxVQUFXTSxPQUFPLENBQUVRLFVBQVUsQ0FBQyxNQUFPQyxTQUFTLENBQUMsR0FBRSxHQUFFZixVQUFVTSxPQUFPLENBQUVVLEtBQUssRUFBQ2hCLFVBQVVNLE9BQU8sQ0FBRVcsTUFBTTtRQUN4RztRQUNBLE9BQU07WUFDSnRCLE9BQU91QixHQUFHLENBQUM7UUFDYjtJQUNKLEdBQUU7UUFBQ3JCO1FBQU1NO0tBQVU7SUFFbkJiLGdEQUFTQSxDQUFDO1lBQ0tVO1FBQWIsTUFBTW1CLE9BQU9uQixxQkFBQUEsVUFBVU0sT0FBTyxjQUFqQk4seUNBQUFBLG1CQUFtQmMsVUFBVSxDQUFDO1FBQzNDbkIsT0FBT3lCLElBQUksQ0FBQztRQUNaekIsT0FBT2dCLEVBQUUsQ0FBQyxrQkFBaUI7Z0JBQ3JCWCxvQkFDc0JBO1lBRDFCLElBQUcsR0FBQ0EscUJBQUFBLFVBQVVNLE9BQU8sY0FBakJOLHlDQUFBQSxtQkFBbUJxQixTQUFTLEtBQUk7WUFDcEMxQixPQUFPeUIsSUFBSSxDQUFDLGdCQUFjcEIsc0JBQUFBLFVBQVVNLE9BQU8sY0FBakJOLDBDQUFBQSxvQkFBbUJxQixTQUFTO1FBQ3hEO1FBQ0ExQixPQUFPZ0IsRUFBRSxDQUFDLGFBQVk7Z0JBQUMsRUFBQ1csU0FBUyxFQUFDQyxZQUFZLEVBQUN6QixLQUFLLEVBQWU7WUFDL0QsSUFBRyxDQUFDcUIsS0FBSztZQUNUekIsNkRBQVFBLENBQUM7Z0JBQUM0QjtnQkFBVUM7Z0JBQWFKO2dCQUFJckI7WUFBSztRQUM5QztRQUNBSCxPQUFPZ0IsRUFBRSxDQUFDLHVCQUFzQixDQUFDYTtZQUM3QixNQUFNQyxNQUFNLElBQUlDO1lBQ2hCRCxJQUFJRSxHQUFHLEdBQUdIO1lBQ1ZDLElBQUlHLE1BQU0sR0FBRztvQkFDWFQ7aUJBQUFBLE9BQUFBLGlCQUFBQSwyQkFBQUEsS0FBS1UsU0FBUyxDQUFDSixLQUFJLEdBQUU7WUFDdkI7UUFDSjtRQUVBLE9BQU07WUFDSjlCLE9BQU91QixHQUFHLENBQUM7WUFDWHZCLE9BQU91QixHQUFHLENBQUM7WUFDWHZCLE9BQU91QixHQUFHLENBQUM7UUFDYjtJQUVGLEdBQUU7UUFBQ2xCO0tBQVU7SUFFYixTQUFTWTtRQUNMUixhQUFhO0lBQ2pCO0lBQ0EsU0FBU1M7UUFDUFQsYUFBYTtJQUNmO0lBRUEsU0FBU0YsV0FBVyxLQUFtQztZQUFuQyxFQUFDb0IsU0FBUyxFQUFDQyxZQUFZLEVBQUNKLEdBQUcsRUFBUSxHQUFuQztRQUNsQnhCLE9BQU95QixJQUFJLENBQUMsYUFBYTtZQUFDRTtZQUFVQztZQUFhekI7UUFBSztRQUN0REosNkRBQVFBLENBQUM7WUFBQzRCO1lBQVVDO1lBQWFKO1lBQUlyQjtRQUFLO0lBQzVDO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNnQztZQUFPN0IsYUFBYUE7WUFBY2UsT0FBT1g7WUFBYVksUUFBUVI7WUFBY3NCLEtBQUsvQjtZQUFXZ0MsV0FBVTs7Ozs7OztBQUk3RztHQWhFTXBDOztRQUU0QkosbURBQU9BOzs7S0FGbkNJO0FBa0VOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy50c3g/OWZlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRHJhdyB9IGZyb20gJy4uL2hvb2tzL3VzZURyYXcnO1xuaW1wb3J0IHtpb30gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQgeyBkcmF3TGluZSB9IGZyb20gJy4uL2Z1bmN0aW9ucy9kcmF3TGluZSc7XG5cbmNvbnN0IHNvY2tldCA9IGlvKCdodHRwOi8vbG9jYWxob3N0OjMwMDEnKVxuXG5pbnRlcmZhY2UgQ2FudmFzUHJvcHN7XG4gIGNsZWFyIDogYm9vbGVhbixcbn1cbnR5cGUgRHJhd0xpbmVQcm9wcyA9IHtcbiAgY29sb3IgOiBzdHJpbmcsXG4gIHByZXZQb2ludCA6IFBvaW50IHwgbnVsbCxcbiAgY3VycmVudFBvaW50OiBQb2ludCxcbn1cblxuY29uc3QgQ2FudmFzIDogUmVhY3QuRkM8Q2FudmFzUHJvcHM+ID0gKHtjbGVhcn0pID0+IHtcbiAgY29uc3QgW2NvbG9yLHNldENvbG9yXSA9IHVzZVN0YXRlPHN0cmluZz4oJyMwMDAnKTtcbiAgY29uc3Qge2NhbnZhc1JlZixvbk1vdXNlRG93bn0gPSB1c2VEcmF3KGNyZWF0ZUxpbmUpO1xuICBjb25zdCBbZnVsbENsZWFyLHNldEZ1bGxDbGVhcl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgY2FudmFzV2lkdGggPSBjYW52YXNSZWYuY3VycmVudCEucGFyZW50RWxlbWVudCEuY2xpZW50V2lkdGgvMTAwO1xuICBjb25zdCBjYW52YXNIZWlnaHQgPSBjYW52YXNSZWYuY3VycmVudCEucGFyZW50RWxlbWVudCEuY2xpZW50SGVpZ2h0LzEwMDtcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICAgIHNvY2tldC5vbignY2xlYXInLGFsbGNsZWFyKTtcbiAgICAgIHNvY2tldC5vbignY2xlYXJfZG9uZScsY2xlYXJEb25lKTtcbiAgICAgIGlmKGNsZWFyIHx8IGZ1bGxDbGVhcil7XG4gICAgICAgIGNhbnZhc1JlZiEuY3VycmVudCEuZ2V0Q29udGV4dCgnMmQnKSEuY2xlYXJSZWN0KDAsMCxjYW52YXNSZWYuY3VycmVudCEud2lkdGgsY2FudmFzUmVmLmN1cnJlbnQhLmhlaWdodCk7XG4gICAgICB9XG4gICAgICByZXR1cm4oKT0+e1xuICAgICAgICBzb2NrZXQub2ZmKCdjbGVhcicpXG4gICAgICB9XG4gIH0sW2NsZWFyLGZ1bGxDbGVhcl0pXG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgY29uc3QgY3R4ID0gIGNhbnZhc1JlZi5jdXJyZW50Py5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHNvY2tldC5lbWl0KCduZXdDbGllbnQnKTtcbiAgICBzb2NrZXQub24oJ2dldENhbnZhc1N0YXRlJywoKT0+e1xuICAgICAgaWYoIWNhbnZhc1JlZi5jdXJyZW50Py50b0RhdGFVUkwoKSkgcmV0dXJuO1xuICAgICAgc29ja2V0LmVtaXQoJ2NhbnZhc1N0YXRlJyxjYW52YXNSZWYuY3VycmVudD8udG9EYXRhVVJMKCkpO1xuICAgIH0pXG4gICAgc29ja2V0Lm9uKCdkcmF3X2xpbmUnLCh7cHJldlBvaW50LGN1cnJlbnRQb2ludCxjb2xvcn06RHJhd0xpbmVQcm9wcyk9PntcbiAgICAgICAgaWYoIWN0eCkgcmV0dXJuO1xuICAgICAgICBkcmF3TGluZSh7cHJldlBvaW50LGN1cnJlbnRQb2ludCxjdHgsY29sb3J9KTtcbiAgICB9KVxuICAgIHNvY2tldC5vbignY2FudlN0YXRlRnJvbVNlcnZlcicsKHN0YXRlOnN0cmluZyk9PntcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlO1xuICAgICAgICBpbWcuc3JjID0gc3RhdGU7XG4gICAgICAgIGltZy5vbmxvYWQgPSAoKT0+e1xuICAgICAgICAgIGN0eD8uZHJhd0ltYWdlKGltZywwLDApO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybigpPT57XG4gICAgICBzb2NrZXQub2ZmKCdkcmF3X2xpbmUnKVxuICAgICAgc29ja2V0Lm9mZignY2FudlN0YXRlRnJvbVNlcnZlcicpXG4gICAgICBzb2NrZXQub2ZmKCdnZXRDYW52YXNTdGF0ZScpXG4gICAgfVxuXG4gIH0sW2NhbnZhc1JlZl0pXG4gIFxuICBmdW5jdGlvbiBhbGxjbGVhcigpe1xuICAgICAgc2V0RnVsbENsZWFyKHRydWUpO1xuICB9XG4gIGZ1bmN0aW9uIGNsZWFyRG9uZSgpe1xuICAgIHNldEZ1bGxDbGVhcihmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVMaW5lKHtwcmV2UG9pbnQsY3VycmVudFBvaW50LGN0eH0gOiBEcmF3KXtcbiAgICBzb2NrZXQuZW1pdCgnZHJhd19saW5lJywoe3ByZXZQb2ludCxjdXJyZW50UG9pbnQsY29sb3J9KSlcbiAgICBkcmF3TGluZSh7cHJldlBvaW50LGN1cnJlbnRQb2ludCxjdHgsY29sb3J9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGNhbnZhcyBvbk1vdXNlRG93bj17b25Nb3VzZURvd259ICB3aWR0aD17Y2FudmFzV2lkdGh9IGhlaWdodD17Y2FudmFzSGVpZ2h0fSByZWY9e2NhbnZhc1JlZn0gY2xhc3NOYW1lPSdjYW52YXMnPlxuICAgICAgPC9jYW52YXM+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VEcmF3IiwiaW8iLCJkcmF3TGluZSIsInNvY2tldCIsIkNhbnZhcyIsImNsZWFyIiwiY29sb3IiLCJzZXRDb2xvciIsImNhbnZhc1JlZiIsIm9uTW91c2VEb3duIiwiY3JlYXRlTGluZSIsImZ1bGxDbGVhciIsInNldEZ1bGxDbGVhciIsImNhbnZhc1dpZHRoIiwiY3VycmVudCIsInBhcmVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImNhbnZhc0hlaWdodCIsImNsaWVudEhlaWdodCIsIm9uIiwiYWxsY2xlYXIiLCJjbGVhckRvbmUiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJvZmYiLCJjdHgiLCJlbWl0IiwidG9EYXRhVVJMIiwicHJldlBvaW50IiwiY3VycmVudFBvaW50Iiwic3RhdGUiLCJpbWciLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsImRyYXdJbWFnZSIsImNhbnZhcyIsInJlZiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Canvas.tsx\n"));

/***/ })

});