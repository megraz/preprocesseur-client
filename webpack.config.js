module.exports = {
    entry: {
        index: './index.ts'
    },
    output: {
        filename: './dist/[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.ts$/, //ts les fichiers qui se terminent par .ts
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'inline-source-map'
}