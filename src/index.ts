// <reference path="./all.d.ts" />
'use strict';

import * as chalk from 'chalk';
import * as inquirer from 'inquirer';

import {
    printBanner,
    printLineBreak,
    printTurn
} from './printer';

import { askNewGame, askTurn } from './promt';

import {
    validateUserInput,
    stringToNumberArray
} from './utils';

const ask = (turn: number): void => {
    if (turn > 0 && turn < 9) {
        printTurn(turn);
        askTurn()
            .then(answers => {
                console.log(answers.colors);
                ask(++turn);
                // Use user feedback for... whatever!!

                printLineBreak();
            });
    } else {
        printLineBreak(2);
        askNewGame().then((answers) => {
            if (answers.again) {
                ask(1);
            }
        });
    }

};

export const run = (): void => {
    printBanner();
    ask(1);
};

run();
