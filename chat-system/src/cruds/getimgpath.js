module.exports = function(db, app) {
  app.post('/users/getimgpath', (req, res) => {
    db.collection("users").find({username:req.body.username}).toArray((err, results) => {
      res.send(results[0].profileimgpath);
    });
  });
}
