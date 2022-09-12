const express = require('express');
const router = express.Router();

/*Path selection */ 
router.use('/products', require('./products'));

module.exports = router;