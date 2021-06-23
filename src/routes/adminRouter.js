const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Middlewares
const upload = require('../middlewares/productMulterMiddleware');
// const validations = require('../../middlewares/validateEditMiddleware');
// const validaciones = require('../../middlewares/validateCreateProductMiddleware');

router.get('/', adminController.adminHome);

router.get('/stock', adminController.stock);

router.get('/create', adminController.create);
router.post('/create', upload.single('image'), adminController.add);

module.exports = router;