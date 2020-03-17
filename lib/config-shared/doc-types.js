"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dismissTypeDisplayNames = exports.dismissTypes = exports.docTypeDisplayName = exports.lineTypeForDocType = exports.lineTypes = exports.docProcessingOrder = exports.docTypes = exports.bulkDocActions = void 0;
var bulkDocActions = [];
exports.bulkDocActions = bulkDocActions;
var docTypes = {
  INVOICE: 'INVOICE',
  CREDIT_NOTE: 'CREDIT_NOTE',
  STATEMENT: 'STATEMENT',
  DISMISS: 'DISMISS'
}; // unknown will be -1 if doing indexOf

exports.docTypes = docTypes;
var docProcessingOrder = [docTypes.STATEMENT, // last
docTypes.DISMISS, docTypes.CREDIT_NOTE, docTypes.INVOICE // first
];
exports.docProcessingOrder = docProcessingOrder;
var lineTypes = {
  INVOICE_LINE: 'INVOICE_LINE',
  CREDIT_NOTE_LINE: 'CREDIT_NOTE_LINE',
  STATEMENT_INVOICE: 'STATEMENT_INVOICE',
  STATEMENT_CREDIT_NOTE: 'STATEMENT_CREDIT_NOTE',
  STATEMENT_PAYMENT: 'STATEMENT_PAYMENT',
  NESTED: 'NESTED'
};
exports.lineTypes = lineTypes;
var lineTypeForDocType = {
  INVOICE: 'INVOICE_LINE',
  CREDIT_NOTE: 'CREDIT_NOTE_LINE'
};
exports.lineTypeForDocType = lineTypeForDocType;
var docTypeDisplayName = {
  INVOICE: 'INVOICE',
  CREDIT_NOTE: 'CREDIT NOTE',
  STATEMENT: 'STATEMENT',
  DISMISS: 'DISMISS',
  INVOICE_LINE: 'INVOICE',
  CREDIT_NOTE_LINE: 'CREDIT NOTE',
  STATEMENT_INVOICE: 'INVOICE',
  STATEMENT_CREDIT_NOTE: 'CREDIT NOTE',
  STATEMENT_PAYMENT: 'PAYMENT',
  NESTED: 'NESTED'
}; // export const level1DocTypes = [ // DEPRECATED - use docTypes
//   docTypes.INVOICE,
//   docTypes.CREDIT_NOTE,
//   docTypes.STATEMENT,
//   docTypes.DISMISS
// ];
// export const level2DocTypes = [ // DEPRECATED - use lineTypes
//   lineTypes.INVOICE_LINE,
//   lineTypes.CREDIT_NOTE_LINE,
//   lineTypes.STATEMENT_INVOICE,
//   lineTypes.STATEMENT_CREDIT_NOTE,
//   lineTypes.STATEMENT_PAYMENT,
//   lineTypes.NESTED
// ];

exports.docTypeDisplayName = docTypeDisplayName;
var dismissTypes = {
  ORDER: 'ORDER',
  QUOTE: 'QUOTE',
  PRO_FORMA: 'PRO_FORMA',
  TERMS_AND_CONDITIONS: 'TERMS_AND_CONDITIONS',
  INFORMATION: 'INFORMATION',
  MANUAL_INBOX: 'MANUAL_INBOX',
  DELIVERY_NOTE: 'DELIVERY_NOTE',
  REPORT: 'REPORT',
  DIRECT_DEBIT_NOTIFICATION: 'DIRECT_DEBIT_NOTIFICATION',
  DELIVERY_NOTIFICATION: 'DELIVERY_NOTIFICATION',
  PAYMENT_REMINDER: 'PAYMENT_REMINDER',
  PAYMENT_CONFIRMATION: 'PAYMENT_CONFIRMATION',
  RECEIPT: 'RECEIPT',
  BLANK: 'BLANK'
};
exports.dismissTypes = dismissTypes;
var dismissTypeDisplayNames = {
  ORDER: 'ORDER',
  QUOTE: 'QUOTE',
  PRO_FORMA: 'PRO FORMA',
  TERMS_AND_CONDITIONS: 'TERMS AND CONDITIONS',
  INFORMATION: 'INFORMATION',
  MANUAL_INBOX: 'MANUAL INBOX',
  DELIVERY_NOTE: 'DELIVERY NOTE',
  REPORT: 'REPORT',
  DIRECT_DEBIT_NOTIFICATION: 'DIRECT DEBIT NOTIFICATION',
  DELIVERY_NOTIFICATION: 'DELIVERY NOTIFICATION',
  PAYMENT_REMINDER: 'PAYMENT REMINDER',
  PAYMENT_CONFIRMATION: 'PAYMENT CONFIRMATION',
  RECEIPT: 'RECEIPT',
  BLANK: 'BLANK'
};
exports.dismissTypeDisplayNames = dismissTypeDisplayNames;