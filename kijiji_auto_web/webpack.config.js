module.exports = {
  output: {
    filename: 'app.js',
  },
  mode : 'development',
  optimization: {
    minimize : false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
              '@babel/env',
              '@babel/react'
          ],
        },
      },
    ],
  },
};
