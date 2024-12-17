require('dotenv').config();
const mongoose = require('mongoose');
const { initializeEntityCollection } = require('../models/Entity');
const { initializeEntityTypeCollection } = require('../models/EntityType');

const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT;
const NAME = process.env.DB_NAME;
//db uri
//const uri = 'mongodb://'+ HOST +':'+PORT+'/'+NAME;
const uri=process.env.DB_cluster_uri;

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
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