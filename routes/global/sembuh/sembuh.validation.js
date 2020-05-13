const { body } = require('express-validator');
exports.validation = [
 body('value').isNumeric()
]
