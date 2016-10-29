const express = require('express');
const bodyParser= require('body-parser')
const Influx = require('influx')
const http = require('http')
const os = require('os')

const app = express();

const influx = new Influx.InfluxDB('http://root:root@127.0.0.1:8086/SensorData')
influx.getDatabaseNames()
  .then(names => {
    if (!names.includes('SensorData')) {
      return influx.createDatabase('SensorData');
    }
  })
  .then(() => {
    http.createServer(app).listen(3000, function () {
      console.log('Listening on port 3000')
    })
  })
  .catch(err => {
    console.error(`Error creating Influx database!`);
  })

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html')
    
})

app.post('/receiveSensorData', (req, res) => {
  console.log(req.body)
  influx.writePoints([
    {
      measurement: req.body.dataType,
      tags: { host: os.hostname() },
      fields: {
        sensorName: req.body.sensorName,
        sensorData: req.body.sensorData,
        dataScale: req.body.dataScale
      }
    }
  ])
  res.end("Data accepted.");
})
/*
console.log('Server running on port 3000.');
console.log(__dirname);
*/