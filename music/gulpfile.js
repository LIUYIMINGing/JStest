var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var newer = require("gulp-newer");
var htmlClean = require("gulp-htmlclean");



var folder = {
    src : "./src/",
    build : "./build/"
}

gulp.task("images",function(){
    gulp.src(folder.src + "images/*")
        .pipe(newer(folder.build + "images"))
        .pipe(imagemin())//不能用，猜测是丢包
        .pipe(gulp.dest(folder.build + "images"))
})
gulp.task("html",function(){//先执行images后执行html
    gulp.src(folder.src + "html/*")
        .pipe(htmlClean())
        .pipe(gulp.dest(folder.build + "html"))

})
gulp.task("default",["html","images"],function(){
    console.log(1111);
})
