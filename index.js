const express = require('express')
const mongoose = require('./connections/connect.js')
const contactRoutes = require('./Routes/contact.js')
const app = express()

app.use('/v1',contactRoutes)

app.listen(5000, ()=>console.log("App up on port 5000"))