import { Schema, model } from "mongoose";

const BoardSchema = new Schema(
    {
        roomId:{ type: String, required: true }, // Unique identifier for the board
        roomName: { type: String},
        code: { type: String, required: false }, // Code content for the board
    },
    {
        timestamps: true,
    },
);

export default model("Board", BoardSchema);