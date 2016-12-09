module.exports = [
  {
    test: /\.(js|jsx)$/,
    loader: 'babel'
  },
  {
    test: /\.json$/,
    loader: 'json'
  },
  {
    test: /\.scss$/,
    loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
  },
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader!autoprefixer-loader'
  },
  {
    test: /\.png$/,
    loader: 'url?mimetype=image/png'
  }
]
