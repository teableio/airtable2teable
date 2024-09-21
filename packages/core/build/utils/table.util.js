import * as _ from 'lodash';
import { topologicalSorting } from './graph.util';
export function mappingTable(airtableTables, teableTables, airtableTableId) {
    const table = airtableTables.find((table) => table.id === airtableTableId);
    return teableTables.find((newTable) => newTable.name === table.name);
}
export function fieldsTopologicalSorting(fieldDependencies) {
    const fieldsIndex = _.uniq(fieldDependencies.flatMap((e) => e));
    const fieldsIndexMap = fieldsIndex.reduce((result, currentValue, currentIndex) => {
        result[currentValue] = currentIndex;
        return result;
    }, {});
    const dependencies = fieldDependencies.map((fieldDependency) => {
        return [
            fieldsIndexMap[fieldDependency[0]],
            fieldsIndexMap[fieldDependency[1]],
        ];
    });
    const sorting = topologicalSorting(fieldsIndex.length, dependencies);
    return sorting.map((index) => fieldsIndex[index]);
}
