const IS_PRO = ['production', 'test'].includes(process.env.NODE_ENV); // 检测是否生产环境
module.exports = {
  assetsDir: 'static',
  lintOnSave: true, // 保存的时候开启ESlint 检查
  productionSourceMap: !IS_PRO, // 生产环境的source map 
  configureWebpack: {
    resolve: {
      alias: {
        '@icon': require('path').join(
          __dirname,
          './assets/svg'
        ),
        '@styles': require('path').join(
          __dirname,
          './styles'
        )
      }
    },
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: IS_PRO,
    // 开启 CSS source maps?
    sourceMap: true, // 开启CSS source map
    // css预设器配置项
    loaderOptions: {
    },
    //可以加载css模块
    modules: false,
  },
  devServer: {
    port: 8080, // 服务开启端口
    open: true, // 自动打开浏览器
    disableHostCheck: false, // 开启热更新
    hot: true,
  },
}