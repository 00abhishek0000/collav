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

/***/ "(app-pages-browser)/./app/lobby/[lobby]/page.tsx":
/*!************************************!*\
  !*** ./app/lobby/[lobby]/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lobby_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lobby.css */ \"(app-pages-browser)/./app/lobby/[lobby]/lobby.css\");\n/* harmony import */ var _components_comp_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/comp.css */ \"(app-pages-browser)/./app/components/comp.css\");\n/* harmony import */ var _app_components_Canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/Canvas */ \"(app-pages-browser)/./app/components/Canvas.tsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_5__.io)(\"http://localhost:3001\");\nconst Lobby = ()=>{\n    _s();\n    const leftRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const rightRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const midRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const btnRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [clear, setClear] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = ()=>{\n        setClear(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const lefEle = leftRef.current;\n        const rigEle = rightRef.current;\n        const lefStyle = window.getComputedStyle(lefEle);\n        const rigStyle = window.getComputedStyle(rigEle);\n        let lefWidth = lefStyle.width;\n        let rigWidth = rigStyle.width;\n        let x = 0;\n        const mouseMoveResize = (event)=>{\n            const dx = event.clientX - x;\n            x = event.clientX;\n            let lefWidthNum = parseFloat(lefWidth.replace(\"px\", \"\"));\n            let rigWidthNum = parseFloat(rigWidth.replace(\"px\", \"\"));\n            lefWidthNum = (lefWidthNum + dx) / lefEle.parentElement.clientWidth * 100;\n            rigWidthNum = (rigWidthNum - dx) / rigEle.parentElement.clientWidth * 100;\n            let val = \"\".concat(lefWidthNum, \"%\");\n            lefWidth = \"\".concat(lefWidthNum / 100 * lefEle.parentElement.clientWidth, \"%\");\n            rigWidth = \"\".concat(rigWidthNum / 100 * rigEle.parentElement.clientWidth, \"%\");\n            lefEle.style.width = \"\".concat(lefWidthNum, \"%\");\n            rigEle.style.width = \"\".concat(rigWidthNum, \"%\");\n            setFlag(true);\n        };\n        const mouseUpResize = (event)=>{\n            document.removeEventListener(\"mousemove\", mouseMoveResize);\n        };\n        const handleResize = (event)=>{\n            x = event.clientX;\n            document.addEventListener(\"mousemove\", mouseMoveResize);\n            document.addEventListener(\"mouseup\", mouseUpResize);\n        };\n        const hanBtn = ()=>{\n            setClear(false);\n            socket.emit(\"clear_done\");\n        };\n        const handleBtn = ()=>{\n            var _btn;\n            setClear(true);\n            socket.emit(\"clear\");\n            (_btn = btn) === null || _btn === void 0 ? void 0 : _btn.addEventListener(\"mouseup\", hanBtn);\n        };\n        const midEle = midRef.current;\n        if (midEle) {\n            midEle.addEventListener(\"mousedown\", handleResize);\n        }\n        const btn = btnRef.current;\n        if (btn) {\n            btn.addEventListener(\"mousedown\", handleBtn);\n        }\n        return ()=>{\n            var _midEle;\n            (_midEle = midEle) === null || _midEle === void 0 ? void 0 : _midEle.removeEventListener(\"mousedown\", handleResize);\n            btn.removeEventListener(\"mousedown\", handleBtn);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"outermost\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: leftRef,\n                className: \"board\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        ref: btnRef,\n                        className: \"clearButton\",\n                        onClick: handleClick,\n                        children: \"clear\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abhi/Desktop/collav/client/app/lobby/[lobby]/page.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Canvas__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        flag: flag,\n                        adn: leftRef,\n                        clear: clear\n                    }, void 0, false, {\n                        fileName: \"/Users/abhi/Desktop/collav/client/app/lobby/[lobby]/page.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhi/Desktop/collav/client/app/lobby/[lobby]/page.tsx\",\n                lineNumber: 80,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: midRef,\n                className: \"resizer\",\n                children: \"L\"\n            }, void 0, false, {\n                fileName: \"/Users/abhi/Desktop/collav/client/app/lobby/[lobby]/page.tsx\",\n                lineNumber: 86,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: rightRef,\n                className: \"textArea\",\n                children: \"right\"\n            }, void 0, false, {\n                fileName: \"/Users/abhi/Desktop/collav/client/app/lobby/[lobby]/page.tsx\",\n                lineNumber: 89,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abhi/Desktop/collav/client/app/lobby/[lobby]/page.tsx\",\n        lineNumber: 79,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Lobby, \"HmaJOwh31pzTH+EvzcCiwyRQMKs=\");\n_c = Lobby;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Lobby);\nvar _c;\n$RefreshReg$(_c, \"Lobby\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2JieS9bbG9iYnldL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDMEQ7QUFDckM7QUFDYTtBQUNXO0FBQ1Y7QUFDbkMsTUFBTU0sU0FBUUQsb0RBQUVBLENBQUM7QUFFakIsTUFBTUUsUUFBbUI7O0lBQ3JCLE1BQU1DLFVBQVVOLDZDQUFNQSxDQUFpQjtJQUN2QyxNQUFNTyxXQUFXUCw2Q0FBTUEsQ0FBaUI7SUFDeEMsTUFBTVEsU0FBU1IsNkNBQU1BLENBQWlCO0lBQ3RDLE1BQU1TLFNBQVNULDZDQUFNQSxDQUFvQjtJQUN6QyxNQUFNLENBQUNVLE9BQU1DLFNBQVMsR0FBR1YsK0NBQVFBLENBQUM7SUFDbEMsTUFBTSxDQUFDVyxNQUFLQyxRQUFRLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ2hDLE1BQU1hLGNBQWM7UUFDaEJILFNBQVM7SUFDYjtJQUNBWixnREFBU0EsQ0FBQztRQUNOLE1BQU1nQixTQUFTVCxRQUFRVSxPQUFPO1FBQzlCLE1BQU1DLFNBQVNWLFNBQVNTLE9BQU87UUFDL0IsTUFBTUUsV0FBV0MsT0FBT0MsZ0JBQWdCLENBQUNMO1FBQ3pDLE1BQU1NLFdBQVdGLE9BQU9DLGdCQUFnQixDQUFDSDtRQUN6QyxJQUFJSyxXQUFXSixTQUFTSyxLQUFLO1FBQzdCLElBQUlDLFdBQVdILFNBQVNFLEtBQUs7UUFFN0IsSUFBSUUsSUFBSTtRQUNSLE1BQU1DLGtCQUFrQixDQUFDQztZQUNyQixNQUFNQyxLQUFLRCxNQUFNRSxPQUFPLEdBQUdKO1lBQzNCQSxJQUFJRSxNQUFNRSxPQUFPO1lBQ2pCLElBQUlDLGNBQWNDLFdBQVdULFNBQVNVLE9BQU8sQ0FBQyxNQUFLO1lBQ25ELElBQUlDLGNBQWNGLFdBQVdQLFNBQVNRLE9BQU8sQ0FBQyxNQUFLO1lBQ25ERixjQUFjLENBQUNBLGNBQWNGLEVBQUMsSUFBR2IsT0FBUW1CLGFBQWEsQ0FBRUMsV0FBVyxHQUFHO1lBQ3RFRixjQUFjLENBQUNBLGNBQWNMLEVBQUMsSUFBR1gsT0FBUWlCLGFBQWEsQ0FBRUMsV0FBVyxHQUFHO1lBQ3RFLElBQUlDLE1BQU0sR0FBZSxPQUFaTixhQUFZO1lBQ3pCUixXQUFXLEdBQXdELE9BQXJEUSxjQUFZLE1BQU1mLE9BQVFtQixhQUFhLENBQUVDLFdBQVcsRUFBQztZQUNuRVgsV0FBVyxHQUF3RCxPQUFyRFMsY0FBWSxNQUFNaEIsT0FBUWlCLGFBQWEsQ0FBRUMsV0FBVyxFQUFDO1lBQ25FcEIsT0FBUXNCLEtBQUssQ0FBQ2QsS0FBSyxHQUFHLEdBQWUsT0FBWk8sYUFBWTtZQUNyQ2IsT0FBUW9CLEtBQUssQ0FBQ2QsS0FBSyxHQUFHLEdBQWUsT0FBWlUsYUFBWTtZQUVyQ3BCLFFBQVE7UUFDWjtRQUNBLE1BQU15QixnQkFBZ0IsQ0FBQ1g7WUFDbkJZLFNBQVNDLG1CQUFtQixDQUFDLGFBQVlkO1FBQzdDO1FBQ0EsTUFBTWUsZUFBZSxDQUFDZDtZQUNsQkYsSUFBSUUsTUFBTUUsT0FBTztZQUNqQlUsU0FBU0csZ0JBQWdCLENBQUMsYUFBYWhCO1lBQ3ZDYSxTQUFTRyxnQkFBZ0IsQ0FBQyxXQUFXSjtRQUN6QztRQUVBLE1BQU1LLFNBQVM7WUFDWGhDLFNBQVM7WUFDVFAsT0FBT3dDLElBQUksQ0FBQztRQUNoQjtRQUVBLE1BQU1DLFlBQVk7Z0JBR2RDO1lBRkFuQyxTQUFTO1lBQ1RQLE9BQU93QyxJQUFJLENBQUM7YUFDWkUsT0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFLSixnQkFBZ0IsQ0FBQyxXQUFVQztRQUNwQztRQUVBLE1BQU1JLFNBQVN2QyxPQUFPUSxPQUFPO1FBQzdCLElBQUcrQixRQUFPO1lBQ05BLE9BQU9MLGdCQUFnQixDQUFDLGFBQVlEO1FBQ3hDO1FBQ0EsTUFBTUssTUFBTXJDLE9BQU9PLE9BQU87UUFDMUIsSUFBRzhCLEtBQUk7WUFDSEEsSUFBSUosZ0JBQWdCLENBQUMsYUFBWUc7UUFDckM7UUFFQSxPQUFNO2dCQUNGRTthQUFBQSxVQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVFQLG1CQUFtQixDQUFDLGFBQVlDO1lBQ3hDSyxJQUFLTixtQkFBbUIsQ0FBQyxhQUFZSztRQUN6QztJQUVKLEdBQUUsRUFBRTtJQUNKLHFCQUNJLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlFLEtBQUs1QztnQkFBUzJDLFdBQVU7O2tDQUMzQiw4REFBQ0U7d0JBQU9ELEtBQUt6Qzt3QkFBUXdDLFdBQVU7d0JBQWNHLFNBQVN0QztrQ0FBYTs7Ozs7O2tDQUduRSw4REFBQ1osOERBQU1BO3dCQUFDVSxNQUFNQTt3QkFBTXlDLEtBQUsvQzt3QkFBU0ksT0FBT0E7Ozs7Ozs7Ozs7OzswQkFFM0MsOERBQUNzQztnQkFBSUUsS0FBSzFDO2dCQUFReUMsV0FBVTswQkFBVTs7Ozs7OzBCQUd0Qyw4REFBQ0Q7Z0JBQUlFLEtBQUszQztnQkFBVTBDLFdBQVU7MEJBQVc7Ozs7Ozs7Ozs7OztBQUtqRDtHQXJGSTVDO0tBQUFBO0FBc0ZKLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9sb2JieS9bbG9iYnldL3BhZ2UudHN4PzFkNTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCx7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICAnLi9sb2JieS5jc3MnXG5pbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvY29tcC5jc3MnXG5pbXBvcnQgQ2FudmFzIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL0NhbnZhc1wiO1xuaW1wb3J0IHtpb30gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcbmNvbnN0IHNvY2tldCA9aW8oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMScpXG5cbmNvbnN0IExvYmJ5IDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgbGVmdFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgcmlnaHRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICAgIGNvbnN0IG1pZFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgYnRuUmVmID0gdXNlUmVmPEhUTUxCdXR0b25FbGVtZW50PihudWxsKTtcbiAgICBjb25zdCBbY2xlYXIsc2V0Q2xlYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtmbGFnLHNldEZsYWddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCk9PntcbiAgICAgICAgc2V0Q2xlYXIodHJ1ZSk7XG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBsZWZFbGUgPSBsZWZ0UmVmLmN1cnJlbnQhO1xuICAgICAgICBjb25zdCByaWdFbGUgPSByaWdodFJlZi5jdXJyZW50ITtcbiAgICAgICAgY29uc3QgbGVmU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShsZWZFbGUpO1xuICAgICAgICBjb25zdCByaWdTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHJpZ0VsZSk7XG4gICAgICAgIGxldCBsZWZXaWR0aCA9IGxlZlN0eWxlLndpZHRoO1xuICAgICAgICBsZXQgcmlnV2lkdGggPSByaWdTdHlsZS53aWR0aDtcblxuICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgIGNvbnN0IG1vdXNlTW92ZVJlc2l6ZSA9IChldmVudDogeyBjbGllbnRYOiBudW1iZXI7IH0pPT57XG4gICAgICAgICAgICBjb25zdCBkeCA9IGV2ZW50LmNsaWVudFggLSB4O1xuICAgICAgICAgICAgeCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAgICAgICBsZXQgbGVmV2lkdGhOdW0gPSBwYXJzZUZsb2F0KGxlZldpZHRoLnJlcGxhY2UoXCJweFwiLFwiXCIpKTtcbiAgICAgICAgICAgIGxldCByaWdXaWR0aE51bSA9IHBhcnNlRmxvYXQocmlnV2lkdGgucmVwbGFjZShcInB4XCIsXCJcIikpO1xuICAgICAgICAgICAgbGVmV2lkdGhOdW0gPSAobGVmV2lkdGhOdW0gKyBkeCkvbGVmRWxlIS5wYXJlbnRFbGVtZW50IS5jbGllbnRXaWR0aCAqIDEwMDtcbiAgICAgICAgICAgIHJpZ1dpZHRoTnVtID0gKHJpZ1dpZHRoTnVtIC0gZHgpL3JpZ0VsZSEucGFyZW50RWxlbWVudCEuY2xpZW50V2lkdGggKiAxMDA7XG4gICAgICAgICAgICBsZXQgdmFsID0gYCR7bGVmV2lkdGhOdW19JWA7XG4gICAgICAgICAgICBsZWZXaWR0aCA9IGAke2xlZldpZHRoTnVtLzEwMCAqIGxlZkVsZSEucGFyZW50RWxlbWVudCEuY2xpZW50V2lkdGh9JWA7XG4gICAgICAgICAgICByaWdXaWR0aCA9IGAke3JpZ1dpZHRoTnVtLzEwMCAqIHJpZ0VsZSEucGFyZW50RWxlbWVudCEuY2xpZW50V2lkdGh9JWA7XG4gICAgICAgICAgICBsZWZFbGUhLnN0eWxlLndpZHRoID0gYCR7bGVmV2lkdGhOdW19JWA7XG4gICAgICAgICAgICByaWdFbGUhLnN0eWxlLndpZHRoID0gYCR7cmlnV2lkdGhOdW19JWA7XG5cbiAgICAgICAgICAgIHNldEZsYWcodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW91c2VVcFJlc2l6ZSA9IChldmVudDogYW55KT0+e1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJyxtb3VzZU1vdmVSZXNpemUpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlUmVzaXplID0gKGV2ZW50OiB7IGNsaWVudFg6IG51bWJlcjsgfSk9PntcbiAgICAgICAgICAgIHggPSBldmVudC5jbGllbnRYO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3VzZU1vdmVSZXNpemUpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgbW91c2VVcFJlc2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoYW5CdG4gPSAoKT0+e1xuICAgICAgICAgICAgc2V0Q2xlYXIoZmFsc2UpO1xuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NsZWFyX2RvbmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZUJ0biA9ICgpPT57XG4gICAgICAgICAgICBzZXRDbGVhcih0cnVlKTtcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdjbGVhcicpO1xuICAgICAgICAgICAgYnRuPy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJyxoYW5CdG4pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWlkRWxlID0gbWlkUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmKG1pZEVsZSl7XG4gICAgICAgICAgICBtaWRFbGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJyxoYW5kbGVSZXNpemUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ0biA9IGJ0blJlZi5jdXJyZW50O1xuICAgICAgICBpZihidG4pe1xuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsaGFuZGxlQnRuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybigpPT57XG4gICAgICAgICAgICBtaWRFbGU/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIixoYW5kbGVSZXNpemUpO1xuICAgICAgICAgICAgYnRuIS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLGhhbmRsZUJ0bik7XG4gICAgICAgIH1cblxuICAgIH0sW10pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlcm1vc3RcIj5cbiAgICAgICAgICA8ZGl2IHJlZj17bGVmdFJlZn0gY2xhc3NOYW1lPVwiYm9hcmRcIj5cbiAgICAgICAgICAgIDxidXR0b24gcmVmPXtidG5SZWZ9IGNsYXNzTmFtZT0nY2xlYXJCdXR0b24nIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgICAgICBjbGVhclxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8Q2FudmFzIGZsYWc9e2ZsYWd9IGFkbj17bGVmdFJlZn0gY2xlYXI9e2NsZWFyfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiByZWY9e21pZFJlZn0gY2xhc3NOYW1lPVwicmVzaXplclwiPlxuICAgICAgICAgICAgICAgIExcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHJlZj17cmlnaHRSZWZ9IGNsYXNzTmFtZT1cInRleHRBcmVhXCI+XG4gICAgICAgICAgICByaWdodFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiAgZXhwb3J0IGRlZmF1bHQgTG9iYnk7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJDYW52YXMiLCJpbyIsInNvY2tldCIsIkxvYmJ5IiwibGVmdFJlZiIsInJpZ2h0UmVmIiwibWlkUmVmIiwiYnRuUmVmIiwiY2xlYXIiLCJzZXRDbGVhciIsImZsYWciLCJzZXRGbGFnIiwiaGFuZGxlQ2xpY2siLCJsZWZFbGUiLCJjdXJyZW50IiwicmlnRWxlIiwibGVmU3R5bGUiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwicmlnU3R5bGUiLCJsZWZXaWR0aCIsIndpZHRoIiwicmlnV2lkdGgiLCJ4IiwibW91c2VNb3ZlUmVzaXplIiwiZXZlbnQiLCJkeCIsImNsaWVudFgiLCJsZWZXaWR0aE51bSIsInBhcnNlRmxvYXQiLCJyZXBsYWNlIiwicmlnV2lkdGhOdW0iLCJwYXJlbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJ2YWwiLCJzdHlsZSIsIm1vdXNlVXBSZXNpemUiLCJkb2N1bWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVSZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuQnRuIiwiZW1pdCIsImhhbmRsZUJ0biIsImJ0biIsIm1pZEVsZSIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJhZG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/lobby/[lobby]/page.tsx\n"));

/***/ })

});