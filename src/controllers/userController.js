const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const User = require('../database/models');

let userController = {
    billing: (req, res) => {
        res.render('billing')
    },
    login: (req, res) => {
        res.render('login')
    },
    loginProcess: (req, res) => {
        let userToLogin = User.User.findByField('email', req.body.email);

        if (userToLogin) {
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (isOkThePassword) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if (req.body.remember_user) {
                    res.cookie('email', req.body.email, { maxAge: (1000 * 60) * 60 })
                }

                return res.redirect('/user/profile');
            }
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'Las credenciales son inválidas'
                    }
                }
            });
        }

        return res.render('login', {
            errors: {
                email: {
                    msg: 'No se encuentra este email en nuestra base de datos'
                }
            }
        });
    },
    register: (req, res) => {
        res.render('register')
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        console.log(req.body.email);
        let userInDB = User.User.findByField('email', req.body.email);

        if (userInDB) {
            return res.render('register', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body
            });
        }

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename
        }

        let userCreated = User.create(userToCreate);

        return res.redirect('/user/login');
    },
    cart: (req, res) => {
        res.render('productCart')
    },
    detail: (req, res) => {
        res.render('productDetail')
    },
    profile: (req, res) => {
        res.render('profile', {
            user: req.session.userLogged
        });

    },

    logout: (req, res) => {
        res.clearCookie('usuario');
        req.session.destroy();
        return res.redirect('/');
    }
}


//     ValidacionRegister: (req, res) =>{

//         const resultValidation = validationResult(req);
//         let newProductValues = req.body;
//         newProductValues.id = req.params.id;
//         if (resultValidation.errors.length > 0) {
//         return res.render('register', {
//             errors: resultValidation.mapped(),
//             oldData: newProductValues, product: newProductValues
//         });
//     }
//     let product = req.body

    
//     product.image = req.file ? req.file.filename : req.body.oldImagen;
            
//     if (req.body.image===undefined) {
//       product.image = product.oldImage
//   }
//   delete product.oldImage;

//   productModel.update(product);

// res.redirect("index")

//     }
// }

module.exports = userController;
