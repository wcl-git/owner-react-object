
const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
    chunkFilename: '[name].js',
    // publicPath: '/'
  },
  module:{
    rules: [
      {
        test: /\.j(s|sx)$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    port: 8080,
    historyApiFallback: true
  },
  resolve: {
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      components: path.join(__dirname, 'src/components'),
      router: path.join(__dirname, 'src/router'),
      reducers: path.join(__dirname, 'src/reducers'),
      actions: path.join(__dirname, 'src/actions')
    },
    extensions: ['.js', '.jsx']
  },
  devtool: 'inline-source-map',
}