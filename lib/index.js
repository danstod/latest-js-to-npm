"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _configUi = require("./config-ui");

Object.keys(_configUi).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _configUi[key];
    }
  });
});

var _configShared = require("./config-shared");

Object.keys(_configShared).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _configShared[key];
    }
  });
});
