const mongoose = require("mongoose");
const config = require("config");
const debug = require("debug")("development:mongoose");

// Use environment variable MONGO_URI or fallback to config
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/nextbuy";
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

module.exports = mongoose;
