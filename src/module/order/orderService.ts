

import OrderModel, { IOrder } from "./orderModel";

// Create a new order
const createOrder = async (data: IOrder) => {
  return await OrderModel.create(data);
};

// Get all orders with search, filter, and pagination
const getAllOrders = async (
  page: number,
  limit: number,
  search?: string,
  status?: string,
  paymentStatus?: string
) => {
  const query: any = {};

  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
      { phone: { $regex: search, $options: "i" } },
    ];
  }

  if (status) query.status = status;
  if (paymentStatus) query.paymentStatus = paymentStatus;

  const orders = await OrderModel.find(query)
    .skip((page - 1) * limit)
    .limit(limit)
    .sort({ orderDate: -1 });

  const totalOrders = await OrderModel.countDocuments(query);

  return { orders, page, limit, totalOrders, totalPages: Math.ceil(totalOrders / limit) };
};

// Get single order by ID
const getOrderById = async (id: string) => {
  return await OrderModel.findById(id);
};

// Get order by phone
const getOrderByPhone = async (phone: string) => {
  return await OrderModel.find({ phone }).sort({ orderDate: -1 });
};

// Update order
const updateOrder = async (id: string, data: Partial<IOrder>) => {
  return await OrderModel.findByIdAndUpdate(id, data, { new: true });
};

// Delete order
const deleteOrder = async (id: string) => {
  return await OrderModel.findByIdAndDelete(id);
};

export const OrderService = {
  createOrder,
  getAllOrders,
  getOrderById,
  getOrderByPhone,
  updateOrder,
  deleteOrder,
};
