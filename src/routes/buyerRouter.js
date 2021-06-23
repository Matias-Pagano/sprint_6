const express = require('express');
const router = express.Router();
const buyerController = require('../controllers/buyerController');


// router.get('/', buyerController.home);
router.get('/productDetail/:id', buyerController.showById);

//el usuario ve el detalle y decide comprar: la ruta va del detalle al carrito de compras
router.get('/productDetail/:id/productCart'); //añadir controlador y método correspondiente: se renderiza la vista de carrito

//el usuario de carrito va a realizar la compra
router.get('/productDetail/:id/productCart/billing'); //se renderiza la vista de billing




module.exports = router


