import { z } from 'zod';
export declare enum SingleLineTextDisplayType {
    Url = "url",
    Email = "email",
    Phone = "phone"
}
export declare const singleLineTextShowAsSchema: z.ZodObject<{
    type: z.ZodNativeEnum<typeof SingleLineTextDisplayType>;
}, "strip", z.ZodTypeAny, {
    type: SingleLineTextDisplayType;
}, {
    type: SingleLineTextDisplayType;
}>;
//# sourceMappingURL=text.d.ts.map