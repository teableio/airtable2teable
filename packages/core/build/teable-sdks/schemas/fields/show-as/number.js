import { Colors } from '@/types';
import { z } from 'zod';
export var SingleNumberDisplayType;
(function (SingleNumberDisplayType) {
    SingleNumberDisplayType["Bar"] = "bar";
    SingleNumberDisplayType["Ring"] = "ring";
})(SingleNumberDisplayType || (SingleNumberDisplayType = {}));
export var MultiNumberDisplayType;
(function (MultiNumberDisplayType) {
    MultiNumberDisplayType["Bar"] = "bar";
    MultiNumberDisplayType["Line"] = "line";
})(MultiNumberDisplayType || (MultiNumberDisplayType = {}));
export const singleNumberShowAsSchema = z.object({
    type: z.nativeEnum(SingleNumberDisplayType),
    color: z.nativeEnum(Colors),
    showValue: z.boolean(),
    maxValue: z.number(),
});
export const multiNumberShowAsSchema = z.object({
    type: z.nativeEnum(MultiNumberDisplayType),
    color: z.nativeEnum(Colors),
});
export const numberShowAsSchema = z.union([
    singleNumberShowAsSchema.strict(),
    multiNumberShowAsSchema.strict(),
]);
