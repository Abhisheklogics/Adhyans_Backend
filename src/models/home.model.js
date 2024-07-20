import mongoose from "mongoose"

const homeSchema=new mongoose.Schema({
    image1:{
        type:String,
         required:true
      },
      image2:{
        type:String,
         required:true
      },
      image3:{
        type:String,
         required:true
      },
       
      image4:{
        type:String,
         required:true
      }, 
      image5:{
        type:String,
        
      },
})


export const Home = mongoose.model('Home',homeSchema)
