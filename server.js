const express = require("express");
const cors = require("cors");

const server = express();
// using path to point server to react app
const path = require("path");
const usersRouter = require("./users/userRouter");
const postsRouter = require("./posts/postRouter");

server.use(cors());

// static file declaration
server.use(express.static(path.join(__dirname, "client/build")));

//custom middleware

// logger should be applied to all requests
function logger(req, res, next) {
  console.log(req.method, req.originalUrl, new Date());
  next();
}

server.get("/", logger, (req, res) => {
  res.sendFile(path.join(__dirname + "/client/public/index.html"));
});

server.use("/users", logger, usersRouter);
server.use("/posts", logger, postsRouter);

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

module.exports = server;
