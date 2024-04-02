import { TeableRelationship } from 'types';
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
