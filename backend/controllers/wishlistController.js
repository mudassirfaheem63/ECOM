import { Wishlist, Product } from '../models/database.js';

// Get user's wishlist
export const getWishlist = async (req, res) => {
    try {
        let wishlist = await Wishlist.findOne({ user: req.user._id }).populate({
            path: 'products',
            match: { isActive: true },
            populate: {
                path: 'category',
                select: 'name slug'
            }
        });

        if (!wishlist) {
            wishlist = await Wishlist.create({ user: req.user._id, products: [] });
        }

        // Filter out null products (inactive ones that were populated as null)
        const activeProducts = wishlist.products.filter(product => product !== null);

        res.json({
            user: req.user._id,
            products: activeProducts,
            count: activeProducts.length
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Add product to wishlist
export const addToWishlist = async (req, res) => {
    try {
        const { productId } = req.body;

        if (!productId) {
            return res.status(400).json({ message: 'Product ID is required' });
        }

        // Check if product exists and is active
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        if (!product.isActive) {
            return res.status(400).json({ message: 'Product is not available' });
        }

        // Find or create wishlist
        let wishlist = await Wishlist.findOne({ user: req.user._id });

        if (!wishlist) {
            wishlist = new Wishlist({ user: req.user._id, products: [] });
        }

        // Check if product already in wishlist
        const productExists = wishlist.products.some(id => id.toString() === productId);

        if (productExists) {
            return res.status(400).json({ message: 'Product already in wishlist' });
        }

        // Add product to wishlist
        wishlist.products.push(productId);
        await wishlist.save();

        // Populate the added product
        await wishlist.populate({
            path: 'products',
            populate: {
                path: 'category',
                select: 'name slug'
            }
        });

        const addedProduct = wishlist.products.find(p => p._id.toString() === productId);

        res.json({
            message: 'Product added to wishlist',
            product: addedProduct
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Remove product from wishlist
export const removeFromWishlist = async (req, res) => {
    try {
        const { productId } = req.params;

        const wishlist = await Wishlist.findOne({ user: req.user._id });

        if (!wishlist) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }

        // Check if product exists in wishlist
        const productIndex = wishlist.products.findIndex(id => id.toString() === productId);

        if (productIndex === -1) {
            return res.status(404).json({ message: 'Product not found in wishlist' });
        }

        // Remove product from wishlist
        wishlist.products.splice(productIndex, 1);
        await wishlist.save();

        res.json({ message: 'Product removed from wishlist' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Clear user's wishlist
export const clearWishlist = async (req, res) => {
    try {
        const wishlist = await Wishlist.findOneAndUpdate(
            { user: req.user._id },
            { products: [] },
            { new: true }
        );

        if (!wishlist) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }

        res.json({ message: 'Wishlist cleared successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Check if product is in wishlist
export const checkInWishlist = async (req, res) => {
    try {
        const { productId } = req.params;

        const wishlist = await Wishlist.findOne({ user: req.user._id });

        if (!wishlist) {
            return res.json({ inWishlist: false });
        }

        const inWishlist = wishlist.products.some(id => id.toString() === productId);

        res.json({ inWishlist });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
