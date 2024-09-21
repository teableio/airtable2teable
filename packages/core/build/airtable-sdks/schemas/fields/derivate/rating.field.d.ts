import { AirtableIcon } from '@/types';
import { z } from 'zod';
export declare const ratingFieldOptionsSchema: z.ZodObject<{
    color: z.ZodEnum<["yellowBright", "orangeBright", "redBright", "pinkBright", "purpleBright", "blueBright", "cyanBright", "tealBright", "greenBright", "grayBright"]>;
    icon: z.ZodNativeEnum<typeof AirtableIcon>;
    max: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    color: "blueBright" | "cyanBright" | "tealBright" | "greenBright" | "yellowBright" | "orangeBright" | "redBright" | "pinkBright" | "purpleBright" | "grayBright";
    icon: AirtableIcon;
    max: number;
}, {
    color: "blueBright" | "cyanBright" | "tealBright" | "greenBright" | "yellowBright" | "orangeBright" | "redBright" | "pinkBright" | "purpleBright" | "grayBright";
    icon: AirtableIcon;
    max: number;
}>;
export type IRatingFieldOptionsVo = z.infer<typeof ratingFieldOptionsSchema>;
//# sourceMappingURL=rating.field.d.ts.map