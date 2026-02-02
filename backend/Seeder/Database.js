import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { User, Category, Product, Wishlist, Cart, Order, Contact, FAQ } from '../models/database.js';

// Sample data for seeding
const sampleUsers = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: "admin123",
        role: "admin",
        phone: "+1234567890",
        address: "123 Admin Street, Admin City, AC 12345"
    },
    {
        name: "John Doe",
        email: "john@example.com",
        password: "user123",
        role: "user",
        phone: "+1234567891",
        address: "456 User Avenue, User City, UC 67890"
    },
    {
        name: "Jane Smith",
        email: "jane@example.com",
        password: "user123",
        role: "user",
        phone: "+1234567892",
        address: "789 Customer Lane, Customer City, CC 11111"
    },
    {
        name: "Bob Johnson",
        email: "bob@example.com",
        password: "user123",
        role: "user",
        phone: "+1234567893",
        address: "321 Client Road, Client City, CL 22222"
    }
];

const sampleCategories = [
    { name: "Electronics", slug: "electronics" },
    { name: "Clothing", slug: "clothing" },
    { name: "Home & Garden", slug: "home-garden" },
    { name: "Sports & Outdoors", slug: "sports-outdoors" },
    { name: "Beauty & Personal Care", slug: "beauty-personal-care" }
];

const sampleProducts = [
    {
        title: "Wireless Bluetooth Headphones",
        description: "High-quality wireless headphones with noise cancellation and long battery life.",
        price: 99.99,
        stock: 50,
        images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"],
        category: null // Will be set after categories are created
    },
    {
        title: "Smartphone Case",
        description: "Durable protective case for your smartphone with stylish design.",
        price: 19.99,
        stock: 100,
        images: ["https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"],
        category: null
    },
    {
        title: "Men's Casual T-Shirt",
        description: "Comfortable cotton t-shirt perfect for everyday wear.",
        price: 24.99,
        stock: 75,
        images: ["https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500"],
        category: null
    },
    {
        title: "Women's Running Shoes",
        description: "Lightweight running shoes with excellent support and comfort.",
        price: 79.99,
        stock: 40,
        images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"],
        category: null
    },
    {
        title: "Garden Hose",
        description: "Flexible and durable garden hose for all your watering needs.",
        price: 34.99,
        stock: 30,
        images: ["https://images.unsplash.com/photo-1580910051074-3eb604433990?w=500"],
        category: null
    },
    {
        title: "Yoga Mat",
        description: "Non-slip yoga mat with excellent cushioning for your practice.",
        price: 29.99,
        stock: 60,
        images: ["https://images.unsplash.com/photo-1549291981-56d444036d83?w=500"],
        category: null
    },
    {
        title: "Face Moisturizer",
        description: "Hydrating face cream with natural ingredients for all skin types.",
        price: 39.99,
        stock: 80,
        images: ["https://images.unsplash.com/photo-1556228453-efd39c30850b?w=500"],
        category: null
    },
    {
        title: "LED Desk Lamp",
        description: "Adjustable LED desk lamp with multiple brightness settings.",
        price: 45.99,
        stock: 45,
        images: ["https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500"],
        category: null
    }
];

const sampleContacts = [
    {
        name: "Alice Brown",
        email: "alice@example.com",
        message: "I have a question about my recent order #12345. The delivery seems to be delayed."
    },
    {
        name: "Charlie Wilson",
        email: "charlie@example.com",
        message: "I would like to know more about your return policy for electronic items."
    },
    {
        name: "Diana Davis",
        email: "diana@example.com",
        message: "I received a damaged product and would like to request a replacement."
    }
];

const sampleFAQs = [
    {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy for most items. Items must be in their original condition with all packaging included."
    },
    {
        question: "How long does shipping take?",
        answer: "Standard shipping typically takes 3-5 business days within the country. International shipping may take 7-14 business days."
    },
    {
        question: "Do you offer international shipping?",
        answer: "Yes, we ship to most countries worldwide. Shipping rates and delivery times vary by destination."
    },
    {
        question: "How can I track my order?",
        answer: "Once your order ships, you will receive a tracking number via email. You can use this number to track your package on our website or through the carrier's tracking system."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay for online purchases."
    },
    {
        question: "Can I cancel my order?",
        answer: "Orders can be cancelled within 2 hours of placement, provided they haven't been processed yet. Please contact our customer service team to request a cancellation."
    }
];

