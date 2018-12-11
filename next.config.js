const withLess = require('@zeit/next-less')

module.exports = withLess({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
})
