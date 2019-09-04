const express = require("express");

const router = express.Router();
router.use(express.json());

const userDb = require("./userDb");
const postDb = require("../posts/postDb");


////// custom middleware

function validateUserId(req, res, next) {
  let id = req.params.id;
  // console.log(id)
  if (id) {
    userDb
      .getById(id)
      .then(response => {
        if (response) {
          req.user = response;
          next();
        } else {
          res.status(400).json({ message: "invalid user id" });
        }
        // console.log(req.user)
      })
      .catch(error => {
        res.status(500).json({ error: "error looking up that id" });
      });
  } else {
    res.status(400).json({ message: "provide a user id" });
  }
}

// validates body on request to create a new user
function validateUser(req, res, next) {
  if (Object.keys(req.body).length == 0) {
    res.status(400).json({ message: "missing required user data" });
  } else if (!req.body.name) {
    res.status(400).json({ message: "missing required name field" });
  }
  next();
}

// validates body on request to create a new post
function validatePost(req, res, next) {
  if (Object.keys(req.body).length == 0) {
    res.status(400).json({ message: "missing post data" });
  } else if (!req.body.text) {
    res.status(400).json({ message: "missing required text field" });
  } 
  next();
}

////// Endpoints on /users/

// creates a new user
router.post("/", validateUser, (req, res) => {
  console.log("done");
  userDb
    .insert(req.body)
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => res.status(500).json({ error: "error adding user" }));
});

// creates a new post
router.post("/:id/posts", validateUserId, validatePost, (req, res) => {
    const userId = req.params.id
    const newPost = {...req.body, user_id: userId}
    postDb.insert(newPost)
    .then(response => {
        res.status(201).json(response);
    })
    .catch(error => res.status(500).json({ error: "error adding post" }))
});

// returns an array of all users
router.get("/", (req, res) => {
  userDb.get().then(response => {
    res.status(200).json(response);
  });
});

// gets a single user by id. returns an object with id and name
router.get("/:id", validateUserId, (req, res) => {
  res.status(200).json(req.user);
});

// gets a user's posts, by user id. returns an array of objects, each with id, text, postedBy
router.get("/:id/posts", validateUserId, (req, res) => {
  userDb
    .getUserPosts(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: `error getting posts for ${req.params.id}` });
    });
});

// remove a user
router.delete("/:id", validateUserId, (req, res) => {
    const id = req.params.id
    userDb
      .remove(id)
      .then((response) => {
          res.status(200).json(req.user);
      })
      .catch(error => {
          res.status(500).json({error: `error removing user with id ${id}`})
      })
});

// edit a user
router.put("/:id", (req, res) => {});

module.exports = router;
