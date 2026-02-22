import express from 'express';
import {
    getCart,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart,
    getCartSummary
} from '../controllers/cartController.js';
import { authenticate } from '../middlewares/auth.js';

const router = express.Router();

// All cart routes require authentication
router.use(authenticate);

// ============================================
// IMPORTANT: Specific routes BEFORE parameterized routes!
// ============================================

// Specific routes FIRST
router.get('/', getCart);                      // Get user's cart
router.post('/', addToCart);                   // Add item to cart
router.put('/', updateCartItem);               // Update cart item quantity
router.get('/summary', getCartSummary);        // Get cart summary for checkout - ✅ BEFORE /:productId
router.delete('/', clearCart);                 // Clear entire cart (DELETE without params)

// Parameterized routes LAST
router.delete('/:productId', removeFromCart);  // Remove item from cart - ✅ MUST BE LAST

export default router;