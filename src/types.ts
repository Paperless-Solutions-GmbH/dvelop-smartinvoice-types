import z from "zod";

const isoDateTime = z.iso.datetime({ offset: true });
const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const nullableString = z.string().nullable().optional();
const nullableNumber = z.number().nullable().optional();
const linkRelationSchema = z.strictObject({ href: z.url() });

const referenceSchema = z
  .strictObject({
    nr: z.string().meta({
      description: "The ID or number of the company or vendor.",
    }),
    name: z.string().optional().meta({
      description: "The name of the company or vendor.",
    }),
  })
  .meta({
    id: "Reference",
    description:
      "Reference to a company or vendor, containing the number and optional name.",
  });
const actorSchema = z
  .strictObject({
    type: z.string().meta({
      description: "The type of the actor, for example a user or related role.",
    }),
    id: z.union([z.string(), z.number()]).nullable().optional().meta({
      description: "The actor identifier, if available.",
    }),
    name: z.string().meta({
      description: "The technical or login name of the actor.",
    }),
    display_name: z.string().meta({
      description: "The display name shown to users.",
    }),
    delegate_id: z.union([z.string(), z.number()]).nullable().optional().meta({
      description: "The delegated actor identifier, if applicable.",
    }),
  })
  .meta({
    id: "Actor",
    description:
      "User or workflow actor associated with verification, assignment, or delegation.",
  });
