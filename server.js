const express = require('express');
const bodyParser= require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function() {
  console.log('listening on 3000')
})

app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html')
})

app.post('/receiveSensorData', (req, res) => {
  console.log(req.body)
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
