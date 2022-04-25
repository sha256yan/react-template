FROM node:alpine
COPY . /app
CMD node app/src/index.js