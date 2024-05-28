#STAGE 1:
#Build Docker image for react app
FROM node:v12.22.9 as build-stage

#set working dir
RUN mkdir /usr/app

#copy all the files from current directory to docker 
COPY . /usr/app

RUN yarn 

ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN npm run build


#STAGE 2:

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build-stage /usr/app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]