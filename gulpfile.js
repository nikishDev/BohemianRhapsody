const gulp = require('gulp');
const stylus = require('gulp-stylus');
const cssmin = require('gulp-cssmin');
const htmlmin = require('gulp-html-minifier');
const imagemin = require('gulp-imagemin');

gulp.task('css', () => {
    return gulp.src('./src/css/*.styl')
      .pipe(stylus())
        .pipe(cssmin())
        .pipe(gulp.dest('./build/css/min'))
});
 
gulp.task('htmlMin', () => {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./build/html'))
});

gulp.task('imgMin', () => {
    return gulp.src('./src/assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
});

gulp.task('watch', () => {
    gulp.watch('./src/css/*.styl', gulp.series(['css']));
    gulp.watch('./src/*.html', gulp.series(['htmlMin']));
    gulp.watch('./src/assets/img/*', gulp.series(['imgMin']));
});
