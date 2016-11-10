'use strict';

const gulp = require('gulp');
const path = require('path');
const paths = require('../paths');
const util = require('../util');
const $ = require('gulp-load-plugins')({
    lazy: true
});

gulp.task('lint', [
    'lint:root',
    'lint:test'
]);

gulp.task('lint:root', () => linter(paths.root));
gulp.task('lint:test', () => linter(paths.test));

function linter(filePath) {
    return gulp
        .src(['./typings/main.d.ts', path.join(filePath, '/**/*.ts')])
        .pipe($.tslint({
            emitError: false
        }))
        .pipe($.tslint.report('verbose'))
        .on('error', function() {
            util.notify('TSLINT failed!');
        });
}
