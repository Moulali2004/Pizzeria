const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect("mongodb://localhost:27017/Pizzeria")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
    })
}


module.exports = connectDB;