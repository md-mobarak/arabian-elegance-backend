"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const orderModel_1 = __importDefault(require("./orderModel"));
// Create a new order
const createOrder = async (data) => {
    return await orderModel_1.default.create(data);
};
// Get all orders with search, filter, and pagination
const getAllOrders = async (page, limit, search, status, paymentStatus) => {
    const query = {};
    if (search) {
        query.$or = [
            { name: { $regex: search, $options: "i" } },
            { email: { $regex: search, $options: "i" } },
            { phone: { $regex: search, $options: "i" } },
        ];
    }
    if (status)
        query.status = status;
    if (paymentStatus)
        query.paymentStatus = paymentStatus;
    const orders = await orderModel_1.default.find(query)
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ orderDate: -1 });
    const totalOrders = await orderModel_1.default.countDocuments(query);
    return { orders, page, limit, totalOrders, totalPages: Math.ceil(totalOrders / limit) };
};
// Get single order by ID
const getOrderById = async (id) => {
    return await orderModel_1.default.findById(id);
};
// Get order by phone
const getOrderByPhone = async (phone) => {
    return await orderModel_1.default.find({ phone }).sort({ orderDate: -1 });
};
// Update order
const updateOrder = async (id, data) => {
    return await orderModel_1.default.findByIdAndUpdate(id, data, { new: true });
};
// Delete order
const deleteOrder = async (id) => {
    return await orderModel_1.default.findByIdAndDelete(id);
};
exports.OrderService = {
    createOrder,
    getAllOrders,
    getOrderById,
    getOrderByPhone,
    updateOrder,
    deleteOrder,
};
