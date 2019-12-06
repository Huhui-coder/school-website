const path = require('path');
const productionGzipExtensions = ['js', 'css'];
const isProduction = process.env.NODE_ENV === 'production';
function resolve(dir) {
  return path.join(__dirname, '.', dir);
}
module.exports = {
  productionSourceMap: false,
  publicPath: './',
  //输出文件目录
  outputDir: 'dist',
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',
  chainWebpack: config => {
    config.module
    .rule('svg')
    .exclude.add(resolve('src/icons'))
    .end();

    config.module
    .rule('icons')
    .test(/\.svg$/)
    .include.add(resolve('src/icons'))
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: 'icon-[name]'
    });
  },
  configureWebpack: config => {
    config.entry.vendorModules = ['axios']
    config.entry.vendorLocal = [
      '@/assets/css/common.scss'
    ]
    config.externals = {
      'vue': 'Vue',
      'vuex': 'Vuex',
      'element-ui': 'ELEMENT',
      'vue-router': 'VueRouter'
    }
  }
}