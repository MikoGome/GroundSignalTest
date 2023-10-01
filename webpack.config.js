const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'index.tsx'),
  output : {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        }]
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    static: __dirname,
    port: 8080
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }
}