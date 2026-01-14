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

router.get('/', getWishlist);                      // Get user's wishlist
router.post('/', addToWishlist);                   // Add product to wishlist
router.delete('/:productId', removeFromWishlist); // Remove product from wishlist
router.delete('/', clearWishlist);                 // Clear entire wishlist
router.get('/check/:productId', checkInWishlist); // Check if product is in wishlist

export default router;
