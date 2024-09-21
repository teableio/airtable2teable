import { z } from 'zod';
export var DateFormattingPreset;
(function (DateFormattingPreset) {
    DateFormattingPreset["US"] = "M/D/YYYY";
    DateFormattingPreset["European"] = "D/M/YYYY";
    DateFormattingPreset["Asian"] = "YYYY/MM/DD";
    DateFormattingPreset["ISO"] = "YYYY-MM-DD";
    DateFormattingPreset["YM"] = "YYYY-MM";
    DateFormattingPreset["MD"] = "MM-DD";
    DateFormattingPreset["Y"] = "YYYY";
    DateFormattingPreset["M"] = "MM";
    DateFormattingPreset["D"] = "DD";
})(DateFormattingPreset || (DateFormattingPreset = {}));
export var TimeFormatting;
(function (TimeFormatting) {
    TimeFormatting["Hour24"] = "HH:mm";
    TimeFormatting["Hour12"] = "hh:mm A";
    TimeFormatting["None"] = "None";
})(TimeFormatting || (TimeFormatting = {}));
export const datetimeFormattingSchema = z.object({
    date: z.string(),
    time: z.nativeEnum(TimeFormatting),
    timeZone: z.string(),
});
export const defaultDatetimeFormatting = {
    date: DateFormattingPreset.ISO,
    time: TimeFormatting.None,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
};
