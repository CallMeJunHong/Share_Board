import { io } from 'socket.io-client';

const backendUrl = import.meta.env.VITE_API_BASE || 'http://localhost:4200'; // Use environment variable for backend URL or fallback to localhost
const socket = io(backendUrl, {
    autoConnect: false, 
    reconnectionDelayMax: 10000,
});

export default socket;