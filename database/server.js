const bp = require('body-parser')
require('dotenv').config({ path: './database/.env' })
const express = require('express')
// const routes = require('./routes')
const FixtureRoutes = require('./routes/Fixtures')
const UserRoutes = require('./routes/User')
const mongoose = require('mongoose')
const mongoString = process.env.MONGO_URI
const cors = require('cors')

const app = express()
app.use(bp.json())
app.use(bp.urlencoded({extended: true}))
app.use(cors())
app.use('/fixtures', FixtureRoutes)
app.use('/users', UserRoutes)

app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

mongoose.connect(mongoString)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('connected & listening 4000', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

// app.listen(4000, () => {
//   console.log('listening on 4000')
// })