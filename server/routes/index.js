const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send({
    greeting: 'Hello React x Node',
    react: 'React!',
    node: 'Node',
    name: 'Kim!',
    role: 'JS lover',
    age: '25!',
  });
});

module.exports = router;