import express from 'express';
import {
    createOrder,
    getUserOrders,
    getOrder,
    getAllOrders,
    updateOrderStatus,
    cancelOrder
} from '../controllers/orderController.js';
import { authenticate, authorize } from '../middlewares/auth.js';

const router = express.Router();

// All order routes require authentication
router.use(authenticate);

// ============================================
// IMPORTANT: Specific routes BEFORE parameterized routes!
// ============================================

// User routes - Specific paths BEFORE /:id
router.post('/', createOrder);                  // Create new order
router.get('/my-orders', getUserOrders);        // Get user's orders - ✅ BEFORE /:id

// Admin routes - Specific paths BEFORE /:id
router.get('/all', authorize('admin'), getAllOrders);       // Get all orders - ✅ BEFORE /:id
router.put('/:id/status', authorize('admin'), updateOrderStatus); // Update order status
router.put('/:id/cancel', cancelOrder);         // Cancel order (user)

// Parameterized routes LAST
router.get('/:id', getOrder);                   // Get single order - ✅ MUST BE LAST

export default router;