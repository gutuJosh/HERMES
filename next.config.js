module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/grid/flexbox-grid': { page: '/grid/flexbox-grid' },
      '/grid/css-grid': { page: '/grid/css-grid' },
      '/grid/classic-grid': { page: '/grid/classic-grid' },
      '/typography': { page: '/typography' },
      '/lists': { page: '/lists' },
      '/forms': { page: '/forms' },
      '/miscellaneous': { page: '/miscellaneous' },
      '/modals': { page: '/modals' },
      '/table': { page: '/table' },
      '/tabs': { page: '/tabs' }
    }
  },
}