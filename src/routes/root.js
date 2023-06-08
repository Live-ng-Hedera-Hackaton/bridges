const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('This is the LoanLink Bridge API');
});


module.exports = router;
