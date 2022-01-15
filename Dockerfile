From node:12

WORKDIR /app/node

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3003

CMD [ "npm", "start" ]


