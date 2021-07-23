import { io } from "socket.io-client";

const socket = io('192.168.0.30:3000');

export default socket;