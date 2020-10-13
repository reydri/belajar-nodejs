const http = require('http');
const fs = require('fs');

let arr = [];

const srv = http.createServer(function(req, res){;
    fs.readFile('node.png', function(err, data){;
        if(err) return res.end(err);
        res.writeHead(200, {'Content-Type' : 'image/png'});
        res.end(data);
    })
    // Reyhan Alkadri
}).listen(8000);

console.log("Listen pada port http://localhost:8000");