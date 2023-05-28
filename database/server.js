import BodyParser from 'body-parser'
// require('dotenv').config({ path: './database/.env' })
import dotenv from "dotenv"
import express from 'express'
import Mongoose from 'mongoose'
import cors from 'cors'
import JSonwebtoken from "jsonwebtoken"
import tokensRouter from './routes/Token.js'
import FixtureRoutes from './routes/Fixtures.js'
import UserRoutes from './routes/User.js'

// let options = {
//   "origin": "*", "methods": "GET, HEAD, PUT, PATCH, DELETE, POST", "preflightContinue": false, "optionsSuccessStatus": 204
// }
const app = express()
dotenv.config({ path: './database/.env' })
const mongoString = process.env.MONGO_URI
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
  console.log('new token', token)
  JSonwebtoken.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      console.log(err);
      res.status(401).json({ message: "auth error" });
    } else {
      req.user_id = payload.user_id;
      next();
    }
  });
};

Mongoose.connect(mongoString)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('connected and listening to port 4000', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log('I FAILED')
    console.log(error)
  })

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({extended: true}))
// app.options('*', cors())
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
//   next();
// })
// app.use(cors())
app.get("/", (req, res) => res.status(200).send("Hello World, CPA's backend"));
app.use('/fixtures', tokenChecker, FixtureRoutes)
app.use('/users', UserRoutes)
app.use("/tokens", tokensRouter);
