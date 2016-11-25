/// <reference path="./all.d.ts" />
'use strict';

import {
    sayHello,
    pruneInput,
    getErrorMessageForInvalidUserInput,
    validateUserInput,
    stringToNumberArray,
    contains,
    getBackgoundMethod,
    getRandomInt,
    generateNewCode
} from '../src/utils';

describe('utils', () => {

    it('should say hello', () => {
        console.log(sayHello());
        expect(sayHello()).toBe('hello');
    });

    describe('pruneInput', () => {
        it('should remove all surounded spaces', () => {
            let s1 = ' 1234 ';
            let s2 = ' 1234';
            let s3 = '1234 ';
            let s4 = '1234';
            let s5 = '12 34';
            let s6 = '1256';
            // let s7 = '12 56';
            expect(pruneInput(s1)).toBe(s4);
            expect(pruneInput(s2)).toBe(s4);
            expect(pruneInput(s3)).toBe(s4);
            expect(pruneInput(s4)).toBe(s4);
            // expect(pruneInput(s7)).toBe(s6);
        });

        //TODO add 5 and 6
        it('should keep only numbers between 1-4', () => {
            let s1 = ' 123456 ';
            let s2 = '1.A,!23a 457906';
            let s3 = '1234';
            expect(pruneInput(s1)).toBe(s3);
            expect(pruneInput(s2)).toBe(s3);
            expect(pruneInput(s3)).toBe(s3);
        });
    });

    describe('getErrorMessageForInvalidUserInput', () => {
        it('should return a message string', () => {
            expect(getErrorMessageForInvalidUserInput()).toBeTruthy();
        });
    });

    describe('validateUserInput', () => {
        it('should return true for a correct input', () => {
            expect(validateUserInput('1234')).toBeTruthy();
            expect(validateUserInput(' a12a 34a ')).toBeTruthy();
        });

        it('should return a error message for a wrong input', () => {
            expect(validateUserInput('1234aa4')).toBe(getErrorMessageForInvalidUserInput());
        });
    });

    describe('stringToNumberArray', () => {
        it('should return a number array', () => {
            let a = stringToNumberArray('1234');
            expect(a.length).toBe(4);
        });
    });

    describe('contains', () => {
        it('should return true if the element is in the array', () => {
            expect(contains([1, 2, 3, 4])(4)).toBeTruthy();
        });
        it('should return false if the element is not in the array', () => {
            expect(contains([1, 2, 3, 4])(5)).toBeFalsy();
        });
    });

    describe('getBackgoundMethod', () => {
        it('should return a chalk background color', () => {
            expect(getBackgoundMethod('blue')).toBe('bgBlue');
        });
    });

    describe('getRandomInt', () => {
        it('should return a numbers between give range', () => {
            expect(getRandomInt(1, 1)()).toBe(1)
            expect(getRandomInt(1, 2)() <= 2).toBeTruthy();
            expect(getRandomInt(1, 2)() >= 1).toBeTruthy();
        });
    });

    describe('generateNewCode', () => {
        it('should return a new code of 4 digits', () => {
            let c = generateNewCode();
            expect(c.length).toBe(4);
        });
    });

});
