import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    description: { type: String, required: true },
    tags: [{ type: String }],
    availableLinks: {
        googleShopping: String,
        amazon: String,
        myntra: String,
        flipkart: String
    },
    isPinned: { type: Boolean, default: false }, // 📌 Added this property
    createdAt: { type: Date, default: Date.now }
});

export const Product = mongoose.model('Product', productSchema);