/// <reference path="./all.d.ts" />
'use strict';

import {
    sayHello,
    pruneInput,
    getErrorMessageForInvalidUserInput
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
          expect(pruneInput(s1)).toBe(s4);
          expect(pruneInput(s2)).toBe(s4);
          expect(pruneInput(s3)).toBe(s4);
          expect(pruneInput(s4)).toBe(s4);
        });

        it('should keep only numbers between 1-6', () => {
          let s1 = ' 123456 ';
          let s2 = '1.A,!23a457906';
          let s3 = '123456';
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

});
