import { Lobby, LobbyPlayer } from './lobby';

import { createServer } from "http";
import { Server, Socket } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "http://192.168.0.30:8000",
        methods: ["GET", "POST"]
    }
});

const theLobby = new Lobby();

io.on("connection", (socket: Socket) => {
    console.log('Connected');
    console.log(socket.id);

    const playerInstance = new LobbyPlayer(socket.id);

    theLobby.addPlayer(playerInstance);

    io.emit('GET_PLAYERS_LIST', { playersList: theLobby.getPlayersListToArray() });

    socket.on('TEST_ACTION', () => {
        console.log('Action received');
        socket.emit('TEST_ACTION_SUCCESS', 'fakeData');
    });

    socket.on('CHANGE_NICKNAME', (data) => {
        playerInstance.setNickname(data);
        io.emit('GET_PLAYERS_LIST', { playersList: theLobby.getPlayersListToArray() });
    });

    socket.on('disconnect', () => {
        theLobby.removePlayer(socket.id);
        io.emit('GET_PLAYERS_LIST', { playersList: theLobby.getPlayersListToArray() });
    });
});

httpServer.listen(3000);
console.log('Server listening...');
