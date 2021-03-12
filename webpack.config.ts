import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import * as WebpackPwaManifest from 'webpack-pwa-manifest';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { InjectManifest } from 'workbox-webpack-plugin';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import * as ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

type WebpackPlugins = webpack.WebpackPluginInstance[];

function getPlugins(mode: string): WebpackPlugins {
  let plugins: (webpack.WebpackPluginInstance | WebpackPwaManifest)[] = [];

  plugins = plugins.concat([
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new WebpackPwaManifest({
      lang: 'en',
      dir: 'ltr',
      name: "mhxbe's React Starterkit",
      short_name: 'React Kit',
      start_url: '.',
      scope: '.',
      description:
        'An opinionated starter kit for quickly bootstrapping client-side React projects written in TypeScript.',
      display: 'standalone',
      orientation: 'portrait',
      background_color: '#00d8ff',
      theme_color: '#00d8ff',
      // categories: ['productivity', 'utilities'],
      // screenshots: [],
      filename: 'manifest.[hash].webmanifest',
      inject: true,
      ios: {
        'apple-mobile-web-app-status-bar-style': 'black',
      },
      icons: [
        {
          src: 'public/images/icons/icon.png',
          size: 180,
          purpose: 'any maskable',
          destination: 'images/icons',
          ios: true,
        },
        {
          src: 'public/images/icons/icon-512x512.png',
          size: 512,
          purpose: 'any maskable',
          destination: 'images/icons',
          ios: 'startup',
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public/images',
          to: 'images',
          globOptions: { dot: true, ignore: ['**/.DS_Store', '**/icons/**'] },
        },
        { from: './public/locales', to: 'locales' },
        { from: './public/robots.txt' },
        { from: './public/.htaccess' },
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
        swSrc: './service-worker.ts',
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

  return plugins as WebpackPlugins;
}

type envType = string | undefined;
type argvType = { mode: string };

interface Configuration extends webpack.Configuration {
  devServer?: WebpackDevServerConfiguration;
}

export default function (env: envType, { mode }: argvType): Configuration {
  const isDevelopment = mode === 'development';
  const outputPath = __dirname + '/dist/';
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
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.woff2/,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[hash][ext][query]',
          },
        },
      ],
    },
    resolve: { extensions: ['.js', '.ts', '.tsx'] },
    target: isDevelopment ? 'web' : 'browserslist', // @todo: remove this 'web' value when https://github.com/webpack/webpack-dev-server/issues/2758#issuecomment-704457483 is fixed.
    output: {
      path: outputPath,
      filename: '[name]-[contenthash].js',
      publicPath: '/',
    },
    optimization: { splitChunks: { chunks: 'all' } },
    plugins: getPlugins(mode),
    devtool: isDevelopment ? 'inline-source-map' : 'source-map',
    devServer: {
      contentBase: outputPath,
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
