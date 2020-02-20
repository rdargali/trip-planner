const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
//bcrypt
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

// router.use(express.urlencoded());

router.get("/", (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({
    username: username
  }).then(user => {
    bcrypt.compare(password, user.password).then(result => {
      if (result) {
        console.log(result);
      }
    });
  });

  // validate log in credentials
});

router.post("/add", (req, res) => {
  const username = req.body.registerUserName;
  const tohash = req.body.registerPassword;

  bcrypt.hash(tohash, SALT_ROUNDS).then(password => {
    const newUser = new User({
      username,
      password
    });

    newUser
      .save()
      .then(() => {
        res.json("user added");
      })
      .catch(err => res.status(400).json("Error: " + err));
  });
});

module.exports = router;
