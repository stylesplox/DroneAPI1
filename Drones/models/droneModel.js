const mongoose = require('mongoose')

const droneSchema = mongoose.Schema(
  {
    serialNumber: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      enum: ['Lightweight', 'Middleweight', 'Cruiserweight', 'Heavyweight'],
      default: 'Lightweight',
      required: true,
    },
    limit: {
      type: Number,
      required: true,
      max: 500,
  },
  battery: {
    type: Number,
    default: 100,
    required: true,
  },
  state: {
    type: String,
    enum: ['IDLE', 'LOADING', 'LOADED', 'DELIVERING', 'DELIVERED', 'RETURNING'],
    default: 'IDLE',
},
itemsLoaded: {
  type: [mongoose.Schema.Types.ObjectId],
  ref: 'Meds'
  
},
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('Drone', droneSchema)