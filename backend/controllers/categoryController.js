import { Category } from '../models/database.js';

// Create a new category
export const createCategory = async (req, res) => {
    try {
        const { name, slug } = req.body;

        if (!name) {
            return res.status(400).json({ message: 'Category name is required' });
        }

        // Generate slug if not provided
        const categorySlug = slug || name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

        // Check if slug already exists
        const existingCategory = await Category.findOne({ slug: categorySlug });
        if (existingCategory) {
            return res.status(400).json({ message: 'Category with this slug already exists' });
        }

        const category = new Category({
            name,
            slug: categorySlug
        });

        await category.save();
        res.status(201).json({ message: 'Category created successfully', category });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all categories
export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find({ isActive: true }).sort({ name: 1 });
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all categories (admin - including inactive)
export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find().sort({ name: 1 });
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get a single category
export const getCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Update category
export const updateCategory = async (req, res) => {
    try {
        const { name, slug, isActive } = req.body;

        const updateData = {};
        if (name) updateData.name = name;
        if (slug) updateData.slug = slug;
        if (isActive !== undefined) updateData.isActive = isActive;

        const category = await Category.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        );

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.json({ message: 'Category updated successfully', category });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Toggle category active status
export const toggleCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        category.isActive = !category.isActive;
        await category.save();

        res.json({ message: 'Category status updated successfully', category });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Delete category
export const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
