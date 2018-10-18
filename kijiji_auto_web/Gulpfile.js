var gulp = require('gulp')
var sass = require('gulp-sass')
var babel = require('gulp-babel')

var webpack = require('webpack')
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

gulp.task('styles', function() {
    gulp.src('spa/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./spa/static/'));
});

gulp.task('watch', function() {
    gulp.watch('spa/scss/*', ['styles'])
    gulp.watch('spa/js/*', ['react'])
});

gulp.task('react', function(){
    return gulp.src('spa/js/*.jsx')
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulp.dest('spa/static/'));
});

gulp.task('default', ['watch']);
