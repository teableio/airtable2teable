import { checkCycleDependency } from './graph.util';

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
});
