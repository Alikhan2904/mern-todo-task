const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');
users.use(cors());

// sets JWT secret
process.env.SECRET_KEY = 'abc.123';

// logic for registration
users.post('/register', (req, res) => {
  const today = new Date();
  // creates the user object using request body and date
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today,
  };

  // checks if any user exists with that email
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      // if there is no existing user with that email then create jwt and hash password 
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          User.create(userData)
            .then((user) => {
              res.json({ status: user.email + ' Registered!' });
            })
            .catch((err) => {
              res.send('error: ' + err);
            });
        });
      } else {
        // if there is an existing user with that email then give error of user already exists
        res.json({ error: 'User already exists' });
      }
    })
    .catch((err) => {
      res.send('error: ' + err);
    });
});

// logic for login
users.post('/login', (req, res) => {
  // checks if the email exists in database
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (user) {
        // compares both passwords (user provided and the one in database) 
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // Passwords match
          const payload = {
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
          };
          // creates jwt token and set expiration time
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440,
          });
          res.send(token);
        } else {
          // Passwords don't match
          res.json({ error: 'Incorrect Password' });
        }
      } else {
        // User does not exist
        res.json({ error: 'User does not exist' });
      }
    })
    .catch((err) => {
      res.send('error: ' + err);
    });
});

// logic for user profile
users.get('/profile', (req, res) => {
  var decoded = jwt.verify(
    req.headers['authorization'],
    process.env.SECRET_KEY
  );

  // finds the user by _id which we got from jwt payload
  User.findOne({
    _id: decoded._id,
  })
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.send('User does not exist');
      }
    })
    .catch((err) => {
      res.send('error: ' + err);
    });
});

module.exports = users;
