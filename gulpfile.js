const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const del = require('del');

const BUILD_DIR = 'dist';

gulp.task('clean', () => del([ BUILD_DIR ]));

gulp.task('transpiler', () =>
  gulp.src('src/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(babel())
    .pipe(gulp.dest(BUILD_DIR))
);

gulp.task('assets', () =>
  gulp.src('src/public/**/*')
    .pipe(gulp.dest(BUILD_DIR + '/public'))
);

gulp.task('default', ['clean', 'transpiler', 'assets']);
