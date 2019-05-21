const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')

let config
const devServer = {
    port: 8010,
    host: '0.0.0.0',
    overlay: {
        errors: true,
    },
    hot: true
}
const defaultPluins = [
    new webpack.DefinePlugin({
        // 'process.env': {
        //     NODE_ENV: 'production'
        // }
    })
]

config = merge(baseConfig, {
    entry: path.join(__dirname, '../parctice/index.js'),
    devtool: '#cheap-module-eval-source-map',
    module: {
        rules: [{
            test: /\.styl/,
            use: [
                'vue-style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                    }
                },
                'stylus-loader'
            ]
        }]
    },
    devServer,
    //important vue from 'vue'
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    },
    plugins: defaultPluins.concat([
        new webpack.HotModuleReplacementPlugin()
    ])
})

module.exports = config
