FROM node:14

# Create app directory
WORKDIR /app

COPY package*.json ./
COPY 33d558dc-d56b-11e9-8bb3-6643e1ee2390 ./

RUN npm install
RUN npm install oas3-tools
RUN npm install cors
RUN npm install mongodb

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "index.js" ]
