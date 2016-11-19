/// <reference path="./all.d.ts" />
'use strict';

import { mastermind } from '../src/mastermind';

describe('mastermind', () => {

    it('should return a evaluate function', () => {
        let m = mastermind;
        expect(m).toBeDefined();
        expect(m([1, 2, 3, 4])).toBeDefined();
    });

    it('should return input', () => {
        let input = [1, 2, 3, 4];
        expect(mastermind([1, 1, 1, 1])(input).input).toBe(input);
    });

    it('should return code', () => {
        let code = [1, 2, 3, 4];
        expect(mastermind(code)([1, 1, 1, 1]).code).toBe(code);
    });

    it('should evaluate inputs perfect matches', () => {
        let code = [1, 2, 3, 4];
        let getInfo = mastermind(code);

        expect(getInfo([1, 2, 3, 4]).perfectMatch).toBe(4);
        expect(getInfo([1, 1, 3, 4]).perfectMatch).toBe(3);
        expect(getInfo([1, 1, 1, 4]).perfectMatch).toBe(2);
        expect(getInfo([1, 1, 1, 6]).perfectMatch).toBe(1);
        expect(getInfo([4, 6, 1, 3]).perfectMatch).toBe(0);
    });

    it('should evaluate inputs color matches', () => {
        let code = [1, 2, 3, 4];
        let getInfo = mastermind(code);
        expect(getInfo([4, 3, 2, 1]).colorMatch).toBe(4);
        expect(getInfo([4, 3, 2, 1]).colorMatch).toBe(4);
        expect(getInfo([6, 3, 2, 1]).colorMatch).toBe(3);
        expect(getInfo([6, 6, 2, 1]).colorMatch).toBe(2);
        expect(getInfo([6, 6, 6, 1]).colorMatch).toBe(1);
        expect(getInfo([6, 6, 6, 6]).colorMatch).toBe(0);
        expect(getInfo([1, 2, 3, 4]).colorMatch).toBe(0);
        expect(getInfo([1, 1, 1, 1]).colorMatch).toBe(0);

        expect(mastermind([1, 2, 2, 4])([1, 2, 1, 2]).colorMatch).toBe(1);
        expect(mastermind([1, 2, 2, 4])([1, 2, 1, 2]).colorMatch).toBe(1);
    });

    it('should give the correct information', () => {
        let code = [2, 1, 4, 2];
        let try1 = [1, 3, 1, 2];
        let try2 = [2, 2, 5, 1];
        let getInfo = mastermind(code);
        let info1 = getInfo(try1);
        let info2 = getInfo(try2);
        expect(info1.perfectMatch).toBe(1);
        expect(info1.colorMatch).toBe(1);
        expect(info2.perfectMatch).toBe(1);
        expect(info2.colorMatch).toBe(2);
    });

});
