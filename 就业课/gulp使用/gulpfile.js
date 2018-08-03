var gulp = require("gulp");
var htmlclean = require("gulp-htmlclean") //压缩html
var imagemin = require("gulp-imagemin") //压缩img
var uglify = require("gulp-uglify") //压缩js
var stripdebugger = require("gulp-strip-debug") //精简掉调试语句
var concat = require("gulp-concat") //拼接不同js文件，减少请求次数
var less = require("gulp-less") //lees转成css
var postcss = require("gulp-postcss") //压缩css
var autoprefixer = require("autoprefixer") //添加前缀
var cssnano = require("cssnano") //压缩css代码
var connect = require("gulp-connect")//本地服务器插件 
var devMode = process.env.NODE_ENV == "development";
// 判断运行环境是开发环境还是生产环境

var folder = {
    src: "src/",
    dist: "dist/"
}
gulp.task("html", function () {
    var page = gulp.src(folder.src + "html/*") //取文件
    if (!devMode) {//不是开发环境的时候才可以压缩文件
        page.pipe(htmlclean()) //处理文件
    }
    page.pipe(gulp.dest(folder.dist + "html/")) //输出文件
        .pipe(connect.reload())
})
gulp.task("images", function () {
    gulp.src(folder.src + "images/*")
        .pipe(imagemin())
        .pipe(gulp.dest(folder.dist + "images/"))
})
gulp.task("js", function () {
    var page = gulp.src(folder.src + "js/*")
    if(!devMode){
        page.pipe(stripdebugger())
            .pipe(uglify())
    }
        // .pipe(concat("main.js"))
        page.pipe(gulp.dest(folder.dist + "js/"))
            .pipe(connect.reload())
})
gulp.task("css", function () {
    var options = [
        autoprefixer(),
        cssnano()
    ]
    var page = gulp.src(folder.src + "css/*")
        .pipe(less())
        if(!devMode) {
            page.pipe(postcss(options))
        }
        page.pipe(gulp.dest(folder.dist + "css/"))
            .pipe(connect.reload())
})
gulp.task("watch", function () { //监听文件变化，并随时执行相应的操作
    gulp.watch(folder.src + "html/*", ["html"])
    gulp.watch(folder.src + "css/*", ["css"])
    gulp.watch(folder.src + "js/*", ["js"])
    gulp.watch(folder.src + "images/*", ["images"])
})
gulp.task("server",function(){
    connect.server({
        port : "8090",//可以修改端口
        livereload : true
    })
})
gulp.task("default", ["html", "images", "js", "css", "watch","server"])
