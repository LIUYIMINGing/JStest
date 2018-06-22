// 配置文件
// 改变配置文件的时候，必须重新在终端里手动输入 webpack,重新打包
module.exports = {
    entry: {
        demo: './src/demo.js',
        index: './src/index.js'
    },//入口

    output: {
        path: __dirname + '/out',//出口文件路径
        // filename: 'demo.js'
        filename: '[name].boundle.js',//打包之后会在out文件夹里新建两个以入口文件名为xxx.boundle.js的文件
        publicPath: './out'
    },
    module: {
        rules: [
            {test: /.jpg|.png$/,use:['url-loader?limit=10&name=/[name].[ext]']}
        ]
    },
    mode: 'development'

    // loader
    // plugin
}