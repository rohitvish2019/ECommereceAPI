/* Constant variables */

const express = require('express');
const router = express.Router();
const productsController = require('../../controllers/v1/productsController');

/* Setting up all routes to controllers path */

router.get('/', productsController.getProducts);
router.post('/create', productsController.createNew);
router.delete('/delete/:id', productsController.deleteOne);
router.post('/:id/updateQuantity', productsController.updateQuantity);

/* exporting router */

module.exports = router;