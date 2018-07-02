var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var folder = {
    src : "./src/",
    build : "./build/"
}
// 流读取文件
gulp.task("images",function(){
    gulp.src(folder.src + "images/*")//从src读取
        .pipe(imagemin())
        .pipe(gulp.dest(folder.build + "images"))//运输到build
})