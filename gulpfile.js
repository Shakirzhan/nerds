var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	browserSync = require('browser-sync'),
    server = require('browser-sync'),
    less = require('gulp-less'),
    csso = require('gulp-csso'),
    watchLess = require('gulp-watch-less'),
    plumber = require('gulp-plumber');

gulp.task('style', function() 
{
    return gulp.src('src/less/style.less')
//      .pipe(watchLess('src/less/style.less'))
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('src/css/'))
        .pipe(server.reload({stream: true}));
});

gulp.task('serve', ['style'], function() 
{
    browserSync.init({
        server: 'src/'
    });

    gulp.watch('src/less/**/*.less', ['style']);
    gulp.watch('src/*.html')
        .on('change', browserSync.reload);
});

//gulp.task('default', function() 
//{
//	return gulp.src('src/**/*.*')
//	   .pipe(gulp.dest('dist/html'));
//});

//gulp.task('default', function () 
//{
//    return gulp.src('src/less/style.less')
//        .pipe(watchLess('src/less/style.less'))
//        .pipe(less())
//        .pipe(gulp.dest('src/css/'));
//});

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
});

//gulp.task('less', function() 
//{
//    return gulp.src("app/less/*.less") // находим все less файлы в папке less 
//        .pipe(less()) // собственно компилируем их
//        .pipe(csso()) // если нужно - сжимаем css код (если не нужно, строчку можно удалить)
//        .pipe(concatCss('main.css')) // при желании можно объединить все в один css-файл 
//        .pipe(gulp.dest("app/css")) // выгружаем файлы в папку app в раздел css 
//        .pipe(browserSync.stream()); // при желании можно обновить browser-sync после изменений
//});