// import mongoose from 'mongoose';

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URI as string, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log(`MongoDB connected: ${conn.connection.host}`);
//     } catch (error) {
//         console.error('Database connection failed:', error);
//         process.exit(1);
//     }
// };

// export default connectDB;

// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI as string);
//     console.log("MongoDB Connected");
//   } catch (error) {
//     console.error("MongoDB Connection Failed:", error);
//     process.exit(1);
//   }
// };

// export default connectDB;


import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

export default connectDB;
