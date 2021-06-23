const { Op } = require("sequelize");
const db = require('../database/models');
const sequelize = db.sequelize;

let homeController = {

    index: async (req, res) =>{
        try{ 
            let products = await db.Product.findAll();
            
            console.log(products);
            return res.render('index', {products});
        }
        catch(error){
            console.log(error);
        }
    },
    faq:(req, res) => {
        res.render('FAQ')
    }
}
module.exports = homeController