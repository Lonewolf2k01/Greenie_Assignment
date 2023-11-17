import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import createRoute from "../back-end/routes/createRoute.js"

import autoIncrement from 'mongoose-auto-increment';


const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())

app.use("/user",createRoute)

autoIncrement.initialize(mongoose.connection);

const port = process.env.PORT
mongoose.connect(
    process.env.MONGO_URL
).then(() => {
    app.listen(port, () => console.log("Server connected in ", port))
})


export { mongoose, autoIncrement };