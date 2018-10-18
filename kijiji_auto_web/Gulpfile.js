var gulp = require('gulp')
var sass = require('gulp-sass')
var babel = require('gulp-babel')

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
    gulp.src('spa/js/*.jsx')
        .pipe(babel({
            plugins: ['transform-react-jsx']
        }))
        .pipe(gulp.dest('spa/static'));
});

gulp.task('default', ['watch']);
