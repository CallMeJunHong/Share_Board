// Import necessary modules
import cors from "cors";
import express from "express";

// Import the server from socket.js
import server from "./socket.js";

// Define the port on which the server will listen
const PORT = process.env.PORT || 4200
const SOCKET_PORT = process.env.SOCKET_PORT || 4300
const app = express();

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// Define a simple route to check if the server is running
app.get('/', (req, res) => {
  return res.status(200).send({message: "Server is running!"});
});

app.listen(PORT, () => {
  console.log(`API Server is running on port ${PORT}`);
});

// Start the server and listen on the defined port
server.listen(SOCKET_PORT, () => {
  console.log(`Socket Server is running on port ${SOCKET_PORT}`);
});