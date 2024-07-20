
import { app } from "./app.js";
 import dotenv from "dotenv"
import db from "./db/connectdb.js";
const port = process.env.PORT || 4000;
app.listen(process.env.PORT||port)
console.log(port)
dotenv.config();
db().then((res)=>{
 console.log(res,'database is connect')
})
.catch((err)=>{
    console.log(err,"database is not connect")
})