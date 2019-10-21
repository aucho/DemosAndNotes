const path = require("path");
const uglify = require("uglifyjs-webpack-plugin");
const htmlPlugin = require("html-webpack-plugin");
//自动在内存中生成一个内存的页面 自动追加打包好的js文件
module.exports =
    {
        mode: "development",
        //入口文件配置项
        entry: path.join(__dirname, './src/main.js'),
        //出口文件配置
        output: {
            path: path.join(__dirname, './dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                //css loader
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']//从右向左调用
                },
                //img loader
                {
                    test: /\.(jpg|png|gif)$/,
                    use: 'url-loader'
                },
                //
                {
                    test: /\.js$/,
                    use: 'babel-loader',
                    exclude: /node_modules/
                    //babel转换es6高级语法
                }
            ]
        },
        plugins: [
            new uglify(),
            new htmlPlugin({
                minify: { //是对html文件进行压缩
                    removeAttributeQuotes: true  //removeAttrubuteQuotes是却掉属性的双引号。
                },
                hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
                template: './src/index.html' //是要打包的html模版路径和文件名称。

            })

        ],
        devServer: {
            //设置基本目录结构
            contentBase: path.resolve(__dirname, './dist'),
            //服务器的IP地址
            host: '127.0.0.1',
            compress: true,
            //端口号
            port: 8888
        }
    };
