
import { IProduct } from "../../interfaces/IProduct";
import Product from "./productModel";

export const createProduct = async (data: Partial<IProduct>) => {
    return await Product.create(data);
};

export const getProducts = async (
    search?: string,
    category?: string,
    minPrice?: number,
    maxPrice?: number,
    page: number = 1,
    limit: number = 10
) => {
    let query: any = {};

    if (search) query.title = { $regex: search, $options: "i" };
    if (category) query.category = category;
    if (minPrice !== undefined || maxPrice !== undefined) {
        query.price = {
            ...(minPrice ? { $gte: Number(minPrice) } : {}),
            ...(maxPrice ? { $lte: Number(maxPrice) } : {}),
        };
    }

    const products = await Product.find(query)
        .skip((page - 1) * limit)
        .limit(limit);

    const total = await Product.countDocuments(query);
    return { products, total, totalPages: Math.ceil(total / limit) };
};

export const getProductById = async (id: string) => {
    return await Product.findById(id);
};

export const updateProduct = async (id: string, data: Partial<IProduct>) => {
    return await Product.findByIdAndUpdate(id, data, { new: true });
};

export const deleteProduct = async (id: string) => {
    return await Product.findByIdAndDelete(id);
};
