import { AirtableViewTypeEnum, TeableViewTypeEnum } from './types';

export const ViewMapper = {
  [AirtableViewTypeEnum.GridView]: TeableViewTypeEnum.Grid,
  [AirtableViewTypeEnum.FormView]: TeableViewTypeEnum.Form,
  [AirtableViewTypeEnum.CalendarView]: TeableViewTypeEnum.Calendar,
  [AirtableViewTypeEnum.GalleryView]: TeableViewTypeEnum.Gallery,
  [AirtableViewTypeEnum.KanbanView]: TeableViewTypeEnum.Kanban,
  [AirtableViewTypeEnum.TimelineView]: TeableViewTypeEnum.Gantt,
  [AirtableViewTypeEnum.GanttView]: TeableViewTypeEnum.Gantt,
};
