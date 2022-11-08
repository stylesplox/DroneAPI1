const asyncHandler = require('express-async-handler')

const registerDrone = asyncHandler(async (req,res)=>{
    res.status(201).json('registered succesfully')
})


module.exports = {registerDrone}