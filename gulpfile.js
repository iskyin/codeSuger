var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'), 
    minifyCss = require('gulp-minify-css'), 
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    images = require('gulp-imagemin'),
    plumber = require('gulp-plumber');  //异常处理插件



//  css
gulp.task('sass', function () {
        gulp.src('./common/private/*.scss')  //源文件路径
            .pipe(plumber())
            .pipe(sass())   //引用组件 
            .pipe(rename({suffix: '_min'}))
            .pipe(minifyCss())
            .pipe(gulp.dest('./common/public/'));//导出文件路径
});


//  js
gulp.task('js',function(){
    return  gulp.src('./common/private/*.js')
                // .pipe(uglify())
                .pipe(rename({suffix: '_min'}))
                .pipe(plumber())
                .pipe(gulp.dest('./common/public/'));
});


// image
gulp.task('images',function(){  //图片处理
    gulp.src('./common/private/img/*') 
        .pipe(images())commonpublic
        .pipe(gulp.dest('./common/public/img'));
});



// Static server
gulp.task('browser-sync', function() {
    var files = [
        '**/*.html',
        '**/*.scss',
        '**/*.js'
    ];
    browserSync.init(files,{
        server: {
            baseDir: "./common/"
        }
    });
    gulp.watch('private/wechat_xqh/scss/*.scss', ["sass"]);
    gulp.watch('private/wechat_xqh/js/*.js',['js']);
    gulp.watch('./private/wechat_xqh/img/*', ["images"]);
});


gulp.task('default',['browser-sync',"images"]);


