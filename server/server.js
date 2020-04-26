const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
//let io = socketIO(server);
module.exports.io = socketIO(server);
require('./sockets/socket');

/*io.on('connection', (client) => {
	console.log('Usuario conectado');

	client.emit('enviarMensaje',{
		usuario: 'Admin',
		msg: 'Bienvenido'
	});

	client.on('disconnect', () => {
		console.log('Usuario desconectado');
	});

	// Escuchar el cliente
	client.on('enviarMensaje', (msg, callback)=>{
		console.log(msg);
		if(msg.usuario){
			callback({
				res: 'Todo salió bien'
			});
		}else{
			callback({
				res: 'Todo salió mal'
			});
		}
	});
});*/

// IO = esta es la comunicación del Backend.
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});