const express = require('express');

const server = express();
const usersRouter = require('./users/userRouter');
const postsRouter = require('./posts/postRouter');



//custom middleware

// logger should be applied to all requests
function logger(req, res, next) {
  console.log(req.method, req.originalUrl, new Date())
  next();
};

server.get('/', logger, (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

server.use('/users', logger, usersRouter)
server.use('/posts', logger, postsRouter)

module.exports = server;
