import { z } from 'zod';
export declare const unionFieldOptions: z.ZodUnion<[z.ZodObject<{
    expression: z.ZodEnum<["countall({values})", "counta({values})", "count({values})", "sum({values})", "max({values})", "min({values})", "and({values})", "or({values})", "xor({values})", "array_join({values})", "array_unique({values})", "array_compact({values})", "concatenate({values})"]>;
    formatting: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        date: z.ZodString;
        time: z.ZodNativeEnum<typeof import("./formatting").TimeFormatting>;
        timeZone: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    }, {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    }>, z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("./formatting").NumberFormattingType.Decimal>;
    }>, "strip", z.ZodTypeAny, {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    }, {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("./formatting").NumberFormattingType.Percent>;
    }>, "strip", z.ZodTypeAny, {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    }, {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("./formatting").NumberFormattingType.Currency>;
        symbol: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    }, {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    }>]>]>>;
    showAs: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("./show-as").SingleLineTextDisplayType>;
    }, "strict", z.ZodTypeAny, {
        type: import("./show-as").SingleLineTextDisplayType;
    }, {
        type: import("./show-as").SingleLineTextDisplayType;
    }>, z.ZodUnion<[z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("./show-as").SingleNumberDisplayType>;
        color: z.ZodNativeEnum<typeof import("../../../types").Colors>;
        showValue: z.ZodBoolean;
        maxValue: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    }, {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    }>, z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("./show-as").MultiNumberDisplayType>;
        color: z.ZodNativeEnum<typeof import("../../../types").Colors>;
    }, "strict", z.ZodTypeAny, {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    }, {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    }>]>]>>;
}, "strict", z.ZodTypeAny, {
    expression: "countall({values})" | "counta({values})" | "count({values})" | "sum({values})" | "max({values})" | "min({values})" | "and({values})" | "or({values})" | "xor({values})" | "array_join({values})" | "array_unique({values})" | "array_compact({values})" | "concatenate({values})";
    formatting?: {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    } | {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    } | {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    } | {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    } | undefined;
    showAs?: {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    } | {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    } | {
        type: import("./show-as").SingleLineTextDisplayType;
    } | undefined;
}, {
    expression: "countall({values})" | "counta({values})" | "count({values})" | "sum({values})" | "max({values})" | "min({values})" | "and({values})" | "or({values})" | "xor({values})" | "array_join({values})" | "array_unique({values})" | "array_compact({values})" | "concatenate({values})";
    formatting?: {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    } | {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    } | {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    } | {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    } | undefined;
    showAs?: {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    } | {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    } | {
        type: import("./show-as").SingleLineTextDisplayType;
    } | undefined;
}>, z.ZodObject<{
    expression: z.ZodString;
    formatting: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        date: z.ZodString;
        time: z.ZodNativeEnum<typeof import("./formatting").TimeFormatting>;
        timeZone: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    }, {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    }>, z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("./formatting").NumberFormattingType.Decimal>;
    }>, "strip", z.ZodTypeAny, {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    }, {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("./formatting").NumberFormattingType.Percent>;
    }>, "strip", z.ZodTypeAny, {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    }, {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("./formatting").NumberFormattingType.Currency>;
        symbol: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    }, {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    }>]>]>>;
    showAs: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("./show-as").SingleLineTextDisplayType>;
    }, "strict", z.ZodTypeAny, {
        type: import("./show-as").SingleLineTextDisplayType;
    }, {
        type: import("./show-as").SingleLineTextDisplayType;
    }>, z.ZodUnion<[z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("./show-as").SingleNumberDisplayType>;
        color: z.ZodNativeEnum<typeof import("../../../types").Colors>;
        showValue: z.ZodBoolean;
        maxValue: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    }, {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    }>, z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("./show-as").MultiNumberDisplayType>;
        color: z.ZodNativeEnum<typeof import("../../../types").Colors>;
    }, "strict", z.ZodTypeAny, {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    }, {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    }>]>]>>;
}, "strict", z.ZodTypeAny, {
    expression: string;
    formatting?: {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    } | {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    } | {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    } | {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    } | undefined;
    showAs?: {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    } | {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    } | {
        type: import("./show-as").SingleLineTextDisplayType;
    } | undefined;
}, {
    expression: string;
    formatting?: {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    } | {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    } | {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    } | {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    } | undefined;
    showAs?: {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    } | {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    } | {
        type: import("./show-as").SingleLineTextDisplayType;
    } | undefined;
}>, z.ZodObject<{
    relationship: z.ZodNativeEnum<typeof import("../../../types").TeableRelationship>;
    foreignTableId: z.ZodString;
    lookupFieldId: z.ZodString;
    isOneWay: z.ZodOptional<z.ZodBoolean>;
    fkHostTableName: z.ZodString;
    selfKeyName: z.ZodString;
    foreignKeyName: z.ZodString;
    symmetricFieldId: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    relationship: import("../../../types").TeableRelationship;
    foreignTableId: string;
    lookupFieldId: string;
    fkHostTableName: string;
    selfKeyName: string;
    foreignKeyName: string;
    isOneWay?: boolean | undefined;
    symmetricFieldId?: string | undefined;
}, {
    relationship: import("../../../types").TeableRelationship;
    foreignTableId: string;
    lookupFieldId: string;
    fkHostTableName: string;
    selfKeyName: string;
    foreignKeyName: string;
    isOneWay?: boolean | undefined;
    symmetricFieldId?: string | undefined;
}>, z.ZodObject<{
    formatting: z.ZodObject<{
        date: z.ZodString;
        time: z.ZodNativeEnum<typeof import("./formatting.shcema").TimeFormatting>;
        timeZone: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        date: string;
        timeZone: string;
        time: import("./formatting.shcema").TimeFormatting;
    }, {
        date: string;
        timeZone: string;
        time: import("./formatting.shcema").TimeFormatting;
    }>;
    defaultValue: z.ZodOptional<z.ZodEnum<["now"]>>;
}, "strict", z.ZodTypeAny, {
    formatting: {
        date: string;
        timeZone: string;
        time: import("./formatting.shcema").TimeFormatting;
    };
    defaultValue?: "now" | undefined;
}, {
    formatting: {
        date: string;
        timeZone: string;
        time: import("./formatting.shcema").TimeFormatting;
    };
    defaultValue?: "now" | undefined;
}>, z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>, z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>, z.ZodObject<{
    showAs: z.ZodOptional<z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("./show-as").SingleLineTextDisplayType>;
    }, "strip", z.ZodTypeAny, {
        type: import("./show-as").SingleLineTextDisplayType;
    }, {
        type: import("./show-as").SingleLineTextDisplayType;
    }>>;
}, "strict", z.ZodTypeAny, {
    showAs?: {
        type: import("./show-as").SingleLineTextDisplayType;
    } | undefined;
}, {
    showAs?: {
        type: import("./show-as").SingleLineTextDisplayType;
    } | undefined;
}>, z.ZodObject<{
    icon: z.ZodNativeEnum<typeof import("./derivate").RatingIcon>;
    color: z.ZodEnum<[import("../../../types").Colors.YellowBright, import("../../../types").Colors.RedBright, import("../../../types").Colors.TealBright]>;
    max: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    color: import("../../../types").Colors.RedBright | import("../../../types").Colors.TealBright | import("../../../types").Colors.YellowBright;
    icon: import("./derivate").RatingIcon;
    max: number;
}, {
    color: import("../../../types").Colors.RedBright | import("../../../types").Colors.TealBright | import("../../../types").Colors.YellowBright;
    icon: import("./derivate").RatingIcon;
    max: number;
}>, z.ZodObject<{
    isMultiple: z.ZodBoolean;
    shouldNotify: z.ZodBoolean;
}, "strict", z.ZodTypeAny, {
    isMultiple: boolean;
    shouldNotify: boolean;
}, {
    isMultiple: boolean;
    shouldNotify: boolean;
}>, z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>]>;
export declare const unionFieldOptionsVoSchema: z.ZodUnion<[z.ZodUnion<[z.ZodObject<{
    expression: z.ZodEnum<["countall({values})", "counta({values})", "count({values})", "sum({values})", "max({values})", "min({values})", "and({values})", "or({values})", "xor({values})", "array_join({values})", "array_unique({values})", "array_compact({values})", "concatenate({values})"]>;
    formatting: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        date: z.ZodString;
        time: z.ZodNativeEnum<typeof import("./formatting").TimeFormatting>;
        timeZone: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    }, {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    }>, z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("./formatting").NumberFormattingType.Decimal>;
    }>, "strip", z.ZodTypeAny, {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    }, {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("./formatting").NumberFormattingType.Percent>;
    }>, "strip", z.ZodTypeAny, {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    }, {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("./formatting").NumberFormattingType.Currency>;
        symbol: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    }, {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    }>]>]>>;
    showAs: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("./show-as").SingleLineTextDisplayType>;
    }, "strict", z.ZodTypeAny, {
        type: import("./show-as").SingleLineTextDisplayType;
    }, {
        type: import("./show-as").SingleLineTextDisplayType;
    }>, z.ZodUnion<[z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("./show-as").SingleNumberDisplayType>;
        color: z.ZodNativeEnum<typeof import("../../../types").Colors>;
        showValue: z.ZodBoolean;
        maxValue: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    }, {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    }>, z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("./show-as").MultiNumberDisplayType>;
        color: z.ZodNativeEnum<typeof import("../../../types").Colors>;
    }, "strict", z.ZodTypeAny, {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    }, {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    }>]>]>>;
}, "strict", z.ZodTypeAny, {
    expression: "countall({values})" | "counta({values})" | "count({values})" | "sum({values})" | "max({values})" | "min({values})" | "and({values})" | "or({values})" | "xor({values})" | "array_join({values})" | "array_unique({values})" | "array_compact({values})" | "concatenate({values})";
    formatting?: {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    } | {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    } | {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    } | {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    } | undefined;
    showAs?: {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    } | {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    } | {
        type: import("./show-as").SingleLineTextDisplayType;
    } | undefined;
}, {
    expression: "countall({values})" | "counta({values})" | "count({values})" | "sum({values})" | "max({values})" | "min({values})" | "and({values})" | "or({values})" | "xor({values})" | "array_join({values})" | "array_unique({values})" | "array_compact({values})" | "concatenate({values})";
    formatting?: {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    } | {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    } | {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    } | {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    } | undefined;
    showAs?: {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    } | {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    } | {
        type: import("./show-as").SingleLineTextDisplayType;
    } | undefined;
}>, z.ZodObject<{
    expression: z.ZodString;
    formatting: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        date: z.ZodString;
        time: z.ZodNativeEnum<typeof import("./formatting").TimeFormatting>;
        timeZone: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    }, {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    }>, z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("./formatting").NumberFormattingType.Decimal>;
    }>, "strip", z.ZodTypeAny, {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    }, {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("./formatting").NumberFormattingType.Percent>;
    }>, "strip", z.ZodTypeAny, {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    }, {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("./formatting").NumberFormattingType.Currency>;
        symbol: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    }, {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    }>]>]>>;
    showAs: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("./show-as").SingleLineTextDisplayType>;
    }, "strict", z.ZodTypeAny, {
        type: import("./show-as").SingleLineTextDisplayType;
    }, {
        type: import("./show-as").SingleLineTextDisplayType;
    }>, z.ZodUnion<[z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("./show-as").SingleNumberDisplayType>;
        color: z.ZodNativeEnum<typeof import("../../../types").Colors>;
        showValue: z.ZodBoolean;
        maxValue: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    }, {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    }>, z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("./show-as").MultiNumberDisplayType>;
        color: z.ZodNativeEnum<typeof import("../../../types").Colors>;
    }, "strict", z.ZodTypeAny, {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    }, {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    }>]>]>>;
}, "strict", z.ZodTypeAny, {
    expression: string;
    formatting?: {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    } | {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    } | {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    } | {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    } | undefined;
    showAs?: {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    } | {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    } | {
        type: import("./show-as").SingleLineTextDisplayType;
    } | undefined;
}, {
    expression: string;
    formatting?: {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    } | {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    } | {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    } | {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    } | undefined;
    showAs?: {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    } | {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    } | {
        type: import("./show-as").SingleLineTextDisplayType;
    } | undefined;
}>, z.ZodObject<{
    relationship: z.ZodNativeEnum<typeof import("../../../types").TeableRelationship>;
    foreignTableId: z.ZodString;
    lookupFieldId: z.ZodString;
    isOneWay: z.ZodOptional<z.ZodBoolean>;
    fkHostTableName: z.ZodString;
    selfKeyName: z.ZodString;
    foreignKeyName: z.ZodString;
    symmetricFieldId: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    relationship: import("../../../types").TeableRelationship;
    foreignTableId: string;
    lookupFieldId: string;
    fkHostTableName: string;
    selfKeyName: string;
    foreignKeyName: string;
    isOneWay?: boolean | undefined;
    symmetricFieldId?: string | undefined;
}, {
    relationship: import("../../../types").TeableRelationship;
    foreignTableId: string;
    lookupFieldId: string;
    fkHostTableName: string;
    selfKeyName: string;
    foreignKeyName: string;
    isOneWay?: boolean | undefined;
    symmetricFieldId?: string | undefined;
}>, z.ZodObject<{
    formatting: z.ZodObject<{
        date: z.ZodString;
        time: z.ZodNativeEnum<typeof import("./formatting.shcema").TimeFormatting>;
        timeZone: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        date: string;
        timeZone: string;
        time: import("./formatting.shcema").TimeFormatting;
    }, {
        date: string;
        timeZone: string;
        time: import("./formatting.shcema").TimeFormatting;
    }>;
    defaultValue: z.ZodOptional<z.ZodEnum<["now"]>>;
}, "strict", z.ZodTypeAny, {
    formatting: {
        date: string;
        timeZone: string;
        time: import("./formatting.shcema").TimeFormatting;
    };
    defaultValue?: "now" | undefined;
}, {
    formatting: {
        date: string;
        timeZone: string;
        time: import("./formatting.shcema").TimeFormatting;
    };
    defaultValue?: "now" | undefined;
}>, z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>, z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>, z.ZodObject<{
    showAs: z.ZodOptional<z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("./show-as").SingleLineTextDisplayType>;
    }, "strip", z.ZodTypeAny, {
        type: import("./show-as").SingleLineTextDisplayType;
    }, {
        type: import("./show-as").SingleLineTextDisplayType;
    }>>;
}, "strict", z.ZodTypeAny, {
    showAs?: {
        type: import("./show-as").SingleLineTextDisplayType;
    } | undefined;
}, {
    showAs?: {
        type: import("./show-as").SingleLineTextDisplayType;
    } | undefined;
}>, z.ZodObject<{
    icon: z.ZodNativeEnum<typeof import("./derivate").RatingIcon>;
    color: z.ZodEnum<[import("../../../types").Colors.YellowBright, import("../../../types").Colors.RedBright, import("../../../types").Colors.TealBright]>;
    max: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    color: import("../../../types").Colors.RedBright | import("../../../types").Colors.TealBright | import("../../../types").Colors.YellowBright;
    icon: import("./derivate").RatingIcon;
    max: number;
}, {
    color: import("../../../types").Colors.RedBright | import("../../../types").Colors.TealBright | import("../../../types").Colors.YellowBright;
    icon: import("./derivate").RatingIcon;
    max: number;
}>, z.ZodObject<{
    isMultiple: z.ZodBoolean;
    shouldNotify: z.ZodBoolean;
}, "strict", z.ZodTypeAny, {
    isMultiple: boolean;
    shouldNotify: boolean;
}, {
    isMultiple: boolean;
    shouldNotify: boolean;
}>, z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>]>, z.ZodObject<{
    relationship: z.ZodNativeEnum<typeof import("../../../types").TeableRelationship>;
    foreignTableId: z.ZodString;
    lookupFieldId: z.ZodString;
    isOneWay: z.ZodOptional<z.ZodBoolean>;
    fkHostTableName: z.ZodString;
    selfKeyName: z.ZodString;
    foreignKeyName: z.ZodString;
    symmetricFieldId: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    relationship: import("../../../types").TeableRelationship;
    foreignTableId: string;
    lookupFieldId: string;
    fkHostTableName: string;
    selfKeyName: string;
    foreignKeyName: string;
    isOneWay?: boolean | undefined;
    symmetricFieldId?: string | undefined;
}, {
    relationship: import("../../../types").TeableRelationship;
    foreignTableId: string;
    lookupFieldId: string;
    fkHostTableName: string;
    selfKeyName: string;
    foreignKeyName: string;
    isOneWay?: boolean | undefined;
    symmetricFieldId?: string | undefined;
}>, z.ZodObject<{
    choices: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        color: z.ZodNativeEnum<typeof import("../../../types").Colors>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        color: import("../../../types").Colors;
    }, {
        id: string;
        name: string;
        color: import("../../../types").Colors;
    }>, "many">;
}, "strict", z.ZodTypeAny, {
    choices: {
        id: string;
        name: string;
        color: import("../../../types").Colors;
    }[];
}, {
    choices: {
        id: string;
        name: string;
        color: import("../../../types").Colors;
    }[];
}>, z.ZodObject<{
    formatting: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("./formatting").NumberFormattingType.Decimal>;
    }>, "strip", z.ZodTypeAny, {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    }, {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("./formatting").NumberFormattingType.Percent>;
    }>, "strip", z.ZodTypeAny, {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    }, {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("./formatting").NumberFormattingType.Currency>;
        symbol: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    }, {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    }>]>;
    showAs: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("./show-as").SingleNumberDisplayType>;
        color: z.ZodNativeEnum<typeof import("../../../types").Colors>;
        showValue: z.ZodBoolean;
        maxValue: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    }, {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    }>, z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("./show-as").MultiNumberDisplayType>;
        color: z.ZodNativeEnum<typeof import("../../../types").Colors>;
    }, "strict", z.ZodTypeAny, {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    }, {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    }>]>>;
}, "strict", z.ZodTypeAny, {
    formatting: {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    } | {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    } | {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    };
    showAs?: {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    } | {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    } | undefined;
}, {
    formatting: {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    } | {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    } | {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    };
    showAs?: {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    } | {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    } | undefined;
}>, z.ZodObject<{
    expression: z.ZodLiteral<"AUTO_NUMBER()">;
}, "strict", z.ZodTypeAny, {
    expression: "AUTO_NUMBER()";
}, {
    expression: "AUTO_NUMBER()";
}>, z.ZodObject<{
    expression: z.ZodLiteral<"CREATED_TIME()">;
    formatting: z.ZodObject<{
        date: z.ZodString;
        time: z.ZodNativeEnum<typeof import("./formatting.shcema").TimeFormatting>;
        timeZone: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        date: string;
        timeZone: string;
        time: import("./formatting.shcema").TimeFormatting;
    }, {
        date: string;
        timeZone: string;
        time: import("./formatting.shcema").TimeFormatting;
    }>;
}, "strict", z.ZodTypeAny, {
    expression: "CREATED_TIME()";
    formatting: {
        date: string;
        timeZone: string;
        time: import("./formatting.shcema").TimeFormatting;
    };
}, {
    expression: "CREATED_TIME()";
    formatting: {
        date: string;
        timeZone: string;
        time: import("./formatting.shcema").TimeFormatting;
    };
}>, z.ZodObject<{
    expression: z.ZodLiteral<"LAST_MODIFIED_TIME()">;
    formatting: z.ZodObject<{
        date: z.ZodString;
        time: z.ZodNativeEnum<typeof import("./formatting").TimeFormatting>;
        timeZone: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    }, {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    }>;
}, "strict", z.ZodTypeAny, {
    expression: "LAST_MODIFIED_TIME()";
    formatting: {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    };
}, {
    expression: "LAST_MODIFIED_TIME()";
    formatting: {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    };
}>]>;
export declare const unionFieldOptionsRoSchema: z.ZodUnion<[z.ZodUnion<[z.ZodObject<{
    expression: z.ZodEnum<["countall({values})", "counta({values})", "count({values})", "sum({values})", "max({values})", "min({values})", "and({values})", "or({values})", "xor({values})", "array_join({values})", "array_unique({values})", "array_compact({values})", "concatenate({values})"]>;
    formatting: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        date: z.ZodString;
        time: z.ZodNativeEnum<typeof import("./formatting").TimeFormatting>;
        timeZone: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    }, {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    }>, z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("./formatting").NumberFormattingType.Decimal>;
    }>, "strip", z.ZodTypeAny, {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    }, {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("./formatting").NumberFormattingType.Percent>;
    }>, "strip", z.ZodTypeAny, {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    }, {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("./formatting").NumberFormattingType.Currency>;
        symbol: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    }, {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    }>]>]>>;
    showAs: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("./show-as").SingleLineTextDisplayType>;
    }, "strict", z.ZodTypeAny, {
        type: import("./show-as").SingleLineTextDisplayType;
    }, {
        type: import("./show-as").SingleLineTextDisplayType;
    }>, z.ZodUnion<[z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("./show-as").SingleNumberDisplayType>;
        color: z.ZodNativeEnum<typeof import("../../../types").Colors>;
        showValue: z.ZodBoolean;
        maxValue: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    }, {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    }>, z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("./show-as").MultiNumberDisplayType>;
        color: z.ZodNativeEnum<typeof import("../../../types").Colors>;
    }, "strict", z.ZodTypeAny, {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    }, {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    }>]>]>>;
}, "strict", z.ZodTypeAny, {
    expression: "countall({values})" | "counta({values})" | "count({values})" | "sum({values})" | "max({values})" | "min({values})" | "and({values})" | "or({values})" | "xor({values})" | "array_join({values})" | "array_unique({values})" | "array_compact({values})" | "concatenate({values})";
    formatting?: {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    } | {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    } | {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    } | {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    } | undefined;
    showAs?: {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    } | {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    } | {
        type: import("./show-as").SingleLineTextDisplayType;
    } | undefined;
}, {
    expression: "countall({values})" | "counta({values})" | "count({values})" | "sum({values})" | "max({values})" | "min({values})" | "and({values})" | "or({values})" | "xor({values})" | "array_join({values})" | "array_unique({values})" | "array_compact({values})" | "concatenate({values})";
    formatting?: {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    } | {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    } | {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    } | {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    } | undefined;
    showAs?: {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    } | {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    } | {
        type: import("./show-as").SingleLineTextDisplayType;
    } | undefined;
}>, z.ZodObject<{
    expression: z.ZodString;
    formatting: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        date: z.ZodString;
        time: z.ZodNativeEnum<typeof import("./formatting").TimeFormatting>;
        timeZone: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    }, {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    }>, z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("./formatting").NumberFormattingType.Decimal>;
    }>, "strip", z.ZodTypeAny, {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    }, {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("./formatting").NumberFormattingType.Percent>;
    }>, "strip", z.ZodTypeAny, {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    }, {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("./formatting").NumberFormattingType.Currency>;
        symbol: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    }, {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    }>]>]>>;
    showAs: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("./show-as").SingleLineTextDisplayType>;
    }, "strict", z.ZodTypeAny, {
        type: import("./show-as").SingleLineTextDisplayType;
    }, {
        type: import("./show-as").SingleLineTextDisplayType;
    }>, z.ZodUnion<[z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("./show-as").SingleNumberDisplayType>;
        color: z.ZodNativeEnum<typeof import("../../../types").Colors>;
        showValue: z.ZodBoolean;
        maxValue: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    }, {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    }>, z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("./show-as").MultiNumberDisplayType>;
        color: z.ZodNativeEnum<typeof import("../../../types").Colors>;
    }, "strict", z.ZodTypeAny, {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    }, {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    }>]>]>>;
}, "strict", z.ZodTypeAny, {
    expression: string;
    formatting?: {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    } | {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    } | {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    } | {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    } | undefined;
    showAs?: {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    } | {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    } | {
        type: import("./show-as").SingleLineTextDisplayType;
    } | undefined;
}, {
    expression: string;
    formatting?: {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    } | {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    } | {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    } | {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    } | undefined;
    showAs?: {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    } | {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    } | {
        type: import("./show-as").SingleLineTextDisplayType;
    } | undefined;
}>, z.ZodObject<{
    relationship: z.ZodNativeEnum<typeof import("../../../types").TeableRelationship>;
    foreignTableId: z.ZodString;
    lookupFieldId: z.ZodString;
    isOneWay: z.ZodOptional<z.ZodBoolean>;
    fkHostTableName: z.ZodString;
    selfKeyName: z.ZodString;
    foreignKeyName: z.ZodString;
    symmetricFieldId: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    relationship: import("../../../types").TeableRelationship;
    foreignTableId: string;
    lookupFieldId: string;
    fkHostTableName: string;
    selfKeyName: string;
    foreignKeyName: string;
    isOneWay?: boolean | undefined;
    symmetricFieldId?: string | undefined;
}, {
    relationship: import("../../../types").TeableRelationship;
    foreignTableId: string;
    lookupFieldId: string;
    fkHostTableName: string;
    selfKeyName: string;
    foreignKeyName: string;
    isOneWay?: boolean | undefined;
    symmetricFieldId?: string | undefined;
}>, z.ZodObject<{
    formatting: z.ZodObject<{
        date: z.ZodString;
        time: z.ZodNativeEnum<typeof import("./formatting.shcema").TimeFormatting>;
        timeZone: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        date: string;
        timeZone: string;
        time: import("./formatting.shcema").TimeFormatting;
    }, {
        date: string;
        timeZone: string;
        time: import("./formatting.shcema").TimeFormatting;
    }>;
    defaultValue: z.ZodOptional<z.ZodEnum<["now"]>>;
}, "strict", z.ZodTypeAny, {
    formatting: {
        date: string;
        timeZone: string;
        time: import("./formatting.shcema").TimeFormatting;
    };
    defaultValue?: "now" | undefined;
}, {
    formatting: {
        date: string;
        timeZone: string;
        time: import("./formatting.shcema").TimeFormatting;
    };
    defaultValue?: "now" | undefined;
}>, z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>, z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>, z.ZodObject<{
    showAs: z.ZodOptional<z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("./show-as").SingleLineTextDisplayType>;
    }, "strip", z.ZodTypeAny, {
        type: import("./show-as").SingleLineTextDisplayType;
    }, {
        type: import("./show-as").SingleLineTextDisplayType;
    }>>;
}, "strict", z.ZodTypeAny, {
    showAs?: {
        type: import("./show-as").SingleLineTextDisplayType;
    } | undefined;
}, {
    showAs?: {
        type: import("./show-as").SingleLineTextDisplayType;
    } | undefined;
}>, z.ZodObject<{
    icon: z.ZodNativeEnum<typeof import("./derivate").RatingIcon>;
    color: z.ZodEnum<[import("../../../types").Colors.YellowBright, import("../../../types").Colors.RedBright, import("../../../types").Colors.TealBright]>;
    max: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    color: import("../../../types").Colors.RedBright | import("../../../types").Colors.TealBright | import("../../../types").Colors.YellowBright;
    icon: import("./derivate").RatingIcon;
    max: number;
}, {
    color: import("../../../types").Colors.RedBright | import("../../../types").Colors.TealBright | import("../../../types").Colors.YellowBright;
    icon: import("./derivate").RatingIcon;
    max: number;
}>, z.ZodObject<{
    isMultiple: z.ZodBoolean;
    shouldNotify: z.ZodBoolean;
}, "strict", z.ZodTypeAny, {
    isMultiple: boolean;
    shouldNotify: boolean;
}, {
    isMultiple: boolean;
    shouldNotify: boolean;
}>, z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>]>, z.ZodObject<Pick<{
    relationship: z.ZodNativeEnum<typeof import("../../../types").TeableRelationship>;
    foreignTableId: z.ZodString;
    lookupFieldId: z.ZodString;
    isOneWay: z.ZodOptional<z.ZodBoolean>;
    fkHostTableName: z.ZodString;
    selfKeyName: z.ZodString;
    foreignKeyName: z.ZodString;
    symmetricFieldId: z.ZodOptional<z.ZodString>;
}, "relationship" | "foreignTableId" | "isOneWay">, "strict", z.ZodTypeAny, {
    relationship: import("../../../types").TeableRelationship;
    foreignTableId: string;
    isOneWay?: boolean | undefined;
}, {
    relationship: import("../../../types").TeableRelationship;
    foreignTableId: string;
    isOneWay?: boolean | undefined;
}>, z.ZodObject<{
    choices: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        color: z.ZodOptional<z.ZodNativeEnum<typeof import("../../../types").Colors>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id?: string | undefined;
        color?: import("../../../types").Colors | undefined;
    }, {
        name: string;
        id?: string | undefined;
        color?: import("../../../types").Colors | undefined;
    }>, "many">;
}, "strict", z.ZodTypeAny, {
    choices: {
        name: string;
        id?: string | undefined;
        color?: import("../../../types").Colors | undefined;
    }[];
}, {
    choices: {
        name: string;
        id?: string | undefined;
        color?: import("../../../types").Colors | undefined;
    }[];
}>, z.ZodObject<{
    formatting: z.ZodOptional<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("./formatting").NumberFormattingType.Decimal>;
    }>, "strip", z.ZodTypeAny, {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    }, {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("./formatting").NumberFormattingType.Percent>;
    }>, "strip", z.ZodTypeAny, {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    }, {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        precision: z.ZodNumber;
    }, {
        type: z.ZodLiteral<import("./formatting").NumberFormattingType.Currency>;
        symbol: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    }, {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    }>]>>;
    showAs: z.ZodOptional<z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("./show-as").SingleNumberDisplayType>;
        color: z.ZodNativeEnum<typeof import("../../../types").Colors>;
        showValue: z.ZodBoolean;
        maxValue: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    }, {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    }>, z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("./show-as").MultiNumberDisplayType>;
        color: z.ZodNativeEnum<typeof import("../../../types").Colors>;
    }, "strict", z.ZodTypeAny, {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    }, {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    }>]>>>;
}, "strict", z.ZodTypeAny, {
    formatting?: {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    } | {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    } | {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    } | undefined;
    showAs?: {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    } | {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    } | undefined;
}, {
    formatting?: {
        type: import("./formatting").NumberFormattingType.Decimal;
        precision: number;
    } | {
        type: import("./formatting").NumberFormattingType.Percent;
        precision: number;
    } | {
        symbol: string;
        type: import("./formatting").NumberFormattingType.Currency;
        precision: number;
    } | undefined;
    showAs?: {
        type: import("./show-as").SingleNumberDisplayType;
        color: import("../../../types").Colors;
        showValue: boolean;
        maxValue: number;
    } | {
        type: import("./show-as").MultiNumberDisplayType;
        color: import("../../../types").Colors;
    } | undefined;
}>, z.ZodObject<Omit<{
    expression: z.ZodLiteral<"AUTO_NUMBER()">;
}, "expression">, "strict", z.ZodTypeAny, {}, {}>, z.ZodObject<Omit<{
    expression: z.ZodLiteral<"CREATED_TIME()">;
    formatting: z.ZodObject<{
        date: z.ZodString;
        time: z.ZodNativeEnum<typeof import("./formatting.shcema").TimeFormatting>;
        timeZone: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        date: string;
        timeZone: string;
        time: import("./formatting.shcema").TimeFormatting;
    }, {
        date: string;
        timeZone: string;
        time: import("./formatting.shcema").TimeFormatting;
    }>;
}, "expression">, "strict", z.ZodTypeAny, {
    formatting: {
        date: string;
        timeZone: string;
        time: import("./formatting.shcema").TimeFormatting;
    };
}, {
    formatting: {
        date: string;
        timeZone: string;
        time: import("./formatting.shcema").TimeFormatting;
    };
}>, z.ZodObject<Omit<{
    expression: z.ZodLiteral<"LAST_MODIFIED_TIME()">;
    formatting: z.ZodObject<{
        date: z.ZodString;
        time: z.ZodNativeEnum<typeof import("./formatting").TimeFormatting>;
        timeZone: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    }, {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    }>;
}, "expression">, "strict", z.ZodTypeAny, {
    formatting: {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    };
}, {
    formatting: {
        date: string;
        timeZone: string;
        time: import("./formatting").TimeFormatting;
    };
}>]>;
export declare const lookupOptionsVoSchema: z.ZodObject<z.objectUtil.extendShape<Pick<{
    relationship: z.ZodNativeEnum<typeof import("../../../types").TeableRelationship>;
    foreignTableId: z.ZodString;
    lookupFieldId: z.ZodString;
    isOneWay: z.ZodOptional<z.ZodBoolean>;
    fkHostTableName: z.ZodString;
    selfKeyName: z.ZodString;
    foreignKeyName: z.ZodString;
    symmetricFieldId: z.ZodOptional<z.ZodString>;
}, "relationship" | "foreignTableId" | "lookupFieldId" | "fkHostTableName" | "selfKeyName" | "foreignKeyName">, {
    linkFieldId: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    relationship: import("../../../types").TeableRelationship;
    foreignTableId: string;
    lookupFieldId: string;
    fkHostTableName: string;
    selfKeyName: string;
    foreignKeyName: string;
    linkFieldId: string;
}, {
    relationship: import("../../../types").TeableRelationship;
    foreignTableId: string;
    lookupFieldId: string;
    fkHostTableName: string;
    selfKeyName: string;
    foreignKeyName: string;
    linkFieldId: string;
}>;
export declare const lookupOptionsRoSchema: z.ZodObject<Pick<z.objectUtil.extendShape<Pick<{
    relationship: z.ZodNativeEnum<typeof import("../../../types").TeableRelationship>;
    foreignTableId: z.ZodString;
    lookupFieldId: z.ZodString;
    isOneWay: z.ZodOptional<z.ZodBoolean>;
    fkHostTableName: z.ZodString;
    selfKeyName: z.ZodString;
    foreignKeyName: z.ZodString;
    symmetricFieldId: z.ZodOptional<z.ZodString>;
}, "relationship" | "foreignTableId" | "lookupFieldId" | "fkHostTableName" | "selfKeyName" | "foreignKeyName">, {
    linkFieldId: z.ZodString;
}>, "foreignTableId" | "lookupFieldId" | "linkFieldId">, "strip", z.ZodTypeAny, {
    foreignTableId: string;
    lookupFieldId: string;
    linkFieldId: string;
}, {
    foreignTableId: string;
    lookupFieldId: string;
    linkFieldId: string;
}>;
//# sourceMappingURL=field.option.schema.d.ts.map