// Function to seed the database
async function seedDatabase() {
    try {
        console.log('Starting database seeding...');
        
        // Clear existing data (optional - comment out if you want to keep existing data)
        await User.deleteMany({});
        await Category.deleteMany({});
        await Product.deleteMany({});
        await Wishlist.deleteMany({});
        await Cart.deleteMany({});
        await Order.deleteMany({});
        await Contact.deleteMany({});
        await FAQ.deleteMany({});
        
        console.log('Cleared existing data');

        // Create users
        const users = [];
        for (const userData of sampleUsers) {
            const hashedPassword = await bcrypt.hash(userData.password, 10);
            const user = new User({
                ...userData,
                password: hashedPassword
            });
            await user.save();
            users.push(user);
            console.log(`Created user: ${user.name} (${user.email})`);
        }

        // Create categories
        const categories = [];
        for (const categoryData of sampleCategories) {
            const category = new Category(categoryData);
            await category.save();
            categories.push(category);
            console.log(`Created category: ${category.name}`);
        }

        // Create products
        const products = [];
        for (const productData of sampleProducts) {
            // Assign random categories to products
            const randomCategory = categories[Math.floor(Math.random() * categories.length)];
            const product = new Product({
                ...productData,
                category: randomCategory._id
            });
            await product.save();
            products.push(product);
            console.log(`Created product: ${product.title}`);
        }

        // Create contacts
        for (const contactData of sampleContacts) {
            const contact = new Contact(contactData);
            await contact.save();
            console.log(`Created contact: ${contact.name}`);
        }

        // Create FAQs
        for (const faqData of sampleFAQs) {
            const faq = new FAQ(faqData);
            await faq.save();
            console.log(`Created FAQ: ${faq.question}`);
        }

        // Create sample orders for users
        const adminUser = users.find(u => u.role === 'admin');
        const regularUsers = users.filter(u => u.role === 'user');
        
        for (let i = 0; i < regularUsers.length; i++) {
            const user = regularUsers[i];
            const randomProducts = products.slice(0, 3); // Take first 3 products for simplicity
            
            const orderItems = randomProducts.map(product => ({
                product: product._id,
                quantity: Math.floor(Math.random() * 3) + 1, // 1-3 items
                price: product.price
            }));

            const totalAmount = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

            const order = new Order({
                user: user._id,
                items: orderItems,
                totalAmount: totalAmount,
                status: ['pending', 'confirmed', 'shipped', 'delivered'][Math.floor(Math.random() * 4)],
                paymentMethod: ['Credit Card', 'PayPal', 'Cash on Delivery'][Math.floor(Math.random() * 3)]
            });

            await order.save();
            console.log(`Created order for user ${user.name} - Total: $${totalAmount}`);
        }

        // Create sample wishlist for users
        for (let i = 0; i < regularUsers.length; i++) {
            const user = regularUsers[i];
            const wishlistProducts = products.slice(i * 2, i * 2 + 2); // Each user gets 2 products in wishlist
            
            const wishlist = new Wishlist({
                user: user._id,
                products: wishlistProducts.map(p => p._id)
            });

            await wishlist.save();
            console.log(`Created wishlist for user ${user.name} with ${wishlistProducts.length} products`);
        }

        // Create sample cart for users
        for (let i = 0; i < regularUsers.length; i++) {
            const user = regularUsers[i];
            const cartProducts = products.slice(i, i + 1); // Each user gets 1 product in cart
            
            const cartItems = cartProducts.map(product => ({
                product: product._id,
                quantity: Math.floor(Math.random() * 2) + 1 // 1-2 items
            }));

            const cart = new Cart({
                user: user._id,
                items: cartItems
            });

            await cart.save();
            console.log(`Created cart for user ${user.name} with ${cartItems.length} items`);
        }

        console.log('\n✅ Database seeding completed successfully!');
        console.log(`📊 Summary:`);
        console.log(`   - Users created: ${users.length}`);
        console.log(`   - Categories created: ${categories.length}`);
        console.log(`   - Products created: ${products.length}`);
        console.log(`   - Orders created: ${regularUsers.length}`);
        console.log(`   - Wishlists created: ${regularUsers.length}`);
        console.log(`   - Carts created: ${regularUsers.length}`);
        console.log(`   - Contacts created: ${sampleContacts.length}`);
        console.log(`   - FAQs created: ${sampleFAQs.length}`);

    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
}

// Function to clear the database
async function clearDatabase() {
    try {
        console.log('Clearing database...');
        
        await User.deleteMany({});
        await Category.deleteMany({});
        await Product.deleteMany({});
        await Wishlist.deleteMany({});
        await Cart.deleteMany({});
        await Order.deleteMany({});
        await Contact.deleteMany({});
        await FAQ.deleteMany({});
        
        console.log('✅ Database cleared successfully!');
    } catch (error) {
        console.error('❌ Error clearing database:', error);
        process.exit(1);
    }
}

// Export functions
export { seedDatabase, clearDatabase };

// Run seeding if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
    // Check if MongoDB is connected
    if (mongoose.connection.readyState === 0) {
        console.log('Please connect to MongoDB first before running the seeder.');
        process.exit(1);
    }
    
    const action = process.argv[2];
    
    if (action === 'clear') {
        clearDatabase();
    } else {
        seedDatabase();
    }
}