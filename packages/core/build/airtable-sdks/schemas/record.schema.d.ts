import { z } from 'zod';
export declare const recordVoSchema: z.ZodObject<{
    id: z.ZodString;
    createdTime: z.ZodString;
    fields: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodObject<{
        state: z.ZodNativeEnum<typeof import("../../types").AirtableCellState>;
        isStale: z.ZodBoolean;
        errorType: z.ZodOptional<z.ZodString>;
        value: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value: string | null;
        state: import("../../types").AirtableCellState;
        isStale: boolean;
        errorType?: string | undefined;
    }, {
        value: string | null;
        state: import("../../types").AirtableCellState;
        isStale: boolean;
        errorType?: string | undefined;
    }>, z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodString;
        filename: z.ZodString;
        height: z.ZodNumber;
        size: z.ZodNumber;
        url: z.ZodString;
        width: z.ZodNumber;
        thumbnails: z.ZodObject<{
            full: z.ZodOptional<z.ZodObject<{
                url: z.ZodString;
                height: z.ZodNumber;
                width: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                url: string;
                height: number;
                width: number;
            }, {
                url: string;
                height: number;
                width: number;
            }>>;
            large: z.ZodOptional<z.ZodObject<{
                url: z.ZodString;
                height: z.ZodNumber;
                width: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                url: string;
                height: number;
                width: number;
            }, {
                url: string;
                height: number;
                width: number;
            }>>;
            small: z.ZodObject<{
                url: z.ZodString;
                height: z.ZodNumber;
                width: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                url: string;
                height: number;
                width: number;
            }, {
                url: string;
                height: number;
                width: number;
            }>;
        }, "strip", z.ZodTypeAny, {
            small: {
                url: string;
                height: number;
                width: number;
            };
            full?: {
                url: string;
                height: number;
                width: number;
            } | undefined;
            large?: {
                url: string;
                height: number;
                width: number;
            } | undefined;
        }, {
            small: {
                url: string;
                height: number;
                width: number;
            };
            full?: {
                url: string;
                height: number;
                width: number;
            } | undefined;
            large?: {
                url: string;
                height: number;
                width: number;
            } | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        id: string;
        type: string;
        filename: string;
        height: number;
        size: number;
        width: number;
        thumbnails: {
            small: {
                url: string;
                height: number;
                width: number;
            };
            full?: {
                url: string;
                height: number;
                width: number;
            } | undefined;
            large?: {
                url: string;
                height: number;
                width: number;
            } | undefined;
        };
    }, {
        url: string;
        id: string;
        type: string;
        filename: string;
        height: number;
        size: number;
        width: number;
        thumbnails: {
            small: {
                url: string;
                height: number;
                width: number;
            };
            full?: {
                url: string;
                height: number;
                width: number;
            } | undefined;
            large?: {
                url: string;
                height: number;
                width: number;
            } | undefined;
        };
    }>, "many">, z.ZodObject<{
        type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        text: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type?: string | null | undefined;
        text?: string | undefined;
    }, {
        type?: string | null | undefined;
        text?: string | undefined;
    }>, z.ZodObject<{
        label: z.ZodString;
        url: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        url: string | null;
        label: string;
    }, {
        url: string | null;
        label: string;
    }>, z.ZodNullable<z.ZodBoolean>, z.ZodObject<{
        id: z.ZodString;
        email: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        profilePicUrl: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        email?: string | undefined;
        name?: string | undefined;
        profilePicUrl?: string | undefined;
    }, {
        id: string;
        email?: string | undefined;
        name?: string | undefined;
        profilePicUrl?: string | undefined;
    }>, z.ZodObject<{
        isValid: z.ZodBoolean;
        recordLinkFieldId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        isValid: boolean;
        recordLinkFieldId?: string | null | undefined;
    }, {
        isValid: boolean;
        recordLinkFieldId?: string | null | undefined;
    }>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">]>, z.ZodArray<z.ZodString, "many">, z.ZodArray<z.ZodUnion<[z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodAny]>, "many">, z.ZodNumber]>>;
    commentCount: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    createdTime: string;
    id: string;
    fields: Record<string, string | number | boolean | any[] | (string | number)[] | string[] | {
        isValid: boolean;
        recordLinkFieldId?: string | null | undefined;
    } | {
        value: string | null;
        state: import("../../types").AirtableCellState;
        isStale: boolean;
        errorType?: string | undefined;
    } | {
        url: string;
        id: string;
        type: string;
        filename: string;
        height: number;
        size: number;
        width: number;
        thumbnails: {
            small: {
                url: string;
                height: number;
                width: number;
            };
            full?: {
                url: string;
                height: number;
                width: number;
            } | undefined;
            large?: {
                url: string;
                height: number;
                width: number;
            } | undefined;
        };
    }[] | {
        type?: string | null | undefined;
        text?: string | undefined;
    } | {
        url: string | null;
        label: string;
    } | {
        id: string;
        email?: string | undefined;
        name?: string | undefined;
        profilePicUrl?: string | undefined;
    } | null>;
    commentCount?: number | undefined;
}, {
    createdTime: string;
    id: string;
    fields: Record<string, string | number | boolean | any[] | (string | number)[] | string[] | {
        isValid: boolean;
        recordLinkFieldId?: string | null | undefined;
    } | {
        value: string | null;
        state: import("../../types").AirtableCellState;
        isStale: boolean;
        errorType?: string | undefined;
    } | {
        url: string;
        id: string;
        type: string;
        filename: string;
        height: number;
        size: number;
        width: number;
        thumbnails: {
            small: {
                url: string;
                height: number;
                width: number;
            };
            full?: {
                url: string;
                height: number;
                width: number;
            } | undefined;
            large?: {
                url: string;
                height: number;
                width: number;
            } | undefined;
        };
    }[] | {
        type?: string | null | undefined;
        text?: string | undefined;
    } | {
        url: string | null;
        label: string;
    } | {
        id: string;
        email?: string | undefined;
        name?: string | undefined;
        profilePicUrl?: string | undefined;
    } | null>;
    commentCount?: number | undefined;
}>;
export type IAirtableRecordVo = z.infer<typeof recordVoSchema>;
//# sourceMappingURL=record.schema.d.ts.map