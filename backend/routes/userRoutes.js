import express from 'express';
import {
    register,
    login,
    getProfile,
    updateProfile,
    changePassword,
    getUsers,
    updateUser,
    deleteUser
} from '../controllers/userController.js';
import { authenticate, authorize } from '../middlewares/auth.js';

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes (require authentication)
router.get('/profile', authenticate, getProfile);
router.put('/profile', authenticate, updateProfile);
router.put('/change-password', authenticate, changePassword);

// Admin only routes
router.get('/', authenticate, authorize('admin'), getUsers);
router.put('/:id', authenticate, authorize('admin'), updateUser);
router.delete('/:id', authenticate, authorize('admin'), deleteUser);

export default router;
