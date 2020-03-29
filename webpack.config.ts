import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { InjectManifest } from 'workbox-webpack-plugin';

enum WebpackMode {
  development = 'development',
  production = 'production',
  none = 'none',
}

type WebpackPlugins = Array<object>;

function getPlugins(mode: WebpackMode): WebpackPlugins {
  let plugins: WebpackPlugins = [];

  plugins = plugins.concat([
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyWebpackPlugin([
      { from: './src/images', to: 'images', ignore: ['.DS_Store'] },
      { from: './src/fonts', to: 'fonts' },
      { from: './src/manifest.webmanifest' },
      { from: './src/robots.txt' },
    ]),
  ]);

  if (mode === 'development') {
    plugins = plugins.concat([new webpack.HotModuleReplacementPlugin()]);
  }

  if (mode === 'production') {
    plugins = plugins.concat([
      new CleanWebpackPlugin(),
      new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false }),
      new InjectManifest({
        swSrc: './src/service-worker.ts',
        swDest: 'sw.js',
        exclude: [/\.DS_Store$/, /\.map$/, 'report.html', 'robots.txt'],
      }),
    ]);
  }

  return plugins;
}

type envType = string | undefined;
type argvType = { mode: WebpackMode };

export default function (env: envType, { mode }: argvType): object {
  const isDevelopment = mode === 'development';
  return {
    entry: './src/index.tsx',
    module: { rules: [{ test: /\.ts(x?)$/, use: ['ts-loader'] }] },
    resolve: { extensions: ['.js', '.ts', '.tsx'] },
    output: {
      path: __dirname + '/dist',
      filename: isDevelopment ? '[name]-[hash].js' : '[name]-[contenthash].js',
    },
    optimization: { splitChunks: { chunks: 'all' } },
    plugins: getPlugins(mode),
    devtool: isDevelopment ? 'inline-source-map' : 'source-map',
    devServer: {
      contentBase: './dist/',
      compress: true,
      hot: true,
      open: true,
      overlay: { errors: true, warnings: true },
      useLocalIp: true,
      host: '0.0.0.0',
    },
  };
}
