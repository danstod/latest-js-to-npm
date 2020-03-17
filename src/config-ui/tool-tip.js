import { componentAccessLevels } from './component-access';
import { docTypes, lineTypes } from '../config-shared/doc-types';
import { notificationSeverities } from '../config-shared/notification-attribute-config';
import { tabIds } from './tab-config';

// prettier-ignore
export const inboxItemToolTipConfig = {
  from: [
    { fieldName: '_id', label: 'ID', componentAccess: componentAccessLevels.INBOX_ITEMS_ADMIN_ACTIONS.name },
    { fieldName: 'fromName', label: 'From name', componentAccess: componentAccessLevels.INBOX_TAB.name },
    { fieldName: 'from', label: 'From email', componentAccess: componentAccessLevels.INBOX_TAB.name },
    { fieldName: 'replyTo', label: 'Reply to', componentAccess: componentAccessLevels.INBOX_TAB.name },
    { fieldName: 'to', label: 'To', componentAccess: componentAccessLevels.INBOX_TAB.name },
    { fieldName: 'cc', label: 'CC', componentAccess: componentAccessLevels.INBOX_TAB.name },
    { fieldName: 'bcc', label: 'BCC', componentAccess: componentAccessLevels.INBOX_TAB.name },
    { fieldName: 'originalRecipient', label: 'Original Recipient', componentAccess: componentAccessLevels.INBOX_ITEMS_ADMIN_ACTIONS.name }
  ],
  subject: [
    { fieldName: 'subject', label: 'Subject', componentAccess: componentAccessLevels.INBOX_TAB.name },
    { fieldName: 'emailPreview', label: 'Email Preview', componentAccess: componentAccessLevels.INBOX_TAB.name }
    // { fieldName: 'htmlBody', label: 'Email (html)', componentAccess: componentAccessLevels.INBOX_TAB.name },
    // { fieldName: 'plainBody', label: 'Email (plain)', componentAccess: componentAccessLevels.INBOX_TAB.name }
  ],
  receivedDate: [
    { fieldName: 'receivedDate', label: 'Received Date', componentAccess: componentAccessLevels.INBOX_TAB.name },
    { fieldName: 'createdDate', label: 'Processed Date', componentAccess: componentAccessLevels.INBOX_TAB.name }
  ],
  numDocs: Object.keys(docTypes).map(docType => {
    return { fieldName: 'COUNT_' + docType, label: docType, componentAccess: componentAccessLevels.INBOX_TAB.name };
  }),
  numOpenNotifications: Object.keys(notificationSeverities).map(serverity => {
    return { fieldName: 'COUNT_NOTIFICATION_' + serverity, label: serverity, componentAccess: componentAccessLevels.INBOX_TAB.name };
  }),
  menu: [
    { fieldName: '_id', label: 'ID', componentAccess: componentAccessLevels.INBOX_TAB.name }
  ]
};