const invoiceLineItemSchema = z
  .strictObject({
    internal_id: z.guid().meta({
      description: "The unique ID of the document line item.",
    }),
    line_no: z.number().meta({
      description: "The line number of the document line item.",
    }),
    verified: z.boolean().meta({
      description:
        "Indicates whether the line item is marked as factually correct.",
    }),
    verifier: actorSchema.nullable().optional().meta({
      description:
        "Indicates the person who is authorized to mark this line item as factually correct.",
    }),
    verified_by: actorSchema.nullable().optional().meta({
      description:
        "Indicates the person who marked this line item as factually correct.",
    }),
    verified_at: isoDateTime.nullable().optional().meta({
      description:
        "The time at which this line item was marked as factually correct in ISO 8601 format.",
    }),
    gl_account: z.strictObject({ nr: z.string() }).meta({
      description: "The G/L account of the document line item.",
    }),
    cost_center: z.strictObject({ nr: z.string() }).meta({
      description: "The cost center of the document line item.",
    }),
    cost_unit: z.strictObject({ nr: z.string() }).meta({
      description: "The cost unit of the document line item.",
    }),
    net_amount: z.number().meta({
      description: "The net amount of the document line item.",
    }),
    gross_amount: z.number().meta({
      description: "The gross amount of the document line item.",
    }),
    pay_amount: z.number().nullable().meta({
      description: "The payment amount of the document line item.",
    }),
    vat_amount: z.number().meta({
      description: "The tax amount for the document line item.",
    }),
    tax_code: z.strictObject({
      id: z.string().meta({ description: "The ID of the tax code." }),
      name: z.string().optional().meta({
        description: "The name of the tax code.",
      }),
      title: z.string().optional().meta({
        description: "The title of the tax code.",
      }),
      percentage: z.number().meta({
        description: "The tax rate percentage.",
      }),
    }).meta({
      description: "The tax code of the document line item.",
    }),
    order_number: nullableString.meta({
      description:
        "The number of the purchase order belonging to this document line item.",
    }),
    order_line: nullableNumber.meta({
      description:
        "The number of the purchase order line item belonging to this document line item.",
    }),
    order_id: nullableString.meta({
      description:
        "The ID of the purchase order belonging to this document line item.",
    }),
    order_line_id: nullableString.meta({
      description:
        "The ID of the purchase order line item belonging to this document line item.",
    }),
    quantity: z.strictObject({ invoiced: nullableNumber }).meta({
      description: "The quantity of the document line item.",
    }),
    unit: nullableString.meta({
      description: "The unit of measure of the document line item.",
    }),
    unit_price: nullableNumber.meta({
      description: "The unit price of the document line item.",
    }),
    description: nullableString.meta({
      description: "The description of the document line item.",
    }),
    item_number: nullableString.meta({
      description: "The item number of the document line item.",
    }),
    discount_absolute: nullableNumber.meta({
      description: "Absolute discount on the net amount of the line item.",
    }),
    discount_per_unit: nullableNumber.meta({
      description: "Absolute discount on the unit price of the line item.",
    }),
    discount_percent: nullableNumber.meta({
      description:
        "First percentage discount on the net amount of the line item.",
    }),
    discount2_percent: nullableNumber.meta({
      description:
        "Second percentage discount on the net amount of the line item.",
    }),
    discount3_percent: nullableNumber.meta({
      description:
        "Third percentage discount on the net amount of the line item.",
    }),
    discount4_percent: nullableNumber.meta({
      description:
        "Fourth percentage discount on the net amount of the line item.",
    }),
    discount5_percent: nullableNumber.meta({
      description:
        "Fifth percentage discount on the net amount of the line item.",
    }),
    type: z.string().meta({
      description:
        "The type of the document line item: normal, line_item_surcharge, or header_surcharge.",
    }),
    surcharged_line_item_id: z.string().nullable().meta({
      description:
        "Reference to the internal ID of the document line item to which this surcharge line item belongs.",
    }),
    header_surcharge_allocations: z.array(z.unknown()).meta({
      description:
        "The distribution of a header surcharge across document line items.",
    }),
    verified_as_delegate_of: actorSchema.nullable().optional().meta({
      description:
        "Indicates on whose behalf the document was signed in a delegated capacity.",
    }),
    base_net_amount: nullableNumber.meta({
      description:
        "Not relevant; relates to obsolete surcharge features no longer being developed.",
    }),
    net_amount_surcharge: nullableNumber.meta({
      description:
        "Not relevant; relates to obsolete surcharge features no longer being developed.",
    }),
    base_unit_price: nullableNumber.meta({
      description:
        "Not relevant; relates to obsolete surcharge features no longer being developed.",
    }),
    unit_price_surcharge: nullableNumber.meta({
      description:
        "Not relevant; relates to obsolete surcharge features no longer being developed.",
    }),
    price_unit: nullableNumber.meta({
      description:
        "The price unit relevant if supplier and company do not work with the same price unit.",
    }),
    delivery_slip_number: nullableString.meta({
      description: "The delivery slip number of the document line item.",
    }),
    goods_receipt_id: nullableString.meta({
      description:
        "The ID of the goods receipt belonging to this document line item.",
    }),
    goods_receipt_number: nullableString.meta({
      description:
        "The number of the goods receipt belonging to this document line item.",
    }),
    goods_receipt_line_item_id: nullableString.meta({
      description:
        "The ID of the goods receipt line item belonging to this document line item.",
    }),
    goods_receipt_line_item_number: nullableString.meta({
      description:
        "The number of the goods receipt line item belonging to this document line item.",
    }),
    goods_receipt_creation_date: isoDateTime.nullable().optional().meta({
      description: "The creation date of the goods receipt.",
    }),
    goods_receipt_line_item_receipt_date: isoDateTime.nullable().optional()
      .meta({
        description: "The receipt date of the goods receipt line item.",
      }),
    goods_receipt_delivery_slip_number: nullableString.meta({
      description:
        "The delivery slip number associated with the goods receipt.",
    }),
    ...Object.fromEntries(
      Array.from({ length: 20 }, (_, index) => [
        `custom${index + 1}`,
        nullableString.meta({
          description: `Custom field ${index + 1} at the line item level.`,
        }),
      ]),
    ),
    procurement_category: z.strictObject({}).meta({
      description: "The procurement category of the document line item.",
    }),
    surcharges: z.strictObject({}).meta({
      description:
        "Not relevant; relates to obsolete surcharge features no longer being developed.",
    }),
    verifications: z.strictObject({}).meta({
      description:
        "Not relevant; relates to obsolete verification features no longer being developed.",
    }),
  })
  .meta({
    id: "InvoiceLineItem",
    description:
      "Single document line item from a d.velop smart invoice transfer payload.",
  });
