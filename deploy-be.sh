#!/bin/bash

cd /home/ubuntu/be

rm -rf node_modules

npm i

pm2 delete be 2> /dev/null
DB_HOST=localhost:27017 pm2 start ./app.js --name be