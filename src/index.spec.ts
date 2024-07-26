import { expect, describe, it } from 'vitest';
import { Calcular } from './index';

describe('Simple test', () => {
  it('should return 10', () => {
    const result = Calcular(5, 5);
    expect(result).toBe(10);
  });
});
