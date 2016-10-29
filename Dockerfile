#docker run -p 80:3000 -v /C/git/aquAuto-Server:/aquAuto-Server keymetrics/pm2-docker-alpine
FROM mhart/alpine-node:latest
MAINTAINER Chris Trotter

RUN npm install pm2 -g

VOLUME ["/C/git/aquAuto-Server"]

ADD /C/git/aquAuto-Server /app
WORKDIR /app

EXPOSE 3000

CMD ["pm2-docker", "start", "--auto-exit", "--env", "production", "process.yml"]