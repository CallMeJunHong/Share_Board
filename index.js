// Import necessary modules
import express from "express"; // Import Express for creating the API server
import cors from "cors"; // Import CORS middleware to handle cross-origin requests
import bodyParser from "body-parser"; // Import body-parser to parse incoming request bodies
import { createServer } from "http"; 

// Import the server from socket.js
import { initSocket } from "./lib/socket.js";
import { connectToDatabase } from "./lib/db.js";
import boardRoutes from "./module/shareboard/route.js"; // Import the shareboard router

// Define the port on which the server will listen
const PORT = process.env.PORT || 4200;
const SOCKET_PORT = process.env.SOCKET_PORT || 4300;

const app = express();
const server = createServer(app); // Create an HTTP server using the Express app

connectToDatabase();
initSocket(server);

// Use CORS middleware to allow cross-origin requests
app.use(cors());
app.use(bodyParser.json()); // Enable JSON body

// Define a simple route to check if the server is running
app.get('/', (req, res) => {
  return res.status(200).send({message: "Server is running!"});
});
app.use('/shareboard', boardRoutes); // Use the shareboard routes for any requests to /shareboard

// Start the server and listen on the defined port
server.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
});
