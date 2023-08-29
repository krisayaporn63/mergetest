import { merge } from './merge';

describe('merge function', () => {
    it('should merge two sorted arrays', () => {
        const collection1 = [1, 4, 7, 10];
        const collection2 = [2, 5, 8, 11];
        const expected = [1, 2, 4, 5, 7, 8, 10, 11];
        const result = merge(collection1, collection2);
        expect(result).toEqual(expected);
    });
});
