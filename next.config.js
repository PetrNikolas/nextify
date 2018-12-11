const withLess = require('@zeit/next-less')

module.exports = withLess({
  pageExtensions: ['jsx', 'js', 'bs.js'],
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
})
