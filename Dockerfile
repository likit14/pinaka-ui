FROM node:12 as build-step

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . . 

EXPOSE 3003

CMD [ "npm","run","start"]

