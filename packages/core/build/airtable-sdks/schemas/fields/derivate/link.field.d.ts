import { z } from 'zod';
export declare const linkFieldOptionsSchema: z.ZodObject<{
    isReversed: z.ZodBoolean;
    linkedTableId: z.ZodString;
    prefersSingleRecordLink: z.ZodBoolean;
    inverseLinkFieldId: z.ZodOptional<z.ZodString>;
    viewIdForRecordSelection: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    isReversed: boolean;
    linkedTableId: string;
    prefersSingleRecordLink: boolean;
    inverseLinkFieldId?: string | undefined;
    viewIdForRecordSelection?: string | undefined;
}, {
    isReversed: boolean;
    linkedTableId: string;
    prefersSingleRecordLink: boolean;
    inverseLinkFieldId?: string | undefined;
    viewIdForRecordSelection?: string | undefined;
}>;
export type ILinkFieldOptionsVo = z.infer<typeof linkFieldOptionsSchema>;
export declare const LinkCellValueSchema: z.ZodArray<z.ZodString, "many">;
export type ILinkCellValueVo = z.infer<typeof LinkCellValueSchema>;
//# sourceMappingURL=link.field.d.ts.map