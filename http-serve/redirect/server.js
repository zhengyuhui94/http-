const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    console.log(`request come:${req.url}`)
    if(req.url === '/'){
        // 302 重定向
        // 301 永久重定向，会在浏览器中进行缓存，之后再遇到 '/' 路由，直接跳转 '/new'，
        // 不经过服务端的 '/' 路由处理，后续即使修改服务端 '/' 路由程序，也不生效
        // 除非清除浏览器缓存 
        res.writeHead(302, {
            'Location': '/new'
        });
        res.end();
    }
    if(req.url === '/new'){
        res.writeHead(200, {
            'Content-Type': 'text-html'
        });
        res.end('<div>this is content</div>');
    }
}).listen(8888);