import * as crypto from "node:crypto"; // Import the crypto module for generating unique room IDs

import Board from "./schema.js"; // Import the Board model from the schema file

export const createRoom = async(req,res) => { // Controller function to create a new room (request & response)

    try {
        const roomName = req.body.name; // Extract the room name from the request body
        const length = 6;
        const roomId = crypto
        .randomBytes(Math.ceil(length /2)) 
        .toString("hex") // Generate a random hexadecimal string for the room ID
        .slice(0, length); // Slice the string to the desired length

        const board = new Board({
            roomName,
            roomId,
        });

        const newBoard = await board.save(); // Save the new board to the database

        return res.status(200).send('Room Created'); // Send the newly created board as a response
    } catch (err) {
        return res.status(500).send('Error creating room');
    }
    

};