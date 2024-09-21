import { z } from 'zod';
export declare const attachmentFieldOptionsSchema: z.ZodObject<{
    isReversed: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    isReversed: boolean;
}, {
    isReversed: boolean;
}>;
export type IAttachmentFieldOptionsVo = z.infer<typeof attachmentFieldOptionsSchema>;
export declare const attachmentCellValueSchema: z.ZodArray<z.ZodObject<{
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
}>, "many">;
export type IAttachmentCellValueVo = z.infer<typeof attachmentCellValueSchema>;
//# sourceMappingURL=attachment.field.d.ts.map