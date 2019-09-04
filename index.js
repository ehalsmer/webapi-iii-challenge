// code away!
const server = require('./api/server');

const port = 8001
server.listen(port, () => console.log(`Server is listening on port ${port}`))