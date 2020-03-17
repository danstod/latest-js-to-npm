"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToolTipConfig = getToolTipConfig;
exports.getToolTip = getToolTip;
exports.subItemToolTipConfig = exports.docToolTipConfig = exports.notificationToolTipConfig = exports.inboxItemToolTipConfig = void 0;

var _componentAccess = require("./component-access");

var _docTypes = require("../config-shared/doc-types");

var _notificationAttributeConfig = require("../config-shared/notification-attribute-config");

var _tabConfig = require("./tab-config");

// prettier-ignore
var inboxItemToolTipConfig = {
  from: [{
    fieldName: '_id',
    label: 'ID',
    componentAccess: _componentAccess.componentAccessLevels.INBOX_ITEMS_ADMIN_ACTIONS.name
  }, {
    fieldName: 'fromName',
    label: 'From name',
    componentAccess: _componentAccess.componentAccessLevels.INBOX_TAB.name
  }, {
    fieldName: 'from',
    label: 'From email',
    componentAccess: _componentAccess.componentAccessLevels.INBOX_TAB.name
  }, {
    fieldName: 'replyTo',
    label: 'Reply to',
    componentAccess: _componentAccess.componentAccessLevels.INBOX_TAB.name
  }, {
    fieldName: 'to',
    label: 'To',
    componentAccess: _componentAccess.componentAccessLevels.INBOX_TAB.name
  }, {
    fieldName: 'cc',
    label: 'CC',
    componentAccess: _componentAccess.componentAccessLevels.INBOX_TAB.name
  }, {
    fieldName: 'bcc',
    label: 'BCC',
    componentAccess: _componentAccess.componentAccessLevels.INBOX_TAB.name
  }, {
    fieldName: 'originalRecipient',
    label: 'Original Recipient',
    componentAccess: _componentAccess.componentAccessLevels.INBOX_ITEMS_ADMIN_ACTIONS.name
  }],
  subject: [{
    fieldName: 'subject',
    label: 'Subject',
    componentAccess: _componentAccess.componentAccessLevels.INBOX_TAB.name
  }, {
    fieldName: 'emailPreview',
    label: 'Email Preview',
    componentAccess: _componentAccess.componentAccessLevels.INBOX_TAB.name // { fieldName: 'htmlBody', label: 'Email (html)', componentAccess: componentAccessLevels.INBOX_TAB.name },
    // { fieldName: 'plainBody', label: 'Email (plain)', componentAccess: componentAccessLevels.INBOX_TAB.name }

  }],
  receivedDate: [{
    fieldName: 'receivedDate',
    label: 'Received Date',
    componentAccess: _componentAccess.componentAccessLevels.INBOX_TAB.name
  }, {
    fieldName: 'createdDate',
    label: 'Processed Date',
    componentAccess: _componentAccess.componentAccessLevels.INBOX_TAB.name
  }],
  numDocs: Object.keys(_docTypes.docTypes).map(function (docType) {
    return {
      fieldName: 'COUNT_' + docType,
      label: docType,
      componentAccess: _componentAccess.componentAccessLevels.INBOX_TAB.name
    };
  }),
  numOpenNotifications: Object.keys(_notificationAttributeConfig.notificationSeverities).map(function (serverity) {
    return {
      fieldName: 'COUNT_NOTIFICATION_' + serverity,
      label: serverity,
      componentAccess: _componentAccess.componentAccessLevels.INBOX_TAB.name
    };
  }),
  menu: [{
    fieldName: '_id',
    label: 'ID',
    componentAccess: _componentAccess.componentAccessLevels.INBOX_TAB.name
  }]
}; // prettier-ignore

