var gulp = require("gulp");
var htmlClean = require("gulp-htmlclean")
var folder = {
    src : "./src/",//开发目录文件夹
    dist : "./dist/"//压缩打包后的目录文件夹
}

gulp.task("html",function(){
    gulp.src(folder.src + "html/*")
        .pipe(htmlClean())
        .pipe(gulp.dest(folder.dist + "html/"))
})

gulp.task("default",["html"],function(){

})