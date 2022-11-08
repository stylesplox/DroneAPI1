
const express = require('express')
const PORT =process.env.PORT || 8000
const app = express()

app.use('/api/drone', require('./routes/droneRoutes'))

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))


