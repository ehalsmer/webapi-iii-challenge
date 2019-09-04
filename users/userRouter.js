const express = require('express');

const router = express.Router();
router.use(express.json());

const userDb = require('./userDb')

//custom middleware

function validateUserId(req, res, next) {
    let id = req.params.id
    // console.log(id)
    if(id){
        userDb.getById(id)
        .then((response) => {
            if(response){
                req.user = response;
                next()
            } else {res.status(400).json({message: "invalid user id"})}
            // console.log(req.user)
        })
        .catch((error) => {
            res.status(500).json({error: "error looking up that id"})
        })
    } else {res.status(400).json({message: "provide a user id"})}
};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};


// Endpoints on /users/

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {
    userDb.get()
    .then((response) => {
        res.status(200).json(response)
    })
});

router.get('/:id', validateUserId, (req, res) => {
    // console.log(req.user)
    res.status(200).json(req.user)
});

router.get('/:id/posts', validateUserId, (req, res) => {
    userDb.getUserPosts(req.params.id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json({error: `error getting posts for ${req.params.id}`})
    })
});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});



module.exports = router;
