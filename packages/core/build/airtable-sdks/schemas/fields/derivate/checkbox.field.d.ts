import { AirtableIcon } from '@/types';
import { z } from 'zod';
export declare const checkboxFieldOptionsSchema: z.ZodObject<{
    color: z.ZodString;
    icon: z.ZodNativeEnum<typeof AirtableIcon>;
}, "strip", z.ZodTypeAny, {
    color: string;
    icon: AirtableIcon;
}, {
    color: string;
    icon: AirtableIcon;
}>;
export type ICheckFieldOptionsVo = z.infer<typeof checkboxFieldOptionsSchema>;
export declare const checkboxCellValueSchema: z.ZodNullable<z.ZodBoolean>;
export type ICheckboxCellValueVo = z.infer<typeof checkboxCellValueSchema>;
//# sourceMappingURL=checkbox.field.d.ts.map