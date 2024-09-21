import { z } from 'zod';
export type IKanbanViewOptions = z.infer<typeof kanbanViewOptionSchema>;
export declare const kanbanViewOptionSchema: z.ZodObject<{
    groupingFieldId: z.ZodString;
}, "strict", z.ZodTypeAny, {
    groupingFieldId: string;
}, {
    groupingFieldId: string;
}>;
//# sourceMappingURL=kanban.view.d.ts.map