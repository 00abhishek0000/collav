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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useDraw */ \"(app-pages-browser)/./app/hooks/useDraw.ts\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _functions_drawLine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/drawLine */ \"(app-pages-browser)/./app/functions/drawLine.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)(\"http://localhost:3001\");\nconst Canvas = (param)=>{\n    let { clear, adn } = param;\n    _s();\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#000\");\n    const { canvasRef, onMouseDown } = (0,_hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__.useDraw)(createLine);\n    const [fullClear, setFullClear] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [canvasWidth, setCanvasWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(750);\n    const [canvasHeight, setCanvasHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(750);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        socket.on(\"clear\", allclear);\n        socket.on(\"clear_done\", clearDone);\n        if (clear || fullClear) {\n            canvasRef.current.getContext(\"2d\").clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);\n        }\n        return ()=>{\n            socket.off(\"clear\");\n        };\n    }, [\n        clear,\n        fullClear\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let canvasWidth = 750;\n        if (adn.current) canvasWidth = adn.current.clientWidth * 95 / 100;\n        let canvasHeight = 770;\n        if (adn.current) canvasHeight = adn.current.clientHeight * 95 / 100;\n    }, [\n        adn\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _canvasRef_current;\n        const ctx = (_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.getContext(\"2d\");\n        socket.emit(\"newClient\");\n        socket.on(\"getCanvasState\", ()=>{\n            var _canvasRef_current, _canvasRef_current1;\n            if (!((_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.toDataURL())) return;\n            socket.emit(\"canvasState\", (_canvasRef_current1 = canvasRef.current) === null || _canvasRef_current1 === void 0 ? void 0 : _canvasRef_current1.toDataURL());\n        });\n        socket.on(\"draw_line\", (param)=>{\n            let { prevPoint, currentPoint, color } = param;\n            if (!ctx) return;\n            (0,_functions_drawLine__WEBPACK_IMPORTED_MODULE_4__.drawLine)({\n                prevPoint,\n                currentPoint,\n                ctx,\n                color\n            });\n        });\n        socket.on(\"canvStateFromServer\", (state)=>{\n            const img = new Image;\n            img.src = state;\n            img.onload = ()=>{\n                var _ctx;\n                (_ctx = ctx) === null || _ctx === void 0 ? void 0 : _ctx.drawImage(img, 0, 0);\n            };\n        });\n        return ()=>{\n            socket.off(\"draw_line\");\n            socket.off(\"canvStateFromServer\");\n            socket.off(\"getCanvasState\");\n        };\n    }, [\n        canvasRef\n    ]);\n    function allclear() {\n        setFullClear(true);\n    }\n    function clearDone() {\n        setFullClear(false);\n    }\n    function createLine(param) {\n        let { prevPoint, currentPoint, ctx } = param;\n        socket.emit(\"draw_line\", {\n            prevPoint,\n            currentPoint,\n            color\n        });\n        (0,_functions_drawLine__WEBPACK_IMPORTED_MODULE_4__.drawLine)({\n            prevPoint,\n            currentPoint,\n            ctx,\n            color\n        });\n    }\n    console.log(adn);\n    // let canvasWidth = 750;\n    // if(adn.current) canvasWidth =  adn.current.clientWidth*95/100;\n    // let canvasHeight = 770;\n    // if(adn.current) canvasHeight =  adn.current.clientHeight*95/100;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n            onMouseDown: onMouseDown,\n            ref: canvasRef,\n            width: canvasWidth,\n            height: canvasHeight,\n            className: \"canvas\"\n        }, void 0, false, {\n            fileName: \"/Users/abhi/Desktop/collav/client/app/components/Canvas.tsx\",\n            lineNumber: 91,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Canvas, \"OlkGSfnJIypIDdX4wJdUn20vmuc=\", false, function() {\n    return [\n        _hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__.useDraw\n    ];\n});\n_c = Canvas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Canvas);\nvar _c;\n$RefreshReg$(_c, \"Canvas\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzBEO0FBQ2Y7QUFDUDtBQUNhO0FBRWpELE1BQU1NLFNBQVNGLG9EQUFFQSxDQUFDO0FBWWxCLE1BQU1HLFNBQWlDO1FBQUMsRUFBQ0MsS0FBSyxFQUFDQyxHQUFHLEVBQUM7O0lBQ2pELE1BQU0sQ0FBQ0MsT0FBTUMsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBUztJQUMxQyxNQUFNLEVBQUNVLFNBQVMsRUFBQ0MsV0FBVyxFQUFDLEdBQUdWLHVEQUFPQSxDQUFDVztJQUN4QyxNQUFNLENBQUNDLFdBQVVDLGFBQWEsR0FBR2QsK0NBQVFBLENBQVU7SUFDbkQsTUFBTSxDQUFDZSxhQUFZQyxlQUFlLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUM5QyxNQUFNLENBQUNpQixjQUFhQyxnQkFBZ0IsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRWhERCxnREFBU0EsQ0FBQztRQUNOSyxPQUFPZSxFQUFFLENBQUMsU0FBUUM7UUFDbEJoQixPQUFPZSxFQUFFLENBQUMsY0FBYUU7UUFDdkIsSUFBR2YsU0FBU08sV0FBVTtZQUNwQkgsVUFBV1ksT0FBTyxDQUFFQyxVQUFVLENBQUMsTUFBT0MsU0FBUyxDQUFDLEdBQUUsR0FBRWQsVUFBVVksT0FBTyxDQUFFRyxLQUFLLEVBQUNmLFVBQVVZLE9BQU8sQ0FBRUksTUFBTTtRQUN4RztRQUNBLE9BQU07WUFDSnRCLE9BQU91QixHQUFHLENBQUM7UUFDYjtJQUNKLEdBQUU7UUFBQ3JCO1FBQU1PO0tBQVU7SUFFbkJkLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSWdCLGNBQWM7UUFDbEIsSUFBR1IsSUFBSWUsT0FBTyxFQUFFUCxjQUFlUixJQUFJZSxPQUFPLENBQUNNLFdBQVcsR0FBQyxLQUFHO1FBQzFELElBQUlYLGVBQWU7UUFDbkIsSUFBR1YsSUFBSWUsT0FBTyxFQUFFTCxlQUFnQlYsSUFBSWUsT0FBTyxDQUFDTyxZQUFZLEdBQUMsS0FBRztJQUM5RCxHQUFFO1FBQUN0QjtLQUFJO0lBRVBSLGdEQUFTQSxDQUFDO1lBRUtXO1FBQWIsTUFBTW9CLE9BQU9wQixxQkFBQUEsVUFBVVksT0FBTyxjQUFqQloseUNBQUFBLG1CQUFtQmEsVUFBVSxDQUFDO1FBQzNDbkIsT0FBTzJCLElBQUksQ0FBQztRQUNaM0IsT0FBT2UsRUFBRSxDQUFDLGtCQUFpQjtnQkFDckJULG9CQUNzQkE7WUFEMUIsSUFBRyxHQUFDQSxxQkFBQUEsVUFBVVksT0FBTyxjQUFqQloseUNBQUFBLG1CQUFtQnNCLFNBQVMsS0FBSTtZQUNwQzVCLE9BQU8yQixJQUFJLENBQUMsZ0JBQWNyQixzQkFBQUEsVUFBVVksT0FBTyxjQUFqQlosMENBQUFBLG9CQUFtQnNCLFNBQVM7UUFDeEQ7UUFDQTVCLE9BQU9lLEVBQUUsQ0FBQyxhQUFZO2dCQUFDLEVBQUNjLFNBQVMsRUFBQ0MsWUFBWSxFQUFDMUIsS0FBSyxFQUFlO1lBQy9ELElBQUcsQ0FBQ3NCLEtBQUs7WUFDVDNCLDZEQUFRQSxDQUFDO2dCQUFDOEI7Z0JBQVVDO2dCQUFhSjtnQkFBSXRCO1lBQUs7UUFDOUM7UUFDQUosT0FBT2UsRUFBRSxDQUFDLHVCQUFzQixDQUFDZ0I7WUFDN0IsTUFBTUMsTUFBTSxJQUFJQztZQUNoQkQsSUFBSUUsR0FBRyxHQUFHSDtZQUNWQyxJQUFJRyxNQUFNLEdBQUc7b0JBQ1hUO2lCQUFBQSxPQUFBQSxpQkFBQUEsMkJBQUFBLEtBQUtVLFNBQVMsQ0FBQ0osS0FBSSxHQUFFO1lBQ3ZCO1FBQ0o7UUFFQSxPQUFNO1lBQ0poQyxPQUFPdUIsR0FBRyxDQUFDO1lBQ1h2QixPQUFPdUIsR0FBRyxDQUFDO1lBQ1h2QixPQUFPdUIsR0FBRyxDQUFDO1FBQ2I7SUFFRixHQUFFO1FBQUNqQjtLQUFVO0lBRWIsU0FBU1U7UUFDTE4sYUFBYTtJQUNqQjtJQUNBLFNBQVNPO1FBQ1BQLGFBQWE7SUFDZjtJQUVBLFNBQVNGLFdBQVcsS0FBbUM7WUFBbkMsRUFBQ3FCLFNBQVMsRUFBQ0MsWUFBWSxFQUFDSixHQUFHLEVBQVEsR0FBbkM7UUFDbEIxQixPQUFPMkIsSUFBSSxDQUFDLGFBQWE7WUFBQ0U7WUFBVUM7WUFBYTFCO1FBQUs7UUFDdERMLDZEQUFRQSxDQUFDO1lBQUM4QjtZQUFVQztZQUFhSjtZQUFJdEI7UUFBSztJQUM1QztJQUNBaUMsUUFBUUMsR0FBRyxDQUFDbkM7SUFDWix5QkFBeUI7SUFDekIsaUVBQWlFO0lBQ2pFLDBCQUEwQjtJQUMxQixtRUFBbUU7SUFFbkUscUJBQ0U7a0JBQ0UsNEVBQUNvQztZQUFPaEMsYUFBYUE7WUFBY2lDLEtBQUtsQztZQUFXZSxPQUFPVjtZQUFhVyxRQUFRVDtZQUFlNEIsV0FBVTs7Ozs7OztBQUk5RztHQTVFTXhDOztRQUU0QkosbURBQU9BOzs7S0FGbkNJO0FBOEVOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy50c3g/OWZlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRHJhdyB9IGZyb20gJy4uL2hvb2tzL3VzZURyYXcnO1xuaW1wb3J0IHtpb30gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQgeyBkcmF3TGluZSB9IGZyb20gJy4uL2Z1bmN0aW9ucy9kcmF3TGluZSc7XG5cbmNvbnN0IHNvY2tldCA9IGlvKCdodHRwOi8vbG9jYWxob3N0OjMwMDEnKVxuXG5pbnRlcmZhY2UgQ2FudmFzUHJvcHN7XG4gIGNsZWFyIDogYm9vbGVhbixcbiAgYWRuIDogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50Pixcbn1cbnR5cGUgRHJhd0xpbmVQcm9wcyA9IHtcbiAgY29sb3IgOiBzdHJpbmcsXG4gIHByZXZQb2ludCA6IFBvaW50IHwgbnVsbCxcbiAgY3VycmVudFBvaW50OiBQb2ludCxcbn1cblxuY29uc3QgQ2FudmFzIDogUmVhY3QuRkM8Q2FudmFzUHJvcHM+ID0gKHtjbGVhcixhZG59KSA9PiB7XG4gIGNvbnN0IFtjb2xvcixzZXRDb2xvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcjMDAwJyk7XG4gIGNvbnN0IHtjYW52YXNSZWYsb25Nb3VzZURvd259ID0gdXNlRHJhdyhjcmVhdGVMaW5lKTtcbiAgY29uc3QgW2Z1bGxDbGVhcixzZXRGdWxsQ2xlYXJdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbY2FudmFzV2lkdGgsc2V0Q2FudmFzV2lkdGhdID0gdXNlU3RhdGUoNzUwKTtcbiAgY29uc3QgW2NhbnZhc0hlaWdodCxzZXRDYW52YXNIZWlnaHRdID0gdXNlU3RhdGUoNzUwKTtcbiAgXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgc29ja2V0Lm9uKCdjbGVhcicsYWxsY2xlYXIpO1xuICAgICAgc29ja2V0Lm9uKCdjbGVhcl9kb25lJyxjbGVhckRvbmUpO1xuICAgICAgaWYoY2xlYXIgfHwgZnVsbENsZWFyKXtcbiAgICAgICAgY2FudmFzUmVmIS5jdXJyZW50IS5nZXRDb250ZXh0KCcyZCcpIS5jbGVhclJlY3QoMCwwLGNhbnZhc1JlZi5jdXJyZW50IS53aWR0aCxjYW52YXNSZWYuY3VycmVudCEuaGVpZ2h0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybigpPT57XG4gICAgICAgIHNvY2tldC5vZmYoJ2NsZWFyJylcbiAgICAgIH1cbiAgfSxbY2xlYXIsZnVsbENsZWFyXSlcbiAgXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGxldCBjYW52YXNXaWR0aCA9IDc1MDtcbiAgICBpZihhZG4uY3VycmVudCkgY2FudmFzV2lkdGggPSAgYWRuLmN1cnJlbnQuY2xpZW50V2lkdGgqOTUvMTAwO1xuICAgIGxldCBjYW52YXNIZWlnaHQgPSA3NzA7XG4gICAgaWYoYWRuLmN1cnJlbnQpIGNhbnZhc0hlaWdodCA9ICBhZG4uY3VycmVudC5jbGllbnRIZWlnaHQqOTUvMTAwO1xuICB9LFthZG5dKVxuXG4gIHVzZUVmZmVjdCgoKT0+e1xuXG4gICAgY29uc3QgY3R4ID0gIGNhbnZhc1JlZi5jdXJyZW50Py5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHNvY2tldC5lbWl0KCduZXdDbGllbnQnKTtcbiAgICBzb2NrZXQub24oJ2dldENhbnZhc1N0YXRlJywoKT0+e1xuICAgICAgaWYoIWNhbnZhc1JlZi5jdXJyZW50Py50b0RhdGFVUkwoKSkgcmV0dXJuO1xuICAgICAgc29ja2V0LmVtaXQoJ2NhbnZhc1N0YXRlJyxjYW52YXNSZWYuY3VycmVudD8udG9EYXRhVVJMKCkpO1xuICAgIH0pXG4gICAgc29ja2V0Lm9uKCdkcmF3X2xpbmUnLCh7cHJldlBvaW50LGN1cnJlbnRQb2ludCxjb2xvcn06RHJhd0xpbmVQcm9wcyk9PntcbiAgICAgICAgaWYoIWN0eCkgcmV0dXJuO1xuICAgICAgICBkcmF3TGluZSh7cHJldlBvaW50LGN1cnJlbnRQb2ludCxjdHgsY29sb3J9KTtcbiAgICB9KVxuICAgIHNvY2tldC5vbignY2FudlN0YXRlRnJvbVNlcnZlcicsKHN0YXRlOnN0cmluZyk9PntcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlO1xuICAgICAgICBpbWcuc3JjID0gc3RhdGU7XG4gICAgICAgIGltZy5vbmxvYWQgPSAoKT0+e1xuICAgICAgICAgIGN0eD8uZHJhd0ltYWdlKGltZywwLDApO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybigpPT57XG4gICAgICBzb2NrZXQub2ZmKCdkcmF3X2xpbmUnKVxuICAgICAgc29ja2V0Lm9mZignY2FudlN0YXRlRnJvbVNlcnZlcicpXG4gICAgICBzb2NrZXQub2ZmKCdnZXRDYW52YXNTdGF0ZScpXG4gICAgfVxuXG4gIH0sW2NhbnZhc1JlZl0pXG4gIFxuICBmdW5jdGlvbiBhbGxjbGVhcigpe1xuICAgICAgc2V0RnVsbENsZWFyKHRydWUpO1xuICB9XG4gIGZ1bmN0aW9uIGNsZWFyRG9uZSgpe1xuICAgIHNldEZ1bGxDbGVhcihmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVMaW5lKHtwcmV2UG9pbnQsY3VycmVudFBvaW50LGN0eH0gOiBEcmF3KXtcbiAgICBzb2NrZXQuZW1pdCgnZHJhd19saW5lJywoe3ByZXZQb2ludCxjdXJyZW50UG9pbnQsY29sb3J9KSlcbiAgICBkcmF3TGluZSh7cHJldlBvaW50LGN1cnJlbnRQb2ludCxjdHgsY29sb3J9KVxuICB9XG4gIGNvbnNvbGUubG9nKGFkbik7XG4gIC8vIGxldCBjYW52YXNXaWR0aCA9IDc1MDtcbiAgLy8gaWYoYWRuLmN1cnJlbnQpIGNhbnZhc1dpZHRoID0gIGFkbi5jdXJyZW50LmNsaWVudFdpZHRoKjk1LzEwMDtcbiAgLy8gbGV0IGNhbnZhc0hlaWdodCA9IDc3MDtcbiAgLy8gaWYoYWRuLmN1cnJlbnQpIGNhbnZhc0hlaWdodCA9ICBhZG4uY3VycmVudC5jbGllbnRIZWlnaHQqOTUvMTAwO1xuIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Y2FudmFzIG9uTW91c2VEb3duPXtvbk1vdXNlRG93bn0gIHJlZj17Y2FudmFzUmVmfSB3aWR0aD17Y2FudmFzV2lkdGh9IGhlaWdodD17Y2FudmFzSGVpZ2h0fSAgY2xhc3NOYW1lPSdjYW52YXMnPlxuICAgICAgPC9jYW52YXM+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VEcmF3IiwiaW8iLCJkcmF3TGluZSIsInNvY2tldCIsIkNhbnZhcyIsImNsZWFyIiwiYWRuIiwiY29sb3IiLCJzZXRDb2xvciIsImNhbnZhc1JlZiIsIm9uTW91c2VEb3duIiwiY3JlYXRlTGluZSIsImZ1bGxDbGVhciIsInNldEZ1bGxDbGVhciIsImNhbnZhc1dpZHRoIiwic2V0Q2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJzZXRDYW52YXNIZWlnaHQiLCJvbiIsImFsbGNsZWFyIiwiY2xlYXJEb25lIiwiY3VycmVudCIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIm9mZiIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiY3R4IiwiZW1pdCIsInRvRGF0YVVSTCIsInByZXZQb2ludCIsImN1cnJlbnRQb2ludCIsInN0YXRlIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJjb25zb2xlIiwibG9nIiwiY2FudmFzIiwicmVmIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Canvas.tsx\n"));

/***/ })

});