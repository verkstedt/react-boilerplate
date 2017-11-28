const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')

const config = require('./webpack.config.js')

const options = {
  publicPath: config.output.publicPath,
  hot: true,
  disableHostCheck: true,
  port: 3000,
  host: 'localhost',
  stats: {
    hash: false,
    cached: false,
    cachedAssets: false,
    colors: true
  }
}

WebpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new WebpackDevServer(compiler, options)

server.listen(3000, 'localhost', () => {
  console.log('dev server listening on port 3000')
})
