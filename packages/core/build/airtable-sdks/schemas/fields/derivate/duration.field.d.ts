import { z } from 'zod';
export declare const durationFieldOptionsSchema: z.ZodObject<{
    durationFormat: z.ZodEnum<["h:mm", "h:mm:ss", "h:mm:ss.S", "h:mm:ss.SS", "h:mm:ss.SSS"]>;
}, "strip", z.ZodTypeAny, {
    durationFormat: "h:mm" | "h:mm:ss" | "h:mm:ss.S" | "h:mm:ss.SS" | "h:mm:ss.SSS";
}, {
    durationFormat: "h:mm" | "h:mm:ss" | "h:mm:ss.S" | "h:mm:ss.SS" | "h:mm:ss.SSS";
}>;
export type IDurationFieldOptionsVo = z.infer<typeof durationFieldOptionsSchema>;
//# sourceMappingURL=duration.field.d.ts.map