const workflowStepSchema = z
  .strictObject({
    id: z.uuidv4().meta({ description: "The workflow step identifier." }),
    title: z.string().meta({ description: "The title of the workflow step." }),
    localized_title: z.string().optional().meta({
      description: "The localized title of the workflow step.",
    }),
    buttons: z.array(
      z.strictObject({
        id: z.uuidv4().meta({ description: "The button identifier." }),
        title: z.string().meta({ description: "The button title." }),
        localized_title: z.string().meta({
          description: "The localized button title.",
        }),
        action: z.string().meta({
          description: "The action triggered by the button.",
        }),
      }),
    ).meta({
      description: "The actions available in the current workflow step.",
    }),
    bulk_approval: z.unknown().nullable().optional().meta({
      description: "Bulk approval data for the workflow step, if present.",
    }),
    type: z.string().nullable().optional().meta({
      description: "The workflow step type, if available.",
    }),
  })
  .meta({
    id: "WorkflowStep",
    description: "Current workflow step in the document approval process.",
  });
const voucherSchema = z
  .strictObject({
    doc_id: z.string().meta({
      description:
        "The ID of the document in the underlying document management system.",
    }),
    company: referenceSchema.meta({
      description: "The company (invoice recipient) for this document.",
    }),
    vendor: referenceSchema.meta({
      description: "The vendor (supplier or invoice issuer) for this document.",
    }),
    vendor_bank_account: z.strictObject({
      id: nullableString.meta({
        description: "The ID of the vendor bank account from the master data.",
      }),
      iban: nullableString.meta({
        description: "The IBAN of the vendor bank account.",
      }),
    }).meta({
      description: "The vendor bank account for the document.",
    }),
    currency: z.strictObject({
      id: z.string().meta({
        description: "The ID of the currency from master data.",
      }),
      name: z.string().meta({ description: "The name of the currency." }),
      code: z.string().meta({
        description: "The ISO 4217 currency code.",
      }),
    }).meta({
      description: "The currency in which the invoice was issued.",
    }),
    net_amount: z.number().meta({
      description: "The total net amount of the document.",
    }),
    gross_amount: z.number().meta({
      description: "The total gross amount of the document.",
    }),
    pay_amount: z.number().nullable().meta({
      description: "The total payment amount of the document.",
    }),
    vat_amount: z.number().meta({
      description: "The total tax amount of the document.",
    }),
    document_date: isoDateTime.meta({
      description: "The document or invoice date in ISO 8601 format.",
    }),
    internal_number: nullableString.meta({
      description: "The internal document number.",
    }),
    external_number: z.string().meta({
      description:
        "The external document number, usually the vendor invoice number.",
    }),
    payment_date: isoDateTime.nullable().optional().meta({
      description: "The payment date in ISO 8601 format.",
    }),
    date_of_supply: isoDateTime.nullable().optional().meta({
      description: "The date of supply in ISO 8601 format.",
    }),
    financially_correct: z.boolean().meta({
      description:
        "Indicates whether the invoice is considered financially correct.",
    }),
    document_type: z.strictObject({
      id: z.string().meta({
        description: "The ID of the document type from master data.",
      }),
      name: z.string().meta({ description: "The name of the document type." }),
      credit_note: z.boolean().meta({
        description: "Whether the document type is a credit note.",
      }),
    }).meta({
      description: "The document type metadata.",
    }),
    payment_terms_type: z.string().meta({
      description:
        "Defines whether the workflow uses document payment terms or manually entered payment terms. Possible values: manual or voucher.",
    }),
    payment_terms: z.strictObject({
      id: z.string().meta({
        description: "The ID of the payment term from master data.",
      }),
      name: nullableString.meta({
        description: "The name of the payment term from master data.",
      }),
      net_days: nullableNumber.meta({
        description: "The net payment period in days.",
      }),
      cashback_days1: nullableNumber.meta({
        description: "The cash discount period in days.",
      }),
      cashback_percentage1: nullableNumber.meta({
        description: "The cash discount percentage.",
      }),
    }).meta({
      description: "The payment terms for the invoice.",
    }),
    manual_payment_terms: z.strictObject({
      net_due_date: isoDateTime.nullable().optional().meta({
        description: "The manually entered net due date.",
      }),
      cashback_due_date1: isoDateTime.nullable().optional().meta({
        description: "The manually entered cash discount due date.",
      }),
      cashback_percentage1: nullableNumber.meta({
        description:
          "The manually entered cash discount percentage as a decimal value.",
      }),
    }).meta({
      description: "The manually entered payment terms for the workflow.",
    }),
    due_dates: z.strictObject({
      net_due_date: isoDateTime.nullable().optional().meta({
        description: "The net due date.",
      }),
      cashback_due_date1: isoDateTime.nullable().optional().meta({
        description: "The cash discount due date.",
      }),
      cashback_amount1: nullableNumber.meta({
        description:
          "The calculated cash discount amount (gross) as a decimal value.",
      }),
    }).meta({
      description:
        "The net and cash discount due dates and cash discount amount.",
    }),
    posting_period: isoDate.nullable().optional().meta({
      description: "The posting period for the invoice.",
    }),
    posting_date: isoDateTime.nullable().optional().meta({
      description: "The posting date for the invoice in ISO 8601 format.",
    }),
    posting_text: z.string().meta({
      description: "The posting text for the invoice.",
    }),
    barcode: nullableString.meta({
      description: "The barcode for the invoice.",
    }),
    ...Object.fromEntries(
      Array.from({ length: 20 }, (_, index) => [
        `custom${index + 1}`,
        nullableString.meta({
          description: `Custom field ${index + 1} at the header level.`,
        }),
      ]),
    ),
    line_items: z.record(z.guid(), invoiceLineItemSchema).meta({
      description:
        "A map of document line items keyed by their internal document ID.",
    }),
    responsible: actorSchema.nullable().optional().meta({
      description: "The person primarily responsible for the invoice.",
    }),
    regional: z.strictObject({ ch: z.strictObject({}) }).meta({
      description: "Regional fields for customers from Switzerland.",
    }),
    po_numbers: z.array(z.string()).meta({
      description: "A list of purchase orders related to the invoice.",
    }),
  })
  .meta({
    id: "Voucher",
    description:
      "Document header data of the transferred invoice, including totals, payment terms, and line items.",
  });
