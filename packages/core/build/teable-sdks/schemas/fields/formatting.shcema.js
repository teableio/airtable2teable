import { z } from 'zod';
export var TimeFormatting;
(function (TimeFormatting) {
    TimeFormatting["Hour24"] = "HH:mm";
    TimeFormatting["Hour12"] = "hh:mm A";
    TimeFormatting["None"] = "None";
})(TimeFormatting || (TimeFormatting = {}));
export const datetimeFormattingSchema = z.object({
    date: z.string(),
    time: z.nativeEnum(TimeFormatting),
    timeZone: z.string().refine((value) => {
        try {
            new Intl.DateTimeFormat('en-US', {
                timeZone: value,
            }).resolvedOptions();
            return true;
        }
        catch (e) {
            return false;
        }
    }, {
        message: 'Invalid time zone string',
    }),
});
