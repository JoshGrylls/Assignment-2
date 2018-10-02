module.exports = function(db, app) {
  app.get('/users', (req, res) => {
    var theUser = {
      username: res.body.usrName,
      password: res.body.usrPsw
    }
    db.collection("users").find().toArray((err, results) => {
      for(var i = 0; i < results.length; i++) {
        if(results[i].username === theUser.username && results[i].password === theUser.password) {
          res.send({ok:true});
        } else {
          res.send({ok:false});
        }
      }
    });
  });
}
