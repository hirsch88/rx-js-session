// <reference path="./all.d.ts" />
'use strict';

export const sayHello = (): string => 'hello';

export const pruneInput = (input: string): string => input.replace(/[^1-6]/g, '');

export const getErrorMessageForInvalidUserInput = (): string => 'Enter a valid color combi like: 1234';

export const validateUserInput = (input: string): string | boolean => pruneInput(input).length === 4 ? true : getErrorMessageForInvalidUserInput();

export const stringToNumberArray = (s: string): number[] => s.split('').map(c => parseInt(c, 10));

export const contains = (xs: any[]) => (x: any): boolean => xs.indexOf(x) >= 0;

export const getBackgoundMethod = (c: string) => `bg${c.charAt(0).toUpperCase()}${c.substring(1, c.length)}`;

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
export const getRandomInt = (min: number, max: number) => (): number => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomCodeDigit = getRandomInt(1, 6);

export const generateNewCode = (): number[] => [getRandomCodeDigit(), getRandomCodeDigit(), getRandomCodeDigit(), getRandomCodeDigit()];
