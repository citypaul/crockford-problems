var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var minify = require('gulp-minify');
var mocha = require('gulp-mocha');
var clean = require('gulp-clean');
var eslint = require('gulp-eslint');

gulp.task('clean', function () {
    return gulp.src('dist/*', {read: false})
        .pipe(clean());
});

gulp.task('test', function (cb) {
    return gulp.src('src/test/*.js', {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'nyan'}));
});

gulp.task("transpile", function (cb) {
    return gulp.src("src/main/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});


gulp.task('compress', function() {
    return gulp.src('src/main/*.js')
        .pipe(babel())
        //.pipe(concat('test.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist'))
});

gulp.task('eslint', function () {
    return gulp.src(['dist/**/*.js'], ['src/test/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['clean', 'compress'], function () {
    gulp.watch('src/main/**', ['default']);
});
