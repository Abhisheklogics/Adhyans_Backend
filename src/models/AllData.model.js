import mongoose from "mongoose";

const AlldataSchema= new mongoose.Schema({
    AllArduinoData:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Arduino"
        }
    ],
    AllResData:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Respberry"
        }
    ],
    AllEspData:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Esp"
        }
    ],
    AllEspData:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Home"
        }
    ],
    
})