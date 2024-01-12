var express = require('express')
var cCategory = require('../controllers/cCategory')
const upload = require('../middlewares/upload')
const verifyToken = require('../middlewares/verifyToken')
const uploadToCloud = require('../middlewares/uploadToCloud')

var router = express.Router()

router.get('/', verifyToken, cCategory.getCategories)
router.get('/:id', verifyToken, cCategory.getCategory)
router.post('/', [verifyToken, upload.single('imageUrl')], uploadToCloud, cCategory.addCategory)
router.put('/:id', [verifyToken, upload.single('imageUrl')], uploadToCloud, cCategory.updateCategory)
router.delete('/:id', verifyToken, cCategory.deleteCategory)

module.exports = router
