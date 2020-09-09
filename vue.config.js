
module.exports = {
  // 选项...
        publicPath:"/",
        pages: {
            bg: {
              // page 的入口
              entry: 'src/page/bg/bg.js',
              // 模板来源
              template: 'public/index.html',
              // 在 dist/index.html 的输出
              filename: 'bg.html',
              // 当使用 title 选项时，
              // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
              title: '枫林的个人博客管理系统',
              // 在这个页面中包含的块，默认情况下会包含
              // 提取出来的通用 chunk 和 vendor chunk。
              chunks: ['chunk-vendors', 'chunk-common', 'bg']
            },
            font:{
              entry: 'src/page/font/font.js',
              template: 'public/index.html',
              filename: 'font.html',
              title: '枫林的个人博客',
              chunks: ['chunk-vendors', 'chunk-common', 'font']
            }
          },
        configureWebpack: {
        }
};