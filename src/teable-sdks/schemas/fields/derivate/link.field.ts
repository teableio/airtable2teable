import { IdPrefix, TeableRelationship } from 'types';
import { z } from 'zod';

export const linkFieldOptionsSchema = z
  .object({
    relationship: z.nativeEnum(TeableRelationship),
    foreignTableId: z.string(),
    lookupFieldId: z.string(),
    isOneWay: z.boolean().optional(),
    fkHostTableName: z.string(),
    selfKeyName: z.string(),
    foreignKeyName: z.string(),
    symmetricFieldId: z.string().optional(),
  })
  .strip();

export const linkFieldOptionsRoSchema = linkFieldOptionsSchema.pick({
  relationship: true,
  foreignTableId: true,
  isOneWay: true,
});

export type ILinkFieldOptions = z.infer<typeof linkFieldOptionsSchema>;

export const linkCellValueSchema = z.object({
  id: z.string().startsWith(IdPrefix.Record),
  title: z.string().optional(),
});

export type ILinkCellValue = z.infer<typeof linkCellValueSchema>;
