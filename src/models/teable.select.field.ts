import { z } from 'zod';

import { Colors, TeableField } from '../types';

export const selectFieldChoiceSchema = z.object({
  id: z.string(),
  name: z.string().nonempty(),
  color: z.nativeEnum(Colors),
});

export const selectFieldChoiceRoSchema = selectFieldChoiceSchema.partial({
  id: true,
  color: true,
});

export type ISelectFieldChoice = z.infer<typeof selectFieldChoiceSchema>;

export const selectFieldOptionsSchema = z
  .object({
    choices: z.array(selectFieldChoiceSchema),
  })
  .strict();

export const selectFieldOptionsRoSchema = z
  .object({
    choices: z.array(selectFieldChoiceRoSchema),
  })
  .strict();

export type ISelectFieldOptions = z.infer<typeof selectFieldOptionsSchema>;

export type ISelectFieldOptionsRo = z.infer<typeof selectFieldOptionsRoSchema>;

export abstract class TeableSelectField extends TeableField {
  options!: ISelectFieldOptions;

  static defaultOptions(): ISelectFieldOptions {
    return {
      choices: [],
    };
  }

  validateOptions() {
    return selectFieldOptionsSchema.safeParse(this.options);
  }

  cellValue2String(cellValue?: unknown) {
    if (cellValue == null) {
      return '';
    }

    if (Array.isArray(cellValue)) {
      return cellValue.map((value) => this.item2String(value)).join(', ');
    }

    return cellValue as string;
  }

  item2String(value?: unknown): string {
    return value ? String(value) : '';
  }

  validateCellValue(cellValue: unknown) {
    const choiceNames = this.options.choices.map((v) => v.name);

    const nameSchema = z.string().refine(
      (value) => {
        return value == null || choiceNames.includes(value);
      },
      { message: `${cellValue} is not one of the choice names` },
    );

    if (this.isMultipleCellValue) {
      return z.array(nameSchema).nonempty().nullable().safeParse(cellValue);
    }

    return nameSchema.nullable().safeParse(cellValue);
  }
}
