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

// ============================================
// IMPORTANT: Specific routes BEFORE parameterized routes!
// ============================================

// Public routes - NON-parameterized first
router.get('/', getCategories);              // Get active categories

// Admin only routes - Specific paths BEFORE /:id
router.post('/', authenticate, authorize('admin'), createCategory);       // Create category
router.get('/all', authenticate, authorize('admin'), getAllCategories); // Get all categories - ✅ BEFORE /:id
router.patch('/:id/toggle', authenticate, authorize('admin'), toggleCategory); // Toggle status
router.put('/:id', authenticate, authorize('admin'), updateCategory);     // Update category
router.delete('/:id', authenticate, authorize('admin'), deleteCategory);  // Delete category

// Parameterized routes LAST
router.get('/:id', getCategory);             // Get single category - ✅ MUST BE LAST

export default router;