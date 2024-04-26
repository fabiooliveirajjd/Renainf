const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/consultar',
        createProxyMiddleware({
            target: 'https://renainf-gicom-auto-dsv.prf.gov.br',
            changeOrigin: true,
            pathRewrite: {
                '^/consultar': '/consultar', 
            },
        })
    );
};