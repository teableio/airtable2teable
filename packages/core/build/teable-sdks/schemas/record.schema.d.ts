import { TeableFieldKeyType } from '@/types';
import { z } from 'zod';
export declare const fieldKeyTypeRoSchema: z.ZodOptional<z.ZodEffects<z.ZodDefault<z.ZodNativeEnum<typeof TeableFieldKeyType>>, TeableFieldKeyType, TeableFieldKeyType | undefined>>;
export declare const recordSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    fields: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    autoNumber: z.ZodNumber;
    createdTime: z.ZodOptional<z.ZodString>;
    lastModifiedTime: z.ZodOptional<z.ZodString>;
    createdBy: z.ZodOptional<z.ZodString>;
    lastModifiedBy: z.ZodOptional<z.ZodString>;
    recordOrder: z.ZodRecord<z.ZodString, z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    autoNumber: number;
    id: string;
    name: string;
    fields: Record<string, unknown>;
    recordOrder: Record<string, number>;
    createdTime?: string | undefined;
    lastModifiedTime?: string | undefined;
    createdBy?: string | undefined;
    lastModifiedBy?: string | undefined;
}, {
    autoNumber: number;
    id: string;
    name: string;
    fields: Record<string, unknown>;
    recordOrder: Record<string, number>;
    createdTime?: string | undefined;
    lastModifiedTime?: string | undefined;
    createdBy?: string | undefined;
    lastModifiedBy?: string | undefined;
}>;
export declare const recordsVoSchema: z.ZodObject<{
    records: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        fields: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        autoNumber: z.ZodNumber;
        createdTime: z.ZodOptional<z.ZodString>;
        lastModifiedTime: z.ZodOptional<z.ZodString>;
        createdBy: z.ZodOptional<z.ZodString>;
        lastModifiedBy: z.ZodOptional<z.ZodString>;
        recordOrder: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        autoNumber: number;
        id: string;
        name: string;
        fields: Record<string, unknown>;
        recordOrder: Record<string, number>;
        createdTime?: string | undefined;
        lastModifiedTime?: string | undefined;
        createdBy?: string | undefined;
        lastModifiedBy?: string | undefined;
    }, {
        autoNumber: number;
        id: string;
        name: string;
        fields: Record<string, unknown>;
        recordOrder: Record<string, number>;
        createdTime?: string | undefined;
        lastModifiedTime?: string | undefined;
        createdBy?: string | undefined;
        lastModifiedBy?: string | undefined;
    }>, "many">;
    offset: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    records: {
        autoNumber: number;
        id: string;
        name: string;
        fields: Record<string, unknown>;
        recordOrder: Record<string, number>;
        createdTime?: string | undefined;
        lastModifiedTime?: string | undefined;
        createdBy?: string | undefined;
        lastModifiedBy?: string | undefined;
    }[];
    offset?: string | undefined;
}, {
    records: {
        autoNumber: number;
        id: string;
        name: string;
        fields: Record<string, unknown>;
        recordOrder: Record<string, number>;
        createdTime?: string | undefined;
        lastModifiedTime?: string | undefined;
        createdBy?: string | undefined;
        lastModifiedBy?: string | undefined;
    }[];
    offset?: string | undefined;
}>;
export declare const createRecordsVoSchema: z.ZodObject<Omit<{
    records: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        fields: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        autoNumber: z.ZodNumber;
        createdTime: z.ZodOptional<z.ZodString>;
        lastModifiedTime: z.ZodOptional<z.ZodString>;
        createdBy: z.ZodOptional<z.ZodString>;
        lastModifiedBy: z.ZodOptional<z.ZodString>;
        recordOrder: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        autoNumber: number;
        id: string;
        name: string;
        fields: Record<string, unknown>;
        recordOrder: Record<string, number>;
        createdTime?: string | undefined;
        lastModifiedTime?: string | undefined;
        createdBy?: string | undefined;
        lastModifiedBy?: string | undefined;
    }, {
        autoNumber: number;
        id: string;
        name: string;
        fields: Record<string, unknown>;
        recordOrder: Record<string, number>;
        createdTime?: string | undefined;
        lastModifiedTime?: string | undefined;
        createdBy?: string | undefined;
        lastModifiedBy?: string | undefined;
    }>, "many">;
    offset: z.ZodOptional<z.ZodString>;
}, "offset">, "strip", z.ZodTypeAny, {
    records: {
        autoNumber: number;
        id: string;
        name: string;
        fields: Record<string, unknown>;
        recordOrder: Record<string, number>;
        createdTime?: string | undefined;
        lastModifiedTime?: string | undefined;
        createdBy?: string | undefined;
        lastModifiedBy?: string | undefined;
    }[];
}, {
    records: {
        autoNumber: number;
        id: string;
        name: string;
        fields: Record<string, unknown>;
        recordOrder: Record<string, number>;
        createdTime?: string | undefined;
        lastModifiedTime?: string | undefined;
        createdBy?: string | undefined;
        lastModifiedBy?: string | undefined;
    }[];
}>;
export type ICreateRecordsVo = z.infer<typeof createRecordsVoSchema>;
export declare const typecastSchema: z.ZodOptional<z.ZodBoolean>;
export declare const createRecordsRoSchema: z.ZodObject<{
    fieldKeyType: z.ZodOptional<z.ZodEffects<z.ZodDefault<z.ZodNativeEnum<typeof TeableFieldKeyType>>, TeableFieldKeyType, TeableFieldKeyType | undefined>>;
    typecast: z.ZodOptional<z.ZodBoolean>;
    records: z.ZodArray<z.ZodObject<{
        fields: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        fields: Record<string, unknown>;
    }, {
        fields: Record<string, unknown>;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    records: {
        fields: Record<string, unknown>;
    }[];
    fieldKeyType?: TeableFieldKeyType | undefined;
    typecast?: boolean | undefined;
}, {
    records: {
        fields: Record<string, unknown>;
    }[];
    fieldKeyType?: TeableFieldKeyType | undefined;
    typecast?: boolean | undefined;
}>;
export type ICreateRecordsRo = z.infer<typeof createRecordsRoSchema>;
export type IRecordsRo = z.infer<typeof createRecordsRoSchema.shape.records>;
//# sourceMappingURL=record.schema.d.ts.map