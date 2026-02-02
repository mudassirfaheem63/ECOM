# Database Seeder

This directory contains scripts to seed your MongoDB database with sample data for the ECOM application.

## 🚀 Quick Start

### Prerequisites
- MongoDB must be running and accessible
- Node.js environment set up

### Usage

#### Seed the Database
```bash
# Using npm script (recommended)
npm run seed

# Or run directly
node Seeder/runSeeder.js
```

#### Clear Database Only
```bash
# Using npm script
npm run seed:clear

# Or run directly
node Seeder/runSeeder.js clear
```

## 📊 What Gets Seeded

### Users (4 total)
- **1 Admin User**: `admin@example.com` / `admin123`
- **3 Regular Users**: `john@example.com`, `jane@example.com`, `bob@example.com`
- All passwords are hashed using bcrypt

### Categories (5 total)
- Electronics
- Clothing  
- Home & Garden
- Sports & Outdoors
- Beauty & Personal Care

### Products (8 total)
- Wireless Bluetooth Headphones
- Smartphone Case
- Men's Casual T-Shirt
- Women's Running Shoes
- Garden Hose
- Yoga Mat
- Face Moisturizer
- LED Desk Lamp

### Additional Data
- **3 Contact inquiries** from customers
- **6 FAQ entries** with common questions
- **Sample Orders** for each user (with random statuses)
- **Sample Wishlists** for each user
- **Sample Carts** for each user

## 🔧 Configuration

### MongoDB Connection
The seeder uses the following connection priority:
1. `MONGODB_URI` environment variable
2. Default: `mongodb://localhost:27017/ecom`

To use a custom MongoDB URI, set the environment variable:
```bash
export MONGODB_URI="your-mongodb-connection-string"
npm run seed
```

## 📁 Files Structure

```
backend/Seeder/
├── Database.js          # Core seeding logic and sample data
├── runSeeder.js         # Standalone script with MongoDB connection
└── README.md           # This documentation file
```

## ⚠️ Important Notes

- **Data Clearing**: The seeder will clear existing data before seeding (by default)
- **Password Security**: All user passwords are automatically hashed
- **Relationships**: All model relationships are properly established
- **Error Handling**: Comprehensive error handling with detailed logging

## 🐛 Troubleshooting

### MongoDB Connection Issues
```
❌ MongoDB connection failed: [error message]
```
**Solution**: Ensure MongoDB is running and accessible at the specified URI.

### Permission Issues
```
❌ Error seeding database: EACCES: permission denied
```
**Solution**: Check file permissions and ensure you have write access to the database.

### Missing Dependencies
```
❌ Cannot find module 'bcrypt'
```
**Solution**: Run `npm install` in the backend directory to install all dependencies.

## 🔄 Development Workflow

1. **Clear existing data**: `npm run seed:clear`
2. **Seed with fresh data**: `npm run seed`
3. **Verify data**: Check your MongoDB collections
4. **Start your application**: `npm run dev`

## 📝 Customization

To modify the sample data:
1. Edit the arrays in `Database.js` (e.g., `sampleUsers`, `sampleProducts`)
2. Adjust the seeding logic as needed
3. Run the seeder again to apply changes

To add new models:
1. Import the new model in `Database.js`
2. Add sample data arrays
3. Create seeding functions
4. Update the main `seedDatabase()` function