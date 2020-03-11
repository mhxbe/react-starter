const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

function getPlugins(mode) {
  let plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true,
      title: 'My App',
      favicon: './src/images/favicon.ico',
      openGraph: {
        url: 'http://my-app.com',
        type: 'article',
        title: 'My App',
        description: 'This is My App.',
        image: 'my-app.png',
      },
    }),
  ];

  if (mode === 'development') {
    plugins = plugins.concat([new webpack.HotModuleReplacementPlugin()]);
  }

  if (mode === 'production') {
    plugins = plugins.concat([
      new CleanWebpackPlugin(),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
      }),
    ]);
  }

  return plugins;
}

module.exports = (env, argv) => {
  return {
    entry: './src/index.tsx',
    // externals: {
    //   react: 'React',
    //   'react-dom': 'ReactDOM',
    // },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
            },
          ],
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
    output: {
      path: __dirname + '/dist/',
      filename: '[name]-[hash].js',
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    plugins: getPlugins(argv.mode),
    devtool: argv.mode === 'development' ? 'inline-source-map' : 'source-map',
    devServer: {
      contentBase: './dist/',
      compress: true,
      hot: false,
      open: true,
      overlay: {
        errors: true,
        warnings: true,
      },
      useLocalIp: true,
      host: '0.0.0.0',
    },
  };
};