export const transferSchema = z
  .strictObject({
    event_type: z.enum(["integration.export"]).meta({
      description:
        "The type of the transferred event. At present, only integration.export is used.",
    }),
    _links: z.strictObject({
      dmsobject: linkRelationSchema.meta({
        description:
          "Link to the invoice in the underlying document management system.",
      }),
      report_results_async: linkRelationSchema.meta({
        description:
          "The URL for reporting the processing result after asynchronous processing.",
      }),
    }).meta({
      description: "Links to related resources.",
    }),
    workflow: z.strictObject({
      voucher: voucherSchema.meta({
        description: "The document data for the workflow.",
      }),
      step: workflowStepSchema.meta({
        description: "The current step in the workflow.",
      }),
      id: z.union([z.string(), z.number()]).optional().meta({
        description: "The workflow ID.",
      }),
      clearing_mode: z.string().nullable().optional().meta({
        description: "Indicates whether the workflow is in clearing mode.",
      }),
      status: z.string().optional().meta({
        description: "The status of the workflow for transfers.",
      }),
      received_at: isoDateTime.optional().meta({
        description: "The date on which the current step was delivered.",
      }),
      locked: z.boolean().optional().meta({
        description: "Indicates whether the workflow is currently locked.",
      }),
      assignees: z.array(actorSchema).optional().meta({
        description:
          "List of recipients to whom the current step was delivered.",
      }),
    }).meta({
      description:
        "The workflow object. This object contains document data and status information about the workflow.",
    }),
    connection: z.strictObject({
      from_step: workflowStepSchema.meta({
        description: "The starting step in the connection.",
      }),
      to_step: workflowStepSchema.meta({
        description: "The target step in the connection.",
      }),
      end_mode: z.string().nullable().meta({
        description:
          "If the workflow ends with this connection, this contains how it ends. Possible values: finished, aborted.",
      }),
      next_assignees: z.array(actorSchema).optional().meta({
        description: "The next assignees for the following workflow step.",
      }),
    }).meta({
      description:
        "Information about the current step connection in the workflow. Always filled for integration.export events.",
    }),
    id: z.union([z.string(), z.number()]).optional().meta({
      description: "The transfer identifier, if available.",
    }),
    voucher: voucherSchema.optional().meta({
      description: "The document data for the transfer.",
    }),
    step: workflowStepSchema.optional().meta({
      description: "The current step in the workflow.",
    }),
    clearing_mode: z.string().nullable().optional().meta({
      description: "Indicates whether the workflow is in clearing mode.",
    }),
    status: z.string().optional().meta({
      description: "Status of the workflow for transfers.",
    }),
    received_at: isoDateTime.optional().meta({
      description: "The date on which the current step was delivered.",
    }),
    locked: z.boolean().optional().meta({
      description: "Indicates whether the workflow is currently locked.",
    }),
    assignees: z.array(actorSchema).optional().meta({
      description: "List of recipients to whom the current step was delivered.",
    }),
    tenant: z
      .strictObject({
        id: z.union([z.string(), z.number()]).meta({
          description: "The ID of the tenant.",
        }),
        base_uri: z.url().meta({
          description: "The base URI of the tenant.",
        }),
      })
      .optional()
      .meta({
        description: "The tenant from which the transfer originates.",
      }),
    transfer_action: z.string().optional().meta({
      description:
        "The action intended with the transfer. Possible values: validate, book, or default no special action.",
    }),
  })
  .meta({
    id: "Transfer",
    description:
      "Transfer payload sent by d.velop smart invoice when an export is triggered.",
  });
