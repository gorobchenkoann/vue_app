const path = require('path')
const src = './src'

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, `${src}/components`),
        '@common': path.resolve(__dirname, `${src}/components/common`),
        '@constants': path.resolve(__dirname, `${src}/constants`),
        '@types': path.resolve(__dirname, `${src}/types`)
      }
    }
  }
}
