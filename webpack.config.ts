import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { InjectManifest } from 'workbox-webpack-plugin';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import * as ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

enum WebpackMode {
  development = 'development',
  production = 'production',
  none = 'none',
}

type WebpackPlugins = Array<webpack.WebpackPluginInstance>;

function getPlugins(mode: WebpackMode): WebpackPlugins {
  let plugins: WebpackPlugins = [];

  plugins = plugins.concat([
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/images',
          to: 'images',
          globOptions: { dot: true, ignore: ['.DS_Store'] },
        },
        { from: './src/fonts', to: 'fonts' },
        { from: './src/manifest.webmanifest' },
        { from: './src/robots.txt' },
        { from: '.htaccess' },
      ],
    }),
  ]);

  if (mode === 'development') {
    plugins = plugins.concat([new ReactRefreshWebpackPlugin()]);
  }

  if (mode === 'production') {
    plugins = plugins.concat([
      new CleanWebpackPlugin(),
      new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false }),
      new InjectManifest({
        swSrc: './service-worker/index.ts',
        swDest: 'sw.js',
        exclude: [
          /\.DS_Store$/,
          /\.map$/,
          /\.open-graph.(?:png|jpg|jpeg)$/,
          'report.html',
          'robots.txt',
          '.htaccess',
        ],
      }),
    ]);
  }

  return plugins;
}

type envType = string | undefined;
type argvType = { mode: WebpackMode };

interface Configuration extends webpack.Configuration {
  devServer?: WebpackDevServerConfiguration;
}

export default function (env: envType, { mode }: argvType): Configuration {
  const isDevelopment = mode === 'development';
  const ouputPath = __dirname + '/dist/';
  return {
    entry: './src/index.tsx',
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                plugins: isDevelopment ? ['react-refresh/babel'] : [],
              },
            },
          ],
        },
      ],
    },
    resolve: { extensions: ['.js', '.ts', '.tsx'] },
    output: {
      path: ouputPath,
      filename: '[name]-[contenthash].js',
    },
    optimization: { splitChunks: { chunks: 'all' } },
    plugins: getPlugins(mode),
    devtool: isDevelopment ? 'inline-source-map' : 'source-map',
    devServer: {
      contentBase: ouputPath,
      compress: true,
      hot: true,
      open: true,
      useLocalIp: true,
      host: '0.0.0.0',
      publicPath: '/',
      historyApiFallback: true,
    },
  };
}
