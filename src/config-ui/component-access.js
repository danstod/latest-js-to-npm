import { permissions } from '../config-shared/permissions';

export const INBOX_ITEMS_CUSTOMER_ACTIONS = 'INBOX_ITEMS_CUSTOMER_ACTIONS';
export const INBOX_ITEMS_ADMIN_ACTIONS = 'INBOX_ITEMS_ADMIN_ACTIONS';
export const NOTIFICATIONS_CUSTOMER_ACTIONS = 'NOTIFICATIONS_CUSTOMER_ACTIONS';
export const NOTIFICATIONS_ADMIN_ACTIONS = 'NOTIFICATIONS_ADMIN_ACTIONS';
export const NOTIFICATIONS_TAB = 'NOTIFICATIONS_TAB';

export const componentAccessLevels = {
  INBOX_ITEMS_CUSTOMER_ACTIONS: {
    permission: permissions.INBOX_ITEM_OBJECTS_RUN_CUSTOMER_ACTIONS,
    name: 'INBOX_ITEMS_CUSTOMER_ACTIONS'
  },
  INBOX_ITEMS_ADMIN_ACTIONS: {
    permission: permissions.INBOX_ITEM_OBJECTS_RUN_ADMIN_ACTIONS,
    name: 'INBOX_ITEMS_ADMIN_ACTIONS'
  },
  NOTIFICATIONS_CUSTOMER_ACTIONS: {
    permission: permissions.INBOX_ITEM_OBJECTS_RUN_CUSTOMER_ACTIONS,
    name: 'NOTIFICATIONS_CUSTOMER_ACTIONS'
  },
  NOTIFICATIONS_ADMIN_ACTIONS: {
    permission: permissions.INBOX_ITEM_OBJECTS_RUN_ADMIN_ACTIONS,
    name: 'NOTIFICATIONS_ADMIN_ACTIONS'
  },
  INBOX_TAB: {
    permission: permissions.INBOX_ITEM_OBJECTS_VIEW_CUSTOMER_FIELDS,
    name: 'INBOX_TAB'
  },
  NOTIFICATIONS_TAB: {
    permission: permissions.INBOX_ITEM_OBJECTS_VIEW_CUSTOMER_FIELDS,
    name: 'NOTIFICATIONS_TAB'
  },
  DOCS_TAB: {
    permission: permissions.DOC_OBJECTS_VIEW_CUSTOMER_FIELDS,
    name: 'DOCS_TAB'
  },
  DOCS_APPROVE: {
    permission: permissions.DOC_OBJECTS_APPROVE,
    name: 'DOCS_APPROVE'
  },
  DOCS_DELETE: {
    permission: permissions.DOC_OBJECTS_DELETE,
    name: 'DOCS_DELETE'
  }
};

export const allComponents = Object.keys(componentAccessLevels);
