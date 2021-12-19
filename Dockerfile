FROM node:14

WORKDIR /nodejwthomerun-app
COPY package.json .
RUN npm install
COPY . .
CMD npm start, sudo service mongod start
