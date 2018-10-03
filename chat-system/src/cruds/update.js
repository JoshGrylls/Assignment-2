module.exports = function(db, app) {
  app.post('/users/update', (req, res, next) => {
    //console.log(req.body.username);
    //console.log(req.body.imagepath);
    db.collection("users").updateOne({"username":req.body.username}, {$set: {"profileimgpath":req.body.imagepath}});
    res.send('User Updated');
  });
}
