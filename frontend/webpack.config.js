module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    entry: {
        app: [
          'react-app-polyfill/ie9', // Only if you want to support IE 9
          'react-app-polyfill/stable',
          './src/index.js',
        ],
    },
}