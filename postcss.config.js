module.exports = {
  plugins:{
    autoprefixer:{},
    "postcss-px-to-viewport":{
      viewportWidth: 375, //视口宽度
      viewportHeight: 667, //视口高度
      unitPrecision: 5 , //指定的转换值的小数位数
      viewportUnit: 'vw', //指定转换的单位
      selectorBlackList: ['ignore' , 'tab-bar' , 'tab-bar-item'], //不转换的类
      minPixelValue: 1 , //小于这个宽度，不转换
      mediaQuery: false //允许在媒体查询中转换‘px’
    }
  }
}