import express from 'express';
import {
    createFAQ,
    getFAQs,
    getAllFAQs,
    getFAQ,
    updateFAQ,
    toggleFAQ,
    deleteFAQ
} from '../controllers/faqController.js';
import { authenticate, authorize } from '../middlewares/auth.js';

const router = express.Router();

// Public routes
router.get('/', getFAQs);                  // Get active FAQs
router.get('/:id', getFAQ);                // Get single FAQ (if active)

// Admin only routes
router.post('/', authenticate, authorize('admin'), createFAQ);               // Create FAQ
router.get('/all', authenticate, authorize('admin'), getAllFAQs);            // Get all FAQs (admin)
router.put('/:id', authenticate, authorize('admin'), updateFAQ);             // Update FAQ
router.patch('/:id/toggle', authenticate, authorize('admin'), toggleFAQ);    // Toggle FAQ active status
router.delete('/:id', authenticate, authorize('admin'), deleteFAQ);          // Delete FAQ

export default router;
