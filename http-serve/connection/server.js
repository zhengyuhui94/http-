const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    console.log(req.headers.host);
    if(req.url === '/'){
        const html = fs.readFileSync('test.html', 'utf8');
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Connection': 'close'
        });
        res.end(html);
    }else{
        const img = fs.readFileSync('dog.jpg');
        res.writeHead(200, {
            'Content-Type': 'image/jpg',
            'Connection': 'close'
        });
        res.end(img);
    }
}).listen(8888);