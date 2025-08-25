require('dotenv').config()
const express = require("express")
const connectDB = require('./models/connection')
const app = express()

// console.log(process.env.PORT)

connectDB()

const PORT = process.env.PORT || 4000

app.listen(PORT , () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})