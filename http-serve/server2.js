const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    console.log('request come', req.url);
    res.writeHead(200, {
        // 允许你跨域请求的 origin
        'Access-Control-Allow-Origin': 'http://127.0.0.1:8888',
        // 进行跨域请求允许的自定义请求头
        'Access-Control-Allow-Headers': 'X-Text-Cors',
        // 允许跨域请求的请求方法
        'Access-Control-Allow-Methods': 'POST,PUT,DELETE',
        // 允许多少秒以内不需要再发送预请求进行验证
        'Access-Control-Max-Ages': '1000'
    });
    res.end('123');
}).listen(8887);

console.log('启动8887端口服务');

