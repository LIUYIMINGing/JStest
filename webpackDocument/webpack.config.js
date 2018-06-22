// 配置文件
// 改变配置文件的时候，必须重新在终端里手动输入 webpack,重新打包
var uglifyjs = require('uglifyjs-webpack-plugin');//引入js压缩插件
module.exports = {
    //入口
    entry: {
        demo: './src/demo.js',
        index: './src/index.js'
    },
    output: {
        path: __dirname + '/out',//出口文件路径
        // filename: 'demo.js'
        filename: '[name].boundle.js',//打包之后会在out文件夹里新建两个以入口文件名为xxx.boundle.js的文件
        publicPath: './out'
    },
    // loader
    module: {
        rules: [
            {test:/.less$/,use:['style-loader','css-loader','less-loader']},
            {test: /.jpg|.png$/,use:['url-loader?limit=10&name=/[name].[ext]']}
            // 这里test后面是用正则匹配图片格式，后面use是路径，图片大小大于10k才启用webapck，后面name是图片的name，[ext]代表图片的格式
        ]
    },
    // plugins
    plugins: [
        new uglifyjs()//使用js压缩插件

    ],
    mode: 'development'
    

}