const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        path.join(__dirname, '../client/index'),
    ],
    output: {
        path: path.join(__dirname, '../public/'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.txt/,
                type: 'asset/source',
            },
            // take all less files, compile them, and bundle them in with our js bundle
            {
                test: /\.less$/,
                use: 'style!css!autoprefixer?browsers=last 2 version!less'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react'],
                    plugins: [['react-transform', {
                        transforms: [{
                            transform: 'react-transform-hmr',
                            imports: ['react'],
                            // this is important for Webpack HMR:
                            locals: ['module']
                        }],
                    }]],
                },
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            },
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
};