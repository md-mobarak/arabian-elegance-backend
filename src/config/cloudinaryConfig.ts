// import cloudinary from "cloudinary";
// import dotenv from "dotenv";

// dotenv.config();

// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });
//  console.log(cloudinary)
// // CLOUDINARY_CLOUD_NAME=ArabianEleganceBD
// // CLOUDINARY_API_KEY=961343819358223
// // CLOUDINARY_API_SECRET=J4cQ_BNwoIJtqfi56Sc7TJiSGFc

// const uploadToCloudinary = async (filePath: string, folder: string) => {
//   try {
//     const result = await cloudinary.v2.uploader.upload(filePath, {
//       folder: folder,
//     });
//     return result;
//   } catch (error) {
//     console.error("Cloudinary upload error:", error);
//     throw new Error("Image upload failed");
//   }
// };

// export default uploadToCloudinary;


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
//       folder: folder,
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

// Load environment variables from .env file
dotenv.config();

// Log environment variables to check if they are loaded correctly
// console.log("CLOUDINARY_CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME);
// console.log("CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY);
// console.log("CLOUDINARY_API_SECRET:", process.env.CLOUDINARY_API_SECRET);

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Log Cloudinary configuration to verify
// console.log("Cloudinary Config:", cloudinary.v2.config());

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


// // backend/uploadToCloudinary.ts
// import cloudinary from "cloudinary";
// import dotenv from "dotenv";

// dotenv.config();

// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export const uploadToCloudinary = async (buffer: Buffer, folder: string) => {
//   try {
//     const result = await cloudinary.v2.uploader.upload_stream(
//       { folder: folder },
//       (error, result) => {
//         if (error) {
//           throw new Error("Cloudinary upload failed");
//         }
//         return result?.secure_url;
//       }
//     ).end(buffer);
//   } catch (error) {
//     console.error("Cloudinary upload error:", error);
//     throw new Error("Image upload failed");
//   }
// };