const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/index.js",
    output:{
        filename: "main.js",
        path: path.resolve(__dirname, 'dist'),
    },
    module:{
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(jpg|png|svg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './',
                        useRelativePath: true
                    }
                }
            ]
        }]
    }, 
    plugins: [new HtmlWebpackPlugin()]
}