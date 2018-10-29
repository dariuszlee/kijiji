var gulp = require('gulp')
var sass = require('gulp-sass')

var babel = require('gulp-babel')
var sourcemaps = require('gulp-sourcemaps')

var webpack = require('webpack')
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

gulp.task('styles', function() {
    gulp.src('spa/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./spa/static/'));
});

gulp.task('babel', function(){
    return gulp.src('spa/jsx/*.jsx')
        .pipe(sourcemaps.init())
        .pipe(babel({plugins: ['transform-react-jsx'], presets: ['@babel/env']}))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest('spa/js/'))
})

gulp.task('react', ['babel'], function(){
    return gulp.src('spa/js/*.js')
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest('spa/static/'));
});

gulp.task('imgs', function(){
    return gulp.src('assets/*.png')
        .pipe(gulp.dest('spa/static'));
})

gulp.task('watch', function() {
    gulp.watch('spa/scss/*', ['styles'])
    gulp.watch('spa/jsx/*.jsx', ['react'])
    gulp.watch('assets/*.png', ['imgs'])
});

gulp.task('build', ['styles', 'react', 'imgs'])
gulp.task('default', ['build', 'watch']);
