const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send({ greeting: 'Hello React x Node' });
});

module.exports = router;