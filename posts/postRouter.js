const express = require('express');

const router = express.Router();
router.use(express.json());

const userDb = require("../users/userDb");
const postDb = require("./postDb");

// custom middleware

function validatePostId(req, res, next) {
    let id = req.params.id;
    if(id){
        postDb.getById(id)
        .then(response => {
            if(response){
                req.post = response
                next();
            } else { res.status(400).json({message: 'invalid post id'})}
        })
        .catch(error => {
            res.status(500).json({error: `error looking up post with id ${id}`})
        })
    } else { res.status(400).json({message: 'provide a post id'})}
};

router.get('/', (req, res) => {
    postDb.get()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(()=> {
        res.status(500).json({message: 'error getting posts'})
    })
});

router.get('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});



module.exports = router;