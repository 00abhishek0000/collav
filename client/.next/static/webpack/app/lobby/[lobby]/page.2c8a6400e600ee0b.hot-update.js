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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useDraw */ \"(app-pages-browser)/./app/hooks/useDraw.ts\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _functions_drawLine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/drawLine */ \"(app-pages-browser)/./app/functions/drawLine.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)(\"http://localhost:3001\");\nconst Canvas = (param)=>{\n    let { clear, adn } = param;\n    _s();\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#000\");\n    const { canvasRef, onMouseDown } = (0,_hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__.useDraw)(createLine);\n    const [fullClear, setFullClear] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        socket.on(\"clear\", allclear);\n        socket.on(\"clear_done\", clearDone);\n        if (clear || fullClear) {\n            canvasRef.current.getContext(\"2d\").clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);\n        }\n        return ()=>{\n            socket.off(\"clear\");\n        };\n    }, [\n        clear,\n        fullClear\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _canvasRef_current;\n        let canvasWidth1 = 750;\n        if (adn.current) canvasWidth1 = adn.current.clientWidth * 95 / 100;\n        let canvasHeight1 = 770;\n        if (adn.current) canvasHeight1 = adn.current.clientHeight * 95 / 100;\n        const ctx = (_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.getContext(\"2d\");\n        socket.emit(\"newClient\");\n        socket.on(\"getCanvasState\", ()=>{\n            var _canvasRef_current, _canvasRef_current1;\n            if (!((_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.toDataURL())) return;\n            socket.emit(\"canvasState\", (_canvasRef_current1 = canvasRef.current) === null || _canvasRef_current1 === void 0 ? void 0 : _canvasRef_current1.toDataURL());\n        });\n        socket.on(\"draw_line\", (param)=>{\n            let { prevPoint, currentPoint, color } = param;\n            if (!ctx) return;\n            (0,_functions_drawLine__WEBPACK_IMPORTED_MODULE_4__.drawLine)({\n                prevPoint,\n                currentPoint,\n                ctx,\n                color\n            });\n        });\n        socket.on(\"canvStateFromServer\", (state)=>{\n            const img = new Image;\n            img.src = state;\n            img.onload = ()=>{\n                var _ctx;\n                (_ctx = ctx) === null || _ctx === void 0 ? void 0 : _ctx.drawImage(img, 0, 0);\n            };\n        });\n        return ()=>{\n            socket.off(\"draw_line\");\n            socket.off(\"canvStateFromServer\");\n            socket.off(\"getCanvasState\");\n        };\n    }, [\n        canvasRef\n    ]);\n    function allclear() {\n        setFullClear(true);\n    }\n    function clearDone() {\n        setFullClear(false);\n    }\n    function createLine(param) {\n        let { prevPoint, currentPoint, ctx } = param;\n        socket.emit(\"draw_line\", {\n            prevPoint,\n            currentPoint,\n            color\n        });\n        (0,_functions_drawLine__WEBPACK_IMPORTED_MODULE_4__.drawLine)({\n            prevPoint,\n            currentPoint,\n            ctx,\n            color\n        });\n    }\n    console.log(adn);\n    // let canvasWidth = 750;\n    // if(adn.current) canvasWidth =  adn.current.clientWidth*95/100;\n    // let canvasHeight = 770;\n    // if(adn.current) canvasHeight =  adn.current.clientHeight*95/100;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n            onMouseDown: onMouseDown,\n            ref: canvasRef,\n            width: canvasWidth,\n            height: canvasHeight,\n            className: \"canvas\"\n        }, void 0, false, {\n            fileName: \"/Users/abhi/Desktop/collav/client/app/components/Canvas.tsx\",\n            lineNumber: 85,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Canvas, \"GVrZ1X08QQFrIPZpgbwu13IT9+I=\", false, function() {\n    return [\n        _hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__.useDraw\n    ];\n});\n_c = Canvas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Canvas);\nvar _c;\n$RefreshReg$(_c, \"Canvas\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzBEO0FBQ2Y7QUFDUDtBQUNhO0FBRWpELE1BQU1NLFNBQVNGLG9EQUFFQSxDQUFDO0FBWWxCLE1BQU1HLFNBQWlDO1FBQUMsRUFBQ0MsS0FBSyxFQUFDQyxHQUFHLEVBQUM7O0lBQ2pELE1BQU0sQ0FBQ0MsT0FBTUMsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBUztJQUMxQyxNQUFNLEVBQUNVLFNBQVMsRUFBQ0MsV0FBVyxFQUFDLEdBQUdWLHVEQUFPQSxDQUFDVztJQUN4QyxNQUFNLENBQUNDLFdBQVVDLGFBQWEsR0FBR2QsK0NBQVFBLENBQVU7SUFFbkRELGdEQUFTQSxDQUFDO1FBQ05LLE9BQU9XLEVBQUUsQ0FBQyxTQUFRQztRQUNsQlosT0FBT1csRUFBRSxDQUFDLGNBQWFFO1FBQ3ZCLElBQUdYLFNBQVNPLFdBQVU7WUFDcEJILFVBQVdRLE9BQU8sQ0FBRUMsVUFBVSxDQUFDLE1BQU9DLFNBQVMsQ0FBQyxHQUFFLEdBQUVWLFVBQVVRLE9BQU8sQ0FBRUcsS0FBSyxFQUFDWCxVQUFVUSxPQUFPLENBQUVJLE1BQU07UUFDeEc7UUFDQSxPQUFNO1lBQ0psQixPQUFPbUIsR0FBRyxDQUFDO1FBQ2I7SUFDSixHQUFFO1FBQUNqQjtRQUFNTztLQUFVO0lBRW5CZCxnREFBU0EsQ0FBQztZQUtLVztRQUpiLElBQUljLGVBQWM7UUFDcEIsSUFBR2pCLElBQUlXLE9BQU8sRUFBRU0sZUFBZWpCLElBQUlXLE9BQU8sQ0FBQ08sV0FBVyxHQUFDLEtBQUc7UUFDMUQsSUFBSUMsZ0JBQWU7UUFDbkIsSUFBR25CLElBQUlXLE9BQU8sRUFBRVEsZ0JBQWdCbkIsSUFBSVcsT0FBTyxDQUFDUyxZQUFZLEdBQUMsS0FBRztRQUMxRCxNQUFNQyxPQUFPbEIscUJBQUFBLFVBQVVRLE9BQU8sY0FBakJSLHlDQUFBQSxtQkFBbUJTLFVBQVUsQ0FBQztRQUMzQ2YsT0FBT3lCLElBQUksQ0FBQztRQUNaekIsT0FBT1csRUFBRSxDQUFDLGtCQUFpQjtnQkFDckJMLG9CQUNzQkE7WUFEMUIsSUFBRyxHQUFDQSxxQkFBQUEsVUFBVVEsT0FBTyxjQUFqQlIseUNBQUFBLG1CQUFtQm9CLFNBQVMsS0FBSTtZQUNwQzFCLE9BQU95QixJQUFJLENBQUMsZ0JBQWNuQixzQkFBQUEsVUFBVVEsT0FBTyxjQUFqQlIsMENBQUFBLG9CQUFtQm9CLFNBQVM7UUFDeEQ7UUFDQTFCLE9BQU9XLEVBQUUsQ0FBQyxhQUFZO2dCQUFDLEVBQUNnQixTQUFTLEVBQUNDLFlBQVksRUFBQ3hCLEtBQUssRUFBZTtZQUMvRCxJQUFHLENBQUNvQixLQUFLO1lBQ1R6Qiw2REFBUUEsQ0FBQztnQkFBQzRCO2dCQUFVQztnQkFBYUo7Z0JBQUlwQjtZQUFLO1FBQzlDO1FBQ0FKLE9BQU9XLEVBQUUsQ0FBQyx1QkFBc0IsQ0FBQ2tCO1lBQzdCLE1BQU1DLE1BQU0sSUFBSUM7WUFDaEJELElBQUlFLEdBQUcsR0FBR0g7WUFDVkMsSUFBSUcsTUFBTSxHQUFHO29CQUNYVDtpQkFBQUEsT0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFLVSxTQUFTLENBQUNKLEtBQUksR0FBRTtZQUN2QjtRQUNKO1FBRUEsT0FBTTtZQUNKOUIsT0FBT21CLEdBQUcsQ0FBQztZQUNYbkIsT0FBT21CLEdBQUcsQ0FBQztZQUNYbkIsT0FBT21CLEdBQUcsQ0FBQztRQUNiO0lBRUYsR0FBRTtRQUFDYjtLQUFVO0lBRWIsU0FBU007UUFDTEYsYUFBYTtJQUNqQjtJQUNBLFNBQVNHO1FBQ1BILGFBQWE7SUFDZjtJQUVBLFNBQVNGLFdBQVcsS0FBbUM7WUFBbkMsRUFBQ21CLFNBQVMsRUFBQ0MsWUFBWSxFQUFDSixHQUFHLEVBQVEsR0FBbkM7UUFDbEJ4QixPQUFPeUIsSUFBSSxDQUFDLGFBQWE7WUFBQ0U7WUFBVUM7WUFBYXhCO1FBQUs7UUFDdERMLDZEQUFRQSxDQUFDO1lBQUM0QjtZQUFVQztZQUFhSjtZQUFJcEI7UUFBSztJQUM1QztJQUNBK0IsUUFBUUMsR0FBRyxDQUFDakM7SUFDWix5QkFBeUI7SUFDekIsaUVBQWlFO0lBQ2pFLDBCQUEwQjtJQUMxQixtRUFBbUU7SUFFbkUscUJBQ0U7a0JBQ0UsNEVBQUNrQztZQUFPOUIsYUFBYUE7WUFBYytCLEtBQUtoQztZQUFXVyxPQUFPRztZQUFhRixRQUFRSTtZQUFlaUIsV0FBVTs7Ozs7OztBQUk5RztHQXRFTXRDOztRQUU0QkosbURBQU9BOzs7S0FGbkNJO0FBd0VOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy50c3g/OWZlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRHJhdyB9IGZyb20gJy4uL2hvb2tzL3VzZURyYXcnO1xuaW1wb3J0IHtpb30gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQgeyBkcmF3TGluZSB9IGZyb20gJy4uL2Z1bmN0aW9ucy9kcmF3TGluZSc7XG5cbmNvbnN0IHNvY2tldCA9IGlvKCdodHRwOi8vbG9jYWxob3N0OjMwMDEnKVxuXG5pbnRlcmZhY2UgQ2FudmFzUHJvcHN7XG4gIGNsZWFyIDogYm9vbGVhbixcbiAgYWRuIDogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50Pixcbn1cbnR5cGUgRHJhd0xpbmVQcm9wcyA9IHtcbiAgY29sb3IgOiBzdHJpbmcsXG4gIHByZXZQb2ludCA6IFBvaW50IHwgbnVsbCxcbiAgY3VycmVudFBvaW50OiBQb2ludCxcbn1cblxuY29uc3QgQ2FudmFzIDogUmVhY3QuRkM8Q2FudmFzUHJvcHM+ID0gKHtjbGVhcixhZG59KSA9PiB7XG4gIGNvbnN0IFtjb2xvcixzZXRDb2xvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcjMDAwJyk7XG4gIGNvbnN0IHtjYW52YXNSZWYsb25Nb3VzZURvd259ID0gdXNlRHJhdyhjcmVhdGVMaW5lKTtcbiAgY29uc3QgW2Z1bGxDbGVhcixzZXRGdWxsQ2xlYXJdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgICBzb2NrZXQub24oJ2NsZWFyJyxhbGxjbGVhcik7XG4gICAgICBzb2NrZXQub24oJ2NsZWFyX2RvbmUnLGNsZWFyRG9uZSk7XG4gICAgICBpZihjbGVhciB8fCBmdWxsQ2xlYXIpe1xuICAgICAgICBjYW52YXNSZWYhLmN1cnJlbnQhLmdldENvbnRleHQoJzJkJykhLmNsZWFyUmVjdCgwLDAsY2FudmFzUmVmLmN1cnJlbnQhLndpZHRoLGNhbnZhc1JlZi5jdXJyZW50IS5oZWlnaHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuKCk9PntcbiAgICAgICAgc29ja2V0Lm9mZignY2xlYXInKVxuICAgICAgfVxuICB9LFtjbGVhcixmdWxsQ2xlYXJdKVxuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGxldCBjYW52YXNXaWR0aCA9IDc1MDtcbiAgaWYoYWRuLmN1cnJlbnQpIGNhbnZhc1dpZHRoID0gIGFkbi5jdXJyZW50LmNsaWVudFdpZHRoKjk1LzEwMDtcbiAgbGV0IGNhbnZhc0hlaWdodCA9IDc3MDtcbiAgaWYoYWRuLmN1cnJlbnQpIGNhbnZhc0hlaWdodCA9ICBhZG4uY3VycmVudC5jbGllbnRIZWlnaHQqOTUvMTAwO1xuICAgIGNvbnN0IGN0eCA9ICBjYW52YXNSZWYuY3VycmVudD8uZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBzb2NrZXQuZW1pdCgnbmV3Q2xpZW50Jyk7XG4gICAgc29ja2V0Lm9uKCdnZXRDYW52YXNTdGF0ZScsKCk9PntcbiAgICAgIGlmKCFjYW52YXNSZWYuY3VycmVudD8udG9EYXRhVVJMKCkpIHJldHVybjtcbiAgICAgIHNvY2tldC5lbWl0KCdjYW52YXNTdGF0ZScsY2FudmFzUmVmLmN1cnJlbnQ/LnRvRGF0YVVSTCgpKTtcbiAgICB9KVxuICAgIHNvY2tldC5vbignZHJhd19saW5lJywoe3ByZXZQb2ludCxjdXJyZW50UG9pbnQsY29sb3J9OkRyYXdMaW5lUHJvcHMpPT57XG4gICAgICAgIGlmKCFjdHgpIHJldHVybjtcbiAgICAgICAgZHJhd0xpbmUoe3ByZXZQb2ludCxjdXJyZW50UG9pbnQsY3R4LGNvbG9yfSk7XG4gICAgfSlcbiAgICBzb2NrZXQub24oJ2NhbnZTdGF0ZUZyb21TZXJ2ZXInLChzdGF0ZTpzdHJpbmcpPT57XG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZTtcbiAgICAgICAgaW1nLnNyYyA9IHN0YXRlO1xuICAgICAgICBpbWcub25sb2FkID0gKCk9PntcbiAgICAgICAgICBjdHg/LmRyYXdJbWFnZShpbWcsMCwwKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4oKT0+e1xuICAgICAgc29ja2V0Lm9mZignZHJhd19saW5lJylcbiAgICAgIHNvY2tldC5vZmYoJ2NhbnZTdGF0ZUZyb21TZXJ2ZXInKVxuICAgICAgc29ja2V0Lm9mZignZ2V0Q2FudmFzU3RhdGUnKVxuICAgIH1cblxuICB9LFtjYW52YXNSZWZdKVxuICBcbiAgZnVuY3Rpb24gYWxsY2xlYXIoKXtcbiAgICAgIHNldEZ1bGxDbGVhcih0cnVlKTtcbiAgfVxuICBmdW5jdGlvbiBjbGVhckRvbmUoKXtcbiAgICBzZXRGdWxsQ2xlYXIoZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTGluZSh7cHJldlBvaW50LGN1cnJlbnRQb2ludCxjdHh9IDogRHJhdyl7XG4gICAgc29ja2V0LmVtaXQoJ2RyYXdfbGluZScsKHtwcmV2UG9pbnQsY3VycmVudFBvaW50LGNvbG9yfSkpXG4gICAgZHJhd0xpbmUoe3ByZXZQb2ludCxjdXJyZW50UG9pbnQsY3R4LGNvbG9yfSlcbiAgfVxuICBjb25zb2xlLmxvZyhhZG4pO1xuICAvLyBsZXQgY2FudmFzV2lkdGggPSA3NTA7XG4gIC8vIGlmKGFkbi5jdXJyZW50KSBjYW52YXNXaWR0aCA9ICBhZG4uY3VycmVudC5jbGllbnRXaWR0aCo5NS8xMDA7XG4gIC8vIGxldCBjYW52YXNIZWlnaHQgPSA3NzA7XG4gIC8vIGlmKGFkbi5jdXJyZW50KSBjYW52YXNIZWlnaHQgPSAgYWRuLmN1cnJlbnQuY2xpZW50SGVpZ2h0Kjk1LzEwMDtcbiBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGNhbnZhcyBvbk1vdXNlRG93bj17b25Nb3VzZURvd259ICByZWY9e2NhbnZhc1JlZn0gd2lkdGg9e2NhbnZhc1dpZHRofSBoZWlnaHQ9e2NhbnZhc0hlaWdodH0gIGNsYXNzTmFtZT0nY2FudmFzJz5cbiAgICAgIDwvY2FudmFzPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbnZhcyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRHJhdyIsImlvIiwiZHJhd0xpbmUiLCJzb2NrZXQiLCJDYW52YXMiLCJjbGVhciIsImFkbiIsImNvbG9yIiwic2V0Q29sb3IiLCJjYW52YXNSZWYiLCJvbk1vdXNlRG93biIsImNyZWF0ZUxpbmUiLCJmdWxsQ2xlYXIiLCJzZXRGdWxsQ2xlYXIiLCJvbiIsImFsbGNsZWFyIiwiY2xlYXJEb25lIiwiY3VycmVudCIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIm9mZiIsImNhbnZhc1dpZHRoIiwiY2xpZW50V2lkdGgiLCJjYW52YXNIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjdHgiLCJlbWl0IiwidG9EYXRhVVJMIiwicHJldlBvaW50IiwiY3VycmVudFBvaW50Iiwic3RhdGUiLCJpbWciLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsImRyYXdJbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJjYW52YXMiLCJyZWYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Canvas.tsx\n"));

/***/ })

});