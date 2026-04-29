import * as mongoose from "mongoose";

// Connect to MongoDB
export const connnectToDatabase = async () => {
    const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/share_board";

    try {
        await mongoose.connect(DB_URL, {
            dbName: "share_board",
            bufferCommands: true,
        });
    }catch(err){
        console.error("Error connecting to MongoDB:", err);
    }
};