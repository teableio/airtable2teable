import { z } from 'zod';
export declare const collaboratorCellValueSchema: z.ZodObject<{
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
}>;
export type ICollaboratorCellValueVo = z.infer<typeof collaboratorCellValueSchema>;
//# sourceMappingURL=collaborator.field.d.ts.map