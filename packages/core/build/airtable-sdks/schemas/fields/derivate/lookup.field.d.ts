import { z } from 'zod';
export declare const lookupFieldOptionsSchema: any;
export type ILookupFieldOptionsVo = z.infer<typeof lookupFieldOptionsSchema>;
export declare const lookupCellValueSchema: z.ZodArray<z.ZodUnion<[z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodAny]>, "many">;
export type ILookupCellValueVo = z.infer<typeof lookupCellValueSchema>;
//# sourceMappingURL=lookup.field.d.ts.map