import { Router } from "express";
import {datasave,getRes,datasave2,homeImages,getHomeImages,EspData,getEspData,oneObject,searchArduinoData,oneObject1} from "../controllers/AllExperiments.controllers.js";
import { demo } from "../midlewares/auth.middleware.js";
import {upload} from "../midlewares/multer.midleware.js"


const router = Router()
router.route('/homeImagesSave').get(demo)   
router.route('/homeImagesSave').post(upload.fields([
    {
        name:"image1",
        maxCount:1
    },
    {
        name:"image2",
        maxCount:1
    },
    {
        name:"image3",
        maxCount:1
    },
    {
        name:"image4",
        maxCount:1
    },
    {
        name:"image5",
        maxCount:1
    }
    
    
]),homeImages)
router.route('/').get(getHomeImages)
router.route("/datasave").post(upload.fields([
    {
        name:'image1',
        maxCount:1
    },
    {
        name:'image2',
        maxCount:1
    }, 
    {
        name:'image3',
        maxCount:1
    },
    {
        name:'image4',
        maxCount:1
    },
    {
        name:'image5',
        maxCount:1
    },
    {
        name:'image6',
        maxCount:1
    },
   
]),datasave)

router.route("/datasave2").post(upload.fields([
    {
        name:'image1',
        maxCount:1
    },
    {
        name:'image2',
        maxCount:1
    }, 
    {
        name:'image3',
        maxCount:1
    },
    {
        name:'image4',
        maxCount:1
    },
  
    {
        name:'image5',
        maxCount:1
    },
  
   
]),datasave2)
router.route("/espDataSave").post(upload.fields([
    {
        name:'image1',
        maxCount:1
    },
    {
        name:'image2',
        maxCount:1
    }, 
    {
        name:'image3',
        maxCount:1
    },
    {
        name:'image4',
        maxCount:1
    },
  
   
]),EspData)



router.route('/getDataArduino').get(oneObject)
router.route('/getDataArduino2').get(oneObject1)
router.route('/getDataSearch').get(searchArduinoData)
router.route('/getDataRaspberry').get(getRes)
router.route('/getespData').get(getEspData)



export default router 