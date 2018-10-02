module.exports = function(db, app) {
  app.post('users/remove', (req, res) => {
    var prodId = {
      id:req.body.id
    };
    db.collection("users").removeOne(prodId);
  });
}
