import { z } from 'zod';
export * from './number';
export * from './text';
export declare const unionShowAsSchema: z.ZodUnion<[z.ZodObject<{
    type: z.ZodNativeEnum<typeof import("./text").SingleLineTextDisplayType>;
}, "strict", z.ZodTypeAny, {
    type: import("./text").SingleLineTextDisplayType;
}, {
    type: import("./text").SingleLineTextDisplayType;
}>, z.ZodUnion<[z.ZodObject<{
    type: z.ZodNativeEnum<typeof import("./number").SingleNumberDisplayType>;
    color: z.ZodNativeEnum<typeof import("../../../../types").Colors>;
    showValue: z.ZodBoolean;
    maxValue: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    type: import("./number").SingleNumberDisplayType;
    color: import("../../../../types").Colors;
    showValue: boolean;
    maxValue: number;
}, {
    type: import("./number").SingleNumberDisplayType;
    color: import("../../../../types").Colors;
    showValue: boolean;
    maxValue: number;
}>, z.ZodObject<{
    type: z.ZodNativeEnum<typeof import("./number").MultiNumberDisplayType>;
    color: z.ZodNativeEnum<typeof import("../../../../types").Colors>;
}, "strict", z.ZodTypeAny, {
    type: import("./number").MultiNumberDisplayType;
    color: import("../../../../types").Colors;
}, {
    type: import("./number").MultiNumberDisplayType;
    color: import("../../../../types").Colors;
}>]>]>;
//# sourceMappingURL=index.d.ts.map