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

const htmlWebpackPluginConfig = {
  inject: false,
  template: require('html-webpack-template'),
  hash: true,
  title: 'My App',

  // html-webpack-template configuration
  appMountId: 'root',
  bodyHtmlSnippet:
    '<noscript>This app works best with JavaScript enabled.</noscript>',
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    },
    { name: 'application-name', content: 'Application Name' },
    { name: 'description', content: 'This is My App.' },
    { name: 'theme-color', content: '#60dafb' },
    { name: 'robots', content: 'index,follow' },
    {
      name: 'apple-mobile-web-app-title',
      content: 'App Title',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      property: 'og:url',
      content: 'https://example.com/page.html',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:title',
      content: 'Content Title',
    },
    {
      property: 'og:image',
      content: 'https://example.com/image.jpg',
    },
    {
      property: 'og:image:alt',
      content: 'A description of what is in the image (not a caption)',
    },
    {
      property: 'og:description',
      content: 'Description Here',
    },
    {
      property: 'og:site_name',
      content: 'Site Name',
    },
    {
      property: 'og:locale',
      content: 'en_US',
    },
  ],
  scripts: [],
  links: [
    {
      rel: 'manifest',
      href: './manifest.webmanifest',
    },
    {
      rel: 'icon',
      href: './images/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      rel: 'apple-touch-icon',
      href: './images/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      rel: 'apple-touch-startup-image',
      href: './images/icon-512x512.png',
      type: 'image/png',
    },
  ],
};

function getPlugins(mode: string): pluginType[] {
  let plugins: pluginType[] = [];

  plugins = plugins.concat([
    new HtmlWebpackPlugin(htmlWebpackPluginConfig),
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
      filename: '[name]-[contenthash].js',
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
