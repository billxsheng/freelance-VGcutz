

var webpack = require('webpack');

module.exports = {
    entry: {
        'app': './angular/app/main.ts'
    },

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader' }]
            },
            {
                test: /\.css$/,
                use: [{ loader: 'raw-loader' }]
            },
            { test: /\.(png|jpg|JPG|jpeg|gif|svg)$/, use: ['url-loader'] } 
        ],
        exprContextCritical: false

    }
};