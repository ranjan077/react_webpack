const MiniCSSextractPlugin = require('mini-css-extract-plugin');
let mode = 'development';
if(process.env.NODE_ENV === 'production') {
    mode = 'production';
}
module.exports = {
    mode,
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.s?css/,
            use: [MiniCSSextractPlugin.loader, 'css-loader', 'sass-loader']
        }]
    },
    plugins: [new MiniCSSextractPlugin()],
    devtool: mode === 'development' ? 'source-map' : false,
    devServer: {
        contentBase: './dist',
        hot: true
    }
}