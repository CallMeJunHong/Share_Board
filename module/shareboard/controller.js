import * as crypto from "node:crypto"; // Import crypto module for generating unique room IDs

import Board from "./schema.js"; // Import the Board model from schema.js

// Controller function to create a new room (request & response)
export const createRoom = async(req,res) => {


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

        return res.status(201).send('Room Created'); // Send the newly created board as a response
    } catch (err) {
        return res.status(500).send('Error creating room');
    }
    

};

// Controller function to get the list of all rooms
export const getRoomList = async (req,res) => {


    try {
        const rooms = await Board.find().lean().exec(); // Fetch all rooms from the database
        return res.status(200).send(rooms);

    } catch (err) {
        return res.status(500).send(err.message);
    }
};

// Controller function to get a specific room by its ID
export const getRoomById = async (req,res) => {

    try {
        const id = req.params.id; 
        const room = await Board.findById(id).lean().exec(); // Fetch the room by ID from the database

        if(!room){
            return res.status(404).send('Room not found');
        }
        return res.status(200).send(room);

    } catch (err) {
        return res.status(500).send(err.message);
    }
};