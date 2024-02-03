const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        minLength: [10, "{PATH} must have at least 10 chars"]
    },
    punchline: {
        type: String,
        minLength: [3, "{PATH} must have at least 3 chars"]
    }
}, { timestamps: true })

const Joke = mongoose.model("Joke", JokeSchema)
module.exports = Joke