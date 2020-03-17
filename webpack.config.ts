import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
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
