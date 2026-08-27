// src/types.ts
import z from "zod";
var isoDateTime = z.iso.datetime({ offset: true });
var isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
var nullableString = z.string().nullable().optional();
var nullableNumber = z.number().nullable().optional();
var customStringFields = Object.fromEntries(
  Array.from({ length: 20 }, (_, index) => [
    `custom${index + 1}`,
    nullableString
  ])
);
var referenceSchema = z.strictObject({
  nr: z.string(),
  name: z.string().optional()
});
var actorSchema = z.strictObject({
  type: z.string(),
  id: z.union([z.string(), z.number()]).nullable().optional(),
  name: z.string(),
  display_name: z.string(),
  delegate_id: z.union([z.string(), z.number()]).nullable().optional()
});
var invoiceLineItemSchema = z.strictObject({
  internal_id: z.guid(),
  line_no: z.number(),
  verified: z.boolean(),
  verifier: actorSchema.nullable().optional(),
  verified_by: actorSchema.nullable().optional(),
  verified_at: isoDateTime.nullable().optional(),
  gl_account: z.strictObject({ nr: z.string() }),
  cost_center: z.strictObject({ nr: z.string() }),
  cost_unit: z.strictObject({ nr: z.string() }),
  net_amount: z.number(),
  gross_amount: z.number(),
  pay_amount: z.number().nullable(),
  vat_amount: z.number(),
  tax_code: z.strictObject({
    id: z.string(),
    name: z.string().optional(),
    title: z.string().optional(),
    percentage: z.number()
  }),
  order_number: nullableString,
  order_line: nullableNumber,
  order_id: nullableString,
  order_line_id: nullableString,
  quantity: z.strictObject({ invoiced: nullableNumber }),
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
  type: z.string(),
  surcharged_line_item_id: z.string().nullable(),
  header_surcharge_allocations: z.array(z.unknown()),
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
  procurement_category: z.strictObject({}),
  surcharges: z.strictObject({}),
  verifications: z.strictObject({})
});
var workflowStepSchema = z.strictObject({
  id: z.uuidv4(),
  title: z.string(),
  localized_title: z.string().optional(),
  buttons: z.array(
    z.strictObject({
      id: z.uuidv4(),
      title: z.string(),
      localized_title: z.string(),
      action: z.string()
    })
  ),
  bulk_approval: z.unknown().nullable().optional(),
  type: z.string().nullable().optional()
});
var voucherSchema = z.strictObject({
  doc_id: z.string(),
  company: referenceSchema,
  vendor: referenceSchema,
  vendor_bank_account: z.strictObject({
    id: nullableString,
    iban: nullableString
  }),
  currency: z.strictObject({
    id: z.string(),
    name: z.string(),
    code: z.string()
  }),
  net_amount: z.number(),
  gross_amount: z.number(),
  pay_amount: z.number().nullable(),
  vat_amount: z.number(),
  document_date: isoDateTime,
  internal_number: nullableString,
  external_number: z.string(),
  payment_date: isoDateTime.nullable().optional(),
  date_of_supply: isoDateTime.nullable().optional(),
  financially_correct: z.boolean(),
  document_type: z.strictObject({
    id: z.string(),
    name: z.string(),
    credit_note: z.boolean()
  }),
  payment_terms_type: z.string(),
  payment_terms: z.strictObject({
    id: z.string(),
    name: nullableString,
    net_days: nullableNumber,
    cashback_days1: nullableNumber,
    cashback_percentage1: nullableNumber
  }),
  manual_payment_terms: z.strictObject({
    net_due_date: isoDateTime.nullable().optional(),
    cashback_due_date1: isoDateTime.nullable().optional(),
    cashback_percentage1: nullableNumber
  }),
  due_dates: z.strictObject({
    net_due_date: isoDateTime.nullable().optional(),
    cashback_due_date1: isoDateTime.nullable().optional(),
    cashback_amount1: nullableNumber
  }),
  posting_period: isoDate.nullable().optional(),
  posting_date: isoDateTime.nullable().optional(),
  posting_text: z.string(),
  barcode: nullableString,
  ...customStringFields,
  line_items: z.record(z.guid(), invoiceLineItemSchema),
  responsible: actorSchema.nullable().optional(),
  regional: z.strictObject({ ch: z.strictObject({}) }),
  po_numbers: z.array(z.string())
});
var transferSchema = z.strictObject({
  event_type: z.enum(["integration.export"]),
  _links: z.strictObject({
    dmsobject: z.strictObject({ href: z.url() }),
    report_results_async: z.strictObject({ href: z.url() })
  }),
  workflow: z.strictObject({
    voucher: voucherSchema,
    step: workflowStepSchema,
    id: z.union([z.string(), z.number()]).optional(),
    clearing_mode: z.string().nullable().optional(),
    status: z.string().optional(),
    received_at: isoDateTime.optional(),
    locked: z.boolean().optional(),
    assignees: z.array(actorSchema).optional()
  }),
  connection: z.strictObject({
    from_step: workflowStepSchema,
    to_step: workflowStepSchema,
    end_mode: z.string().nullable(),
    next_assignees: z.array(actorSchema).optional()
  }),
  id: z.union([z.string(), z.number()]).optional(),
  voucher: voucherSchema.optional(),
  step: workflowStepSchema.optional(),
  clearing_mode: z.string().nullable().optional(),
  status: z.string().optional(),
  received_at: isoDateTime.optional(),
  locked: z.boolean().optional(),
  assignees: z.array(actorSchema).optional(),
  tenant: z.strictObject({
    id: z.union([z.string(), z.number()]),
    base_uri: z.url()
  }).optional(),
  transfer_action: z.string().optional()
});

// src/util.ts
var parseTransfer = (json) => {
  return transferSchema.parse(json);
};
export {
  parseTransfer,
  transferSchema
};
