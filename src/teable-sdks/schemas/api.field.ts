import {
  Colors,
  IdPrefix,
  Relationship,
  StatisticsFunc,
  TeableCellValueType,
  TeableDbFieldType,
  TeableFieldType,
} from 'types';
import { RefinementCtx, z } from 'zod';

// column config schema
export const columnSchema = z.object({
  order: z.number(),
  width: z.number().optional(),
  hidden: z.boolean().optional(),
  statisticFunc: z.nativeEnum(StatisticsFunc).optional(),
});

export const columnMetaSchema = z.record(
  z.string().startsWith(IdPrefix.View),
  columnSchema,
);

// link field option schema
export const linkFieldOptionsSchema = z
  .object({
    relationship: z.nativeEnum(Relationship),
    foreignTableId: z.string(),
    lookupFieldId: z.string(),
    dbForeignKeyName: z.string(),
    symmetricFieldId: z.string(),
  })
  .strict();
// link field option vo schema
export const lookupOptionsVoSchema = linkFieldOptionsSchema
  .pick({
    foreignTableId: true,
    lookupFieldId: true,
    relationship: true,
    dbForeignKeyName: true,
  })
  .merge(
    z.object({
      linkFieldId: z.string(),
    }),
  );

// select field option schema
export const selectFieldChoiceSchema = z.object({
  id: z.string(),
  name: z.string().nonempty(),
  color: z.nativeEnum(Colors),
});
export const selectFieldOptionsSchema = z
  .object({
    choices: z.array(selectFieldChoiceSchema),
  })
  .strict();

// number field option schema
export enum NumberFormattingType {
  Decimal = 'decimal',
  Percent = 'percent',
  Currency = 'currency',
}

const baseFormatting = z.object({
  precision: z.number().max(5).min(0),
});

export const decimalFormattingSchema = baseFormatting.extend({
  type: z.literal(NumberFormattingType.Decimal),
});

export const percentFormattingSchema = baseFormatting.extend({
  type: z.literal(NumberFormattingType.Percent),
});

export const currencyFormattingSchema = baseFormatting.extend({
  type: z.literal(NumberFormattingType.Currency),
  symbol: z.string(),
});

export const numberFormattingSchema = z.union([
  decimalFormattingSchema,
  percentFormattingSchema,
  currencyFormattingSchema,
]);

export enum SingleNumberDisplayType {
  Bar = 'bar',
  Ring = 'ring',
}

export enum MultiNumberDisplayType {
  Bar = 'bar',
  Line = 'line',
}

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
  singleNumberShowAsSchema,
  multiNumberShowAsSchema,
]);

export const numberFieldOptionsSchema = z
  .object({
    formatting: numberFormattingSchema,
    showAs: numberShowAsSchema.optional(),
  })
  .strict();

// datetime field options
export enum TimeFormatting {
  Hour24 = 'HH:mm',
  Hour12 = 'hh:mm',
  None = 'None',
}

export const timeZoneStringSchema = z.string().refine(
  (value) => {
    try {
      new Intl.DateTimeFormat('en-US', { timeZone: value }).resolvedOptions();
      return true;
    } catch (e) {
      return false;
    }
  },
  {
    message: 'Invalid time zone string',
  },
);

export const datetimeFormattingSchema = z.object({
  date: z.string(),
  time: z.nativeEnum(TimeFormatting),
  timeZone: timeZoneStringSchema,
});

export const dateFieldOptionsSchema = z
  .object({
    formatting: datetimeFormattingSchema,
    defaultValue: z.enum(['now'] as const).optional(),
  })
  .strict();
// rating field option schema
export enum RatingIcon {
  Star = 'star',
  Moon = 'moon',
  Sun = 'sun',
  Zap = 'zap',
  Flame = 'flame',
  Heart = 'heart',
  Apple = 'apple',
  ThumbUp = 'thumb-up',
}

export const RATING_ICON_COLORS = [
  Colors.YellowBright,
  Colors.RedBright,
  Colors.TealBright,
] as const;

export const ratingColorsSchema = z.enum(RATING_ICON_COLORS);

// checkbox field option schema
export const checkboxFieldOptionsSchema = z.object({}).strict();

