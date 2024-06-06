import {v2 as cloudinary} from 'cloudinary';
 
  import fs from"fs"    
  cloudinary.config({ 
  
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET ,
    api_environment_variable:process.env.CLOUDINARY_API_ENVIRONMENT_VARIABLE
});

const uploadCloudinary=async (localpath)=>{
  try {
    if(!localpath) return null
    const res = await cloudinary.uploader.upload(localpath,{
      resource_type:'image',
      
    })
    return res 
  } catch (error) {
     fs.unlinkSync(localpath)
     console.log("upload nahi hua hai")
  }
}

export {uploadCloudinary} 