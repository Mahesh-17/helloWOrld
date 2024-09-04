FROM node:14
WORKDIR /app/helloWOrld
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", "hello.js"]
