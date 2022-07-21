const express=require('express')
const mediaget = require('../controller/mediaget.controller')
const mediapost = require('../controller/mediapost.controller')

const router=express.Router()

router.post("/media/post",mediapost)
router.get("/mediaall",mediaget)


module.exports=router