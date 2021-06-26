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
        try {
            let products = await db.Product.findAll({
                include: [
                    "color", "gender", "images", "type"
                ]
            });
            products = JSON.parse(JSON.stringify(products));
            // console.log(products);
            return res.render('stock', { products: products });
        }
        catch (error) {
            console.log(error);
        }
    },

    create: async function (req, res) {
        let productTypes = await db.Type.findAll();
        let productColors = await db.Color.findAll();
        let productGenders = await db.Gender.findAll();
        return res.render('create', { productTypes, productColors, productGenders })
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
            file: req.file.filename,
            product_id: productCreated.id
        }).catch(error => {
            // console.log(productCreated);
            console.log(error);
        });
        // console.log(req.file);
        res.redirect('/admin/stock')
    },

    //EDITÉ AMBOS MÉTODOS. EL CÓDIGO COMENTADO ES EL CÓDIGO ANTERIOR.
    delete: (req, res) => {
        // let products = db.Product.findByPk(req.params.id);
        // res.render('edit', { products: products })
        let productId = req.params.id;
        db.Product.findByPk(productId)
            .then(products => {
                return res.render('delete', { products })
                    .catch(error => res.send(error))
            })

    },

    destroy: function (req, res) { //le saqué el async
        let productId = req.params.id;
        db.Product.destroy({ where: { id: productId }, force: true })
            .then(() => {
                return res.redirect('/admin/stock') //chequear si esta redirect va bien
                    .catch(error => res.send(error))
            })

        // try {
        //     let productDestroyed = await db.Product.destroy({
        //         where: {
        //             id: req.params.id
        //         }
        //     }
        //     );
        //     console.log('Eliminé el producto')
        //     res.redirect('/admin/stock')

        // }
        // catch (error) {
        //     console.log(error);
        // }

    },
    edit: async function (req, res) {
        let products = await db.Product.findByPk(req.params.id);
        let productTypes = await db.Type.findAll();
        let productColors = await db.Color.findAll();
        let productGenders = await db.Gender.findAll();
        return res.render('edit', { products, productTypes, productColors, productGenders })
    },
    update: (req, res) => {
        db.Product.update({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                colors_id: req.body.colors_id,
                types_id: req.body.types_id,
                genders_id: req.body.genders_id,
                stock: req.body.stock
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(product => {
                return res.status(200).json({
                    data: product,
                    status: 200,
                    updated: 'Ok'
                })
            })
            .catch(error => res.send(error))
    },

}

module.exports = adminController;