"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var merge_1 = require("./merge");
describe('merge function', function () {
    it('should merge two sorted arrays', function () {
        var collection1 = [1, 4, 7, 10];
        var collection2 = [2, 5, 8, 11];
        var expected = [1, 2, 4, 5, 7, 8, 10, 11];
        var result = (0, merge_1.merge)(collection1, collection2);
        expect(result).toEqual(expected);
    });
});
