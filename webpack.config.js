const webpack = require('webpack');
module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.js$/, loader: 'react-hot!babel',exclude:/node_modules/},
            {test: /\.less$/, loader: 'style!css!less'},
            {test: /\.(jsx|es6)$/,loader: "babel-loader"}
        ]
    },
    resolve: {
        "extensions": ["",".js",".css",".jsx",".less"]
     }
};
