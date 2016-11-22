/// <reference path="./all.d.ts" />

import {
    colors,
    printColor,
    printColors,
    printFeedback,
    printResult,
    printTurn,
    printLineBreak,
    printGameTitle,
    printYouWon,
    printGameOver,
    printBanner
} from '../src/printer';

describe('printer', () => {
    describe('colors', () => {
        it('should have 6 colors', () => {
            let c = colors;
            expect(c.length).toBe(6);
        });
    });
    describe('printColor', () => {
        it('should retrun a chalkoutput', () => {
            expect(printColor(1)).toBe(' 1 ')
        });
    });
    describe('printColors', () => {
        it('should return chalk output', () => {
            console.log = jasmine.createSpy('log');
            let ns = [1,2,3,4];
            printColors(ns);
            expect(console.log).toHaveBeenCalled();
            expect(printColors).toBeDefined();
        });
    });
    describe('printResult', () => {
        it('should the console log', () => {
          console.log = jasmine.createSpy('log');
          printResult({
              code: [],
              input: [],
              perfectMatch: 0,
              colorMatch: 1
          });
          expect(console.log).toHaveBeenCalled();
        });
    });
    describe('printTurn', () => {
      it('should the console log', () => {
        console.log = jasmine.createSpy('log');
        printTurn(1);
        expect(console.log).toHaveBeenCalled();
      });
    });
    describe('printLineBreak', () => {
      it('should the console log', () => {
        console.log = jasmine.createSpy('log');
        printLineBreak(1);
        expect(console.log).toHaveBeenCalled();
      });
    });
    describe('printGameTitle', () => {
      it('should the console log', () => {
        console.log = jasmine.createSpy('log');
        printGameTitle();
        expect(console.log).toHaveBeenCalled();
      });
    });
    describe('printYouWon', () => {
      it('should the console log', () => {
        console.log = jasmine.createSpy('log');
        printYouWon();
        expect(console.log).toHaveBeenCalled();
      });
    });
    describe('printGameOver', () => {
      it('should the console log', () => {
        console.log = jasmine.createSpy('log');
        printGameOver();
        expect(console.log).toHaveBeenCalled();
      });
    });
    describe('printBanner', () => {
      it('should the console log', () => {
        console.log = jasmine.createSpy('log');
        printBanner();
        expect(console.log).toHaveBeenCalled();
      });
    });
});
