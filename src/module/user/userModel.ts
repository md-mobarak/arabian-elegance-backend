// // import mongoose, { Schema } from "mongoose";
// // import bcrypt from "bcryptjs";
// // import jwt from "jsonwebtoken";
// // import { IUser } from "../../interfaces/IUser";

// // // Define the User Schema
// // const userSchema = new Schema<IUser>(
// //   {
// //     name: {
// //       type: String,
// //       required: [true, "Name is required"],
// //       trim: true,
// //     },
// //     email: {
// //       type: String,
// //       required: [true, "Email is required"],
// //       unique: true,
// //       match: [
// //         /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
// //         "Please enter a valid email",
// //       ],
// //     },
// //     password: {
// //       type: String,
// //       required: [true, "Password is required"],
// //       minlength: [6, "Password must be at least 6 characters"],
// //       select: false, // Do not return password by default
// //     },
// //     role: {
// //       type: String,
// //       enum: ["user", "manager", "admin"],
// //       default: "user",
// //     },
// //     phone: {
// //       type: Number,
// //       required: true,
// //     },
// //     district: {
// //       type: String,
// //       required: true,
// //     },
// //     thana: {
// //       type: String,
// //       required: true,
// //     },
// //     village: {
// //       type: String,
// //       required: true,
// //     },
// //     avatar: {
// //       type: String, // Store image URL (Cloudinary / AWS S3)
// //       default: "https://via.placeholder.com/150",
// //     },
// //     isVerified: {
// //       type: Boolean,
// //       default: false, // Email verification status
// //     },
// //   },
// //   { timestamps: true } // Adds createdAt and updatedAt
// // );

// // // 🔹 Hash password before saving
// // userSchema.pre<IUser>("save", async function (next) {
// //   if (!this.isModified("password")) return next();
// //   this.password = await bcrypt.hash(this.password, 10);
// //   next();
// // });

// // // 🔹 Compare hashed password
// // userSchema.methods.comparePassword = async function (enteredPassword: string) {
// //   return await bcrypt.compare(enteredPassword, this.password);
// // };

// // // 🔹 Generate JWT Token
// // userSchema.methods.getJwtToken = function () {
// //   return jwt.sign(
// //     { id: this._id, role: this.role },
// //     process.env.JWT_SECRET as string,
// //     {
// //       expiresIn: process.env.JWT_EXPIRES_IN, // typically 1 hour
// //     }
// //   );
// // };

// // // 🔹 Generate Refresh Token
// // userSchema.methods.getRefreshToken = function () {
// //   return jwt.sign(
// //     { id: this._id, role: this.role },
// //     process.env.JWT_SECRET as string,
// //     {
// //       expiresIn: process.env.JWT_REFRESH_EXPIRES_IN, // longer expiration (e.g., 30d)
// //     }
// //   );
// // };

// // const User = mongoose.model<IUser>("User", userSchema);
// // export default User;


// // import mongoose, { Schema } from "mongoose";
// // import bcrypt from "bcryptjs";
// // import jwt from "jsonwebtoken";
// // import { IUser } from "../../interfaces/IUser";

// // // Define the User Schema
// // const userSchema = new Schema<IUser>(
// //   {
// //     name: {
// //       type: String,
// //       required: [true, "Name is required"],
// //       trim: true,
// //     },
// //     email: {
// //       type: String,
// //       required: [true, "Email is required"],
// //       unique: true,
// //       match: [
// //         /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
// //         "Please enter a valid email",
// //       ],
// //     },
// //     password: {
// //       type: String,
// //       required: [true, "Password is required"],
// //       minlength: [6, "Password must be at least 6 characters"],
// //       select: false, // Do not return password by default
// //     },
// //     role: {
// //       type: String,
// //       enum: ["user", "manager", "admin"],
// //       default: "user",
// //     },
// //     phone: {
// //       type: Number,
// //       required: true,
// //     },
// //     district: {
// //       type: String,
// //       required: true,
// //     },
// //     thana: {
// //       type: String,
// //       required: true,
// //     },
// //     village: {
// //       type: String,
// //       required: true,
// //     },
// //     avatar: {
// //       type: String, // Store image URL (Cloudinary / AWS S3)
// //       default: "https://via.placeholder.com/150",
// //     },
// //     isVerified: {
// //       type: Boolean,
// //       default: false, // Email verification status
// //     },
// //   },
// //   { timestamps: true } // Adds createdAt and updatedAt
// // );

