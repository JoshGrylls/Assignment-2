module.exports = function(db, app) {
  app.post('/users', (req, res) => {
    db.collection("users").find().toArray((err, results) => {
      for(var i = 0; i < results.length; i++) {
        if(results[i].username === req.body.tryName && results[i].password === req.body.tryPassword) {
          res.send({ok:true});
          return;
        }
      }
      res.send({ok:false});
    });
  });
}
