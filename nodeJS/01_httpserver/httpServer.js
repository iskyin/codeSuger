
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

var http=require('http');

var server=http.createServer(function(req,res) {
	// 设置表头信息   
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('hello Node.js \n');

});

server.listen(2000,'127.0.0.1');

console.log('server running at http://127.0.0.1:2000/');


















