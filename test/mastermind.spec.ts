/// <reference path="./all.d.ts" />
'use strict';

import { mastermind } from '../src/mastermind';

describe('mastermind', () => {

    it('should return a evaluate function', () => {
        let m = mastermind([1,2,3,4]);
        expect(m).toBeDefined();
    });

    it('should return input', () => {
        let input = [1,2,3,4];
        expect(mastermind([1,1,1,1])(input).input).toBe(input);
    });

    it('should return code', () => {
        let code = [1,2,3,4];
        expect(mastermind(code)([1,1,1,1]).code).toBe(code);
    });

    it('should evaluate inputs perfect matches', () => {
        expect(mastermind([1,2,3,4])([1,2,3,4]).perfectMatch).toBe(4);
        expect(mastermind([1,2,3,4])([1,1,3,4]).perfectMatch).toBe(3);
        expect(mastermind([1,2,3,4])([1,1,1,4]).perfectMatch).toBe(2);
        expect(mastermind([1,2,3,4])([1,1,1,6]).perfectMatch).toBe(1);
        expect(mastermind([1,2,3,4])([4,6,1,3]).perfectMatch).toBe(0);
    });

    it('should evaluate inputs color matches', () => {
        expect(mastermind([1,2,3,4])([4,3,2,1]).colorMatch).toBe(4);
        expect(mastermind([1,2,3,4])([6,3,2,1]).colorMatch).toBe(3);
        expect(mastermind([1,2,3,4])([6,6,2,1]).colorMatch).toBe(2);
        expect(mastermind([1,2,3,4])([6,6,6,1]).colorMatch).toBe(1);
        expect(mastermind([1,2,3,4])([6,6,6,6]).colorMatch).toBe(0);
        expect(mastermind([1,2,3,4])([1,2,3,4]).colorMatch).toBe(0);
        expect(mastermind([1,2,3,4])([1,1,1,1]).colorMatch).toBe(0);
    });

});
