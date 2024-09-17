FROM node:21-alpine
WORKDIR /app
ENV MONGO_URI=mongodb://mongo:27017/mydb
COPY ./package.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD npm start
