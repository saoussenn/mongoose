const mongoose = require('mongoose')
require("dotenv").config({path:'./.env'})
const uri = process.env.MONGO_URI


connectDB=()=>(
    mongoose.connect()
    .then((result)=> console.log("database connected"))
    .catch((error)=> console.log(error))
)

module.exports = connectDB