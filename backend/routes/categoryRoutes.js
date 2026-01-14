import express from 'express';
import {
    createCategory,
    getCategories,
    getAllCategories,
    getCategory,
    updateCategory,
    toggleCategory,
    deleteCategory
} from '../controllers/categoryController.js';
import { authenticate, authorize } from '../middlewares/auth.js';

const router = express.Router();

// Public routes
router.get('/', getCategories);              // Get active categories
router.get('/:id', getCategory);             // Get single category

// Admin only routes
router.post('/', authenticate, authorize('admin'), createCategory);       // Create category
router.get('/admin/all', authenticate, authorize('admin'), getAllCategories); // Get all categories
router.put('/:id', authenticate, authorize('admin'), updateCategory);     // Update category
router.patch('/:id/toggle', authenticate, authorize('admin'), toggleCategory); // Toggle status
router.delete('/:id', authenticate, authorize('admin'), deleteCategory);  // Delete category

export default router;
