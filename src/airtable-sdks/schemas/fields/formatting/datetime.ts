import { z } from 'zod';

export enum DateFormattingPreset {
  Local = 'l',
  Friendly = 'LL',
  US = 'M/D/YYYY',
  European = 'D/M/YYYY',
  ISO = 'YYYY-MM-DD',
}

export enum DateFormattingPresetName {
  Local = 'local',
  Friendly = 'friendly',
  US = 'us',
  European = 'european',
  ISO = 'iso',
}

export const dateFormatSchema = z.object({
  format: z.nativeEnum(DateFormattingPreset).optional(),
  name: z.nativeEnum(DateFormattingPresetName),
});
