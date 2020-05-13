const { body } = require('express-validator');
exports.validation = [
 body('name').isUppercase()
]
