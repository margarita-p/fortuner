'use strict';

const gulp = require('gulp'),
  clean = require('gulp-clean'),
  rename = require('gulp-rename'),
  sourcemaps = require('gulp-sourcemaps'),
  concat = require('gulp-concat'),
  plumber = require('gulp-plumber'),
  pump = require('pump'),
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  csscomb = require('gulp-csscomb'),
  csso = require('gulp-csso'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  svgstore = require('gulp-svgstore'),
  svgmin = require('gulp-svgmin'),
  run = require('run-sequence'),
  server = require('browser-sync').create();

gulp.task('html', function () {
  return gulp.src('source/*.html')
    .pipe(gulp.dest('build'))
});

gulp.task('style', function () {
  return gulp.src('source/styles/style.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csscomb())
    .pipe(gulp.dest('build/css'))
    .pipe(csso({
      restructure: false,
      sourceMap: true,
      debug: true
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/css'))
    .pipe(sourcemaps.write())
    .pipe(server.stream());
});

gulp.task('script', function (cb) {
  pump([
    gulp.src(['source/js/**/*.js']),
    sourcemaps.init(),
    concat('main.js'),
    gulp.dest('build/js'),
    uglify(),
    rename({suffix: '.min'}),
    sourcemaps.write(),
    gulp.dest('build/js')
  ], cb);
});

gulp.task('lib', function (cb) {
  pump([
    gulp.src([
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/object-fit-images/dist/ofi.min.js',
      'node_modules/slick-carousel/slick/slick.min.js',
      'node_modules/picturefill/dist/picturefill.min.js',
    ]),
    concat('lib.min.js'),
    gulp.dest('build/js')
  ], cb);
});

gulp.task('images', function () {
  return gulp.src('source/assets/images/**/*.{jpg,png}')
    .pipe(imagemin([
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 3})
    ]))
    .pipe(gulp.dest('build/assets/images'));
});

gulp.task('icons', function () {
  return gulp.src('source/assets/svg/*.svg')
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/assets/svg/'));
});

gulp.task('clean', function () {
  return gulp.src('build', {read: false})
    .pipe(clean());
});

gulp.task('copy', function () {
  return gulp.src([
      'source/assets/fonts/**',
      'source/assets/favicon/**',
    ], {
      base: 'source'
    })
    .pipe(gulp.dest('build'));
});

gulp.task('serve', function () {
  server.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('source/assets/images/**/*.{jpg,png}', ['images']);
  gulp.watch('source/assets/svg/**/*.svg', ['icons']);
  gulp.watch(['source/assets/fonts/**/*.*', 'source/assets/favicon/**'], ['copy']);
  gulp.watch(['source/styles/**/*.{scss,sass}'], ['style']);
  gulp.watch(['source/**/*.html'], ['html']).on('change', server.reload);
  gulp.watch(['source/js/**/*.js'], ['script']).on('change', server.reload);
});


gulp.task('build', function (done) {
  run('clean', 'copy', 'icons', 'html', 'style', 'lib', 'script', 'images', done);
});
