module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/bobrs-prim/'
    : '/',
  productionSourceMap: false,
  filenameHashing: false,
  outputDir: 'docs',
  lintOnSave: process.env.NODE_ENV !== 'production'
}
