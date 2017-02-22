import net = require('net');//import socket module
import ip = require('ip');

// define address interface
interface Address { port: number; family: string; address: string; };

// create socket server
let server:net.Server = net.createServer();

//list of client socket connections
let clients:net.Socket[] = [];

// when the server is connected
server.on('connection', function(socket:net.Socket){
    //server uses to send message to client sockets
    function broadcast(message:string) {
        clients.forEach(function(client:net.Socket) {
            //send message to client but not if self
            if (client !== socket) {
                client.write('['+name+']' + message + '\n');
            }
        });
    }

    //add socket to list
    clients.push(socket);

    // when data is sent to the socket
    socket.on('data', function(data){
        //turn data into string
        let message:String = data.toString();
        //send to other sockets
        //broadcast(name, message);
    });

    socket.on('close', function(){
        // handle client disconnecting
    })


});

//when the server starts listening...
server.on('listening', function() {
    //output to the console the port number on which we are listening
    var addr:Address = server.address();
    console.log('server listening on port %d', addr.port);
});

//start the server
server.listen({
  host: ip.address(),
  port: 3000
});