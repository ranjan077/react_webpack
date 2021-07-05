const MiniCSSextractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
let mode = 'development';
if(process.env.NODE_ENV === 'production') {
    mode = 'production';
}
module.exports = {
    mode,
    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.s?css/,
            use: [{
                loader: MiniCSSextractPlugin.loader,
                options: {publicPath: ''}
            }, 'css-loader', 'sass-loader']
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: "asset/resource"
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [new CleanWebpackPlugin(), new MiniCSSextractPlugin(), new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devtool: mode === 'development' ? 'source-map' : false,
    devServer: {
        contentBase: './dist',
        hot: true
    }
}