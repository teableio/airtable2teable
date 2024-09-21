import { z } from 'zod';
export var DateFormattingPreset;
(function (DateFormattingPreset) {
    DateFormattingPreset["Local"] = "l";
    DateFormattingPreset["Friendly"] = "LL";
    DateFormattingPreset["US"] = "M/D/YYYY";
    DateFormattingPreset["European"] = "D/M/YYYY";
    DateFormattingPreset["ISO"] = "YYYY-MM-DD";
})(DateFormattingPreset || (DateFormattingPreset = {}));
export var DateFormattingPresetName;
(function (DateFormattingPresetName) {
    DateFormattingPresetName["Local"] = "local";
    DateFormattingPresetName["Friendly"] = "friendly";
    DateFormattingPresetName["US"] = "us";
    DateFormattingPresetName["European"] = "european";
    DateFormattingPresetName["ISO"] = "iso";
})(DateFormattingPresetName || (DateFormattingPresetName = {}));
export const dateFormatSchema = z.object({
    format: z.nativeEnum(DateFormattingPreset).optional(),
    name: z.nativeEnum(DateFormattingPresetName),
});
