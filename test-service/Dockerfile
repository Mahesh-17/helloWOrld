FROM node:14
WORKDIR /app/helloWOrld/test-service
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD ["node", "test.js"]
