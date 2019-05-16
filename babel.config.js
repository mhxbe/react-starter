module.exports = config => {
  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      [
        'babel-plugin-styled-components',
        {
          pure: true, // dead code elimination
          displayName: config.env('development'),
        },
      ],
    ],
  };
};
