const http = require('http');
const fs = require('fs');
const zlip = require('zlib');

http.createServer((req, res) => {
    const html = fs.readFileSync('test.html');
    res.writeHead(200, {
        'Content-Type': 'text/html',
        // 服务端返回的数据采用哪种编码格式进行传输
        'Content-Encoding': 'gzip'
    });
    res.end(zlip.gzipSync(html));
}).listen(8888);