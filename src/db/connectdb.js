import mongoose from "mongoose"

const db=async()=>{
    try {
         await mongoose.connect(process.env.MONGODB_CONNECTION)
         console.log("database connect ho gya")
    } catch (error) {
        console.log("database is not connect ")
    }
}
export default db