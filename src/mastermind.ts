// <reference path="./all.d.ts" />
'use strict';

import { contains } from './utils';

export interface IMastmindResult {
    perfectMatch: number,
    colorMatch: number
}

export const mastermind = (code: number[]) => (test: number[]): IMastmindResult => {
    let perfectMatch = 0;
    let colorMatch = 0;

    let perfectMatchColors = [];
    let colorMatchColors = [];

    test.forEach((e, i) => {
        if (e === code[i]) {
            perfectMatch++;
            perfectMatchColors.push(e);
        }
    });

    test.forEach((e, i) => {
        if (contains(code)(e) && !contains(perfectMatchColors)(e) && !contains(colorMatchColors)(e)) {
            colorMatch++;
            colorMatchColors.push(e);
        }
    });

    return {
        perfectMatch: perfectMatch,
        colorMatch: colorMatch
    };
};
