const express = require('express');

const router = express.Router()

router.use(express.json());
const usersDb = require('../../users/userDb')
// this router will handle requests that begin with /users/

router.get('/', (req, res) => {
    usersDb.get()
    .then((response) => {
        res.status(200).json(response)
    })
})

module.exports = router;