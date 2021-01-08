/**
 * Created by zhulixiao on 2020/4/22.
 */
const path = require('path');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 选项...
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new HardSourceWebpackPlugin(),
    ],
  },
  chainWebpack(config) {
    // svg规则配置一下，排除icons目录
    config.module.rule('svg')
      .exclude.add(resolve('src/icons'))
      .end();
    // 新增icons规则，设置svg-sprite-loader
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' }) // 使用图标名称
      .end();
  },
};
