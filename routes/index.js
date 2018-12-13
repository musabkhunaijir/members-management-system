const express = require('express');
const router = express.Router();

router.get('/', (req, response) => {
  response.redirect('/users/login');
});

module.exports = router;