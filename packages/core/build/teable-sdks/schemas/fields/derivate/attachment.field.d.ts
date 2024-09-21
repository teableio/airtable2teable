import { z } from 'zod';
export declare const attachmentFieldOptionsSchema: z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>;
export declare const attachmentItemSchema: z.ZodObject<{
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
}>;
export declare const attachmentCellValueSchema: z.ZodArray<z.ZodObject<{
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
}>, "many">;
export type IAttachmentCellValue = z.infer<typeof attachmentCellValueSchema>;
//# sourceMappingURL=attachment.field.d.ts.map