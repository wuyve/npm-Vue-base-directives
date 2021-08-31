const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/directives/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}