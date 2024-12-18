require('dotenv').config();
const mongoose = require('mongoose');
const { initializeEntityCollection } = require('../models/Entity');
const { initializeEntityTypeCollection } = require('../models/EntityType');

const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT;
const NAME = process.env.DB_NAME;
const MONGODB_URI = process.env.MONGODB_URI;
//db uri
//const uri = 'mongodb://'+ HOST +':'+PORT+'/'+NAME;
const uri= MONGODB_URI +'/'+ NAME +'?retryWrites=true&w=majority';
console.log("uri------------------- :: "+uri);
const connectDB = async () => {
    try {        
        const options = {
            useNewUrlParser: true, // Avoid deprecation warning
            useUnifiedTopology: true, // Avoid deprecation warning
            autoIndex: true, // We want indexes to be build
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 300000, // Close sockets after 5 minutes of inactivity
        };
        await mongoose.connect(uri, options);
        //initialize collection
        await initializeEntityCollection();
        await initializeEntityTypeCollection();
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        throw err; // Rethrow the error for handling in the caller
    }
};

module.exports = { connectDB };