import { permissions } from './permissions';

export const parentSupplierTypes = {
  ACCOUNTING: 'ACCOUNTING',
  COMPANY_GROUP: 'COMPANY_GROUP',
  PAYMENTS: 'PAYMENTS',
  DELIVERIES: 'DELIVERIES',
  FINANCE: 'FINANCE'
};

export const supplierSetupActions = {
  ADD_SUPPLIER_TO_CUSTOMER: 'ADD_SUPPLIER_TO_CUSTOMER',
  ADD_SUPPLIER_ACCOUNTS: 'ADD_SUPPLIER_ACCOUNTS',
  ADD_NEW_GLOBAL_SUPPLIER: 'ADD_NEW_GLOBAL_SUPPLIER',
  ACTIVATE_DRAFT_GLOBAL_SUPPLIER: 'ACTIVATE_DRAFT_GLOBAL_SUPPLIER'
};

export const supplierSetupActionConfig = {
  ADD_SUPPLIER_TO_CUSTOMER: {
    displayName: 'Add a supplier to the customer',
    permission: permissions.CUSTOMER_OBJECTS_EDIT_CUSTOMER_FIELDS
  },
  ADD_SUPPLIER_ACCOUNTS: {
    displayName: 'Add supplier accounts',
    permission: permissions.CUSTOMER_OBJECTS_EDIT_CUSTOMER_FIELDS
  },
  ADD_NEW_GLOBAL_SUPPLIER: {
    displayName: 'Add a new global supplier',
    permission: permissions.CUSTOMER_OBJECTS_EDIT_CUSTOMER_FIELDS
  },
  ACTIVATE_DRAFT_GLOBAL_SUPPLIER: {
    displayName: 'Activate a draft global supplier',
    permission: permissions.GLOBAL_SUPPLIER_EDIT_ADMIN_FIELDS
  }
};

export const newSupplierTargetObjects = {
  SUPPLIER: 'SUPPLIER',
  REGEX_REPLACEMENTS: 'REGEX_REPLACEMENTS',
  IDENTIFIER: 'IDENTIFIER'
};

/**
 * list of fields that are not transferred when merging parent suppliers
 */
export const fieldsNotMerged = [
  'parentSuppliers',
  'parentSupplierIds',
  'parentSupplierType',
  'parentSupplierIdentifiers',
  'isParentSupplier',
  'supplierName',
  'supplierLegalName',
  'supplierOtherNames'
];

export const capturedItemTypes = {
  PATTERN: 'PATTERN',
  FIELD: 'FIELD'
};

export const fieldIndexSourceStr = 'SOURCE_STR';

export const regions = [
  { regionCode: 'AT', regionName: 'Austria' },
  { regionCode: 'AU', regionName: 'Australia' },
  { regionCode: 'BE', regionName: 'Belgium' },
  { regionCode: 'BR', regionName: 'Brazil' },
  { regionCode: 'CA', regionName: 'Canada' },
  { regionCode: 'CH', regionName: 'Switzerland' },
  { regionCode: 'CN', regionName: 'China' },
  { regionCode: 'CO', regionName: 'Colombia' },
  { regionCode: 'CY', regionName: 'Cyprus' },
  { regionCode: 'DE', regionName: 'Germany' },
  { regionCode: 'DK', regionName: 'Denmark' },
  { regionCode: 'EE', regionName: 'Estonia' },
  { regionCode: 'ES', regionName: 'Spain' },
  { regionCode: 'FI', regionName: 'Finland' },
  { regionCode: 'FR', regionName: 'France' },
  { regionCode: 'GB', regionName: 'United Kingdom' },
  { regionCode: 'GG', regionName: 'Guernsey' },
  { regionCode: 'GI', regionName: 'Gibraltar' },
  { regionCode: 'GR', regionName: 'Greece' },
  { regionCode: 'HK', regionName: 'Hong' },
  { regionCode: 'HR', regionName: 'Croatia' },
  { regionCode: 'HU', regionName: 'Hungary' },
  { regionCode: 'ID', regionName: 'Indonesia' },
  { regionCode: 'IE', regionName: 'Ireland' },
  { regionCode: 'IL', regionName: 'Israel' },
  { regionCode: 'IM', regionName: 'Isle of Man' },
  { regionCode: 'IN', regionName: 'India' },
  { regionCode: 'IS', regionName: 'Iceland' },
  { regionCode: 'IT', regionName: 'Italy' },
  { regionCode: 'JE', regionName: 'Jersey' },
  { regionCode: 'JO', regionName: 'Jordan' },
  { regionCode: 'JP', regionName: 'Japan' },
  { regionCode: 'KR', regionName: 'South Korea' },
  { regionCode: 'LT', regionName: 'Lithuania' },
  { regionCode: 'LU', regionName: 'Luxembourg' },
  { regionCode: 'LV', regionName: 'Latvia' },
  { regionCode: 'MC', regionName: 'Monaco' },
  { regionCode: 'MY', regionName: 'Malaysia' },
  { regionCode: 'NL', regionName: 'Netherlands' },
  { regionCode: 'NO', regionName: 'Norway' },
  { regionCode: 'NZ', regionName: 'New Zealand' },
  { regionCode: 'PK', regionName: 'Pakistan' },
  { regionCode: 'PL', regionName: 'Poland' },
  { regionCode: 'PT', regionName: 'Portugal' },
  { regionCode: 'SE', regionName: 'Sweden' },
  { regionCode: 'SG', regionName: 'Singapore' },
  { regionCode: 'SI', regionName: 'Slovenia' },
  { regionCode: 'TH', regionName: 'Thailand' },
  { regionCode: 'TR', regionName: 'Turkey' },
  { regionCode: 'TW', regionName: 'Taiwan' },
  { regionCode: 'UA', regionName: 'Ukraine' },
  { regionCode: 'US', regionName: 'United States' },
  { regionCode: 'ZA', regionName: 'South Africa' }
];