export const transferSuccessResponseSchema = z.strictObject({
  successful: z.literal(true).meta({
    description: "Indicates that the transfer request was accepted.",
  }),
}).meta({
  id: "TransferSuccessResponse",
  description: "Success payload returned to Smart Invoice.",
});
export const transferErrorResponseSchema = z.strictObject({
  successful: z.literal(false).meta({
    description: "Indicates that the transfer request failed.",
  }),
  error: z.strictObject({
    de: z.string().meta({
      description: "German error message.",
      examples: ["System not found"],
    }),
    en: z.string().meta({
      description: "English error message.",
      examples: ["System not found"],
    }),
  }).catchall(
    z.string().meta({
      "x-additionalPropertiesName": "countryCode",
    }),
  ).meta({
    description: "Localized error messages keyed by language code.",
  }),
}).meta({
  id: "TransferErrorResponse",
  description: "Error payload returned to Smart Invoice.",
});
export const transferResponseSchema = z.union([
  transferSuccessResponseSchema,
  transferErrorResponseSchema,
]).meta({
  id: "TransferResponse",
  description:
    "Response payload returned to Smart Invoice, indicating success or failure.",
});

export type Transfer = z.infer<typeof transferSchema>;
export type Reference = z.infer<typeof referenceSchema>;
export type Actor = z.infer<typeof actorSchema>;
export type InvoiceLineItem = z.infer<typeof invoiceLineItemSchema>;
export type WorkflowStep = z.infer<typeof workflowStepSchema>;
export type Voucher = z.infer<typeof voucherSchema>;
export type TransferSuccessResponse = z.infer<
  typeof transferSuccessResponseSchema
>;
export type TransferErrorResponse = z.infer<typeof transferErrorResponseSchema>;
export type TransferResponse = z.infer<typeof transferResponseSchema>;