exports.inboxItemToolTipConfig = inboxItemToolTipConfig;
var notificationToolTipConfig = {
  notificationTitle: [{
    fieldName: '_id',
    label: 'ID',
    componentAccess: _componentAccess.componentAccessLevels.NOTIFICATIONS_ADMIN_ACTIONS.name
  }, {
    fieldName: 'adminText',
    label: 'Admin Text',
    componentAccess: _componentAccess.componentAccessLevels.NOTIFICATIONS_ADMIN_ACTIONS.name
  }, {
    fieldName: 'customerText',
    label: 'Customer Text',
    componentAccess: _componentAccess.componentAccessLevels.NOTIFICATIONS_TAB.name
  }],
  parentType: [{
    label: 'Inbox Item',
    idField: 'inboxItemId',
    componentAccess: _componentAccess.componentAccessLevels.NOTIFICATIONS_TAB.name
  }, // the label is the link
  {
    label: 'Sub Item',
    idField: 'subItemId',
    componentAccess: _componentAccess.componentAccessLevels.NOTIFICATIONS_TAB.name
  }, {
    label: 'Doc',
    idField: 'docId',
    componentAccess: _componentAccess.componentAccessLevels.NOTIFICATIONS_TAB.name // { label: 'Line', idField: 'lineId', componentAccess: componentAccessLevels.NOTIFICATIONS_TAB.name }

  }],
  open: [{
    fieldName: 'openForAdmin',
    label: 'Open for admin',
    componentAccess: _componentAccess.componentAccessLevels.NOTIFICATIONS_ADMIN_ACTIONS.name
  }, {
    fieldName: 'openForCustomer',
    label: 'Open for customer',
    componentAccess: _componentAccess.componentAccessLevels.NOTIFICATIONS_ADMIN_ACTIONS.name
  }],
  createdDate: [{
    fieldName: 'createdDate',
    label: 'Processed Date',
    componentAccess: _componentAccess.componentAccessLevels.NOTIFICATIONS_TAB.name
  }],
  menu: [{
    type: 'link',
    url: "/dashboard/tab/".concat(_tabConfig.tabIds.notifications, "?notificationTypes={notificationType}"),
    title: "View all of notif type '{notificationTitle}'",
    componentAccess: _componentAccess.componentAccessLevels.NOTIFICATIONS_TAB.name
  }, {
    type: 'link',
    url: "/dashboard/tab/".concat(_tabConfig.tabIds.notifications, "?parentTypes={parentType}"),
    title: "View all of parent type '{parentType}'",
    componentAccess: _componentAccess.componentAccessLevels.NOTIFICATIONS_TAB.name
  }, {
    type: 'link',
    url: "/dashboard/tab/".concat(_tabConfig.tabIds.notifications, "?parentTypes={parentType}&notificationTypes={notificationType}"),
    title: "View all of notif and parent type",
    componentAccess: _componentAccess.componentAccessLevels.NOTIFICATIONS_TAB.name
  }]
}; // prettier-ignore

exports.notificationToolTipConfig = notificationToolTipConfig;
var docToolTipConfig = {
  docType: [{
    fieldName: '_id',
    label: 'ID',
    componentAccess: _componentAccess.componentAccessLevels.DOCS_TAB.name
  }, {
    label: 'Sub Item',
    idField: 'subItemId',
    componentAccess: _componentAccess.componentAccessLevels.DOCS_TAB.name
  }],
  supplierAccountName: [{
    fieldName: 'customerName',
    label: 'Customer',
    idField: 'customerId',
    componentAccess: _componentAccess.componentAccessLevels.DOCS_TAB.name
  }, {
    fieldName: 'inboxName',
    label: 'Inbox',
    idField: 'inboxId',
    componentAccess: _componentAccess.componentAccessLevels.DOCS_TAB.name
  }, {
    fieldName: 'customerSupplierName',
    label: 'Supplier',
    idField: 'supplierId',
    componentAccess: _componentAccess.componentAccessLevels.DOCS_TAB.name
  }],
  siteName: [{
    fieldName: 'customerName',
    label: 'Customer',
    idField: 'customerId',
    componentAccess: _componentAccess.componentAccessLevels.DOCS_TAB.name
  }, {
    fieldName: 'companyName',
    label: 'Company',
    idField: 'companyId',
    componentAccess: _componentAccess.componentAccessLevels.DOCS_TAB.name,
    requiresCustomerId: true
  }],
  docStatus: [{
    fieldName: 'docCaptureStatus',
    label: 'Doc Capture Status',
    componentAccess: _componentAccess.componentAccessLevels.INBOX_ITEMS_ADMIN_ACTIONS.name
  }, {
    fieldName: 'docCaptureResult',
    label: 'Doc Capture Result',
    componentAccess: _componentAccess.componentAccessLevels.INBOX_ITEMS_ADMIN_ACTIONS.name
  }],
  numLines: Object.keys(_docTypes.lineTypes).map(function (docType) {
    return {
      fieldName: 'COUNT_' + docType,
      label: docType,
      componentAccess: _componentAccess.componentAccessLevels.DOCS_TAB.name
    };
  }),
  numOpenNotifications: Object.keys(_notificationAttributeConfig.notificationSeverities).map(function (serverity) {
    return {
      fieldName: 'COUNT_NOTIFICATION_' + serverity,
      label: serverity,
      componentAccess: _componentAccess.componentAccessLevels.DOCS_TAB.name
    };
  }),
  menu: [{
    type: 'link',
    url: "/dashboard/tab/".concat(_tabConfig.tabIds.docs, "?docTypes={docType}"),
    title: "View all of doc types '{docType}'",
    componentAccess: _componentAccess.componentAccessLevels.DOCS_TAB.name
  }]
}; // prettier-ignore

