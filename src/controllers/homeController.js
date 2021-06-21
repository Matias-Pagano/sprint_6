
// const db = require('../database/models/product');

// const productModel = db('products');

let homeController = {

    index: (req, res) =>{

        // const products = productModel.all();
        
        res.render('index');
    },
    faq:(req, res) => {
        res.render('FAQ')
    }
}
module.exports = homeController