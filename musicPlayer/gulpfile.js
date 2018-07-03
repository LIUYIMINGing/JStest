var gulp = require("gulp");
    htmlClean = require("gulp-htmlclean"),
    imageMin = require("gulp-imagemin"),
    uglify = require("gulp-uglify")
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
gulp.task("js",function(){
    gulp.src(folder.src + "js/*")
        .pipe(uglify())
        .pipe(gulp.dest(folder.dist + "js/"))
})

gulp.task("default",["html","images"],function(){

})