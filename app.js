var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');

http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'html'});
res.end('hello');
console.log(index);
}).listen(9615);