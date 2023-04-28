const express = require("express")
const colors = require("colors")  // it will make our console colourful on terminal
const moragan = require("morgan")
const dotenv = require('dotenv')
const connectDB = require("./config/db")


dotenv.config() // if we don't use this then it will give {sever running on undefined mode error}

//mongodb connection
connectDB()

const app = express()
//middlewares
app.use(express.json())
app.use(moragan("dev"))  //The "dev" parameter passed to morgan() specifies the format of the logs.

app.use('/api/v1/user', require("./routes/userRoutes"))

const port = process.env.port || 8081
app.listen(port,()=>{
    console.log(`server running on ${process.env.NODE_MODE} mode on port${process.env.port}`
    .bgCyan.white)
})