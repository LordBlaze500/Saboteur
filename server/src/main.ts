import { Lobby, LobbyPlayer } from './lobby';

/* 
    if (!theLobby.isPlayerInTheLobby(req.ip)) {
        theLobby.addPlayer(new LobbyPlayer(req.ip));
    }
    res.send(JSON.stringify(theLobby.getPlayersList()));
*/

import { createServer } from "http";
import { Server, Socket } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
      origin: "http://192.168.0.17:8000",
      methods: ["GET", "POST"]
    }
});

const theLobby = new Lobby();

io.on("connection", (socket: Socket) => {
    socket.send('Hi');
    console.log('Connected');
    console.log(socket);

    socket.on('TEST_ACTION', () => {
        console.log('Action received');
        socket.emit('TEST_ACTION_SUCCESS', 'fakeData');
    });
});

httpServer.listen(3000);
console.log('Server listening...');
