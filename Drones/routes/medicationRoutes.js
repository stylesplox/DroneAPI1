const express = require('express')
const router = express.Router()

const {createMedication,getMedications}= require('../controllers/medicationController')

router.post('/',createMedication)
router.get('/',getMedications)


module.exports = router