// // // 🔹 Hash password before saving
// // userSchema.pre<IUser>("save", async function (next) {
// //   if (!this.isModified("password")) return next();
// //   this.password = await bcrypt.hash(this.password, 10);
// //   next();
// // });

// // // 🔹 Compare hashed password
// // userSchema.methods.comparePassword = async function (enteredPassword: string) {
// //   return await bcrypt.compare(enteredPassword, this.password);
// // };

// // // 🔹 Generate JWT Token
// // userSchema.methods.getJwtToken = function () {
// //   return jwt.sign(
// //     { id: this._id, role: this.role },
// //     process.env.JWT_SECRET as string,
// //     {
// //       expiresIn: process.env.JWT_EXPIRES_IN, // typically 1 hour
// //     }
// //   );
// // };

// // // 🔹 Generate Refresh Token
// // userSchema.methods.getRefreshToken = function () {
// //   return jwt.sign(
// //     { id: this._id, role: this.role },
// //     process.env.JWT_SECRET as string,
// //     {
// //       expiresIn: process.env.JWT_REFRESH_EXPIRES_IN, // longer expiration (e.g., 30d)
// //     }
// //   );
// // };

// // const User = mongoose.model<IUser>("User", userSchema);
// // export default User;

// // models/User.ts
// import mongoose, { Schema } from "mongoose";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import { IUser } from "../../interfaces/IUser";

// // Define the User Schema
// const userSchema = new Schema<IUser>(
//   {
//     name: { type: String, required: [true, "Name is required"], trim: true },
//     email: { type: String, required: [true, "Email is required"], unique: true, match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email"] },
//     password: { type: String, required: [true, "Password is required"], minlength: [6, "Password must be at least 6 characters"], select: false },
//     role: { type: String, enum: ["user", "manager", "admin"], default: "user" },
//     phone: { type: Number, required: true },
//     district: { type: String, required: true },
//     thana: { type: String, required: true },
//     village: { type: String, required: true },
//     avatar: { type: String, default: "https://via.placeholder.com/150" },
//     isVerified: { type: Boolean, default: false },
//   },
//   { timestamps: true }
// );

// // Hash password before saving
// userSchema.pre<IUser>("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// // Compare hashed password
// userSchema.methods.comparePassword = async function (enteredPassword: string) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// // Generate JWT Token
// userSchema.methods.getJwtToken = function () {
//   return jwt.sign(
//     { id: this._id, role: this.role },
//     process.env.JWT_SECRET as string,
//     { expiresIn: process.env.JWT_EXPIRES_IN }
//   );
// };

// // Generate Refresh Token
// userSchema.methods.getRefreshToken = function () {
//   return jwt.sign(
//     { id: this._id, role: this.role },
//     process.env.JWT_SECRET as string,
//     { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN }
//   );
// };

// const User = mongoose.model<IUser>("User", userSchema);
// export default User;



import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { IUser } from "../../interfaces/IUser";

// Define the User Schema
const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: [true, "Name is required"], trim: true },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
      select: false,
    },
    role: { type: String, enum: ["user", "manager", "admin"], default: "user" },
    phone: { type: Number, required: true },
    district: { type: String, required: true },
    thana: { type: String, required: true },
    village: { type: String, required: true },
    avatar: { type: String, default: "https://via.placeholder.com/150" },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare hashed password
userSchema.methods.comparePassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generate JWT Token
userSchema.methods.getJwtToken = function () {
  return jwt.sign(
    { id: this._id, role: this.role },
    process.env.JWT_SECRET as string,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
};

// Generate Refresh Token
userSchema.methods.getRefreshToken = function () {
  return jwt.sign(
    { id: this._id, role: this.role },
    process.env.JWT_SECRET as string,
    { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN }
  );
};

const User = mongoose.model<IUser>("User", userSchema);
export default User;