const MiniCSSextractPlugin = require('mini-css-extract-plugin');
let mode = 'development';
if(process.env.NODE_ENV === 'production') {
    mode = 'production';
}
module.exports = {
    mode,
    output: {
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
    plugins: [new MiniCSSextractPlugin()],
    devtool: mode === 'development' ? 'source-map' : false,
    devServer: {
        contentBase: './dist',
        hot: true
    }
}