import express from "express";

import cors from "cors"
const app =express()

 
app.use(express.json({limite:"20kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))

app.use(cors({
    origin:'https://magnificent-concha-e6bfce.netlify.app/',
    
    credentials:true
    
}
    
))
   
import arduino from "../src/routes/ar.routes.js"

app.use("/arduino",arduino)




export { app }  