const http = require('http');
const url = require('url');

let arr = [];

const srv = http.createServer(function(req, res){;
    const q = url.parse(req.url, true).query;
    const d = new Date();
    arr.push(d.toISOString() +' '+ q.a);
    res.end(arr.join('\n'));
    // Reyhan Alkadri
}).listen(8000);

console.log("Listen pada port http://localhost:8000");