var gulp = require('gulp'),
    wiredep = require('wiredep').stream;
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    prefix = require('gulp-autoprefixer'),
    minifyCss = require('gulp-minify-css'),
    htmlify = require('gulp-angular-htmlify'),
    clean = require('gulp-clean'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'dist-svitSoft'
  });
});

gulp.task('html', function () {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulpif('*.css', prefix('last 15 version')))
    .pipe(gulpif('*.html', htmlify()))
    .pipe(gulp.dest('dist-svitSoft'));
});

gulp.task('htmlify', function() {
  return gulp.src('app/views/*.html')
    .pipe(htmlify())
    .pipe(gulp.dest('dist-svitSoft/views'));
});

gulp.task('fonts', function() {
  return gulp.src([
                  'app/bower_components/bootstrap/fonts/glyphicons-halflings-regular.*'])
          .pipe(gulp.dest('dist-svitSoft/fonts'));
});

gulp.task('bower', function () {
  return gulp.src('app/index.html')
    .pipe(wiredep({
      directory : "app/bower_components"
    }))
    .pipe(gulp.dest('./app'));
});

gulp.task('clean', function () {  
  return gulp.src('dist-svitSoft', {read: false})
    .pipe(clean());
});

gulp.task('watch', function () {
  gulp.watch(['app/views/*.html'], ['htmlify']);
  gulp.watch(['app/*.html'], ['html']);
  gulp.watch(['app/css/*.css', 'app/js/*.js'], ['html'])
})

gulp.task('default', ['connect', 'html', 'htmlify', 'fonts', 'watch']);

