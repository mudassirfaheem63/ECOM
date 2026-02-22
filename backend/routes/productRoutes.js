import express from 'express';
import {
    createProduct,
    getProducts,
    getAllProducts,
    getProduct,
    updateProduct,
    toggleProduct,
    deleteProduct,
    getProductsByCategory
} from '../controllers/productController.js';
import { authenticate, authorize } from '../middlewares/auth.js';
import { uploadProductImages } from '../helpers/uploadHelper.js';

const router = express.Router();

// ============================================
// IMPORTANT: Specific routes BEFORE parameterized routes!
// ============================================

// Public routes - NON-parameterized first
router.get('/', getProducts);                // Get products with filtering/pagination

// Admin only routes - Specific paths BEFORE /:id
router.post('/', authenticate, authorize('admin'), uploadProductImages, createProduct);        // Create product
router.get('/all', authenticate, authorize('admin'), getAllProducts); // Get all products - ✅ BEFORE /:id

// Specific routes BEFORE /:id
router.get('/category/:categoryId', getProductsByCategory); // Get products by category - ✅ BEFORE /:id

// Admin routes with :id parameter
router.patch('/:id/toggle', authenticate, authorize('admin'), toggleProduct); // Toggle status
router.put('/:id', authenticate, authorize('admin'), uploadProductImages, updateProduct);      // Update product
router.delete('/:id', authenticate, authorize('admin'), deleteProduct);   // Delete product

// Parameterized routes LAST
router.get('/:id', getProduct);              // Get single product - ✅ MUST BE LAST

export default router;