import { viewVoSchema } from './view.vo.schema';
export const viewRoSchema = viewVoSchema
    .omit({
    id: true,
    createdBy: true,
    lastModifiedBy: true,
    createdTime: true,
    lastModifiedTime: true,
})
    .partial({
    name: true,
    order: true,
});
