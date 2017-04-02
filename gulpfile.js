'use strict';

var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var minify = require('gulp-minify');
var imagemin = require('gulp-imagemin');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
var htmlmin = require('gulp-htmlmin');

gulp.task('minify-html', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});
 
gulp.task('minify-images', function() {
    return gulp.src(['views/images/*', 'img/*'])
        .pipe(imagemin([
                imageminJpegRecompress({
                    quality:'low',
                    loops: 8,
                    target: 0.5,
                })
            ]))
        .pipe(gulp.dest('dist/img'))
});

gulp.task('minify-css', function() {
    return gulp.src('./css/*.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write({addComment: false}))
        .pipe(rename(function (path) {
            if(path.extname === '.css') {
                path.basename += '.min';
            }
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('minify-js', function() {
    return gulp.src('./js/*.js')
        .pipe(minify({
            ext:{
                min:'.min.js'
            },
            noSource: true
        }))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('default', [ 'minify-html', 'minify-css', 'minify-js', 'minify-images' ]);