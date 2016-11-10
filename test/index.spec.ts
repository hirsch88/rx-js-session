/// <reference path="./all.d.ts" />
'use strict';

import { sayHello } from '../src/index';

describe('main', () => {

    it('should say hellot', () => {
        console.log(sayHello());
        expect(sayHello()).toBe('hello');
    });

});
