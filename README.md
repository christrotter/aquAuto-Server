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

## Body ##
Set body to raw, JSON.

Note no quotes on the sensorData value, this keeps it as an integer.  (I think?)
```
{
    "dataType": "SensorData",
    "sourceDevice": "Arduino-1",
    "sensorName": "tempProbe-1",
    "sensorData": 24,
    "dataScale": "celcius"
}
```
## Headers ##
I believe these are automatically set by Postman.
`Content-Type: application/json`

## Curl example ##
curl -X POST -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: ca151449-9258-37fd-f9bd-ae49656ec983" -d '{
    "dataType": "SensorData",
    "sourceDevice": "Arduino-1",
    "sensorName": "tempProbe-1",
    "sensorData": 24,
    "dataScale": "celcius"
}' "http://127.0.0.1:3000/receiveSensorData"

# Checking data in InfluxDB #
Load up this url in your browser: `http://localhost:8083/#`

Then input this query:
`SELECT * FROM /.*/ WHERE time > now() - 10m`