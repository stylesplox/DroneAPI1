const mongoose = require('mongoose')

// const connectDB = async () => {
//     try{
//         const conn = await mongoose.connect("mongodb://admin:password@mongodb:27017", {dbName: 'drobedb'})
//         console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)

//     }catch (error){
//        console.log(`Error: ${error.message}`.red.underline.bold)
//        process.exit(1)
//     }
// }

// module.exports = connectDB

const connectDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb://admin:password@localhost:27017", {dbName: 'drobedb'})
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)

    }catch (error){
       console.log(`Error: ${error.message}`.red.underline.bold)
       process.exit(1)
    }
}

module.exports = connectDB