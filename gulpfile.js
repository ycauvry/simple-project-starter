var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');

function lessCompiler() {
    return gulp.src('./less/**/style.less')
        .pipe(less())
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream());
}

function watchFiles() {
    browserSync.init({
        server: {
            baseDir: './public'
        }
    });
    gulp.watch('./less/**/*.less', lessCompiler);
    gulp.watch('./public/**/*.html').on('change', browserSync.reload);
    gulp.watch('./public/js/*.js').on('change', browserSync.reload);
}

exports.lessCompiler = lessCompiler;
exports.watchFiles = watchFiles