export const ratingFieldOptionsSchema = z
  .object({
    icon: z.nativeEnum(RatingIcon),
    color: ratingColorsSchema,
    max: z.number().int().max(10).min(1),
  })
  .strict();

// text field option schema
export const longTextFieldOptionsSchema = z.object({}).strict();

export enum SingleLineTextDisplayType {
  Url = 'url',
  Email = 'email',
  Phone = 'phone',
}

export const singleLineTextShowAsSchema = z.object({
  type: z.nativeEnum(SingleLineTextDisplayType),
});

export const singlelineTextFieldOptionsSchema = z
  .object({
    showAs: singleLineTextShowAsSchema.optional(),
  })
  .strict();

// formula field option schema
export const unionFormattingSchema = z.union([
  datetimeFormattingSchema,
  numberFormattingSchema,
]);

export const unionShowAsSchema = z.union([
  singleLineTextShowAsSchema,
  numberShowAsSchema,
]);

export const formulaFieldOptionsSchema = z
  .object({
    expression: z.string(),
    formatting: unionFormattingSchema.optional(),
    showAs: unionShowAsSchema.optional(),
  })
  .strict();

// rollup field option schema
export const ROLLUP_FUNCTIONS = [
  'countall({values})',
  'counta({values})',
  'count({values})',
  'sum({values})',
  'max({values})',
  'min({values})',
  'and({values})',
  'or({values})',
  'xor({values})',
  'array_join({values})',
  'array_unique({values})',
  'array_compact({values})',
  'concatenate({values})',
] as const;

export const rollupFieldOptionsSchema = z
  .object({
    expression: z.enum(ROLLUP_FUNCTIONS),
    formatting: unionFormattingSchema.optional(),
    showAs: unionShowAsSchema.optional(),
  })
  .strict();

// attachment field options schema
export const attachmentFieldOptionsSchema = z.object({}).strict();

export const unionFieldOptions = z.union([
  rollupFieldOptionsSchema,
  formulaFieldOptionsSchema,
  linkFieldOptionsSchema,
  dateFieldOptionsSchema,
  checkboxFieldOptionsSchema,
  attachmentFieldOptionsSchema,
  singlelineTextFieldOptionsSchema,
  ratingFieldOptionsSchema,
]);

export const unionFieldOptionsVoSchema = z.union([
  unionFieldOptions,
  linkFieldOptionsSchema,
  selectFieldOptionsSchema,
  numberFieldOptionsSchema,
]);

// field vo schema
export const fieldVoSchema = z.object({
  id: z.string().startsWith(IdPrefix.Field),

  name: z.string(),

  type: z.nativeEnum(TeableFieldType),

  description: z.string().optional(),

  options: unionFieldOptionsVoSchema,

  isLookup: z.boolean().optional(),

  lookupOptions: lookupOptionsVoSchema.optional(),

  notNull: z.boolean().optional(),

  unique: z.boolean().optional(),

  isPrimary: z.boolean().optional(),

  columnMeta: columnMetaSchema,

  isComputed: z.boolean().optional(),

  hasError: z.boolean().optional(),

  cellValueType: z.nativeEnum(TeableCellValueType),

  isMultipleCellValue: z.boolean(),

  dbFieldType: z.nativeEnum(TeableDbFieldType),

  dbFieldName: z.string(),
});

// field ro schema
export enum FieldKeyType {
  Id = 'id',
  Name = 'name',
}

export const fieldKeyTypeRoSchema = z
  .nativeEnum(FieldKeyType, {
    errorMap: () => ({
      message: 'Error fieldKeyType, You should set it to "name" or "id"',
    }),
  })
  .default(FieldKeyType.Name) // is not work with optional()...
  .transform((v) => v ?? FieldKeyType.Name)
  .optional();

export const lookupOptionsRoSchema = lookupOptionsVoSchema.omit({
  relationship: true,
  dbForeignKeyName: true,
});

export const linkFieldOptionsRoSchema = linkFieldOptionsSchema
  .pick({
    relationship: true,
    foreignTableId: true,
  })
  .strict();

