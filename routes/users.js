const express = require('express');
const router = express.Router();

const moment = require('moment');
const usersController = require('../controller/users');
// const authController = require('../controller/auth');

router.route('/')
  .get((req, response) => {
    response.status(200).send('from get');
  })
  .post(usersController.login,
    (req, response) => {
      response.status(200).send('from post');
    })

module.exports = router;