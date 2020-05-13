const express = require('express');
const router = express.Router();
const { validation } = require('./provinsi.validation')
const c = require('./provinsi.controller')

router.get('/', c.findAll)
router.get('/:id', c.findById)
router.post('/', validation, c.insert)
router.put('/:id', validation, c.updateById)
router.delete('/:id', c.removeById)
router.delete('/', c.remove)

module.exports = router;
