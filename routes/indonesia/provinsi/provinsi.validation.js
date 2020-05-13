const { body,param } = require('express-validator');
exports.validation = [
 body('Provinsi').isString(),
]
exports.paramValidation = [
    param('id').isMongoId().withMessage('Invalid ID')
]
   
