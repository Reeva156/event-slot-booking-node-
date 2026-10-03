const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDataBase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error.message);
    }
};

module.exports = connectDataBase;