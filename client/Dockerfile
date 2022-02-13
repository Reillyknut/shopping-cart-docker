FROM node:16-alpine
WORKDIR /client

COPY package.json ./
COPY package-lock.json ./

RUN npm install
COPY . .

# start app
EXPOSE 3000
CMD ["npm", "start"]