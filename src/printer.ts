// <reference path="./all.d.ts" />
import * as chalk from 'chalk';
import { getBackgoundMethod } from './utils';
import { IMastmindResult } from './mastermind';

//TODO: add new colors
export const colors = [
    'red',
    'green',
    'yellow',
    'blue',
    'magenta',
    'cyan'
];

export const printColor = (n: number) => chalk[getBackgoundMethod(colors[n - 1])](` ${n} `);

export const printColors = (ns: number[]): void => console.log(
    ns.map(printColor).join('')
);

export const printFeedback = (result: IMastmindResult): string => {
    return chalk.bgRed(` ${result.perfectMatch} `) + chalk.bgBlack(` ${result.colorMatch} `);
};

export const printResult = (result: IMastmindResult): void => console.log(
    result.input.map(printColor).join('') + '   ' + printFeedback(result)
);

export const printTurn = (n: number): void => console.log(chalk.gray.bold(`Turn : ${n}`));

export const printLineBreak = (n = 1): void => {
    if (n === 0) {
        return
    };
    console.log(``);
    printLineBreak(--n)
};

export const printGameTitle = (): void => {
    printLineBreak(2);
    console.log(chalk.blue(`    __  ___           __                      _           __`));
    console.log(chalk.blue(`   /  |/  /___ ______/ /____  _________ ___  (_)___  ____/ /`));
    console.log(chalk.blue(`  / /|_/ / __ \`/ ___/ __/ _ \\/ ___/ __ \`__ \\/ / __ \\/ __  / `));
    console.log(chalk.blue(` / /  / / /_/ (__  ) /_/  __/ /  / / / / / / / / / / /_/ /  `));
    console.log(chalk.blue(`/_/  /_/\\__,_/____/\\__/\\___/_/  /_/ /_/ /_/_/_/ /_/\\__,_/   `));
    printLineBreak(2);
}

export const printBanner = (): void => {
    printGameTitle();
    console.log(`Possible colors:`);
    colors.forEach((c, i) => console.log(chalk[getBackgoundMethod(c)](` ${i + 1} `) + chalk.gray(` Color ${i + 1}`)));
    printLineBreak();
    console.log(`Feedback after you enter a color combination:`);
    console.log(chalk.bgRed(` X `) + chalk.gray(` You got one color and place correct`));
    console.log(chalk.bgBlack(` X `) + chalk.gray(` You just got one color of the combination`));
    printLineBreak(1);
    console.log(`Try to guess the color combination in 8 turns:`);
    printLineBreak(2);
};

export const printYouWon = (): void => {
    printLineBreak(2);
    console.log(chalk.green(`__  __               _       __   `));
    console.log(chalk.green(`\\ \\/ /___  __  __   | |     / /___  ____ `));
    console.log(chalk.green(` \\  / __ \\/ / / /   | | /| / / __ \\/ __ \\`));
    console.log(chalk.green(` / / /_/ / /_/ /    | |/ |/ / /_/ / / / /`));
    console.log(chalk.green(`/_/\\____/\\__,_/     |__/|__/\\____/_/ /_/ `));
    printLineBreak(2);
};

export const printGameOver = (): void => {
    printLineBreak(2);
    console.log(chalk.red(`   _________    __  _________   ____ _    ____________ `));
    console.log(chalk.red(`  / ____/   |  /  |/  / ____/  / __ \\ |  / / ____/ __ \\`));
    console.log(chalk.red(` / / __/ /| | / /|_/ / __/    / / / / | / / __/ / /_/ /`));
    console.log(chalk.red(`/ /_/ / ___ |/ /  / / /___   / /_/ /| |/ / /___/ _, _/ `));
    console.log(chalk.red(`\\____/_/  |_/_/  /_/_____/   \\____/ |___/_____/_/ |_|    `));
    printLineBreak(2);
};
