const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function styles(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./dist/styles'));
};

function images(){
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
};

function comprimeJS(){
    return gulp.src('./src/scripts/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'));
};


exports.default = gulp.parallel(styles, images, comprimeJS);
exports.watch = function(){
    gulp.watch('./src/styles/main.scss', gulp.parallel(styles));
};