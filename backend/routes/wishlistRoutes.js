import express from 'express';
import {
    getWishlist,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
    checkInWishlist
} from '../controllers/wishlistController.js';
import { authenticate } from '../middlewares/auth.js';

const router = express.Router();

// All wishlist routes require authentication
router.use(authenticate);

// ============================================
// IMPORTANT: Specific routes BEFORE parameterized routes!
// ============================================

// Non-parameterized routes FIRST
router.get('/', getWishlist);                      // Get user's wishlist
router.post('/', addToWishlist);                   // Add product to wishlist
router.delete('/', clearWishlist);                 // Clear entire wishlist (DELETE without params)

// Specific parameterized routes BEFORE generic ones
router.get('/check/:productId', checkInWishlist); // Check if product is in wishlist - ✅ BEFORE /:productId

// Generic parameterized routes LAST
router.delete('/:productId', removeFromWishlist); // Remove product from wishlist - ✅ MUST BE LAST

export default router;