"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allComponents = exports.componentAccessLevels = exports.NOTIFICATIONS_TAB = exports.NOTIFICATIONS_ADMIN_ACTIONS = exports.NOTIFICATIONS_CUSTOMER_ACTIONS = exports.INBOX_ITEMS_ADMIN_ACTIONS = exports.INBOX_ITEMS_CUSTOMER_ACTIONS = void 0;

var _permissions = require("../config-shared/permissions");

var INBOX_ITEMS_CUSTOMER_ACTIONS = 'INBOX_ITEMS_CUSTOMER_ACTIONS';
exports.INBOX_ITEMS_CUSTOMER_ACTIONS = INBOX_ITEMS_CUSTOMER_ACTIONS;
var INBOX_ITEMS_ADMIN_ACTIONS = 'INBOX_ITEMS_ADMIN_ACTIONS';
exports.INBOX_ITEMS_ADMIN_ACTIONS = INBOX_ITEMS_ADMIN_ACTIONS;
var NOTIFICATIONS_CUSTOMER_ACTIONS = 'NOTIFICATIONS_CUSTOMER_ACTIONS';
exports.NOTIFICATIONS_CUSTOMER_ACTIONS = NOTIFICATIONS_CUSTOMER_ACTIONS;
var NOTIFICATIONS_ADMIN_ACTIONS = 'NOTIFICATIONS_ADMIN_ACTIONS';
exports.NOTIFICATIONS_ADMIN_ACTIONS = NOTIFICATIONS_ADMIN_ACTIONS;
var NOTIFICATIONS_TAB = 'NOTIFICATIONS_TAB';
exports.NOTIFICATIONS_TAB = NOTIFICATIONS_TAB;
var componentAccessLevels = {
  INBOX_ITEMS_CUSTOMER_ACTIONS: {
    permission: _permissions.permissions.INBOX_ITEM_OBJECTS_RUN_CUSTOMER_ACTIONS,
    name: 'INBOX_ITEMS_CUSTOMER_ACTIONS'
  },
  INBOX_ITEMS_ADMIN_ACTIONS: {
    permission: _permissions.permissions.INBOX_ITEM_OBJECTS_RUN_ADMIN_ACTIONS,
    name: 'INBOX_ITEMS_ADMIN_ACTIONS'
  },
  NOTIFICATIONS_CUSTOMER_ACTIONS: {
    permission: _permissions.permissions.INBOX_ITEM_OBJECTS_RUN_CUSTOMER_ACTIONS,
    name: 'NOTIFICATIONS_CUSTOMER_ACTIONS'
  },
  NOTIFICATIONS_ADMIN_ACTIONS: {
    permission: _permissions.permissions.INBOX_ITEM_OBJECTS_RUN_ADMIN_ACTIONS,
    name: 'NOTIFICATIONS_ADMIN_ACTIONS'
  },
  INBOX_TAB: {
    permission: _permissions.permissions.INBOX_ITEM_OBJECTS_VIEW_CUSTOMER_FIELDS,
    name: 'INBOX_TAB'
  },
  NOTIFICATIONS_TAB: {
    permission: _permissions.permissions.INBOX_ITEM_OBJECTS_VIEW_CUSTOMER_FIELDS,
    name: 'NOTIFICATIONS_TAB'
  },
  DOCS_TAB: {
    permission: _permissions.permissions.DOC_OBJECTS_VIEW_CUSTOMER_FIELDS,
    name: 'DOCS_TAB'
  },
  DOCS_APPROVE: {
    permission: _permissions.permissions.DOC_OBJECTS_APPROVE,
    name: 'DOCS_APPROVE'
  },
  DOCS_DELETE: {
    permission: _permissions.permissions.DOC_OBJECTS_DELETE,
    name: 'DOCS_DELETE'
  }
};
exports.componentAccessLevels = componentAccessLevels;
var allComponents = Object.keys(componentAccessLevels);
exports.allComponents = allComponents;