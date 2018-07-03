var gulp = require("gulp");
var htmlClean = require("gulp-htmlclean");
var imageMin = require("gulp-imagemin");

var folder = {
    src : "./src/",//开发目录文件夹
    dist : "./dist/"//压缩打包后的目录文件夹
}

gulp.task("html",function(){
    gulp.src(folder.src + "html/*")//引入
        .pipe(htmlClean())
        .pipe(gulp.dest(folder.dist + "html"))//导出
})
gulp.task("images",function(){
    gulp.src(folder.src + "images/*")
        .pipe(imageMin())
        .pipe(gulp.dest(folder.dist + "images/"))
})

gulp.task("default",["html","images"],function(){

})