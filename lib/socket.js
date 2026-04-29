import { Server } from 'socket.io'; // Import the Server class from the socket.io module

export const initSocket = (server) => {

    const io = new Server(server, {
        cors: {
            origin: "*", // Accept all origins
            methods: ["GET", "POST"] // Allow GET and POST methods
        }
    });

    // TODO: Socket Functionality
    // Listen for new connections to the Socket.IO server
    io.on('connection', (socket) => { // Listen for new connections to the Socket.IO server
        console.log('A user connected:',socket.id); // Log when a user connects

        // Join to specific room
        socket.on('join-room', (roomId) => { // Listen for 'join-room' events from the client
            console.log(`User ${socket.id} joined room ${roomId}`); // Log when a user joins a room
            socket.join(roomId); // Join the specified room
        });

        // Code change event
        socket.on('code-change', ({roomId, content}) => { //receive 'code-change' events from the client with roomId and content
            socket.to(roomId).emit('update-code', content); // send 'update-code' event to ALL clients in the specified room except the sender with the updated content
            console.log(`Content Updated in ${roomId}`);
        });

        // Handle disconnection
        socket.on('disconnect', () => { // Listen for disconnection events
            console.log('A user disconnected:',socket.id); // Log when a user disconnects (For database operations)
        });
    });
}
