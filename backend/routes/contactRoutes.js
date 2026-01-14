import express from 'express';
import {
    createContact,
    getContacts,
    getContact,
    updateContact,
    deleteContact
} from '../controllers/contactController.js';
import { authenticate, authorize } from '../middlewares/auth.js';

const router = express.Router();

// Public routes
router.post('/', createContact);           // Create contact message

// Admin only routes
router.get('/', authenticate, authorize('admin'), getContacts);              // Get all contact messages
router.get('/:id', authenticate, authorize('admin'), getContact);            // Get single contact message
router.put('/:id', authenticate, authorize('admin'), updateContact);         // Update contact (mark resolved)
router.delete('/:id', authenticate, authorize('admin'), deleteContact);      // Delete contact message

export default router;
