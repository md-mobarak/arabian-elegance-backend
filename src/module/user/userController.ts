// import { NextFunction, Request, Response } from "express";
// import * as userService from "./userService";

// // Register user
//  const registerUserController = async (req: Request, res: Response) => {
//   try {
//     const user = await userService.createUser(req.body);
//     res.status(201).json({ success: true, data: user });
//   } catch (error) {
//     res.status(400).json({ success: false, message: error });
//   }
// };


// export const loginUserController = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<Response | void> => {
//   try {
//     const { email, password } = req.body;
//     const { user, accessToken, refreshToken } = await userService.loginUser(email, password);

//     res.cookie("refreshToken", refreshToken, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "strict",
//       maxAge: 30 * 24 * 60 * 60 * 1000,
//     });

//     return res.json({
//       user: {
//         name: user.name,
//         email: user.email,
//         role: user.role,
//         avatar: user.avatar,
//       },
//       accessToken,
//     });
//   } catch (error) {
//     return next(error); // Ensure next() is returned
//   }
// };

// // Get all users with pagination, search, and filter
//  const getAllUsersController = async (req: Request, res: Response) => {
//   try {
//     const { page = 1, limit = 10, search = "", ...filters } = req.query;
//     const { users, totalUsers, totalPages } = await userService.getAllUsers(
//       Number(page),
//       Number(limit),
//       filters,
//       search as string
//     );
//     res.status(200).json({
//       success: true,
//       data: users,
//       pagination: { totalUsers, totalPages, currentPage: page },
//     });
//   } catch (error) {
//     res.status(400).json({ success: false, message: error });
//   }
// };
// // Get single user by ID
// const getUserByIdController = async (req: Request, res: Response) => {
//     try {
//       const user = await userService.getUserById(req.params.id);
//       res.status(200).json({ success: true, data: user });
//     } catch (error) {
//       res.status(400).json({ success: false, message: error });
//     }
//   };
  

// // Update user
//  const updateUserController = async (req: Request, res: Response) => {
//   try {
//     const user = await userService.updateUser(req.params.id, req.body);
//     res.status(200).json({ success: true, data: user });
//   } catch (error) {
//     res.status(400).json({ success: false, message: error });
//   }
// };

// // Delete user
// const deleteUserController = async (req: Request, res: Response) => {
//   try {
//     const user = await userService.deleteUser(req.params.id);
//     res.status(200).json({ success: true, message: "User deleted successfully" });
//   } catch (error) {
//     res.status(400).json({ success: false, message: error });
//   }
// };

// export const userControllers ={
//   registerUserController,
//   loginUserController,
//   deleteUserController ,
//   updateUserController ,
//   getUserByIdController,
//   getAllUsersController,

// }


// import { NextFunction, Request, Response } from "express";
// import * as userService from "./userService";

// // Register user
// const registerUserController = async (req: Request, res: Response) => {
//   try {
//     const user = await userService.createUser(req.body);
//     res.status(201).json({ success: true, data: user });
//   } catch (error) {
//     res.status(400).json({ success: false, message: error });
//   }
// };

// // Login user
// export const loginUserController = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { email, password } = req.body;
//     const { user, accessToken, refreshToken } = await userService.loginUser(email, password);

//     res.cookie("refreshToken", refreshToken, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "strict",
//       maxAge: 30 * 24 * 60 * 60 * 1000,
//     });

//     return res.json({ user, accessToken });
//   } catch (error) {
//     return next(error);
//   }
// };

// // Get all users with pagination, search, and filters
// const getAllUsersController = async (req: Request, res: Response) => {
//   try {
//     const { page = 1, limit = 10, search = "", ...filters } = req.query;
//     const { users, totalUsers, totalPages } = await userService.getAllUsers(
//       Number(page),
//       Number(limit),
//       filters,
//       search as string
//     );
//     res.status(200).json({
//       success: true,
//       data: users,
//       pagination: { totalUsers, totalPages, currentPage: Number(page) },
//     });
//   } catch (error) {
//     res.status(400).json({ success: false, message: error });
//   }
// };

// // Get user by ID
// const getUserByIdController = async (req: Request, res: Response) => {
//   try {
//     const user = await userService.getUserById(req.params.id);
//     res.status(200).json({ success: true, data: user });
//   } catch (error) {
//     res.status(400).json({ success: false, message: error});
//   }
// };

// // Update user
// const updateUserController = async (req: Request, res: Response) => {
//   try {
//     const user = await userService.updateUser(req.params.id, req.body);
//     res.status(200).json({ success: true, data: user });
//   } catch (error) {
//     res.status(400).json({ success: false, message: error });
//   }
// };

// // Delete user
// const deleteUserController = async (req: Request, res: Response) => {
//   try {
//     await userService.deleteUser(req.params.id);
//     res.status(200).json({ success: true, message: "User deleted successfully" });
//   } catch (error) {
//     res.status(400).json({ success: false, message: error });
//   }
// };

// export const userControllers = {
//   registerUserController,
//   loginUserController,
//   deleteUserController,
//   updateUserController,
//   getUserByIdController,
//   getAllUsersController,
// };



// 3rd 
import { NextFunction, Request, Response } from "express";
import * as userService from "./userService";

// Register user
const registerUserController = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};

// Login user
export const loginUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const { user, accessToken, refreshToken } = await userService.loginUser(email, password);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return res.json({
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
      },
      accessToken,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error });
};
}

// Get all users with pagination, search, and filter
const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10, search = "", ...filters } = req.query;
    const { users, totalUsers, totalPages } = await userService.getAllUsers(
      Number(page),
      Number(limit),
      filters,
      search as string
    );
    res.status(200).json({
      success: true,
      data: users,
      pagination: { totalUsers, totalPages, currentPage: page },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};

// Get single user by ID
const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};

// Update user
const updateUserController = async (req: Request, res: Response) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};

// Delete user
const deleteUserController = async (req: Request, res: Response) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    res.status(200).json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};

export const userControllers = {
  registerUserController,
  loginUserController,
  deleteUserController,
  updateUserController,
  getUserByIdController,
  getAllUsersController,
};