// todo: mark
export const selectFieldChoiceRoSchema = selectFieldChoiceSchema.partial({
  id: true,
  color: true,
});

export const selectFieldOptionsRoSchema = z
  .object({
    choices: z.array(selectFieldChoiceRoSchema),
  })
  .strict();

export const numberFieldOptionsRoSchema = numberFieldOptionsSchema.partial({
  formatting: true,
  showAs: true,
});

export const unionFieldOptionsRoSchema = z.union([
  unionFieldOptions,
  linkFieldOptionsRoSchema,
  selectFieldOptionsRoSchema,
  numberFieldOptionsRoSchema,
]);

const baseFieldRoSchema = fieldVoSchema
  .partial()
  .pick({
    type: true,
    name: true,
    isLookup: true,
    description: true,
    columnMeta: true,
  })
  .required({
    type: true,
  })
  .merge(
    z.object({
      lookupOptions: lookupOptionsRoSchema.optional(),
      options: unionFieldOptionsRoSchema.optional(),
    }),
  );

export type ILookupOptionsRo = z.infer<typeof lookupOptionsRoSchema>;

export type IFieldOptionsRo = z.infer<typeof unionFieldOptionsRoSchema>;

export const getOptionsSchema = (type: TeableFieldType) => {
  switch (type) {
    case TeableFieldType.SingleLineText:
      return singlelineTextFieldOptionsSchema;
    case TeableFieldType.LongText:
      return longTextFieldOptionsSchema;
    case TeableFieldType.User:
      return false;
    case TeableFieldType.Attachment:
      return attachmentFieldOptionsSchema;
    case TeableFieldType.Checkbox:
      return checkboxFieldOptionsSchema;
    case TeableFieldType.MultipleSelect:
      return selectFieldOptionsRoSchema;
    case TeableFieldType.SingleSelect:
      return selectFieldOptionsRoSchema;
    case TeableFieldType.Date:
      return dateFieldOptionsSchema;
    case TeableFieldType.PhoneNumber:
      return false;
    case TeableFieldType.Email:
      return false;
    case TeableFieldType.URL:
      return false;
    case TeableFieldType.Number:
      return numberFieldOptionsRoSchema;
    case TeableFieldType.Currency:
      return false;
    case TeableFieldType.Percent:
      return false;
    case TeableFieldType.Duration:
      return false;
    case TeableFieldType.Rating:
      return ratingFieldOptionsSchema;
    case TeableFieldType.Formula:
      return formulaFieldOptionsSchema;
    case TeableFieldType.Rollup:
      return rollupFieldOptionsSchema;
    case TeableFieldType.Count:
      return false;
    case TeableFieldType.Link:
      return linkFieldOptionsRoSchema;
    case TeableFieldType.CreatedTime:
      return false;
    case TeableFieldType.LastModifiedTime:
      return false;
    case TeableFieldType.CreatedBy:
      return false;
    case TeableFieldType.LastModifiedBy:
      return false;
    case TeableFieldType.AutoNumber:
      return false;
    case TeableFieldType.Button:
      return false;
    default:
      throw new Error('unknown type.');
  }
};

const refineOptions = (
  data: {
    type: TeableFieldType;
    isLookup?: boolean;
    lookupOptions?: ILookupOptionsRo;
    options?: IFieldOptionsRo;
  },
  ctx: RefinementCtx,
) => {
  const { type, isLookup, lookupOptions, options } = data;
  if (isLookup && !lookupOptions) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'lookupOptions is required when isLookup is true.',
    });
  }

  if (!isLookup && lookupOptions && type !== TeableFieldType.Rollup) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'lookupOptions is not allowed when isLookup is not true.',
    });
  }

  if (!options) {
    return;
  }
  const schema = getOptionsSchema(data.type);
  const result = schema && schema.safeParse(data.options);

  if (result && !result.success) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      // to do fix, remove 'as any'
      message: (result as any).error.message,
    });
  }
};

export const fieldRoSchema = baseFieldRoSchema
  // .merge(
  // z.object({
  //   id: z.string().startsWith(IdPrefix.Field).optional(),
  // }),
  // )
  .superRefine(refineOptions);

export type IFieldRo = z.infer<typeof fieldRoSchema>;
