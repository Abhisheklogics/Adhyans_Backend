import mongoose from "mongoose";

const AlldataSchema= new mongoose.Schema({
    AllArduinoData:{
        type:Object
    },
    AllResData:{
      type:Object 
    },
    AllEspData:{
        type :Object
    }
   
    
})
export const Alldata = mongoose.model('Alldata',AlldataSchema)