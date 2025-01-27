const path = require("path");
const express = require("express");
const config = require("./config");
const connectDB = require("./config/db");
const configureMiddleware = require("./middleware");
const configureRoutes = require("./routes");
const socketio = require("socket.io");
const gameSocket = require("./socket/index");

// Connect and get reference to mongodb instance
let db;

// Init express app
const app = express();

// Config Express-Middleware
configureMiddleware(app);

// Set-up Routes
configureRoutes(app);

// Start server and listen for connections
const server = app.listen(config.PORT, async () => {
  db = await connectDB();
  console.log(
    `Server is running in ${config.NODE_ENV} mode and is listening on port ${config.PORT}...`
  );
});

//  Handle real-time poker game logic with socket.io
const io = socketio(server);
console.log(`Connecting socket...`);
io.on("connect", (socket) => gameSocket.init(socket, io));
console.log(`Connect socket...`);
// Error handling - close server
process.on("unhandledRejection", (err) => {
  // db.disconnect();

  console.error(`Error: ${err.message}`);
  server.close(() => {});
});
