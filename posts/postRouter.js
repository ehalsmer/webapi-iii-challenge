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

function validatePost(req, res, next) {
    if (Object.keys(req.body).length == 0) {
      res.status(400).json({ message: "missing post data" });
    } else if (!req.body.text) {
      res.status(400).json({ message: "missing required text field" });
    } 
    next();
  }

router.get('/', (req, res) => {
    postDb.get()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(()=> {
        res.status(500).json({message: 'error getting posts'})
    })
});

router.get('/:id', validatePostId, (req, res) => {
    res.status(200).json(req.post);
});

router.delete('/:id', validatePostId, (req, res) => {
    const id = req.params.id
    postDb.remove(id)
    .then(response => {
        res.status(200).json(req.post)
    })
    .catch(error => {
        res.status(500).json({message: "error removing post"})
    })
});

router.put('/:id', validatePostId, validatePost, (req, res) => {
    const userId = req.params.id
    const updatedPost = {...req.post, ...req.body}
    postDb.update(userId, updatedPost)
    .then(response => {
        res.status(201).json(updatedPost);
    })
    .catch(error => res.status(500).json({ error: "error updating post" }))
});



module.exports = router;