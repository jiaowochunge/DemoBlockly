var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: './dist',
    lazy: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: /src/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react'],
              plugins: ['transform-runtime']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
};
