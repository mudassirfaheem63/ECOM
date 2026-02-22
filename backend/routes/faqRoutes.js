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

// ============================================
// IMPORTANT: Specific routes BEFORE parameterized routes!
// ============================================

// Public routes - NON-parameterized first
router.get('/', getFAQs);                  // Get active FAQs

// Admin only routes - Specific paths BEFORE /:id
router.post('/', authenticate, authorize('admin'), createFAQ);               // Create FAQ
router.get('/all', authenticate, authorize('admin'), getAllFAQs);            // Get all FAQs (admin) - ✅ BEFORE /:id
router.patch('/:id/toggle', authenticate, authorize('admin'), toggleFAQ);    // Toggle FAQ active status
router.put('/:id', authenticate, authorize('admin'), updateFAQ);             // Update FAQ
router.delete('/:id', authenticate, authorize('admin'), deleteFAQ);          // Delete FAQ

// Parameterized routes LAST
router.get('/:id', getFAQ);                // Get single FAQ (if active) - ✅ MUST BE LAST

export default router;