var express = require('express')
var cEquipinfras = require('../controllers/cEquipinfras')
const upload = require('../middlewares/upload')
const verifyToken = require('../middlewares/verifyToken')
const uploadToCloud = require('../middlewares/uploadToCloud')
var router = express.Router()

router.get('/', verifyToken, cEquipinfras.getAllEquipinfras)
router.get('/:id', verifyToken, cEquipinfras.getEquipinfras)
router.get('/:n/:s', verifyToken, cEquipinfras.getEquipinfrasByNameAndStatus)
router.post('/', [verifyToken, upload.single('imageUrl')], uploadToCloud, cEquipinfras.addEquipinfras)
router.put('/:id', [verifyToken, upload.single('imageUrl')], uploadToCloud, cEquipinfras.updateEquipinfras)
router.delete('/:id', verifyToken, cEquipinfras.deleteEquipinfras)

router.post('/variety', verifyToken, cEquipinfras.addVarietyEquipinfras)
router.delete('/:eid/variety/:vid', verifyToken, cEquipinfras.deleteVarietyEquipinfras)

module.exports = router
