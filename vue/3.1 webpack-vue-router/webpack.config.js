const path = require("path");
const uglify = require("uglifyjs-webpack-plugin");
const htmlPlugin = require("html-webpack-plugin");
const vueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {
    mode: "development",
    entry: path.join(__dirname, './src/main.js'),

    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(jpg|png|bmp)$/, use: 'url-loader' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' }
        ]

    },
    plugins: [
        new uglify(),
        new htmlPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: './src/index.html'
        }),
        new vueLoaderPlugin(),
    ],
    devServer: {
        host: '127.0.0.1',
        port: 10086,
        compress: true,
        contentBase: path.resolve(__dirname, './dist')
    },
    // resolve: {
    //     alias:{
    //         "vue$":"vue/dist/vue.js"
    //     }
    // }
}
