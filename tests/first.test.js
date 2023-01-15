import sum from '../src/module.js';

test('пять плюс два равно семь', () => {
  expect(sum(5)(2)).toBe(7);
});
