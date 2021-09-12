


const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin



const optimization = {
    minimize: true,
    chunkIds: 'named',
    splitChunks: {
        cacheGroups: {
            vendor: {
                test: /node_modules/,
                chunks: 'initial',
                name: 'vendor',
                priority: 10,
                enforce: true
            }
        }
    }
}


const getRules = (publicPath = '') => ([
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env'
                ]
            }
        }
    },
    // {
    //     test: /\.css$/,
    //     exclude: /node_modules/,
    //     use: ExtractTextPlugin.extract(
    //         {
    //             fallback: 'style-loader',
    //             use: ['css-loader']
    //         }
    //     )
    // },
    // {
    //     test: /\.scss$/,
    //     exclude: /node_modules/,
    //     use: ExtractTextPlugin.extract(
    //         {
    //             fallback: 'style-loader',
    //             use: ['css-loader', 'sass-loader']
    //         }
    //     )
    // },
    {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }
        ]
    },
    {
        test: /\.(svg|png)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath
                }
            }
        ]
    },
    {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }
])


module.exports = (env, argv) => {

    const plugins = [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
        // new ExtractTextPlugin({ filename: '[name].css' })
    ]
    plugins.push(
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            generateStatsFile: true,
            statsOptions: { source: false }
        })
    )

    return [
        {
            entry: {
                mushrooms: './src/index.ts'
            },
            output: {
                filename: '[name].js',
                path: path.resolve(__dirname, './dist/')
            },
            module: { rules: getRules() },
            plugins,
            optimization,
            resolve: {
                extensions: ['.ts', '.js']
            }
        }
    ]
}

