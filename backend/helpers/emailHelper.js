import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create transporter
const createTransporter = () => {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: process.env.SMTP_PORT || 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
};

// Send email function
export const sendEmail = async (to, subject, html, text = '') => {
    try {
        const transporter = createTransporter();

        const mailOptions = {
            from: `"${process.env.FROM_NAME || 'Your App'}" <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
            to,
            subject,
            html,
            text: text || html.replace(/<[^>]*>/g, '') // Strip HTML tags for text version
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Email sending failed:', error);
        return { success: false, error: error.message };
    }
};

// Email templates
export const emailTemplates = {
    // Welcome email for new users
    welcome: (userName) => ({
        subject: 'Welcome to Our Platform!',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2>Welcome ${userName}!</h2>
                <p>Thank you for joining our platform. Your account has been successfully created.</p>
                <p>You can now:</p>
                <ul>
                    <li>Browse our products</li>
                    <li>Add items to your cart and wishlist</li>
                    <li>Place orders</li>
                    <li>Track your order history</li>
                </ul>
                <p>If you have any questions, feel free to contact our support team.</p>
                <br>
                <p>Best regards,<br>The Team</p>
            </div>
        `
    }),

    // Password reset email
    passwordReset: (userName, resetToken) => ({
        subject: 'Password Reset Request',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2>Password Reset</h2>
                <p>Hello ${userName},</p>
                <p>You requested a password reset for your account. Click the link below to reset your password:</p>
                <a href="${process.env.FRONTEND_URL || 'http://localhost:3000'}/reset-password?token=${resetToken}"
                   style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px 0;">
                    Reset Password
                </a>
                <p>This link will expire in 1 hour.</p>
                <p>If you didn't request this password reset, please ignore this email.</p>
                <br>
                <p>Best regards,<br>The Team</p>
            </div>
        `
    }),

    // Order confirmation email
    orderConfirmation: (userName, orderDetails) => ({
        subject: `Order Confirmation - Order #${orderDetails.orderNumber}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2>Order Confirmation</h2>
                <p>Hello ${userName},</p>
                <p>Thank you for your order! Here are the details:</p>

                <div style="border: 1px solid #ddd; padding: 15px; margin: 15px 0;">
                    <h3>Order #${orderDetails.orderNumber}</h3>
                    <p><strong>Order Date:</strong> ${new Date(orderDetails.orderDate).toLocaleDateString()}</p>
                    <p><strong>Status:</strong> ${orderDetails.status}</p>
                    <p><strong>Payment Method:</strong> ${orderDetails.paymentMethod}</p>

                    <h4>Items:</h4>
                    ${orderDetails.items.map(item => `
                        <div style="border-bottom: 1px solid #eee; padding: 8px 0;">
                            <p><strong>${item.title}</strong></p>
                            <p>Quantity: ${item.quantity} | Price: $${item.price} | Total: $${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    `).join('')}

                    <h4 style="margin-top: 15px;"><strong>Total Amount: $${orderDetails.totalAmount}</strong></h4>
                </div>

                <p>You will receive updates on your order status via email.</p>
                <br>
                <p>Best regards,<br>The Team</p>
            </div>
        `
    }),

    // Order status update email
    orderStatusUpdate: (userName, orderNumber, newStatus) => ({
        subject: `Order Status Update - Order #${orderNumber}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2>Order Status Update</h2>
                <p>Hello ${userName},</p>
                <p>Your order #${orderNumber} status has been updated to: <strong>${newStatus}</strong></p>
                <p>You can check your order details in your account dashboard.</p>
                <br>
                <p>Best regards,<br>The Team</p>
            </div>
        `
    }),

    // Contact form response
    contactResponse: (contactName, contactEmail) => ({
        subject: 'Thank you for contacting us',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2>Thank you for contacting us!</h2>
                <p>Hello ${contactName},</p>
                <p>We have received your message and will get back to you within 24 hours.</p>
                <p>For urgent matters, please call our support line.</p>
                <br>
                <p>Best regards,<br>The Support Team</p>
            </div>
        `
    }),

    // Admin notification for new contact
    adminContactNotification: (contactData) => ({
        subject: 'New Contact Form Submission',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2>New Contact Form Submission</h2>
                <div style="border: 1px solid #ddd; padding: 15px; margin: 15px 0;">
                    <p><strong>Name:</strong> ${contactData.name}</p>
                    <p><strong>Email:</strong> ${contactData.email}</p>
                    <p><strong>Message:</strong></p>
                    <p style="background-color: #f9f9f9; padding: 10px; border-left: 4px solid #007bff;">
                        ${contactData.message}
                    </p>
                    <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
                </div>
            </div>
        `
    })
};

// Convenience functions for sending specific emails
export const sendWelcomeEmail = async (email, userName) => {
    const template = emailTemplates.welcome(userName);
    return await sendEmail(email, template.subject, template.html);
};

export const sendPasswordResetEmail = async (email, userName, resetToken) => {
    const template = emailTemplates.passwordReset(userName, resetToken);
    return await sendEmail(email, template.subject, template.html);
};

export const sendOrderConfirmationEmail = async (email, userName, orderDetails) => {
    const template = emailTemplates.orderConfirmation(userName, orderDetails);
    return await sendEmail(email, template.subject, template.html);
};

export const sendOrderStatusUpdateEmail = async (email, userName, orderNumber, newStatus) => {
    const template = emailTemplates.orderStatusUpdate(userName, orderNumber, newStatus);
    return await sendEmail(email, template.subject, template.html);
};

export const sendContactResponseEmail = async (email, name) => {
    const template = emailTemplates.contactResponse(name, email);
    return await sendEmail(email, template.subject, template.html);
};

export const sendAdminContactNotification = async (adminEmail, contactData) => {
    const template = emailTemplates.adminContactNotification(contactData);
    return await sendEmail(adminEmail, template.subject, template.html);
};
