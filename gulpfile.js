const gulp = require('gulp');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const inlinecss = require('gulp-inline-css');
const del = require('del');

const buildHtml = () => {
  return gulp.src('source/pug/*.pug')
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }).render())
    .pipe(inlinecss())
    .pipe(gulp.dest('build'))
}

const clean = () => {
  return del('build');
}

const build = gulp.series(clean, buildHtml);

exports.build = build;