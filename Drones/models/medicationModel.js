const mongoose = require('mongoose')

const medicationModel = mongoose.Schema(
  {
    
    name: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    carriedBy: {
        type: mongoose.Schema.Types.ObjectId,
        default: null,

    },
    image:{
        type: String,
    }
    },
    {
    timestamps: true,
    },
)

module.exports = mongoose.model('Meds', medicationModel)