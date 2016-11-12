// <reference path="./all.d.ts" />
'use strict';

import * as chalk from 'chalk';

import { getBackgoundMethod } from './utils';

import { IMastmindResult } from './mastermind';

const colors = [
    'red',
    'green',
    'yellow',
    'blue',
    'magenta',
    'cyan'
];

export const printColor = (n: number) => chalk[getBackgoundMethod(colors[n])](` ${n} `);

export const printColors = (ns: number[]): void => console.log(
    ns.map(printColor).join('')
);

export const printResult = (result: IMastmindResult): void => console.log(
    result.input.map(printColor).join('') + '  ' + printFeedback(result)
);

export const printFeedback = (result: IMastmindResult): string => {
    return chalk.bgRed(` ${result.perfectMatch} `) + chalk.bgBlack(` ${result.colorMatch} `);
};

export const printTurn = (n: number): void => console.log(chalk.gray.bold(`Turn : ${n}`));;

export const printLineBreak = (n = 1): void => {
    if (n == 0) return;
    console.log(``);
    printLineBreak(--n)
};

export const printBanner = (): void => {
    printLineBreak(2);
    console.log(chalk.green(`                      _                      _           _`));
    console.log(chalk.green(`                     | |                    (_)         | |`));
    console.log(chalk.green(`  _ __ ___   __ _ ___| |_ ___ _ __ _ __ ___  _ _ __   __| |`));
    console.log(chalk.green(` | '_ \` _ \\ / _\` / __| __/ _ \\ '__| '_ \` _ \\| | '_ \\ / _\` |`));
    console.log(chalk.green(` | | | | | | (_| \\__ \\ ||  __/ |  | | | | | | | | | | (_| |`));
    console.log(chalk.green(` |_| |_| |_|\\__,_|___/\\__\\___|_|  |_| |_| |_|_|_| |_|\\__,_|`));
    printLineBreak(2);
    console.log(`Possible colors:`);
    colors.forEach((c, i) => console.log(chalk[getBackgoundMethod(c)](` ${i + 1} `) + chalk.gray(` Color ${i + 1}`)));
    printLineBreak();
    console.log(`Feedback after you enter a color combination:`);
    console.log(chalk.bgBlack(` X `) + chalk.gray(` You just got one color of the combination`));
    console.log(chalk.bgRed(` X `) + chalk.gray(` You got one color and place correct`));
    printLineBreak(1);
    console.log(`Start guessing the corect color combination:`);
    printLineBreak(2);
};
