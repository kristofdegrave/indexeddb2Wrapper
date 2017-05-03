const webpack = require('webpack');
const path = require('path');
const packageSettings = require("./package.json");

module.exports = {
    devtool: 'source-map', // 'cheap-eval-source-map'
    context: path.join(__dirname, 'src'),
    entry: {
        "indexeddb2wrapper": "_index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "indexeddb2wrapper.js",
        library: "indexeddb2wrapper",
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    module: {
        rules:[
            { 
                enforce: "pre",
                test: /\.js$/, 
                loader: "eslint-loader",
                exclude: /node_modules/,
                options: {
                    cache: true,
                    failOnWarning: false,
                    failOnError: false,
                    fix: true
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader: "babel-loader",
                        options:{
                            // https://github.com/babel/babel-loader#options
                            cacheDirectory: true,  
                            "presets": [                                                                                                                                         
                                [
                                    "env", 
                                    {
                                        //http://www.2ality.com/2015/12/babel6-loose-mode.html
                                        "loose": true,
                                        "modules": false,
                                        "targets": {
                                            "browsers": packageSettings.browserslist
                                        },
                                        useBuiltIns: true
                                    }
                                ]                                                                                                                     
                            ],
                            "plugins": [
                                "babel-plugin-transform-class-properties",
                                "transform-runtime"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    target: "web",
    resolve: {
        mainFiles: ["_index", "index"],
        modules: [
            path.resolve("./src"),
            "node_modules"
        ]
    }/*,
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: true,
            beautify: false,
            comments: false,
            compress: {
                warnings: true,
                drop_debugger: true,
                screw_ie8: true
            }
        })
    ]*/
};