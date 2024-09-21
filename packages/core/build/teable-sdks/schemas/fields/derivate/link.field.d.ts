import { TeableRelationship } from '@/types';
import { z } from 'zod';
export declare const linkFieldOptionsSchema: z.ZodObject<{
    relationship: z.ZodNativeEnum<typeof TeableRelationship>;
    foreignTableId: z.ZodString;
    lookupFieldId: z.ZodString;
    isOneWay: z.ZodOptional<z.ZodBoolean>;
    fkHostTableName: z.ZodString;
    selfKeyName: z.ZodString;
    foreignKeyName: z.ZodString;
    symmetricFieldId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    relationship: TeableRelationship;
    foreignTableId: string;
    lookupFieldId: string;
    fkHostTableName: string;
    selfKeyName: string;
    foreignKeyName: string;
    isOneWay?: boolean | undefined;
    symmetricFieldId?: string | undefined;
}, {
    relationship: TeableRelationship;
    foreignTableId: string;
    lookupFieldId: string;
    fkHostTableName: string;
    selfKeyName: string;
    foreignKeyName: string;
    isOneWay?: boolean | undefined;
    symmetricFieldId?: string | undefined;
}>;
export declare const linkFieldOptionsRoSchema: z.ZodObject<Pick<{
    relationship: z.ZodNativeEnum<typeof TeableRelationship>;
    foreignTableId: z.ZodString;
    lookupFieldId: z.ZodString;
    isOneWay: z.ZodOptional<z.ZodBoolean>;
    fkHostTableName: z.ZodString;
    selfKeyName: z.ZodString;
    foreignKeyName: z.ZodString;
    symmetricFieldId: z.ZodOptional<z.ZodString>;
}, "relationship" | "foreignTableId" | "isOneWay">, "strip", z.ZodTypeAny, {
    relationship: TeableRelationship;
    foreignTableId: string;
    isOneWay?: boolean | undefined;
}, {
    relationship: TeableRelationship;
    foreignTableId: string;
    isOneWay?: boolean | undefined;
}>;
export type ILinkFieldOptions = z.infer<typeof linkFieldOptionsSchema>;
export declare const linkCellValueSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    title?: string | undefined;
}, {
    id: string;
    title?: string | undefined;
}>;
export type ILinkCellValue = z.infer<typeof linkCellValueSchema>;
//# sourceMappingURL=link.field.d.ts.map