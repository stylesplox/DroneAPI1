const express = require('express')
const router = express.Router()

const {registerDrone,getDrones}= require('../controllers/droneController')


router.post('/',registerDrone)
router.get('/',getDrones)

module.exports = router