// <reference path="./all.d.ts" />
'use strict';

import { contains } from './utils';

export interface IMastmindResult {
    code: number[],
    input: number[],
    perfectMatch: number,
    colorMatch: number
}

// export const getAmountPerfectMatches = (code: number[], input: number[]): number[] => input.filter((e, i) => e === code[i]);

// export const mastermind = (code: number[]) => (input: number[]): IMastmindResult => {

//     return {
//         code: code,
//         input: input,
//         perfectMatch: getAmountPerfectMatches(code, input).length,
//         colorMatch: colorMatch
//     };
// };

export const mastermind = (code: number[]) => (input: number[]): IMastmindResult => {
    let perfectMatch = 0;
    let colorMatch = 0;

    let perfectMatchColors = [];
    let colorMatchColors = [];

    input.forEach((e, i) => {
        if (e === code[i]) {
            perfectMatch++;
            perfectMatchColors.push(e);
        }
    });

    input.forEach((e, i) => {
        if (contains(code)(e) && !contains(perfectMatchColors)(e) && !contains(colorMatchColors)(e)) {
            colorMatch++;
            colorMatchColors.push(e);
        }
    });

    return {
        code: code,
        input: input,
        perfectMatch: perfectMatch,
        colorMatch: colorMatch
    };
};
