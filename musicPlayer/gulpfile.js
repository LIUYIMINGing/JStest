var gulp = require("gulp");
    htmlClean = require("gulp-htmlclean"),//压缩html
    imageMin = require("gulp-imagemin"),//压缩图片
    uglify = require("gulp-uglify"),//压缩js
    stripDebug = require("gulp-strip-debug"),//取消js中的调试语句
    concat = require("gulp-concat"),//合并不同js文件
    gulpLess = require("gulp-less"),
    postCss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),//添加css3前缀
    cssNano = require("cssnano"),//压缩css
    connet = require("gulp-connect")//起一个小服务器

// 需要先在控制台配置是否是开发环境 export NODE_ENV=development
var devMode = process.env.NODE_ENV == "development" //true

var folder = {
    src : "./src/",//开发目录文件夹
    dist : "./dist/"//压缩打包后的目录文件夹
}

gulp.task("html",function(){
    var page = gulp.src(folder.src + "html/*")//引入
        .pipe(connet.reload())//自动刷新
    if(!devMode){
        page.pipe(htmlClean())
    }
    page.pipe(gulp.dest(folder.dist + "html"))//导出
})
gulp.task("images",function(){

    gulp.src(folder.src + "images/*")
        .pipe(imageMin())
        .pipe(gulp.dest(folder.dist + "images/"))
})
gulp.task("js",function(){
    var page = gulp.src(folder.src + "js/*")
        .pipe(connet.reload())
    if(!devMode){
        page.pipe(stripDebug())
            .pipe(uglify())
    }
        // .pipe(concat("main.js"))//将src.js/下的js全部合并到dist.js/main.js里
        page.pipe(gulp.dest(folder.dist + "js/"))
})
gulp.task("css",function(){
    var options = [autoprefixer(),cssNano()]
    var page = gulp.src(folder.src + "css/*")
        .pipe(gulpLess())
        .pipe(connet.reload())
        if(!devMode){
            page.pipe(postCss(options))
        }
        page.pipe(gulp.dest(folder.dist + "css/"))
})
gulp.task("watch",function(){
    gulp.watch(folder.src + "images/*",["images"])
    gulp.watch(folder.src + "html/*",["html"])
    gulp.watch(folder.src + "css/*",["css"])
    gulp.watch(folder.src + "js/*",["js"])
})
gulp.task("server",function(){
    connet.server({//设置服务的端口号
        port : "8090",
        livereload : true
    })
})
gulp.task("default",["html","images","js","css","watch","server"],function(){

})