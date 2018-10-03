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
  const dbName = 'users';
  const db = client.db(dbName);
  const formidable = require('formidable');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:false}));
  app.use(express.static(path.join(__dirname, './dist/chat-system')));
  app.use('/images', express.static(path.join(__dirname, './src/assets/images')));

  require('./socket.js')(app, io);
  require('./src/cruds/uploads.js')(app, formidable);
  require('./src/cruds/create.js')(db);
  //require('./src/cruds/add.js')(db, app);
  //require('./src/cruds/remove.js')(db, app);
  //require('./src/cruds/update.js')(db, app);
  require('./src/cruds/read.js')(db, app);
});
