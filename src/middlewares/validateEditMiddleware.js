const { body } = require('express-validator');

const editValidations = [
    body('name').notEmpty().withMessage('Debes completar con un nombre válido'),
    body('description').notEmpty().withMessage('Debes completar con una descripción válida del producto'),
    body('price').notEmpty().withMessage('Debes completar con un precio válido').bail()
        .isNumeric().withMessage('Debes completar con un número'),
    body('categorie').notEmpty().withMessage('Debes completar con una categoria válida'),
    body('stock').notEmpty().withMessage('Debes completar el stock').bail()
        .isNumeric().withMessage('Debes completar con un número')
];

module.exports = editValidations;