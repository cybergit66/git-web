var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function(){
    console.log("hello world gulper");
});

gulp.task('html', function(){
    console.log("Imagine something useful being done here");
});

gulp.task('css', function(){
    console.log("Imagine something useful being done here");
});

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    });
});

watch('./app/assets/css/*.css', function(){
    gulp.start('css');
});
