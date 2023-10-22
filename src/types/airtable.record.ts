export interface IAirtableRecord {
  id: string;
  createdTime: string;
  fields: Record<string, any>;
  commentCount: number;
}
