const {
  src, dest, watch, series, parallel,
} = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const replace = require('gulp-replace');

// set file paths
const files = {
  htmlPath: './src/html/**/*.html',
  cssPath: './src/css/**/*.css',
  jsPath: './src/js/**/*.js',
};

// setup css taskrunner.
function cssTask() {
  return src(files.cssPath) // locate scss file
    .pipe(postcss([autoprefixer(), cssnano()])) // autoprefix and minify css
    .pipe(dest('dist')); // save all files to dist folder
}

// setup js taskrunner.
function jsTask() {
  return src(files.jsPath) // locate js files
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(uglify()) // minify main.js
    .pipe(dest('dist')); // save to dist folder
}

// get time in milliseconds and pass to variable
const cbString = new Date().getTime();

// set cache-busting taskrunner
function cacheBuster() {
  return src(files.htmlPath) // locate html files
    .pipe(replace(/cb=\d+/g, `cb=${cbString}`)) // attach date to links
    .pipe(dest('dist')); // save to dist folder
}

// create watch taskrunner
function watchTask() {
  watch([files.cssPath, files.jsPath],
    parallel(cssTask, jsTask));
}

// configure default task
exports.default = series(
  parallel(cssTask, jsTask),
  cacheBuster,
  watchTask,
);
