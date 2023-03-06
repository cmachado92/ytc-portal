const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    "/fmi/data/vLatest",
    createProxyMiddleware({
      target: "https://server.abaxconsultingfm.com",
      changeOrigin: true,
      pathRewrite: {
        "^/fmi/data/vLatest": "/fmi/data/vLatest",
      },
    })
  );
};
