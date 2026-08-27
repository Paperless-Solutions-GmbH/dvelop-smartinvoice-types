import z from 'zod';

declare const referenceSchema: z.ZodObject<{
    nr: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, z.z.core.$strict>;
declare const actorSchema: z.ZodObject<{
    type: z.ZodString;
    id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
    name: z.ZodString;
    display_name: z.ZodString;
    delegate_id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
}, z.z.core.$strict>;
declare const invoiceLineItemSchema: z.ZodObject<{
    procurement_category: z.ZodObject<{}, z.z.core.$strict>;
    surcharges: z.ZodObject<{}, z.z.core.$strict>;
    verifications: z.ZodObject<{}, z.z.core.$strict>;
    internal_id: z.ZodGUID;
    line_no: z.ZodNumber;
    verified: z.ZodBoolean;
    verifier: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        type: z.ZodString;
        id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
        name: z.ZodString;
        display_name: z.ZodString;
        delegate_id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
    }, z.z.core.$strict>>>;
    verified_by: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        type: z.ZodString;
        id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
        name: z.ZodString;
        display_name: z.ZodString;
        delegate_id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
    }, z.z.core.$strict>>>;
    verified_at: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
    gl_account: z.ZodObject<{
        nr: z.ZodString;
    }, z.z.core.$strict>;
    cost_center: z.ZodObject<{
        nr: z.ZodString;
    }, z.z.core.$strict>;
    cost_unit: z.ZodObject<{
        nr: z.ZodString;
    }, z.z.core.$strict>;
    net_amount: z.ZodNumber;
    gross_amount: z.ZodNumber;
    pay_amount: z.ZodNullable<z.ZodNumber>;
    vat_amount: z.ZodNumber;
    tax_code: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        percentage: z.ZodNumber;
    }, z.z.core.$strict>;
    order_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    order_line: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    order_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    order_line_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    quantity: z.ZodObject<{
        invoiced: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.z.core.$strict>;
    unit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    unit_price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    item_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    discount_absolute: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    discount_per_unit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    discount_percent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    discount2_percent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    discount3_percent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    discount4_percent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    discount5_percent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    type: z.ZodString;
    surcharged_line_item_id: z.ZodNullable<z.ZodString>;
    header_surcharge_allocations: z.ZodArray<z.ZodUnknown>;
    verified_as_delegate_of: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        type: z.ZodString;
        id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
        name: z.ZodString;
        display_name: z.ZodString;
        delegate_id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
    }, z.z.core.$strict>>>;
    base_net_amount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    net_amount_surcharge: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    base_unit_price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    unit_price_surcharge: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    price_unit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    delivery_slip_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    goods_receipt_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    goods_receipt_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    goods_receipt_line_item_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    goods_receipt_line_item_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    goods_receipt_creation_date: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
    goods_receipt_line_item_receipt_date: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
    goods_receipt_delivery_slip_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.z.core.$strict>;
