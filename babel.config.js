module.exports = function(config) {
  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@emotion/babel-preset-css-prop',
    ],
    plugins: [
      [
        'emotion',
        {
          sourceMap: true,
          autoLabel: config.env('development'),
          labelFormat: '[dirname]_[filename]_[local]',
          cssPropOptimization: true,
        },
      ],
      '@babel/plugin-proposal-class-properties',
    ],
  };
};
