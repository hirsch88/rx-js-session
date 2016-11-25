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
    // TODO
    describe('colors', () => {
        it('should have 6 colors', () => {
            let c = colors;
            expect(c.length).toBe(6);
        });
    });
    describe('printColor', () => {
        it('should retrun a chalkoutput', () => {
            expect(printColor).toBeDefined();
        });
    });
    describe('printColors', () => {
        it('should return chalk output', () => {
            expect(printColors).toBeDefined();
        });
    });
    describe('printResult', () => {
        it('should be defined', () => {
            expect(printResult).toBeDefined();
        });
    });
    describe('printTurn', () => {
        it('should be defined', () => {
            expect(printTurn).toBeDefined();
        });
    });
    describe('printLineBreak', () => {
        it('should be defined', () => {
            expect(printLineBreak).toBeDefined();
        });
    });
    describe('printGameTitle', () => {
        it('should be defined', () => {
            expect(printGameTitle).toBeDefined();
        });
    });
    describe('printYouWon', () => {
        it('should be defined', () => {
            expect(printYouWon).toBeDefined();
        });
    });
    describe('printGameOver', () => {
        it('should be defined', () => {
            expect(printGameOver).toBeDefined();
        });
    });
    describe('printBanner', () => {
        it('should be defined', () => {
            expect(printBanner).toBeDefined();
        });
    });
});
