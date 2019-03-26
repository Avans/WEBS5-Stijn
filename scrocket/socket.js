/** Socket */

var io = null;

module.exports = function(app, server){

        io = require('socket.io')(server);

        io.on('connection', function(socket){
            console.log('new user');
            socket.emit('welcome', ' Mr Scrocket');
        })


        app.set('socketManager', io)
}

