import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: "navyum",
  api_key: "475888486772937",
  api_secret: "JFW5S68zfqAYJ-uS8-uIRNquzjQ"
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;

         const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
         })

         return response
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null;
    }
}

export { uploadOnCloudinary }

// const uploadResult = await cloudinary.uploader
//        .upload(
//            'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
//                public_id: 'shoes',
//            }
//        )
//        .catch((error) => {
//            console.log(error);
//        });
    
//     console.log(uploadResult);