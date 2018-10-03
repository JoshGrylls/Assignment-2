module.exports = function(app, formidable){
  //route to manage image file Change
  app.post('/users/upload', (req, res) => {
    var form = new formidable.IncomingForm({ uploadDir: '../chat-system/src/assets/images' });
    form.keepExtensions = true;

    form.on('error', function(err) {
      throw err;
      res.send({
        result:"failed",
        data:{},
        numberOfImages:0,
        message:"cannot upload image, error is:" + err
      });
    });

    //this is where the renaming is happening
    form.on('fileBegin', function(name, file){
      //rename the incoming file to the files Name
      file.path = form.uploadDir + "/" + file.name;
    });

    form.on('file', function(field, file){
      res.send({
        result:"OK",
        data:{'filename':file.name, 'size':file.size},
        numberOfImages:1,
        message:"upload successful"
      });
    });

    form.parse(req);

  });
}
