var gulp = require("gulp");
    htmlClean = require("gulp-htmlclean"),//压缩html
    imageMin = require("gulp-imagemin"),//压缩图片
    uglify = require("gulp-uglify"),//压缩js
    stripDebug = require("gulp-strip-debug"),//取消js中的调试语句
    concat = require("gulp-concat"),//合并不同js文件
    gulpLess = require("gulp-less"),
    postCss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),//添加前缀
    cssNano = require("cssnano")//压缩css

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
        .pipe(stripDebug())
        .pipe(concat("main.js"))//将src.js/下的js全部合并到dist.js/main.js里
        .pipe(uglify())
        .pipe(gulp.dest(folder.dist + "js/"))
})
gulp.task("css",function(){
    var options = [autoprefixer(),cssNano()]
    gulp.src(folder.src + "css/*")
        .pipe(gulpLess())
        .pipe(postCss(options))
        .pipe(gulp.dest(folder.dist + "css/"))
})

gulp.task("default",["html","images","js","css"],function(){

})