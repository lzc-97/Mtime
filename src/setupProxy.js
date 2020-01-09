const proxy = require('http-proxy-middleware');
module.exports = function(app){
    app.use(
        '/Server',
        proxy({
            target:'https://m.mtime.cn',
            changeOrigin: true,
        })
    )
}