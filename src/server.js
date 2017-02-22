"use strict";
var net = require("net"); //import socket module
var ip = require("ip");
;
// create socket server
var server = net.createServer();
// let clientSockets:net.Socket[];
// when the server is connected
server.on('connection', function (socket) {
    // clientSockets.push(socket);
    // when data is sent to the socket
    socket.on('data', function (data) {
        //
    });
    socket.on('close', function () {
        // handle client disconnecting
    });
});
//when the server starts listening...
server.on('listening', function () {
    //output to the console the port number on which we are listening
    var addr = server.address();
    console.log('server listening on port %d', addr.port);
});
//start the server
server.listen({
    host: ip.address(),
    port: 3000
});
