var less = require('gulp-less');
var path = require('path');
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('less',function(){
    return gulp.src('./public/less/test.less')
    .pipe(less({
        paths:[path.join(__dirname,'less','includes')]
    }))
    .pipe(gulp.dest('./public/css'));
});
// gulp.task('less1',function(){
//     return gulp.src('./portfolio/less/style.less')
//     .pipe(less({
//         paths:[path.join(__dirname,'less','includes')]
//     }))
//     .pipe(gulp.dest('./portfolio/css'));
// });
gulp.task('minify-css', function() {
  return gulp.src('./public/resume/css/main.css')
    .pipe(rename({
            suffix: '.min'
        }))
    .pipe(cleanCSS())        
    .pipe(gulp.dest('./public/resume/css/'));
});
gulp.task('minify-css1', function() {
  return gulp.src('./public/css/test.css')
    .pipe(rename({
            suffix: '.min'
        }))
    .pipe(cleanCSS())        
    .pipe(gulp.dest('./public/css'));
});
// gulp.task('minify-css2', function() {
//   return gulp.src('./portfolio/css/style.css')
//     .pipe(rename({
//             suffix: '.min'
//         }))
//     .pipe(cleanCSS())        
//     .pipe(gulp.dest('./portfolio/css'));
// });

gulp.task('default',['less','minify-css','minify-css1'],function(){
    gulp.watch("./public/less/*.less",['less']);
    // gulp.watch("./portfolio/less/*.less",['less1']);
    gulp.watch("./public/resume/css/*.css",['minify-css']);
    gulp.watch("./public/css/*.css",['minify-css1']);
    // gulp.watch("./portfolio/css/*.css",['minify-css2']);
});

