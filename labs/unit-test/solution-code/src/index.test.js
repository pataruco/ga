/* eslint-disable no-undef */
import { fizzbuzz } from './index.js';

describe('fizzbuzz', () => {
  it('return 1 when number is 1', () => {
    const result = fizzbuzz(1);
    expect(result).toBe(1);
  });

  it('return 2 when number is 2', () => {
    const result = fizzbuzz(2);
    expect(result).toBe(2);
  });

  it('return "fizz" when number is 3', () => {
    const result = fizzbuzz(3);
    expect(result).toBe('fizz');
  });

  it('return "buzz" when number is 5', () => {
    const result = fizzbuzz(5);
    expect(result).toBe('buzz');
  });

  it('return "fizzbuzz" when number is 15', () => {
    const result = fizzbuzz(15);
    expect(result).toBe('fizzbuzz');
  });

  it('return "fizzbuzz" when number is 135', () => {
    const result = fizzbuzz(135);
    expect(result).toBe('fizzbuzz');
  });
});