declare const workflowStepSchema: z.ZodObject<{
    id: z.ZodUUID;
    title: z.ZodString;
    localized_title: z.ZodOptional<z.ZodString>;
    buttons: z.ZodArray<z.ZodObject<{
        id: z.ZodUUID;
        title: z.ZodString;
        localized_title: z.ZodString;
        action: z.ZodString;
    }, z.z.core.$strict>>;
    bulk_approval: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
    type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.z.core.$strict>;
declare const voucherSchema: z.ZodObject<{
    line_items: z.ZodRecord<z.ZodGUID, z.ZodObject<{
        procurement_category: z.ZodObject<{}, z.z.core.$strict>;
        surcharges: z.ZodObject<{}, z.z.core.$strict>;
        verifications: z.ZodObject<{}, z.z.core.$strict>;
        internal_id: z.ZodGUID;
        line_no: z.ZodNumber;
        verified: z.ZodBoolean;
        verifier: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            type: z.ZodString;
            id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
            name: z.ZodString;
            display_name: z.ZodString;
            delegate_id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
        }, z.z.core.$strict>>>;
        verified_by: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            type: z.ZodString;
            id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
            name: z.ZodString;
            display_name: z.ZodString;
            delegate_id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
        }, z.z.core.$strict>>>;
        verified_at: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
        gl_account: z.ZodObject<{
            nr: z.ZodString;
        }, z.z.core.$strict>;
        cost_center: z.ZodObject<{
            nr: z.ZodString;
        }, z.z.core.$strict>;
        cost_unit: z.ZodObject<{
            nr: z.ZodString;
        }, z.z.core.$strict>;
        net_amount: z.ZodNumber;
        gross_amount: z.ZodNumber;
        pay_amount: z.ZodNullable<z.ZodNumber>;
        vat_amount: z.ZodNumber;
        tax_code: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            percentage: z.ZodNumber;
        }, z.z.core.$strict>;
        order_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        order_line: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        order_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        order_line_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        quantity: z.ZodObject<{
            invoiced: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, z.z.core.$strict>;
        unit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        unit_price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        item_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        discount_absolute: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        discount_per_unit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        discount_percent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        discount2_percent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        discount3_percent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        discount4_percent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        discount5_percent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        type: z.ZodString;
        surcharged_line_item_id: z.ZodNullable<z.ZodString>;
        header_surcharge_allocations: z.ZodArray<z.ZodUnknown>;
        verified_as_delegate_of: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            type: z.ZodString;
            id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
            name: z.ZodString;
            display_name: z.ZodString;
            delegate_id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
        }, z.z.core.$strict>>>;
        base_net_amount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        net_amount_surcharge: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        base_unit_price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        unit_price_surcharge: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        price_unit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        delivery_slip_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        goods_receipt_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        goods_receipt_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        goods_receipt_line_item_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        goods_receipt_line_item_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        goods_receipt_creation_date: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
        goods_receipt_line_item_receipt_date: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
        goods_receipt_delivery_slip_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.z.core.$strict>>;
    responsible: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        type: z.ZodString;
        id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
        name: z.ZodString;
        display_name: z.ZodString;
        delegate_id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
    }, z.z.core.$strict>>>;
    regional: z.ZodObject<{
        ch: z.ZodObject<{}, z.z.core.$strict>;
    }, z.z.core.$strict>;
    po_numbers: z.ZodArray<z.ZodString>;
    doc_id: z.ZodString;
    company: z.ZodObject<{
        nr: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strict>;
    vendor: z.ZodObject<{
        nr: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strict>;
    vendor_bank_account: z.ZodObject<{
        id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        iban: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.z.core.$strict>;
    currency: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        code: z.ZodString;
    }, z.z.core.$strict>;
    net_amount: z.ZodNumber;
    gross_amount: z.ZodNumber;
    pay_amount: z.ZodNullable<z.ZodNumber>;
    vat_amount: z.ZodNumber;
    document_date: z.z.ZodISODateTime;
    internal_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    external_number: z.ZodString;
    payment_date: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
    date_of_supply: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
    financially_correct: z.ZodBoolean;
    document_type: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        credit_note: z.ZodBoolean;
    }, z.z.core.$strict>;
    payment_terms_type: z.ZodString;
    payment_terms: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        net_days: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        cashback_days1: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        cashback_percentage1: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.z.core.$strict>;
    manual_payment_terms: z.ZodObject<{
        net_due_date: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
        cashback_due_date1: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
        cashback_percentage1: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.z.core.$strict>;
    due_dates: z.ZodObject<{
        net_due_date: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
        cashback_due_date1: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
        cashback_amount1: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.z.core.$strict>;
    posting_period: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    posting_date: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
    posting_text: z.ZodString;
    barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.z.core.$strict>;
declare const transferSchema: z.ZodObject<{
    event_type: z.ZodEnum<{
        "integration.export": "integration.export";
    }>;
    _links: z.ZodObject<{
        dmsobject: z.ZodObject<{
            href: z.ZodURL;
        }, z.z.core.$strict>;
        report_results_async: z.ZodObject<{
            href: z.ZodURL;
        }, z.z.core.$strict>;
    }, z.z.core.$strict>;
    workflow: z.ZodObject<{
        voucher: z.ZodObject<{
            line_items: z.ZodRecord<z.ZodGUID, z.ZodObject<{
                procurement_category: z.ZodObject<{}, z.z.core.$strict>;
                surcharges: z.ZodObject<{}, z.z.core.$strict>;
                verifications: z.ZodObject<{}, z.z.core.$strict>;
                internal_id: z.ZodGUID;
                line_no: z.ZodNumber;
                verified: z.ZodBoolean;
                verifier: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                    type: z.ZodString;
                    id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
                    name: z.ZodString;
                    display_name: z.ZodString;
                    delegate_id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
                }, z.z.core.$strict>>>;
                verified_by: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                    type: z.ZodString;
                    id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
                    name: z.ZodString;
                    display_name: z.ZodString;
                    delegate_id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
                }, z.z.core.$strict>>>;
                verified_at: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
                gl_account: z.ZodObject<{
                    nr: z.ZodString;
                }, z.z.core.$strict>;
                cost_center: z.ZodObject<{
                    nr: z.ZodString;
                }, z.z.core.$strict>;
                cost_unit: z.ZodObject<{
                    nr: z.ZodString;
                }, z.z.core.$strict>;
                net_amount: z.ZodNumber;
                gross_amount: z.ZodNumber;
                pay_amount: z.ZodNullable<z.ZodNumber>;
                vat_amount: z.ZodNumber;
                tax_code: z.ZodObject<{
                    id: z.ZodString;
                    name: z.ZodOptional<z.ZodString>;
                    title: z.ZodOptional<z.ZodString>;
                    percentage: z.ZodNumber;
                }, z.z.core.$strict>;
                order_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                order_line: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                order_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                order_line_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                quantity: z.ZodObject<{
                    invoiced: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                }, z.z.core.$strict>;
                unit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                unit_price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                item_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                discount_absolute: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                discount_per_unit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                discount_percent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                discount2_percent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                discount3_percent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                discount4_percent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                discount5_percent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                type: z.ZodString;
                surcharged_line_item_id: z.ZodNullable<z.ZodString>;
                header_surcharge_allocations: z.ZodArray<z.ZodUnknown>;
                verified_as_delegate_of: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                    type: z.ZodString;
                    id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
                    name: z.ZodString;
                    display_name: z.ZodString;
                    delegate_id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
                }, z.z.core.$strict>>>;
                base_net_amount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                net_amount_surcharge: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                base_unit_price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                unit_price_surcharge: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                price_unit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                delivery_slip_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                goods_receipt_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                goods_receipt_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                goods_receipt_line_item_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                goods_receipt_line_item_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                goods_receipt_creation_date: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
                goods_receipt_line_item_receipt_date: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
                goods_receipt_delivery_slip_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.z.core.$strict>>;
            responsible: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                type: z.ZodString;
                id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
                name: z.ZodString;
                display_name: z.ZodString;
                delegate_id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
            }, z.z.core.$strict>>>;
            regional: z.ZodObject<{
                ch: z.ZodObject<{}, z.z.core.$strict>;
            }, z.z.core.$strict>;
            po_numbers: z.ZodArray<z.ZodString>;
            doc_id: z.ZodString;
            company: z.ZodObject<{
                nr: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, z.z.core.$strict>;
            vendor: z.ZodObject<{
                nr: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, z.z.core.$strict>;
            vendor_bank_account: z.ZodObject<{
                id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                iban: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.z.core.$strict>;
            currency: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                code: z.ZodString;
            }, z.z.core.$strict>;
            net_amount: z.ZodNumber;
            gross_amount: z.ZodNumber;
            pay_amount: z.ZodNullable<z.ZodNumber>;
            vat_amount: z.ZodNumber;
            document_date: z.z.ZodISODateTime;
            internal_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            external_number: z.ZodString;
            payment_date: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
            date_of_supply: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
            financially_correct: z.ZodBoolean;
            document_type: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                credit_note: z.ZodBoolean;
            }, z.z.core.$strict>;
            payment_terms_type: z.ZodString;
            payment_terms: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                net_days: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                cashback_days1: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                cashback_percentage1: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            }, z.z.core.$strict>;
            manual_payment_terms: z.ZodObject<{
                net_due_date: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
                cashback_due_date1: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
                cashback_percentage1: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            }, z.z.core.$strict>;
            due_dates: z.ZodObject<{
                net_due_date: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
                cashback_due_date1: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
                cashback_amount1: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            }, z.z.core.$strict>;
            posting_period: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            posting_date: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
            posting_text: z.ZodString;
            barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.z.core.$strict>;
        step: z.ZodObject<{
            id: z.ZodUUID;
            title: z.ZodString;
            localized_title: z.ZodOptional<z.ZodString>;
            buttons: z.ZodArray<z.ZodObject<{
                id: z.ZodUUID;
                title: z.ZodString;
                localized_title: z.ZodString;
                action: z.ZodString;
            }, z.z.core.$strict>>;
            bulk_approval: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
            type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.z.core.$strict>;
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        clearing_mode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        status: z.ZodOptional<z.ZodString>;
        received_at: z.ZodOptional<z.z.ZodISODateTime>;
        locked: z.ZodOptional<z.ZodBoolean>;
        assignees: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
            name: z.ZodString;
            display_name: z.ZodString;
            delegate_id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
        }, z.z.core.$strict>>>;
    }, z.z.core.$strict>;
    connection: z.ZodObject<{
        from_step: z.ZodObject<{
            id: z.ZodUUID;
            title: z.ZodString;
            localized_title: z.ZodOptional<z.ZodString>;
            buttons: z.ZodArray<z.ZodObject<{
                id: z.ZodUUID;
                title: z.ZodString;
                localized_title: z.ZodString;
                action: z.ZodString;
            }, z.z.core.$strict>>;
            bulk_approval: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
            type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.z.core.$strict>;
        to_step: z.ZodObject<{
            id: z.ZodUUID;
            title: z.ZodString;
            localized_title: z.ZodOptional<z.ZodString>;
            buttons: z.ZodArray<z.ZodObject<{
                id: z.ZodUUID;
                title: z.ZodString;
                localized_title: z.ZodString;
                action: z.ZodString;
            }, z.z.core.$strict>>;
            bulk_approval: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
            type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.z.core.$strict>;
        end_mode: z.ZodNullable<z.ZodString>;
        next_assignees: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
            name: z.ZodString;
            display_name: z.ZodString;
            delegate_id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
        }, z.z.core.$strict>>>;
    }, z.z.core.$strict>;
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    voucher: z.ZodOptional<z.ZodObject<{
        line_items: z.ZodRecord<z.ZodGUID, z.ZodObject<{
            procurement_category: z.ZodObject<{}, z.z.core.$strict>;
            surcharges: z.ZodObject<{}, z.z.core.$strict>;
            verifications: z.ZodObject<{}, z.z.core.$strict>;
            internal_id: z.ZodGUID;
            line_no: z.ZodNumber;
            verified: z.ZodBoolean;
            verifier: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                type: z.ZodString;
                id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
                name: z.ZodString;
                display_name: z.ZodString;
                delegate_id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
            }, z.z.core.$strict>>>;
            verified_by: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                type: z.ZodString;
                id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
                name: z.ZodString;
                display_name: z.ZodString;
                delegate_id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
            }, z.z.core.$strict>>>;
            verified_at: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
            gl_account: z.ZodObject<{
                nr: z.ZodString;
            }, z.z.core.$strict>;
            cost_center: z.ZodObject<{
                nr: z.ZodString;
            }, z.z.core.$strict>;
            cost_unit: z.ZodObject<{
                nr: z.ZodString;
            }, z.z.core.$strict>;
            net_amount: z.ZodNumber;
            gross_amount: z.ZodNumber;
            pay_amount: z.ZodNullable<z.ZodNumber>;
            vat_amount: z.ZodNumber;
            tax_code: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
                title: z.ZodOptional<z.ZodString>;
                percentage: z.ZodNumber;
            }, z.z.core.$strict>;
            order_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            order_line: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            order_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            order_line_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            quantity: z.ZodObject<{
                invoiced: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            }, z.z.core.$strict>;
            unit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            unit_price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            item_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            discount_absolute: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            discount_per_unit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            discount_percent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            discount2_percent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            discount3_percent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            discount4_percent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            discount5_percent: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            type: z.ZodString;
            surcharged_line_item_id: z.ZodNullable<z.ZodString>;
            header_surcharge_allocations: z.ZodArray<z.ZodUnknown>;
            verified_as_delegate_of: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                type: z.ZodString;
                id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
                name: z.ZodString;
                display_name: z.ZodString;
                delegate_id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
            }, z.z.core.$strict>>>;
            base_net_amount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            net_amount_surcharge: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            base_unit_price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            unit_price_surcharge: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            price_unit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            delivery_slip_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            goods_receipt_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            goods_receipt_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            goods_receipt_line_item_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            goods_receipt_line_item_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            goods_receipt_creation_date: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
            goods_receipt_line_item_receipt_date: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
            goods_receipt_delivery_slip_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.z.core.$strict>>;
        responsible: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            type: z.ZodString;
            id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
            name: z.ZodString;
            display_name: z.ZodString;
            delegate_id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
        }, z.z.core.$strict>>>;
        regional: z.ZodObject<{
            ch: z.ZodObject<{}, z.z.core.$strict>;
        }, z.z.core.$strict>;
        po_numbers: z.ZodArray<z.ZodString>;
        doc_id: z.ZodString;
        company: z.ZodObject<{
            nr: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
        }, z.z.core.$strict>;
        vendor: z.ZodObject<{
            nr: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
        }, z.z.core.$strict>;
        vendor_bank_account: z.ZodObject<{
            id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            iban: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.z.core.$strict>;
        currency: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            code: z.ZodString;
        }, z.z.core.$strict>;
        net_amount: z.ZodNumber;
        gross_amount: z.ZodNumber;
        pay_amount: z.ZodNullable<z.ZodNumber>;
        vat_amount: z.ZodNumber;
        document_date: z.z.ZodISODateTime;
        internal_number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        external_number: z.ZodString;
        payment_date: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
        date_of_supply: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
        financially_correct: z.ZodBoolean;
        document_type: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            credit_note: z.ZodBoolean;
        }, z.z.core.$strict>;
        payment_terms_type: z.ZodString;
        payment_terms: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            net_days: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            cashback_days1: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            cashback_percentage1: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, z.z.core.$strict>;
        manual_payment_terms: z.ZodObject<{
            net_due_date: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
            cashback_due_date1: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
            cashback_percentage1: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, z.z.core.$strict>;
        due_dates: z.ZodObject<{
            net_due_date: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
            cashback_due_date1: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
            cashback_amount1: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, z.z.core.$strict>;
        posting_period: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        posting_date: z.ZodOptional<z.ZodNullable<z.z.ZodISODateTime>>;
        posting_text: z.ZodString;
        barcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.z.core.$strict>>;
    step: z.ZodOptional<z.ZodObject<{
        id: z.ZodUUID;
        title: z.ZodString;
        localized_title: z.ZodOptional<z.ZodString>;
        buttons: z.ZodArray<z.ZodObject<{
            id: z.ZodUUID;
            title: z.ZodString;
            localized_title: z.ZodString;
            action: z.ZodString;
        }, z.z.core.$strict>>;
        bulk_approval: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
        type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.z.core.$strict>>;
    clearing_mode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodOptional<z.ZodString>;
    received_at: z.ZodOptional<z.z.ZodISODateTime>;
    locked: z.ZodOptional<z.ZodBoolean>;
    assignees: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
        name: z.ZodString;
        display_name: z.ZodString;
        delegate_id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
    }, z.z.core.$strict>>>;
    tenant: z.ZodOptional<z.ZodObject<{
        id: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        base_uri: z.ZodURL;
    }, z.z.core.$strict>>;
    transfer_action: z.ZodOptional<z.ZodString>;
}, z.z.core.$strict>;
type Transfer = z.infer<typeof transferSchema>;
type Reference = z.infer<typeof referenceSchema>;
type Actor = z.infer<typeof actorSchema>;
type InvoiceLineItem = z.infer<typeof invoiceLineItemSchema>;
type WorkflowStep = z.infer<typeof workflowStepSchema>;
type Voucher = z.infer<typeof voucherSchema>;

/**
 * Parses a JSON object into a Transfer object.
 *
 * @param json The JSON object to parse.
 * @returns A valid Transfer object
 * @throws {ZodError} If the JSON object does not conform to the Transfer schema.
 */
declare const parseTransfer: (json: unknown) => Transfer;

export { type Actor, type InvoiceLineItem, type Reference, type Transfer, type Voucher, type WorkflowStep, parseTransfer, transferSchema };