exports.docToolTipConfig = docToolTipConfig;
var subItemToolTipConfig = {
  subItemName: [{
    fieldName: '_id',
    label: 'ID',
    componentAccess: _componentAccess.componentAccessLevels.DOCS_TAB.name
  }],
  numDocs: Object.keys(_docTypes.docTypes).map(function (docType) {
    return {
      fieldName: 'COUNT_' + docType,
      label: docType,
      componentAccess: _componentAccess.componentAccessLevels.INBOX_TAB.name
    };
  }),
  numOpenNotifications: Object.keys(_notificationAttributeConfig.notificationSeverities).map(function (serverity) {
    return {
      fieldName: 'COUNT_NOTIFICATION_' + serverity,
      label: serverity,
      componentAccess: _componentAccess.componentAccessLevels.DOCS_TAB.name
    };
  })
};
exports.subItemToolTipConfig = subItemToolTipConfig;

function getToolTipConfig(componentAccessList) {
  var config = {
    docs: undefined,
    inbox: undefined,
    notifications: undefined,
    subItems: undefined
  };
  config.docs = filterToolTips(componentAccessList, docToolTipConfig);
  config.inbox = filterToolTips(componentAccessList, inboxItemToolTipConfig); // prettier-ignore

  config.notifications = filterToolTips(componentAccessList, notificationToolTipConfig);
  config.subItems = filterToolTips(componentAccessList, subItemToolTipConfig);
  return config;
}

function filterToolTips(componentAccessList, toolTipConfig) {
  var config = {};

  for (var _i = 0, _Object$keys = Object.keys(toolTipConfig); _i < _Object$keys.length; _i++) {
    var fieldConfig = _Object$keys[_i];
    config[fieldConfig] = toolTipConfig[fieldConfig].filter(function (field) {
      return componentAccessList.includes(field.componentAccess);
    });
  }

  return config;
}

function getToolTip(object, toolTipConfig) {
  var columns = ['supplierAccountName', 'siteName'];
  columns.forEach(function (column) {
    var toolTips = toolTipConfig[column];
    if (!toolTips || toolTips.length === 0) return;
    return createToolTipText(object, toolTips);
  });
}

function createToolTipText(obj, toolTips) {
  return toolTips.reduce(function (text, toolTip) {
    var fieldValue = obj[toolTip.fieldName];
    if (!fieldValue) return text;
    if (text) text += '\n'; // if there is already text then add a new line

    text += "".concat(toolTip.label, " ").concat(getToolTipValue(obj, toolTip));
    return text;
  }, '');
}

function getToolTipValue(obj, toolTip) {
  var fieldValue = obj[toolTip.fieldName];
  var id;
  if (toolTip.idField) id = obj[toolTip.idName];

  if (id) {
    return fieldValue; // ************ return the name as a link using the id
  }

  return fieldValue;
}