FROM node:12

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install pm2 -g

COPY . .

RUN rm -rf /build && npm run build

#EXPOSE 4000

CMD ["pm2-runtime","build/index.js"]
