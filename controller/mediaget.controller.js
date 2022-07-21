const mediamodel=require("../model/MediaModel")

async function mediaget(req,res){
      try {
          const data=await mediamodel.find()
          if(data){
              res.send(data)
          }
      } catch (error) {
          res.status(400).send("database error")
      }
}

module.exports=mediaget