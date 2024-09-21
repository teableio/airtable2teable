import { z } from 'zod';
export declare const userFieldOptionsSchema: z.ZodObject<{
    isMultiple: z.ZodBoolean;
    shouldNotify: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    isMultiple: boolean;
    shouldNotify: boolean;
}, {
    isMultiple: boolean;
    shouldNotify: boolean;
}>;
export declare const userCellValueSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    avatarUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    title?: string | undefined;
    avatarUrl?: string | null | undefined;
}, {
    id: string;
    title?: string | undefined;
    avatarUrl?: string | null | undefined;
}>;
export type IUserCellValue = z.infer<typeof userCellValueSchema>;
//# sourceMappingURL=user.field.d.ts.map