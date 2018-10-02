module.exports = function(db, app) {
  app.post('/users/add', (req, res, next) => {
    var newProduct = {
      id:req.body.id,
      username:req.body.name,
      password:req.body.price,
      type:req.body.type,
      description:req.body.description
    };

    db.collection("users").insertOne(newProduct);
    res.send('Product added successfully');
  });
}
