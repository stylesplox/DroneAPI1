const asyncHandler = require('express-async-handler')
const Drone = require('../models/droneModel')
const Med = require('../models/medicationModel')

//Registering a drone
const registerDrone = asyncHandler(async (req,res)=>{
    const {serialNumber, model, state} = req.body

    
    if(!serialNumber){
        res.status(400)
        throw new Error('Please add required fields')
    }
    switch(model){
        case 'Lightweight':
            limit = 100
            break;
        case 'Middleweight':
            limit = 200
            break;
        case 'Cruiserweight':
            limit = 350
            break;
        case 'Heavyweight':
            limit = 500
            break;
        default:
            limit = 100
    }

    const drone = await Drone.create({
        serialNumber,
        model,
        limit,
        state,
    })

    res.status(201).json({ drone })
})
//loading a drone
const loadingDrone = asyncHandler(async (req, res)=>{
    const {serialNumber,code} = req.body
    console.log(serialNumber)
    console.log(code)
    const drone = await Drone.findOne({ serialNumber: serialNumber})
    const medication = await Med.findOne({ code: code})
    drone.battery = drone.battery-20
    drone.state = 'LOADING'
    console.log(drone)
    if(drone.status!='IDLE'){
        throw new Error('Drone performing task. Not available')

    }
    if(drone.battery<25){
        res.status(400)
        throw new Error('Drone\'s battery too low for use, please recharge')
    }
    if (drone.limit < medication.weight)
    {
        res.status(400)
        throw new Error('Drone Limit exceeded')
    }

    console.log(drone)

    drone.limit = drone.limit - medication.weight
    console.log(drone._id)
    await medication.updateOne({carriedBy: drone._id}) 
    drone.itemsLoaded.push(medication._id)
    await drone.save()
    res.status(201).json(`drone ${drone.serialNumber} loaded'`)

})

const getDroneMedication = asyncHandler(async (req,res)=>{
    const {serialNumber} = req.params
    const drone = await Drone.findOne({ serialNumber: serialNumber})
    .populate("itemsLoaded")
    console.log(drone["itemsLoaded"])
    //const medArr = await Drone.where("itemsLoaded").
   // console.log(medArr)
    res.status(201).json(drone["itemsLoaded"])


})

const getDrones = asyncHandler(async (req,res)=>{
    const drones = await Drone.find({})
    res.status(201).json({ drones })
})

const availability = asyncHandler(async (req,res)=>{
    const drones = await Drone.where('state').equals('IDLE')
    console.log(drones)

    res.status(201).json({ drones })
})

const droneBatteryCheck = asyncHandler(async (req,res)=>{
    const {serialNumber} = req.params
    const drone = await Drone.findOne({ serialNumber: serialNumber})
    const battery = drone.battery

    res.status(201).json({battery})
})

const rechargeDrone = asyncHandler(async (req,res)=>{
    const {serialNumber} = req.body
        const drone = await Drone.findOne({ serialNumber: serialNumber})
        drone.battery = 100
        await drone.save()
    res.status(201).json(`battery of drone ${serialNumber} is charged to 100%`)
})



module.exports = {
    registerDrone,
    getDrones,
    loadingDrone,
    getDroneMedication,
    availability,
    droneBatteryCheck,
    rechargeDrone}