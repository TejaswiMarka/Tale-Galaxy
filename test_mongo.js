require('dotenv').config();
const mongoose = require('mongoose');
const dns = require('dns');

dns.setServers(['8.8.8.8', '8.8.4.4']);

console.log("Connecting to:", process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL, { family: 4 })
    .then(() => {
        console.log("SUCCESS: Connected to MongoDB");
        process.exit(0);
    })
    .catch(err => {
        console.error("FAILURE: Cannot connect to MongoDB", err.message);
        process.exit(1);
    });
