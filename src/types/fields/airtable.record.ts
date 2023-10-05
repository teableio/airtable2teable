export interface IAirtableRecord {
  id: string;
  // A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z"
  createdTime: string;
  fields: {
    [key: string]: Record<string, any>;
  };
  commentCount?: number;
}
