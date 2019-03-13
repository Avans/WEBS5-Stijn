module.exports = function(server){
	var io = require('socket.io')(server);

	io.on('connection', socket => {
		console.log('a user connected to room ' + socket.handshake.query.color);

		socket.join(socket.handshake.query.color);

		socket.on('draggingShape', (coordinates) => {
			console.log(socket.handshake.query.color, coordinates);
			socket.to(socket.handshake.query.color).emit('shapeMoved', coordinates);
		});

		socket.on('disconnect', function(){
			console.log('bye bye');
		})
	});
}