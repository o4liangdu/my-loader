const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/app.js', //打包文件入口
    output: {               //打包文件出口
        path: path.resolve(__dirname, "dist"),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.my$/,
                use: [
                    "./my-loader"
                ]
            },
        ]
    }
}