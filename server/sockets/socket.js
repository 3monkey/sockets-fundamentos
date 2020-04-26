const {io} = require('../server.js');

io.on('connection', (client) => {
	console.log('Usuario conectado');

	client.emit('enviarMensaje',{
		usuario: 'Admin',
		msg: 'Bienvenido'
	});

	client.on('disconnect', () => {
		console.log('Usuario desconectado');
	});

	// Escuchar el cliente
	client.on('enviarMensaje', (data, callback)=>{
		console.log(data);

		client.broadcast.emit('enviarMensaje',data);
		/*if(msg.usuario){
			callback({
				res: 'Todo salió bien'
			});
		}else{
			callback({
				res: 'Todo salió mal'
			});
		}*/
	});
});