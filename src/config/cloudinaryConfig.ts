// import { v2 as cloudinary } from 'cloudinary';
// import dotenv from 'dotenv';

// dotenv.config();

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
//   api_key: process.env.CLOUDINARY_API_KEY!,
//   api_secret: process.env.CLOUDINARY_API_SECRET!,
// });

// export default cloudinary;


// import cloudinary from "cloudinary";
// import dotenv from "dotenv";
// dotenv.config();

// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const uploadToCloudinary = async (filePath: string, folder: string) => {
//   try {
//     const result = await cloudinary.v2.uploader.upload(filePath, {
//       folder,
//     });
//     return result;
//   } catch (error) {
//     console.error("Cloudinary upload error:", error);
//     throw new Error("Image upload failed");
//   }
// };

// export default uploadToCloudinary;



import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// CLOUDINARY_CLOUD_NAME=ArabianEleganceBD
// CLOUDINARY_API_KEY=961343819358223
// CLOUDINARY_API_SECRET=J4cQ_BNwoIJtqfi56Sc7TJiSGFc

const uploadToCloudinary = async (filePath: string, folder: string) => {
  try {
    const result = await cloudinary.v2.uploader.upload(filePath, {
      folder: folder,
    });
    return result;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new Error("Image upload failed");
  }
};

export default uploadToCloudinary;
