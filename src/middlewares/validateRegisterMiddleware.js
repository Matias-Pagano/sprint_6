const path = require('path');
const { body } = require('express-validator');

const validacionesRegistro = [
    body("firstName").notEmpty().withMessage('El nombre no puede estar en blanco').bail().isString().withMessage('Debes utilizar letras'),
    body("lastName").notEmpty().withMessage('El apellido no puede estar en blanco').bail().isString().withMessage('Debes utilizar letras'),
    body("email").notEmpty().withMessage('El email no puede estar en blanco').bail().isEmail().withMessage('Debe ser un email'),
    body("password").notEmpty().withMessage('Debes elegir una contraseña').bail().isLength({min:6 , max: 12}).withMessage('La contraseña debe tener entre 6 y 12 caracteres'),
    body("confirmPassword").notEmpty().withMessage('Debes elegir una contraseña').bail().isLength({min:6 , max: 12}).withMessage('La contraseña debe tener entre 6 y 12 caracteres'),

    body('avatar').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.gif', '.png'];
        if (!file) {
            throw new Error('Debes cargar una imagen válida')
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son  ${acceptedExtensions.join(', ')}`);

            }

        }
        return true;
    })

    ]

module.exports = validacionesRegistro;