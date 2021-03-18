const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    // entry: {
    //     home:'./src/js/home.js',
    //     menu:'./src/js/menu.js',
    //     contact:'./src/js/contact.js'
    // }, // ===> use this object to have multiple js entries 
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        // filename: '[name].main.js' ===> use this configuration to have multiple bundled outputs
        filename: 'main.js'
    },
    
    // devtool: "source-map",
    
    devServer: {
        port: 5000
    },
    
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader'}, // inject styles into the DOM
                    { loader: 'css-loader'}, // turns css into common js
                    { loader: 'less-loader' }
                ]
            },
            {
                test: /\.pug$/,
                use: [
                    { loader: 'pug-loader'}
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {loader: 'url-loader'},
                    {loader: 'img-loader'}
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/pug/index.pug',
        })
        //     chunks: ['home']
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'menu.html',
        //     template: './src/pug/menu.pug',
        //     chunks: ['menu']
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'contact.html',
        //     template: './src/pug/contact.pug',
        //     chunks: ['contact']
        // })                                   ===> use this configuration to have multiple html outputs
    ]
}