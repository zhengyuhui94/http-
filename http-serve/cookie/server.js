const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    console.log(`reques come:${req.url}`);

    if(req.url === '/'){
        const html = fs.readFileSync('test.html', 'utf8');
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Set-Cookie': 'id=123'
        });
        res.end(html);
    }
}).listen(8888);