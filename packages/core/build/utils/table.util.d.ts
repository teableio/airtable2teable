import { IAirtableTableVo } from '../airtable-sdks';
import { ITableTableVo } from '../teable-sdks';
export declare function mappingTable(airtableTables: IAirtableTableVo[], teableTables: ITableTableVo[], airtableTableId: string): {
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
                time: import("../teable-sdks").TimeFormatting;
            } | {
                type: import("../teable-sdks").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("../teable-sdks").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("../teable-sdks").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("../teable-sdks").SingleNumberDisplayType;
                color: import("../types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("../teable-sdks").MultiNumberDisplayType;
                color: import("../types").Colors;
            } | {
                type: import("../teable-sdks").SingleLineTextDisplayType;
            } | undefined;
        } | {
            expression: string;
            formatting?: {
                date: string;
                timeZone: string;
                time: import("../teable-sdks").TimeFormatting;
            } | {
                type: import("../teable-sdks").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("../teable-sdks").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("../teable-sdks").NumberFormattingType.Currency;
                precision: number;
            } | undefined;
            showAs?: {
                type: import("../teable-sdks").SingleNumberDisplayType;
                color: import("../types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("../teable-sdks").MultiNumberDisplayType;
                color: import("../types").Colors;
            } | {
                type: import("../teable-sdks").SingleLineTextDisplayType;
            } | undefined;
        } | {
            formatting: {
                date: string;
                timeZone: string;
                time: import("../teable-sdks/schemas/fields/formatting.shcema").TimeFormatting;
            };
            defaultValue?: "now" | undefined;
        } | {
            showAs?: {
                type: import("../teable-sdks").SingleLineTextDisplayType;
            } | undefined;
        } | {
            color: import("../types").Colors.RedBright | import("../types").Colors.TealBright | import("../types").Colors.YellowBright;
            icon: import("../teable-sdks").RatingIcon;
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
                type: import("../teable-sdks").NumberFormattingType.Decimal;
                precision: number;
            } | {
                type: import("../teable-sdks").NumberFormattingType.Percent;
                precision: number;
            } | {
                symbol: string;
                type: import("../teable-sdks").NumberFormattingType.Currency;
                precision: number;
            };
            showAs?: {
                type: import("../teable-sdks").SingleNumberDisplayType;
                color: import("../types").Colors;
                showValue: boolean;
                maxValue: number;
            } | {
                type: import("../teable-sdks").MultiNumberDisplayType;
                color: import("../types").Colors;
            } | undefined;
        } | {
            expression: "AUTO_NUMBER()";
        } | {
            expression: "CREATED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("../teable-sdks/schemas/fields/formatting.shcema").TimeFormatting;
            };
        } | {
            expression: "LAST_MODIFIED_TIME()";
            formatting: {
                date: string;
                timeZone: string;
                time: import("../teable-sdks").TimeFormatting;
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
                order: import("../teable-sdks").SortFunc;
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
            order: import("../teable-sdks").SortFunc;
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
} | undefined;
export declare function fieldsTopologicalSorting(fieldDependencies: [string, string][]): string[];
//# sourceMappingURL=table.util.d.ts.map