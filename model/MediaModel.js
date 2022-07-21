const mongoose=require('mongoose')

const MediaModel=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    mp4file:{
        type:String
    }
},{
    timestamps:true
})

module.exports=mongoose.model('Media',MediaModel)