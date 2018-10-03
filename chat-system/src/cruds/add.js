module.exports = function(db, app) {
  app.post('/users/add', (req, res, next) => {
    var newProduct = {
      id:req.body.id,
      username:req.body.usrName,
      password:req.body.usrPsw,
      profileimgpath:req.body.imgPath
    };

    db.collection("users").insertOne(newProduct);
    res.send('User added successfully');
  });
}
