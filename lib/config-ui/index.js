"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabConfig = require("./tab-config");

Object.keys(_tabConfig).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tabConfig[key];
    }
  });
});

var _toolTip = require("./tool-tip");

Object.keys(_toolTip).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _toolTip[key];
    }
  });
});

var _componentAccess = require("./component-access");

Object.keys(_componentAccess).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _componentAccess[key];
    }
  });
});

var _actionsConfig = require("./actions-config");

Object.keys(_actionsConfig).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _actionsConfig[key];
    }
  });
});