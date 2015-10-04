var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var minify = require('gulp-minify');
var mocha = require('gulp-mocha');
var clean = require('gulp-clean');
var eslint = require('gulp-eslint');
var markdown = require ('gulp-markdown');

gulp.task('clean', function () {
    return gulp.src('dist/*', {read: false})
        .pipe(clean());
});

gulp.task('test', function (cb) {
    return gulp.src('src/test/*.js', {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('markdown', function () {
    return gulp.src('src/test/*.js', {read: false})
        .pipe(mocha({reporter: 'markdown'}))
        //.pipe(markdown())
        .pipe(gulp.dest('reports'));
});

gulp.task("transpile", function (cb) {
    return gulp.src("src/main/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});


gulp.task('compress', function () {
    return gulp.src('src/main/*.js')
        .pipe(babel())
        //.pipe(concat('test.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist'))
});

gulp.task('eslint', function () {
    return gulp.src(['src/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['clean', 'compress']);

gulp.task('watch', ['default'], function () {
    gulp.watch('src/main/**', ['default']);
});
