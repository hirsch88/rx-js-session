// <reference path="./all.d.ts" />
'use strict';

import * as inquirer from 'inquirer';

import {
    validateUserInput,
    stringToNumberArray
} from './utils';

export interface IAskTurnAnswer {
    colors: string;
}

const promptUserCombination = {
    type: 'input',
    name: 'colors',
    message: `Enter your combination(4 digits between 1-6):`,
    validate: validateUserInput
};

export interface IAskNewGameConfirmAnswer {
    again: boolean;
}

const promtUserNewGameConfirm = {
    type: 'confirm',
    name: 'again',
    message: `Want to play again?`
};

export const askTurn = (): Promise<IAskTurnAnswer> => inquirer.prompt([promptUserCombination]);

export const askNewGame = (): Promise<IAskNewGameConfirmAnswer> => inquirer.prompt([promtUserNewGameConfirm]);
