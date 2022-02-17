(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["bowling-lib"] = {}));
})(this, (function (exports) { 'use strict';

  function sum(a, b) {
      return a + b;
  }
  function deduct(a, b) {
      return a - b;
  }

  exports.deduct = deduct;
  exports.sum = sum;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
