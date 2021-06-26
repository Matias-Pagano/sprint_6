const path = require('path');
const { body } = require('express-validator');

const validaciones = [
    body('name').notEmpty().withMessage('Debes completar con un nombre válido'),
    body('description').notEmpty().withMessage('Debes completar con una descripción válida del producto'),
    body('price').notEmpty().withMessage('Debes completar con un precio válido').bail()
        .isNumeric().withMessage('Debes completar con un número'),
    body('categorie').notEmpty().withMessage('Debes completar con una categoria válida'),
    body('stock').notEmpty().withMessage('Debes completar el stock').bail()
        .isNumeric().withMessage('Debes completar con un número'),
    body('image').custom((value, { req }) => {
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

module.exports = validaciones;