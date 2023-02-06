
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()

const connectDB = require('./config/db')
const PORT = process.env.PORT || 8000

// Connect to database
connectDB()
const app = express()

const fileUpload =  require('express-fileupload')

app.use(express.json())
app.use(fileUpload())
app.use(express.urlencoded({extended: false}))


app.use('/api/drone', require('./routes/droneRoutes'))
app.use('/api/med', require('./routes/medicationRoutes'))

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))


