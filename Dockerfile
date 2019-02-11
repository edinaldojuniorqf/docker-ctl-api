FROM node

WORKDIR /app

COPY ./package*.json /app/

RUN npm i

CMD ["node", "src/index.js"]
