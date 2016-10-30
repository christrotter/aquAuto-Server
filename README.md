# aquAuto-Server
This has a docker-compose file, brings up two instances - InfluxDB and PM2 node.  The node instance has the listener on port 3000.

Get started: docker-compose -f docker-compose.yml up -d
See app logs: docker exec -it aquautoserver_app1_1 pm2 logs server

Note this was created using Docker for Windows, so the volume mappings will need a look.
