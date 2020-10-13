const http = require('http');
const formi = require('formidable')
const mv = require('mv');

let session = {};

let srv = http.createServer(function(req,res){
  if(req.method == 'GET') {
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<html><body><form method="POST" enctype="multipart/form-data">')
    res.write('<input type="file" name="doc1">')
    res.write('<input type="submit" value="submit">')
    res.write('</form></body></html>')
    res.end('')
  } else {
    let json = {}
    res.writeHead(200,{'content-type':'application/json'})
    const f = formi({multiple:true})
    f.parse(req,function(err,fields,files) {
      if(err) {
        json.err = err;
        return res.end(JSON.stringify(json));
      }
      let old = files.doc1.path;
      let name = files.doc1.name
      mv(old,'./'+name,function(err) {
        if(err) {
          json.err = err;
          return res.end(JSON.stringify(json));
        }
        json.files = files;
        json.uploaded = name;
        return res.end(JSON.stringify(json));
      });
    })
  }
}).listen(8000);

console.log('server is running on http://localhost:8000')
