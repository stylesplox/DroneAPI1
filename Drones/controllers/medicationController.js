const asyncHandler = require('express-async-handler')

const createMedication = asyncHandler(async (req,res)=>{
    res.status(201).json('Medication registered succesfully')
})

const getMedications = asyncHandler(async (req,res)=>{
    res.status(201).json('get all medications')
})


module.exports = {createMedication,getMedications}