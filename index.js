require('dotenv').config()
const server = require('./server');
const defaults = require('./config/default');


// const port = defaults.port
server.listen(defaults.port, () => console.log(`Server is listening on port ${defaults.port}`))