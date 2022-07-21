const express=require('express')
const app=express()
const init=require('./config/DB')
const router = require('./routes/Media.route')
const cors=require('cors')
require('dotenv').config()

// initializing the server
init()

app.get("/",(req,res)=>{
    res.send("hello")
})
app.use(cors())
app.use(express.json())
app.use("/",router)
const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`)
})