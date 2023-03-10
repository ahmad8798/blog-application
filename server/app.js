import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRouter from '../server/routes/user-router.js'
import blogRouter from '../server/routes/blog-router.js'
const app = express()
app.use(cors())
app.use(express.json());
app.use("/api/user",userRouter)
app.use("/api/blog",blogRouter)
const port =  5000

mongoose.connect(
    "mongodb+srv://admin:admin1234@cluster0.bbkouoy.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(port))
  .then(() =>
    console.log(`Connected TO Database and Listening TO Localhost ${port}`)
  )
  .catch((err) => console.log(err));