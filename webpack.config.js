const path = require('path')

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'server/public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx|png)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }]
  },
  test: /\.(png|jp(e*)g|svg)$/,
  use: [{
    loader: 'url-loader',
    options: {
      limit: 8000, // Convert images < 8kb to base64 strings
      name: 'images/[hash]-[name].[ext]'
    }
  }],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './server/public'
  }
}
