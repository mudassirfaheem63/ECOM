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

const router = express.Router();

// Public routes
router.get('/', getProducts);                // Get products with filtering/pagination
router.get('/category/:categoryId', getProductsByCategory); // Get products by category
router.get('/:id', getProduct);              // Get single product

// Admin only routes
router.post('/', authenticate, authorize('admin'), createProduct);        // Create product
router.get('/admin/all', authenticate, authorize('admin'), getAllProducts); // Get all products
router.put('/:id', authenticate, authorize('admin'), updateProduct);      // Update product
router.patch('/:id/toggle', authenticate, authorize('admin'), toggleProduct); // Toggle status
router.delete('/:id', authenticate, authorize('admin'), deleteProduct);   // Delete product

export default router;
