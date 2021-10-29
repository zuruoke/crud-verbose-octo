FROM node:17.0.1-alpine
WORKDIR /code
COPY ./app /code/
RUN npm install
CMD [ "node", "server.js" ]