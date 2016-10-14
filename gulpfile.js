var gulp = require('gulp'),
    uglify = require('gulp-uglify'),   // 压缩js
    minifyCss = require('gulp-minify-css'), // 压缩css
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass');

// base css
gulp.task('cssmin', function () {
    gulp.src('./reactJS/src/helloReact/scss/*.scss', {style: "expanded"})
        //.pipe(autoprefixer('last 2 version', 'safari 5','opera 12.1', 'ios 6', 'android 4'))
        .pipe(sass().on('error', sass.logError))
        //.pipe(rename({suffix: '.min'}))
        .pipe(concat('cssmin.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./reactJS/public/helloReact/css'))
        .pipe(browserSync.stream());
});

// base js
gulp.task('jsmin', function () {
    gulp.src('./reactJS/src/helloReact/js/*.js') //多个文件以数组形式传入
        .pipe(concat('jsmin.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./reactJS/public/helloReact/js'));
});




// gulp.task('zhenai', function () {
//     gulp.src('./codeSugar/zhenai/private/css/*.scss', {style: "expanded"})
//         //.pipe(autoprefixer('last 2 version', 'safari 5','opera 12.1', 'ios 6', 'android 4'))
//         .pipe(sass().on('error', sass.logError))
//         //.pipe(rename({suffix: '.min'}))
//         .pipe(minifyCss())
//         .pipe(gulp.dest('./public/xiangqinhui/css'))
//         .pipe(browserSync.stream());
// });


 
// gulp.task('jsmin', function () {
//     gulp.src('./private/xiangqinhui/js/*.js') //多个文件以数组形式传入
//         .pipe(concat('xiangqinhui-min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('./public/xiangqinhui/js'));
// });
	       


// Static server
gulp.task('browser-sync', function() {
    var files = [
        '**/*.html',
        '**/*.scss',
        '**/*.js'
    ];
    browserSync.init(files,{
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./reactJS/src/helloReact/scss/*.scss', ["cssmin"]);
    gulp.watch('./reactJS/src/helloReact/js/*.js',['jsmin']);
});


gulp.task('default',['browser-sync']);




