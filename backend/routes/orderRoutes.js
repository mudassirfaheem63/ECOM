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

// User routes
router.post('/', createOrder);                  // Create new order
router.get('/my-orders', getUserOrders);        // Get user's orders
router.get('/:id', getOrder);                   // Get single order
router.put('/:id/cancel', cancelOrder);         // Cancel order (user)

// Admin routes
router.get('/admin/all', authorize('admin'), getAllOrders);       // Get all orders
router.put('/:id/status', authorize('admin'), updateOrderStatus); // Update order status

export default router;
