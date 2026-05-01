# Share_Board412

Socket.io
mongoose

Backend (Node.js): Express server with Socket.IO for real-time code synchronization
Database: MongoDB with Mongoose
Frontend (React): Uses TanStack Router and Monaco Editor for code editing

1. Users create/join boards via roomId
2. When a user edits code, it emits code-change event with roomId and content
3. Server broadcasts to all other users in the room via update-code event
4. Monaco Editor displays the code