import { z } from 'zod';
export declare const getSpaceVoSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
}, {
    id: string;
    name: string;
}>;
export type IGetSpaceVo = z.infer<typeof getSpaceVoSchema>;
//# sourceMappingURL=space.shema.d.ts.map