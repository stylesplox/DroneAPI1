const express = require('express')
const router = express.Router()

const {registerDrone}= require('../controllers/droneController')

router.get('/',registerDrone)

module.exports = router