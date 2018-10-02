const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, {useNewUrlParser: true}, function(err, client) {
  console.log("connected to db..");
  const server = app.listen(port);
  const io = require('socket.io').listen(server);
  const dbName = 'chatdb';
  const db = client.db(dbName);
  const colName = "users";

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:false}));
  app.use(express.static(path.join(__dirname, 'dist/chat-system')));

  require('./socket.js')(app, io);
  //require('./routes.js')(app, path);
});
