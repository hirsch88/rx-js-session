/// <reference path="./all.d.ts" />

import {
    askTurn,
    askNewGame
} from '../src/promt';

describe('promt', () => {
    describe('askTurn', () => {
        it('askTurn should be defined', () => {
            expect(askTurn).toBeDefined();
            expect(askTurn);
        });
    });
    describe('askNewGame', () => {
        it('askNewGame should be defined', () => {
            expect(askNewGame).toBeDefined();
            expect(askNewGame);
        });
    });
});
