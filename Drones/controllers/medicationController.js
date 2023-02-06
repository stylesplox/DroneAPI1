const Med = require('../models/medicationModel')
const asyncHandler = require('express-async-handler')
const path = require('path')

const createMedication = asyncHandler(async (req,res)=>{
    const {name, weight, code} = req.body

   const droneImage = req.files.image

   droneImage.name = new Date().getTime()+'_'+droneImage.name
   console.log(droneImage.name)
   const imagePath = path.join(__dirname,'../uploads/'+`${droneImage.name}`)
   await droneImage.mv(imagePath)


    if(!name || !weight || !code){
        res.status(400)
        throw new Error('Please add required fields')
    }

    const medication = await Med.create({
        name,
        weight,
        code,
        image: droneImage.name,
    })

    res.status(201).json({ medication })
})

const getMedications = asyncHandler(async (req,res)=>{
    const medications = await Med.find({})
    res.status(201).json({ medications })
})


module.exports = {createMedication,getMedications}