import { io } from 'socket.io-client';

const socket = io('http://localhost:4200', {
    autoConnect: false, 
    reconnectionDelayMax: 10000,
});

export default socket;