'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      pug = require('gulp-pug'),
      debug = require('gulp-debug'),
      del = require('del'),
      autoprefixer = require('gulp-autoprefixer'),
      browserSync = require('browser-sync').create();

gulp.task('pug', function () {
  return gulp.src('src/pug/*.pug')
      .pipe(pug())
      .pipe(debug({title: 'working on'}))
      .pipe(gulp.dest('dist'))
});

gulp.task('sass', function () {
  return gulp.src('src/scss/*.scss')
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(debug({title: 'working on'}))
      .pipe(gulp.dest('dist/css'))
});

gulp.task('js', function () {
  return gulp.src('src/js/**/*.js')
      .pipe(debug({title: 'working on'}))
      .pipe(gulp.dest('dist/js/'))
});

gulp.task('img', function () {
  return gulp.src('src/img/**/*.*', {since: gulp.lastRun('img')})
      .pipe(debug({title: 'working on'}))
      .pipe(gulp.dest('dist/img'))
});

gulp.task('assets', function () {
  return gulp.src('src/assets/**/**.*')
      .pipe(gulp.dest('dist/assets'))
});

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
    notify: true
  })
});

gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.*', gulp.series('sass'));
  gulp.watch('src/pug/**/*.*', gulp.series('pug'));
  gulp.watch('src/js/**/*.*', gulp.series('js'));

  gulp.watch('dist/**/*.*').on('change', browserSync.reload);
});

gulp.task('clean', function () {
  return del('dist');
});

gulp.task('build', gulp.series('clean', gulp.parallel('pug', 'sass', 'js', 'img', 'assets')));

gulp.task('serve', gulp.parallel('watch', 'browser-sync'));

gulp.task('dev', gulp.series('build', 'serve'));