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

router.get('/', getCart);                      // Get user's cart
router.post('/', addToCart);                   // Add item to cart
router.put('/', updateCartItem);               // Update cart item quantity
router.delete('/:productId', removeFromCart);  // Remove item from cart
router.delete('/', clearCart);                 // Clear entire cart
router.get('/summary', getCartSummary);        // Get cart summary for checkout

export default router;
