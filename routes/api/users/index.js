const express = require('express');
const router = express.Router();
const { validation, paramValidation } = require('./users.validation')

const c = require('./users.controller')

router.get('/', c.findAll)
router.get('/:id', paramValidation, c.findById)
router.post('/', validation, c.insert)
router.put('/:id', paramValidation, c.updateById)
router.delete('/', c.remove)
router.delete('/:id', paramValidation, c.removeById)

module.exports = router;