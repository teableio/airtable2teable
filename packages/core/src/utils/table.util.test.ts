import { fieldsTopologicalSorting } from './table.util';

describe('table util', () => {
  test('fields topological sorting', () => {
    const sorting = fieldsTopologicalSorting([
      ['fieldA', 'field'],
      ['fieldB', 'field'],
      ['fieldC', 'fieldA'],
      ['fieldC', 'fieldB'],
    ]);
    expect(sorting).toEqual(['field', 'fieldB', 'fieldA', 'fieldC']);
  });
});
