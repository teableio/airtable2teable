import { IConvertFieldRo, IRecordsRo, ISdkConfig, IUpdateFieldRo } from './index';
import { ICreateFieldRo, ITableTableVo, IViewRo } from './schemas';
import { View } from './view';
export declare class Table {
    private config;
    info: ITableTableVo;
    constructor(config: ISdkConfig, info: ITableTableVo);
    get id(): string;
    get name(): string;
    get description(): string | undefined;
    get icon(): string | undefined;
    get order(): number;
    get vo(): {
        lastModifiedTime: string;
        id: string;
        name: string;
        fields: {
            id: string;
            name: string;
            type: import("../types").TeableFieldType;
            options: {} | {} | {
                relationship: import("../types").TeableRelationship;
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
                    time: import("./index").TimeFormatting;
                } | {
                    type: import("./index").NumberFormattingType.Decimal;
                    precision: number;
                } | {
                    type: import("./index").NumberFormattingType.Percent;
                    precision: number;
                } | {
                    symbol: string;
                    type: import("./index").NumberFormattingType.Currency;
                    precision: number;
                } | undefined;
                showAs?: {
                    type: import("./index").SingleNumberDisplayType;
                    color: import("../types").Colors;
                    showValue: boolean;
                    maxValue: number;
                } | {
                    type: import("./index").MultiNumberDisplayType;
                    color: import("../types").Colors;
                } | {
                    type: import("./index").SingleLineTextDisplayType;
                } | undefined;
            } | {
                expression: string;
                formatting?: {
                    date: string;
                    timeZone: string;
                    time: import("./index").TimeFormatting;
                } | {
                    type: import("./index").NumberFormattingType.Decimal;
                    precision: number;
                } | {
                    type: import("./index").NumberFormattingType.Percent;
                    precision: number;
                } | {
                    symbol: string;
                    type: import("./index").NumberFormattingType.Currency;
                    precision: number;
                } | undefined;
                showAs?: {
                    type: import("./index").SingleNumberDisplayType;
                    color: import("../types").Colors;
                    showValue: boolean;
                    maxValue: number;
                } | {
                    type: import("./index").MultiNumberDisplayType;
                    color: import("../types").Colors;
                } | {
                    type: import("./index").SingleLineTextDisplayType;
                } | undefined;
            } | {
                formatting: {
                    date: string;
                    timeZone: string;
                    time: import("./schemas/fields/formatting.shcema").TimeFormatting;
                };
                defaultValue?: "now" | undefined;
            } | {
                showAs?: {
                    type: import("./index").SingleLineTextDisplayType;
                } | undefined;
            } | {
                color: import("../types").Colors.RedBright | import("../types").Colors.TealBright | import("../types").Colors.YellowBright;
                icon: import("./index").RatingIcon;
                max: number;
            } | {
                isMultiple: boolean;
                shouldNotify: boolean;
            } | {
                choices: {
                    id: string;
                    name: string;
                    color: import("../types").Colors;
                }[];
            } | {
                formatting: {
                    type: import("./index").NumberFormattingType.Decimal;
                    precision: number;
                } | {
                    type: import("./index").NumberFormattingType.Percent;
                    precision: number;
                } | {
                    symbol: string;
                    type: import("./index").NumberFormattingType.Currency;
                    precision: number;
                };
                showAs?: {
                    type: import("./index").SingleNumberDisplayType;
                    color: import("../types").Colors;
                    showValue: boolean;
                    maxValue: number;
                } | {
                    type: import("./index").MultiNumberDisplayType;
                    color: import("../types").Colors;
                } | undefined;
            } | {
                expression: "AUTO_NUMBER()";
            } | {
                expression: "CREATED_TIME()";
                formatting: {
                    date: string;
                    timeZone: string;
                    time: import("./schemas/fields/formatting.shcema").TimeFormatting;
                };
            } | {
                expression: "LAST_MODIFIED_TIME()";
                formatting: {
                    date: string;
                    timeZone: string;
                    time: import("./index").TimeFormatting;
                };
            };
            cellValueType: import("../types").TeableCellValueType;
            dbFieldType: import("../types").TeableDbFieldType;
            dbFieldName: string;
            description?: string | undefined;
            unique?: boolean | undefined;
            isLookup?: boolean | undefined;
            lookupOptions?: {
                relationship: import("../types").TeableRelationship;
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
            type: import("../types").TeableViewTypeEnum;
            order: number;
            columnMeta: Record<string, {
                order: number;
                width?: number | undefined;
                hidden?: boolean | undefined;
                statisticFunc?: import("../types").StatisticsFunc | null | undefined;
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
                    order: import("./index").SortFunc;
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
                rowHeight?: import("../types").RowHeightLevel | undefined;
                frozenColumnCount?: number | undefined;
            } | {
                groupingFieldId: string;
            } | undefined;
            description?: string | undefined;
            group?: {
                fieldId: string;
                order: import("./index").SortFunc;
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
    };
    createView(view: IViewRo): Promise<View>;
    createRecords(records: IRecordsRo): Promise<{
        autoNumber: number;
        id: string;
        name: string;
        fields: Record<string, unknown>;
        recordOrder: Record<string, number>;
        createdTime?: string | undefined;
        lastModifiedTime?: string | undefined;
        createdBy?: string | undefined;
        lastModifiedBy?: string | undefined;
    }[]>;
    deleteRecords(recordIds: string[]): Promise<void>;
    createField(field: ICreateFieldRo): Promise<{
        id: string;
        name: string;
        type: import("../types").TeableFieldType;
        options: {} | {} | {
            relationship: import("../types").TeableRelationship;
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
                time: import("./index").TimeFormatting;
            } | {
                type: import("./index").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./index").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./index").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./index").SingleNumberDisplayType;
                color: import("../types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./index").MultiNumberDisplayType;
                color: import("../types").Colors;
            } | {
                type: import("./index").SingleLineTextDisplayType;
            } | undefined;
        } | {
            expression: string;
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./index").TimeFormatting;
            } | {
                type: import("./index").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./index").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./index").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./index").SingleNumberDisplayType;
                color: import("../types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./index").MultiNumberDisplayType;
                color: import("../types").Colors;
            } | {
                type: import("./index").SingleLineTextDisplayType;
            } | undefined;
        } | {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./schemas/fields/formatting.shcema").TimeFormatting;
            };
            defaultValue?: "now" | undefined;
        } | {
            showAs?: {
                type: import("./index").SingleLineTextDisplayType;
            } | undefined;
        } | {
            color: import("../types").Colors.RedBright | import("../types").Colors.TealBright | import("../types").Colors.YellowBright;
            icon: import("./index").RatingIcon;
            max: number;
        } | {
            isMultiple: boolean;
            shouldNotify: boolean;
        } | {
            choices: {
                id: string;
                name: string;
                color: import("../types").Colors;
            }[];
        } | {
            formatting: {
                type: import("./index").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./index").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./index").NumberFormattingType.Currency;
                precision: number;
            };
            showAs?: {
                type: import("./index").SingleNumberDisplayType;
                color: import("../types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./index").MultiNumberDisplayType;
                color: import("../types").Colors;
            } | undefined;
        } | {
            expression: "AUTO_NUMBER()";
        } | {
            expression: "CREATED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./schemas/fields/formatting.shcema").TimeFormatting;
            };
        } | {
            expression: "LAST_MODIFIED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./index").TimeFormatting;
            };
        };
        cellValueType: import("../types").TeableCellValueType;
        dbFieldType: import("../types").TeableDbFieldType;
        dbFieldName: string;
        description?: string | undefined;
        unique?: boolean | undefined;
        isLookup?: boolean | undefined;
        lookupOptions?: {
            relationship: import("../types").TeableRelationship;
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
    updateField(fieldId: string, field: IUpdateFieldRo): Promise<{
        id: string;
        name: string;
        type: import("../types").TeableFieldType;
        options: {} | {} | {
            relationship: import("../types").TeableRelationship;
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
                time: import("./index").TimeFormatting;
            } | {
                type: import("./index").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./index").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./index").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./index").SingleNumberDisplayType;
                color: import("../types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./index").MultiNumberDisplayType;
                color: import("../types").Colors;
            } | {
                type: import("./index").SingleLineTextDisplayType;
            } | undefined;
        } | {
            expression: string;
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./index").TimeFormatting;
            } | {
                type: import("./index").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./index").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./index").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./index").SingleNumberDisplayType;
                color: import("../types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./index").MultiNumberDisplayType;
                color: import("../types").Colors;
            } | {
                type: import("./index").SingleLineTextDisplayType;
            } | undefined;
        } | {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./schemas/fields/formatting.shcema").TimeFormatting;
            };
            defaultValue?: "now" | undefined;
        } | {
            showAs?: {
                type: import("./index").SingleLineTextDisplayType;
            } | undefined;
        } | {
            color: import("../types").Colors.RedBright | import("../types").Colors.TealBright | import("../types").Colors.YellowBright;
            icon: import("./index").RatingIcon;
            max: number;
        } | {
            isMultiple: boolean;
            shouldNotify: boolean;
        } | {
            choices: {
                id: string;
                name: string;
                color: import("../types").Colors;
            }[];
        } | {
            formatting: {
                type: import("./index").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./index").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./index").NumberFormattingType.Currency;
                precision: number;
            };
            showAs?: {
                type: import("./index").SingleNumberDisplayType;
                color: import("../types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./index").MultiNumberDisplayType;
                color: import("../types").Colors;
            } | undefined;
        } | {
            expression: "AUTO_NUMBER()";
        } | {
            expression: "CREATED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./schemas/fields/formatting.shcema").TimeFormatting;
            };
        } | {
            expression: "LAST_MODIFIED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./index").TimeFormatting;
            };
        };
        cellValueType: import("../types").TeableCellValueType;
        dbFieldType: import("../types").TeableDbFieldType;
        dbFieldName: string;
        description?: string | undefined;
        unique?: boolean | undefined;
        isLookup?: boolean | undefined;
        lookupOptions?: {
            relationship: import("../types").TeableRelationship;
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
    convertField(fieldId: string, field: IConvertFieldRo): Promise<{
        id: string;
        name: string;
        type: import("../types").TeableFieldType;
        options: {} | {} | {
            relationship: import("../types").TeableRelationship;
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
                time: import("./index").TimeFormatting;
            } | {
                type: import("./index").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./index").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./index").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./index").SingleNumberDisplayType;
                color: import("../types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./index").MultiNumberDisplayType;
                color: import("../types").Colors;
            } | {
                type: import("./index").SingleLineTextDisplayType;
            } | undefined;
        } | {
            expression: string;
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./index").TimeFormatting;
            } | {
                type: import("./index").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./index").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./index").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./index").SingleNumberDisplayType;
                color: import("../types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./index").MultiNumberDisplayType;
                color: import("../types").Colors;
            } | {
                type: import("./index").SingleLineTextDisplayType;
            } | undefined;
        } | {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./schemas/fields/formatting.shcema").TimeFormatting;
            };
            defaultValue?: "now" | undefined;
        } | {
            showAs?: {
                type: import("./index").SingleLineTextDisplayType;
            } | undefined;
        } | {
            color: import("../types").Colors.RedBright | import("../types").Colors.TealBright | import("../types").Colors.YellowBright;
            icon: import("./index").RatingIcon;
            max: number;
        } | {
            isMultiple: boolean;
            shouldNotify: boolean;
        } | {
            choices: {
                id: string;
                name: string;
                color: import("../types").Colors;
            }[];
        } | {
            formatting: {
                type: import("./index").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./index").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./index").NumberFormattingType.Currency;
                precision: number;
            };
            showAs?: {
                type: import("./index").SingleNumberDisplayType;
                color: import("../types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./index").MultiNumberDisplayType;
                color: import("../types").Colors;
            } | undefined;
        } | {
            expression: "AUTO_NUMBER()";
        } | {
            expression: "CREATED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./schemas/fields/formatting.shcema").TimeFormatting;
            };
        } | {
            expression: "LAST_MODIFIED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./index").TimeFormatting;
            };
        };
        cellValueType: import("../types").TeableCellValueType;
        dbFieldType: import("../types").TeableDbFieldType;
        dbFieldName: string;
        description?: string | undefined;
        unique?: boolean | undefined;
        isLookup?: boolean | undefined;
        lookupOptions?: {
            relationship: import("../types").TeableRelationship;
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
    getField(fieldId: string): Promise<{
        id: string;
        name: string;
        type: import("../types").TeableFieldType;
        options: {} | {} | {
            relationship: import("../types").TeableRelationship;
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
                time: import("./index").TimeFormatting;
            } | {
                type: import("./index").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./index").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./index").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./index").SingleNumberDisplayType;
                color: import("../types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./index").MultiNumberDisplayType;
                color: import("../types").Colors;
            } | {
                type: import("./index").SingleLineTextDisplayType;
            } | undefined;
        } | {
            expression: string;
            formatting?: {
                date: string;
                timeZone: string;
                time: import("./index").TimeFormatting;
            } | {
                type: import("./index").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./index").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./index").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("./index").SingleNumberDisplayType;
                color: import("../types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./index").MultiNumberDisplayType;
                color: import("../types").Colors;
            } | {
                type: import("./index").SingleLineTextDisplayType;
            } | undefined;
        } | {
            formatting: {
                date: string;
                timeZone: string;
                time: import("./schemas/fields/formatting.shcema").TimeFormatting;
            };
            defaultValue?: "now" | undefined;
        } | {
            showAs?: {
                type: import("./index").SingleLineTextDisplayType;
            } | undefined;
        } | {
            color: import("../types").Colors.RedBright | import("../types").Colors.TealBright | import("../types").Colors.YellowBright;
            icon: import("./index").RatingIcon;
            max: number;
        } | {
            isMultiple: boolean;
            shouldNotify: boolean;
        } | {
            choices: {
                id: string;
                name: string;
                color: import("../types").Colors;
            }[];
        } | {
            formatting: {
                type: import("./index").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("./index").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("./index").NumberFormattingType.Currency;
                precision: number;
            };
            showAs?: {
                type: import("./index").SingleNumberDisplayType;
                color: import("../types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("./index").MultiNumberDisplayType;
                color: import("../types").Colors;
            } | undefined;
        } | {
            expression: "AUTO_NUMBER()";
        } | {
            expression: "CREATED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./schemas/fields/formatting.shcema").TimeFormatting;
            };
        } | {
            expression: "LAST_MODIFIED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("./index").TimeFormatting;
            };
        };
        cellValueType: import("../types").TeableCellValueType;
        dbFieldType: import("../types").TeableDbFieldType;
        dbFieldName: string;
        description?: string | undefined;
        unique?: boolean | undefined;
        isLookup?: boolean | undefined;
        lookupOptions?: {
            relationship: import("../types").TeableRelationship;
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
}
//# sourceMappingURL=table.d.ts.map