var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
 return gulp.src('./src/*.js')
   .pipe(concat('bundle.js'))
   .pipe(gulp.dest('./dist/'));
});
