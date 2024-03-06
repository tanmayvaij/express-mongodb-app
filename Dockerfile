FROM node:21-alpine
WORKDIR /app
ENV MONGO_URI=mongodb://13.233.48.175:27017/mydb
COPY ./package.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD npm start
