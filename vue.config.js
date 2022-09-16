const proxyObj = {}
proxyObj['/'] = {
  target: 'localhost:3000',
  changeOrigin: true,
  pathRewrite: {
    '^/': ''
  }
}
module.exports = {
  devServer: {
    host: '0.0.0.0',
    //public:'192.168.186.1',
    port: 8080,
    proxy: proxyObj
  }
}
