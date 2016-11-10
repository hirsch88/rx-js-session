'use strict';

const gulp = require('gulp');
const path = require('path');
const runSequence = require('run-sequence');
const paths = require('../paths');
const util = require('../util');
const $ = require('gulp-load-plugins')({
    lazy: true
});

gulp.task('build', (callback) => runSequence(
    'lint',
    'clean',
    [
        'build:transpile:src',
        'build:transpile:test'
    ],
    callback
));

gulp.task('build:transpile:src', () => transpiler(paths.root));
gulp.task('build:transpile:test', () => transpiler(paths.test, true));

const typescriptCompilerSource = $.typescript.createProject('tsconfig.json', {
    'typescript': require('typescript')
});

const typescriptCompilerTest = $.typescript.createProject('tsconfig.json', {
    'typescript': require('typescript')
});

function transpiler(filePath, isTest) {
    let typescriptCompiler = !!isTest ? typescriptCompilerTest : typescriptCompilerSource;
    return gulp
        .src(['./typings/main.d.ts', path.join(filePath, '/**/*.ts')])
        .pipe($.plumber({ errorHandler: $.notify.onError('Error: <%= error.message %>') }))
        .pipe($.sourcemaps.init({ loadMaps: true }))
        .pipe($.typescript(typescriptCompiler))
        .pipe($.sourcemaps.write()) // inline sourcemaps
        .pipe(gulp.dest(filePath));
}
