import { z } from 'zod';
export declare const formulaFieldOptionsSchema: any;
export type IFormulaFieldOptionsVo = z.infer<typeof formulaFieldOptionsSchema>;
export declare const formulaCellValueSchema: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">]>;
export type IFormulaCellValueVo = z.infer<typeof formulaCellValueSchema>;
//# sourceMappingURL=formula.field.d.ts.map