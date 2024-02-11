FROM node:18

# Create app directory
WORKDIR /app

COPY package*.json ./

RUN npm ci --verbose

# Bundle app source

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]