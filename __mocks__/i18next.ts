const init = (): any => ({
  t: (k) => k,
  on: () => ({}),
});

module.exports = {
  use: () => ({
    init,
    use: () => ({
      init,
    }),
  }),
};
