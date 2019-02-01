module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: function() {
          return [
            require("cssgrace"), // 美化 css
            require("postcss-px2rem-exclude")({
              remUnit: 100,
              exclude: /mint-ui/i // 排除antd-mobile不需要进行 rem 转换
            }), // px 转 rem
            require("autoprefixer")() // 自动补全 实现兼容
          ];
        }
      }
    }
  }
};
