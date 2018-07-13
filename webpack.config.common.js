var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './frontend/app/main.ts',
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loaders: ['html-loader']
            },
            {
                test: /\.css$/,
                loaders: ['raw-loader']
            },
            { test: /\.(png|jpg|JPG|jpeg|gif|svg)$/, use: ['url-loader'] } 
        ],
        exprContextCritical: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'frontend/views/index.html'
        })
    ]
};