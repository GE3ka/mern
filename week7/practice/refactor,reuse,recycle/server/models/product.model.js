const mongoose = require("mongoose");

const ProductManagerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must have at least 3 chars"]
    },
    price: {
        type: Number,
        required: [true, "{PATH} is required"],
        min: [1, "cannot be 0"]
    },
    description: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [5, "{PATH} must have at least 5 chars"]
    }
}, { timestamps: true })

const Product = mongoose.model("Product", ProductManagerSchema)
module.exports = Product