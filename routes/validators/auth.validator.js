const { body, check, query, param } = require('express-validator');

const tryLoginValidation = () =>
{
    console.log("ASDASDASDASdas");
    return [
        body('usuario').exists().withMessage("El nombre de usuario es requerido.").bail()
        .notEmpty().withMessage("El usuario no puede ser un campo vacío.").bail()
        .trim().isLength({min: 4}).withMessage('El largo mínimo del usuario es 4 caracteres')
        .trim().isLength({max: 64}).withMessage('El largo máximo del usuario es 64 caracteres'),

        body('clave').exists().withMessage("La contraseña es requerida.").bail()
        .notEmpty().withMessage("La contraseña no puede ser un campo vacío.").bail()
        .trim().isLength({min: 8}).withMessage('El largo mínimo de la contraseña es 8 caracteres')
        .trim().isLength({max: 64}).withMessage('El largo máximo de la contraseña es 64 caracteres')
    ];

}

module.exports = 
{
    tryLoginValidation
}