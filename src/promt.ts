// <reference path="./all.d.ts" />
import * as inquirer from 'inquirer';
import {
    validateUserInput,
    stringToNumberArray
} from './utils';

export interface IAskTurnAnswer {
    colors: string;
}

// todo
const promptUserCombination = {
    type: 'input',
    name: 'colors',
    message: `Enter your combination(4 digits between 1-4):`,
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
