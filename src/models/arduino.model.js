import mongoose from "mongoose";
const arduinoSchema= new mongoose.Schema({
    ExperimentId:
    {
       type:Number,
       trim:true,
       required:true
    },
    ExperimentName:
    {
       type:String,
       trim:true,
       lowarcase:true,
       required:true
    },
    
    madeBy:{
     type:String,
     trim:true,
     lowarcase:true,
     required:true
    },
    madeByinfo:
    {
      type:String,
      trim:true,
      lowarcase:true,
      required:true
     },
    overview:
    {
       type:String,
       trim:true, 
       required:true
    },
    overviewinfo:
    {
       type:String,
       trim:true, 
       required:true
    },
    HC:{
      type:String,
      trim:true,
    },
    working:{
      type:String,
      trim:true, 
    },
    pinDiagramInfo:
    {
      type:String,
      trim:true,
       required:true
    },
    pinDiagramInfo2:
    {
      type:String,
      trim:true,
       required:true
    },
   
    CircuitDiagramInfo:
    {
      type:String,
    trim:true,
       required:true
    },
       
    
    code:{
      type:String,
      required:true,
      trim:true
    },
    result:
    {
      type:String,
      trim:true,
      required:true
    },
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
      
    image6:{
      type:String,
      
    }, 
      

})

 

export const Arduino=mongoose.model("Arduino", arduinoSchema)
/*  pinDiagramInfo2:
    {
      type:String,
      trim:true,
       required:true
    },
     image5:{
      type:String,
      
    },
    image6:{
      type:String,
    
    }
      
    step1:{
      type:String,
      trim:true,
     
     },
     step2:{
         type:String,
         trim:true,
        
        },
        step3:{
         type:String,
         trim:true,
         
        },
        step4:{
         type:String,
         trim:true,
        
        },
        step5:{
         type:String,
         trim:true,
         
        },
        step6:{
         type:String,
         trim:true,
        
        },
    */