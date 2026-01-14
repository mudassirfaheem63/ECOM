import { FAQ } from '../models/database.js';

// Create a new FAQ
export const createFAQ = async (req, res) => {
    try {
        const { question, answer } = req.body;

        if (!question || !answer) {
            return res.status(400).json({ message: 'Question and answer are required' });
        }

        const faq = new FAQ({
            question,
            answer
        });

        await faq.save();
        res.status(201).json({ message: 'FAQ created successfully', faq });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all FAQs
export const getFAQs = async (req, res) => {
    try {
        const faqs = await FAQ.find({ isActive: true }).sort({ createdAt: -1 });
        res.json(faqs);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all FAQs (admin - including inactive)
export const getAllFAQs = async (req, res) => {
    try {
        const faqs = await FAQ.find().sort({ createdAt: -1 });
        res.json(faqs);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get a single FAQ
export const getFAQ = async (req, res) => {
    try {
        const faq = await FAQ.findById(req.params.id);
        if (!faq) {
            return res.status(404).json({ message: 'FAQ not found' });
        }

        // Check if user is authenticated and is admin
        const isAdmin = req.user && req.user.role === 'admin';

        // If FAQ is not active and user is not admin, don't show it
        if (!faq.isActive && !isAdmin) {
            return res.status(404).json({ message: 'FAQ not found' });
        }

        res.json(faq);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Update FAQ
export const updateFAQ = async (req, res) => {
    try {
        const { question, answer, isActive } = req.body;
        const faq = await FAQ.findByIdAndUpdate(
            req.params.id,
            { question, answer, isActive },
            { new: true }
        );
        if (!faq) {
            return res.status(404).json({ message: 'FAQ not found' });
        }
        res.json({ message: 'FAQ updated successfully', faq });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Toggle FAQ active status
export const toggleFAQ = async (req, res) => {
    try {
        const faq = await FAQ.findById(req.params.id);
        if (!faq) {
            return res.status(404).json({ message: 'FAQ not found' });
        }

        faq.isActive = !faq.isActive;
        await faq.save();

        res.json({ message: 'FAQ status updated successfully', faq });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Delete FAQ
export const deleteFAQ = async (req, res) => {
    try {
        const faq = await FAQ.findByIdAndDelete(req.params.id);
        if (!faq) {
            return res.status(404).json({ message: 'FAQ not found' });
        }
        res.json({ message: 'FAQ deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
