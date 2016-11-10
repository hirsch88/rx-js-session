// <reference path="./all.d.ts" />
'use strict';

import * as chalk from 'chalk';

export const printLineBreak = (n = 1): void => {
    for (let i = 0; i < n; i++) {
        console.log(``);
    }
};

export const printTurn = (n: number): void => console.log(chalk.gray.bold(`Turn : ${n}`));;

export const printBanner = (): void => {
    printLineBreak(2);
    console.log(chalk.green(`                      _                      _           _`));
    console.log(chalk.green(`                     | |                    (_)         | |`));
    console.log(chalk.green(`  _ __ ___   __ _ ___| |_ ___ _ __ _ __ ___  _ _ __   __| |`));
    console.log(chalk.green(` | '_ \` _ \\ / _\` / __| __/ _ \\ '__| '_ \` _ \\| | '_ \\ / _\` |`));
    console.log(chalk.green(` | | | | | | (_| \\__ \\ ||  __/ |  | | | | | | | | | | (_| |`));
    console.log(chalk.green(` |_| |_| |_|\\__,_|___/\\__\\___|_|  |_| |_| |_|_|_| |_|\\__,_|`));
    printLineBreak(2);
    console.log(`Start guessing the corect color combination.`);
    console.log(chalk.red(`Color 1`));
    console.log(chalk.green(`Color 2`));
    console.log(chalk.yellow(`Color 3`));
    console.log(chalk.blue(`Color 4`));
    console.log(chalk.magenta(`Color 5`));
    console.log(chalk.cyan(`Color 6`));
    printLineBreak();
    console.log(chalk.bgRed(`[X] //You got one color and place correct`));
    console.log(chalk.bgBlack(`[X] //You just got one color of the combination`));
    printLineBreak(2);
};
