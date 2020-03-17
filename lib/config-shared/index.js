"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _permissions = require("./permissions");

Object.keys(_permissions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _permissions[key];
    }
  });
});

var _docTypes = require("./doc-types");

Object.keys(_docTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _docTypes[key];
    }
  });
});

var _notificationAttributeConfig = require("./notification-attribute-config");

Object.keys(_notificationAttributeConfig).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _notificationAttributeConfig[key];
    }
  });
});

var _supplierConfig = require("./supplier-config");

Object.keys(_supplierConfig).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _supplierConfig[key];
    }
  });
});

var _notificationActions = require("./notification-actions");

Object.keys(_notificationActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _notificationActions[key];
    }
  });
});