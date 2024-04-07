import { checkCycleDependency, topologicalSorting } from './graph.util';

describe('graph util', () => {
  test('not cycle dependency', () => {
    const isCycle = checkCycleDependency(2, [[1, 0]]);
    expect(isCycle).toBeFalsy();
  });

  test('is cycle dependency', () => {
    const isCycle = checkCycleDependency(2, [
      [1, 0],
      [0, 1],
    ]);
    expect(isCycle).toBeTruthy();
  });

  test('topological sorting', () => {
    const sorting = topologicalSorting(4, [
      [1, 0],
      [2, 0],
      [3, 1],
      [3, 2],
    ]);
    expect(sorting).toEqual([0, 2, 1, 3]);
  });
});
