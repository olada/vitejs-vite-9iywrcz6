import doStuff from '../under-test';
import { describe, expect, it } from 'vitest';

describe('doStuff in plugins', () => {
    it('should return 1', () => {
        expect(doStuff()).toEqual(1);
    })
})