const mediamodel=require('../model/MediaModel')

async function mediapost(req,res){
      try {
              const createentity=await mediamodel.create({
                  title:req.body.title,
                  description:req.body.description,
                  thumbnail:req.body.thumbnail,
                  mp4file:req.body.mp4file
              })
              if(createentity){
                  await createentity.save()
                  console.log("successfully addedd")
                  res.send(createentity)
              }
         
      } catch (error) {
        res.status(400).send("database error")
        console.log(error)
      }
}

module.exports=mediapost