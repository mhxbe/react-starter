import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

type pluginType =
  | HtmlWebpackPlugin
  | webpack.HotModuleReplacementPlugin
  | CleanWebpackPlugin
  | BundleAnalyzerPlugin;

function getPlugins(mode: string): pluginType[] {
  let plugins: pluginType[] = [];

  plugins = plugins.concat([
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true,
      lang: 'en',
      title: 'My App',
      favicon: './src/favicon.ico',
      openGraph: {
        url: 'http://my-app.com',
        type: 'article',
        title: 'My App',
        description: 'This is My App.',
        image: 'my-app.png',
      },
      themeColor: '#60dafb',
      noScriptText: 'This app works best with JavaScript enabled.',
    }),
    new CopyWebpackPlugin([
      { from: './src/images', to: 'images' },
      { from: './src/manifest.webmanifest' },
    ]),
  ]);

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

type envType = string | undefined;
type argvType = { mode: string };

export default function(env: envType, argv: argvType): object {
  return {
    entry: './src/index.tsx',
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: ['ts-loader'],
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
      hot: true,
      open: true,
      overlay: {
        errors: true,
        warnings: true,
      },
      useLocalIp: true,
      host: '0.0.0.0',
    },
  };
}
