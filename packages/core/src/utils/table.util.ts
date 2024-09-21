import * as _ from 'lodash';

import { IAirtableTableVo } from '../airtable-sdks';
import { ITableTableVo } from '../teable-sdks';
import { topologicalSorting } from './graph.util';

export function mappingTable(
  airtableTables: IAirtableTableVo[],
  teableTables: ITableTableVo[],
  airtableTableId: string,
) {
  const table = airtableTables.find((table) => table.id === airtableTableId);
  return teableTables.find((newTable) => newTable.name === table!.name);
}

export function fieldsTopologicalSorting(
  fieldDependencies: [string, string][],
): string[] {
  const fieldsIndex: string[] = _.uniq(fieldDependencies.flatMap((e) => e));
  const fieldsIndexMap: Record<string, number> = fieldsIndex.reduce(
    (result, currentValue, currentIndex) => {
      result[currentValue] = currentIndex;
      return result;
    },
    {} as Record<string, number>,
  );
  const dependencies = fieldDependencies.map((fieldDependency) => {
    return [
      fieldsIndexMap[fieldDependency[0]],
      fieldsIndexMap[fieldDependency[1]],
    ];
  });
  const sorting = topologicalSorting(fieldsIndex.length, dependencies);
  return sorting.map((index) => fieldsIndex[index]);
}
