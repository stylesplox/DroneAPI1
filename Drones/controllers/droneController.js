const asyncHandler = require('express-async-handler')

const registerDrone = asyncHandler(async (req,res)=>{
    res.status(201).json('Drone registered succesfully')
})

const getDrones = asyncHandler(async (req,res)=>{
    res.status(201).json('get all drones')
})


module.exports = {registerDrone,getDrones}