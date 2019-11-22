module.exports = function(config) {
  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@emotion/babel-preset-css-prop',
    ],
    plugins: [
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-transform-runtime',
      [
        'emotion',
        {
          autoLabel: config.env('development'),
          cssPropOptimization: true,
          labelFormat: '[dirname]_[filename]_[local]',
          sourceMap: true,
        },
      ],
    ],
  };
};
