const { body } = require('express-validator');
exports.validation = [
 body('name').isLowercase(),
 body('value').isNumeric()
]
