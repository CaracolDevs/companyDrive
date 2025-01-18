const express = require('express')

const controller = require('../controllers/values')

const router = express.Router()

/**
 * Ruta: /user GET
 */
router.get(
    `/get`,
    controller.get
    
)

router.post(
    '/add',
    controller.add
)

router.get(
    '/delete/:id',
    controller.delete
)


module.exports = router