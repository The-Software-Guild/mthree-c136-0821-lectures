const express = require('express')
const app = express()
const morgan = require('morgan')

// constants
const PORT = 5000;


// application level middleware
app.use(express.json())
app.use(morgan('dev'))



// routes
app.use('/home', homeRouter) // home router



// server startup logic
app.listen(PORT, () => {
     console.log(`Example app listening at http://localhost:${PORT}`)
})