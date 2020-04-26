var socket = io();
socket.on('connect', function(){
    console.log('Conectado al servidor');
});

// Escuchar
socket.on('disconnect', function(){
    console.log('Perdimos conexión con el servidor.');
});

    	// Enviar información
socket.emit('enviarMensaje',{
    usuario: 'César',
    msg: 'Hola Mundo'
}, function(res){
    console.log('Se disparó el callback', res);
});

// Escuchar informacion
socket.on('enviarMensaje', function(res){
    console.log('Servidor', res);
});
