import mongoose from "mongoose";

const AlldataSchema= new mongoose.Schema({
    AllArduinoData:{
        type:Array
    },
    AllResData:{
      type:Array 
    },
    AllEspData:{
        type :Array
    }
   
    
})
export const Alldata = mongoose.model('Alldata',AlldataSchema)