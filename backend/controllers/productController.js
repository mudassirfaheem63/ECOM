import { Product, Category } from '../models/database.js';

// Create a new product
export const createProduct = async (req, res) => {
    try {
        const { title, description, price, stock, images, category } = req.body;

        if (!title || !price || stock === undefined) {
            return res.status(400).json({ message: 'Title, price, and stock are required' });
        }

        if (price < 0 || stock < 0) {
            return res.status(400).json({ message: 'Price and stock must be non-negative' });
        }

        // Verify category exists if provided
        if (category) {
            const categoryExists = await Category.findById(category);
            if (!categoryExists) {
                return res.status(400).json({ message: 'Invalid category' });
            }
        }

        const product = new Product({
            title,
            description,
            price,
            stock,
            images: images || [],
            category
        });

        await product.save();

        // Populate category info
        await product.populate('category', 'name slug');

        res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all products with filtering and pagination
export const getProducts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const filter = { isActive: true };

        // Add category filter if provided
        if (req.query.category) {
            filter.category = req.query.category;
        }

        // Add price range filter
        if (req.query.minPrice) {
            filter.price = { ...filter.price, $gte: parseFloat(req.query.minPrice) };
        }
        if (req.query.maxPrice) {
            filter.price = { ...filter.price, $lte: parseFloat(req.query.maxPrice) };
        }

        // Add search filter
        if (req.query.search) {
            filter.$or = [
                { title: { $regex: req.query.search, $options: 'i' } },
                { description: { $regex: req.query.search, $options: 'i' } }
            ];
        }

        const products = await Product.find(filter)
            .populate('category', 'name slug')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const total = await Product.countDocuments(filter);

        res.json({
            products,
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

// Get all products (admin - including inactive)
export const getAllProducts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const products = await Product.find()
            .populate('category', 'name slug')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const total = await Product.countDocuments();

        res.json({
            products,
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

// Get a single product
export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('category', 'name slug');
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Update product
export const updateProduct = async (req, res) => {
    try {
        const { title, description, price, stock, images, category, isActive } = req.body;

        // Validate price and stock if provided
        if (price !== undefined && price < 0) {
            return res.status(400).json({ message: 'Price must be non-negative' });
        }
        if (stock !== undefined && stock < 0) {
            return res.status(400).json({ message: 'Stock must be non-negative' });
        }

        // Verify category exists if provided
        if (category) {
            const categoryExists = await Category.findById(category);
            if (!categoryExists) {
                return res.status(400).json({ message: 'Invalid category' });
            }
        }

        const updateData = {};
        if (title !== undefined) updateData.title = title;
        if (description !== undefined) updateData.description = description;
        if (price !== undefined) updateData.price = price;
        if (stock !== undefined) updateData.stock = stock;
        if (images !== undefined) updateData.images = images;
        if (category !== undefined) updateData.category = category;
        if (isActive !== undefined) updateData.isActive = isActive;

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        ).populate('category', 'name slug');

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ message: 'Product updated successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Toggle product active status
export const toggleProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        product.isActive = !product.isActive;
        await product.save();
        await product.populate('category', 'name slug');

        res.json({ message: 'Product status updated successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Delete product
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get products by category
export const getProductsByCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const products = await Product.find({
            category: categoryId,
            isActive: true
        })
            .populate('category', 'name slug')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const total = await Product.countDocuments({
            category: categoryId,
            isActive: true
        });

        res.json({
            products,
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
