const gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  concat = require('gulp-concat'),
  sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./public/css/*.scss')
    .pipe(plumber())
    .pipe(sass({ includePaths: ['./node_modules', './public/components'] }))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./public'))
    .pipe(livereload());
});

gulp.task('js', function() {
  const files = [
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
    './public/js/**/*.js'
  ];

  gulp.src(files)
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./public/'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch('./public/css/*.scss', ['sass']);
});

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'bin/www',
    ext: 'js jade coffee',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)){
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default', [
  'sass',
  'js',
  'develop',
  'watch'
]);
