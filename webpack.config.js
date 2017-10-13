module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [

      {

        test: /\.json$/,
        loader: 'json-loader'
      },

      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test:/\.(jpg|png|gif)$/,
        loader:'file-loader'
      }
    ]
  }
};
