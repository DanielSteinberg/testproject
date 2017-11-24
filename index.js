var http = require('http');
var app = require('./route');

const PORT=8080; 

http.createServer(app.handleRequest).listen(PORT);