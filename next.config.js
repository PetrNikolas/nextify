/* eslint-disable */
const withLess = require('@zeit/next-less')

/** fix: prevents error when .less files are required by node */
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

module.exports = withLess({
  pageExtensions: ['jsx', 'js', 'bs.js'],
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  webpack: config => {
    /** Fixes npm packages that depend on `fs` module */
    config.node = {
      fs: 'empty'
    }

    return config
  }
})
