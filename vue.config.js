const proxyObj = {}
proxyObj['/'] = {
  target: 'localhost:3000',
  changeOrigin: true,
  pathRewrite: {
    '^/': ''
  }
},
module.exports = {
  devServer: {
    host: '0.0.0.0',
    //设置访问ip端口
    port: 8080,
    //proxy: proxyObj,
    //https: false,
    //hotOnly: false,
    //disableHostCheck:true,
    //open: true // 配置自动启动浏览器
  }
}
