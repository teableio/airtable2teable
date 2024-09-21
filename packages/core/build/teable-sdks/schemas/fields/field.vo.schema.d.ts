import { TeableCellValueType, TeableDbFieldType, TeableFieldType } from '@/types';
import { z } from 'zod';
export declare const fieldVoSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    type: z.ZodNativeEnum<typeof TeableFieldType>;
    description: z.ZodOptional<z.ZodString>;
    options: z.ZodUnion<[z.ZodUnion<[z.ZodObject<{
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
            color: z.ZodNativeEnum<typeof import("@/types").Colors>;
            showValue: z.ZodBoolean;
            maxValue: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            type: import("./show-as").SingleNumberDisplayType;
            color: import("@/types").Colors;
            showValue: boolean;
            maxValue: number;
        }, {
            type: import("./show-as").SingleNumberDisplayType;
            color: import("@/types").Colors;
            showValue: boolean;
            maxValue: number;
        }>, z.ZodObject<{
            type: z.ZodNativeEnum<typeof import("./show-as").MultiNumberDisplayType>;
            color: z.ZodNativeEnum<typeof import("@/types").Colors>;
        }, "strict", z.ZodTypeAny, {
            type: import("./show-as").MultiNumberDisplayType;
            color: import("@/types").Colors;
        }, {
            type: import("./show-as").MultiNumberDisplayType;
            color: import("@/types").Colors;
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
            color: import("@/types").Colors;
            showValue: boolean;
            maxValue: number;
        } | {
            type: import("./show-as").MultiNumberDisplayType;
            color: import("@/types").Colors;
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
            color: import("@/types").Colors;
            showValue: boolean;
            maxValue: number;
        } | {
            type: import("./show-as").MultiNumberDisplayType;
            color: import("@/types").Colors;
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
            color: z.ZodNativeEnum<typeof import("@/types").Colors>;
            showValue: z.ZodBoolean;
            maxValue: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            type: import("./show-as").SingleNumberDisplayType;
            color: import("@/types").Colors;
            showValue: boolean;
            maxValue: number;
        }, {
            type: import("./show-as").SingleNumberDisplayType;
            color: import("@/types").Colors;
            showValue: boolean;
            maxValue: number;
        }>, z.ZodObject<{
            type: z.ZodNativeEnum<typeof import("./show-as").MultiNumberDisplayType>;
            color: z.ZodNativeEnum<typeof import("@/types").Colors>;
        }, "strict", z.ZodTypeAny, {
            type: import("./show-as").MultiNumberDisplayType;
            color: import("@/types").Colors;
        }, {
            type: import("./show-as").MultiNumberDisplayType;
            color: import("@/types").Colors;
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
            color: import("@/types").Colors;
            showValue: boolean;
            maxValue: number;
        } | {
            type: import("./show-as").MultiNumberDisplayType;
            color: import("@/types").Colors;
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
            color: import("@/types").Colors;
            showValue: boolean;
            maxValue: number;
        } | {
            type: import("./show-as").MultiNumberDisplayType;
            color: import("@/types").Colors;
        } | {
            type: import("./show-as").SingleLineTextDisplayType;
        } | undefined;
    }>, z.ZodObject<{
        relationship: z.ZodNativeEnum<typeof import("@/types").TeableRelationship>;
        foreignTableId: z.ZodString;
        lookupFieldId: z.ZodString;
        isOneWay: z.ZodOptional<z.ZodBoolean>;
        fkHostTableName: z.ZodString;
        selfKeyName: z.ZodString;
        foreignKeyName: z.ZodString;
        symmetricFieldId: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        relationship: import("@/types").TeableRelationship;
        foreignTableId: string;
        lookupFieldId: string;
        fkHostTableName: string;
        selfKeyName: string;
        foreignKeyName: string;
        isOneWay?: boolean | undefined;
        symmetricFieldId?: string | undefined;
    }, {
        relationship: import("@/types").TeableRelationship;
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
        color: z.ZodEnum<[import("@/types").Colors.YellowBright, import("@/types").Colors.RedBright, import("@/types").Colors.TealBright]>;
        max: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        color: import("@/types").Colors.RedBright | import("@/types").Colors.TealBright | import("@/types").Colors.YellowBright;
        icon: import("./derivate").RatingIcon;
        max: number;
    }, {
        color: import("@/types").Colors.RedBright | import("@/types").Colors.TealBright | import("@/types").Colors.YellowBright;
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
        relationship: z.ZodNativeEnum<typeof import("@/types").TeableRelationship>;
        foreignTableId: z.ZodString;
        lookupFieldId: z.ZodString;
        isOneWay: z.ZodOptional<z.ZodBoolean>;
        fkHostTableName: z.ZodString;
        selfKeyName: z.ZodString;
        foreignKeyName: z.ZodString;
        symmetricFieldId: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        relationship: import("@/types").TeableRelationship;
        foreignTableId: string;
        lookupFieldId: string;
        fkHostTableName: string;
        selfKeyName: string;
        foreignKeyName: string;
        isOneWay?: boolean | undefined;
        symmetricFieldId?: string | undefined;
    }, {
        relationship: import("@/types").TeableRelationship;
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
            color: z.ZodNativeEnum<typeof import("@/types").Colors>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name: string;
            color: import("@/types").Colors;
        }, {
            id: string;
            name: string;
            color: import("@/types").Colors;
        }>, "many">;
    }, "strict", z.ZodTypeAny, {
        choices: {
            id: string;
            name: string;
            color: import("@/types").Colors;
        }[];
    }, {
        choices: {
            id: string;
            name: string;
            color: import("@/types").Colors;
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
            color: z.ZodNativeEnum<typeof import("@/types").Colors>;
            showValue: z.ZodBoolean;
            maxValue: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            type: import("./show-as").SingleNumberDisplayType;
            color: import("@/types").Colors;
            showValue: boolean;
            maxValue: number;
        }, {
            type: import("./show-as").SingleNumberDisplayType;
            color: import("@/types").Colors;
            showValue: boolean;
            maxValue: number;
        }>, z.ZodObject<{
            type: z.ZodNativeEnum<typeof import("./show-as").MultiNumberDisplayType>;
            color: z.ZodNativeEnum<typeof import("@/types").Colors>;
        }, "strict", z.ZodTypeAny, {
            type: import("./show-as").MultiNumberDisplayType;
            color: import("@/types").Colors;
        }, {
            type: import("./show-as").MultiNumberDisplayType;
            color: import("@/types").Colors;
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
            color: import("@/types").Colors;
            showValue: boolean;
            maxValue: number;
        } | {
            type: import("./show-as").MultiNumberDisplayType;
            color: import("@/types").Colors;
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
            color: import("@/types").Colors;
            showValue: boolean;
            maxValue: number;
        } | {
            type: import("./show-as").MultiNumberDisplayType;
            color: import("@/types").Colors;
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
    isLookup: z.ZodOptional<z.ZodBoolean>;
    lookupOptions: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<Pick<{
        relationship: z.ZodNativeEnum<typeof import("@/types").TeableRelationship>;
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
        relationship: import("@/types").TeableRelationship;
        foreignTableId: string;
        lookupFieldId: string;
        fkHostTableName: string;
        selfKeyName: string;
        foreignKeyName: string;
        linkFieldId: string;
    }, {
        relationship: import("@/types").TeableRelationship;
        foreignTableId: string;
        lookupFieldId: string;
        fkHostTableName: string;
        selfKeyName: string;
        foreignKeyName: string;
        linkFieldId: string;
    }>>;
    notNull: z.ZodOptional<z.ZodBoolean>;
    unique: z.ZodOptional<z.ZodBoolean>;
    isPrimary: z.ZodOptional<z.ZodBoolean>;
    isComputed: z.ZodOptional<z.ZodBoolean>;
    isPending: z.ZodOptional<z.ZodBoolean>;
    hasError: z.ZodOptional<z.ZodBoolean>;
    cellValueType: z.ZodNativeEnum<typeof TeableCellValueType>;
    isMultipleCellValue: z.ZodOptional<z.ZodBoolean>;
    dbFieldType: z.ZodNativeEnum<typeof TeableDbFieldType>;
    dbFieldName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    type: TeableFieldType;
    options: {} | {} | {
        relationship: import("@/types").TeableRelationship;
        foreignTableId: string;
        lookupFieldId: string;
        fkHostTableName: string;
        selfKeyName: string;
        foreignKeyName: string;
        isOneWay?: boolean | undefined;
        symmetricFieldId?: string | undefined;
    } | {} | {
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
            color: import("@/types").Colors;
            showValue: boolean;
            maxValue: number;
        } | {
            type: import("./show-as").MultiNumberDisplayType;
            color: import("@/types").Colors;
        } | {
            type: import("./show-as").SingleLineTextDisplayType;
        } | undefined;
    } | {
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
            color: import("@/types").Colors;
            showValue: boolean;
            maxValue: number;
        } | {
            type: import("./show-as").MultiNumberDisplayType;
            color: import("@/types").Colors;
        } | {
            type: import("./show-as").SingleLineTextDisplayType;
        } | undefined;
    } | {
        formatting: {
            date: string;
            timeZone: string;
            time: import("./formatting.shcema").TimeFormatting;
        };
        defaultValue?: "now" | undefined;
    } | {
        showAs?: {
            type: import("./show-as").SingleLineTextDisplayType;
        } | undefined;
    } | {
        color: import("@/types").Colors.RedBright | import("@/types").Colors.TealBright | import("@/types").Colors.YellowBright;
        icon: import("./derivate").RatingIcon;
        max: number;
    } | {
        isMultiple: boolean;
        shouldNotify: boolean;
    } | {
        choices: {
            id: string;
            name: string;
            color: import("@/types").Colors;
        }[];
    } | {
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
            color: import("@/types").Colors;
            showValue: boolean;
            maxValue: number;
        } | {
            type: import("./show-as").MultiNumberDisplayType;
            color: import("@/types").Colors;
        } | undefined;
    } | {
        expression: "AUTO_NUMBER()";
    } | {
        expression: "CREATED_TIME()";
        formatting: {
            date: string;
            timeZone: string;
            time: import("./formatting.shcema").TimeFormatting;
        };
    } | {
        expression: "LAST_MODIFIED_TIME()";
        formatting: {
            date: string;
            timeZone: string;
            time: import("./formatting").TimeFormatting;
        };
    };
    cellValueType: TeableCellValueType;
    dbFieldType: TeableDbFieldType;
    dbFieldName: string;
    description?: string | undefined;
    unique?: boolean | undefined;
    isLookup?: boolean | undefined;
    lookupOptions?: {
        relationship: import("@/types").TeableRelationship;
        foreignTableId: string;
        lookupFieldId: string;
        fkHostTableName: string;
        selfKeyName: string;
        foreignKeyName: string;
        linkFieldId: string;
    } | undefined;
    notNull?: boolean | undefined;
    isPrimary?: boolean | undefined;
    isComputed?: boolean | undefined;
    isPending?: boolean | undefined;
    hasError?: boolean | undefined;
    isMultipleCellValue?: boolean | undefined;
}, {
    id: string;
    name: string;
    type: TeableFieldType;
    options: {} | {} | {
        relationship: import("@/types").TeableRelationship;
        foreignTableId: string;
        lookupFieldId: string;
        fkHostTableName: string;
        selfKeyName: string;
        foreignKeyName: string;
        isOneWay?: boolean | undefined;
        symmetricFieldId?: string | undefined;
    } | {} | {
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
            color: import("@/types").Colors;
            showValue: boolean;
            maxValue: number;
        } | {
            type: import("./show-as").MultiNumberDisplayType;
            color: import("@/types").Colors;
        } | {
            type: import("./show-as").SingleLineTextDisplayType;
        } | undefined;
    } | {
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
            color: import("@/types").Colors;
            showValue: boolean;
            maxValue: number;
        } | {
            type: import("./show-as").MultiNumberDisplayType;
            color: import("@/types").Colors;
        } | {
            type: import("./show-as").SingleLineTextDisplayType;
        } | undefined;
    } | {
        formatting: {
            date: string;
            timeZone: string;
            time: import("./formatting.shcema").TimeFormatting;
        };
        defaultValue?: "now" | undefined;
    } | {
        showAs?: {
            type: import("./show-as").SingleLineTextDisplayType;
        } | undefined;
    } | {
        color: import("@/types").Colors.RedBright | import("@/types").Colors.TealBright | import("@/types").Colors.YellowBright;
        icon: import("./derivate").RatingIcon;
        max: number;
    } | {
        isMultiple: boolean;
        shouldNotify: boolean;
    } | {
        choices: {
            id: string;
            name: string;
            color: import("@/types").Colors;
        }[];
    } | {
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
            color: import("@/types").Colors;
            showValue: boolean;
            maxValue: number;
        } | {
            type: import("./show-as").MultiNumberDisplayType;
            color: import("@/types").Colors;
        } | undefined;
    } | {
        expression: "AUTO_NUMBER()";
    } | {
        expression: "CREATED_TIME()";
        formatting: {
            date: string;
            timeZone: string;
            time: import("./formatting.shcema").TimeFormatting;
        };
    } | {
        expression: "LAST_MODIFIED_TIME()";
        formatting: {
            date: string;
            timeZone: string;
            time: import("./formatting").TimeFormatting;
        };
    };
    cellValueType: TeableCellValueType;
    dbFieldType: TeableDbFieldType;
    dbFieldName: string;
    description?: string | undefined;
    unique?: boolean | undefined;
    isLookup?: boolean | undefined;
    lookupOptions?: {
        relationship: import("@/types").TeableRelationship;
        foreignTableId: string;
        lookupFieldId: string;
        fkHostTableName: string;
        selfKeyName: string;
        foreignKeyName: string;
        linkFieldId: string;
    } | undefined;
    notNull?: boolean | undefined;
    isPrimary?: boolean | undefined;
    isComputed?: boolean | undefined;
    isPending?: boolean | undefined;
    hasError?: boolean | undefined;
    isMultipleCellValue?: boolean | undefined;
}>;
export type IFieldVo = z.infer<typeof fieldVoSchema>;
export declare const unionFieldCellValueSchema: z.ZodUnion<[z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    path: z.ZodString;
    token: z.ZodString;
    size: z.ZodNumber;
    mimetype: z.ZodString;
    presignedUrl: z.ZodOptional<z.ZodString>;
    width: z.ZodOptional<z.ZodNumber>;
    height: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    path: string;
    size: number;
    token: string;
    mimetype: string;
    height?: number | undefined;
    width?: number | undefined;
    presignedUrl?: string | undefined;
}, {
    id: string;
    name: string;
    path: string;
    size: number;
    token: string;
    mimetype: string;
    height?: number | undefined;
    width?: number | undefined;
    presignedUrl?: string | undefined;
}>, "many">, z.ZodNumber, z.ZodBoolean, z.ZodString, z.ZodAny, z.ZodObject<{
    id: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    title?: string | undefined;
}, {
    id: string;
    title?: string | undefined;
}>, z.ZodString, z.ZodNumber, z.ZodObject<{
    id: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    avatarUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    title?: string | undefined;
    avatarUrl?: string | null | undefined;
}, {
    id: string;
    title?: string | undefined;
    avatarUrl?: string | null | undefined;
}>, z.ZodArray<z.ZodString, "many">, z.ZodAny]>;
export type IFieldCellValueVo = z.infer<typeof unionFieldCellValueSchema>;
//# sourceMappingURL=field.vo.schema.d.ts.map