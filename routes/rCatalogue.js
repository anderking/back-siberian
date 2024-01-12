var express = require('express')
var cCategory = require('../controllers/cCategory')
var cSubcategory = require('../controllers/cSubcategory')
var cEquipinfras = require('../controllers/cEquipinfras')
var router = express.Router()

router.get('/', cCategory.getCategoriesCatalogue)
router.get('/subcategory/:id', cSubcategory.getSubcategoryCatalogue)
router.get('/equipinfras/:id', cEquipinfras.getEquipinfrasCatalogue)
router.get('/:n', cEquipinfras.getEquipinfrasByName)
module.exports = router
