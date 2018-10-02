module.exports = function(app,io) {
  //respond to connection request
  io.on('connection', (socket) => {
    console.log('user connection');
    //respond to disconnect request
    socket.on('disconnect', function() {
      console.log('User disconnection');
    });
    socket.on('add-message', (message) => {
      io.emit('message', {type: 'message', text:message});
    });
  });
};
