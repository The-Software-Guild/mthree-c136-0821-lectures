// server.js
// lets get a route up and running that serves us an entire collection
const express = require('express')
const app = express()
const morgan = require('morgan')
var cors = require('cors')

// constants
const PORT = 5000;

// application level middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

const exampleArr = [1, 2, true, 'whatever', null];
const exampleObj = {
     name: 'me',
     date: 1232312312
}

// routes
// GET ALL
app.get('/home', (req, res, next) => {
     const result = exampleArr.push('new thing')
     const result = queryAll(nameOfCollection)
     res.send(
          {
               body: result
          }
     );
});

// POST
app.get('/home', (req, res, next) => {
     const newThing = req.body
     exampleArr.push(newThing)
     // have some new logic perhaps still only one line that uses mongoose syntax to do what we were doing before
     // findOneAndUpdate // put
     // queryAll(nameOfCollection)
     res.send(
          {
               body: exampleArr
          }
     );
});

// server startup logic
app.listen(PORT, () => {
     console.log(`Example app listening at http://localhost:${PORT}`)
})