// prettier-ignore
export const notificationToolTipConfig = {
  notificationTitle: [
    { fieldName: '_id', label: 'ID', componentAccess: componentAccessLevels.NOTIFICATIONS_ADMIN_ACTIONS.name },
    {
      fieldName: 'adminText',
      label: 'Admin Text',
      componentAccess: componentAccessLevels.NOTIFICATIONS_ADMIN_ACTIONS.name
    },
    { fieldName: 'customerText', label: 'Customer Text', componentAccess: componentAccessLevels.NOTIFICATIONS_TAB.name }
  ],
  parentType: [
    { label: 'Inbox Item', idField: 'inboxItemId', componentAccess: componentAccessLevels.NOTIFICATIONS_TAB.name }, // the label is the link
    { label: 'Sub Item', idField: 'subItemId', componentAccess: componentAccessLevels.NOTIFICATIONS_TAB.name },
    { label: 'Doc', idField: 'docId', componentAccess: componentAccessLevels.NOTIFICATIONS_TAB.name }
    // { label: 'Line', idField: 'lineId', componentAccess: componentAccessLevels.NOTIFICATIONS_TAB.name }
  ],
  open: [
    {
      fieldName: 'openForAdmin',
      label: 'Open for admin',
      componentAccess: componentAccessLevels.NOTIFICATIONS_ADMIN_ACTIONS.name
    },
    {
      fieldName: 'openForCustomer',
      label: 'Open for customer',
      componentAccess: componentAccessLevels.NOTIFICATIONS_ADMIN_ACTIONS.name
    }
  ],
  createdDate: [
    { fieldName: 'createdDate', label: 'Processed Date', componentAccess: componentAccessLevels.NOTIFICATIONS_TAB.name }
  ],
  menu: [
    {
      type: 'link',
      url: `/dashboard/tab/${tabIds.notifications}?notificationTypes={notificationType}`,
      title:  `View all of notif type '{notificationTitle}'`,
      componentAccess: componentAccessLevels.NOTIFICATIONS_TAB.name
    },
    {
      type: 'link',
      url: `/dashboard/tab/${tabIds.notifications}?parentTypes={parentType}`,
      title:  `View all of parent type '{parentType}'`,
      componentAccess: componentAccessLevels.NOTIFICATIONS_TAB.name
    },
    {
      type: 'link',
      url: `/dashboard/tab/${tabIds.notifications}?parentTypes={parentType}&notificationTypes={notificationType}`,
      title:  `View all of notif and parent type`,
      componentAccess: componentAccessLevels.NOTIFICATIONS_TAB.name
    }
  ]
};
// prettier-ignore
export const docToolTipConfig = {
  docType: [
    { fieldName: '_id', label: 'ID', componentAccess: componentAccessLevels.DOCS_TAB.name },
    { label: 'Sub Item', idField: 'subItemId', componentAccess: componentAccessLevels.DOCS_TAB.name }
  ],
  supplierAccountName: [
    { fieldName: 'customerName', label: 'Customer', idField: 'customerId', componentAccess: componentAccessLevels.DOCS_TAB.name },
    { fieldName: 'inboxName', label: 'Inbox', idField: 'inboxId', componentAccess: componentAccessLevels.DOCS_TAB.name },
    { fieldName: 'customerSupplierName', label: 'Supplier', idField: 'supplierId', componentAccess: componentAccessLevels.DOCS_TAB.name }
  ],
  siteName: [
    { fieldName: 'customerName', label: 'Customer', idField: 'customerId', componentAccess: componentAccessLevels.DOCS_TAB.name },
    { fieldName: 'companyName', label: 'Company', idField: 'companyId', componentAccess: componentAccessLevels.DOCS_TAB.name, requiresCustomerId: true }
  ],
  docStatus: [
    { fieldName: 'docCaptureStatus', label: 'Doc Capture Status', componentAccess: componentAccessLevels.INBOX_ITEMS_ADMIN_ACTIONS.name },
    { fieldName: 'docCaptureResult', label: 'Doc Capture Result', componentAccess: componentAccessLevels.INBOX_ITEMS_ADMIN_ACTIONS.name }
  ],
  numLines: Object.keys(lineTypes).map(docType => {
    return { fieldName: 'COUNT_' + docType, label: docType, componentAccess: componentAccessLevels.DOCS_TAB.name };
  }),
  numOpenNotifications: Object.keys(notificationSeverities).map(serverity => {
    return { fieldName: 'COUNT_NOTIFICATION_' + serverity, label: serverity, componentAccess: componentAccessLevels.DOCS_TAB.name };
  }),
  menu: [
    {
      type: 'link',
      url: `/dashboard/tab/${tabIds.docs}?docTypes={docType}`,
      title:  `View all of doc types '{docType}'`,
      componentAccess: componentAccessLevels.DOCS_TAB.name
    }
  ]
};

// prettier-ignore
export const subItemToolTipConfig = {
  subItemName: [
    { fieldName: '_id', label: 'ID', componentAccess: componentAccessLevels.DOCS_TAB.name }
  ],
  numDocs: Object.keys(docTypes).map(docType => {
    return { fieldName: 'COUNT_' + docType, label: docType, componentAccess: componentAccessLevels.INBOX_TAB.name };
  }),
  numOpenNotifications: Object.keys(notificationSeverities).map(serverity => {
    return { fieldName: 'COUNT_NOTIFICATION_' + serverity, label: serverity, componentAccess: componentAccessLevels.DOCS_TAB.name };
  })
};

export function getToolTipConfig(componentAccessList) {
  let config = {
    docs: undefined,
    inbox: undefined,
    notifications: undefined,
    subItems: undefined
  };

  config.docs = filterToolTips(componentAccessList, docToolTipConfig);
  config.inbox = filterToolTips(componentAccessList, inboxItemToolTipConfig);
  // prettier-ignore
  config.notifications = filterToolTips(componentAccessList, notificationToolTipConfig);
  config.subItems = filterToolTips(componentAccessList, subItemToolTipConfig);

  return config;
}

function filterToolTips(componentAccessList, toolTipConfig) {
  let config = {};
  for (let fieldConfig of Object.keys(toolTipConfig)) {
    config[fieldConfig] = toolTipConfig[fieldConfig].filter(field =>
      componentAccessList.includes(field.componentAccess)
    );
  }

  return config;
}

export function getToolTip(object, toolTipConfig) {
  let columns = ['supplierAccountName', 'siteName'];

  columns.forEach(column => {
    let toolTips = toolTipConfig[column];
    if (!toolTips || toolTips.length === 0) return;
    return createToolTipText(object, toolTips);
  });
}

function createToolTipText(obj, toolTips) {
  return toolTips.reduce((text, toolTip) => {
    let fieldValue = obj[toolTip.fieldName];
    if (!fieldValue) return text;
    if (text) text += '\n'; // if there is already text then add a new line
    text += `${toolTip.label} ${getToolTipValue(obj, toolTip)}`;
    return text;
  }, '');
}

function getToolTipValue(obj, toolTip) {
  let fieldValue = obj[toolTip.fieldName];
  let id;
  if (toolTip.idField) id = obj[toolTip.idName];
  if (id) {
    return fieldValue; // ************ return the name as a link using the id
  }
  return fieldValue;
}
