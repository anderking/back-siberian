var express = require('express')
var cSubcategory = require('../controllers/cSubcategory')
const verifyToken = require('../middlewares/verifyToken')
var router = express.Router()

router.get('/', verifyToken, cSubcategory.getSubcategories)
router.get('/:id', verifyToken, cSubcategory.getSubcategory)
router.post('/', verifyToken, cSubcategory.addSubcategory)
router.put('/:id', verifyToken, cSubcategory.updateSubcategory)
router.delete('/:id', verifyToken, cSubcategory.deleteSubcategory)

module.exports = router
