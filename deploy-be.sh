#!/bin/bash

cd /home/ubuntu/be

rm -rf node_modules

npm i

pm2 delete be 2> /dev/null
pm2 start ./app.js --name be