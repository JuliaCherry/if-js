import { sum } from '../src/module.js';
import { expect, test } from '@jest/globals';

test('пять плюс два равно семь', () => {
  expect(sum(5)(2)).toBe(7);
});
