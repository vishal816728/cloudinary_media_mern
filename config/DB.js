const mongoose=require('mongoose')

async function init(){
    try {
        const con=await mongoose.connect(process.env.MONGO_URI)
        if(con){
            console.log(`Database is connected with ${con.connection.host}`)
        }
    } catch (err) {
         console.log(err)        
    }
}

module.exports=init


// task async error while uploading mp4 file