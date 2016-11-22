// <reference path="./all.d.ts" />
import { contains } from './utils';

export interface IMastmindResult {
    code: number[],
    input: number[],
    perfectMatch: number,
    colorMatch: number
}

export const mastermind = (code: number[]) => (input: number[]): IMastmindResult => {

    let perfectMatchColors = [];
    let colorMatchColors = [];

    input.forEach((e, i) => {
        if (e === code[i]) {
            perfectMatchColors.push(i);
        }
    });

    let codeRest = code.filter((e, i) => perfectMatchColors.indexOf(i) < 0);
    let inputRest = input.filter((e, i) => perfectMatchColors.indexOf(i) < 0);

    let colorMatch = 0;
    for (var i = 0; i < inputRest.length; i++) {
        for (var n = 0; n < codeRest.length; n++) {
            if (inputRest[i] === codeRest[n]) {
                colorMatch++;
                codeRest[n] = 0;
                break;
            }
        }
    }

    return {
        code: code,
        input: input,
        perfectMatch: perfectMatchColors.length,
        colorMatch: colorMatch
    };
};
