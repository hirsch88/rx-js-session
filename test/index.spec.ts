/// <reference path="./all.d.ts" />
'use strict';

import { sayHello } from '../src/index';

describe('main', () => {

    it('should say hellot', () => {
        expect(sayHello()).toBe('hello');
    });

});
