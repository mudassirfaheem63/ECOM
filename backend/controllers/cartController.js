import { Cart, Product } from '../models/database.js';

// Get user's cart
export const getCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({ user: req.user._id }).populate({
            path: 'items.product',
            match: { isActive: true },
            populate: {
                path: 'category',
                select: 'name slug'
            }
        });

        if (!cart) {
            cart = await Cart.create({ user: req.user._id, items: [] });
        }

        // Filter out null products (inactive ones that were populated as null)
        // and calculate totals
        const validItems = [];
        let totalItems = 0;
        let totalPrice = 0;

        for (const item of cart.items) {
            if (item.product) { // Product exists and is active
                const itemTotal = item.product.price * item.quantity;
                validItems.push({
                    product: item.product,
                    quantity: item.quantity,
                    price: item.product.price,
                    total: itemTotal
                });
                totalItems += item.quantity;
                totalPrice += itemTotal;
            }
        }

        // Update cart to remove invalid items
        if (validItems.length !== cart.items.length) {
            cart.items = cart.items.filter(item => item.product && item.product.isActive);
            await cart.save();
        }

        res.json({
            user: req.user._id,
            items: validItems,
            summary: {
                totalItems,
                totalPrice,
                itemCount: validItems.length
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Add item to cart
export const addToCart = async (req, res) => {
    try {
        const { productId, quantity = 1 } = req.body;

        if (!productId) {
            return res.status(400).json({ message: 'Product ID is required' });
        }

        if (quantity < 1) {
            return res.status(400).json({ message: 'Quantity must be at least 1' });
        }

        // Check if product exists and is active
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        if (!product.isActive) {
            return res.status(400).json({ message: 'Product is not available' });
        }

        if (product.stock < quantity) {
            return res.status(400).json({
                message: `Insufficient stock. Available: ${product.stock}`
            });
        }

        // Find or create cart
        let cart = await Cart.findOne({ user: req.user._id });

        if (!cart) {
            cart = new Cart({ user: req.user._id, items: [] });
        }

        // Check if product already in cart
        const existingItemIndex = cart.items.findIndex(
            item => item.product.toString() === productId
        );

        if (existingItemIndex > -1) {
            // Update quantity
            const newQuantity = cart.items[existingItemIndex].quantity + quantity;

            if (product.stock < newQuantity) {
                return res.status(400).json({
                    message: `Cannot add ${quantity} more. Total would exceed stock (${product.stock})`
                });
            }

            cart.items[existingItemIndex].quantity = newQuantity;
        } else {
            // Add new item
            cart.items.push({
                product: productId,
                quantity
            });
        }

        await cart.save();
        await cart.populate({
            path: 'items.product',
            populate: {
                path: 'category',
                select: 'name slug'
            }
        });

        res.json({
            message: 'Item added to cart successfully',
            cart: {
                user: cart.user,
                items: cart.items.map(item => ({
                    product: item.product,
                    quantity: item.quantity,
                    price: item.product.price,
                    total: item.product.price * item.quantity
                })),
                itemCount: cart.items.length
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Update item quantity in cart
export const updateCartItem = async (req, res) => {
    try {
        const { productId, quantity } = req.body;

        if (!productId) {
            return res.status(400).json({ message: 'Product ID is required' });
        }

        if (quantity < 1) {
            return res.status(400).json({ message: 'Quantity must be at least 1' });
        }

        const cart = await Cart.findOne({ user: req.user._id });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Find item in cart
        const itemIndex = cart.items.findIndex(
            item => item.product.toString() === productId
        );

        if (itemIndex === -1) {
            return res.status(404).json({ message: 'Product not found in cart' });
        }

        // Check product stock
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        if (product.stock < quantity) {
            return res.status(400).json({
                message: `Insufficient stock. Available: ${product.stock}`
            });
        }

        // Update quantity
        cart.items[itemIndex].quantity = quantity;
        await cart.save();

        await cart.populate({
            path: 'items.product',
            populate: {
                path: 'category',
                select: 'name slug'
            }
        });

        res.json({
            message: 'Cart item updated successfully',
            cart: {
                user: cart.user,
                items: cart.items.map(item => ({
                    product: item.product,
                    quantity: item.quantity,
                    price: item.product.price,
                    total: item.product.price * item.quantity
                })),
                itemCount: cart.items.length
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Remove item from cart
export const removeFromCart = async (req, res) => {
    try {
        const { productId } = req.params;

        const cart = await Cart.findOne({ user: req.user._id });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Find and remove item
        const itemIndex = cart.items.findIndex(
            item => item.product.toString() === productId
        );

        if (itemIndex === -1) {
            return res.status(404).json({ message: 'Product not found in cart' });
        }

        cart.items.splice(itemIndex, 1);
        await cart.save();

        res.json({ message: 'Item removed from cart successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Clear cart
export const clearCart = async (req, res) => {
    try {
        const cart = await Cart.findOneAndUpdate(
            { user: req.user._id },
            { items: [] },
            { new: true }
        );

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        res.json({ message: 'Cart cleared successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get cart summary (for checkout)
export const getCartSummary = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user._id }).populate({
            path: 'items.product',
            match: { isActive: true }
        });

        if (!cart || cart.items.length === 0) {
            return res.json({
                items: [],
                summary: {
                    totalItems: 0,
                    totalPrice: 0,
                    itemCount: 0
                }
            });
        }

        // Filter valid items and calculate totals
        const validItems = [];
        let totalItems = 0;
        let totalPrice = 0;

        for (const item of cart.items) {
            if (item.product) {
                validItems.push({
                    product: item.product._id,
                    title: item.product.title,
                    price: item.product.price,
                    quantity: item.quantity,
                    total: item.product.price * item.quantity
                });
                totalItems += item.quantity;
                totalPrice += item.product.price * item.quantity;
            }
        }

        res.json({
            items: validItems,
            summary: {
                totalItems,
                totalPrice,
                itemCount: validItems.length
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
