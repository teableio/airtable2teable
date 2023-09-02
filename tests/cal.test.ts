import { cal } from 'cal';
describe('first test', () => {
  test('cal test', () => {
    const c = cal.add(1, 2);
    expect(c).toEqual(3);
  });
});
