// <reference path="./all.d.ts" />
'use strict';

import * as chalk from 'chalk';
import * as inquirer from 'inquirer';

import {
    printBanner,
    printLineBreak,
    printTurn,
    printResult,
    printColors
} from './printer';

import {
    askNewGame,
    askTurn
} from './promt';

import {
    mastermind,
    IMastmindResult
} from './mastermind';

import {
    validateUserInput,
    stringToNumberArray,
    generateNewCode
} from './utils';

/**
 * @name next
 * @description
 * Validates the turn number and delegates to the next function.
 *
 * @param  {number} turn
 * @returns void
 */
const next = (turn: number, evaluate: (test: number[]) => IMastmindResult, onGameOver: Function): void => (turn > 0 && turn < 9) ? nextTurn(turn, evaluate) : onGameOver();

/**
 * @name nextTurn
 * @description
 * Promts the next turn, evaluates it and returns the result to the screen
 * Afterwards it goes to the next turn
 *
 * @param  {number} turn
 * @returns void
 */
const nextTurn = (turn: number, evaluate: (test: number[]) => IMastmindResult): void => {
    printTurn(turn);
    askTurn()
        .then(a => evaluate(stringToNumberArray(a.colors)))
        .then((result: IMastmindResult) => {
            printResult(result);
            printLineBreak();
            if (result.perfectMatch === 4) {
                won();
            } else {
                next(++turn, evaluate, () => {
                    gameOver(result.code);
                });
            }
        });
};

/**
 * @name newGame
 * @description
 * Asks the user if he would like to start a new game.
 *
 * @returns void
 */
const newGame = (): void => {
    printLineBreak(2);
    askNewGame().then((answers) => answers.again ? next(1, mastermind(generateNewCode()), () => {}) : undefined);
    printLineBreak(2);
};

/**
 * @name won
 * @description
 *
 *
 * @returns void
 */
const won = (): void => {
    printLineBreak(2);
    //TODO won
    console.log('YOU WON!!!!!!!!!!');
    console.log('YOU WON!!!!!!!!!!');
    console.log('YOU WON!!!!!!!!!!');
    newGame();
};

/**
 * @name gameOver
 * @description
 *
 *
 * @returns void
 */
const gameOver = (result: number[]): void => {
    printLineBreak();
    printColors(result);
    printLineBreak(2);
    //TODO gameover
    console.log('GAME OVER!!!!!!!!!!');
    console.log('GAME OVER!!!!!!!!!!');
    console.log('GAME OVER!!!!!!!!!!');
    newGame();
};

/**
 * @name main
 * @description
 * This is the main function to start the game
 *
 * @returns void
 */
export const main = (): void => {
    printBanner();
    next(1, mastermind(generateNewCode()), () => {});
};

// Starts the game
main();
