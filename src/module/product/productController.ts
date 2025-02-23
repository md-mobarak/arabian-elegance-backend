
import { Request, Response, NextFunction } from "express";
import * as productService from "./productService";
import uploadToCloudinary from "../../config/cloudinaryConfig"; 



// Create a new product (Admin, Manager)
export const createProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  
  // console.log("Received data:", req.body);
  try {
    const { title, description, category, price, stock, brand, sizes, colors, tags } = req.body;

    // Check if files exist in request
    let imageUrls: string[] = [];
    if (req.files && Array.isArray(req.files)) {
      const uploadPromises = (req.files as Express.Multer.File[]).map(async (file) => {
        const result = await uploadToCloudinary(file.path, "products"); // Upload to Cloudinary
        console.log(result)
        return result.secure_url;
      });

      imageUrls = await Promise.all(uploadPromises);
    }
    console.log(imageUrls)

    const productData = {
      title,
      description,
      category,
      price,
      stock,
      brand,
      sizes,
      colors,
      tags,
      images: imageUrls, // Store Cloudinary URLs
    };

    const product = await productService.createProduct(productData);
    // console.log(product)
    res.status(201).json({ success: true, message: "Product created", data: product });
  } catch (error) {
    next(error);
  }
};

// Get all products with search, filter, pagination
const getProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { search, category, minPrice, maxPrice, page = 1, limit = 10 } = req.query;
    const result = await productService.getProducts(
      search as string,
      category as string,
      Number(minPrice),
      Number(maxPrice),
      Number(page),
      Number(limit)
    );
    res.status(200).json({ success: true, ...result });
  } catch (error) {
    next(error);
  }
};

// Get single product
const getProductById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const product = await productService.getProductById(req.params.id);
    if (!product) {
      res.status(404).json({ success: false, message: "Product not found" });
      return;
    }
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    next(error);
  }
};

// Update product (Admin, Manager)
const updateProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const updatedProduct = await productService.updateProduct(req.params.id, req.body);
    if (!updatedProduct) {
      res.status(404).json({ success: false, message: "Product not found" });
      return;
    }
    res.status(200).json({ success: true, message: "Product updated", data: updatedProduct });
  } catch (error) {
    next(error);
  }
};

// Delete product (Admin only)
const deleteProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const deletedProduct = await productService.deleteProduct(req.params.id);
    if (!deletedProduct) {
      res.status(404).json({ success: false, message: "Product not found" });
      return;
    }
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    next(error);
  }
};

export const productControllers = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
