module.exports = {
  output: {
    filename: 'app.js',
  },
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
              ['@babel/env', { modules: false }],
              ['@babel/react', { modules: false }],
          ],
        },
      },
    ],
  },
};
