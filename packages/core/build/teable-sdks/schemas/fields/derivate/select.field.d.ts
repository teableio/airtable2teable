import { Colors } from '@/types';
import { z } from 'zod';
export declare const selectFieldChoiceSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    color: z.ZodNativeEnum<typeof Colors>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    color: Colors;
}, {
    id: string;
    name: string;
    color: Colors;
}>;
export declare const selectFieldOptionsSchema: z.ZodObject<{
    choices: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        color: z.ZodNativeEnum<typeof Colors>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        color: Colors;
    }, {
        id: string;
        name: string;
        color: Colors;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    choices: {
        id: string;
        name: string;
        color: Colors;
    }[];
}, {
    choices: {
        id: string;
        name: string;
        color: Colors;
    }[];
}>;
export declare const selectFieldChoiceRoSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    color: z.ZodOptional<z.ZodNativeEnum<typeof Colors>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    id?: string | undefined;
    color?: Colors | undefined;
}, {
    name: string;
    id?: string | undefined;
    color?: Colors | undefined;
}>;
export declare const selectFieldOptionsRoSchema: z.ZodObject<{
    choices: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        color: z.ZodOptional<z.ZodNativeEnum<typeof Colors>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id?: string | undefined;
        color?: Colors | undefined;
    }, {
        name: string;
        id?: string | undefined;
        color?: Colors | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    choices: {
        name: string;
        id?: string | undefined;
        color?: Colors | undefined;
    }[];
}, {
    choices: {
        name: string;
        id?: string | undefined;
        color?: Colors | undefined;
    }[];
}>;
export declare const multipleSelectCelValueSchema: z.ZodArray<z.ZodString, "many">;
export type IMultipleSelectCellValue = z.infer<typeof multipleSelectCelValueSchema>;
//# sourceMappingURL=select.field.d.ts.map