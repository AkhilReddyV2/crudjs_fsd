const express = require('express')
//const bodyParser = require('bodyParser')
const mongoose = require('mongoose')
//const cors = require('cors')
const url = 'mongodb://localhost/AlienDBex'

const app = express()
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',()=>
{
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(9000,()=>
{
    console.log('Server started')
}) 