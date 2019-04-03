module.exports = config => {
  const isDevelopmentBuild = config.env() === 'development';
  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      [
        'babel-plugin-styled-components',
        {
          pure: true, // dead code elimination
          displayName: isDevelopmentBuild, // Only show displayName on development builds
        },
      ],
    ],
  };
};
