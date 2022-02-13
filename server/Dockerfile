FROM node:16-alpine
WORKDIR /server

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .

# start app
EXPOSE 3001
CMD ["npm", "start"]