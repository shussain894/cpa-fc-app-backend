const bp = require('body-parser')
require('dotenv').config({ path: './database/.env' })
const express = require('express')
const FixtureRoutes = require('./routes/Fixtures')
const UserRoutes = require('./routes/User')
const mongoose = require('mongoose')
const mongoString = process.env.MONGO_URI
const cors = require('cors')
const JWT = require("jsonwebtoken");
const app = express()
const tokensRouter = require("./routes/Token");

// let options = {
//   "origin": "*", "methods": "GET, HEAD, PUT, PATCH, DELETE, POST", "preflightContinue": false, "optionsSuccessStatus": 204
// }

app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

const tokenChecker = (req, res, next) => {
  let token;
  const authHeader = req.get("Authorization");

  if (authHeader) {
    token = authHeader.slice(7);
  }

  JWT.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      console.log(err);
      res.status(401).json({ message: "auth error" });
    } else {
      req.user_id = payload.user_id;
      next();
    }
  });
};

mongoose.connect(mongoString)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('connected & listening 4000', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

app.use(bp.json())
app.use(bp.urlencoded({extended: true}))
app.options('*', cors())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
  next();
})
app.use(cors())
app.use('/fixtures', tokenChecker, FixtureRoutes)
app.use('/users', UserRoutes)
app.use("/tokens", tokensRouter);

// app.listen(4000, () => {
//   console.log('listening on 4000')
// })