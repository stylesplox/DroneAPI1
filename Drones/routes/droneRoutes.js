const express = require('express')
const router = express.Router()

const {
    registerDrone,
    getDrones,
    loadingDrone,
    getDroneMedication,
    availability,
    droneBatteryCheck,
    rechargeDrone}= require('../controllers/droneController')


router.post('/',registerDrone)
router.get('/',getDrones)
router.post('/load',loadingDrone)
router.post('/recharge',rechargeDrone)
router.get('/:serialNumber/meds',getDroneMedication)
router.get('/availableDrones',availability)
router.get('/droneBattery/:serialNumber',droneBatteryCheck)

module.exports = router