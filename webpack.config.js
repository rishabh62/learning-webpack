const config = {
    entry: "./src/index.js",
    output: {
        path: require('path').resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                "use": "babel-loader",
                "test": /\.js$/
            }
        ]
    }
}

module.exports = config;