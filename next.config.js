module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/grid/flexbox-grid': { page: '/flexbox-grid' },
      '/grid/css-grid': { page: '/css-grid' },
      '/grid/classic-grid': { page: '/classic-grid' },
      '/typography': { page: '/typography' },
    }
  },
}