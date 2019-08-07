const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  cache       : true,
  context     : path.resolve(__dirname, '../'),
  entry       : {
    app: './src/index.tsx',
  },
  output      : {
    path    : path.join(__dirname, '../dist'),
    filename: '[name].[hash].bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool     : 'source-map',
  plugins     : [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  resolve     : {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [ '.ts', '.tsx', '.js' ],
    alias     : {
      '@': path.join(__dirname, '../src'),
    },
  },
  module      : {
    rules: [
      {
        test: /\.css$/,
        use : [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use : [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader : 'less-loader',
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test   : /\.ts(x?)$/,
        exclude: /node_modules/,
        use    : [
          {
            loader: 'ts-loader',
          },
        ],
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test   : /\.js$/,
        loader : 'source-map-loader',
      },
    ],
  },
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // }
};