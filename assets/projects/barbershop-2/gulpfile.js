const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const cssbeautify = require('gulp-cssbeautify');


// compile scss to css
function style() {
  // 1. where is my scss file
  return gulp.src('./sass/*.scss') // - checks only root sass folder
  // 2. pass that file through sass compiler
  .pipe(sass().on('error', sass.logError))
  // 3. where do I save the compiled css?
  .pipe(gulp.dest('./css'))
  // 4. stream changes to all browsers
  .pipe(browserSync.stream());
}

// beautify css code style
function beautify() {
  return gulp.src('./css/*.css')
    .pipe(cssbeautify({
      indent: '  ',
      //openbrace: 'separate-line',
      autosemicolon: true
    }))
    .pipe(gulp.dest('./css/'));
}

// gulp watches file changes + scss -> css + beautify ./css/style.css
function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./sass/**/*.scss', style);
  gulp.watch('./css/style.css').on('change', beautify);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

// Gulp tasks
exports.beautify = beautify;
exports.style = style; // command 'gulp style' compile scss to css
exports.watch = watch; // command 'gulp watch' start browserSync and watch changes to .scss and .html files