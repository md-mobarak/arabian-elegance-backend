import mongoose, { Schema, Document } from 'mongoose';
// import { IOrder } from '../../interfaces/IOrder';
// import { IOrder } from '../../interfaces/IOrder';

  
export interface IOrder extends Document {
    name: string;
    email?: string; // 👈 Made optional using '?'
    product: mongoose.Schema.Types.ObjectId;
    quantity: number;
    phone: number;
    district: string;
    thana: string;
    village: string;
    streetAddress: string;
    status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
    additionalInformation?: string;
    totalAmount: number;
    paymentStatus: 'paid' | 'unpaid';
    orderDate: Date;
    updatedAt?: Date;
}


const OrderSchema = new Schema<IOrder>(
    {
        name: { type: String, required: true,  trim: true, },
        email: { type: String, required: false,  trim: true, }, // 👈 Not required
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true,  trim: true, },
        phone: { type: Number, required: true ,  trim: true,},
        district: { type: String, required: true,  trim: true, },
        thana: { type: String, required: true ,  trim: true,},
        village: { type: String, required: true,  trim: true,},
        streetAddress: { type: String, required: true,  trim: true, },
        status: { type: String, enum: ['pending', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
        additionalInformation: { type: String, required: false,  trim: true, }, // 👈 Already optional
        totalAmount: { type: Number, required: true,  trim: true, },
        paymentStatus: { type: String, enum: ['paid', 'unpaid'], default: 'unpaid' },
        orderDate: { type: Date, default: Date.now },
        updatedAt: { type: Date }
    },
    { timestamps: true }
);

export default mongoose.model<IOrder>('Order', OrderSchema);
