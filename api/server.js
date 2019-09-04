const express = require('express');

const server = express();
const usersRouter = require('./users/users-router');

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

server.use('/users', usersRouter)

//custom middleware

function logger(req, res, next) {

};

module.exports = server;
