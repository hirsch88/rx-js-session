/// <reference path="./all.d.ts" />

import {
    main
} from '../src/index';

describe('index', () => {
    describe('newGame', () => {
        it('should be defined', () => {
            expect(main);
            expect(main).toBeDefined();
        });
    });
});
