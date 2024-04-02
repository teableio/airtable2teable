import { IAirtableTableVo } from '../airtable-sdks';
import { ITableTableVo } from '../teable-sdks';

export function mappingTable(
  airtableTables: IAirtableTableVo[],
  teableTables: ITableTableVo[],
  airtableTableId: string,
) {
  const table = airtableTables.find((table) => table.id === airtableTableId);
  return teableTables.find((newTable) => newTable.name === table!.name);
}
