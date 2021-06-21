const db = require('../database/models');
const { validationResult } = require('express-validator');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const Color = require('../database/models/color');

let adminController = {
    adminHome: (req, res) => {
        res.render('admin')
    },

    stock: async (req, res) => {
        try{
            let products = await db.Product.findAll({
                include: [
                    "colors", "genders", "images", "types"
                ]
            });
            products = JSON.parse(JSON.stringify(products));
            console.log(products);
            return res.render('stock');
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
        console.log(req.body);
        //primero crear el producto 
        let productCreated = await db.Product.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            color_id: req.body.color,
            type_id: req.body.gender
        });
    //     let imagesCreated = await db.image.bulkInsert([
    //         {
    //         file: "product.jpg",
    //         product_id: productCreated.id
    //     }
    // ])
        let imagesCreated = await db.Image.create({
            file: "product.jpg",
            product_id: productCreated.id
        })
        // console.log(productCreated);
        res.redirect('/admin/stock')
    }, 
}

module.exports = adminController;