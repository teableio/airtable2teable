import { z } from 'zod';

export enum TimeFormatting {
  Hour24 = 'HH:mm',
  Hour12 = 'hh:mm A',
  None = 'None',
}

export const datetimeFormattingSchema = z.object({
  date: z.string(),
  time: z.nativeEnum(TimeFormatting),
  timeZone: z.string().refine(
    (value) => {
      try {
        new Intl.DateTimeFormat('en-US', {
          timeZone: value,
        }).resolvedOptions();
        return true;
      } catch (e) {
        return false;
      }
    },
    {
      message: 'Invalid time zone string',
    },
  ),
});
