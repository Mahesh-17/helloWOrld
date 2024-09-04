FROM node:14
WORKDIR /app/HelloWorld
RUN npm install
COPY package*.json ./
COPY . .
EXPOSE 8081
CMD ["node", "world.js"]

