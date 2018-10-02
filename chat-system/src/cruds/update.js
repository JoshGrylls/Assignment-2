module.exports = function(db, app) {
  app.post('/users/update', (req, res, next) => {
    var prodId = {
      id:req.body.id
    };

    var updatedProduct = {
      name:req.body.name,
      price:req.body.price,
      type:req.body.type,
      description:req.body.description
    };

    db.collection("users").updateOne(prodId, {$set: updatedProduct});
    res.send('User Updated');
  });
}
