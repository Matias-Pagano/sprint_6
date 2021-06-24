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

// router.get('/stock/edit/:id', adminController.edit);
// router.put('/stock/update/:id', adminController.update);

//Para estas rutas vamos a hacer lo siguiente: la ruta pasará a ser /stock/delete/:id
// vamos a crear una mini vista, en donde cuando apretemos el botón de eliminar producto, te pregunte si querés eliminarlo.
// router.get('/stock/:id', adminController.delete);  //rutas de antes
// router.delete('/stock/:id', adminController.destroy)

router.get('/stock/delete/:id', adminController.delete); 
router.post('/stock/delete/:id', adminController.destroy); 




module.exports = router;