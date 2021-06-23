const db = require('../database/models');
const { validationResult } = require('express-validator');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
// Maneja todos los métodos para PRODUCTO, que lo pasa como parámetro


let buyerController = {
//    home: (req, res) => {
//         res.render('index')
//     },
    showById: (req, res) => {
        // Le delego al modelo la responsabilidad
     // que la busque por ID del registro seleccionado 
     // es por ello que atrapo em parámetro id  
     const product = db.Product.findByPk(req.params.id);
     console.log(product)
     if (product) {
         res.render('productDetail', { product });
     } else {
         res.render('404');
     }
        
    },
}


module.exports = buyerController;