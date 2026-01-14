import { Order, Product, Cart } from '../models/database.js';

// Create a new order
export const createOrder = async (req, res) => {
    try {
        const { items, paymentMethod } = req.body;

        if (!items || !Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ message: 'Order must contain at least one item' });
        }

        if (!paymentMethod) {
            return res.status(400).json({ message: 'Payment method is required' });
        }

        let totalAmount = 0;
        const orderItems = [];

        // Validate items and calculate total
        for (const item of items) {
            const { product: productId, quantity } = item;

            if (!productId || !quantity || quantity < 1) {
                return res.status(400).json({ message: 'Invalid item: product and quantity are required' });
            }

            const product = await Product.findById(productId);
            if (!product) {
                return res.status(404).json({ message: `Product ${productId} not found` });
            }

            if (!product.isActive) {
                return res.status(400).json({ message: `Product ${product.title} is not available` });
            }

            if (product.stock < quantity) {
                return res.status(400).json({
                    message: `Insufficient stock for ${product.title}. Available: ${product.stock}`
                });
            }

            const itemTotal = product.price * quantity;
            totalAmount += itemTotal;

            orderItems.push({
                product: productId,
                quantity,
                price: product.price
            });
        }

        // Create order
        const order = new Order({
            user: req.user._id,
            items: orderItems,
            totalAmount,
            paymentMethod
        });

        await order.save();

        // Update product stock
        for (const item of orderItems) {
            await Product.findByIdAndUpdate(item.product, {
                $inc: { stock: -item.quantity }
            });
        }

        // Clear user's cart after successful order
        await Cart.findOneAndUpdate(
            { user: req.user._id },
            { items: [] }
        );

        // Populate order details
        await order.populate([
            {
                path: 'items.product',
                select: 'title images category',
                populate: {
                    path: 'category',
                    select: 'name'
                }
            },
            {
                path: 'user',
                select: 'name email'
            }
        ]);

        res.status(201).json({
            message: 'Order created successfully',
            order
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get user's orders
export const getUserOrders = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const orders = await Order.find({ user: req.user._id })
            .populate({
                path: 'items.product',
                select: 'title images category',
                populate: {
                    path: 'category',
                    select: 'name'
                }
            })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const total = await Order.countDocuments({ user: req.user._id });

        res.json({
            orders,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get single order
export const getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate([
            {
                path: 'items.product',
                select: 'title images category',
                populate: {
                    path: 'category',
                    select: 'name'
                }
            },
            {
                path: 'user',
                select: 'name email phone address'
            }
        ]);

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        // Check if user owns this order or is admin
        if (order.user._id.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied' });
        }

        res.json(order);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all orders (admin only)
export const getAllOrders = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const filter = {};

        // Add status filter if provided
        if (req.query.status) {
            filter.status = req.query.status;
        }

        // Add date range filter
        if (req.query.startDate) {
            filter.createdAt = { ...filter.createdAt, $gte: new Date(req.query.startDate) };
        }
        if (req.query.endDate) {
            filter.createdAt = { ...filter.createdAt, $lte: new Date(req.query.endDate) };
        }

        const orders = await Order.find(filter)
            .populate([
                {
                    path: 'items.product',
                    select: 'title images category',
                    populate: {
                        path: 'category',
                        select: 'name'
                    }
                },
                {
                    path: 'user',
                    select: 'name email phone'
                }
            ])
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const total = await Order.countDocuments(filter);

        res.json({
            orders,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Update order status (admin only)
export const updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;

        const validStatuses = ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ message: 'Invalid status' });
        }

        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        // If cancelling order, restore product stock
        if (status === 'cancelled' && order.status !== 'cancelled') {
            for (const item of order.items) {
                await Product.findByIdAndUpdate(item.product, {
                    $inc: { stock: item.quantity }
                });
            }
        }

        order.status = status;
        await order.save();

        await order.populate([
            {
                path: 'items.product',
                select: 'title images category',
                populate: {
                    path: 'category',
                    select: 'name'
                }
            },
            {
                path: 'user',
                select: 'name email'
            }
        ]);

        res.json({
            message: 'Order status updated successfully',
            order
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Cancel order (user)
export const cancelOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        // Check if user owns this order
        if (order.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Access denied' });
        }

        // Check if order can be cancelled
        if (!['pending', 'confirmed'].includes(order.status)) {
            return res.status(400).json({ message: 'Order cannot be cancelled at this stage' });
        }

        // Restore product stock
        for (const item of order.items) {
            await Product.findByIdAndUpdate(item.product, {
                $inc: { stock: item.quantity }
            });
        }

        order.status = 'cancelled';
        await order.save();

        res.json({ message: 'Order cancelled successfully', order });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
