const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    entry: {
        'foundation': "./src/_webpack/foundation/foundation.js",
        'vue': "./src/_webpack/vue/app.js",
        'fonts': "./src/_webpack/fonts/fonts.js"
    },
    output: {
        path: path.join(__dirname, './src/assets/webpack/'),
        filename: "[name]/bundle.js"
    },
    resolve: {},
    devtool: 'source-map',
    // performance: {
    //     hints: false
    // },
    module: {
        rules: [

            // {
            //     test: /moment\.js$/,
            //     loader: "expose-loader?moment"
            // },

            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader', // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                            publicPath: '../_webpack'
                        }),
                        scss: ExtractTextPlugin.extract({
                            use: 'css-loader!sass-loader',
                            fallback: 'vue-style-loader', // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                            publicPath: '../_webpack'
                        }),

                    }
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg|jpeg|gif)(\?.*$|$)/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                // loader: 'file-loader'
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader"
                })
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),

        new ExtractTextPlugin("[name]/bundle.css"),

        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', {discardComments: {removeAll: true}}],
            },
            canPrint: true
        }),

        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
        })

    ],
    optimization: {
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: true,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            })
        ]
    }
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = 'source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]);
}
