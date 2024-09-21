import { z } from 'zod';
export declare const tableFullVoSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    dbTableName: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
    fields: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        type: z.ZodNativeEnum<typeof import("@/types").TeableFieldType>;
        description: z.ZodOptional<z.ZodString>;
        options: z.ZodUnion<[z.ZodUnion<[z.ZodObject<{
            expression: z.ZodEnum<["countall({values})", "counta({values})", "count({values})", "sum({values})", "max({values})", "min({values})", "and({values})", "or({values})", "xor({values})", "array_join({values})", "array_unique({values})", "array_compact({values})", "concatenate({values})"]>;
            formatting: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                date: z.ZodString;
                time: z.ZodNativeEnum<typeof import("./fields").TimeFormatting>;
                timeZone: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            }, {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            }>, z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
                precision: z.ZodNumber;
            }, {
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Decimal>;
            }>, "strip", z.ZodTypeAny, {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            }, {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                precision: z.ZodNumber;
            }, {
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Percent>;
            }>, "strip", z.ZodTypeAny, {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            }, {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                precision: z.ZodNumber;
            }, {
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Currency>;
                symbol: z.ZodString;
            }>, "strip", z.ZodTypeAny, {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            }, {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            }>]>]>>;
            showAs: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").SingleLineTextDisplayType>;
            }, "strict", z.ZodTypeAny, {
                type: import("./fields").SingleLineTextDisplayType;
            }, {
                type: import("./fields").SingleLineTextDisplayType;
            }>, z.ZodUnion<[z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").SingleNumberDisplayType>;
                color: z.ZodNativeEnum<typeof import("@/types").Colors>;
                showValue: z.ZodBoolean;
                maxValue: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            }, {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            }>, z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").MultiNumberDisplayType>;
                color: z.ZodNativeEnum<typeof import("@/types").Colors>;
            }, "strict", z.ZodTypeAny, {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            }, {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            }>]>]>>;
        }, "strict", z.ZodTypeAny, {
            expression: "countall({values})" | "counta({values})" | "count({values})" | "sum({values})" | "max({values})" | "min({values})" | "and({values})" | "or({values})" | "xor({values})" | "array_join({values})" | "array_unique({values})" | "array_compact({values})" | "concatenate({values})";
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        }, {
            expression: "countall({values})" | "counta({values})" | "count({values})" | "sum({values})" | "max({values})" | "min({values})" | "and({values})" | "or({values})" | "xor({values})" | "array_join({values})" | "array_unique({values})" | "array_compact({values})" | "concatenate({values})";
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        }>, z.ZodObject<{
            expression: z.ZodString;
            formatting: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                date: z.ZodString;
                time: z.ZodNativeEnum<typeof import("./fields").TimeFormatting>;
                timeZone: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            }, {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            }>, z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
                precision: z.ZodNumber;
            }, {
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Decimal>;
            }>, "strip", z.ZodTypeAny, {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            }, {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                precision: z.ZodNumber;
            }, {
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Percent>;
            }>, "strip", z.ZodTypeAny, {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            }, {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                precision: z.ZodNumber;
            }, {
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Currency>;
                symbol: z.ZodString;
            }>, "strip", z.ZodTypeAny, {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            }, {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            }>]>]>>;
            showAs: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").SingleLineTextDisplayType>;
            }, "strict", z.ZodTypeAny, {
                type: import("./fields").SingleLineTextDisplayType;
            }, {
                type: import("./fields").SingleLineTextDisplayType;
            }>, z.ZodUnion<[z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").SingleNumberDisplayType>;
                color: z.ZodNativeEnum<typeof import("@/types").Colors>;
                showValue: z.ZodBoolean;
                maxValue: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            }, {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            }>, z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").MultiNumberDisplayType>;
                color: z.ZodNativeEnum<typeof import("@/types").Colors>;
            }, "strict", z.ZodTypeAny, {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            }, {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            }>]>]>>;
        }, "strict", z.ZodTypeAny, {
            expression: string;
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        }, {
            expression: string;
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
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
                time: z.ZodNativeEnum<typeof import("./fields/formatting.shcema").TimeFormatting>;
                timeZone: z.ZodEffects<z.ZodString, string, string>;
            }, "strip", z.ZodTypeAny, {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            }, {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            }>;
            defaultValue: z.ZodOptional<z.ZodEnum<["now"]>>;
        }, "strict", z.ZodTypeAny, {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
            defaultValue?: "now" | undefined;
        }, {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
            defaultValue?: "now" | undefined;
        }>, z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>, z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>, z.ZodObject<{
            showAs: z.ZodOptional<z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").SingleLineTextDisplayType>;
            }, "strip", z.ZodTypeAny, {
                type: import("./fields").SingleLineTextDisplayType;
            }, {
                type: import("./fields").SingleLineTextDisplayType;
            }>>;
        }, "strict", z.ZodTypeAny, {
            showAs?: {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        }, {
            showAs?: {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        }>, z.ZodObject<{
            icon: z.ZodNativeEnum<typeof import("./fields").RatingIcon>;
            color: z.ZodEnum<[import("@/types").Colors.YellowBright, import("@/types").Colors.RedBright, import("@/types").Colors.TealBright]>;
            max: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            color: import("@/types").Colors.RedBright | import("@/types").Colors.TealBright | import("@/types").Colors.YellowBright;
            icon: import("./fields").RatingIcon;
            max: number;
        }, {
            color: import("@/types").Colors.RedBright | import("@/types").Colors.TealBright | import("@/types").Colors.YellowBright;
            icon: import("./fields").RatingIcon;
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
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Decimal>;
            }>, "strip", z.ZodTypeAny, {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            }, {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                precision: z.ZodNumber;
            }, {
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Percent>;
            }>, "strip", z.ZodTypeAny, {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            }, {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                precision: z.ZodNumber;
            }, {
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Currency>;
                symbol: z.ZodString;
            }>, "strip", z.ZodTypeAny, {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            }, {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            }>]>;
            showAs: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").SingleNumberDisplayType>;
                color: z.ZodNativeEnum<typeof import("@/types").Colors>;
                showValue: z.ZodBoolean;
                maxValue: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            }, {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            }>, z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").MultiNumberDisplayType>;
                color: z.ZodNativeEnum<typeof import("@/types").Colors>;
            }, "strict", z.ZodTypeAny, {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            }, {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            }>]>>;
        }, "strict", z.ZodTypeAny, {
            formatting: {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            };
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | undefined;
        }, {
            formatting: {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            };
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
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
                time: z.ZodNativeEnum<typeof import("./fields/formatting.shcema").TimeFormatting>;
                timeZone: z.ZodEffects<z.ZodString, string, string>;
            }, "strip", z.ZodTypeAny, {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            }, {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            }>;
        }, "strict", z.ZodTypeAny, {
            expression: "CREATED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
        }, {
            expression: "CREATED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
        }>, z.ZodObject<{
            expression: z.ZodLiteral<"LAST_MODIFIED_TIME()">;
            formatting: z.ZodObject<{
                date: z.ZodString;
                time: z.ZodNativeEnum<typeof import("./fields").TimeFormatting>;
                timeZone: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            }, {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            }>;
        }, "strict", z.ZodTypeAny, {
            expression: "LAST_MODIFIED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            };
        }, {
            expression: "LAST_MODIFIED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
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
        cellValueType: z.ZodNativeEnum<typeof import("@/types").TeableCellValueType>;
        isMultipleCellValue: z.ZodOptional<z.ZodBoolean>;
        dbFieldType: z.ZodNativeEnum<typeof import("@/types").TeableDbFieldType>;
        dbFieldName: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        type: import("@/types").TeableFieldType;
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
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            expression: string;
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
            defaultValue?: "now" | undefined;
        } | {
            showAs?: {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            color: import("@/types").Colors.RedBright | import("@/types").Colors.TealBright | import("@/types").Colors.YellowBright;
            icon: import("./fields").RatingIcon;
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
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            };
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | undefined;
        } | {
            expression: "AUTO_NUMBER()";
        } | {
            expression: "CREATED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
        } | {
            expression: "LAST_MODIFIED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            };
        };
        cellValueType: import("@/types").TeableCellValueType;
        dbFieldType: import("@/types").TeableDbFieldType;
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
        type: import("@/types").TeableFieldType;
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
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            expression: string;
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
            defaultValue?: "now" | undefined;
        } | {
            showAs?: {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            color: import("@/types").Colors.RedBright | import("@/types").Colors.TealBright | import("@/types").Colors.YellowBright;
            icon: import("./fields").RatingIcon;
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
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            };
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | undefined;
        } | {
            expression: "AUTO_NUMBER()";
        } | {
            expression: "CREATED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
        } | {
            expression: "LAST_MODIFIED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            };
        };
        cellValueType: import("@/types").TeableCellValueType;
        dbFieldType: import("@/types").TeableDbFieldType;
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
    }>, "many">;
    views: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        type: z.ZodNativeEnum<typeof import("@/types").TeableViewTypeEnum>;
        description: z.ZodOptional<z.ZodString>;
        order: z.ZodNumber;
        options: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
            rowHeight: z.ZodOptional<z.ZodNativeEnum<typeof import("@/types").RowHeightLevel>>;
            frozenColumnCount: z.ZodOptional<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            rowHeight?: import("@/types").RowHeightLevel | undefined;
            frozenColumnCount?: number | undefined;
        }, {
            rowHeight?: import("@/types").RowHeightLevel | undefined;
            frozenColumnCount?: number | undefined;
        }>, z.ZodObject<{
            groupingFieldId: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            groupingFieldId: string;
        }, {
            groupingFieldId: string;
        }>, z.ZodObject<{
            coverUrl: z.ZodOptional<z.ZodString>;
            logoUrl: z.ZodOptional<z.ZodString>;
            submitLabel: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            coverUrl?: string | undefined;
            logoUrl?: string | undefined;
            submitLabel?: string | undefined;
        }, {
            coverUrl?: string | undefined;
            logoUrl?: string | undefined;
            submitLabel?: string | undefined;
        }>]>>;
        sort: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            sortObjs: z.ZodArray<z.ZodObject<{
                fieldId: z.ZodString;
                order: z.ZodNativeEnum<typeof import("./views").SortFunc>;
            }, "strip", z.ZodTypeAny, {
                fieldId: string;
                order: import("./views").SortFunc;
            }, {
                fieldId: string;
                order: import("./views").SortFunc;
            }>, "many">;
            manualSort: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            sortObjs: {
                fieldId: string;
                order: import("./views").SortFunc;
            }[];
            manualSort?: boolean | undefined;
        }, {
            sortObjs: {
                fieldId: string;
                order: import("./views").SortFunc;
            }[];
            manualSort?: boolean | undefined;
        }>>>;
        filter: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            filterSet: z.ZodArray<z.ZodUnion<[z.ZodUnion<[z.ZodObject<{
                isSymbol: z.ZodOptional<z.ZodLiteral<false>>;
                fieldId: z.ZodString;
                value: z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "atleastone">, z.ZodObject<{
                    mode: z.ZodUnion<[z.ZodLiteral<"today">, z.ZodLiteral<"tomorrow">, z.ZodLiteral<"yesterday">, z.ZodLiteral<"oneWeekAgo">, z.ZodLiteral<"oneWeekFromNow">, z.ZodLiteral<"oneMonthAgo">, z.ZodLiteral<"oneMonthFromNow">, z.ZodLiteral<"daysAgo">, z.ZodLiteral<"daysFromNow">, z.ZodLiteral<"exactDate">, z.ZodLiteral<"pastWeek">, z.ZodLiteral<"pastMonth">, z.ZodLiteral<"pastYear">, z.ZodLiteral<"nextWeek">, z.ZodLiteral<"nextMonth">, z.ZodLiteral<"nextYear">, z.ZodLiteral<"pastNumberOfDays">, z.ZodLiteral<"nextNumberOfDays">]>;
                    numberOfDays: z.ZodOptional<z.ZodNumber>;
                    exactDate: z.ZodOptional<z.ZodString>;
                    timeZone: z.ZodEnum<["utc", "Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", "Africa/Asmara", "Africa/Bamako", "Africa/Bangui", "Africa/Banjul", "Africa/Bissau", "Africa/Blantyre", "Africa/Brazzaville", "Africa/Bujumbura", "Africa/Cairo", "Africa/Casablanca", "Africa/Ceuta", "Africa/Conakry", "Africa/Dakar", "Africa/Dar_es_Salaam", "Africa/Djibouti", "Africa/Douala", "Africa/El_Aaiun", "Africa/Freetown", "Africa/Gaborone", "Africa/Harare", "Africa/Johannesburg", "Africa/Juba", "Africa/Kampala", "Africa/Khartoum", "Africa/Kigali", "Africa/Kinshasa", "Africa/Lagos", "Africa/Libreville", "Africa/Lome", "Africa/Luanda", "Africa/Lubumbashi", "Africa/Lusaka", "Africa/Malabo", "Africa/Maputo", "Africa/Maseru", "Africa/Mbabane", "Africa/Mogadishu", "Africa/Monrovia", "Africa/Nairobi", "Africa/Ndjamena", "Africa/Niamey", "Africa/Nouakchott", "Africa/Ouagadougou", "Africa/Porto-Novo", "Africa/Sao_Tome", "Africa/Tripoli", "Africa/Tunis", "Africa/Windhoek", "America/Adak", "America/Anchorage", "America/Anguilla", "America/Antigua", "America/Araguaina", "America/Argentina/Buenos_Aires", "America/Argentina/Catamarca", "America/Argentina/Cordoba", "America/Argentina/Jujuy", "America/Argentina/La_Rioja", "America/Argentina/Mendoza", "America/Argentina/Rio_Gallegos", "America/Argentina/Salta", "America/Argentina/San_Juan", "America/Argentina/San_Luis", "America/Argentina/Tucuman", "America/Argentina/Ushuaia", "America/Aruba", "America/Asuncion", "America/Atikokan", "America/Bahia", "America/Bahia_Banderas", "America/Barbados", "America/Belem", "America/Belize", "America/Blanc-Sablon", "America/Boa_Vista", "America/Bogota", "America/Boise", "America/Cambridge_Bay", "America/Campo_Grande", "America/Cancun", "America/Caracas", "America/Cayenne", "America/Cayman", "America/Chicago", "America/Chihuahua", "America/Costa_Rica", "America/Creston", "America/Cuiaba", "America/Curacao", "America/Danmarkshavn", "America/Dawson", "America/Dawson_Creek", "America/Denver", "America/Detroit", "America/Dominica", "America/Edmonton", "America/Eirunepe", "America/El_Salvador", "America/Fort_Nelson", "America/Fortaleza", "America/Glace_Bay", "America/Godthab", "America/Goose_Bay", "America/Grand_Turk", "America/Grenada", "America/Guadeloupe", "America/Guatemala", "America/Guayaquil", "America/Guyana", "America/Halifax", "America/Havana", "America/Hermosillo", "America/Indiana/Indianapolis", "America/Indiana/Knox", "America/Indiana/Marengo", "America/Indiana/Petersburg", "America/Indiana/Tell_City", "America/Indiana/Vevay", "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Inuvik", "America/Iqaluit", "America/Jamaica", "America/Juneau", "America/Kentucky/Louisville", "America/Kentucky/Monticello", "America/Kralendijk", "America/La_Paz", "America/Lima", "America/Los_Angeles", "America/Lower_Princes", "America/Maceio", "America/Managua", "America/Manaus", "America/Marigot", "America/Martinique", "America/Matamoros", "America/Mazatlan", "America/Menominee", "America/Merida", "America/Metlakatla", "America/Mexico_City", "America/Miquelon", "America/Moncton", "America/Monterrey", "America/Montevideo", "America/Montserrat", "America/Nassau", "America/New_York", "America/Nipigon", "America/Nome", "America/Noronha", "America/North_Dakota/Beulah", "America/North_Dakota/Center", "America/North_Dakota/New_Salem", "America/Nuuk", "America/Ojinaga", "America/Panama", "America/Pangnirtung", "America/Paramaribo", "America/Phoenix", "America/Port-au-Prince", "America/Port_of_Spain", "America/Porto_Velho", "America/Puerto_Rico", "America/Punta_Arenas", "America/Rainy_River", "America/Rankin_Inlet", "America/Recife", "America/Regina", "America/Resolute", "America/Rio_Branco", "America/Santarem", "America/Santiago", "America/Santo_Domingo", "America/Sao_Paulo", "America/Scoresbysund", "America/Sitka", "America/St_Barthelemy", "America/St_Johns", "America/St_Kitts", "America/St_Lucia", "America/St_Thomas", "America/St_Vincent", "America/Swift_Current", "America/Tegucigalpa", "America/Thule", "America/Thunder_Bay", "America/Tijuana", "America/Toronto", "America/Tortola", "America/Vancouver", "America/Whitehorse", "America/Winnipeg", "America/Yakutat", "America/Yellowknife", "Antarctica/Casey", "Antarctica/Davis", "Antarctica/DumontDUrville", "Antarctica/Macquarie", "Antarctica/Mawson", "Antarctica/McMurdo", "Antarctica/Palmer", "Antarctica/Rothera", "Antarctica/Syowa", "Antarctica/Troll", "Antarctica/Vostok", "Arctic/Longyearbyen", "Asia/Aden", "Asia/Almaty", "Asia/Amman", "Asia/Anadyr", "Asia/Aqtau", "Asia/Aqtobe", "Asia/Ashgabat", "Asia/Atyrau", "Asia/Baghdad", "Asia/Bahrain", "Asia/Baku", "Asia/Bangkok", "Asia/Barnaul", "Asia/Beirut", "Asia/Bishkek", "Asia/Brunei", "Asia/Chita", "Asia/Choibalsan", "Asia/Colombo", "Asia/Damascus", "Asia/Dhaka", "Asia/Dili", "Asia/Dubai", "Asia/Dushanbe", "Asia/Famagusta", "Asia/Gaza", "Asia/Hebron", "Asia/Ho_Chi_Minh", "Asia/Hong_Kong", "Asia/Hovd", "Asia/Irkutsk", "Asia/Istanbul", "Asia/Jakarta", "Asia/Jayapura", "Asia/Jerusalem", "Asia/Kabul", "Asia/Kamchatka", "Asia/Karachi", "Asia/Kathmandu", "Asia/Khandyga", "Asia/Kolkata", "Asia/Krasnoyarsk", "Asia/Kuala_Lumpur", "Asia/Kuching", "Asia/Kuwait", "Asia/Macau", "Asia/Magadan", "Asia/Makassar", "Asia/Manila", "Asia/Muscat", "Asia/Nicosia", "Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk", "Asia/Oral", "Asia/Phnom_Penh", "Asia/Pontianak", "Asia/Pyongyang", "Asia/Qatar", "Asia/Qostanay", "Asia/Qyzylorda", "Asia/Rangoon", "Asia/Riyadh", "Asia/Sakhalin", "Asia/Samarkand", "Asia/Seoul", "Asia/Shanghai", "Asia/Singapore", "Asia/Srednekolymsk", "Asia/Taipei", "Asia/Tashkent", "Asia/Tbilisi", "Asia/Tehran", "Asia/Thimphu", "Asia/Tokyo", "Asia/Tomsk", "Asia/Ulaanbaatar", "Asia/Urumqi", "Asia/Ust-Nera", "Asia/Vientiane", "Asia/Vladivostok", "Asia/Yakutsk", "Asia/Yangon", "Asia/Yekaterinburg", "Asia/Yerevan", "Atlantic/Azores", "Atlantic/Bermuda", "Atlantic/Canary", "Atlantic/Cape_Verde", "Atlantic/Faroe", "Atlantic/Madeira", "Atlantic/Reykjavik", "Atlantic/South_Georgia", "Atlantic/St_Helena", "Atlantic/Stanley", "Australia/Adelaide", "Australia/Brisbane", "Australia/Broken_Hill", "Australia/Currie", "Australia/Darwin", "Australia/Eucla", "Australia/Hobart", "Australia/Lindeman", "Australia/Lord_Howe", "Australia/Melbourne", "Australia/Perth", "Australia/Sydney", "Europe/Amsterdam", "Europe/Andorra", "Europe/Astrakhan", "Europe/Athens", "Europe/Belgrade", "Europe/Berlin", "Europe/Bratislava", "Europe/Brussels", "Europe/Bucharest", "Europe/Budapest", "Europe/Busingen", "Europe/Chisinau", "Europe/Copenhagen", "Europe/Dublin", "Europe/Gibraltar", "Europe/Guernsey", "Europe/Helsinki", "Europe/Isle_of_Man", "Europe/Istanbul", "Europe/Jersey", "Europe/Kaliningrad", "Europe/Kiev", "Europe/Kirov", "Europe/Lisbon", "Europe/Ljubljana", "Europe/London", "Europe/Luxembourg", "Europe/Madrid", "Europe/Malta", "Europe/Mariehamn", "Europe/Minsk", "Europe/Monaco", "Europe/Moscow", "Europe/Nicosia", "Europe/Oslo", "Europe/Paris", "Europe/Podgorica", "Europe/Prague", "Europe/Riga", "Europe/Rome", "Europe/Samara", "Europe/San_Marino", "Europe/Sarajevo", "Europe/Saratov", "Europe/Simferopol", "Europe/Skopje", "Europe/Sofia", "Europe/Stockholm", "Europe/Tallinn", "Europe/Tirane", "Europe/Ulyanovsk", "Europe/Uzhgorod", "Europe/Vaduz", "Europe/Vatican", "Europe/Vienna", "Europe/Vilnius", "Europe/Volgograd", "Europe/Warsaw", "Europe/Zagreb", "Europe/Zaporozhye", "Europe/Zurich", "Indian/Antananarivo", "Indian/Chagos", "Indian/Christmas", "Indian/Cocos", "Indian/Comoro", "Indian/Kerguelen", "Indian/Mahe", "Indian/Maldives", "Indian/Mauritius", "Indian/Mayotte", "Indian/Reunion", "Pacific/Apia", "Pacific/Auckland", "Pacific/Bougainville", "Pacific/Chatham", "Pacific/Chuuk", "Pacific/Easter", "Pacific/Efate", "Pacific/Enderbury", "Pacific/Fakaofo", "Pacific/Fiji", "Pacific/Funafuti", "Pacific/Galapagos", "Pacific/Gambier", "Pacific/Guadalcanal", "Pacific/Guam", "Pacific/Honolulu", "Pacific/Kanton", "Pacific/Kiritimati", "Pacific/Kosrae", "Pacific/Kwajalein", "Pacific/Majuro", "Pacific/Marquesas", "Pacific/Midway", "Pacific/Nauru", "Pacific/Niue", "Pacific/Norfolk", "Pacific/Noumea", "Pacific/Pago_Pago", "Pacific/Palau", "Pacific/Pitcairn", "Pacific/Pohnpei", "Pacific/Port_Moresby", "Pacific/Rarotonga", "Pacific/Saipan", "Pacific/Tahiti", "Pacific/Tarawa", "Pacific/Tongatapu", "Pacific/Wake", "Pacific/Wallis"]>;
                }, "strip", z.ZodTypeAny, {
                    timeZone: "utc" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fort_Nelson" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis";
                    mode: "today" | "tomorrow" | "yesterday" | "oneWeekAgo" | "oneWeekFromNow" | "oneMonthAgo" | "oneMonthFromNow" | "daysAgo" | "daysFromNow" | "exactDate" | "pastWeek" | "pastMonth" | "pastYear" | "nextWeek" | "nextMonth" | "nextYear" | "pastNumberOfDays" | "nextNumberOfDays";
                    exactDate?: string | undefined;
                    numberOfDays?: number | undefined;
                }, {
                    timeZone: "utc" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fort_Nelson" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis";
                    mode: "today" | "tomorrow" | "yesterday" | "oneWeekAgo" | "oneWeekFromNow" | "oneMonthAgo" | "oneMonthFromNow" | "daysAgo" | "daysFromNow" | "exactDate" | "pastWeek" | "pastMonth" | "pastYear" | "nextWeek" | "nextMonth" | "nextYear" | "pastNumberOfDays" | "nextNumberOfDays";
                    exactDate?: string | undefined;
                    numberOfDays?: number | undefined;
                }>]>>;
                operator: z.ZodUnion<[z.ZodLiteral<"is">, z.ZodLiteral<"isNot">, z.ZodLiteral<"contains">, z.ZodLiteral<"doesNotContain">, z.ZodLiteral<"isGreater">, z.ZodLiteral<"isGreaterEqual">, z.ZodLiteral<"isLess">, z.ZodLiteral<"isLessEqual">, z.ZodLiteral<"isEmpty">, z.ZodLiteral<"isNotEmpty">, z.ZodLiteral<"isAnyOf">, z.ZodLiteral<"isNoneOf">, z.ZodLiteral<"hasAnyOf">, z.ZodLiteral<"hasAllOf">, z.ZodLiteral<"hasNoneOf">, z.ZodLiteral<"isExactly">, z.ZodLiteral<"isWithIn">, z.ZodLiteral<"isBefore">, z.ZodLiteral<"isAfter">, z.ZodLiteral<"isOnOrBefore">, z.ZodLiteral<"isOnOrAfter">]>;
            }, "strip", z.ZodTypeAny, {
                value: string | number | boolean | {
                    timeZone: "utc" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fort_Nelson" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis";
                    mode: "today" | "tomorrow" | "yesterday" | "oneWeekAgo" | "oneWeekFromNow" | "oneMonthAgo" | "oneMonthFromNow" | "daysAgo" | "daysFromNow" | "exactDate" | "pastWeek" | "pastMonth" | "pastYear" | "nextWeek" | "nextMonth" | "nextYear" | "pastNumberOfDays" | "nextNumberOfDays";
                    exactDate?: string | undefined;
                    numberOfDays?: number | undefined;
                } | [string | number | boolean, ...(string | number | boolean)[]] | null;
                fieldId: string;
                operator: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | "isGreater" | "isGreaterEqual" | "isLess" | "isLessEqual" | "isAnyOf" | "isNoneOf" | "hasAnyOf" | "hasAllOf" | "hasNoneOf" | "isExactly" | "isWithIn" | "isBefore" | "isAfter" | "isOnOrBefore" | "isOnOrAfter";
                isSymbol?: false | undefined;
            }, {
                value: string | number | boolean | {
                    timeZone: "utc" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fort_Nelson" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis";
                    mode: "today" | "tomorrow" | "yesterday" | "oneWeekAgo" | "oneWeekFromNow" | "oneMonthAgo" | "oneMonthFromNow" | "daysAgo" | "daysFromNow" | "exactDate" | "pastWeek" | "pastMonth" | "pastYear" | "nextWeek" | "nextMonth" | "nextYear" | "pastNumberOfDays" | "nextNumberOfDays";
                    exactDate?: string | undefined;
                    numberOfDays?: number | undefined;
                } | [string | number | boolean, ...(string | number | boolean)[]] | null;
                fieldId: string;
                operator: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | "isGreater" | "isGreaterEqual" | "isLess" | "isLessEqual" | "isAnyOf" | "isNoneOf" | "hasAnyOf" | "hasAllOf" | "hasNoneOf" | "isExactly" | "isWithIn" | "isBefore" | "isAfter" | "isOnOrBefore" | "isOnOrAfter";
                isSymbol?: false | undefined;
            }>, z.ZodObject<{
                isSymbol: z.ZodLiteral<true>;
                fieldId: z.ZodString;
                value: z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "atleastone">, z.ZodObject<{
                    mode: z.ZodUnion<[z.ZodLiteral<"today">, z.ZodLiteral<"tomorrow">, z.ZodLiteral<"yesterday">, z.ZodLiteral<"oneWeekAgo">, z.ZodLiteral<"oneWeekFromNow">, z.ZodLiteral<"oneMonthAgo">, z.ZodLiteral<"oneMonthFromNow">, z.ZodLiteral<"daysAgo">, z.ZodLiteral<"daysFromNow">, z.ZodLiteral<"exactDate">, z.ZodLiteral<"pastWeek">, z.ZodLiteral<"pastMonth">, z.ZodLiteral<"pastYear">, z.ZodLiteral<"nextWeek">, z.ZodLiteral<"nextMonth">, z.ZodLiteral<"nextYear">, z.ZodLiteral<"pastNumberOfDays">, z.ZodLiteral<"nextNumberOfDays">]>;
                    numberOfDays: z.ZodOptional<z.ZodNumber>;
                    exactDate: z.ZodOptional<z.ZodString>;
                    timeZone: z.ZodEnum<["utc", "Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", "Africa/Asmara", "Africa/Bamako", "Africa/Bangui", "Africa/Banjul", "Africa/Bissau", "Africa/Blantyre", "Africa/Brazzaville", "Africa/Bujumbura", "Africa/Cairo", "Africa/Casablanca", "Africa/Ceuta", "Africa/Conakry", "Africa/Dakar", "Africa/Dar_es_Salaam", "Africa/Djibouti", "Africa/Douala", "Africa/El_Aaiun", "Africa/Freetown", "Africa/Gaborone", "Africa/Harare", "Africa/Johannesburg", "Africa/Juba", "Africa/Kampala", "Africa/Khartoum", "Africa/Kigali", "Africa/Kinshasa", "Africa/Lagos", "Africa/Libreville", "Africa/Lome", "Africa/Luanda", "Africa/Lubumbashi", "Africa/Lusaka", "Africa/Malabo", "Africa/Maputo", "Africa/Maseru", "Africa/Mbabane", "Africa/Mogadishu", "Africa/Monrovia", "Africa/Nairobi", "Africa/Ndjamena", "Africa/Niamey", "Africa/Nouakchott", "Africa/Ouagadougou", "Africa/Porto-Novo", "Africa/Sao_Tome", "Africa/Tripoli", "Africa/Tunis", "Africa/Windhoek", "America/Adak", "America/Anchorage", "America/Anguilla", "America/Antigua", "America/Araguaina", "America/Argentina/Buenos_Aires", "America/Argentina/Catamarca", "America/Argentina/Cordoba", "America/Argentina/Jujuy", "America/Argentina/La_Rioja", "America/Argentina/Mendoza", "America/Argentina/Rio_Gallegos", "America/Argentina/Salta", "America/Argentina/San_Juan", "America/Argentina/San_Luis", "America/Argentina/Tucuman", "America/Argentina/Ushuaia", "America/Aruba", "America/Asuncion", "America/Atikokan", "America/Bahia", "America/Bahia_Banderas", "America/Barbados", "America/Belem", "America/Belize", "America/Blanc-Sablon", "America/Boa_Vista", "America/Bogota", "America/Boise", "America/Cambridge_Bay", "America/Campo_Grande", "America/Cancun", "America/Caracas", "America/Cayenne", "America/Cayman", "America/Chicago", "America/Chihuahua", "America/Costa_Rica", "America/Creston", "America/Cuiaba", "America/Curacao", "America/Danmarkshavn", "America/Dawson", "America/Dawson_Creek", "America/Denver", "America/Detroit", "America/Dominica", "America/Edmonton", "America/Eirunepe", "America/El_Salvador", "America/Fort_Nelson", "America/Fortaleza", "America/Glace_Bay", "America/Godthab", "America/Goose_Bay", "America/Grand_Turk", "America/Grenada", "America/Guadeloupe", "America/Guatemala", "America/Guayaquil", "America/Guyana", "America/Halifax", "America/Havana", "America/Hermosillo", "America/Indiana/Indianapolis", "America/Indiana/Knox", "America/Indiana/Marengo", "America/Indiana/Petersburg", "America/Indiana/Tell_City", "America/Indiana/Vevay", "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Inuvik", "America/Iqaluit", "America/Jamaica", "America/Juneau", "America/Kentucky/Louisville", "America/Kentucky/Monticello", "America/Kralendijk", "America/La_Paz", "America/Lima", "America/Los_Angeles", "America/Lower_Princes", "America/Maceio", "America/Managua", "America/Manaus", "America/Marigot", "America/Martinique", "America/Matamoros", "America/Mazatlan", "America/Menominee", "America/Merida", "America/Metlakatla", "America/Mexico_City", "America/Miquelon", "America/Moncton", "America/Monterrey", "America/Montevideo", "America/Montserrat", "America/Nassau", "America/New_York", "America/Nipigon", "America/Nome", "America/Noronha", "America/North_Dakota/Beulah", "America/North_Dakota/Center", "America/North_Dakota/New_Salem", "America/Nuuk", "America/Ojinaga", "America/Panama", "America/Pangnirtung", "America/Paramaribo", "America/Phoenix", "America/Port-au-Prince", "America/Port_of_Spain", "America/Porto_Velho", "America/Puerto_Rico", "America/Punta_Arenas", "America/Rainy_River", "America/Rankin_Inlet", "America/Recife", "America/Regina", "America/Resolute", "America/Rio_Branco", "America/Santarem", "America/Santiago", "America/Santo_Domingo", "America/Sao_Paulo", "America/Scoresbysund", "America/Sitka", "America/St_Barthelemy", "America/St_Johns", "America/St_Kitts", "America/St_Lucia", "America/St_Thomas", "America/St_Vincent", "America/Swift_Current", "America/Tegucigalpa", "America/Thule", "America/Thunder_Bay", "America/Tijuana", "America/Toronto", "America/Tortola", "America/Vancouver", "America/Whitehorse", "America/Winnipeg", "America/Yakutat", "America/Yellowknife", "Antarctica/Casey", "Antarctica/Davis", "Antarctica/DumontDUrville", "Antarctica/Macquarie", "Antarctica/Mawson", "Antarctica/McMurdo", "Antarctica/Palmer", "Antarctica/Rothera", "Antarctica/Syowa", "Antarctica/Troll", "Antarctica/Vostok", "Arctic/Longyearbyen", "Asia/Aden", "Asia/Almaty", "Asia/Amman", "Asia/Anadyr", "Asia/Aqtau", "Asia/Aqtobe", "Asia/Ashgabat", "Asia/Atyrau", "Asia/Baghdad", "Asia/Bahrain", "Asia/Baku", "Asia/Bangkok", "Asia/Barnaul", "Asia/Beirut", "Asia/Bishkek", "Asia/Brunei", "Asia/Chita", "Asia/Choibalsan", "Asia/Colombo", "Asia/Damascus", "Asia/Dhaka", "Asia/Dili", "Asia/Dubai", "Asia/Dushanbe", "Asia/Famagusta", "Asia/Gaza", "Asia/Hebron", "Asia/Ho_Chi_Minh", "Asia/Hong_Kong", "Asia/Hovd", "Asia/Irkutsk", "Asia/Istanbul", "Asia/Jakarta", "Asia/Jayapura", "Asia/Jerusalem", "Asia/Kabul", "Asia/Kamchatka", "Asia/Karachi", "Asia/Kathmandu", "Asia/Khandyga", "Asia/Kolkata", "Asia/Krasnoyarsk", "Asia/Kuala_Lumpur", "Asia/Kuching", "Asia/Kuwait", "Asia/Macau", "Asia/Magadan", "Asia/Makassar", "Asia/Manila", "Asia/Muscat", "Asia/Nicosia", "Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk", "Asia/Oral", "Asia/Phnom_Penh", "Asia/Pontianak", "Asia/Pyongyang", "Asia/Qatar", "Asia/Qostanay", "Asia/Qyzylorda", "Asia/Rangoon", "Asia/Riyadh", "Asia/Sakhalin", "Asia/Samarkand", "Asia/Seoul", "Asia/Shanghai", "Asia/Singapore", "Asia/Srednekolymsk", "Asia/Taipei", "Asia/Tashkent", "Asia/Tbilisi", "Asia/Tehran", "Asia/Thimphu", "Asia/Tokyo", "Asia/Tomsk", "Asia/Ulaanbaatar", "Asia/Urumqi", "Asia/Ust-Nera", "Asia/Vientiane", "Asia/Vladivostok", "Asia/Yakutsk", "Asia/Yangon", "Asia/Yekaterinburg", "Asia/Yerevan", "Atlantic/Azores", "Atlantic/Bermuda", "Atlantic/Canary", "Atlantic/Cape_Verde", "Atlantic/Faroe", "Atlantic/Madeira", "Atlantic/Reykjavik", "Atlantic/South_Georgia", "Atlantic/St_Helena", "Atlantic/Stanley", "Australia/Adelaide", "Australia/Brisbane", "Australia/Broken_Hill", "Australia/Currie", "Australia/Darwin", "Australia/Eucla", "Australia/Hobart", "Australia/Lindeman", "Australia/Lord_Howe", "Australia/Melbourne", "Australia/Perth", "Australia/Sydney", "Europe/Amsterdam", "Europe/Andorra", "Europe/Astrakhan", "Europe/Athens", "Europe/Belgrade", "Europe/Berlin", "Europe/Bratislava", "Europe/Brussels", "Europe/Bucharest", "Europe/Budapest", "Europe/Busingen", "Europe/Chisinau", "Europe/Copenhagen", "Europe/Dublin", "Europe/Gibraltar", "Europe/Guernsey", "Europe/Helsinki", "Europe/Isle_of_Man", "Europe/Istanbul", "Europe/Jersey", "Europe/Kaliningrad", "Europe/Kiev", "Europe/Kirov", "Europe/Lisbon", "Europe/Ljubljana", "Europe/London", "Europe/Luxembourg", "Europe/Madrid", "Europe/Malta", "Europe/Mariehamn", "Europe/Minsk", "Europe/Monaco", "Europe/Moscow", "Europe/Nicosia", "Europe/Oslo", "Europe/Paris", "Europe/Podgorica", "Europe/Prague", "Europe/Riga", "Europe/Rome", "Europe/Samara", "Europe/San_Marino", "Europe/Sarajevo", "Europe/Saratov", "Europe/Simferopol", "Europe/Skopje", "Europe/Sofia", "Europe/Stockholm", "Europe/Tallinn", "Europe/Tirane", "Europe/Ulyanovsk", "Europe/Uzhgorod", "Europe/Vaduz", "Europe/Vatican", "Europe/Vienna", "Europe/Vilnius", "Europe/Volgograd", "Europe/Warsaw", "Europe/Zagreb", "Europe/Zaporozhye", "Europe/Zurich", "Indian/Antananarivo", "Indian/Chagos", "Indian/Christmas", "Indian/Cocos", "Indian/Comoro", "Indian/Kerguelen", "Indian/Mahe", "Indian/Maldives", "Indian/Mauritius", "Indian/Mayotte", "Indian/Reunion", "Pacific/Apia", "Pacific/Auckland", "Pacific/Bougainville", "Pacific/Chatham", "Pacific/Chuuk", "Pacific/Easter", "Pacific/Efate", "Pacific/Enderbury", "Pacific/Fakaofo", "Pacific/Fiji", "Pacific/Funafuti", "Pacific/Galapagos", "Pacific/Gambier", "Pacific/Guadalcanal", "Pacific/Guam", "Pacific/Honolulu", "Pacific/Kanton", "Pacific/Kiritimati", "Pacific/Kosrae", "Pacific/Kwajalein", "Pacific/Majuro", "Pacific/Marquesas", "Pacific/Midway", "Pacific/Nauru", "Pacific/Niue", "Pacific/Norfolk", "Pacific/Noumea", "Pacific/Pago_Pago", "Pacific/Palau", "Pacific/Pitcairn", "Pacific/Pohnpei", "Pacific/Port_Moresby", "Pacific/Rarotonga", "Pacific/Saipan", "Pacific/Tahiti", "Pacific/Tarawa", "Pacific/Tongatapu", "Pacific/Wake", "Pacific/Wallis"]>;
                }, "strip", z.ZodTypeAny, {
                    timeZone: "utc" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fort_Nelson" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis";
                    mode: "today" | "tomorrow" | "yesterday" | "oneWeekAgo" | "oneWeekFromNow" | "oneMonthAgo" | "oneMonthFromNow" | "daysAgo" | "daysFromNow" | "exactDate" | "pastWeek" | "pastMonth" | "pastYear" | "nextWeek" | "nextMonth" | "nextYear" | "pastNumberOfDays" | "nextNumberOfDays";
                    exactDate?: string | undefined;
                    numberOfDays?: number | undefined;
                }, {
                    timeZone: "utc" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fort_Nelson" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis";
                    mode: "today" | "tomorrow" | "yesterday" | "oneWeekAgo" | "oneWeekFromNow" | "oneMonthAgo" | "oneMonthFromNow" | "daysAgo" | "daysFromNow" | "exactDate" | "pastWeek" | "pastMonth" | "pastYear" | "nextWeek" | "nextMonth" | "nextYear" | "pastNumberOfDays" | "nextNumberOfDays";
                    exactDate?: string | undefined;
                    numberOfDays?: number | undefined;
                }>]>>;
                operator: z.ZodUnion<[z.ZodLiteral<"=">, z.ZodLiteral<"!=">, z.ZodLiteral<">">, z.ZodLiteral<">=">, z.ZodLiteral<"<">, z.ZodLiteral<"<=">, z.ZodLiteral<"LIKE">, z.ZodLiteral<"IN">, z.ZodLiteral<"HAS">, z.ZodLiteral<"NOT LIKE">, z.ZodLiteral<"NOT IN">, z.ZodLiteral<"IS NULL">, z.ZodLiteral<"IS NOT NULL">]>;
            }, "strip", z.ZodTypeAny, {
                value: string | number | boolean | {
                    timeZone: "utc" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fort_Nelson" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis";
                    mode: "today" | "tomorrow" | "yesterday" | "oneWeekAgo" | "oneWeekFromNow" | "oneMonthAgo" | "oneMonthFromNow" | "daysAgo" | "daysFromNow" | "exactDate" | "pastWeek" | "pastMonth" | "pastYear" | "nextWeek" | "nextMonth" | "nextYear" | "pastNumberOfDays" | "nextNumberOfDays";
                    exactDate?: string | undefined;
                    numberOfDays?: number | undefined;
                } | [string | number | boolean, ...(string | number | boolean)[]] | null;
                fieldId: string;
                isSymbol: true;
                operator: "=" | "!=" | ">" | ">=" | "<" | "<=" | "LIKE" | "IN" | "HAS" | "NOT LIKE" | "NOT IN" | "IS NULL" | "IS NOT NULL";
            }, {
                value: string | number | boolean | {
                    timeZone: "utc" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fort_Nelson" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis";
                    mode: "today" | "tomorrow" | "yesterday" | "oneWeekAgo" | "oneWeekFromNow" | "oneMonthAgo" | "oneMonthFromNow" | "daysAgo" | "daysFromNow" | "exactDate" | "pastWeek" | "pastMonth" | "pastYear" | "nextWeek" | "nextMonth" | "nextYear" | "pastNumberOfDays" | "nextNumberOfDays";
                    exactDate?: string | undefined;
                    numberOfDays?: number | undefined;
                } | [string | number | boolean, ...(string | number | boolean)[]] | null;
                fieldId: string;
                isSymbol: true;
                operator: "=" | "!=" | ">" | ">=" | "<" | "<=" | "LIKE" | "IN" | "HAS" | "NOT LIKE" | "NOT IN" | "IS NULL" | "IS NOT NULL";
            }>]>, any]>, "many">;
            conjunction: z.ZodUnion<[z.ZodLiteral<"and">, z.ZodLiteral<"or">]>;
        }, "strip", z.ZodTypeAny, {
            conjunction: "and" | "or";
            filterSet: any[];
        }, {
            conjunction: "and" | "or";
            filterSet: any[];
        }>>>;
        group: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            fieldId: z.ZodString;
            order: z.ZodNativeEnum<typeof import("./views").SortFunc>;
        }, "strip", z.ZodTypeAny, {
            fieldId: string;
            order: import("./views").SortFunc;
        }, {
            fieldId: string;
            order: import("./views").SortFunc;
        }>, "many">>>;
        shareId: z.ZodOptional<z.ZodString>;
        enableShare: z.ZodOptional<z.ZodBoolean>;
        shareMeta: z.ZodOptional<z.ZodObject<{
            allowCopy: z.ZodOptional<z.ZodBoolean>;
            includeHiddenField: z.ZodOptional<z.ZodBoolean>;
            password: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            allowCopy?: boolean | undefined;
            includeHiddenField?: boolean | undefined;
            password?: string | undefined;
        }, {
            allowCopy?: boolean | undefined;
            includeHiddenField?: boolean | undefined;
            password?: string | undefined;
        }>>;
        createdBy: z.ZodString;
        lastModifiedBy: z.ZodString;
        createdTime: z.ZodString;
        lastModifiedTime: z.ZodString;
        columnMeta: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
            order: z.ZodNumber;
        }, {
            width: z.ZodOptional<z.ZodNumber>;
            hidden: z.ZodOptional<z.ZodBoolean>;
            statisticFunc: z.ZodOptional<z.ZodNullable<z.ZodNativeEnum<typeof import("@/types").StatisticsFunc>>>;
        }>, "strip", z.ZodTypeAny, {
            order: number;
            width?: number | undefined;
            hidden?: boolean | undefined;
            statisticFunc?: import("@/types").StatisticsFunc | null | undefined;
        }, {
            order: number;
            width?: number | undefined;
            hidden?: boolean | undefined;
            statisticFunc?: import("@/types").StatisticsFunc | null | undefined;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            order: z.ZodNumber;
        }, {
            hidden: z.ZodOptional<z.ZodBoolean>;
        }>, "strip", z.ZodTypeAny, {
            order: number;
            hidden?: boolean | undefined;
        }, {
            order: number;
            hidden?: boolean | undefined;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            order: z.ZodNumber;
        }, {
            visible: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
        }>, "strip", z.ZodTypeAny, {
            order: number;
            visible?: boolean | undefined;
            required?: boolean | undefined;
        }, {
            order: number;
            visible?: boolean | undefined;
            required?: boolean | undefined;
        }>]>>;
    }, "strip", z.ZodTypeAny, {
        createdTime: string;
        lastModifiedTime: string;
        createdBy: string;
        lastModifiedBy: string;
        id: string;
        name: string;
        type: import("@/types").TeableViewTypeEnum;
        order: number;
        columnMeta: Record<string, {
            order: number;
            width?: number | undefined;
            hidden?: boolean | undefined;
            statisticFunc?: import("@/types").StatisticsFunc | null | undefined;
        } | {
            order: number;
            hidden?: boolean | undefined;
        } | {
            order: number;
            visible?: boolean | undefined;
            required?: boolean | undefined;
        }>;
        sort?: {
            sortObjs: {
                fieldId: string;
                order: import("./views").SortFunc;
            }[];
            manualSort?: boolean | undefined;
        } | null | undefined;
        filter?: {
            conjunction: "and" | "or";
            filterSet: any[];
        } | null | undefined;
        options?: {
            coverUrl?: string | undefined;
            logoUrl?: string | undefined;
            submitLabel?: string | undefined;
        } | {
            rowHeight?: import("@/types").RowHeightLevel | undefined;
            frozenColumnCount?: number | undefined;
        } | {
            groupingFieldId: string;
        } | undefined;
        description?: string | undefined;
        group?: {
            fieldId: string;
            order: import("./views").SortFunc;
        }[] | null | undefined;
        shareId?: string | undefined;
        enableShare?: boolean | undefined;
        shareMeta?: {
            allowCopy?: boolean | undefined;
            includeHiddenField?: boolean | undefined;
            password?: string | undefined;
        } | undefined;
    }, {
        createdTime: string;
        lastModifiedTime: string;
        createdBy: string;
        lastModifiedBy: string;
        id: string;
        name: string;
        type: import("@/types").TeableViewTypeEnum;
        order: number;
        columnMeta: Record<string, {
            order: number;
            width?: number | undefined;
            hidden?: boolean | undefined;
            statisticFunc?: import("@/types").StatisticsFunc | null | undefined;
        } | {
            order: number;
            hidden?: boolean | undefined;
        } | {
            order: number;
            visible?: boolean | undefined;
            required?: boolean | undefined;
        }>;
        sort?: {
            sortObjs: {
                fieldId: string;
                order: import("./views").SortFunc;
            }[];
            manualSort?: boolean | undefined;
        } | null | undefined;
        filter?: {
            conjunction: "and" | "or";
            filterSet: any[];
        } | null | undefined;
        options?: {
            coverUrl?: string | undefined;
            logoUrl?: string | undefined;
            submitLabel?: string | undefined;
        } | {
            rowHeight?: import("@/types").RowHeightLevel | undefined;
            frozenColumnCount?: number | undefined;
        } | {
            groupingFieldId: string;
        } | undefined;
        description?: string | undefined;
        group?: {
            fieldId: string;
            order: import("./views").SortFunc;
        }[] | null | undefined;
        shareId?: string | undefined;
        enableShare?: boolean | undefined;
        shareMeta?: {
            allowCopy?: boolean | undefined;
            includeHiddenField?: boolean | undefined;
            password?: string | undefined;
        } | undefined;
    }>, "many">;
    records: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        fields: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        autoNumber: z.ZodNumber;
        createdTime: z.ZodOptional<z.ZodString>;
        lastModifiedTime: z.ZodOptional<z.ZodString>;
        createdBy: z.ZodOptional<z.ZodString>;
        lastModifiedBy: z.ZodOptional<z.ZodString>;
        recordOrder: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        autoNumber: number;
        id: string;
        name: string;
        fields: Record<string, unknown>;
        recordOrder: Record<string, number>;
        createdTime?: string | undefined;
        lastModifiedTime?: string | undefined;
        createdBy?: string | undefined;
        lastModifiedBy?: string | undefined;
    }, {
        autoNumber: number;
        id: string;
        name: string;
        fields: Record<string, unknown>;
        recordOrder: Record<string, number>;
        createdTime?: string | undefined;
        lastModifiedTime?: string | undefined;
        createdBy?: string | undefined;
        lastModifiedBy?: string | undefined;
    }>, "many">;
    order: z.ZodNumber;
    lastModifiedTime: z.ZodString;
    defaultViewId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    lastModifiedTime: string;
    id: string;
    name: string;
    fields: {
        id: string;
        name: string;
        type: import("@/types").TeableFieldType;
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
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            expression: string;
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
            defaultValue?: "now" | undefined;
        } | {
            showAs?: {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            color: import("@/types").Colors.RedBright | import("@/types").Colors.TealBright | import("@/types").Colors.YellowBright;
            icon: import("./fields").RatingIcon;
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
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            };
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | undefined;
        } | {
            expression: "AUTO_NUMBER()";
        } | {
            expression: "CREATED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
        } | {
            expression: "LAST_MODIFIED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            };
        };
        cellValueType: import("@/types").TeableCellValueType;
        dbFieldType: import("@/types").TeableDbFieldType;
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
    }[];
    views: {
        createdTime: string;
        lastModifiedTime: string;
        createdBy: string;
        lastModifiedBy: string;
        id: string;
        name: string;
        type: import("@/types").TeableViewTypeEnum;
        order: number;
        columnMeta: Record<string, {
            order: number;
            width?: number | undefined;
            hidden?: boolean | undefined;
            statisticFunc?: import("@/types").StatisticsFunc | null | undefined;
        } | {
            order: number;
            hidden?: boolean | undefined;
        } | {
            order: number;
            visible?: boolean | undefined;
            required?: boolean | undefined;
        }>;
        sort?: {
            sortObjs: {
                fieldId: string;
                order: import("./views").SortFunc;
            }[];
            manualSort?: boolean | undefined;
        } | null | undefined;
        filter?: {
            conjunction: "and" | "or";
            filterSet: any[];
        } | null | undefined;
        options?: {
            coverUrl?: string | undefined;
            logoUrl?: string | undefined;
            submitLabel?: string | undefined;
        } | {
            rowHeight?: import("@/types").RowHeightLevel | undefined;
            frozenColumnCount?: number | undefined;
        } | {
            groupingFieldId: string;
        } | undefined;
        description?: string | undefined;
        group?: {
            fieldId: string;
            order: import("./views").SortFunc;
        }[] | null | undefined;
        shareId?: string | undefined;
        enableShare?: boolean | undefined;
        shareMeta?: {
            allowCopy?: boolean | undefined;
            includeHiddenField?: boolean | undefined;
            password?: string | undefined;
        } | undefined;
    }[];
    records: {
        autoNumber: number;
        id: string;
        name: string;
        fields: Record<string, unknown>;
        recordOrder: Record<string, number>;
        createdTime?: string | undefined;
        lastModifiedTime?: string | undefined;
        createdBy?: string | undefined;
        lastModifiedBy?: string | undefined;
    }[];
    order: number;
    dbTableName: string;
    description?: string | undefined;
    icon?: string | undefined;
    defaultViewId?: string | undefined;
}, {
    lastModifiedTime: string;
    id: string;
    name: string;
    fields: {
        id: string;
        name: string;
        type: import("@/types").TeableFieldType;
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
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            expression: string;
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
            defaultValue?: "now" | undefined;
        } | {
            showAs?: {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            color: import("@/types").Colors.RedBright | import("@/types").Colors.TealBright | import("@/types").Colors.YellowBright;
            icon: import("./fields").RatingIcon;
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
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            };
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | undefined;
        } | {
            expression: "AUTO_NUMBER()";
        } | {
            expression: "CREATED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
        } | {
            expression: "LAST_MODIFIED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            };
        };
        cellValueType: import("@/types").TeableCellValueType;
        dbFieldType: import("@/types").TeableDbFieldType;
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
    }[];
    views: {
        createdTime: string;
        lastModifiedTime: string;
        createdBy: string;
        lastModifiedBy: string;
        id: string;
        name: string;
        type: import("@/types").TeableViewTypeEnum;
        order: number;
        columnMeta: Record<string, {
            order: number;
            width?: number | undefined;
            hidden?: boolean | undefined;
            statisticFunc?: import("@/types").StatisticsFunc | null | undefined;
        } | {
            order: number;
            hidden?: boolean | undefined;
        } | {
            order: number;
            visible?: boolean | undefined;
            required?: boolean | undefined;
        }>;
        sort?: {
            sortObjs: {
                fieldId: string;
                order: import("./views").SortFunc;
            }[];
            manualSort?: boolean | undefined;
        } | null | undefined;
        filter?: {
            conjunction: "and" | "or";
            filterSet: any[];
        } | null | undefined;
        options?: {
            coverUrl?: string | undefined;
            logoUrl?: string | undefined;
            submitLabel?: string | undefined;
        } | {
            rowHeight?: import("@/types").RowHeightLevel | undefined;
            frozenColumnCount?: number | undefined;
        } | {
            groupingFieldId: string;
        } | undefined;
        description?: string | undefined;
        group?: {
            fieldId: string;
            order: import("./views").SortFunc;
        }[] | null | undefined;
        shareId?: string | undefined;
        enableShare?: boolean | undefined;
        shareMeta?: {
            allowCopy?: boolean | undefined;
            includeHiddenField?: boolean | undefined;
            password?: string | undefined;
        } | undefined;
    }[];
    records: {
        autoNumber: number;
        id: string;
        name: string;
        fields: Record<string, unknown>;
        recordOrder: Record<string, number>;
        createdTime?: string | undefined;
        lastModifiedTime?: string | undefined;
        createdBy?: string | undefined;
        lastModifiedBy?: string | undefined;
    }[];
    order: number;
    dbTableName: string;
    description?: string | undefined;
    icon?: string | undefined;
    defaultViewId?: string | undefined;
}>;
export type ITableTableVo = z.infer<typeof tableFullVoSchema>;
export declare const tableRoSchema: z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
    fields: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        type: z.ZodNativeEnum<typeof import("@/types").TeableFieldType>;
        description: z.ZodOptional<z.ZodString>;
        options: z.ZodUnion<[z.ZodUnion<[z.ZodObject<{
            expression: z.ZodEnum<["countall({values})", "counta({values})", "count({values})", "sum({values})", "max({values})", "min({values})", "and({values})", "or({values})", "xor({values})", "array_join({values})", "array_unique({values})", "array_compact({values})", "concatenate({values})"]>;
            formatting: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                date: z.ZodString;
                time: z.ZodNativeEnum<typeof import("./fields").TimeFormatting>;
                timeZone: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            }, {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            }>, z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
                precision: z.ZodNumber;
            }, {
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Decimal>;
            }>, "strip", z.ZodTypeAny, {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            }, {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                precision: z.ZodNumber;
            }, {
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Percent>;
            }>, "strip", z.ZodTypeAny, {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            }, {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                precision: z.ZodNumber;
            }, {
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Currency>;
                symbol: z.ZodString;
            }>, "strip", z.ZodTypeAny, {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            }, {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            }>]>]>>;
            showAs: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").SingleLineTextDisplayType>;
            }, "strict", z.ZodTypeAny, {
                type: import("./fields").SingleLineTextDisplayType;
            }, {
                type: import("./fields").SingleLineTextDisplayType;
            }>, z.ZodUnion<[z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").SingleNumberDisplayType>;
                color: z.ZodNativeEnum<typeof import("@/types").Colors>;
                showValue: z.ZodBoolean;
                maxValue: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            }, {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            }>, z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").MultiNumberDisplayType>;
                color: z.ZodNativeEnum<typeof import("@/types").Colors>;
            }, "strict", z.ZodTypeAny, {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            }, {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            }>]>]>>;
        }, "strict", z.ZodTypeAny, {
            expression: "countall({values})" | "counta({values})" | "count({values})" | "sum({values})" | "max({values})" | "min({values})" | "and({values})" | "or({values})" | "xor({values})" | "array_join({values})" | "array_unique({values})" | "array_compact({values})" | "concatenate({values})";
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        }, {
            expression: "countall({values})" | "counta({values})" | "count({values})" | "sum({values})" | "max({values})" | "min({values})" | "and({values})" | "or({values})" | "xor({values})" | "array_join({values})" | "array_unique({values})" | "array_compact({values})" | "concatenate({values})";
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        }>, z.ZodObject<{
            expression: z.ZodString;
            formatting: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                date: z.ZodString;
                time: z.ZodNativeEnum<typeof import("./fields").TimeFormatting>;
                timeZone: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            }, {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            }>, z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
                precision: z.ZodNumber;
            }, {
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Decimal>;
            }>, "strip", z.ZodTypeAny, {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            }, {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                precision: z.ZodNumber;
            }, {
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Percent>;
            }>, "strip", z.ZodTypeAny, {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            }, {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                precision: z.ZodNumber;
            }, {
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Currency>;
                symbol: z.ZodString;
            }>, "strip", z.ZodTypeAny, {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            }, {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            }>]>]>>;
            showAs: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").SingleLineTextDisplayType>;
            }, "strict", z.ZodTypeAny, {
                type: import("./fields").SingleLineTextDisplayType;
            }, {
                type: import("./fields").SingleLineTextDisplayType;
            }>, z.ZodUnion<[z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").SingleNumberDisplayType>;
                color: z.ZodNativeEnum<typeof import("@/types").Colors>;
                showValue: z.ZodBoolean;
                maxValue: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            }, {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            }>, z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").MultiNumberDisplayType>;
                color: z.ZodNativeEnum<typeof import("@/types").Colors>;
            }, "strict", z.ZodTypeAny, {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            }, {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            }>]>]>>;
        }, "strict", z.ZodTypeAny, {
            expression: string;
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        }, {
            expression: string;
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
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
                time: z.ZodNativeEnum<typeof import("./fields/formatting.shcema").TimeFormatting>;
                timeZone: z.ZodEffects<z.ZodString, string, string>;
            }, "strip", z.ZodTypeAny, {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            }, {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            }>;
            defaultValue: z.ZodOptional<z.ZodEnum<["now"]>>;
        }, "strict", z.ZodTypeAny, {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
            defaultValue?: "now" | undefined;
        }, {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
            defaultValue?: "now" | undefined;
        }>, z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>, z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>, z.ZodObject<{
            showAs: z.ZodOptional<z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").SingleLineTextDisplayType>;
            }, "strip", z.ZodTypeAny, {
                type: import("./fields").SingleLineTextDisplayType;
            }, {
                type: import("./fields").SingleLineTextDisplayType;
            }>>;
        }, "strict", z.ZodTypeAny, {
            showAs?: {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        }, {
            showAs?: {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        }>, z.ZodObject<{
            icon: z.ZodNativeEnum<typeof import("./fields").RatingIcon>;
            color: z.ZodEnum<[import("@/types").Colors.YellowBright, import("@/types").Colors.RedBright, import("@/types").Colors.TealBright]>;
            max: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            color: import("@/types").Colors.RedBright | import("@/types").Colors.TealBright | import("@/types").Colors.YellowBright;
            icon: import("./fields").RatingIcon;
            max: number;
        }, {
            color: import("@/types").Colors.RedBright | import("@/types").Colors.TealBright | import("@/types").Colors.YellowBright;
            icon: import("./fields").RatingIcon;
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
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Decimal>;
            }>, "strip", z.ZodTypeAny, {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            }, {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                precision: z.ZodNumber;
            }, {
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Percent>;
            }>, "strip", z.ZodTypeAny, {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            }, {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                precision: z.ZodNumber;
            }, {
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Currency>;
                symbol: z.ZodString;
            }>, "strip", z.ZodTypeAny, {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            }, {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            }>]>;
            showAs: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").SingleNumberDisplayType>;
                color: z.ZodNativeEnum<typeof import("@/types").Colors>;
                showValue: z.ZodBoolean;
                maxValue: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            }, {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            }>, z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").MultiNumberDisplayType>;
                color: z.ZodNativeEnum<typeof import("@/types").Colors>;
            }, "strict", z.ZodTypeAny, {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            }, {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            }>]>>;
        }, "strict", z.ZodTypeAny, {
            formatting: {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            };
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | undefined;
        }, {
            formatting: {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            };
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
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
                time: z.ZodNativeEnum<typeof import("./fields/formatting.shcema").TimeFormatting>;
                timeZone: z.ZodEffects<z.ZodString, string, string>;
            }, "strip", z.ZodTypeAny, {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            }, {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            }>;
        }, "strict", z.ZodTypeAny, {
            expression: "CREATED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
        }, {
            expression: "CREATED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
        }>, z.ZodObject<{
            expression: z.ZodLiteral<"LAST_MODIFIED_TIME()">;
            formatting: z.ZodObject<{
                date: z.ZodString;
                time: z.ZodNativeEnum<typeof import("./fields").TimeFormatting>;
                timeZone: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            }, {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            }>;
        }, "strict", z.ZodTypeAny, {
            expression: "LAST_MODIFIED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            };
        }, {
            expression: "LAST_MODIFIED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
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
        cellValueType: z.ZodNativeEnum<typeof import("@/types").TeableCellValueType>;
        isMultipleCellValue: z.ZodOptional<z.ZodBoolean>;
        dbFieldType: z.ZodNativeEnum<typeof import("@/types").TeableDbFieldType>;
        dbFieldName: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        type: import("@/types").TeableFieldType;
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
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            expression: string;
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
            defaultValue?: "now" | undefined;
        } | {
            showAs?: {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            color: import("@/types").Colors.RedBright | import("@/types").Colors.TealBright | import("@/types").Colors.YellowBright;
            icon: import("./fields").RatingIcon;
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
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            };
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | undefined;
        } | {
            expression: "AUTO_NUMBER()";
        } | {
            expression: "CREATED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
        } | {
            expression: "LAST_MODIFIED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            };
        };
        cellValueType: import("@/types").TeableCellValueType;
        dbFieldType: import("@/types").TeableDbFieldType;
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
        type: import("@/types").TeableFieldType;
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
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            expression: string;
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
            defaultValue?: "now" | undefined;
        } | {
            showAs?: {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            color: import("@/types").Colors.RedBright | import("@/types").Colors.TealBright | import("@/types").Colors.YellowBright;
            icon: import("./fields").RatingIcon;
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
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            };
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | undefined;
        } | {
            expression: "AUTO_NUMBER()";
        } | {
            expression: "CREATED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
        } | {
            expression: "LAST_MODIFIED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            };
        };
        cellValueType: import("@/types").TeableCellValueType;
        dbFieldType: import("@/types").TeableDbFieldType;
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
    }>, "many">;
    views: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        type: z.ZodNativeEnum<typeof import("@/types").TeableViewTypeEnum>;
        description: z.ZodOptional<z.ZodString>;
        order: z.ZodNumber;
        options: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
            rowHeight: z.ZodOptional<z.ZodNativeEnum<typeof import("@/types").RowHeightLevel>>;
            frozenColumnCount: z.ZodOptional<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            rowHeight?: import("@/types").RowHeightLevel | undefined;
            frozenColumnCount?: number | undefined;
        }, {
            rowHeight?: import("@/types").RowHeightLevel | undefined;
            frozenColumnCount?: number | undefined;
        }>, z.ZodObject<{
            groupingFieldId: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            groupingFieldId: string;
        }, {
            groupingFieldId: string;
        }>, z.ZodObject<{
            coverUrl: z.ZodOptional<z.ZodString>;
            logoUrl: z.ZodOptional<z.ZodString>;
            submitLabel: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            coverUrl?: string | undefined;
            logoUrl?: string | undefined;
            submitLabel?: string | undefined;
        }, {
            coverUrl?: string | undefined;
            logoUrl?: string | undefined;
            submitLabel?: string | undefined;
        }>]>>;
        sort: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            sortObjs: z.ZodArray<z.ZodObject<{
                fieldId: z.ZodString;
                order: z.ZodNativeEnum<typeof import("./views").SortFunc>;
            }, "strip", z.ZodTypeAny, {
                fieldId: string;
                order: import("./views").SortFunc;
            }, {
                fieldId: string;
                order: import("./views").SortFunc;
            }>, "many">;
            manualSort: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            sortObjs: {
                fieldId: string;
                order: import("./views").SortFunc;
            }[];
            manualSort?: boolean | undefined;
        }, {
            sortObjs: {
                fieldId: string;
                order: import("./views").SortFunc;
            }[];
            manualSort?: boolean | undefined;
        }>>>;
        filter: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            filterSet: z.ZodArray<z.ZodUnion<[z.ZodUnion<[z.ZodObject<{
                isSymbol: z.ZodOptional<z.ZodLiteral<false>>;
                fieldId: z.ZodString;
                value: z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "atleastone">, z.ZodObject<{
                    mode: z.ZodUnion<[z.ZodLiteral<"today">, z.ZodLiteral<"tomorrow">, z.ZodLiteral<"yesterday">, z.ZodLiteral<"oneWeekAgo">, z.ZodLiteral<"oneWeekFromNow">, z.ZodLiteral<"oneMonthAgo">, z.ZodLiteral<"oneMonthFromNow">, z.ZodLiteral<"daysAgo">, z.ZodLiteral<"daysFromNow">, z.ZodLiteral<"exactDate">, z.ZodLiteral<"pastWeek">, z.ZodLiteral<"pastMonth">, z.ZodLiteral<"pastYear">, z.ZodLiteral<"nextWeek">, z.ZodLiteral<"nextMonth">, z.ZodLiteral<"nextYear">, z.ZodLiteral<"pastNumberOfDays">, z.ZodLiteral<"nextNumberOfDays">]>;
                    numberOfDays: z.ZodOptional<z.ZodNumber>;
                    exactDate: z.ZodOptional<z.ZodString>;
                    timeZone: z.ZodEnum<["utc", "Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", "Africa/Asmara", "Africa/Bamako", "Africa/Bangui", "Africa/Banjul", "Africa/Bissau", "Africa/Blantyre", "Africa/Brazzaville", "Africa/Bujumbura", "Africa/Cairo", "Africa/Casablanca", "Africa/Ceuta", "Africa/Conakry", "Africa/Dakar", "Africa/Dar_es_Salaam", "Africa/Djibouti", "Africa/Douala", "Africa/El_Aaiun", "Africa/Freetown", "Africa/Gaborone", "Africa/Harare", "Africa/Johannesburg", "Africa/Juba", "Africa/Kampala", "Africa/Khartoum", "Africa/Kigali", "Africa/Kinshasa", "Africa/Lagos", "Africa/Libreville", "Africa/Lome", "Africa/Luanda", "Africa/Lubumbashi", "Africa/Lusaka", "Africa/Malabo", "Africa/Maputo", "Africa/Maseru", "Africa/Mbabane", "Africa/Mogadishu", "Africa/Monrovia", "Africa/Nairobi", "Africa/Ndjamena", "Africa/Niamey", "Africa/Nouakchott", "Africa/Ouagadougou", "Africa/Porto-Novo", "Africa/Sao_Tome", "Africa/Tripoli", "Africa/Tunis", "Africa/Windhoek", "America/Adak", "America/Anchorage", "America/Anguilla", "America/Antigua", "America/Araguaina", "America/Argentina/Buenos_Aires", "America/Argentina/Catamarca", "America/Argentina/Cordoba", "America/Argentina/Jujuy", "America/Argentina/La_Rioja", "America/Argentina/Mendoza", "America/Argentina/Rio_Gallegos", "America/Argentina/Salta", "America/Argentina/San_Juan", "America/Argentina/San_Luis", "America/Argentina/Tucuman", "America/Argentina/Ushuaia", "America/Aruba", "America/Asuncion", "America/Atikokan", "America/Bahia", "America/Bahia_Banderas", "America/Barbados", "America/Belem", "America/Belize", "America/Blanc-Sablon", "America/Boa_Vista", "America/Bogota", "America/Boise", "America/Cambridge_Bay", "America/Campo_Grande", "America/Cancun", "America/Caracas", "America/Cayenne", "America/Cayman", "America/Chicago", "America/Chihuahua", "America/Costa_Rica", "America/Creston", "America/Cuiaba", "America/Curacao", "America/Danmarkshavn", "America/Dawson", "America/Dawson_Creek", "America/Denver", "America/Detroit", "America/Dominica", "America/Edmonton", "America/Eirunepe", "America/El_Salvador", "America/Fort_Nelson", "America/Fortaleza", "America/Glace_Bay", "America/Godthab", "America/Goose_Bay", "America/Grand_Turk", "America/Grenada", "America/Guadeloupe", "America/Guatemala", "America/Guayaquil", "America/Guyana", "America/Halifax", "America/Havana", "America/Hermosillo", "America/Indiana/Indianapolis", "America/Indiana/Knox", "America/Indiana/Marengo", "America/Indiana/Petersburg", "America/Indiana/Tell_City", "America/Indiana/Vevay", "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Inuvik", "America/Iqaluit", "America/Jamaica", "America/Juneau", "America/Kentucky/Louisville", "America/Kentucky/Monticello", "America/Kralendijk", "America/La_Paz", "America/Lima", "America/Los_Angeles", "America/Lower_Princes", "America/Maceio", "America/Managua", "America/Manaus", "America/Marigot", "America/Martinique", "America/Matamoros", "America/Mazatlan", "America/Menominee", "America/Merida", "America/Metlakatla", "America/Mexico_City", "America/Miquelon", "America/Moncton", "America/Monterrey", "America/Montevideo", "America/Montserrat", "America/Nassau", "America/New_York", "America/Nipigon", "America/Nome", "America/Noronha", "America/North_Dakota/Beulah", "America/North_Dakota/Center", "America/North_Dakota/New_Salem", "America/Nuuk", "America/Ojinaga", "America/Panama", "America/Pangnirtung", "America/Paramaribo", "America/Phoenix", "America/Port-au-Prince", "America/Port_of_Spain", "America/Porto_Velho", "America/Puerto_Rico", "America/Punta_Arenas", "America/Rainy_River", "America/Rankin_Inlet", "America/Recife", "America/Regina", "America/Resolute", "America/Rio_Branco", "America/Santarem", "America/Santiago", "America/Santo_Domingo", "America/Sao_Paulo", "America/Scoresbysund", "America/Sitka", "America/St_Barthelemy", "America/St_Johns", "America/St_Kitts", "America/St_Lucia", "America/St_Thomas", "America/St_Vincent", "America/Swift_Current", "America/Tegucigalpa", "America/Thule", "America/Thunder_Bay", "America/Tijuana", "America/Toronto", "America/Tortola", "America/Vancouver", "America/Whitehorse", "America/Winnipeg", "America/Yakutat", "America/Yellowknife", "Antarctica/Casey", "Antarctica/Davis", "Antarctica/DumontDUrville", "Antarctica/Macquarie", "Antarctica/Mawson", "Antarctica/McMurdo", "Antarctica/Palmer", "Antarctica/Rothera", "Antarctica/Syowa", "Antarctica/Troll", "Antarctica/Vostok", "Arctic/Longyearbyen", "Asia/Aden", "Asia/Almaty", "Asia/Amman", "Asia/Anadyr", "Asia/Aqtau", "Asia/Aqtobe", "Asia/Ashgabat", "Asia/Atyrau", "Asia/Baghdad", "Asia/Bahrain", "Asia/Baku", "Asia/Bangkok", "Asia/Barnaul", "Asia/Beirut", "Asia/Bishkek", "Asia/Brunei", "Asia/Chita", "Asia/Choibalsan", "Asia/Colombo", "Asia/Damascus", "Asia/Dhaka", "Asia/Dili", "Asia/Dubai", "Asia/Dushanbe", "Asia/Famagusta", "Asia/Gaza", "Asia/Hebron", "Asia/Ho_Chi_Minh", "Asia/Hong_Kong", "Asia/Hovd", "Asia/Irkutsk", "Asia/Istanbul", "Asia/Jakarta", "Asia/Jayapura", "Asia/Jerusalem", "Asia/Kabul", "Asia/Kamchatka", "Asia/Karachi", "Asia/Kathmandu", "Asia/Khandyga", "Asia/Kolkata", "Asia/Krasnoyarsk", "Asia/Kuala_Lumpur", "Asia/Kuching", "Asia/Kuwait", "Asia/Macau", "Asia/Magadan", "Asia/Makassar", "Asia/Manila", "Asia/Muscat", "Asia/Nicosia", "Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk", "Asia/Oral", "Asia/Phnom_Penh", "Asia/Pontianak", "Asia/Pyongyang", "Asia/Qatar", "Asia/Qostanay", "Asia/Qyzylorda", "Asia/Rangoon", "Asia/Riyadh", "Asia/Sakhalin", "Asia/Samarkand", "Asia/Seoul", "Asia/Shanghai", "Asia/Singapore", "Asia/Srednekolymsk", "Asia/Taipei", "Asia/Tashkent", "Asia/Tbilisi", "Asia/Tehran", "Asia/Thimphu", "Asia/Tokyo", "Asia/Tomsk", "Asia/Ulaanbaatar", "Asia/Urumqi", "Asia/Ust-Nera", "Asia/Vientiane", "Asia/Vladivostok", "Asia/Yakutsk", "Asia/Yangon", "Asia/Yekaterinburg", "Asia/Yerevan", "Atlantic/Azores", "Atlantic/Bermuda", "Atlantic/Canary", "Atlantic/Cape_Verde", "Atlantic/Faroe", "Atlantic/Madeira", "Atlantic/Reykjavik", "Atlantic/South_Georgia", "Atlantic/St_Helena", "Atlantic/Stanley", "Australia/Adelaide", "Australia/Brisbane", "Australia/Broken_Hill", "Australia/Currie", "Australia/Darwin", "Australia/Eucla", "Australia/Hobart", "Australia/Lindeman", "Australia/Lord_Howe", "Australia/Melbourne", "Australia/Perth", "Australia/Sydney", "Europe/Amsterdam", "Europe/Andorra", "Europe/Astrakhan", "Europe/Athens", "Europe/Belgrade", "Europe/Berlin", "Europe/Bratislava", "Europe/Brussels", "Europe/Bucharest", "Europe/Budapest", "Europe/Busingen", "Europe/Chisinau", "Europe/Copenhagen", "Europe/Dublin", "Europe/Gibraltar", "Europe/Guernsey", "Europe/Helsinki", "Europe/Isle_of_Man", "Europe/Istanbul", "Europe/Jersey", "Europe/Kaliningrad", "Europe/Kiev", "Europe/Kirov", "Europe/Lisbon", "Europe/Ljubljana", "Europe/London", "Europe/Luxembourg", "Europe/Madrid", "Europe/Malta", "Europe/Mariehamn", "Europe/Minsk", "Europe/Monaco", "Europe/Moscow", "Europe/Nicosia", "Europe/Oslo", "Europe/Paris", "Europe/Podgorica", "Europe/Prague", "Europe/Riga", "Europe/Rome", "Europe/Samara", "Europe/San_Marino", "Europe/Sarajevo", "Europe/Saratov", "Europe/Simferopol", "Europe/Skopje", "Europe/Sofia", "Europe/Stockholm", "Europe/Tallinn", "Europe/Tirane", "Europe/Ulyanovsk", "Europe/Uzhgorod", "Europe/Vaduz", "Europe/Vatican", "Europe/Vienna", "Europe/Vilnius", "Europe/Volgograd", "Europe/Warsaw", "Europe/Zagreb", "Europe/Zaporozhye", "Europe/Zurich", "Indian/Antananarivo", "Indian/Chagos", "Indian/Christmas", "Indian/Cocos", "Indian/Comoro", "Indian/Kerguelen", "Indian/Mahe", "Indian/Maldives", "Indian/Mauritius", "Indian/Mayotte", "Indian/Reunion", "Pacific/Apia", "Pacific/Auckland", "Pacific/Bougainville", "Pacific/Chatham", "Pacific/Chuuk", "Pacific/Easter", "Pacific/Efate", "Pacific/Enderbury", "Pacific/Fakaofo", "Pacific/Fiji", "Pacific/Funafuti", "Pacific/Galapagos", "Pacific/Gambier", "Pacific/Guadalcanal", "Pacific/Guam", "Pacific/Honolulu", "Pacific/Kanton", "Pacific/Kiritimati", "Pacific/Kosrae", "Pacific/Kwajalein", "Pacific/Majuro", "Pacific/Marquesas", "Pacific/Midway", "Pacific/Nauru", "Pacific/Niue", "Pacific/Norfolk", "Pacific/Noumea", "Pacific/Pago_Pago", "Pacific/Palau", "Pacific/Pitcairn", "Pacific/Pohnpei", "Pacific/Port_Moresby", "Pacific/Rarotonga", "Pacific/Saipan", "Pacific/Tahiti", "Pacific/Tarawa", "Pacific/Tongatapu", "Pacific/Wake", "Pacific/Wallis"]>;
                }, "strip", z.ZodTypeAny, {
                    timeZone: "utc" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fort_Nelson" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis";
                    mode: "today" | "tomorrow" | "yesterday" | "oneWeekAgo" | "oneWeekFromNow" | "oneMonthAgo" | "oneMonthFromNow" | "daysAgo" | "daysFromNow" | "exactDate" | "pastWeek" | "pastMonth" | "pastYear" | "nextWeek" | "nextMonth" | "nextYear" | "pastNumberOfDays" | "nextNumberOfDays";
                    exactDate?: string | undefined;
                    numberOfDays?: number | undefined;
                }, {
                    timeZone: "utc" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fort_Nelson" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis";
                    mode: "today" | "tomorrow" | "yesterday" | "oneWeekAgo" | "oneWeekFromNow" | "oneMonthAgo" | "oneMonthFromNow" | "daysAgo" | "daysFromNow" | "exactDate" | "pastWeek" | "pastMonth" | "pastYear" | "nextWeek" | "nextMonth" | "nextYear" | "pastNumberOfDays" | "nextNumberOfDays";
                    exactDate?: string | undefined;
                    numberOfDays?: number | undefined;
                }>]>>;
                operator: z.ZodUnion<[z.ZodLiteral<"is">, z.ZodLiteral<"isNot">, z.ZodLiteral<"contains">, z.ZodLiteral<"doesNotContain">, z.ZodLiteral<"isGreater">, z.ZodLiteral<"isGreaterEqual">, z.ZodLiteral<"isLess">, z.ZodLiteral<"isLessEqual">, z.ZodLiteral<"isEmpty">, z.ZodLiteral<"isNotEmpty">, z.ZodLiteral<"isAnyOf">, z.ZodLiteral<"isNoneOf">, z.ZodLiteral<"hasAnyOf">, z.ZodLiteral<"hasAllOf">, z.ZodLiteral<"hasNoneOf">, z.ZodLiteral<"isExactly">, z.ZodLiteral<"isWithIn">, z.ZodLiteral<"isBefore">, z.ZodLiteral<"isAfter">, z.ZodLiteral<"isOnOrBefore">, z.ZodLiteral<"isOnOrAfter">]>;
            }, "strip", z.ZodTypeAny, {
                value: string | number | boolean | {
                    timeZone: "utc" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fort_Nelson" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis";
                    mode: "today" | "tomorrow" | "yesterday" | "oneWeekAgo" | "oneWeekFromNow" | "oneMonthAgo" | "oneMonthFromNow" | "daysAgo" | "daysFromNow" | "exactDate" | "pastWeek" | "pastMonth" | "pastYear" | "nextWeek" | "nextMonth" | "nextYear" | "pastNumberOfDays" | "nextNumberOfDays";
                    exactDate?: string | undefined;
                    numberOfDays?: number | undefined;
                } | [string | number | boolean, ...(string | number | boolean)[]] | null;
                fieldId: string;
                operator: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | "isGreater" | "isGreaterEqual" | "isLess" | "isLessEqual" | "isAnyOf" | "isNoneOf" | "hasAnyOf" | "hasAllOf" | "hasNoneOf" | "isExactly" | "isWithIn" | "isBefore" | "isAfter" | "isOnOrBefore" | "isOnOrAfter";
                isSymbol?: false | undefined;
            }, {
                value: string | number | boolean | {
                    timeZone: "utc" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fort_Nelson" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis";
                    mode: "today" | "tomorrow" | "yesterday" | "oneWeekAgo" | "oneWeekFromNow" | "oneMonthAgo" | "oneMonthFromNow" | "daysAgo" | "daysFromNow" | "exactDate" | "pastWeek" | "pastMonth" | "pastYear" | "nextWeek" | "nextMonth" | "nextYear" | "pastNumberOfDays" | "nextNumberOfDays";
                    exactDate?: string | undefined;
                    numberOfDays?: number | undefined;
                } | [string | number | boolean, ...(string | number | boolean)[]] | null;
                fieldId: string;
                operator: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | "isGreater" | "isGreaterEqual" | "isLess" | "isLessEqual" | "isAnyOf" | "isNoneOf" | "hasAnyOf" | "hasAllOf" | "hasNoneOf" | "isExactly" | "isWithIn" | "isBefore" | "isAfter" | "isOnOrBefore" | "isOnOrAfter";
                isSymbol?: false | undefined;
            }>, z.ZodObject<{
                isSymbol: z.ZodLiteral<true>;
                fieldId: z.ZodString;
                value: z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "atleastone">, z.ZodObject<{
                    mode: z.ZodUnion<[z.ZodLiteral<"today">, z.ZodLiteral<"tomorrow">, z.ZodLiteral<"yesterday">, z.ZodLiteral<"oneWeekAgo">, z.ZodLiteral<"oneWeekFromNow">, z.ZodLiteral<"oneMonthAgo">, z.ZodLiteral<"oneMonthFromNow">, z.ZodLiteral<"daysAgo">, z.ZodLiteral<"daysFromNow">, z.ZodLiteral<"exactDate">, z.ZodLiteral<"pastWeek">, z.ZodLiteral<"pastMonth">, z.ZodLiteral<"pastYear">, z.ZodLiteral<"nextWeek">, z.ZodLiteral<"nextMonth">, z.ZodLiteral<"nextYear">, z.ZodLiteral<"pastNumberOfDays">, z.ZodLiteral<"nextNumberOfDays">]>;
                    numberOfDays: z.ZodOptional<z.ZodNumber>;
                    exactDate: z.ZodOptional<z.ZodString>;
                    timeZone: z.ZodEnum<["utc", "Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", "Africa/Asmara", "Africa/Bamako", "Africa/Bangui", "Africa/Banjul", "Africa/Bissau", "Africa/Blantyre", "Africa/Brazzaville", "Africa/Bujumbura", "Africa/Cairo", "Africa/Casablanca", "Africa/Ceuta", "Africa/Conakry", "Africa/Dakar", "Africa/Dar_es_Salaam", "Africa/Djibouti", "Africa/Douala", "Africa/El_Aaiun", "Africa/Freetown", "Africa/Gaborone", "Africa/Harare", "Africa/Johannesburg", "Africa/Juba", "Africa/Kampala", "Africa/Khartoum", "Africa/Kigali", "Africa/Kinshasa", "Africa/Lagos", "Africa/Libreville", "Africa/Lome", "Africa/Luanda", "Africa/Lubumbashi", "Africa/Lusaka", "Africa/Malabo", "Africa/Maputo", "Africa/Maseru", "Africa/Mbabane", "Africa/Mogadishu", "Africa/Monrovia", "Africa/Nairobi", "Africa/Ndjamena", "Africa/Niamey", "Africa/Nouakchott", "Africa/Ouagadougou", "Africa/Porto-Novo", "Africa/Sao_Tome", "Africa/Tripoli", "Africa/Tunis", "Africa/Windhoek", "America/Adak", "America/Anchorage", "America/Anguilla", "America/Antigua", "America/Araguaina", "America/Argentina/Buenos_Aires", "America/Argentina/Catamarca", "America/Argentina/Cordoba", "America/Argentina/Jujuy", "America/Argentina/La_Rioja", "America/Argentina/Mendoza", "America/Argentina/Rio_Gallegos", "America/Argentina/Salta", "America/Argentina/San_Juan", "America/Argentina/San_Luis", "America/Argentina/Tucuman", "America/Argentina/Ushuaia", "America/Aruba", "America/Asuncion", "America/Atikokan", "America/Bahia", "America/Bahia_Banderas", "America/Barbados", "America/Belem", "America/Belize", "America/Blanc-Sablon", "America/Boa_Vista", "America/Bogota", "America/Boise", "America/Cambridge_Bay", "America/Campo_Grande", "America/Cancun", "America/Caracas", "America/Cayenne", "America/Cayman", "America/Chicago", "America/Chihuahua", "America/Costa_Rica", "America/Creston", "America/Cuiaba", "America/Curacao", "America/Danmarkshavn", "America/Dawson", "America/Dawson_Creek", "America/Denver", "America/Detroit", "America/Dominica", "America/Edmonton", "America/Eirunepe", "America/El_Salvador", "America/Fort_Nelson", "America/Fortaleza", "America/Glace_Bay", "America/Godthab", "America/Goose_Bay", "America/Grand_Turk", "America/Grenada", "America/Guadeloupe", "America/Guatemala", "America/Guayaquil", "America/Guyana", "America/Halifax", "America/Havana", "America/Hermosillo", "America/Indiana/Indianapolis", "America/Indiana/Knox", "America/Indiana/Marengo", "America/Indiana/Petersburg", "America/Indiana/Tell_City", "America/Indiana/Vevay", "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Inuvik", "America/Iqaluit", "America/Jamaica", "America/Juneau", "America/Kentucky/Louisville", "America/Kentucky/Monticello", "America/Kralendijk", "America/La_Paz", "America/Lima", "America/Los_Angeles", "America/Lower_Princes", "America/Maceio", "America/Managua", "America/Manaus", "America/Marigot", "America/Martinique", "America/Matamoros", "America/Mazatlan", "America/Menominee", "America/Merida", "America/Metlakatla", "America/Mexico_City", "America/Miquelon", "America/Moncton", "America/Monterrey", "America/Montevideo", "America/Montserrat", "America/Nassau", "America/New_York", "America/Nipigon", "America/Nome", "America/Noronha", "America/North_Dakota/Beulah", "America/North_Dakota/Center", "America/North_Dakota/New_Salem", "America/Nuuk", "America/Ojinaga", "America/Panama", "America/Pangnirtung", "America/Paramaribo", "America/Phoenix", "America/Port-au-Prince", "America/Port_of_Spain", "America/Porto_Velho", "America/Puerto_Rico", "America/Punta_Arenas", "America/Rainy_River", "America/Rankin_Inlet", "America/Recife", "America/Regina", "America/Resolute", "America/Rio_Branco", "America/Santarem", "America/Santiago", "America/Santo_Domingo", "America/Sao_Paulo", "America/Scoresbysund", "America/Sitka", "America/St_Barthelemy", "America/St_Johns", "America/St_Kitts", "America/St_Lucia", "America/St_Thomas", "America/St_Vincent", "America/Swift_Current", "America/Tegucigalpa", "America/Thule", "America/Thunder_Bay", "America/Tijuana", "America/Toronto", "America/Tortola", "America/Vancouver", "America/Whitehorse", "America/Winnipeg", "America/Yakutat", "America/Yellowknife", "Antarctica/Casey", "Antarctica/Davis", "Antarctica/DumontDUrville", "Antarctica/Macquarie", "Antarctica/Mawson", "Antarctica/McMurdo", "Antarctica/Palmer", "Antarctica/Rothera", "Antarctica/Syowa", "Antarctica/Troll", "Antarctica/Vostok", "Arctic/Longyearbyen", "Asia/Aden", "Asia/Almaty", "Asia/Amman", "Asia/Anadyr", "Asia/Aqtau", "Asia/Aqtobe", "Asia/Ashgabat", "Asia/Atyrau", "Asia/Baghdad", "Asia/Bahrain", "Asia/Baku", "Asia/Bangkok", "Asia/Barnaul", "Asia/Beirut", "Asia/Bishkek", "Asia/Brunei", "Asia/Chita", "Asia/Choibalsan", "Asia/Colombo", "Asia/Damascus", "Asia/Dhaka", "Asia/Dili", "Asia/Dubai", "Asia/Dushanbe", "Asia/Famagusta", "Asia/Gaza", "Asia/Hebron", "Asia/Ho_Chi_Minh", "Asia/Hong_Kong", "Asia/Hovd", "Asia/Irkutsk", "Asia/Istanbul", "Asia/Jakarta", "Asia/Jayapura", "Asia/Jerusalem", "Asia/Kabul", "Asia/Kamchatka", "Asia/Karachi", "Asia/Kathmandu", "Asia/Khandyga", "Asia/Kolkata", "Asia/Krasnoyarsk", "Asia/Kuala_Lumpur", "Asia/Kuching", "Asia/Kuwait", "Asia/Macau", "Asia/Magadan", "Asia/Makassar", "Asia/Manila", "Asia/Muscat", "Asia/Nicosia", "Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk", "Asia/Oral", "Asia/Phnom_Penh", "Asia/Pontianak", "Asia/Pyongyang", "Asia/Qatar", "Asia/Qostanay", "Asia/Qyzylorda", "Asia/Rangoon", "Asia/Riyadh", "Asia/Sakhalin", "Asia/Samarkand", "Asia/Seoul", "Asia/Shanghai", "Asia/Singapore", "Asia/Srednekolymsk", "Asia/Taipei", "Asia/Tashkent", "Asia/Tbilisi", "Asia/Tehran", "Asia/Thimphu", "Asia/Tokyo", "Asia/Tomsk", "Asia/Ulaanbaatar", "Asia/Urumqi", "Asia/Ust-Nera", "Asia/Vientiane", "Asia/Vladivostok", "Asia/Yakutsk", "Asia/Yangon", "Asia/Yekaterinburg", "Asia/Yerevan", "Atlantic/Azores", "Atlantic/Bermuda", "Atlantic/Canary", "Atlantic/Cape_Verde", "Atlantic/Faroe", "Atlantic/Madeira", "Atlantic/Reykjavik", "Atlantic/South_Georgia", "Atlantic/St_Helena", "Atlantic/Stanley", "Australia/Adelaide", "Australia/Brisbane", "Australia/Broken_Hill", "Australia/Currie", "Australia/Darwin", "Australia/Eucla", "Australia/Hobart", "Australia/Lindeman", "Australia/Lord_Howe", "Australia/Melbourne", "Australia/Perth", "Australia/Sydney", "Europe/Amsterdam", "Europe/Andorra", "Europe/Astrakhan", "Europe/Athens", "Europe/Belgrade", "Europe/Berlin", "Europe/Bratislava", "Europe/Brussels", "Europe/Bucharest", "Europe/Budapest", "Europe/Busingen", "Europe/Chisinau", "Europe/Copenhagen", "Europe/Dublin", "Europe/Gibraltar", "Europe/Guernsey", "Europe/Helsinki", "Europe/Isle_of_Man", "Europe/Istanbul", "Europe/Jersey", "Europe/Kaliningrad", "Europe/Kiev", "Europe/Kirov", "Europe/Lisbon", "Europe/Ljubljana", "Europe/London", "Europe/Luxembourg", "Europe/Madrid", "Europe/Malta", "Europe/Mariehamn", "Europe/Minsk", "Europe/Monaco", "Europe/Moscow", "Europe/Nicosia", "Europe/Oslo", "Europe/Paris", "Europe/Podgorica", "Europe/Prague", "Europe/Riga", "Europe/Rome", "Europe/Samara", "Europe/San_Marino", "Europe/Sarajevo", "Europe/Saratov", "Europe/Simferopol", "Europe/Skopje", "Europe/Sofia", "Europe/Stockholm", "Europe/Tallinn", "Europe/Tirane", "Europe/Ulyanovsk", "Europe/Uzhgorod", "Europe/Vaduz", "Europe/Vatican", "Europe/Vienna", "Europe/Vilnius", "Europe/Volgograd", "Europe/Warsaw", "Europe/Zagreb", "Europe/Zaporozhye", "Europe/Zurich", "Indian/Antananarivo", "Indian/Chagos", "Indian/Christmas", "Indian/Cocos", "Indian/Comoro", "Indian/Kerguelen", "Indian/Mahe", "Indian/Maldives", "Indian/Mauritius", "Indian/Mayotte", "Indian/Reunion", "Pacific/Apia", "Pacific/Auckland", "Pacific/Bougainville", "Pacific/Chatham", "Pacific/Chuuk", "Pacific/Easter", "Pacific/Efate", "Pacific/Enderbury", "Pacific/Fakaofo", "Pacific/Fiji", "Pacific/Funafuti", "Pacific/Galapagos", "Pacific/Gambier", "Pacific/Guadalcanal", "Pacific/Guam", "Pacific/Honolulu", "Pacific/Kanton", "Pacific/Kiritimati", "Pacific/Kosrae", "Pacific/Kwajalein", "Pacific/Majuro", "Pacific/Marquesas", "Pacific/Midway", "Pacific/Nauru", "Pacific/Niue", "Pacific/Norfolk", "Pacific/Noumea", "Pacific/Pago_Pago", "Pacific/Palau", "Pacific/Pitcairn", "Pacific/Pohnpei", "Pacific/Port_Moresby", "Pacific/Rarotonga", "Pacific/Saipan", "Pacific/Tahiti", "Pacific/Tarawa", "Pacific/Tongatapu", "Pacific/Wake", "Pacific/Wallis"]>;
                }, "strip", z.ZodTypeAny, {
                    timeZone: "utc" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fort_Nelson" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis";
                    mode: "today" | "tomorrow" | "yesterday" | "oneWeekAgo" | "oneWeekFromNow" | "oneMonthAgo" | "oneMonthFromNow" | "daysAgo" | "daysFromNow" | "exactDate" | "pastWeek" | "pastMonth" | "pastYear" | "nextWeek" | "nextMonth" | "nextYear" | "pastNumberOfDays" | "nextNumberOfDays";
                    exactDate?: string | undefined;
                    numberOfDays?: number | undefined;
                }, {
                    timeZone: "utc" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fort_Nelson" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis";
                    mode: "today" | "tomorrow" | "yesterday" | "oneWeekAgo" | "oneWeekFromNow" | "oneMonthAgo" | "oneMonthFromNow" | "daysAgo" | "daysFromNow" | "exactDate" | "pastWeek" | "pastMonth" | "pastYear" | "nextWeek" | "nextMonth" | "nextYear" | "pastNumberOfDays" | "nextNumberOfDays";
                    exactDate?: string | undefined;
                    numberOfDays?: number | undefined;
                }>]>>;
                operator: z.ZodUnion<[z.ZodLiteral<"=">, z.ZodLiteral<"!=">, z.ZodLiteral<">">, z.ZodLiteral<">=">, z.ZodLiteral<"<">, z.ZodLiteral<"<=">, z.ZodLiteral<"LIKE">, z.ZodLiteral<"IN">, z.ZodLiteral<"HAS">, z.ZodLiteral<"NOT LIKE">, z.ZodLiteral<"NOT IN">, z.ZodLiteral<"IS NULL">, z.ZodLiteral<"IS NOT NULL">]>;
            }, "strip", z.ZodTypeAny, {
                value: string | number | boolean | {
                    timeZone: "utc" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fort_Nelson" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis";
                    mode: "today" | "tomorrow" | "yesterday" | "oneWeekAgo" | "oneWeekFromNow" | "oneMonthAgo" | "oneMonthFromNow" | "daysAgo" | "daysFromNow" | "exactDate" | "pastWeek" | "pastMonth" | "pastYear" | "nextWeek" | "nextMonth" | "nextYear" | "pastNumberOfDays" | "nextNumberOfDays";
                    exactDate?: string | undefined;
                    numberOfDays?: number | undefined;
                } | [string | number | boolean, ...(string | number | boolean)[]] | null;
                fieldId: string;
                isSymbol: true;
                operator: "=" | "!=" | ">" | ">=" | "<" | "<=" | "LIKE" | "IN" | "HAS" | "NOT LIKE" | "NOT IN" | "IS NULL" | "IS NOT NULL";
            }, {
                value: string | number | boolean | {
                    timeZone: "utc" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fort_Nelson" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis";
                    mode: "today" | "tomorrow" | "yesterday" | "oneWeekAgo" | "oneWeekFromNow" | "oneMonthAgo" | "oneMonthFromNow" | "daysAgo" | "daysFromNow" | "exactDate" | "pastWeek" | "pastMonth" | "pastYear" | "nextWeek" | "nextMonth" | "nextYear" | "pastNumberOfDays" | "nextNumberOfDays";
                    exactDate?: string | undefined;
                    numberOfDays?: number | undefined;
                } | [string | number | boolean, ...(string | number | boolean)[]] | null;
                fieldId: string;
                isSymbol: true;
                operator: "=" | "!=" | ">" | ">=" | "<" | "<=" | "LIKE" | "IN" | "HAS" | "NOT LIKE" | "NOT IN" | "IS NULL" | "IS NOT NULL";
            }>]>, any]>, "many">;
            conjunction: z.ZodUnion<[z.ZodLiteral<"and">, z.ZodLiteral<"or">]>;
        }, "strip", z.ZodTypeAny, {
            conjunction: "and" | "or";
            filterSet: any[];
        }, {
            conjunction: "and" | "or";
            filterSet: any[];
        }>>>;
        group: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            fieldId: z.ZodString;
            order: z.ZodNativeEnum<typeof import("./views").SortFunc>;
        }, "strip", z.ZodTypeAny, {
            fieldId: string;
            order: import("./views").SortFunc;
        }, {
            fieldId: string;
            order: import("./views").SortFunc;
        }>, "many">>>;
        shareId: z.ZodOptional<z.ZodString>;
        enableShare: z.ZodOptional<z.ZodBoolean>;
        shareMeta: z.ZodOptional<z.ZodObject<{
            allowCopy: z.ZodOptional<z.ZodBoolean>;
            includeHiddenField: z.ZodOptional<z.ZodBoolean>;
            password: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            allowCopy?: boolean | undefined;
            includeHiddenField?: boolean | undefined;
            password?: string | undefined;
        }, {
            allowCopy?: boolean | undefined;
            includeHiddenField?: boolean | undefined;
            password?: string | undefined;
        }>>;
        createdBy: z.ZodString;
        lastModifiedBy: z.ZodString;
        createdTime: z.ZodString;
        lastModifiedTime: z.ZodString;
        columnMeta: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
            order: z.ZodNumber;
        }, {
            width: z.ZodOptional<z.ZodNumber>;
            hidden: z.ZodOptional<z.ZodBoolean>;
            statisticFunc: z.ZodOptional<z.ZodNullable<z.ZodNativeEnum<typeof import("@/types").StatisticsFunc>>>;
        }>, "strip", z.ZodTypeAny, {
            order: number;
            width?: number | undefined;
            hidden?: boolean | undefined;
            statisticFunc?: import("@/types").StatisticsFunc | null | undefined;
        }, {
            order: number;
            width?: number | undefined;
            hidden?: boolean | undefined;
            statisticFunc?: import("@/types").StatisticsFunc | null | undefined;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            order: z.ZodNumber;
        }, {
            hidden: z.ZodOptional<z.ZodBoolean>;
        }>, "strip", z.ZodTypeAny, {
            order: number;
            hidden?: boolean | undefined;
        }, {
            order: number;
            hidden?: boolean | undefined;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            order: z.ZodNumber;
        }, {
            visible: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
        }>, "strip", z.ZodTypeAny, {
            order: number;
            visible?: boolean | undefined;
            required?: boolean | undefined;
        }, {
            order: number;
            visible?: boolean | undefined;
            required?: boolean | undefined;
        }>]>>;
    }, "strip", z.ZodTypeAny, {
        createdTime: string;
        lastModifiedTime: string;
        createdBy: string;
        lastModifiedBy: string;
        id: string;
        name: string;
        type: import("@/types").TeableViewTypeEnum;
        order: number;
        columnMeta: Record<string, {
            order: number;
            width?: number | undefined;
            hidden?: boolean | undefined;
            statisticFunc?: import("@/types").StatisticsFunc | null | undefined;
        } | {
            order: number;
            hidden?: boolean | undefined;
        } | {
            order: number;
            visible?: boolean | undefined;
            required?: boolean | undefined;
        }>;
        sort?: {
            sortObjs: {
                fieldId: string;
                order: import("./views").SortFunc;
            }[];
            manualSort?: boolean | undefined;
        } | null | undefined;
        filter?: {
            conjunction: "and" | "or";
            filterSet: any[];
        } | null | undefined;
        options?: {
            coverUrl?: string | undefined;
            logoUrl?: string | undefined;
            submitLabel?: string | undefined;
        } | {
            rowHeight?: import("@/types").RowHeightLevel | undefined;
            frozenColumnCount?: number | undefined;
        } | {
            groupingFieldId: string;
        } | undefined;
        description?: string | undefined;
        group?: {
            fieldId: string;
            order: import("./views").SortFunc;
        }[] | null | undefined;
        shareId?: string | undefined;
        enableShare?: boolean | undefined;
        shareMeta?: {
            allowCopy?: boolean | undefined;
            includeHiddenField?: boolean | undefined;
            password?: string | undefined;
        } | undefined;
    }, {
        createdTime: string;
        lastModifiedTime: string;
        createdBy: string;
        lastModifiedBy: string;
        id: string;
        name: string;
        type: import("@/types").TeableViewTypeEnum;
        order: number;
        columnMeta: Record<string, {
            order: number;
            width?: number | undefined;
            hidden?: boolean | undefined;
            statisticFunc?: import("@/types").StatisticsFunc | null | undefined;
        } | {
            order: number;
            hidden?: boolean | undefined;
        } | {
            order: number;
            visible?: boolean | undefined;
            required?: boolean | undefined;
        }>;
        sort?: {
            sortObjs: {
                fieldId: string;
                order: import("./views").SortFunc;
            }[];
            manualSort?: boolean | undefined;
        } | null | undefined;
        filter?: {
            conjunction: "and" | "or";
            filterSet: any[];
        } | null | undefined;
        options?: {
            coverUrl?: string | undefined;
            logoUrl?: string | undefined;
            submitLabel?: string | undefined;
        } | {
            rowHeight?: import("@/types").RowHeightLevel | undefined;
            frozenColumnCount?: number | undefined;
        } | {
            groupingFieldId: string;
        } | undefined;
        description?: string | undefined;
        group?: {
            fieldId: string;
            order: import("./views").SortFunc;
        }[] | null | undefined;
        shareId?: string | undefined;
        enableShare?: boolean | undefined;
        shareMeta?: {
            allowCopy?: boolean | undefined;
            includeHiddenField?: boolean | undefined;
            password?: string | undefined;
        } | undefined;
    }>, "many">;
    records: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        fields: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        autoNumber: z.ZodNumber;
        createdTime: z.ZodOptional<z.ZodString>;
        lastModifiedTime: z.ZodOptional<z.ZodString>;
        createdBy: z.ZodOptional<z.ZodString>;
        lastModifiedBy: z.ZodOptional<z.ZodString>;
        recordOrder: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        autoNumber: number;
        id: string;
        name: string;
        fields: Record<string, unknown>;
        recordOrder: Record<string, number>;
        createdTime?: string | undefined;
        lastModifiedTime?: string | undefined;
        createdBy?: string | undefined;
        lastModifiedBy?: string | undefined;
    }, {
        autoNumber: number;
        id: string;
        name: string;
        fields: Record<string, unknown>;
        recordOrder: Record<string, number>;
        createdTime?: string | undefined;
        lastModifiedTime?: string | undefined;
        createdBy?: string | undefined;
        lastModifiedBy?: string | undefined;
    }>, "many">;
    order: z.ZodOptional<z.ZodNumber>;
    dbTableName: z.ZodOptional<z.ZodString>;
}, {
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    icon: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    views: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        type: z.ZodNativeEnum<typeof import("@/types").TeableViewTypeEnum>;
        sort: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            sortObjs: z.ZodArray<z.ZodObject<{
                fieldId: z.ZodString;
                order: z.ZodNativeEnum<typeof import("./views").SortFunc>;
            }, "strip", z.ZodTypeAny, {
                fieldId: string;
                order: import("./views").SortFunc;
            }, {
                fieldId: string;
                order: import("./views").SortFunc;
            }>, "many">;
            manualSort: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            sortObjs: {
                fieldId: string;
                order: import("./views").SortFunc;
            }[];
            manualSort?: boolean | undefined;
        }, {
            sortObjs: {
                fieldId: string;
                order: import("./views").SortFunc;
            }[];
            manualSort?: boolean | undefined;
        }>>>;
        filter: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            filterSet: z.ZodArray<z.ZodUnion<[z.ZodUnion<[z.ZodObject<{
                isSymbol: z.ZodOptional<z.ZodLiteral<false>>;
                fieldId: z.ZodString;
                value: z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "atleastone">, z.ZodObject<{
                    mode: z.ZodUnion<[z.ZodLiteral<"today">, z.ZodLiteral<"tomorrow">, z.ZodLiteral<"yesterday">, z.ZodLiteral<"oneWeekAgo">, z.ZodLiteral<"oneWeekFromNow">, z.ZodLiteral<"oneMonthAgo">, z.ZodLiteral<"oneMonthFromNow">, z.ZodLiteral<"daysAgo">, z.ZodLiteral<"daysFromNow">, z.ZodLiteral<"exactDate">, z.ZodLiteral<"pastWeek">, z.ZodLiteral<"pastMonth">, z.ZodLiteral<"pastYear">, z.ZodLiteral<"nextWeek">, z.ZodLiteral<"nextMonth">, z.ZodLiteral<"nextYear">, z.ZodLiteral<"pastNumberOfDays">, z.ZodLiteral<"nextNumberOfDays">]>;
                    numberOfDays: z.ZodOptional<z.ZodNumber>;
                    exactDate: z.ZodOptional<z.ZodString>;
                    timeZone: z.ZodEnum<["utc", "Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", "Africa/Asmara", "Africa/Bamako", "Africa/Bangui", "Africa/Banjul", "Africa/Bissau", "Africa/Blantyre", "Africa/Brazzaville", "Africa/Bujumbura", "Africa/Cairo", "Africa/Casablanca", "Africa/Ceuta", "Africa/Conakry", "Africa/Dakar", "Africa/Dar_es_Salaam", "Africa/Djibouti", "Africa/Douala", "Africa/El_Aaiun", "Africa/Freetown", "Africa/Gaborone", "Africa/Harare", "Africa/Johannesburg", "Africa/Juba", "Africa/Kampala", "Africa/Khartoum", "Africa/Kigali", "Africa/Kinshasa", "Africa/Lagos", "Africa/Libreville", "Africa/Lome", "Africa/Luanda", "Africa/Lubumbashi", "Africa/Lusaka", "Africa/Malabo", "Africa/Maputo", "Africa/Maseru", "Africa/Mbabane", "Africa/Mogadishu", "Africa/Monrovia", "Africa/Nairobi", "Africa/Ndjamena", "Africa/Niamey", "Africa/Nouakchott", "Africa/Ouagadougou", "Africa/Porto-Novo", "Africa/Sao_Tome", "Africa/Tripoli", "Africa/Tunis", "Africa/Windhoek", "America/Adak", "America/Anchorage", "America/Anguilla", "America/Antigua", "America/Araguaina", "America/Argentina/Buenos_Aires", "America/Argentina/Catamarca", "America/Argentina/Cordoba", "America/Argentina/Jujuy", "America/Argentina/La_Rioja", "America/Argentina/Mendoza", "America/Argentina/Rio_Gallegos", "America/Argentina/Salta", "America/Argentina/San_Juan", "America/Argentina/San_Luis", "America/Argentina/Tucuman", "America/Argentina/Ushuaia", "America/Aruba", "America/Asuncion", "America/Atikokan", "America/Bahia", "America/Bahia_Banderas", "America/Barbados", "America/Belem", "America/Belize", "America/Blanc-Sablon", "America/Boa_Vista", "America/Bogota", "America/Boise", "America/Cambridge_Bay", "America/Campo_Grande", "America/Cancun", "America/Caracas", "America/Cayenne", "America/Cayman", "America/Chicago", "America/Chihuahua", "America/Costa_Rica", "America/Creston", "America/Cuiaba", "America/Curacao", "America/Danmarkshavn", "America/Dawson", "America/Dawson_Creek", "America/Denver", "America/Detroit", "America/Dominica", "America/Edmonton", "America/Eirunepe", "America/El_Salvador", "America/Fort_Nelson", "America/Fortaleza", "America/Glace_Bay", "America/Godthab", "America/Goose_Bay", "America/Grand_Turk", "America/Grenada", "America/Guadeloupe", "America/Guatemala", "America/Guayaquil", "America/Guyana", "America/Halifax", "America/Havana", "America/Hermosillo", "America/Indiana/Indianapolis", "America/Indiana/Knox", "America/Indiana/Marengo", "America/Indiana/Petersburg", "America/Indiana/Tell_City", "America/Indiana/Vevay", "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Inuvik", "America/Iqaluit", "America/Jamaica", "America/Juneau", "America/Kentucky/Louisville", "America/Kentucky/Monticello", "America/Kralendijk", "America/La_Paz", "America/Lima", "America/Los_Angeles", "America/Lower_Princes", "America/Maceio", "America/Managua", "America/Manaus", "America/Marigot", "America/Martinique", "America/Matamoros", "America/Mazatlan", "America/Menominee", "America/Merida", "America/Metlakatla", "America/Mexico_City", "America/Miquelon", "America/Moncton", "America/Monterrey", "America/Montevideo", "America/Montserrat", "America/Nassau", "America/New_York", "America/Nipigon", "America/Nome", "America/Noronha", "America/North_Dakota/Beulah", "America/North_Dakota/Center", "America/North_Dakota/New_Salem", "America/Nuuk", "America/Ojinaga", "America/Panama", "America/Pangnirtung", "America/Paramaribo", "America/Phoenix", "America/Port-au-Prince", "America/Port_of_Spain", "America/Porto_Velho", "America/Puerto_Rico", "America/Punta_Arenas", "America/Rainy_River", "America/Rankin_Inlet", "America/Recife", "America/Regina", "America/Resolute", "America/Rio_Branco", "America/Santarem", "America/Santiago", "America/Santo_Domingo", "America/Sao_Paulo", "America/Scoresbysund", "America/Sitka", "America/St_Barthelemy", "America/St_Johns", "America/St_Kitts", "America/St_Lucia", "America/St_Thomas", "America/St_Vincent", "America/Swift_Current", "America/Tegucigalpa", "America/Thule", "America/Thunder_Bay", "America/Tijuana", "America/Toronto", "America/Tortola", "America/Vancouver", "America/Whitehorse", "America/Winnipeg", "America/Yakutat", "America/Yellowknife", "Antarctica/Casey", "Antarctica/Davis", "Antarctica/DumontDUrville", "Antarctica/Macquarie", "Antarctica/Mawson", "Antarctica/McMurdo", "Antarctica/Palmer", "Antarctica/Rothera", "Antarctica/Syowa", "Antarctica/Troll", "Antarctica/Vostok", "Arctic/Longyearbyen", "Asia/Aden", "Asia/Almaty", "Asia/Amman", "Asia/Anadyr", "Asia/Aqtau", "Asia/Aqtobe", "Asia/Ashgabat", "Asia/Atyrau", "Asia/Baghdad", "Asia/Bahrain", "Asia/Baku", "Asia/Bangkok", "Asia/Barnaul", "Asia/Beirut", "Asia/Bishkek", "Asia/Brunei", "Asia/Chita", "Asia/Choibalsan", "Asia/Colombo", "Asia/Damascus", "Asia/Dhaka", "Asia/Dili", "Asia/Dubai", "Asia/Dushanbe", "Asia/Famagusta", "Asia/Gaza", "Asia/Hebron", "Asia/Ho_Chi_Minh", "Asia/Hong_Kong", "Asia/Hovd", "Asia/Irkutsk", "Asia/Istanbul", "Asia/Jakarta", "Asia/Jayapura", "Asia/Jerusalem", "Asia/Kabul", "Asia/Kamchatka", "Asia/Karachi", "Asia/Kathmandu", "Asia/Khandyga", "Asia/Kolkata", "Asia/Krasnoyarsk", "Asia/Kuala_Lumpur", "Asia/Kuching", "Asia/Kuwait", "Asia/Macau", "Asia/Magadan", "Asia/Makassar", "Asia/Manila", "Asia/Muscat", "Asia/Nicosia", "Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk", "Asia/Oral", "Asia/Phnom_Penh", "Asia/Pontianak", "Asia/Pyongyang", "Asia/Qatar", "Asia/Qostanay", "Asia/Qyzylorda", "Asia/Rangoon", "Asia/Riyadh", "Asia/Sakhalin", "Asia/Samarkand", "Asia/Seoul", "Asia/Shanghai", "Asia/Singapore", "Asia/Srednekolymsk", "Asia/Taipei", "Asia/Tashkent", "Asia/Tbilisi", "Asia/Tehran", "Asia/Thimphu", "Asia/Tokyo", "Asia/Tomsk", "Asia/Ulaanbaatar", "Asia/Urumqi", "Asia/Ust-Nera", "Asia/Vientiane", "Asia/Vladivostok", "Asia/Yakutsk", "Asia/Yangon", "Asia/Yekaterinburg", "Asia/Yerevan", "Atlantic/Azores", "Atlantic/Bermuda", "Atlantic/Canary", "Atlantic/Cape_Verde", "Atlantic/Faroe", "Atlantic/Madeira", "Atlantic/Reykjavik", "Atlantic/South_Georgia", "Atlantic/St_Helena", "Atlantic/Stanley", "Australia/Adelaide", "Australia/Brisbane", "Australia/Broken_Hill", "Australia/Currie", "Australia/Darwin", "Australia/Eucla", "Australia/Hobart", "Australia/Lindeman", "Australia/Lord_Howe", "Australia/Melbourne", "Australia/Perth", "Australia/Sydney", "Europe/Amsterdam", "Europe/Andorra", "Europe/Astrakhan", "Europe/Athens", "Europe/Belgrade", "Europe/Berlin", "Europe/Bratislava", "Europe/Brussels", "Europe/Bucharest", "Europe/Budapest", "Europe/Busingen", "Europe/Chisinau", "Europe/Copenhagen", "Europe/Dublin", "Europe/Gibraltar", "Europe/Guernsey", "Europe/Helsinki", "Europe/Isle_of_Man", "Europe/Istanbul", "Europe/Jersey", "Europe/Kaliningrad", "Europe/Kiev", "Europe/Kirov", "Europe/Lisbon", "Europe/Ljubljana", "Europe/London", "Europe/Luxembourg", "Europe/Madrid", "Europe/Malta", "Europe/Mariehamn", "Europe/Minsk", "Europe/Monaco", "Europe/Moscow", "Europe/Nicosia", "Europe/Oslo", "Europe/Paris", "Europe/Podgorica", "Europe/Prague", "Europe/Riga", "Europe/Rome", "Europe/Samara", "Europe/San_Marino", "Europe/Sarajevo", "Europe/Saratov", "Europe/Simferopol", "Europe/Skopje", "Europe/Sofia", "Europe/Stockholm", "Europe/Tallinn", "Europe/Tirane", "Europe/Ulyanovsk", "Europe/Uzhgorod", "Europe/Vaduz", "Europe/Vatican", "Europe/Vienna", "Europe/Vilnius", "Europe/Volgograd", "Europe/Warsaw", "Europe/Zagreb", "Europe/Zaporozhye", "Europe/Zurich", "Indian/Antananarivo", "Indian/Chagos", "Indian/Christmas", "Indian/Cocos", "Indian/Comoro", "Indian/Kerguelen", "Indian/Mahe", "Indian/Maldives", "Indian/Mauritius", "Indian/Mayotte", "Indian/Reunion", "Pacific/Apia", "Pacific/Auckland", "Pacific/Bougainville", "Pacific/Chatham", "Pacific/Chuuk", "Pacific/Easter", "Pacific/Efate", "Pacific/Enderbury", "Pacific/Fakaofo", "Pacific/Fiji", "Pacific/Funafuti", "Pacific/Galapagos", "Pacific/Gambier", "Pacific/Guadalcanal", "Pacific/Guam", "Pacific/Honolulu", "Pacific/Kanton", "Pacific/Kiritimati", "Pacific/Kosrae", "Pacific/Kwajalein", "Pacific/Majuro", "Pacific/Marquesas", "Pacific/Midway", "Pacific/Nauru", "Pacific/Niue", "Pacific/Norfolk", "Pacific/Noumea", "Pacific/Pago_Pago", "Pacific/Palau", "Pacific/Pitcairn", "Pacific/Pohnpei", "Pacific/Port_Moresby", "Pacific/Rarotonga", "Pacific/Saipan", "Pacific/Tahiti", "Pacific/Tarawa", "Pacific/Tongatapu", "Pacific/Wake", "Pacific/Wallis"]>;
                }, "strip", z.ZodTypeAny, {
                    timeZone: "utc" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fort_Nelson" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis";
                    mode: "today" | "tomorrow" | "yesterday" | "oneWeekAgo" | "oneWeekFromNow" | "oneMonthAgo" | "oneMonthFromNow" | "daysAgo" | "daysFromNow" | "exactDate" | "pastWeek" | "pastMonth" | "pastYear" | "nextWeek" | "nextMonth" | "nextYear" | "pastNumberOfDays" | "nextNumberOfDays";
                    exactDate?: string | undefined;
                    numberOfDays?: number | undefined;
                }, {
                    timeZone: "utc" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fort_Nelson" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis";
                    mode: "today" | "tomorrow" | "yesterday" | "oneWeekAgo" | "oneWeekFromNow" | "oneMonthAgo" | "oneMonthFromNow" | "daysAgo" | "daysFromNow" | "exactDate" | "pastWeek" | "pastMonth" | "pastYear" | "nextWeek" | "nextMonth" | "nextYear" | "pastNumberOfDays" | "nextNumberOfDays";
                    exactDate?: string | undefined;
                    numberOfDays?: number | undefined;
                }>]>>;
                operator: z.ZodUnion<[z.ZodLiteral<"is">, z.ZodLiteral<"isNot">, z.ZodLiteral<"contains">, z.ZodLiteral<"doesNotContain">, z.ZodLiteral<"isGreater">, z.ZodLiteral<"isGreaterEqual">, z.ZodLiteral<"isLess">, z.ZodLiteral<"isLessEqual">, z.ZodLiteral<"isEmpty">, z.ZodLiteral<"isNotEmpty">, z.ZodLiteral<"isAnyOf">, z.ZodLiteral<"isNoneOf">, z.ZodLiteral<"hasAnyOf">, z.ZodLiteral<"hasAllOf">, z.ZodLiteral<"hasNoneOf">, z.ZodLiteral<"isExactly">, z.ZodLiteral<"isWithIn">, z.ZodLiteral<"isBefore">, z.ZodLiteral<"isAfter">, z.ZodLiteral<"isOnOrBefore">, z.ZodLiteral<"isOnOrAfter">]>;
            }, "strip", z.ZodTypeAny, {
                value: string | number | boolean | {
                    timeZone: "utc" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fort_Nelson" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis";
                    mode: "today" | "tomorrow" | "yesterday" | "oneWeekAgo" | "oneWeekFromNow" | "oneMonthAgo" | "oneMonthFromNow" | "daysAgo" | "daysFromNow" | "exactDate" | "pastWeek" | "pastMonth" | "pastYear" | "nextWeek" | "nextMonth" | "nextYear" | "pastNumberOfDays" | "nextNumberOfDays";
                    exactDate?: string | undefined;
                    numberOfDays?: number | undefined;
                } | [string | number | boolean, ...(string | number | boolean)[]] | null;
                fieldId: string;
                operator: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | "isGreater" | "isGreaterEqual" | "isLess" | "isLessEqual" | "isAnyOf" | "isNoneOf" | "hasAnyOf" | "hasAllOf" | "hasNoneOf" | "isExactly" | "isWithIn" | "isBefore" | "isAfter" | "isOnOrBefore" | "isOnOrAfter";
                isSymbol?: false | undefined;
            }, {
                value: string | number | boolean | {
                    timeZone: "utc" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fort_Nelson" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis";
                    mode: "today" | "tomorrow" | "yesterday" | "oneWeekAgo" | "oneWeekFromNow" | "oneMonthAgo" | "oneMonthFromNow" | "daysAgo" | "daysFromNow" | "exactDate" | "pastWeek" | "pastMonth" | "pastYear" | "nextWeek" | "nextMonth" | "nextYear" | "pastNumberOfDays" | "nextNumberOfDays";
                    exactDate?: string | undefined;
                    numberOfDays?: number | undefined;
                } | [string | number | boolean, ...(string | number | boolean)[]] | null;
                fieldId: string;
                operator: "is" | "isNot" | "contains" | "doesNotContain" | "isEmpty" | "isNotEmpty" | "isGreater" | "isGreaterEqual" | "isLess" | "isLessEqual" | "isAnyOf" | "isNoneOf" | "hasAnyOf" | "hasAllOf" | "hasNoneOf" | "isExactly" | "isWithIn" | "isBefore" | "isAfter" | "isOnOrBefore" | "isOnOrAfter";
                isSymbol?: false | undefined;
            }>, z.ZodObject<{
                isSymbol: z.ZodLiteral<true>;
                fieldId: z.ZodString;
                value: z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "atleastone">, z.ZodObject<{
                    mode: z.ZodUnion<[z.ZodLiteral<"today">, z.ZodLiteral<"tomorrow">, z.ZodLiteral<"yesterday">, z.ZodLiteral<"oneWeekAgo">, z.ZodLiteral<"oneWeekFromNow">, z.ZodLiteral<"oneMonthAgo">, z.ZodLiteral<"oneMonthFromNow">, z.ZodLiteral<"daysAgo">, z.ZodLiteral<"daysFromNow">, z.ZodLiteral<"exactDate">, z.ZodLiteral<"pastWeek">, z.ZodLiteral<"pastMonth">, z.ZodLiteral<"pastYear">, z.ZodLiteral<"nextWeek">, z.ZodLiteral<"nextMonth">, z.ZodLiteral<"nextYear">, z.ZodLiteral<"pastNumberOfDays">, z.ZodLiteral<"nextNumberOfDays">]>;
                    numberOfDays: z.ZodOptional<z.ZodNumber>;
                    exactDate: z.ZodOptional<z.ZodString>;
                    timeZone: z.ZodEnum<["utc", "Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", "Africa/Asmara", "Africa/Bamako", "Africa/Bangui", "Africa/Banjul", "Africa/Bissau", "Africa/Blantyre", "Africa/Brazzaville", "Africa/Bujumbura", "Africa/Cairo", "Africa/Casablanca", "Africa/Ceuta", "Africa/Conakry", "Africa/Dakar", "Africa/Dar_es_Salaam", "Africa/Djibouti", "Africa/Douala", "Africa/El_Aaiun", "Africa/Freetown", "Africa/Gaborone", "Africa/Harare", "Africa/Johannesburg", "Africa/Juba", "Africa/Kampala", "Africa/Khartoum", "Africa/Kigali", "Africa/Kinshasa", "Africa/Lagos", "Africa/Libreville", "Africa/Lome", "Africa/Luanda", "Africa/Lubumbashi", "Africa/Lusaka", "Africa/Malabo", "Africa/Maputo", "Africa/Maseru", "Africa/Mbabane", "Africa/Mogadishu", "Africa/Monrovia", "Africa/Nairobi", "Africa/Ndjamena", "Africa/Niamey", "Africa/Nouakchott", "Africa/Ouagadougou", "Africa/Porto-Novo", "Africa/Sao_Tome", "Africa/Tripoli", "Africa/Tunis", "Africa/Windhoek", "America/Adak", "America/Anchorage", "America/Anguilla", "America/Antigua", "America/Araguaina", "America/Argentina/Buenos_Aires", "America/Argentina/Catamarca", "America/Argentina/Cordoba", "America/Argentina/Jujuy", "America/Argentina/La_Rioja", "America/Argentina/Mendoza", "America/Argentina/Rio_Gallegos", "America/Argentina/Salta", "America/Argentina/San_Juan", "America/Argentina/San_Luis", "America/Argentina/Tucuman", "America/Argentina/Ushuaia", "America/Aruba", "America/Asuncion", "America/Atikokan", "America/Bahia", "America/Bahia_Banderas", "America/Barbados", "America/Belem", "America/Belize", "America/Blanc-Sablon", "America/Boa_Vista", "America/Bogota", "America/Boise", "America/Cambridge_Bay", "America/Campo_Grande", "America/Cancun", "America/Caracas", "America/Cayenne", "America/Cayman", "America/Chicago", "America/Chihuahua", "America/Costa_Rica", "America/Creston", "America/Cuiaba", "America/Curacao", "America/Danmarkshavn", "America/Dawson", "America/Dawson_Creek", "America/Denver", "America/Detroit", "America/Dominica", "America/Edmonton", "America/Eirunepe", "America/El_Salvador", "America/Fort_Nelson", "America/Fortaleza", "America/Glace_Bay", "America/Godthab", "America/Goose_Bay", "America/Grand_Turk", "America/Grenada", "America/Guadeloupe", "America/Guatemala", "America/Guayaquil", "America/Guyana", "America/Halifax", "America/Havana", "America/Hermosillo", "America/Indiana/Indianapolis", "America/Indiana/Knox", "America/Indiana/Marengo", "America/Indiana/Petersburg", "America/Indiana/Tell_City", "America/Indiana/Vevay", "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Inuvik", "America/Iqaluit", "America/Jamaica", "America/Juneau", "America/Kentucky/Louisville", "America/Kentucky/Monticello", "America/Kralendijk", "America/La_Paz", "America/Lima", "America/Los_Angeles", "America/Lower_Princes", "America/Maceio", "America/Managua", "America/Manaus", "America/Marigot", "America/Martinique", "America/Matamoros", "America/Mazatlan", "America/Menominee", "America/Merida", "America/Metlakatla", "America/Mexico_City", "America/Miquelon", "America/Moncton", "America/Monterrey", "America/Montevideo", "America/Montserrat", "America/Nassau", "America/New_York", "America/Nipigon", "America/Nome", "America/Noronha", "America/North_Dakota/Beulah", "America/North_Dakota/Center", "America/North_Dakota/New_Salem", "America/Nuuk", "America/Ojinaga", "America/Panama", "America/Pangnirtung", "America/Paramaribo", "America/Phoenix", "America/Port-au-Prince", "America/Port_of_Spain", "America/Porto_Velho", "America/Puerto_Rico", "America/Punta_Arenas", "America/Rainy_River", "America/Rankin_Inlet", "America/Recife", "America/Regina", "America/Resolute", "America/Rio_Branco", "America/Santarem", "America/Santiago", "America/Santo_Domingo", "America/Sao_Paulo", "America/Scoresbysund", "America/Sitka", "America/St_Barthelemy", "America/St_Johns", "America/St_Kitts", "America/St_Lucia", "America/St_Thomas", "America/St_Vincent", "America/Swift_Current", "America/Tegucigalpa", "America/Thule", "America/Thunder_Bay", "America/Tijuana", "America/Toronto", "America/Tortola", "America/Vancouver", "America/Whitehorse", "America/Winnipeg", "America/Yakutat", "America/Yellowknife", "Antarctica/Casey", "Antarctica/Davis", "Antarctica/DumontDUrville", "Antarctica/Macquarie", "Antarctica/Mawson", "Antarctica/McMurdo", "Antarctica/Palmer", "Antarctica/Rothera", "Antarctica/Syowa", "Antarctica/Troll", "Antarctica/Vostok", "Arctic/Longyearbyen", "Asia/Aden", "Asia/Almaty", "Asia/Amman", "Asia/Anadyr", "Asia/Aqtau", "Asia/Aqtobe", "Asia/Ashgabat", "Asia/Atyrau", "Asia/Baghdad", "Asia/Bahrain", "Asia/Baku", "Asia/Bangkok", "Asia/Barnaul", "Asia/Beirut", "Asia/Bishkek", "Asia/Brunei", "Asia/Chita", "Asia/Choibalsan", "Asia/Colombo", "Asia/Damascus", "Asia/Dhaka", "Asia/Dili", "Asia/Dubai", "Asia/Dushanbe", "Asia/Famagusta", "Asia/Gaza", "Asia/Hebron", "Asia/Ho_Chi_Minh", "Asia/Hong_Kong", "Asia/Hovd", "Asia/Irkutsk", "Asia/Istanbul", "Asia/Jakarta", "Asia/Jayapura", "Asia/Jerusalem", "Asia/Kabul", "Asia/Kamchatka", "Asia/Karachi", "Asia/Kathmandu", "Asia/Khandyga", "Asia/Kolkata", "Asia/Krasnoyarsk", "Asia/Kuala_Lumpur", "Asia/Kuching", "Asia/Kuwait", "Asia/Macau", "Asia/Magadan", "Asia/Makassar", "Asia/Manila", "Asia/Muscat", "Asia/Nicosia", "Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk", "Asia/Oral", "Asia/Phnom_Penh", "Asia/Pontianak", "Asia/Pyongyang", "Asia/Qatar", "Asia/Qostanay", "Asia/Qyzylorda", "Asia/Rangoon", "Asia/Riyadh", "Asia/Sakhalin", "Asia/Samarkand", "Asia/Seoul", "Asia/Shanghai", "Asia/Singapore", "Asia/Srednekolymsk", "Asia/Taipei", "Asia/Tashkent", "Asia/Tbilisi", "Asia/Tehran", "Asia/Thimphu", "Asia/Tokyo", "Asia/Tomsk", "Asia/Ulaanbaatar", "Asia/Urumqi", "Asia/Ust-Nera", "Asia/Vientiane", "Asia/Vladivostok", "Asia/Yakutsk", "Asia/Yangon", "Asia/Yekaterinburg", "Asia/Yerevan", "Atlantic/Azores", "Atlantic/Bermuda", "Atlantic/Canary", "Atlantic/Cape_Verde", "Atlantic/Faroe", "Atlantic/Madeira", "Atlantic/Reykjavik", "Atlantic/South_Georgia", "Atlantic/St_Helena", "Atlantic/Stanley", "Australia/Adelaide", "Australia/Brisbane", "Australia/Broken_Hill", "Australia/Currie", "Australia/Darwin", "Australia/Eucla", "Australia/Hobart", "Australia/Lindeman", "Australia/Lord_Howe", "Australia/Melbourne", "Australia/Perth", "Australia/Sydney", "Europe/Amsterdam", "Europe/Andorra", "Europe/Astrakhan", "Europe/Athens", "Europe/Belgrade", "Europe/Berlin", "Europe/Bratislava", "Europe/Brussels", "Europe/Bucharest", "Europe/Budapest", "Europe/Busingen", "Europe/Chisinau", "Europe/Copenhagen", "Europe/Dublin", "Europe/Gibraltar", "Europe/Guernsey", "Europe/Helsinki", "Europe/Isle_of_Man", "Europe/Istanbul", "Europe/Jersey", "Europe/Kaliningrad", "Europe/Kiev", "Europe/Kirov", "Europe/Lisbon", "Europe/Ljubljana", "Europe/London", "Europe/Luxembourg", "Europe/Madrid", "Europe/Malta", "Europe/Mariehamn", "Europe/Minsk", "Europe/Monaco", "Europe/Moscow", "Europe/Nicosia", "Europe/Oslo", "Europe/Paris", "Europe/Podgorica", "Europe/Prague", "Europe/Riga", "Europe/Rome", "Europe/Samara", "Europe/San_Marino", "Europe/Sarajevo", "Europe/Saratov", "Europe/Simferopol", "Europe/Skopje", "Europe/Sofia", "Europe/Stockholm", "Europe/Tallinn", "Europe/Tirane", "Europe/Ulyanovsk", "Europe/Uzhgorod", "Europe/Vaduz", "Europe/Vatican", "Europe/Vienna", "Europe/Vilnius", "Europe/Volgograd", "Europe/Warsaw", "Europe/Zagreb", "Europe/Zaporozhye", "Europe/Zurich", "Indian/Antananarivo", "Indian/Chagos", "Indian/Christmas", "Indian/Cocos", "Indian/Comoro", "Indian/Kerguelen", "Indian/Mahe", "Indian/Maldives", "Indian/Mauritius", "Indian/Mayotte", "Indian/Reunion", "Pacific/Apia", "Pacific/Auckland", "Pacific/Bougainville", "Pacific/Chatham", "Pacific/Chuuk", "Pacific/Easter", "Pacific/Efate", "Pacific/Enderbury", "Pacific/Fakaofo", "Pacific/Fiji", "Pacific/Funafuti", "Pacific/Galapagos", "Pacific/Gambier", "Pacific/Guadalcanal", "Pacific/Guam", "Pacific/Honolulu", "Pacific/Kanton", "Pacific/Kiritimati", "Pacific/Kosrae", "Pacific/Kwajalein", "Pacific/Majuro", "Pacific/Marquesas", "Pacific/Midway", "Pacific/Nauru", "Pacific/Niue", "Pacific/Norfolk", "Pacific/Noumea", "Pacific/Pago_Pago", "Pacific/Palau", "Pacific/Pitcairn", "Pacific/Pohnpei", "Pacific/Port_Moresby", "Pacific/Rarotonga", "Pacific/Saipan", "Pacific/Tahiti", "Pacific/Tarawa", "Pacific/Tongatapu", "Pacific/Wake", "Pacific/Wallis"]>;
                }, "strip", z.ZodTypeAny, {
                    timeZone: "utc" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fort_Nelson" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis";
                    mode: "today" | "tomorrow" | "yesterday" | "oneWeekAgo" | "oneWeekFromNow" | "oneMonthAgo" | "oneMonthFromNow" | "daysAgo" | "daysFromNow" | "exactDate" | "pastWeek" | "pastMonth" | "pastYear" | "nextWeek" | "nextMonth" | "nextYear" | "pastNumberOfDays" | "nextNumberOfDays";
                    exactDate?: string | undefined;
                    numberOfDays?: number | undefined;
                }, {
                    timeZone: "utc" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fort_Nelson" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis";
                    mode: "today" | "tomorrow" | "yesterday" | "oneWeekAgo" | "oneWeekFromNow" | "oneMonthAgo" | "oneMonthFromNow" | "daysAgo" | "daysFromNow" | "exactDate" | "pastWeek" | "pastMonth" | "pastYear" | "nextWeek" | "nextMonth" | "nextYear" | "pastNumberOfDays" | "nextNumberOfDays";
                    exactDate?: string | undefined;
                    numberOfDays?: number | undefined;
                }>]>>;
                operator: z.ZodUnion<[z.ZodLiteral<"=">, z.ZodLiteral<"!=">, z.ZodLiteral<">">, z.ZodLiteral<">=">, z.ZodLiteral<"<">, z.ZodLiteral<"<=">, z.ZodLiteral<"LIKE">, z.ZodLiteral<"IN">, z.ZodLiteral<"HAS">, z.ZodLiteral<"NOT LIKE">, z.ZodLiteral<"NOT IN">, z.ZodLiteral<"IS NULL">, z.ZodLiteral<"IS NOT NULL">]>;
            }, "strip", z.ZodTypeAny, {
                value: string | number | boolean | {
                    timeZone: "utc" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fort_Nelson" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis";
                    mode: "today" | "tomorrow" | "yesterday" | "oneWeekAgo" | "oneWeekFromNow" | "oneMonthAgo" | "oneMonthFromNow" | "daysAgo" | "daysFromNow" | "exactDate" | "pastWeek" | "pastMonth" | "pastYear" | "nextWeek" | "nextMonth" | "nextYear" | "pastNumberOfDays" | "nextNumberOfDays";
                    exactDate?: string | undefined;
                    numberOfDays?: number | undefined;
                } | [string | number | boolean, ...(string | number | boolean)[]] | null;
                fieldId: string;
                isSymbol: true;
                operator: "=" | "!=" | ">" | ">=" | "<" | "<=" | "LIKE" | "IN" | "HAS" | "NOT LIKE" | "NOT IN" | "IS NULL" | "IS NOT NULL";
            }, {
                value: string | number | boolean | {
                    timeZone: "utc" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Fort_Nelson" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Colombo" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kathmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ulaanbaatar" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faroe" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/Perth" | "Australia/Sydney" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Wake" | "Pacific/Wallis";
                    mode: "today" | "tomorrow" | "yesterday" | "oneWeekAgo" | "oneWeekFromNow" | "oneMonthAgo" | "oneMonthFromNow" | "daysAgo" | "daysFromNow" | "exactDate" | "pastWeek" | "pastMonth" | "pastYear" | "nextWeek" | "nextMonth" | "nextYear" | "pastNumberOfDays" | "nextNumberOfDays";
                    exactDate?: string | undefined;
                    numberOfDays?: number | undefined;
                } | [string | number | boolean, ...(string | number | boolean)[]] | null;
                fieldId: string;
                isSymbol: true;
                operator: "=" | "!=" | ">" | ">=" | "<" | "<=" | "LIKE" | "IN" | "HAS" | "NOT LIKE" | "NOT IN" | "IS NULL" | "IS NOT NULL";
            }>]>, any]>, "many">;
            conjunction: z.ZodUnion<[z.ZodLiteral<"and">, z.ZodLiteral<"or">]>;
        }, "strip", z.ZodTypeAny, {
            conjunction: "and" | "or";
            filterSet: any[];
        }, {
            conjunction: "and" | "or";
            filterSet: any[];
        }>>>;
        options: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
            rowHeight: z.ZodOptional<z.ZodNativeEnum<typeof import("@/types").RowHeightLevel>>;
            frozenColumnCount: z.ZodOptional<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            rowHeight?: import("@/types").RowHeightLevel | undefined;
            frozenColumnCount?: number | undefined;
        }, {
            rowHeight?: import("@/types").RowHeightLevel | undefined;
            frozenColumnCount?: number | undefined;
        }>, z.ZodObject<{
            groupingFieldId: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            groupingFieldId: string;
        }, {
            groupingFieldId: string;
        }>, z.ZodObject<{
            coverUrl: z.ZodOptional<z.ZodString>;
            logoUrl: z.ZodOptional<z.ZodString>;
            submitLabel: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            coverUrl?: string | undefined;
            logoUrl?: string | undefined;
            submitLabel?: string | undefined;
        }, {
            coverUrl?: string | undefined;
            logoUrl?: string | undefined;
            submitLabel?: string | undefined;
        }>]>>;
        description: z.ZodOptional<z.ZodString>;
        order: z.ZodOptional<z.ZodNumber>;
        group: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            fieldId: z.ZodString;
            order: z.ZodNativeEnum<typeof import("./views").SortFunc>;
        }, "strip", z.ZodTypeAny, {
            fieldId: string;
            order: import("./views").SortFunc;
        }, {
            fieldId: string;
            order: import("./views").SortFunc;
        }>, "many">>>;
        shareId: z.ZodOptional<z.ZodString>;
        enableShare: z.ZodOptional<z.ZodBoolean>;
        shareMeta: z.ZodOptional<z.ZodObject<{
            allowCopy: z.ZodOptional<z.ZodBoolean>;
            includeHiddenField: z.ZodOptional<z.ZodBoolean>;
            password: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            allowCopy?: boolean | undefined;
            includeHiddenField?: boolean | undefined;
            password?: string | undefined;
        }, {
            allowCopy?: boolean | undefined;
            includeHiddenField?: boolean | undefined;
            password?: string | undefined;
        }>>;
        columnMeta: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
            order: z.ZodNumber;
        }, {
            width: z.ZodOptional<z.ZodNumber>;
            hidden: z.ZodOptional<z.ZodBoolean>;
            statisticFunc: z.ZodOptional<z.ZodNullable<z.ZodNativeEnum<typeof import("@/types").StatisticsFunc>>>;
        }>, "strip", z.ZodTypeAny, {
            order: number;
            width?: number | undefined;
            hidden?: boolean | undefined;
            statisticFunc?: import("@/types").StatisticsFunc | null | undefined;
        }, {
            order: number;
            width?: number | undefined;
            hidden?: boolean | undefined;
            statisticFunc?: import("@/types").StatisticsFunc | null | undefined;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            order: z.ZodNumber;
        }, {
            hidden: z.ZodOptional<z.ZodBoolean>;
        }>, "strip", z.ZodTypeAny, {
            order: number;
            hidden?: boolean | undefined;
        }, {
            order: number;
            hidden?: boolean | undefined;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            order: z.ZodNumber;
        }, {
            visible: z.ZodOptional<z.ZodBoolean>;
            required: z.ZodOptional<z.ZodBoolean>;
        }>, "strip", z.ZodTypeAny, {
            order: number;
            visible?: boolean | undefined;
            required?: boolean | undefined;
        }, {
            order: number;
            visible?: boolean | undefined;
            required?: boolean | undefined;
        }>]>>;
    }, "strip", z.ZodTypeAny, {
        type: import("@/types").TeableViewTypeEnum;
        columnMeta: Record<string, {
            order: number;
            width?: number | undefined;
            hidden?: boolean | undefined;
            statisticFunc?: import("@/types").StatisticsFunc | null | undefined;
        } | {
            order: number;
            hidden?: boolean | undefined;
        } | {
            order: number;
            visible?: boolean | undefined;
            required?: boolean | undefined;
        }>;
        name?: string | undefined;
        sort?: {
            sortObjs: {
                fieldId: string;
                order: import("./views").SortFunc;
            }[];
            manualSort?: boolean | undefined;
        } | null | undefined;
        filter?: {
            conjunction: "and" | "or";
            filterSet: any[];
        } | null | undefined;
        options?: {
            coverUrl?: string | undefined;
            logoUrl?: string | undefined;
            submitLabel?: string | undefined;
        } | {
            rowHeight?: import("@/types").RowHeightLevel | undefined;
            frozenColumnCount?: number | undefined;
        } | {
            groupingFieldId: string;
        } | undefined;
        description?: string | undefined;
        order?: number | undefined;
        group?: {
            fieldId: string;
            order: import("./views").SortFunc;
        }[] | null | undefined;
        shareId?: string | undefined;
        enableShare?: boolean | undefined;
        shareMeta?: {
            allowCopy?: boolean | undefined;
            includeHiddenField?: boolean | undefined;
            password?: string | undefined;
        } | undefined;
    }, {
        type: import("@/types").TeableViewTypeEnum;
        columnMeta: Record<string, {
            order: number;
            width?: number | undefined;
            hidden?: boolean | undefined;
            statisticFunc?: import("@/types").StatisticsFunc | null | undefined;
        } | {
            order: number;
            hidden?: boolean | undefined;
        } | {
            order: number;
            visible?: boolean | undefined;
            required?: boolean | undefined;
        }>;
        name?: string | undefined;
        sort?: {
            sortObjs: {
                fieldId: string;
                order: import("./views").SortFunc;
            }[];
            manualSort?: boolean | undefined;
        } | null | undefined;
        filter?: {
            conjunction: "and" | "or";
            filterSet: any[];
        } | null | undefined;
        options?: {
            coverUrl?: string | undefined;
            logoUrl?: string | undefined;
            submitLabel?: string | undefined;
        } | {
            rowHeight?: import("@/types").RowHeightLevel | undefined;
            frozenColumnCount?: number | undefined;
        } | {
            groupingFieldId: string;
        } | undefined;
        description?: string | undefined;
        order?: number | undefined;
        group?: {
            fieldId: string;
            order: import("./views").SortFunc;
        }[] | null | undefined;
        shareId?: string | undefined;
        enableShare?: boolean | undefined;
        shareMeta?: {
            allowCopy?: boolean | undefined;
            includeHiddenField?: boolean | undefined;
            password?: string | undefined;
        } | undefined;
    }>, "many">>;
    fieldKeyType: z.ZodOptional<z.ZodEffects<z.ZodDefault<z.ZodNativeEnum<typeof import("@/types").TeableFieldKeyType>>, import("@/types").TeableFieldKeyType, import("@/types").TeableFieldKeyType | undefined>>;
    fields: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        name: z.ZodOptional<z.ZodString>;
        type: z.ZodNativeEnum<typeof import("@/types").TeableFieldType>;
        description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        isLookup: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        dbFieldName: z.ZodOptional<z.ZodString>;
    }, {
        name: z.ZodOptional<z.ZodString>;
        description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        lookupOptions: z.ZodOptional<z.ZodObject<Pick<z.objectUtil.extendShape<Pick<{
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
        }>, "foreignTableId" | "lookupFieldId" | "linkFieldId">, "strip", z.ZodTypeAny, {
            foreignTableId: string;
            lookupFieldId: string;
            linkFieldId: string;
        }, {
            foreignTableId: string;
            lookupFieldId: string;
            linkFieldId: string;
        }>>;
        options: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodObject<{
            expression: z.ZodEnum<["countall({values})", "counta({values})", "count({values})", "sum({values})", "max({values})", "min({values})", "and({values})", "or({values})", "xor({values})", "array_join({values})", "array_unique({values})", "array_compact({values})", "concatenate({values})"]>;
            formatting: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                date: z.ZodString;
                time: z.ZodNativeEnum<typeof import("./fields").TimeFormatting>;
                timeZone: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            }, {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            }>, z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
                precision: z.ZodNumber;
            }, {
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Decimal>;
            }>, "strip", z.ZodTypeAny, {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            }, {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                precision: z.ZodNumber;
            }, {
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Percent>;
            }>, "strip", z.ZodTypeAny, {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            }, {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                precision: z.ZodNumber;
            }, {
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Currency>;
                symbol: z.ZodString;
            }>, "strip", z.ZodTypeAny, {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            }, {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            }>]>]>>;
            showAs: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").SingleLineTextDisplayType>;
            }, "strict", z.ZodTypeAny, {
                type: import("./fields").SingleLineTextDisplayType;
            }, {
                type: import("./fields").SingleLineTextDisplayType;
            }>, z.ZodUnion<[z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").SingleNumberDisplayType>;
                color: z.ZodNativeEnum<typeof import("@/types").Colors>;
                showValue: z.ZodBoolean;
                maxValue: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            }, {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            }>, z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").MultiNumberDisplayType>;
                color: z.ZodNativeEnum<typeof import("@/types").Colors>;
            }, "strict", z.ZodTypeAny, {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            }, {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            }>]>]>>;
        }, "strict", z.ZodTypeAny, {
            expression: "countall({values})" | "counta({values})" | "count({values})" | "sum({values})" | "max({values})" | "min({values})" | "and({values})" | "or({values})" | "xor({values})" | "array_join({values})" | "array_unique({values})" | "array_compact({values})" | "concatenate({values})";
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        }, {
            expression: "countall({values})" | "counta({values})" | "count({values})" | "sum({values})" | "max({values})" | "min({values})" | "and({values})" | "or({values})" | "xor({values})" | "array_join({values})" | "array_unique({values})" | "array_compact({values})" | "concatenate({values})";
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        }>, z.ZodObject<{
            expression: z.ZodString;
            formatting: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                date: z.ZodString;
                time: z.ZodNativeEnum<typeof import("./fields").TimeFormatting>;
                timeZone: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            }, {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            }>, z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
                precision: z.ZodNumber;
            }, {
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Decimal>;
            }>, "strip", z.ZodTypeAny, {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            }, {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                precision: z.ZodNumber;
            }, {
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Percent>;
            }>, "strip", z.ZodTypeAny, {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            }, {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                precision: z.ZodNumber;
            }, {
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Currency>;
                symbol: z.ZodString;
            }>, "strip", z.ZodTypeAny, {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            }, {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            }>]>]>>;
            showAs: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").SingleLineTextDisplayType>;
            }, "strict", z.ZodTypeAny, {
                type: import("./fields").SingleLineTextDisplayType;
            }, {
                type: import("./fields").SingleLineTextDisplayType;
            }>, z.ZodUnion<[z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").SingleNumberDisplayType>;
                color: z.ZodNativeEnum<typeof import("@/types").Colors>;
                showValue: z.ZodBoolean;
                maxValue: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            }, {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            }>, z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").MultiNumberDisplayType>;
                color: z.ZodNativeEnum<typeof import("@/types").Colors>;
            }, "strict", z.ZodTypeAny, {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            }, {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            }>]>]>>;
        }, "strict", z.ZodTypeAny, {
            expression: string;
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        }, {
            expression: string;
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
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
                time: z.ZodNativeEnum<typeof import("./fields/formatting.shcema").TimeFormatting>;
                timeZone: z.ZodEffects<z.ZodString, string, string>;
            }, "strip", z.ZodTypeAny, {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            }, {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            }>;
            defaultValue: z.ZodOptional<z.ZodEnum<["now"]>>;
        }, "strict", z.ZodTypeAny, {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
            defaultValue?: "now" | undefined;
        }, {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
            defaultValue?: "now" | undefined;
        }>, z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>, z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>, z.ZodObject<{
            showAs: z.ZodOptional<z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").SingleLineTextDisplayType>;
            }, "strip", z.ZodTypeAny, {
                type: import("./fields").SingleLineTextDisplayType;
            }, {
                type: import("./fields").SingleLineTextDisplayType;
            }>>;
        }, "strict", z.ZodTypeAny, {
            showAs?: {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        }, {
            showAs?: {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        }>, z.ZodObject<{
            icon: z.ZodNativeEnum<typeof import("./fields").RatingIcon>;
            color: z.ZodEnum<[import("@/types").Colors.YellowBright, import("@/types").Colors.RedBright, import("@/types").Colors.TealBright]>;
            max: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            color: import("@/types").Colors.RedBright | import("@/types").Colors.TealBright | import("@/types").Colors.YellowBright;
            icon: import("./fields").RatingIcon;
            max: number;
        }, {
            color: import("@/types").Colors.RedBright | import("@/types").Colors.TealBright | import("@/types").Colors.YellowBright;
            icon: import("./fields").RatingIcon;
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
            relationship: z.ZodNativeEnum<typeof import("@/types").TeableRelationship>;
            foreignTableId: z.ZodString;
            lookupFieldId: z.ZodString;
            isOneWay: z.ZodOptional<z.ZodBoolean>;
            fkHostTableName: z.ZodString;
            selfKeyName: z.ZodString;
            foreignKeyName: z.ZodString;
            symmetricFieldId: z.ZodOptional<z.ZodString>;
        }, "relationship" | "foreignTableId" | "isOneWay">, "strict", z.ZodTypeAny, {
            relationship: import("@/types").TeableRelationship;
            foreignTableId: string;
            isOneWay?: boolean | undefined;
        }, {
            relationship: import("@/types").TeableRelationship;
            foreignTableId: string;
            isOneWay?: boolean | undefined;
        }>, z.ZodObject<{
            choices: z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
                color: z.ZodOptional<z.ZodNativeEnum<typeof import("@/types").Colors>>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                id?: string | undefined;
                color?: import("@/types").Colors | undefined;
            }, {
                name: string;
                id?: string | undefined;
                color?: import("@/types").Colors | undefined;
            }>, "many">;
        }, "strict", z.ZodTypeAny, {
            choices: {
                name: string;
                id?: string | undefined;
                color?: import("@/types").Colors | undefined;
            }[];
        }, {
            choices: {
                name: string;
                id?: string | undefined;
                color?: import("@/types").Colors | undefined;
            }[];
        }>, z.ZodObject<{
            formatting: z.ZodOptional<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
                precision: z.ZodNumber;
            }, {
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Decimal>;
            }>, "strip", z.ZodTypeAny, {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            }, {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                precision: z.ZodNumber;
            }, {
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Percent>;
            }>, "strip", z.ZodTypeAny, {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            }, {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                precision: z.ZodNumber;
            }, {
                type: z.ZodLiteral<import("./fields").NumberFormattingType.Currency>;
                symbol: z.ZodString;
            }>, "strip", z.ZodTypeAny, {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            }, {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            }>]>>;
            showAs: z.ZodOptional<z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").SingleNumberDisplayType>;
                color: z.ZodNativeEnum<typeof import("@/types").Colors>;
                showValue: z.ZodBoolean;
                maxValue: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            }, {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            }>, z.ZodObject<{
                type: z.ZodNativeEnum<typeof import("./fields").MultiNumberDisplayType>;
                color: z.ZodNativeEnum<typeof import("@/types").Colors>;
            }, "strict", z.ZodTypeAny, {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            }, {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            }>]>>>;
        }, "strict", z.ZodTypeAny, {
            formatting?: {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | undefined;
        }, {
            formatting?: {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | undefined;
        }>, z.ZodObject<Omit<{
            expression: z.ZodLiteral<"AUTO_NUMBER()">;
        }, "expression">, "strict", z.ZodTypeAny, {}, {}>, z.ZodObject<Omit<{
            expression: z.ZodLiteral<"CREATED_TIME()">;
            formatting: z.ZodObject<{
                date: z.ZodString;
                time: z.ZodNativeEnum<typeof import("./fields/formatting.shcema").TimeFormatting>;
                timeZone: z.ZodEffects<z.ZodString, string, string>;
            }, "strip", z.ZodTypeAny, {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            }, {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            }>;
        }, "expression">, "strict", z.ZodTypeAny, {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
        }, {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
        }>, z.ZodObject<Omit<{
            expression: z.ZodLiteral<"LAST_MODIFIED_TIME()">;
            formatting: z.ZodObject<{
                date: z.ZodString;
                time: z.ZodNativeEnum<typeof import("./fields").TimeFormatting>;
                timeZone: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            }, {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            }>;
        }, "expression">, "strict", z.ZodTypeAny, {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            };
        }, {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            };
        }>]>>;
    }>, "strip", z.ZodTypeAny, {
        type: import("@/types").TeableFieldType;
        name?: string | undefined;
        options?: {} | {} | {} | {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
        } | {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            };
        } | {
            relationship: import("@/types").TeableRelationship;
            foreignTableId: string;
            lookupFieldId: string;
            fkHostTableName: string;
            selfKeyName: string;
            foreignKeyName: string;
            isOneWay?: boolean | undefined;
            symmetricFieldId?: string | undefined;
        } | {
            relationship: import("@/types").TeableRelationship;
            foreignTableId: string;
            isOneWay?: boolean | undefined;
        } | {} | {
            formatting?: {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | undefined;
        } | {
            expression: "countall({values})" | "counta({values})" | "count({values})" | "sum({values})" | "max({values})" | "min({values})" | "and({values})" | "or({values})" | "xor({values})" | "array_join({values})" | "array_unique({values})" | "array_compact({values})" | "concatenate({values})";
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            expression: string;
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
            defaultValue?: "now" | undefined;
        } | {
            showAs?: {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            color: import("@/types").Colors.RedBright | import("@/types").Colors.TealBright | import("@/types").Colors.YellowBright;
            icon: import("./fields").RatingIcon;
            max: number;
        } | {
            isMultiple: boolean;
            shouldNotify: boolean;
        } | {
            choices: {
                name: string;
                id?: string | undefined;
                color?: import("@/types").Colors | undefined;
            }[];
        } | undefined;
        description?: string | null | undefined;
        isLookup?: boolean | undefined;
        lookupOptions?: {
            foreignTableId: string;
            lookupFieldId: string;
            linkFieldId: string;
        } | undefined;
        dbFieldName?: string | undefined;
    }, {
        type: import("@/types").TeableFieldType;
        name?: string | undefined;
        options?: {} | {} | {} | {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
        } | {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            };
        } | {
            relationship: import("@/types").TeableRelationship;
            foreignTableId: string;
            lookupFieldId: string;
            fkHostTableName: string;
            selfKeyName: string;
            foreignKeyName: string;
            isOneWay?: boolean | undefined;
            symmetricFieldId?: string | undefined;
        } | {
            relationship: import("@/types").TeableRelationship;
            foreignTableId: string;
            isOneWay?: boolean | undefined;
        } | {} | {
            formatting?: {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | undefined;
        } | {
            expression: "countall({values})" | "counta({values})" | "count({values})" | "sum({values})" | "max({values})" | "min({values})" | "and({values})" | "or({values})" | "xor({values})" | "array_join({values})" | "array_unique({values})" | "array_compact({values})" | "concatenate({values})";
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            expression: string;
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
            defaultValue?: "now" | undefined;
        } | {
            showAs?: {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            color: import("@/types").Colors.RedBright | import("@/types").Colors.TealBright | import("@/types").Colors.YellowBright;
            icon: import("./fields").RatingIcon;
            max: number;
        } | {
            isMultiple: boolean;
            shouldNotify: boolean;
        } | {
            choices: {
                name: string;
                id?: string | undefined;
                color?: import("@/types").Colors | undefined;
            }[];
        } | undefined;
        description?: string | null | undefined;
        isLookup?: boolean | undefined;
        lookupOptions?: {
            foreignTableId: string;
            lookupFieldId: string;
            linkFieldId: string;
        } | undefined;
        dbFieldName?: string | undefined;
    }>, "many">>;
    records: z.ZodOptional<z.ZodArray<z.ZodObject<{
        fields: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        fields: Record<string, unknown>;
    }, {
        fields: Record<string, unknown>;
    }>, "many">>;
    order: z.ZodOptional<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    description?: string | null | undefined;
    icon?: string | null | undefined;
    fields?: {
        type: import("@/types").TeableFieldType;
        name?: string | undefined;
        options?: {} | {} | {} | {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
        } | {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            };
        } | {
            relationship: import("@/types").TeableRelationship;
            foreignTableId: string;
            lookupFieldId: string;
            fkHostTableName: string;
            selfKeyName: string;
            foreignKeyName: string;
            isOneWay?: boolean | undefined;
            symmetricFieldId?: string | undefined;
        } | {
            relationship: import("@/types").TeableRelationship;
            foreignTableId: string;
            isOneWay?: boolean | undefined;
        } | {} | {
            formatting?: {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | undefined;
        } | {
            expression: "countall({values})" | "counta({values})" | "count({values})" | "sum({values})" | "max({values})" | "min({values})" | "and({values})" | "or({values})" | "xor({values})" | "array_join({values})" | "array_unique({values})" | "array_compact({values})" | "concatenate({values})";
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            expression: string;
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
            defaultValue?: "now" | undefined;
        } | {
            showAs?: {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            color: import("@/types").Colors.RedBright | import("@/types").Colors.TealBright | import("@/types").Colors.YellowBright;
            icon: import("./fields").RatingIcon;
            max: number;
        } | {
            isMultiple: boolean;
            shouldNotify: boolean;
        } | {
            choices: {
                name: string;
                id?: string | undefined;
                color?: import("@/types").Colors | undefined;
            }[];
        } | undefined;
        description?: string | null | undefined;
        isLookup?: boolean | undefined;
        lookupOptions?: {
            foreignTableId: string;
            lookupFieldId: string;
            linkFieldId: string;
        } | undefined;
        dbFieldName?: string | undefined;
    }[] | undefined;
    views?: {
        type: import("@/types").TeableViewTypeEnum;
        columnMeta: Record<string, {
            order: number;
            width?: number | undefined;
            hidden?: boolean | undefined;
            statisticFunc?: import("@/types").StatisticsFunc | null | undefined;
        } | {
            order: number;
            hidden?: boolean | undefined;
        } | {
            order: number;
            visible?: boolean | undefined;
            required?: boolean | undefined;
        }>;
        name?: string | undefined;
        sort?: {
            sortObjs: {
                fieldId: string;
                order: import("./views").SortFunc;
            }[];
            manualSort?: boolean | undefined;
        } | null | undefined;
        filter?: {
            conjunction: "and" | "or";
            filterSet: any[];
        } | null | undefined;
        options?: {
            coverUrl?: string | undefined;
            logoUrl?: string | undefined;
            submitLabel?: string | undefined;
        } | {
            rowHeight?: import("@/types").RowHeightLevel | undefined;
            frozenColumnCount?: number | undefined;
        } | {
            groupingFieldId: string;
        } | undefined;
        description?: string | undefined;
        order?: number | undefined;
        group?: {
            fieldId: string;
            order: import("./views").SortFunc;
        }[] | null | undefined;
        shareId?: string | undefined;
        enableShare?: boolean | undefined;
        shareMeta?: {
            allowCopy?: boolean | undefined;
            includeHiddenField?: boolean | undefined;
            password?: string | undefined;
        } | undefined;
    }[] | undefined;
    records?: {
        fields: Record<string, unknown>;
    }[] | undefined;
    fieldKeyType?: import("@/types").TeableFieldKeyType | undefined;
    order?: number | undefined;
    dbTableName?: string | undefined;
}, {
    name?: string | undefined;
    description?: string | null | undefined;
    icon?: string | null | undefined;
    fields?: {
        type: import("@/types").TeableFieldType;
        name?: string | undefined;
        options?: {} | {} | {} | {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
        } | {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            };
        } | {
            relationship: import("@/types").TeableRelationship;
            foreignTableId: string;
            lookupFieldId: string;
            fkHostTableName: string;
            selfKeyName: string;
            foreignKeyName: string;
            isOneWay?: boolean | undefined;
            symmetricFieldId?: string | undefined;
        } | {
            relationship: import("@/types").TeableRelationship;
            foreignTableId: string;
            isOneWay?: boolean | undefined;
        } | {} | {
            formatting?: {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | undefined;
        } | {
            expression: "countall({values})" | "counta({values})" | "count({values})" | "sum({values})" | "max({values})" | "min({values})" | "and({values})" | "or({values})" | "xor({values})" | "array_join({values})" | "array_unique({values})" | "array_compact({values})" | "concatenate({values})";
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            expression: string;
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./fields").TimeFormatting;
            } | {
                type: import("./fields").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./fields").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./fields").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./fields").SingleNumberDisplayType;
                color: import("@/types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./fields").MultiNumberDisplayType;
                color: import("@/types").Colors;
            } | {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./fields/formatting.shcema").TimeFormatting;
            };
            defaultValue?: "now" | undefined;
        } | {
            showAs?: {
                type: import("./fields").SingleLineTextDisplayType;
            } | undefined;
        } | {
            color: import("@/types").Colors.RedBright | import("@/types").Colors.TealBright | import("@/types").Colors.YellowBright;
            icon: import("./fields").RatingIcon;
            max: number;
        } | {
            isMultiple: boolean;
            shouldNotify: boolean;
        } | {
            choices: {
                name: string;
                id?: string | undefined;
                color?: import("@/types").Colors | undefined;
            }[];
        } | undefined;
        description?: string | null | undefined;
        isLookup?: boolean | undefined;
        lookupOptions?: {
            foreignTableId: string;
            lookupFieldId: string;
            linkFieldId: string;
        } | undefined;
        dbFieldName?: string | undefined;
    }[] | undefined;
    views?: {
        type: import("@/types").TeableViewTypeEnum;
        columnMeta: Record<string, {
            order: number;
            width?: number | undefined;
            hidden?: boolean | undefined;
            statisticFunc?: import("@/types").StatisticsFunc | null | undefined;
        } | {
            order: number;
            hidden?: boolean | undefined;
        } | {
            order: number;
            visible?: boolean | undefined;
            required?: boolean | undefined;
        }>;
        name?: string | undefined;
        sort?: {
            sortObjs: {
                fieldId: string;
                order: import("./views").SortFunc;
            }[];
            manualSort?: boolean | undefined;
        } | null | undefined;
        filter?: {
            conjunction: "and" | "or";
            filterSet: any[];
        } | null | undefined;
        options?: {
            coverUrl?: string | undefined;
            logoUrl?: string | undefined;
            submitLabel?: string | undefined;
        } | {
            rowHeight?: import("@/types").RowHeightLevel | undefined;
            frozenColumnCount?: number | undefined;
        } | {
            groupingFieldId: string;
        } | undefined;
        description?: string | undefined;
        order?: number | undefined;
        group?: {
            fieldId: string;
            order: import("./views").SortFunc;
        }[] | null | undefined;
        shareId?: string | undefined;
        enableShare?: boolean | undefined;
        shareMeta?: {
            allowCopy?: boolean | undefined;
            includeHiddenField?: boolean | undefined;
            password?: string | undefined;
        } | undefined;
    }[] | undefined;
    records?: {
        fields: Record<string, unknown>;
    }[] | undefined;
    fieldKeyType?: import("@/types").TeableFieldKeyType | undefined;
    order?: number | undefined;
    dbTableName?: string | undefined;
}>;
export type ICreateTableRo = z.infer<typeof tableRoSchema>;
//# sourceMappingURL=table.shema.d.ts.map