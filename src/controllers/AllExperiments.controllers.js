
import { Arduino } from "../models/arduino.model.js"
 import {asyncHandler} from "../utils/asyncHandler.js"
import { Respberry } from "../models/resberipy.model.js"
import { Esp } from "../models/esp.model.js"
import {uploadCloudinary}  from "../utils/cloudinary.js"
 import { Home } from "../models/home.model.js"

const homeImages=asyncHandler(async(req,res)=>{
  if(!req.files.image1[0])
    {
      throw console.error('files not availble');
    }
        let image1=  await uploadCloudinary(req.files.image1[0].path)
        let image2 =await uploadCloudinary(req.files.image2[0].path)
        let image3=  await uploadCloudinary(req.files.image3[0].path)
        let image4 = await uploadCloudinary(req.files.image4[0].path)
        let image5=  await uploadCloudinary(req.files.image5[0].path)
     let setHomeImages=   await Home.create({
                  image1:image1.url,
                  image2:image2.url,
                  image3:image3.url,
                  image4:image4.url,
                  image5:image5.url
        })
        return res.send(setHomeImages)
})
const getHomeImages=asyncHandler(async(req,res)=>{
  let arduinodata= await Arduino.aggregate([
    {
      $project:{
                 
        _id:0,
        ExperimentName:1,
        ExperimentId:1,
        image1:1,
        poster:1,
        plot:1

      }
    }])
 
  return res.json(arduinodata)

})
  const datasave=asyncHandler(async(req,res)=>{
   const { ExperimentId,ExperimentName,
    
     madeBy,madeByinfo,overview,overviewinfo, HC,working,
      pinDiagramInfo,
      pinDiagramInfo2,
    
        CircuitDiagramInfo,code ,
     result
     
    
    }=req.body
   
  
   let image1= await uploadCloudinary(req.files.image1[0].path)
     let  image2=await uploadCloudinary(req.files.image2[0].path)
   let image3=await uploadCloudinary(req.files.image3[0].path)
   let image4=await uploadCloudinary(req.files.image4[0].path)
   let image5=await uploadCloudinary(req.files.image5[0].path)
   let image6=await uploadCloudinary(req.files.image6[0].path)
 
   
   
   
   

  
  
    
   let dataInsert= await Arduino.create({
     ExperimentId,
     ExperimentName,
     
     madeBy,
     madeByinfo,
     overview,
     overviewinfo,
    HC,
    working,
     pinDiagramInfo,   
     pinDiagramInfo2,   
     CircuitDiagramInfo,
     
      
     
     code,
     result,
     image1:image1.url,
     image2:image2.url,
     image3:image3.url,
     image4:image4.url,
     image5:image5.url,
     image6:image6.url,
            
   
    
    })
 
  return res.send(dataInsert)
  })

  

 const datasave2=asyncHandler(async(req,res)=>{
  const { ExperimentId,ExperimentName,
     madeBy,madeByinfo,overview,overviewinfo,Material,Material1,Material2,Material3,Material4, 
     pinDiagramInfo,CircuitDiagramInfo,step1,step2,step3,step4,step5,step6,step7,code,result}=req.body
  
 
  let image1= await uploadCloudinary(req.files.image1[0].path)
    let  image2=await uploadCloudinary(req.files.image2[0].path)
    let image3= await uploadCloudinary(req.files.image3[0].path)
    let  image4=await uploadCloudinary(req.files.image4[0].path)
    let image5= await uploadCloudinary(req.files.image5[0].path)

  

console.log("heloo")
 
 
   
  let dataInsert= await Respberry.create({
    ExperimentId,
    ExperimentName,
    madeBy,
    madeByinfo,
    overview,
    overviewinfo,
    Material,
    Material1,
    Material2,
    Material3,
    Material4,
    pinDiagramInfo,   
    CircuitDiagramInfo,
    step1,
    step2,
    step3,
    step4,
    step5,
    step6,
    step7,
    code,
    result,
    image1:image1.url,
    image2:image2.url,
    image3:image3.url,
    image4:image4.url,
    image5:image5.url
  
   
   })

 return res.send(dataInsert)
 })
 const getRes=asyncHandler(async(req,res)=>{
   let ExperimentId= req.query.exId
  let data= await  Respberry.findOne({
    ExperimentId
  }) 
   
    return res.json(data)
})
 

const EspData = asyncHandler(async(req,res)=>{
  
  const { ExperimentId,ExperimentName,
   overview,step1,step2,step3,step4,step5,step6,step7,step8,step9,step10,step11,
   step12,step13,step14,step15,step16,step17,step18,pinDiagramInfo,CircuitDiagramInfo,code,
   component,
   result,
   
   
   }=req.body
  
 
  let image1= await uploadCloudinary(req.files.image1[0].path)
    let  image2=await uploadCloudinary(req.files.image2[0].path)
  let image3=await uploadCloudinary(req.files.image3[0].path)
  let image4=await uploadCloudinary(req.files.image4[0].path)




 
 
   
  let espData= await Esp.create({
    ExperimentId,
    ExperimentName,
   overview,
   component,
   pinDiagramInfo,
   CircuitDiagramInfo,
   step1,
   step2,
   step3,
   step4,
   step5,
   step6,
   step7,
   step8,
   step9,
   step10,
   step11,
   step12,
   step13,
   step14,
   step15,
   step16,
   step17,
   step18,
  
   code,
   result,
   image1:image1.url,
   image2:image2.url,
   image3:image3.url,
   image4:image4.url
   
   })

 return res.send(espData)
 })
 const getEspData=asyncHandler(async(req,res)=>{
     
  let ExperimentId=req.query.exId

 let exOne= await Esp.findOne({
    ExperimentId
  })
  return res.json(exOne)
})

const oneObject =asyncHandler(async(req,res)=>{
let ExperimentId=req.query.exId

 let exOne= await Arduino.findOne({
    ExperimentId
  })
  return res.json(exOne)
})
const searchArduinoData = asyncHandler(async (req, res) => {
  let { search } = req.query;

  if (!search) {
    return res.status(400).json({ error: 'Search query is required.' });
  }

  try {
    let agg = [
      {
        $search: {
          index: 'default', // Add the name of your Atlas Search index if required
          autocomplete: {
            query: search,
            path: 'ExperimentName',
            fuzzy: {
              maxEdits: 2
            }
          }
        }
      },
      {
        $limit: 5
      },
      {
        $project: {
          _id: 0,
          ExperimentName: 1,
          ExperimentId: 1,
          image1: 1,
          poster: 1,
          plot: 1
        }
      }
    ];

    let response1 = await Arduino.aggregate(agg);
    let response2=await Respberry.aggregate(agg)  
    
    return res.send(response1,response2);
  } catch (error) {
    console.error('Error performing search:', error);
    return res.status(500).json({ error: 'An error occurred while searching.' });
  }
});

const oneObject1 =asyncHandler(async(req,res)=>{
  
  
   let exOne= await Arduino.find( )
    return res.json(exOne)
  })

export{oneObject1,datasave,getRes,datasave2,homeImages,getHomeImages,EspData,getEspData,oneObject,searchArduinoData}