const db = require('../database/models');
const { validationResult } = require('express-validator');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const Color = require('../database/models/color');

// console.log("llegamos");

let adminController = {
    adminHome: (req, res) => {
        res.render('admin')
    },

    stock: async (req, res) => {
        try{
            let products = await db.Product.findAll({
                include: [
                    "color", "gender", "images", "type"
                ]
            });
            products = JSON.parse(JSON.stringify(products));
            // console.log(products);
            return res.render('stock', {products:products});
        }
        catch(error){
            console.log(error);
        }
    },

    create: async function (req,res) {
       let productTypes = await db.Type.findAll();
       let productColors = await db.Color.findAll();
       let productGenders = await db.Gender.findAll();        
        return res.render('create', {productTypes, productColors, productGenders})
    },

    add: async function (req, res) {
        // console.log(req.body);
        //primero crear el producto 
        let productCreated = await db.Product.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            colors_id: req.body.color,
            types_id: req.body.type,
            genders_id: req.body.categorie,
            stock: req.body.stock
        }).catch(error => {
            console.log(error);
        });
    //     let imagesCreated = await db.Image.bulkCreate([
    //         {
    //         file: req.body.image,
    //         product_id: productCreated.id
    //     }
    // ]);
        let imagesCreated = await db.Image.create({
            file: req.body.image,
            product_id: productCreated.id
        }).catch(error => {
            // console.log(productCreated);
            console.log(`Esto corresponde al ERROR N° 2: ${error}`);
        });
        console.log(imagesCreated);
        res.redirect('/admin/stock')
    }, 
}

module.exports = adminController;