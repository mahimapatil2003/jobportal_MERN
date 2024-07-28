// backend/utils/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected Sucessfully`);
    } catch (error) {
        console.error(error); 
    }
};

export default connectDB;
