import { z } from 'zod';
import { AirtableCellState } from '../../../../types';
export declare const aiTextFieldOptionsSchema: z.ZodObject<{
    prompt: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
        field: z.ZodRecord<z.ZodString, z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        field: Record<string, string>;
    }, {
        field: Record<string, string>;
    }>]>, "many">>;
    referencedFieldIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    prompt?: (string | {
        field: Record<string, string>;
    })[] | undefined;
    referencedFieldIds?: string[] | undefined;
}, {
    prompt?: (string | {
        field: Record<string, string>;
    })[] | undefined;
    referencedFieldIds?: string[] | undefined;
}>;
export type IAiTextFieldOptionsVo = z.infer<typeof aiTextFieldOptionsSchema>;
export declare const aiTextCellValueSchema: z.ZodObject<{
    state: z.ZodNativeEnum<typeof AirtableCellState>;
    isStale: z.ZodBoolean;
    errorType: z.ZodOptional<z.ZodString>;
    value: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    value: string | null;
    state: AirtableCellState;
    isStale: boolean;
    errorType?: string | undefined;
}, {
    value: string | null;
    state: AirtableCellState;
    isStale: boolean;
    errorType?: string | undefined;
}>;
export type IAiTextCellValueVo = z.infer<typeof aiTextCellValueSchema>;
//# sourceMappingURL=ai.text.field.d.ts.map