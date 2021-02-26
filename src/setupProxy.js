const { createProxyMiddleware } = require('http-proxy-middleware');
let {url} = require('./server/config');

module.exports = function(app) {

    app.use('/api', createProxyMiddleware({
        target: url,
        changeOrigin: true,
    }));

    app.use('/api2', createProxyMiddleware({
        target: 'http://vareyoung.top',
        changeOrigin: true,
        pathRewrite: { //路径替换
            '^/api2': '/api', // axios 访问/api2 == target + /api
        }
    }));

};