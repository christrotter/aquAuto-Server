const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('listening on 3000')
})

app.get('/', function (req, res){
    //res.send('Hello World')
    res.sendFile(__dirname + '/index.html')
})

console.log('Server running on port 3000.');
console.log(__dirname);

/*
var connect = require('connect'); 
// Create a connect dispatcher
var app = connect()
      // register a middleware
      .use(function (req, res, next) { 
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<html><body><h1>Hello World</h1></body></html>');
          next(); 
        });


http.createServer(app)
    .listen(3000);
 */
