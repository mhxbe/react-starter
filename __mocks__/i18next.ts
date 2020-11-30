const init = (): any => ({
  t: (k) => k,
});

module.exports = {
  use: () => ({
    init,
    use: () => ({
      init,
    }),
  }),
  on: () => ({}),
};
