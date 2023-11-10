import { IFieldVo } from "teable-sdks";


export interface IaT2tT {
  [airtableTableId: string]: {
    [teableTableId: string]: {
      [airtableFieldId: string]: IFieldVo;
    };
  };
}