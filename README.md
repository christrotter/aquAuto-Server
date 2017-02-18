# aquAuto-Server
This has a docker-compose file, brings up two instances - InfluxDB and node.  
The node instance has the listener on port 3000, InfluxDB on 8083 (admin) & 8086 (data).

Get started:
```
docker-compose build --no-cache
docker-compose up
```

Start the docker pieces on their own...

# Sending data via Postman #
## Target ##
http://127.0.0.1:3000/receiveSensorData

## Headers ##
I think these are automatically set by Postman when you set the body to x-www-form-urlencoded.
`Content-Type: application/x-www-form-urlencoded`

## Body ##
Set body to x-www-form-urlencoded
```
sourceDevice: Arduino-1
sensorName: temperature-1
sensorData: 25
dataScale: celcius
```