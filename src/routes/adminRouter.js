const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.adminHome);

router.get('/stock', adminController.stock);

router.get('/create', adminController.create);
router.post('/create', adminController.add);

module.exports = router;