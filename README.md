# Share Board
Back End: https://share-board-backend.onrender.com/
Live Test: https://share-board-frontend0.onrender.com/

A real-time collaborative code sharing application that allows multiple users to create virtual boards and write code together in real-time.

![Share Board](https://img.shields.io/badge/Share-Board412-blue)
![Node.js](https://img.shields.io/badge/Node.js-20.x-green)
![React](https://img.shields.io/badge/React-19.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Latest-green)

## 🚀 Features

- **Real-time Code Collaboration**: Multiple users can edit code simultaneously in the same room
- **Virtual Boards**: Create and manage shared code boards with unique room IDs
- **Live Synchronization**: Changes are instantly broadcast to all users in the same room using Socket.IO
- **Monaco Editor**: Built on the same editor technology as VS Code for a premium coding experience
- **Persistent Storage**: All boards and code are saved to MongoDB for future access

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js (Handle Request)
- **Real-time**: Socket.IO (Live Updating)
- **Database**: MongoDB with Mongoose ODM
- **Middleware**:
  - cors (Cross-Origin Resource Sharing)
  - body-parser (Request parsing)

### Frontend
- **Framework**: React 19
- **Routing**: TanStack Router (Control redirecting paths) /board/...
- **HTTP Client**: Axios (Get data from API)
- **Editor**: Monaco Editor (Browser Code Editor)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui

### Deployment
- **Frontend**: Render Static Sites
- **Backend**: Render Web Services
- **Database**: MongoDB Atlas

## 📁 Project Structure

```
Share_Board412/
├── index.js                 # Main server entry point
├── package.json          # Root dependencies
├── lib/
│   ├── db.js            # MongoDB connection
│   └── socket.js        # Socket.IO configuration
├── module/
│   └── shareboard/
│       ├── controller.js # API controller functions
│       ├── route.js     # Express routes
│       └── schema.js   # Mongoose schema
└── client/              # Frontend application
    ├── src/
    │   ├── routes/     # TanStack Router routes
    │   ├── components/ # React components
    │   ├── lib/        # Utilities
    │   └── common/     # Services
    └── package.json
```

## ⚡ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Share_Board412
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

### Environment Variables

Create a `.env` file in the root directory:
```env
PORT=4200
DB_URL=mongodb://localhost:27017/share_board
```

Or use the default values (MongoDB runs on `localhost:27017`).

### Running the Application

1. **Start the backend server**
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:4200`

2. **Start the frontend client** (in a separate terminal)
   ```bash
   cd client
   npm run dev
   ```
   The client will run on `http://localhost:3000`

## 📖 How It Works

### Architecture

1. **Create a Room**: Users can create a new board/room with a custom name
2. **Join a Room**: Users receive a unique room ID and can share it with others
3. **Real-time Editing**: When a user edits code:
   - The client emits a `code-change` event with the room ID and code content
   - The server broadcasts the updated code to all other users in the same room via `update-code` event
4. **Code Display**: All users in the room see the same code in their Monaco Editor

### Key API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/shareboard` | Create a new room |
| GET | `/shareboard` | Get list of all rooms |
| GET | `/shareboard/:id` | Get room by ID |

### Socket Events

| Event | Direction | Description |
|-------|-----------|-------------|
| `join-room` | Client → Server | Join a specific room |
| `code-change` | Client → Server | Emit code changes |
| `update-code` | Server → Client | Broadcast code updates |

## 🎯 Usage

### Creating a Board

1. Click the **"Create Room"** button on the home page
2. Enter a name for your board
3. Click **"Create"** to create the room
4. Share the room ID with others to collaborate

### Joining a Board

1. Click on an existing board from the list
2. You will be redirected to the board's room
3. Start editing and see changes from others in real-time

## 🙏 Acknowledgments

This project was built following the tutorial from **Code With Ghazi** on YouTube. 
Check out their channel for more amazing tutorials: [Code With Ghazi](https://www.youtube.com/@codewithghazi)

## 📝 License

ISC License - Copyright (c) 2024 CallMeJunHong

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues](../../issues) page.


<p align="center">Made with ❤️ by CallMeJunHong</p>
