"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  transferSchema: () => transferSchema
});
module.exports = __toCommonJS(index_exports);

// src/types/smartinvoice.ts
var import_zod = __toESM(require("zod"), 1);
var isoDateTime = import_zod.default.iso.datetime({ offset: true });
var isoDate = import_zod.default.string().regex(/^\d{4}-\d{2}-\d{2}$/);
var nullableString = import_zod.default.string().nullable().optional();
var nullableNumber = import_zod.default.number().nullable().optional();
var customStringFields = Object.fromEntries(
  Array.from({ length: 20 }, (_, index) => [
    `custom${index + 1}`,
    nullableString
  ])
);
var referenceSchema = import_zod.default.strictObject({
  nr: import_zod.default.string(),
  name: import_zod.default.string().optional()
});
var actorSchema = import_zod.default.strictObject({
  type: import_zod.default.string(),
  id: import_zod.default.union([import_zod.default.string(), import_zod.default.number()]).nullable().optional(),
  name: import_zod.default.string(),
  display_name: import_zod.default.string(),
  delegate_id: import_zod.default.union([import_zod.default.string(), import_zod.default.number()]).nullable().optional()
});
var invoiceLineItemSchema = import_zod.default.strictObject({
  internal_id: import_zod.default.guid(),
  line_no: import_zod.default.number(),
  verified: import_zod.default.boolean(),
  verifier: actorSchema.nullable().optional(),
  verified_by: actorSchema.nullable().optional(),
  verified_at: isoDateTime.nullable().optional(),
  gl_account: import_zod.default.strictObject({ nr: import_zod.default.string() }),
  cost_center: import_zod.default.strictObject({ nr: import_zod.default.string() }),
  cost_unit: import_zod.default.strictObject({ nr: import_zod.default.string() }),
  net_amount: import_zod.default.number(),
  gross_amount: import_zod.default.number(),
  pay_amount: import_zod.default.number().nullable(),
  vat_amount: import_zod.default.number(),
  tax_code: import_zod.default.strictObject({
    id: import_zod.default.string(),
    name: import_zod.default.string().optional(),
    title: import_zod.default.string().optional(),
    percentage: import_zod.default.number()
  }),
  order_number: nullableString,
  order_line: nullableNumber,
  order_id: nullableString,
  order_line_id: nullableString,
  quantity: import_zod.default.strictObject({ invoiced: nullableNumber }),
  unit: nullableString,
  unit_price: nullableNumber,
  description: nullableString,
  item_number: nullableString,
  discount_absolute: nullableNumber,
  discount_per_unit: nullableNumber,
  discount_percent: nullableNumber,
  discount2_percent: nullableNumber,
  discount3_percent: nullableNumber,
  discount4_percent: nullableNumber,
  discount5_percent: nullableNumber,
  type: import_zod.default.string(),
  surcharged_line_item_id: import_zod.default.string().nullable(),
  header_surcharge_allocations: import_zod.default.array(import_zod.default.unknown()),
  verified_as_delegate_of: actorSchema.nullable().optional(),
  base_net_amount: nullableNumber,
  net_amount_surcharge: nullableNumber,
  base_unit_price: nullableNumber,
  unit_price_surcharge: nullableNumber,
  price_unit: nullableNumber,
  delivery_slip_number: nullableString,
  goods_receipt_id: nullableString,
  goods_receipt_number: nullableString,
  goods_receipt_line_item_id: nullableString,
  goods_receipt_line_item_number: nullableString,
  goods_receipt_creation_date: isoDateTime.nullable().optional(),
  goods_receipt_line_item_receipt_date: isoDateTime.nullable().optional(),
  goods_receipt_delivery_slip_number: nullableString,
  ...customStringFields,
  procurement_category: import_zod.default.strictObject({}),
  surcharges: import_zod.default.strictObject({}),
  verifications: import_zod.default.strictObject({})
});
var workflowStepSchema = import_zod.default.strictObject({
  id: import_zod.default.uuidv4(),
  title: import_zod.default.string(),
  localized_title: import_zod.default.string().optional(),
  buttons: import_zod.default.array(
    import_zod.default.strictObject({
      id: import_zod.default.uuidv4(),
      title: import_zod.default.string(),
      localized_title: import_zod.default.string(),
      action: import_zod.default.string()
    })
  ),
  bulk_approval: import_zod.default.unknown().nullable().optional(),
  type: import_zod.default.string().nullable().optional()
});
var voucherSchema = import_zod.default.strictObject({
  doc_id: import_zod.default.string(),
  company: referenceSchema,
  vendor: referenceSchema,
  vendor_bank_account: import_zod.default.strictObject({
    id: nullableString,
    iban: nullableString
  }),
  currency: import_zod.default.strictObject({
    id: import_zod.default.string(),
    name: import_zod.default.string(),
    code: import_zod.default.string()
  }),
  net_amount: import_zod.default.number(),
  gross_amount: import_zod.default.number(),
  pay_amount: import_zod.default.number().nullable(),
  vat_amount: import_zod.default.number(),
  document_date: isoDateTime,
  internal_number: nullableString,
  external_number: import_zod.default.string(),
  payment_date: isoDateTime.nullable().optional(),
  date_of_supply: isoDateTime.nullable().optional(),
  financially_correct: import_zod.default.boolean(),
  document_type: import_zod.default.strictObject({
    id: import_zod.default.string(),
    name: import_zod.default.string(),
    credit_note: import_zod.default.boolean()
  }),
  payment_terms_type: import_zod.default.string(),
  payment_terms: import_zod.default.strictObject({
    id: import_zod.default.string(),
    name: nullableString,
    net_days: nullableNumber,
    cashback_days1: nullableNumber,
    cashback_percentage1: nullableNumber
  }),
  manual_payment_terms: import_zod.default.strictObject({
    net_due_date: isoDateTime.nullable().optional(),
    cashback_due_date1: isoDateTime.nullable().optional(),
    cashback_percentage1: nullableNumber
  }),
  due_dates: import_zod.default.strictObject({
    net_due_date: isoDateTime.nullable().optional(),
    cashback_due_date1: isoDateTime.nullable().optional(),
    cashback_amount1: nullableNumber
  }),
  posting_period: isoDate.nullable().optional(),
  posting_date: isoDateTime.nullable().optional(),
  posting_text: import_zod.default.string(),
  barcode: nullableString,
  ...customStringFields,
  line_items: import_zod.default.record(import_zod.default.guid(), invoiceLineItemSchema),
  responsible: actorSchema.nullable().optional(),
  regional: import_zod.default.strictObject({ ch: import_zod.default.strictObject({}) }),
  po_numbers: import_zod.default.array(import_zod.default.string())
});
var transferSchema = import_zod.default.strictObject({
  event_type: import_zod.default.enum(["integration.export"]),
  _links: import_zod.default.strictObject({
    dmsobject: import_zod.default.strictObject({ href: import_zod.default.url() }),
    report_results_async: import_zod.default.strictObject({ href: import_zod.default.url() })
  }),
  workflow: import_zod.default.strictObject({
    voucher: voucherSchema,
    step: workflowStepSchema,
    id: import_zod.default.union([import_zod.default.string(), import_zod.default.number()]).optional(),
    clearing_mode: import_zod.default.string().nullable().optional(),
    status: import_zod.default.string().optional(),
    received_at: isoDateTime.optional(),
    locked: import_zod.default.boolean().optional(),
    assignees: import_zod.default.array(actorSchema).optional()
  }),
  connection: import_zod.default.strictObject({
    from_step: workflowStepSchema,
    to_step: workflowStepSchema,
    end_mode: import_zod.default.string().nullable(),
    next_assignees: import_zod.default.array(actorSchema).optional()
  }),
  id: import_zod.default.union([import_zod.default.string(), import_zod.default.number()]).optional(),
  voucher: voucherSchema.optional(),
  step: workflowStepSchema.optional(),
  clearing_mode: import_zod.default.string().nullable().optional(),
  status: import_zod.default.string().optional(),
  received_at: isoDateTime.optional(),
  locked: import_zod.default.boolean().optional(),
  assignees: import_zod.default.array(actorSchema).optional(),
  tenant: import_zod.default.strictObject({
    id: import_zod.default.union([import_zod.default.string(), import_zod.default.number()]),
    base_uri: import_zod.default.url()
  }).optional(),
  transfer_action: import_zod.default.string().optional()
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  transferSchema
});
