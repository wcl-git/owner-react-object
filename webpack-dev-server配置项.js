color： console中打印彩色日志

historyApiFallback 任意的 404 响应都被替代为 index.html。

host 指定一个 host 默认是 localhost。 如果你希望服务器外部可以访问，指定如下：
host: '0.0.0.0'。 比如你用手机通过IP访问。

hot 启用 webpack 的模块热替换特性。

port 配置要坚挺的端口号。默认 8080 端口。

proxy 代理。比如在 localhost：3000 上有后端服务的话，你可以启用代理： 

  proxy: {
    "/api": "http:localhost：3000"
  }

progress 将编译进度输出到控制台。


contentBase： URL 的根目录