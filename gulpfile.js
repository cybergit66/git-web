var gulp = require('gulp');
var watch = require('gulp-watch'),
    postcss = require('gulp-postcss')
    autoprefixer = require('autoprefixer')
    cssvars = require('postcss-simple-vars')
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    browserSync = require('browser-sync');

//gulp.task('default', function(){
//    console.log("hello world gulper");
//});

//gulp.task('html', function(){
//    console.log("Imagine something useful being done here");
//});

gulp.task('styles', function(){
    return gulp.src('./app/assets/css/styles.css')
        .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/css'));
});

//gulp.task('css', function(){
//    console.log("Imagine something useful being done here");
//});

gulp.task('watch', function(){
    
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
    
    watch('./app/index.html', function(){
        browserSync.reload();
    });
    
    watch('./app/assets/css/**/*.css', function(){
        gulp.start('cssInject');
    })
});

//watch('./app/assets/css/*.css', function(){
//    gulp.start('css');
//});

gulp.task('cssInject', ['styles'], function(){
    return gulp.src('./app/temp/css/styles.css')
        .pipe(browserSync.stream());
});