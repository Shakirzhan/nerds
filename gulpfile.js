var gulp = require('gulp'),
		concatCss = require('gulp-concat-css'),
		browserSync = require('browser-sync');

gulp.task('default', function() 
{
	return gulp.src('src/**/*.*')
						 .pipe(gulp.dest('dist/html'));
});

gulp.task('concat', function () {
  return gulp.src('src/css/*.css')
    .pipe(concatCss("css/main.css"))
    .pipe(gulp.dest('dist/'));
});

gulp.task('browser-sync', function() 
{
    browserSync.init({
        server: {
            baseDir: "src/"
        }
    });
    gulp.watch("src/*.html").on('change', browserSync.reload);
//  gulp.watch("src/**/*.css").on('change', browserSync.stream);
});