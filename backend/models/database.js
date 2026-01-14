

import mongoose from 'mongoose';

/* =========================
   USER SCHEMA
========================= */
const userSchema = new mongoose.Schema(
    {
        name: String,
        email: { type: String, unique: true },
        password: String,
        role: { type: String, enum: ["user", "admin"], default: "user" },
        phone: String,
        address: String,
        isBlocked: { type: Boolean, default: false },
    },
    { timestamps: true }
);
const User = mongoose.model("User", userSchema);

/* =========================
   CATEGORY SCHEMA
========================= */
const categorySchema = new mongoose.Schema(
    {
        name: String,
        slug: String,
        isActive: { type: Boolean, default: true },
    },
    { timestamps: true }
);
const Category = mongoose.model("Category", categorySchema);

/* =========================
   PRODUCT SCHEMA
========================= */
const productSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        price: Number,
        stock: Number,
        images: [String],
        category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
        isActive: { type: Boolean, default: true },
    },
    { timestamps: true }
);
const Product = mongoose.model("Product", productSchema);

/* =========================
   WISHLIST SCHEMA
========================= */
const wishlistSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    },
    { timestamps: true }
);
const Wishlist = mongoose.model("Wishlist", wishlistSchema);

/* =========================
   CART SCHEMA
========================= */
const cartSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        items: [
            {
                product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
                quantity: { type: Number, default: 1 },
            },
        ],
    },
    { timestamps: true }
);
const Cart = mongoose.model("Cart", cartSchema);

/* =========================
   ORDER SCHEMA
========================= */
const orderSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        items: [
            {
                product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
                quantity: Number,
                price: Number,
            },
        ],
        totalAmount: Number,
        status: {
            type: String,
            enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"],
            default: "pending",
        },
        paymentMethod: String,
    },
    { timestamps: true }
);
const Order = mongoose.model("Order", orderSchema);

/* =========================
   CONTACT US SCHEMA
========================= */
const contactSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        message: String,
        isResolved: { type: Boolean, default: false },
    },
    { timestamps: true }
);
const Contact = mongoose.model("Contact", contactSchema);

/* =========================
   FAQ SCHEMA
========================= */
const faqSchema = new mongoose.Schema(
    {
        question: String,
        answer: String,
        isActive: { type: Boolean, default: true },
    },
    { timestamps: true }
);
const FAQ = mongoose.model("FAQ", faqSchema);

/* =========================
   MODELS EXPORT
========================= */
export {
    User,
    Category,
    Product,
    Wishlist,
    Cart,
    Order,
    Contact,
    FAQ
};