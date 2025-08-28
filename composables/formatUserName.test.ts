import { describe, it, expect } from 'vitest';
import { formatUserName } from './formatUserName';

describe('formatUserName utility function', () => {
  
  it('adds an @ symbol and converts to lowercase', () => {
    const result = formatUserName('OMARdev');
    expect(result).toBe('@omardev');
  });
  
  it('throws an error if passed a number', () => {
    expect(() => formatUserName(123 as any)).toThrowError();
  });
});

