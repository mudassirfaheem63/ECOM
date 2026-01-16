import { Contact } from '../models/database.js';
import { sendContactResponseEmail, sendAdminContactNotification } from '../helpers/emailHelper.js';

// Create a new contact message
export const createContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const contact = new Contact({
            name,
            email,
            message
        });

        await contact.save();

        // Send emails (don't block response if emails fail)
        try {
            // Send auto-response to user
            await sendContactResponseEmail(email, name);

            // Send notification to admin
            await sendAdminContactNotification(
                process.env.ADMIN_EMAIL || 'admin@example.com',
                {
                    name,
                    email,
                    message
                }
            );
        } catch (emailError) {
            console.error('Contact emails failed to send:', emailError);
        }

        res.status(201).json({ message: 'Contact message sent successfully', contact });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all contact messages
export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get a single contact message
export const getContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(contact);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Update contact (mark as resolved)
export const updateContact = async (req, res) => {
    try {
        const { isResolved } = req.body;
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { isResolved },
            { new: true }
        );
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json({ message: 'Contact updated successfully', contact });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Delete a contact message
export const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
