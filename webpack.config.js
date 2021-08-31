const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/directives/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rule: [
      {test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource'}
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}