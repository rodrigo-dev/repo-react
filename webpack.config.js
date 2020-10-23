const path = require('path')
module.exports ={
    entry: path.resolve('src', 'index.js'),
    output: path.resolve('dist'),
    module:{
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader'
        }]
    }
}
