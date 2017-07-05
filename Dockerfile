FROM node:boron

#create app directory
RUN mkdir -p /app
WORKDIR /app

#install our node app dependencies
COPY package.json /app/
RUN npm install

#bundle our code to the dockers directory
COPY . /app

EXPOSE 3000

CMD [ "node", "index.js" ]
