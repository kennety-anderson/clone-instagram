const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.Server(app);
const io = socketIo(server);

mongoose.connect(
  "mongodb://localhost:27017/instagram",
  {
    useNewUrlParser: true,
    useCreateIndex: true
  },
  err => (err ? console.log(err) : console.log("db is runing"))
);

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(cors());
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);
app.use(require("./routes"));

server.listen(3333);
