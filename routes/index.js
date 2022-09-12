const express = require('express');
const router = express.Router();

/*Path selection */
router.use('/v1', require('./v1/index'));

module.exports = router;